"use client";

import { SectionHeading, FadeUp } from "@/components/parts";
import type { StoreData } from "@/lib/store";

export default function QuotesSection({ quotes }: { quotes: StoreData["quotes"] }) {
  const [first, second, ...rest] = quotes;

  return (
    <section id="quotes" className="relative overflow-hidden bg-ink py-28 md:py-40">
      <div className="smoke smoke-a left-[15%] top-[20%] size-[30vw]" />
      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <SectionHeading
          eyebrow="CHAPTER SEVEN — THE GOSPEL OF NORTH JERSEY"
          title="Certain things have been said."
          sub="Half philosophy, half threat, quotable for the rest of your natural life. Choose your fighter and bring it up at Thanksgiving."
          tone="dark"
          scriptWord="Quotables"
        />

        {/* centerpiece */}
        {first && (
          <FadeUp delay={0.15} className="mt-20 text-center">
            <span aria-hidden className="font-script block text-8xl leading-none text-crimson">“</span>
            <p className="font-display mx-auto max-w-4xl text-4xl font-black italic leading-[1.1] text-bone md:text-6xl">
              {first.text}
            </p>
            <p className="mt-6 font-stamp text-xs tracking-[0.4em] text-gold">{first.author.toUpperCase()}</p>
            <p className="mt-1 font-type text-[10px] tracking-[0.2em] text-smoke">{first.source}</p>
          </FadeUp>
        )}

        {second && (
          <FadeUp delay={0.25} className="mt-20 text-center">
            <p className="font-display mx-auto max-w-3xl text-2xl font-bold italic leading-snug text-bone/85 md:text-4xl">
              “{second.text}”
            </p>
            <p className="mt-4 font-stamp text-[11px] tracking-[0.35em] text-crimson">{second.author.toUpperCase()}</p>
          </FadeUp>
        )}

        {/* masonry of the rest */}
        <div className="mt-20 columns-1 gap-6 md:columns-2 xl:columns-3">
          {rest.map((q, i) => (
            <FadeUp key={q.id} delay={(i % 3) * 0.07} className="mb-6 break-inside-avoid">
              <blockquote className="border border-bone/10 bg-panel p-6 transition-colors duration-500 hover:border-crimson/50">
                <span aria-hidden className="font-script text-4xl leading-none text-gold/60">“</span>
                <p className="font-serif mt-1 text-[17px] italic leading-relaxed text-bone/90">{q.text}</p>
                <footer className="mt-4 border-t border-dashed border-bone/10 pt-3">
                  <p className="font-stamp text-[11px] tracking-[0.3em] text-bone/70">{q.author.toUpperCase()}</p>
                  <p className="mt-0.5 font-type text-[9.5px] tracking-[0.16em] text-smoke">{q.source}</p>
                </footer>
              </blockquote>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
