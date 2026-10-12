import { FIRST_NAME, NAME } from '../data/site';

/** Initials shown in the hero ring when no photo is set. */
export default function Monogram() {
  const initials = NAME.split(' ').map((w) => w[0]).join('');
  return (
    <svg viewBox="0 0 300 300" role="img" aria-label={`${FIRST_NAME}'s initials`}>
      <defs>
        <linearGradient id="mono-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2d2250" />
          <stop offset="1" stopColor="#0f0b22" />
        </linearGradient>
        <linearGradient id="mono-text" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c084fc" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill="url(#mono-bg)" />
      <text
        x="150"
        y="188"
        textAnchor="middle"
        fontFamily="Sora, system-ui, sans-serif"
        fontSize="130"
        fontWeight="700"
        letterSpacing="-6"
        fill="url(#mono-text)"
      >
        {initials}
      </text>
    </svg>
  );
}
