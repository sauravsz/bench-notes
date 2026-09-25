import { createFileRoute } from "@tanstack/react-router";
import { maxims } from "@/data";

export const Route = createFileRoute("/maxims")({ component: MaximsPage });

function MaximsPage() {
  return (
    <main className="px-4 py-8 sm:px-10 sm:py-10">
      <div className="mx-auto max-w-2xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Reference
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Latin maxims
        </h1>
        <p className="mt-4 font-serif text-lg leading-relaxed text-ink-soft">
          Meanings are those given in the lecture. Learn the Latin line, then
          the English, then the topic it belongs to.
        </p>
        <ol className="mt-8 flex flex-col gap-3">
          {maxims.map((maxim, i) => (
            <li
              key={maxim.id}
              id={maxim.id}
              className="scroll-mt-24 rounded-xl border border-line bg-surface px-4 py-4"
            >
              <p className="font-sans text-xs tabular-nums text-faint">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-1 font-serif text-xl italic leading-snug text-ink">
                {maxim.latin}
              </h2>
              <p className="mt-2 font-serif text-[1.05rem] leading-relaxed text-ink-soft">
                {maxim.meaning}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
