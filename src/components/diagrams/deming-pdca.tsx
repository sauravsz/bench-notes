import React, { useState } from "react";
import { RotateCw, Award, BookOpen, CheckCircle2, UserCheck } from "lucide-react";

interface Guru {
  name: string;
  corePhilosophy: string;
  primaryFramework: string;
  definitionOfQuality: string;
  responsibilityForQuality: string;
  keyContributions: string[];
}

const GURUS: Guru[] = [
  {
    name: "W. Edwards Deming",
    corePhilosophy: "Management-driven system transformation; 94% of quality problems stem from system design, not worker laziness.",
    primaryFramework: "14 Points for Management & System of Profound Knowledge (SoPK)",
    definitionOfQuality: "A predictable degree of uniformity and dependability at low cost and suited to the market.",
    responsibilityForQuality: "Management (94%) vs. Workers (6%)",
    keyContributions: [
      "14 Points for Management (Eliminate slogans, remove numerical quotas, break down silos)",
      "System of Profound Knowledge (Appreciation for system, Theory of variation, Theory of knowledge, Psychology)",
      "PDCA / Shewhart Continuous Improvement Cycle",
      "7 Deadly Diseases of Management",
    ],
  },
  {
    name: "Joseph M. Juran",
    corePhilosophy: "Fitness for purpose; quality does not happen by accident, it must be planned like financial budgeting.",
    primaryFramework: "The Juran Quality Trilogy (Planning, Control, Improvement)",
    definitionOfQuality: "Fitness for use (combining quality of design and quality of conformance).",
    responsibilityForQuality: "Top Management & Cross-functional Teams",
    keyContributions: [
      "Juran Quality Trilogy (Quality Planning, Quality Control, Quality Improvement)",
      "Application of Pareto Principle (80/20 Rule: Vital Few vs. Useful Many) to Quality",
      "Cost of Poor Quality (COPQ) Quantification",
      "Juran's Breakthrough Sequence for Project-by-Project Improvement",
    ],
  },
  {
    name: "Philip B. Crosby",
    corePhilosophy: "Zero Defects is a management standard, not a motivational slogan. Doing it right the first time is always cheaper.",
    primaryFramework: "Four Absolutes of Quality & 14 Steps to Quality Improvement",
    definitionOfQuality: "Conformance to requirements (strictly non-subjective).",
    responsibilityForQuality: "Executive Leadership & Individual Accountability",
    keyContributions: [
      "Four Absolutes of Quality Management",
      "Performance standard of Zero Defects (ZD)",
      "Measurement of Quality = Price of Nonconformance (PONC)",
      "'Quality is Free'—the cost of prevention is a fraction of failure cost",
    ],
  },
  {
    name: "Armand V. Feigenbaum",
    corePhilosophy: "Quality is everybody's job, which makes it nobody's job unless guided by a unified total system.",
    primaryFramework: "Total Quality Control (TQC) & PAF Cost Model",
    definitionOfQuality: "The total composite product and service characteristics of marketing, engineering, and manufacture that meet customer expectation.",
    responsibilityForQuality: "Cross-enterprise Total Organization",
    keyContributions: [
      "Pioneered Total Quality Control (TQC) across the entire product lifecycle",
      "Cost of Quality PAF Classification (Prevention, Appraisal, Failure)",
      "Discovered the 'Hidden Plant' (up to 40% of factory capacity wasted fixing defects)",
    ],
  },
  {
    name: "Kaoru Ishikawa",
    corePhilosophy: "Company-wide quality control (CWQC); democratizing statistical tools so frontline factory workers solve operational defects.",
    primaryFramework: "Seven Basic QC Tools & Quality Control (QC) Circles",
    definitionOfQuality: "Developing, designing, producing and servicing a quality product that is most economical and useful.",
    responsibilityForQuality: "Every employee from shop floor to Board of Directors",
    keyContributions: [
      "Ishikawa / Fishbone (Cause-and-Effect) Diagram",
      "Formalized the Seven Basic Quality Control (7 QC) Tools",
      "Originated Quality Control (QC) Circles in Japanese industry",
      "Coined the concept: 'The Next Process is Your Customer'",
    ],
  },
];

export function DemingPdcaDiagram() {
  const [selectedGuruIdx, setSelectedGuruIdx] = useState<number>(0);
  const activeGuru = GURUS[selectedGuruIdx];

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <Award className="size-3.5 text-amber-400" />
          TQM Philosophies & Continuous Improvement
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          Deming PDCA Cycle & Quality Gurus Matrix
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          Comparing the foundational paradigms of Deming, Juran, Crosby, Feigenbaum, and Ishikawa for 14-mark examination mastery.
        </p>
      </div>

      {/* SVG Deming PDCA Cycle */}
      <div className="rounded-xl border border-[#CBD5E1] bg-white p-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3 mb-4">
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#0F172A]">
            The Shewhart / Deming PDCA Improvement Wheel
          </span>
          <span className="text-[11px] font-medium text-[#64748B] flex items-center gap-1">
            <RotateCw className="size-3 text-[#0284C7]" /> Continuous Iterative Cycle
          </span>
        </div>

        <div className="overflow-x-auto">
          <svg viewBox="0 0 540 260" className="w-full max-w-[540px] mx-auto select-none font-sans">
            {/* 4 Quadrants */}
            {/* PLAN (Top Right) */}
            <rect x="275" y="20" width="230" height="100" rx="10" fill="#F0F9FF" stroke="#0284C7" strokeWidth="2" />
            <text x="290" y="45" fill="#0369A1" fontSize="13" fontWeight="bold">1. PLAN (P)</text>
            <text x="290" y="65" fill="#334155" fontSize="10">• Identify problem & root cause</text>
            <text x="290" y="80" fill="#334155" fontSize="10">• Formulate countermeasures & baseline metrics</text>
            <text x="290" y="95" fill="#334155" fontSize="10">• Design pilot experiment</text>

            {/* DO (Bottom Right) */}
            <rect x="275" y="135" width="230" height="100" rx="10" fill="#F0FDF4" stroke="#059669" strokeWidth="2" />
            <text x="290" y="160" fill="#166534" fontSize="13" fontWeight="bold">2. DO (D)</text>
            <text x="290" y="180" fill="#334155" fontSize="10">• Implement pilot test on small scale</text>
            <text x="290" y="195" fill="#334155" fontSize="10">• Train frontline operators</text>
            <text x="290" y="210" fill="#334155" fontSize="10">• Collect high-frequency process data</text>

            {/* CHECK / STUDY (Bottom Left) */}
            <rect x="35" y="135" width="230" height="100" rx="10" fill="#FFFBEB" stroke="#D97706" strokeWidth="2" />
            <text x="50" y="160" fill="#92400E" fontSize="13" fontWeight="bold">3. CHECK / STUDY (C/S)</text>
            <text x="50" y="180" fill="#334155" fontSize="10">• Compare pilot results with targets</text>
            <text x="50" y="195" fill="#334155" fontSize="10">• Identify unintended side effects</text>
            <text x="50" y="210" fill="#334155" fontSize="10">• Validate statistical significance</text>

            {/* ACT / STANDARDIZE (Top Left) */}
            <rect x="35" y="20" width="230" height="100" rx="10" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="2" />
            <text x="50" y="45" fill="#5B21B6" fontSize="13" fontWeight="bold">4. ACT / STANDARDIZE (A)</text>
            <text x="50" y="65" fill="#334155" fontSize="10">• Institutionalize standard operating procedure</text>
            <text x="50" y="80" fill="#334155" fontSize="10">• Roll out company-wide</text>
            <text x="50" y="95" fill="#334155" fontSize="10">• Wedge the wheel (SDCA standard lock)</text>

            {/* Center Rotation Hub */}
            <circle cx="270" cy="127" r="22" fill="#0F172A" />
            <text x="270" y="131" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">PDCA</text>
          </svg>
        </div>
      </div>

      {/* Guru Selector Tabs */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2">
        {GURUS.map((g, idx) => {
          const isSelected = selectedGuruIdx === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedGuruIdx(idx)}
              className={`p-2.5 rounded-xl border text-center transition-all ${
                isSelected
                  ? "border-[#0F172A] bg-white ring-2 ring-[#0F172A]/10 shadow-sm"
                  : "border-[#E2E8F0] bg-[#F8FAFC] hover:bg-white"
              }`}
            >
              <span className="font-sans text-xs font-bold text-[#0F172A] block">
                {g.name.split(" ").slice(-1)[0]}
              </span>
              <span className="text-[10px] text-[#64748B] block mt-0.5">
                {idx === 0 && "14 Points"}
                {idx === 1 && "Trilogy"}
                {idx === 2 && "Zero Defects"}
                {idx === 3 && "TQC"}
                {idx === 4 && "7 QC Tools"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Guru Profile Breakdown */}
      <div className="mt-4 rounded-xl border-2 border-[#CBD5E1] bg-white p-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="rounded bg-[#1E293B] text-white px-2.5 py-0.5 text-xs font-bold">
              {activeGuru.name}
            </span>
            <span className="text-xs text-[#64748B]">[{activeGuru.primaryFramework}]</span>
          </div>
          <span className="text-xs font-bold text-[#0284C7] bg-[#F0F9FF] border border-[#BAE6FD] px-2 py-0.5 rounded">
            Responsibility: {activeGuru.responsibilityForQuality}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="rounded-lg bg-[#F8FAFC] p-3 border border-[#E2E8F0]">
            <strong className="text-[#0F172A] block mb-1">Definition of Quality:</strong>
            <p className="text-[#334155] italic">"{activeGuru.definitionOfQuality}"</p>
          </div>
          <div className="rounded-lg bg-[#F8FAFC] p-3 border border-[#E2E8F0]">
            <strong className="text-[#0F172A] block mb-1">Core Operational Philosophy:</strong>
            <p className="text-[#334155]">{activeGuru.corePhilosophy}</p>
          </div>
        </div>

        <div className="mt-3 rounded-lg bg-[#F0FDF4] p-3 border border-[#BBF7D0]">
          <strong className="text-[#166534] text-xs block mb-1">★ Key Landmark Contributions:</strong>
          <ul className="space-y-1">
            {activeGuru.keyContributions.map((kc, i) => (
              <li key={i} className="flex items-start gap-1.5 text-xs text-[#14532D]">
                <CheckCircle2 className="size-3.5 mt-0.5 shrink-0 text-[#16A34A]" />
                <span>{kc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
