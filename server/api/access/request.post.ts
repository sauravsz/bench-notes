import { defineEventHandler, readBody } from "h3";
import { getGlobalStore } from "../../store";

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    email: string;
    name?: string;
    avatar?: string;
  }>(event);

  if (!body?.email || !body.email.includes("@")) {
    return { ok: false, error: "Valid email address is required" };
  }

  const store = getGlobalStore();
  const record = store.addRecord({
    email: body.email,
    name: body.name || body.email.split("@")[0],
    avatar: body.avatar,
    status: "pending",
  });

  return {
    ok: true,
    record,
    status: record.status,
    isApproved: store.isApproved(body.email),
  };
});
