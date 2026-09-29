import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  Check,
  Copy,
  Hash,
  MessageSquare,
  Palette,
  Tag,
  Trash2,
  X,
} from "lucide-react";
import {
  HIGHLIGHT_COLORS,
  useHighlights,
  type HighlightColor,
} from "@/lib/highlights";
import { cn } from "@/lib/utils";

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

  const [activeMenu, setActiveMenu] = useState<"none" | "note" | "tags" | "colors">("none");
  const [noteText, setNoteText] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);

  const popoverRef = useRef<HTMLDivElement>(null);
  const noteTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (highlight) {
      setNoteText(highlight.note || "");
      if (highlight.note) {
        setActiveMenu("note");
      }
    }
  }, [highlight]);

  useEffect(() => {
    if (activeMenu === "note") {
      setTimeout(() => noteTextareaRef.current?.focus(), 50);
    }
  }, [activeMenu]);

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

  // Compute position relative to the true browser viewport
  const computePosition = () => {
    if (!targetRect) return;

    const screenWidth = window.innerWidth;
    const toolbarWidth = 200;

    const articleEl = document.querySelector("article");
    const articleRect = articleEl?.getBoundingClientRect();

    const minLeft = articleRect ? Math.max(16, articleRect.left + 8) : 16;
    const maxRight = articleRect
      ? Math.min(articleRect.right - 8, screenWidth - 280)
      : (screenWidth >= 1280 ? screenWidth - 280 : screenWidth - 16);

    // Center toolbar horizontally over the clicked highlight
    const idealLeft = targetRect.left + targetRect.width / 2 - toolbarWidth / 2;
    const left = Math.max(minLeft, Math.min(idealLeft, maxRight - toolbarWidth));

    // Position directly adjacent: 8px above if room, or 8px below
    let top: number;
    if (targetRect.top >= 52) {
      top = targetRect.top - 46;
    } else {
      top = targetRect.bottom + 8;
    }

    setCoords({ top: Math.round(top), left: Math.round(left) });
  };

  useLayoutEffect(() => {
    computePosition();
  }, [targetRect]);

  useEffect(() => {
    window.addEventListener("scroll", computePosition, { passive: true });
    window.addEventListener("resize", computePosition);
    return () => {
      window.removeEventListener("scroll", computePosition);
      window.removeEventListener("resize", computePosition);
    };
  }, [targetRect]);

  if (!highlight || !mounted) return null;

  const colorConfig = HIGHLIGHT_COLORS.find((c) => c.id === highlight.color);

  const handleColorSelect = (color: HighlightColor) => {
    updateHighlight(highlightId, { color });
    setActiveMenu("none");
  };

  const handleSaveNote = () => {
    updateHighlight(highlightId, { note: noteText.trim() });
    setActiveMenu("none");
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
    setTimeout(() => setCopied(false), 1200);
  };

  const handleDelete = () => {
    removeHighlight(highlightId);
    onClose();
  };

  const topPos = coords?.top ?? (targetRect ? Math.max(16, targetRect.top - 46) : 60);
  const leftPos = coords?.left ?? (targetRect ? Math.max(16, targetRect.left) : 60);

  const style: React.CSSProperties = {
    position: "fixed",
    zIndex: 9999,
    top: `${topPos}px`,
    left: `${leftPos}px`,
  };

  const content = (
    <div
      ref={popoverRef}
      style={style}
      data-highlight-popover
      className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-150 font-sans"
    >
      {/* 1. Sleek Readwise Floating Action Pill */}
      <div className="flex items-center gap-1 rounded-full border border-[#333333] bg-[#1c1c1c]/95 px-2 py-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-xl">
        {/* Color circle / Delete trigger */}
        <button
          type="button"
          onClick={() => setActiveMenu(activeMenu === "colors" ? "none" : "colors")}
          className="flex size-5.5 items-center justify-center rounded-full transition-transform hover:scale-110 active:scale-95 shadow-xs"
          style={{ backgroundColor: colorConfig?.dotColor || "#eab308" }}
          title={`Color: ${colorConfig?.label}. Click to switch color.`}
        >
          <X
            className="size-3 text-black/70 hover:text-black transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
          />
        </button>

        {/* Note Icon (with indicator dot if note exists) */}
        <button
          type="button"
          onClick={() => setActiveMenu(activeMenu === "note" ? "none" : "note")}
          className={cn(
            "relative flex size-7 items-center justify-center rounded-full transition-all ios-press",
            activeMenu === "note"
              ? "bg-[#2d3748] text-white"
              : "text-[#999999] hover:bg-[#262626] hover:text-white",
          )}
          title="Add or edit note"
        >
          <MessageSquare className="size-3.5" />
          {highlight.note ? (
            <span className="absolute right-1 top-1 size-1.5 rounded-full bg-[#0099ff]" />
          ) : null}
        </button>

        {/* Tag Icon */}
        <button
          type="button"
          onClick={() => setActiveMenu(activeMenu === "tags" ? "none" : "tags")}
          className={cn(
            "relative flex size-7 items-center justify-center rounded-full transition-all ios-press",
            activeMenu === "tags"
              ? "bg-[#2d3748] text-white"
              : "text-[#999999] hover:bg-[#262626] hover:text-white",
          )}
          title="Add tags"
        >
          <Tag className="size-3.5" />
          {highlight.tags && highlight.tags.length > 0 ? (
            <span className="absolute right-1 top-1 size-1.5 rounded-full bg-amber-400" />
          ) : null}
        </button>

        {/* Copy Icon */}
        <button
          type="button"
          onClick={handleCopy}
          className="flex size-7 items-center justify-center rounded-full text-[#999999] hover:bg-[#262626] hover:text-white transition-all ios-press"
          title="Copy highlighted text"
        >
          {copied ? (
            <Check className="size-3.5 text-[#22c55e]" />
          ) : (
            <Copy className="size-3.5" />
          )}
        </button>

        {/* Delete Icon */}
        <button
          type="button"
          onClick={handleDelete}
          className="flex size-7 items-center justify-center rounded-full text-[#999999] hover:bg-rose-950/50 hover:text-rose-400 transition-all ios-press"
          title="Delete highlight"
        >
          <Trash2 className="size-3.5" />
        </button>
      </div>

      {/* 2. Readwise Note Submenu Popover Card */}
      {activeMenu === "note" && (
        <div className="mt-2 w-72 rounded-[18px] border border-[#333333] bg-[#1c1c1c] p-3.5 shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150">
          <textarea
            ref={noteTextareaRef}
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSaveNote();
              }
            }}
            placeholder="Add a note..."
            rows={3}
            className="w-full resize-none bg-transparent font-sans text-xs leading-relaxed text-white placeholder:text-[#666666] focus:outline-none"
          />
          <div className="mt-2.5 flex items-center justify-end gap-2 border-t border-[#262626] pt-2">
            <button
              type="button"
              onClick={() => setActiveMenu("none")}
              className="px-2.5 py-1 text-xs font-medium text-[#999999] hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSaveNote}
              className="rounded-md bg-[#2d3748] hover:bg-[#3b475a] px-3 py-1 font-sans text-xs font-semibold text-white transition-all ios-press"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* 3. Readwise Tag Submenu Popover Card */}
      {activeMenu === "tags" && (
        <div className="mt-2 w-72 rounded-[18px] border border-[#333333] bg-[#1c1c1c] p-3 shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150 space-y-2">
          {highlight.tags && highlight.tags.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {highlight.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-[#141414] border border-[#262626] px-2 py-0.5 text-[10px] font-mono text-[#999999]"
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
              className="flex-1 rounded-md border border-[#262626] bg-[#090909] px-2.5 py-1 text-xs text-white placeholder:text-[#666666] focus:border-[#0099ff] focus:outline-none"
              autoFocus
            />
            <button
              type="button"
              onClick={handleAddTag}
              disabled={!tagInput.trim()}
              className="rounded-md bg-[#2d3748] hover:bg-[#3b475a] px-2.5 py-1 text-xs font-semibold text-white transition-all"
            >
              Add
            </button>
          </div>
        </div>
      )}

      {/* 4. Inline Color Palette Switcher */}
      {activeMenu === "colors" && (
        <div className="mt-2 flex items-center gap-1.5 rounded-full border border-[#333333] bg-[#1c1c1c] p-1.5 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
          {HIGHLIGHT_COLORS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => handleColorSelect(c.id)}
              title={c.label}
              className={cn(
                "size-5 rounded-full transition-transform hover:scale-120 active:scale-95",
                highlight.color === c.id
                  ? "ring-2 ring-white ring-offset-1 ring-offset-[#1c1c1c] scale-110"
                  : "opacity-80 hover:opacity-100",
              )}
              style={{ backgroundColor: c.dotColor }}
            />
          ))}
        </div>
      )}
    </div>
  );

  return createPortal(content, document.body);
}
