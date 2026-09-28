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
  Ticket,
} from "lucide-react";
import { allCourses, courseCategories, type Course } from "@/data/courses";
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
    if (courseParam === "603" || courseParam === "business-laws") {
      setActiveCourseSlug("business-laws");
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

          {/* ⭐ Dual Master Spotlight Cards */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Spotlight 1: Paper 602 Business Communications */}
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0284C7] via-[#0369A1] to-[#0F172A] p-6 sm:p-7 text-white shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3 py-0.5 text-xs font-bold text-white border border-white/20">
                    <Sparkles className="size-3.5" />
                    19 Master Modules
                  </span>
                  <span className="font-mono text-xs font-semibold text-white/80">
                    Paper 602 · Business Communications
                  </span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.03em] leading-tight text-white">
                  19 High-Yield 14-Mark Master Modules Ready.
                </h2>
                <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed">
                  Comprehensive notes covering Minto Pyramid Principle, SCQA tension modeling, RVU venture pitch architecture, cross-cultural PDI matrices, and high-pressure stagecraft.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/topic/$slug"
                  params={{ slug: "corporate-clarity-ocean-of-data" }}
                  onClick={() => setActiveCourseSlug("business-communications")}
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[#0369A1] hover:bg-white/90 px-5 py-2.5 font-sans text-xs font-bold shadow-md transition-all ios-press"
                >
                  <span>Study 602 Master Notes</span>
                  <ArrowRight className="size-3.5" />
                </Link>
                {activeCourseSlug !== "business-communications" ? (
                  <button
                    type="button"
                    onClick={() => setActiveCourseSlug("business-communications")}
                    className="inline-flex items-center gap-1.5 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/20 px-4 py-2.5 font-sans text-xs font-semibold text-white transition-all ios-press"
                  >
                    Set Active
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-white/90 bg-white/10 px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="size-3.5 text-sky-300" /> Active Course
                  </span>
                )}
              </div>
            </div>

            {/* Spotlight 2: Paper 603 Business Laws */}
            <div className="relative overflow-hidden rounded-[28px] spotlight-violet p-6 sm:p-7 text-white shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3 py-0.5 text-xs font-bold text-white border border-white/20">
                    <Sparkles className="size-3.5" />
                    Mid Sem Important
                  </span>
                  <span className="font-mono text-xs font-semibold text-white/80">
                    Paper 603 · Business Laws
                  </span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.03em] leading-tight text-white">
                  9 Master Examination Modules Ready.
                </h2>
                <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed">
                  Academic master notes covering 6 foundational Latin maxims, Companies Act 2013 revamp analysis, and Indian Contract Act breach remedies.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/topic/$slug"
                  params={{ slug: "midsem-foundational-legal-maxims" }}
                  onClick={() => setActiveCourseSlug("business-laws")}
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black hover:bg-white/90 px-5 py-2.5 font-sans text-xs font-bold shadow-md transition-all ios-press"
                >
                  <span>Study 603 Mid-Sem Notes</span>
                  <ArrowRight className="size-3.5" />
                </Link>
                {activeCourseSlug !== "business-laws" ? (
                  <button
                    type="button"
                    onClick={() => setActiveCourseSlug("business-laws")}
                    className="inline-flex items-center gap-1.5 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/20 px-4 py-2.5 font-sans text-xs font-semibold text-white transition-all ios-press"
                  >
                    Set Active
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-white/90 bg-white/10 px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="size-3.5 text-emerald-300" /> Active Course
                  </span>
                )}
              </div>
            </div>
          </div>
          {/* Active Course Progress Card (Charcoal Surface) */}
          <div className="rounded-[24px] border border-[#262626] bg-[#141414] p-6 sm:p-8 space-y-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#1c1c1c] border border-[#262626] text-white px-2.5 py-0.5 font-mono text-xs font-bold">
                    Paper {activeCourse.code}
                  </span>
                  <span className="font-display text-lg font-bold text-white">
                    {activeCourse.title}
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-[-0.03em]">
                    {masteryPercentage}%
                  </span>
                  <span className="font-sans text-sm text-[#999999]">
                    completed ({doneCount} of {activeCourse.topics.length} topics mastered)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                {activeCourse.topics.length > 0 && (
                  <Link
                    to="/topic/$slug"
                    params={{ slug: resumeTopic.slug }}
                    className="inline-flex items-center gap-2 rounded-full bg-white text-black hover:bg-white/90 px-5 py-2.5 font-sans text-xs font-bold shadow-sm transition-all ios-press"
                  >
                    <span>{lastSlug ? "Resume Studying" : "Start Reading"}</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                )}

                {!confirmReset ? (
                  <button
                    type="button"
                    onClick={() => setConfirmReset(true)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#262626] bg-[#1c1c1c] px-3.5 py-2.5 font-sans text-xs font-medium text-[#999999] hover:text-white transition-all ios-press"
                    title="Reset completion progress"
                  >
                    <RotateCcw className="size-3.5" />
                    <span>Reset</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-2 rounded-full border border-[#262626] bg-[#1c1c1c] px-3 py-1.5">
                    <span className="font-sans text-xs font-semibold text-white">
                      Reset?
                    </span>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="rounded-full bg-rose-600 px-2.5 py-0.5 font-sans text-xs font-bold text-white transition-all"
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirmReset(false)}
                      className="rounded-full border border-[#262626] px-2.5 py-0.5 font-sans text-xs text-[#999999] hover:text-white transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#1c1c1c]">
              <div
                className="h-full bg-[#0099ff] transition-all duration-500 ease-out"
                style={{ width: `${masteryPercentage}%` }}
              />
            </div>

            {/* Stat Counters */}
            <div className="grid grid-cols-2 gap-3 border-t border-[#1a1a1a] pt-5 sm:grid-cols-4">
              <div className="rounded-xl bg-[#1c1c1c]/60 border border-[#262626] p-3.5">
                <span className="font-sans text-xs font-medium text-[#999999] block">Curriculum Units</span>
                <span className="font-display text-xl font-bold text-white">{activeCourse.units.length} Units</span>
              </div>
              <div className="rounded-xl bg-[#1c1c1c]/60 border border-[#262626] p-3.5">
                <span className="font-sans text-xs font-medium text-[#999999] block">Structured Notes</span>
                <span className="font-display text-xl font-bold text-white">{activeCourse.topics.length} Modules</span>
              </div>
              <div className="rounded-xl bg-[#1c1c1c]/60 border border-[#262626] p-3.5">
                <span className="font-sans text-xs font-medium text-[#999999] block">Question Bank</span>
                <span className="font-display text-xl font-bold text-white">{activeCourse.examQuestions.length} Qs</span>
              </div>
              <div className="rounded-xl bg-[#1c1c1c]/60 border border-[#262626] p-3.5">
                <span className="font-sans text-xs font-medium text-[#999999] block">Subject Dictionary</span>
                <span className="font-display text-xl font-bold text-white">
                  {activeCourse.glossary ? activeCourse.glossary.length : 0} Terms
                </span>
              </div>
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

        {/* Active Subject Unit Syllabus Breakdown */}
        <section className="space-y-8">
          <div className="border-b border-[#262626] pb-4">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-white">
              Paper {activeCourse.code} · {activeCourse.title} Syllabus
            </h2>
            <p className="mt-1 font-sans text-xs text-[#999999]">
              Unit-wise lecture notes, structured answers, and core modules.
            </p>
          </div>

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
                        9 Master Examination Modules
                      </span>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {unitTopics.map((topic) => {
                      const isStudied = studied[topic.slug];
                      return (
                        <Link
                          key={topic.id}
                          to="/topic/$slug"
                          params={{ slug: topic.slug }}
                          className="group flex flex-col justify-between rounded-[18px] border border-[#262626] bg-[#141414] p-5 transition-all duration-200 hover:border-[#383838] hover:bg-[#181818] shadow-2xs ios-card"
                        >
                          <div className="space-y-2">
                            <div className="flex items-start justify-between gap-2">
                              <span className="font-mono text-xs font-bold text-[#666666]">
                                #{String(topic.number).padStart(2, "0")}
                              </span>
                              {isStudied && (
                                <span className="inline-flex items-center gap-1 rounded-full bg-[#22c55e]/15 border border-[#22c55e]/30 px-2 py-0.5 font-sans text-[10px] font-bold text-[#22c55e]">
                                  <CheckCircle2 className="size-3" /> Mastered
                                </span>
                              )}
                            </div>
                            <h4 className="font-display text-base font-bold text-white group-hover:text-[#0099ff] transition-colors leading-snug">
                              {topic.title}
                            </h4>
                            <p className="line-clamp-2 text-xs text-[#999999] leading-relaxed">
                              {topic.summary}
                            </p>
                          </div>

                          <div className="mt-4 flex items-center justify-between border-t border-[#1f1f1f] pt-3 text-xs">
                            <span className="font-sans text-[11px] text-[#666666]">
                              {topic.blocks.length} sections
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
        </section>

        {/* Model Exam Answers Section */}
        <section className="space-y-6">
          <div className="flex flex-col gap-1 border-b border-[#262626] pb-4 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-white">
                Paper {activeCourse.code} Model Exam Answers
              </h2>
              <p className="mt-1 font-sans text-xs text-[#999999]">
                {activeCourse.examQuestions.length} complete model university exam answers.
              </p>
            </div>
            <Link
              to="/exam"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#0099ff] hover:underline"
            >
              <span>View Full Question Bank</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {activeCourse.examQuestions.slice(0, 6).map((exam) => (
              <Link
                key={exam.id}
                to="/exam/$qid"
                params={{ qid: exam.id }}
                className="group flex flex-col justify-between rounded-[18px] border border-[#262626] bg-[#141414] p-5 transition-all duration-200 hover:border-[#383838] hover:bg-[#181818] shadow-2xs ios-card"
              >
                <div className="space-y-2">
                  <span className="rounded-full bg-[#1c1c1c] border border-[#262626] px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#0099ff]">
                    Question {exam.number}
                  </span>
                  <h3 className="font-display text-base font-bold text-white group-hover:text-[#0099ff] transition-colors leading-snug">
                    {exam.title}
                  </h3>
                  <p className="line-clamp-2 text-xs text-[#999999] leading-relaxed">
                    {exam.question}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-[#1f1f1f] pt-3 text-xs">
                  <span className="font-mono text-[11px] text-[#666666]">Model Answer</span>
                  <span className="font-sans font-bold text-[#0099ff] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Study Answer <ArrowRight className="size-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
