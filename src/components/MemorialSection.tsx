"use client";

import { SectionHeading, FadeUp } from "@/components/parts";
import type { StoreData } from "@/lib/store";

export default function MemorialSection({ fallen }: { fallen: StoreData["fallen"] }) {
  return (
    <section id="fallen" className="relative overflow-hidden bg-[#080604] py-28 md:py-40">
      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <SectionHeading
          eyebrow="CHAPTER EIGHT — REQUIEM"
          title="Pour one out."
          sub="A candle for each of them, even Ralphie. Nobody leaves this show — they just stop appearing in new episodes. One thing you can never say: that you weren’t told there’d be spoilers."
          tone="dark"
          scriptWord="Requiescat"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {fallen.map((f, i) => (
            <FadeUp key={f.id} delay={(i % 4) * 0.08}>
              <article className="group relative h-full border border-bone/8 bg-panel/60 p-6 transition-colors duration-500 hover:border-gold/30">
                {/* candle */}
                <div className="relative mb-6 flex h-20 items-end justify-start">
                  <div className="candle-glow -left-4 bottom-0 size-24" />
                  <div className="relative">
                    <div className="candle-flame mx-auto h-4 w-2 rounded-t-full" />
                    <div className="mx-auto h-1 w-[3px] bg-ink" />
                    <div className="h-10 w-3.5 rounded-[2px] bg-gradient-to-b from-[#e8dcc4] to-[#b9a888] shadow-[0_4px_14px_rgba(0,0,0,0.5)]" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold italic leading-snug text-bone">
                  {f.name}
                </h3>
                <p className="mt-1.5 font-stamp text-[10px] tracking-[0.3em] text-crimson">
                  {f.seasons.toUpperCase()}
                </p>
                <p className="font-serif mt-3 text-[14.5px] leading-relaxed text-smoke">
                  {f.epitaph}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <p className="mt-14 text-center font-type text-[10.5px] tracking-[0.28em] text-smoke">
            FLOWERS MAY BE SENT DIRECTLY TO SATRIALE’S. BACK ENTRANCE. NO CALLERS.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
