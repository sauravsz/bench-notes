import { Move, Target, Compass, Navigation, RefreshCw } from "lucide-react";

export function GeometricStageSpaceDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <Move className="size-3.5" />
          Spatial Command & Proxemics
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          The 4 Geometric Dimensions of Stage Space
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          How world-class communicators utilize physical geography to anchor executive authority, direct visual focus, and control emotional pacing.
        </p>
      </div>

      {/* 4 Geometric Zones */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Zone 1: Center Stage */}
        <div className="rounded-xl border-2 border-[#1E293B] bg-[#FFFFFF] p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] mb-2.5">
              <span className="rounded bg-[#1E293B] text-white px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase">
                Zone 1 • The Apex Anchor
              </span>
              <span className="text-[11px] font-bold text-[#1E293B]">Authority</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="size-4 text-[#1E293B]" />
              <h5 className="font-serif text-base font-bold text-[#0F172A]">Center Stage (The Actual Point)</h5>
            </div>
            <ul className="mt-2 space-y-1.5 text-xs text-[#475569]">
              <li><strong>Function:</strong> Delivering the governing recommendation, BLUF core thesis, and closing Call to Action.</li>
              <li><strong>Posture:</strong> Grounded stillness, zero pacing, shoulder-width stance, direct piercing eye contact.</li>
              <li><strong>Impact:</strong> Establishes supreme executive gravitas; eliminates distracting nervous energy.</li>
            </ul>
          </div>
          <div className="mt-3 text-center text-[10px] font-bold text-[#1E293B] bg-[#F1F5F9] rounded py-1">
            Usage: Opening 60 Seconds & Final Call to Action
          </div>
        </div>

        {/* Zone 2: The Periphery */}
        <div className="rounded-xl border-2 border-[#0284C7] bg-[#FFFFFF] p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] mb-2.5">
              <span className="rounded bg-[#0284C7] text-white px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase">
                Zone 2 • Story Orbit
              </span>
              <span className="text-[11px] font-bold text-[#0284C7]">Context</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="size-4 text-[#0284C7]" />
              <h5 className="font-serif text-base font-bold text-[#0F172A]">The Periphery (The Story Circle)</h5>
            </div>
            <ul className="mt-2 space-y-1.5 text-xs text-[#475569]">
              <li><strong>Function:</strong> Narrating customer case histories, qualitative context, and secondary testimonials.</li>
              <li><strong>Posture:</strong> Moving laterally to left or right wings; softened posture and conversational cadence.</li>
              <li><strong>Impact:</strong> Engages side wings of the audience; frames narrative detail outside the hard data core.</li>
            </ul>
          </div>
          <div className="mt-3 text-center text-[10px] font-bold text-[#0369A1] bg-[#E0F2FE] rounded py-1">
            Usage: Middle Narrative, Case Studies & Customer Pain Points
          </div>
        </div>

        {/* Zone 3: Depth & Foreshortening */}
        <div className="rounded-xl border-2 border-[#B45309] bg-[#FFFFFF] p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] mb-2.5">
              <span className="rounded bg-[#B45309] text-white px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase">
                Zone 3 • Timeline Depth
              </span>
              <span className="text-[11px] font-bold text-[#B45309]">Chronology</span>
            </div>
            <div className="flex items-center gap-2">
              <Navigation className="size-4 text-[#B45309]" />
              <h5 className="font-serif text-base font-bold text-[#0F172A]">Depth & Foreshortening (Timeline)</h5>
            </div>
            <ul className="mt-2 space-y-1.5 text-xs text-[#475569]">
              <li><strong>Downstage (Forward):</strong> Stepping toward audience to emphasize urgency, future growth, and shared commitment.</li>
              <li><strong>Upstage (Backward):</strong> Stepping back to reflect on historical data, root causes, and macro industry context.</li>
              <li><strong>Impact:</strong> Physically manifests chronological progression in the audience's mind.</li>
            </ul>
          </div>
          <div className="mt-3 text-center text-[10px] font-bold text-[#92400E] bg-[#FEF3C7] rounded py-1">
            Usage: Temporal Transitions & Urgency Escalation
          </div>
        </div>

        {/* Zone 4: Diagonal Crossing */}
        <div className="rounded-xl border-2 border-[#059669] bg-[#FFFFFF] p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] mb-2.5">
              <span className="rounded bg-[#059669] text-white px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase">
                Zone 4 • Kinetic Shift
              </span>
              <span className="text-[11px] font-bold text-[#059669]">Dynamic Energy</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="size-4 text-[#059669]" />
              <h5 className="font-serif text-base font-bold text-[#0F172A]">Diagonal Crossing (Dynamic Energy)</h5>
            </div>
            <ul className="mt-2 space-y-1.5 text-xs text-[#475569]">
              <li><strong>Function:</strong> Bridging opposing ideas, pivoting between major agenda sections, re-energizing attention.</li>
              <li><strong>Posture:</strong> Deliberate diagonal stride with purpose; pausing upon arrival to deliver key insight.</li>
              <li><strong>Impact:</strong> Breaks visual monotony, disrupts passive attention, and unites polarized room factions.</li>
            </ul>
          </div>
          <div className="mt-3 text-center text-[10px] font-bold text-[#047857] bg-[#D1FAE5] rounded py-1">
            Usage: Major Phase Transitions & High-Stakes Pivots
          </div>
        </div>
      </div>
    </div>
  );
}
