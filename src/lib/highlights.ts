import { create } from "zustand";
import { supabase, isSupabaseReady } from "./supabase/client";

export type HighlightColor = "yellow" | "amber" | "green" | "blue" | "rose" | "purple";

export const HIGHLIGHT_COLORS: {
  id: HighlightColor;
  label: string;
  bgClass: string;
  borderClass: string;
  dotColor: string;
  hex: string;
}[] = [
  {
    id: "yellow",
    label: "Yellow",
    bgClass: "bg-amber-400/35 dark:bg-amber-400/25 text-inherit border-b border-amber-500/50",
    borderClass: "border-amber-400/50",
    dotColor: "#fbbf24",
    hex: "#fbbf24",
  },
  {
    id: "amber",
    label: "Amber",
    bgClass: "bg-orange-400/35 dark:bg-orange-400/25 text-inherit border-b border-orange-500/50",
    borderClass: "border-orange-400/50",
    dotColor: "#f97316",
    hex: "#f97316",
  },
  {
    id: "green",
    label: "Green",
    bgClass: "bg-emerald-400/35 dark:bg-emerald-400/25 text-inherit border-b border-emerald-500/50",
    borderClass: "border-emerald-400/50",
    dotColor: "#10b981",
    hex: "#10b981",
  },
  {
    id: "blue",
    label: "Blue",
    bgClass: "bg-sky-400/35 dark:bg-sky-400/25 text-inherit border-b border-sky-500/50",
    borderClass: "border-sky-400/50",
    dotColor: "#0099ff",
    hex: "#0099ff",
  },
  {
    id: "rose",
    label: "Pink / Rose",
    bgClass: "bg-rose-400/35 dark:bg-rose-400/25 text-inherit border-b border-rose-500/50",
    borderClass: "border-rose-400/50",
    dotColor: "#f43f5e",
    hex: "#f43f5e",
  },
  {
    id: "purple",
    label: "Violet",
    bgClass: "bg-violet-400/35 dark:bg-violet-400/25 text-inherit border-b border-violet-500/50",
    borderClass: "border-violet-400/50",
    dotColor: "#8b5cf6",
    hex: "#8b5cf6",
  },
];

export type HighlightItem = {
  id: string;
  userEmail?: string;
  docId: string; // e.g. "topic:indian-judiciary", "exam:q1"
  docTitle?: string;
  blockIndex?: number;
  blockId?: string;
  text: string;
  color: HighlightColor;
  note?: string;
  tags?: string[];
  createdAt: number;
  updatedAt: number;
};

type HighlightsState = {
  userEmail: string;
  highlights: Record<string, HighlightItem>; // key is id
  autoHighlight: boolean;
  currentColor: HighlightColor;
  activeHighlightId: string | null;
  notebookOpen: boolean;
  isSyncing: boolean;

  // Actions
  setUserEmail: (email?: string | null) => void;
  syncFromSupabase: (email?: string) => Promise<boolean>;
  toggleAutoHighlight: () => boolean;
  setAutoHighlight: (enabled: boolean) => void;
  setCurrentColor: (color: HighlightColor) => void;
  setActiveHighlightId: (id: string | null) => void;
  setNotebookOpen: (open: boolean) => void;

  addHighlight: (item: {
    docId: string;
    docTitle?: string;
    blockIndex?: number;
    blockId?: string;
    text: string;
    color?: HighlightColor;
    note?: string;
    tags?: string[];
  }) => HighlightItem;

  updateHighlight: (
    id: string,
    updates: Partial<Pick<HighlightItem, "color" | "note" | "tags">>,
  ) => void;

  removeHighlight: (id: string) => void;
  clearDocHighlights: (docId: string) => void;
  clearAllHighlights: () => void;
};

function getStorageKey(email: string): string {
  const clean = (email || "guest").toLowerCase().trim().replace(/[^a-z0-9]/g, "_");
  return `benchnotes_highlights_v2_${clean}`;
}

function loadLocalPartition(email: string): Record<string, HighlightItem> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(getStorageKey(email));
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        return parsed;
      }
    }
  } catch {
    // ignore
  }
  return {};
}

function saveLocalPartition(email: string, highlights: Record<string, HighlightItem>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(getStorageKey(email), JSON.stringify(highlights));
  } catch {
    // ignore
  }
}

const DEFAULT_GUEST_EMAIL = "guest@benchnotes.org";

export const useHighlights = create<HighlightsState>()((set, get) => ({
  userEmail: DEFAULT_GUEST_EMAIL,
  highlights: loadLocalPartition(DEFAULT_GUEST_EMAIL),
  autoHighlight: true,
  currentColor: "yellow",
  activeHighlightId: null,
  notebookOpen: false,
  isSyncing: false,

  setUserEmail: (email) => {
    const cleanEmail = (email || DEFAULT_GUEST_EMAIL).toLowerCase().trim();
    if (cleanEmail === get().userEmail) return;

    // Load local partition for the new user profile
    const userHighlights = loadLocalPartition(cleanEmail);
    set({
      userEmail: cleanEmail,
      highlights: userHighlights,
      activeHighlightId: null,
    });

    // If Supabase is connected, sync the user's highlights from PostgreSQL
    if (isSupabaseReady() && cleanEmail !== DEFAULT_GUEST_EMAIL) {
      get().syncFromSupabase(cleanEmail).catch(() => {});
    }
  },

  syncFromSupabase: async (email) => {
    const targetEmail = (email || get().userEmail).toLowerCase().trim();
    if (!isSupabaseReady() || !supabase || targetEmail === DEFAULT_GUEST_EMAIL) {
      return false;
    }

    set({ isSyncing: true });
    try {
      const { data, error } = await supabase
        .from("user_highlights")
        .select("*")
        .eq("user_email", targetEmail);

      if (error) {
        set({ isSyncing: false });
        return false;
      }

      if (Array.isArray(data)) {
        const remoteMap: Record<string, HighlightItem> = {};
        for (const row of data) {
          remoteMap[row.id] = {
            id: row.id,
            userEmail: row.user_email,
            docId: row.doc_id,
            docTitle: row.doc_title,
            blockIndex: row.block_index ?? undefined,
            blockId: row.block_id ?? undefined,
            text: row.text,
            color: (row.color as HighlightColor) || "yellow",
            note: row.note ?? undefined,
            tags: row.tags || [],
            createdAt: Number(row.created_at) || Date.now(),
            updatedAt: Number(row.updated_at) || Date.now(),
          };
        }

        // Merge remote with local partition
        const currentLocal = get().highlights;
        const merged: Record<string, HighlightItem> = {
          ...currentLocal,
          ...remoteMap,
        };

        set({ highlights: merged, isSyncing: false });
        saveLocalPartition(targetEmail, merged);
        return true;
      }
    } catch {
      // offline fallback
    }

    set({ isSyncing: false });
    return false;
  },

  toggleAutoHighlight: () => {
    const next = !get().autoHighlight;
    set({ autoHighlight: next });
    return next;
  },

  setAutoHighlight: (enabled: boolean) => set({ autoHighlight: enabled }),

  setCurrentColor: (color: HighlightColor) => set({ currentColor: color }),

  setActiveHighlightId: (id: string | null) => set({ activeHighlightId: id }),

  setNotebookOpen: (open: boolean) => set({ notebookOpen: open }),

  addHighlight: ({ docId, docTitle, blockIndex, blockId, text, color, note, tags }) => {
    const trimmed = text.trim();
    if (!trimmed) {
      throw new Error("Highlight text cannot be empty");
    }

    const email = get().userEmail;

    // Check if duplicate exists in this doc and block
    const existing = Object.values(get().highlights).find(
      (h) =>
        h.docId === docId &&
        h.text.trim() === trimmed &&
        (blockIndex === undefined || h.blockIndex === blockIndex),
    );

    if (existing) {
      return existing;
    }

    const id = `hl_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const newItem: HighlightItem = {
      id,
      userEmail: email,
      docId,
      docTitle: docTitle || docId,
      blockIndex,
      blockId,
      text: trimmed,
      color: color || get().currentColor,
      note,
      tags: tags || [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    const updated = {
      ...get().highlights,
      [id]: newItem,
    };

    set({ highlights: updated });
    saveLocalPartition(email, updated);

    if (isSupabaseReady() && supabase && email !== DEFAULT_GUEST_EMAIL) {
      void Promise.resolve(
        supabase
          .from("user_highlights")
          .upsert({
            id: newItem.id,
            user_email: email,
            doc_id: newItem.docId,
            doc_title: newItem.docTitle,
            block_index: newItem.blockIndex ?? null,
            block_id: newItem.blockId ?? null,
            text: newItem.text,
            color: newItem.color,
            note: newItem.note ?? null,
            tags: newItem.tags ?? [],
            created_at: newItem.createdAt,
            updated_at: newItem.updatedAt,
          })
      ).catch(() => {});
    }

    return newItem;
  },

  updateHighlight: (id, updates) => {
    const item = get().highlights[id];
    if (!item) return;

    const email = get().userEmail;
    const updatedItem: HighlightItem = {
      ...item,
      ...updates,
      updatedAt: Date.now(),
    };

    const nextHighlights = {
      ...get().highlights,
      [id]: updatedItem,
    };

    set({ highlights: nextHighlights });
    saveLocalPartition(email, nextHighlights);

    // Sync to Supabase
    if (isSupabaseReady() && supabase && email !== DEFAULT_GUEST_EMAIL) {
      void Promise.resolve(
        supabase
          .from("user_highlights")
          .update({
            color: updatedItem.color,
            note: updatedItem.note ?? null,
            tags: updatedItem.tags ?? [],
            updated_at: updatedItem.updatedAt,
          })
          .eq("id", id)
          .eq("user_email", email)
      ).catch(() => {});
    }
  },

  removeHighlight: (id) => {
    const email = get().userEmail;
    const next = { ...get().highlights };
    delete next[id];

    set({
      highlights: next,
      activeHighlightId: get().activeHighlightId === id ? null : get().activeHighlightId,
    });
    saveLocalPartition(email, next);

    // Delete in Supabase
    if (isSupabaseReady() && supabase && email !== DEFAULT_GUEST_EMAIL) {
      void Promise.resolve(
        supabase
          .from("user_highlights")
          .delete()
          .eq("id", id)
          .eq("user_email", email)
      ).catch(() => {});
    }
  },

  clearDocHighlights: (docId) => {
    const email = get().userEmail;
    const next = { ...get().highlights };
    for (const id in next) {
      if (next[id].docId === docId) {
        delete next[id];
      }
    }
    set({ highlights: next });
    saveLocalPartition(email, next);

    if (isSupabaseReady() && supabase && email !== DEFAULT_GUEST_EMAIL) {
      void Promise.resolve(
        supabase
          .from("user_highlights")
          .delete()
          .eq("doc_id", docId)
          .eq("user_email", email)
      ).catch(() => {});
    }
  },

  clearAllHighlights: () => {
    const email = get().userEmail;
    set({ highlights: {}, activeHighlightId: null });
    saveLocalPartition(email, {});

    if (isSupabaseReady() && supabase && email !== DEFAULT_GUEST_EMAIL) {
      void Promise.resolve(
        supabase
          .from("user_highlights")
          .delete()
          .eq("user_email", email)
      ).catch(() => {});
    }
  },
}));
