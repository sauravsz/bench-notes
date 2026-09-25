import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { adjacentTopics, getTopic } from "@/data";
import { useProgress } from "@/lib/progress";
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
  const textWidth = useAppearance((s) => s.textWidth);
  const [progress, setProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

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
  }, [slug]);

  useEffect(() => {
    setLastSlug(slug);
  }, [slug, setLastSlug]);

  return (
    <>
      {/* Reading scroll progress bar */}
      <div
        className="no-print pointer-events-none fixed top-0 left-0 right-0 z-50 h-[3px] bg-line/30"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      >
        <div
          className="h-full bg-accent transition-[width] duration-75 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <article className="px-4 py-8 sm:px-10 sm:py-10">
        <div className={cn("mx-auto transition-all duration-200", TEXT_WIDTH_CLASSES[textWidth])}>
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {topic.unit}
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {topic.title}
          </h1>
          {topic.lecture ? (
            <span className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-muted">
              {topic.lecture}
            </span>
          ) : null}
        </div>
        <p className="mt-4 font-serif text-lg leading-relaxed text-ink-soft">
          {topic.summary}
        </p>

        <div className="mt-5">
          <ReaderView
            docId={`topic:${topic.slug}`}
            docTitle={topic.title}
            blocks={topic.blocks}
            studied={studied}
            onToggleStudied={() => toggleStudied(slug)}
          />
        </div>

        <nav className="no-print mt-10 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:justify-between">
          {prev ? (
            <Link
              to="/topic/$slug"
              params={{ slug: prev.slug }}
              className="flex min-h-11 max-w-xs items-center gap-2 rounded-md px-1 text-sm text-ink-soft hover:text-ink"
            >
              <ArrowLeft className="size-4 shrink-0" />
              <span>
                <span className="block text-[11px] uppercase tracking-[0.12em] text-faint">
                  Previous
                </span>
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/topic/$slug"
              params={{ slug: next.slug }}
              className="flex min-h-11 max-w-xs items-center justify-end gap-2 rounded-md px-1 text-right text-sm text-ink-soft hover:text-ink sm:ml-auto"
            >
              <span>
                <span className="block text-[11px] uppercase tracking-[0.12em] text-faint">
                  Next
                </span>
                {next.title}
              </span>
              <ArrowRight className="size-4 shrink-0" />
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
        className="no-print fixed bottom-6 right-6 z-40 flex size-10 items-center justify-center rounded-full border border-line bg-surface/90 text-ink-soft shadow-md backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-bg-warm hover:text-ink hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-label="Back to top"
      >
        <ArrowUp className="size-4" />
      </button>
    ) : null}
  </>
  );
}
