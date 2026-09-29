import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUp, Clock, Sparkles } from "lucide-react";
import { adjacentTopics, getTopic } from "@/data";
import { getTopicBySlug } from "@/data/courses";
import { useProgress } from "@/lib/progress";
import { useCurrentCourse } from "@/lib/current-course";
import { useAppearance, TEXT_WIDTH_CLASSES } from "@/lib/appearance";
import { ReaderView } from "@/components/reader-view";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/topic/$slug")({
  component: TopicPage,
});

function TopicPage() {
  const { slug } = Route.useParams();
  const topic = getTopic(slug);
  if (!topic) throw notFound();

  const { prev, next } = adjacentTopics(slug);
  const studied = useProgress((s) => s.studied[slug]);
  const toggleStudied = useProgress((s) => s.toggleStudied);
  const setLastSlug = useProgress((s) => s.setLastSlug);
  const setActiveCourseSlug = useCurrentCourse((s) => s.setActiveCourseSlug);
  const textWidth = useAppearance((s) => s.textWidth);
  const [progress, setProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const totalWords = topic.blocks.reduce((acc, b) => {
    if ("text" in b && typeof b.text === "string") return acc + b.text.split(/\s+/).length;
    if ("body" in b && typeof b.body === "string") return acc + b.body.split(/\s+/).length;
    if ("items" in b && Array.isArray(b.items)) return acc + b.items.join(" ").split(/\s+/).length;
    return acc;
  }, 0);
  const readTimeMin = Math.max(1, Math.round(totalWords / 200));

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
    setLastSlug(slug);
    const hit = getTopicBySlug(slug);
    if (hit) {
      setActiveCourseSlug(hit.course.slug);
    }
  }, [slug, setLastSlug, setActiveCourseSlug]);

  useEffect(() => {
    setLastSlug(slug);
  }, [slug, setLastSlug]);

  const isMidSemTopic = topic.unit === "Mid Sem Important" || slug.startsWith("midsem-");

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

      <article className="px-4 py-8 sm:px-10 sm:py-12 ios-fade-up bg-[#090909]">
        <div className={cn("mx-auto transition-all duration-200", TEXT_WIDTH_CLASSES[textWidth])}>
          {/* Header Metadata Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  "font-mono text-xs font-semibold uppercase tracking-[0.14em]",
                  isMidSemTopic ? "text-amber-400 flex items-center gap-1.5" : "text-[#0099ff]",
                )}
              >
                {isMidSemTopic && <Sparkles className="size-3.5" />}
                {topic.unit}
              </span>
              {topic.tags.includes("HRL") && (
                <span className="rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 px-2.5 py-0.5 font-mono text-[11px] font-bold flex items-center gap-1">
                  <span>★</span> Faculty HRL
                </span>
              )}
              {topic.marks && (
                <span className="rounded-full bg-[#1c1c1c] border border-[#262626] text-[#999999] px-2 py-0.2 font-mono text-[10px] font-bold">
                  {topic.marks} Marks Scope
                </span>
              )}
            </div>

            <span className="inline-flex items-center gap-2 text-xs text-[#999999] font-mono bg-[#141414] px-3 py-1 rounded-full border border-[#262626]">
              <Clock className="size-3 text-[#0099ff]" />
              <span>~{readTimeMin} min read</span>
              <span>•</span>
              <span>{totalWords.toLocaleString()} words</span>
            </span>
          </div>

          {/* Title and Summary */}
          <div className="mt-4 space-y-3">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white leading-tight">
              {topic.title}
            </h1>
            {topic.lecture && (
              <p className="font-mono text-xs font-semibold text-[#666666] tracking-wider uppercase">
                {topic.lecture}
              </p>
            )}
            <p className="text-base sm:text-lg leading-relaxed text-[#b3b3b3] pt-1">
              {topic.summary}
            </p>
          </div>

          {/* Main Reading Surface */}
          <div className="mt-8">
            <ReaderView
              docId={`topic:${topic.slug}`}
              docTitle={topic.title}
              blocks={topic.blocks}
              studied={studied}
              onToggleStudied={() => toggleStudied(slug)}
            />
          </div>

          {/* Bottom Pagination Links (Framer Charcoal Cards) */}
          <nav className="no-print mt-14 grid gap-4 sm:grid-cols-2 border-t border-[#262626] pt-8">
            {prev ? (
              <Link
                to="/topic/$slug"
                params={{ slug: prev.slug }}
                className="flex items-center gap-3 rounded-[18px] border border-[#262626] bg-[#141414] p-4 text-left transition-all duration-200 hover:border-[#383838] hover:bg-[#181818] ios-press-subtle group"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#1c1c1c] text-[#999999] group-hover:text-white transition-colors">
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                    Previous Module
                  </span>
                  <span className="font-display text-sm font-bold text-white truncate block">
                    {prev.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                to="/topic/$slug"
                params={{ slug: next.slug }}
                className="flex items-center justify-between gap-3 rounded-[18px] border border-[#262626] bg-[#141414] p-4 text-right transition-all duration-200 hover:border-[#383838] hover:bg-[#181818] ios-press-subtle group sm:ml-auto w-full"
              >
                <div className="min-w-0 flex-1">
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                    Next Module
                  </span>
                  <span className="font-display text-sm font-bold text-white truncate block">
                    {next.title}
                  </span>
                </div>
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#1c1c1c] text-[#999999] group-hover:text-white transition-colors">
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
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
          className="no-print fixed bottom-6 right-6 z-40 flex size-10 items-center justify-center rounded-full border border-[#262626] bg-[#141414]/90 text-white shadow-xl backdrop-blur-md hover:bg-white hover:text-black transition-all ios-scale-in ios-press"
          aria-label="Back to top"
        >
          <ArrowUp className="size-4" />
        </button>
      ) : null}
    </>
  );
}
