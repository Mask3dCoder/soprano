"use client";

import { motion } from "framer-motion";
import { SectionHeading, FadeUp } from "@/components/parts";
import type { StoreData } from "@/lib/store";

export default function FamilySection({ characters }: { characters: StoreData["characters"] }) {
  const blood = characters.filter((c) => c.faction === "blood");

  return (
    <section id="famiglia" className="relative overflow-hidden bg-paper py-28 text-[#241a10] md:py-40">
      {/* aged paper mottling */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 12% 8%, rgba(122,92,42,0.12), transparent 45%), radial-gradient(ellipse at 88% 95%, rgba(96,70,30,0.14), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <SectionHeading
          eyebrow="CHAPTER TWO — LA FAMIGLIA"
          title="The blood you can’t choose."
          sub="The real battlefield of the series was never the Bing — it was the kitchen on Aspen Drive. Wife, kids, mother, uncle, sister. Every one of them a hostage negotiation with extra ziti."
          tone="light"
          scriptWord="Famiglia"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blood.map((c, i) => (
            <FadeUp key={c.id} delay={(i % 3) * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group relative flex h-full flex-col border border-[#241a10]/20 bg-[#f3ecda] p-7 shadow-[0_14px_36px_-18px_rgba(54,38,14,0.55)]"
              >
                <span className="absolute inset-x-7 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#9a7a3c] to-transparent" />
                <p className="font-type text-[10px] tracking-[0.24em] text-[#7e1c17]">
                  {c.aliases ? `“${c.aliases}”` : "—"}
                </p>
                <h3 className="font-display mt-2 text-3xl font-black italic leading-tight">
                  {c.name}
                </h3>
                <p className="mt-2 font-stamp text-[11px] tracking-[0.3em] text-[#9a7a3c] uppercase">
                  {c.role}
                </p>
                <p className="font-serif mt-4 flex-1 text-[15.5px] leading-relaxed text-[#3d2f1c]">
                  {c.blurb}
                </p>
                <div className="mt-5 border-t border-dashed border-[#241a10]/30 pt-4">
                  <p className="font-serif text-[15px] italic leading-snug text-[#241a10]">
                    “{c.quote}”
                  </p>
                  <p className="mt-2 font-type text-[10px] tracking-[0.2em] text-[#241a10]/55">
                    PORTRAYED BY {c.actor.toUpperCase()}
                  </p>
                </div>
              </motion.article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
