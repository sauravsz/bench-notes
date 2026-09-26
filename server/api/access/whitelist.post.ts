import { defineEventHandler, readBody } from "h3";
import { getGlobalStore, ADMIN_PASSWORD_HASH, sha256Hex } from "../../store";

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    action: "add" | "remove";
    entry: string;
    password?: string;
  }>(event);

  if (!body?.entry) {
    return { ok: false, error: "Entry is required" };
  }

  if (!body?.password) {
    return { ok: false, error: "Admin authentication required" };
  }

  const hash = await sha256Hex(body.password);
  if (hash !== ADMIN_PASSWORD_HASH) {
    return { ok: false, error: "Unauthorized admin authentication" };
  }

  const store = getGlobalStore();
  if (body.action === "add") {
    store.addWhitelist(body.entry);
  } else if (body.action === "remove") {
    store.removeWhitelist(body.entry);
  }

  return {
    ok: true,
    whitelist: store.whitelist,
    records: Object.values(store.records),
  };
});
