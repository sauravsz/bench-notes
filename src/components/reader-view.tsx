import { useState, useRef, useEffect, useCallback } from "react";
import type { NoteBlock } from "@/data/types";
import { useHighlights, type HighlightColor } from "@/lib/highlights";
import {
  useAppearance,
  LINE_HEIGHT_CLASSES,
  FONT_FAMILY_CLASSES,
} from "@/lib/appearance";
import { NoteBody } from "./note-body";
import { ReaderControls } from "./reader-controls";
import { SelectionToolbar } from "./selection-toolbar";
import { HighlightPopover } from "./highlight-popover";
import { HighlightsDrawer } from "./highlights-drawer";
import { TableOfContents } from "./table-of-contents";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
export function ReaderView({
  docId,
  docTitle,
  blocks,
  studied,
  onToggleStudied,
}: {
  docId: string;
  docTitle: string;
  blocks: NoteBlock[];
  studied?: boolean;
  onToggleStudied?: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const autoHighlight = useHighlights((s) => s.autoHighlight);
  const currentColor = useHighlights((s) => s.currentColor);
  const addHighlight = useHighlights((s) => s.addHighlight);
  const notebookOpen = useHighlights((s) => s.notebookOpen);
  const setNotebookOpen = useHighlights((s) => s.setNotebookOpen);
  const fontSize = useAppearance((s) => s.fontSize);
  const lineSpacing = useAppearance((s) => s.lineSpacing);
  const fontFamily = useAppearance((s) => s.fontFamily);
  // Manual selection toolbar state
  const [selectedText, setSelectedText] = useState("");
  const [selectedBlockIndex, setSelectedBlockIndex] = useState<number | undefined>(undefined);
  const [selectionRect, setSelectionRect] = useState<DOMRect | null>(null);
  // Clicked highlight popover state
  const [activeHighlightId, setActiveHighlightId] = useState<string | null>(null);
  const [popoverRect, setPopoverRect] = useState<DOMRect | null>(null);
  const [tocOpen, setTocOpen] = useState(false);
  // Handle selection (Auto-highlight or Toolbar)
  const handleMouseUp = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      // If clicking inside an open popover or toolbar, don't re-trigger selection
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("[data-highlight-popover]") ||
        target?.closest("[data-selection-toolbar]")
      ) {
        return;
      }

      // Check if Option/Alt key is held (bypasses auto-highlight for plain copy)
      const altHeld =
        "altKey" in e ? (e as React.MouseEvent).altKey : false;

      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) {
        setSelectedText("");
        setSelectedBlockIndex(undefined);
        setSelectionRect(null);
        return;
      }

      const text = selection.toString().trim();
      // Only highlight if at least 2 non-whitespace characters
      if (text.length < 2) {
        setSelectedText("");
        setSelectedBlockIndex(undefined);
        setSelectionRect(null);
        return;
      }
      // Verify the selection is inside this container
      if (
        containerRef.current &&
        !containerRef.current.contains(selection.anchorNode)
      ) {
        return;
      }

      // Determine which block the selection is in
      let blockIndex: number | undefined;
      const anchorNode = selection.anchorNode;
      const element = anchorNode instanceof Element ? anchorNode : anchorNode?.parentElement;
      const blockEl = element?.closest("[data-block-index]");
      const blockIndexAttr = blockEl?.getAttribute("data-block-index");
      if (blockIndexAttr !== null && blockIndexAttr !== undefined) {
        const parsed = parseInt(blockIndexAttr, 10);
        if (!isNaN(parsed)) {
          blockIndex = parsed;
        }
      }

      if (autoHighlight && !altHeld) {
        try {
          addHighlight({
            docId,
            docTitle,
            text,
            color: currentColor,
            blockIndex,
          });
          toast.success("Highlighted text", {
            description: `Auto-saved to local notebook. Press Shift+H to toggle.`,
            duration: 1800,
          });
          selection.removeAllRanges();
          setSelectedText("");
          setSelectedBlockIndex(undefined);
          setSelectionRect(null);
        } catch {
          // Ignore invalid highlights
        }
      } else {
        // Manual mode or Alt-bypassed: show selection toolbar
        if (!altHeld) {
          const range = selection.getRangeAt(0);
          setSelectionRect(range.getBoundingClientRect());
          setSelectedText(text);
          setSelectedBlockIndex(blockIndex);
        }
      }
    },
    [autoHighlight, currentColor, docId, docTitle, addHighlight],
  );

  const handleManualHighlight = (color?: HighlightColor) => {
    if (!selectedText) return;
    addHighlight({
      docId,
      docTitle,
      text: selectedText,
      color: color || currentColor,
      blockIndex: selectedBlockIndex,
    });
    toast.success("Highlighted text", { duration: 1500 });
    window.getSelection()?.removeAllRanges();
    setSelectedText("");
    setSelectedBlockIndex(undefined);
    setSelectionRect(null);
  };

  const handleManualAddNote = () => {
    if (!selectedText) return;
    const item = addHighlight({
      docId,
      docTitle,
      text: selectedText,
      color: currentColor,
      blockIndex: selectedBlockIndex,
    });
    window.getSelection()?.removeAllRanges();
    setSelectedText("");
    setSelectedBlockIndex(undefined);
    setSelectionRect(null);
    // Open note popover on the newly created highlight
    setActiveHighlightId(item.id);
    setPopoverRect(selectionRect);
  };

  const handleHighlightClick = (id: string, e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    setActiveHighlightId(id);
    setPopoverRect(target.getBoundingClientRect());
  };
  const handleCopyNoteMarkdown = () => {
    let md = `# ${docTitle}\n\n`;
    for (const b of blocks) {
      if (b.type === "h3") md += `### ${b.text}\n\n`;
      else if (b.type === "h4") md += `#### ${b.text}\n\n`;
      else if (b.type === "p") md += `${b.text}\n\n`;
      else if (b.type === "ul") md += b.items.map((it) => `- ${it}`).join("\n") + "\n\n";
      else if (b.type === "ol") md += b.items.map((it, idx) => `${idx + 1}. ${it}`).join("\n") + "\n\n";
      else if (b.type === "callout") md += `> **${b.title}**\n> ${b.body}\n\n`;
      else if (b.type === "def") md += `> **Definition: ${b.term}**\n> ${b.body}\n\n`;
      else if (b.type === "section") md += `## ${b.heading}\n\n`;
      else if (b.type === "table") {
        md += `| ${b.headers.join(" | ")} |\n| ${b.headers.map(() => "---").join(" | ")} |\n`;
        md += b.rows.map((row) => `| ${row.join(" | ")} |`).join("\n") + "\n\n";
      }
    }
    navigator.clipboard.writeText(md);
    toast.success("Note copied as Markdown", {
      description: "Ready to paste in Obsidian, Notion, or text editor.",
    });
  };

  return (
    <div className="relative">
      {/* Reader Controls Toolbar */}
      <ReaderControls
        docId={docId}
        docTitle={docTitle}
        studied={studied}
        onToggleStudied={onToggleStudied}
        onToggleToc={() => setTocOpen(!tocOpen)}
        onCopyMarkdown={handleCopyNoteMarkdown}
      />
      {/* Article Content Container with dynamic Reader appearance */}
      <div
        ref={containerRef}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        style={{ fontSize: `${fontSize}px` }}
        className={cn(
          "relative selection:bg-amber-300/40 dark:selection:bg-amber-700/40 transition-all duration-150",
          LINE_HEIGHT_CLASSES[lineSpacing],
          FONT_FAMILY_CLASSES[fontFamily],
        )}
      >
        <NoteBody
          blocks={blocks}
          docId={docId}
          onHighlightClick={handleHighlightClick}
        />
      </div>
      {/* Floating Selection Toolbar (Manual mode) */}
      {selectionRect && selectedText ? (
        <div data-selection-toolbar>
          <SelectionToolbar
            selectionRect={selectionRect}
            selectedText={selectedText}
            onHighlight={handleManualHighlight}
            onAddNote={handleManualAddNote}
            onClose={() => {
              setSelectedText("");
              setSelectionRect(null);
            }}
          />
        </div>
      ) : null}

      {/* Highlight Details / Edit Popover */}
      {activeHighlightId ? (
        <div data-highlight-popover>
          <HighlightPopover
            highlightId={activeHighlightId}
            targetRect={popoverRect}
            onClose={() => {
              setActiveHighlightId(null);
              setPopoverRect(null);
            }}
          />
        </div>
      ) : null}

      {/* Highlights Notebook Drawer */}
      {notebookOpen ? (
        <HighlightsDrawer
          currentDocId={docId}
          onClose={() => setNotebookOpen(false)}
          onSelectHighlight={(id) => {
            const h = highlights[id];
            if (h && h.docId !== docId && h.docId.startsWith("topic:")) {
              const slug = h.docId.replace("topic:", "");
              window.location.href = `/topic/${slug}`;
              return;
            }
            setNotebookOpen(false);
            const el = document.querySelector(`[data-highlight-id="${id}"]`);
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "center" });
              setActiveHighlightId(id);
              setPopoverRect(el.getBoundingClientRect());
            }
          }}
        />
      ) : null}

      {/* Table of Contents Drawer */}
      <TableOfContents
        blocks={blocks}
        isOpen={tocOpen}
        onClose={() => setTocOpen(false)}
      />
    </div>
  );
}
