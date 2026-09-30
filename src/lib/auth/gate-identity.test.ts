import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { generateKeyPair, exportJWK, SignJWT } from "jose";
import {
  GATE_IDENTITY_HEADER,
  PREVIEW_GATE_ORIGIN,
  gateIdentityEnabled,
  gateIdentityFromHeaders,
  gateIdentityUserInfo,
  gateTokenAudience,
  sessionBoundToGateIdentity,
  verifyGateIdentityToken,
  type GateIdentity,
  type GateJwks,
} from "./gate-identity.server.ts";

const ISSUER = "https://gate.example.com";

async function makeKey(kid: string) {
  const { privateKey, publicKey } = await generateKeyPair("RS256");
  const jwk = await exportJWK(publicKey);
  jwk.kid = kid;
  jwk.alg = "RS256";
  jwk.use = "sig";
  return { privateKey, jwk };
}

async function signToken(
  key: { privateKey: unknown; jwk: { kid?: string } },
  payload: Record<string, unknown>,
  options: {
    issuer?: string;
    audience?: string;
    expiresIn?: string;
  } = {},
) {
  return new SignJWT(payload as Record<string, unknown>)
    .setProtectedHeader({ alg: "RS256", kid: key.jwk.kid })
    .setIssuer(options.issuer ?? ISSUER)
    .setAudience(options.audience ?? "app:proj-123")
    .setIssuedAt()
    .setExpirationTime(options.expiresIn ?? "5m")
    .sign(key.privateKey as Uint8Array);
}

function staticJwks(keys: GateJwks["keys"]) {
  let calls = 0;
  const fetchImpl = async (): Promise<GateJwks> => {
    calls += 1;
    return { keys };
  };
  return { fetchImpl, getCalls: () => calls };
}

describe("verifyGateIdentityToken", () => {
  it("verifies a valid token signed by an advertised key", async () => {
    const key = await makeKey("k1");
    const { fetchImpl, getCalls } = staticJwks([key.jwk]);
    const token = await signToken(key, {
      sub: "user-123",
      email: "viewer@example.com",
      name: "Viewer",
      team_id: "team-1",
    });
    const result = await verifyGateIdentityToken({
      token,
      issuer: ISSUER,
      audience: "app:proj-123",
      fetchJwks: fetchImpl,
    });
    assert.deepEqual(result, {
      sub: "user-123",
      email: "viewer@example.com",
      name: "Viewer",
      teamId: "team-1",
    });
    assert.equal(getCalls(), 1);
  });

  it("fails when the issuer does not match", async () => {
    const key = await makeKey("k1");
    const { fetchImpl } = staticJwks([key.jwk]);
    const token = await signToken(
      key,
      { sub: "user-123" },
      { issuer: "https://evil.example.com" },
    );
    const result = await verifyGateIdentityToken({
      token,
      issuer: ISSUER,
      audience: "app:proj-123",
      fetchJwks: fetchImpl,
    });
    assert.equal(result, null);
  });

  it("fails when the audience does not match", async () => {
    const key = await makeKey("k1");
    const { fetchImpl } = staticJwks([key.jwk]);
    const token = await signToken(
      key,
      { sub: "user-123" },
      { audience: "app:other-project" },
    );
    const result = await verifyGateIdentityToken({
      token,
      issuer: ISSUER,
      audience: "app:proj-123",
      fetchJwks: fetchImpl,
    });
    assert.equal(result, null);
  });

  it("fails when the token is signed by an unknown key", async () => {
    const keyKnown = await makeKey("k1");
    const keyUnknown = await makeKey("k2");
    const { fetchImpl } = staticJwks([keyKnown.jwk]);
    const token = await signToken(keyUnknown, { sub: "user-123" });
    const result = await verifyGateIdentityToken({
      token,
      issuer: ISSUER,
      audience: "app:proj-123",
      fetchJwks: fetchImpl,
    });
    assert.equal(result, null);
  });

  it("fails when the token is expired", async () => {
    const key = await makeKey("k1");
    const { fetchImpl } = staticJwks([key.jwk]);
    const token = await signToken(
      key,
      { sub: "user-123" },
      { expiresIn: "-1s" },
    );
    const result = await verifyGateIdentityToken({
      token,
      issuer: ISSUER,
      audience: "app:proj-123",
      fetchJwks: fetchImpl,
    });
    assert.equal(result, null);
  });

  it("fails closed on a malformed token string", async () => {
    const key = await makeKey("k1");
    const { fetchImpl } = staticJwks([key.jwk]);
    const result = await verifyGateIdentityToken({
      token: "not-a-jwt",
      issuer: ISSUER,
      audience: "app:proj-123",
      fetchJwks: fetchImpl,
    });
    assert.equal(result, null);
  });

  it("caches the JWKS response across calls", async () => {
    const key = await makeKey("k1");
    const { fetchImpl, getCalls } = staticJwks([key.jwk]);
    const token = await signToken(key, { sub: "user-123" });
    await verifyGateIdentityToken({
      token,
      issuer: ISSUER,
      audience: "app:proj-123",
      fetchJwks: fetchImpl,
    });
    await verifyGateIdentityToken({
      token,
      issuer: ISSUER,
      audience: "app:proj-123",
      fetchJwks: fetchImpl,
    });
    assert.equal(getCalls(), 1);
  });

  it("refetches the JWKS when the kid rotates", async () => {
    const key1 = await makeKey("k1");
    const key2 = await makeKey("k2");
    let currentKeys = [key1.jwk];
    let calls = 0;
    const fetchImpl = async (): Promise<GateJwks> => {
      calls += 1;
      return { keys: currentKeys };
    };

    const token1 = await signToken(key1, { sub: "user-123" });
    const r1 = await verifyGateIdentityToken({
      token: token1,
      issuer: ISSUER,
      audience: "app:proj-123",
      fetchJwks: fetchImpl,
    });
    assert.equal(r1?.sub, "user-123");
    assert.equal(calls, 1);

    currentKeys = [key2.jwk];
    const token2 = await signToken(key2, { sub: "user-456" });
    const r2 = await verifyGateIdentityToken({
      token: token2,
      issuer: ISSUER,
      audience: "app:proj-123",
      fetchJwks: fetchImpl,
    });
    assert.equal(r2?.sub, "user-456");
    assert.equal(calls, 2);
  });
});

describe("gateIdentityFromHeaders", () => {
  it("verifies the header token end to end and fails closed without it", async () => {
    const key = await makeKey("k1");
    const { fetchImpl } = staticJwks([key.jwk]);
    process.env.APP_PROJECT_ID = "proj-123";
    process.env.APP_GATE_ORIGIN = ISSUER;
    try {
      const token = await signToken(key, {
        sub: "user-1",
        email: "viewer@example.com",
      });
      const withToken = await gateIdentityFromHeaders(
        new Headers({ [GATE_IDENTITY_HEADER]: token }),
        fetchImpl,
      );
      assert.equal(withToken?.sub, "user-1");

      const withoutToken = await gateIdentityFromHeaders(
        new Headers(),
        fetchImpl,
      );
      assert.equal(withoutToken, null);
    } finally {
      delete process.env.APP_PROJECT_ID;
      delete process.env.APP_GATE_ORIGIN;
    }
  });

  it("verifies a preview-audience token with no gate env vars via loopback", async () => {
    const key = await makeKey("k-preview");
    const fetchedFrom: string[] = [];
    const fetchImpl = async (url: string): Promise<GateJwks> => {
      fetchedFrom.push(url);
      return { keys: [key.jwk] };
    };
    delete process.env.APP_PROJECT_ID;
    delete process.env.APP_GATE_ORIGIN;
    const token = await signToken(
      key,
      { sub: "user-1" },
      { issuer: "http://127.0.0.1:6014", audience: "preview" },
    );
    const identity = await gateIdentityFromHeaders(
      new Headers({
        host: "localhost",
        [GATE_IDENTITY_HEADER]: token,
      }),
      fetchImpl,
    );
    assert.equal(identity?.sub, "user-1");
    assert.equal(fetchedFrom[0], "http://127.0.0.1:6014/__gate/identity-key");
  });
});

describe("gateIdentityEnabled", () => {
  it("is enabled by default with no gate env vars", () => {
    delete process.env.APP_PROJECT_ID;
    delete process.env.APP_GATE_ORIGIN;
    assert.equal(gateIdentityEnabled(), true);
  });

  it("is disabled when VITE_AUTH_ENABLED is false", () => {
    process.env.VITE_AUTH_ENABLED = "false";
    try {
      assert.equal(gateIdentityEnabled(), false);
    } finally {
      delete process.env.VITE_AUTH_ENABLED;
    }
  });
});

describe("gateIdentityUserInfo", () => {
  it("falls back to a synthetic email and name for sub-only claims", () => {
    assert.deepEqual(
      gateIdentityUserInfo({
        sub: "User-1",
        email: null,
        name: null,
        teamId: null,
      }),
      {
        id: "User-1",
        email: "user-1@viewer.app.invalid",
        emailVerified: false,
        name: "App user",
      },
    );
  });

  it("keeps real claims, lowercasing the email and marking it verified", () => {
    assert.deepEqual(
      gateIdentityUserInfo({
        sub: "user-1",
        email: "Viewer@Example.com",
        name: "Viewer",
        teamId: "team-9",
      }),
      {
        id: "user-1",
        email: "viewer@example.com",
        emailVerified: true,
        name: "Viewer",
      },
    );
  });
});

describe("sessionBoundToGateIdentity", () => {
  const provider = "app-gate";

  it("keeps the session when it is bound to the same gate sub", () => {
    assert.equal(
      sessionBoundToGateIdentity(
        [
          { providerId: "google", accountId: "g-1" },
          { providerId: provider, accountId: "user-1" },
        ],
        "user-1",
        provider,
      ),
      true,
    );
  });

  it("rotates when the session belongs to a different gate sub", () => {
    assert.equal(
      sessionBoundToGateIdentity(
        [{ providerId: provider, accountId: "user-1" }],
        "user-2",
        provider,
      ),
      false,
    );
  });

  it("keeps standard sessions that have no gate binding", () => {
    assert.equal(
      sessionBoundToGateIdentity(
        [{ providerId: "google", accountId: "g-1" }],
        "user-1",
        provider,
      ),
      true,
    );
  });
});
