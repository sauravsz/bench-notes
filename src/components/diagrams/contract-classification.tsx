import { FileCheck, Layers, Sparkles, Zap } from "lucide-react";

export function ContractClassificationDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-line bg-surface p-4 sm:p-6 shadow-sm">
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-accent">
          <Layers className="size-3.5" />
          Three-Dimensional Classification
        </span>
        <h4 className="mt-2 font-serif text-xl font-bold text-ink">
          Classification of Contracts under Indian Contract Law
        </h4>
        <p className="mt-1 font-sans text-xs text-muted max-w-xl mx-auto">
          Contracts are classified based on (1) Enforceability & Validity, (2) Mode of Formation, and (3) Extent of Performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Branch 1: Enforceability */}
        <div className="rounded-xl border border-line bg-bg-warm/40 p-4 space-y-2">
          <div className="flex items-center gap-2 pb-2 border-b border-line">
            <span className="flex size-5 items-center justify-center rounded-full bg-primary text-white text-[10px] font-bold">
              1
            </span>
            <h5 className="font-serif text-xs font-bold text-ink">
              By Enforceability & Validity
            </h5>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="rounded-lg bg-surface p-2 border border-emerald-200 dark:border-emerald-900/40">
              <span className="font-semibold text-emerald-800 dark:text-emerald-300">Valid Contract (Sec 2(h))</span>
              <p className="text-[10px] text-muted">Fully enforceable; meets all Sec 10 essentials</p>
            </div>
            <div className="rounded-lg bg-surface p-2 border border-amber-200 dark:border-amber-900/40">
              <span className="font-semibold text-amber-800 dark:text-amber-300">Voidable Contract (Sec 2(i))</span>
              <p className="text-[10px] text-muted">Enforceable at aggrieved party's option (Coercion/Fraud)</p>
            </div>
            <div className="rounded-lg bg-surface p-2 border border-rose-200 dark:border-rose-900/40">
              <span className="font-semibold text-rose-800 dark:text-rose-300">Void Agreement (Sec 2(g))</span>
              <p className="text-[10px] text-muted">Void ab initio; e.g. minor agreement (Mohori Bibee)</p>
            </div>
            <div className="rounded-lg bg-surface p-2 border border-rose-200 dark:border-rose-900/40">
              <span className="font-semibold text-rose-800 dark:text-rose-300">Void Contract (Sec 2(j))</span>
              <p className="text-[10px] text-muted">Ceases enforceability (Sec 56 Frustration / Destruction)</p>
            </div>
            <div className="rounded-lg bg-surface p-2 border border-rose-200 dark:border-rose-900/40">
              <span className="font-semibold text-rose-800 dark:text-rose-300">Illegal Agreement (Sec 23)</span>
              <p className="text-[10px] text-muted">Forbidden by law / criminal; collaterals also void</p>
            </div>
            <div className="rounded-lg bg-surface p-2 border border-line">
              <span className="font-semibold text-ink-soft">Unenforceable Contract</span>
              <p className="text-[10px] text-muted">Good in substance; barred by technical defect/limitation</p>
            </div>
          </div>
        </div>

        {/* Branch 2: Mode of Formation */}
        <div className="rounded-xl border border-line bg-bg-warm/40 p-4 space-y-2">
          <div className="flex items-center gap-2 pb-2 border-b border-line">
            <span className="flex size-5 items-center justify-center rounded-full bg-accent text-white text-[10px] font-bold">
              2
            </span>
            <h5 className="font-serif text-xs font-bold text-ink">
              By Mode of Formation
            </h5>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="rounded-lg bg-surface p-2 border border-line">
              <span className="font-semibold text-ink">Express Contract (Sec 9)</span>
              <p className="text-[10px] text-muted">Formed via explicit spoken words or formal written document</p>
            </div>
            <div className="rounded-lg bg-surface p-2 border border-line">
              <span className="font-semibold text-ink">Implied / Tacit Contract (Sec 9)</span>
              <p className="text-[10px] text-muted">Formed by conduct (e.g. boarding city bus, withdrawing at ATM)</p>
            </div>
            <div className="rounded-lg bg-surface p-2 border border-line">
              <span className="font-semibold text-ink">Quasi-Contract (Sec 68–72)</span>
              <p className="text-[10px] text-muted">Law creates obligation to prevent unjust enrichment (Finder of goods)</p>
            </div>
            <div className="rounded-lg bg-surface p-2 border border-line">
              <span className="font-semibold text-ink">E-Contract (IT Act Sec 10A)</span>
              <p className="text-[10px] text-muted">Formed digitally: Click-wrap, Shrink-wrap, EDI, digital signatures</p>
            </div>
          </div>
        </div>

        {/* Branch 3: Extent of Performance */}
        <div className="rounded-xl border border-line bg-bg-warm/40 p-4 space-y-2">
          <div className="flex items-center gap-2 pb-2 border-b border-line">
            <span className="flex size-5 items-center justify-center rounded-full bg-sky-600 text-white text-[10px] font-bold">
              3
            </span>
            <h5 className="font-serif text-xs font-bold text-ink">
              By Extent of Performance
            </h5>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="rounded-lg bg-surface p-2 border border-emerald-200 dark:border-emerald-900/40">
              <span className="font-semibold text-emerald-800 dark:text-emerald-300">Executed Contract</span>
              <p className="text-[10px] text-muted">Both parties have fully performed their obligations (Spot cash sale)</p>
            </div>
            <div className="rounded-lg bg-surface p-2 border border-sky-200 dark:border-sky-900/40">
              <span className="font-semibold text-sky-800 dark:text-sky-300">Executory: Unilateral</span>
              <p className="text-[10px] text-muted">One party has performed; other party's promise is pending (Lost pet reward)</p>
            </div>
            <div className="rounded-lg bg-surface p-2 border border-sky-200 dark:border-sky-900/40">
              <span className="font-semibold text-sky-800 dark:text-sky-300">Executory: Bilateral</span>
              <p className="text-[10px] text-muted">Both parties exchange reciprocal promises for future execution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
