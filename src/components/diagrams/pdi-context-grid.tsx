import { Globe, Building, ShieldCheck, Compass, Brain } from "lucide-react";

export function PdiContextGridDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E293B] text-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider">
          <Globe className="size-3.5" />
          Cross-Cultural Communication Matrix
        </span>
        <h4 className="mt-2.5 font-serif text-2xl font-bold text-[#0F172A]">
          PDI vs. Context Matrix & Neurological Brain Needs
        </h4>
        <p className="mt-1 font-sans text-xs text-[#475569] max-w-xl mx-auto leading-relaxed">
          Mapping Power Distance Index (Hofstede) against Context Complexity (Hall) to determine organizational brain drives (SCARF) and communication protocols.
        </p>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Quadrant 1: Low PDI / High Context */}
        <div className="rounded-xl border-2 border-[#0284C7] bg-[#FFFFFF] p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] mb-2.5">
              <span className="rounded-md bg-[#0284C7] text-white px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider">
                Q1 • Hybrid / Creative Matrix
              </span>
              <span className="text-[11px] font-bold text-[#0284C7]">Low PDI • High Context</span>
            </div>
            <h5 className="font-serif text-base font-bold text-[#0F172A]">
              Nordic Tech & Creative Agencies
            </h5>
            <div className="mt-2 space-y-1.5 text-xs">
              <div className="rounded-md bg-[#F0F9FF] p-2 border border-[#BAE6FD]">
                <span className="font-bold text-[#0369A1] block flex items-center gap-1">
                  <Building className="size-3.5" /> Benchmark Enterprises:
                </span>
                <p className="text-[11px] text-[#0C4A6E]">Spotify, IKEA, UK Boutique Consultancies, Creative Design Houses</p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block flex items-center gap-1">
                  <Brain className="size-3.5 text-[#0284C7]" /> Neurological Brain Needs (SCARF):
                </span>
                <p className="text-[11px] text-[#475569]">Egalitarian Team Relatedness + High Autonomy + Unspoken Peer Consensus</p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block">Communication Rule:</span>
                <p className="text-[11px] text-[#475569]">Collaborative vision framing, inclusive circular eye contact, flat hierarchy engagement.</p>
              </div>
            </div>
          </div>
          <div className="mt-2.5 text-center text-[10px] font-bold text-[#0369A1] bg-[#E0F2FE] rounded py-1">
            Time Orientation: Flexible Polychronic / Relational
          </div>
        </div>

        {/* Quadrant 2: High PDI / High Context */}
        <div className="rounded-xl border-2 border-[#B45309] bg-[#FFFFFF] p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] mb-2.5">
              <span className="rounded-md bg-[#B45309] text-white px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider">
                Q2 • Traditional Hierarchical
              </span>
              <span className="text-[11px] font-bold text-[#B45309]">High PDI • High Context</span>
            </div>
            <h5 className="font-serif text-base font-bold text-[#0F172A]">
              Traditional Conglomerates & PSUs
            </h5>
            <div className="mt-2 space-y-1.5 text-xs">
              <div className="rounded-md bg-[#FFFBEB] p-2 border border-[#FDE68A]">
                <span className="font-bold text-[#92400E] block flex items-center gap-1">
                  <Building className="size-3.5" /> Benchmark Enterprises:
                </span>
                <p className="text-[11px] text-[#78350F]">Star Cement, Dalmia Bharat, Traditional PSUs, Japanese Zaibatsu/Keiretsu</p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block flex items-center gap-1">
                  <Brain className="size-3.5 text-[#B45309]" /> Neurological Brain Needs (SCARF):
                </span>
                <p className="text-[11px] text-[#475569]">Status Respect + Seniority Deference + Group Relatedness + Face Preservation</p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block">Communication Rule:</span>
                <p className="text-[11px] text-[#475569]">Formal honorifics, indirect deferential eye contact, opening with institutional legacy.</p>
              </div>
            </div>
          </div>
          <div className="mt-2.5 text-center text-[10px] font-bold text-[#92400E] bg-[#FEF3C7] rounded py-1">
            Time Orientation: Relationship-Centric Polychronic
          </div>
        </div>

        {/* Quadrant 3: Low PDI / Low Context */}
        <div className="rounded-xl border-2 border-[#059669] bg-[#FFFFFF] p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] mb-2.5">
              <span className="rounded-md bg-[#059669] text-white px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider">
                Q3 • Pure Agile & Venture
              </span>
              <span className="text-[11px] font-bold text-[#059669]">Low PDI • Low Context</span>
            </div>
            <h5 className="font-serif text-base font-bold text-[#0F172A]">
              Silicon Valley & Global Consultancies
            </h5>
            <div className="mt-2 space-y-1.5 text-xs">
              <div className="rounded-md bg-[#ECFDF5] p-2 border border-[#A7F3D0]">
                <span className="font-bold text-[#047857] block flex items-center gap-1">
                  <Building className="size-3.5" /> Benchmark Enterprises:
                </span>
                <p className="text-[11px] text-[#064E3B]">Silicon Valley Startups, Angel Networks, Deloitte, PwC, McKinsey</p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block flex items-center gap-1">
                  <Brain className="size-3.5 text-[#059669]" /> Neurological Brain Needs (SCARF):
                </span>
                <p className="text-[11px] text-[#475569]">Peer Competence + High Autonomy + Explicit Certainty + Metric Speed</p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block">Communication Rule:</span>
                <p className="text-[11px] text-[#475569]">BLUF bottom line up front, direct eye contact, rapid metric proof, instant ROI.</p>
              </div>
            </div>
          </div>
          <div className="mt-2.5 text-center text-[10px] font-bold text-[#047857] bg-[#D1FAE5] rounded py-1">
            Time Orientation: Linear Monochronic / Strict Clock
          </div>
        </div>

        {/* Quadrant 4: High PDI / Low Context */}
        <div className="rounded-xl border-2 border-[#BE123C] bg-[#FFFFFF] p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] mb-2.5">
              <span className="rounded-md bg-[#BE123C] text-white px-2.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider">
                Q4 • Rigid Data Matrix
              </span>
              <span className="text-[11px] font-bold text-[#BE123C]">High PDI • Low Context</span>
            </div>
            <h5 className="font-serif text-base font-bold text-[#0F172A]">
              Traditional Banking & German Engineering
            </h5>
            <div className="mt-2 space-y-1.5 text-xs">
              <div className="rounded-md bg-[#FFF1F2] p-2 border border-[#FECDD3]">
                <span className="font-bold text-[#BE123C] block flex items-center gap-1">
                  <Building className="size-3.5" /> Benchmark Enterprises:
                </span>
                <p className="text-[11px] text-[#881337]">ICICI Bank, Axis Bank, German Industrialists (Siemens, Bosch, BMW)</p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block flex items-center gap-1">
                  <Brain className="size-3.5 text-[#BE123C]" /> Neurological Brain Needs (SCARF):
                </span>
                <p className="text-[11px] text-[#475569]">Hierarchical Status Clarity + Absolute Certainty + Zero Ambiguity + Process Risk Lock</p>
              </div>
              <div className="rounded-md bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <span className="font-bold text-[#0F172A] block">Communication Rule:</span>
                <p className="text-[11px] text-[#475569]">Formal title greetings, strict agenda compliance, direct empirical data presentation.</p>
              </div>
            </div>
          </div>
          <div className="mt-2.5 text-center text-[10px] font-bold text-[#9F1239] bg-[#FFE4E6] rounded py-1">
            Time Orientation: Process-Governed Monochronic
          </div>
        </div>
      </div>

      {/* Footer Takeaway */}
      <div className="mt-4 rounded-xl border border-[#64748B] bg-[#F1F5F9] p-3 text-center text-xs text-[#334155]">
        <span className="font-bold text-[#0F172A]">Cross-Cultural Adaptation Imperative: </span>
        Never present low-context metric velocity in high-PDI/high-context environments without first establishing status deference and relational trust; never deliver polite relational ambiguity in low-context venture pitches.
      </div>
    </div>
  );
}
