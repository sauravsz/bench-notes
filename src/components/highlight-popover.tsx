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
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (highlight) {
      setNote(highlight.note || "");
      setShowNoteInput(Boolean(highlight.note));
    }
  }, [highlight]);

  // Click outside & Escape listener
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
    const clean = tagInput.trim().replace(/^#/, "");
    if (!clean) return;
    const currentTags = highlight.tags || [];
    if (!currentTags.includes(clean)) {
      updateHighlight(highlightId, { tags: [...currentTags, clean] });
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

  // Smart Adaptive Positioning Mathematics
  const popoverWidth = 320;
  const estimatedHeight = 350;
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1024;
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 800;

  // On desktop screens (>=1280px), account for the 280px right-rail TOC
  const maxRightBound =
    screenWidth >= 1280 ? screenWidth - 290 : screenWidth - 16;

  const style: React.CSSProperties = {
    position: "fixed",
    zIndex: 100,
  };

  if (!isMobile) {
    if (targetRect) {
      // Horizontal positioning with right-rail avoidance
      const idealLeft =
        targetRect.left + targetRect.width / 2 - popoverWidth / 2;
      const left = Math.max(
        16,
        Math.min(idealLeft, maxRightBound - popoverWidth),
      );

      // Vertical positioning: check if there is enough space below vs above
      const spaceBelow = screenHeight - targetRect.bottom;
      const spaceAbove = targetRect.top;

      let top: number;
      if (spaceBelow < estimatedHeight + 20 && spaceAbove > spaceBelow) {
        // Place ABOVE target
        top = Math.max(64, targetRect.top - estimatedHeight - 10);
      } else {
        // Place BELOW target
        top = Math.max(
          64,
          Math.min(targetRect.bottom + 10, screenHeight - estimatedHeight - 16),
        );
      }

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
          ? "fixed bottom-0 left-0 right-0 z-[100] w-full max-w-lg mx-auto rounded-t-[28px] border-t border-[#262626] bg-[#141414] backdrop-blur-2xl p-5 shadow-2xl ios-sheet-enter max-h-[85vh] overflow-y-auto pb-safe font-sans"
          : "w-80 rounded-[22px] border border-[#262626] bg-[#141414] backdrop-blur-2xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.06)] ios-scale-in font-sans"
      }
    >
      {isMobile && (
        <div className="mx-auto -mt-1 mb-3 h-1.5 w-10 rounded-full bg-[#262626]" />
      )}

      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-[#262626]">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#999999]">
          Highlight Actions
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleCopy}
            title="Copy highlight text"
            className="rounded-full p-1.5 text-[#666666] hover:bg-[#1c1c1c] hover:text-white transition-colors"
          >
            {copied ? (
              <Check className="size-3.5 text-[#22c55e]" />
            ) : (
              <Copy className="size-3.5" />
            )}
          </button>
          <button
            type="button"
            onClick={handleDelete}
            title="Delete highlight"
            className="rounded-full p-1.5 text-[#666666] hover:bg-rose-950/40 hover:text-rose-400 transition-colors"
          >
            <Trash2 className="size-3.5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-[#666666] hover:bg-[#1c1c1c] hover:text-white transition-colors"
          >
            <X className="size-3.5" />
          </button>
        </div>
      </div>

      {/* Snippet Preview */}
      <div className="my-2.5 max-h-20 overflow-y-auto rounded-[14px] bg-[#090909] p-2.5 font-sans text-xs leading-relaxed text-[#cccccc] border-l-2 border-[#0099ff] border-y border-r border-[#262626]">
        “{highlight.text}”
      </div>

      {/* Color Picker */}
      <div className="flex items-center justify-between gap-1 py-1">
        <span className="text-[11px] font-mono font-medium text-[#999999]">Color:</span>
        <div className="flex items-center gap-1.5">
          {HIGHLIGHT_COLORS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => handleColorChange(c.id)}
              title={c.label}
              className={`size-5 rounded-full transition-all duration-150 hover:scale-115 active:scale-95 ${
                highlight.color === c.id
                  ? "ring-2 ring-white ring-offset-2 ring-offset-[#141414] scale-110"
                  : "opacity-70 hover:opacity-100"
              }`}
              style={{ backgroundColor: c.dotColor }}
            />
          ))}
        </div>
      </div>

      {/* Note Section */}
      <div className="mt-2.5 pt-2.5 border-t border-[#262626]">
        {showNoteInput ? (
          <div>
            <label className="block mb-1.5 text-[11px] font-mono text-[#999999]">
              Annotation:
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
              placeholder="Add note or memory cue (Enter to save)..."
              rows={2}
              className="w-full resize-none rounded-[14px] border border-[#262626] bg-[#090909] px-3 py-2 text-xs text-white placeholder:text-[#666666] focus:border-[#0099ff] focus:outline-none"
              autoFocus
            />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowNoteInput(true)}
            className="flex items-center gap-1.5 text-xs font-medium text-[#0099ff] hover:underline py-0.5"
          >
            <MessageSquare className="size-3.5" />
            Add note or annotation
          </button>
        )}
      </div>

      {/* Tags Section */}
      <div className="mt-2.5 pt-2.5 border-t border-[#262626]">
        {highlight.tags && highlight.tags.length > 0 ? (
          <div className="flex flex-wrap gap-1 mb-2">
            {highlight.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full bg-[#1c1c1c] border border-[#262626] px-2 py-0.2 text-[10px] font-mono text-[#999999]"
              >
                #{tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="text-[#666666] hover:text-rose-400"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        ) : null}

        <div className="flex items-center gap-1.5">
          <div className="relative flex-1">
            <Hash className="absolute left-2.5 top-2 size-3 text-[#666666]" />
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
              placeholder="Add tag (e.g. 14-mark)..."
              className="w-full rounded-full border border-[#262626] bg-[#090909] py-1 pl-7 pr-2 font-sans text-xs text-white placeholder:text-[#666666] focus:border-[#0099ff] focus:outline-none"
            />
          </div>
          <Button
            type="button"
            size="sm"
            onClick={handleAddTag}
            disabled={!tagInput.trim()}
            className="h-7 px-3 text-xs rounded-full bg-white text-black hover:bg-white/90 font-bold"
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
          className="fixed inset-0 z-[95] bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={onClose}
        />
        {content}
      </>
    );
  }

  return content;
}
