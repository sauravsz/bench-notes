import { Building, Building2, Globe, HeartHandshake, Layers, ShieldCheck, Users } from "lucide-react";

export function CompanyTypesMapDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-line bg-surface p-4 sm:p-6 shadow-sm">
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-primary">
          <Building2 className="size-3.5" />
          Corporate Taxonomy
        </span>
        <h4 className="mt-2 font-serif text-xl font-bold text-ink">
          Types of Companies under Companies Act, 2013
        </h4>
        <p className="mt-1 font-sans text-xs text-muted max-w-xl mx-auto">
          Classification across Liability, Membership Scale, Control Relationships, and Special Purpose Status.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
        {/* Branch 1: By Liability */}
        <div className="rounded-xl border border-line bg-bg-warm/40 p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 pb-2 border-b border-line mb-2">
              <span className="flex size-5 items-center justify-center rounded-full bg-primary text-white text-[10px] font-bold">
                1
              </span>
              <h5 className="font-serif text-xs font-bold text-ink">By Liability</h5>
            </div>
            <div className="space-y-1.5">
              <div className="rounded bg-surface p-2 border border-line">
                <span className="font-semibold text-ink">Limited by Shares (2(22))</span>
                <p className="text-[10px] text-muted">Liability limited to unpaid share amount (Tata, Infosys)</p>
              </div>
              <div className="rounded bg-surface p-2 border border-line">
                <span className="font-semibold text-ink">Limited by Guarantee (2(21))</span>
                <p className="text-[10px] text-muted">Liability limited to agreed guarantee in MoA on winding up</p>
              </div>
              <div className="rounded bg-surface p-2 border border-line">
                <span className="font-semibold text-ink">Unlimited Company (2(92))</span>
                <p className="text-[10px] text-muted">No limit on member liability</p>
              </div>
            </div>
          </div>
        </div>

        {/* Branch 2: By Membership */}
        <div className="rounded-xl border border-line bg-bg-warm/40 p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 pb-2 border-b border-line mb-2">
              <span className="flex size-5 items-center justify-center rounded-full bg-accent text-white text-[10px] font-bold">
                2
              </span>
              <h5 className="font-serif text-xs font-bold text-ink">By Scale & Members</h5>
            </div>
            <div className="space-y-1.5">
              <div className="rounded bg-surface p-2 border border-line">
                <span className="font-semibold text-ink">One Person Company (2(62))</span>
                <p className="text-[10px] text-muted">1 natural Indian citizen member + 1 nominee</p>
              </div>
              <div className="rounded bg-surface p-2 border border-line">
                <span className="font-semibold text-ink">Private Company (2(68))</span>
                <p className="text-[10px] text-muted">Min 2, Max 200 members; share transfer restricted</p>
              </div>
              <div className="rounded bg-surface p-2 border border-line">
                <span className="font-semibold text-ink">Public Company (2(71))</span>
                <p className="text-[10px] text-muted">Min 7 members, No upper ceiling; public equity</p>
              </div>
              <div className="rounded bg-surface p-2 border border-line">
                <span className="font-semibold text-ink">Small Company (2(85))</span>
                <p className="text-[10px] text-muted">Capital ≤ ₹4 Cr & Turnover ≤ ₹40 Cr</p>
              </div>
            </div>
          </div>
        </div>

        {/* Branch 3: By Control */}
        <div className="rounded-xl border border-line bg-bg-warm/40 p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 pb-2 border-b border-line mb-2">
              <span className="flex size-5 items-center justify-center rounded-full bg-sky-600 text-white text-[10px] font-bold">
                3
              </span>
              <h5 className="font-serif text-xs font-bold text-ink">By Control</h5>
            </div>
            <div className="space-y-1.5">
              <div className="rounded bg-surface p-2 border border-line">
                <span className="font-semibold text-ink">Holding Company (2(46))</span>
                <p className="text-[10px] text-muted">Controls subsidiary board or &gt;50% voting power</p>
              </div>
              <div className="rounded bg-surface p-2 border border-line">
                <span className="font-semibold text-ink">Subsidiary Company (2(87))</span>
                <p className="text-[10px] text-muted">Controlled by holding entity</p>
              </div>
              <div className="rounded bg-surface p-2 border border-line">
                <span className="font-semibold text-ink">Associate Company (2(6))</span>
                <p className="text-[10px] text-muted">Significant influence: ≥20% voting power / JV</p>
              </div>
            </div>
          </div>
        </div>

        {/* Branch 4: Special Status */}
        <div className="rounded-xl border border-line bg-bg-warm/40 p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 pb-2 border-b border-line mb-2">
              <span className="flex size-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px] font-bold">
                4
              </span>
              <h5 className="font-serif text-xs font-bold text-ink">Special Status</h5>
            </div>
            <div className="space-y-1.5">
              <div className="rounded bg-surface p-2 border border-line">
                <span className="font-semibold text-emerald-800 dark:text-emerald-300">Section 8 (Non-Profit)</span>
                <p className="text-[10px] text-muted">Charitable; zero dividend; profits reinvested in objects</p>
              </div>
              <div className="rounded bg-surface p-2 border border-line">
                <span className="font-semibold text-ink">Government Co. (2(45))</span>
                <p className="text-[10px] text-muted">≥51% paid-up capital held by Govt (ONGC, BHEL)</p>
              </div>
              <div className="rounded bg-surface p-2 border border-line">
                <span className="font-semibold text-ink">Foreign Co. (2(42))</span>
                <p className="text-[10px] text-muted">Incorporated abroad with place of business in India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
