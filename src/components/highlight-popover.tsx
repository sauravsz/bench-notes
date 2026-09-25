import { useState, useEffect, useRef } from "react";
import { Check, Copy, Hash, MessageSquare, Trash2, X } from "lucide-react";
import {
  HIGHLIGHT_COLORS,
  useHighlights,
  type HighlightColor,
} from "@/lib/highlights";
import { Button } from "./ui/button";

export function HighlightPopover({
  highlightId,
  onClose,
  targetRect,
}: {
  highlightId: string;
  onClose: () => void;
  targetRect?: DOMRect | null;
}) {
  const highlight = useHighlights((s) => s.highlights[highlightId]);
  const updateHighlight = useHighlights((s) => s.updateHighlight);
  const removeHighlight = useHighlights((s) => s.removeHighlight);

  const [note, setNote] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [showNoteInput, setShowNoteInput] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 640 : false,
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (highlight) {
      setNote(highlight.note || "");
      setShowNoteInput(Boolean(highlight.note));
    }
  }, [highlight]);
  // Click outside listener
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        onClose();
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

  if (!highlight) return null;

  const handleColorChange = (color: HighlightColor) => {
    updateHighlight(highlightId, { color });
  };

  const handleSaveNote = () => {
    updateHighlight(highlightId, { note: note.trim() });
  };

  const handleAddTag = () => {
    const trimmed = tagInput.trim().toLowerCase().replace(/^#/, "");
    if (!trimmed) return;
    const currentTags = highlight.tags || [];
    if (!currentTags.includes(trimmed)) {
      updateHighlight(highlightId, { tags: [...currentTags, trimmed] });
    }
    setTagInput("");
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const currentTags = highlight.tags || [];
    updateHighlight(highlightId, {
      tags: currentTags.filter((t) => t !== tagToRemove),
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(highlight.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleDelete = () => {
    removeHighlight(highlightId);
    onClose();
  };

  // Position popover
  const popoverWidth = 320;
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 640;
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 800;

  const style: React.CSSProperties = {
    position: "fixed",
    zIndex: 50,
  };

  if (!isMobile) {
    if (targetRect) {
      const top = Math.max(12, Math.min(targetRect.bottom + 8, screenHeight - 340));
      const idealLeft = targetRect.left + targetRect.width / 2 - popoverWidth / 2;
      const left = Math.max(12, Math.min(idealLeft, screenWidth - 332));
      style.top = `${top}px`;
      style.left = `${left}px`;
    } else {
      style.top = "50%";
      style.left = "50%";
      style.transform = "translate(-50%, -50%)";
    }
  }

  const content = (
    <div
      ref={popoverRef}
      style={!isMobile ? style : undefined}
      className={
        isMobile
          ? "fixed bottom-0 left-0 right-0 z-50 w-full max-w-lg mx-auto rounded-t-2xl border-t border-line bg-surface p-4 shadow-2xl animate-in slide-in-from-bottom duration-200 max-h-[85vh] overflow-y-auto pb-safe font-sans"
          : "w-80 rounded-xl border border-line bg-surface p-3.5 shadow-xl animate-in fade-in zoom-in-95 duration-150 font-sans"
      }
    >
      {isMobile && <div className="mx-auto -mt-1 mb-3 h-1.5 w-10 rounded-full bg-line" />}
      <div className="flex items-center justify-between pb-2 border-b border-line/60">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
          Highlight
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleCopy}
            title="Copy highlight text"
            className="rounded p-1 text-muted hover:bg-bg-warm hover:text-ink transition-colors"
          >
            {copied ? (
              <Check className="size-3.5 text-emerald-600" />
            ) : (
              <Copy className="size-3.5" />
            )}
          </button>
          <button
            type="button"
            onClick={handleDelete}
            title="Delete highlight"
            className="rounded p-1 text-muted hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/30 transition-colors"
          >
            <Trash2 className="size-3.5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-muted hover:bg-bg-warm hover:text-ink transition-colors"
          >
            <X className="size-3.5" />
          </button>
        </div>
      </div>
      <div className="my-2.5 max-h-20 overflow-y-auto rounded-md bg-bg-warm/60 p-2 font-serif text-xs font-semibold leading-relaxed text-ink-soft">
        “{highlight.text}”
      </div>
      {/* Color Picker */}
      <div className="flex items-center justify-between gap-1 py-1">
        <span className="text-[11px] font-medium text-muted">Color:</span>
        <div className="flex items-center gap-1.5">
          {HIGHLIGHT_COLORS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => handleColorChange(c.id)}
              title={c.label}
              className={`size-5 rounded-full transition-transform hover:scale-110 ${
                highlight.color === c.id
                  ? "ring-2 ring-primary ring-offset-1 scale-110"
                  : "opacity-80 hover:opacity-100"
              }`}
              style={{ backgroundColor: c.dotColor }}
            />
          ))}
        </div>
      </div>

      {/* Note Section */}
      <div className="mt-2 pt-2 border-t border-line/60">
        {showNoteInput ? (
          <div>
            <label className="block mb-1 text-[11px] font-medium text-muted">
              Note (Shift+Enter for newline):
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              onBlur={handleSaveNote}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSaveNote();
                }
              }}
              placeholder="Add personal note / memory cue..."
              rows={2}
              className="w-full resize-none rounded-md border border-line bg-surface px-2.5 py-1.5 font-sans text-xs text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              autoFocus
            />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowNoteInput(true)}
            className="flex items-center gap-1.5 text-xs font-medium text-accent hover:underline py-0.5"
          >
            <MessageSquare className="size-3.5" />
            Add note or annotation
          </button>
        )}
      </div>

      {/* Tags Section */}
      <div className="mt-2 pt-2 border-t border-line/60">
        <div className="flex flex-wrap gap-1 mb-1.5">
          {highlight.tags?.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded bg-bg-warm px-1.5 py-0.5 text-[10px] font-medium text-ink-soft"
            >
              #{tag}
              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className="text-muted hover:text-rose-500"
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <div className="relative flex-1">
            <Hash className="absolute left-2 top-2 size-3 text-muted" />
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddTag();
                }
              }}
              placeholder="Add tag (e.g. 14-mark, statute)..."
              className="w-full rounded-md border border-line bg-surface py-1 pl-6 pr-2 font-sans text-xs text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none"
            />
          </div>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={handleAddTag}
            className="h-7 px-2 text-xs"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-150"
          onClick={onClose}
        />
        {content}
      </>
    );
  }

  return content;
}
