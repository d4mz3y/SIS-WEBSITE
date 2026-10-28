import { Link } from 'react-router-dom';
import { FiArrowRight, FiFileText, FiMapPin, FiSearch, FiShield } from 'react-icons/fi';
import CtaBox from '../components/CtaBox.jsx';
import PageHero from '../components/PageHero.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

const services = [
  {
    Icon: FiShield,
    title: 'Employee Verification',
    text: 'We conduct deep background intelligence on prospective and existing employees, ensuring that identities, addresses, and personal histories are physically validated.',
    highlight: 'Ideal for sensitive roles and high-risk hires.',
  },
  {
    Icon: FiMapPin,
    title: 'Guarantor Vetting',
    text: 'We verify guarantors through on-ground investigation, ensuring they are legitimate, traceable, and capable of fulfilling their obligation.',
    highlight: 'Eliminates false guarantors and liability exposure.',
  },
  {
    Icon: FiSearch,
    title: 'Field Intelligence Operations',
    text: 'Our agents conduct real-world investigations, gathering actionable intelligence directly from the environment where the subject operates.',
    highlight: 'Provides insights beyond digital records.',
  },
  {
    Icon: FiFileText,
    title: 'Risk Profiling & Reporting',
    text: 'We deliver structured intelligence reports combining physical verification, HUMINT, and data cross-referencing for confident decision-making.',
    highlight: 'Turn uncertainty into informed action.',
  },
];

export default function Services() {
  usePageMeta('/services');

  return (
    <>
      <PageHero
        photo="hero-services"
        eyebrow="Our Services"
        title="Forensic Verification Solutions Built for High-Trust Environments"
        lead="SIS Verification Services provides forensic human capital verification solutions designed for organizations operating in high-risk, high-trust environments. Each service is built to eliminate uncertainty and deliver verifiable truth."
      />
      <section className="overflow-hidden bg-navy px-0 py-16 text-white sm:py-24">
        <div className="container-x max-w-6xl">

          <ul className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {services.map(({ Icon, title, text, highlight }) => (
              <li
                key={title}
                className="relative overflow-hidden rounded-[1.75rem] border border-gold/20 bg-navy-card p-7 shadow-card transition duration-300 hover:-translate-y-2 hover:border-gold sm:p-10"
              >
                <span aria-hidden="true" className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-gold/10" />
                <div className="relative">
                  <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-[20px] border border-gold/30 bg-gold/10 text-gold">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h2 className="mb-4 text-2xl font-bold sm:text-[1.75rem]">{title}</h2>
                  <p className="mb-6 text-[15px] leading-8 text-mist">{text}</p>
                  <p className="inline-block rounded-2xl border border-gold/25 bg-gold/10 px-[18px] py-3 text-sm font-semibold text-gold">
                    {highlight}
                  </p>
                  <div className="mt-6">
                    <Link
                      to={`/contact?service=${encodeURIComponent(title)}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-gold"
                    >
                      Request this service
                      <FiArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <CtaBox className="mt-16 sm:mt-20" />
        </div>
      </section>
    </>
  );
}
