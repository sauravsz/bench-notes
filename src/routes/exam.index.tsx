import { createFileRoute, Link } from "@tanstack/react-router";
import { examQuestions } from "@/data";

export const Route = createFileRoute("/exam/")({ component: ExamIndex });

function ExamIndex() {
  return (
    <main className="px-4 py-8 sm:px-10 sm:py-10">
      <div className="mx-auto max-w-2xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Examination
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          14-mark model answers
        </h1>
        <p className="mt-4 font-serif text-lg leading-relaxed text-ink-soft">
          Six questions from the class outline, answered only from the lecture
          transcript. Use the headings as the skeleton of a written answer.
        </p>
        <ol className="mt-8 flex flex-col gap-3">
          {examQuestions.map((q) => (
            <li key={q.id}>
              <Link
                to="/exam/$qid"
                params={{ qid: q.id }}
                className="block rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
              >
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                  Question {q.number} · {q.marks} marks
                </p>
                <h2 className="mt-1 font-serif text-xl font-semibold leading-snug">
                  {q.title}
                </h2>
                <p className="mt-2 font-serif text-[1.02rem] leading-relaxed text-ink-soft">
                  {q.question}
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
