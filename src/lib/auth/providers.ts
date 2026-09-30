/**
 * The upstream identity providers this app offers for sign-in.
 */
export type AuthProviderConfig = {
  /** This app's local provider id; also the callback path segment. */
  providerId: string;
  /** Upstream hint the broker forwards to (Better Auth social id). */
  idp: string;
  /** Human label for the sign-in button. */
  label: string;
};

export const AUTH_PROVIDERS: readonly AuthProviderConfig[] = [
  { providerId: "app-google", idp: "google", label: "Google" },
  { providerId: "app-x", idp: "twitter", label: "X" },
];

