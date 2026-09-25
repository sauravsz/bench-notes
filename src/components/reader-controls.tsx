import { useEffect } from "react";
import {
  BookOpen,
  Check,
  Highlighter,
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
import { Button } from "./ui/button";
import { toast } from "sonner";

export function ReaderControls({
  docId,
  docTitle,
  studied,
  onToggleStudied,
}: {
  docId: string;
  docTitle: string;
  studied?: boolean;
  onToggleStudied?: () => void;
}) {
  const highlights = useHighlights((s) => s.highlights);
  const autoHighlight = useHighlights((s) => s.autoHighlight);
  const toggleAutoHighlight = useHighlights((s) => s.toggleAutoHighlight);
  const currentColor = useHighlights((s) => s.currentColor);
  const setCurrentColor = useHighlights((s) => s.setCurrentColor);
  const setNotebookOpen = useHighlights((s) => s.setNotebookOpen);

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
      <div className="flex flex-wrap items-center gap-2">
        {/* Auto-highlight toggle button */}
        <button
          type="button"
          onClick={handleToggleAuto}
          title="Toggle Auto-Highlighting (Shortcut: Shift+H)"
          className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
            autoHighlight
              ? "bg-amber-100/80 text-amber-900 border border-amber-300/80 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-800/80 shadow-xs"
              : "bg-bg-warm text-muted hover:text-ink border border-line/60"
          }`}
        >
          {autoHighlight ? (
            <Zap className="size-3.5 fill-amber-500 text-amber-600" />
          ) : (
            <ZapOff className="size-3.5 text-muted" />
          )}
          <span>Auto-Highlight</span>
          <span
            className={`font-semibold text-[11px] ${
              autoHighlight ? "text-amber-700 dark:text-amber-300" : "text-muted"
            }`}
          >
            {autoHighlight ? "ON" : "OFF"}
          </span>
          <kbd className="hidden sm:inline-block rounded bg-black/5 dark:bg-white/10 px-1 py-0.2 text-[9px] text-muted">
            ⇧H
          </kbd>
        </button>

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
              className={`size-4 rounded-full transition-transform hover:scale-125 ${
                currentColor === c.id
                  ? "ring-2 ring-primary ring-offset-1 scale-110"
                  : "opacity-75 hover:opacity-100"
              }`}
              style={{ backgroundColor: c.dotColor }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Notebook Drawer Button */}
        <Button
          size="sm"
          variant="outline"
          onClick={() => setNotebookOpen(true)}
          className="h-8 gap-1.5 text-xs font-medium"
        >
          <Highlighter className="size-3.5 text-accent" />
          <span>Notebook</span>
          {docHighlightsCount > 0 ? (
            <span className="rounded-full bg-accent/15 px-1.5 py-0.2 text-[10px] font-semibold text-accent">
              {docHighlightsCount}
            </span>
          ) : null}
        </Button>

        {/* Studied Toggle */}
        {onToggleStudied ? (
          <Button
            size="sm"
            variant={studied ? "default" : "outline"}
            onClick={onToggleStudied}
            className="h-8 gap-1.5 text-xs font-medium"
          >
            <Check className="size-3.5" />
            {studied ? "Studied" : "Mark Studied"}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
