import { useEffect, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUp, Scale } from "lucide-react";
import { adjacentExams, getExam, getTopic } from "@/data";
import { getExamById } from "@/data/courses";
import { useCurrentCourse } from "@/lib/current-course";
import { useAppearance, TEXT_WIDTH_CLASSES } from "@/lib/appearance";
import { useProgress } from "@/lib/progress";
import { ReaderView } from "@/components/reader-view";
import { RightRailToc } from "@/components/right-rail-toc";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/exam/$qid")({
  component: ExamAnswer,
});

function ExamAnswer() {
  const { qid } = Route.useParams();
  const exam = getExam(qid);
  if (!exam) throw notFound();

  const examMatch = getExamById(qid);
  const course = examMatch?.course;

  const { prev, next } = adjacentExams(qid);
  const [progress, setProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const textWidth = useAppearance((s) => s.textWidth);
  const setActiveCourseSlug = useCurrentCourse((s) => s.setActiveCourseSlug);
  const studied = useProgress((s) => s.studied[qid]);
  const toggleStudied = useProgress((s) => s.toggleStudied);
  const setLastSlug = useProgress((s) => s.setLastSlug);
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
    if (course) {
      setActiveCourseSlug(course.slug);
    }
    setLastSlug(qid);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [qid, course, setActiveCourseSlug, setLastSlug]);
  useEffect(() => {
    const savedY = sessionStorage.getItem(`scroll_pos_exam_${qid}`);
    if (savedY) {
      const y = parseInt(savedY, 10);
      if (!isNaN(y) && y > 0) {
        setTimeout(() => window.scrollTo({ top: y, behavior: "instant" }), 60);
      }
    }

    const handleSaveScroll = () => {
      if (window.scrollY > 100) {
        sessionStorage.setItem(`scroll_pos_exam_${qid}`, String(window.scrollY));
      }
    };
    window.addEventListener("scroll", handleSaveScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleSaveScroll);
  }, [qid]);


  const related = exam.relatedSlugs
    .map((slug) => getTopic(slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <>
      {/* Reading scroll progress bar (Framer Blue) */}
      <div
        className="no-print pointer-events-none fixed top-0 left-0 right-0 z-50 h-[3px] bg-[#1a1a1a] overflow-hidden"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      >
        <div
          className="h-full bg-[#0099ff] transition-[width] duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto flex max-w-[1440px] justify-center gap-8 px-4 py-8 sm:px-8 sm:py-12 bg-[#090909]">
        {/* Main Article Canvas */}
        <article className={cn("min-w-0 flex-1 transition-all duration-200 ios-fade-up", TEXT_WIDTH_CLASSES[textWidth])}>
          {/* Breadcrumb Trail */}
          <nav className="mb-6 flex flex-wrap items-center gap-1.5 font-mono text-xs text-[#666666]">
            <Link to="/" className="hover:text-white transition-colors">
              MBA Papers
            </Link>
            <span>/</span>
            <Link
              to="/"
              onClick={() => course && setActiveCourseSlug(course.slug)}
              className="hover:text-white transition-colors"
            >
              {course?.code || "Paper"} {course?.title}
            </Link>
            <span>/</span>
            <Link to="/exam" className="hover:text-white transition-colors">
              Model Answers
            </Link>
            <span>/</span>
            <span className="text-[#0099ff]">Question {exam.number}</span>
          </nav>

          {/* Header Metadata Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#262626] pb-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#0099ff]">
              Question {exam.number} · Model Answer
            </span>
            {exam.marks && (
              <span className="rounded-full bg-[#1c1c1c] border border-[#262626] text-[#999999] px-3 py-0.5 font-mono text-xs font-bold">
                {exam.marks} Marks Scale
              </span>
            )}
          </div>

          {/* Title and Question Card */}
          <div className="mt-6 space-y-4">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white leading-tight">
              {exam.title}
            </h1>
            <div className="rounded-[20px] border border-[#262626] bg-[#141414] p-5 sm:p-6 shadow-xs">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#666666] block mb-2">
                Examination Question Prompt
              </span>
              <p className="font-sans text-sm sm:text-base leading-relaxed text-[#cccccc]">
                {exam.question}
              </p>
            </div>
          </div>

          {/* Related Modules */}
          {related.length > 0 ? (
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-mono text-[#666666]">Related Syllabus Notes:</span>
              {related.map((t) => (
                <Link
                  key={t.slug}
                  to="/topic/$slug"
                  params={{ slug: t.slug }}
                  className="rounded-full border border-[#262626] bg-[#141414] px-3 py-1 font-sans text-xs text-[#0099ff] hover:bg-[#1c1c1c] hover:border-[#0099ff]/40 transition-colors"
                >
                  {t.title}
                </Link>
              ))}
            </div>
          ) : null}

          {/* Answer Body */}
          <div className="mt-8">
            <ReaderView
              docId={`exam:${exam.id}`}
              docTitle={exam.title}
              blocks={exam.blocks}
              studied={studied}
              onToggleStudied={() => toggleStudied(qid)}
            />
          </div>

          {/* Pagination Navigation */}
          <nav className="no-print mt-14 grid gap-4 sm:grid-cols-2 border-t border-[#262626] pt-8">
            {prev ? (
              <Link
                to="/exam/$qid"
                params={{ qid: prev.id }}
                className="flex items-center gap-3 rounded-[18px] border border-[#262626] bg-[#141414] p-4 text-left transition-all duration-200 hover:border-[#383838] hover:bg-[#181818] ios-press-subtle group"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#1c1c1c] text-[#999999] group-hover:text-white transition-colors">
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                    Previous Question
                  </span>
                  <span className="font-display text-sm font-bold text-white truncate block">
                    Q{prev.number}: {prev.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                to="/exam/$qid"
                params={{ qid: next.id }}
                className="flex items-center justify-between gap-3 rounded-[18px] border border-[#262626] bg-[#141414] p-4 text-right transition-all duration-200 hover:border-[#383838] hover:bg-[#181818] ios-press-subtle group sm:ml-auto w-full"
              >
                <div className="min-w-0 flex-1">
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                    Next Question
                  </span>
                  <span className="font-display text-sm font-bold text-white truncate block">
                    Q{next.number}: {next.title}
                  </span>
                </div>
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#1c1c1c] text-[#999999] group-hover:text-white transition-colors">
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ) : null}
          </nav>
        </article>

        {/* Desktop Sticky Right-Rail Outline */}
        <RightRailToc
          blocks={exam.blocks}
          progress={progress}
          studied={studied}
          onToggleStudied={() => toggleStudied(qid)}
        />
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="no-print fixed bottom-6 right-6 z-40 flex size-10 items-center justify-center rounded-full border border-[#262626] bg-[#141414]/90 text-white shadow-xl backdrop-blur-md hover:bg-white hover:text-black transition-all ios-scale-in ios-press"
          aria-label="Back to top"
        >
          <ArrowUp className="size-4" />
        </button>
      ) : null}
    </>
  );
}
