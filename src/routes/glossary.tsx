import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { glossary } from "@/data";

export const Route = createFileRoute("/glossary")({ component: GlossaryPage });

function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string>("All");

  const letters = useMemo(() => {
    const set = new Set<string>();
    for (const entry of glossary) {
      const char = entry.term.charAt(0).toUpperCase();
      if (char >= "A" && char <= "Z") {
        set.add(char);
      }
    }
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return [...glossary]
      .sort((a, b) => a.term.localeCompare(b.term))
      .filter((entry) => {
        const matchesLetter =
          selectedLetter === "All" ||
          entry.term.toUpperCase().startsWith(selectedLetter);
        if (!matchesLetter) return false;

        if (!q) return true;

        const termMatch = entry.term.toLowerCase().includes(q);
        const sectionMatch = Boolean(entry.section?.toLowerCase().includes(q));
        const bodyMatch = entry.body.toLowerCase().includes(q);
        return termMatch || sectionMatch || bodyMatch;
      });
  }, [search, selectedLetter]);

  return (
    <main className="px-4 py-8 sm:px-10 sm:py-10">
      <div className="mx-auto max-w-3xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Reference
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl text-ink">
          Legal terms and definitions
        </h1>
        <p className="mt-3 font-serif text-base text-ink-soft">
          Indian Contract Act terminology and doctrine glosses from lecture.
        </p>

        {/* Search filter input */}
        <div className="mt-6">
          <label className="flex min-h-11 items-center gap-2.5 rounded-xl border border-line bg-surface px-3.5 shadow-[var(--shadow-border)] focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20 transition-all">
            <Search className="size-4 shrink-0 text-faint" strokeWidth={2} />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search terms, sections, or definitions..."
              className="h-11 w-full bg-transparent font-serif text-base text-ink outline-none placeholder:text-faint"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="rounded-md p-1 text-faint hover:text-ink transition-colors"
                aria-label="Clear search"
              >
                <X className="size-4" />
              </button>
            )}
          </label>
        </div>

        {/* Alphabetical letter filter pill buttons */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5" role="toolbar" aria-label="Filter terms by first letter">
          <button
            type="button"
            onClick={() => setSelectedLetter("All")}
            className={`rounded-lg px-2.5 py-1 text-xs font-sans font-bold transition-colors ${
              selectedLetter === "All"
                ? "bg-accent text-accent-fg shadow-xs"
                : "border border-line bg-surface text-ink-soft hover:border-line-strong hover:text-ink"
            }`}
          >
            All
          </button>
          {letters.map((letter) => {
            const isSelected = selectedLetter === letter;
            return (
              <button
                key={letter}
                type="button"
                onClick={() => setSelectedLetter(isSelected ? "All" : letter)}
                className={`min-w-7 rounded-lg px-2 py-1 text-center text-xs font-sans font-bold transition-colors ${
                  isSelected
                    ? "bg-accent text-accent-fg shadow-xs"
                    : "border border-line bg-surface text-ink-soft hover:border-line-strong hover:text-ink"
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Count and reset */}
        <div className="mt-3 flex items-center justify-between text-xs font-sans text-muted">
          <p>
            Showing {filtered.length} of {glossary.length} {filtered.length === 1 ? "term" : "terms"}
            {selectedLetter !== "All" && (
              <span className="ml-1 font-bold text-accent">
                (Letter {selectedLetter})
              </span>
            )}
          </p>
          {(search || selectedLetter !== "All") && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedLetter("All");
              }}
              className="font-bold text-accent hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Term listing / Empty state */}
        {filtered.length === 0 ? (
          <div className="mt-8 rounded-xl border border-dashed border-line bg-surface p-8 text-center">
            <p className="font-serif text-lg font-bold text-ink">
              No matching terms found
            </p>
            <p className="mt-1 font-serif text-sm text-muted">
              Try searching for a different word, doctrine, or section number.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedLetter("All");
              }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 font-sans text-xs font-bold text-ink hover:bg-surface-2 transition-colors"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <ul className="mt-6 flex flex-col gap-3">
            {filtered.map((entry) => (
              <li
                key={entry.id}
                id={entry.id}
                className="scroll-mt-28 rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-strong"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-serif text-lg font-bold text-ink">
                    {entry.term}
                  </h2>
                  <span className="font-sans text-xs font-bold tracking-wide text-accent bg-accent/10 px-2 py-0.5 rounded">
                    {entry.section}
                  </span>
                </div>
                <p className="mt-2.5 font-serif text-[0.98rem] leading-relaxed text-ink-soft">
                  {entry.body}
                </p>
                <div className="mt-3.5 pt-3 border-t border-line/60 flex items-center justify-between">
                  <Link
                    to="/topic/$slug"
                    params={{ slug: entry.topicSlug }}
                    className="inline-flex items-center gap-1 font-sans text-xs font-bold text-accent hover:underline"
                  >
                    <span>Open related note</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
