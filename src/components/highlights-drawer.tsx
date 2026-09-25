import { useState, useMemo } from "react";
import {
  BookOpen,
  Check,
  Copy,
  Download,
  Filter,
  Highlighter,
  MessageSquare,
  Search,
  Tag,
  Trash2,
  X,
} from "lucide-react";
import {
  HIGHLIGHT_COLORS,
  useHighlights,
  type HighlightColor,
  type HighlightItem,
} from "@/lib/highlights";
import { Button } from "./ui/button";

export function HighlightsDrawer({
  currentDocId,
  onClose,
  onSelectHighlight,
}: {
  currentDocId?: string;
  onClose: () => void;
  onSelectHighlight?: (id: string) => void;
}) {
  const highlights = useHighlights((s) => s.highlights);
  const removeHighlight = useHighlights((s) => s.removeHighlight);
  const clearDocHighlights = useHighlights((s) => s.clearDocHighlights);
  const autoHighlight = useHighlights((s) => s.autoHighlight);
  const toggleAutoHighlight = useHighlights((s) => s.toggleAutoHighlight);

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"current" | "all">("current");
  const [selectedColor, setSelectedColor] = useState<HighlightColor | "all">("all");
  const [copied, setCopied] = useState(false);

  const allList = useMemo(() => Object.values(highlights), [highlights]);

  const docList = useMemo(
    () => allList.filter((h) => !currentDocId || h.docId === currentDocId),
    [allList, currentDocId],
  );

  const activeList = activeTab === "current" && currentDocId ? docList : allList;

  const filteredList = useMemo(() => {
    return activeList.filter((item) => {
      if (selectedColor !== "all" && item.color !== selectedColor) return false;
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.text.toLowerCase().includes(q) ||
        (item.note && item.note.toLowerCase().includes(q)) ||
        (item.docTitle && item.docTitle.toLowerCase().includes(q)) ||
        item.tags?.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [activeList, selectedColor, searchQuery]);

  const handleExportMarkdown = () => {
    let md = `# BenchNotes Highlights & Study Annotations\n\n`;
    md += `*Exported on ${new Date().toLocaleDateString()}*\n\n---\n\n`;

    // Group by document
    const grouped: Record<string, HighlightItem[]> = {};
    for (const item of filteredList) {
      const title = item.docTitle || item.docId;
      if (!grouped[title]) grouped[title] = [];
      grouped[title].push(item);
    }

    for (const [title, items] of Object.entries(grouped)) {
      md += `## ${title}\n\n`;
      for (const h of items) {
        md += `> ${h.text}\n\n`;
        if (h.note) {
          md += `**Note:** ${h.note}\n\n`;
        }
        if (h.tags && h.tags.length > 0) {
          md += `*Tags:* ${h.tags.map((t) => `#${t}`).join(" ")}\n\n`;
        }
      }
      md += `---\n\n`;
    }

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="flex h-full w-full max-w-md flex-col border-l border-line bg-surface shadow-2xl animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line p-4">
          <div className="flex items-center gap-2">
            <Highlighter className="size-4 text-accent" />
            <h2 className="font-serif text-lg font-semibold text-ink">
              Reader Notebook
            </h2>
            <span className="rounded-full bg-bg-warm px-2 py-0.5 font-sans text-xs font-medium text-muted">
              {filteredList.length}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-muted hover:bg-bg-warm hover:text-ink transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Auto-highlight toggle banner */}
        <div className="flex items-center justify-between bg-bg-warm/60 px-4 py-2.5 border-b border-line/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-ink">
              Auto-highlighting:
            </span>
            <span
              className={`text-xs font-semibold uppercase tracking-wider ${
                autoHighlight ? "text-emerald-600" : "text-muted"
              }`}
            >
              {autoHighlight ? "Enabled" : "Disabled"}
            </span>
          </div>
          <button
            type="button"
            onClick={() => toggleAutoHighlight()}
            className="text-xs font-medium text-accent hover:underline flex items-center gap-1"
          >
            Toggle (<kbd className="font-sans">⇧H</kbd>)
          </button>
        </div>

        {/* Filter / Search Bar */}
        <div className="p-4 border-b border-line/60 space-y-3">
          {/* Tabs */}
          {currentDocId ? (
            <div className="flex rounded-lg bg-bg-warm p-0.5 text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveTab("current")}
                className={`flex-1 rounded-md py-1.5 transition-colors ${
                  activeTab === "current"
                    ? "bg-surface text-ink shadow-xs"
                    : "text-muted hover:text-ink"
                }`}
              >
                This Note ({docList.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`flex-1 rounded-md py-1.5 transition-colors ${
                  activeTab === "all"
                    ? "bg-surface text-ink shadow-xs"
                    : "text-muted hover:text-ink"
                }`}
              >
                All Highlights ({allList.length})
              </button>
            </div>
          ) : null}

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 size-3.5 text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search highlights or notes..."
              className="w-full rounded-md border border-line bg-surface py-1.5 pl-8 pr-3 font-sans text-xs text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none"
            />
          </div>

          {/* Color filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <button
              type="button"
              onClick={() => setSelectedColor("all")}
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium transition-colors ${
                selectedColor === "all"
                  ? "bg-ink text-surface"
                  : "bg-bg-warm text-muted hover:text-ink"
              }`}
            >
              All
            </button>
            {HIGHLIGHT_COLORS.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedColor(c.id)}
                title={c.label}
                className={`size-4.5 rounded-full transition-transform hover:scale-110 ${
                  selectedColor === c.id ? "ring-2 ring-primary ring-offset-1 scale-110" : "opacity-70"
                }`}
                style={{ backgroundColor: c.dotColor }}
              />
            ))}
          </div>
        </div>

        {/* Highlights List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredList.length === 0 ? (
            <div className="py-12 text-center">
              <Highlighter className="mx-auto size-8 text-muted/40 mb-2" />
              <p className="font-serif text-sm text-ink-soft">
                No highlights found
              </p>
              <p className="mt-1 font-sans text-xs text-muted">
                Select any text in the notes to create an automatic highlight.
              </p>
            </div>
          ) : (
            filteredList.map((h) => {
              const colorConfig = HIGHLIGHT_COLORS.find((c) => c.id === h.color);
              return (
                <article
                  key={h.id}
                  onClick={() => onSelectHighlight?.(h.id)}
                  className="group relative rounded-lg border border-line bg-surface p-3 transition-shadow hover:shadow-md cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-sans text-[10px] font-medium uppercase tracking-wider text-muted flex items-center gap-1">
                      <span
                        className="size-2 rounded-full inline-block"
                        style={{ backgroundColor: colorConfig?.dotColor || "#EAB308" }}
                      />
                      {h.docTitle || "Note"}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeHighlight(h.id);
                      }}
                      title="Delete highlight"
                      className="opacity-0 group-hover:opacity-100 rounded p-1 text-muted hover:text-rose-600 transition-all"
                    >
                      <Trash2 className="size-3" />
                    </button>
                  </div>

                  <p
                    className={`rounded p-1.5 font-serif text-xs leading-relaxed text-ink ${
                      colorConfig?.bgClass || "bg-yellow-100"
                    }`}
                  >
                    “{h.text}”
                  </p>

                  {h.note ? (
                    <div className="mt-2 flex items-start gap-1.5 rounded bg-bg-warm/80 p-1.5 text-xs text-ink-soft">
                      <MessageSquare className="size-3 text-accent shrink-0 mt-0.5" />
                      <span className="font-sans text-[11px] leading-relaxed">
                        {h.note}
                      </span>
                    </div>
                  ) : null}

                  {h.tags && h.tags.length > 0 ? (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {h.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded bg-bg-warm px-1.5 py-0.5 text-[9px] font-medium text-muted"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </article>
              );
            })
          )}
        </div>

        {/* Footer Actions */}
        <div className="border-t border-line p-3 flex items-center justify-between gap-2 bg-bg-warm/40">
          <Button
            size="sm"
            variant="outline"
            onClick={handleExportMarkdown}
            disabled={filteredList.length === 0}
            className="flex-1 text-xs"
          >
            {copied ? (
              <>
                <Check className="size-3.5 text-emerald-600" />
                Copied Markdown
              </>
            ) : (
              <>
                <Copy className="size-3.5" />
                Copy All (Markdown)
              </>
            )}
          </Button>

          {currentDocId && docList.length > 0 ? (
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                if (window.confirm("Clear all highlights for this document?")) {
                  clearDocHighlights(currentDocId);
                }
              }}
              className="text-xs text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30"
            >
              Clear
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
