import { defineEventHandler, readBody, getHeader } from "h3";
import { getGlobalStore, validateAdminAuth } from "../../store";

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    email: string;
    password?: string;
    adminToken?: string;
    note?: string;
  }>(event);

  if (!body?.email) {
    return { ok: false, error: "Email is required" };
  }

  const authHeader = getHeader(event, "authorization");
  const candidate = body.password || body.adminToken || authHeader;
  const isAuthorized = await validateAdminAuth(candidate);

  if (!isAuthorized) {
    return { ok: false, error: "Unauthorized admin authentication" };
  }

  const store = getGlobalStore();
  const record = store.approve(body.email, body.note);

  return {
    ok: true,
    record,
    records: Object.values(store.records),
    whitelist: store.whitelist,
  };
});
