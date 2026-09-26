import { createFileRoute, Link } from "@tanstack/react-router";
import { useCurrentCourse } from "@/lib/current-course";

export const Route = createFileRoute("/exam/")({ component: ExamIndex });

function ExamIndex() {
  const activeCourse = useCurrentCourse((s) => s.getActiveCourse());
  const examQuestions = activeCourse.examQuestions;
  return (
    <main className="px-4 py-8 sm:px-10 sm:py-10 ios-fade-up">
      <div className="mx-auto max-w-2xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Examination
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {activeCourse.code} · Model Examination Answers
        </h1>
        <p className="mt-4 font-serif text-lg leading-relaxed text-ink-soft">
          Comprehensive university examination questions for {activeCourse.title} answered in complete analytical structure.
        </p>
        <ol className="mt-8 flex flex-col gap-3">
          {examQuestions.map((q) => (
            <li key={q.id}>
              <Link
                to="/exam/$qid"
                params={{ qid: q.id }}
                className="block rounded-xl border border-line bg-surface p-5 shadow-2xs transition-all duration-200 ios-card group"
              >
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                  Question {q.number}
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
