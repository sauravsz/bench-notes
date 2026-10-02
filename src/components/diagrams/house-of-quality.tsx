import React, { useState } from "react";
import { Home, Layers, CheckCircle2, ChevronRight, Calculator, Award } from "lucide-react";

interface HoqRoom {
  id: number;
  name: string;
  tag: string;
  badgeBg: string;
  badgeText: string;
  location: string;
  purpose: string;
  mathRole: string;
  exampleData: string[];
}

const HOQ_ROOMS: HoqRoom[] = [
  {
    id: 1,
    name: "Customer Requirements (WHATs)",
    tag: "Room 1",
    badgeBg: "bg-[#0284C7]",
    badgeText: "text-white",
    location: "Left Vertical Column",
    purpose:
      "Captures the Voice of the Customer (VOC) transcribed from customer interviews, focus groups, and warranty complaints into prioritized product attributes.",
    mathRole:
      "Assigns a Customer Importance Rating (w_i from 1 to 5) indicating customer priority for each requirement.",
    exampleData: [
      "Door easy to close from inside (Importance = 5)",
      "Eliminates wind & road noise at highway speed (Importance = 4)",
      "Remains watertight in severe storms (Importance = 5)",
      "Door armrest feels ergonomic (Importance = 3)",
    ],
  },
  {
    id: 2,
    name: "Engineering Characteristics (HOWs)",
    tag: "Room 2",
    badgeBg: "bg-[#059669]",
    badgeText: "text-white",
    location: "Top Horizontal Header",
    purpose:
      "Measurable engineering and design parameters formulated by R&D to address customer requirements, with directional optimization goals (↑ Maximize, ↓ Minimize, Target).",
    mathRole:
      "Defines the unit of measure (e.g., Newtons, Decibels, Pascals) and the vector of engineering improvement.",
    exampleData: [
      "Door closing effort / peak force (Goal: ↓ Minimize, Unit: N)",
      "Acoustic cabin transmission loss (Goal: ↑ Maximize, Unit: dB)",
      "EPDM Weatherstrip compression force (Goal: Nominal Target, Unit: N/m)",
      "Door gap tolerance / flushness (Goal: ↓ Minimize, Unit: mm)",
    ],
  },
  {
    id: 3,
    name: "Interrelationship Matrix",
    tag: "Room 3",
    badgeBg: "bg-[#D97706]",
    badgeText: "text-white",
    location: "Central Grid (WHATs × HOWs)",
    purpose:
      "Systematically evaluates the strength of relationship between each customer demand and each engineering characteristic.",
    mathRole:
      "Uses standard numerical scoring: Strong (⊙ = 9), Moderate (○ = 3), Weak (△ = 1), No relation (Blank = 0).",
    exampleData: [
      "Door easy to close ↔ Door closing effort (Strong: ⊙ = 9)",
      "Eliminates wind noise ↔ Acoustic transmission loss (Strong: ⊙ = 9)",
      "Remains watertight ↔ Weatherstrip compression force (Strong: ⊙ = 9)",
      "Eliminates wind noise ↔ Door gap flushness (Moderate: ○ = 3)",
    ],
  },
  {
    id: 4,
    name: "Correlation Roof (Trade-off Matrix)",
    tag: "Room 4",
    badgeBg: "bg-[#7C3AED]",
    badgeText: "text-white",
    location: "Triangular Peak Roof",
    purpose:
      "Identifies positive and negative physical/engineering trade-offs between different engineering characteristics to prevent unintended system conflicts.",
    mathRole:
      "Scores trade-offs: ++ (Strong Positive), + (Positive), - (Negative conflict), -- (Strong Negative clash).",
    exampleData: [
      "Weatherstrip compression force vs. Door closing effort (Negative Conflict: - ) [More seal pressure makes door harder to shut]",
      "Acoustic transmission loss vs. Door structural mass (Positive: + )",
      "Door gap flushness vs. Tooling precision cost (Negative Conflict: - )",
    ],
  },
  {
    id: 5,
    name: "Customer Competitive Assessment",
    tag: "Room 5",
    badgeBg: "bg-[#DB2777]",
    badgeText: "text-white",
    location: "Right Vertical Grid",
    purpose:
      "Benchmarking current product performance against top market competitors from the customer's subjective perspective (1 to 5 scale).",
    mathRole:
      "Calculates Improvement Ratio (IR = Planned Target / Current Score) and Sales Point weighting to derive overall raw weight.",
    exampleData: [
      "Our Car: Score 3/5 | Competitor A (Toyota): 5/5 | Competitor B (VW): 4/5",
      "Identifies critical market gaps where competitor leads significantly.",
    ],
  },
  {
    id: 6,
    name: "Technical Targets & Importance Matrix",
    tag: "Room 6",
    badgeBg: "bg-[#1E293B]",
    badgeText: "text-white",
    location: "Bottom Horizontal Foundation",
    purpose:
      "Calculates absolute and relative technical importance scores for every engineering parameter and establishes concrete engineering target specifications.",
    mathRole:
      "Mathematical formula: Technical Importance W_j = ∑ (w_i × R_ij), where w_i is customer importance and R_ij is relationship score (9/3/1).",
    exampleData: [
      "Door closing peak force target: ≤ 32 N (Absolute Importance: 126, Relative: 34%)",
      "Acoustic cabin transmission loss: ≥ 48 dB (Absolute Importance: 98, Relative: 26%)",
      "Weatherstrip compression: 18 N/m ± 2 N/m (Absolute Importance: 85, Relative: 23%)",
    ],
  },
];

export function HouseOfQualityDiagram() {
  const [activeRoomId, setActiveRoomId] = useState<number>(1);
  const activeRoom = HOQ_ROOMS.find((r) => r.id === activeRoomId) || HOQ_ROOMS[0];

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <Home className="size-3.5 text-amber-400" />
          Quality Function Deployment (QFD)
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          The House of Quality (HOQ) 6-Room Architecture
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          Systematic engineering matrix translating qualitative customer demands into quantitative product specifications, design targets, and component parameters.
        </p>
      </div>

      {/* SVG House Blueprint Diagram */}
      <div className="rounded-xl border border-[#CBD5E1] bg-white p-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3 mb-4">
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#0F172A]">
            Architectural Blueprint (Click any room to inspect)
          </span>
          <span className="text-[11px] text-[#64748B]">
            Active: <strong className="text-[#0F172A]">{activeRoom.name}</strong>
          </span>
        </div>

        <div className="overflow-x-auto">
          <svg viewBox="0 0 600 380" className="w-full max-w-[600px] mx-auto select-none font-sans">
            {/* Room 4: Roof (Correlation Matrix) */}
            <g
              onClick={() => setActiveRoomId(4)}
              className="cursor-pointer transition-opacity hover:opacity-90"
            >
              <polygon
                points="300,20 200,100 400,100"
                fill={activeRoomId === 4 ? "#DDD6FE" : "#F5F3FF"}
                stroke="#7C3AED"
                strokeWidth={activeRoomId === 4 ? "3" : "1.5"}
              />
              <text x="300" y="70" textAnchor="middle" fill="#5B21B6" fontSize="11" fontWeight="bold">
                Room 4: Correlation Roof
              </text>
              <text x="300" y="85" textAnchor="middle" fill="#7C3AED" fontSize="9">
                (++ / + / - / -- Trade-offs)
              </text>
            </g>

            {/* Room 2: Top Header (Engineering Characteristics / HOWs) */}
            <g
              onClick={() => setActiveRoomId(2)}
              className="cursor-pointer transition-opacity hover:opacity-90"
            >
              <rect
                x="200"
                y="100"
                width="200"
                height="50"
                fill={activeRoomId === 2 ? "#BBF7D0" : "#F0FDF4"}
                stroke="#059669"
                strokeWidth={activeRoomId === 2 ? "3" : "1.5"}
              />
              <text x="300" y="125" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold">
                Room 2: Engineering HOWs
              </text>
              <text x="300" y="140" textAnchor="middle" fill="#059669" fontSize="9">
                (Direction: ↑ Max, ↓ Min, ⊙ Target)
              </text>
            </g>

            {/* Room 1: Left Column (Customer Requirements / WHATs) */}
            <g
              onClick={() => setActiveRoomId(1)}
              className="cursor-pointer transition-opacity hover:opacity-90"
            >
              <rect
                x="50"
                y="150"
                width="150"
                height="150"
                fill={activeRoomId === 1 ? "#BAE6FD" : "#F0F9FF"}
                stroke="#0284C7"
                strokeWidth={activeRoomId === 1 ? "3" : "1.5"}
              />
              <text x="125" y="215" textAnchor="middle" fill="#075985" fontSize="11" fontWeight="bold">
                Room 1: Customer WHATs
              </text>
              <text x="125" y="235" textAnchor="middle" fill="#0284C7" fontSize="9">
                (Voice of Customer + w_i)
              </text>
            </g>

            {/* Room 3: Central Grid (Interrelationship Matrix) */}
            <g
              onClick={() => setActiveRoomId(3)}
              className="cursor-pointer transition-opacity hover:opacity-90"
            >
              <rect
                x="200"
                y="150"
                width="200"
                height="150"
                fill={activeRoomId === 3 ? "#FDE68A" : "#FFFBEB"}
                stroke="#D97706"
                strokeWidth={activeRoomId === 3 ? "3" : "1.5"}
              />
              <text x="300" y="215" textAnchor="middle" fill="#92400E" fontSize="11" fontWeight="bold">
                Room 3: Relationship Grid
              </text>
              <text x="300" y="235" textAnchor="middle" fill="#B45309" fontSize="9">
                ⊙=9 (Strong), ○=3 (Med), △=1 (Weak)
              </text>
            </g>

            {/* Room 5: Right Column (Customer Competitive Benchmark) */}
            <g
              onClick={() => setActiveRoomId(5)}
              className="cursor-pointer transition-opacity hover:opacity-90"
            >
              <rect
                x="400"
                y="150"
                width="150"
                height="150"
                fill={activeRoomId === 5 ? "#FBCFE8" : "#FDF2F8"}
                stroke="#DB2777"
                strokeWidth={activeRoomId === 5 ? "3" : "1.5"}
              />
              <text x="475" y="215" textAnchor="middle" fill="#9D174D" fontSize="11" fontWeight="bold">
                Room 5: Competitive Benchmarks
              </text>
              <text x="475" y="235" textAnchor="middle" fill="#DB2777" fontSize="9">
                (Us vs Competitor A/B)
              </text>
            </g>

            {/* Room 6: Bottom Foundation (Technical Targets & Matrix Scores) */}
            <g
              onClick={() => setActiveRoomId(6)}
              className="cursor-pointer transition-opacity hover:opacity-90"
            >
              <rect
                x="200"
                y="300"
                width="200"
                height="65"
                fill={activeRoomId === 6 ? "#CBD5E1" : "#F1F5F9"}
                stroke="#1E293B"
                strokeWidth={activeRoomId === 6 ? "3" : "1.5"}
              />
              <text x="300" y="325" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">
                Room 6: Technical Targets & Weights
              </text>
              <text x="300" y="342" textAnchor="middle" fill="#475569" fontSize="9">
                W_j = ∑ (w_i × R_ij) | Spec Values
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Room Selector Chips */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
        {HOQ_ROOMS.map((room) => {
          const isSelected = activeRoomId === room.id;
          return (
            <button
              key={room.id}
              onClick={() => setActiveRoomId(room.id)}
              className={`rounded-xl border p-2.5 text-center transition-all ${
                isSelected
                  ? "border-[#0F172A] bg-white ring-2 ring-[#0F172A]/10 shadow-sm"
                  : "border-[#E2E8F0] bg-[#F8FAFC] hover:bg-white"
              }`}
            >
              <span className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-bold ${room.badgeBg} ${room.badgeText}`}>
                {room.tag}
              </span>
              <span className="mt-1 block text-xs font-bold text-[#0F172A] line-clamp-1">
                {room.name.split(" ")[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detailed Room Inspector */}
      <div className="mt-4 rounded-xl border-2 border-[#CBD5E1] bg-white p-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className={`rounded-md ${activeRoom.badgeBg} ${activeRoom.badgeText} px-2.5 py-0.5 text-xs font-bold`}>
              {activeRoom.tag}: {activeRoom.name}
            </span>
            <span className="text-xs text-[#64748B]">[{activeRoom.location}]</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#0F172A] bg-[#F1F5F9] px-2.5 py-1 rounded">
            <Calculator className="size-3.5 text-[#0284C7]" />
            <span>Mathematical Role</span>
          </div>
        </div>

        <p className="font-sans text-xs text-[#334155] leading-relaxed">
          {activeRoom.purpose}
        </p>

        <div className="mt-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] p-3 text-xs text-[#0F172A] font-mono">
          <span className="font-bold font-sans text-[11px] text-[#475569] block mb-1 uppercase tracking-wider">
            Calculation Rule:
          </span>
          {activeRoom.mathRole}
        </div>

        {/* Industrial Example */}
        <div className="mt-3 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] p-3">
          <span className="font-sans text-[11px] font-bold text-[#166534] block mb-1">
            ★ Automotive Benchmark Data (Car Door Assembly):
          </span>
          <ul className="space-y-1">
            {activeRoom.exampleData.map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5 text-xs text-[#14532D]">
                <CheckCircle2 className="size-3.5 mt-0.5 shrink-0 text-[#16A34A]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 4-Phase QFD Flow */}
      <div className="mt-4 rounded-xl border border-[#CBD5E1] bg-[#F1F5F9] p-4 text-xs text-[#334155]">
        <span className="font-bold text-[#0F172A] block mb-1">
          Clausing's 4-Phase QFD Cascading Process:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-[11px] mt-2">
          <div className="p-2 bg-white rounded border border-[#E2E8F0]">
            <strong>Phase 1: Product Planning</strong>
            <p className="text-[#64748B] mt-0.5">Customer WHATs → Engineering HOWs</p>
          </div>
          <div className="p-2 bg-white rounded border border-[#E2E8F0]">
            <strong>Phase 2: Part Deployment</strong>
            <p className="text-[#64748B] mt-0.5">Engineering HOWs → Part Characteristics</p>
          </div>
          <div className="p-2 bg-white rounded border border-[#E2E8F0]">
            <strong>Phase 3: Process Planning</strong>
            <p className="text-[#64748B] mt-0.5">Part Characteristics → Manufacturing Steps</p>
          </div>
          <div className="p-2 bg-white rounded border border-[#E2E8F0]">
            <strong>Phase 4: Production Planning</strong>
            <p className="text-[#64748B] mt-0.5">Manufacturing Steps → Operating Controls & SPC</p>
          </div>
        </div>
      </div>
    </div>
  );
}
