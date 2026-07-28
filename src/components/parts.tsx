"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* ─────────────── scroll reveal wrapper ─────────────── */
export function FadeUp({
  children,
  delay = 0,
  className = "",
  y = 36,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────── section heading kit ─────────────── */
export function SectionHeading({
  eyebrow,
  title,
  sub,
  tone = "dark",
  scriptWord,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  tone?: "dark" | "light";
  scriptWord?: string;
  align?: "left" | "center";
}) {
  const ink = tone === "dark" ? "text-bone" : "text-[#241a10]";
  const faint = tone === "dark" ? "text-bone/[0.07]" : "text-[#241a10]/[0.08]";
  return (
    <div className={`relative ${align === "center" ? "text-center" : ""}`}>
      {scriptWord && (
        <span
          aria-hidden
          className={`font-script pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-[16vw] leading-none md:text-[10rem] ${faint}`}
        >
          {scriptWord}
        </span>
      )}
      <FadeUp>
        <p className="font-stamp text-xs tracking-[0.45em] text-crimson md:text-sm">{eyebrow}</p>
      </FadeUp>
      <FadeUp delay={0.08}>
        <h2 className={`font-display mt-4 text-4xl font-black leading-[1.02] md:text-6xl ${ink}`}>
          {title}
        </h2>
      </FadeUp>
      {sub && (
        <FadeUp delay={0.16}>
          <p className={`font-serif mt-5 max-w-2xl text-lg leading-relaxed md:text-xl ${tone === "dark" ? "text-smoke" : "text-[#4a3a26]"} ${align === "center" ? "mx-auto" : ""}`}>
            {sub}
          </p>
        </FadeUp>
      )}
    </div>
  );
}

/* ─────────────── marquee ticker ─────────────── */
export function Ticker({
  items,
  className = "",
  fast = false,
  reverse = false,
  separator = "◆",
}: {
  items: string[];
  className?: string;
  fast?: boolean;
  reverse?: boolean;
  separator?: string;
}) {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 font-stamp text-sm tracking-[0.3em] whitespace-nowrap md:text-base">
            {item}
          </span>
          <span className="text-[9px] opacity-60">{separator}</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`marquee-track ${fast ? "marquee-fast" : ""} ${reverse ? "marquee-reverse" : ""}`}>
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

/* ─────────────── ornate rule ─────────────── */
export function OrnateRule({ className = "", children }: { className?: string; children?: ReactNode }) {
  return (
    <div className={`rule-ornate text-gold/50 ${className}`}>
      {children || <span className="text-[10px]">◆</span>}
    </div>
  );
}
