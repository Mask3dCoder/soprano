"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Crosshair } from "lucide-react";

const LINKS = [
  { href: "#capo", num: "01", label: "Il Capo" },
  { href: "#famiglia", num: "02", label: "La Famiglia" },
  { href: "#crew", num: "03", label: "The Crew" },
  { href: "#business", num: "04", label: "The Business" },
  { href: "#locations", num: "05", label: "Locations" },
  { href: "#episodes", num: "06", label: "The Run" },
  { href: "#legacy", num: "07", label: "Legacy" },
  { href: "#end", num: "08", label: "The End" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[95] transition-all duration-500 ${
          scrolled ? "bg-ink/85 backdrop-blur-md border-b border-gold/10" : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10">
          <a href="#top" className="group flex items-baseline gap-2">
            <span className="font-stamp text-sm tracking-[0.3em] text-crimson transition-colors group-hover:text-ember">
              THE
            </span>
            <span className="font-display text-lg font-black tracking-wide text-bone">SOPRANOS</span>
            <span className="hidden font-type text-[9px] tracking-[0.2em] text-smoke sm:inline">
              est. 1999
            </span>
          </a>

          <nav className="hidden items-center gap-6 xl:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group font-stamp text-[13px] tracking-[0.28em] text-bone/60 transition-colors hover:text-bone"
              >
                <span className="mr-1.5 text-[9px] text-crimson/80">{l.num}</span>
                <span className="relative">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-crimson transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-2 font-type text-[10px] tracking-[0.18em] text-smoke md:flex">
              <Crosshair size={11} className="text-crimson" />
              1999 — 2007
            </span>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid size-10 place-items-center border border-bone/15 text-bone/80 transition-colors hover:border-crimson hover:text-crimson xl:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] bg-ink/97 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between px-5 py-4 md:px-10">
              <span className="font-stamp text-sm tracking-[0.4em] text-crimson">THE TABLE</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid size-10 place-items-center border border-bone/15 text-bone/80 transition-colors hover:border-crimson hover:text-crimson"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="mt-6 flex flex-col px-8 md:px-14">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -26 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                  className="group flex items-baseline gap-5 border-b border-bone/8 py-4"
                >
                  <span className="font-type text-xs text-crimson">{l.num}</span>
                  <span className="font-display text-4xl font-black text-bone/85 transition-all group-hover:translate-x-2 group-hover:text-bone md:text-5xl">
                    {l.label}
                  </span>
                </motion.a>
              ))}
            </nav>
            <p className="px-8 pt-8 font-script text-2xl text-gold/70 md:px-14">
              Fuhgeddaboudit.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
