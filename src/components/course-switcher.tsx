import { useState, useRef, useEffect } from "react";
import { Check, ChevronDown, GraduationCap, Search, Sparkles } from "lucide-react";
import { allCourses, courseCategories, type Course } from "@/data/courses";
import { useCurrentCourse } from "@/lib/current-course";
import { useProgress } from "@/lib/progress";
import { useRouter } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function CourseSwitcher({
  className,
  onSelect,
}: {
  className?: string;
  onSelect?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const activeCourseSlug = useCurrentCourse((s) => s.activeCourseSlug);
  const setActiveCourseSlug = useCurrentCourse((s) => s.setActiveCourseSlug);
  const studied = useProgress((s) => s.studied);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  const activeCourse =
    allCourses.find((c) => c.slug === activeCourseSlug) || allCourses[2];

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelectCourse = (course: Course) => {
    setActiveCourseSlug(course.slug);
    setOpen(false);
    onSelect?.();
    router.navigate({ to: "/" });
  };

  const filteredCourses = search
    ? allCourses.filter(
        (c) =>
          c.title.toLowerCase().includes(search.toLowerCase()) ||
          c.code.toLowerCase().includes(search.toLowerCase()) ||
          c.description.toLowerCase().includes(search.toLowerCase()),
      )
    : allCourses;

  return (
    <div ref={menuRef} className={cn("relative inline-block text-left", className)}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex min-h-9 items-center gap-2 rounded-full border border-[#262626] bg-[#141414] px-3.5 py-1.5 text-xs font-medium text-white shadow-xs hover:bg-[#1c1c1c] transition-all ios-press"
        title="Switch MBA Course / Subject"
      >
        <span className="flex size-4.5 items-center justify-center rounded-full bg-[#0099ff] text-white font-mono text-[9px] font-bold">
          {activeCourse.code.split(" ")[0]}
        </span>
        <span className="font-bold text-white max-w-[140px] sm:max-w-[200px] truncate">
          {activeCourse.code} · {activeCourse.title}
        </span>
        <ChevronDown className={cn("size-3.5 text-[#999999] transition-transform duration-200", open ? "rotate-180" : "")} />
      </button>

      {/* Dropdown Menu */}
      {open ? (
        <div className="fixed sm:absolute left-4 right-4 sm:left-0 sm:right-auto top-16 sm:top-full z-50 mt-2 sm:w-96 rounded-[20px] border border-[#262626] bg-[#141414] p-4 shadow-2xl ios-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#262626] mb-3">
            <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#999999] flex items-center gap-1.5">
              <GraduationCap className="size-3.5 text-[#0099ff]" />
              MBA Curriculum Subjects
            </span>
            <span className="text-[10px] font-mono text-[#666666]">8 Papers Enrolled</span>
          </div>

          {/* Search Input */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-2.5 size-3.5 text-[#666666]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search paper code or title..."
              className="w-full rounded-full border border-[#262626] bg-[#090909] py-1.5 pl-8 pr-3 text-xs text-white placeholder:text-[#666666] focus:border-[#0099ff] focus:outline-none"
              autoFocus
            />
          </div>

          {/* Categorized Course List */}
          <div className="max-h-80 overflow-y-auto space-y-3 pr-1">
            {courseCategories.map((category) => {
              const categoryCourses = filteredCourses.filter(
                (c) => c.category === category,
              );
              if (categoryCourses.length === 0) return null;

              return (
                <div key={category} className="space-y-1.5">
                  <span className="px-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#666666] block">
                    {category === "Core" ? "Core MBA Papers" : `${category} Electives`}
                  </span>
                  <div className="space-y-1">
                    {categoryCourses.map((c) => {
                      const isSelected = c.slug === activeCourseSlug;
                      const hasMidSem = c.slug === "business-laws";
                      const doneCount = c.topics.filter(
                        (t) => studied[t.slug],
                      ).length;

                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => handleSelectCourse(c)}
                          className={cn(
                            "flex w-full items-start justify-between rounded-[14px] p-3 text-left transition-all duration-200 ios-press-subtle",
                            isSelected
                              ? "bg-[#1c1c1c] border border-[#0099ff]/50 shadow-xs"
                              : "hover:bg-[#1c1c1c] border border-transparent",
                          )}
                        >
                          <div className="min-w-0 flex-1 pr-2">
                            <div className="flex items-center gap-2">
                              <span
                                className={cn(
                                  "rounded-full px-2 py-0.2 font-mono text-[10px] font-bold",
                                  isSelected
                                    ? "bg-[#0099ff] text-white"
                                    : "bg-[#090909] text-[#999999] border border-[#262626]",
                                )}
                              >
                                {c.code}
                              </span>
                              <span className="font-display text-xs font-bold text-white truncate">
                                {c.title}
                              </span>
                              {hasMidSem && (
                                <span className="rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 px-1.5 py-0.2 text-[9px] font-bold">
                                  ⭐ Mid Sem
                                </span>
                              )}
                            </div>
                            <p className="mt-1 line-clamp-1 text-[11px] text-[#999999]">
                              {c.description}
                            </p>
                            <div className="mt-1 flex items-center gap-2 text-[10px] text-[#666666] font-mono">
                              <span>{c.units.length} Units</span>
                              <span>•</span>
                              <span>{c.topics.length} Notes</span>
                              <span>•</span>
                              <span>{c.examQuestions.length} Questions</span>
                            </div>
                          </div>

                          <div className="shrink-0 flex items-center pt-1">
                            {isSelected ? (
                              <Check className="size-4 text-[#0099ff] font-bold" />
                            ) : doneCount > 0 ? (
                              <span className="text-[10px] font-mono font-bold text-[#22c55e]">
                                {doneCount}/{c.topics.length}
                              </span>
                            ) : null}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
