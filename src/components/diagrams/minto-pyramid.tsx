import { Layers, Target, CheckCircle2, Database, ArrowDown } from "lucide-react";

export function MintoPyramidDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <Layers className="size-3.5" />
          Executive Communication Architecture
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          The Minto Pyramid Principle
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          Developed by Barbara Minto (McKinsey & Co.). Top-down deductive hierarchy structuring information to minimize executive cognitive load.
        </p>
      </div>

      {/* Tier 1: Apex Governing Thought */}
      <div className="mx-auto max-w-xl">
        <div className="rounded-xl border-2 border-[#1E293B] bg-[#FFFFFF] p-4 text-center shadow-xs transition-all duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] mb-2.5">
            <span className="rounded-md bg-[#1E293B] text-white px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-widest">
              Level 1 • The Apex (BLUF)
            </span>
            <span className="text-[11px] font-bold text-[#475569]">Bottom Line Up Front</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Target className="size-5 text-[#1E293B]" />
            <h5 className="font-serif text-lg font-bold text-[#0F172A]">
              Governing Thought / Core Recommendation
            </h5>
          </div>
          <p className="mt-1 font-sans text-xs font-medium text-[#334155]">
            Single decisive answer solving the executive's core strategic question immediately.
          </p>
          <div className="mt-2 text-[11px] font-semibold text-[#1E293B] bg-[#F1F5F9] rounded py-1 px-2 border border-[#CBD5E1]">
            Answers: "What must we decide or execute today?"
          </div>
        </div>
      </div>

      {/* Connector */}
      <div className="mx-auto my-2.5 flex justify-center text-[#94A3B8]">
        <ArrowDown className="size-5 text-[#64748B]" />
      </div>

      {/* Tier 2: MECE Supporting Pillars */}
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] bg-[#E2E8F0] px-2 py-0.5 rounded">
            MECE Invariant: Mutually Exclusive, Collectively Exhaustive
          </span>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-[#0284C7] bg-[#FFFFFF] p-3 shadow-xs text-center">
            <div className="rounded bg-[#E0F2FE] px-2 py-0.5 text-[10px] font-bold text-[#0369A1] mb-1.5">
              Pillar 1 • Market Feasibility
            </div>
            <h6 className="font-serif text-xs font-bold text-[#0F172A]">Demand & Value</h6>
            <p className="text-[11px] text-[#475569] mt-1">Validated customer willingness to pay and market friction.</p>
          </div>

          <div className="rounded-xl border border-[#0284C7] bg-[#FFFFFF] p-3 shadow-xs text-center">
            <div className="rounded bg-[#E0F2FE] px-2 py-0.5 text-[10px] font-bold text-[#0369A1] mb-1.5">
              Pillar 2 • Economic Upside
            </div>
            <h6 className="font-serif text-xs font-bold text-[#0F172A]">Margin Decoupling</h6>
            <p className="text-[11px] text-[#475569] mt-1">LTV/CAC ratio &gt; 3x with scalable contribution margins.</p>
          </div>

          <div className="rounded-xl border border-[#0284C7] bg-[#FFFFFF] p-3 shadow-xs text-center">
            <div className="rounded bg-[#E0F2FE] px-2 py-0.5 text-[10px] font-bold text-[#0369A1] mb-1.5">
              Pillar 3 • Operational Moat
            </div>
            <h6 className="font-serif text-xs font-bold text-[#0F172A]">Execution & Barrier</h6>
            <p className="text-[11px] text-[#475569] mt-1">Regulatory compliance, IP defensibility, and network lock-in.</p>
          </div>
        </div>
      </div>

      {/* Connector */}
      <div className="mx-auto my-2.5 flex justify-center text-[#94A3B8]">
        <ArrowDown className="size-5 text-[#64748B]" />
      </div>

      {/* Tier 3: Granular Proof Points & Data */}
      <div className="mx-auto max-w-2xl rounded-xl border border-[#CBD5E1] bg-[#FFFFFF] p-3.5 shadow-xs">
        <div className="flex items-center justify-between pb-1.5 border-b border-[#E2E8F0] mb-2">
          <span className="rounded-md bg-[#334155] text-white px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider">
            Level 3 • Foundational Evidence & Data
          </span>
          <span className="text-[10px] font-bold text-[#64748B]">Granular Proof Mechanisms</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs">
          <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
            <span className="font-bold text-[#0F172A] block flex items-center justify-center gap-1">
              <Database className="size-3 text-[#64748B]" /> Empirical Metrics
            </span>
            <p className="text-[10px] text-[#475569] mt-0.5">Cohort retention curves, GPV/Take rate, CAC payback months.</p>
          </div>
          <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
            <span className="font-bold text-[#0F172A] block flex items-center justify-center gap-1">
              <CheckCircle2 className="size-3 text-[#059669]" /> Field Proof Points
            </span>
            <p className="text-[10px] text-[#475569] mt-0.5">Pilot case studies, enterprise MOUs, verified audit logs.</p>
          </div>
          <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
            <span className="font-bold text-[#0F172A] block flex items-center justify-center gap-1">
              <Layers className="size-3 text-[#0284C7]" /> Sensitivity Models
            </span>
            <p className="text-[10px] text-[#475569] mt-0.5">Worst-case stress tests, regulatory compliance pathways.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
