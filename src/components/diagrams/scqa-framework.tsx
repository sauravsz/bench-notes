import { HelpCircle, AlertTriangle, CheckCircle, Compass, ArrowRight } from "lucide-react";

export function ScqaFrameworkDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <Compass className="size-3.5" />
          Story Architecture & Tension Engine
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          The SCQA Narrative Framework
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          The structural engine that converts unstructured data into executive curiosity, productive tension, and decisive action.
        </p>
      </div>

      {/* 4 Steps Flow */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
        {/* Situation */}
        <div className="rounded-xl border-2 border-[#64748B] bg-[#FFFFFF] p-3.5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-1.5 border-b border-[#E2E8F0] mb-2">
              <span className="rounded bg-[#64748B] text-white px-2 py-0.5 font-sans text-[10px] font-bold uppercase">
                S • Situation
              </span>
              <span className="text-[10px] font-bold text-[#64748B]">Context</span>
            </div>
            <h5 className="font-serif text-sm font-bold text-[#0F172A]">Undisputed Baseline</h5>
            <p className="mt-1 text-[11px] text-[#475569] leading-normal">
              Agreed-upon facts, existing operational metrics, and market conditions everyone acknowledges.
            </p>
          </div>
          <div className="mt-2.5 rounded bg-[#F1F5F9] p-1.5 text-[10px] font-semibold text-[#334155] text-center border border-[#E2E8F0]">
            Emotional State: Neutral Agreement
          </div>
        </div>

        {/* Complication */}
        <div className="rounded-xl border-2 border-[#BE123C] bg-[#FFFFFF] p-3.5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-1.5 border-b border-[#E2E8F0] mb-2">
              <span className="rounded bg-[#BE123C] text-white px-2 py-0.5 font-sans text-[10px] font-bold uppercase">
                C • Complication
              </span>
              <span className="text-[10px] font-bold text-[#BE123C]">Tension</span>
            </div>
            <div className="flex items-center gap-1.5">
              <AlertTriangle className="size-4 text-[#BE123C]" />
              <h5 className="font-serif text-sm font-bold text-[#0F172A]">The Bottleneck</h5>
            </div>
            <p className="mt-1 text-[11px] text-[#475569] leading-normal">
              The regulatory shift, cost escalation, operational bottleneck, or competitor disruption creating friction.
            </p>
          </div>
          <div className="mt-2.5 rounded bg-[#FFF1F2] p-1.5 text-[10px] font-bold text-[#BE123C] text-center border border-[#FECDD3]">
            Emotional State: Urgent Tension
          </div>
        </div>

        {/* Question */}
        <div className="rounded-xl border-2 border-[#B45309] bg-[#FFFFFF] p-3.5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-1.5 border-b border-[#E2E8F0] mb-2">
              <span className="rounded bg-[#B45309] text-white px-2 py-0.5 font-sans text-[10px] font-bold uppercase">
                Q • Question
              </span>
              <span className="text-[10px] font-bold text-[#B45309]">Curiosity</span>
            </div>
            <div className="flex items-center gap-1.5">
              <HelpCircle className="size-4 text-[#B45309]" />
              <h5 className="font-serif text-sm font-bold text-[#0F172A]">Strategic Dilemma</h5>
            </div>
            <p className="mt-1 text-[11px] text-[#475569] leading-normal">
              The unavoidable operational or commercial question that the audience is now desperate to solve.
            </p>
          </div>
          <div className="mt-2.5 rounded bg-[#FEF3C7] p-1.5 text-[10px] font-bold text-[#92400E] text-center border border-[#FDE68A]">
            Emotional State: High Curiosity
          </div>
        </div>

        {/* Answer */}
        <div className="rounded-xl border-2 border-[#059669] bg-[#FFFFFF] p-3.5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-1.5 border-b border-[#E2E8F0] mb-2">
              <span className="rounded bg-[#059669] text-white px-2 py-0.5 font-sans text-[10px] font-bold uppercase">
                A • Answer
              </span>
              <span className="text-[10px] font-bold text-[#059669]">Resolution</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="size-4 text-[#059669]" />
              <h5 className="font-serif text-sm font-bold text-[#0F172A]">Governing Solution</h5>
            </div>
            <p className="mt-1 text-[11px] text-[#475569] leading-normal">
              The decisive, high-leverage recommendation or venture solution that resolves the tension and unlocks upside.
            </p>
          </div>
          <div className="mt-2.5 rounded bg-[#ECFDF5] p-1.5 text-[10px] font-bold text-[#047857] text-center border border-[#A7F3D0]">
            Emotional State: Cognitive Relief
          </div>
        </div>
      </div>

      {/* Diagnostic Warning */}
      <div className="mt-4 rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] p-3 text-xs text-[#334155]">
        <span className="font-bold text-[#BE123C]">Missing Link Diagnostic: </span>
        Leaping from <em>Situation</em> directly to <em>Answer</em> causes apathy (no tension). Leaping from <em>Complication</em> to <em>Answer</em> without formulating the explicit <em>Question</em> triggers debate over priorities rather than execution.
      </div>
    </div>
  );
}
