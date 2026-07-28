"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { SectionHeading, FadeUp } from "@/components/parts";

const HABITS = [
  { k: "Known associates", v: "Ducks, primarily. Trusts them more than the crew." },
  { k: "Dietary profile", v: "Gabagool, cold. Ziti when Carmela is angry. Onion rings in Bloomfield." },
  { k: "Media consumption", v: "Gary Cooper pictures. The History Channel, at volume." },
  { k: "Standing appointment", v: "Thursdays. Two chairs. One psychiatrist." },
];

export default function BossSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 130, damping: 16 });
  const ry = useSpring(useMotionValue(0), { stiffness: 130, damping: 16 });

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const b = el.getBoundingClientRect();
    const px = (e.clientX - b.left) / b.width - 0.5;
    const py = (e.clientY - b.top) / b.height - 0.5;
    ry.set(px * 8);
    rx.set(-py * 8);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <section id="capo" className="relative overflow-hidden bg-ink py-28 md:py-40">
      <span
        aria-hidden
        className="font-stamp pointer-events-none absolute -right-8 top-10 select-none text-[24vw] leading-none text-bone/[0.03] md:text-[17rem]"
      >
        Nº1
      </span>

      <div className="mx-auto grid max-w-[1500px] gap-16 px-5 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        {/* ── the dossier ── */}
        <FadeUp className="relative">
          <motion.div
            ref={cardRef}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
            className="paper-card relative -rotate-[1.2deg] p-5 md:p-8"
          >
            <div className="pin left-1/2 top-2 -translate-x-1/2" />

            <div className="flex items-start justify-between gap-4 border-b-2 border-[#241a10]/70 pb-4">
              <div>
                <p className="font-stamp text-[13px] tracking-[0.3em] text-[#241a10]">
                  FEDERAL BUREAU OF INVESTIGATION
                </p>
                <p className="font-type mt-1 text-[10px] tracking-[0.16em] text-[#241a10]/70">
                  NEWARK FIELD OFFICE — ORGANIZED CRIME DIVISION
                </p>
              </div>
              <p className="font-type text-[10px] text-[#7e1c17]">FILE № 07161999-D</p>
            </div>

            <div className="mt-5 grid gap-6 sm:grid-cols-[200px_1fr]">
              {/* exhibit photo */}
              <div className="relative">
                <div className="mugshot rotate-[-1.5deg] border-4 border-bone shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/img/boss.jpg" alt="Surveillance photograph of the subject" className="block aspect-[4/5] w-full object-cover" />
                </div>
                <p className="font-type mt-2 text-center text-[9px] tracking-[0.2em] text-[#241a10]/70">
                  EXHIBIT A — SAT., 07:12 AM
                </p>
                <span className="stamp stamp-whacked absolute -right-3 -top-4 bg-bone/90 text-[13px]">
                  At Large
                </span>
              </div>

              {/* typed fields */}
              <div className="font-type text-[11.5px] leading-[2.1] text-[#241a10]">
                <p><span className="text-[#241a10]/55">NAME:</span> SOPRANO, Anthony John</p>
                <p><span className="text-[#241a10]/55">DOB:</span> 08/22/1959 — Newark, NJ</p>
                <p><span className="text-[#241a10]/55">OCCUPATION:</span> Waste Management Consultant, Barone Sanitation <span className="text-[#7e1c17]">(sic)</span></p>
                <p><span className="text-[#241a10]/55">ALIASES:</span> “T”, “Tone”, “Leadbelly”</p>
                <p><span className="text-[#241a10]/55">RANK:</span> CAPO — NJ FACTION. Functionally, <span className="bg-[#241a10] px-1 text-paper">REDACTED</span></p>
                <p><span className="text-[#241a10]/55">RESIDENCE:</span> North Caldwell. Driveway long enough for a newspaper and a bad feeling.</p>
              </div>
            </div>

            <div className="mt-6 space-y-3 border-t border-dashed border-[#241a10]/40 pt-4">
              {HABITS.map((h) => (
                <p key={h.k} className="font-type text-[11px] leading-relaxed text-[#241a10]/85">
                  <span className="mr-2 bg-[#241a10] px-1.5 py-0.5 text-[9px] tracking-[0.18em] text-paper uppercase">
                    {h.k}
                  </span>
                  {h.v}
                </p>
              ))}
            </div>

            <p className="font-type mt-6 border-t-2 border-[#241a10]/70 pt-3 text-[10px] italic tracking-wide text-[#7e1c17]">
              Agent’s note: subject reported panic attacks. Advised us — unprompted — that sadness accrues.
              Recommend continued surveillance of pool area.
            </p>
          </motion.div>
        </FadeUp>

        {/* ── the write-up ── */}
        <div>
          <SectionHeading
            eyebrow="CHAPTER ONE — IL CAPO"
            title="The man in the middle of everything."
            sub="Anthony Soprano: capo, father, husband, patient. The first television protagonist who had us rooting for a man we should have been testifying against. James Gandolfini won three Emmys, a Golden Globe, and three SAG awards making him feel — impossibly — like family."
            tone="dark"
          />

          <FadeUp delay={0.2} className="mt-10">
            <div className="relative border border-gold/20 bg-panel p-6 md:p-8">
              <span className="font-script absolute -top-7 left-4 text-6xl text-crimson/80">“</span>
              <p className="font-serif text-xl italic leading-relaxed text-bone/90 md:text-2xl">
                A guy my age — waste management consultant — goes to see a psychiatrist. What’s he
                got to be depressed about? He’s got the world by the balls.
              </p>
              <p className="mt-4 font-type text-[10px] tracking-[0.25em] text-smoke">
                — SUBJECT, SESSION ONE, JANUARY 1999
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.3} className="mt-10">
            <div className="space-y-4 font-serif text-lg leading-relaxed text-smoke">
              <p>
                He is the hinge on which modern television swings. Before Tony, leading men were
                heroes with a flaw. After Tony, they were the flaw. Every prestige antihero since —
                the chemistry teachers, the ad men, the fixers — lives in the house Gandolfini built
                on Aspen Drive.
              </p>
              <p>
                Gandolfini died in Rome in 2013, at fifty-one. The lights dimmed on Broadway, New
                Jersey lowered its flags, and every fan re-watched the driveway scene from behind
                their hands. What you are reading is, among other things, a thank-you note.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
