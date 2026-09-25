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
  Zap,
  ZapOff,
} from "lucide-react";
import { topics, units } from "@/data";
import { useProgress } from "@/lib/progress";
import { useHighlights } from "@/lib/highlights";
import { HighlightsDrawer } from "./highlights-drawer";
import { Switch } from "./ui/switch";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { toast } from "sonner";

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const studied = useProgress((s) => s.studied);
  const highlights = useHighlights((s) => s.highlights);
  const autoHighlight = useHighlights((s) => s.autoHighlight);
  const toggleAutoHighlight = useHighlights((s) => s.toggleAutoHighlight);
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
            "flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-medium transition-colors",
            pathname === "/"
              ? "bg-bg-warm font-semibold text-ink shadow-2xs"
              : "text-ink-soft hover:bg-bg-warm hover:text-ink",
          )}
        >
          <BookOpen className="size-4 shrink-0 text-accent" strokeWidth={1.75} />
          <span>Syllabus</span>
        </Link>
        <Link
          to="/exam"
          onClick={onNavigate}
          className={cn(
            "flex min-h-11 items-center justify-between rounded-md px-3 text-sm font-medium transition-colors",
            pathname.startsWith("/exam")
              ? "bg-bg-warm font-semibold text-ink shadow-2xs"
              : "text-ink-soft hover:bg-bg-warm hover:text-ink",
          )}
        >
          <span className="flex items-center gap-2">
            <Scale className="size-4 shrink-0 text-accent" strokeWidth={1.75} />
            <span>Model Exam Answers</span>
          </span>
          <span className="rounded-full bg-accent/15 px-2 py-0.5 font-sans text-[11px] font-bold text-accent">
            19 Qs
          </span>
        </Link>
        <Link
          to="/glossary"
          onClick={onNavigate}
          className={cn(
            "flex min-h-11 items-center justify-between rounded-md px-3 text-sm font-medium transition-colors",
            pathname.startsWith("/glossary")
              ? "bg-bg-warm font-semibold text-ink shadow-2xs"
              : "text-ink-soft hover:bg-bg-warm hover:text-ink",
          )}
        >
          <span className="flex items-center gap-2">
            <BookOpen className="size-4 shrink-0 text-muted" strokeWidth={1.75} />
            <span>Glossary</span>
          </span>
          <span className="rounded-full bg-bg-warm px-1.5 py-0.5 font-sans text-[10px] font-semibold text-muted">
            125
          </span>
        </Link>
        <Link
          to="/maxims"
          onClick={onNavigate}
          className={cn(
            "flex min-h-11 items-center justify-between rounded-md px-3 text-sm font-medium transition-colors",
            pathname.startsWith("/maxims")
              ? "bg-bg-warm font-semibold text-ink shadow-2xs"
              : "text-ink-soft hover:bg-bg-warm hover:text-ink",
          )}
        >
          <span className="flex items-center gap-2">
            <Languages className="size-4 shrink-0 text-muted" strokeWidth={1.75} />
            <span>Maxims</span>
          </span>
          <span className="rounded-full bg-bg-warm px-1.5 py-0.5 font-sans text-[10px] font-semibold text-muted">
            25
          </span>
        </Link>
        <Link
          to="/search"
          onClick={onNavigate}
          className={cn(
            "flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-medium transition-colors",
            pathname === "/search"
              ? "bg-bg-warm font-semibold text-ink shadow-2xs"
              : "text-ink-soft hover:bg-bg-warm hover:text-ink",
          )}
        >
          <Search className="size-4 shrink-0 text-muted" strokeWidth={1.75} />
          <span>Search</span>
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

        {/* Global Auto-Highlight setting switch in sidebar */}
        <div className="mt-3 flex items-center justify-between rounded-lg border border-line bg-surface px-3 py-2.5 shadow-2xs">
          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 font-sans text-xs font-semibold text-ink">
              <Zap className={cn("size-3.5", autoHighlight ? "fill-amber-500 text-amber-600" : "text-muted")} />
              Auto-Highlight
            </span>
            <span className="text-[10px] text-muted">Instant selection (⇧H)</span>
          </div>
          <Switch
            checked={autoHighlight}
            onCheckedChange={(checked) => {
              toggleAutoHighlight();
              if (checked) {
                toast.success("Auto-highlighting enabled", {
                  description: "Selecting text will automatically highlight it.",
                });
              } else {
                toast.info("Auto-highlighting disabled", {
                  description: "Select text to open the highlight toolbar.",
                });
              }
            }}
          />
        </div>
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
  const autoHighlight = useHighlights((s) => s.autoHighlight);
  const toggleAutoHighlight = useHighlights((s) => s.toggleAutoHighlight);
  const notebookOpen = useHighlights((s) => s.notebookOpen);
  const setNotebookOpen = useHighlights((s) => s.setNotebookOpen);
  const highlightsCount = Object.keys(highlights).length;
  const done = topics.filter((t) => studied[t.slug]).length;

  const handleHeaderToggleAuto = () => {
    const next = toggleAutoHighlight();
    if (next) {
      toast.success("Auto-highlighting enabled (Shift+H)", {
        description: "Selecting text will instantly create a highlight.",
      });
    } else {
      toast.info("Auto-highlighting disabled (Shift+H)", {
        description: "Select text to view highlight & note options.",
      });
    }
  };

  return (
    <div className="min-h-dvh bg-bg text-ink">
      <header className="no-print sticky top-0 z-30 border-b border-line bg-surface/80 backdrop-blur-md">
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

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            {/* Quick Auto-Highlight Header Toggle Switch */}
            <button
              type="button"
              onClick={handleHeaderToggleAuto}
              title={`Auto-highlighting is ${autoHighlight ? "ON" : "OFF"}. Press Shift+H to toggle.`}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-all",
                autoHighlight
                  ? "bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950/50 dark:text-amber-200 dark:border-amber-800 shadow-2xs"
                  : "bg-bg-warm text-muted hover:text-ink border border-line",
              )}
            >
              {autoHighlight ? (
                <Zap className="size-3 fill-amber-500 text-amber-600" />
              ) : (
                <ZapOff className="size-3 text-muted" />
              )}
              <span className="hidden md:inline">Auto-Highlight</span>
              <span className="font-semibold">{autoHighlight ? "ON" : "OFF"}</span>
            </button>

            <p className="hidden font-sans text-xs tabular-nums text-muted lg:block">
              {done}/{topics.length} studied
            </p>
            <button
              type="button"
              onClick={() => setNotebookOpen(true)}
              className="relative inline-flex size-10 sm:size-11 items-center justify-center rounded-md text-ink-soft hover:bg-bg-warm hover:text-ink transition-colors"
              aria-label="Open highlights notebook"
              title="Reader Highlights & Notes"
            >
              <Highlighter className="size-4.5 sm:size-5" strokeWidth={1.75} />
              {highlightsCount > 0 ? (
                <span className="absolute right-2 top-2 size-2 rounded-full bg-accent ring-2 ring-surface" />
              ) : null}
            </button>
            <Link
              to="/search"
              className="inline-flex size-10 sm:size-11 items-center justify-center rounded-md text-ink-soft hover:bg-bg-warm hover:text-ink"
              aria-label="Search notes"
            >
              <Search className="size-4.5 sm:size-5" strokeWidth={1.75} />
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
