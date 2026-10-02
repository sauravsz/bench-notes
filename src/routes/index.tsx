import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  Languages,
  RotateCcw,
  Scale,
  Search,
  Sparkles,
  TableProperties,
  Ticket,
} from "lucide-react";
import { allCourses, courseCategories, getCourse, type Course } from "@/data/courses";
import { useCurrentCourse } from "@/lib/current-course";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Dashboard,
});

function Dashboard() {
  const activeCourseSlug = useCurrentCourse((s) => s.activeCourseSlug);
  const setActiveCourseSlug = useCurrentCourse((s) => s.setActiveCourseSlug);
  const activeCourse = useCurrentCourse((s) => s.getActiveCourse());
  const studied = useProgress((s) => s.studied);
  const lastSlug = useProgress((s) => s.lastSlug);
  const resetProgress = useProgress((s) => s.resetProgress);

  const [confirmReset, setConfirmReset] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [dashboardSection, setDashboardSection] = useState<"syllabus" | "exams" | "matrices">("syllabus");
  const doneCount = activeCourse.topics.filter((t) => studied[t.slug]).length;
  const totalTopics = activeCourse.topics.length || 1;
  const masteryPercentage = Math.round((doneCount / totalTopics) * 100);

  const resumeTopic =
    (lastSlug && activeCourse.topics.find((t) => t.slug === lastSlug)) ||
    activeCourse.topics[0] || { slug: "midsem-foundational-legal-maxims", title: "Overview" };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const courseParam = params.get("course");
    if (courseParam) {
      const matched = getCourse(courseParam);
      if (matched) {
        setActiveCourseSlug(matched.slug);
      }
    }
  }, [setActiveCourseSlug]);
  const handleReset = () => {
    resetProgress();
    setConfirmReset(false);
  };

  const filteredCourses =
    selectedCategory === "All"
      ? allCourses
      : allCourses.filter((c) => c.category === selectedCategory);

  return (
    <main className="px-4 py-10 sm:px-10 sm:py-16 ios-fade-up bg-[#090909]">
      <div className="mx-auto max-w-5xl space-y-16">
        {/* Poster-grade Hero Statement */}
        <section className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] px-3 py-1 text-xs font-medium text-[#999999]">
                <GraduationCap className="size-3.5 text-[#0099ff]" />
                MBA Academic Revision Artboard
              </span>
              <span className="rounded-full bg-[#141414] border border-[#262626] px-2.5 py-0.5 text-xs font-mono text-[#666666]">
                8 Papers
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.04em] text-white leading-[0.95]">
              Bench Notes.
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#999999] leading-relaxed max-w-2xl">
              High-yield lecture briefs, complete model examination answers, Latin maxims, and case law precedents on an artboard canvas.
            </p>
          </div>

          {/* ⭐ Master Spotlight Cards (OM 01, OM 02, 603, and 602) */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: OM 01 Mid-Sem Focus */}
            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0284C7] via-[#0369A1] to-[#0F172A] p-5 text-white shadow-xl transition-all duration-300">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-md px-2.5 py-0.5 font-mono text-[10px] font-bold text-white border border-white/20">
                    Paper OM 01 · Mid Sem
                  </span>
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold tracking-[-0.03em] text-white leading-snug">
                  7 Master Notes Ready.
                </h3>
                <p className="font-sans text-[11px] text-white/85 leading-relaxed line-clamp-3">
                  Benchmarking (12 Stages & 7 Types), Quality Dimensions, Strategic Purchasing, Supplier Lifecycle, Pareto & Ishikawa 6Ms.
                </p>
                <div className="pt-1">
                  <Link
                    to="/topic/$slug"
                    params={{ slug: "midsem-benchmarking-12-stages" }}
                    onClick={() => setActiveCourseSlug("tqm")}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white text-black hover:bg-white/90 px-3.5 py-1.5 text-xs font-bold shadow-md transition-all ios-press"
                  >
                    <span>Study OM 01</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: OM 02 Mid-Sem Focus */}
            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#4F46E5] via-[#4338CA] to-[#1E1B4B] p-5 text-white shadow-xl transition-all duration-300">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-md px-2.5 py-0.5 font-mono text-[10px] font-bold text-white border border-white/20">
                    Paper OM 02 · Mid Sem
                  </span>
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold tracking-[-0.03em] text-white leading-snug">
                  9 Master Modules Ready.
                </h3>
                <p className="font-sans text-[11px] text-white/85 leading-relaxed line-clamp-3">
                  7 R's & Total Cost, Logistics vs SCM, Cycle & Push/Pull, Strategic Fit, Bullwhip Effect, 5 Modes, EOQ/ROP, 3PL/4PL & Centroid.
                </p>
                <div className="pt-1">
                  <Link
                    to="/topic/$slug"
                    params={{ slug: "midsem-logistics-7rs-total-cost" }}
                    onClick={() => setActiveCourseSlug("logistics-scm")}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white text-black hover:bg-white/90 px-3.5 py-1.5 text-xs font-bold shadow-md transition-all ios-press"
                  >
                    <span>Study OM 02</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: Paper 603 Mid-Sem Spotlight */}
            <div className="relative overflow-hidden rounded-[24px] spotlight-violet p-5 text-white shadow-xl transition-all duration-300">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-md px-2.5 py-0.5 font-mono text-[10px] font-bold text-white border border-white/20">
                    Paper 603 · Mid Sem
                  </span>
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold tracking-[-0.03em] text-white leading-snug">
                  9 Master Modules Ready.
                </h3>
                <p className="font-sans text-[11px] text-white/85 leading-relaxed line-clamp-3">
                  6 foundational Latin maxims, Indian Contract Act Section 10 & remedies, and Companies Act 2013 architecture.
                </p>
                <div className="pt-1">
                  <Link
                    to="/topic/$slug"
                    params={{ slug: "midsem-foundational-legal-maxims" }}
                    onClick={() => setActiveCourseSlug("business-laws")}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white text-black hover:bg-white/90 px-3.5 py-1.5 text-xs font-bold shadow-md transition-all ios-press"
                  >
                    <span>Study 603</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 4: Paper 602 Spotlight */}
            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0099ff]/90 via-[#007acc] to-[#6a4cf5] p-5 text-white shadow-xl transition-all duration-300">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-md px-2.5 py-0.5 font-mono text-[10px] font-bold text-white border border-white/20">
                    Paper 602 · Master
                  </span>
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold tracking-[-0.03em] text-white leading-snug">
                  19 High-Yield Modules.
                </h3>
                <p className="font-sans text-[11px] text-white/85 leading-relaxed line-clamp-3">
                  Executive communications covering Hook-Line-Sinker, Minto Pyramid, SCQA, and RVU pitch frameworks.
                </p>
                <div className="pt-1">
                  <Link
                    to="/topic/$slug"
                    params={{ slug: "nature-scope-business-communication" }}
                    onClick={() => setActiveCourseSlug("business-communications")}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white text-black hover:bg-white/90 px-3.5 py-1.5 text-xs font-bold shadow-md transition-all ios-press"
                  >
                    <span>Explore 602</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Tip 3: Streamlined Minimal Course Header Track */}
          <div className="rounded-2xl border border-[#262626] bg-[#121212]/80 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#0099ff]">
                  Paper {activeCourse.code}
                </span>
                <span className="text-[#666666]">·</span>
                <span className="font-display text-sm sm:text-base font-bold text-white">
                  {activeCourse.title}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#999999]">
                <span>{doneCount} of {activeCourse.topics.length} Modules Mastered</span>
                <span className="text-[#666666]">·</span>
                <span className="font-mono text-[#0099ff] font-semibold">{masteryPercentage}%</span>
              </div>
            </div>

            {/* Micro Progress Bar & Quick Action */}
            <div className="flex items-center gap-3 sm:w-64">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#1c1c1c]">
                <div
                  className="h-full bg-[#0099ff] transition-all duration-500 ease-out"
                  style={{ width: `${masteryPercentage}%` }}
                />
              </div>
              {activeCourse.topics.length > 0 && (
                <Link
                  to="/topic/$slug"
                  params={{ slug: resumeTopic.slug }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white text-black hover:bg-white/90 px-3.5 py-1.5 font-sans text-xs font-bold transition-all shrink-0"
                >
                  <span>{lastSlug ? "Resume" : "Start"}</span>
                  <ArrowRight className="size-3" />
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Master Curriculum Selector (All 8 Papers) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#262626] pb-4">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-white">
                All MBA Curriculum Papers
              </h2>
              <p className="text-xs text-[#999999] mt-1">
                Select any subject to switch active syllabus, model answers, and reading notes.
              </p>
            </div>
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 text-xs">
              {["All", ...courseCategories].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 font-sans text-xs font-medium transition-all duration-200 ios-press",
                    selectedCategory === cat
                      ? "bg-white text-black font-bold shadow-xs"
                      : "bg-[#141414] text-[#999999] border border-[#262626] hover:text-white",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredCourses.map((c) => {
              const isSelected = c.slug === activeCourseSlug;
              const is602 = c.slug === "business-communications";
              const is603 = c.slug === "business-laws";

              return (
                <div
                  key={c.id}
                  onClick={() => setActiveCourseSlug(c.slug)}
                  className={cn(
                    "flex flex-col justify-between rounded-[20px] p-5 transition-all duration-200 cursor-pointer shadow-xs group",
                    isSelected
                      ? "bg-[#1c1c1c] border-2 border-[#0099ff] ring-1 ring-[#0099ff]/30 shadow-lg"
                      : "bg-[#141414] border border-[#262626] hover:border-[#383838] hover:bg-[#181818]",
                  )}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-1">
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-0.5 font-mono text-xs font-bold",
                          isSelected
                            ? "bg-[#0099ff] text-white"
                            : "bg-[#1c1c1c] text-[#999999] border border-[#262626]",
                        )}
                      >
                        {c.code}
                      </span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                        {c.category}
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold text-white leading-snug">
                      {c.title}
                    </h3>
                    <p className="line-clamp-2 text-xs text-[#999999] leading-relaxed">
                      {c.description}
                    </p>
                    {is602 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/15 border border-sky-500/40 text-sky-400 px-2 py-0.5 text-[10px] font-bold">
                        ⭐ 19 Master Modules Ready
                      </span>
                    )}
                    {is603 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 px-2 py-0.5 text-[10px] font-bold">
                        ⭐ 9 Mid Sem Modules Ready
                      </span>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#262626] flex items-center justify-between text-xs">
                    <span className="font-sans text-[11px] text-[#666666]">
                      {c.topics.length} topics
                    </span>
                    <span className={cn("font-sans font-bold", isSelected ? "text-[#0099ff]" : "text-[#999999] group-hover:text-white")}>
                      {isSelected ? "Active ✓" : "Switch →"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Active Paper Content Tabs & Section Switcher */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#262626] pb-4">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-white">
                Paper {activeCourse.code} · {activeCourse.title}
              </h2>
              <p className="mt-1 font-sans text-xs text-[#999999]">
                Structured syllabus modules, model exam answers, and comparative matrices.
              </p>
            </div>

            {/* Segmented Tab Controls */}
            <div className="flex items-center gap-1.5 rounded-full bg-[#141414] p-1 border border-[#262626] text-xs">
              <button
                type="button"
                onClick={() => setDashboardSection("syllabus")}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-sans font-bold transition-all",
                  dashboardSection === "syllabus"
                    ? "bg-white text-black shadow-xs"
                    : "text-[#999999] hover:text-white",
                )}
              >
                <BookOpen className="size-3.5" />
                <span>Syllabus ({activeCourse.topics.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setDashboardSection("exams")}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-sans font-bold transition-all",
                  dashboardSection === "exams"
                    ? "bg-white text-black shadow-xs"
                    : "text-[#999999] hover:text-white",
                )}
              >
                <Scale className="size-3.5" />
                <span>Model Answers ({activeCourse.examQuestions.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setDashboardSection("matrices")}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-sans font-bold transition-all",
                  dashboardSection === "matrices"
                    ? "bg-white text-black shadow-xs"
                    : "text-[#999999] hover:text-white",
                )}
              >
                <TableProperties className="size-3.5" />
                <span className="hidden sm:inline">Comparison Matrices</span>
                <span className="sm:hidden">Matrices</span>
              </button>
            </div>
          </div>

          {/* 1. Syllabus View */}
          {dashboardSection === "syllabus" && (
            <div className="space-y-10">
              {activeCourse.units.map((unit, idx) => {
                const unitTopics = activeCourse.topics.filter((t) => t.unit === unit);
                if (unitTopics.length === 0) return null;
                const isMidSemUnit = unit === "Mid Sem Important";

                return (
                  <div
                    key={unit}
                    className={cn(
                      "space-y-4",
                      isMidSemUnit && "rounded-[24px] border border-[#262626] bg-[#141414] p-6 shadow-sm",
                    )}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={cn(
                            "flex size-6 items-center justify-center rounded-full font-mono text-xs font-bold",
                            isMidSemUnit
                              ? "bg-white text-black"
                              : "bg-[#1c1c1c] text-[#999999] border border-[#262626]",
                          )}
                        >
                          {isMidSemUnit ? "★" : idx + 1}
                        </span>
                        <h3 className="font-display text-xl font-bold text-white tracking-[-0.02em]">
                          {unit}
                        </h3>
                      </div>
                      {isMidSemUnit && (
                        <span className="rounded-full bg-[#0099ff]/15 text-[#0099ff] border border-[#0099ff]/30 px-3 py-0.5 text-xs font-bold">
                          {unitTopics.length} Master Examination Modules
                        </span>
                      )}
                    </div>

                    {/* Aesthetic 2-Column Module Card Grid */}
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      {unitTopics.map((topic) => {
                        const isStudied = studied[topic.slug];
                        return (
                          <Link
                            key={topic.id}
                            to="/topic/$slug"
                            params={{ slug: topic.slug }}
                            className="group flex flex-col justify-between rounded-[20px] border border-[#262626] bg-[#141414] p-5 transition-all duration-200 hover:border-[#383838] hover:bg-[#181818] hover:-translate-y-0.5 shadow-2xs"
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between gap-2">
                                <span className="flex size-7 items-center justify-center rounded-full bg-[#1c1c1c] border border-[#262626] font-mono text-xs font-bold text-[#999999] group-hover:text-white group-hover:border-[#0099ff]/50 transition-colors">
                                  {String(topic.number).padStart(2, "0")}
                                </span>
                                <div className="flex items-center gap-2">
                                  {topic.marks && (
                                    <span className="rounded-full bg-[#1c1c1c] border border-[#262626] px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#999999]">
                                      {topic.marks} Marks
                                    </span>
                                  )}
                                  {isStudied && (
                                    <span className="inline-flex items-center gap-1 rounded-full bg-[#22c55e]/15 border border-[#22c55e]/30 px-2 py-0.5 font-sans text-[10px] font-bold text-[#22c55e]">
                                      <CheckCircle2 className="size-3" /> Mastered
                                    </span>
                                  )}
                                </div>
                              </div>

                              <h4 className="font-display text-base font-bold text-white group-hover:text-[#0099ff] transition-colors leading-snug">
                                {topic.title}
                              </h4>
                              <p className="font-sans text-xs text-[#999999] line-clamp-2 leading-relaxed">
                                {topic.summary}
                              </p>
                            </div>

                            <div className="mt-4 pt-3 border-t border-[#1f1f1f] flex items-center justify-between text-xs">
                              <span className="font-mono text-[11px] text-[#666666]">
                                {topic.blocks.length} Sections
                              </span>
                              <span className="inline-flex items-center gap-1 font-sans font-bold text-[#0099ff] group-hover:translate-x-1 transition-transform">
                                Read Note <ArrowRight className="size-3" />
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* 2. Model Exam Answers View */}
          {dashboardSection === "exams" && (
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {activeCourse.examQuestions.map((exam) => (
                  <Link
                    key={exam.id}
                    to="/exam/$qid"
                    params={{ qid: exam.id }}
                    className="group flex flex-col justify-between rounded-[22px] border border-[#262626] bg-[#141414] p-5 sm:p-6 transition-all duration-200 hover:border-[#383838] hover:bg-[#181818] hover:-translate-y-1 shadow-xs"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-full bg-[#1c1c1c] border border-[#262626] px-3 py-0.5 font-mono text-xs font-bold text-[#0099ff]">
                          Question {exam.number}
                        </span>
                        <span className="rounded-full bg-[#1c1c1c] border border-[#262626] px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#999999]">
                          {exam.marks ? `${exam.marks} Marks Answer` : "Model Solution"}
                        </span>
                      </div>

                      <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#0099ff] transition-colors leading-snug">
                        {exam.title}
                      </h3>

                      <div className="rounded-xl bg-[#090909]/60 p-3 border border-[#1f1f1f]">
                        <p className="font-sans text-xs text-[#888888] leading-relaxed line-clamp-2">
                          {exam.question}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#1f1f1f] flex items-center justify-between text-xs">
                      <span className="font-mono text-[11px] text-[#666666]">
                        {exam.blocks.length} Answer Sections
                      </span>
                      <span className="inline-flex items-center gap-1 font-sans font-bold text-[#0099ff] group-hover:translate-x-1 transition-transform">
                        Study Solution <ArrowRight className="size-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 3. Comparison Matrices View */}
          {dashboardSection === "matrices" && (
            <div className="rounded-[24px] border border-[#262626] bg-[#141414] p-8 text-center space-y-4">
              <TableProperties className="mx-auto size-10 text-[#0099ff]" />
              <h3 className="font-display text-2xl font-bold text-white">
                Paper {activeCourse.code} Comparison Matrices
              </h3>
              <p className="font-sans text-xs text-[#999999] max-w-md mx-auto leading-relaxed">
                Explore side-by-side differentiation frameworks, statutory contrasts, and comparison matrices for {activeCourse.title}.
              </p>
              <div className="pt-2">
                <Link
                  to="/comparisons"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-2.5 font-sans text-xs font-bold hover:bg-white/90 transition-all ios-press"
                >
                  <span>Open Comparison Matrix Studio</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
