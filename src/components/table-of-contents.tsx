import { useEffect, useState } from "react";
import { ChevronRight, ListOrdered, X } from "lucide-react";
import type { NoteBlock } from "@/data/types";
import { cn } from "@/lib/utils";

export type HeadingItem = {
  id: string;
  title: string;
  level: 2 | 3;
  index: number;
};

export function slugifyHeading(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function extractHeadings(blocks: NoteBlock[]): HeadingItem[] {
  const headings: HeadingItem[] = [];

  blocks.forEach((block, index) => {
    if (block.type === "h3" && block.text) {
      headings.push({
        id: `section-${index}-${slugifyHeading(block.text)}`,
        title: block.text.replace(/^[0-9]+\.\s*/, "").replace(/^_\w+_\s*:\s*/, ""),
        level: 2,
        index,
      });
    } else if (block.type === "h4" && block.text) {
      headings.push({
        id: `concept-${index}-${slugifyHeading(block.text)}`,
        title: block.text.replace(/^[A-Z]\.\s*/, "").replace(/^_\w+_\s*:\s*/, ""),
        level: 3,
        index,
      });
    } else if (block.type === "def" && block.term) {
      headings.push({
        id: `def-${index}-${slugifyHeading(block.term)}`,
        title: `Definition: ${block.term}`,
        level: 3,
        index,
      });
    } else if (block.type === "table" && block.caption) {
      headings.push({
        id: `table-${index}-${slugifyHeading(block.caption)}`,
        title: `Table: ${block.caption}`,
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
      el.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-xl transition-opacity duration-300">
      <div className="flex h-full w-full max-w-md flex-col border-l border-[#262626] bg-[#141414] shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#262626] p-5">
          <div className="flex items-center gap-2">
            <ListOrdered className="size-4 text-[#0099ff]" />
            <h2 className="font-display text-base font-bold text-white">
              Table of Contents
            </h2>
            <span className="rounded-full bg-[#1c1c1c] border border-[#262626] px-2 py-0.2 font-mono text-xs font-bold text-[#999999]">
              {headings.length} Sections
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-[#666666] hover:bg-[#1c1c1c] hover:text-white transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Headings List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {headings.length === 0 ? (
            <div className="py-12 text-center">
              <ListOrdered className="mx-auto size-8 text-[#666666]/40 mb-2" />
              <p className="font-display text-sm font-bold text-white">
                No Section Headings Found
              </p>
              <p className="mt-1 font-sans text-xs text-[#999999]">
                This note does not contain indexed section markers.
              </p>
            </div>
          ) : (
            headings.map((h) => {
              const isActive = activeId === h.id;
              return (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => scrollToHeading(h.id)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-[14px] px-3.5 py-2.5 text-left text-xs transition-all duration-150 group",
                    h.level === 3 ? "pl-7" : "",
                    isActive
                      ? "bg-[#1c1c1c] text-white font-bold border-l-2 border-[#0099ff]"
                      : "text-[#999999] hover:bg-[#1c1c1c] hover:text-white",
                  )}
                >
                  <span className="truncate pr-2">{h.title}</span>
                  <ChevronRight className="size-3.5 text-[#666666] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
