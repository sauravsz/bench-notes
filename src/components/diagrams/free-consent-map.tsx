import { AlertTriangle, CheckCircle2, ShieldAlert, Sparkles, XCircle } from "lucide-react";

export function FreeConsentMapDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-line bg-surface p-4 sm:p-6 shadow-sm">
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-accent">
          <ShieldAlert className="size-3.5" />
          Vitiating Factors Matrix
        </span>
        <h4 className="mt-2 font-serif text-xl font-bold text-ink">
          Consent vs. Free Consent (Section 13 & 14)
        </h4>
        <p className="mt-1 font-sans text-xs text-muted max-w-xl mx-auto">
          Consent is genuine meeting of minds (Consensus ad idem). Free consent requires the total absence of the five statutory vitiating factors.
        </p>
      </div>

      <div className="mx-auto max-w-md rounded-xl border border-line bg-bg-warm/50 p-3 text-center mb-6">
        <span className="font-serif text-sm font-bold text-ink block">
          Section 13: Consent (Consensus ad idem)
        </span>
        <span className="text-xs text-muted">
          Two or more persons agreeing upon the SAME THING in the SAME SENSE
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {/* Coercion */}
        <div className="rounded-lg border border-amber-300 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-1 border-b border-amber-200 dark:border-amber-900/40">
              <span className="font-serif text-xs font-bold text-amber-950 dark:text-amber-200">1. Coercion</span>
              <span className="text-[10px] font-bold text-accent">Section 15</span>
            </div>
            <p className="mt-2 text-[11px] text-ink-soft leading-relaxed">
              Committing/threatening acts forbidden by IPC, or unlawful property detention (*Chikham Amiraju suicide threat*).
            </p>
          </div>
          <div className="mt-2 text-center text-[10px] font-bold text-amber-800 dark:text-amber-300 bg-amber-100/80 dark:bg-amber-900/50 rounded py-0.5">
            Effect: Voidable (Sec 19)
          </div>
        </div>

        {/* Undue Influence */}
        <div className="rounded-lg border border-amber-300 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-1 border-b border-amber-200 dark:border-amber-900/40">
              <span className="font-serif text-xs font-bold text-amber-950 dark:text-amber-200">2. Undue Influence</span>
              <span className="text-[10px] font-bold text-accent">Section 16</span>
            </div>
            <p className="mt-2 text-[11px] text-ink-soft leading-relaxed">
              Dominating the will of another through fiduciary relation, authority, or mental distress (*Mannu Singh v. Umadat*).
            </p>
          </div>
          <div className="mt-2 text-center text-[10px] font-bold text-amber-800 dark:text-amber-300 bg-amber-100/80 dark:bg-amber-900/50 rounded py-0.5">
            Effect: Voidable (Sec 19A)
          </div>
        </div>

        {/* Fraud */}
        <div className="rounded-lg border border-amber-300 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-1 border-b border-amber-200 dark:border-amber-900/40">
              <span className="font-serif text-xs font-bold text-amber-950 dark:text-amber-200">3. Fraud</span>
              <span className="text-[10px] font-bold text-accent">Section 17</span>
            </div>
            <p className="mt-2 text-[11px] text-ink-soft leading-relaxed">
              Intentional false assertion without belief in truth, active concealment, or deceitful promises (*Derry v. Peek*).
            </p>
          </div>
          <div className="mt-2 text-center text-[10px] font-bold text-amber-800 dark:text-amber-300 bg-amber-100/80 dark:bg-amber-900/50 rounded py-0.5">
            Effect: Voidable + Damages (Sec 19)
          </div>
        </div>

        {/* Misrepresentation */}
        <div className="rounded-lg border border-amber-300 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-1 border-b border-amber-200 dark:border-amber-900/40">
              <span className="font-serif text-xs font-bold text-amber-950 dark:text-amber-200">4. Misrepresentation</span>
              <span className="text-[10px] font-bold text-accent">Section 18</span>
            </div>
            <p className="mt-2 text-[11px] text-ink-soft leading-relaxed">
              Innocent false statement made without intention to deceive, believing it to be true.
            </p>
          </div>
          <div className="mt-2 text-center text-[10px] font-bold text-amber-800 dark:text-amber-300 bg-amber-100/80 dark:bg-amber-900/50 rounded py-0.5">
            Effect: Voidable (Sec 19)
          </div>
        </div>

        {/* Bilateral Mistake */}
        <div className="rounded-lg border border-rose-300 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/20 p-3 flex flex-col justify-between sm:col-span-2 md:col-span-2">
          <div>
            <div className="flex items-center justify-between pb-1 border-b border-rose-200 dark:border-rose-900/40">
              <span className="font-serif text-xs font-bold text-rose-950 dark:text-rose-200">5. Bilateral Mistake of Essential Fact</span>
              <span className="text-[10px] font-bold text-rose-600">Section 20</span>
            </div>
            <p className="mt-2 text-[11px] text-ink-soft leading-relaxed">
              Both parties under a mutual mistake regarding a matter of fact essential to the agreement (e.g. subject matter already destroyed before contract).
            </p>
          </div>
          <div className="mt-2 text-center text-[10px] font-bold text-rose-800 dark:text-rose-300 bg-rose-100/80 dark:bg-rose-900/50 rounded py-0.5">
            Effect: Completely Void ab initio (No Contract)
          </div>
        </div>
      </div>
    </div>
  );
}
