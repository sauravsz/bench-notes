import { defineEventHandler } from "h3";
import { getGlobalStore } from "../../store";

export default defineEventHandler(async () => {
  const store = getGlobalStore();
  return {
    ok: true,
    records: Object.values(store.records),
    whitelist: store.whitelist,
  };
});
