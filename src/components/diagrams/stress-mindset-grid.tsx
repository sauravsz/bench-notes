import { Activity, ShieldAlert, Zap, Heart, CheckCircle2, XCircle } from "lucide-react";

export function StressMindsetGridDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <Activity className="size-3.5" />
          Cardiovascular & Neurobiology of Performance
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          Facilitative vs. Debilitative Stress Reactivity
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          Grounded in Harvard cardiovascular reactivity research (Matthew K. Nock, Jamieson et al.) showing cognitive reappraisal transforms physiological arousal into performance fuel.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Facilitative Stress */}
        <div className="rounded-xl border-2 border-[#059669] bg-[#FFFFFF] p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] mb-2.5">
              <span className="rounded bg-[#059669] text-white px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider">
                Challenge State • Enhancing
              </span>
              <span className="text-[11px] font-bold text-[#059669]">Facilitative Mindset</span>
            </div>
            <h5 className="font-serif text-base font-bold text-[#0F172A]">
              Physiological & Cognitive Fuel
            </h5>
            <div className="mt-2 space-y-2 text-xs">
              <div className="rounded-md bg-[#ECFDF5] p-2 border border-[#A7F3D0]">
                <span className="font-bold text-[#047857] block flex items-center gap-1">
                  <Heart className="size-3.5" /> Cardiovascular Reactivity:
                </span>
                <p className="text-[11px] text-[#064E3B]">
                  <strong>Increased Cardiac Output (CO)</strong> + <strong>Vasodilation (Decreased TPR)</strong>. Efficient cerebral oxygen delivery.
                </p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block flex items-center gap-1">
                  <Zap className="size-3.5 text-[#059669]" /> Neuro-Cognitive Benefits:
                </span>
                <ul className="text-[11px] text-[#475569] space-y-1 mt-1">
                  <li className="flex items-start gap-1">
                    <CheckCircle2 className="size-3 text-[#059669] shrink-0 mt-0.5" />
                    <span>Expanded working memory capacity & rapid retrieval.</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <CheckCircle2 className="size-3 text-[#059669] shrink-0 mt-0.5" />
                    <span>Heightened perceptual sharpness & emotional regulation.</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <CheckCircle2 className="size-3 text-[#059669] shrink-0 mt-0.5" />
                    <span>Composed stage posture with dynamic vocal modulation.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-3 text-center text-[10px] font-bold text-[#047857] bg-[#D1FAE5] rounded py-1">
            Reappraisal Mantra: "My body is marshaling oxygen to dominate this pitch."
          </div>
        </div>

        {/* Debilitative Stress */}
        <div className="rounded-xl border-2 border-[#BE123C] bg-[#FFFFFF] p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] mb-2.5">
              <span className="rounded bg-[#BE123C] text-white px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider">
                Threat State • Debilitating
              </span>
              <span className="text-[11px] font-bold text-[#BE123C]">Debilitative Mindset</span>
            </div>
            <h5 className="font-serif text-base font-bold text-[#0F172A]">
              Cardiovascular & Cognitive Impairment
            </h5>
            <div className="mt-2 space-y-2 text-xs">
              <div className="rounded-md bg-[#FFF1F2] p-2 border border-[#FECDD3]">
                <span className="font-bold text-[#BE123C] block flex items-center gap-1">
                  <ShieldAlert className="size-3.5" /> Cardiovascular Reactivity:
                </span>
                <p className="text-[11px] text-[#881337]">
                  <strong>Vasoconstriction (Elevated TPR)</strong> + <strong>Stagnant CO</strong>. Blood restricted to core; prefrontal cortex starved of oxygen.
                </p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block flex items-center gap-1">
                  <Activity className="size-3.5 text-[#BE123C]" /> Cognitive Detriments:
                </span>
                <ul className="text-[11px] text-[#475569] space-y-1 mt-1">
                  <li className="flex items-start gap-1">
                    <XCircle className="size-3 text-[#BE123C] shrink-0 mt-0.5" />
                    <span>Working memory blackouts and cognitive freeze.</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <XCircle className="size-3 text-[#BE123C] shrink-0 mt-0.5" />
                    <span>Tunnel vision, excessive verbal fillers (um, ah).</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <XCircle className="size-3 text-[#BE123C] shrink-0 mt-0.5" />
                    <span>Defensive reaction to challenging executive questions.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-3 text-center text-[10px] font-bold text-[#9F1239] bg-[#FFE4E6] rounded py-1">
            Pathological Belief: "Stress is toxic and signals impending failure."
          </div>
        </div>
      </div>
    </div>
  );
}
