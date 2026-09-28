import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { allCourses, searchGlobalNotes, type GlobalSearchHit } from "@/data/courses";
import { useCurrentCourse } from "@/lib/current-course";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/search")({ component: SearchPage });

const kindBadge: Record<string, { label: string; class: string }> = {
  topic: { label: "Lecture Note", class: "bg-[#0099ff]/15 text-[#0099ff] border border-[#0099ff]/30" },
  exam: { label: "Model Answer", class: "bg-amber-500/15 text-amber-400 border border-amber-500/30" },
  glossary: { label: "Glossary Term", class: "bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/30" },
  maxim: { label: "Latin Maxim", class: "bg-[#d44df0]/15 text-[#d44df0] border border-[#d44df0]/30" },
};

function SearchPage() {
  const [query, setQuery] = useState("");
  const [selectedCourseSlug, setSelectedCourseSlug] = useState<string>("all");
  const setActiveCourseSlug = useCurrentCourse((s) => s.setActiveCourseSlug);
  const hits = useMemo(
    () =>
      searchGlobalNotes(
        query,
        selectedCourseSlug === "all" ? undefined : selectedCourseSlug,
      ),
    [query, selectedCourseSlug],
  );

  return (
    <main className="px-4 py-8 sm:px-10 sm:py-12 ios-fade-up bg-[#090909]">
      <div className="mx-auto max-w-3xl space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0099ff]">
              <Search className="size-3.5" />
              Global Curriculum Search
            </span>
            <span className="font-mono text-xs text-[#666666]">
              8 MBA Papers
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-white">
            Search All Notes & Answers
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#999999] leading-relaxed">
            Instant full-text search across all 8 MBA papers, lecture modules, model exam answers, and Latin maxims.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-3.5 size-5 text-[#666666]" strokeWidth={1.75} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search statutes, consideration, frustration, caveat emptor, salomon, 603..."
            className="h-12 w-full rounded-full border border-[#262626] bg-[#141414] py-2 pl-12 pr-10 font-sans text-sm text-white placeholder:text-[#666666] focus:border-[#0099ff] focus:outline-none transition-all duration-200"
            autoFocus
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3.5 top-3.5 text-[#666666] hover:text-white transition-colors"
            >
              <X className="size-5" />
            </button>
          )}
        </div>

        {/* Course Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            type="button"
            onClick={() => setSelectedCourseSlug("all")}
            className={cn(
              "rounded-full px-3.5 py-1 font-sans text-xs font-semibold transition-all duration-200 shrink-0",
              selectedCourseSlug === "all"
                ? "bg-white text-black font-bold shadow-xs"
                : "bg-[#141414] text-[#999999] border border-[#262626] hover:text-white",
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
                "rounded-full px-3 py-1 font-mono text-xs font-bold transition-all duration-200 shrink-0 border",
                selectedCourseSlug === c.slug
                  ? "bg-[#0099ff] text-white border-[#0099ff] shadow-xs"
                  : "bg-[#141414] text-[#999999] border-[#262626] hover:text-white",
              )}
            >
              {c.code}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#999999] border-b border-[#262626] pb-2 font-mono">
          <span>
            {query.trim().length < 2
              ? "Type at least two characters to search across all courses."
              : `${hits.length} result${hits.length === 1 ? "" : "s"} found`}
          </span>
          {selectedCourseSlug !== "all" && (
            <button
              type="button"
              onClick={() => setSelectedCourseSlug("all")}
              className="text-[#0099ff] hover:underline font-medium"
            >
              Clear filter
            </button>
          )}
        </div>

        {/* Results List */}
        <ul className="space-y-3">
          {hits.map((hit) => {
            const badge = kindBadge[hit.kind] || {
              label: "Note",
              class: "bg-[#1c1c1c] text-white",
            };

            return (
              <li key={hit.href + hit.title}>
                <Link
                  to={hit.href}
                  onClick={() => setActiveCourseSlug(hit.courseSlug)}
                  className="group block rounded-[20px] border border-[#262626] bg-[#141414] p-5 shadow-xs transition-all duration-200 hover:border-[#383838] hover:bg-[#181818]"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-[#1c1c1c] px-2 py-0.2 font-mono text-[10px] font-bold text-white border border-[#262626]">
                        {hit.courseCode}
                      </span>
                      <span className="font-sans text-xs text-[#999999]">
                        {hit.courseTitle}
                      </span>
                    </div>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.2 font-mono text-[10px] font-bold uppercase tracking-wider",
                        badge.class,
                      )}
                    >
                      {badge.label}
                    </span>
                  </div>

                  <h2 className="font-display text-lg font-bold text-white group-hover:text-[#0099ff] transition-colors leading-snug">
                    {hit.title}
                  </h2>
                  <p className="mt-1 line-clamp-2 font-sans text-xs leading-relaxed text-[#999999]">
                    {hit.snippet}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-[#1f1f1f] flex items-center justify-end text-xs font-bold text-[#0099ff] group-hover:underline">
                    <span>Open {badge.label}</span>
                    <ArrowRight className="size-3.5 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
