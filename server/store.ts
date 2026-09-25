import { defineEventHandler, readBody } from "h3";

// In-memory shared state for serverless lifetime
export type AccessRecord = {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  requestedAt: number;
  status: "pending" | "approved" | "rejected";
  note?: string;
};

// Global shared database store across serverless requests
let globalRecords: Record<string, AccessRecord> = {
  "varmint-aqua-early@duck.com": {
    id: "req_admin_master",
    email: "varmint-aqua-early@duck.com",
    name: "Administrator",
    requestedAt: Date.now(),
    status: "approved",
    note: "System Administrator",
  },
};

let globalWhitelist: string[] = ["varmint-aqua-early@duck.com"];

const ADMIN_PASSWORD_HASH =
  "a1565ed260e2ffc7bc621b55588ea8c0b8077496ea0c6d9a84b385071d40d14c";

async function sha256Hex(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text.trim());
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function getGlobalStore() {
  return {
    records: globalRecords,
    whitelist: globalWhitelist,
    isApproved: (email: string) => {
      const clean = email.toLowerCase().trim();
      if (clean === "varmint-aqua-early@duck.com") return true;
      if (
        globalWhitelist.some(
          (w) => w === clean || (w.startsWith("@") && clean.endsWith(w)),
        )
      ) {
        return true;
      }
      return globalRecords[clean]?.status === "approved";
    },
    addRecord: (record: Omit<AccessRecord, "id" | "requestedAt">) => {
      const clean = record.email.toLowerCase().trim();
      const existing = globalRecords[clean];
      const isWhitelisted =
        clean === "varmint-aqua-early@duck.com" ||
        globalWhitelist.some(
          (w) => w === clean || (w.startsWith("@") && clean.endsWith(w)),
        );

      const status =
        isWhitelisted || existing?.status === "approved"
          ? "approved"
          : (existing?.status || record.status || "pending");

      const item: AccessRecord = {
        id: existing?.id || `req_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        email: clean,
        name: record.name || clean.split("@")[0],
        avatar: record.avatar,
        requestedAt: existing?.requestedAt || Date.now(),
        status,
        note: record.note || existing?.note,
      };

      globalRecords[clean] = item;
      return item;
    },
    approve: (email: string) => {
      const clean = email.toLowerCase().trim();
      if (globalRecords[clean]) {
        globalRecords[clean].status = "approved";
      } else {
        globalRecords[clean] = {
          id: `req_${Date.now()}`,
          email: clean,
          name: clean.split("@")[0],
          requestedAt: Date.now(),
          status: "approved",
        };
      }
      if (!globalWhitelist.includes(clean)) {
        globalWhitelist.push(clean);
      }
      return globalRecords[clean];
    },
    reject: (email: string) => {
      const clean = email.toLowerCase().trim();
      if (globalRecords[clean]) {
        globalRecords[clean].status = "rejected";
      }
      globalWhitelist = globalWhitelist.filter((w) => w !== clean);
      return globalRecords[clean];
    },
    addWhitelist: (entry: string) => {
      const clean = entry.toLowerCase().trim();
      if (!globalWhitelist.includes(clean)) {
        globalWhitelist.push(clean);
      }
    },
    removeWhitelist: (entry: string) => {
      const clean = entry.toLowerCase().trim();
      globalWhitelist = globalWhitelist.filter((w) => w !== clean);
    },
  };
}

export { ADMIN_PASSWORD_HASH, sha256Hex };
