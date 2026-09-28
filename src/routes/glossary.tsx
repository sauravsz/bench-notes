import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { useCurrentCourse } from "@/lib/current-course";

export const Route = createFileRoute("/glossary")({ component: GlossaryPage });

function GlossaryPage() {
  const activeCourse = useCurrentCourse((s) => s.getActiveCourse());
  const glossary = activeCourse.glossary || [];
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
  }, [glossary]);

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
  }, [glossary, search, selectedLetter]);

  return (
    <main className="px-4 py-8 sm:px-10 sm:py-12 ios-fade-up bg-[#090909]">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0099ff]">
              Paper {activeCourse.code} · Dictionary
            </span>
            <span className="font-mono text-xs text-[#666666]">
              {glossary.length} Defined Terms
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-white">
            Glossary & Definitions
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#999999] leading-relaxed">
            Statutory definitions, legal doctrines, and technical terms for {activeCourse.title}.
          </p>
        </header>

        {/* Search Input Bar */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-3.5 size-4 text-[#666666]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search defined terms, statutory sections, definitions..."
            className="w-full rounded-full border border-[#262626] bg-[#141414] py-3 pl-11 pr-10 font-sans text-sm text-white placeholder:text-[#666666] focus:border-[#0099ff] focus:outline-none"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-3.5 top-3 text-[#666666] hover:text-white"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        {/* Alphabetical Filter Pills */}
        <div className="flex flex-wrap gap-1.5">
          {["All", ...letters].map((letter) => (
            <button
              key={letter}
              type="button"
              onClick={() => setSelectedLetter(letter)}
              className={`rounded-full px-3 py-1 font-mono text-xs font-bold transition-all ${
                selectedLetter === letter
                  ? "bg-white text-black shadow-xs"
                  : "bg-[#141414] text-[#999999] border border-[#262626] hover:text-white"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Glossary Terms List */}
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="rounded-[20px] border border-dashed border-[#262626] p-10 text-center text-[#999999] bg-[#141414]">
              No glossary terms matching "{search}".
            </div>
          ) : (
            filtered.map((entry) => (
              <article
                key={entry.id}
                id={entry.id}
                className="rounded-[20px] border border-[#262626] bg-[#141414] p-5 sm:p-6 transition-all duration-200 hover:border-[#383838] shadow-xs"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-[-0.02em]">
                    {entry.term}
                  </h2>
                  {entry.section && (
                    <span className="font-mono text-xs font-bold text-[#0099ff]">
                      {entry.section}
                    </span>
                  )}
                </div>
                <p className="mt-2 font-sans text-xs sm:text-sm leading-relaxed text-[#cccccc]">
                  {entry.body}
                </p>
                {entry.topicSlug && (
                  <div className="mt-3 pt-3 border-t border-[#1f1f1f]">
                    <Link
                      to="/topic/$slug"
                      params={{ slug: entry.topicSlug }}
                      className="inline-flex items-center gap-1 font-mono text-xs text-[#0099ff] hover:underline"
                    >
                      <span>Read in Context</span>
                      <ArrowUpRight className="size-3" />
                    </Link>
                  </div>
                )}
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
