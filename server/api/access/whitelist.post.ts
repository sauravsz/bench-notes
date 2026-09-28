import { defineEventHandler, readBody, getHeader } from "h3";
import { getGlobalStore, validateAdminAuth } from "../../store";

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    action: "add" | "remove";
    entry: string;
    password?: string;
    adminToken?: string;
  }>(event);

  if (!body?.entry) {
    return { ok: false, error: "Entry is required" };
  }

  const authHeader = getHeader(event, "authorization");
  const candidate = body.password || body.adminToken || authHeader;
  const isAuthorized = await validateAdminAuth(candidate);

  if (!isAuthorized) {
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
