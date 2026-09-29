import { useEffect, useState } from "react";
import { Check, Clock, ListOrdered, Sparkles } from "lucide-react";
import type { NoteBlock } from "@/data/types";
import { extractHeadings, type HeadingItem } from "./table-of-contents";
import { cn } from "@/lib/utils";

export function RightRailToc({
  blocks,
  progress,
  studied,
  onToggleStudied,
  className,
}: {
  blocks: NoteBlock[];
  progress: number;
  studied?: boolean;
  onToggleStudied?: () => void;
  className?: string;
}) {
  const [activeId, setActiveId] = useState<string>("");
  const headings = extractHeadings(blocks);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 },
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <aside
      className={cn(
        "no-print sticky top-20 z-10 hidden h-[calc(100dvh-6rem)] w-64 shrink-0 overflow-y-auto pl-6 pr-2 xl:block",
        className,
      )}
    >
      <div className="space-y-6">
        {/* Reading Progress Metric Card */}
        <div className="rounded-[18px] border border-[#262626] bg-[#141414] p-4 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#999999]">
              Reading Progress
            </span>
            <span className="font-mono text-xs font-bold text-[#0099ff]">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#1c1c1c]">
            <div
              className="h-full bg-[#0099ff] transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {onToggleStudied && (
            <button
              type="button"
              onClick={onToggleStudied}
              className={cn(
                "w-full flex items-center justify-center gap-1.5 rounded-full py-1.5 font-sans text-xs font-bold transition-all ios-press mt-2",
                studied
                  ? "bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/40"
                  : "bg-[#1c1c1c] text-white hover:bg-[#262626] border border-[#262626]",
              )}
            >
              <Check className="size-3.5" />
              <span>{studied ? "Studied ✓" : "Mark as Studied (M)"}</span>
            </button>
          )}
        </div>

        {/* Outline List */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 px-1">
            <ListOrdered className="size-3.5 text-[#0099ff]" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#999999]">
              On This Page ({headings.length})
            </span>
          </div>

          <nav className="space-y-0.5 border-l border-[#262626]">
            {headings.map((h) => {
              const isActive = activeId === h.id;
              return (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => scrollToHeading(h.id)}
                  className={cn(
                    "block w-full text-left py-1 text-[11px] leading-snug transition-colors duration-150 -ml-[1px]",
                    h.level === 3 ? "pl-5" : "pl-3",
                    isActive
                      ? "border-l-2 border-[#0099ff] text-white font-bold"
                      : "border-l-2 border-transparent text-[#666666] hover:text-[#999999]",
                  )}
                >
                  <span className="line-clamp-2">{h.title}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Quick Keyboard Reference */}
        <div className="rounded-[16px] border border-[#262626] bg-[#141414] p-3 text-[10px] text-[#666666] space-y-1.5 font-mono">
          <div className="flex items-center justify-between">
            <span>Mark Studied</span>
            <kbd className="rounded bg-[#1c1c1c] px-1 py-0.2 border border-[#262626] text-white">M</kbd>
          </div>
          <div className="flex items-center justify-between">
            <span>Table of Contents</span>
            <kbd className="rounded bg-[#1c1c1c] px-1 py-0.2 border border-[#262626] text-white">T</kbd>
          </div>
          <div className="flex items-center justify-between">
            <span>Auto-Highlight</span>
            <kbd className="rounded bg-[#1c1c1c] px-1 py-0.2 border border-[#262626] text-white">⇧H</kbd>
          </div>
          <div className="flex items-center justify-between">
            <span>Command Search</span>
            <kbd className="rounded bg-[#1c1c1c] px-1 py-0.2 border border-[#262626] text-white">⌘K</kbd>
          </div>
        </div>
      </div>
    </aside>
  );
}
