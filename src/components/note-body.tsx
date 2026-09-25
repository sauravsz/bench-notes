import type { ReactNode } from "react";
import type { NoteBlock } from "@/data/types";
import { cn } from "@/lib/utils";

function inline(text: string): ReactNode[] {
  const parts = text.split(/(_[^_]+_)/g);
  return parts.map((part, i) => {
    if (part.startsWith("_") && part.endsWith("_") && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return <span key={i}>{part}</span>;
  });
}

function Block({ block }: { block: NoteBlock }) {
  switch (block.type) {
    case "h3":
      return <h3>{inline(block.text)}</h3>;
    case "h4":
      return <h4>{inline(block.text)}</h4>;
    case "p":
      return <p>{inline(block.text)}</p>;
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{inline(item)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((item, i) => (
            <li key={i}>{inline(item)}</li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="mb-5 overflow-x-auto rounded-lg border border-line">
          {block.caption ? (
            <p className="m-0 border-b border-line bg-surface-2 px-3 py-2 text-sm text-muted">
              {block.caption}
            </p>
          ) : null}
          <table>
            <thead>
              <tr>
                {block.headers.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{inline(cell)}</td>
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
          <p className="mb-1 font-serif text-[1.05rem] italic text-ink">
            {block.text}
          </p>
          {block.cite ? (
            <footer className="font-sans text-sm text-muted">
              — {block.cite}
            </footer>
          ) : null}
        </blockquote>
      );
    case "def":
      return (
        <article className="mb-3 rounded-lg border border-line bg-surface px-4 py-3">
          <header className="mb-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <h4 className="m-0 border-0 p-0 font-sans text-sm font-semibold tracking-tight text-ink">
              {block.term}
            </h4>
            {block.section ? (
              <span className="font-sans text-xs uppercase tracking-[0.12em] text-faint">
                {block.section}
              </span>
            ) : null}
          </header>
          <p className="mb-0 text-[1.02rem] leading-relaxed">{inline(block.body)}</p>
        </article>
      );
    case "maxim":
      return (
        <article className="mb-3 rounded-lg border border-line bg-surface-2 px-4 py-3">
          <p className="mb-1 font-serif text-[1.05rem] italic text-ink">
            {block.latin}
          </p>
          <p className="mb-0 text-[0.98rem] text-ink-soft">{block.meaning}</p>
        </article>
      );
    case "callout":
      return (
        <aside className="mb-4 rounded-lg border border-line bg-bg-warm px-4 py-3">
          <p className="mb-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {block.label}
          </p>
          <p className="mb-0 text-[1.02rem]">{inline(block.body)}</p>
        </aside>
      );
    case "tree":
      return (
        <div>
          {block.title ? (
            <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {block.title}
            </p>
          ) : null}
          <pre className="note-tree">{block.lines.join("\n")}</pre>
        </div>
      );
    default:
      return null;
  }
}

export function NoteBody({
  blocks,
  className,
}: {
  blocks: NoteBlock[];
  className?: string;
}) {
  return (
    <div className={cn("note-prose", className)}>
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}
