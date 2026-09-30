import { createAuthClient } from "better-auth/react";
import { resolveClientBaseUrl } from "./server-url.client";
import { runPreSignInSignOut, runSignOut } from "../../../scripts/sign-out-plan.mjs";
import { AUTH_PROVIDERS, type AuthProviderConfig } from "./providers";

/**
 * Better Auth client for this React SPA (browser-side).
 */
export const authClient = createAuthClient({
  baseURL: resolveClientBaseUrl(),
});

export const { useSession } = authClient;

export const authEnabled: boolean = true;

/** The upstream providers to render sign-in buttons for. */
export { AUTH_PROVIDERS };

const BEARER_KEY = "app-auth.bearer-token";

export function getBearerToken(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage.getItem(BEARER_KEY);
  } catch {
    return null;
  }
}

export function setBearerToken(token: string | null): void {
  if (typeof window === "undefined") return;
  try {
    if (token) {
      window.sessionStorage.setItem(BEARER_KEY, token);
    } else {
      window.sessionStorage.removeItem(BEARER_KEY);
    }
  } catch {
    // Ignore Storage access restrictions
  }
}

export function isEmbeddedPreview(): boolean {
  return false;
}

type PopupMessage = { source: "app-auth-popup"; token: string | null; error?: string };

export async function signIn(
  providerId: string,
  options: {
    callbackURL?: string;
    errorCallbackURL?: string;
    popup?: boolean;
    newUserCallbackURL?: string;
  } = {},
): Promise<{ error?: string }> {
  const provider = AUTH_PROVIDERS.find((p) => p.providerId === providerId);
  if (!provider) {
    return { error: `Unknown provider: ${providerId}` };
  }

  const callbackURL = options.callbackURL ?? (typeof window !== "undefined" ? window.location.href : "/");

  runPreSignInSignOut();

  const res = await authClient.signIn.social({
    provider: provider.idp as "google" | "twitter",
    callbackURL,
    errorCallbackURL: options.errorCallbackURL ?? callbackURL,
    newUserCallbackURL: options.newUserCallbackURL,
  });

  if (res?.error) {
    return { error: res.error.message ?? "Sign-in failed" };
  }

  return {};
}

export async function signOut(): Promise<void> {
  runSignOut();
  setBearerToken(null);
  try {
    await authClient.signOut();
  } catch {
    // Ignore signout network errors
  }
}
