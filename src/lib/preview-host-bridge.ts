/**
 * Bidirectional postMessage bridge between this preview app (guest in an
 * iframe) and its parent embedder (host).
 */

import { z } from "zod";
import { CONNECTOR_TOKEN_READY_EVENT } from "./app-data/types";
import { resolveParentEmbedderOrigin } from "./preview-embedder-origin";


export const HOST_MSG_TYPE = "app-preview:host";
export const GUEST_MSG_TYPE = "app-preview:guest";

export const NavigateAction = z.object({
  action: z.literal("navigate"),
  path: z.string(),
});

export const HostMessage = z.object({
  type: z.literal(HOST_MSG_TYPE),
  payload: NavigateAction,
});

export const GuestMessage = z.object({
  type: z.literal(GUEST_MSG_TYPE),
  payload: z.discriminatedUnion("action", [
    z.object({
      action: z.literal("ready"),
      url: z.string(),
    }),
    z.object({
      action: z.literal("navigated"),
      url: z.string(),
    }),
    z.object({
      action: z.literal("routes"),
      paths: z.array(z.string()),
    }),
  ]),
});

export type HostMessage = z.infer<typeof HostMessage>;
export type GuestMessage = z.infer<typeof GuestMessage>;

export type RouteNode = {
  path?: string;
  children?: RouteNode[];
};

export function collectRoutePathsFromTree(node: unknown): string[] {
  const paths = new Set<string>();

  function walk(current: unknown, parentPath: string) {
    if (!current || typeof current !== "object") return;
    const n = current as RouteNode;
    let fullPath = parentPath;
    if (typeof n.path === "string") {
      const segment = n.path.replace(/^\/+|\/+$/g, "");
      if (segment) {
        fullPath = parentPath === "/" ? `/${segment}` : `${parentPath}/${segment}`;
      } else if (!parentPath) {
        fullPath = "/";
      }
    }
    if (fullPath) {
      paths.add(fullPath.startsWith("/") ? fullPath : `/${fullPath}`);
    }
    if (Array.isArray(n.children)) {
      for (const child of n.children) {
        walk(child, fullPath || "/");
      }
    }
  }

  walk(node, "");
  return Array.from(paths).sort();
}

export function createPreviewBridge(targetWindow: Window, targetOrigin: string) {
  return {
    post(payload: GuestMessage["payload"]) {
      try {
        targetWindow.postMessage({ type: GUEST_MSG_TYPE, payload }, targetOrigin);
      } catch {
        // Failed post
      }
    },
  };
}

function getFirstAncestorOrigin(win: Window): string | null {
  const loc = win.location;
  if ("ancestorOrigins" in loc && loc.ancestorOrigins && typeof loc.ancestorOrigins === "object" && "item" in loc.ancestorOrigins) {
    const fn = loc.ancestorOrigins.item;
    if (typeof fn === "function") {
      return fn.call(loc.ancestorOrigins, 0);
    }
  }
  return null;
}

export function installPreviewHostBridge(options: {
  navigate: (path: string) => void;
  getRoutePaths?: () => string[];
  windowObj?: Window;
}): () => void {
  const win = options.windowObj ?? (typeof window !== "undefined" ? window : undefined);
  if (!win) return () => {};

  const parentIsSelf = win.parent === win;
  const parentOrigin = resolveParentEmbedderOrigin(
    parentIsSelf,
    win.document.referrer,
    getFirstAncestorOrigin(win),
    win.location.hostname,
  );

  if (!parentOrigin) {
    return () => {};
  }

  const bridge = createPreviewBridge(win.parent, parentOrigin);

  function handleMessage(event: MessageEvent) {
    if (event.origin !== parentOrigin) return;
    const parse = HostMessage.safeParse(event.data);
    if (!parse.success) return;
    const msg = parse.data;
    if (msg.payload.action === "navigate") {
      options.navigate(msg.payload.path);
    }
  }

  win.addEventListener("message", handleMessage);

  bridge.post({
    action: "ready",
    url: `${win.location.pathname}${win.location.search}`,
  });

  if (options.getRoutePaths) {
    try {
      const paths = options.getRoutePaths();
      if (paths.length > 0) {
        bridge.post({ action: "routes", paths });
      }
    } catch {
      // ignore
    }
  }

  const onTokenReady = () => {
    bridge.post({
      action: "navigated",
      url: `${win.location.pathname}${win.location.search}`,
    });
  };
  win.addEventListener(CONNECTOR_TOKEN_READY_EVENT, onTokenReady);

  return () => {
    win.removeEventListener("message", handleMessage);
    win.removeEventListener(CONNECTOR_TOKEN_READY_EVENT, onTokenReady);
  };
}
