#!/usr/bin/env node
/**
 * Brand-asset gate shared by browser smoke tests and CLI check.
 */
import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { readOgSite } from "./pwa-shared.mjs";

export const OG_SITE_REL_PATH = "public/site.json";
export const siteHasCustomCard = (site) => Boolean(site?.image || site?.card);

export const MAX_CARD_BYTES = 600 * 1024;

export const OG_PENDING_REL_PATH = ".cache/og-pending";
export const OG_PENDING_MAX_AGE_MS = 10 * 60 * 1000;

export function siteDeclaresOgTypeGame(site) {
  return String(site?.type ?? "").toLowerCase() === "x:game";
}

export function ogPendingActive(workspaceRoot, now = Date.now()) {
  const marker = join(workspaceRoot, OG_PENDING_REL_PATH);
  try {
    const stat = statSync(marker);
    return now - stat.mtimeMs < OG_PENDING_MAX_AGE_MS;
  } catch {
    return false;
  }
}

export function computeBrandWarnings({
  hasCanvas,
  workspaceRoot = "/workspace",
  now = Date.now(),
  cardRequired = false,
}) {
  if (ogPendingActive(workspaceRoot, now)) {
    return [];
  }
  return brandWarningsOnDisk({ hasCanvas, workspaceRoot, cardRequired });
}

function brandWarningsOnDisk({
  hasCanvas,
  workspaceRoot = "/workspace",
  cardRequired = false,
}) {
  const site = readOgSite(workspaceRoot);
  const cardPath = [
    join(workspaceRoot, "public/og.jpg"),
    join(workspaceRoot, "public/og.png"),
  ].find((p) => existsSync(p));

  const warnings = [];

  if (cardPath === undefined) {
    if (hasCanvas) {
      warnings.push(
        "BRAND WARNING: public/og.jpg is missing. Visually rich apps are not done without a custom share card.",
      );
      if (!siteDeclaresOgTypeGame(site)) {
        warnings.push(
          'BRAND WARNING: site.json must specify `"type": "x:game"` or og:type for games.',
        );
      }
    } else if (cardRequired) {
      warnings.push(
        "BRAND WARNING: public/og.jpg is missing and this pass exists to produce one.",
      );
    } else {
      warnings.push(
        "BRAND NOTE: no custom public/og.jpg. plain utilities keep the placeholder.",
      );
    }
  } else {
    try {
      const size = statSync(cardPath).size;
      if (size > MAX_CARD_BYTES) {
        const kb = Math.round(size / 1024);
        warnings.push(
          `BRAND WARNING: ${cardPath} is over 600 KB (${kb} KB) — max allowed is ${MAX_CARD_BYTES / 1024} KB. Recompress.`,
        );
      }
    } catch {
      // file disappeared
    }

    if (!siteHasCustomCard(site)) {
      warnings.push(
        'BRAND WARNING: card image exists on disk but site.json is missing `"card": "custom"`.',
      );
    }

    if (hasCanvas) {
      if (!siteDeclaresOgTypeGame(site)) {
        warnings.push(
          'BRAND WARNING: site.json must specify `"type": "x:game"` for canvas apps.',
        );
      }
      const bannerPath = join(workspaceRoot, "public/x-banner.jpg");
      if (!existsSync(bannerPath)) {
        warnings.push("BRAND WARNING: missing public/x-banner.jpg for game card.");
      } else {
        try {
          const bannerSize = statSync(bannerPath).size;
          if (bannerSize > MAX_CARD_BYTES) {
            const bannerKb = Math.round(bannerSize / 1024);
            warnings.push(
              `BRAND WARNING: public/x-banner.jpg is over 600 KB (${bannerKb} KB).`,
            );
          }
        } catch {
          // ignore
        }
      }
    }
  }

  return warnings;
}

export function parseBrandCheckArgs(argv) {
  let game = false;
  let root = null;
  let placeholderOk = false;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--game") {
      game = true;
    } else if (arg === "--placeholder-ok") {
      placeholderOk = true;
    } else if (arg === "--root") {
      if (i + 1 >= argv.length) {
        return { error: "--root needs a directory" };
      }
      root = argv[i + 1];
      i += 1;
    } else {
      return { error: `unexpected argument: ${arg}` };
    }
  }

  return { game, root, placeholderOk };
}

function isBrandWarning(message) {
  return message.startsWith("BRAND WARNING:");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const parsed = parseBrandCheckArgs(process.argv.slice(2));
  if (parsed.error) {
    console.error(JSON.stringify({ ok: false, error: parsed.error }));
    process.exit(1);
  }

  const workspaceRoot = parsed.root ?? process.cwd();
  const hasCanvas = parsed.game;
  const cardRequired = !parsed.placeholderOk;

  const pending = ogPendingActive(workspaceRoot);
  const messages = brandWarningsOnDisk({
    hasCanvas,
    workspaceRoot,
    cardRequired: hasCanvas ? true : cardRequired,
  });

  const hasWarnings = messages.some(isBrandWarning);
  const ok = !hasWarnings;

  const result = {
    ok,
    pending,
    warnings: messages.length,
    workspaceRoot,
    messages,
  };

  console.log(JSON.stringify(result));
  process.exit(ok ? 0 : 1);
}
