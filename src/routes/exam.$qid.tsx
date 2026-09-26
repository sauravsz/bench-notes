import { useEffect, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { adjacentExams, getExam, getTopic } from "@/data";
import { useAppearance, TEXT_WIDTH_CLASSES } from "@/lib/appearance";
import { ReaderView } from "@/components/reader-view";
import { cn } from "@/lib/utils";
export const Route = createFileRoute("/exam/$qid")({
  component: ExamAnswer,
});

function ExamAnswer() {
  const { qid } = Route.useParams();
  const exam = getExam(qid);
  if (!exam) throw notFound();
  const { prev, next } = adjacentExams(qid);
  const [progress, setProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const textWidth = useAppearance((s) => s.textWidth);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setProgress(Math.min(100, Math.max(0, (scrollY / totalHeight) * 100)));
      } else {
        setProgress(0);
      }
      setShowBackToTop(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [qid]);


  const related = exam.relatedSlugs
    .map((slug) => getTopic(slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <>
      {/* Reading scroll progress bar */}
      <div
        className="no-print pointer-events-none fixed top-0 left-0 right-0 z-50 h-[3.5px] bg-line/30 overflow-hidden"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      >
        <div
          className="h-full rounded-r-full bg-accent transition-[width] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: `${progress}%` }}
        />
      </div>

    <article className="px-4 py-8 sm:px-10 sm:py-10 ios-fade-up">
        <div className={cn("mx-auto transition-all duration-200", TEXT_WIDTH_CLASSES[textWidth])}>
        <Link
          to="/exam"
          className="no-print inline-flex min-h-11 items-center gap-2 text-sm text-ink-soft hover:text-ink transition-all duration-200 ios-press-subtle group"
        >
          <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
          All questions
        </Link>
        <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Question {exam.number}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          {exam.title}
        </h1>
        <p className="mt-4 rounded-lg border border-line bg-surface-2 px-4 py-3 font-serif text-lg leading-relaxed text-ink">
          {exam.question}
        </p>
        <div className="mt-6">
          <ReaderView
            docId={`exam:${exam.id}`}
            docTitle={`Question ${exam.number}: ${exam.title}`}
            blocks={exam.blocks}
          />
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
        <nav className="no-print mt-10 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:justify-between">
          {prev ? (
            <Link
              to="/exam/$qid"
              params={{ qid: prev.id }}
              className="flex min-h-11 max-w-xs items-center gap-2 rounded-md px-1 text-sm text-ink-soft hover:text-ink transition-all duration-200 ios-press-subtle group"
            >
              <ArrowLeft className="size-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>
                <span className="block text-[11px] uppercase tracking-[0.12em] text-faint">
                  Previous
                </span>
                Question {prev.number}: {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/exam/$qid"
              params={{ qid: next.id }}
              className="flex min-h-11 max-w-xs items-center justify-end gap-2 rounded-md px-1 text-right text-sm text-ink-soft hover:text-ink sm:ml-auto transition-all duration-200 ios-press-subtle group"
            >
              <span>
                <span className="block text-[11px] uppercase tracking-[0.12em] text-faint">
                  Next
                </span>
                Question {next.number}: {next.title}
              </span>
              <ArrowRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          ) : null}
        </nav>
      </div>
    </article>
    {/* Floating Back to Top Button */}
    {showBackToTop ? (
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="no-print fixed bottom-6 right-6 z-40 flex size-10 items-center justify-center rounded-full border border-line bg-surface/90 text-ink-soft shadow-md backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-bg-warm hover:text-ink hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ios-scale-in ios-press"
        aria-label="Back to top"
      >
        <ArrowUp className="size-4" />
      </button>
    ) : null}
  </>
  );
}
