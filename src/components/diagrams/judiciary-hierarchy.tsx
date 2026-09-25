import { Building2, Gavel, Landmark, Scale, Shield, Users } from "lucide-react";

export function JudiciaryHierarchyDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-line bg-surface p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-accent">
          <Scale className="size-3.5" />
          Single Unified Judicial Pyramid
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-ink">
          Hierarchy of the Indian Judicial System
        </h4>
        <p className="mt-1 font-sans text-xs text-muted max-w-xl mx-auto leading-relaxed">
          Article 141 makes Supreme Court rulings binding nationwide. Subordinate district courts bifurcate into three distinct operational streams.
        </p>
      </div>

      {/* Tier 1: Supreme Court */}
      <div className="mx-auto max-w-lg">
        <div className="rounded-xl border-2 border-primary bg-primary/5 p-4 text-center shadow-xs">
          <span className="inline-block rounded-full bg-primary px-3 py-0.5 font-sans text-[10px] font-bold uppercase tracking-widest text-surface mb-1">
            Apex Constitutional Court
          </span>
          <div className="flex items-center justify-center gap-2 mt-1">
            <Landmark className="size-5 text-primary" />
            <h5 className="font-serif text-lg font-bold text-ink">
              Supreme Court of India (New Delhi)
            </h5>
          </div>
          <p className="mt-1 font-sans text-xs font-medium text-ink-soft">
            Headed by the Chief Justice of India (CJI) + 33 Judges
          </p>
          <div className="mt-2.5 flex flex-wrap justify-center gap-1.5 text-[11px] font-medium">
            <span className="rounded-md bg-surface px-2 py-0.5 border border-primary/30 text-primary">Original (Art 131)</span>
            <span className="rounded-md bg-surface px-2 py-0.5 border border-primary/30 text-primary">Writ (Art 32)</span>
            <span className="rounded-md bg-surface px-2 py-0.5 border border-primary/30 text-primary">Appellate (Art 132–134)</span>
            <span className="rounded-md bg-surface px-2 py-0.5 border border-primary/30 text-primary">SLP (Art 136)</span>
            <span className="rounded-md bg-surface px-2 py-0.5 border border-primary/30 text-primary">Advisory (Art 143)</span>
          </div>
        </div>
      </div>

      {/* Connector line */}
      <div className="mx-auto my-3 flex h-6 w-0.5 justify-center bg-primary/40" />

      {/* Tier 2: High Courts */}
      <div className="mx-auto max-w-md">
        <div className="rounded-xl border border-secondary/60 bg-secondary/5 p-3.5 text-center shadow-xs">
          <span className="inline-block rounded-full bg-secondary px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider text-surface mb-1">
            State / UT Apex Authority
          </span>
          <div className="flex items-center justify-center gap-2">
            <Building2 className="size-4.5 text-secondary" />
            <h5 className="font-serif text-base font-bold text-ink">
              High Courts of India (25 High Courts)
            </h5>
          </div>
          <p className="mt-0.5 font-sans text-xs text-ink-soft">
            Headed by Chief Justice of the High Court
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-1.5 text-[11px] font-medium">
            <span className="rounded-md bg-surface px-2 py-0.5 border border-secondary/30 text-secondary">Expansive Writs (Art 226)</span>
            <span className="rounded-md bg-surface px-2 py-0.5 border border-secondary/30 text-secondary">Superintendence (Art 227)</span>
            <span className="rounded-md bg-surface px-2 py-0.5 border border-secondary/30 text-secondary">Appeals</span>
          </div>
        </div>
      </div>

      {/* Connector Fork */}
      <div className="relative my-4">
        <div className="mx-auto h-4 w-0.5 bg-line" />
        <div className="mx-auto hidden sm:block h-0.5 w-[75%] bg-line" />
        <div className="hidden sm:flex justify-between max-w-[75%] mx-auto">
          <div className="h-4 w-0.5 bg-line" />
          <div className="h-4 w-0.5 bg-line" />
          <div className="h-4 w-0.5 bg-line" />
        </div>
      </div>

      {/* Tier 3: Subordinate Courts (3 Specialized Streams) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Civil Courts Stream */}
        <div className="rounded-xl border-2 border-sky-400 dark:border-sky-800 bg-sky-50/50 dark:bg-sky-950/20 p-4">
          <div className="flex items-center gap-2 pb-2.5 border-b border-sky-200 dark:border-sky-900">
            <span className="flex size-6 items-center justify-center rounded-full bg-sky-600 text-white text-xs font-bold">
              1
            </span>
            <div>
              <h6 className="font-serif text-sm font-bold text-ink">
                Civil Courts Stream
              </h6>
              <span className="text-[11px] font-medium text-sky-700 dark:text-sky-300">
                Contracts, Property, Torts (CPC 1908)
              </span>
            </div>
          </div>
          <div className="mt-3 space-y-2 text-xs">
            <div className="rounded-lg bg-surface p-2.5 border border-line shadow-2xs">
              <span className="font-bold text-ink block">District Judge (Principal Court)</span>
              <p className="text-[11px] text-muted">Unlimited Pecuniary Jurisdiction</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-line shadow-2xs">
              <span className="font-bold text-ink block">Senior Civil Judge / Sub-Judge</span>
              <p className="text-[11px] text-muted">Commercial Recovery & Titles</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-line shadow-2xs">
              <span className="font-bold text-ink block">Junior Civil Judge / Munsif</span>
              <p className="text-[11px] text-muted">Lower valuation suits & evictions</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-line shadow-2xs">
              <span className="font-bold text-ink block">Family & Small Causes Courts</span>
              <p className="text-[11px] text-muted">Matrimonial & Summary Debt Suits</p>
            </div>
          </div>
          <div className="mt-3 text-center text-[10px] font-bold text-sky-800 dark:text-sky-200 bg-sky-100 dark:bg-sky-900/60 rounded-md py-1">
            Standard: Preponderance of Probabilities
          </div>
        </div>

        {/* Criminal Courts Stream */}
        <div className="rounded-xl border-2 border-rose-400 dark:border-rose-800 bg-rose-50/50 dark:bg-rose-950/20 p-4">
          <div className="flex items-center gap-2 pb-2.5 border-b border-rose-200 dark:border-rose-900">
            <span className="flex size-6 items-center justify-center rounded-full bg-rose-600 text-white text-xs font-bold">
              2
            </span>
            <div>
              <h6 className="font-serif text-sm font-bold text-ink">
                Criminal Courts Stream
              </h6>
              <span className="text-[11px] font-medium text-rose-700 dark:text-rose-300">
                Offences, Penalties (BNSS/CrPC)
              </span>
            </div>
          </div>
          <div className="mt-3 space-y-2 text-xs">
            <div className="rounded-lg bg-surface p-2.5 border border-line shadow-2xs">
              <span className="font-bold text-ink block">Sessions Judge / Addl. Sessions</span>
              <p className="text-[11px] text-muted">Heinous Offences (Death Sentence / Life)</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-line shadow-2xs">
              <span className="font-bold text-ink block">Chief Judicial Magistrate (CJM)</span>
              <p className="text-[11px] text-muted">Imprisonment up to 7 years + fine</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-line shadow-2xs">
              <span className="font-bold text-ink block">Judicial Magistrate 1st Class (JMFC)</span>
              <p className="text-[11px] text-muted">Up to 3 yrs • Sec 138 NI Act Cheque Cases</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-line shadow-2xs">
              <span className="font-bold text-ink block">Judicial Magistrate 2nd Class</span>
              <p className="text-[11px] text-muted">Up to 1 yr imprisonment / petty fines</p>
            </div>
          </div>
          <div className="mt-3 text-center text-[10px] font-bold text-rose-800 dark:text-rose-200 bg-rose-100 dark:bg-rose-900/60 rounded-md py-1">
            Standard: Proof Beyond Reasonable Doubt
          </div>
        </div>

        {/* Revenue Courts Stream */}
        <div className="rounded-xl border-2 border-amber-400 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 p-4">
          <div className="flex items-center gap-2 pb-2.5 border-b border-amber-200 dark:border-amber-900">
            <span className="flex size-6 items-center justify-center rounded-full bg-amber-600 text-white text-xs font-bold">
              3
            </span>
            <div>
              <h6 className="font-serif text-sm font-bold text-ink">
                Revenue Courts Stream
              </h6>
              <span className="text-[11px] font-medium text-amber-700 dark:text-amber-300">
                Land Tenancy, Mutations & Revenue
              </span>
            </div>
          </div>
          <div className="mt-3 space-y-2 text-xs">
            <div className="rounded-lg bg-surface p-2.5 border border-line shadow-2xs">
              <span className="font-bold text-ink block">Board of Revenue</span>
              <p className="text-[11px] text-muted">State apex revenue appellate authority</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-line shadow-2xs">
              <span className="font-bold text-ink block">Divisional Commissioner</span>
              <p className="text-[11px] text-muted">Appeals over District Collectors</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-line shadow-2xs">
              <span className="font-bold text-ink block">Collector / District Magistrate</span>
              <p className="text-[11px] text-muted">District head of land & revenue</p>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-line shadow-2xs">
              <span className="font-bold text-ink block">Tehsildar & Naib Tehsildar</span>
              <p className="text-[11px] text-muted">Primary original court for land mutations</p>
            </div>
          </div>
          <div className="mt-3 text-center text-[10px] font-bold text-amber-800 dark:text-amber-200 bg-amber-100 dark:bg-amber-900/60 rounded-md py-1">
            Governed by State Land Revenue Codes
          </div>
        </div>
      </div>

      {/* Tier 4: Grassroots ADR */}
      <div className="mt-5 rounded-xl border border-emerald-400 bg-emerald-50/80 dark:border-emerald-800 dark:bg-emerald-950/30 p-3.5 text-center">
        <div className="flex items-center justify-center gap-2">
          <Users className="size-4.5 text-emerald-700 dark:text-emerald-300" />
          <span className="font-serif text-sm font-bold text-emerald-950 dark:text-emerald-100">
            Grassroots Alternative Dispute Resolution: Lok Adalats & Nyaya Panchayats
          </span>
        </div>
        <p className="mt-1 font-sans text-xs text-emerald-800 dark:text-emerald-300 max-w-2xl mx-auto">
          Operate under Legal Services Authorities Act, 1987 • Zero court fees • Amicable conciliation • Award is final with the binding status of a civil court decree (No Right of Appeal).
        </p>
      </div>
    </div>
  );
}
