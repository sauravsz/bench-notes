import { defineEventHandler, getHeader, getQuery } from "h3";
import { getGlobalStore, validateAdminAuth } from "../../store";

export default defineEventHandler(async (event) => {
  const authHeader = getHeader(event, "authorization");
  const query = getQuery(event);
  const token = (query.token as string) || authHeader;
  const isAuthorized = await validateAdminAuth(token);

  const store = getGlobalStore();

  if (!isAuthorized) {
    return {
      ok: true,
      records: [],
      whitelist: store.whitelist.filter((w) => w.startsWith("@")),
      requiresAuth: true,
    };
  }

  return {
    ok: true,
    records: Object.values(store.records),
    whitelist: store.whitelist,
  };
});
