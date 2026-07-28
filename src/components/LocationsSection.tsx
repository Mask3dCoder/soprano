"use client";

import { MapPin, Armchair, BedDouble, Pizza, Trees } from "lucide-react";
import { SectionHeading, FadeUp } from "@/components/parts";
import type { StoreData } from "@/lib/store";

const ICONS: Record<string, typeof MapPin> = {
  "Dr. Melfi's Office": Armchair,
  "Green Grove Retirement Community": BedDouble,
  Pizzaland: Pizza,
  "The Pine Barrens": Trees,
};

export default function LocationsSection({ locations }: { locations: StoreData["locations"] }) {
  return (
    <section id="locations" className="relative overflow-hidden bg-ink py-28 md:py-40">
      <div className="smoke smoke-b right-[10%] top-[8%] size-[34vw]" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        {/* the neon sign */}
        <FadeUp className="mb-4 text-center">
          <p className="font-stamp text-xs tracking-[0.45em] text-smoke">ROUTE 17 · LODI, NEW JERSEY</p>
        </FadeUp>
        <FadeUp delay={0.1} className="text-center">
          <h3 className="neon-red neon-flicker font-script inline-block text-7xl leading-none md:text-9xl">
            Bada Bing!
          </h3>
          <p className="neon-red neon-flicker-2 font-stamp mt-3 text-sm tracking-[0.5em] opacity-90 md:text-base">
            GIRLS · GIRLS · GIRLS
          </p>
        </FadeUp>

        <div className="mt-20">
          <SectionHeading
            eyebrow="CHAPTER FIVE — THE TERRITORY"
            title="Where the business got done."
            sub="Every location a character. The pork store where counsel was taken, the diner where everything stopped, the woods where the interior decorator was never found."
            tone="dark"
            scriptWord="The Territory"
          />
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {locations.map((l, i) => {
            const Icon = ICONS[l.name] || MapPin;
            return (
              <FadeUp key={l.id} delay={(i % 3) * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden border border-gold/15 bg-panel transition-colors duration-500 hover:border-gold/40">
                  {l.image ? (
                    <div className="relative h-52 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={l.image}
                        alt={l.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ filter: "sepia(0.3) contrast(1.06) brightness(0.9)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
                    </div>
                  ) : (
                    <div className="relative flex h-52 items-center justify-center border-b border-dashed border-gold/20 bg-[#191410]">
                      <Icon size={44} strokeWidth={1.1} className="text-gold/35 transition-colors duration-500 group-hover:text-gold/60" />
                      <span className="font-stamp absolute bottom-3 text-[10px] tracking-[0.34em] text-bone/30">
                        NO PHOTOGRAPH ON FILE
                      </span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl font-bold leading-tight text-bone">{l.name}</h3>
                    <p className="mt-1.5 flex items-center gap-2 font-stamp text-[11px] tracking-[0.28em] text-gold">
                      <MapPin size={11} className="text-crimson" />
                      {l.tag.toUpperCase()}
                    </p>
                    <p className="font-serif mt-4 flex-1 text-[15.5px] leading-relaxed text-smoke">
                      {l.description}
                    </p>
                    <div className="mt-5 border-t border-dashed border-bone/15 pt-4">
                      <p className="font-type text-[10px] tracking-[0.22em] text-crimson">DOSSIER NOTE</p>
                      <p className="font-serif mt-2 text-[14px] italic leading-relaxed text-bone/65">
                        {l.trivia}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
