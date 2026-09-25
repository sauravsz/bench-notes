import { create } from "zustand";
import { persist } from "zustand/middleware";

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

const MASTER_ADMIN_HASH =
  "a1565ed260e2ffc7bc621b55588ea8c0b8077496ea0c6d9a84b385071d40d14c";
const MASTER_ADMIN_EMAIL = "varmint-aqua-early@duck.com";

async function sha256Hex(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text.trim());
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

type AccessControlState = {
  adminEmails: string[];
  whitelistedEmails: string[];
  accessRequests: Record<string, AccessRequest>; // keyed by email (lowercase)
  currentUser: AuthUser | null;
  authRequired: boolean;

  // Actions
  setAuthRequired: (required: boolean) => void;
  syncWithServer: () => Promise<void>;
  signInWithGoogle: (userData: { email: string; name: string; avatar?: string }) => Promise<{
    user: AuthUser;
    status: AccessStatus;
    isAdmin: boolean;
  }>;
  signInAsAdminWithPassword: (password: string) => Promise<{
    success: boolean;
    user?: AuthUser;
    error?: string;
  }>;
  signOut: () => void;
  approveRequest: (email: string) => Promise<void>;
  rejectRequest: (email: string) => Promise<void>;
  deleteRequest: (email: string) => void;
  addWhitelistEntry: (emailOrDomain: string) => Promise<void>;
  removeWhitelistEntry: (emailOrDomain: string) => Promise<void>;
  isApproved: (email?: string) => boolean;
  isAdmin: (email?: string) => boolean;
};

export const useAccessControl = create<AccessControlState>()(
  persist(
    (set, get) => ({
      adminEmails: [MASTER_ADMIN_EMAIL],
      whitelistedEmails: [MASTER_ADMIN_EMAIL],
      accessRequests: {},
      currentUser: null,
      authRequired: true,

      setAuthRequired: (required) => set({ authRequired: required }),

      syncWithServer: async () => {
        try {
          const res = await fetch("/api/access/list");
          if (!res.ok) return;
          const data = await res.json();
          if (data.ok && Array.isArray(data.records)) {
            const recordsMap: Record<string, AccessRequest> = {};
            for (const r of data.records) {
              recordsMap[r.email.toLowerCase()] = r;
            }
            set((state) => ({
              accessRequests: {
                ...state.accessRequests,
                ...recordsMap,
              },
              whitelistedEmails: Array.from(
                new Set([...state.whitelistedEmails, ...(data.whitelist || [])]),
              ),
            }));
          }
        } catch {
          // Fallback to local state if offline
        }
      },

      signInWithGoogle: async ({ email, name, avatar }) => {
        const cleanEmail = email.toLowerCase().trim();
        const admins = get().adminEmails.map((e) => e.toLowerCase());
        const whitelist = get().whitelistedEmails.map((e) => e.toLowerCase());

        const isAdmin = admins.includes(cleanEmail);
        const isWhitelisted =
          isAdmin ||
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
          name: name || cleanEmail.split("@")[0],
          avatar,
          role: isAdmin ? "admin" : "student",
        };

        const newRequest: AccessRequest = {
          id: existing?.id || `req_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
          email: cleanEmail,
          name: user.name,
          avatar,
          requestedAt: existing?.requestedAt || Date.now(),
          status,
          note: isAdmin ? "System Administrator" : existing?.note,
        };

        set((state) => ({
          currentUser: user,
          accessRequests: {
            ...state.accessRequests,
            [cleanEmail]: newRequest,
          },
        }));

        // Send to server backend to sync across all devices
        try {
          fetch("/api/access/request", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: cleanEmail, name: user.name, avatar }),
          })
            .then((r) => r.json())
            .then((data) => {
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
            })
            .catch(() => {});
        } catch {}

        return { user, status, isAdmin };
      },

      signInAsAdminWithPassword: async (password: string) => {
        const inputHash = await sha256Hex(password);
        if (inputHash === MASTER_ADMIN_HASH) {
          const adminUser: AuthUser = {
            id: "usr_admin_master",
            email: MASTER_ADMIN_EMAIL,
            name: "Administrator",
            role: "admin",
          };

          set((state) => ({
            currentUser: adminUser,
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

      signOut: () => set({ currentUser: null }),

      approveRequest: async (email) => {
        const clean = email.toLowerCase().trim();
        set((state) => {
          const req = state.accessRequests[clean];
          const updatedReq: AccessRequest = req
            ? { ...req, status: "approved" as AccessStatus }
            : {
                id: `req_${Date.now()}`,
                email: clean,
                name: clean.split("@")[0],
                requestedAt: Date.now(),
                status: "approved",
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

        // Send approval to server
        try {
          fetch("/api/access/approve", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: clean }),
          }).catch(() => {});
        } catch {}
      },

      rejectRequest: async (email) => {
        const clean = email.toLowerCase().trim();
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
          fetch("/api/access/reject", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: clean }),
          }).catch(() => {});
        } catch {}
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
        if (!clean) return;
        set((state) => ({
          whitelistedEmails: Array.from(new Set([...state.whitelistedEmails, clean])),
        }));

        try {
          fetch("/api/access/whitelist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "add", entry: clean }),
          }).catch(() => {});
        } catch {}
      },

      removeWhitelistEntry: async (entry) => {
        const clean = entry.toLowerCase().trim();
        set((state) => ({
          whitelistedEmails: state.whitelistedEmails.filter((e) => e.toLowerCase() !== clean),
        }));

        try {
          fetch("/api/access/whitelist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "remove", entry: clean }),
          }).catch(() => {});
        } catch {}
      },

      isApproved: (email) => {
        const target = (email || get().currentUser?.email || "").toLowerCase().trim();
        if (!target) return false;

        const admins = get().adminEmails.map((e) => e.toLowerCase());
        if (admins.includes(target) || get().currentUser?.role === "admin") return true;

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
        return get().adminEmails.map((e) => e.toLowerCase()).includes(target);
      },
    }),
    {
      name: "bench-notes-access-v1",
      partialize: (state) => ({
        adminEmails: state.adminEmails,
        whitelistedEmails: state.whitelistedEmails,
        accessRequests: state.accessRequests,
        currentUser: state.currentUser,
        authRequired: state.authRequired,
      }),
    },
  ),
);
