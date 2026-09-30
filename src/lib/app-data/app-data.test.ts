import { afterEach, beforeEach, describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  callTool,
  failureMemoSize,
  isConnectorTokenReady,
} from "./client.server.ts";
import { ConnectorType, GoogleCalendarTools } from "./types.ts";
import type { ToolArgs } from "./types.ts";
import { isLoginRequired, redirectToLoginIfRequired } from "./login.ts";
import { classifyCallToolError } from "./errors.ts";
import type { CallToolResult } from "./types.ts";

type WindowStub = {
  location: { assign: (url: string) => void; href: string };
  self?: unknown;
  top?: unknown;
  open?: (url: string, target: string) => unknown;
};

function withWindow<T>(stub: WindowStub, fn: () => T): T {
  const previous = globalThis.window;
  try {
    (globalThis as unknown as { window?: WindowStub }).window = stub;
    return fn();
  } finally {
    if (previous === undefined) {
      delete (globalThis as unknown as { window?: WindowStub }).window;
    } else {
      globalThis.window = previous;
    }
  }
}

function fakeJwt(claims: Record<string, unknown>): string {
  const header = Buffer.from(JSON.stringify({ alg: "none", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(JSON.stringify(claims)).toString("base64url");
  return `${header}.${payload}.sig`;
}

async function withStubbedGate(
  status: number,
  body: Record<string, unknown>,
  run: (calls: () => number) => Promise<void>,
): Promise<void> {
  process.env.APP_CONNECTORS_URL = "https://connectors.invalid.example";
  const realFetch = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = (async () => {
    calls += 1;
    return new Response(JSON.stringify(body), {
      status,
      headers: { "content-type": "application/json" },
    });
  }) as typeof globalThis.fetch;
  try {
    await run(() => calls);
  } finally {
    globalThis.fetch = realFetch;
    delete process.env.APP_CONNECTORS_URL;
  }
}

describe("callTool failure memo", () => {
  const options = {
    connectorType: ConnectorType.GoogleDrive,
    token: fakeJwt({ sub: "p", iat: 1, exp: 2 }),
  };

  it("memoizes 400s per unique tool + args hash so repeated calls short-circuit", async () => {
    await withStubbedGate(400, { errorMessage: "bad query" }, async (calls) => {
      const initialSize = failureMemoSize();
      const r1 = await callTool("google_drive_search", { query: "bad" }, options);
      assert.equal(r1.ok, false);
      assert.equal(calls(), 1);
      assert.equal(failureMemoSize(), initialSize + 1);

      const r2 = await callTool("google_drive_search", { query: "bad" }, options);
      assert.equal(r2.ok, false);
      assert.equal(r2.errorMessage, "bad query");
      assert.equal(calls(), 1);
    });
  });

  it("distinguishes cache entries by arguments hash", async () => {
    await withStubbedGate(400, { errorMessage: "bad query" }, async (calls) => {
      await callTool("google_drive_search", { query: "a" }, options);
      assert.equal(calls(), 1);

      await callTool("google_drive_search", { query: "b" }, options);
      assert.equal(calls(), 2);
    });
  });

  it("distinguishes cache entries by tool name", async () => {
    await withStubbedGate(400, { errorMessage: "bad query" }, async (calls) => {
      await callTool("google_drive_search", {}, options);
      assert.equal(calls(), 1);

      await callTool("google_drive_list", {}, options);
      assert.equal(calls(), 2);
    });
  });

  it("invalidates memoized failures when the bearer token changes", async () => {
    const tokenA = fakeJwt({ sub: "p", iat: 1, exp: 2 });
    const tokenB = fakeJwt({ sub: "p", iat: 3, exp: 4 });

    await withStubbedGate(400, { errorMessage: "bad query" }, async (calls) => {
      const r1 = await callTool("google_drive_search", { query: "x" }, {
        connectorType: ConnectorType.GoogleDrive,
        token: tokenA,
      });
      assert.equal(r1.ok, false);
      assert.equal(calls(), 1);

      await callTool("google_drive_search", { query: "x" }, {
        connectorType: ConnectorType.GoogleDrive,
        token: tokenA,
      });
      assert.equal(calls(), 1);

      const r3 = await callTool("google_drive_search", { query: "x" }, {
        connectorType: ConnectorType.GoogleDrive,
        token: tokenB,
      });
      assert.equal(r3.ok, false);
      assert.equal(calls(), 2);
    });
  });

  it("never memoizes 5xx errors so transient gateway flakes can recover", async () => {
    await withStubbedGate(502, { errorMessage: "bad gateway" }, async (calls) => {
      const initialSize = failureMemoSize();
      const r1 = await callTool("google_drive_search", { query: "x" }, options);
      assert.equal(r1.ok, false);
      assert.equal(calls(), 1);
      assert.equal(failureMemoSize(), initialSize);

      await callTool("google_drive_search", { query: "x" }, options);
      assert.equal(calls(), 2);
    });
  });

  it("never memoizes login-required 401s", async () => {
    process.env.APP_PROJECT_ID = "proj-1";
    try {
      await withStubbedGate(401, { errorMessage: "login required" }, async (calls) => {
        const options = {
          connectorType: ConnectorType.GoogleDrive,
          token: fakeJwt({ sub: "p", iat: 1, exp: 2 }),
        };
        const r1 = await callTool("google_drive_search", {}, options);
        assert.equal(r1.ok, false);
        assert.equal(r1.loginRequired, true);
        assert.equal(calls(), 1);

        await callTool("google_drive_search", {}, options);
        assert.equal(calls(), 2);
      });
    } finally {
      delete process.env.APP_PROJECT_ID;
    }
  });
});

describe("callTool in the workspace preview vs deployed", () => {
  const options = { connectorType: ConnectorType.GoogleDrive };
  const savedEnvToken = process.env.APP_CONNECTOR_ACCESS_TOKEN;

  beforeEach(() => {
    delete process.env.APP_CONNECTOR_ACCESS_TOKEN;
    delete process.env.APP_PROJECT_ID;
  });
  afterEach(() => {
    if (savedEnvToken === undefined) {
      delete process.env.APP_CONNECTOR_ACCESS_TOKEN;
    } else {
      process.env.APP_CONNECTOR_ACCESS_TOKEN = savedEnvToken;
    }
    delete process.env.APP_PROJECT_ID;
  });

  it("returns pending (no loginRequired) when the preview has no token yet", async () => {
    const result = await callTool("google_drive_search", {}, options);
    assert.equal(result.ok, false);
    assert.equal(result.loginRequired, undefined);
    assert.equal(result.isPending, true);
    assert.equal(result.errorMessage, "Data connector is connecting…");
    assert.equal(isConnectorTokenReady(), false);
  });

  it("returns a plain error (no sign-in CTA) when a deployed app has no token", async () => {
    process.env.APP_PROJECT_ID = "proj-1";
    const result = await callTool("google_drive_search", {}, options);
    assert.equal(result.ok, false);
    assert.equal(result.loginRequired, undefined);
    assert.equal(result.isPending, undefined);
    assert.equal(result.errorMessage, "No connector access token available");
  });

  it("strips loginRequired on a preview even if the gate responds 401", async () => {
    await withStubbedGate(401, { errorMessage: "login required" }, async (calls) => {
      process.env.APP_CONNECTOR_ACCESS_TOKEN = fakeJwt({ sub: "p", iat: 1, exp: 2 });
      assert.equal(isConnectorTokenReady(), true);

      const result = await callTool("google_drive_search", {}, options);
      assert.equal(result.ok, false);
      assert.equal(result.loginRequired, undefined);
      assert.equal(result.isPending, true);
      assert.equal(result.errorMessage, "Data connector is connecting…");
      assert.equal(calls(), 1);

      process.env.APP_CONNECTOR_ACCESS_TOKEN = fakeJwt({ sub: "p", iat: 3, exp: 4 });
      assert.equal(isConnectorTokenReady(), true);
    });
  });

  it("keeps loginRequired for a gate 401 on a deployed app", async () => {
    process.env.APP_PROJECT_ID = "proj-1";
    await withStubbedGate(401, { errorMessage: "login required" }, async () => {
      const result = await callTool("google_drive_search", {}, {
        ...options,
        token: fakeJwt({ sub: "p", iat: 1, exp: 2 }),
      });
      assert.equal(result.ok, false);
      assert.equal(result.loginRequired, true);
      assert.equal(result.isPending, undefined);
    });
  });
});

describe("callTool", () => {
  it("resolves ok:false for non-serializable args instead of rejecting", async () => {
    process.env.APP_CONNECTORS_URL = "https://connectors.invalid.example";
    try {
      const circular: Record<string, unknown> = {};
      circular.self = circular;
      const result = await callTool(
        "google_drive_search",
        circular as unknown as ToolArgs<"google_drive_search">,
        {
          connectorType: ConnectorType.GoogleDrive,
          token: fakeJwt({ sub: "p", iat: 1, exp: 2 }),
        },
      );
      assert.equal(result.ok, false);
      assert.match(result.errorMessage ?? "", /Failed to serialize/);
    } finally {
      delete process.env.APP_CONNECTORS_URL;
    }
  });
});

describe("isLoginRequired", () => {
  it("returns true when loginRequired is set", () => {
    assert.equal(isLoginRequired({ ok: false, loginRequired: true }), true);
  });

  it("returns false on success or non-login failures", () => {
    assert.equal(isLoginRequired({ ok: true, data: {} }), false);
    assert.equal(isLoginRequired({ ok: false, errorMessage: "boom" }), false);
    assert.equal(isLoginRequired(undefined), false);
    assert.equal(isLoginRequired(null), false);
  });
});

describe("redirectToLoginIfRequired", () => {
  it("navigates top window when top-level (not framed)", () => {
    let assigned = "";
    const target = withWindow(
      {
        location: {
          assign(url: string) {
            assigned = url;
          },
          href: "https://my-app.example.com/current",
        },
      },
      () =>
        redirectToLoginIfRequired({
          ok: false,
          loginRequired: true,
          loginUrl: "https://gate.example.com/__gate/signin?return_to=x",
        }),
    );
    assert.equal(target, true);
    assert.equal(assigned, "https://gate.example.com/__gate/signin?return_to=x");
  });

  it("returns true when loginUrl is set", () => {
    let target = "";
    const did = withWindow(
      {
        location: {
          assign(url: string) {
            target = url;
          },
          href: "https://my-app.example.com/current",
        },
      },
      () =>
        redirectToLoginIfRequired({
          ok: false,
          loginRequired: true,
          loginUrl: "https://gate.example.com/__gate/signin?return_to=x",
        }),
    );
    assert.equal(did, true);
    assert.equal(target, "https://gate.example.com/__gate/signin?return_to=x");
  });

  it("opens a new tab instead of navigating when framed", () => {
    let assigned = "";
    let opened = "";
    const openedTab = { opener: "placeholder" as unknown };
    const did = withWindow(
      {
        self: {},
        top: {},
        open(url: string) {
          opened = url;
          return openedTab;
        },
        location: {
          assign(url: string) {
            assigned = url;
          },
          href: "https://my-app.example.com/current",
        },
      },
      () =>
        redirectToLoginIfRequired({
          ok: false,
          loginRequired: true,
          loginUrl: "https://gate.example.com/__gate/signin?return_to=x",
        }),
    );
    assert.equal(did, true);
    assert.equal(opened, "https://gate.example.com/__gate/signin?return_to=x");
    assert.equal(openedTab.opener, null);
    assert.equal(assigned, "");
  });

  it("navigates top window when window.self === window.top", () => {
    let assigned = "";
    const sentinel = {};
    const did = withWindow(
      {
        self: sentinel,
        top: sentinel,
        location: {
          assign(url: string) {
            assigned = url;
          },
          href: "https://my-app.example.com/current",
        },
      },
      () =>
        redirectToLoginIfRequired({
          ok: false,
          loginRequired: true,
          loginUrl: "https://gate.example.com/__gate/signin?return_to=x",
        }),
    );
    assert.equal(did, true);
    assert.equal(assigned, "https://gate.example.com/__gate/signin?return_to=x");
  });

  it("returns false when the result has no loginUrl", () => {
    let assigned = "";
    const did = withWindow(
      {
        location: {
          assign(url: string) {
            assigned = url;
          },
          href: "https://my-app.example.com/current",
        },
      },
      () =>
        redirectToLoginIfRequired({
          ok: false,
          loginRequired: true,
        }),
    );
    assert.equal(did, false);
    assert.equal(assigned, "");
  });

  it("returns false when window is undefined (SSR)", () => {
    const did = redirectToLoginIfRequired({
      ok: false,
      loginRequired: true,
      loginUrl: "https://gate.example.com/__gate/signin?return_to=x",
    });
    assert.equal(did, false);
  });
});

describe("GoogleCalendarTools", () => {
  it("exposes the expected tool names as constants", () => {
    assert.equal(GoogleCalendarTools.ListEvents, "google_calendar_list_events");
    assert.equal(GoogleCalendarTools.CreateEvent, "google_calendar_create_event");
  });
});

describe("classifyCallToolError", () => {
  it("returns null when the payload is not an error", () => {
    assert.equal(classifyCallToolError(undefined), null);
    assert.equal(classifyCallToolError(null), null);
    assert.equal(classifyCallToolError({ ok: true, data: {} }), null);
  });

  it("classifies not_connected errors", () => {
    const classified = classifyCallToolError({
      ok: false,
      errorMessage: "Connector not_connected: user must authorize",
    });
    assert.deepEqual(classified, {
      kind: "not_connected",
      message: "Connect this data source to load your data.",
      detail: "Connector not_connected: user must authorize",
    });
  });

  it("classifies failed_precondition errors as not_connected", () => {
    const classified = classifyCallToolError({
      ok: false,
      errorMessage: "FAILED_PRECONDITION: token missing",
    });
    assert.equal(classified?.kind, "not_connected");
  });

  it("classifies rate limit errors", () => {
    const classified = classifyCallToolError({
      ok: false,
      errorMessage: "RESOURCE_EXHAUSTED: rate limit exceeded (429)",
    });
    assert.deepEqual(classified, {
      kind: "rate_limit",
      message: "Rate limit reached. Please wait a moment and try again.",
      detail: "RESOURCE_EXHAUSTED: rate limit exceeded (429)",
    });
  });

  it("classifies permission denied errors", () => {
    const classified = classifyCallToolError({
      ok: false,
      errorMessage: "PERMISSION_DENIED: forbidden",
    });
    assert.deepEqual(classified, {
      kind: "permission_denied",
      message: "Access denied. You may need additional permissions for this data.",
      detail: "PERMISSION_DENIED: forbidden",
    });
  });

  it("classifies not found errors", () => {
    const classified = classifyCallToolError({
      ok: false,
      errorMessage: "NOT_FOUND: calendar 123 does not exist",
    });
    assert.deepEqual(classified, {
      kind: "not_found",
      message: "The requested item was not found.",
      detail: "NOT_FOUND: calendar 123 does not exist",
    });
  });

  it("classifies generic errors as fallback 'error' kind with the original message as detail", () => {
    const classified = classifyCallToolError({
      ok: false,
      errorMessage: "something unexpected exploded",
    });
    assert.deepEqual(classified, {
      kind: "error",
      message: "Something went wrong loading your data.",
      detail: "something unexpected exploded",
    });
  });

  it("falls back to default message when errorMessage is missing", () => {
    const classified = classifyCallToolError({
      ok: false,
    });
    assert.deepEqual(classified, {
      kind: "error",
      message: "Something went wrong loading your data.",
      detail: undefined,
    });
  });

  it("handles CallToolResult union with custom data shapes", () => {
    type Event = { id: string; summary: string };
    const success: CallToolResult<Event[]> = {
      ok: true,
      data: [{ id: "1", summary: "Meeting" }],
    };
    assert.equal(classifyCallToolError(success), null);

    const failure: CallToolResult<Event[]> = {
      ok: false,
      errorMessage: "rate limit exceeded",
    };
    assert.equal(classifyCallToolError(failure)?.kind, "rate_limit");
  });
});
