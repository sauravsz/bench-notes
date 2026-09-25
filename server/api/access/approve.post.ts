import { defineEventHandler, readBody } from "h3";
import { getGlobalStore, ADMIN_PASSWORD_HASH, sha256Hex } from "../../store";

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    email: string;
    password?: string;
  }>(event);

  if (!body?.email) {
    return { ok: false, error: "Email is required" };
  }

  // Verify admin password if provided
  if (body.password) {
    const hash = await sha256Hex(body.password);
    if (hash !== ADMIN_PASSWORD_HASH) {
      return { ok: false, error: "Unauthorized admin authentication" };
    }
  }

  const store = getGlobalStore();
  const record = store.approve(body.email);

  return {
    ok: true,
    record,
    records: Object.values(store.records),
    whitelist: store.whitelist,
  };
});
