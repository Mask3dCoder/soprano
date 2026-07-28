"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/parts";
import type { StoreData } from "@/lib/store";

type C = StoreData["characters"][number];

const TABS = [
  { key: "all", label: "Whole Board" },
  { key: "crew", label: "The Crew — NJ" },
  { key: "newyork", label: "New York" },
  { key: "civilians", label: "Civilians" },
] as const;

function statusStamp(status: C["status"]) {
  switch (status) {
    case "whacked":
      return { label: "Whacked", cls: "stamp-whacked" };
    case "deceased":
      return { label: "Deceased", cls: "stamp-deceased" };
    case "prison":
      return { label: "In the Can", cls: "stamp-prison" };
    case "retired":
      return { label: "Retired", cls: "stamp-deceased" };
    case "missing":
      return { label: "Missing", cls: "stamp-prison" };
    default:
      return { label: "Active", cls: "stamp-active" };
  }
}

function SurveillancePhoto({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");
  return (
    <div className="mugshot relative flex aspect-[5/4] items-center justify-center bg-gradient-to-b from-[#211912] to-[#120d08]">
      {/* generic silhouette — the bureau never released the negatives */}
      <svg viewBox="0 0 100 100" className="h-4/5 w-auto text-[#3a3128]" fill="currentColor" aria-hidden>
        <ellipse cx="50" cy="34" rx="15" ry="17" />
        <path d="M20 96 Q22 62 50 60 Q78 62 80 96 Z" />
      </svg>
      <span className="font-stamp absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] tracking-[0.3em] text-bone/40">
        SUBJECT {initials} · FRAME 12
      </span>
      <span className="absolute right-2 top-2 size-1.5 rounded-full bg-crimson/80" />
    </div>
  );
}

export default function CrewSection({ characters }: { characters: StoreData["characters"] }) {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("all");
  const board = characters.filter((c) => c.faction !== "blood");
  const shown = tab === "all" ? board : board.filter((c) => c.faction === tab);

  return (
    <section id="crew" className="cork-bg relative overflow-hidden py-28 md:py-40">
      {/* red string — the bureau connects dots, we connect paisans */}
      <svg
        aria-hidden
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      >
        <path d="M180 210 C 380 120, 620 300, 1010 190" stroke="rgba(163,36,28,0.35)" strokeWidth="1.6" fill="none" />
        <path d="M300 640 C 480 520, 760 660, 1080 540" stroke="rgba(163,36,28,0.28)" strokeWidth="1.6" fill="none" />
        <path d="M1010 190 C 1040 330, 1030 430, 1080 540" stroke="rgba(163,36,28,0.22)" strokeWidth="1.6" fill="none" />
        <circle cx="180" cy="210" r="4" fill="rgba(200,69,44,0.8)" />
        <circle cx="1010" cy="190" r="4" fill="rgba(200,69,44,0.8)" />
        <circle cx="300" cy="640" r="4" fill="rgba(200,69,44,0.7)" />
        <circle cx="1080" cy="540" r="4" fill="rgba(200,69,44,0.7)" />
      </svg>

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionHeading
          eyebrow="CHAPTER THREE — EVIDENCE BOARD, FILE 07161999"
          title="This thing of ours."
          sub="Every made guy, associate, and unfortunate civilian who passed through North Jersey. Pinned, stamped, and connected by red string — spoilers included, fuhgeddaboudit."
          tone="dark"
          scriptWord="La Cosa Nostra"
        />

        {/* filter tabs */}
        <div className="mt-12 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`border px-4 py-2 font-stamp text-xs tracking-[0.25em] transition-all duration-300 md:text-sm ${
                tab === t.key
                  ? "border-crimson bg-crimson/15 text-bone"
                  : "border-bone/15 text-bone/50 hover:border-bone/40 hover:text-bone"
              }`}
            >
              {t.label}
              <span className="ml-2 text-[10px] text-crimson">
                {t.key === "all" ? board.length : board.filter((c) => c.faction === t.key).length}
              </span>
            </button>
          ))}
        </div>

        {/* the board */}
        <motion.div layout className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {shown.map((c, i) => {
              const st = statusStamp(c.status);
              return (
                <motion.article
                  layout
                  key={c.id}
                  initial={{ opacity: 0, scale: 0.9, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.88, y: 12 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className={`polaroid relative ${
                    i % 3 === 0 ? "-rotate-[1.4deg]" : i % 3 === 1 ? "rotate-[1.1deg]" : "-rotate-[0.4deg]"
                  } ${c.status === "whacked" ? "saturate-[0.55]" : ""}`}
                >
                  <div className="pin left-1/2 top-1.5 -translate-x-1/2" />
                  <div className="relative">
                    <SurveillancePhoto name={c.name} />
                    <span className={`stamp ${st.cls} absolute -bottom-3 right-2 bg-bone/95 text-[12px]`}>
                      {st.label}
                    </span>
                  </div>
                  <div className="pt-5 text-[#241a10]">
                    <h3 className="font-type text-[15px] font-bold leading-tight">{c.name}</h3>
                    <p className="font-type mt-0.5 text-[10px] italic text-[#241a10]/65">
                      a.k.a. {c.aliases}
                    </p>
                    <p className="mt-2 font-stamp text-[10px] tracking-[0.24em] uppercase text-[#7e1c17]">
                      {c.role}
                    </p>
                    <p className="font-serif mt-2 text-[13.5px] leading-relaxed text-[#3d2f1c]">
                      {c.blurb}
                    </p>
                    <div className="mt-3 flex items-end justify-between gap-3 border-t border-dashed border-[#241a10]/30 pt-2.5">
                      <p className="font-serif text-[12.5px] italic leading-snug text-[#241a10]/85">
                        “{c.quote}”
                      </p>
                    </div>
                    <p className="mt-1.5 font-type text-[9px] tracking-[0.18em] text-[#241a10]/50">
                      PORTRAYED BY {c.actor.toUpperCase()}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
