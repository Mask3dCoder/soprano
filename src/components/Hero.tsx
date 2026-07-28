"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import GunR from "@/components/GunR";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative flex h-[100svh] min-h-[660px] flex-col overflow-hidden">
      {/* backdrop — the turnpike at dusk */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="kenburns absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/hero.jpg" alt="" className="h-full w-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/35 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/50" />
      </motion.div>

      {/* drifting smoke */}
      <div className="smoke smoke-a left-[8%] top-[30%] size-[38vw]" />
      <div className="smoke smoke-b right-[4%] top-[12%] size-[30vw]" />
      <div className="smoke smoke-c left-[38%] bottom-[6%] size-[42vw]" />

      {/* vertical rail text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.1, duration: 1.2 }}
        className="absolute left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 font-type text-[10px] tracking-[0.34em] text-bone/35 lg:block"
      >
        woke up this morning — the year was 1999
      </motion.p>

      {/* case label */}
      <motion.p
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.0, duration: 0.9, ease }}
        className="mx-auto mt-28 font-type text-[10px] tracking-[0.4em] text-bone/50 md:text-xs"
      >
        case file № 07161999 · newark field office · organized crime division
      </motion.p>

      {/* the word */}
      <motion.div style={{ y: fgY, opacity: fade }} className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "1.4em" }}
          animate={{ opacity: 1, letterSpacing: "0.62em" }}
          transition={{ delay: 2.9, duration: 1.1, ease }}
          className="font-stamp text-lg text-gold md:text-2xl"
        >
          THE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 2.95, duration: 1.25, ease }}
          className="display-hero mt-2 flex items-end text-[13.5vw] text-bone drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)] md:text-[9.5rem] lg:text-[11rem]"
          aria-label="Sopranos"
        >
          <span>SOP</span>
          <GunR className="-mx-[0.05em] mb-[0.06em] h-[0.62em] w-auto text-crimson drop-shadow-[0_6px_18px_rgba(163,36,28,0.45)]" />
          <span>ANOS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.45, duration: 1.2 }}
          className="font-serif mt-6 max-w-xl text-lg italic leading-relaxed text-bone/75 md:text-2xl"
        >
          “If one family doesn’t kill him… the other family will.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.7, duration: 0.9, ease }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-stamp text-[12px] tracking-[0.34em] text-bone/70 md:text-sm"
        >
          <span>HBO</span>
          <span className="text-[8px] text-crimson">◆</span>
          <span>6 SEASONS</span>
          <span className="text-[8px] text-crimson">◆</span>
          <span>86 EPISODES</span>
          <span className="text-[8px] text-crimson">◆</span>
          <span>1999 — 2007</span>
          <span className="text-[8px] text-crimson">◆</span>
          <span>CREATED BY DAVID CHASE</span>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#capo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.1, duration: 1 }}
        className="group mx-auto mb-8 flex flex-col items-center gap-2"
      >
        <span className="font-type text-[10px] tracking-[0.3em] text-bone/45 transition-colors group-hover:text-bone/80">
          scroll — playback begins
        </span>
        <motion.span animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={18} className="text-crimson" />
        </motion.span>
      </motion.a>

      {/* bottom fade into the rest of the site */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
    </section>
  );
}
