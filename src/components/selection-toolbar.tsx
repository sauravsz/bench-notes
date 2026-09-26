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
      } else if (e.key.toLowerCase() === "h" && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
        e.preventDefault();
        onHighlight();
      } else if (e.key.toLowerCase() === "n" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        onAddNote();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onHighlight, onAddNote, onClose]);

  if (!selectionRect || !selectedText) return null;

  const toolbarWidth = 260;
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 360;
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 800;

  const idealLeft = selectionRect.left + selectionRect.width / 2 - toolbarWidth / 2;
  const left = Math.max(12, Math.min(idealLeft, screenWidth - toolbarWidth - 12));
  const top =
    selectionRect.top < 56
      ? Math.min(screenHeight - 56, selectionRect.bottom + 8)
      : Math.max(12, selectionRect.top - 48);
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
      style={{
        position: "fixed",
        top: `${top}px`,
        left: `${left}px`,
        zIndex: 50,
      }}
      className="flex max-w-[calc(100vw-24px)] items-center gap-1 overflow-x-auto rounded-xl border border-line bg-surface/95 backdrop-blur-md p-1 shadow-xl ios-scale-in"
    >
      <button
        type="button"
        onClick={() => onHighlight(currentColor)}
        title="Highlight (H)"
        className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-sans text-xs font-medium text-ink hover:bg-bg-warm transition-all duration-200 ios-press"
      >
        <Highlighter className="size-3.5 text-accent" />
        <span>Highlight</span>
        <kbd className="text-[10px] text-muted opacity-80">H</kbd>
      </button>

      <div className="h-4 w-px bg-line" />

      {/* Color options */}
      <div className="flex items-center gap-1 px-1">
        {HIGHLIGHT_COLORS.slice(0, 3).map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => {
              setCurrentColor(c.id);
              onHighlight(c.id);
            }}
            title={c.label}
            className={`size-4.5 rounded-full transition-all duration-200 hover:scale-125 active:scale-95 ${
              currentColor === c.id ? "ring-2 ring-primary ring-offset-1 scale-110 ios-spring-pop" : ""
            }`}
            style={{ backgroundColor: c.dotColor }}
          />
        ))}
      </div>

      <div className="h-4 w-px bg-line" />

      <button
        type="button"
        onClick={onAddNote}
        title="Add Note (N)"
        className="flex items-center gap-1 rounded-lg p-1.5 text-muted hover:bg-bg-warm hover:text-ink transition-all duration-200 ios-press"
      >
        <MessageSquare className="size-3.5" />
      </button>

      <button
        type="button"
        onClick={handleCopy}
        title="Copy selected text"
        className={cn(
          "flex items-center gap-1 rounded-lg p-1.5 transition-all duration-200 ios-press",
          copied ? "text-accent bg-accent/10 ios-spring-pop" : "text-muted hover:bg-bg-warm hover:text-ink"
        )}
      >
        <Copy className="size-3.5" />
      </button>
    </div>
  );
}
