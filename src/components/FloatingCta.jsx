import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HIDDEN_ON = ['/contact', '/thank-you'];

export default function FloatingCta() {
  const { pathname } = useLocation();
  const [overFooter, setOverFooter] = useState(false);

  // Slide the button away while the footer is on screen so it never covers the footer links.
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(([entry]) => setOverFooter(entry.isIntersecting));
    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  if (HIDDEN_ON.includes(pathname)) return null;

  return (
    <Link
      to="/contact"
      tabIndex={overFooter ? -1 : 0}
      aria-hidden={overFooter}
      className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 whitespace-nowrap print:hidden rounded-full bg-gold px-4 py-3 text-[13px] font-bold text-navy shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition duration-300 hover:bg-white sm:right-6 sm:px-5 sm:text-sm ${
        overFooter ? 'pointer-events-none translate-y-4 opacity-0' : 'hover:-translate-y-0.5'
      }`}
    >
      Request Verification
    </Link>
  );
}
