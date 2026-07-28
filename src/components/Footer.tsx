"use client";

import { ArrowUp, Spade } from "lucide-react";
import GunR from "@/components/GunR";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-ink">
      <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-10">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-end text-bone">
              <span className="display-hero text-4xl md:text-5xl">
                SOP<span className="sr-only">R</span>
              </span>
              <GunR className="-mx-0.5 mb-[5px] h-[26px] w-auto text-crimson md:h-[30px]" />
              <span className="display-hero text-4xl md:text-5xl">ANOS</span>
            </div>
            <p className="font-script mt-3 text-3xl text-gold/80">Fuhgeddaboudit.</p>
          </div>

          <div className="grid gap-2 font-stamp text-[12px] tracking-[0.3em] text-bone/50 sm:grid-flow-col sm:gap-8">
            <a className="transition-colors hover:text-bone" href="#capo">IL CAPO</a>
            <a className="transition-colors hover:text-bone" href="#crew">THE CREW</a>
            <a className="transition-colors hover:text-bone" href="#episodes">THE RUN</a>
            <a className="transition-colors hover:text-bone" href="#legacy">LEGACY</a>
            <a className="transition-colors hover:text-bone" href="#end">THE END</a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-dashed border-bone/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="font-type text-[10px] leading-relaxed tracking-[0.14em] text-smoke">
              AN UNOFFICIAL FAN TRIBUTE. THE SOPRANOS AND ALL RELATED TITLES, CHARACTERS, AND DUCKS
              ARE © HBO. CREATED BY DAVID CHASE. THIS SITE CLAIMS NOTHING EXCEPT THAT IT IS, AND
              ALWAYS WILL BE, THE GREATEST SHOW OF ALL TIME.
            </p>
            <p className="mt-3 font-type text-[10px] tracking-[0.14em] text-smoke/60">
              PRESS PLAYGROUNDS PROVIDED BY SATRIALE’S. ONION RINGS BY HOLSTEN’S.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <p className="font-serif max-w-[280px] text-sm italic text-bone/50">
              “Just when I thought I was out… they pull me back in.”
            </p>
            <a
              href="#top"
              aria-label="Back to top"
              className="group grid size-12 place-items-center border border-bone/15 transition-colors hover:border-crimson"
            >
              <ArrowUp size={18} className="text-bone/60 transition-all group-hover:-translate-y-1 group-hover:text-crimson" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 border-t border-bone/5 pt-6">
          <Spade size={11} className="text-crimson" />
          <p className="font-stamp text-[10px] tracking-[0.4em] text-bone/35">
            NORTH CALDWELL, NEW JERSEY · MMXXVI
          </p>
          <Spade size={11} className="text-crimson" />
        </div>
      </div>
    </footer>
  );
}
