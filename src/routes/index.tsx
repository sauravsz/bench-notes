import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Languages,
  RotateCcw,
  Search,
} from "lucide-react";
import { examQuestions, glossary, maxims, topics, units } from "@/data";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/")({
  component: Dashboard,
});

function Dashboard() {
  const studied = useProgress((s) => s.studied);
  const lastSlug = useProgress((s) => s.lastSlug);
  const resetProgress = useProgress((s) => s.resetProgress);

  const [confirmReset, setConfirmReset] = useState(false);

  const doneCount = topics.filter((t) => studied[t.slug]).length;
  const totalTopics = topics.length;
  const masteryPercentage = Math.round((doneCount / totalTopics) * 100);

  const resumeTopic =
    (lastSlug && topics.find((t) => t.slug === lastSlug)) || topics[0];

  const handleReset = () => {
    resetProgress();
    setConfirmReset(false);
  };

  return (
    <main className="px-4 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Hero Section */}
        <section className="space-y-6">
          <div>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Business Law 303 · Comprehensive Revision Desk
            </span>
            <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-ink sm:text-5xl">
              Bench Notes
            </h1>
            <p className="mt-3 font-serif text-lg leading-relaxed text-ink-soft sm:text-xl">
              Complete, rigorous study notes for Indian Contract Law, the Legal System, the Constitution, and Company Law. Written in structured, high-scoring examination format with verbatim statutory sections and leading precedents.
            </p>
          </div>

          {/* Course Mastery Card */}
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm transition-all duration-200">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 font-sans text-xs font-bold text-accent">
                    <CheckCircle2 className="size-3.5" /> Course Mastery
                  </span>
                  <span className="font-sans text-xs font-semibold text-muted">
                    {doneCount} of {totalTopics} topics completed
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-4xl font-bold text-ink">
                    {masteryPercentage}%
                  </span>
                  <span className="font-sans text-sm font-medium text-ink-soft">
                    syllabus mastered
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/topic/$slug"
                  params={{ slug: resumeTopic.slug }}
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-accent/90 hover:shadow"
                >
                  <span>
                    {lastSlug ? "Resume Studying" : "Start Course"}
                  </span>
                  <ArrowRight className="size-4" />
                </Link>

                {!confirmReset ? (
                  <button
                    type="button"
                    onClick={() => setConfirmReset(true)}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-surface px-3.5 py-2.5 font-sans text-xs font-medium text-muted transition-colors hover:bg-bg-warm hover:text-ink"
                    title="Reset topic completion progress"
                  >
                    <RotateCcw className="size-3.5" />
                    <span>Reset</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-2 rounded-xl border border-line bg-bg-warm px-3 py-1.5">
                    <span className="font-sans text-xs font-semibold text-ink">
                      Reset all?
                    </span>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="rounded bg-destructive px-2 py-1 font-sans text-xs font-bold text-white transition-opacity hover:opacity-90"
                    >
                      Yes, Reset
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
            <div className="mt-5">
              <div className="h-2 w-full overflow-hidden rounded-full bg-line/50">
                <div
                  className="h-full rounded-full bg-accent transition-all duration-500"
                  style={{ width: `${masteryPercentage}%` }}
                />
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line/60 pt-5 sm:grid-cols-4">
              <div className="space-y-0.5">
                <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-muted">
                  Curriculum Topics
                </p>
                <p className="font-serif text-xl font-bold text-ink">
                  {totalTopics}
                </p>
              </div>
              <div className="space-y-0.5">
                <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-muted">
                  Model Answers
                </p>
                <p className="font-serif text-xl font-bold text-ink">
                  {examQuestions.length} Questions
                </p>
              </div>
              <div className="space-y-0.5">
                <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-muted">
                  Statutory Terms
                </p>
                <p className="font-serif text-xl font-bold text-ink">
                  {glossary.length} Defined
                </p>
              </div>
              <div className="space-y-0.5">
                <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-muted">
                  Legal Maxims
                </p>
                <p className="font-serif text-xl font-bold text-ink">
                  {maxims.length} Maxims
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Jump Bar for Modules */}
        <section className="space-y-3">
          <h2 className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-muted">
            Curriculum Units
          </h2>
          <div className="flex flex-wrap gap-2">
            {units.map((unit, idx) => {
              const unitTopics = topics.filter((t) => t.unit === unit);
              const unitDone = unitTopics.filter((t) => studied[t.slug]).length;
              const allDone = unitDone === unitTopics.length && unitTopics.length > 0;
              return (
                <a
                  key={unit}
                  href={`#unit-${idx}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 font-sans text-xs font-semibold text-ink-soft transition-all duration-150 hover:border-accent hover:bg-bg-warm hover:text-ink"
                >
                  <span>{unit}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 font-sans text-[10px] font-bold ${
                      allDone
                        ? "bg-studied/20 text-studied"
                        : "bg-line text-muted"
                    }`}
                  >
                    {unitDone}/{unitTopics.length}
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        {/* Curriculum Units & Topics Breakdown */}
        <section className="space-y-10">
          <div className="flex items-baseline justify-between border-b border-line pb-3">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Course Syllabus
            </h2>
            <span className="font-sans text-xs font-medium text-muted">
              Structured 14-Mark Examination Notes
            </span>
          </div>

          <div className="space-y-10">
            {units.map((unit, idx) => {
              const unitTopics = topics.filter((t) => t.unit === unit);
              const unitDone = unitTopics.filter((t) => studied[t.slug]).length;

              return (
                <div
                  key={unit}
                  id={`unit-${idx}`}
                  className="space-y-4 scroll-mt-20"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent">
                        Unit {idx + 1}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-ink">
                        {unit}
                      </h3>
                    </div>
                    <span className="rounded-full bg-bg-warm px-2.5 py-1 font-sans text-xs font-medium text-muted">
                      {unitDone} of {unitTopics.length} studied
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {unitTopics.map((topic) => {
                      const isStudied = !!studied[topic.slug];
                      return (
                        <Link
                          key={topic.slug}
                          to="/topic/$slug"
                          params={{ slug: topic.slug }}
                          className="group relative flex flex-col justify-between rounded-xl border border-line bg-surface p-5 transition-all duration-150 hover:border-accent/40 hover:bg-bg-warm/60 hover:shadow-sm"
                        >
                          <div className="space-y-2">
                            <div className="flex items-start justify-between gap-2">
                              <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-muted">
                                Topic {topic.number}
                              </span>
                              {isStudied && (
                                <span className="inline-flex items-center gap-1 rounded-full bg-studied/15 px-2 py-0.5 font-sans text-[11px] font-bold text-studied">
                                  <CheckCircle2 className="size-3" /> Studied
                                </span>
                              )}
                            </div>
                            <h4 className="font-serif text-lg font-bold text-ink group-hover:text-accent">
                              {topic.title}
                            </h4>
                            <p className="line-clamp-2 font-serif text-sm leading-relaxed text-ink-soft">
                              {topic.summary}
                            </p>
                          </div>

                          <div className="mt-4 flex items-center justify-between border-t border-line/50 pt-3 text-xs">
                            <span className="font-sans font-medium text-muted">
                              {topic.blocks.length} sections
                            </span>
                            <span className="inline-flex items-center gap-1 font-sans font-semibold text-accent transition-transform duration-150 group-hover:translate-x-0.5">
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

        {/* All 19 Model Exam Questions Section */}
        <section className="space-y-6">
          <div className="flex flex-col gap-1 border-b border-line pb-3 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Examination Preparation
              </span>
              <h2 className="mt-1 font-serif text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Model Examination Answers
              </h2>
            </div>
            <Link
              to="/exam"
              className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-accent hover:underline"
            >
              View all 19 answers <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <p className="font-serif text-base leading-relaxed text-ink-soft">
            Nineteen full university examination answers written out in complete analytical structure. Every question includes verbatim statutory sections, case authorities, and structured conclusions.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {examQuestions.map((q) => (
              <Link
                key={q.id}
                to="/exam/$qid"
                params={{ qid: q.id }}
                className="group flex flex-col justify-between rounded-xl border border-line bg-surface p-4 transition-all duration-150 hover:border-accent/40 hover:bg-bg-warm/60 hover:shadow-sm"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent">
                      Question {q.number}
                    </span>
                    <span className="rounded-md bg-bg-warm px-2 py-0.5 font-sans text-[10px] font-semibold text-muted">
                      Full Model Answer
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold leading-snug text-ink group-hover:text-accent">
                    {q.title}
                  </h3>
                  <p className="line-clamp-2 font-serif text-xs leading-relaxed text-ink-soft">
                    {q.question}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-end border-t border-line/40 pt-2 font-sans text-xs font-semibold text-accent">
                  <span className="inline-flex items-center gap-1 transition-transform group-hover:translate-x-0.5">
                    View Solution <ArrowRight className="size-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Study Tools & Quick Reference */}
        <section className="space-y-6">
          <div className="border-b border-line pb-3">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Study Reference Tools
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Link
              to="/glossary"
              className="group rounded-2xl border border-line bg-surface p-5 transition-all duration-150 hover:border-accent/40 hover:bg-bg-warm/60 hover:shadow-sm"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <BookOpen className="size-5" />
              </div>
              <h3 className="mt-3 font-serif text-lg font-bold text-ink group-hover:text-accent">
                Statutory Glossary
              </h3>
              <p className="mt-1 font-serif text-xs leading-relaxed text-ink-soft">
                {glossary.length} verbatim statutory definitions and legal terms from the Indian Contract Act and Companies Act.
              </p>
              <div className="mt-4 inline-flex items-center gap-1 font-sans text-xs font-semibold text-accent">
                Browse Terms <ArrowRight className="size-3" />
              </div>
            </Link>

            <Link
              to="/maxims"
              className="group rounded-2xl border border-line bg-surface p-5 transition-all duration-150 hover:border-accent/40 hover:bg-bg-warm/60 hover:shadow-sm"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Languages className="size-5" />
              </div>
              <h3 className="mt-3 font-serif text-lg font-bold text-ink group-hover:text-accent">
                Legal Maxims
              </h3>
              <p className="mt-1 font-serif text-xs leading-relaxed text-ink-soft">
                {maxims.length} Latin legal maxims with literal translations, core principles, and landmark case applications.
              </p>
              <div className="mt-4 inline-flex items-center gap-1 font-sans text-xs font-semibold text-accent">
                Explore Maxims <ArrowRight className="size-3" />
              </div>
            </Link>

            <Link
              to="/search"
              className="group rounded-2xl border border-line bg-surface p-5 transition-all duration-150 hover:border-accent/40 hover:bg-bg-warm/60 hover:shadow-sm"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Search className="size-5" />
              </div>
              <h3 className="mt-3 font-serif text-lg font-bold text-ink group-hover:text-accent">
                Global Search
              </h3>
              <p className="mt-1 font-serif text-xs leading-relaxed text-ink-soft">
                Instant search across all 14-mark notes, 19 exam questions, glossary entries, and maxims.
              </p>
              <div className="mt-4 inline-flex items-center gap-1 font-sans text-xs font-semibold text-accent">
                Search Notes <ArrowRight className="size-3" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
