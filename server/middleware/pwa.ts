/**
 * Deployed-app (Nitro) half of the platform PWA chrome. Auto-registered as
 * global h3 middleware because vite.config.ts sets `serverDir: "./server"` —
 * without that option Nitro v3 never scans this directory.
 *
 * - `?install=1&platform=ios` on a document path → the Home Screen tutorial,
 *   bundled into the server build via `?raw`.
 * - `/app-pwa/manifest.webmanifest` → per-app-named manifest.
 * - Other HTML documents → stream-inject PWA + OG head tags at `</head>`.
 */
import installPageTemplate from "../../scripts/install-page.html?raw";
import { appOgIdentity } from "virtual:app-og-identity";
import {
  acceptsHtml,
  createHeadInjector,
  isDocumentPath,
  isInstallQuery,
  renderInstallPageHtml,
  renderWebManifest,
} from "../../scripts/pwa-shared.mjs";

interface AppPwaEvent {
  url: URL;
  req: { method: string; headers: Headers };
}

function requestHost(event: AppPwaEvent): string {
  return (
    event.req.headers.get("x-forwarded-host") ?? event.req.headers.get("host") ?? event.url.host
  );
}

function injectHeadStreaming(response: Response, host: string): Response {
  const injector = createHeadInjector({
    hostHeader: host,
    siteIdentity: appOgIdentity.site,
  });
  const transformed = response.body!.pipeThrough(
    new TransformStream<Uint8Array, Uint8Array>({
      transform(chunk, controller) {
        controller.enqueue(injector.transform(chunk));
      },
      flush(controller) {
        const remaining = injector.flush();
        if (remaining.length > 0) controller.enqueue(remaining);
      },
    }),
  );
  const headers = new Headers(response.headers);
  headers.delete("content-length");
  return new Response(transformed, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default async function pwaMiddleware(
  event: AppPwaEvent,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  if (event.req.method !== "GET" && event.req.method !== "HEAD") {
    return next();
  }

  const { pathname } = event.url;

  if (isInstallQuery(event.url) && isDocumentPath(pathname) && acceptsHtml(event.req.headers)) {
    const html = renderInstallPageHtml(installPageTemplate, {
      host: requestHost(event),
      url: `${event.url.pathname}${event.url.search}`,
    });
    return new Response(html, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-cache",
      },
    });
  }

  if (pathname === "/app-pwa/manifest.webmanifest" || pathname === "/manifest.webmanifest") {
    return new Response(renderWebManifest({ hostHeader: requestHost(event) }), {
      status: 200,
      headers: {
        "content-type": "application/manifest+json; charset=utf-8",
        "cache-control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  }

  const result = await next();

  if (
    result instanceof Response &&
    isDocumentPath(pathname) &&
    acceptsHtml(event.req.headers) &&
    result.headers.get("content-type")?.includes("text/html") &&
    result.body
  ) {
    return injectHeadStreaming(result, requestHost(event));
  }

  return result;
}
