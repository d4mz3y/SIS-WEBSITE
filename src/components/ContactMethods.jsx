import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { site } from '../data/site';

const tile =
  'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-navy';

function Row({ href, Icon, label, value, external = false }) {
  const content = (
    <>
      <span className={tile}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs uppercase tracking-wider text-white/60">{label}</span>
        <span className="block break-words font-semibold group-hover:text-gold">{value}</span>
      </span>
    </>
  );

  if (!href) return <li className="flex items-center gap-4">{content}</li>;
  return (
    <li>
      <a
        href={href}
        className="group flex items-center gap-4"
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    </li>
  );
}

// Email and phone always; WhatsApp and the office address only once they are filled in (src/data/site.js).
export default function ContactMethods({ className = '' }) {
  return (
    <ul className={`space-y-4 text-white ${className}`}>
      <Row href={`mailto:${site.email}`} Icon={FiMail} label="Email" value={site.email} />
      <Row href={site.phoneHref} Icon={FiPhone} label="Phone" value={site.phone} />
      {site.whatsapp && (
        <Row href={`https://wa.me/${site.whatsapp}`} Icon={FaWhatsapp} label="WhatsApp" value="Chat with us" external />
      )}
      {site.address && <Row Icon={FiMapPin} label="Office" value={site.address} />}
    </ul>
  );
}
