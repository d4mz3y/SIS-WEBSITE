import { photoUrl } from '../data/photos';

// Positions of the pulsing "GPS ping" markers (right-hand side, clear of the text).
const pings = [
  { x: '74%', y: '30%', delay: '0s' },
  { x: '87%', y: '56%', delay: '1.3s' },
  { x: '62%', y: '68%', delay: '2.6s' },
];

// Large hero for the inner pages. A photo shot in Nigeria (named by `photo`, see src/data/photos.js) drifts slowly
// behind a dark wash, a faint scan line sweeps across it and GPS pings pulse on top. The page heading sits in the
// hero so it is always above the fold. All motion is behind `motion-safe:`, so reduced-motion users get a still image.
export default function PageHero({ photo, eyebrow, title, lead }) {
  const src = photoUrl(photo);

  return (
    <section className="relative isolate flex min-h-[320px] items-end overflow-hidden bg-navy print:hidden sm:min-h-[400px] lg:min-h-[46vh]">
      {src && (
        <img
          src={src}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover motion-safe:animate-ken-burns"
        />
      )}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/55 to-navy/20" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/80 via-navy/30 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-navy/80 to-transparent" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden motion-reduce:hidden">
        <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-gold/10 to-transparent motion-safe:animate-sweep" />
        {pings.map(({ x, y, delay }) => (
          <span key={x} className="absolute hidden sm:block" style={{ left: x, top: y }}>
            <span className="absolute -left-[3px] -top-[3px] h-1.5 w-1.5 rounded-full bg-gold" />
            <span
              className="absolute -left-3 -top-3 h-6 w-6 rounded-full border border-gold/70 motion-safe:animate-ping-slow"
              style={{ animationDelay: delay }}
            />
          </span>
        ))}
      </div>

      <div className="container-x relative pb-12 pt-36 sm:pb-16">
        <div className="max-w-3xl text-center md:text-left">
          {eyebrow && <span className="eyebrow block">{eyebrow}</span>}
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h1>
          {lead && <p className="mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg md:mx-0">{lead}</p>}
        </div>
      </div>
    </section>
  );
}
