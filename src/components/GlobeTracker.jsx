import globe from '../assets/photos/globe-africa.webp';

// A real satellite photograph of Africa and Europe (NASA DSCOVR, public domain; see src/assets/photos/CREDITS.md)
// with two markers on it: a pinned target in Abuja, and the user's own location blinking green in Lagos.
// Marker positions are fractions of the photo, worked out from its map projection. The photo is 1780 x 1768.
const PHOTO_ASPECT = 1780 / 1768;
const CARD_ASPECT = 16 / 10;
const ZOOM = 2.1; // the photo is shown this many times wider than the card
const TARGET = { x: 0.3943, y: 0.6076 }; // Abuja
const YOU = { x: 0.3692, y: 0.6335 }; // Lagos
const MID = { x: (TARGET.x + YOU.x) / 2, y: (TARGET.y + YOU.y) / 2 };
// The card looks slightly north of the markers, so the clear Sahara and the coastline show above them, not just cloud.
const VIEW = { x: MID.x, y: MID.y - 0.05 };

const pct = (fraction) => `${(fraction * 100).toFixed(2)}%`;

export default function GlobeTracker() {
  // Position the photo so VIEW sits at the centre of the card.
  const left = 50 - VIEW.x * ZOOM * 100;
  const top = 50 - VIEW.y * ZOOM * (CARD_ASPECT / PHOTO_ASPECT) * 100;

  return (
    <div
      role="img"
      aria-label="Satellite photograph of West Africa with a tracked target pinned in Abuja, Nigeria, and the user's location blinking green in Lagos"
      className="relative h-full w-full overflow-hidden bg-navy"
    >
      <div
        aria-hidden="true"
        className="absolute motion-safe:animate-ken-burns"
        style={{
          width: `${ZOOM * 100}%`,
          aspectRatio: PHOTO_ASPECT,
          left: `${left}%`,
          top: `${top}%`,
          transformOrigin: `${pct(MID.x)} ${pct(MID.y)}`,
        }}
      >
        <img src={globe} alt="" loading="lazy" decoding="async" className="h-full w-full" />

        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <line
            x1={YOU.x * 1000}
            y1={YOU.y * 1000}
            x2={TARGET.x * 1000}
            y2={TARGET.y * 1000}
            stroke="rgba(255,195,0,0.85)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            vectorEffect="non-scaling-stroke"
            className="motion-safe:animate-dash"
          />
        </svg>

        {/* the tracked target */}
        <span className="absolute" style={{ left: pct(TARGET.x), top: pct(TARGET.y) }}>
          <span className="absolute -left-12 top-0 h-px w-24 bg-gold/40" />
          <span className="absolute -top-12 left-0 h-24 w-px bg-gold/40" />
          <span className="absolute -left-[5px] -top-[5px] h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_12px_3px_rgba(255,195,0,0.8)]" />
          <span className="absolute -left-4 -top-4 h-8 w-8 rounded-full border border-gold motion-safe:animate-ping-slow" />
          <span className="absolute -left-7 -top-7 h-14 w-14 rounded-full border border-gold/40 motion-safe:animate-ping-slow [animation-delay:1.3s]" />
          <span className="absolute left-3 top-3 whitespace-nowrap rounded bg-navy/80 px-1.5 py-0.5 text-[9px] font-bold tracking-[0.18em] text-gold">
            TARGET
          </span>
        </span>

        {/* the user's own location */}
        <span className="absolute" style={{ left: pct(YOU.x), top: pct(YOU.y) }}>
          <span className="absolute -left-[5px] -top-[5px] h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_3px_rgba(52,211,153,0.9)] motion-safe:animate-blink" />
          <span className="absolute -left-4 -top-4 h-8 w-8 rounded-full border border-emerald-400/70 motion-safe:animate-ping-slow" />
          <span className="absolute -left-8 top-3 whitespace-nowrap rounded bg-navy/80 px-1.5 py-0.5 text-[9px] font-bold tracking-[0.18em] text-emerald-300">
            YOU
          </span>
        </span>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(2,3,28,0.8)_100%)]"
      />
      <span
        aria-hidden="true"
        className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-navy/75 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-emerald-300"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 motion-safe:animate-blink" />
        LIVE TRACKING
      </span>
    </div>
  );
}
