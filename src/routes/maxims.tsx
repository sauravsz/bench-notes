import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Check, Copy, Search, X } from "lucide-react";
import { maxims } from "@/data";

export const Route = createFileRoute("/maxims")({ component: MaximsPage });

function MaximsPage() {
  const [search, setSearch] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return maxims;
    return maxims.filter((maxim) => {
      const latinMatch = maxim.latin.toLowerCase().includes(q);
      const meaningMatch = maxim.meaning.toLowerCase().includes(q);
      return latinMatch || meaningMatch;
    });
  }, [search]);

  const handleCopy = async (maxim: (typeof maxims)[number]) => {
    const textToCopy = `${maxim.latin} - ${maxim.meaning}`;
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopiedId(maxim.id);
      setTimeout(() => {
        setCopiedId((current) => (current === maxim.id ? null : current));
      }, 2000);
    } catch {
      setCopiedId(maxim.id);
      setTimeout(() => {
        setCopiedId((current) => (current === maxim.id ? null : current));
      }, 2000);
    }
  };

  return (
    <main className="px-4 py-8 sm:px-10 sm:py-10 ios-fade-up">
      <div className="mx-auto max-w-3xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Reference
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl text-ink">
          Latin maxims
        </h1>
        <p className="mt-3 font-serif text-base text-ink-soft">
          Classical legal maxims cited in lecture and their exact doctrine.
        </p>

        {/* Search filter input */}
        <div className="mt-6">
          <label className="flex min-h-11 items-center gap-2.5 rounded-xl border border-line bg-surface px-3.5 shadow-[var(--shadow-border)] focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20 transition-all">
            <Search className="size-4 shrink-0 text-faint" strokeWidth={2} />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Latin maxims or English meanings..."
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

        {/* Count and clear */}
        <div className="mt-3 flex items-center justify-between text-xs font-sans text-muted">
          <p>
            Showing {filtered.length} of {maxims.length} {filtered.length === 1 ? "maxim" : "maxims"}
          </p>
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="font-bold text-accent hover:underline"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Maxim listing / Empty state */}
        {filtered.length === 0 ? (
          <div className="mt-8 rounded-xl border border-dashed border-line bg-surface p-8 text-center">
            <p className="font-serif text-lg font-bold text-ink">
              No matching Latin maxims found
            </p>
            <p className="mt-1 font-serif text-sm text-muted">
              Try searching by Latin phrase, English translation, or legal doctrine.
            </p>
            <button
              type="button"
              onClick={() => setSearch("")}
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 font-sans text-xs font-bold text-ink hover:bg-surface-2 transition-colors"
            >
              Clear search
            </button>
          </div>
        ) : (
          <ul className="mt-6 flex flex-col gap-3">
            {filtered.map((maxim) => (
              <li
                key={maxim.id}
                id={maxim.id}
                className="scroll-mt-28 rounded-xl border border-line bg-surface p-5 transition-all duration-200 ios-card"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-serif text-lg font-bold text-ink italic">
                      {maxim.latin}
                    </h2>
                    <p className="mt-1 font-serif text-base font-bold text-accent">
                      {maxim.meaning}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(maxim)}
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-2.5 py-1.5 text-xs font-sans font-bold text-ink-soft hover:border-line-strong hover:text-ink transition-all duration-200 ios-press"
                    title="Copy Latin maxim and English meaning"
                    aria-label={`Copy ${maxim.latin}`}
                  >
                    {copiedId === maxim.id ? (
                      <>
                        <Check className="size-3.5 text-accent ios-spring-pop" />
                        <span className="text-accent">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5 text-muted" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="mt-3.5 pt-3 border-t border-line/60 flex items-center justify-between">
                  <Link
                    to="/topic/$slug"
                    params={{ slug: "sources-maxims-foundations" }}
                    className="inline-flex items-center gap-1 font-sans text-xs font-bold text-accent hover:underline"
                  >
                    <span>Open related curriculum note</span>
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
