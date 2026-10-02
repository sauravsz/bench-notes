import React, { useState } from "react";
import { Calculator, Scale, TrendingDown, DollarSign, Layers, CheckCircle2 } from "lucide-react";

export function EoqModelDiagram() {
  const [demand, setDemand] = useState<number>(10000); // D = 10,000 units/year
  const [orderCost, setOrderCost] = useState<number>(50); // S = $50/order
  const [holdingCost, setHoldingCost] = useState<number>(4); // H = $4/unit/year
  const [orderQty, setOrderQty] = useState<number>(500);

  // EOQ Calculation
  const optimalQ = Math.round(Math.sqrt((2 * demand * orderCost) / holdingCost));
  const optimalTotalCost = Math.round((demand / optimalQ) * orderCost + (optimalQ / 2) * holdingCost);

  // Current Q Calculation
  const currentAnnualOrderCost = Math.round((demand / orderQty) * orderCost);
  const currentAnnualHoldCost = Math.round((orderQty / 2) * holdingCost);
  const currentTotalCost = currentAnnualOrderCost + currentAnnualHoldCost;

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <Calculator className="size-3.5 text-amber-400" />
          Logistical Inventory Optimization
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          Economic Order Quantity (EOQ) Cost Trade-off Model
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          Ford W. Harris mathematical formulation balancing Annual Ordering / Setup Costs against Annual Inventory Holding Costs to find optimal batch size ($Q^*$).
        </p>
      </div>

      {/* SVG Interactive Cost Curve */}
      <div className="rounded-xl border border-[#CBD5E1] bg-white p-4 shadow-xs">
        <div className="flex flex-wrap items-center justify-between border-b border-[#F1F5F9] pb-3 mb-4 gap-2">
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#0F172A]">
            Cost Curve Intersection (Optimal Q* = √(2DS/H))
          </span>
          <div className="flex items-center gap-3 text-[11px] font-mono font-bold">
            <span className="text-[#DC2626]">■ Holding Cost (Q/2 × H)</span>
            <span className="text-[#0284C7]">■ Ordering Cost (D/Q × S)</span>
            <span className="text-[#059669]">■ Total Cost (TC)</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <svg viewBox="0 0 600 260" className="w-full max-w-[600px] mx-auto select-none font-sans">
            {/* Axes */}
            <line x1="60" y1="220" x2="560" y2="220" stroke="#64748B" strokeWidth="2" />
            <line x1="60" y1="20" x2="60" y2="220" stroke="#64748B" strokeWidth="2" />

            {/* Labels */}
            <text x="560" y="240" textAnchor="end" fill="#0F172A" fontSize="11" fontWeight="bold">
              Order Quantity (Q) →
            </text>
            <text x="40" y="30" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold" transform="rotate(-90 40 30)">
              Annual Cost ($) →
            </text>

            {/* 1. Holding Cost Line (Linear Increasing: Red) */}
            <line x1="60" y1="220" x2="520" y2="40" stroke="#DC2626" strokeWidth="2.5" />
            <text x="480" y="60" fill="#DC2626" fontSize="10" fontWeight="bold">
              Holding Cost (Q/2 · H)
            </text>

            {/* 2. Ordering Cost Curve (Hyperbolic Decreasing: Blue) */}
            <path
              d="M 80 40 Q 140 180 540 210"
              fill="none"
              stroke="#0284C7"
              strokeWidth="2.5"
            />
            <text x="480" y="200" fill="#0284C7" fontSize="10" fontWeight="bold">
              Ordering Cost (D/Q · S)
            </text>

            {/* 3. Total Cost Curve (U-Shaped Parabola: Green) */}
            <path
              d="M 90 60 Q 280 230 520 70"
              fill="none"
              stroke="#059669"
              strokeWidth="3.5"
            />
            <text x="320" y="105" fill="#059669" fontSize="11" fontWeight="bold">
              Total Cost Curve TC(Q)
            </text>

            {/* EOQ Optimal Point Vector */}
            <line x1="280" y1="135" x2="280" y2="220" stroke="#0F172A" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="280" cy="135" r="6" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
            <text x="280" y="235" textAnchor="middle" fill="#0F172A" fontSize="10" fontWeight="bold">
              Optimal Q* = {optimalQ} units
            </text>
            <text x="280" y="125" textAnchor="middle" fill="#B45309" fontSize="9" fontWeight="bold">
              Min Cost: ${optimalTotalCost}
            </text>
          </svg>
        </div>
      </div>

      {/* Interactive Sliders Grid */}
      <div className="mt-4 rounded-xl border border-[#CBD5E1] bg-white p-4 sm:p-5 shadow-xs">
        <span className="font-sans text-xs font-bold uppercase text-[#0F172A] block mb-3">
          Live Inventory Parameter Adjuster
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Annual Demand */}
          <div className="rounded-lg bg-[#F8FAFC] p-3 border border-[#E2E8F0]">
            <label className="text-[11px] font-bold text-[#475569] block mb-1">
              Annual Demand (D):
            </label>
            <input
              type="number"
              value={demand}
              onChange={(e) => setDemand(Math.max(100, parseInt(e.target.value) || 0))}
              className="w-full rounded border border-[#CBD5E1] p-1.5 font-mono text-xs font-bold text-[#0F172A]"
            />
            <span className="text-[10px] text-[#64748B] block mt-1">units / year</span>
          </div>

          {/* Ordering Cost */}
          <div className="rounded-lg bg-[#F8FAFC] p-3 border border-[#E2E8F0]">
            <label className="text-[11px] font-bold text-[#475569] block mb-1">
              Order Setup Cost (S):
            </label>
            <input
              type="number"
              value={orderCost}
              onChange={(e) => setOrderCost(Math.max(1, parseInt(e.target.value) || 0))}
              className="w-full rounded border border-[#CBD5E1] p-1.5 font-mono text-xs font-bold text-[#0F172A]"
            />
            <span className="text-[10px] text-[#64748B] block mt-1">$ per purchase order</span>
          </div>

          {/* Holding Cost */}
          <div className="rounded-lg bg-[#F8FAFC] p-3 border border-[#E2E8F0]">
            <label className="text-[11px] font-bold text-[#475569] block mb-1">
              Holding Cost (H):
            </label>
            <input
              type="number"
              value={holdingCost}
              onChange={(e) => setHoldingCost(Math.max(0.1, parseFloat(e.target.value) || 0))}
              className="w-full rounded border border-[#CBD5E1] p-1.5 font-mono text-xs font-bold text-[#0F172A]"
            />
            <span className="text-[10px] text-[#64748B] block mt-1">$ per unit / year</span>
          </div>
        </div>

        {/* Calculated Results */}
        <div className="mt-4 rounded-xl bg-[#0F172A] text-white p-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block">Optimal Order Quantity (EOQ)</span>
            <span className="font-mono text-2xl font-bold text-amber-400">
              {optimalQ.toLocaleString()} units
            </span>
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block">Minimum Annual Total Cost</span>
            <span className="font-mono text-xl font-bold text-white">
              ${optimalTotalCost.toLocaleString()} / year
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
