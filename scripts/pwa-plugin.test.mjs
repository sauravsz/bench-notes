import assert from "node:assert/strict";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  appNameFromHost,
  createHeadInjector,
  injectPwaHead,
  isDocumentPath,
  isInstallQuery,
  pwaHeadTags,
  renderWebManifest,
  snapshotOgIdentity,
  stripInstallParams,
} from "./pwa-shared.mjs";
import { renderInstallPage } from "./pwa-plugin.mjs";

const TEMPLATE_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

test("injects before </head>", () => {
  const html = "<html><head><title>App</title></head><body></body></html>";
  const injected = injectPwaHead(html, { cwd: TEMPLATE_ROOT });
  assert.match(injected, /<link rel="manifest"/);
  assert.match(injected, /<\/head>/);
});

test("renders the manifest with the per-app name", () => {
  const manifest = JSON.parse(renderWebManifest("localhost:5173"));
  assert.equal(manifest.name, "Bench Notes");
  assert.equal(manifest.display, "standalone");
  assert.equal(manifest.icons[0].src, "/app-pwa/icon-180.png");
});

test("detects install query", () => {
  assert.equal(isInstallQuery("http://example.com/?install=1&platform=ios"), true);
  assert.equal(isInstallQuery("http://example.com/?install=1&platform=android"), false);
  assert.equal(isInstallQuery("http://example.com/"), false);
});

test("filters non-document paths", () => {
  assert.equal(isDocumentPath("/"), true);
  assert.equal(isDocumentPath("/topic/intro"), true);
  assert.equal(isDocumentPath("/app-pwa/manifest.webmanifest"), false);
  assert.equal(isDocumentPath("/assets/app.js"), false);
});
