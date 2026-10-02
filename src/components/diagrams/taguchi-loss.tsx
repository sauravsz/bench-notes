import React, { useState } from "react";
import { TrendingDown, Scale, Target, AlertTriangle, CheckCircle } from "lucide-react";

export function TaguchiLossDiagram() {
  const [deviation, setDeviation] = useState<number>(1.2);
  const target = 10.0;
  const delta = 2.0; // Tolerance = +/- 2.0 (LSL = 8.0, USL = 12.0)
  const A0 = 500; // Scrap / Replacement cost at spec limit = $500
  const k = A0 / (delta * delta); // k = 500 / 4 = 125

  const actualY = target + deviation;
  const taguchiLoss = k * Math.pow(deviation, 2);
  const isWithinGoalpost = Math.abs(deviation) <= delta;
  const goalpostLoss = isWithinGoalpost ? 0 : A0;

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <Target className="size-3.5 text-amber-400" />
          Taguchi Quality Engineering
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          Taguchi Quadratic Loss Function vs. Traditional Goalpost
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          Genichi Taguchi's proof that financial and societal loss begins immediately when a product dimension deviates from the nominal target ($m$), even if within tolerance limits $[LSL, USL]$.
        </p>
      </div>

      {/* SVG Parabola vs Step Goalpost */}
      <div className="rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-xs">
        <div className="flex flex-wrap items-center justify-between border-b border-[#F1F5F9] pb-3 mb-4 gap-2">
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#0F172A]">
            Loss Curve Comparison ($L(y) = k(y-m)^2$)
          </span>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1 text-[#DC2626] font-bold">
              <span className="inline-block size-3 bg-[#DC2626] rounded-xs"></span> Traditional Goalpost (Step)
            </span>
            <span className="flex items-center gap-1 text-[#0284C7] font-bold">
              <span className="inline-block size-3 bg-[#0284C7] rounded-full"></span> Taguchi Parabola ($L(y)$)
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <svg viewBox="0 0 600 300" className="w-full max-w-[600px] mx-auto select-none font-sans">
            {/* Tolerance Band Background */}
            <rect x="150" y="30" width="300" height="220" fill="#F0FDF4" opacity="0.6" />
            <text x="300" y="45" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">
              ACCEPTED SPECIFICATION BAND [LSL = 8.0mm to USL = 12.0mm]
            </text>

            {/* Reject Zones */}
            <rect x="50" y="30" width="100" height="220" fill="#FEF2F2" opacity="0.6" />
            <rect x="450" y="30" width="100" height="220" fill="#FEF2F2" opacity="0.6" />
            <text x="100" y="140" textAnchor="middle" fill="#991B1B" fontSize="9" fontWeight="bold">REJECT (Scrap)</text>
            <text x="500" y="140" textAnchor="middle" fill="#991B1B" fontSize="9" fontWeight="bold">REJECT (Rework)</text>

            {/* Axes */}
            <line x1="50" y1="250" x2="550" y2="250" stroke="#64748B" strokeWidth="2" />
            <line x1="300" y1="20" x2="300" y2="260" stroke="#0F172A" strokeWidth="2" strokeDasharray="3 3" />

            {/* Spec Limits */}
            <line x1="150" y1="30" x2="150" y2="255" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="450" y1="30" x2="450" y2="255" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />

            <text x="150" y="270" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="bold">LSL (m - Δ)</text>
            <text x="300" y="270" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="bold">Target (m = 10.0)</text>
            <text x="450" y="270" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="bold">USL (m + Δ)</text>

            {/* Traditional Step Function */}
            <path
              d="M 50 60 L 150 60 L 150 250 L 450 250 L 450 60 L 550 60"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2.5"
            />

            {/* Taguchi Quadratic Parabola */}
            <path
              d="M 50 20 Q 300 250 550 20"
              fill="none"
              stroke="#0284C7"
              strokeWidth="3.5"
            />

            {/* Active Measurement Point Indicator */}
            {(() => {
              const svgX = 300 + (deviation / delta) * 150;
              const svgY = 250 - Math.min(230, (taguchiLoss / A0) * 190);
              return (
                <g>
                  <circle cx={svgX} cy={svgY} r="7" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
                  <line x1={svgX} y1={svgY} x2={svgX} y2="250" stroke="#F59E0B" strokeWidth="2" strokeDasharray="2 2" />
                  <text x={svgX} y={svgY - 12} textAnchor="middle" fill="#B45309" fontSize="10" fontWeight="bold">
                    Loss: ${taguchiLoss.toFixed(1)}
                  </text>
                </g>
              );
            })()}
          </svg>
        </div>
      </div>

      {/* Interactive Deviation Slider & Calculation */}
      <div className="mt-5 rounded-xl border border-[#CBD5E1] bg-white p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#E2E8F0] pb-3">
          <div>
            <span className="font-sans text-xs font-bold uppercase text-[#0F172A]">
              Live Process Deviation Simulator
            </span>
            <p className="text-[11px] text-[#64748B]">
              Slide deviation ($y - m$) to compare Traditional Inspection vs. Taguchi Loss:
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#64748B]">Deviation ($y - m$):</span>
            <span className="font-mono text-xs font-bold text-[#0284C7] bg-[#F0F9FF] border border-[#BAE6FD] px-2 py-0.5 rounded">
              {deviation > 0 ? `+${deviation.toFixed(2)}` : deviation.toFixed(2)} mm
            </span>
          </div>
        </div>

        <div className="mt-3">
          <input
            type="range"
            min="-2.5"
            max="2.5"
            step="0.1"
            value={deviation}
            onChange={(e) => setDeviation(parseFloat(e.target.value))}
            className="w-full accent-[#0284C7] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-[#64748B] mt-1 font-mono">
            <span>-2.5 mm (Out)</span>
            <span>-2.0 mm (LSL)</span>
            <span>0.0 mm (Nominal Target)</span>
            <span>+2.0 mm (USL)</span>
            <span>+2.5 mm (Out)</span>
          </div>
        </div>

        {/* Live Comparison Output Cards */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Goalpost View */}
          <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-3">
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                <Scale className="size-4 text-[#64748B]" /> Traditional Goalpost Model
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${isWithinGoalpost ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#FEE2E2] text-[#991B1B]"}`}>
                {isWithinGoalpost ? "PASS (Zero Defect)" : "REJECT / SCRAP"}
              </span>
            </div>
            <div className="mt-2 text-xs">
              <div className="flex justify-between py-1 border-b border-[#E2E8F0]">
                <span className="text-[#64748B]">Assessed Financial Loss:</span>
                <span className="font-mono font-bold text-[#0F172A]">${goalpostLoss.toFixed(2)}</span>
              </div>
              <p className="mt-1.5 text-[11px] text-[#64748B]">
                {isWithinGoalpost
                  ? "Assumes zero economic loss as long as the part is within ±2.0 mm of nominal target."
                  : "Part falls outside spec limits; $500 total scrap or warranty liability."}
              </p>
            </div>
          </div>

          {/* Taguchi View */}
          <div className="rounded-lg border-2 border-[#BAE6FD] bg-[#F0F9FF] p-3">
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs font-bold text-[#0369A1] flex items-center gap-1.5">
                <TrendingDown className="size-4 text-[#0284C7]" /> Taguchi Parabolic Model
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0284C7] text-white">
                L(y) = k(y-m)²
              </span>
            </div>
            <div className="mt-2 text-xs">
              <div className="flex justify-between py-1 border-b border-[#BAE6FD]">
                <span className="text-[#0369A1]">Real Economic & Customer Loss:</span>
                <span className="font-mono font-bold text-[#0C4A6E]">${taguchiLoss.toFixed(2)}</span>
              </div>
              <p className="mt-1.5 text-[11px] text-[#0369A1]">
                {Math.abs(deviation) === 0
                  ? "Zero variation = Perfect quality, zero societal loss."
                  : `Even inside spec, this ±${Math.abs(deviation).toFixed(1)}mm deviation generates $${taguchiLoss.toFixed(1)} in friction, heat, wear, and customer friction.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Benchmark Case Study */}
      <div className="mt-4 rounded-xl border border-[#FDE68A] bg-[#FFFBEB] p-4 text-xs">
        <div className="flex items-center gap-2 font-bold text-[#92400E]">
          <AlertTriangle className="size-4" /> Benchmark Case: Sony Trinitron Color TV (Tokyo vs. San Diego Plants)
        </div>
        <p className="mt-1 text-[#78350F] leading-relaxed">
          Sony produced Trinitron color TVs at two plants: <em>Tokyo (Japan)</em> and <em>San Diego (USA)</em>. The San Diego plant used traditional goalpost inspection—100% of shipments met tolerance, but production clustered uniformly across the band $[LSL, USL]$. The Tokyo plant targeted the nominal mean ($m$) using Taguchi methods (normal distribution centered on $m$). Result: Tokyo had near-zero warranty claims and higher customer loyalty, whereas San Diego suffered massive warranty repair costs despite 0% initial factory rejects.
        </p>
      </div>
    </div>
  );
}
