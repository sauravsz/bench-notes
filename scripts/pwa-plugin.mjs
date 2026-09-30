/**
 * Dev/preview (Vite) half of the platform PWA chrome: serves the ?install=1
 * tutorial and the per-app manifest, and injects missing PWA head tags into
 * app documents.
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  acceptsHtml,
  createHeadInjector,
  injectPwaHead,
  isDocumentPath,
  isInstallQuery,
  renderInstallPageHtml,
  renderWebManifest,
  snapshotOgIdentity,
} from "./pwa-shared.mjs";

export const APP_OG_IDENTITY_ID = "virtual:app-og-identity";

const INSTALL_PAGE_PATH = join(dirname(fileURLToPath(import.meta.url)), "install-page.html");

function requestHost(req) {
  const forwarded = req.headers["x-forwarded-host"];
  const host = forwarded ?? req.headers.host ?? req.headers[":authority"];
  return Array.isArray(host) ? host[0] : host;
}

export function renderInstallPage(hostHeader, url = "/") {
  const template = readFileSync(INSTALL_PAGE_PATH, "utf8");
  return renderInstallPageHtml(template, { host: hostHeader, url });
}

function sendHtml(res, html) {
  const body = Buffer.from(html, "utf8");
  res.statusCode = 200;
  res.setHeader("content-type", "text/html; charset=utf-8");
  res.setHeader("cache-control", "no-cache");
  res.setHeader("content-length", String(body.byteLength));
  res.end(body);
}

function servePwa(middlewares) {
  middlewares.use((req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") {
      return next();
    }

    const host = requestHost(req);
    const origin = `http://${host ?? "localhost"}`;
    let parsed;
    try {
      parsed = new URL(req.url ?? "/", origin);
    } catch {
      return next();
    }

    if (isInstallQuery(parsed) && isDocumentPath(parsed.pathname) && acceptsHtml(req.headers)) {
      const html = renderInstallPage(host, req.url ?? "/");
      return sendHtml(res, html);
    }

    if (parsed.pathname === "/app-pwa/manifest.webmanifest" || parsed.pathname === "/manifest.webmanifest") {
      const manifest = renderWebManifest({ hostHeader: host });
      res.statusCode = 200;
      res.setHeader("content-type", "application/manifest+json; charset=utf-8");
      res.setHeader("cache-control", "public, max-age=3600");
      return res.end(manifest);
    }

    next();
  });
}

function wrapHtmlResponses(middlewares, cwd) {
  middlewares.use((req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") {
      return next();
    }

    const host = requestHost(req);
    const origin = `http://${host ?? "localhost"}`;
    let parsed;
    try {
      parsed = new URL(req.url ?? "/", origin);
    } catch {
      return next();
    }

    if (!isDocumentPath(parsed.pathname)) {
      return next();
    }

    const origWrite = res.write;
    const origEnd = res.end;
    const origSetHeader = res.setHeader;

    let chunks = [];
    let isHtml = false;
    let intercepted = true;

    res.setHeader = function (name, value) {
      if (typeof name === "string" && name.toLowerCase() === "content-type") {
        if (typeof value === "string" && value.includes("text/html")) {
          isHtml = true;
        }
      }
      return origSetHeader.apply(this, arguments);
    };

    res.write = function (chunk, ...rest) {
      if (intercepted && chunk) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
        return true;
      }
      return origWrite.apply(this, [chunk, ...rest]);
    };

    res.end = function (chunk, ...rest) {
      if (!intercepted) {
        return origEnd.apply(this, [chunk, ...rest]);
      }
      intercepted = false;

      if (chunk) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
      }

      const body = Buffer.concat(chunks);
      chunks = [];

      if (!isHtml && !acceptsHtml(req.headers)) {
        return origEnd.apply(this, [body, ...rest]);
      }

      const raw = body.toString("utf8");
      const transformed = injectPwaHead(raw, {
        hostHeader: host,
        cwd,
      });

      const out = Buffer.from(transformed, "utf8");
      res.removeHeader("content-length");
      return origEnd.apply(this, [out, ...rest]);
    };

    next();
  });
}

export function pwaPlugin() {
  let cwd = process.cwd();

  return {
    name: "pwa-plugin",
    configResolved(config) {
      cwd = config.root;
    },
    resolveId(id) {
      if (id === APP_OG_IDENTITY_ID) {
        return `\0${APP_OG_IDENTITY_ID}`;
      }
      return null;
    },
    load(id) {
      if (id === `\0${APP_OG_IDENTITY_ID}`) {
        const { site } = snapshotOgIdentity(cwd);
        return `export const appOgIdentity = ${JSON.stringify({ site })};`;
      }
      return null;
    },
    configureServer(server) {
      servePwa(server.middlewares);
    },
    configurePreviewServer(server) {
      servePwa(server.middlewares);
      wrapHtmlResponses(server.middlewares, cwd);
    },
    transformIndexHtml(html, ctx) {
      const host = ctx.req ? requestHost(ctx.req) : undefined;
      return injectPwaHead(html, {
        hostHeader: host,
        cwd,
      });
    },
  };
}
