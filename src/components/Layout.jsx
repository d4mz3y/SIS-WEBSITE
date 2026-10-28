import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import FloatingCta from './FloatingCta.jsx';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 'instant' overrides the page's smooth scrolling: a new page should open at the top, not slide there.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-hero flex flex-col bg-navy print:min-h-0 print:bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:font-bold focus:text-navy"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
