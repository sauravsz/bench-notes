import { Zap, DollarSign, Clock, CheckCircle2 } from "lucide-react";

export function RvuModelDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <Zap className="size-3.5" />
          Venture Pitch & Decision Triad
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          The RVU Decision Architecture
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          The three non-negotiable neurological filters required to turn passive listeners into committed institutional investors or executive champions.
        </p>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* R - Relevance */}
        <div className="rounded-xl border-2 border-[#0284C7] bg-[#FFFFFF] p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] mb-2.5">
              <span className="rounded bg-[#0284C7] text-white px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase">
                R • Relevance
              </span>
              <span className="text-[11px] font-bold text-[#0284C7]">Contextual Fit</span>
            </div>
            <h5 className="font-serif text-base font-bold text-[#0F172A]">Why This? Why Me?</h5>
            <ul className="mt-2 space-y-1.5 text-xs text-[#475569]">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                <span>Direct alignment with stakeholder's acute operational bottleneck.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                <span>Immediate recognition of domain friction and customer pain points.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                <span>Filters out irrelevant technical fluff; sets the strategic mandate.</span>
              </li>
            </ul>
          </div>
          <div className="mt-3 text-center text-[10px] font-bold text-[#0369A1] bg-[#E0F2FE] rounded py-1">
            Psychological Impact: Attention Capture
          </div>
        </div>

        {/* V - Value */}
        <div className="rounded-xl border-2 border-[#059669] bg-[#FFFFFF] p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] mb-2.5">
              <span className="rounded bg-[#059669] text-white px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase">
                V • Value
              </span>
              <span className="text-[11px] font-bold text-[#059669]">Economic Engine</span>
            </div>
            <h5 className="font-serif text-base font-bold text-[#0F172A]">Quantifiable ROI</h5>
            <ul className="mt-2 space-y-1.5 text-xs text-[#475569]">
              <li className="flex items-start gap-1.5">
                <DollarSign className="size-3.5 text-[#059669] shrink-0 mt-0.5" />
                <span>Margin decoupling: Gross Merchandise Value vs Net Take Rate.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <DollarSign className="size-3.5 text-[#059669] shrink-0 mt-0.5" />
                <span>Unit economics: LTV/CAC &gt; 3x with fast payback cycles.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <DollarSign className="size-3.5 text-[#059669] shrink-0 mt-0.5" />
                <span>Operational leverage: Scaling output without proportional linear headcount.</span>
              </li>
            </ul>
          </div>
          <div className="mt-3 text-center text-[10px] font-bold text-[#047857] bg-[#D1FAE5] rounded py-1">
            Psychological Impact: Commercial Greed / Upside
          </div>
        </div>

        {/* U - Urgency */}
        <div className="rounded-xl border-2 border-[#BE123C] bg-[#FFFFFF] p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] mb-2.5">
              <span className="rounded bg-[#BE123C] text-white px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase">
                U • Urgency
              </span>
              <span className="text-[11px] font-bold text-[#BE123C]">Decision Catalyst</span>
            </div>
            <h5 className="font-serif text-base font-bold text-[#0F172A]">Cost of Inaction</h5>
            <ul className="mt-2 space-y-1.5 text-xs text-[#475569]">
              <li className="flex items-start gap-1.5">
                <Clock className="size-3.5 text-[#BE123C] shrink-0 mt-0.5" />
                <span>Quantified loss of delaying decision by 30, 60, or 90 days.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Clock className="size-3.5 text-[#BE123C] shrink-0 mt-0.5" />
                <span>Closing regulatory or market timing windows (First Mover Advantage).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Clock className="size-3.5 text-[#BE123C] shrink-0 mt-0.5" />
                <span>Definitive Call to Action (CTA) converting interest into contracts.</span>
              </li>
            </ul>
          </div>
          <div className="mt-3 text-center text-[10px] font-bold text-[#9F1239] bg-[#FFE4E6] rounded py-1">
            Psychological Impact: Loss Aversion / Action
          </div>
        </div>
      </div>
    </div>
  );
}
