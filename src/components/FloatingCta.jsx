import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HIDDEN_ON = ['/contact', '/thank-you'];
const PHONE_MAX_WIDTH = 639;

export default function FloatingCta() {
  const { pathname } = useLocation();
  const [overFooter, setOverFooter] = useState(false);
  const [tuckedAway, setTuckedAway] = useState(false);
  const lastY = useRef(0);

  // Slide the button away while the footer is on screen so it never covers the footer links.
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(([entry]) => setOverFooter(entry.isIntersecting));
    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  // On phones the button would cover the text you are reading, so it steps aside while you scroll down
  // and comes back as soon as you scroll up (or reach the top).
  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (Math.abs(delta) < 8) return;
      setTuckedAway(window.innerWidth <= PHONE_MAX_WIDTH && delta > 0 && y > 120);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (HIDDEN_ON.includes(pathname)) return null;

  const hidden = overFooter || tuckedAway;

  return (
    <Link
      to="/contact"
      tabIndex={hidden ? -1 : 0}
      aria-hidden={hidden}
      className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 whitespace-nowrap print:hidden rounded-full bg-gold px-4 py-3 text-[13px] font-bold text-navy shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition duration-300 hover:bg-white sm:right-6 sm:px-5 sm:text-sm ${
        hidden ? 'pointer-events-none translate-y-4 opacity-0' : 'hover:-translate-y-0.5'
      }`}
    >
      Request Verification
    </Link>
  );
}
