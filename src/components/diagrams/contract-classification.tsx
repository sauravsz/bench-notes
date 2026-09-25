import { FileCheck, Layers, Sparkles, Zap } from "lucide-react";

export function ContractClassificationDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-line bg-surface p-5 sm:p-7 shadow-sm">
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-accent">
          <Layers className="size-3.5" />
          Three-Dimensional Classification
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-ink">
          Classification of Contracts under Indian Contract Law
        </h4>
        <p className="mt-1 font-sans text-xs text-ink-soft max-w-xl mx-auto leading-relaxed">
          Contracts are classified based on (1) Enforceability & Validity, (2) Mode of Formation, and (3) Extent of Performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Branch 1: Enforceability */}
        <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 p-4 space-y-2.5 shadow-2xs">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
            <span className="flex size-5.5 items-center justify-center rounded-full bg-slate-800 text-white text-[10px] font-bold">
              1
            </span>
            <h5 className="font-serif text-sm font-bold text-slate-900 dark:text-slate-100">
              By Enforceability & Validity
            </h5>
          </div>
          <div className="space-y-2 text-xs">
            <div className="rounded-lg bg-surface p-2.5 border border-emerald-300 dark:border-emerald-800 shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-300 block">Valid Contract (Sec 2(h))</span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Fully enforceable; meets all Sec 10 essentials</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-amber-300 dark:border-amber-800 shadow-2xs">
              <span className="font-bold text-amber-900 dark:text-amber-300 block">Voidable Contract (Sec 2(i))</span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Enforceable at aggrieved party's option (Coercion/Fraud)</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-rose-300 dark:border-rose-800 shadow-2xs">
              <span className="font-bold text-rose-900 dark:text-rose-300 block">Void Agreement (Sec 2(g))</span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Void ab initio; e.g. minor agreement (*Mohori Bibee*)</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-rose-300 dark:border-rose-800 shadow-2xs">
              <span className="font-bold text-rose-900 dark:text-rose-300 block">Void Contract (Sec 2(j))</span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Ceases enforceability (Sec 56 Supervening Frustration)</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-rose-300 dark:border-rose-800 shadow-2xs">
              <span className="font-bold text-rose-900 dark:text-rose-300 block">Illegal Agreement (Sec 23)</span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Forbidden by law / criminal; collaterals also void</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-slate-200 dark:border-slate-800 shadow-2xs">
              <span className="font-bold text-slate-900 dark:text-slate-200 block">Unenforceable Contract</span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Good in substance; barred by technical defect/limitation</p>
            </div>
          </div>
        </div>

        {/* Branch 2: Mode of Formation */}
        <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 p-4 space-y-2.5 shadow-2xs">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
            <span className="flex size-5.5 items-center justify-center rounded-full bg-accent text-white text-[10px] font-bold">
              2
            </span>
            <h5 className="font-serif text-sm font-bold text-slate-900 dark:text-slate-100">
              By Mode of Formation
            </h5>
          </div>
          <div className="space-y-2 text-xs">
            <div className="rounded-lg bg-surface p-2.5 border border-slate-200 dark:border-slate-800 shadow-2xs">
              <span className="font-bold text-ink block">Express Contract (Sec 9)</span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Formed via explicit spoken words or formal written document</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-slate-200 dark:border-slate-800 shadow-2xs">
              <span className="font-bold text-ink block">Implied / Tacit Contract (Sec 9)</span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Formed by conduct (e.g. boarding city bus, withdrawing at ATM)</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-slate-200 dark:border-slate-800 shadow-2xs">
              <span className="font-bold text-ink block">Quasi-Contract (Sec 68–72)</span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Law creates obligation to prevent unjust enrichment (*Finder of goods*)</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-slate-200 dark:border-slate-800 shadow-2xs">
              <span className="font-bold text-ink block">E-Contract (IT Act Sec 10A)</span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Formed digitally: Click-wrap, Shrink-wrap, EDI, digital signatures</p>
            </div>
          </div>
        </div>

        {/* Branch 3: Extent of Performance */}
        <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 p-4 space-y-2.5 shadow-2xs">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
            <span className="flex size-5.5 items-center justify-center rounded-full bg-sky-700 text-white text-[10px] font-bold">
              3
            </span>
            <h5 className="font-serif text-sm font-bold text-slate-900 dark:text-slate-100">
              By Extent of Performance
            </h5>
          </div>
          <div className="space-y-2 text-xs">
            <div className="rounded-lg bg-surface p-2.5 border border-emerald-300 dark:border-emerald-800 shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-300 block">Executed Contract</span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Both parties have fully performed their obligations (Spot cash sale)</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-sky-300 dark:border-sky-800 shadow-2xs">
              <span className="font-bold text-sky-900 dark:text-sky-300 block">Executory: Unilateral</span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">One party has performed; other party's promise is pending (Reward)</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-sky-300 dark:border-sky-800 shadow-2xs">
              <span className="font-bold text-sky-900 dark:text-sky-300 block">Executory: Bilateral</span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Both parties exchange reciprocal promises for future execution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
