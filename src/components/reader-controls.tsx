import { useEffect, useState } from "react";
import {
  BookOpen,
  Check,
  Clock,
  Copy,
  HelpCircle,
  Highlighter,
  ListOrdered,
  Printer,
  SlidersHorizontal,
  Sparkles,
  Zap,
  ZapOff,
} from "lucide-react";
import {
  HIGHLIGHT_COLORS,
  useHighlights,
  type HighlightColor,
} from "@/lib/highlights";
import { useAppearance } from "@/lib/appearance";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { StudyTimer } from "./study-timer";
import { ShortcutsDialog } from "./shortcuts-dialog";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
export function ReaderControls({
  docId,
  docTitle,
  studied,
  onToggleStudied,
  onToggleToc,
  onCopyMarkdown,
}: {
  docId: string;
  docTitle: string;
  studied?: boolean;
  onToggleStudied?: () => void;
  onToggleToc?: () => void;
  onCopyMarkdown?: () => void;
}) {
  const [timerOpen, setTimerOpen] = useState(false);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const highlights = useHighlights((s) => s.highlights);
  const autoHighlight = useHighlights((s) => s.autoHighlight);
  const toggleAutoHighlight = useHighlights((s) => s.toggleAutoHighlight);
  const currentColor = useHighlights((s) => s.currentColor);
  const setCurrentColor = useHighlights((s) => s.setCurrentColor);
  const setNotebookOpen = useHighlights((s) => s.setNotebookOpen);
  const toggleAppearanceMenu = useAppearance((s) => s.toggleAppearanceMenu);
  const docHighlightsCount = Object.values(highlights).filter(
    (h) => h.docId === docId,
  ).length;

  // Global Shift + H keyboard shortcut
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (
        (e.key.toLowerCase() === "h" || e.code === "KeyH") &&
        e.shiftKey &&
        !e.metaKey &&
        !e.ctrlKey
      ) {
        // Prevent typing in inputs
        if (
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement
        ) {
          return;
        }
        e.preventDefault();
        const next = toggleAutoHighlight();
        if (next) {
          toast.success("Auto-highlighting enabled", {
            description: "Selecting any text will automatically highlight it.",
          });
        } else {
          toast.info("Auto-highlighting disabled", {
            description: "Select text to open the highlight toolbar.",
          });
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleAutoHighlight]);

  const handleToggleAuto = () => {
    const next = toggleAutoHighlight();
    if (next) {
      toast.success("Auto-highlighting enabled (Shift+H)", {
        description: "Selecting text will automatically create a highlight.",
      });
    } else {
      toast.info("Auto-highlighting disabled (Shift+H)", {
        description: "Hold Option/Alt to copy without highlighting.",
      });
    }
  };

  return (
    <div className="no-print my-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-surface p-2.5 shadow-xs">
      <div className="flex flex-wrap items-center gap-2.5">
        {/* Auto-highlight toggle button with switch */}
        <div className="flex items-center gap-2 rounded-lg border border-line bg-bg-warm/50 px-2.5 py-1">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-ink">
            <Zap className={`size-3.5 ${autoHighlight ? "fill-amber-500 text-amber-600" : "text-muted"}`} />
            Auto-Highlight
            <kbd className="hidden sm:inline-block rounded bg-black/5 dark:bg-white/10 px-1 py-0.2 text-[9px] text-muted">
              ⇧H
            </kbd>
          </span>
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
        {/* Color Palette Picker */}
        <div className="flex items-center gap-1 rounded-lg bg-bg-warm/70 px-2 py-1 border border-line/40">
          <span className="text-[11px] font-medium text-muted mr-1 hidden sm:inline">
            Color:
          </span>
          {HIGHLIGHT_COLORS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCurrentColor(c.id)}
              title={`${c.label} marker`}
              className={`size-4 rounded-full transition-transform hover:scale-125 active:scale-95 ${
                currentColor === c.id
                  ? "ring-2 ring-primary ring-offset-1 scale-110 ios-spring-pop"
                  : "opacity-75 hover:opacity-100"
              }`}
              style={{ backgroundColor: c.dotColor }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Table of Contents Button */}
        {onToggleToc ? (
          <Button
            size="sm"
            variant="outline"
            onClick={onToggleToc}
            className="h-8 gap-1 rounded-xl text-xs font-medium ios-press"
            title="Table of Contents & Section Navigator"
          >
            <ListOrdered className="size-3.5 text-accent" />
            <span className="hidden md:inline">Outline</span>
          </Button>
        ) : null}

        {/* Copy Markdown Button */}
        {onCopyMarkdown ? (
          <Button
            size="sm"
            variant="outline"
            onClick={onCopyMarkdown}
            className="h-8 gap-1 rounded-xl text-xs font-medium ios-press"
            title="Copy Note as Structured Markdown (for Notion/Obsidian)"
          >
            <Copy className="size-3.5 text-accent" />
            <span className="hidden md:inline">Markdown</span>
          </Button>
        ) : null}

        {/* Print Note Button */}
        <Button
          size="sm"
          variant="outline"
          onClick={() => window.print()}
          className="h-8 gap-1 rounded-xl text-xs font-medium ios-press"
          title="Print or Export as Clean PDF Sheet"
        >
          <Printer className="size-3.5 text-accent" />
          <span className="hidden md:inline">Print</span>
        </Button>

        {/* Study Sprint Timer */}
        <Button
          size="sm"
          variant="outline"
          onClick={() => setTimerOpen(!timerOpen)}
          className="h-8 gap-1 rounded-xl text-xs font-medium ios-press"
          title="25-min Exam Revision Focus Timer"
        >
          <Clock className="size-3.5 text-amber-600" />
          <span className="hidden md:inline">Timer</span>
        </Button>

        {/* Readwise Appearance button */}
        <button
          type="button"
          data-appearance-trigger
          onClick={toggleAppearanceMenu}
          className="h-8 inline-flex items-center gap-1 rounded-xl border border-line bg-surface px-2.5 font-serif text-xs font-bold text-ink hover:bg-bg-warm transition-all duration-200 ios-press shadow-2xs"
          title="Customize line width, font size & appearance (Aa)"
        >
          <span className="text-sm font-serif">Aa</span>
        </button>

        {/* Notebook Drawer Button */}
        <Button
          size="sm"
          variant="outline"
          onClick={() => setNotebookOpen(true)}
          className="h-8 gap-1.5 rounded-xl text-xs font-medium ios-press"
        >
          <Highlighter className="size-3.5 text-accent" />
          <span>Notebook</span>
          {docHighlightsCount > 0 ? (
            <span className="rounded-full bg-accent/15 px-1.5 py-0.2 text-[10px] font-semibold text-accent">
              {docHighlightsCount}
            </span>
          ) : null}
        </Button>

        {/* Shortcuts Discovery */}
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setShortcutsOpen(true)}
          className="size-8 p-0 rounded-xl text-muted hover:text-ink ios-press hidden sm:inline-flex"
          title="Keyboard shortcuts (?)"
        >
          <HelpCircle className="size-4" />
        </Button>

        {/* Studied Toggle */}
        {onToggleStudied ? (
          <Button
            size="sm"
            variant={studied ? "default" : "outline"}
            onClick={onToggleStudied}
            className={cn("h-8 gap-1.5 rounded-xl text-xs font-medium ios-press", studied ? "bg-studied hover:bg-studied/90" : "")}
          >
            <Check className={cn("size-3.5", studied ? "ios-spring-pop" : "")} />
            {studied ? "Studied" : "Mark Studied"}
          </Button>
        ) : null}
      </div>

      <StudyTimer isOpen={timerOpen} onClose={() => setTimerOpen(false)} />
      <ShortcutsDialog isOpen={shortcutsOpen} onClose={() => setShortcutsOpen(false)} />
    </div>
  );
}
