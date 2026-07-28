"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play, X, Disc3 } from "lucide-react";
import { SectionHeading, FadeUp } from "@/components/parts";

type Stage = "idle" | "song" | "black" | "credit" | "after";

const LINES = [
  "Just a small town girl…",
  "Livin’ in a lonely world…",
  "Just a city boy, born and raised in South Detroit…",
  "Don’t stop—",
];

export default function FinaleSection() {
  const [stage, setStage] = useState<Stage>("idle");
  const [hasPlayed, setHasPlayed] = useState(false);
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (stage === "idle") return;
    document.body.style.overflow = "hidden";
    const timers: ReturnType<typeof setTimeout>[] = [];

    if (stage === "song") {
      setLine(0);
      for (let i = 1; i < LINES.length; i++) {
        timers.push(setTimeout(() => setLine(i), i * 1500));
      }
      // the cut: mid-word, no fade, no warning — exactly like June 10, 2007
      timers.push(setTimeout(() => setStage("black"), LINES.length * 1500 - 600));
    } else if (stage === "black") {
      timers.push(setTimeout(() => setStage("credit"), 4000));
    } else if (stage === "credit") {
      timers.push(setTimeout(() => setStage("after"), 3200));
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setStage("idle");
        setHasPlayed(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", onKey);
    };
  }, [stage]);

  const close = () => {
    setStage("idle");
    setHasPlayed(true);
  };

  return (
    <section id="end" className="relative overflow-hidden bg-black py-28 md:py-40">
      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <SectionHeading
          eyebrow="CHAPTER NINE — MADE IN AMERICA · JUNE 10, 2007"
          title="Don’t stop."
          sub="The finale that made a nation check its cable box. A diner in Bloomfield, a basket of onion rings, 11.9 million viewers, and a cut so abrupt the FCC fielded complaints about local affiliates. Press play. You know the song."
          tone="dark"
          align="center"
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start">
          {/* the booth */}
          <FadeUp>
            <figure className="relative -rotate-[0.8deg] border border-gold/25 bg-panel p-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]">
              <div className="mugshot">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/holstens.jpg" alt="Empty diner booth with onion rings" className="block aspect-[4/3] w-full object-cover" />
              </div>
              <figcaption className="flex items-center justify-between px-2 pb-1 pt-3">
                <span className="font-type text-[10px] tracking-[0.2em] text-bone/60">
                  HOLSTEN’S BROOKDALE CONFECTIONERY — BLOOMFIELD, NJ
                </span>
                <span className="size-2 rounded-full bg-crimson" />
              </figcaption>
            </figure>
          </FadeUp>

          {/* the jukebox */}
          <FadeUp delay={0.12}>
            <div className="border border-gold/25 bg-panel">
              <div className="flex items-center gap-3 border-b border-bone/10 px-6 py-4">
                <Disc3 size={18} className="text-crimson" />
                <p className="font-stamp text-sm tracking-[0.35em] text-bone/80">TABLE 12 — SELECTIONS</p>
              </div>
              <div className="space-y-px">
                {[
                  "ANY WAY YOU WANT IT",
                  "WHO’LL STOP THE RAIN",
                  "DON’T STOP BELIEVIN’",
                ].map((s, i) => (
                  <div
                    key={s}
                    className={`flex items-center justify-between px-6 py-4 ${
                      i === 2 ? "bg-crimson/10" : "opacity-45"
                    }`}
                  >
                    <p className="font-type text-xs tracking-[0.18em] text-bone/80">{s}</p>
                    <p className="font-stamp text-[10px] tracking-[0.2em] text-smoke">{i === 2 ? "SELECTED" : "SKIPPED"}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-bone/10 p-6">
                <button
                  onClick={() => setStage("song")}
                  className="group flex w-full items-center justify-center gap-3 border-2 border-crimson bg-crimson/15 py-4 font-stamp text-sm tracking-[0.4em] text-bone transition-all duration-300 hover:bg-crimson hover:shadow-[0_0_40px_rgba(163,36,28,0.45)]"
                >
                  <Play size={16} className="transition-transform group-hover:scale-125" />
                  {hasPlayed ? "PLAY IT AGAIN — YOU WILL" : "PLAY THE FINAL SCENE"}
                </button>
                <p className="mt-3 text-center font-type text-[9.5px] tracking-[0.18em] text-smoke">
                  esc to leave the diner early. nobody does.
                </p>
              </div>
            </div>

            {/* the reading */}
            <div className="mt-6 space-y-4 border border-bone/10 bg-coal p-6">
              <p className="font-stamp text-[11px] tracking-[0.3em] text-gold">WHAT HAPPENED IN THAT CUT</p>
              <p className="font-serif text-[15.5px] leading-relaxed text-smoke">
                The whole scene is shot in Tony’s point of view: bell, door, look up — bell, door,
                look up. The final edit is his POV too. When the picture cut to black, that wasn’t
                your television. That was the seat across the table.
              </p>
              <p className="font-serif text-[15.5px] italic leading-relaxed text-bone/75">
                “You probably don’t even hear it when it happens.”
                <span className="ml-2 mt-1 block font-type text-[9.5px] not-italic tracking-[0.2em] text-smoke">
                  — BOBBY BACCALIERI, TWO EPISODES EARLIER, SAME BOOTH GRAMMAR
                </span>
              </p>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ── the experience overlay ── */}
      {stage !== "idle" && (
        <div className="fixed inset-0 z-[130] bg-black">
          {stage !== "black" && (
            <div className="tv-static pointer-events-none absolute inset-0 opacity-[0.05]" />
          )}

          {stage === "song" && (
            <>
              <div className="absolute left-6 top-6 flex items-center gap-3 font-type text-[10px] tracking-[0.25em] text-bone/50">
                <span className="size-2 animate-pulse rounded-full bg-crimson" />
                HOLSTEN’S — TABLE 12 · ONION RINGS, THREE WAYS DIVIDED
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
                {LINES.slice(0, line + 1).map((l, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: i === line ? 1 : 0.4 }}
                    transition={{ duration: 0.3 }}
                    className="font-serif text-2xl italic text-bone md:text-4xl"
                  >
                    {l}
                    {i === line && i === LINES.length - 1 && (
                      <span className="caret-blink ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.15em] bg-bone" />
                    )}
                  </motion.p>
                ))}
              </div>
              <button
                onClick={close}
                aria-label="Leave the diner"
                className="absolute right-6 top-6 grid size-11 place-items-center border border-bone/20 text-bone/60 transition-colors hover:border-crimson hover:text-crimson"
              >
                <X size={18} />
              </button>
            </>
          )}

          {/* stage === "black" renders nothing inside. That is the entire point. */}

          {stage === "credit" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6 }}
              className="absolute inset-0 grid place-items-center"
            >
              <div className="text-center">
                <p className="font-stamp text-[11px] tracking-[0.5em] text-bone/50">DIRECTED BY</p>
                <p className="font-display mt-3 text-4xl font-black text-bone md:text-5xl">DAVID CHASE</p>
              </div>
            </motion.div>
          )}

          {stage === "after" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 grid place-items-center px-6"
            >
              <div className="max-w-lg text-center">
                <p className="font-script text-5xl text-gold">…and scene.</p>
                <p className="font-serif mt-6 text-lg italic leading-relaxed text-bone/80">
                  Right about now, in June of 2007, eleven point nine million Americans checked
                  their cable connections. The doorbell didn’t do anything. The guy in the Members
                  Only jacket didn’t do anything either. Probably.
                </p>
                <button
                  onClick={close}
                  className="mx-auto mt-10 flex items-center gap-3 border border-bone/25 px-8 py-4 font-stamp text-xs tracking-[0.4em] text-bone/80 transition-all hover:border-crimson hover:text-crimson"
                >
                  <X size={14} />
                  BACK TO THE BOOTH
                </button>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </section>
  );
}
