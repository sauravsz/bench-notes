import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, GraduationCap, Search, X } from "lucide-react";
import { allCourses, searchGlobalNotes, type GlobalSearchHit } from "@/data/courses";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/search")({ component: SearchPage });

const kindBadge: Record<string, { label: string; class: string }> = {
  topic: { label: "Lecture Note", class: "bg-sky-100 text-sky-800 dark:bg-sky-950/50 dark:text-sky-300" },
  exam: { label: "Model Answer", class: "bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-300" },
  glossary: { label: "Glossary Term", class: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300" },
  maxim: { label: "Latin Maxim", class: "bg-purple-100 text-purple-800 dark:bg-purple-950/50 dark:text-purple-300" },
};

function SearchPage() {
  const [query, setQuery] = useState("");
  const [selectedCourseSlug, setSelectedCourseSlug] = useState<string>("all");

  const hits = useMemo(
    () =>
      searchGlobalNotes(
        query,
        selectedCourseSlug === "all" ? undefined : selectedCourseSlug,
      ),
    [query, selectedCourseSlug],
  );

  return (
    <main className="px-4 py-8 sm:px-10 sm:py-10 ios-fade-up">
      <div className="mx-auto max-w-3xl space-y-6">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-0.5 font-sans text-xs font-bold text-accent">
              <Search className="size-3.5" />
              Global Curriculum Search
            </span>
            <span className="font-sans text-xs font-semibold text-muted">
              8 MBA Papers
            </span>
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Search All Notes & Answers
          </h1>
          <p className="mt-1 font-serif text-base text-ink-soft">
            Instant full-text search across all 8 MBA papers, lecture modules, 19+ model exam answers, and glossaries.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-3.5 size-5 text-muted" strokeWidth={1.75} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search statutes, PESTLE, LPP, 7 Cs, Bullwhip, Consideration, Salomon..."
            className="h-12 w-full rounded-xl border border-line bg-surface py-2 pl-12 pr-10 font-serif text-base text-ink shadow-sm outline-none placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
            autoFocus
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3.5 top-3.5 text-muted hover:text-ink transition-all duration-200 ios-press"
            >
              <X className="size-5" />
            </button>
          ) : null}
        </div>

        {/* Course Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            type="button"
            onClick={() => setSelectedCourseSlug("all")}
            className={cn(
              "rounded-full px-3 py-1 font-sans text-xs font-semibold transition-all duration-200 shrink-0 ios-press",
              selectedCourseSlug === "all"
                ? "bg-ink text-surface font-bold shadow-2xs scale-105"
                : "bg-bg-warm text-muted hover:text-ink",
            )}
          >
            All 8 Papers
          </button>
          {allCourses.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setSelectedCourseSlug(c.slug)}
              className={cn(
                "rounded-full px-2.5 py-1 font-sans text-xs font-medium transition-all duration-200 shrink-0 border ios-press",
                selectedCourseSlug === c.slug
                  ? "bg-accent text-white border-accent font-bold shadow-2xs scale-105"
                  : "bg-surface text-muted border-line hover:text-ink",
              )}
            >
              {c.code}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-muted border-b border-line pb-2">
          <span>
            {query.trim().length < 2
              ? "Type at least two characters to search across all courses."
              : `${hits.length} result${hits.length === 1 ? "" : "s"} found`}
          </span>
          {selectedCourseSlug !== "all" ? (
            <button
              type="button"
              onClick={() => setSelectedCourseSlug("all")}
              className="text-accent hover:underline font-medium"
            >
              Clear filter
            </button>
          ) : null}
        </div>

        {/* Results List */}
        <ul className="space-y-3">
          {hits.map((hit) => {
            const badge = kindBadge[hit.kind] || {
              label: "Note",
              class: "bg-bg-warm text-ink",
            };

            return (
              <li key={hit.href + hit.title}>
                <a
                  href={hit.href}
                  className="group block rounded-xl border border-line bg-surface p-4 shadow-2xs transition-all duration-200 ios-card"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-bg-warm px-1.5 py-0.5 font-sans text-[10px] font-bold text-ink border border-line">
                        {hit.courseCode}
                      </span>
                      <span className="font-sans text-xs font-semibold text-muted">
                        {hit.courseTitle}
                      </span>
                    </div>
                    <span
                      className={cn(
                        "rounded px-2 py-0.2 font-sans text-[10px] font-bold uppercase tracking-wider",
                        badge.class,
                      )}
                    >
                      {badge.label}
                    </span>
                  </div>

                  <h2 className="font-serif text-lg font-bold text-ink group-hover:text-accent transition-colors">
                    {hit.title}
                  </h2>
                  <p className="mt-1 line-clamp-2 font-serif text-xs leading-relaxed text-ink-soft">
                    {hit.snippet}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-line/50 flex items-center justify-end text-xs font-bold text-accent group-hover:underline">
                    <span>Open {badge.label}</span>
                    <ArrowRight className="size-3.5 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
