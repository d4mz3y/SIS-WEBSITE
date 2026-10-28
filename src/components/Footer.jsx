import { Link } from 'react-router-dom';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/brand/logo.webp';
import { footerLinks, site } from '../data/site';

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
};

export default function Footer() {
  const socials = site.socials.filter((s) => s.href);

  return (
    <footer className="bg-navy border-t border-gold/20 text-white">
      <div
        className={`container-x grid gap-10 py-14 text-center sm:grid-cols-2 sm:text-left ${
          socials.length ? 'lg:grid-cols-[1.6fr_1fr_1.3fr_1fr]' : 'lg:grid-cols-[1.6fr_1fr_1.3fr]'
        }`}
      >
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" aria-label={`${site.name} home`} className="inline-block rounded-md">
            <img src={logo} alt={site.name} width="800" height="285" loading="lazy" className="mx-auto h-16 w-auto sm:mx-0" />
          </Link>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/70 sm:mx-0">{site.blurb}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="space-y-3">
            {footerLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-sm text-white/85 transition-colors hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer-heading">Contacts</h2>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-start justify-center gap-3 break-all text-white/85 transition-colors hover:text-gold sm:justify-start"
              >
                <FiMail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-3 text-white/85 transition-colors hover:text-gold sm:justify-start"
              >
                <FiPhone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
          </ul>
        </div>

        {socials.length > 0 && (
          <div>
            <h2 className="footer-heading">Connect With Us</h2>
            <ul className="flex flex-wrap justify-center gap-3 sm:justify-start">
              {socials.map(({ key, label, href }) => {
                const Icon = socialIcons[key];
                return (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition duration-300 hover:-translate-y-1 hover:bg-gold hover:text-navy"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-sm text-white/50 sm:flex-row">
          <p className="text-center">
            &copy; {new Date().getFullYear()} {site.name}. All Rights Reserved.
          </p>
          <Link to="/terms" className="py-1 transition-colors hover:text-gold">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
