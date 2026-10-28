import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/brand/logo.webp';
import emblem from '../assets/brand/emblem.webp';
import { navLinks, site } from '../data/site';

const SCROLL_THRESHOLD = 24;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Sticky state: the bar is always fixed; it only changes look once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
          solid
            ? 'border-gold/20 bg-navy/95 shadow-lg shadow-black/30 backdrop-blur-md'
            : 'border-transparent bg-transparent'
        }`}
      >
        <nav
          aria-label="Main"
          className={`container-x flex items-center justify-between gap-4 transition-[padding] duration-300 ${
            scrolled ? 'py-2' : 'py-3 sm:py-4'
          }`}
        >
          {/* The full logo sets the size; the emblem sits on top of it and the two crossfade. The link has a
              fixed height so the images can size from it, and that height shrinks with the bar. */}
          <Link
            to="/"
            aria-label={`${site.name} home`}
            className={`relative block shrink-0 rounded-md transition-[height] duration-300 ${
              scrolled ? 'h-10' : 'h-12 sm:h-16 lg:h-[72px]'
            }`}
          >
            <img
              src={logo}
              alt={site.name}
              width="800"
              height="285"
              className={`h-full w-auto max-w-none transition-opacity duration-300 ${
                scrolled ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <img
              src={emblem}
              alt=""
              aria-hidden="true"
              width="256"
              height="256"
              className={`absolute left-0 top-0 aspect-square h-full w-auto max-w-none transition-opacity duration-300 ${
                scrolled ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `group relative block px-3 py-2 text-[13px] font-bold uppercase tracking-wider transition-colors hover:text-gold ${
                      isActive ? 'text-gold' : 'text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-3 bottom-0.5 h-0.5 origin-center bg-gold transition-transform duration-500 group-hover:scale-x-100 ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-white md:hidden"
          >
            <FiMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* Rendered outside <header>: backdrop-filter on the header would trap a fixed child inside it. */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 animate-fade-in bg-black/60 motion-reduce:animate-none"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="absolute right-0 top-0 flex h-full w-[min(20rem,85vw)] animate-slide-in flex-col bg-navy px-6 pb-8 pt-4 shadow-2xl motion-reduce:animate-none"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              autoFocus
              className="-mr-2 mb-4 inline-flex h-11 w-11 items-center justify-center self-end rounded-lg text-white"
            >
              <FiX className="h-6 w-6" aria-hidden="true" />
            </button>

            <ul className="flex flex-col">
              {navLinks.map(({ to, label }) => (
                <li key={to} className="border-b border-white/10">
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `block py-4 text-sm font-bold uppercase tracking-wider ${isActive ? 'text-gold' : 'text-white'}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-auto space-y-3 pt-8 text-sm">
              <Link to="/contact" className="btn-gold w-full">
                Request Verification
              </Link>
              <a href={`mailto:${site.email}`} className="block break-all text-center text-white/70 hover:text-gold">
                {site.email}
              </a>
              <a href={site.phoneHref} className="block text-center text-white/70 hover:text-gold">
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
