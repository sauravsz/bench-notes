import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProgressState = {
  studied: Record<string, boolean>;
  lastSlug: string | null;
  toggleStudied: (slug: string) => void;
  markStudied: (slug: string) => void;
  setLastSlug: (slug: string) => void;
};

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      studied: {},
      lastSlug: null,
      toggleStudied: (slug) =>
        set((s) => ({
          studied: { ...s.studied, [slug]: !s.studied[slug] },
        })),
      markStudied: (slug) =>
        set((s) => ({ studied: { ...s.studied, [slug]: true } })),
      setLastSlug: (slug) => set({ lastSlug: slug }),
    }),
    { name: "bench-notes-progress" },
  ),
);
