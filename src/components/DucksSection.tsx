"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeUp } from "@/components/parts";

function Duck({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 52 40" className={className} fill="currentColor" aria-hidden style={flip ? { transform: "scaleY(-1)" } : undefined}>
      <path d="M5 29.5 C 3 24, 9.5 19.5, 17.5 20.5 L 21 20.5 C 22.5 15.5, 23.5 9.5, 28.5 7.2 C 32.6 5.3, 37.6 6.4, 39.6 10.2 L 46 10.8 C 47.6 11, 47.9 12.9, 46.4 13.7 L 40.8 16.2 C 42 20.5, 40.2 26.6, 33.5 29.8 C 26 33.4, 8.5 35, 5 29.5 Z" />
    </svg>
  );
}

export default function DucksSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} id="ducks" className="relative flex min-h-[82vh] items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10 scale-110">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/ducks.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
      </motion.div>

      {/* the family, still swimming up there */}
      <Duck className="duck-drift float-slow absolute left-[12%] top-[18%] h-10 w-14 text-ink/70 md:h-14 md:w-20" />
      <Duck className="duck-drift float-slow absolute left-[18%] top-[26%] h-7 w-10 text-ink/60 [animation-delay:-6s]" />
      <Duck className="duck-drift float-slow absolute right-[14%] top-[20%] h-8 w-12 text-ink/65 [animation-delay:-11s]" />

      <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
        <FadeUp>
          <p className="font-script text-5xl text-gold md:text-7xl">They took off for the south.</p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="font-serif mx-auto mt-8 max-w-2xl text-xl italic leading-relaxed text-bone/85 md:text-2xl">
            The ducks in the pool were never about the ducks. They landed in the pilot, and Tony’s
            chest folded like a lawn chair — because somewhere in the water, apparently, was the
            whole terrified arithmetic of loving a family you could lose.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="mt-8 font-type text-[10px] tracking-[0.3em] text-bone/50">
            DR. MELFI KNEW. DR. MELFI ALWAYS KNEW.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
