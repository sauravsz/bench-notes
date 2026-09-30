/**
 * Self-hosted Better Auth for THIS app (server-only).
 */
import { betterAuth } from "better-auth";
import { genericOAuth } from "better-auth/plugins";
import { getCookie } from "vinxi/http";
import { Pool } from "pg";
import { getPglite } from "../db/pglite.server";
import { pgliteDialect } from "./pglite-dialect";
import { ensureDbReady } from "../db/bootstrap.server";
import { gateIdentitySessions } from "./gate-session.server";
import {
  AUTH_ISSUER_DEFAULT,
  PREVIEW_ALLOWED_HOSTS,
  PREVIEW_CLIENT_ID,
  PREVIEW_CLIENT_SECRET,
} from "./preview";

// Kick (and share) PGLite bootstrap as soon as the auth server module loads.
void ensureDbReady();

const globalAuthRef = globalThis as typeof globalThis & {
  __appAuthPreviewSecret__?: string;
};
function previewAuthSecret(): string {
  if (!globalAuthRef.__appAuthPreviewSecret__) {
    globalAuthRef.__appAuthPreviewSecret__ = `preview-${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}`;
  }
  return globalAuthRef.__appAuthPreviewSecret__;
}

/** Read an env var, treating empty/whitespace as unset. */
const env = (key: string): string | undefined => {
  const v = process.env[key]?.trim();
  return v || undefined;
};

const authDisabled = env("VITE_AUTH_ENABLED") === "false";

const authIssuer = env("AUTH_ISSUER") ?? AUTH_ISSUER_DEFAULT;
const authClientId = env("AUTH_CLIENT_ID") ?? PREVIEW_CLIENT_ID;
const authClientSecret = env("AUTH_CLIENT_SECRET") ?? PREVIEW_CLIENT_SECRET;

/** True when federated sign-in is active (real auth is enforced). */
export const authConfigured =
  !authDisabled && Boolean(authClientId && authClientSecret);

const explicitBaseURL = env("BETTER_AUTH_URL");
const previewAllowedHosts: string[] = [...PREVIEW_ALLOWED_HOSTS];
const LOCAL_DEV_ORIGINS: string[] = [
  "http://localhost:8080",
  "http://127.0.0.1:8080",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];
const baseURL = explicitBaseURL ?? {
  allowedHosts: previewAllowedHosts,
  protocol: "https",
};

const trustedOrigins: string[] = explicitBaseURL
  ? [explicitBaseURL, ...LOCAL_DEV_ORIGINS]
  : [
      ...LOCAL_DEV_ORIGINS,
      (request: Request) => {
        const origin = request.headers.get("origin");
        if (!origin) return false;
        try {
          const { host } = new URL(origin);
          return previewAllowedHosts.some((h) => host === h || host.endsWith(`.${h}`));
        } catch {
          return false;
        }
      },
    ];

const databaseUrl = env("DATABASE_URL");

const issuerBase = authIssuer.replace(/\/+$/, "");
const authAuthorizationUrl = `${issuerBase}/api/auth/oauth2/authorize`;
const authTokenUrl = `${issuerBase}/api/auth/oauth2/token`;
const authUserInfoUrl = `${issuerBase}/api/auth/oauth2/userinfo`;

const database = databaseUrl
  ? new Pool({ connectionString: databaseUrl })
  : { dialect: pgliteDialect(() => getPglite()), type: "postgres" as const };

/** Session token cookie name. */
export const SESSION_TOKEN_COOKIE = "__Host-app-auth.session_token";

const appOAuthPlugin = authConfigured
  ? genericOAuth({
      config: [
        {
          providerId: "app-google",
          authorizationUrl: authAuthorizationUrl,
          tokenUrl: authTokenUrl,
          userInfoUrl: authUserInfoUrl,
          clientId: authClientId,
          clientSecret: authClientSecret,
          scopes: ["openid", "profile", "email"],
        },
        {
          providerId: "app-x",
          authorizationUrl: authAuthorizationUrl,
          tokenUrl: authTokenUrl,
          userInfoUrl: authUserInfoUrl,
          clientId: authClientId,
          clientSecret: authClientSecret,
          scopes: ["openid", "profile", "email"],
        },
      ],
    })
  : null;

export const auth = betterAuth({
  secret: env("BETTER_AUTH_SECRET") ?? previewAuthSecret(),
  baseURL,
  trustedOrigins,
  database,
  advanced: {
    useSecureCookies: true,
    cookies: {
      session_token: {
        name: SESSION_TOKEN_COOKIE,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    ...(appOAuthPlugin ? [appOAuthPlugin] : []),
    gateIdentitySessions(),
  ],
});

export function readSessionToken(): string | null {
  return getCookie(SESSION_TOKEN_COOKIE) ?? null;
}

export { AUTH_PROVIDERS } from "./providers";
