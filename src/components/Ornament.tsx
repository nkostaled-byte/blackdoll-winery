// src/components/Ornament.tsx
/** Thin gold rule with a centre diamond — the brand's divider. */
export function OrnamentRule({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-l from-gold/70 to-transparent sm:w-24" />
      <span className="block h-1.5 w-1.5 rotate-45 border border-gold bg-ink" />
      <span className="h-px w-16 bg-gradient-to-r from-gold/70 to-transparent sm:w-24" />
    </div>
  );
}

/** Art-Deco chevron corner motif from the brand artwork. */
export function CornerMotif({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className={className}>
      <path d="M0 34 L52 34 L86 68 L86 120" stroke="#C4A052" strokeWidth="10" />
      <path d="M0 62 L40 62 L62 84 L62 120" stroke="#C4A052" strokeOpacity="0.45" strokeWidth="5" />
      <path d="M0 8 L64 8 L112 56 L112 120" stroke="#C4A052" strokeOpacity="0.2" strokeWidth="2" />
    </svg>
  );
}
