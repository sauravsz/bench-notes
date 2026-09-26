import { useState, useRef, useEffect } from "react";
import { Check, ChevronDown, Folder, GraduationCap, Layers, Search, Sparkles } from "lucide-react";
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
        className="flex min-h-9 items-center gap-2 rounded-lg border border-line bg-surface px-2.5 py-1 text-xs font-medium text-ink shadow-2xs hover:bg-bg-warm transition-all duration-200 ios-press"
        title="Switch MBA Course / Subject"
      >
        <span className="flex size-5 items-center justify-center rounded bg-primary text-white font-sans text-[10px] font-bold">
          {activeCourse.code.split(" ")[0]}
        </span>
        <span className="font-bold text-ink max-w-[140px] sm:max-w-[200px] truncate">
          {activeCourse.code} · {activeCourse.title}
        </span>
        <ChevronDown className={cn("size-3.5 text-muted transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]", open ? "rotate-180" : "")} />
      </button>

      {/* Dropdown Menu */}
      {open ? (
        <div className="fixed sm:absolute left-4 right-4 sm:left-0 sm:right-auto top-16 sm:top-full z-50 mt-1 sm:w-96 rounded-2xl border border-line bg-surface/95 backdrop-blur-md p-3 shadow-2xl ios-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-line mb-2">
            <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-muted flex items-center gap-1.5">
              <GraduationCap className="size-3.5 text-accent" />
              MBA Curriculum Subjects
            </span>
            <span className="text-[10px] font-medium text-muted">8 Papers Enrolled</span>
          </div>

          {/* Search Input */}
          <div className="relative mb-2.5">
            <Search className="absolute left-2.5 top-2 size-3.5 text-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search paper code or subject name..."
              className="w-full rounded-lg border border-line bg-bg-warm/60 py-1 pl-8 pr-2 font-sans text-xs text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none"
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
                <div key={category} className="space-y-1">
                  <span className="px-2 font-sans text-[10px] font-bold uppercase tracking-widest text-faint block">
                    {category === "Core"
                      ? "Core MBA Papers"
                      : `${category} Elective Papers`}
                  </span>
                  <div className="space-y-1">
                    {categoryCourses.map((c) => {
                      const isSelected = c.slug === activeCourseSlug;
                      const doneCount = c.topics.filter(
                        (t) => studied[t.slug],
                      ).length;

                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => handleSelectCourse(c)}
                          className={cn(
                            "flex w-full items-start justify-between rounded-xl p-2.5 text-left transition-all duration-200 ios-press-subtle",
                            isSelected
                              ? "bg-accent/10 border border-accent/40 shadow-2xs"
                              : "hover:bg-bg-warm border border-transparent hover:-translate-y-0.5",
                          )}
                        >
                          <div className="min-w-0 flex-1 pr-2">
                            <div className="flex items-center gap-2">
                              <span
                                className={cn(
                                  "rounded px-1.5 py-0.2 font-sans text-[10px] font-bold",
                                  isSelected
                                    ? "bg-accent text-white"
                                    : "bg-bg-warm text-ink border border-line",
                                )}
                              >
                                {c.code}
                              </span>
                              <span className="font-serif text-xs font-bold text-ink truncate">
                                {c.title}
                              </span>
                            </div>
                            <p className="mt-1 line-clamp-1 font-sans text-[11px] text-muted">
                              {c.description}
                            </p>
                            <div className="mt-1 flex items-center gap-2 text-[10px] text-faint">
                              <span>{c.units.length} Units</span>
                              <span>•</span>
                              <span>{c.topics.length} Notes</span>
                              <span>•</span>
                              <span>{c.examQuestions.length} Questions</span>
                            </div>
                          </div>

                          <div className="shrink-0 flex items-center pt-1">
                            {isSelected ? (
                              <Check className="size-4 text-accent font-bold ios-spring-pop" />
                            ) : doneCount > 0 ? (
                              <span className="text-[10px] font-bold text-studied">
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
