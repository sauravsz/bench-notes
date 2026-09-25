import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  Gavel,
  Highlighter,
  Languages,
  Menu,
  PanelLeft,
  PanelLeftClose,
  Scale,
  Search,
  ShieldCheck,
  Type,
  User,
  X,
  Zap,
  ZapOff,
} from "lucide-react";
import { useProgress } from "@/lib/progress";
import { useHighlights } from "@/lib/highlights";
import { useAppearance, THEME_TONE_STYLES } from "@/lib/appearance";
import { useCurrentCourse } from "@/lib/current-course";
import { useAccessControl } from "@/lib/auth/access-control";
import { useReaderShortcuts } from "@/lib/use-reader-shortcuts";
import { GoogleLoginDialog } from "./auth/google-login-dialog";
import { HighlightsDrawer } from "./highlights-drawer";
import { AppearancePopover } from "./appearance-popover";
import { CourseSwitcher } from "./course-switcher";
import { Switch } from "./ui/switch";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { toast } from "sonner";

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const activeCourse = useCurrentCourse((s) => s.getActiveCourse());
  const currentUser = useAccessControl((s) => s.currentUser);
  const isAdmin = useAccessControl((s) => s.isAdmin(s.currentUser?.email));
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
          Desk · {activeCourse.code}
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
          <span>Syllabus ({activeCourse.code})</span>
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
            <span>Model Answers</span>
          </span>
          <span className="rounded-full bg-accent/15 px-2 py-0.5 font-sans text-[11px] font-bold text-accent">
            {activeCourse.examQuestions.length} Qs
          </span>
        </Link>

        {activeCourse.glossary && activeCourse.glossary.length > 0 ? (
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
              {activeCourse.glossary.length}
            </span>
          </Link>
        ) : null}

        {activeCourse.maxims && activeCourse.maxims.length > 0 ? (
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
              {activeCourse.maxims.length}
            </span>
          </Link>
        ) : null}

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

        {isAdmin && (
          <Link
            to="/admin"
            onClick={onNavigate}
            className={cn(
              "flex min-h-11 items-center justify-between rounded-md px-3 text-sm font-medium transition-colors",
              pathname === "/admin"
                ? "bg-primary/15 font-bold text-primary shadow-2xs"
                : "text-primary hover:bg-primary/10",
            )}
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 shrink-0 text-primary" strokeWidth={1.75} />
              <span>Admin Verification</span>
            </span>
            <span className="rounded bg-primary text-white px-1.5 py-0.2 font-sans text-[10px] font-bold">
              Admin
            </span>
          </Link>
        )}

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
            <span>Highlights</span>
          </span>
          {highlightsCount > 0 ? (
            <span className="rounded-full bg-accent/15 px-2 py-0.5 font-sans text-[11px] font-bold text-accent">
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

      {activeCourse.units.map((unit) => {
        const list = activeCourse.topics.filter((t) => t.unit === unit);
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
                        "flex min-h-11 items-start gap-2 rounded-md px-3 py-2 text-sm leading-snug transition-colors",
                        active
                          ? "bg-bg-warm font-semibold text-ink shadow-2xs"
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
  useReaderShortcuts();

  const [open, setOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const activeCourse = useCurrentCourse((s) => s.getActiveCourse());
  const currentUser = useAccessControl((s) => s.currentUser);
  const isAdmin = useAccessControl((s) => s.isAdmin(s.currentUser?.email));
  const signOut = useAccessControl((s) => s.signOut);
  const studied = useProgress((s) => s.studied);
  const highlights = useHighlights((s) => s.highlights);
  const autoHighlight = useHighlights((s) => s.autoHighlight);
  const toggleAutoHighlight = useHighlights((s) => s.toggleAutoHighlight);
  const notebookOpen = useHighlights((s) => s.notebookOpen);
  const setNotebookOpen = useHighlights((s) => s.setNotebookOpen);
  const highlightsCount = Object.keys(highlights).length;
  const done = activeCourse.topics.filter((t) => studied[t.slug]).length;

  const sidebarCollapsed = useAppearance((s) => s.sidebarCollapsed);
  const toggleSidebar = useAppearance((s) => s.toggleSidebar);
  const appearanceMenuOpen = useAppearance((s) => s.appearanceMenuOpen);
  const setAppearanceMenuOpen = useAppearance((s) => s.setAppearanceMenuOpen);
  const themeTone = useAppearance((s) => s.themeTone);

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
    <div
      className="min-h-dvh bg-bg text-ink transition-colors duration-200"
      style={{
        backgroundColor: THEME_TONE_STYLES[themeTone]?.bg,
        color: THEME_TONE_STYLES[themeTone]?.text,
      }}
    >
      <header className="no-print sticky top-0 z-30 border-b border-line bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-3 px-4 sm:h-16 sm:px-6">
          {/* Mobile drawer toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close syllabus" : "Open syllabus"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>

          {/* Desktop Sidebar Collapse Toggle (Cmd+B) */}
          <button
            type="button"
            onClick={toggleSidebar}
            className="hidden lg:inline-flex size-9 items-center justify-center rounded-lg border border-line bg-surface text-ink-soft hover:bg-bg-warm hover:text-ink transition-colors"
            title={sidebarCollapsed ? "Expand Sidebar (Cmd+B / [ )" : "Collapse Sidebar (Cmd+B / ] )"}
            aria-label="Toggle Sidebar"
          >
            {sidebarCollapsed ? (
              <PanelLeft className="size-4.5 text-accent" strokeWidth={1.75} />
            ) : (
              <PanelLeftClose className="size-4.5" strokeWidth={1.75} />
            )}
          </button>

          {/* Course Switcher Dropdown in Header */}
          <div className="flex items-center gap-2">
            <CourseSwitcher />
          </div>

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

            {/* Readwise Appearance Typography (Aa) Button */}
            <button
              type="button"
              data-appearance-trigger
              onClick={() => setAppearanceMenuOpen(!appearanceMenuOpen)}
              className="relative inline-flex size-9 sm:size-10 items-center justify-center rounded-lg border border-line bg-surface text-ink-soft hover:bg-bg-warm hover:text-ink transition-colors shadow-2xs"
              aria-label="Reading appearance settings"
              title="Reading Appearance & Width (Aa)"
            >
              <span className="font-serif text-sm font-bold tracking-tighter">Aa</span>
            </button>

            <p className="hidden font-sans text-xs tabular-nums text-muted lg:block">
              {done}/{activeCourse.topics.length} studied
            </p>

            {/* Notebook Button */}
            <button
              type="button"
              onClick={() => setNotebookOpen(true)}
              className="relative inline-flex size-9 sm:size-10 items-center justify-center rounded-lg border border-line bg-surface text-ink-soft hover:bg-bg-warm hover:text-ink transition-colors shadow-2xs"
              aria-label="Open highlights notebook"
              title="Reader Highlights & Notes"
            >
              <Highlighter className="size-4 sm:size-4.5" strokeWidth={1.75} />
              {highlightsCount > 0 ? (
                <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-accent ring-2 ring-surface" />
              ) : null}
            </button>

            {/* Search Link */}
            <Link
              to="/search"
              className="inline-flex size-9 sm:size-10 items-center justify-center rounded-lg border border-line bg-surface text-ink-soft hover:bg-bg-warm hover:text-ink shadow-2xs"
              aria-label="Search notes"
              title="Search notes (Find)"
            >
              <Search className="size-4 sm:size-4.5" strokeWidth={1.75} />
            </Link>

            {/* User Profile / Admin Link / Sign In Button */}
            {currentUser ? (
              <div className="flex items-center gap-1.5">
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="hidden sm:inline-flex items-center gap-1 rounded-lg bg-primary px-2.5 py-1 font-sans text-xs font-bold text-white shadow-2xs hover:bg-primary/90 transition-colors"
                    title="Open Administrator Verification Panel"
                  >
                    <ShieldCheck className="size-3.5" />
                    <span>Admin</span>
                  </Link>
                )}
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm(`Sign out of account (${currentUser.email})?`)) {
                      signOut();
                      toast.info("Signed out");
                    }
                  }}
                  className="inline-flex size-9 sm:size-10 items-center justify-center rounded-lg border border-line bg-surface font-sans text-xs font-bold text-ink hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/30 transition-colors shadow-2xs"
                  title={`Signed in as ${currentUser.email}. Click to sign out.`}
                >
                  {currentUser.email.charAt(0).toUpperCase()}
                </button>
              </div>
            ) : (
              <Button
                type="button"
                size="sm"
                onClick={() => setLoginModalOpen(true)}
                className="h-9 px-3 text-xs font-bold gap-1.5 shadow-2xs"
              >
                <User className="size-3.5" />
                <span>Sign In</span>
              </Button>
            )}
          </div>
        </div>
        <div className="h-0.5 bg-line">
          <div
            className="h-full bg-accent transition-[width] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{
              width: `${(done / (activeCourse.topics.length || 1)) * 100}%`,
            }}
          />
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {open ? (
        <div className="no-print fixed inset-0 z-20 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink/30"
            aria-label="Close syllabus"
            onClick={() => setOpen(false)}
          />
          <nav className="absolute inset-y-0 left-0 w-[min(20rem,88vw)] overflow-y-auto border-r border-line bg-surface px-2 pt-16 shadow-xl">
            <NavList onNavigate={() => setOpen(false)} />
          </nav>
        </div>
      ) : null}

      {/* Main Content Layout */}
      <div className="mx-auto flex max-w-[1500px]">
        {/* Desktop Sidebar (Collapsible with Cmd+B) */}
        <aside
          className={cn(
            "no-print sticky top-16 h-[calc(100dvh-4rem)] w-[280px] shrink-0 overflow-y-auto border-r border-line px-2 pt-6 transition-all duration-200",
            sidebarCollapsed ? "hidden" : "hidden lg:block",
          )}
        >
          <NavList />
        </aside>

        {/* Content Area */}
        <div className="min-w-0 flex-1 transition-all duration-200">{children}</div>
      </div>

      {/* Highlights Slide-over Drawer */}
      {notebookOpen ? (
        <HighlightsDrawer onClose={() => setNotebookOpen(false)} />
      ) : null}

      {/* Readwise Appearance Popover */}
      {appearanceMenuOpen ? (
        <AppearancePopover onClose={() => setAppearanceMenuOpen(false)} />
      ) : null}

      {/* Google Login Dialog */}
      <GoogleLoginDialog
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </div>
  );
}
