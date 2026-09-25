import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Languages, Scale } from "lucide-react";
import { examQuestions, topics, units } from "@/data";
import { useProgress } from "@/lib/progress";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const studied = useProgress((s) => s.studied);
  const lastSlug = useProgress((s) => s.lastSlug);
  const done = topics.filter((t) => studied[t.slug]).length;
  const continueTopic =
    topics.find((t) => t.slug === lastSlug) ??
    topics.find((t) => !studied[t.slug]) ??
    topics[0];

  return (
    <main className="px-4 py-8 sm:px-8 sm:py-10">
      <section className="max-w-3xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Business Law 303 · LR Ma'am
        </p>
        <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Exam notes from the lecture desk
        </h1>
        <p className="mt-4 max-w-prose font-serif text-lg leading-relaxed text-ink-soft">
          Thirteen topics, each written as a 14-mark answer, plus six full
          examination questions. Wording is straightened; definitions and
          statutory meaning are kept as taught.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild>
            <Link to="/topic/$slug" params={{ slug: continueTopic.slug }}>
              {lastSlug ? "Continue reading" : "Start with the judiciary"}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/exam">14-mark answers</Link>
          </Button>
        </div>
        <p className="mt-4 font-sans text-sm text-muted">
          {done} of {topics.length} topics marked studied
        </p>
      </section>

      <section className="mt-8 max-w-3xl rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-serif text-lg font-semibold text-ink">
          What is in these notes
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 font-serif text-[1.02rem] leading-relaxed text-ink-soft">
          <li>
            Source: LR Ma'am, Business Law 303 lecture notes (11 August to 18
            September 2026).
          </li>
          <li>
            Only that transcript is used. No outside cases, illustrations, or
            extra statute are added.
          </li>
          <li>
            JT topics listed in the syllabus sketch — tender types, cross
            offers, and the Consumer Protection Act, 1986 — are not in this
            transcript, so they are not written here.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">
            14-mark questions
          </h2>
          <Link
            to="/exam"
            className="inline-flex min-h-11 items-center font-sans text-sm font-medium text-accent hover:underline"
          >
            Open all
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {examQuestions.map((q) => (
            <Link
              key={q.id}
              to="/exam/$qid"
              params={{ qid: q.id }}
              className="rounded-xl border border-line bg-surface p-4 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[var(--shadow-border-hover)]"
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                Question {q.number} · {q.marks} marks
              </p>
              <h3 className="mt-1 font-serif text-lg font-semibold leading-snug text-ink">
                {q.title}
              </h3>
              <p className="mt-2 line-clamp-2 font-serif text-sm leading-relaxed text-muted">
                {q.question}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold tracking-tight">
          Syllabus
        </h2>
        <div className="mt-4 flex flex-col gap-8">
          {units.map((unit) => {
            const list = topics.filter((t) => t.unit === unit);
            return (
              <div key={unit}>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {unit}
                </h3>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  {list.map((topic) => (
                    <li key={topic.id}>
                      <Link
                        to="/topic/$slug"
                        params={{ slug: topic.slug }}
                        className="flex h-full flex-col rounded-xl border border-line bg-surface p-4 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-sans text-xs tabular-nums text-faint">
                            {String(topic.number).padStart(2, "0")} · {topic.marks}{" "}
                            marks
                          </span>
                          {studied[topic.slug] ? (
                            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-studied">
                              Studied
                            </span>
                          ) : null}
                        </div>
                        <h4 className="mt-2 font-serif text-lg font-semibold leading-snug text-ink">
                          {topic.title}
                        </h4>
                        <p className="mt-2 flex-1 font-serif text-sm leading-relaxed text-muted">
                          {topic.summary}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-10 grid gap-3 sm:grid-cols-3">
        <Link
          to="/glossary"
          className="rounded-xl border border-line bg-surface p-4 shadow-[var(--shadow-border)]"
        >
          <BookOpen className="size-5 text-accent" strokeWidth={1.75} />
          <h3 className="mt-3 font-serif text-lg font-semibold">Glossary</h3>
          <p className="mt-1 text-sm text-muted">
            Section 2 terms, consent, capacity, and company definitions.
          </p>
        </Link>
        <Link
          to="/maxims"
          className="rounded-xl border border-line bg-surface p-4 shadow-[var(--shadow-border)]"
        >
          <Languages className="size-5 text-accent" strokeWidth={1.75} />
          <h3 className="mt-3 font-serif text-lg font-semibold">Latin maxims</h3>
          <p className="mt-1 text-sm text-muted">
            The maxims taught in class, with the meanings as given.
          </p>
        </Link>
        <Link
          to="/exam"
          className="rounded-xl border border-line bg-surface p-4 shadow-[var(--shadow-border)]"
        >
          <Scale className="size-5 text-accent" strokeWidth={1.75} />
          <h3 className="mt-3 font-serif text-lg font-semibold">
            Model answers
          </h3>
          <p className="mt-1 text-sm text-muted">
            Six examination questions written out in full.
          </p>
        </Link>
      </section>
    </main>
  );
}
