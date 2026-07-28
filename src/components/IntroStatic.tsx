"use client";

import { useEffect, useState } from "react";

type Phase = "static" | "black" | "fade" | "gone";

/** The HBO snow. Plays once per session: static, smash to black, then the show. */
export default function IntroStatic() {
  const [phase, setPhase] = useState<Phase>(() =>
    typeof window !== "undefined" && sessionStorage.getItem("sopranos-intro") ? "gone" : "static"
  );

  useEffect(() => {
    if (phase === "gone") return;
    sessionStorage.setItem("sopranos-intro", "1");
    const t1 = setTimeout(() => setPhase("black"), 1500);
    const t2 = setTimeout(() => setPhase("fade"), 2150);
    const t3 = setTimeout(() => setPhase("gone"), 2950);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] bg-black transition-opacity duration-700 ${
        phase === "fade" ? "opacity-0" : "opacity-100"
      }`}
    >
      {phase === "static" && (
        <>
          <div className="tv-static absolute inset-0 opacity-90" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <p className="font-stamp text-xs tracking-[0.55em] text-bone/80 md:text-sm">
                AN UNOFFICIAL PRESENTATION
              </p>
              <p className="mt-3 font-type text-[10px] tracking-[0.2em] text-bone/40">
                in association with the waste management industry of north jersey
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
