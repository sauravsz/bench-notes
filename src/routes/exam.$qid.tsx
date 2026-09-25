import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getExam, getTopic } from "@/data";
import { NoteBody } from "@/components/note-body";

export const Route = createFileRoute("/exam/$qid")({
  component: ExamAnswer,
});

function ExamAnswer() {
  const { qid } = Route.useParams();
  const exam = getExam(qid);
  if (!exam) throw notFound();

  const related = exam.relatedSlugs
    .map((slug) => getTopic(slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <article className="px-4 py-8 sm:px-10 sm:py-10">
      <div className="mx-auto max-w-2xl">
        <Link
          to="/exam"
          className="no-print inline-flex min-h-11 items-center gap-2 text-sm text-ink-soft hover:text-ink"
        >
          <ArrowLeft className="size-4" />
          All questions
        </Link>
        <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Question {exam.number} · {exam.marks} marks
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          {exam.title}
        </h1>
        <p className="mt-4 rounded-lg border border-line bg-surface-2 px-4 py-3 font-serif text-lg leading-relaxed text-ink">
          {exam.question}
        </p>
        <div className="mt-8">
          <NoteBody blocks={exam.blocks} />
        </div>
        {related.length > 0 ? (
          <p className="mt-8 font-sans text-sm text-muted">
            Related notes:{" "}
            {related.map((topic, i) => (
              <span key={topic.slug}>
                {i > 0 ? ", " : ""}
                <Link
                  to="/topic/$slug"
                  params={{ slug: topic.slug }}
                  className="text-accent hover:underline"
                >
                  {topic.title}
                </Link>
              </span>
            ))}
          </p>
        ) : null}
      </div>
    </article>
  );
}
