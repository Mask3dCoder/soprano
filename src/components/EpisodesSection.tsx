"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/parts";
import { SEASON_META } from "@/lib/episodes";
import type { StoreData } from "@/lib/store";

export default function EpisodesSection({ episodes }: { episodes: StoreData["episodes"] }) {
  const [season, setSeason] = useState(1);
  const meta = SEASON_META.find((s) => s.season === season)!;
  const list = episodes.filter((e) => e.season === season);

  return (
    <section id="episodes" className="relative overflow-hidden bg-coal py-28 md:py-40">
      <span
        aria-hidden
        className="font-stamp pointer-events-none absolute -left-6 bottom-0 select-none text-[20vw] leading-none text-bone/[0.03]"
      >
        86
      </span>

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <SectionHeading
          eyebrow="CHAPTER SIX — THE COMPLETE RUN"
          title="Eighty-six episodes. No skips."
          sub="Every hour Chase and his writers ever made, season by season. The gold star marks the ones they teach in film school. Yes, there are a lot of stars."
          tone="dark"
          scriptWord="The Run"
        />

        {/* season tabs */}
        <div className="mt-14 flex flex-wrap gap-2">
          {SEASON_META.map((s) => (
            <button
              key={s.season}
              onClick={() => setSeason(s.season)}
              className={`group relative border px-5 py-3 transition-all duration-300 md:px-8 ${
                season === s.season
                  ? "border-crimson bg-crimson/10"
                  : "border-bone/12 hover:border-bone/35"
              }`}
            >
              <span
                className={`font-display text-2xl font-black italic md:text-3xl ${
                  season === s.season ? "text-bone" : "text-bone/40 group-hover:text-bone/70"
                }`}
              >
                {s.roman}
              </span>
              <span className="ml-2 font-type text-[9px] tracking-[0.2em] text-smoke">{s.years}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={season}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* season dossier */}
            <div className="mt-10 grid gap-6 border border-gold/20 bg-panel p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-8">
              <p className="font-stamp text-5xl leading-none tracking-wide text-crimson md:text-6xl">
                S{meta.season.toString().padStart(2, "0")}
              </p>
              <div>
                <p className="font-serif text-2xl italic leading-snug text-bone md:text-3xl">
                  “{meta.strapline}”
                </p>
                <p className="font-serif mt-2 max-w-3xl text-[15px] leading-relaxed text-smoke">
                  {meta.note}
                </p>
              </div>
              <p className="font-type text-[11px] tracking-[0.25em] text-gold md:text-right">
                {meta.episodes} EPISODES
                <br />
                {meta.years}
              </p>
            </div>

            {/* the hours */}
            <ol className="mt-6">
              {list.map((e, i) => (
                <motion.li
                  key={e.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.035, duration: 0.4 }}
                  className="group relative flex gap-5 border-b border-bone/8 py-5 pl-2 transition-colors duration-300 hover:bg-panel md:gap-8 md:pl-4"
                >
                  <span className="absolute inset-y-0 left-0 w-[3px] scale-y-0 bg-crimson transition-transform duration-300 group-hover:scale-y-100" />
                  <span className="font-stamp w-10 shrink-0 pt-1 text-xl text-ash transition-colors group-hover:text-crimson md:text-2xl">
                    {String(e.episode).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h4
                        className={`font-display text-xl font-bold leading-tight md:text-2xl ${
                          e.notable ? "text-gold" : "text-bone"
                        }`}
                      >
                        {e.title}
                      </h4>
                      {e.notable && (
                        <span className="flex items-center gap-1 border border-gold/40 px-2 py-0.5 font-stamp text-[9px] tracking-[0.22em] text-gold">
                          <Star size={9} className="fill-gold text-gold" />
                          REQUIRED VIEWING
                        </span>
                      )}
                    </div>
                    <p className="font-serif mt-1.5 max-w-3xl text-[15px] leading-relaxed text-smoke">
                      {e.synopsis}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
