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
} from "@/lib/appearance";

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
  const resetAppearance = useAppearance((s) => s.resetAppearance);

  const popoverRef = useRef<HTMLDivElement>(null);

  // Click outside & Escape listener
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
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

  const WIDTH_OPTIONS: { id: TextWidth; label: string }[] = [
    { id: "narrow", label: "Narrow" },
    { id: "medium", label: "Medium" },
    { id: "wide", label: "Wide" },
    { id: "full", label: "Full" },
  ];

  const SPACING_OPTIONS: { id: LineSpacing; label: string }[] = [
    { id: "compact", label: "1.3" },
    { id: "normal", label: "1.6" },
    { id: "relaxed", label: "1.9" },
    { id: "loose", label: "2.3" },
  ];

  const FONT_OPTIONS: { id: FontFamily; label: string; fontClass: string }[] = [
    { id: "sans", label: "Inter (Modern)", fontClass: "font-sans" },
    { id: "serif", label: "Plus Jakarta (Display)", fontClass: "font-display" },
    { id: "mono", label: "Monospace", fontClass: "font-mono" },
    { id: "accessible", label: "Accessible Sans", fontClass: "font-sans tracking-wide" },
  ];

  return (
    <div
      ref={popoverRef}
      className="fixed right-4 top-16 z-50 w-80 sm:w-88 rounded-[24px] border border-[#262626] bg-[#141414] backdrop-blur-xl p-5 shadow-2xl ios-scale-in"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
        <div className="flex items-center gap-2">
          <Type className="size-4 text-[#0099ff]" />
          <span className="font-display text-sm font-bold text-white">
            Reading Typography & Width
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={resetAppearance}
            title="Reset to defaults"
            className="rounded-full p-1.5 text-[#666666] hover:bg-[#1c1c1c] hover:text-white transition-all ios-press"
          >
            <RotateCcw className="size-3.5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-[#666666] hover:bg-[#1c1c1c] hover:text-white transition-all ios-press"
          >
            <X className="size-3.5" />
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-4 text-xs">
        {/* 1. Text Width */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-sans font-semibold text-white flex items-center gap-1.5">
              <MoveHorizontal className="size-3.5 text-[#0099ff]" />
              Content Width
            </span>
            <span className="text-[10px] font-mono text-[#666666]">
              ⇧, / ⇧.
            </span>
          </div>
          <div className="grid grid-cols-4 gap-1 rounded-full bg-[#1c1c1c] p-1 border border-[#262626]">
            {WIDTH_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setTextWidth(opt.id)}
                className={`rounded-full py-1.5 font-sans text-[11px] font-medium transition-all ${
                  textWidth === opt.id
                    ? "bg-white text-black font-bold shadow-xs"
                    : "text-[#999999] hover:text-white"
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
            <span className="font-sans font-semibold text-white flex items-center gap-1.5">
              <Type className="size-3.5 text-[#0099ff]" />
              Font Size: <strong className="text-[#0099ff] font-mono">{fontSize}px</strong>
            </span>
            <span className="text-[10px] font-mono text-[#666666]">
              ⇧- / ⇧=
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={decreaseFontSize}
              disabled={fontSize <= 13}
              className="flex size-7 items-center justify-center rounded-full border border-[#262626] bg-[#1c1c1c] hover:bg-[#262626] text-white disabled:opacity-40 transition-all ios-press"
            >
              <Minus className="size-3.5" />
            </button>
            <input
              type="range"
              min={13}
              max={28}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="flex-1 accent-[#0099ff] cursor-pointer h-1.5 rounded-full bg-[#1c1c1c]"
            />
            <button
              type="button"
              onClick={increaseFontSize}
              disabled={fontSize >= 28}
              className="flex size-7 items-center justify-center rounded-full border border-[#262626] bg-[#1c1c1c] hover:bg-[#262626] text-white disabled:opacity-40 transition-all ios-press"
            >
              <Plus className="size-3.5" />
            </button>
          </div>
        </div>

        {/* 3. Line Spacing */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-sans font-semibold text-white flex items-center gap-1.5">
              <AlignJustify className="size-3.5 text-[#0099ff]" />
              Line Spacing
            </span>
            <span className="text-[10px] font-mono text-[#666666]">
              ⇧: / ⇧"
            </span>
          </div>
          <div className="grid grid-cols-4 gap-1 rounded-full bg-[#1c1c1c] p-1 border border-[#262626]">
            {SPACING_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setLineSpacing(opt.id)}
                className={`rounded-full py-1.5 font-sans text-[11px] font-medium transition-all ${
                  lineSpacing === opt.id
                    ? "bg-white text-black font-bold shadow-xs"
                    : "text-[#999999] hover:text-white"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Typeface */}
        <div>
          <span className="font-sans font-semibold text-white block mb-1.5">
            Typeface
          </span>
          <div className="grid grid-cols-2 gap-1.5">
            {FONT_OPTIONS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFontFamily(f.id)}
                className={`flex items-center justify-between rounded-[14px] border p-2.5 text-left transition-all ${
                  fontFamily === f.id
                    ? "border-[#0099ff] bg-[#1c1c1c] text-white font-bold"
                    : "border-[#262626] bg-[#141414] text-[#999999] hover:text-white hover:bg-[#1c1c1c]"
                }`}
              >
                <span className={`text-xs ${f.fontClass}`}>{f.label}</span>
                {fontFamily === f.id ? (
                  <Check className="size-3.5 text-[#0099ff]" />
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
