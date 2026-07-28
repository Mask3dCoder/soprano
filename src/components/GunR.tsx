/** The pistol that stands in for the letter R — homage to the legendary wordmark. */
export default function GunR({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="currentColor">
      <g transform="rotate(-40 50 50)">
        {/* slide */}
        <rect x="4" y="18" width="72" height="15" rx="3.5" />
        {/* rear sight */}
        <rect x="2" y="14.5" width="7" height="6" rx="1.5" />
        {/* muzzle */}
        <rect x="74" y="20" width="11" height="11" rx="2" />
        {/* hammer */}
        <rect x="8" y="31" width="8" height="6" rx="2" />
        {/* frame */}
        <rect x="28" y="33" width="40" height="7" rx="1.5" />
        {/* grip, angled back */}
        <path d="M60 40 L74 40 L64 86 Q62.6 91.4 56.8 91 L48.2 90.4 Q43.4 90 45 84.6 L54.4 44.4 Q55.2 41.4 58.4 40.4 Z" />
        {/* grip ridges */}
        <path d="M57 60 L68 58 M55 68 L66 66 M53 76 L64 74" stroke="#0b0907" strokeWidth="2" strokeLinecap="round" />
        {/* trigger guard */}
        <path d="M30 42 Q51 40 49 54 Q47.4 63 38 61 Q29.4 58.4 31 50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        {/* trigger */}
        <path d="M37 43 Q39 51 35 56" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      </g>
    </svg>
  );
}
