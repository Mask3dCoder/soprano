"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Trophy, Clapperboard, Radio, Dna } from "lucide-react";
import { SectionHeading, FadeUp, Ticker } from "@/components/parts";

const STATS = [
  { n: 86, label: "EPISODES", sub: "six seasons · 1999–2007" },
  { n: 21, label: "EMMY WINS", sub: "including best drama, twice" },
  { n: 112, label: "EMMY NOMINATIONS", sub: "a record pace for its era" },
  { n: 5, label: "GOLDEN GLOBES", sub: "plus two peabodys" },
  { n: 1, prefix: "№", label: "WGA BEST-WRITTEN", sub: "of every series ever made" },
];

function Stat({ n, label, sub, prefix = "", delay }: { n: number; label: string; sub: string; prefix?: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, n, {
      duration: 1.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (x) => setV(Math.round(x)),
    });
    return () => controls.stop();
  }, [inView, n, delay]);

  return (
    <div ref={ref} className="border-l-2 border-crimson/60 pl-5">
      <p className="font-display text-6xl font-black leading-none text-gold md:text-7xl">
        {prefix}{v}
      </p>
      <p className="mt-3 font-stamp text-xs tracking-[0.3em] text-bone">{label}</p>
      <p className="mt-1 font-type text-[10px] tracking-[0.14em] text-smoke">{sub}</p>
    </div>
  );
}

export default function LegacySection() {
  return (
    <section id="legacy" className="relative overflow-hidden bg-coal py-28 md:py-40">
      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <SectionHeading
          eyebrow="CHAPTER TEN — THE LEDGER CLOSES"
          title="The greatest, and it isn’t close."
          sub="Rolling Stone put it at the top of the all-time list in 2022. The Writers Guild called it the best-written series ever made. The industry called it the beginning of the golden age. New Jersey called it Tuesday."
          tone="dark"
          scriptWord="Legacy"
        />

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 xl:grid-cols-5">
          {STATS.map((s, i) => (
            <Stat key={s.label} n={s.n} label={s.label} sub={s.sub} prefix={s.prefix || ""} delay={i * 0.1} />
          ))}
        </div>

        {/* the afterlife */}
        <div className="mt-24 grid gap-6 lg:grid-cols-3">
          <FadeUp>
            <article className="flex h-full flex-col border border-bone/10 bg-panel p-7">
              <Clapperboard size={20} className="text-crimson" />
              <h3 className="font-display mt-4 text-2xl font-bold text-bone">The Many Saints of Newark</h3>
              <p className="mt-1 font-stamp text-[10px] tracking-[0.28em] text-gold">2021 · THE PREQUEL</p>
              <p className="font-serif mt-4 flex-1 text-[15.5px] leading-relaxed text-smoke">
                David Chase returned to 1960s Newark to tell Dickie Moltisanti’s story — and cast
                Michael Gandolfini as young Tony. The son playing the father’s ghost. Some castings
                are beyond criticism.
              </p>
            </article>
          </FadeUp>
          <FadeUp delay={0.1}>
            <article className="flex h-full flex-col border border-bone/10 bg-panel p-7">
              <Radio size={20} className="text-crimson" />
              <h3 className="font-display mt-4 text-2xl font-bold text-bone">Talking Sopranos</h3>
              <p className="mt-1 font-stamp text-[10px] tracking-[0.28em] text-gold">THE REWATCH</p>
              <p className="font-serif mt-4 flex-1 text-[15.5px] leading-relaxed text-smoke">
                Michael Imperioli and Steve Schirripa went through all 86 episodes — with Chase, the
                writers, the directors. Essential listening. The crew still gets together; the table
                just moved to a microphone.
              </p>
            </article>
          </FadeUp>
          <FadeUp delay={0.2}>
            <article className="flex h-full flex-col border border-bone/10 bg-panel p-7">
              <Dna size={20} className="text-crimson" />
              <h3 className="font-display mt-4 text-2xl font-bold text-bone">The Bloodline</h3>
              <p className="mt-1 font-stamp text-[10px] tracking-[0.28em] text-gold">EVERYTHING AFTER</p>
              <p className="font-serif mt-4 flex-1 text-[15.5px] leading-relaxed text-smoke">
                No Tony, no golden age: the broken men of Albuquerque, Madison Avenue, and Baltimore
                all came down the driveway after him, bathrobes and all. Television learned it could
                be a novel. It also learned to end without explaining itself.
              </p>
            </article>
          </FadeUp>
        </div>

        <FadeUp delay={0.15} className="mt-20">
          <div className="border border-gold/25 bg-panel p-8 text-center md:p-12">
            <Trophy size={22} className="mx-auto text-gold" />
            <p className="font-display mx-auto mt-5 max-w-4xl text-3xl font-black italic leading-tight text-bone md:text-5xl">
              “The single greatest achievement in the history of American television.”
            </p>
            <p className="mt-5 font-type text-[10px] tracking-[0.25em] text-smoke">
              — THE CRITICAL CONSENSUS, GIVE OR TAKE AN ADJECTIVE. THEY’RE RIGHT.
            </p>
          </div>
        </FadeUp>
      </div>

      {/* critic ticker */}
      <div className="mt-20 border-y border-crimson/40 bg-blood/20 py-4 text-bone/90">
        <Ticker
          items={[
            "GREATEST SHOW OF ALL TIME — ROLLING STONE, 2022",
            "BEST-WRITTEN SERIES EVER — WRITERS GUILD OF AMERICA",
            "21 EMMYS · 112 NOMINATIONS",
            "TWO PEABODY AWARDS",
            "THE GOLDEN AGE STARTED HERE",
            "DAVID CHASE NEVER EXPLAINED THE ENDING — GOOD",
          ]}
        />
      </div>
    </section>
  );
}
