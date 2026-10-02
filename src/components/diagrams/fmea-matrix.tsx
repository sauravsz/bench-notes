import React, { useState } from "react";
import { ShieldAlert, AlertOctagon, CheckCircle2, Sliders, ShieldCheck, Flame } from "lucide-react";

export function FmeaMatrixDiagram() {
  const [severity, setSeverity] = useState<number>(8);
  const [occurrence, setOccurrence] = useState<number>(6);
  const [detection, setDetection] = useState<number>(4);

  const rpn = severity * occurrence * detection;

  const getActionPriority = (s: number, o: number, d: number) => {
    if (s >= 9 || (s >= 7 && o >= 6)) return { level: "HIGH (Mandatory Redesign)", color: "bg-[#DC2626] text-white", border: "border-[#DC2626]" };
    if ((s >= 5 && o >= 4) || (s >= 7 && d >= 5) || rpn >= 120) return { level: "MEDIUM (Targeted Countermeasures)", color: "bg-[#D97706] text-white", border: "border-[#D97706]" };
    return { level: "LOW (Acceptable / Periodic Monitoring)", color: "bg-[#059669] text-white", border: "border-[#059669]" };
  };

  const ap = getActionPriority(severity, occurrence, detection);

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <ShieldAlert className="size-3.5 text-amber-400" />
          Engineering Risk Mitigation
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          Failure Mode and Effects Analysis (FMEA) & RPN Risk Matrix
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          Proactive design (DFMEA) and process (PFMEA) risk modeling using the triad: Severity ($S$) × Occurrence ($O$) × Detection ($D$) = Risk Priority Number (RPN).
        </p>
      </div>

      {/* Interactive Simulator */}
      <div className="rounded-xl border border-[#CBD5E1] bg-white p-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between border-b border-[#F1F5F9] pb-3 mb-4 gap-2">
          <span className="font-sans text-xs font-bold uppercase text-[#0F172A] flex items-center gap-1.5">
            <Sliders className="size-4 text-[#0284C7]" /> Interactive RPN & Action Priority Engine
          </span>
          <span className="text-xs font-mono font-bold text-[#64748B]">
            RPN Range: 1 – 1,000
          </span>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Severity */}
          <div className="rounded-lg border border-[#FEE2E2] bg-[#FEF2F2]/40 p-3.5">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-bold text-[#991B1B]">Severity (S)</span>
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#DC2626] text-white">
                {severity} / 10
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={severity}
              onChange={(e) => setSeverity(parseInt(e.target.value))}
              className="w-full accent-[#DC2626] cursor-pointer"
            />
            <p className="text-[10px] text-[#7F1D1D] mt-1">
              {severity >= 9 && "Hazardous without warning (Safety violation)"}
              {severity >= 7 && severity <= 8 && "Major disruption / Primary function lost"}
              {severity >= 4 && severity <= 6 && "Moderate performance degradation"}
              {severity <= 3 && "Minor cosmetic / No noticeable customer impact"}
            </p>
          </div>

          {/* Occurrence */}
          <div className="rounded-lg border border-[#FEF3C7] bg-[#FFFBEB]/40 p-3.5">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-bold text-[#92400E]">Occurrence (O)</span>
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#D97706] text-white">
                {occurrence} / 10
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={occurrence}
              onChange={(e) => setOccurrence(parseInt(e.target.value))}
              className="w-full accent-[#D97706] cursor-pointer"
            />
            <p className="text-[10px] text-[#78350F] mt-1">
              {occurrence >= 9 && "Very High: Failure almost inevitable (> 1 in 10)"}
              {occurrence >= 6 && occurrence <= 8 && "Moderate to High: Repeated failures (1 in 100)"}
              {occurrence >= 3 && occurrence <= 5 && "Low: Occasional process failure (1 in 2,000)"}
              {occurrence <= 2 && "Remote: Failure unlikely (< 1 in 1,000,000)"}
            </p>
          </div>

          {/* Detection */}
          <div className="rounded-lg border border-[#E0E7FF] bg-[#EEF2FF]/40 p-3.5">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-bold text-[#3730A3]">Detection (D - Inverted)</span>
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#4F46E5] text-white">
                {detection} / 10
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={detection}
              onChange={(e) => setDetection(parseInt(e.target.value))}
              className="w-full accent-[#4F46E5] cursor-pointer"
            />
            <p className="text-[10px] text-[#312E81] mt-1">
              {detection >= 9 && "Absolute Uncertainty: Cannot detect defect before shipment"}
              {detection >= 6 && detection <= 8 && "Poor: Manual inspection / Low probability"}
              {detection >= 3 && detection <= 5 && "Good: Automated in-line sensory screening"}
              {detection <= 2 && "Almost Certain: 100% Poka-Yoke automated interlock"}
            </p>
          </div>
        </div>

        {/* Calculated Result Banner */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] p-3.5 flex items-center justify-between">
            <div>
              <span className="text-xs text-[#64748B] block">Risk Priority Number (RPN)</span>
              <span className="text-xs font-mono text-[#0F172A]">
                Formula: {severity} × {occurrence} × {detection} =
              </span>
            </div>
            <span className="text-2xl font-mono font-bold text-[#0F172A]">
              {rpn}
            </span>
          </div>

          <div className={`rounded-xl border p-3.5 flex items-center justify-between ${ap.border} bg-white`}>
            <div>
              <span className="text-xs text-[#64748B] block">AIAG-VDA Action Priority</span>
              <span className="text-[11px] text-[#0F172A] font-semibold">Engineering Mandate</span>
            </div>
            <span className={`rounded-lg px-3 py-1 text-xs font-bold ${ap.color}`}>
              {ap.level}
            </span>
          </div>
        </div>
      </div>

      {/* Comparison: DFMEA vs PFMEA */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-xl border border-[#CBD5E1] bg-white p-4">
          <div className="flex items-center gap-1.5 font-bold text-xs text-[#0284C7] border-b border-[#E2E8F0] pb-2 mb-2">
            <Flame className="size-4" /> Design FMEA (DFMEA)
          </div>
          <ul className="space-y-1.5 text-xs text-[#334155]">
            <li><strong>Focus:</strong> Product design geometry, material tolerances, and physics.</li>
            <li><strong>Timing:</strong> Pre-tooling / Prototype development phase.</li>
            <li><strong>Countermeasures:</strong> Material substitution, redesigning geometry, safety factor enlargement.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-[#CBD5E1] bg-white p-4">
          <div className="flex items-center gap-1.5 font-bold text-xs text-[#059669] border-b border-[#E2E8F0] pb-2 mb-2">
            <ShieldCheck className="size-4" /> Process FMEA (PFMEA)
          </div>
          <ul className="space-y-1.5 text-xs text-[#334155]">
            <li><strong>Focus:</strong> Manufacturing, tooling, assembly, operator error, and tooling wear.</li>
            <li><strong>Timing:</strong> Tooling fabrication / Pilot pre-production runs.</li>
            <li><strong>Countermeasures:</strong> Poka-Yoke mistake proofing, automated sensory gates, SPC clamping.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
