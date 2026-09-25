import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { adjacentTopics, getTopic } from "@/data";
import { useProgress } from "@/lib/progress";
import { ReaderView } from "@/components/reader-view";

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

  useEffect(() => {
    setLastSlug(slug);
  }, [slug, setLastSlug]);

  return (
    <article className="px-4 py-8 sm:px-10 sm:py-10">
      <div className="mx-auto max-w-2xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {topic.unit}
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {topic.title}
          </h1>
          <span className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-muted">
            {topic.marks} marks
            {topic.lecture ? ` · ${topic.lecture}` : ""}
          </span>
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
  );
}
