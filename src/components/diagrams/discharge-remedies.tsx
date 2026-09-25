import { CheckCheck, Flame, Hourglass, Scale, ShieldAlert, XCircle } from "lucide-react";

export function DischargeRemediesDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-line bg-surface p-4 sm:p-6 shadow-sm space-y-6">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-primary">
          <Scale className="size-3.5" />
          Life-Cycle & Breach Architecture
        </span>
        <h4 className="mt-2 font-serif text-xl font-bold text-ink">
          Modes of Discharge and Remedies for Breach
        </h4>
        <p className="mt-1 font-sans text-xs text-muted max-w-xl mx-auto">
          Part I: The six statutory ways a contract terminates. Part II: The five civil judicial remedies available to the aggrieved party upon breach.
        </p>
      </div>

      {/* Part I: Modes of Discharge */}
      <div>
        <h5 className="font-serif text-sm font-bold text-primary mb-3 flex items-center gap-1.5">
          <CheckCheck className="size-4" />
          Part I: The 6 Modes of Discharge of Contract
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
          <div className="rounded-lg border border-line bg-bg-warm/50 p-2.5">
            <span className="font-semibold text-ink block">1. By Performance (Sec 37–38)</span>
            <p className="text-[10px] text-muted mt-0.5">Actual complete fulfillment or valid tender refused.</p>
          </div>
          <div className="rounded-lg border border-line bg-bg-warm/50 p-2.5">
            <span className="font-semibold text-ink block">2. Mutual Consent (Sec 62–63)</span>
            <p className="text-[10px] text-muted mt-0.5">Novation (new contract), Rescission, Alteration, Remission.</p>
          </div>
          <div className="rounded-lg border border-line bg-bg-warm/50 p-2.5">
            <span className="font-semibold text-ink block">3. Frustration / Impossibility (Sec 56)</span>
            <p className="text-[10px] text-muted mt-0.5">Subject matter destruction (Taylor v. Caldwell), law change.</p>
          </div>
          <div className="rounded-lg border border-line bg-bg-warm/50 p-2.5">
            <span className="font-semibold text-ink block">4. Lapse of Time</span>
            <p className="text-[10px] text-muted mt-0.5">Expiry of Limitation Act period (e.g. 3 years for debt recovery).</p>
          </div>
          <div className="rounded-lg border border-line bg-bg-warm/50 p-2.5">
            <span className="font-semibold text-ink block">5. Operation of Law</span>
            <p className="text-[10px] text-muted mt-0.5">Death (personal skills), Insolvency, Merger, Material alteration.</p>
          </div>
          <div className="rounded-lg border border-rose-200 dark:border-rose-900/40 bg-rose-50/40 dark:bg-rose-950/20 p-2.5">
            <span className="font-semibold text-rose-800 dark:text-rose-300 block">6. Breach of Contract (Sec 39)</span>
            <p className="text-[10px] text-muted mt-0.5">Actual breach (on due date) or Anticipatory (repudiation before date).</p>
          </div>
        </div>
      </div>

      {/* Part II: Remedies for Breach */}
      <div className="pt-4 border-t border-line/80">
        <h5 className="font-serif text-sm font-bold text-accent mb-3 flex items-center gap-1.5">
          <ShieldAlert className="size-4" />
          Part II: The 5 Judicial Remedies on Breach
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 text-xs text-center">
          <div className="rounded-lg border border-line bg-surface p-2.5 shadow-2xs">
            <span className="font-semibold text-ink block">1. Rescission</span>
            <p className="text-[10px] text-muted mt-0.5">Cancel contract & claim restitution (Sec 65)</p>
          </div>
          <div className="rounded-lg border border-line bg-surface p-2.5 shadow-2xs">
            <span className="font-semibold text-ink block">2. Damages</span>
            <p className="text-[10px] text-muted mt-0.5">Ordinary & Special damages (*Hadley v. Baxendale*)</p>
          </div>
          <div className="rounded-lg border border-line bg-surface p-2.5 shadow-2xs">
            <span className="font-semibold text-ink block">3. Quantum Meruit</span>
            <p className="text-[10px] text-muted mt-0.5">Compensation for work actually done (*Planche v. Colburn*)</p>
          </div>
          <div className="rounded-lg border border-line bg-surface p-2.5 shadow-2xs">
            <span className="font-semibold text-ink block">4. Specific Performance</span>
            <p className="text-[10px] text-muted mt-0.5">Direct court order to perform (Unique land/goods)</p>
          </div>
          <div className="rounded-lg border border-line bg-surface p-2.5 shadow-2xs">
            <span className="font-semibold text-ink block">5. Injunction</span>
            <p className="text-[10px] text-muted mt-0.5">Court order restraining negative covenant (*Lumley v. Wagner*)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
