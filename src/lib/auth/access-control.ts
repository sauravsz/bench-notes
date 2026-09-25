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

const MASTER_ADMIN_PASSWORD = "watchoutTNAjeffhardy";
const MASTER_ADMIN_EMAIL = "varmint-aqua-early@duck.com";

type AccessControlState = {
  adminEmails: string[];
  whitelistedEmails: string[];
  accessRequests: Record<string, AccessRequest>; // keyed by email (lowercase)
  currentUser: AuthUser | null;
  authRequired: boolean;

  // Actions
  setAuthRequired: (required: boolean) => void;
  signInWithGoogle: (userData: { email: string; name: string; avatar?: string }) => {
    user: AuthUser;
    status: AccessStatus;
    isAdmin: boolean;
  };
  signInAsAdminWithPassword: (password: string) => {
    success: boolean;
    user?: AuthUser;
    error?: string;
  };
  signOut: () => void;
  approveRequest: (email: string) => void;
  rejectRequest: (email: string) => void;
  deleteRequest: (email: string) => void;
  addWhitelistEntry: (emailOrDomain: string) => void;
  removeWhitelistEntry: (emailOrDomain: string) => void;
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

      signInWithGoogle: ({ email, name, avatar }) => {
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

        return { user, status, isAdmin };
      },

      signInAsAdminWithPassword: (password: string) => {
        if (password.trim() === MASTER_ADMIN_PASSWORD) {
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

          return { success: true, user: adminUser };
        }
        return { success: false, error: "Invalid administrator password" };
      },

      signOut: () => set({ currentUser: null }),

      approveRequest: (email) => {
        const clean = email.toLowerCase().trim();
        set((state) => {
          const req = state.accessRequests[clean];
          if (!req) return state;

          const updatedReq = { ...req, status: "approved" as AccessStatus };
          const updatedWhitelist = Array.from(new Set([...state.whitelistedEmails, clean]));

          return {
            accessRequests: {
              ...state.accessRequests,
              [clean]: updatedReq,
            },
            whitelistedEmails: updatedWhitelist,
          };
        });
      },

      rejectRequest: (email) => {
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

      addWhitelistEntry: (entry) => {
        const clean = entry.toLowerCase().trim();
        if (!clean) return;
        set((state) => ({
          whitelistedEmails: Array.from(new Set([...state.whitelistedEmails, clean])),
        }));
      },

      removeWhitelistEntry: (entry) => {
        const clean = entry.toLowerCase().trim();
        set((state) => ({
          whitelistedEmails: state.whitelistedEmails.filter((e) => e.toLowerCase() !== clean),
        }));
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
