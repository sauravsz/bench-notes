import React, { useState } from "react";
import { Layers, ArrowRight, CheckCircle2, RotateCw, Factory, Store, UserCheck, Truck } from "lucide-react";

interface ScmCycle {
  id: string;
  name: string;
  interfaces: string;
  primaryActivities: string[];
  pushPullContext: string;
}

const SCM_CYCLES: ScmCycle[] = [
  {
    id: "customer-order",
    name: "1. Customer Order Cycle",
    interfaces: "Customer ↔ Retailer",
    primaryActivities: [
      "Customer arrival and product browsing",
      "Customer order entry / checkout transaction",
      "Order fulfillment and cash/card transaction processing",
      "Customer order receipt and post-purchase consumption"
    ],
    pushPullContext: "Pure Pull process (triggered directly by customer arrival)."
  },
  {
    id: "replenishment",
    name: "2. Replenishment Cycle",
    interfaces: "Retailer ↔ Distributor / Warehouse",
    primaryActivities: [
      "Retail order trigger based on reorder point (ROP) / Min-Max",
      "Distributor warehouse order picking and pallet staging",
      "Freight dispatch and retail receiving / shelf restocking",
      "Inventory record updating and accounts receivable reconciliation"
    ],
    pushPullContext: "Can be Push (replenishing anticipated demand) or Pull (continuous automated scan data replenishment)."
  },
  {
    id: "manufacturing",
    name: "3. Manufacturing Cycle",
    interfaces: "Distributor ↔ Manufacturer",
    primaryActivities: [
      "Master Production Scheduling (MPS) and production order release",
      "Assembly line fabrication, packaging, and quality testing",
      "Finished goods warehousing and shipping documentation",
      "Distributor receiving and inventory check-in"
    ],
    pushPullContext: "Push in Make-to-Stock (MTS) models; Pull in Make-to-Order (MTO) / Build-to-Order models."
  },
  {
    id: "procurement",
    name: "4. Procurement Cycle",
    interfaces: "Manufacturer ↔ Tier-1 Component Supplier",
    primaryActivities: [
      "Material Requirements Planning (MRP) component calculation",
      "Supplier purchase order generation and schedule commitment",
      "Component manufacturing, metallurgical testing, and freight transport",
      "Factory receiving dock check-in or Dock-to-Stock line feed"
    ],
    pushPullContext: "Typically Push process planned well in advance based on long supplier lead times."
  }
];

export function SupplyChainFlowDiagram() {
  const [selectedCycleId, setSelectedCycleId] = useState<string>("customer-order");
  const [decouplingMode, setDecouplingMode] = useState<"mts" | "ato" | "mto">("ato");

  const activeCycle = SCM_CYCLES.find((c) => c.id === selectedCycleId) || SCM_CYCLES[0];

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <Layers className="size-3.5 text-amber-400" />
          Process Views of a Supply Chain
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          Cycle View & Push/Pull Decoupling Boundary Architecture
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          Sunil Chopra's 4-Cycle Framework mapping the Customer Order, Replenishment, Manufacturing, and Procurement Cycles across the Push/Pull Decoupling Boundary.
        </p>
      </div>

      {/* Decoupling Strategy Mode Selector */}
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setDecouplingMode("mts")}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            decouplingMode === "mts"
              ? "bg-[#0F172A] text-white shadow-xs"
              : "bg-white text-[#64748B] border border-[#CBD5E1]"
          }`}
        >
          Make-to-Stock (MTS)
        </button>
        <button
          onClick={() => setDecouplingMode("ato")}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            decouplingMode === "ato"
              ? "bg-[#0F172A] text-white shadow-xs"
              : "bg-white text-[#64748B] border border-[#CBD5E1]"
          }`}
        >
          Assemble-to-Order / Postponement (ATO)
        </button>
        <button
          onClick={() => setDecouplingMode("mto")}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            decouplingMode === "mto"
              ? "bg-[#0F172A] text-white shadow-xs"
              : "bg-white text-[#64748B] border border-[#CBD5E1]"
          }`}
        >
          Make-to-Order (MTO)
        </button>
      </div>

      {/* Interactive 4-Cycle Flow Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
        {SCM_CYCLES.map((cycle) => {
          const isSelected = selectedCycleId === cycle.id;
          return (
            <button
              key={cycle.id}
              onClick={() => setSelectedCycleId(cycle.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isSelected
                  ? "border-[#0F172A] bg-white ring-2 ring-[#0F172A]/10 shadow-sm"
                  : "border-[#CBD5E1] bg-[#F8FAFC] hover:bg-white"
              }`}
            >
              <span className="font-sans text-xs font-bold text-[#0F172A] block line-clamp-1">
                {cycle.name}
              </span>
              <span className="text-[10px] text-[#0284C7] font-semibold block mt-0.5">
                {cycle.interfaces}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Cycle Breakdown */}
      <div className="mt-4 rounded-xl border-2 border-[#CBD5E1] bg-white p-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3 mb-3">
          <span className="font-sans text-sm font-bold text-[#0F172A]">
            {activeCycle.name} [{activeCycle.interfaces}]
          </span>
          <span className="rounded bg-[#F0F9FF] text-[#0369A1] border border-[#BAE6FD] px-2.5 py-0.5 font-mono text-[11px] font-bold">
            {activeCycle.pushPullContext}
          </span>
        </div>

        <span className="font-sans text-[11px] font-bold text-[#0F172A] uppercase block mb-1.5 tracking-wider">
          Sequential Sub-Processes in this Cycle:
        </span>
        <ul className="space-y-1.5 text-xs text-[#334155]">
          {activeCycle.primaryActivities.map((act, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <CheckCircle2 className="size-3.5 mt-0.5 shrink-0 text-[#0284C7]" />
              <span>{act}</span>
            </li>
          ))}
        </ul>

        {/* Decoupling Point Visual Indicator */}
        <div className="mt-4 rounded-lg bg-[#F8FAFC] p-3 border border-[#E2E8F0] text-xs">
          <div className="flex justify-between items-center mb-1">
            <span className="font-bold text-[#0F172A]">
              Decoupling Point: {decouplingMode === "mts" ? "Retail Shelf (Push to Shelf)" : decouplingMode === "ato" ? "Postponement Assembly Cell (Push parts, Pull custom assembly)" : "Raw Material Store (Pull from order)"}
            </span>
            <span className="font-mono text-[10px] bg-[#E2E8F0] px-2 py-0.5 rounded text-[#0F172A]">
              {decouplingMode.toUpperCase()}
            </span>
          </div>
          <p className="text-[#64748B] text-[11px]">
            {decouplingMode === "ato" && "Dell Computers / Paint Tinting Model: Base parts are manufactured and procured via Push; final custom color tinting and assembly are executed via Pull upon customer order."}
            {decouplingMode === "mts" && "Consumer Packaged Goods (CPG): Entire chain operates under Push to maximize high-volume line efficiency and immediate shelf availability."}
            {decouplingMode === "mto" && "Custom Aerospace / Shipbuilding: Manufacturing and procurement are triggered exclusively after customer contract signing."}
          </p>
        </div>
      </div>
    </div>
  );
}
