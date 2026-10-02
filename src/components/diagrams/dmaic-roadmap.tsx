import React, { useState } from "react";
import { CheckCircle2, ChevronRight, Calculator, Award, Layers, Flame, ArrowRight } from "lucide-react";

interface DmaicPhase {
  letter: string;
  name: string;
  tollgateQuestion: string;
  keyDeliverables: string[];
  primaryTools: string[];
}

const DMAIC_PHASES: DmaicPhase[] = [
  {
    letter: "D",
    name: "Define",
    tollgateQuestion: "What specific operational or customer pain point are we solving, what is the business case, and who is the customer?",
    keyDeliverables: [
      "Project Charter (Business Case, Problem Statement, Scope, Goal, Milestones)",
      "SIPOC (Suppliers, Inputs, Process, Outputs, Customers) High-Level Flow",
      "VOC to CTQ (Critical to Quality) Tree Translation",
    ],
    primaryTools: ["Project Charter", "SIPOC Diagram", "VOC Translation Matrix", "Kano Analysis"],
  },
  {
    letter: "M",
    name: "Measure",
    tollgateQuestion: "What is the baseline capability of the current process, and is our measurement system statistically reliable?",
    keyDeliverables: [
      "Operational Data Collection Plan & Sampling Strategy",
      "Gage R&R (Repeatability & Reproducibility) Study (< 10% target)",
      "Baseline Process Sigma Level & DPMO Calculation",
    ],
    primaryTools: ["Gage R&R", "Value Stream Mapping", "Process Capability (Cp, Cpk)", "DPMO Calculator"],
  },
  {
    letter: "A",
    name: "Analyze",
    tollgateQuestion: "What are the verified vital few root causes (X's) that drive output variation (Y = f(X))?",
    keyDeliverables: [
      "Root Cause Identification & Statistical Hypothesis Testing",
      "Identification of Non-Value-Added Process Waste (Muda)",
      "Validated Transfer Function: Y = f(X1, X2, ... Xn)",
    ],
    primaryTools: ["Ishikawa Diagram", "5 Whys", "ANOVA / Regression Analysis", "FMEA"],
  },
  {
    letter: "I",
    name: "Improve",
    tollgateQuestion: "What optimized solutions eliminate root causes, and has the solution been piloted and validated?",
    keyDeliverables: [
      "Design of Experiments (DOE) Factorial Optimization",
      "Piloted & Statistically Verified Countermeasures",
      "Cost-Benefit Analysis & Implementation Rollout Schedule",
    ],
    primaryTools: ["Design of Experiments (DOE)", "Poka-Yoke (Mistake Proofing)", "Kaizen Event", "Pilot Run Testing"],
  },
  {
    letter: "C",
    name: "Control",
    tollgateQuestion: "How will the process improvements be standardized and held so the process never reverts back?",
    keyDeliverables: [
      "Statistical Process Control (SPC) Monitoring Dashboard",
      "Standard Operating Procedures (SOP) & Operator Training",
      "Process Control Plan & Project Handoff to Process Owner",
    ],
    primaryTools: ["Control Charts (X̄-R, p-chart)", "Control Plan", "Visual Management / 5S", "Standard Operating Procedures"],
  },
];

export function DmaicRoadmapDiagram() {
  const [selectedPhaseIdx, setSelectedPhaseIdx] = useState<number>(0);
  const activePhase = DMAIC_PHASES[selectedPhaseIdx];

  // Live DPMO Calculation State
  const [defects, setDefects] = useState<number>(17);
  const [units, setUnits] = useState<number>(5000);
  const [opportunities, setOpportunities] = useState<number>(4);

  const dpmo = Math.round((defects / (units * opportunities)) * 1000000);

  const getSigmaLevel = (val: number) => {
    if (val <= 3.4) return "6.0σ (World Class)";
    if (val <= 233) return "5.0σ";
    if (val <= 6210) return "4.0σ (Industry Benchmark)";
    if (val <= 66807) return "3.0σ (Traditional Standard)";
    return "≤ 2.0σ (Severe Quality Crisis)";
  };

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <Layers className="size-3.5 text-amber-400" />
          Six Sigma Operational Excellence
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          Six Sigma DMAIC Roadmap & DPMO Mathematical Engine
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          Structured phase-gate problem-solving framework targeting 3.4 Defects Per Million Opportunities (DPMO) with a 1.5-sigma long-term process shift.
        </p>
      </div>

      {/* DMAIC Phase Chevron Pipeline */}
      <div className="grid grid-cols-5 gap-1 sm:gap-2">
        {DMAIC_PHASES.map((phase, idx) => {
          const isSelected = selectedPhaseIdx === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedPhaseIdx(idx)}
              className={`rounded-xl p-2.5 text-center transition-all ${
                isSelected
                  ? "bg-[#0F172A] text-white shadow-md ring-2 ring-[#0F172A]/20"
                  : "bg-white text-[#334155] border border-[#CBD5E1] hover:bg-[#F8FAFC]"
              }`}
            >
              <span className="font-mono text-base font-black block">{phase.letter}</span>
              <span className="text-[11px] font-bold block truncate">{phase.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Phase Tollgate Card */}
      <div className="mt-4 rounded-xl border-2 border-[#CBD5E1] bg-white p-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-[#0284C7] text-white px-3 py-1 font-mono text-xs font-bold">
              Phase {selectedPhaseIdx + 1}: {activePhase.name.toUpperCase()}
            </span>
          </div>
          <span className="text-xs text-[#64748B] italic">Tollgate Review Mandatory</span>
        </div>

        {/* Tollgate Review Question */}
        <div className="rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] p-3 text-xs">
          <span className="font-bold text-[#0F172A] block mb-0.5 uppercase text-[10px] tracking-wider">
            🔑 Key Tollgate Executive Question:
          </span>
          <p className="text-[#334155] italic font-medium">"{activePhase.tollgateQuestion}"</p>
        </div>

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {/* Deliverables */}
          <div className="rounded-lg bg-[#F0FDF4] p-3 border border-[#BBF7D0]">
            <span className="font-bold text-[#166534] block mb-1.5 uppercase text-[10px] tracking-wider">
              Mandatory Deliverables:
            </span>
            <ul className="space-y-1">
              {activePhase.keyDeliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs text-[#14532D]">
                  <CheckCircle2 className="size-3.5 mt-0.5 shrink-0 text-[#16A34A]" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="rounded-lg bg-[#F0F9FF] p-3 border border-[#BAE6FD]">
            <span className="font-bold text-[#0369A1] block mb-1.5 uppercase text-[10px] tracking-wider">
              Primary Analytical Tools:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activePhase.primaryTools.map((t, i) => (
                <span key={i} className="rounded bg-white border border-[#BAE6FD] px-2 py-0.5 text-[11px] font-semibold text-[#0369A1]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Live DPMO Calculation Engine */}
      <div className="mt-4 rounded-xl border border-[#CBD5E1] bg-white p-5 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3 mb-3">
          <span className="font-sans text-xs font-bold uppercase text-[#0F172A] flex items-center gap-1.5">
            <Calculator className="size-4 text-[#0284C7]" /> Live DPMO & Sigma Level Mathematical Calculator
          </span>
          <code className="text-xs font-mono font-bold text-[#0284C7]">
            DPMO = [D / (U × O)] × 10⁶
          </code>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="text-[11px] font-bold text-[#475569] block mb-1">
              Defects Found (D):
            </label>
            <input
              type="number"
              value={defects}
              onChange={(e) => setDefects(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full rounded-lg border border-[#CBD5E1] p-2 text-xs font-mono font-bold text-[#0F172A]"
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-[#475569] block mb-1">
              Units Inspected (U):
            </label>
            <input
              type="number"
              value={units}
              onChange={(e) => setUnits(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full rounded-lg border border-[#CBD5E1] p-2 text-xs font-mono font-bold text-[#0F172A]"
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-[#475569] block mb-1">
              Opportunities / Unit (O):
            </label>
            <input
              type="number"
              value={opportunities}
              onChange={(e) => setOpportunities(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full rounded-lg border border-[#CBD5E1] p-2 text-xs font-mono font-bold text-[#0F172A]"
            />
          </div>
        </div>

        {/* Live Calculation Output */}
        <div className="mt-3 rounded-lg bg-[#0F172A] text-white p-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block">Calculated Metrics</span>
            <span className="font-mono text-xl font-bold text-amber-400">
              {dpmo.toLocaleString()} DPMO
            </span>
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block">Estimated Sigma Quality Level</span>
            <span className="font-mono text-sm font-bold text-white bg-[#1E293B] px-3 py-1 rounded border border-[#334155]">
              {getSigmaLevel(dpmo)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
