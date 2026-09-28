import fs from "node:fs";
import path from "node:path";

export interface AccessRecord {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  requestedAt: number;
  status: "pending" | "approved" | "rejected";
  approvedAt?: number;
  rejectedAt?: number;
  note?: string;
}

export interface AccessStoreData {
  records: Record<string, AccessRecord>;
  whitelist: string[];
}

export const MASTER_ADMIN_EMAIL = "varmint-aqua-early@duck.com";

export const VALID_ADMIN_HASHES = new Set<string>([
  "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918", // sha256 of "admin"
  "a1565ed260e2ffc7bc621b55588ea8c0b8077496ea0c6d9a84b385071d40d14c", // legacy hash
]);

export const DEFAULT_PASSCODES = ["BENCH2026", "BENCH-1872", "MBA2026"];

export async function sha256Hex(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function validateAdminAuth(passwordOrToken?: string): Promise<boolean> {
  if (!passwordOrToken || typeof passwordOrToken !== "string") return false;
  const trimmed = passwordOrToken.trim();
  if (trimmed === "admin" || trimmed === process.env.ADMIN_PASSWORD) return true;
  
  // Check token if passed as Bearer token
  const token = trimmed.startsWith("Bearer ") ? trimmed.slice(7).trim() : trimmed;
  if (token === "admin" || token === process.env.ADMIN_PASSWORD) return true;

  const hash = await sha256Hex(token);
  if (VALID_ADMIN_HASHES.has(hash)) return true;
  if (process.env.ADMIN_PASSWORD_HASH && hash === process.env.ADMIN_PASSWORD_HASH) return true;

  return false;
}

const TMP_STORE_PATH = path.join(
  process.env.TMPDIR || process.env.TEMP || "/tmp",
  "bench_notes_access_v2.json"
);

function loadFromLocalDisk(): AccessStoreData | null {
  try {
    if (fs.existsSync(TMP_STORE_PATH)) {
      const raw = fs.readFileSync(TMP_STORE_PATH, "utf-8");
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object" && parsed.records && parsed.whitelist) {
        return parsed;
      }
    }
  } catch {
    // ignore read error on restricted environments
  }
  return null;
}

function saveToLocalDisk(data: AccessStoreData): void {
  try {
    fs.writeFileSync(TMP_STORE_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch {
    // ignore write error on restricted environments
  }
}

// Remote KV integration if environment variables are provided
async function saveToRemoteKv(data: AccessStoreData): Promise<void> {
  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!kvUrl || !kvToken) return;

  try {
    await fetch(`${kvUrl}/set/benchnotes:store`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${kvToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(JSON.stringify(data)),
    });
  } catch {
    // non-fatal
  }
}

class AccessStore {
  public records: Record<string, AccessRecord> = {};
  public whitelist: string[] = [];

  constructor() {
    this.initDefault();
  }

  private initDefault() {
    const diskData = loadFromLocalDisk();
    if (diskData) {
      this.records = diskData.records || {};
      this.whitelist = diskData.whitelist || [];
    } else {
      this.whitelist = [MASTER_ADMIN_EMAIL];
      this.records[MASTER_ADMIN_EMAIL] = {
        id: "req_admin_master",
        email: MASTER_ADMIN_EMAIL,
        name: "Administrator",
        requestedAt: Date.now(),
        status: "approved",
        note: "System Administrator",
      };
    }
    // Always ensure master admin is present and approved
    if (!this.whitelist.includes(MASTER_ADMIN_EMAIL)) {
      this.whitelist.push(MASTER_ADMIN_EMAIL);
    }
    if (!this.records[MASTER_ADMIN_EMAIL]) {
      this.records[MASTER_ADMIN_EMAIL] = {
        id: "req_admin_master",
        email: MASTER_ADMIN_EMAIL,
        name: "Administrator",
        requestedAt: Date.now(),
        status: "approved",
        note: "System Administrator",
      };
    }
  }

  private persist() {
    const data: AccessStoreData = {
      records: this.records,
      whitelist: this.whitelist,
    };
    saveToLocalDisk(data);
    saveToRemoteKv(data).catch(() => {});
  }

  public isApproved(email: string): boolean {
    if (!email) return false;
    const clean = email.toLowerCase().trim();
    if (clean === MASTER_ADMIN_EMAIL) return true;

    // Direct whitelist match
    if (this.whitelist.includes(clean)) return true;

    // Domain wildcard check (e.g. "@iima.ac.in" or "@gmail.com")
    for (const item of this.whitelist) {
      if (item.startsWith("@") && clean.endsWith(item)) {
        return true;
      }
    }

    // Direct record check
    const record = this.records[clean];
    return record?.status === "approved";
  }

  public addRecord(req: {
    email: string;
    name?: string;
    avatar?: string;
    status?: "pending" | "approved" | "rejected";
    accessCode?: string;
  }): AccessRecord {
    const clean = req.email.toLowerCase().trim();
    const existing = this.records[clean];

    // If access code provided matches default passcodes, auto-approve
    let isAutoApproved = this.isApproved(clean);
    if (req.accessCode && this.isValidPasscode(req.accessCode)) {
      isAutoApproved = true;
      if (!this.whitelist.includes(clean)) {
        this.whitelist.push(clean);
      }
    }

    const initialStatus = isAutoApproved
      ? "approved"
      : req.status || existing?.status || "pending";

    const record: AccessRecord = {
      id: existing?.id || `req_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      email: clean,
      name: req.name || existing?.name || clean.split("@")[0],
      avatar: req.avatar || existing?.avatar,
      requestedAt: existing?.requestedAt || Date.now(),
      status: initialStatus,
      approvedAt: initialStatus === "approved" ? existing?.approvedAt || Date.now() : undefined,
    };

    this.records[clean] = record;
    this.persist();
    return record;
  }

  public isValidPasscode(code: string): boolean {
    if (!code) return false;
    const cleanCode = code.trim().toUpperCase();
    const passcodes = [
      ...DEFAULT_PASSCODES,
      ...(process.env.ACCESS_PASSCODE ? [process.env.ACCESS_PASSCODE.trim().toUpperCase()] : []),
    ];
    return passcodes.includes(cleanCode);
  }

  public verifyPasscode(code: string, email: string, name?: string): { ok: boolean; record?: AccessRecord; error?: string } {
    if (!this.isValidPasscode(code)) {
      return { ok: false, error: "Invalid access passcode" };
    }
    const clean = email.toLowerCase().trim();
    const record = this.approve(clean, "Verified via Passcode");
    if (name && !record.name) {
      record.name = name;
    }
    return { ok: true, record };
  }

  public approve(email: string, note?: string): AccessRecord {
    const clean = email.toLowerCase().trim();
    const existing = this.records[clean];
    const record: AccessRecord = {
      id: existing?.id || `req_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      email: clean,
      name: existing?.name || clean.split("@")[0],
      avatar: existing?.avatar,
      requestedAt: existing?.requestedAt || Date.now(),
      status: "approved",
      approvedAt: Date.now(),
      note: note || existing?.note,
    };

    this.records[clean] = record;
    if (!this.whitelist.includes(clean)) {
      this.whitelist.push(clean);
    }
    this.persist();
    return record;
  }

  public reject(email: string): AccessRecord {
    const clean = email.toLowerCase().trim();
    const existing = this.records[clean];
    const record: AccessRecord = {
      id: existing?.id || `req_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      email: clean,
      name: existing?.name || clean.split("@")[0],
      avatar: existing?.avatar,
      requestedAt: existing?.requestedAt || Date.now(),
      status: "rejected",
      rejectedAt: Date.now(),
    };

    this.records[clean] = record;
    this.whitelist = this.whitelist.filter((e) => e !== clean);
    this.persist();
    return record;
  }

  public addWhitelist(entry: string): void {
    const clean = entry.toLowerCase().trim();
    if (!clean) return;
    if (!this.whitelist.includes(clean)) {
      this.whitelist.push(clean);
    }
    if (!clean.startsWith("@") && this.records[clean]) {
      this.records[clean].status = "approved";
      this.records[clean].approvedAt = Date.now();
    }
    this.persist();
  }

  public removeWhitelist(entry: string): void {
    const clean = entry.toLowerCase().trim();
    if (!clean || clean === MASTER_ADMIN_EMAIL) return;
    this.whitelist = this.whitelist.filter((e) => e !== clean);
    if (!clean.startsWith("@") && this.records[clean]) {
      this.records[clean].status = "rejected";
      this.records[clean].rejectedAt = Date.now();
    }
    this.persist();
  }
}

let globalStoreInstance: AccessStore | null = null;

export function getGlobalStore(): AccessStore {
  if (!globalStoreInstance) {
    globalStoreInstance = new AccessStore();
  }
  return globalStoreInstance;
}
