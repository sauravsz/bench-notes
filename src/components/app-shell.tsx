import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  Download,
  FileText,
  Highlighter,
  Languages,
  Lock,
  LogOut,
  Menu,
  PanelLeft,
  PanelLeftClose,
  Scale,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  TableProperties,
  Unlock,
  User,
  X,
} from "lucide-react";
import { useProgress } from "@/lib/progress";
import { useHighlights } from "@/lib/highlights";
import { useAppearance } from "@/lib/appearance";
import { useCurrentCourse } from "@/lib/current-course";
import { useAccessControl } from "@/lib/auth/access-control";
import { useReaderShortcuts } from "@/lib/use-reader-shortcuts";
import { GoogleLoginDialog } from "./auth/google-login-dialog";
import { HighlightsDrawer } from "./highlights-drawer";
import { AppearancePopover } from "./appearance-popover";
import { CourseSwitcher } from "./course-switcher";
import { Switch } from "./ui/switch";
import { CommandPalette } from "./command-palette";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { toast } from "sonner";

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const activeCourse = useCurrentCourse((s) => s.getActiveCourse());
  const setActiveCourseSlug = useCurrentCourse((s) => s.setActiveCourseSlug);
  const currentUser = useAccessControl((s) => s.currentUser);
  const isAdmin = useAccessControl((s) => s.isAdmin(s.currentUser?.email));
  const studied = useProgress((s) => s.studied);
  const highlights = useHighlights((s) => s.highlights);
  const autoHighlight = useHighlights((s) => s.autoHighlight);
  const setNotebookOpen = useHighlights((s) => s.setNotebookOpen);
  const highlightsCount = Object.keys(highlights).length;
  const [collapsedUnits, setCollapsedUnits] = useState<Record<string, boolean>>({});

  const toggleUnit = (unit: string) => {
    setCollapsedUnits((prev) => ({
      ...prev,
      [unit]: !prev[unit],
    }));
  };
  return (
    <div className="flex flex-col gap-6 pb-8">
      {/* Primary Navigation Band */}
      <div className="space-y-1">
        <p className="mb-2 px-3 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#999999]">
          Paper {activeCourse.code} · Desk
        </p>
        <Link
          to="/"
          onClick={onNavigate}
          className={cn(
            "flex min-h-10 items-center gap-2.5 rounded-full px-3.5 text-sm font-medium transition-all duration-200 ios-press-subtle",
            pathname === "/"
              ? "bg-[#1c1c1c] font-semibold text-white border border-[#262626]"
              : "text-[#999999] hover:bg-[#141414] hover:text-white",
          )}
        >
          <BookOpen className="size-4 shrink-0 text-[#0099ff]" strokeWidth={1.75} />
          <span>Syllabus Overview</span>
        </Link>
        <Link
          to="/exam"
          onClick={onNavigate}
          className={cn(
            "flex min-h-10 items-center justify-between rounded-full px-3.5 text-sm font-medium transition-all duration-200 ios-press-subtle",
            pathname.startsWith("/exam")
              ? "bg-[#1c1c1c] font-semibold text-white border border-[#262626]"
              : "text-[#999999] hover:bg-[#141414] hover:text-white",
          )}
        >
          <span className="flex items-center gap-2.5">
            <Scale className="size-4 shrink-0 text-[#0099ff]" strokeWidth={1.75} />
            <span>Model Answers</span>
          </span>
          <span className="rounded-full bg-[#141414] border border-[#262626] px-2 py-0.5 font-sans text-[10px] font-bold text-[#999999]">
            {activeCourse.examQuestions.length} Qs
          </span>
        </Link>
        <Link
          to="/comparisons"
          onClick={onNavigate}
          className={cn(
            "flex min-h-10 items-center justify-between rounded-full px-3.5 text-sm font-medium transition-all duration-200 ios-press-subtle",
            pathname === "/comparisons"
              ? "bg-[#1c1c1c] font-semibold text-white border border-[#262626]"
              : "text-[#999999] hover:bg-[#141414] hover:text-white",
          )}
        >
          <span className="flex items-center gap-2.5">
            <TableProperties className="size-4 shrink-0 text-[#0099ff]" strokeWidth={1.75} />
            <span>Comparison Studio</span>
          </span>
          <span className="rounded-full bg-[#1c1c1c] border border-[#262626] px-2 py-0.5 font-sans text-[10px] font-bold text-[#0099ff]">
            Matrix
          </span>
        </Link>


        {activeCourse.glossary && activeCourse.glossary.length > 0 ? (
          <Link
            to="/glossary"
            onClick={onNavigate}
            className={cn(
              "flex min-h-10 items-center justify-between rounded-full px-3.5 text-sm font-medium transition-all duration-200 ios-press-subtle",
              pathname.startsWith("/glossary")
                ? "bg-[#1c1c1c] font-semibold text-white border border-[#262626]"
                : "text-[#999999] hover:bg-[#141414] hover:text-white",
            )}
          >
            <span className="flex items-center gap-2.5">
              <BookOpen className="size-4 shrink-0 text-[#999999]" strokeWidth={1.75} />
              <span>Glossary</span>
            </span>
            <span className="rounded-full bg-[#141414] border border-[#262626] px-1.5 py-0.5 font-sans text-[10px] font-semibold text-[#999999]">
              {activeCourse.glossary.length}
            </span>
          </Link>
        ) : null}

        {activeCourse.maxims && activeCourse.maxims.length > 0 ? (
          <Link
            to="/maxims"
            onClick={onNavigate}
            className={cn(
              "flex min-h-10 items-center justify-between rounded-full px-3.5 text-sm font-medium transition-all duration-200 ios-press-subtle",
              pathname.startsWith("/maxims")
                ? "bg-[#1c1c1c] font-semibold text-white border border-[#262626]"
                : "text-[#999999] hover:bg-[#141414] hover:text-white",
            )}
          >
            <span className="flex items-center gap-2.5">
              <Languages className="size-4 shrink-0 text-[#999999]" strokeWidth={1.75} />
              <span>Maxims</span>
            </span>
            <span className="rounded-full bg-[#141414] border border-[#262626] px-1.5 py-0.5 font-sans text-[10px] font-semibold text-[#999999]">
              {activeCourse.maxims.length}
            </span>
          </Link>
        ) : null}

        <button
          type="button"
          onClick={() => {
            onNavigate?.();
            window.dispatchEvent(new CustomEvent("open-command-palette"));
          }}
          className="flex w-full min-h-10 items-center justify-between rounded-full px-3.5 text-sm font-medium text-[#999999] hover:bg-[#141414] hover:text-white transition-all duration-200 ios-press-subtle text-left"
        >
          <span className="flex items-center gap-2.5">
            <Search className="size-4 shrink-0 text-[#999999]" strokeWidth={1.75} />
            <span>Search Notes</span>
          </span>
          <kbd className="rounded bg-[#090909] border border-[#262626] px-1.5 py-0.2 font-mono text-[10px] text-[#666666]">
            ⌘K
          </kbd>
        </button>

        {isAdmin && (
          <Link
            to="/export"
            onClick={onNavigate}
            className={cn(
              "flex min-h-10 items-center justify-between rounded-full px-3.5 text-sm font-medium transition-all duration-200 ios-press-subtle",
              pathname.startsWith("/export")
                ? "bg-[#1c1c1c] font-semibold text-white border border-[#262626]"
                : "text-[#999999] hover:bg-[#141414] hover:text-white",
            )}
          >
            <span className="flex items-center gap-2.5">
              <Download className="size-4 shrink-0 text-[#0099ff]" strokeWidth={1.75} />
              <span>Export Notes</span>
            </span>
            <span className="rounded-full bg-[#1c1c1c] border border-[#262626] px-1.5 py-0.5 font-mono text-[10px] font-bold text-[#0099ff]">
              PDF
            </span>
          </Link>
        )}
        {isAdmin && (
          <Link
            to="/admin"
            onClick={onNavigate}
            className={cn(
              "flex min-h-10 items-center justify-between rounded-full px-3.5 text-sm font-medium transition-all duration-200 ios-press-subtle",
              pathname === "/admin"
                ? "bg-[#0099ff]/20 font-bold text-white border border-[#0099ff]/40"
                : "text-[#0099ff] hover:bg-[#141414]",
            )}
          >
            <span className="flex items-center gap-2.5">
              <ShieldCheck className="size-4 shrink-0 text-[#0099ff]" strokeWidth={1.75} />
              <span>Admin Gate</span>
            </span>
            <span className="rounded-full bg-[#0099ff] text-white px-2 py-0.2 font-sans text-[10px] font-bold">
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
          className="flex w-full min-h-10 items-center justify-between rounded-full px-3.5 text-sm font-medium text-[#999999] hover:bg-[#141414] hover:text-white transition-all duration-200 ios-press-subtle text-left"
        >
          <span className="flex items-center gap-2.5">
            <Highlighter className="size-4 shrink-0 text-[#0099ff]" strokeWidth={1.75} />
            <span>Highlights</span>
          </span>
          {highlightsCount > 0 ? (
            <span className="rounded-full bg-[#0099ff]/20 border border-[#0099ff]/40 px-2 py-0.5 font-sans text-[10px] font-bold text-[#0099ff]">
              {highlightsCount}
            </span>
          ) : null}
        </button>
      </div>

      {/* Course Curriculum Units Breakdown with Collapsible Accordion */}
      {activeCourse.units.map((unit, idx) => {
        const list = activeCourse.topics.filter((t) => t.unit === unit);
        if (list.length === 0) return null;
        const isCurrentUnit = list.some((t) => pathname === `/topic/${t.slug}`);
        // Default open if it is the current unit being viewed or the first unit, unless user toggled
        const isCollapsed = collapsedUnits[unit] ?? (!isCurrentUnit && idx > 0);

        return (
          <div key={unit} className="space-y-1">
            <button
              type="button"
              onClick={() => toggleUnit(unit)}
              className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-left hover:bg-[#141414] transition-colors group"
            >
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#999999] group-hover:text-white truncate">
                {unit}
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="font-mono text-[10px] text-[#666666] bg-[#1a1a1a] px-1.5 py-0.5 rounded">
                  {list.length}
                </span>
                <ChevronDown
                  className={cn(
                    "size-3 text-[#666666] group-hover:text-white transition-transform duration-200",
                    isCollapsed ? "-rotate-90" : "rotate-0",
                  )}
                />
              </div>
            </button>

            {!isCollapsed && (
              <ul className="flex flex-col space-y-0.5 pl-1 transition-all">
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
                          "flex min-h-8 items-center gap-2 rounded-lg px-2.5 py-1 text-xs leading-snug transition-all duration-150",
                          active
                            ? "bg-[#1c1c1c] font-semibold text-white border border-[#262626]"
                            : "text-[#a0a0a0] hover:bg-[#141414] hover:text-white",
                        )}
                      >
                        <span className="w-4 shrink-0 font-mono text-[10px] text-[#666666]">
                          {String(topic.number).padStart(2, "0")}
                        </span>
                        <span className="flex-1 truncate">{topic.title}</span>
                        {studied[topic.slug] ? (
                          <span className="size-1.5 shrink-0 rounded-full bg-[#22c55e]" />
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
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
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleCustomOpen = () => setCommandPaletteOpen(true);
    window.addEventListener("open-command-palette", handleCustomOpen);
    return () => window.removeEventListener("open-command-palette", handleCustomOpen);
  }, []);
  const activeCourse = useCurrentCourse((s) => s.getActiveCourse());
  const currentUser = useAccessControl((s) => s.currentUser);
  const isAdmin = useAccessControl((s) => s.isAdmin(s.currentUser?.email));
  const signOut = useAccessControl((s) => s.signOut);
  const setUserEmail = useHighlights((s) => s.setUserEmail);

  useEffect(() => {
    setUserEmail(currentUser?.email);
  }, [currentUser?.email, setUserEmail]);

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
  const rightSidebarCollapsed = useAppearance((s) => s.rightSidebarCollapsed);
  const toggleRightSidebar = useAppearance((s) => s.toggleRightSidebar);
  const appearanceMenuOpen = useAppearance((s) => s.appearanceMenuOpen);
  const setAppearanceMenuOpen = useAppearance((s) => s.setAppearanceMenuOpen);
  const handleHeaderToggleAuto = () => {
    const next = toggleAutoHighlight();
    if (next) {
      toast.success("Auto-highlighting enabled (Shift+H)");
    } else {
      toast.info("Auto-highlighting disabled (Shift+H)");
    }
  };

  return (
    <div className="min-h-dvh bg-[#090909] text-white">
      {/* Floating Restore Button when Topbar & Sidebar are collapsed */}
      {sidebarCollapsed ? (
        <div className="no-print fixed left-4 top-4 z-40 flex items-center gap-2 apple-restore-pill">
          <button
            type="button"
            onClick={toggleSidebar}
            className="flex size-9 items-center justify-center rounded-full border border-[#262626] bg-[#141414]/90 backdrop-blur-md text-white shadow-xl hover:bg-[#1c1c1c] transition-all apple-press"
            title="Restore Navigation Bar & Sidebar (Cmd+B)"
            aria-label="Restore Top Bar & Sidebar"
          >
            <PanelLeft className="size-4 text-[#0099ff]" strokeWidth={1.75} />
          </button>
        </div>
      ) : null}

      {/* Top Navigation Bar on Dark Canvas */}
      <header
        className={cn(
          "no-print sticky top-0 z-30 border-b border-[#262626] bg-[#090909]/90 backdrop-blur-xl transition-all duration-200",
          sidebarCollapsed ? "hidden" : "block",
        )}
      >
        <div className="mx-auto flex h-14 max-w-[1440px] items-center gap-3 px-4 sm:h-16 sm:px-6">
          {/* Mobile drawer toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#999999] hover:text-white"
            aria-label={open ? "Close syllabus" : "Open syllabus"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>

          {/* Desktop Sidebar Collapse Toggle */}
          <button
            type="button"
            onClick={toggleSidebar}
            className="hidden lg:inline-flex size-9 items-center justify-center rounded-full border border-[#262626] bg-[#141414] text-[#999999] hover:text-white hover:bg-[#1c1c1c] transition-colors apple-press"
            title={sidebarCollapsed ? "Expand Sidebar (Cmd+B)" : "Collapse Sidebar (Cmd+B)"}
            aria-label="Toggle Sidebar"
          >
            {sidebarCollapsed ? (
              <PanelLeft className="size-4 text-[#0099ff]" strokeWidth={1.75} />
            ) : (
              <PanelLeftClose className="size-4" strokeWidth={1.75} />
            )}
          </button>

          {/* Course Switcher Dropdown in Header */}
          <div className="flex items-center gap-2">
            <CourseSwitcher />
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            {/* Omnisearch Trigger (Cmd+K) */}
            <button
              type="button"
              onClick={() => setCommandPaletteOpen(true)}
              className="flex items-center gap-2 rounded-full border border-[#262626] bg-[#141414] px-3.5 py-1.5 text-xs text-[#999999] hover:text-white hover:bg-[#1c1c1c] transition-all ios-press"
              title="Global Omnisearch (Cmd+K)"
            >
              <Search className="size-3.5 text-[#0099ff]" />
              <span className="hidden sm:inline">Quick Jump...</span>
              <kbd className="hidden sm:inline rounded bg-[#090909] border border-[#262626] px-1.5 py-0.2 font-mono text-[10px] text-[#666666]">
                ⌘K
              </kbd>
            </button>
            <button
              type="button"
              data-appearance-trigger
              onClick={() => setAppearanceMenuOpen(!appearanceMenuOpen)}
              className="relative inline-flex size-9 sm:size-10 items-center justify-center rounded-full border border-[#262626] bg-[#141414] text-[#999999] hover:text-white hover:bg-[#1c1c1c] transition-all ios-press"
              aria-label="Reading appearance settings"
              title="Reading Appearance & Width (Aa)"
            >
              <span className="font-sans text-xs font-bold">Aa</span>
            </button>


            <p className="hidden font-sans text-xs tabular-nums text-[#999999] lg:block">
              {done}/{activeCourse.topics.length} studied
            </p>

            {/* Notebook Button */}
            <button
              type="button"
              onClick={() => setNotebookOpen(true)}
              className="relative inline-flex size-9 sm:size-10 items-center justify-center rounded-full border border-[#262626] bg-[#141414] text-[#999999] hover:text-white hover:bg-[#1c1c1c] transition-all ios-press"
              aria-label="Open highlights notebook"
              title="Reader Highlights & Notes"
            >
              <Highlighter className="size-4" strokeWidth={1.75} />
              {highlightsCount > 0 && (
                <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-[#0099ff] ring-2 ring-[#090909]" />
              )}
            </button>

            {/* User Profile / Admin Link / Sign In Button */}
            {currentUser ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm(`Sign out of account (${currentUser.email})?`)) {
                      signOut();
                      toast.info("Signed out");
                    }
                  }}
                  className="inline-flex size-9 sm:size-10 items-center justify-center rounded-full border border-[#262626] bg-[#141414] font-sans text-xs font-bold text-white hover:border-rose-500/50 hover:text-rose-400 transition-all ios-press"
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
                className="h-9 px-4 text-xs font-semibold gap-1.5 rounded-full bg-white text-black hover:bg-white/90 transition-all ios-press"
              >
                <User className="size-3.5" />
                <span>Sign In</span>
              </Button>
            )}
          </div>
        </div>

        {/* Progress Line */}
        <div className="h-[2px] bg-[#1a1a1a] overflow-hidden mx-auto max-w-[1440px]">
          <div
            className="h-full bg-[#0099ff] transition-[width] duration-300 ease-out"
            style={{
              width: `${(done / (activeCourse.topics.length || 1)) * 100}%`,
            }}
          />
        </div>
      </header>

      {/* Mobile Sidebar Overlay with Apple Sheet Physics */}
      <div
        className={cn(
          "no-print fixed inset-0 z-40 lg:hidden pointer-events-none transition-all duration-300",
          open && "pointer-events-auto",
        )}
      >
        <button
          type="button"
          className={cn(
            "absolute inset-0 bg-black/80 backdrop-blur-xl apple-sheet-backdrop",
            open && "apple-sheet-backdrop-open",
          )}
          aria-label="Close syllabus"
          onClick={() => setOpen(false)}
        />
        <nav
          className={cn(
            "apple-sheet-panel absolute inset-y-0 left-0 w-[min(20rem,88vw)] overflow-y-auto border-r border-[#262626] bg-[#090909] px-4 pt-16 shadow-2xl",
            open && "apple-sheet-panel-open",
          )}
        >
          <NavList onNavigate={() => setOpen(false)} />
        </nav>
      </div>

      {/* Main Content Layout with Apple Spring Split-View Physics */}
      <div className={cn("mx-auto flex max-w-[1500px]", sidebarCollapsed ? "pt-12 sm:pt-14" : "")}>
        <aside
          className={cn(
            "no-print sticky top-16 h-[calc(100dvh-4rem)] shrink-0 overflow-y-auto border-r border-[#262626] px-3 pt-6 hidden lg:block apple-sidebar-desktop",
            sidebarCollapsed && "apple-sidebar-desktop-collapsed",
          )}
        >
          <NavList />
        </aside>

        {/* Content Area */}
        <div className="min-w-0 flex-1 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">{children}</div>
      </div>

      {/* Highlights Slide-over Drawer */}
      {notebookOpen ? (
        <HighlightsDrawer
          onClose={() => setNotebookOpen(false)}
          onSelectHighlight={(id) => {
            setNotebookOpen(false);
            const h = highlights[id];
            if (h?.docId?.startsWith("topic:")) {
              const slug = h.docId.replace("topic:", "");
              window.location.href = `/topic/${slug}`;
            } else if (h?.docId?.startsWith("exam:")) {
              const qid = h.docId.replace("exam:", "");
              window.location.href = `/exam/${qid}`;
            }
          }}
        />
      ) : null}

      {/* Appearance Popover */}
      {appearanceMenuOpen ? (
        <AppearancePopover onClose={() => setAppearanceMenuOpen(false)} />
      ) : null}

      {/* Google Login Dialog */}
      <GoogleLoginDialog
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
      {/* Global Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

    </div>
  );
}
