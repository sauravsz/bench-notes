import { type ReactNode, useMemo } from "react";
import type { NoteBlock } from "@/data/types";
import { HIGHLIGHT_COLORS, useHighlights, type HighlightItem } from "@/lib/highlights";
import { DiagramRenderer } from "./diagrams/diagram-renderer";
import { cn } from "@/lib/utils";

function renderWithHighlights(
  rawText: string,
  docHighlights: HighlightItem[],
  onHighlightClick?: (id: string, rect: DOMRect) => void,
): ReactNode[] {
  if (!rawText) return [];

  const activeHighlights = docHighlights.filter(
    (h) => h.text && rawText.includes(h.text),
  );

  if (activeHighlights.length === 0) {
    return parseInlineMarkdown(rawText);
  }

  activeHighlights.sort((a, b) => b.text.length - a.text.length);

  type Segment =
    | { type: "text"; content: string }
    | { type: "highlight"; highlight: HighlightItem };

  let segments: Segment[] = [{ type: "text", content: rawText }];

  for (const hl of activeHighlights) {
    const nextSegments: Segment[] = [];
    for (const seg of segments) {
      if (seg.type !== "text" || !seg.content.includes(hl.text)) {
        nextSegments.push(seg);
        continue;
      }

      const parts = seg.content.split(hl.text);
      for (let i = 0; i < parts.length; i++) {
        if (parts[i]) {
          nextSegments.push({ type: "text", content: parts[i] });
        }
        if (i < parts.length - 1) {
          nextSegments.push({ type: "highlight", highlight: hl });
        }
      }
    }
    segments = nextSegments;
  }

  return segments.map((seg, idx) => {
    if (seg.type === "highlight") {
      const colorConfig = HIGHLIGHT_COLORS.find(
        (c) => c.id === seg.highlight.color,
      );
      const bgClass =
        colorConfig?.bgClass || "bg-[#0099ff]/30 text-white border-b border-[#0099ff]";

      return (
        <mark
          key={`hl-${seg.highlight.id}-${idx}`}
          data-highlight-id={seg.highlight.id}
          onClick={(e) => {
            e.stopPropagation();
            const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
            onHighlightClick?.(seg.highlight.id, rect);
          }}
          className={cn(
            "cursor-pointer rounded-xs px-1 py-0.5 transition-all hover:brightness-125",
            bgClass,
            seg.highlight.note ? "ring-1 ring-[#0099ff]" : "",
          )}
          title={
            seg.highlight.note
              ? `Note: ${seg.highlight.note}`
              : "Click to edit highlight or note"
          }
        >
          {parseInlineMarkdown(seg.highlight.text)}
          {seg.highlight.note ? (
            <span className="ml-1 inline-block size-1.5 rounded-full bg-[#0099ff] align-middle" />
          ) : null}
        </mark>
      );
    }
    return <span key={`txt-${idx}`}>{parseInlineMarkdown(seg.content)}</span>;
  });
}

function parseInlineMarkdown(text: string): ReactNode[] {
  if (!text) return [];
  const parts = text.split(/(\*\*[^*]+\*\*|__[^_]+__|\*[^*]+\*|_[^_]+_|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (
      (part.startsWith("**") && part.endsWith("**") && part.length > 4) ||
      (part.startsWith("__") && part.endsWith("__") && part.length > 4)
    ) {
      return (
        <strong key={i} className="font-bold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (
      (part.startsWith("*") && part.endsWith("*") && part.length > 2) ||
      (part.startsWith("_") && part.endsWith("_") && part.length > 2)
    ) {
      return (
        <em key={i} className="italic text-[#b3b3b3]">
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return (
        <code
          key={i}
          className="rounded-md border border-[#262626] bg-[#1c1c1c] px-1.5 py-0.5 font-mono text-[12px] text-[#0099ff]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={i}
          href={linkMatch[2]}
          target={linkMatch[2].startsWith("http") ? "_blank" : undefined}
          rel={linkMatch[2].startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-[#0099ff] underline underline-offset-2 hover:text-[#33adff] font-medium transition-colors"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function Block({
  block,
  blockIndex,
  docHighlights,
  onHighlightClick,
}: {
  block: NoteBlock;
  blockIndex: number;
  docHighlights: HighlightItem[];
  onHighlightClick?: (id: string, rect: DOMRect) => void;
}) {
  const blockSpecificHighlights = useMemo(() => {
    return docHighlights.filter((h) => {
      if (h.blockIndex !== undefined) {
        return h.blockIndex === blockIndex;
      }
      return true;
    });
  }, [docHighlights, blockIndex]);

  const render = (text: string) =>
    renderWithHighlights(text, blockSpecificHighlights, onHighlightClick);

  switch (block.type) {
    case "h3": {
      const headingId = `section-${blockIndex}-${block.text.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
      return <h3 id={headingId} className="scroll-mt-24 font-display text-xl sm:text-2xl font-bold tracking-[-0.03em] text-white mt-8 mb-3">{render(block.text)}</h3>;
    }
    case "h4": {
      const headingId = `concept-${blockIndex}-${block.text.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
      return <h4 id={headingId} className="scroll-mt-24 font-display text-base sm:text-lg font-bold text-[#e6e6e6] mt-6 mb-2">{render(block.text)}</h4>;
    }
    case "p":
      return <p className="font-sans text-sm sm:text-base leading-relaxed text-[#d1d1d1] mb-4">{render(block.text)}</p>;
    case "ul":
      return (
        <ul className="space-y-2 mb-5 pl-5 list-disc text-sm sm:text-base text-[#d1d1d1] leading-relaxed">
          {block.items.map((item, i) => (
            <li key={i}>{render(item)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="space-y-2 mb-5 pl-5 list-decimal text-sm sm:text-base text-[#d1d1d1] leading-relaxed">
          {block.items.map((item, i) => (
            <li key={i}>{render(item)}</li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="mb-6 overflow-x-auto rounded-[18px] border border-[#262626] bg-[#141414]">
          {block.caption ? (
            <p className="m-0 border-b border-[#262626] bg-[#1c1c1c] px-4 py-2.5 font-mono text-xs font-semibold text-[#999999]">
              {render(block.caption)}
            </p>
          ) : null}
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#262626] bg-[#1c1c1c]">
                {block.headers.map((h) => (
                  <th key={h} className="px-4 py-3 font-display font-bold text-white">{render(h)}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1a1a1a]">
              {block.rows.map((row, i) => (
                <tr key={i} className="hover:bg-[#181818] transition-colors">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-[#cccccc] leading-relaxed">{render(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "quote":
      return (
        <blockquote className="my-5 rounded-r-[18px] border-l-2 border-[#0099ff] bg-[#141414] px-5 py-4">
          <p className="mb-1 text-sm sm:text-base font-medium text-white italic leading-relaxed">
            {render(block.text)}
          </p>
          {block.cite ? (
            <footer className="font-mono text-xs text-[#999999] mt-2">
              — {render(block.cite)}
            </footer>
          ) : null}
        </blockquote>
      );
    case "def":
      return (
        <article className="mb-4 rounded-[18px] border border-[#262626] bg-[#141414] p-5">
          <header className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
            <h4 className="m-0 font-display text-sm sm:text-base font-bold text-white">
              {render(block.term)}
            </h4>
            {block.section ? (
              <span className="font-mono text-xs font-bold text-[#0099ff]">
                {block.section}
              </span>
            ) : null}
          </header>
          <p className="mb-0 text-xs sm:text-sm leading-relaxed text-[#cccccc]">{render(block.body)}</p>
        </article>
      );
    case "maxim":
      return (
        <article className="mb-4 rounded-[18px] border border-[#262626] bg-[#141414] p-5">
          <p className="mb-1 font-display text-base font-bold text-white tracking-[-0.01em]">
            {render(block.latin)}
          </p>
          <p className="mb-0 text-xs sm:text-sm text-[#999999] leading-relaxed">{render(block.meaning)}</p>
        </article>
      );
    case "callout": {
      const label = block.label || block.title || "Note";
      const body = block.body || block.text || "";
      return (
        <aside className="mb-5 rounded-[18px] border border-[#262626] bg-[#181818] p-5">
          <p className="mb-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#0099ff]">
            {render(label)}
          </p>
          <p className="mb-0 text-xs sm:text-sm leading-relaxed text-[#d1d1d1]">{render(body)}</p>
        </aside>
      );
    }
    case "diagram":
      return (
        <DiagramRenderer
          kind={block.kind}
          title={block.title}
          caption={block.caption}
        />
      );
    case "tree":
      return (
        <div className="my-5 rounded-[18px] border border-[#262626] bg-[#141414] p-5 shadow-xs">
          {block.title ? (
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-[#0099ff]">
              {render(block.title)}
            </p>
          ) : null}
          <pre className="m-0 p-4 rounded-xl bg-[#090909] border border-[#262626] font-mono text-xs leading-relaxed text-[#cccccc] overflow-x-auto">{block.lines.join("\n")}</pre>
        </div>
      );
    default:
      return null;
  }
}

export function NoteBody({
  blocks,
  docId,
  className,
  onHighlightClick,
}: {
  blocks: NoteBlock[];
  docId?: string;
  className?: string;
  onHighlightClick?: (id: string, rect: DOMRect) => void;
}) {
  const highlights = useHighlights((s) => s.highlights);

  const docHighlights = useMemo(() => {
    if (!docId) return [];
    return Object.values(highlights).filter((h) => h.docId === docId);
  }, [highlights, docId]);

  return (
    <div className={cn("note-prose", className)}>
      {blocks.map((block, i) => (
        <div key={i} data-block-index={i} className="block-wrapper">
          <Block
            block={block}
            blockIndex={i}
            docHighlights={docHighlights}
            onHighlightClick={onHighlightClick}
          />
        </div>
      ))}
    </div>
  );
}
