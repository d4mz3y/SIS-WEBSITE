import shield from '../assets/brand/shield.webp';

// Decorative animated shield for the home hero and the PAI band. It floats gently, its glow breathes, a ring pings
// outward like a radar, and two dashed rings turn in opposite directions. Every animation is behind `motion-safe:`,
// so people who have asked their device for reduced motion get a still shield.
export default function AnimatedShield({ className = '' }) {
  const ring = { transformBox: 'fill-box', transformOrigin: 'center' };

  return (
    <div aria-hidden="true" className={`aspect-square ${className}`}>
      {/* positioning classes arrive on the outer div; the layers stack inside this one */}
      <div className="relative h-full w-full">
        <span className="absolute inset-[14%] rounded-full bg-[radial-gradient(circle,rgba(40,110,230,0.5),transparent_68%)] motion-safe:animate-glow" />
        <span className="absolute inset-[26%] rounded-full border border-gold/60 motion-safe:animate-ping-slow" />
        <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
          <circle
            cx="100"
            cy="100"
            r="94"
            fill="none"
            stroke="rgba(255,195,0,0.4)"
            strokeWidth="0.9"
            strokeDasharray="2 8"
            className="motion-safe:animate-spin-slow"
            style={ring}
          />
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="rgba(130,175,255,0.35)"
            strokeWidth="0.9"
            strokeDasharray="16 12"
            className="motion-safe:animate-spin-reverse"
            style={ring}
          />
        </svg>
        <img src={shield} alt="" width="560" height="560" className="relative h-full w-full motion-safe:animate-float" />
      </div>
    </div>
  );
}
