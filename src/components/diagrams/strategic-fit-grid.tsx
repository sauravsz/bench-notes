import React, { useState } from "react";
import { Compass, CheckCircle2, ShieldAlert, Target, Layers } from "lucide-react";

interface StrategicQuadrant {
  id: string;
  name: string;
  productType: string;
  supplyChainType: string;
  fitStatus: "MATCH" | "MISMATCH";
  badgeBg: string;
  badgeText: string;
  description: string;
  consequence: string;
  example: string;
}

const STRATEGIC_QUADRANTS: StrategicQuadrant[] = [
  {
    id: "functional-efficient",
    name: "Zone of Strategic Fit (Physical Efficiency)",
    productType: "Functional Products (Predictable demand, low margin, long lifecycle)",
    supplyChainType: "Physically Efficient Supply Chain (Cost minimization, high utilization)",
    fitStatus: "MATCH",
    badgeBg: "bg-[#059669]",
    badgeText: "text-white",
    description: "Supply chain strategy is perfectly aligned with product characteristics. Primary focus is eliminating physical waste, maintaining >95% capacity utilization, and securing bulk transportation rates.",
    consequence: "Maximizes operational margins on low-margin staples with near-zero stockout risk.",
    example: "Campbell's Soup, packaged wheat flour, basic white cotton t-shirts, toothpaste."
  },
  {
    id: "innovative-responsive",
    name: "Zone of Strategic Fit (Market Responsiveness)",
    productType: "Innovative Products (Unpredictable demand, high margin, 3–12 month lifecycle)",
    supplyChainType: "Market-Responsive Supply Chain (Agility, speed, buffer capacity)",
    fitStatus: "MATCH",
    badgeBg: "bg-[#0284C7]",
    badgeText: "text-white",
    description: "Supply chain strategy is optimized for decision velocity, rapid response time, and flexible production buffers rather than low unit production cost.",
    consequence: "Minimizes stockouts and forced end-of-season retail markdowns during volatile peak demand windows.",
    example: "Zara fast-fashion bi-weekly apparel collections, Apple flagship iPhone launches, gaming laptops."
  },
  {
    id: "functional-responsive",
    name: "Strategic Mismatch (Unnecessary Cost)",
    productType: "Functional Products (Predictable baseline)",
    supplyChainType: "Market-Responsive Supply Chain (Air freight, buffer stock)",
    fitStatus: "MISMATCH",
    badgeBg: "bg-[#D97706]",
    badgeText: "text-white",
    description: "Using high-cost flexible transportation and decentralized buffer inventory for a product whose demand is completely predictable and stable.",
    consequence: "Severely erodes thin operating profit margins through unnecessary expediting and premium freight fees.",
    example: "Shipping basic table salt or canned soup via priority air express freight."
  },
  {
    id: "innovative-efficient",
    name: "Strategic Mismatch (Catastrophic Risk)",
    productType: "Innovative Products (High margin, short lifecycle)",
    supplyChainType: "Physically Efficient Supply Chain (Slow ocean freight, large batch production)",
    fitStatus: "MISMATCH",
    badgeBg: "bg-[#DC2626]",
    badgeText: "text-white",
    description: "Attempting to minimize piece-part manufacturing cost on high-margin, trendy products with long 16-week ocean supply lead times.",
    consequence: "Severe stockouts during peak market mania followed by massive inventory obsolescence and 70% distress markdowns.",
    example: "Consumer electronics maker ordering 6-month batch forecasts for a fast-changing smartphone model."
  }
];

export function StrategicFitGridDiagram() {
  const [selectedQuadId, setSelectedQuadId] = useState<string>("functional-efficient");
  const activeQuad = STRATEGIC_QUADRANTS.find((q) => q.id === selectedQuadId) || STRATEGIC_QUADRANTS[0];

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <Compass className="size-3.5 text-amber-400" />
          Supply Chain Strategy & Architecture
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          Fisher's Strategic Fit Model: Product-Chain Alignment
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          Marshall Fisher's matrix proving that Functional Products mandate Physically Efficient supply chains, while Innovative Products require Market-Responsive supply chains.
        </p>
      </div>

      {/* 2x2 Interactive Strategic Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Quadrant 1: Functional + Efficient (MATCH) */}
        <div
          onClick={() => setSelectedQuadId("functional-efficient")}
          className={`cursor-pointer rounded-xl border-2 p-4 transition-all ${
            selectedQuadId === "functional-efficient"
              ? "border-[#059669] bg-white ring-2 ring-[#059669]/20 shadow-md"
              : "border-[#E2E8F0] bg-white hover:border-[#059669]/50"
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9] mb-2">
            <span className="rounded bg-[#DCFCE7] text-[#166534] px-2 py-0.5 font-mono text-[10px] font-bold">
              MATCH (Strategic Fit)
            </span>
            <span className="text-[11px] font-bold text-[#059669]">Functional + Efficient</span>
          </div>
          <h5 className="font-serif text-sm font-bold text-[#0F172A]">
            Stable Physical Efficiency
          </h5>
          <p className="text-[11px] text-[#475569] mt-1">
            Cost minimization, high capacity utilization, bulk freight (Campbell's Soup).
          </p>
        </div>

        {/* Quadrant 2: Innovative + Efficient (MISMATCH) */}
        <div
          onClick={() => setSelectedQuadId("innovative-efficient")}
          className={`cursor-pointer rounded-xl border-2 p-4 transition-all ${
            selectedQuadId === "innovative-efficient"
              ? "border-[#DC2626] bg-white ring-2 ring-[#DC2626]/20 shadow-md"
              : "border-[#E2E8F0] bg-white hover:border-[#DC2626]/50"
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9] mb-2">
            <span className="rounded bg-[#FEE2E2] text-[#991B1B] px-2 py-0.5 font-mono text-[10px] font-bold">
              MISMATCH (High Risk)
            </span>
            <span className="text-[11px] font-bold text-[#DC2626]">Innovative + Efficient</span>
          </div>
          <h5 className="font-serif text-sm font-bold text-[#0F172A]">
            Obsolescence & Stockouts
          </h5>
          <p className="text-[11px] text-[#475569] mt-1">
            Slow ocean batches for fast-moving fashion/electronics lead to 70% markdowns.
          </p>
        </div>

        {/* Quadrant 3: Functional + Responsive (MISMATCH) */}
        <div
          onClick={() => setSelectedQuadId("functional-responsive")}
          className={`cursor-pointer rounded-xl border-2 p-4 transition-all ${
            selectedQuadId === "functional-responsive"
              ? "border-[#D97706] bg-white ring-2 ring-[#D97706]/20 shadow-md"
              : "border-[#E2E8F0] bg-white hover:border-[#D97706]/50"
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9] mb-2">
            <span className="rounded bg-[#FEF3C7] text-[#92400E] px-2 py-0.5 font-mono text-[10px] font-bold">
              MISMATCH (Excess Cost)
            </span>
            <span className="text-[11px] font-bold text-[#D97706]">Functional + Responsive</span>
          </div>
          <h5 className="font-serif text-sm font-bold text-[#0F172A]">
            Margin Cannibalization
          </h5>
          <p className="text-[11px] text-[#475569] mt-1">
            Paying premium air freight and buffer inventory for predictable staples.
          </p>
        </div>

        {/* Quadrant 4: Innovative + Responsive (MATCH) */}
        <div
          onClick={() => setSelectedQuadId("innovative-responsive")}
          className={`cursor-pointer rounded-xl border-2 p-4 transition-all ${
            selectedQuadId === "innovative-responsive"
              ? "border-[#0284C7] bg-white ring-2 ring-[#0284C7]/20 shadow-md"
              : "border-[#E2E8F0] bg-white hover:border-[#0284C7]/50"
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9] mb-2">
            <span className="rounded bg-[#E0F2FE] text-[#0369A1] px-2 py-0.5 font-mono text-[10px] font-bold">
              MATCH (Strategic Fit)
            </span>
            <span className="text-[11px] font-bold text-[#0284C7]">Innovative + Responsive</span>
          </div>
          <h5 className="font-serif text-sm font-bold text-[#0F172A]">
            Agility & Market Speed
          </h5>
          <p className="text-[11px] text-[#475569] mt-1">
            Buffer capacity, rapid lead times, zero markdowns (Zara fast fashion).
          </p>
        </div>
      </div>

      {/* Selected Detail Breakdown Card */}
      <div className="mt-4 rounded-xl border-2 border-[#CBD5E1] bg-white p-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3 mb-3">
          <span className="font-sans text-sm font-bold text-[#0F172A]">
            {activeQuad.name}
          </span>
          <span className={`rounded-md px-2.5 py-0.5 text-xs font-bold ${activeQuad.badgeBg} ${activeQuad.badgeText}`}>
            {activeQuad.fitStatus}
          </span>
        </div>

        <p className="font-sans text-xs text-[#334155] leading-relaxed">
          {activeQuad.description}
        </p>

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="rounded-lg bg-[#F8FAFC] p-3 border border-[#E2E8F0]">
            <span className="font-bold text-[#0F172A] block mb-1">Operational Consequence:</span>
            <p className="text-[#475569] leading-snug">{activeQuad.consequence}</p>
          </div>
          <div className="rounded-lg bg-[#F0FDF4] p-3 border border-[#BBF7D0]">
            <span className="font-bold text-[#166534] block mb-1">★ Benchmark Industry Example:</span>
            <p className="text-[#14532D] italic leading-snug">{activeQuad.example}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
