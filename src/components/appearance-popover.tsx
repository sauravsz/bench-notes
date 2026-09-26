import { useEffect, useRef } from "react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  Check,
  Minus,
  MoveHorizontal,
  Plus,
  RotateCcw,
  Sparkles,
  Type,
  X,
} from "lucide-react";
import {
  useAppearance,
  type FontFamily,
  type LineSpacing,
  type TextWidth,
  type ThemeTone,
} from "@/lib/appearance";
import { Button } from "./ui/button";

export function AppearancePopover({ onClose }: { onClose: () => void }) {
  const textWidth = useAppearance((s) => s.textWidth);
  const setTextWidth = useAppearance((s) => s.setTextWidth);
  const fontSize = useAppearance((s) => s.fontSize);
  const setFontSize = useAppearance((s) => s.setFontSize);
  const increaseFontSize = useAppearance((s) => s.increaseFontSize);
  const decreaseFontSize = useAppearance((s) => s.decreaseFontSize);
  const lineSpacing = useAppearance((s) => s.lineSpacing);
  const setLineSpacing = useAppearance((s) => s.setLineSpacing);
  const fontFamily = useAppearance((s) => s.fontFamily);
  const setFontFamily = useAppearance((s) => s.setFontFamily);
  const themeTone = useAppearance((s) => s.themeTone);
  const setThemeTone = useAppearance((s) => s.setThemeTone);
  const resetAppearance = useAppearance((s) => s.resetAppearance);

  const popoverRef = useRef<HTMLDivElement>(null);

  // Click outside & Escape listener
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        // Only close if not clicking an Aa trigger button
        const target = e.target as HTMLElement | null;
        if (!target?.closest("[data-appearance-trigger]")) {
          onClose();
        }
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const WIDTH_OPTIONS: { id: TextWidth; label: string; shortcut: string }[] = [
    { id: "narrow", label: "Narrow", shortcut: "⇧<" },
    { id: "medium", label: "Medium", shortcut: "Def" },
    { id: "wide", label: "Wide", shortcut: "⇧>" },
    { id: "full", label: "Full", shortcut: "Max" },
  ];

  const SPACING_OPTIONS: { id: LineSpacing; label: string; shortcut: string }[] = [
    { id: "compact", label: "1.3", shortcut: "⇧:" },
    { id: "normal", label: "1.6", shortcut: "Def" },
    { id: "relaxed", label: "1.9", shortcut: "⇧\"" },
    { id: "loose", label: "2.3", shortcut: "Max" },
  ];

  const FONT_OPTIONS: { id: FontFamily; label: string; fontClass: string }[] = [
    { id: "serif", label: "Serif (Editorial)", fontClass: "font-serif" },
    { id: "sans", label: "Sans (Modern)", fontClass: "font-sans" },
    { id: "mono", label: "Monospace", fontClass: "font-mono" },
    { id: "accessible", label: "Accessible", fontClass: "font-sans tracking-wide" },
  ];

  const THEME_OPTIONS: { id: ThemeTone; label: string; bg: string; border: string }[] = [
    { id: "warm", label: "Warm Paper", bg: "#FAF8F5", border: "#CBD5E1" },
    { id: "light", label: "Pure White", bg: "#FFFFFF", border: "#E2E8F0" },
    { id: "sepia", label: "Vintage Sepia", bg: "#F4ECD8", border: "#D8C7A8" },
    { id: "dark", label: "Night Dark", bg: "#0B0F17", border: "#374151" },
  ];

  return (
    <div
      ref={popoverRef}
      className="fixed right-4 top-16 z-50 w-80 sm:w-88 rounded-2xl border border-line bg-surface/95 backdrop-blur-md p-4 shadow-2xl ios-scale-in"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-line/60">
        <div className="flex items-center gap-2">
          <Type className="size-4 text-accent" />
          <span className="font-serif text-sm font-bold text-ink">
            Reading Appearance & Typography
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={resetAppearance}
            title="Reset to defaults"
          className="rounded p-1 text-muted hover:bg-bg-warm hover:text-ink transition-all duration-200 ios-press"
        >
          <RotateCcw className="size-3.5" />
          </button>
          <button
            type="button"
            onClick={onClose}
          className="rounded p-1 text-muted hover:bg-bg-warm hover:text-ink transition-all duration-200 ios-press"
        >
          <X className="size-3.5" />
          </button>
        </div>
      </div>

      <div className="mt-3 space-y-4 text-xs">
        {/* 1. Text Width */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-sans font-semibold text-ink flex items-center gap-1.5">
              <MoveHorizontal className="size-3.5 text-accent" />
              Content Width
            </span>
            <span className="text-[10px] text-muted">
              Shortcuts: <kbd className="font-mono">⇧,</kbd> / <kbd className="font-mono">⇧.</kbd>
            </span>
          </div>
          <div className="grid grid-cols-4 gap-1 rounded-lg bg-bg-warm/70 p-1 border border-line/60">
            {WIDTH_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setTextWidth(opt.id)}
                className={`rounded-md py-1.5 font-sans text-[11px] font-medium transition-all duration-200 ios-press-subtle ${
                  textWidth === opt.id
                    ? "bg-surface text-ink font-bold shadow-xs ring-1 ring-accent/30 scale-102"
                    : "text-muted hover:text-ink"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Font Size */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-sans font-semibold text-ink flex items-center gap-1.5">
              <Type className="size-3.5 text-accent" />
              Font Size: <strong className="text-accent">{fontSize}px</strong>
            </span>
            <span className="text-[10px] text-muted">
              Shortcuts: <kbd className="font-mono">⇧-</kbd> / <kbd className="font-mono">⇧=</kbd>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={decreaseFontSize}
              disabled={fontSize <= 13}
              className="flex size-7 items-center justify-center rounded-lg border border-line bg-surface hover:bg-bg-warm disabled:opacity-40 transition-all duration-200 ios-press"
            >
              <Minus className="size-3.5" />
            </button>
            <input
              type="range"
              min={13}
              max={28}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="flex-1 accent-accent cursor-pointer h-1.5 rounded-lg bg-line"
            />
            <button
              type="button"
              onClick={increaseFontSize}
              disabled={fontSize >= 28}
              className="flex size-7 items-center justify-center rounded-lg border border-line bg-surface hover:bg-bg-warm disabled:opacity-40 transition-all duration-200 ios-press"
            >
              <Plus className="size-3.5" />
            </button>
          </div>
        </div>

        {/* 3. Line Spacing */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-sans font-semibold text-ink flex items-center gap-1.5">
              <AlignJustify className="size-3.5 text-accent" />
              Line Spacing
            </span>
            <span className="text-[10px] text-muted">
              Shortcuts: <kbd className="font-mono">⇧:</kbd> / <kbd className="font-mono">⇧"</kbd>
            </span>
          </div>
          <div className="grid grid-cols-4 gap-1 rounded-lg bg-bg-warm/70 p-1 border border-line/60">
            {SPACING_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setLineSpacing(opt.id)}
                className={`rounded-md py-1.5 font-sans text-[11px] font-medium transition-all duration-200 ios-press-subtle ${
                  lineSpacing === opt.id
                    ? "bg-surface text-ink font-bold shadow-xs ring-1 ring-accent/30 scale-102"
                    : "text-muted hover:text-ink"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Typeface */}
        <div>
          <span className="font-sans font-semibold text-ink block mb-1.5">
            Typeface
          </span>
          <div className="grid grid-cols-2 gap-1.5">
            {FONT_OPTIONS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFontFamily(f.id)}
                className={`flex items-center justify-between rounded-lg border p-2 text-left transition-all duration-200 ios-press-subtle ${
                  fontFamily === f.id
                    ? "border-accent bg-accent/10 text-ink font-bold shadow-2xs"
                    : "border-line bg-surface text-ink-soft hover:bg-bg-warm"
                }`}
              >
                <span className={`text-xs ${f.fontClass}`}>{f.label}</span>
                {fontFamily === f.id ? (
                  <Check className="size-3 text-accent ios-spring-pop" />
                ) : null}
              </button>
            ))}
          </div>
        </div>

        {/* 5. Theme Tone Palette */}
        <div>
          <span className="font-sans font-semibold text-ink block mb-1.5">
            Surface Theme
          </span>
          <div className="grid grid-cols-4 gap-1.5">
            {THEME_OPTIONS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setThemeTone(t.id)}
                className={`flex flex-col items-center gap-1 rounded-lg border p-1.5 transition-all duration-200 ios-press ${
                  themeTone === t.id
                    ? "ring-2 ring-accent scale-105 shadow-xs font-bold bg-accent/5"
                    : "border-line/80 hover:scale-102 hover:bg-bg-warm"
                }`}
              >
                <div
                  className={`size-5 rounded-full border shadow-2xs transition-transform duration-200 ${
                    themeTone === t.id ? "scale-110" : ""
                  }`}
                  style={{ backgroundColor: t.bg, borderColor: t.border }}
                />
                <span className="text-[10px] text-ink text-center leading-tight">
                  {t.label.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
