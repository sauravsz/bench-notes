import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { searchNotes } from "@/data";

export const Route = createFileRoute("/search")({ component: SearchPage });

const kindLabel: Record<string, string> = {
  topic: "Note",
  exam: "Exam",
  glossary: "Glossary",
  maxim: "Maxim",
};

function SearchPage() {
  const [q, setQ] = useState("");
  const hits = useMemo(() => searchNotes(q), [q]);

  return (
    <main className="px-4 py-8 sm:px-10 sm:py-10">
      <div className="mx-auto max-w-2xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Find
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Search the notes
        </h1>
        <label className="mt-6 flex min-h-12 items-center gap-2 rounded-lg border border-line bg-surface px-3 shadow-[var(--shadow-border)] focus-within:ring-2 focus-within:ring-accent/30">
          <Search className="size-4 shrink-0 text-faint" strokeWidth={1.75} />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try offer, Section 2(h), CSR, coercion…"
            className="h-12 w-full bg-transparent font-serif text-base text-ink outline-none placeholder:text-faint"
            autoFocus
          />
        </label>
        <p className="mt-3 font-sans text-sm text-muted">
          {q.trim().length < 2
            ? "Type at least two characters."
            : `${hits.length} result${hits.length === 1 ? "" : "s"}`}
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          {hits.map((hit) => {
            if (hit.kind === "topic") {
              const slug = hit.href.replace("/topic/", "");
              return (
                <li key={hit.href + hit.title}>
                  <Link
                    to="/topic/$slug"
                    params={{ slug }}
                    className="block rounded-lg border border-line bg-surface px-4 py-3 hover:bg-surface-2"
                  >
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-faint">
                      {kindLabel[hit.kind]}
                    </p>
                    <h2 className="mt-0.5 font-serif text-lg font-semibold text-ink">
                      {hit.title}
                    </h2>
                    <p className="mt-1 line-clamp-2 font-serif text-sm text-muted">
                      {hit.snippet}
                    </p>
                  </Link>
                </li>
              );
            }
            if (hit.kind === "exam") {
              const qid = hit.href.replace("/exam/", "");
              return (
                <li key={hit.href + hit.title}>
                  <Link
                    to="/exam/$qid"
                    params={{ qid }}
                    className="block rounded-lg border border-line bg-surface px-4 py-3 hover:bg-surface-2"
                  >
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-faint">
                      {kindLabel[hit.kind]}
                    </p>
                    <h2 className="mt-0.5 font-serif text-lg font-semibold text-ink">
                      {hit.title}
                    </h2>
                    <p className="mt-1 line-clamp-2 font-serif text-sm text-muted">
                      {hit.snippet}
                    </p>
                  </Link>
                </li>
              );
            }
            return (
              <li key={hit.href + hit.title}>
                <a
                  href={hit.href}
                  className="block rounded-lg border border-line bg-surface px-4 py-3 hover:bg-surface-2"
                >
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-faint">
                    {kindLabel[hit.kind]}
                  </p>
                  <h2 className="mt-0.5 font-serif text-lg font-semibold text-ink">
                    {hit.title}
                  </h2>
                  <p className="mt-1 line-clamp-2 font-serif text-sm text-muted">
                    {hit.snippet}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
