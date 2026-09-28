import { defineEventHandler, readBody } from "h3";
import { getGlobalStore } from "../../store";

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    code: string;
    email: string;
    name?: string;
  }>(event);

  if (!body?.code || !body?.email) {
    return { ok: false, error: "Access passcode and email are required" };
  }

  const store = getGlobalStore();
  const res = store.verifyPasscode(body.code, body.email, body.name);

  return res;
});
