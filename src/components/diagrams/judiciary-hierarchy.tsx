import { Building2, Landmark, Scale, Users } from "lucide-react";

export function JudiciaryHierarchyDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Title */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <Scale className="size-3.5" />
          Single Unified Judicial Pyramid
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          Hierarchy of the Indian Judicial System
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          Article 141 makes Supreme Court rulings binding nationwide. Subordinate district courts bifurcate into three distinct operational streams.
        </p>
      </div>

      {/* Tier 1: Supreme Court */}
      <div className="mx-auto max-w-xl">
        <div className="rounded-xl border-2 border-[#1E293B] bg-[#FFFFFF] p-4 text-center shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] mb-2.5">
            <span className="rounded-md bg-[#1E293B] text-white px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-widest">
              Tier 1 • Apex Constitutional Court
            </span>
            <span className="text-[11px] font-bold text-[#475569]">New Delhi</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Landmark className="size-5 text-[#1E293B]" />
            <h5 className="font-serif text-lg font-bold text-[#0F172A]">
              Supreme Court of India
            </h5>
          </div>
          <p className="mt-0.5 font-sans text-xs font-medium text-[#334155]">
            Headed by the Chief Justice of India (CJI) + 33 Judges
          </p>
          <div className="mt-2.5 flex flex-wrap justify-center gap-1.5 text-[11px] font-semibold">
            <span className="rounded-md bg-[#F1F5F9] px-2.5 py-0.5 border border-[#CBD5E1] text-[#0F172A]">
              Original (Art 131)
            </span>
            <span className="rounded-md bg-[#F1F5F9] px-2.5 py-0.5 border border-[#CBD5E1] text-[#0F172A]">
              Writ (Art 32)
            </span>
            <span className="rounded-md bg-[#F1F5F9] px-2.5 py-0.5 border border-[#CBD5E1] text-[#0F172A]">
              Appellate (Art 132–134)
            </span>
            <span className="rounded-md bg-[#F1F5F9] px-2.5 py-0.5 border border-[#CBD5E1] text-[#0F172A]">
              SLP (Art 136)
            </span>
            <span className="rounded-md bg-[#F1F5F9] px-2.5 py-0.5 border border-[#CBD5E1] text-[#0F172A]">
              Advisory (Art 143)
            </span>
          </div>
        </div>
      </div>

      {/* Connector line */}
      <div className="mx-auto my-2.5 flex h-5 w-0.5 justify-center bg-[#94A3B8]" />

      {/* Tier 2: High Courts */}
      <div className="mx-auto max-w-xl">
        <div className="rounded-xl border border-[#475569] bg-[#FFFFFF] p-3.5 text-center shadow-xs">
          <div className="flex items-center justify-between pb-1.5 border-b border-[#E2E8F0] mb-2">
            <span className="rounded-md bg-[#334155] text-white px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider">
              Tier 2 • State / UT Apex Authority
            </span>
            <span className="text-[11px] font-bold text-[#475569]">25 High Courts</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Building2 className="size-4.5 text-[#334155]" />
            <h5 className="font-serif text-base font-bold text-[#0F172A]">
              High Courts of India
            </h5>
          </div>
          <p className="mt-0.5 font-sans text-xs font-medium text-[#334155]">
            Headed by Chief Justice of the respective State High Court
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-1.5 text-[11px] font-semibold">
            <span className="rounded-md bg-[#F1F5F9] px-2.5 py-0.5 border border-[#CBD5E1] text-[#0F172A]">
              Expansive Writs (Art 226)
            </span>
            <span className="rounded-md bg-[#F1F5F9] px-2.5 py-0.5 border border-[#CBD5E1] text-[#0F172A]">
              Superintendence (Art 227)
            </span>
            <span className="rounded-md bg-[#F1F5F9] px-2.5 py-0.5 border border-[#CBD5E1] text-[#0F172A]">
              First & Second Appeals
            </span>
          </div>
        </div>
      </div>

      {/* Connector Fork */}
      <div className="relative my-3">
        <div className="mx-auto h-3.5 w-0.5 bg-[#94A3B8]" />
        <div className="mx-auto hidden sm:block h-0.5 w-[75%] bg-[#94A3B8]" />
        <div className="hidden sm:flex justify-between max-w-[75%] mx-auto">
          <div className="h-3 w-0.5 bg-[#94A3B8]" />
          <div className="h-3 w-0.5 bg-[#94A3B8]" />
          <div className="h-3 w-0.5 bg-[#94A3B8]" />
        </div>
      </div>

      {/* Tier 3: Subordinate District Courts (3 Streams) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Civil Courts Stream */}
        <div className="rounded-xl border-2 border-[#0284C7] bg-[#FFFFFF] p-3.5 flex flex-col justify-between shadow-xs">
          <div>
            <div className="rounded-lg bg-[#0284C7] p-2 text-white mb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="flex size-4.5 items-center justify-center rounded-full bg-white text-[#0284C7] text-[10px] font-bold">
                  1
                </span>
                <h6 className="font-serif text-sm font-bold text-white">
                  Civil Courts Stream
                </h6>
              </div>
              <span className="text-[10px] font-medium text-sky-100 block mt-0.5">
                Contracts, Property, Torts (CPC 1908)
              </span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block">District Judge</span>
                <p className="text-[11px] text-[#475569]">Principal civil court • Unlimited valuation</p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block">Senior Civil Judge / Sub-Judge</span>
                <p className="text-[11px] text-[#475569]">Commercial recovery & title suits</p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block">Junior Civil Judge / Munsif</span>
                <p className="text-[11px] text-[#475569]">Lower claims & eviction suits</p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block">Family & Small Causes Courts</span>
                <p className="text-[11px] text-[#475569]">Matrimonial & summary debt claims</p>
              </div>
            </div>
          </div>
          <div className="mt-2.5 text-center text-[10px] font-bold text-[#0369A1] bg-[#E0F2FE] rounded py-1">
            Standard: Preponderance of Probabilities
          </div>
        </div>

        {/* Criminal Courts Stream */}
        <div className="rounded-xl border-2 border-[#BE123C] bg-[#FFFFFF] p-3.5 flex flex-col justify-between shadow-xs">
          <div>
            <div className="rounded-lg bg-[#BE123C] p-2 text-white mb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="flex size-4.5 items-center justify-center rounded-full bg-white text-[#BE123C] text-[10px] font-bold">
                  2
                </span>
                <h6 className="font-serif text-sm font-bold text-white">
                  Criminal Courts Stream
                </h6>
              </div>
              <span className="text-[10px] font-medium text-rose-100 block mt-0.5">
                Offences, Penalties (BNSS/CrPC)
              </span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block">Sessions Judge / Addl. Sessions</span>
                <p className="text-[11px] text-[#475569]">Heinous offences (Death / Life sentence)</p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block">Chief Judicial Magistrate (CJM)</span>
                <p className="text-[11px] text-[#475569]">Sentencing up to 7 years + fine</p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block">Judicial Magistrate 1st Class</span>
                <p className="text-[11px] text-[#475569]">Up to 3 yrs • Sec 138 NI Act Cheque Cases</p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block">Judicial Magistrate 2nd Class</span>
                <p className="text-[11px] text-[#475569]">Up to 1 yr imprisonment / petty fines</p>
              </div>
            </div>
          </div>
          <div className="mt-2.5 text-center text-[10px] font-bold text-[#9F1239] bg-[#FFE4E6] rounded py-1">
            Standard: Proof Beyond Reasonable Doubt
          </div>
        </div>

        {/* Revenue Courts Stream */}
        <div className="rounded-xl border-2 border-[#B45309] bg-[#FFFFFF] p-3.5 flex flex-col justify-between shadow-xs">
          <div>
            <div className="rounded-lg bg-[#B45309] p-2 text-white mb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="flex size-4.5 items-center justify-center rounded-full bg-white text-[#B45309] text-[10px] font-bold">
                  3
                </span>
                <h6 className="font-serif text-sm font-bold text-white">
                  Revenue Courts Stream
                </h6>
              </div>
              <span className="text-[10px] font-medium text-amber-100 block mt-0.5">
                Land Tenancy, Mutations & Tax
              </span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block">Board of Revenue</span>
                <p className="text-[11px] text-[#475569]">State apex revenue appellate authority</p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block">Divisional Commissioner</span>
                <p className="text-[11px] text-[#475569]">Hears appeals over District Collectors</p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block">Collector / District Magistrate</span>
                <p className="text-[11px] text-[#475569]">Head of district land & revenue records</p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block">Tehsildar & Naib Tehsildar</span>
                <p className="text-[11px] text-[#475569]">Original trial court for land mutations</p>
              </div>
            </div>
          </div>
          <div className="mt-2.5 text-center text-[10px] font-bold text-[#92400E] bg-[#FEF3C7] rounded py-1">
            Governed by State Land Revenue Codes
          </div>
        </div>
      </div>

      {/* Tier 4: Grassroots ADR */}
      <div className="mt-4 rounded-xl border border-[#059669] bg-[#ECFDF5] p-3.5 text-center shadow-2xs">
        <div className="flex items-center justify-center gap-2">
          <Users className="size-4.5 text-[#047857]" />
          <span className="font-serif text-sm font-bold text-[#065F46]">
            Grassroots Alternative Dispute Resolution: Lok Adalats & Nyaya Panchayats
          </span>
        </div>
        <p className="mt-1 font-sans text-xs text-[#064E3B] max-w-2xl mx-auto leading-relaxed">
          Operate under Legal Services Authorities Act, 1987 • Zero court fees • Informal conciliation • Award is final with the binding status of a civil court decree (No Right of Appeal).
        </p>
      </div>
    </div>
  );
}
