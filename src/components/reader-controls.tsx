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
import { useProgress } from "@/lib/progress";
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
  const autoHighlight = useHighlights((s) => s.autoHighlight);
  const toggleAutoHighlight = useHighlights((s) => s.toggleAutoHighlight);
  const activeColor = useHighlights((s) => s.activeColor);
  const setActiveColor = useHighlights((s) => s.setActiveColor);
  const toggleAppearanceMenu = useAppearance((s) => s.toggleAppearanceMenu);
  const toggleStudiedStore = useProgress((s) => s.toggleStudied);
  const studiedStore = useProgress((s) => s.studied);

  const fallbackSlug = docId.startsWith("exam:") ? docId.replace("exam:", "") : docId;
  const isStudiedEffective =
    studied !== undefined
      ? studied
      : fallbackSlug
        ? !!studiedStore[fallbackSlug]
        : false;

  const handleToggle = () => {
    if (onToggleStudied) {
      onToggleStudied();
    } else if (fallbackSlug) {
      toggleStudiedStore(fallbackSlug);
    }
  };

  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const docHighlightsCount = Object.values(highlights).filter(
    (h) => h.docId === docId,
  ).length;

  // Global Shift + H keyboard shortcut
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      ) {
        return;
      }
      if (e.shiftKey && (e.key === "H" || e.key === "h")) {
        e.preventDefault();
        const next = toggleAutoHighlight();
        if (next) {
          toast.success("Auto-highlighting enabled", {
            description: "Selecting text will automatically highlight it.",
          });
        } else {
          toast.info("Auto-highlighting disabled", {
            description: "Text selection will not auto-highlight.",
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
      toast.success("Auto-highlighting enabled (Shift+H)");
    } else {
      toast.info("Auto-highlighting disabled (Shift+H)");
    }
  };

  return (
    <div className="no-print my-4 flex flex-wrap items-center justify-between gap-3 rounded-[20px] border border-[#262626] bg-[#141414] p-3 shadow-xs">
      {/* Left Group: Studied Check & Auto-Highlight Toggle */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={handleToggle}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-sans text-xs font-bold transition-all duration-200 ios-press",
            isStudiedEffective
              ? "bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/40 shadow-xs"
              : "bg-[#1c1c1c] text-[#999999] hover:text-white border border-[#262626]",
          )}
          title="Mark note as studied / unstudied (M)"
        >
          <Check className={cn("size-3.5", isStudiedEffective ? "stroke-[2.5]" : "")} />
          <span>{isStudiedEffective ? "Studied ✓" : "Mark as Studied (M)"}</span>
        </button>

        {/* Auto-Highlight Switch Pill */}
        <div className="flex items-center gap-2 rounded-full border border-[#262626] bg-[#1c1c1c] px-3 py-1 text-xs">
          <button
            type="button"
            onClick={handleToggleAuto}
            className="flex items-center gap-1.5 font-sans font-medium text-white hover:text-[#0099ff] transition-colors"
            title="Toggle instant auto-highlighting (Shift+H)"
          >
            {autoHighlight ? (
              <Zap className="size-3 fill-[#0099ff] text-[#0099ff]" />
            ) : (
              <ZapOff className="size-3 text-[#666666]" />
            )}
            <span className="hidden sm:inline">Auto-Highlight</span>
          </button>
          <Switch
            checked={autoHighlight}
            onCheckedChange={handleToggleAuto}
          />
        </div>

        {/* Color Palette Selector */}
        {autoHighlight ? (
          <div className="flex items-center gap-1 pl-1">
            {HIGHLIGHT_COLORS.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCurrentColor(c.id)}
                title={`Active highlight color: ${c.label}`}
                className={cn(
                  "size-4.5 rounded-full transition-all duration-150 hover:scale-115 active:scale-95",
                  currentColor === c.id
                    ? "ring-2 ring-white ring-offset-2 ring-offset-[#141414] scale-110"
                    : "opacity-70 hover:opacity-100",
                )}
                style={{ backgroundColor: c.dotColor }}
              />
            ))}
          </div>
        ) : null}
      </div>

      {/* Right Group: Reader Tool Buttons */}
      <div className="flex items-center gap-1.5">
        {/* Table of Contents Button */}
        {onToggleToc ? (
          <button
            type="button"
            onClick={onToggleToc}
            className="inline-flex size-8 items-center justify-center rounded-full border border-[#262626] bg-[#1c1c1c] text-[#999999] hover:bg-[#262626] hover:text-white transition-all ios-press"
            title="Table of contents (T)"
          >
            <ListOrdered className="size-3.5" />
          </button>
        ) : null}

        {/* Appearance Popover Trigger (Aa) */}
        <button
          type="button"
          data-appearance-trigger
          onClick={toggleAppearanceMenu}
          className="inline-flex size-8 items-center justify-center rounded-full border border-[#262626] bg-[#1c1c1c] text-[#999999] hover:bg-[#262626] hover:text-white transition-all ios-press"
          title="Reading appearance & width (Aa)"
        >
          <SlidersHorizontal className="size-3.5" />
        </button>

        {/* Focus Timer / Stopwatch */}
        <button
          type="button"
          onClick={() => setTimerOpen(true)}
          className="inline-flex size-8 items-center justify-center rounded-full border border-[#262626] bg-[#1c1c1c] text-[#999999] hover:bg-[#262626] hover:text-white transition-all ios-press"
          title="Focus timer & Pomodoro (F)"
        >
          <Clock className="size-3.5" />
        </button>

        {/* Notebook Highlights Button */}
        <button
          type="button"
          onClick={() => setNotebookOpen(true)}
          className="relative inline-flex size-8 items-center justify-center rounded-full border border-[#262626] bg-[#1c1c1c] text-[#999999] hover:bg-[#262626] hover:text-white transition-all ios-press"
          title="Open highlights notebook (H)"
        >
          <Highlighter className="size-3.5" />
          {docHighlightsCount > 0 && (
            <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-[#0099ff] text-[9px] font-bold text-white">
              {docHighlightsCount}
            </span>
          )}
        </button>

        {/* Copy Clean Markdown */}
        {onCopyMarkdown ? (
          <button
            type="button"
            onClick={onCopyMarkdown}
            className="inline-flex size-8 items-center justify-center rounded-full border border-[#262626] bg-[#1c1c1c] text-[#999999] hover:bg-[#262626] hover:text-white transition-all ios-press"
            title="Copy clean markdown"
          >
            <Copy className="size-3.5" />
          </button>
        ) : null}

        {/* Print / Save PDF Button */}
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex size-8 items-center justify-center rounded-full border border-[#262626] bg-[#1c1c1c] text-[#999999] hover:bg-[#262626] hover:text-white transition-all ios-press"
          title="Print or export as PDF (Cmd+P)"
        >
          <Printer className="size-3.5" />
        </button>

        {/* Keyboard Shortcuts Dialog */}
        <button
          type="button"
          onClick={() => setShortcutsOpen(true)}
          className="inline-flex size-8 items-center justify-center rounded-full border border-[#262626] bg-[#1c1c1c] text-[#999999] hover:bg-[#262626] hover:text-white transition-all ios-press"
          title="Keyboard shortcuts (?)"
        >
          <HelpCircle className="size-3.5" />
        </button>
      </div>

      {/* Focus Timer Modal */}
      {timerOpen ? (
        <StudyTimer
          docTitle={docTitle}
          onClose={() => setTimerOpen(false)}
        />
      ) : null}

      {/* Shortcuts Guide Dialog */}
      {shortcutsOpen ? (
        <ShortcutsDialog onClose={() => setShortcutsOpen(false)} />
      ) : null}
    </div>
  );
}
