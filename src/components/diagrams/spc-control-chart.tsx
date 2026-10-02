import React, { useState } from "react";
import { Activity, AlertTriangle, CheckCircle, BarChart3, HelpCircle } from "lucide-react";

interface SpcRule {
  id: number;
  name: string;
  trigger: string;
  cause: string;
}

const WE_RULES: SpcRule[] = [
  {
    id: 1,
    name: "Rule 1: Beyond 3-Sigma Zone A",
    trigger: "1 point falls outside Upper Control Limit (UCL) or Lower Control Limit (LCL).",
    cause: "Immediate special cause: tool breakage, power surge, wrong raw material batch.",
  },
  {
    id: 2,
    name: "Rule 2: Centerline Bias Shift",
    trigger: "9 consecutive points fall on the same side of the Center Line (CL).",
    cause: "Process mean shift: operator changeover, machine calibration drift, ambient thermal expansion.",
  },
  {
    id: 3,
    name: "Rule 3: Systematic Trend",
    trigger: "6 consecutive points steadily increasing or steadily decreasing.",
    cause: "Tool wear, progressive chemical bath depletion, steady dirt build-up.",
  },
  {
    id: 4,
    name: "Rule 4: Systematic Oscillation",
    trigger: "14 consecutive points alternating up and down.",
    cause: "Two distinct alternating operators, mixing parts from two different supplier feeds.",
  },
];

export function SpcControlChartDiagram() {
  const [selectedRuleId, setSelectedRuleId] = useState<number>(1);
  const [chartType, setChartType] = useState<"variable" | "attribute">("variable");

  // Sample data points representing normal + Rule 1 violation
  const samplePoints = [
    { x: 1, y: 10.2 },
    { x: 2, y: 9.8 },
    { x: 3, y: 10.5 },
    { x: 4, y: 10.1 },
    { x: 5, y: 9.6 },
    { x: 6, y: 11.8 }, // Out of control (UCL = 11.5)
    { x: 7, y: 10.3 },
    { x: 8, y: 9.9 },
    { x: 9, y: 10.4 },
    { x: 10, y: 10.0 },
  ];

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <BarChart3 className="size-3.5 text-amber-400" />
          Statistical Process Control (SPC)
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          Shewhart Control Chart Architecture & Western Electric Rules
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          Distinguishing Common Cause Variation (inherent statistical noise) from Assignable / Special Cause Variation (process instability requiring immediate intervention).
        </p>
      </div>

      {/* Variable vs Attribute Selector */}
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setChartType("variable")}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            chartType === "variable"
              ? "bg-[#0F172A] text-white shadow-xs"
              : "bg-white text-[#64748B] border border-[#CBD5E1]"
          }`}
        >
          Variable Charts (X̄-R, X̄-S, I-MR)
        </button>
        <button
          onClick={() => setChartType("attribute")}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            chartType === "attribute"
              ? "bg-[#0F172A] text-white shadow-xs"
              : "bg-white text-[#64748B] border border-[#CBD5E1]"
          }`}
        >
          Attribute Charts (p, np, c, u)
        </button>
      </div>

      {/* SVG Control Chart */}
      <div className="rounded-xl border border-[#CBD5E1] bg-white p-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3 mb-4">
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#0F172A]">
            {chartType === "variable" ? "X̄ Mean Chart with ±3σ Zones" : "p-Chart (Fraction Defective)"}
          </span>
          <span className="text-[11px] font-mono font-bold text-[#DC2626]">
            UCL = X̄ + A₂R̄ (or μ + 3σ)
          </span>
        </div>

        <div className="overflow-x-auto">
          <svg viewBox="0 0 600 280" className="w-full max-w-[600px] mx-auto select-none font-sans">
            {/* Zones Backgrounds */}
            <rect x="60" y="30" width="500" height="35" fill="#FEE2E2" opacity="0.4" />
            <rect x="60" y="65" width="500" height="35" fill="#FEF3C7" opacity="0.4" />
            <rect x="60" y="100" width="500" height="40" fill="#F0FDF4" opacity="0.4" />
            <rect x="60" y="140" width="500" height="40" fill="#F0FDF4" opacity="0.4" />
            <rect x="60" y="180" width="500" height="35" fill="#FEF3C7" opacity="0.4" />
            <rect x="60" y="215" width="500" height="35" fill="#FEE2E2" opacity="0.4" />

            {/* Limits Lines */}
            <line x1="60" y1="30" x2="560" y2="30" stroke="#DC2626" strokeWidth="2" strokeDasharray="5 3" />
            <line x1="60" y1="140" x2="560" y2="140" stroke="#059669" strokeWidth="2" />
            <line x1="60" y1="250" x2="560" y2="250" stroke="#DC2626" strokeWidth="2" strokeDasharray="5 3" />

            {/* Zone Boundaries */}
            <line x1="60" y1="65" x2="560" y2="65" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="60" y1="100" x2="560" y2="100" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="60" y1="180" x2="560" y2="180" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="60" y1="215" x2="560" y2="215" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />

            {/* Labels */}
            <text x="565" y="34" fill="#DC2626" fontSize="10" fontWeight="bold">UCL (+3σ)</text>
            <text x="565" y="69" fill="#D97706" fontSize="9">Zone A (+2σ)</text>
            <text x="565" y="104" fill="#64748B" fontSize="9">Zone B (+1σ)</text>
            <text x="565" y="144" fill="#059669" fontSize="10" fontWeight="bold">CL (Mean)</text>
            <text x="565" y="184" fill="#64748B" fontSize="9">Zone B (-1σ)</text>
            <text x="565" y="219" fill="#D97706" fontSize="9">Zone A (-2σ)</text>
            <text x="565" y="254" fill="#DC2626" fontSize="10" fontWeight="bold">LCL (-3σ)</text>

            {/* Plotted Points & Line */}
            {(() => {
              const points = [
                { x: 90, y: 130 },
                { x: 140, y: 155 },
                { x: 190, y: 110 },
                { x: 240, y: 135 },
                { x: 290, y: 165 },
                { x: 340, y: 20 }, // Special Cause Defect (Above UCL)
                { x: 390, y: 125 },
                { x: 440, y: 148 },
                { x: 490, y: 118 },
                { x: 530, y: 140 },
              ];

              const pathD = points.reduce((acc, p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`), "");

              return (
                <g>
                  <path d={pathD} fill="none" stroke="#0284C7" strokeWidth="2.5" />
                  {points.map((p, i) => {
                    const isDefect = i === 5;
                    return (
                      <g key={i}>
                        <circle
                          cx={p.x}
                          cy={p.y}
                          r={isDefect ? "6" : "4.5"}
                          fill={isDefect ? "#DC2626" : "#0284C7"}
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                        />
                        {isDefect && (
                          <text x={p.x} y={p.y - 10} textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="bold">
                            ⚠️ Special Cause (Out of Control)
                          </text>
                        )}
                      </g>
                    );
                  })}
                </g>
              );
            })()}
          </svg>
        </div>
      </div>

      {/* Western Electric Rules Selector */}
      <div className="mt-4 rounded-xl border border-[#CBD5E1] bg-white p-4">
        <span className="font-sans text-xs font-bold uppercase text-[#0F172A] block mb-2">
          Western Electric Out-of-Control Sensitizing Rules:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {WE_RULES.map((rule) => {
            const isSelected = selectedRuleId === rule.id;
            return (
              <button
                key={rule.id}
                onClick={() => setSelectedRuleId(rule.id)}
                className={`p-2.5 rounded-lg border text-left transition-all ${
                  isSelected
                    ? "border-[#0F172A] bg-[#F8FAFC] ring-1 ring-[#0F172A]"
                    : "border-[#E2E8F0] bg-white hover:bg-[#F8FAFC]"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <AlertTriangle className={`size-3.5 ${isSelected ? "text-[#DC2626]" : "text-[#64748B]"}`} />
                  <span className="text-xs font-bold text-[#0F172A]">{rule.name}</span>
                </div>
                <p className="text-[11px] text-[#475569] mt-1">{rule.trigger}</p>
                <p className="text-[10px] text-[#0284C7] mt-0.5 font-semibold">Diagnosis: {rule.cause}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Variable vs Attribute Comparison Table */}
      <div className="mt-4 rounded-xl border border-[#CBD5E1] bg-white p-4">
        <span className="font-sans text-xs font-bold uppercase text-[#0F172A] block mb-2">
          SPC Chart Decision Matrix:
        </span>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#CBD5E1] bg-[#F1F5F9]">
                <th className="p-2 font-bold text-[#0F172A]">Chart Type</th>
                <th className="p-2 font-bold text-[#0F172A]">Data Class</th>
                <th className="p-2 font-bold text-[#0F172A]">Subgroup Size</th>
                <th className="p-2 font-bold text-[#0F172A]">Centerline & Formulas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#334155]">
              <tr>
                <td className="p-2 font-bold font-mono text-[#0284C7]">X̄ - R</td>
                <td className="p-2">Variable (Continuous: mm, kg, s)</td>
                <td className="p-2">Small (n = 2 to 9)</td>
                <td className="p-2 font-mono text-[11px]">UCL = X̄ + A₂R̄, LCL = X̄ - A₂R̄</td>
              </tr>
              <tr>
                <td className="p-2 font-bold font-mono text-[#0284C7]">X̄ - S</td>
                <td className="p-2">Variable (Continuous)</td>
                <td className="p-2">Large (n ≥ 10)</td>
                <td className="p-2 font-mono text-[11px]">UCL = X̄ + A₃S̄, LCL = X̄ - A₃S̄</td>
              </tr>
              <tr>
                <td className="p-2 font-bold font-mono text-[#059669]">p - Chart</td>
                <td className="p-2">Attribute (Defective Proportion)</td>
                <td className="p-2">Variable / Large n</td>
                <td className="p-2 font-mono text-[11px]">UCL = p̄ + 3√[p̄(1-p̄)/n]</td>
              </tr>
              <tr>
                <td className="p-2 font-bold font-mono text-[#059669]">c - Chart</td>
                <td className="p-2">Attribute (Defect Count per unit)</td>
                <td className="p-2">Constant Unit (n = 1)</td>
                <td className="p-2 font-mono text-[11px]">UCL = c̄ + 3√c̄, LCL = c̄ - 3√c̄</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
