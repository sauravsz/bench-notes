import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Copy, Highlighter, MessageSquare, Tag, Check } from "lucide-react";
import { HIGHLIGHT_COLORS, useHighlights, type HighlightColor } from "@/lib/highlights";
import { cn } from "@/lib/utils";

export function SelectionToolbar({
  selectionRect,
  selectedText,
  onHighlight,
  onAddNote,
  onClose,
}: {
  selectionRect: DOMRect | null;
  selectedText: string;
  onHighlight: (color?: HighlightColor) => void;
  onAddNote: () => void;
  onClose: () => void;
}) {
  const currentColor = useHighlights((s) => s.currentColor);
  const setCurrentColor = useHighlights((s) => s.setCurrentColor);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "h" || e.key === "H") {
        if (!e.metaKey && !e.ctrlKey) {
          e.preventDefault();
          onHighlight();
        }
      } else if (e.key === "n" || e.key === "N") {
        if (!e.metaKey && !e.ctrlKey) {
          e.preventDefault();
          onAddNote();
        }
      }
    }
    function handleScroll() {
      onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onHighlight, onAddNote, onClose]);
  if (!selectionRect || !selectedText || !mounted) return null;

  const toolbarWidth = 240;
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1024;

  // Determine article boundaries to avoid Right-Rail TOC collision
  const articleEl = typeof document !== "undefined" ? document.querySelector("article") : null;
  const articleRect = articleEl?.getBoundingClientRect();

  const minLeft = articleRect ? Math.max(16, articleRect.left + 8) : 16;
  const maxRight = articleRect
    ? Math.min(articleRect.right - 8, screenWidth - 280)
    : (screenWidth >= 1280 ? screenWidth - 280 : screenWidth - 16);

  const idealLeft = selectionRect.left + selectionRect.width / 2 - toolbarWidth / 2;
  const left = Math.max(minLeft, Math.min(idealLeft, maxRight - toolbarWidth));
  const top =
    selectionRect.top < 52
      ? selectionRect.bottom + 8
      : selectionRect.top - 46;

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedText);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1000);
  };

  const activeColorConfig = HIGHLIGHT_COLORS.find((c) => c.id === currentColor);

  const content = (
    <div
      data-selection-toolbar
      style={{
        position: "fixed",
        top: `${Math.round(top)}px`,
        left: `${Math.round(left)}px`,
        zIndex: 9999,
      }}
      className="flex items-center gap-1 rounded-full border border-[#333333] bg-[#1c1c1c]/95 p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 font-sans"
    >
      {/* Primary Highlight button */}
      <button
        type="button"
        onClick={() => onHighlight(currentColor)}
        className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold text-white hover:bg-[#262626] transition-all ios-press"
        title="Highlight selection (H)"
      >
        <span
          className="size-3 rounded-full"
          style={{ backgroundColor: activeColorConfig?.dotColor || "#eab308" }}
        />
        <span>Highlight</span>
      </button>

      {/* Color Picker dots */}
      <div className="flex items-center gap-1 px-1 border-x border-[#262626]">
        {HIGHLIGHT_COLORS.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => {
              setCurrentColor(c.id);
              onHighlight(c.id);
            }}
            title={`Highlight ${c.label}`}
            className={cn(
              "size-4 rounded-full transition-all duration-150 hover:scale-125 active:scale-95",
              currentColor === c.id
                ? "ring-2 ring-white ring-offset-1 ring-offset-[#1c1c1c] scale-110"
                : "opacity-70 hover:opacity-100",
            )}
            style={{ backgroundColor: c.dotColor }}
          />
        ))}
      </div>

      {/* Add Note / Annotation */}
      <button
        type="button"
        onClick={onAddNote}
        className="flex size-7 items-center justify-center rounded-full text-[#999999] hover:bg-[#262626] hover:text-white transition-all ios-press"
        title="Add note / annotation (N)"
      >
        <MessageSquare className="size-3.5 text-[#0099ff]" />
      </button>

      {/* Copy Plain Text */}
      <button
        type="button"
        onClick={handleCopy}
        className="flex size-7 items-center justify-center rounded-full text-[#999999] hover:bg-[#262626] hover:text-white transition-all ios-press"
        title="Copy selected text"
      >
        {copied ? (
          <Check className="size-3.5 text-[#22c55e]" />
        ) : (
          <Copy className="size-3.5" />
        )}
      </button>
    </div>
  );

  return createPortal(content, document.body);
}
