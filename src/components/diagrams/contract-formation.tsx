import { CheckCircle2, FileText, Handshake, ShieldCheck } from "lucide-react";

export function ContractFormationDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-line bg-surface p-5 sm:p-7 shadow-sm">
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-primary">
          <Handshake className="size-3.5" />
          The Statutory Staircase
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-ink">
          The Path from Proposal to Legally Enforceable Contract
        </h4>
        <p className="mt-1 font-sans text-xs text-muted max-w-xl mx-auto leading-relaxed">
          How reciprocal promises convert into binding commercial agreements under the Indian Contract Act, 1872.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Step 1: Promise Formation */}
        <div className="rounded-xl border border-line bg-bg-warm/60 p-4 flex flex-col justify-between shadow-2xs transition-all duration-200 ios-card">
          <div>
            <div className="flex items-center justify-between pb-2.5 border-b border-line mb-3">
              <span className="rounded-md bg-accent px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider text-white">
                Stage 1
              </span>
              <span className="text-xs font-bold text-ink">Sec 2(a) + Sec 2(b)</span>
            </div>
            <div className="space-y-2 text-center">
              <div className="rounded-lg bg-surface p-3 border border-line shadow-2xs">
                <span className="font-serif text-sm font-bold text-ink block">Proposal / Offer</span>
                <span className="text-[11px] text-ink-soft block mt-0.5">Willingness to do or abstain (Sec 2(a))</span>
              </div>
              <div className="flex justify-center text-ink font-bold text-sm">+</div>
              <div className="rounded-lg bg-surface p-3 border border-line shadow-2xs">
                <span className="font-serif text-sm font-bold text-ink block">Assent (Acceptance)</span>
                <span className="text-[11px] text-ink-soft block mt-0.5">Unqualified assent to proposal (Sec 2(b))</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-line text-center bg-accent/15 rounded-lg p-2.5 border border-accent/30">
            <span className="text-xs font-bold text-accent block uppercase tracking-wide">= PROMISE (SEC 2(B))</span>
            <span className="text-[11px] text-ink-soft font-medium">An accepted proposal becomes a promise</span>
          </div>
        </div>

        {/* Step 2: Agreement Formation */}
        <div className="rounded-xl border border-sky-300 dark:border-sky-800 bg-sky-50/70 dark:bg-sky-950/20 p-4 flex flex-col justify-between shadow-2xs transition-all duration-200 ios-card">
          <div>
            <div className="flex items-center justify-between pb-2.5 border-b border-sky-300 dark:border-sky-900 mb-3">
              <span className="rounded-md bg-sky-700 px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider text-white">
                Stage 2
              </span>
              <span className="text-xs font-bold text-sky-900 dark:text-sky-200">Sec 2(e) + Sec 2(d)</span>
            </div>
            <div className="space-y-2 text-center">
              <div className="rounded-lg bg-surface p-3 border border-line shadow-2xs">
                <span className="font-serif text-sm font-bold text-ink block">Promise(s)</span>
                <span className="text-[11px] text-ink-soft block mt-0.5">Consensus ad idem between parties</span>
              </div>
              <div className="flex justify-center text-ink font-bold text-sm">+</div>
              <div className="rounded-lg bg-surface p-3 border border-line shadow-2xs">
                <span className="font-serif text-sm font-bold text-ink block">Lawful Consideration</span>
                <span className="text-[11px] text-ink-soft block mt-0.5">Quid pro quo at promisor's desire (Sec 2(d))</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-sky-300 dark:border-sky-900 text-center bg-sky-100 dark:bg-sky-900/50 rounded-lg p-2.5 border border-sky-300 dark:border-sky-800">
            <span className="text-xs font-bold text-sky-900 dark:text-sky-100 block uppercase tracking-wide">= AGREEMENT (GENUS)</span>
            <span className="text-[11px] text-sky-900 dark:text-sky-200 font-medium">Reciprocal promises + consideration</span>
          </div>
        </div>

        {/* Step 3: Contract Formation */}
        <div className="rounded-xl border-2 border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/30 p-4 flex flex-col justify-between shadow-md transition-all duration-200 ios-card">
          <div>
            <div className="flex items-center justify-between pb-2.5 border-b border-emerald-300 dark:border-emerald-800 mb-3">
              <span className="rounded-md bg-emerald-700 px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider text-white">
                Stage 3: Enforceability
              </span>
              <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200">Sec 2(h) + Sec 10</span>
            </div>
            <div className="space-y-2 text-center">
              <div className="rounded-lg bg-surface p-3 border border-line shadow-2xs">
                <span className="font-serif text-sm font-bold text-ink block">Agreement</span>
                <span className="text-[11px] text-ink-soft block mt-0.5">Mutual promises & valid consideration</span>
              </div>
              <div className="flex justify-center text-ink font-bold text-sm">+</div>
              <div className="rounded-lg bg-surface p-3 border border-emerald-300 dark:border-emerald-800 shadow-2xs">
                <span className="font-serif text-sm font-bold text-ink block">Section 10 Essentials</span>
                <span className="text-[11px] font-medium text-emerald-900 dark:text-emerald-300 block mt-0.5">Capacity • Free Consent • Lawful Object</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-emerald-300 dark:border-emerald-800 text-center bg-emerald-700 text-white rounded-lg p-2.5 shadow-sm">
            <span className="text-xs font-bold block uppercase tracking-wide flex items-center justify-center gap-1.5">
              <ShieldCheck className="size-4" />
              = VALID CONTRACT (SPECIES)
            </span>
            <span className="text-[11px] text-emerald-100 font-medium">Legally Enforceable in Court (Sec 2(h))</span>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-bg-warm/70 p-3.5 text-center border border-line/80">
        <p className="font-serif text-xs font-semibold text-ink leading-relaxed">
          "All contracts are agreements because every contract begins as an agreement; but all agreements are not contracts because bare social arrangements and void bargains lack Section 10 legal enforceability."
        </p>
      </div>
    </div>
  );
}
