export declare const DEFAULT_APP_NAME: string;
export declare function escapeHtml(value: unknown): string;
export declare function appNameFromHost(hostHeader: string | null | undefined): string;
export declare function isInstallQuery(url: string | null | undefined): boolean;
export declare function isDocumentPath(pathname: string | null | undefined): boolean;
export declare function acceptsHtml(accept: string | null | undefined): boolean;
export declare function stripInstallParams(url: string | null | undefined): string;
export declare function renderInstallPageHtml(
  template: string,
  context?: { host?: string | null; url?: string | null },
): string;
export declare function renderWebManifest(hostHeader: string | null | undefined): string;
export declare function pwaHeadTags(appName?: string): Array<[string, string]>;

export type OgSite = {
  title?: string;
  description?: string;
  type?: string;
  card?: string;
  image?: string;
  banner?: string;
  color?: string;
};

export type AppHeadContext = {
  appName?: string;
  host?: string | null;
  cwd?: string;
  site?: OgSite;
};

export declare function readOgSite(cwd?: string): OgSite;
export declare function ogCardPublicPath(cwd?: string): string;
export declare function snapshotOgIdentity(cwd?: string): { site: OgSite };
export declare function titleFromDocument(html: string): string;
export declare function appOgHeadTags(ctx?: {
  host?: string;
  appName?: string;
  site?: OgSite;
  documentTitle?: string;
  cwd?: string;
}): string[];
export declare function stripShareMetaTags(html: string): string;
export declare function normalizeHeadContext(ctx?: AppHeadContext): {
  appName: string;
  host: string;
  cwd: string;
  site: OgSite;
};
export declare function injectPwaHead(html: string, ctx?: AppHeadContext): string;
export declare function createHeadInjector(ctx?: AppHeadContext): {
  push(chunk: Uint8Array | string): Uint8Array[];
  flush(): Uint8Array[];
};
