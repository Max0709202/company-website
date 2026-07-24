type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  className?: string;
};

/**
 * maxIEI mark.
 * The glyph literally spells I-E-I — the three values the company runs on:
 * Integrity (left stem), Excellence (centre rungs), Innovation (right stem).
 */
export function Logo({ size = 38, withWordmark = true, className }: LogoProps) {
  return (
    <span className={`logo${className ? ` ${className}` : ""}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 44 44"
        fill="none"
        role="img"
        aria-label="maxIEI"
        className="logo-mark"
      >
        <defs>
          <linearGradient id="maxiei-chip" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5AF0C8" />
            <stop offset="52%" stopColor="#57B8FF" />
            <stop offset="100%" stopColor="#8C7CFF" />
          </linearGradient>
        </defs>
        <rect width="44" height="44" rx="12" fill="url(#maxiei-chip)" />
        {/* I — Integrity */}
        <rect x="11.5" y="13" width="4" height="18" rx="2" fill="#06080D" />
        {/* E — Excellence */}
        <rect x="17.5" y="13" width="9" height="3.4" rx="1.7" fill="#06080D" />
        <rect x="17.5" y="20.3" width="9" height="3.4" rx="1.7" fill="#06080D" />
        <rect x="17.5" y="27.6" width="9" height="3.4" rx="1.7" fill="#06080D" />
        {/* I — Innovation */}
        <rect x="28.5" y="13" width="4" height="18" rx="2" fill="#06080D" />
      </svg>
      {withWordmark ? (
        <span className="logo-word">
          <span className="logo-word-light">max</span>
          <span className="logo-word-bold">IEI</span>
        </span>
      ) : null}
    </span>
  );
}
