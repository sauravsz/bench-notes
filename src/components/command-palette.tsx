import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Command,
  CornerDownLeft,
  GraduationCap,
  Highlighter,
  Languages,
  Layers,
  ListOrdered,
  Scale,
  Search,
  Sparkles,
  TableProperties,
  X,
  Zap,
} from "lucide-react";
import { allCourses, searchGlobalNotes, type GlobalSearchHit } from "@/data/courses";
import { useCurrentCourse } from "@/lib/current-course";
import { useHighlights } from "@/lib/highlights";
import { useAppearance } from "@/lib/appearance";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

export function CommandPalette({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const activeCourse = useCurrentCourse((s) => s.getActiveCourse());
  const setActiveCourseSlug = useCurrentCourse((s) => s.setActiveCourseSlug);
  const toggleAutoHighlight = useHighlights((s) => s.toggleAutoHighlight);
  const setNotebookOpen = useHighlights((s) => s.setNotebookOpen);
  const toggleSidebar = useAppearance((s) => s.toggleSidebar);
  const toggleAppearanceMenu = useAppearance((s) => s.toggleAppearanceMenu);

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 40);
    return () => clearTimeout(handler);
  }, [query]);

  // Auto-focus input when palette opens

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Filter items
  const searchResults = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    return searchGlobalNotes(debouncedQuery);
  }, [debouncedQuery]);

  // Default quick actions when query is empty
  const defaultActions = useMemo(() => {
    return [
      {
        id: "nav-midsem-mm01",
        category: "High-Yield Shortcuts",
        title: "⭐ Master Exam Notes (MM 01 · Consumer Behaviour)",
        subtitle: "12 master examination notes for Buying Roles, Traditional/Contemporary Models, Perception, Motivation & Gender",
        icon: Sparkles,
        action: () => {
          setActiveCourseSlug("consumer-behaviour");
          router.navigate({ to: "/topic/$slug", params: { slug: "customers-vs-consumers-and-buying-roles" } });
        },
      },
      {
        id: "nav-midsem-mm02",
        category: "High-Yield Shortcuts",
        title: "⭐ Mid Sem Important Notes (MM 02 · Sales Management)",
        subtitle: "7 master notes for Selling Process, Stimulus-Response, Relationship Marketing, Org Structures, Recruitment & Training",
        icon: Sparkles,
        action: () => {
          setActiveCourseSlug("sales-management");
          router.navigate({ to: "/topic/$slug", params: { slug: "nature-role-importance-selling-in-business" } });
        },
      },
      {
        id: "nav-midsem-om01",
        category: "High-Yield Shortcuts",
        title: "⭐ Mid Sem Important Notes (OM 01 · TQM)",
        subtitle: "9 master examination notes for Benchmarking, Quality, Purchasing, Pareto, 6Ms, Kaizen & Six Sigma",
        icon: Sparkles,
        action: () => {
          setActiveCourseSlug("tqm");
          router.navigate({ to: "/topic/$slug", params: { slug: "midsem-benchmarking-12-stages" } });
        },
      },
      {
        id: "nav-midsem-om02",
        category: "High-Yield Shortcuts",
        title: "⭐ Mid Sem Important Notes (OM 02 · Logistics & SCM)",
        subtitle: "8 master notes for Big Data, Reverse Logistics, Unitization, 4 Cycles, 5 Forecast Methods",
        icon: Sparkles,
        action: () => {
          setActiveCourseSlug("logistics-scm");
          router.navigate({ to: "/topic/$slug", params: { slug: "midsem-big-data-analytics-supply-chain" } });
        },
      },
      {
        id: "nav-midsem-603",
        category: "High-Yield Shortcuts",
        title: "⭐ Mid Sem Important Notes (Paper 603 · Business Laws)",
        subtitle: "9 master modules for legal maxims, contract remedies, and Companies Act 2013",
        icon: Sparkles,
        action: () => {
          setActiveCourseSlug("business-laws");
          router.navigate({ to: "/topic/$slug", params: { slug: "midsem-foundational-legal-maxims" } });
        },
      },
      {
        id: "nav-syllabus",
        category: "Navigation",
        title: `Syllabus Overview (${activeCourse?.code ?? ""} · ${activeCourse?.title ?? ""})`,
        subtitle: "View complete unit breakdown and topics",
        icon: BookOpen,
        action: () => router.navigate({ to: "/" }),
      },
      {
        id: "nav-exam",
        category: "Navigation",
        title: `Model Exam Answers (${activeCourse?.code ?? ""})`,
        subtitle: `${activeCourse?.examQuestions?.length ?? 0} complete model questions & analytical solutions`,
        icon: Scale,
        action: () => router.navigate({ to: "/exam" }),
      },
      {
        id: "nav-maxims",
        category: "Navigation",
        title: "Latin Legal Maxims & Doctrines",
        subtitle: "Jurisprudential maxims, meanings, and leading case laws",
        icon: Languages,
        action: () => router.navigate({ to: "/maxims" }),
      },
      {
        id: "nav-comparisons",
        category: "Navigation",
        title: "Comparison Matrix Studio",
        subtitle: "Side-by-side comparative matrices and distinction frameworks across all 8 papers",
        icon: TableProperties,
        action: () => router.navigate({ to: "/comparisons" }),
      },
      {
        id: "action-notebook",
        category: "Reader Actions",
        title: "Open Highlights Notebook",
        subtitle: "Review saved annotations and copy markdown exports",
        icon: Highlighter,
        action: () => setNotebookOpen(true),
      },
      {
        id: "action-autohl",
        category: "Reader Actions",
        title: "Toggle Instant Auto-Highlighting (Shift+H)",
        subtitle: "Enable or disable automatic highlight capture on selection",
        icon: Zap,
        action: () => toggleAutoHighlight(),
      },
      {
        id: "action-appearance",
        category: "Reader Actions",
        title: "Reading Appearance & Typography (Aa)",
        subtitle: "Adjust font family, content width, and font sizes",
        icon: Command,
        action: () => toggleAppearanceMenu(),
      },
      // All 8 Papers
      ...allCourses.map((c) => ({
        id: `course-${c.id}`,
        category: "Switch Course Paper",
        title: `Paper ${c.code} · ${c.title}`,
        subtitle: `${c.units.length} Units · ${c.topics.length} Notes · ${c.category}`,
        icon: GraduationCap,
        action: () => {
          setActiveCourseSlug(c.slug);
          router.navigate({ to: "/" });
        },
      })),
    ];
  }, [activeCourse, router, setActiveCourseSlug, setNotebookOpen, toggleAppearanceMenu, toggleAutoHighlight]);

  const items = useMemo(() => {
    if (query.trim()) {
      return searchResults.map((hit) => ({
        id: `hit-${hit.href}-${hit.title}`,
        category: `Search Result · ${hit.courseCode}`,
        title: hit.title,
        subtitle: hit.snippet,
        icon: hit.kind === "exam" ? Scale : hit.kind === "maxim" ? Languages : BookOpen,
        action: () => {
          setActiveCourseSlug(hit.courseSlug);
          router.navigate({ to: hit.href });
        },
      }));
    }
    return defaultActions;
  }, [query, searchResults, defaultActions, router, setActiveCourseSlug]);

  // Keyboard navigation within list
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const selected = items[selectedIndex];
      if (selected) {
        selected.action();
        onClose();
      }
    }
  };

  // Auto-scroll selected item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-xl p-4 sm:pt-20 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-[24px] border border-[#262626] bg-[#141414] shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Bar Header */}
        <div className="relative flex items-center border-b border-[#262626] px-5 py-3.5 bg-[#181818]">
          <Search className="size-4.5 text-[#666666] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a paper code, note title, maxim, or command..."
            className="flex-1 bg-transparent px-3 text-sm text-white placeholder:text-[#666666] focus:outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="rounded-full p-1 text-[#666666] hover:text-white"
            >
              <X className="size-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center gap-1 rounded bg-[#1c1c1c] border border-[#262626] px-2 py-0.5 font-mono text-[10px] text-[#666666]">
              ESC
            </kbd>
          )}
        </div>

        {/* Results / Action Items List */}
        <div ref={listRef} className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
          {items.length === 0 ? (
            <div className="py-12 text-center text-[#666666] text-xs">
              No matching notes, maxims, or commands found for "{query}".
            </div>
          ) : (
            items.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              const Icon = item.icon || Sparkles;
              return (
                <button
                  key={item.id}
                  data-index={idx}
                  type="button"
                  onClick={() => {
                    item.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-[14px] p-3 text-left transition-all duration-100",
                    isSelected
                      ? "bg-[#1c1c1c] text-white border border-[#262626] shadow-2xs"
                      : "text-[#999999] hover:bg-[#181818] border border-transparent",
                  )}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-3">
                    <div
                      className={cn(
                        "flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors",
                        isSelected
                          ? "bg-white text-black border-white"
                          : "bg-[#1c1c1c] text-[#666666] border-[#262626]",
                      )}
                    >
                      <Icon className="size-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                        {item.category}
                      </span>
                      <span className={cn("block font-display text-sm font-bold truncate", isSelected ? "text-white" : "text-[#d1d1d1]")}>
                        {item.title}
                      </span>
                      {item.subtitle && (
                        <span className="block font-sans text-xs text-[#666666] truncate">
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                  </div>

                  {isSelected && (
                    <div className="flex items-center gap-1 shrink-0 font-mono text-[10px] text-[#0099ff]">
                      <span>Jump</span>
                      <CornerDownLeft className="size-3" />
                    </div>
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Footer Ribbon with Keycap Hints */}
        <div className="flex items-center justify-between border-t border-[#262626] bg-[#181818] px-5 py-2.5 text-[11px] font-mono text-[#666666]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="rounded bg-[#1c1c1c] border border-[#262626] px-1 py-0.2">↑</kbd>
              <kbd className="rounded bg-[#1c1c1c] border border-[#262626] px-1 py-0.2">↓</kbd>
              <span>Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded bg-[#1c1c1c] border border-[#262626] px-1 py-0.2">↵</kbd>
              <span>Select</span>
            </span>
          </div>
          <span className="text-[#0099ff] font-bold">Bench Notes Omnisearch</span>
        </div>
      </div>
    </div>
  );
}
