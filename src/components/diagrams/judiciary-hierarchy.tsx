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
        <p className="mt-1 font-sans text-xs text-ink-soft max-w-xl mx-auto leading-relaxed">
          Article 141 makes Supreme Court rulings binding nationwide. Subordinate district courts bifurcate into three distinct operational streams.
        </p>
      </div>

      {/* Tier 1: Supreme Court */}
      <div className="mx-auto max-w-xl">
        <div className="rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 p-4 text-center shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-2.5">
            <span className="rounded-md bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-widest">
              Tier 1 • Apex Constitutional Court
            </span>
            <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">New Delhi</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Landmark className="size-5 text-slate-800 dark:text-slate-200" />
            <h5 className="font-serif text-lg font-bold text-ink">
              Supreme Court of India
            </h5>
          </div>
          <p className="mt-0.5 font-sans text-xs text-slate-600 dark:text-slate-400">
            Headed by the Chief Justice of India (CJI) + 33 Judges
          </p>
          <div className="mt-2.5 flex flex-wrap justify-center gap-1.5 text-[11px] font-medium">
            <span className="rounded-md bg-surface px-2.5 py-0.5 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-2xs">
              Original (Art 131)
            </span>
            <span className="rounded-md bg-surface px-2.5 py-0.5 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-2xs">
              Writ (Art 32)
            </span>
            <span className="rounded-md bg-surface px-2.5 py-0.5 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-2xs">
              Appellate (Art 132–134)
            </span>
            <span className="rounded-md bg-surface px-2.5 py-0.5 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-2xs">
              SLP (Art 136)
            </span>
            <span className="rounded-md bg-surface px-2.5 py-0.5 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-2xs">
              Advisory (Art 143)
            </span>
          </div>
        </div>
      </div>

      {/* Connector line */}
      <div className="mx-auto my-2.5 flex h-5 w-0.5 justify-center bg-slate-300 dark:bg-slate-700" />

      {/* Tier 2: High Courts */}
      <div className="mx-auto max-w-lg">
        <div className="rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 p-3.5 text-center shadow-xs">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800 mb-2">
            <span className="rounded-md bg-slate-700 text-white dark:bg-slate-300 dark:text-slate-900 px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider">
              Tier 2 • State / UT Apex Authority
            </span>
            <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">25 High Courts</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Building2 className="size-4.5 text-slate-700 dark:text-slate-300" />
            <h5 className="font-serif text-base font-bold text-ink">
              High Courts of India
            </h5>
          </div>
          <p className="mt-0.5 font-sans text-xs text-slate-600 dark:text-slate-400">
            Headed by Chief Justice of the respective State High Court
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-1.5 text-[11px] font-medium">
            <span className="rounded-md bg-surface px-2.5 py-0.5 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-2xs">
              Expansive Writs (Art 226)
            </span>
            <span className="rounded-md bg-surface px-2.5 py-0.5 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-2xs">
              Superintendence (Art 227)
            </span>
            <span className="rounded-md bg-surface px-2.5 py-0.5 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-2xs">
              First & Second Appeals
            </span>
          </div>
        </div>
      </div>

      {/* Connector Fork */}
      <div className="relative my-3">
        <div className="mx-auto h-3.5 w-0.5 bg-slate-300 dark:bg-slate-700" />
        <div className="mx-auto hidden sm:block h-0.5 w-[75%] bg-slate-300 dark:bg-slate-700" />
        <div className="hidden sm:flex justify-between max-w-[75%] mx-auto">
          <div className="h-3 w-0.5 bg-slate-300 dark:bg-slate-700" />
          <div className="h-3 w-0.5 bg-slate-300 dark:bg-slate-700" />
          <div className="h-3 w-0.5 bg-slate-300 dark:bg-slate-700" />
        </div>
      </div>

      {/* Tier 3: Subordinate District Courts (3 Streams) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Civil Courts Stream */}
        <div className="rounded-xl border border-sky-300 dark:border-sky-800 bg-sky-50/70 dark:bg-sky-950/30 p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-2 border-b border-sky-200 dark:border-sky-800 mb-2.5">
              <span className="flex size-5 items-center justify-center rounded-full bg-sky-700 text-white text-[10px] font-bold">
                1
              </span>
              <div>
                <h6 className="font-serif text-sm font-bold text-slate-900 dark:text-slate-100">
                  Civil Courts Stream
                </h6>
                <span className="text-[11px] font-semibold text-sky-900 dark:text-sky-300 block">
                  Contracts, Property, Torts (CPC 1908)
                </span>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="rounded-lg bg-surface p-2 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <span className="font-bold text-ink block">District Judge</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Principal civil court • Unlimited valuation</p>
              </div>
              <div className="rounded-lg bg-surface p-2 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <span className="font-bold text-ink block">Senior Civil Judge / Sub-Judge</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Commercial recovery & title suits</p>
              </div>
              <div className="rounded-lg bg-surface p-2 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <span className="font-bold text-ink block">Junior Civil Judge / Munsif</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Lower claims & eviction suits</p>
              </div>
              <div className="rounded-lg bg-surface p-2 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <span className="font-bold text-ink block">Family & Small Causes Courts</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Matrimonial & summary debt claims</p>
              </div>
            </div>
          </div>
          <div className="mt-3 text-center text-[10px] font-bold text-sky-950 dark:text-sky-100 bg-sky-200/80 dark:bg-sky-900/60 rounded-md py-1">
            Standard: Preponderance of Probabilities
          </div>
        </div>

        {/* Criminal Courts Stream */}
        <div className="rounded-xl border border-rose-300 dark:border-rose-800 bg-rose-50/70 dark:bg-rose-950/30 p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-2 border-b border-rose-200 dark:border-rose-800 mb-2.5">
              <span className="flex size-5 items-center justify-center rounded-full bg-rose-700 text-white text-[10px] font-bold">
                2
              </span>
              <div>
                <h6 className="font-serif text-sm font-bold text-slate-900 dark:text-slate-100">
                  Criminal Courts Stream
                </h6>
                <span className="text-[11px] font-semibold text-rose-900 dark:text-rose-300 block">
                  Offences, Penalties (BNSS/CrPC)
                </span>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="rounded-lg bg-surface p-2 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <span className="font-bold text-ink block">Sessions Judge / Addl. Sessions</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Heinous offences (Death / Life sentence)</p>
              </div>
              <div className="rounded-lg bg-surface p-2 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <span className="font-bold text-ink block">Chief Judicial Magistrate (CJM)</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Sentencing up to 7 years + fine</p>
              </div>
              <div className="rounded-lg bg-surface p-2 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <span className="font-bold text-ink block">Judicial Magistrate 1st Class</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Up to 3 yrs • Sec 138 NI Act Cheque Cases</p>
              </div>
              <div className="rounded-lg bg-surface p-2 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <span className="font-bold text-ink block">Judicial Magistrate 2nd Class</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Up to 1 yr imprisonment / petty fines</p>
              </div>
            </div>
          </div>
          <div className="mt-3 text-center text-[10px] font-bold text-rose-950 dark:text-rose-100 bg-rose-200/80 dark:bg-rose-900/60 rounded-md py-1">
            Standard: Proof Beyond Reasonable Doubt
          </div>
        </div>

        {/* Revenue Courts Stream */}
        <div className="rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50/70 dark:bg-amber-950/30 p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-2 border-b border-amber-200 dark:border-amber-800 mb-2.5">
              <span className="flex size-5 items-center justify-center rounded-full bg-amber-700 text-white text-[10px] font-bold">
                3
              </span>
              <div>
                <h6 className="font-serif text-sm font-bold text-slate-900 dark:text-slate-100">
                  Revenue Courts Stream
                </h6>
                <span className="text-[11px] font-semibold text-amber-900 dark:text-amber-300 block">
                  Land Tenancy, Mutations & Tax
                </span>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="rounded-lg bg-surface p-2 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <span className="font-bold text-ink block">Board of Revenue</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">State apex revenue appellate authority</p>
              </div>
              <div className="rounded-lg bg-surface p-2 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <span className="font-bold text-ink block">Divisional Commissioner</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Hears appeals over District Collectors</p>
              </div>
              <div className="rounded-lg bg-surface p-2 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <span className="font-bold text-ink block">Collector / District Magistrate</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Head of district land & revenue records</p>
              </div>
              <div className="rounded-lg bg-surface p-2 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <span className="font-bold text-ink block">Tehsildar & Naib Tehsildar</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Original trial court for land mutations</p>
              </div>
            </div>
          </div>
          <div className="mt-3 text-center text-[10px] font-bold text-amber-950 dark:text-amber-100 bg-amber-200/80 dark:bg-amber-900/60 rounded-md py-1">
            Governed by State Land Revenue Codes
          </div>
        </div>
      </div>

      {/* Tier 4: Grassroots ADR */}
      <div className="mt-4 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/70 dark:bg-emerald-950/30 p-3.5 text-center">
        <div className="flex items-center justify-center gap-2">
          <Users className="size-4.5 text-emerald-800 dark:text-emerald-200" />
          <span className="font-serif text-sm font-bold text-emerald-950 dark:text-emerald-100">
            Grassroots Alternative Dispute Resolution: Lok Adalats & Nyaya Panchayats
          </span>
        </div>
        <p className="mt-1 font-sans text-xs text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Operate under Legal Services Authorities Act, 1987 • Zero court fees • Informal conciliation • Award is final with the binding status of a civil court decree (No Right of Appeal).
        </p>
      </div>
    </div>
  );
}
