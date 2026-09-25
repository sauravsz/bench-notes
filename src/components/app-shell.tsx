import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  Gavel,
  Highlighter,
  Languages,
  Menu,
  Scale,
  Search,
  X,
} from "lucide-react";
import { topics, units } from "@/data";
import { useProgress } from "@/lib/progress";
import { useHighlights } from "@/lib/highlights";
import { HighlightsDrawer } from "./highlights-drawer";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const studied = useProgress((s) => s.studied);
  const highlights = useHighlights((s) => s.highlights);
  const setNotebookOpen = useHighlights((s) => s.setNotebookOpen);
  const highlightsCount = Object.keys(highlights).length;
  return (
    <div className="flex flex-col gap-6 pb-8">
      <div>
        <p className="mb-2 px-3 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-faint">
          Desk
        </p>
        <Link
          to="/"
          onClick={onNavigate}
          className={cn(
            "flex min-h-11 items-center rounded-md px-3 text-sm font-medium",
            pathname === "/"
              ? "bg-bg-warm text-ink"
              : "text-ink-soft hover:bg-bg-warm hover:text-ink",
          )}
        >
          Syllabus
        </Link>
        <Link
          to="/exam"
          onClick={onNavigate}
          className={cn(
            "flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-medium",
            pathname.startsWith("/exam")
              ? "bg-bg-warm text-ink"
              : "text-ink-soft hover:bg-bg-warm hover:text-ink",
          )}
        >
          <Scale className="size-4 shrink-0" strokeWidth={1.75} />
          14-mark answers
        </Link>
        <Link
          to="/glossary"
          onClick={onNavigate}
          className={cn(
            "flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-medium",
            pathname === "/glossary"
              ? "bg-bg-warm text-ink"
              : "text-ink-soft hover:bg-bg-warm hover:text-ink",
          )}
        >
          <BookOpen className="size-4 shrink-0" strokeWidth={1.75} />
          Glossary
        </Link>
        <Link
          to="/maxims"
          onClick={onNavigate}
          className={cn(
            "flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-medium",
            pathname === "/maxims"
              ? "bg-bg-warm text-ink"
              : "text-ink-soft hover:bg-bg-warm hover:text-ink",
          )}
        >
          <Languages className="size-4 shrink-0" strokeWidth={1.75} />
          Maxims
        </Link>
        <Link
          to="/search"
          onClick={onNavigate}
          className={cn(
            "flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-medium",
            pathname === "/search"
              ? "bg-bg-warm text-ink"
              : "text-ink-soft hover:bg-bg-warm hover:text-ink",
          )}
        >
          <Search className="size-4 shrink-0" strokeWidth={1.75} />
          Search
        </Link>
        <button
          type="button"
          onClick={() => {
            onNavigate?.();
            setNotebookOpen(true);
          }}
          className="flex w-full min-h-11 items-center justify-between rounded-md px-3 text-sm font-medium text-ink-soft hover:bg-bg-warm hover:text-ink transition-colors text-left"
        >
          <span className="flex items-center gap-2">
            <Highlighter className="size-4 shrink-0 text-accent" strokeWidth={1.75} />
            Highlights
          </span>
          {highlightsCount > 0 ? (
            <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[11px] font-semibold text-accent">
              {highlightsCount}
            </span>
          ) : null}
        </button>
      </div>

      {units.map((unit) => {
        const list = topics.filter((t) => t.unit === unit);
        return (
          <div key={unit}>
            <p className="mb-1 px-3 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-faint">
              {unit}
            </p>
            <ul className="flex flex-col">
              {list.map((topic) => {
                const href = `/topic/${topic.slug}`;
                const active = pathname === href;
                return (
                  <li key={topic.id}>
                    <Link
                      to="/topic/$slug"
                      params={{ slug: topic.slug }}
                      onClick={onNavigate}
                      className={cn(
                        "flex min-h-11 items-start gap-2 rounded-md px-3 py-2 text-sm leading-snug",
                        active
                          ? "bg-bg-warm text-ink"
                          : "text-ink-soft hover:bg-bg-warm hover:text-ink",
                      )}
                    >
                      <span className="mt-0.5 w-5 shrink-0 font-sans text-xs tabular-nums text-faint">
                        {String(topic.number).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{topic.title}</span>
                      {studied[topic.slug] ? (
                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-studied" />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const studied = useProgress((s) => s.studied);
  const highlights = useHighlights((s) => s.highlights);
  const notebookOpen = useHighlights((s) => s.notebookOpen);
  const setNotebookOpen = useHighlights((s) => s.setNotebookOpen);
  const highlightsCount = Object.keys(highlights).length;
  const done = topics.filter((t) => studied[t.slug]).length;

  return (
    <div className="min-h-dvh bg-bg text-ink">
      <header className="sticky top-0 z-30 border-b border-line bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-3 px-4 sm:h-16 sm:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close syllabus" : "Open syllabus"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
          <Link to="/" className="flex min-w-0 items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-md bg-accent text-accent-fg">
              <Gavel className="size-4" strokeWidth={1.75} />
            </span>
            <span className="min-w-0">
              <span className="block font-serif text-lg font-semibold leading-none tracking-tight">
                Bench Notes
              </span>
              <span className="mt-0.5 hidden font-sans text-[11px] uppercase tracking-[0.14em] text-muted sm:block">
                Business Law 303 · LR Ma'am
              </span>
            </span>
          </Link>
          <div className="ml-auto flex items-center gap-3">
            <p className="hidden font-sans text-xs tabular-nums text-muted sm:block">
              {done}/{topics.length} studied
            </p>
            <button
              type="button"
              onClick={() => setNotebookOpen(true)}
              className="relative inline-flex size-11 items-center justify-center rounded-md text-ink-soft hover:bg-bg-warm hover:text-ink transition-colors"
              aria-label="Open highlights notebook"
              title="Reader Highlights & Notes"
            >
              <Highlighter className="size-5" strokeWidth={1.75} />
              {highlightsCount > 0 ? (
                <span className="absolute right-2 top-2 size-2 rounded-full bg-accent ring-2 ring-surface" />
              ) : null}
            </button>
            <Link
              to="/search"
              className="inline-flex size-11 items-center justify-center rounded-md text-ink-soft hover:bg-bg-warm hover:text-ink"
              aria-label="Search notes"
            >
              <Search className="size-5" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
        <div className="h-0.5 bg-line">
          <div
            className="h-full bg-accent transition-[width] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ width: `${(done / topics.length) * 100}%` }}
          />
        </div>
      </header>

      {open ? (
        <div className="no-print fixed inset-0 z-20 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink/30"
            aria-label="Close syllabus"
            onClick={() => setOpen(false)}
          />
          <nav className="absolute inset-y-0 left-0 w-[min(20rem,88vw)] overflow-y-auto border-r border-line bg-surface px-2 pt-16">
            <NavList onNavigate={() => setOpen(false)} />
          </nav>
        </div>
      ) : null}

      <div className="mx-auto flex max-w-[1400px]">
        <aside className="no-print sticky top-16 hidden h-[calc(100dvh-4rem)] w-[280px] shrink-0 overflow-y-auto border-r border-line px-2 pt-6 lg:block">
          <NavList />
        </aside>
        <div className="min-w-0 flex-1">{children}</div>
      </div>

      {notebookOpen ? (
        <HighlightsDrawer onClose={() => setNotebookOpen(false)} />
      ) : null}
    </div>
  );
}
