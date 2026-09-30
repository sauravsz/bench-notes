export function env(key: string): string | undefined {
  const v = process.env[key]?.trim();
  return v || undefined;
}

/**
 * Workspace preview vs deployed app.
 */
export function isWorkspacePreview(): boolean {
  return !env("PROJECT_ID") && !env("VERCEL");
}
