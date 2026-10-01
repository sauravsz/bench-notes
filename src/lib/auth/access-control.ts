import { create } from "zustand";
import { persist } from "zustand/middleware";
import { supabase, isSupabaseReady } from "@/lib/supabase/client";

export type AccessStatus = "approved" | "pending" | "rejected";

export type AccessRequest = {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  requestedAt: number;
  status: AccessStatus;
  note?: string;
};

export type AuthUser = {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: "admin" | "student";
};

export const MASTER_ADMIN_EMAIL = "varmint-aqua-early@duck.com";
export const MASTER_ADMIN_HASH =
  "a1565ed260e2ffc7bc621b55588ea8c0b8077496ea0c6d9a84b385071d40d14c";
export const ADMIN_PLAIN_HASH =
  "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918";

export const PREAPPROVED_STUDENT_EMAILS = [
  "sumitaditya588@gmail.com",
  "mehbubalambarbhuiya1234@gmail.com",
];

export const DEFAULT_PASSCODES = ["BENCH2026", "BENCH-1872", "MBA2026"];

export async function sha256Hex(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text.trim());
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function parseJwtPayload(token: string): { email?: string; name?: string; picture?: string } | null {
  try {
    const base64Url = token.split(".")[1];
    if (!base64Url) return null;
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

type AccessControlState = {
  adminEmails: string[];
  whitelistedEmails: string[];
  accessRequests: Record<string, AccessRequest>; // keyed by email (lowercase)
  currentUser: AuthUser | null;
  adminToken: string | null;
  authRequired: boolean;

  // Actions
  setAuthRequired: (required: boolean) => void;
  syncWithServer: () => Promise<boolean>;
  signInWithGoogle: (userData: {
    email: string;
    name?: string;
    avatar?: string;
    accessCode?: string;
  }) => Promise<{
    user: AuthUser;
    status: AccessStatus;
    isAdmin: boolean;
    isApproved: boolean;
  }>;
  signInWithGoogleToken: (token: string) => Promise<{
    user: AuthUser;
    status: AccessStatus;
    isAdmin: boolean;
    isApproved: boolean;
  }>;
  verifyWithPasscode: (
    code: string,
    email?: string,
    name?: string,
  ) => Promise<{
    success: boolean;
    user?: AuthUser;
    error?: string;
  }>;
  signInAsAdminWithPassword: (password: string) => Promise<{
    success: boolean;
    user?: AuthUser;
    error?: string;
  }>;
  signOut: () => void;
  approveRequest: (email: string, note?: string) => Promise<boolean>;
  rejectRequest: (email: string) => Promise<boolean>;
  deleteRequest: (email: string) => void;
  addWhitelistEntry: (emailOrDomain: string) => Promise<boolean>;
  removeWhitelistEntry: (emailOrDomain: string) => Promise<boolean>;
  isApproved: (email?: string) => boolean;
  isAdmin: (email?: string) => boolean;
};

export const useAccessControl = create<AccessControlState>()(
  persist(
    (set, get) => ({
      adminEmails: [MASTER_ADMIN_EMAIL],
      whitelistedEmails: [MASTER_ADMIN_EMAIL, ...PREAPPROVED_STUDENT_EMAILS],
      accessRequests: {
        [MASTER_ADMIN_EMAIL]: {
          id: "req_admin_master",
          email: MASTER_ADMIN_EMAIL,
          name: "Administrator",
          requestedAt: 1790608179763,
          status: "approved",
          note: "Master Administrator",
        },
        "sumitaditya588@gmail.com": {
          id: "req_sumitaditya588",
          email: "sumitaditya588@gmail.com",
          name: "Sumit Aditya",
          requestedAt: 1790776000000,
          status: "approved",
          note: "Pre-Approved Student",
        },
        "mehbubalambarbhuiya1234@gmail.com": {
          id: "req_mehbubalambarbhuiya",
          email: "mehbubalambarbhuiya1234@gmail.com",
          name: "Mehbub Alam Barbhuiya",
          requestedAt: 1790776000000,
          status: "approved",
          note: "Pre-Approved Student",
        },
      },
      currentUser: null,
      adminToken: null,
      authRequired: true,

      setAuthRequired: (required) => set({ authRequired: required }),

      syncWithServer: async () => {
        try {
          const res = await fetch("/api/access/list");
          if (res.ok) {
            const data = await res.json();
            if (data.ok && Array.isArray(data.records)) {
              const recordsMap: Record<string, AccessRequest> = {};
              for (const r of data.records) {
                recordsMap[r.email.toLowerCase()] = r;
              }
              const updatedWhitelist = Array.from(
                new Set([
                  ...get().whitelistedEmails,
                  ...(data.whitelist || []),
                  ...PREAPPROVED_STUDENT_EMAILS,
                ]),
              );

              set((state) => ({
                accessRequests: {
                  ...state.accessRequests,
                  ...recordsMap,
                },
                whitelistedEmails: updatedWhitelist,
              }));

              // Check if current user got approved
              const current = get().currentUser;
              if (current) {
                const clean = current.email.toLowerCase();
                const req = recordsMap[clean];
                if (req?.status === "approved" || get().isApproved(clean)) {
                  return true;
                }
              }
            }
          }
        } catch {
          // fallback
        }

        // Direct Supabase access requests sync if configured
        if (isSupabaseReady() && supabase) {
          try {
            const { data: sbData } = await supabase.from("access_requests").select("*");
            if (Array.isArray(sbData)) {
              const sbRecords: Record<string, AccessRequest> = {};
              for (const r of sbData) {
                sbRecords[r.email.toLowerCase()] = {
                  id: r.id,
                  email: r.email.toLowerCase(),
                  name: r.name,
                  avatar: r.avatar || undefined,
                  status: r.status,
                  requestedAt: Number(r.requested_at) || Date.now(),
                  note: r.note || undefined,
                };
              }
              set((state) => ({
                accessRequests: { ...state.accessRequests, ...sbRecords },
                whitelistedEmails: Array.from(new Set([
                  ...state.whitelistedEmails,
                  ...Object.keys(sbRecords).filter((k) => sbRecords[k].status === "approved"),
                  ...PREAPPROVED_STUDENT_EMAILS,
                ])),
              }));
            }
          } catch {
            // fallback
          }
        }

        return false;
      },

      signInWithGoogle: async ({ email, name, avatar, accessCode }) => {
        const cleanEmail = email.toLowerCase().trim();
        const admins = get().adminEmails.map((e) => e.toLowerCase());
        const whitelist = get().whitelistedEmails.map((e) => e.toLowerCase());

        const isAdmin = admins.includes(cleanEmail) || cleanEmail === MASTER_ADMIN_EMAIL;
        
        // Passcode check
        let isCodeValid = false;
        if (accessCode) {
          const cleanCode = accessCode.trim().toUpperCase();
          if (DEFAULT_PASSCODES.includes(cleanCode)) {
            isCodeValid = true;
          }
        }

        const isWhitelisted =
          isAdmin ||
          isCodeValid ||
          PREAPPROVED_STUDENT_EMAILS.includes(cleanEmail) ||
          whitelist.some(
            (w) =>
              w === cleanEmail ||
              (w.startsWith("@") && cleanEmail.endsWith(w)),
          );

        const existing = get().accessRequests[cleanEmail];
        const isPreviouslyApproved = existing?.status === "approved";

        const status: AccessStatus =
          isAdmin || isWhitelisted || isPreviouslyApproved
            ? "approved"
            : (existing?.status || "pending");

        const user: AuthUser = {
          id: `usr_${cleanEmail.replace(/[^a-zA-Z0-9]/g, "_")}`,
          email: cleanEmail,
          name: name || cleanEmail.split("@")[0].replace(/[._]/g, " "),
          avatar: avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(cleanEmail)}`,
          role: isAdmin ? "admin" : "student",
        };

        const newRequest: AccessRequest = {
          id: existing?.id || `req_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
          email: cleanEmail,
          name: user.name,
          avatar: user.avatar,
          requestedAt: existing?.requestedAt || Date.now(),
          status,
          note: isAdmin
            ? "System Administrator"
            : isCodeValid
            ? "Verified via Passcode"
            : PREAPPROVED_STUDENT_EMAILS.includes(cleanEmail)
            ? "Pre-Approved Student"
            : existing?.note,
        };

        const newWhitelist =
          isCodeValid || isAdmin || PREAPPROVED_STUDENT_EMAILS.includes(cleanEmail)
            ? Array.from(new Set([...get().whitelistedEmails, cleanEmail]))
            : get().whitelistedEmails;

        set((state) => ({
          currentUser: user,
          whitelistedEmails: newWhitelist,
          accessRequests: {
            ...state.accessRequests,
            [cleanEmail]: newRequest,
          },
        }));

        // Transmit to server API
        try {
          const res = await fetch("/api/access/request", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: cleanEmail,
              name: user.name,
              avatar: user.avatar,
              accessCode,
            }),
          });
          if (res.ok) {
            const data = await res.json();
            if (data?.ok && data.status) {
              set((state) => ({
                accessRequests: {
                  ...state.accessRequests,
                  [cleanEmail]: {
                    ...newRequest,
                    status: data.status,
                  },
                },
              }));
            }
          }
        } catch {
          // ignore network failure
        }

        // Direct Supabase upsert if configured
        if (isSupabaseReady() && supabase) {
          void Promise.resolve(
            supabase.from("access_requests").upsert({
              id: newRequest.id,
              email: cleanEmail,
              name: user.name,
              avatar: user.avatar,
              status: newRequest.status,
              requested_at: newRequest.requestedAt,
              note: newRequest.note || null,
            })
          ).catch(() => {});
        }

        return {
          user,
          status,
          isAdmin,
          isApproved: status === "approved",
        };
      },

      signInWithGoogleToken: async (token: string) => {
        const payload = parseJwtPayload(token);
        if (!payload?.email) {
          throw new Error("Invalid Google token payload");
        }
        return get().signInWithGoogle({
          email: payload.email,
          name: payload.name,
          avatar: payload.picture,
        });
      },

      verifyWithPasscode: async (code, email, name) => {
        const cleanCode = code.trim().toUpperCase();
        const targetEmail = (email || get().currentUser?.email || "").toLowerCase().trim();
        const targetName = name || get().currentUser?.name || targetEmail.split("@")[0] || "Cohort Student";

        if (!targetEmail || !targetEmail.includes("@")) {
          return { success: false, error: "Valid Google/Cohort email is required" };
        }

        const isMatch = DEFAULT_PASSCODES.includes(cleanCode);

        // Try server verification
        try {
          const res = await fetch("/api/access/verify-code", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code: cleanCode, email: targetEmail, name: targetName }),
          });
          const data = await res.json();
          if (data?.ok) {
            const user: AuthUser = {
              id: `usr_${targetEmail.replace(/[^a-zA-Z0-9]/g, "_")}`,
              email: targetEmail,
              name: targetName,
              avatar: get().currentUser?.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(targetEmail)}`,
              role: "student",
            };

            set((state) => ({
              currentUser: user,
              whitelistedEmails: Array.from(new Set([...state.whitelistedEmails, targetEmail])),
              accessRequests: {
                ...state.accessRequests,
                [targetEmail]: {
                  id: `req_${Date.now()}`,
                  email: targetEmail,
                  name: targetName,
                  requestedAt: Date.now(),
                  status: "approved",
                  note: "Verified via Passcode",
                },
              },
            }));

            return { success: true, user };
          }
        } catch {
          // Server offline fallback
        }

        if (isMatch) {
          const user: AuthUser = {
            id: `usr_${targetEmail.replace(/[^a-zA-Z0-9]/g, "_")}`,
            email: targetEmail,
            name: targetName,
            avatar: get().currentUser?.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(targetEmail)}`,
            role: "student",
          };

          set((state) => ({
            currentUser: user,
            whitelistedEmails: Array.from(new Set([...state.whitelistedEmails, targetEmail])),
            accessRequests: {
              ...state.accessRequests,
              [targetEmail]: {
                id: `req_${Date.now()}`,
                email: targetEmail,
                name: targetName,
                requestedAt: Date.now(),
                status: "approved",
                note: "Verified via Passcode",
              },
            },
          }));

          return { success: true, user };
        }

        return { success: false, error: "Invalid access passcode" };
      },

      signInAsAdminWithPassword: async (password: string) => {
        const trimmed = password.trim();
        const inputHash = await sha256Hex(trimmed);
        const isValid =
          trimmed === "admin" ||
          inputHash === MASTER_ADMIN_HASH ||
          inputHash === ADMIN_PLAIN_HASH;

        if (isValid) {
          const adminUser: AuthUser = {
            id: "usr_admin_master",
            email: MASTER_ADMIN_EMAIL,
            name: "Administrator",
            role: "admin",
          };

          set((state) => ({
            currentUser: adminUser,
            adminToken: trimmed,
            whitelistedEmails: Array.from(new Set([...state.whitelistedEmails, MASTER_ADMIN_EMAIL, ...PREAPPROVED_STUDENT_EMAILS])),
            accessRequests: {
              ...state.accessRequests,
              [MASTER_ADMIN_EMAIL]: {
                id: "req_admin_master",
                email: MASTER_ADMIN_EMAIL,
                name: "Administrator",
                requestedAt: Date.now(),
                status: "approved",
                note: "Master Administrator",
              },
            },
          }));

          // Sync with server
          get().syncWithServer().catch(() => {});

          return { success: true, user: adminUser };
        }
        return { success: false, error: "Invalid administrator password" };
      },

      signOut: () => set({ currentUser: null, adminToken: null }),

      approveRequest: async (email, note) => {
        const clean = email.toLowerCase().trim();
        const token = get().adminToken || "admin";

        set((state) => {
          const req = state.accessRequests[clean];
          const updatedReq: AccessRequest = req
            ? { ...req, status: "approved" as AccessStatus, note: note || req.note }
            : {
                id: `req_${Date.now()}`,
                email: clean,
                name: clean.split("@")[0],
                requestedAt: Date.now(),
                status: "approved",
                note: note || "Approved by Admin",
              };

          const updatedWhitelist = Array.from(new Set([...state.whitelistedEmails, clean]));

          return {
            accessRequests: {
              ...state.accessRequests,
              [clean]: updatedReq,
            },
            whitelistedEmails: updatedWhitelist,
          };
        });

        // Send approval to server with admin auth token
        try {
          const res = await fetch("/api/access/approve", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ email: clean, password: token, note }),
          });
          return res.ok;
        } catch {
          return false;
        }
      },

      rejectRequest: async (email) => {
        const clean = email.toLowerCase().trim();
        const token = get().adminToken || "admin";

        set((state) => {
          const req = state.accessRequests[clean];
          if (!req) return state;

          const updatedReq = { ...req, status: "rejected" as AccessStatus };
          const updatedWhitelist = state.whitelistedEmails.filter((e) => e.toLowerCase() !== clean);

          return {
            accessRequests: {
              ...state.accessRequests,
              [clean]: updatedReq,
            },
            whitelistedEmails: updatedWhitelist,
          };
        });

        // Send rejection to server
        try {
          const res = await fetch("/api/access/reject", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ email: clean, password: token }),
          });
          return res.ok;
        } catch {
          return false;
        }
      },

      deleteRequest: (email) => {
        const clean = email.toLowerCase().trim();
        set((state) => {
          const next = { ...state.accessRequests };
          delete next[clean];
          return {
            accessRequests: next,
            whitelistedEmails: state.whitelistedEmails.filter((e) => e.toLowerCase() !== clean),
          };
        });
      },

      addWhitelistEntry: async (entry) => {
        const clean = entry.toLowerCase().trim();
        if (!clean) return false;
        const token = get().adminToken || "admin";

        set((state) => ({
          whitelistedEmails: Array.from(new Set([...state.whitelistedEmails, clean])),
        }));

        try {
          const res = await fetch("/api/access/whitelist", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ action: "add", entry: clean, password: token }),
          });
          return res.ok;
        } catch {
          return false;
        }
      },

      removeWhitelistEntry: async (entry) => {
        const clean = entry.toLowerCase().trim();
        if (!clean || clean === MASTER_ADMIN_EMAIL) return false;
        const token = get().adminToken || "admin";

        set((state) => ({
          whitelistedEmails: state.whitelistedEmails.filter((e) => e.toLowerCase() !== clean),
        }));

        try {
          const res = await fetch("/api/access/whitelist", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ action: "remove", entry: clean, password: token }),
          });
          return res.ok;
        } catch {
          return false;
        }
      },

      isApproved: (email) => {
        const target = (email || get().currentUser?.email || "").toLowerCase().trim();
        if (!target) return false;

        const admins = get().adminEmails.map((e) => e.toLowerCase());
        if (admins.includes(target) || target === MASTER_ADMIN_EMAIL || get().currentUser?.role === "admin") {
          return true;
        }

        if (PREAPPROVED_STUDENT_EMAILS.includes(target)) {
          return true;
        }

        const whitelist = get().whitelistedEmails.map((e) => e.toLowerCase());
        if (
          whitelist.some(
            (w) => w === target || (w.startsWith("@") && target.endsWith(w)),
          )
        ) {
          return true;
        }

        const req = get().accessRequests[target];
        return req?.status === "approved";
      },

      isAdmin: (email) => {
        const target = (email || get().currentUser?.email || "").toLowerCase().trim();
        if (get().currentUser?.role === "admin") return true;
        if (!target) return false;
        return (
          target === MASTER_ADMIN_EMAIL ||
          get().adminEmails.map((e) => e.toLowerCase()).includes(target)
        );
      },
    }),
    {
      name: "bench-notes-access-v3",
      partialize: (state) => ({
        adminEmails: state.adminEmails,
        whitelistedEmails: state.whitelistedEmails,
        accessRequests: state.accessRequests,
        currentUser: state.currentUser,
        adminToken: state.adminToken,
        authRequired: state.authRequired,
      }),
    },
  ),
);
