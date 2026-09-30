/**
 * Shared PWA & Open Graph metadata utilities for Bench Notes.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

export const DEFAULT_APP_NAME = "Bench Notes";

const OG_SITE_REL_PATH = "public/site.json";

const SHARE_META_KEYS = new Set([
  "twitter:card",
  "twitter:site",
  "twitter:creator",
  "twitter:title",
  "twitter:description",
  "twitter:image",
  "og:title",
  "og:description",
  "og:image",
  "og:image:width",
  "og:image:height",
  "og:type",
]);

export function escapeHtml(str) {
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function unescapeHtml(str) {
  return String(str ?? "")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&");
}

export function appNameFromHost(host) {
  return DEFAULT_APP_NAME;
}

export function isInstallQuery(url) {
  const query = String(url ?? "").split("?", 2)[1] ?? "";
  const params = new URLSearchParams(query);
  const install = params.get("install");
  const platform = (params.get("platform") ?? "").toLowerCase();
  return (install === "1" || install === "true") && platform === "ios";
}

export function isDocumentPath(pathname) {
  const path = String(pathname ?? "");
  return (
    !path.startsWith("/app-pwa/") &&
    !path.startsWith("/api/") &&
    !path.startsWith("/@") &&
    !path.startsWith("/node_modules") &&
    !/\.[a-z0-9]+$/i.test(path)
  );
}

export function acceptsHtml(accept) {
  const value = String(accept ?? "");
  return value === "" || value.includes("text/html") || value.includes("*/*");
}

export function stripInstallParams(url) {
  const [path = "/", query = ""] = String(url ?? "/").split("?", 2);
  const params = new URLSearchParams(query);
  params.delete("install");
  params.delete("platform");
  const rest = params.toString();
  return rest ? `${path}?${rest}` : path;
}

export function renderInstallPageHtml(template, { host, url } = {}) {
  return String(template)
    .replaceAll("{{APP_NAME}}", escapeHtml(appNameFromHost(host)))
    .replaceAll("{{APP_URL}}", escapeHtml(stripInstallParams(url)));
}

export function renderWebManifest(hostHeader) {
  const name = appNameFromHost(hostHeader);
  return JSON.stringify(
    {
      name,
      short_name: name,
      id: "/",
      start_url: "/",
      scope: "/",
      display: "standalone",
      background_color: "#090909",
      theme_color: "#090909",
      icons: [
        {
          src: "/app-pwa/icon-180.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
    null,
    2,
  );
}

export function pwaHeadTags(appName = DEFAULT_APP_NAME) {
  return [
    ["manifest", '<link rel="manifest" href="/app-pwa/manifest.webmanifest">'],
    ["apple-touch-icon", '<link rel="apple-touch-icon" href="/app-pwa/icon-180.png">'],
    [
      "apple-mobile-web-app-title",
      `<meta name="apple-mobile-web-app-title" content="${escapeHtml(appName)}">`,
    ],
    [
      "apple-mobile-web-app-status-bar-style",
      '<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">',
    ],
    ["theme-color", '<meta name="theme-color" content="#090909">'],
  ];
}

export function readOgSite(cwd = process.cwd()) {
  for (const rel of ["src/lib/og/site.json", "public/site.json"]) {
    try {
      const raw = readFileSync(join(cwd, rel), "utf8");
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return parsed;
      }
    } catch {
      // try next
    }
  }
  return {};
}

export function ogCardPublicPath(cwd = process.cwd()) {
  if (existsSync(join(cwd, "public/og.jpg"))) return "/og.jpg";
  if (existsSync(join(cwd, "public/og.png"))) return "/og.png";
  return "";
}

export function snapshotOgIdentity(cwd = process.cwd()) {
  const site = { ...readOgSite(cwd) };
  const disk = ogCardPublicPath(cwd);
  if (disk) {
    site.card = "custom";
    site.image = disk;
  }
  return { site };
}

export function titleFromDocument(html) {
  const match = String(html ?? "").match(/<title\b[^>]*>([^<]*)<\/title>/i);
  return match ? unescapeHtml(match[1]).trim() : "";
}

export function appOgHeadTags({
  host = "",
  appName = DEFAULT_APP_NAME,
  site = {},
  documentTitle = "",
} = {}) {
  const title = documentTitle || String(site.title ?? "").trim() || appName;
  const tags = [
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta property="og:title" content="${escapeHtml(title)}">`,
  ];
  const description = String(site.description ?? "").trim();
  if (description) {
    tags.push(`<meta property="og:description" content="${escapeHtml(description)}">`);
  }
  return tags;
}

export function stripShareMetaTags(html) {
  return String(html).replace(/<meta\b[^>]*>/gi, (tag) => {
    const attrs = [...tag.matchAll(/\b(?:property|name)\s*=\s*["']([^"']+)["']/gi)];
    for (const match of attrs) {
      if (SHARE_META_KEYS.has(String(match[1]).toLowerCase())) return "";
    }
    return tag;
  });
}

function insertAfterHeadOpen(html, snippet) {
  if (/<head\b[^>]*>/i.test(html)) {
    return html.replace(/<head\b[^>]*>/i, (open) => `${open}${snippet}`);
  }
  if (/<html\b[^>]*>/i.test(html)) {
    return html.replace(/<html\b[^>]*>/i, (open) => `${open}<head>${snippet}</head>`);
  }
  return `<!doctype html><html><head>${snippet}</head>${html}`;
}

function insertBeforeHeadClose(html, snippet) {
  if (/<\/head>/i.test(html)) return html.replace(/<\/head>/i, `${snippet}</head>`);
  return insertAfterHeadOpen(html, snippet);
}

export function normalizeHeadContext(ctx = {}) {
  const cwd = ctx.cwd ?? process.cwd();
  const site = snapshotOgIdentity(cwd).site;
  return {
    appName: DEFAULT_APP_NAME,
    host: ctx.host ?? "",
    cwd,
    site,
  };
}

export function injectPwaHead(html, ctx = {}) {
  if (typeof html !== "string") return html;
  const { site, host, cwd } = normalizeHeadContext(ctx);
  const documentTitle = titleFromDocument(html);
  let next = stripShareMetaTags(html);

  const missing = pwaHeadTags(DEFAULT_APP_NAME)
    .filter(([key]) => {
      if (key === "manifest") return !next.includes('href="/app-pwa/manifest.webmanifest"');
      if (key === "apple-touch-icon") return !next.includes('href="/app-pwa/icon-180.png"');
      return !next.includes(`name="${key}"`);
    })
    .map(([, tag]) => tag);

  next = insertAfterHeadOpen(
    next,
    appOgHeadTags({ host, appName: DEFAULT_APP_NAME, site, documentTitle }).join(""),
  );

  if (missing.length === 0) return next;
  return insertBeforeHeadClose(next, missing.join(""));
}

function findHeadClose(buf) {
  const at = buf.toString("latin1").search(/<\/head>/i);
  return at;
}

export function createHeadInjector(ctx = {}) {
  const normalized = normalizeHeadContext(ctx);

  /** @type {Buffer[]} */
  let pending = [];
  let done = false;

  const apply = (html) =>
    injectPwaHead(html, {
      appName: normalized.appName,
      host: normalized.host,
      cwd: normalized.cwd,
      site: normalized.site,
    });

  return {
    push(chunk) {
      const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
      if (done) return [buf];
      pending.push(buf);
      const joined = Buffer.concat(pending);
      const at = findHeadClose(joined);
      if (at === -1) return [];
      done = true;
      pending = [];
      const closeLen = joined.toString("latin1", at).match(/^<\/head>/i)[0].length;
      const head = apply(joined.subarray(0, at + closeLen).toString("utf8"));
      return [Buffer.concat([Buffer.from(head, "utf8"), joined.subarray(at + closeLen)])];
    },
    flush() {
      if (done || pending.length === 0) return [];
      const rest = Buffer.concat(pending);
      pending = [];
      done = true;
      return [Buffer.from(apply(rest.toString("utf8")), "utf8")];
    },
  };
}
