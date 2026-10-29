import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HIDDEN_ON = ['/contact', '/thank-you'];
const PHONE_MAX_WIDTH = 639;

// The floating "Request Verification" button has to stay out of the way of the content it floats over:
//   - hidden while the hero is on screen (the hero has its own button, and the floating one covered it on phones);
//   - hidden while any form is on screen (it covered the corner of the message box);
//   - hidden while the footer is on screen;
//   - on phones, tucked away while scrolling down and back as soon as you scroll up.
export default function FloatingCta() {
  const { pathname } = useLocation();
  const [onScreen, setOnScreen] = useState({ hero: true, form: false, footer: false });
  const [tuckedAway, setTuckedAway] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    setOnScreen({ hero: true, form: false, footer: false });
    if (!('IntersectionObserver' in window)) return undefined;

    const roleOf = new Map();
    const hero = document.querySelector('main > section:first-child');
    if (hero) roleOf.set(hero, 'hero');
    document.querySelectorAll('main form').forEach((form) => roleOf.set(form, 'form'));
    const footer = document.querySelector('footer');
    if (footer) roleOf.set(footer, 'footer');

    // Several forms can exist on one page, so remember which are visible and report "any".
    const visible = { hero: new Set(), form: new Set(), footer: new Set() };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting, intersectionRatio }) => {
          const role = roleOf.get(target);
          // The hero counts as "on screen" until less than a tenth of it is left.
          const on = role === 'hero' ? isIntersecting && intersectionRatio > 0.1 : isIntersecting;
          visible[role][on ? 'add' : 'delete'](target);
        });
        setOnScreen({ hero: visible.hero.size > 0, form: visible.form.size > 0, footer: visible.footer.size > 0 });
      },
      { threshold: [0, 0.1, 0.5, 1] },
    );
    roleOf.forEach((_role, element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

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

  const hidden = onScreen.hero || onScreen.form || onScreen.footer || tuckedAway;

  return (
    <Link
      to="/contact"
      tabIndex={hidden ? -1 : 0}
      aria-hidden={hidden}
      className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 whitespace-nowrap rounded-full bg-gold px-4 py-3 text-[13px] font-bold text-navy shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition duration-300 hover:bg-white print:hidden sm:right-6 sm:px-5 sm:text-sm ${
        hidden ? 'pointer-events-none translate-y-4 opacity-0' : 'hover:-translate-y-0.5'
      }`}
    >
      Request Verification
    </Link>
  );
}
