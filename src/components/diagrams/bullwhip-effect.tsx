import React, { useState } from "react";
import { TrendingUp, Activity, CheckCircle2, ShieldAlert, Layers, ArrowRight } from "lucide-react";

interface BullwhipCause {
  id: string;
  name: string;
  driver: string;
  mechanism: string;
  countermeasure: string;
  example: string;
}

const BULLWHIP_CAUSES: BullwhipCause[] = [
  {
    id: "forecast",
    name: "1. Demand Forecast Updating",
    driver: "Order Signal Processing without POS Data",
    mechanism: "Each upstream tier treats incoming customer orders as demand signals, independently adjusting safety stocks and lead-time demand, compounding variability.",
    countermeasure: "Direct electronic Point-of-Sale (POS) data sharing across all tiers; Vendor-Managed Inventory (VMI); collaborative forecasting (CPFR).",
    example: "Procter & Gamble sharing Pampers scanner data from Walmart cash registers directly with chemical raw material suppliers."
  },
  {
    id: "batching",
    name: "2. Order Batching",
    driver: "Fixed Ordering Costs & Full Truckload (FTL) Economics",
    mechanism: "Retailers delay placing orders until accumulating full truckload batches or end-of-month ordering cycles, creating sporadic surges and prolonged zero-demand valleys.",
    countermeasure: "EDI electronic order processing to reduce transaction costs; third-party logistics (3PL) mixed-load multi-stop 'milk runs'; fractional pallet orders.",
    example: "Campbell's Soup implementing continuous daily replenishment to eliminate massive monthly batch spikes."
  },
  {
    id: "pricing",
    name: "3. Price Fluctuations & Promotions",
    driver: "Trade Deals & Forward Buying",
    mechanism: "Periodic wholesale promotional discounts and volume rebates incentivize retailers to buy months of inventory in advance ('forward buying'), followed by sudden order freezes.",
    countermeasure: "Adoption of Everyday Low Pricing (EDLP); value-based pricing without volume-rebate spikes.",
    example: "Walmart's strict EDLP policy eliminating artificial seasonal order peaks across consumer goods suppliers."
  },
  {
    id: "rationing",
    name: "4. Rationing and Shortage Gaming",
    driver: "Supply Scarcity & Allocation Protocols",
    mechanism: "During product shortages, manufacturers ration supply proportionally based on order sizes; buyers artificially inflate order quantities by 200–300% ('phantom orders') to secure desired volume.",
    countermeasure: "Allocating scarce production capacity based on historical past sales records rather than current inflated order queues; non-cancelable order penalties.",
    example: "Cisco and semiconductor fabrication plants verifying actual OEM consumption rates during chip shortages."
  }
];

export function BullwhipEffectDiagram() {
  const [selectedCauseId, setSelectedCauseId] = useState<string>("forecast");
  const activeCause = BULLWHIP_CAUSES.find((c) => c.id === selectedCauseId) || BULLWHIP_CAUSES[0];

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <Activity className="size-3.5 text-amber-400" />
          Supply Chain Dynamics & Coordination
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          The Bullwhip Effect: Demand Variance Amplification
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          Hau Lee's framework demonstrating how minor retail demand fluctuations ($\sigma^2$) amplify into catastrophic volatility as orders propagate upstream to Tier-1 suppliers.
        </p>
      </div>

      {/* SVG Wave Amplification Diagram */}
      <div className="rounded-xl border border-[#CBD5E1] bg-white p-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3 mb-4">
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#0F172A]">
            Upstream Variance Multiplier (σ² Supplier ≫ σ² Retailer)
          </span>
          <span className="text-[11px] font-mono font-bold text-[#DC2626]">
            Amplification Vector: Retailer → Distributor → Manufacturer → Tier-1 Supplier
          </span>
        </div>

        <div className="overflow-x-auto">
          <svg viewBox="0 0 600 240" className="w-full max-w-[600px] mx-auto select-none font-sans">
            {/* Grid background */}
            <line x1="50" y1="120" x2="550" y2="120" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Stage 1: Consumer / Retail Demand (Low Variance) */}
            <path
              d="M 50 120 Q 75 105 100 120 T 150 120"
              fill="none"
              stroke="#059669"
              strokeWidth="3"
            />
            <circle cx="150" cy="120" r="4" fill="#059669" />
            <text x="100" y="85" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="bold">
              1. Retail Sales
            </text>
            <text x="100" y="100" textAnchor="middle" fill="#64748B" fontSize="9">
              Variance: ±5%
            </text>

            {/* Stage 2: Wholesale / Distributor Orders (Medium Variance) */}
            <path
              d="M 150 120 Q 185 85 220 120 T 290 120"
              fill="none"
              stroke="#0284C7"
              strokeWidth="3"
            />
            <circle cx="290" cy="120" r="4" fill="#0284C7" />
            <text x="220" y="65" textAnchor="middle" fill="#0284C7" fontSize="10" fontWeight="bold">
              2. Distributor Orders
            </text>
            <text x="220" y="80" textAnchor="middle" fill="#64748B" fontSize="9">
              Variance: ±18%
            </text>

            {/* Stage 3: Manufacturer Production Orders (High Variance) */}
            <path
              d="M 290 120 Q 330 45 370 120 T 450 120"
              fill="none"
              stroke="#D97706"
              strokeWidth="3"
            />
            <circle cx="450" cy="120" r="4" fill="#D97706" />
            <text x="370" y="35" textAnchor="middle" fill="#D97706" fontSize="10" fontWeight="bold">
              3. Factory Production
            </text>
            <text x="370" y="50" textAnchor="middle" fill="#64748B" fontSize="9">
              Variance: ±45%
            </text>

            {/* Stage 4: Tier-1 Raw Material Supplier Orders (Extreme Variance) */}
            <path
              d="M 450 120 Q 480 5 510 120 T 570 120"
              fill="none"
              stroke="#DC2626"
              strokeWidth="3.5"
            />
            <circle cx="570" cy="120" r="4" fill="#DC2626" />
            <text x="520" y="15" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="bold">
              4. Tier-1 Raw Supplier
            </text>
            <text x="520" y="30" textAnchor="middle" fill="#991B1B" fontSize="9" fontWeight="bold">
              Variance: ±120%+
            </text>

            {/* Direction Arrow Bottom */}
            <path d="M 60 190 L 540 190" stroke="#0F172A" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="300" y="215" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">
              Direction of Upstream Distortion (Information Delay & Safety Stock Stacking)
            </text>
          </svg>
        </div>
      </div>

      {/* 4 Causes Tabs */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {BULLWHIP_CAUSES.map((cause) => {
          const isSelected = selectedCauseId === cause.id;
          return (
            <button
              key={cause.id}
              onClick={() => setSelectedCauseId(cause.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isSelected
                  ? "border-[#0F172A] bg-white ring-2 ring-[#0F172A]/10 shadow-sm"
                  : "border-[#CBD5E1] bg-[#F8FAFC] hover:bg-white"
              }`}
            >
              <span className="font-sans text-xs font-bold text-[#0F172A] block">
                {cause.name}
              </span>
              <span className="text-[10px] text-[#64748B] block mt-0.5">
                {cause.driver}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Cause Detail Card */}
      <div className="mt-4 rounded-xl border-2 border-[#CBD5E1] bg-white p-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3 mb-3">
          <span className="font-sans text-sm font-bold text-[#0F172A]">
            {activeCause.name}
          </span>
          <span className="rounded bg-[#FEE2E2] text-[#991B1B] border border-[#FECACA] px-2.5 py-0.5 font-mono text-[11px] font-bold">
            Root Cause Driver
          </span>
        </div>

        <p className="font-sans text-xs text-[#334155] leading-relaxed">
          {activeCause.mechanism}
        </p>

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="rounded-lg bg-[#F0FDF4] p-3 border border-[#BBF7D0]">
            <span className="font-sans text-[11px] font-bold text-[#166534] block mb-1">
              ✓ Managerial Levers & Countermeasures:
            </span>
            <p className="text-[#14532D] leading-snug">{activeCause.countermeasure}</p>
          </div>

          <div className="rounded-lg bg-[#F0F9FF] p-3 border border-[#BAE6FD]">
            <span className="font-sans text-[11px] font-bold text-[#0369A1] block mb-1">
              ★ Benchmark Industry Case:
            </span>
            <p className="text-[#0C4A6E] italic leading-snug">{activeCause.example}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
