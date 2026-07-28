"use client";

import { Briefcase } from "lucide-react";
import { SectionHeading, FadeUp } from "@/components/parts";
import type { StoreData } from "@/lib/store";

const RISK: Record<string, { dot: string; label: string }> = {
  low: { dot: "bg-[#4e7a4e]", label: "Low heat" },
  moderate: { dot: "bg-[#9a7a3c]", label: "Moderate heat" },
  high: { dot: "bg-[#c8452c]", label: "High heat" },
  federal: { dot: "bg-[#7e1c17]", label: "Federal heat" },
};

const STAMP: Record<string, { label: string; cls: string }> = {
  active: { label: "Active", cls: "stamp-active" },
  seized: { label: "Seized", cls: "stamp-whacked" },
  torched: { label: "Torched", cls: "stamp-prison" },
  folded: { label: "Folded", cls: "stamp-deceased" },
};

export default function BusinessSection({ businesses }: { businesses: StoreData["businesses"] }) {
  return (
    <section id="business" className="relative overflow-hidden bg-paper py-28 text-[#241a10] md:py-40">
      <div className="dossier-line pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <SectionHeading
              eyebrow="CHAPTER FOUR — ANNUAL REPORT, FY 1999"
              title="Waste management and other euphemisms."
              sub="On paper, a sanitation consultancy. In practice, a diversified portfolio of fronts, rackets, and genuinely delicious pork products. Figures unaudited, obviously."
              tone="light"
            />

            {/* the ledger */}
            <FadeUp delay={0.15} className="mt-12 overflow-hidden border-2 border-[#241a10]/60 bg-[#f3ecda] shadow-[0_20px_50px_-24px_rgba(54,38,14,0.6)]">
              <div className="hidden grid-cols-[1.15fr_1.5fr_0.75fr_0.7fr] gap-4 border-b-2 border-[#241a10]/60 bg-[#241a10] px-5 py-3 text-paper md:grid">
                <span className="font-stamp text-[11px] tracking-[0.28em]">FRONT</span>
                <span className="font-stamp text-[11px] tracking-[0.28em]">ACTUALLY</span>
                <span className="font-stamp text-[11px] tracking-[0.28em]">HEAT</span>
                <span className="font-stamp text-[11px] tracking-[0.28em] text-right">STATUS</span>
              </div>

              {businesses.map((b, i) => (
                <FadeUp key={b.id} delay={0.05 * i}>
                  <div className="group grid gap-2 border-b border-dashed border-[#241a10]/30 px-5 py-4 transition-colors last:border-b-0 hover:bg-[#ecdfc3] md:grid-cols-[1.15fr_1.5fr_0.75fr_0.7fr] md:items-center md:gap-4">
                    <div>
                      <p className="font-display text-lg font-bold leading-tight">{b.front}</p>
                      <p className="font-type text-[10px] italic text-[#241a10]/60">{b.cover}</p>
                    </div>
                    <p className="font-serif text-[14.5px] leading-snug text-[#3d2f1c]">{b.actual}</p>
                    <div>
                      <p className="flex items-center gap-2 font-type text-[10.5px]">
                        <span className={`size-2 rounded-full ${RISK[b.risk].dot}`} />
                        {RISK[b.risk].label}
                      </p>
                      <p className="mt-1 font-type text-[10px] text-[#241a10]/60">{b.take}</p>
                    </div>
                    <div className="md:text-right">
                      <span className={`stamp text-[11px] ${STAMP[b.status].cls}`}>
                        {STAMP[b.status].label}
                      </span>
                    </div>
                  </div>
                </FadeUp>
              ))}

              <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-[#241a10]/60 px-5 py-4">
                <p className="font-type text-[10px] tracking-[0.18em] text-[#241a10]/60">
                  PREPARED FOR INTERNAL REVIEW ONLY — D.C. HAS THE BETTER COPY
                </p>
                <p className="font-script text-3xl text-[#7e1c17]">Approved, A.S.</p>
              </div>
            </FadeUp>
          </div>

          {/* side column — classifieds */}
          <div className="lg:pt-24">
            <FadeUp delay={0.25}>
              <aside className="rotate-[1.5deg] border-2 border-dashed border-[#7e1c17]/70 bg-[#efe4c8] p-6 shadow-[0_14px_36px_-18px_rgba(54,38,14,0.5)]">
                <div className="flex items-center gap-2 border-b border-[#241a10]/30 pb-3">
                  <Briefcase size={14} className="text-[#7e1c17]" />
                  <p className="font-stamp text-[12px] tracking-[0.3em]">HELP WANTED</p>
                </div>
                <h4 className="font-display mt-4 text-2xl font-black leading-tight">
                  No-show positions available
                </h4>
                <p className="font-serif mt-3 text-[14.5px] leading-relaxed text-[#3d2f1c]">
                  Esplanade construction site, Newark. Duties: none. Hours: also none. Compensation:
                  union scale plus leaf-blower sound effects, provided. Inquire at the pork store.
                  Ask for the guy who never leaves.
                </p>
                <p className="mt-4 font-type text-[10px] tracking-[0.14em] text-[#7e1c17]">
                  EQUAL OPPORTUNITY EMPLOYER OF CONNECTED GUYS
                </p>
              </aside>
            </FadeUp>

            <FadeUp delay={0.35} className="mt-8">
              <blockquote className="border-l-2 border-[#9a7a3c] pl-5">
                <p className="font-serif text-lg italic leading-relaxed text-[#3d2f1c]">
                  “I’m in waste management. Everybody immediately assumes you’re mobbed up.”
                </p>
                <cite className="mt-2 block font-type text-[10px] tracking-[0.2em] text-[#241a10]/55 not-italic">
                  A. SOPRANO, TO HIS DAUGHTER, LYING
                </cite>
              </blockquote>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
