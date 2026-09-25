import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TextWidth = "narrow" | "medium" | "wide" | "full";
export type LineSpacing = "compact" | "normal" | "relaxed" | "loose";
export type FontFamily = "serif" | "sans" | "mono" | "accessible";
export type ThemeTone = "warm" | "light" | "sepia" | "dark";

export const TEXT_WIDTH_CLASSES: Record<TextWidth, string> = {
  narrow: "max-w-xl",      // ~576px
  medium: "max-w-2xl",    // ~672px (Standard Reader default)
  wide: "max-w-4xl",      // ~896px
  full: "max-w-6xl",      // ~1152px
};

export const LINE_HEIGHT_CLASSES: Record<LineSpacing, string> = {
  compact: "leading-snug",      // 1.375
  normal: "leading-relaxed",    // 1.625 (Standard Reader default)
  relaxed: "leading-loose",     // 2.0
  loose: "leading-[2.3]",       // 2.3
};

export const FONT_FAMILY_CLASSES: Record<FontFamily, string> = {
  serif: "font-serif",
  sans: "font-sans",
  mono: "font-mono",
  accessible: "font-sans tracking-wide",
};

export const THEME_TONE_STYLES: Record<ThemeTone, { bg: string; surface: string; text: string; line: string }> = {
  warm: {
    bg: "#FAF8F5",
    surface: "#FFFFFF",
    text: "#0F172A",
    line: "#CBD5E1",
  },
  light: {
    bg: "#FFFFFF",
    surface: "#F8FAFC",
    text: "#0F172A",
    line: "#E2E8F0",
  },
  sepia: {
    bg: "#F4ECD8",
    surface: "#FCF8ED",
    text: "#2E2012",
    line: "#D8C7A8",
  },
  dark: {
    bg: "#0B0F17",
    surface: "#111827",
    text: "#F1F5F9",
    line: "#1F2937",
  },
};

type AppearanceState = {
  sidebarCollapsed: boolean;
  textWidth: TextWidth;
  fontSize: number; // 14 to 28 px
  lineSpacing: LineSpacing;
  fontFamily: FontFamily;
  themeTone: ThemeTone;
  appearanceMenuOpen: boolean;

  // Actions
  toggleSidebar: () => boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setTextWidth: (width: TextWidth) => void;
  increaseWidth: () => void;
  decreaseWidth: () => void;
  setFontSize: (size: number) => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  setLineSpacing: (spacing: LineSpacing) => void;
  cycleLineSpacing: (direction: "up" | "down") => void;
  setFontFamily: (family: FontFamily) => void;
  setThemeTone: (tone: ThemeTone) => void;
  setAppearanceMenuOpen: (open: boolean) => void;
  toggleAppearanceMenu: () => void;
  resetAppearance: () => void;
};

const WIDTH_ORDER: TextWidth[] = ["narrow", "medium", "wide", "full"];
const SPACING_ORDER: LineSpacing[] = ["compact", "normal", "relaxed", "loose"];

export const useAppearance = create<AppearanceState>()(
  persist(
    (set, get) => ({
      sidebarCollapsed: false,
      textWidth: "medium",
      fontSize: 17,
      lineSpacing: "normal",
      fontFamily: "serif",
      themeTone: "warm",
      appearanceMenuOpen: false,

      toggleSidebar: () => {
        const next = !get().sidebarCollapsed;
        set({ sidebarCollapsed: next });
        return next;
      },

      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),

      setTextWidth: (textWidth) => set({ textWidth }),

      increaseWidth: () => {
        const currentIndex = WIDTH_ORDER.indexOf(get().textWidth);
        if (currentIndex < WIDTH_ORDER.length - 1) {
          set({ textWidth: WIDTH_ORDER[currentIndex + 1] });
        }
      },

      decreaseWidth: () => {
        const currentIndex = WIDTH_ORDER.indexOf(get().textWidth);
        if (currentIndex > 0) {
          set({ textWidth: WIDTH_ORDER[currentIndex - 1] });
        }
      },

      setFontSize: (fontSize) => set({ fontSize: Math.max(13, Math.min(30, fontSize)) }),

      increaseFontSize: () => set({ fontSize: Math.min(30, get().fontSize + 1) }),

      decreaseFontSize: () => set({ fontSize: Math.max(13, get().fontSize - 1) }),

      setLineSpacing: (lineSpacing) => set({ lineSpacing }),

      cycleLineSpacing: (direction) => {
        const currentIndex = SPACING_ORDER.indexOf(get().lineSpacing);
        if (direction === "up" && currentIndex < SPACING_ORDER.length - 1) {
          set({ lineSpacing: SPACING_ORDER[currentIndex + 1] });
        } else if (direction === "down" && currentIndex > 0) {
          set({ lineSpacing: SPACING_ORDER[currentIndex - 1] });
        }
      },

      setFontFamily: (fontFamily) => set({ fontFamily }),

      setThemeTone: (themeTone) => set({ themeTone }),

      setAppearanceMenuOpen: (open) => set({ appearanceMenuOpen: open }),

      toggleAppearanceMenu: () => set((s) => ({ appearanceMenuOpen: !s.appearanceMenuOpen })),

      resetAppearance: () =>
        set({
          sidebarCollapsed: false,
          textWidth: "medium",
          fontSize: 17,
          lineSpacing: "normal",
          fontFamily: "serif",
          themeTone: "warm",
        }),
    }),
    {
      name: "bench-notes-appearance-v1",
      partialize: (state) => ({
        sidebarCollapsed: state.sidebarCollapsed,
        textWidth: state.textWidth,
        fontSize: state.fontSize,
        lineSpacing: state.lineSpacing,
        fontFamily: state.fontFamily,
        themeTone: state.themeTone,
      }),
    },
  ),
);
