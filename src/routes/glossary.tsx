import { createFileRoute, Link } from "@tanstack/react-router";
import { glossary } from "@/data";

export const Route = createFileRoute("/glossary")({ component: GlossaryPage });

function GlossaryPage() {
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <main className="px-4 py-8 sm:px-10 sm:py-10">
      <div className="mx-auto max-w-2xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Reference
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Glossary
        </h1>
        <p className="mt-4 font-serif text-lg leading-relaxed text-ink-soft">
          Definitions as given in the lecture, including the statutory sections
          where the Act supplies them.
        </p>
        <ul className="mt-8 flex flex-col gap-3">
          {sorted.map((entry) => (
            <li
              key={entry.id}
              id={entry.id}
              className="scroll-mt-24 rounded-xl border border-line bg-surface px-4 py-4"
            >
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <h2 className="font-serif text-lg font-semibold text-ink">
                  {entry.term}
                </h2>
                {entry.section ? (
                  <span className="font-sans text-xs uppercase tracking-[0.12em] text-faint">
                    {entry.section}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 font-serif text-[1.05rem] leading-relaxed text-ink-soft">
                {entry.body}
              </p>
              <Link
                to="/topic/$slug"
                params={{ slug: entry.topicSlug }}
                className="mt-2 inline-flex min-h-11 items-center font-sans text-sm text-accent hover:underline"
              >
                Open related note
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
