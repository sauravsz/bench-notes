import React, { useState } from "react";
import { Sparkles, CheckCircle2, ShieldAlert, Layers, HelpCircle, Activity } from "lucide-react";

interface KanoCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  formula: string;
  description: string;
  decayDynamic: string;
  examples: string[];
}

const KANO_CATEGORIES: KanoCategory[] = [
  {
    id: "attractive",
    name: "Attractive / Delighters (Excitement)",
    icon: Sparkles,
    badgeBg: "bg-[#0284C7]",
    badgeText: "text-white",
    borderColor: "border-[#0284C7]",
    formula: "Satisfaction = f(Execution^2) [Non-linear Exponential]",
    description:
      "Unexpected latent features that produce disproportionate customer delight when present, but cause zero dissatisfaction when absent because customers did not expect them.",
    decayDynamic:
      "Decays rapidly over 12–24 months into One-Dimensional (Performance) features, then into Must-Be (Basic) features as competitors replicate.",
    examples: [
      "In-cabin wireless high-speed device charging in entry-level vehicles",
      "Complimentary AI-generated personalized itinerary in airline booking apps",
      "Instant hotel room check-in via smartphone ultra-wideband digital key",
    ],
  },
  {
    id: "one-dimensional",
    name: "One-Dimensional / Performance Features",
    icon: Activity,
    badgeBg: "bg-[#059669]",
    badgeText: "text-white",
    borderColor: "border-[#059669]",
    formula: "Satisfaction ∝ Execution [Linear Symmetrical]",
    description:
      "Direct linear correlation between feature execution level and customer satisfaction. More is better; less directly triggers proportionate dissatisfaction.",
    decayDynamic:
      "Competitive baseline where organizations fight for margin and market share; continuous efficiency gains required to stay competitive.",
    examples: [
      "Smartphone battery life (48 hours vs. 12 hours)",
      "Automobile fuel economy (25 km/l vs. 12 km/l)",
      "Cloud API response latency (25ms vs. 450ms)",
    ],
  },
  {
    id: "must-be",
    name: "Must-Be / Basic Requirements (Threshold)",
    icon: ShieldAlert,
    badgeBg: "bg-[#DC2626]",
    badgeText: "text-white",
    borderColor: "border-[#DC2626]",
    formula: "Satisfaction ≤ 0 [Asymmetrical Asymptotic]",
    description:
      "Mandatory foundational prerequisites. Fulfilling them at 100% merely prevents dissatisfaction (satisfaction caps at neutral zero), but failure causes severe rejection.",
    decayDynamic:
      "Non-negotiable hygiene factors. Investment beyond 100% compliance yields zero marginal customer utility; failures result in immediate defection.",
    examples: [
      "Automotive Anti-lock Braking System (ABS) & dual front airbags",
      "Clean running hot water and hygienic bedding in a hotel room",
      "Bank mobile app 256-bit transactional security and uptime",
    ],
  },
  {
    id: "indifferent",
    name: "Indifferent Attributes",
    icon: HelpCircle,
    badgeBg: "bg-[#64748B]",
    badgeText: "text-white",
    borderColor: "border-[#64748B]",
    formula: "Satisfaction = 0 [Flat Horizontal]",
    description:
      "Features or process specifications that customers do not care about regardless of implementation degree. Represent engineering over-processing waste.",
    decayDynamic:
      "Prime target for Lean / Six Sigma cost reduction and value engineering elimination.",
    examples: [
      "Internal circuit board gold plating thickness exceeding electrical engineering spec",
      "Proprietary packaging cardboard tensile strength exceeding shipping standards",
      "30-page user manual printed in 12 languages inside an app-controlled IoT device box",
    ],
  },
];

export function KanoModelDiagram() {
  const [selectedCat, setSelectedCat] = useState<string>("attractive");
  const active = KANO_CATEGORIES.find((c) => c.id === selectedCat) || KANO_CATEGORIES[0];

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <Layers className="size-3.5 text-amber-400" />
          Customer Needs & Quality Engineering Architecture
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          Noriaki Kano Model of Customer Satisfaction
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          Mapping non-linear relationships between Engineering Execution (Dysfunctional → Fully Functional) and Customer Psychological Satisfaction (Dissatisfied → Delighted).
        </p>
      </div>

      {/* SVG Interactive Curve */}
      <div className="relative rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3 mb-4">
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#0F172A]">
            Interactive Coordinate Mapping & Lifecycle Curve
          </span>
          <span className="text-[11px] font-medium text-[#64748B]">
            Click category tabs below to highlight response curves
          </span>
        </div>

        <div className="overflow-x-auto">
          <svg viewBox="0 0 600 340" className="w-full max-w-[600px] mx-auto select-none font-sans">
            {/* Grid & Quadrant Backgrounds */}
            <rect x="50" y="20" width="250" height="150" fill="#F8FAFC" opacity="0.6" />
            <rect x="300" y="20" width="250" height="150" fill="#F0F9FF" opacity="0.6" />
            <rect x="50" y="170" width="250" height="150" fill="#FFF1F2" opacity="0.6" />
            <rect x="300" y="170" width="250" height="150" fill="#F8FAFC" opacity="0.6" />

            {/* Axes */}
            <line x1="50" y1="170" x2="550" y2="170" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="300" y1="20" x2="300" y2="320" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" />

            {/* Axis Arrows & Labels */}
            <text x="545" y="165" textAnchor="end" fill="#0F172A" fontSize="11" fontWeight="bold">
              Fully Functional Execution (+X) →
            </text>
            <text x="55" y="165" textAnchor="start" fill="#64748B" fontSize="10">
              ← Absent / Dysfunctional (-X)
            </text>
            <text x="305" y="32" textAnchor="start" fill="#0F172A" fontSize="11" fontWeight="bold">
              ↑ Customer Delighted (+Y)
            </text>
            <text x="305" y="315" textAnchor="start" fill="#DC2626" fontSize="10" fontWeight="bold">
              ↓ Customer Dissatisfied (-Y)
            </text>

            {/* Curve 1: Attractive / Delighter (Blue) */}
            <path
              d="M 120 168 Q 300 160 520 35"
              fill="none"
              stroke={selectedCat === "attractive" ? "#0284C7" : "#CBD5E1"}
              strokeWidth={selectedCat === "attractive" ? "4" : "2"}
              className="transition-all duration-300"
            />
            <text
              x="460"
              y="50"
              fill={selectedCat === "attractive" ? "#0284C7" : "#64748B"}
              fontSize="11"
              fontWeight="bold"
            >
              ★ Attractive (Delighter)
            </text>

            {/* Curve 2: One-Dimensional / Performance (Green) */}
            <line
              x1="90"
              y1="290"
              x2="510"
              y2="50"
              stroke={selectedCat === "one-dimensional" ? "#059669" : "#CBD5E1"}
              strokeWidth={selectedCat === "one-dimensional" ? "4" : "2"}
              className="transition-all duration-300"
            />
            <text
              x="420"
              y="95"
              fill={selectedCat === "one-dimensional" ? "#059669" : "#64748B"}
              fontSize="11"
              fontWeight="bold"
            >
              ● One-Dimensional (Linear)
            </text>

            {/* Curve 3: Must-Be / Basic (Red) */}
            <path
              d="M 80 305 Q 300 180 480 172"
              fill="none"
              stroke={selectedCat === "must-be" ? "#DC2626" : "#CBD5E1"}
              strokeWidth={selectedCat === "must-be" ? "4" : "2"}
              className="transition-all duration-300"
            />
            <text
              x="200"
              y="280"
              fill={selectedCat === "must-be" ? "#DC2626" : "#64748B"}
              fontSize="11"
              fontWeight="bold"
            >
              ▲ Must-Be (Threshold Hygiene)
            </text>

            {/* Curve 4: Indifferent (Slate horizontal) */}
            <line
              x1="60"
              y1="170"
              x2="540"
              y2="170"
              stroke={selectedCat === "indifferent" ? "#475569" : "transparent"}
              strokeWidth="3"
            />

            {/* Dynamic Lifecycle Shift Vector */}
            <path
              d="M 440 60 C 420 120 380 180 340 210"
              fill="none"
              stroke="#D97706"
              strokeWidth="2"
              strokeDasharray="3 3"
              markerEnd="url(#arrow)"
            />
            <text x="350" y="140" fill="#B45309" fontSize="10" fontWeight="bold">
              Time Decay Dynamic (Delighter → Must-Be)
            </text>
          </svg>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {KANO_CATEGORIES.map((cat) => {
          const isSelected = selectedCat === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`rounded-xl border p-3 text-left transition-all ${
                isSelected
                  ? `${cat.borderColor} bg-white ring-2 ring-[#0F172A]/10 shadow-sm`
                  : "border-[#E2E8F0] bg-[#F8FAFC] hover:bg-white"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <cat.icon className={`size-4 ${isSelected ? "text-[#0F172A]" : "text-[#64748B]"}`} />
                <span className="font-sans text-xs font-bold text-[#0F172A] line-clamp-1">
                  {cat.name.split(" ")[0]}
                </span>
              </div>
              <span className="mt-1 block text-[10px] text-[#64748B]">
                {cat.id === "attractive" && "Exponential Growth"}
                {cat.id === "one-dimensional" && "Linear Proportion"}
                {cat.id === "must-be" && "Hygiene Penalty"}
                {cat.id === "indifferent" && "Zero Utility"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Detail Breakdown Card */}
      <div className="mt-4 rounded-xl border-2 border-[#CBD5E1] bg-white p-4 sm:p-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className={`rounded-md ${active.badgeBg} ${active.badgeText} px-2.5 py-0.5 font-sans text-xs font-bold uppercase`}>
              {active.name}
            </span>
          </div>
          <code className="rounded bg-[#F1F5F9] px-2 py-0.5 font-mono text-[11px] font-semibold text-[#0F172A]">
            {active.formula}
          </code>
        </div>

        <p className="font-sans text-xs text-[#334155] leading-relaxed">
          {active.description}
        </p>

        {/* Dynamic & Real-World Examples */}
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-[#FEF3C7] p-3 border border-[#FDE68A]">
            <span className="block font-sans text-[11px] font-bold text-[#92400E]">
              ⏳ Lifecycle & Market Decay Rule:
            </span>
            <p className="mt-1 font-sans text-xs text-[#78350F] leading-snug">
              {active.decayDynamic}
            </p>
          </div>
          <div className="rounded-lg bg-[#F0FDF4] p-3 border border-[#BBF7D0]">
            <span className="block font-sans text-[11px] font-bold text-[#166534]">
              ★ Benchmark Industry Examples:
            </span>
            <ul className="mt-1 space-y-1">
              {active.examples.map((ex, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs text-[#14532D]">
                  <CheckCircle2 className="size-3.5 mt-0.5 shrink-0 text-[#16A34A]" />
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Exam Takeaway */}
      <div className="mt-4 rounded-xl border border-[#64748B] bg-[#F1F5F9] p-3 text-center text-xs text-[#334155]">
        <span className="font-bold text-[#0F172A]">14-Mark Strategic Takeaway: </span>
        Product managers must pair the Kano questionnaire with Quality Function Deployment (QFD). Never over-invest in Must-Be features beyond defect-free zero failure; channel innovation budgets into rotating Delighters to prevent margin erosion.
      </div>
    </div>
  );
}
