import { FileCheck, Layers, Sparkles, Zap } from "lucide-react";

export function ContractClassificationDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <Layers className="size-3.5" />
          Three-Dimensional Classification
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          Classification of Contracts under Indian Contract Law
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          Contracts are classified based on (1) Enforceability & Validity, (2) Mode of Formation, and (3) Extent of Performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Branch 1: Enforceability */}
        <div className="rounded-xl border border-[#CBD5E1] bg-[#FFFFFF] p-4 space-y-2.5 shadow-xs">
          <div className="flex items-center gap-2 pb-2 border-b border-[#E2E8F0]">
            <span className="flex size-5.5 items-center justify-center rounded-full bg-[#1E293B] text-white text-[10px] font-bold">
              1
            </span>
            <h5 className="font-serif text-sm font-bold text-[#0F172A]">
              By Enforceability & Validity
            </h5>
          </div>
          <div className="space-y-2 text-xs">
            <div className="rounded-lg bg-[#F0FDF4] p-2.5 border border-[#86EFAC]">
              <span className="font-bold text-[#166534] block">Valid Contract (Sec 2(h))</span>
              <p className="text-[11px] text-[#334155] mt-0.5">Fully enforceable; meets all Sec 10 statutory essentials</p>
            </div>
            <div className="rounded-lg bg-[#FEFCE8] p-2.5 border border-[#FDE047]">
              <span className="font-bold text-[#854D0E] block">Voidable Contract (Sec 2(i))</span>
              <p className="text-[11px] text-[#334155] mt-0.5">Enforceable at option of aggrieved party (Coercion/Fraud)</p>
            </div>
            <div className="rounded-lg bg-[#FFF1F2] p-2.5 border border-[#FDA4AF]">
              <span className="font-bold text-[#9F1239] block">Void Agreement (Sec 2(g))</span>
              <p className="text-[11px] text-[#334155] mt-0.5">Void ab initio; e.g. minor's agreement (*Mohori Bibee*)</p>
            </div>
            <div className="rounded-lg bg-[#FFF1F2] p-2.5 border border-[#FDA4AF]">
              <span className="font-bold text-[#9F1239] block">Void Contract (Sec 2(j))</span>
              <p className="text-[11px] text-[#334155] mt-0.5">Ceases enforceability (Sec 56 Supervening Frustration)</p>
            </div>
            <div className="rounded-lg bg-[#FFF1F2] p-2.5 border border-[#FDA4AF]">
              <span className="font-bold text-[#9F1239] block">Illegal Agreement (Sec 23)</span>
              <p className="text-[11px] text-[#334155] mt-0.5">Forbidden by law / criminal; collaterals also void</p>
            </div>
            <div className="rounded-lg bg-[#F8FAFC] p-2.5 border border-[#CBD5E1]">
              <span className="font-bold text-[#1E293B] block">Unenforceable Contract</span>
              <p className="text-[11px] text-[#475569] mt-0.5">Good in substance; barred by technical defect/limitation</p>
            </div>
          </div>
        </div>

        {/* Branch 2: Mode of Formation */}
        <div className="rounded-xl border border-[#CBD5E1] bg-[#FFFFFF] p-4 space-y-2.5 shadow-xs">
          <div className="flex items-center gap-2 pb-2 border-b border-[#E2E8F0]">
            <span className="flex size-5.5 items-center justify-center rounded-full bg-[#B45309] text-white text-[10px] font-bold">
              2
            </span>
            <h5 className="font-serif text-sm font-bold text-[#0F172A]">
              By Mode of Formation
            </h5>
          </div>
          <div className="space-y-2 text-xs">
            <div className="rounded-lg bg-[#F8FAFC] p-2.5 border border-[#E2E8F0]">
              <span className="font-bold text-[#0F172A] block">Express Contract (Sec 9)</span>
              <p className="text-[11px] text-[#475569] mt-0.5">Formed via explicit spoken words or formal written document</p>
            </div>
            <div className="rounded-lg bg-[#F8FAFC] p-2.5 border border-[#E2E8F0]">
              <span className="font-bold text-[#0F172A] block">Implied / Tacit Contract (Sec 9)</span>
              <p className="text-[11px] text-[#475569] mt-0.5">Formed by conduct (e.g. boarding city bus, withdrawing at ATM)</p>
            </div>
            <div className="rounded-lg bg-[#F8FAFC] p-2.5 border border-[#E2E8F0]">
              <span className="font-bold text-[#0F172A] block">Quasi-Contract (Sec 68–72)</span>
              <p className="text-[11px] text-[#475569] mt-0.5">Law creates obligation to prevent unjust enrichment (*Finder of goods*)</p>
            </div>
            <div className="rounded-lg bg-[#F8FAFC] p-2.5 border border-[#E2E8F0]">
              <span className="font-bold text-[#0F172A] block">E-Contract (IT Act Sec 10A)</span>
              <p className="text-[11px] text-[#475569] mt-0.5">Formed digitally: Click-wrap, Shrink-wrap, EDI, digital signatures</p>
            </div>
          </div>
        </div>

        {/* Branch 3: Extent of Performance */}
        <div className="rounded-xl border border-[#CBD5E1] bg-[#FFFFFF] p-4 space-y-2.5 shadow-xs">
          <div className="flex items-center gap-2 pb-2 border-b border-[#E2E8F0]">
            <span className="flex size-5.5 items-center justify-center rounded-full bg-[#0284C7] text-white text-[10px] font-bold">
              3
            </span>
            <h5 className="font-serif text-sm font-bold text-[#0F172A]">
              By Extent of Performance
            </h5>
          </div>
          <div className="space-y-2 text-xs">
            <div className="rounded-lg bg-[#F0FDF4] p-2.5 border border-[#86EFAC]">
              <span className="font-bold text-[#166534] block">Executed Contract</span>
              <p className="text-[11px] text-[#334155] mt-0.5">Both parties have fully performed their obligations (Spot cash sale)</p>
            </div>
            <div className="rounded-lg bg-[#F0F9FF] p-2.5 border border-[#BAE6FD]">
              <span className="font-bold text-[#0369A1] block">Executory: Unilateral</span>
              <p className="text-[11px] text-[#334155] mt-0.5">One party has performed; other party's promise is pending (Reward)</p>
            </div>
            <div className="rounded-lg bg-[#F0F9FF] p-2.5 border border-[#BAE6FD]">
              <span className="font-bold text-[#0369A1] block">Executory: Bilateral</span>
              <p className="text-[11px] text-[#334155] mt-0.5">Both parties exchange reciprocal promises for future execution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
