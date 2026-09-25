import { type ReactNode, useMemo } from "react";
import type { NoteBlock } from "@/data/types";
import { HIGHLIGHT_COLORS, useHighlights, type HighlightItem } from "@/lib/highlights";
import { DiagramRenderer } from "./diagrams/diagram-renderer";
import { cn } from "@/lib/utils";
function renderWithHighlights(
  rawText: string,
  docHighlights: HighlightItem[],
  onHighlightClick?: (id: string, e: React.MouseEvent) => void,
): ReactNode[] {
  if (!rawText) return [];

  // Filter highlights that exist within rawText
  const activeHighlights = docHighlights.filter(
    (h) => h.text && rawText.includes(h.text),
  );

  if (activeHighlights.length === 0) {
    // Normal inline markdown parser
    return parseInlineMarkdown(rawText);
  }

  // Sort by length descending to match longest phrases first
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
        colorConfig?.bgClass || "bg-yellow-200/70 text-ink border-b-2 border-yellow-400";

      return (
        <mark
          key={`hl-${seg.highlight.id}-${idx}`}
          data-highlight-id={seg.highlight.id}
          onClick={(e) => {
            e.stopPropagation();
            onHighlightClick?.(seg.highlight.id, e);
          }}
          className={cn(
            "cursor-pointer rounded-xs px-0.5 py-0.2 transition-all hover:brightness-95",
            bgClass,
            seg.highlight.note ? "ring-1 ring-accent/60" : "",
          )}
          title={
            seg.highlight.note
              ? `Note: ${seg.highlight.note}`
              : "Click to edit highlight or note"
          }
        >
          {parseInlineMarkdown(seg.highlight.text)}
          {seg.highlight.note ? (
            <span className="ml-1 inline-block size-1.5 rounded-full bg-accent align-middle" />
          ) : null}
        </mark>
      );
    }
    return <span key={`txt-${idx}`}>{parseInlineMarkdown(seg.content)}</span>;
  });
}

function parseInlineMarkdown(text: string): ReactNode[] {
  const parts = text.split(/(_[^_]+_|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (
      (part.startsWith("_") && part.endsWith("_") && part.length > 2) ||
      (part.startsWith("*") && part.endsWith("*") && part.length > 2)
    ) {
      return (
        <strong key={i} className="font-bold text-ink">
          {part.slice(1, -1)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function Block({
  block,
  docHighlights,
  onHighlightClick,
}: {
  block: NoteBlock;
  docHighlights: HighlightItem[];
  onHighlightClick?: (id: string, e: React.MouseEvent) => void;
}) {
  const render = (text: string) =>
    renderWithHighlights(text, docHighlights, onHighlightClick);

  switch (block.type) {
    case "h3":
      return <h3>{render(block.text)}</h3>;
    case "h4":
      return <h4>{render(block.text)}</h4>;
    case "p":
      return <p>{render(block.text)}</p>;
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{render(item)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((item, i) => (
            <li key={i}>{render(item)}</li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="mb-5 overflow-x-auto rounded-lg border border-line">
          {block.caption ? (
            <p className="m-0 border-b border-line bg-surface-2 px-3 py-2 text-sm text-muted">
              {render(block.caption)}
            </p>
          ) : null}
          <table>
            <thead>
              <tr>
                {block.headers.map((h) => (
                  <th key={h}>{render(h)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{render(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "quote":
      return (
        <blockquote className="my-4 border-l-2 border-accent/40 bg-surface-2 px-4 py-3">
          <p className="mb-1 font-serif text-[1.05rem] font-medium text-ink">
            {render(block.text)}
          </p>
          {block.cite ? (
            <footer className="font-sans text-sm font-semibold text-muted">
              — {render(block.cite)}
            </footer>
          ) : null}
        </blockquote>
      );
    case "def":
      return (
        <article className="mb-3 rounded-lg border border-line bg-surface px-4 py-3">
          <header className="mb-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <h4 className="m-0 border-0 p-0 font-sans text-sm font-semibold tracking-tight text-ink">
              {render(block.term)}
            </h4>
            {block.section ? (
              <span className="font-sans text-xs uppercase tracking-[0.12em] text-faint">
                {block.section}
              </span>
            ) : null}
          </header>
          <p className="mb-0 text-[1.02rem] leading-relaxed">{render(block.body)}</p>
        </article>
      );
    case "maxim":
      return (
        <article className="mb-3 rounded-lg border border-line bg-surface-2 px-4 py-3">
          <p className="mb-1 font-serif text-[1.05rem] font-bold text-ink">
            {render(block.latin)}
          </p>
          <p className="mb-0 text-[0.98rem] text-ink-soft">{render(block.meaning)}</p>
        </article>
      );
    case "callout":
      return (
        <aside className="mb-4 rounded-lg border border-line bg-bg-warm px-4 py-3">
          <p className="mb-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {render(block.label)}
          </p>
          <p className="mb-0 text-[1.02rem]">{render(block.body)}</p>
        </aside>
      );
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
        <div className="my-5 rounded-xl border border-line bg-surface p-4 shadow-xs">
          {block.title ? (
            <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {render(block.title)}
            </p>
          ) : null}
          <pre className="note-tree m-0 p-3 rounded-lg bg-bg-warm/70 font-mono text-xs leading-relaxed text-ink-soft overflow-x-auto">{block.lines.join("\n")}</pre>
        </div>
      );
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
  onHighlightClick?: (id: string, e: React.MouseEvent) => void;
}) {
  const highlights = useHighlights((s) => s.highlights);

  const docHighlights = useMemo(() => {
    if (!docId) return [];
    return Object.values(highlights).filter((h) => h.docId === docId);
  }, [highlights, docId]);

  return (
    <div className={cn("note-prose", className)}>
      {blocks.map((block, i) => (
        <Block
          key={i}
          block={block}
          docHighlights={docHighlights}
          onHighlightClick={onHighlightClick}
        />
      ))}
    </div>
  );
}
