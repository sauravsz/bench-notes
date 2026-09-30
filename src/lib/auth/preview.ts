/**
 * Live-preview fallback credentials for local dev authentication.
 */
export const PREVIEW_AUTH_ORIGIN = "http://127.0.0.1:8080";
export const AUTH_ISSUER_DEFAULT = PREVIEW_AUTH_ORIGIN;
export const PREVIEW_CLIENT_ID = "app-live-preview";
export const PREVIEW_CLIENT_SECRET = "app-live-preview-secret-not-for-production";

export const PREVIEW_ALLOWED_HOSTS: readonly string[] = [
  "localhost",
  "127.0.0.1",
];

