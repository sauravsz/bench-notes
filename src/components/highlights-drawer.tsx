import { useState, useMemo } from "react";
import {
  Check,
  Copy,
  Highlighter,
  MessageSquare,
  Search,
  Trash2,
  X,
} from "lucide-react";
import {
  HIGHLIGHT_COLORS,
  useHighlights,
  type HighlightColor,
  type HighlightItem,
} from "@/lib/highlights";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { toast } from "sonner";

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
    toast.success("Copied highlights as Markdown");
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-xl transition-opacity duration-300">
      <div className="flex h-full w-full max-w-md flex-col border-l border-[#262626] bg-[#141414] shadow-2xl animate-in slide-in-from-right duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#262626] p-5">
          <div className="flex items-center gap-2">
            <Highlighter className="size-4 text-[#0099ff]" />
            <h2 className="font-display text-base font-bold text-white">
              Reader Notebook
            </h2>
            <span className="rounded-full bg-[#1c1c1c] border border-[#262626] px-2 py-0.2 font-mono text-xs font-bold text-[#999999]">
              {filteredList.length}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-[#666666] hover:bg-[#1c1c1c] hover:text-white transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Auto-highlight toggle banner */}
        <div className="flex items-center justify-between bg-[#181818] px-5 py-3 border-b border-[#262626]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-white">
              Auto-highlighting:
            </span>
            <span
              className={`text-xs font-semibold uppercase tracking-wider font-mono ${
                autoHighlight ? "text-[#0099ff]" : "text-[#666666]"
              }`}
            >
              {autoHighlight ? "ON" : "OFF"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="hidden sm:inline-block font-mono text-[10px] text-[#666666]">⇧H</kbd>
            <Switch
              checked={autoHighlight}
              onCheckedChange={(checked) => {
                toggleAutoHighlight();
                if (checked) {
                  toast.success("Auto-highlighting enabled (Shift+H)");
                } else {
                  toast.info("Auto-highlighting disabled (Shift+H)");
                }
              }}
            />
          </div>
        </div>

        {/* Filter / Search Bar */}
        <div className="p-4 border-b border-[#262626] space-y-3">
          {/* Tabs (Framer Pill Switcher) */}
          {currentDocId ? (
            <div className="flex rounded-full bg-[#1c1c1c] p-1 text-xs font-medium border border-[#262626]">
              <button
                type="button"
                onClick={() => setActiveTab("current")}
                className={`flex-1 rounded-full py-1.5 transition-all duration-200 ${
                  activeTab === "current"
                    ? "bg-white text-black font-bold shadow-xs"
                    : "text-[#999999] hover:text-white"
                }`}
              >
                This Note ({docList.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`flex-1 rounded-full py-1.5 transition-all duration-200 ${
                  activeTab === "all"
                    ? "bg-white text-black font-bold shadow-xs"
                    : "text-[#999999] hover:text-white"
                }`}
              >
                All Highlights ({allList.length})
              </button>
            </div>
          ) : null}

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3.5 top-2.5 size-3.5 text-[#666666]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search highlights or notes..."
              className="w-full rounded-full border border-[#262626] bg-[#090909] py-2 pl-9 pr-3 font-sans text-xs text-white placeholder:text-[#666666] focus:border-[#0099ff] focus:outline-none"
            />
          </div>

          {/* Color filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <button
              type="button"
              onClick={() => setSelectedColor("all")}
              className={`rounded-full px-3 py-1 font-mono text-[11px] font-bold transition-all duration-200 ${
                selectedColor === "all"
                  ? "bg-white text-black shadow-xs"
                  : "bg-[#1c1c1c] text-[#999999] border border-[#262626] hover:text-white"
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
                className={`size-4.5 rounded-full transition-all duration-200 hover:scale-115 active:scale-95 ${
                  selectedColor === c.id ? "ring-2 ring-white ring-offset-2 ring-offset-[#141414] scale-110" : "opacity-70"
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
              <Highlighter className="mx-auto size-8 text-[#666666]/40 mb-2" />
              <p className="font-display text-sm font-bold text-white">
                No highlights found
              </p>
              <p className="mt-1 font-sans text-xs text-[#999999]">
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
                  className="group relative rounded-[16px] border border-[#262626] bg-[#1c1c1c] p-4 transition-all duration-200 hover:border-[#383838] hover:bg-[#202020] cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#999999] flex items-center gap-1.5">
                      <span
                        className="size-2 rounded-full inline-block"
                        style={{ backgroundColor: colorConfig?.dotColor || "#0099ff" }}
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
                      className="opacity-0 group-hover:opacity-100 rounded-full p-1 text-[#666666] hover:text-rose-400 transition-all"
                    >
                      <Trash2 className="size-3" />
                    </button>
                  </div>

                  <p className="font-sans text-xs leading-relaxed text-white border-l-2 border-[#0099ff] pl-2 py-0.5">
                    “{h.text}”
                  </p>

                  {h.note ? (
                    <div className="mt-2.5 flex items-start gap-1.5 rounded-xl bg-[#141414] p-2 text-xs border border-[#262626] text-[#cccccc]">
                      <MessageSquare className="size-3 text-[#0099ff] shrink-0 mt-0.5" />
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
                          className="rounded-full bg-[#141414] border border-[#262626] px-2 py-0.2 text-[9px] font-mono font-medium text-[#999999]"
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

        {/* Footer Actions (White Pill) */}
        <div className="border-t border-[#262626] p-4 flex items-center justify-between gap-2 bg-[#181818]">
          <Button
            size="sm"
            onClick={handleExportMarkdown}
            disabled={filteredList.length === 0}
            className="flex-1 text-xs bg-white text-black hover:bg-white/90 rounded-full font-bold h-9"
          >
            {copied ? (
              <>
                <Check className="size-3.5 text-[#22c55e]" />
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
              className="text-xs text-rose-400 hover:bg-rose-950/40 border-[#262626] bg-[#141414] rounded-full h-9"
            >
              Clear
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
