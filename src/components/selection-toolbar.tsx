import { useEffect, useState } from "react";
import { Copy, Highlighter, MessageSquare, Tag } from "lucide-react";
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
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onHighlight, onAddNote, onClose]);

  if (!selectionRect || !selectedText) return null;

  const toolbarWidth = 270;
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1024;
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 800;

  // Determine article boundaries to avoid Right-Rail TOC collision
  const articleEl = typeof document !== "undefined" ? document.querySelector("article") : null;
  const articleRect = articleEl?.getBoundingClientRect();

  const minLeft = articleRect ? Math.max(16, articleRect.left + 12) : 16;
  const maxRight = articleRect
    ? Math.min(articleRect.right - 12, screenWidth - 290)
    : (screenWidth >= 1280 ? screenWidth - 290 : screenWidth - 16);

  const idealLeft = selectionRect.left + selectionRect.width / 2 - toolbarWidth / 2;
  const left = Math.max(minLeft, Math.min(idealLeft, maxRight - toolbarWidth));
  const top =
    selectionRect.top < 60
      ? selectionRect.bottom + 8
      : selectionRect.top - 50;

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedText);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1000);
  };

  return (
    <div
      data-selection-toolbar
      style={{
        position: "fixed",
        top: `${top}px`,
        left: `${left}px`,
        zIndex: 95,
      }}
      className="flex items-center gap-1.5 rounded-full border border-[#262626] bg-[#141414]/95 p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150 font-sans"
    >
      {/* Primary Highlight button */}
      <button
        type="button"
        onClick={() => onHighlight(currentColor)}
        className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-black hover:bg-white/90 transition-all ios-press"
        title="Highlight selection (H)"
      >
        <Highlighter className="size-3.5 text-black" strokeWidth={2.2} />
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
                ? "ring-2 ring-white ring-offset-1 ring-offset-[#141414] scale-110"
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
        className="flex size-7 items-center justify-center rounded-full text-[#999999] hover:bg-[#1c1c1c] hover:text-white transition-all ios-press"
        title="Add note / annotation (N)"
      >
        <MessageSquare className="size-3.5 text-[#0099ff]" />
      </button>

      {/* Copy Plain Text */}
      <button
        type="button"
        onClick={handleCopy}
        className="flex size-7 items-center justify-center rounded-full text-[#999999] hover:bg-[#1c1c1c] hover:text-white transition-all ios-press"
        title="Copy selected text"
      >
        <Copy className="size-3.5" />
      </button>
    </div>
  );
}
