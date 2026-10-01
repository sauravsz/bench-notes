import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, Copy, Languages, Search, X } from "lucide-react";
import { maxims } from "@/data";

export const Route = createFileRoute("/maxims")({ component: MaximsPage });

function MaximsPage() {
  const [search, setSearch] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return maxims;
    return maxims.filter((maxim) => {
      const latinMatch = maxim.latin.toLowerCase().includes(q);
      const meaningMatch = maxim.meaning.toLowerCase().includes(q);
      return latinMatch || meaningMatch;
    });
  }, [search]);

  const handleCopy = async (maxim: (typeof maxims)[number]) => {
    const textToCopy = `${maxim.latin} - ${maxim.meaning}`;
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      }
      setCopiedId(maxim.id);
      setTimeout(() => {
        setCopiedId((current) => (current === maxim.id ? null : current));
      }, 2000);
    } catch {
      setCopiedId(maxim.id);
      setTimeout(() => {
        setCopiedId((current) => (current === maxim.id ? null : current));
      }, 2000);
    }
  };

  return (
    <main className="px-4 py-8 sm:px-10 sm:py-12 ios-fade-up bg-[#090909]">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0099ff]/15 border border-[#0099ff]/30 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0099ff]">
              <Languages className="size-3.5" />
              Paper 603 · Business Laws Jurisprudence
            </span>
            <span className="font-mono text-xs text-[#666666]">
              {maxims.length} Maxims
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-white">
            Latin Legal Maxims
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#999999] leading-relaxed">
            Classical doctrines, rules of interpretation, and Latin maxims governing commercial law.
          </p>
        </header>

        {/* Search filter input */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-3.5 size-4 text-[#666666]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Latin phrases or English meanings..."
            className="w-full rounded-full border border-[#262626] bg-[#141414] py-3 pl-11 pr-10 font-sans text-sm text-white placeholder:text-[#666666] focus:border-[#0099ff] focus:outline-none"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-3.5 top-3 text-[#666666] hover:text-white"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        {/* Maxim listing */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="rounded-[20px] border border-dashed border-[#262626] p-10 text-center text-[#999999] bg-[#141414]">
              No maxims matching "{search}".
            </div>
          ) : (
            filtered.map((maxim) => (
              <div
                key={maxim.id}
                id={maxim.id}
                className="rounded-[20px] border border-[#262626] bg-[#141414] p-5 sm:p-6 transition-all duration-200 hover:border-[#383838] shadow-xs flex items-start justify-between gap-4 group"
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <h2 className="font-display text-base sm:text-lg font-bold text-white tracking-[-0.01em]">
                    {maxim.latin}
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-[#cccccc] leading-relaxed">
                    {maxim.meaning}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(maxim)}
                  className="shrink-0 flex size-9 items-center justify-center rounded-full border border-[#262626] bg-[#1c1c1c] text-[#999999] hover:text-white hover:border-[#0099ff]/50 transition-all ios-press"
                  title="Copy Latin maxim"
                >
                  {copiedId === maxim.id ? (
                    <Check className="size-4 text-[#22c55e]" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
