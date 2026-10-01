import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Columns,
  Copy,
  Download,
  Filter,
  Layers,
  Printer,
  Search,
  Sparkles,
  TableProperties,
  X,
} from "lucide-react";
import {
  allCourses,
  getAllComparisonTables,
  type ComparisonTableItem,
} from "@/data/courses";
import { useCurrentCourse } from "@/lib/current-course";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/comparisons")({
  component: ComparisonStudioPage,
});

function ComparisonStudioPage() {
  const activeCourseSlug = useCurrentCourse((s) => s.activeCourseSlug);
  const setActiveCourseSlug = useCurrentCourse((s) => s.setActiveCourseSlug);

  const [selectedCourseSlug, setSelectedCourseSlug] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const allTables = useMemo(() => getAllComparisonTables(), []);
  const courseCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const t of allTables) {
      counts[t.courseSlug] = (counts[t.courseSlug] || 0) + 1;
    }
    return counts;
  }, [allTables]);
  const filteredTables = useMemo(() => {
    let list = allTables;

    if (selectedCourseSlug !== "all") {
      list = list.filter((t) => t.courseSlug === selectedCourseSlug);
    }

    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (t) =>
          t.caption.toLowerCase().includes(q) ||
          t.topicTitle.toLowerCase().includes(q) ||
          t.courseTitle.toLowerCase().includes(q) ||
          t.courseCode.toLowerCase().includes(q) ||
          t.headers.some((h) => h.toLowerCase().includes(q)) ||
          t.rows.some((row) => row.some((cell) => cell.toLowerCase().includes(q))),
      );
    }

    return list;
  }, [allTables, selectedCourseSlug, searchQuery]);

  const handleCopyTableMarkdown = (table: ComparisonTableItem) => {
    let md = `### ${table.caption}\n\n`;
    md += `*From ${table.courseCode} · ${table.courseTitle} (${table.topicTitle})*\n\n`;
    md += `| ${table.headers.join(" | ")} |\n`;
    md += `| ${table.headers.map(() => "---").join(" | ")} |\n`;
    for (const row of table.rows) {
      md += `| ${row.map((c) => c.replace(/\n/g, " ")).join(" | ")} |\n`;
    }

    navigator.clipboard.writeText(md);
    setCopiedId(table.id);
    setTimeout(() => setCopiedId(null), 1800);
    toast.success("Copied table as Markdown");
  };

  return (
    <main className="px-4 py-8 sm:px-10 sm:py-12 ios-fade-up bg-[#090909]">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Header Ribbon */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0099ff]">
              <TableProperties className="size-3.5" />
              MBA Revision Matrix Studio
            </span>
            <span className="font-mono text-xs text-[#666666]">
              {allTables.length} Comparison Matrices
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-white">
            Comparison Matrix Studio
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#999999] leading-relaxed max-w-2xl">
            Side-by-side comparative matrices, statutory contrasts, and structural differentiation frameworks across all 8 MBA papers.
          </p>
        </div>

        {/* Paper-by-Paper Filter Tabs */}
        <div className="space-y-3">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#666666] block">
            Filter by MBA Paper:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedCourseSlug("all")}
              className={cn(
                "rounded-full px-4 py-1.5 font-sans text-xs font-bold transition-all ios-press",
                selectedCourseSlug === "all"
                  ? "bg-white text-black shadow-xs"
                  : "bg-[#141414] text-[#999999] border border-[#262626] hover:text-white hover:bg-[#1c1c1c]",
              )}
            >
              All Papers ({allTables.length})
            </button>
            {allCourses.map((c) => {
              const count = courseCounts[c.slug] || 0;
              if (count === 0) return null;
              const isSelected = selectedCourseSlug === c.slug;

              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setSelectedCourseSlug(c.slug)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-sans text-xs font-bold transition-all ios-press",
                    isSelected
                      ? "bg-[#0099ff] text-white shadow-xs"
                      : "bg-[#141414] text-[#999999] border border-[#262626] hover:text-white hover:bg-[#1c1c1c]",
                  )}
                >
                  <span className="font-mono">{c.code}</span>
                  <span className="hidden sm:inline">· {c.title.split(" ")[0]}</span>
                  <span className={cn(
                    "rounded-full px-1.5 py-0.2 text-[10px] font-mono",
                    isSelected ? "bg-white/20 text-white" : "bg-[#1c1c1c] text-[#666666]"
                  )}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Input Bar */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-3.5 size-4 text-[#666666]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search any matrix term (e.g. coercion vs undue influence, pestle, 1956 vs 2013, cpm vs pert)..."
            className="w-full rounded-full border border-[#262626] bg-[#141414] py-3 pl-11 pr-10 font-sans text-sm text-white placeholder:text-[#666666] focus:border-[#0099ff] focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-3.5 text-[#666666] hover:text-white"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#999999] border-b border-[#262626] pb-2 font-mono">
          <span>
            Showing {filteredTables.length} of {allTables.length} comparison matrices
          </span>
          {selectedCourseSlug !== "all" && (
            <button
              type="button"
              onClick={() => setSelectedCourseSlug("all")}
              className="text-[#0099ff] hover:underline"
            >
              Show all papers
            </button>
          )}
        </div>

        {/* Tables Card Gallery */}
        <div className="space-y-8">
          {filteredTables.length === 0 ? (
            <div className="rounded-[24px] border border-dashed border-[#262626] p-12 text-center text-[#999999] bg-[#141414] space-y-2">
              <TableProperties className="mx-auto size-8 text-[#666666]" />
              <p className="font-display text-base font-bold text-white">
                No Comparison Matrices Found
              </p>
              <p className="text-xs text-[#666666] max-w-sm mx-auto">
                No comparison tables matched your search query "{searchQuery}".
              </p>
            </div>
          ) : (
            filteredTables.map((table) => {
              const isCopied = copiedId === table.id;

              return (
                <article
                  key={table.id}
                  id={table.id}
                  className="rounded-[24px] border border-[#262626] bg-[#141414] p-6 sm:p-7 shadow-md transition-all duration-200 hover:border-[#383838] space-y-4"
                >
                  {/* Card Header & Metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#262626] pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-[#1c1c1c] border border-[#262626] px-2.5 py-0.5 font-mono text-xs font-bold text-[#0099ff]">
                          Paper {table.courseCode}
                        </span>
                        <span className="font-sans text-xs text-[#999999]">
                          {table.courseTitle}
                        </span>
                        <span>•</span>
                        <span className="font-mono text-xs text-[#666666]">
                          {table.unit}
                        </span>
                      </div>
                      <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-[-0.02em]">
                        {table.caption}
                      </h2>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleCopyTableMarkdown(table)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#262626] bg-[#1c1c1c] px-3 py-1.5 font-sans text-xs font-medium text-[#999999] hover:text-white hover:bg-[#262626] transition-all ios-press"
                        title="Copy as Markdown"
                      >
                        {isCopied ? (
                          <>
                            <Check className="size-3.5 text-[#22c55e]" />
                            <span className="text-[#22c55e]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-3.5" />
                            <span>Copy Table</span>
                          </>
                        )}
                      </button>

                      <Link
                        to="/topic/$slug"
                        params={{ slug: table.topicSlug }}
                        onClick={() => setActiveCourseSlug(table.courseSlug)}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white text-black hover:bg-white/90 px-3.5 py-1.5 font-sans text-xs font-bold transition-all ios-press"
                      >
                        <span>Read in Context</span>
                        <ArrowUpRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Responsive High-Contrast Table Container */}
                  <div className="overflow-x-auto rounded-[18px] border border-[#262626] bg-[#090909]">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-[#262626] bg-[#1c1c1c]">
                          {table.headers.map((h, i) => (
                            <th
                              key={i}
                              className={cn(
                                "px-4 py-3 font-display font-bold text-white",
                                i === 0 ? "w-1/4 sm:w-1/5 text-[#0099ff]" : "",
                              )}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#1a1a1a]">
                        {table.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className="hover:bg-[#141414] transition-colors"
                          >
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={cn(
                                  "px-4 py-3 text-[#cccccc] leading-relaxed align-top",
                                  cIdx === 0
                                    ? "font-display font-semibold text-white bg-[#141414]/50"
                                    : "",
                                )}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}
