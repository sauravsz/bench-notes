import { useEffect, useState } from "react";
import { BookOpen, ChevronRight, ListOrdered, X } from "lucide-react";
import { Button } from "./ui/button";
import type { NoteBlock } from "@/data/types";
import { cn } from "@/lib/utils";

export type HeadingItem = {
  id: string;
  title: string;
  level: 2 | 3;
  index: number;
};

export function extractHeadings(blocks: NoteBlock[]): HeadingItem[] {
  const headings: HeadingItem[] = [];
  blocks.forEach((block, index) => {
    if (block.type === "section" && block.heading) {
      headings.push({
        id: `section-${index}-${block.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        title: block.heading,
        level: 2,
        index,
      });
    } else if (block.type === "concept" && block.term) {
      headings.push({
        id: `concept-${index}-${block.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        title: block.term,
        level: 3,
        index,
      });
    } else if (block.type === "table" && block.caption) {
      headings.push({
        id: `table-${index}-${block.caption.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        title: block.caption,
        level: 3,
        index,
      });
    }
  });
  return headings;
}

export function TableOfContents({
  blocks,
  isOpen,
  onClose,
}: {
  blocks: NoteBlock[];
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeId, setActiveId] = useState<string>("");
  const headings = extractHeadings(blocks);

  useEffect(() => {
    if (!isOpen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px" },
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isOpen, headings]);

  if (!isOpen) return null;

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs transition-opacity duration-300">
      <div className="flex h-full w-full max-w-sm flex-col border-l border-line bg-surface shadow-2xl animate-in slide-in-from-right duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
        <div className="flex items-center justify-between border-b border-line p-4">
          <div className="flex items-center gap-2">
            <ListOrdered className="size-4 text-accent" />
            <h2 className="font-serif text-lg font-bold text-ink">
              Table of Contents
            </h2>
            <span className="rounded-full bg-bg-warm px-2 py-0.5 font-sans text-xs font-semibold text-muted">
              {headings.length} sections
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="size-8 rounded-lg ios-press"
            aria-label="Close table of contents"
          >
            <X className="size-4" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {headings.length === 0 ? (
            <p className="text-xs text-muted text-center py-8">
              No section headings detected in this note.
            </p>
          ) : (
            headings.map((h) => (
              <button
                key={h.id}
                type="button"
                onClick={() => scrollToHeading(h.id)}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition-all duration-200 ios-press-subtle",
                  h.level === 3 ? "pl-6 text-[11px]" : "font-semibold",
                  activeId === h.id
                    ? "bg-accent/15 text-accent font-bold"
                    : "text-ink-soft hover:bg-bg-warm hover:text-ink",
                )}
              >
                <span className="truncate pr-2">{h.title}</span>
                <ChevronRight className="size-3 text-muted shrink-0" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
