import React, { useState } from "react";
import { DollarSign, Shield, Eye, Flame, AlertOctagon, TrendingUp, Layers } from "lucide-react";

interface CoqCategory {
  id: string;
  name: string;
  classification: "Conformance" | "Non-conformance";
  colorBadge: string;
  percentage: string;
  description: string;
  costLeverage: string;
  examples: string[];
}

const COQ_CATEGORIES: CoqCategory[] = [
  {
    id: "prevention",
    name: "Prevention Costs",
    classification: "Conformance",
    colorBadge: "bg-[#059669] text-white",
    percentage: "5% – 10% (Target: > 50%)",
    description: "Investments made to design quality into products and processes from day one, preventing defects from ever occurring.",
    costLeverage: "$1.00 invested here yields the highest strategic return on investment in operations.",
    examples: [
      "Quality engineering design reviews & DFMEA / PFMEA sessions",
      "Poka-Yoke (mistake-proofing) tooling & fixture fabrication",
      "Supplier qualification, certification, and technical audits",
      "Employee SPC, Six Sigma, and operational training programs",
      "Preventive maintenance and machine calibration schedules",
    ],
  },
  {
    id: "appraisal",
    name: "Appraisal Costs",
    classification: "Conformance",
    colorBadge: "bg-[#0284C7] text-white",
    percentage: "20% – 25%",
    description: "Expenses incurred in measuring, evaluating, or auditing products, components, and services to assure conformance.",
    costLeverage: "$10.00 cost per defect caught during inspection vs. $1.00 to prevent at source.",
    examples: [
      "Receiving inspection of incoming raw materials and parts",
      "In-line automated vision sensors and coordinate measuring machines (CMM)",
      "Laboratory destructive and non-destructive testing (NDT)",
      "Internal quality audits and ISO surveillance audits",
      "Calibration of inspection gauges and test instruments",
    ],
  },
  {
    id: "internal-failure",
    name: "Internal Failure Costs",
    classification: "Non-conformance",
    colorBadge: "bg-[#D97706] text-white",
    percentage: "25% – 40%",
    description: "Costs resulting from defects, non-conformities, and errors detected BEFORE delivery or shipment to the customer.",
    costLeverage: "Represents waste (Muda) and capacity cannibalization inside the 'Hidden Plant'.",
    examples: [
      "Scrap (discarded raw material and non-repairable sub-assemblies)",
      "Rework and repair labor to re-machine or rewire defective units",
      "Re-testing and re-inspection of corrected items",
      "Equipment downtime and yield loss caused by line jams",
      "Downgrading product selling price to secondary / scrap markets",
    ],
  },
  {
    id: "external-failure",
    name: "External Failure Costs",
    classification: "Non-conformance",
    colorBadge: "bg-[#DC2626] text-white",
    percentage: "40% – 50% (Most Catastrophic)",
    description: "Costs incurred when a defective product reaches the end customer. Highest economic and reputational damage.",
    costLeverage: "$100.00+ multiplier: Triggers warranty payouts, brand erosion, customer defection, and potential litigation.",
    examples: [
      "Warranty claim repairs, part replacements, and field service labor",
      "Product recall campaigns, logistics, and regulatory penalties",
      "Customer complaint investigation and dispute resolution teams",
      "Product liability lawsuits and legal settlement payouts",
      "Permanent loss of brand equity, market share, and repeat orders",
    ],
  },
];

export function CoqPafModelDiagram() {
  const [selectedCatId, setSelectedCatId] = useState<string>("prevention");
  const activeCat = COQ_CATEGORIES.find((c) => c.id === selectedCatId) || COQ_CATEGORIES[0];

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <DollarSign className="size-3.5 text-amber-400" />
          Economics of Quality & PAF Architecture
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          Cost of Quality (COQ) PAF Model & 1-10-100 Rule
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          Armand Feigenbaum's classification of Prevention, Appraisal, Internal Failure, and External Failure costs to expose the "Hidden Plant".
        </p>
      </div>

      {/* 1-10-100 Prevention Leverage Visualizer */}
      <div className="rounded-xl border border-[#CBD5E1] bg-white p-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3 mb-4">
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#0F172A]">
            The 1-10-100 Prevention Leverage Multiplier
          </span>
          <span className="text-[11px] font-mono text-[#059669] font-bold">
            ROI: Prevention &gt;&gt; Inspection &gt;&gt; Warranty
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] p-4">
            <span className="font-mono text-2xl font-black text-[#166534] block">$1</span>
            <span className="text-xs font-bold text-[#15803D] uppercase block mt-1">Prevention Cost</span>
            <p className="text-[11px] text-[#166534] mt-1 leading-snug">
              Invested during design & engineering (FMEA, Poka-Yoke, training) to eliminate defect origins.
            </p>
          </div>

          <div className="rounded-xl border border-[#BAE6FD] bg-[#F0F9FF] p-4">
            <span className="font-mono text-2xl font-black text-[#0369A1] block">$10</span>
            <span className="text-xs font-bold text-[#0284C7] uppercase block mt-1">Appraisal & Rework</span>
            <p className="text-[11px] text-[#0369A1] mt-1 leading-snug">
              Cost to inspect, detect, and rework a defective part inside the factory before shipment.
            </p>
          </div>

          <div className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] p-4">
            <span className="font-mono text-2xl font-black text-[#991B1B] block">$100+</span>
            <span className="text-xs font-bold text-[#DC2626] uppercase block mt-1">External Failure</span>
            <p className="text-[11px] text-[#991B1B] mt-1 leading-snug">
              Cost when defect escapes to the customer: warranty, recalls, brand destruction, litigation.
            </p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {COQ_CATEGORIES.map((cat) => {
          const isSelected = selectedCatId === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCatId(cat.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isSelected
                  ? "border-[#0F172A] bg-white ring-2 ring-[#0F172A]/10 shadow-sm"
                  : "border-[#E2E8F0] bg-[#F8FAFC] hover:bg-white"
              }`}
            >
              <span className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold ${cat.colorBadge}`}>
                {cat.classification}
              </span>
              <span className="mt-1.5 block text-xs font-bold text-[#0F172A]">
                {cat.name}
              </span>
              <span className="text-[10px] text-[#64748B] block mt-0.5">
                Typical: {cat.percentage}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Category Breakdown Card */}
      <div className="mt-4 rounded-xl border-2 border-[#CBD5E1] bg-white p-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className={`rounded-lg px-2.5 py-1 text-xs font-bold ${activeCat.colorBadge}`}>
              {activeCat.name}
            </span>
            <span className="text-xs text-[#64748B]">[{activeCat.classification} Cost]</span>
          </div>
          <span className="font-mono text-xs font-bold text-[#0F172A] bg-[#F1F5F9] px-2.5 py-1 rounded">
            Impact: {activeCat.costLeverage}
          </span>
        </div>

        <p className="font-sans text-xs text-[#334155] leading-relaxed">
          {activeCat.description}
        </p>

        {/* Real Industrial Examples */}
        <div className="mt-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] p-3">
          <span className="font-sans text-[11px] font-bold text-[#0F172A] uppercase block mb-1.5 tracking-wider">
            Operational Cost Centers & Line Items:
          </span>
          <ul className="space-y-1">
            {activeCat.examples.map((ex, i) => (
              <li key={i} className="flex items-start gap-1.5 text-xs text-[#334155]">
                <span className="text-[#0284C7] font-bold">•</span>
                <span>{ex}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
