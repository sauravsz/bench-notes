import { create } from "zustand";
import { persist } from "zustand/middleware";

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
    bgClass: "bg-yellow-200/70 dark:bg-yellow-500/30 text-ink",
    borderClass: "border-b-2 border-yellow-400/80",
    dotColor: "#EAB308",
    hex: "#FEF08A",
  },
  {
    id: "amber",
    label: "Amber",
    bgClass: "bg-amber-200/70 dark:bg-amber-500/30 text-ink",
    borderClass: "border-b-2 border-amber-500/80",
    dotColor: "#F59E0B",
    hex: "#FDE68A",
  },
  {
    id: "green",
    label: "Green",
    bgClass: "bg-emerald-200/70 dark:bg-emerald-500/30 text-ink",
    borderClass: "border-b-2 border-emerald-500/80",
    dotColor: "#10B981",
    hex: "#A7F3D0",
  },
  {
    id: "blue",
    label: "Blue",
    bgClass: "bg-sky-200/70 dark:bg-sky-500/30 text-ink",
    borderClass: "border-b-2 border-sky-400/80",
    dotColor: "#0284C7",
    hex: "#BAE6FD",
  },
  {
    id: "rose",
    label: "Rose",
    bgClass: "bg-rose-200/70 dark:bg-rose-500/30 text-ink",
    borderClass: "border-b-2 border-rose-400/80",
    dotColor: "#F43F5E",
    hex: "#FECDD3",
  },
  {
    id: "purple",
    label: "Purple",
    bgClass: "bg-purple-200/70 dark:bg-purple-500/30 text-ink",
    borderClass: "border-b-2 border-purple-400/80",
    dotColor: "#A855F7",
    hex: "#E9D5FF",
  },
];

export type HighlightItem = {
  id: string;
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
  highlights: Record<string, HighlightItem>; // keyed by ID
  autoHighlight: boolean;
  currentColor: HighlightColor;
  activeHighlightId: string | null;
  notebookOpen: boolean;
  
  // Actions
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

export const useHighlights = create<HighlightsState>()(
  persist(
    (set, get) => ({
      highlights: {},
      autoHighlight: true,
      currentColor: "yellow",
      activeHighlightId: null,
      notebookOpen: false,

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

        // Check if an identical highlight already exists in this doc and block
        const existing = Object.values(get().highlights).find(
          (h) =>
            h.docId === docId &&
            h.text.trim() === trimmed &&
            (blockIndex === undefined || h.blockIndex === blockIndex),
        );

        if (existing) {
          // If already exists, return existing
          return existing;
        }

        const id = `hl_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
        const newItem: HighlightItem = {
          id,
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
        set((state) => ({
          highlights: {
            ...state.highlights,
            [id]: newItem,
          },
        }));

        return newItem;
      },

      updateHighlight: (id, updates) => {
        set((state) => {
          const item = state.highlights[id];
          if (!item) return state;
          return {
            highlights: {
              ...state.highlights,
              [id]: {
                ...item,
                ...updates,
                updatedAt: Date.now(),
              },
            },
          };
        });
      },

      removeHighlight: (id) => {
        set((state) => {
          const next = { ...state.highlights };
          delete next[id];
          return {
            highlights: next,
            activeHighlightId: state.activeHighlightId === id ? null : state.activeHighlightId,
          };
        });
      },

      clearDocHighlights: (docId) => {
        set((state) => {
          const next = { ...state.highlights };
          for (const id in next) {
            if (next[id].docId === docId) {
              delete next[id];
            }
          }
          return { highlights: next };
        });
      },

      clearAllHighlights: () => {
        set({ highlights: {}, activeHighlightId: null });
      },
    }),
    {
      name: "bench-notes-highlights-v1",
      partialize: (state) => ({
        highlights: state.highlights,
        autoHighlight: state.autoHighlight,
        currentColor: state.currentColor,
      }),
    },
  ),
);
