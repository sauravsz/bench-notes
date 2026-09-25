import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Languages,
  RotateCcw,
  Scale,
  Search,
  Sparkles,
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
    activeCourse.topics[0] || { slug: "nature-scope-business-environment", title: "Overview" };

  const handleReset = () => {
    resetProgress();
    setConfirmReset(false);
  };

  const filteredCourses =
    selectedCategory === "All"
      ? allCourses
      : allCourses.filter((c) => c.category === selectedCategory);

  return (
    <main className="px-4 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Hero Section */}
        <section className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-0.5 font-sans text-xs font-bold text-accent">
                <GraduationCap className="size-3.5" />
                MBA Academic Suite
              </span>
              <span className="font-sans text-xs font-semibold text-muted">
                8 Papers Enrolled
              </span>
            </div>
            <h1 className="font-serif text-3xl font-bold tracking-tight text-ink sm:text-5xl">
              Bench Notes
            </h1>
            <p className="mt-2 font-serif text-lg leading-relaxed text-ink-soft sm:text-xl">
              Digital lecture desk and structured examination revision suite for all core and elective MBA papers.
            </p>
          </div>

          {/* Active Course Mastery Card */}
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm transition-all duration-200">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-accent text-white px-2 py-0.5 font-sans text-xs font-bold">
                    Paper {activeCourse.code}
                  </span>
                  <span className="font-serif text-base font-bold text-ink">
                    {activeCourse.title}
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-4xl font-bold text-ink">
                    {masteryPercentage}%
                  </span>
                  <span className="font-sans text-sm font-medium text-ink-soft">
                    syllabus mastered ({doneCount} of {activeCourse.topics.length} topics)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                {activeCourse.topics.length > 0 ? (
                  <Link
                    to="/topic/$slug"
                    params={{ slug: resumeTopic.slug }}
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-accent/90 hover:shadow"
                  >
                    <span>
                      {lastSlug ? "Resume Studying" : "Start Reading"}
                    </span>
                    <ArrowRight className="size-4" />
                  </Link>
                ) : null}

                {!confirmReset ? (
                  <button
                    type="button"
                    onClick={() => setConfirmReset(true)}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-surface px-3.5 py-2.5 font-sans text-xs font-medium text-muted transition-colors hover:bg-bg-warm hover:text-ink"
                    title="Reset completion progress"
                  >
                    <RotateCcw className="size-3.5" />
                    <span>Reset</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-2 rounded-xl border border-line bg-bg-warm px-3 py-1.5">
                    <span className="font-sans text-xs font-semibold text-ink">
                      Reset?
                    </span>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="rounded bg-destructive px-2 py-1 font-sans text-xs font-bold text-white transition-opacity hover:opacity-90"
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirmReset(false)}
                      className="rounded border border-line bg-surface px-2 py-1 font-sans text-xs font-medium text-ink-soft hover:bg-surface/80"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-5 space-y-2">
              <div className="h-2 w-full overflow-hidden rounded-full bg-bg-warm">
                <div
                  className="h-full bg-accent transition-all duration-300 ease-out"
                  style={{ width: `${masteryPercentage}%` }}
                />
              </div>
            </div>

            {/* Quick Stat Counter Badges */}
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line/60 pt-4 sm:grid-cols-4">
              <div className="rounded-xl bg-bg-warm/50 p-3">
                <span className="font-sans text-xs font-medium text-muted block">Curriculum Units</span>
                <span className="font-serif text-xl font-bold text-ink">{activeCourse.units.length} Units</span>
              </div>
              <div className="rounded-xl bg-bg-warm/50 p-3">
                <span className="font-sans text-xs font-medium text-muted block">Structured Notes</span>
                <span className="font-serif text-xl font-bold text-ink">{activeCourse.topics.length} Modules</span>
              </div>
              <div className="rounded-xl bg-bg-warm/50 p-3">
                <span className="font-sans text-xs font-medium text-muted block">Question Bank</span>
                <span className="font-serif text-xl font-bold text-ink">{activeCourse.examQuestions.length} Model Answers</span>
              </div>
              <div className="rounded-xl bg-bg-warm/50 p-3">
                <span className="font-sans text-xs font-medium text-muted block">Subject Dictionary</span>
                <span className="font-serif text-xl font-bold text-ink">
                  {activeCourse.glossary ? activeCourse.glossary.length : 0} Terms
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Master Curriculum Selector (All 8 Papers) */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-line pb-3">
            <div>
              <h2 className="font-serif text-2xl font-bold text-ink">
                All MBA Curriculum Papers
              </h2>
              <p className="text-xs text-muted">
                Select any subject to switch active syllabus, model answers, and reading notes.
              </p>
            </div>
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1 text-xs">
              {["All", ...courseCategories].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "rounded-full px-3 py-1 font-sans text-xs font-medium transition-all",
                    selectedCategory === cat
                      ? "bg-ink text-surface font-bold shadow-2xs"
                      : "bg-bg-warm text-muted hover:text-ink",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {filteredCourses.map((c) => {
              const isSelected = c.slug === activeCourseSlug;
              const done = c.topics.filter((t) => studied[t.slug]).length;

              return (
                <div
                  key={c.id}
                  onClick={() => setActiveCourseSlug(c.slug)}
                  className={cn(
                    "flex flex-col justify-between rounded-xl border p-4 transition-all duration-150 cursor-pointer shadow-2xs",
                    isSelected
                      ? "border-accent bg-accent/5 ring-2 ring-accent/30"
                      : "border-line bg-surface hover:border-line-strong hover:bg-bg-warm/30",
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span
                        className={cn(
                          "rounded px-2 py-0.5 font-sans text-xs font-bold",
                          isSelected
                            ? "bg-accent text-white"
                            : "bg-bg-warm text-ink border border-line",
                        )}
                      >
                        {c.code}
                      </span>
                      <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-muted">
                        {c.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-base font-bold text-ink leading-snug">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 font-sans text-xs text-ink-soft leading-relaxed">
                      {c.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-xs">
                    <span className="font-sans text-[11px] text-muted">
                      {c.topics.length} Notes • {c.examQuestions.length} Qs
                    </span>
                    {isSelected ? (
                      <span className="font-sans text-xs font-bold text-accent">
                        Active Paper
                      </span>
                    ) : (
                      <span className="font-sans text-xs font-semibold text-muted group-hover:text-ink">
                        Switch →
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Active Subject Unit Syllabus Breakdown */}
        <section className="space-y-6">
          <div className="border-b border-line pb-3">
            <h2 className="font-serif text-2xl font-bold text-ink">
              {activeCourse.code} · {activeCourse.title} Syllabus
            </h2>
            <p className="mt-1 font-sans text-xs text-muted">
              Unit-wise lecture notes and core examination modules for this paper.
            </p>
          </div>

          <div className="space-y-8">
            {activeCourse.units.map((unit, idx) => {
              const unitTopics = activeCourse.topics.filter(
                (t) => t.unit === unit,
              );
              if (unitTopics.length === 0) return null;

              return (
                <div key={unit} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded-full bg-accent/15 font-sans text-xs font-bold text-accent">
                      {idx + 1}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-ink">
                      {unit}
                    </h3>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {unitTopics.map((topic) => {
                      const isStudied = studied[topic.slug];
                      return (
                        <Link
                          key={topic.id}
                          to="/topic/$slug"
                          params={{ slug: topic.slug }}
                          className="group flex flex-col justify-between rounded-xl border border-line bg-surface p-4 transition-all duration-150 hover:border-line-strong hover:bg-bg-warm/30 shadow-2xs"
                        >
                          <div className="space-y-1.5">
                            <div className="flex items-start justify-between gap-2">
                              <span className="font-sans text-xs font-bold tabular-nums text-muted">
                                Topic {String(topic.number).padStart(2, "0")}
                              </span>
                              {isStudied && (
                                <span className="inline-flex items-center gap-1 rounded-full bg-studied/15 px-2 py-0.5 font-sans text-[11px] font-bold text-studied">
                                  <CheckCircle2 className="size-3" /> Studied
                                </span>
                              )}
                            </div>
                            <h4 className="font-serif text-base font-bold text-ink group-hover:text-accent">
                              {topic.title}
                            </h4>
                            <p className="line-clamp-2 font-serif text-xs leading-relaxed text-ink-soft">
                              {topic.summary}
                            </p>
                          </div>

                          <div className="mt-3 flex items-center justify-between border-t border-line/50 pt-2.5 text-xs">
                            <span className="font-sans font-medium text-muted">
                              {topic.blocks.length} sections
                            </span>
                            <span className="inline-flex items-center gap-1 font-sans font-bold text-accent transition-transform duration-150 group-hover:translate-x-0.5">
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

        {/* Active Subject Model Exam Answers */}
        <section className="space-y-4">
          <div className="flex flex-col gap-1 border-b border-line pb-3 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-ink">
                {activeCourse.code} Model Examination Answers
              </h2>
              <p className="mt-1 font-sans text-xs text-muted">
                {activeCourse.examQuestions.length} complete model university exam answers.
              </p>
            </div>
            <Link
              to="/exam"
              className="inline-flex items-center gap-1 font-sans text-xs font-bold text-accent hover:underline"
            >
              <span>View All Question Bank</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {activeCourse.examQuestions.slice(0, 6).map((exam) => (
              <Link
                key={exam.id}
                to="/exam/$qid"
                params={{ qid: exam.id }}
                className="group flex flex-col justify-between rounded-xl border border-line bg-surface p-4 transition-all duration-150 hover:border-line-strong hover:bg-bg-warm/30 shadow-2xs"
              >
                <div>
                  <span className="rounded-md bg-accent/10 px-2 py-0.5 font-sans text-xs font-bold text-accent">
                    Question {exam.number}
                  </span>
                  <h3 className="mt-2 font-serif text-base font-bold text-ink group-hover:text-accent">
                    {exam.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 font-serif text-xs text-ink-soft leading-relaxed">
                    {exam.question}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-line/50 pt-2.5 text-xs">
                  <span className="font-sans text-[11px] text-muted">Model Answer</span>
                  <span className="font-sans font-bold text-accent group-hover:underline flex items-center gap-1">
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
