import { Link } from 'react-router-dom';
import { FiFileText, FiMapPin, FiSearch, FiShield } from 'react-icons/fi';
import PageBand from '../components/PageBand.jsx';
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
    text: 'We deliver structured intelligence reports combining physical verification, HUM-INT, and data cross-referencing for confident decision-making.',
    highlight: 'Turn uncertainty into informed action.',
  },
];

export default function Services() {
  usePageMeta('Our Services', 'Employee verification, guarantor vetting, field intelligence operations and risk profiling from SIS Verification Services.');

  return (
    <>
      <PageBand />
      <section className="overflow-hidden bg-navy px-0 py-16 text-white sm:py-24">
        <div className="container-x max-w-6xl">
          <header className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
            <span className="eyebrow block">Our Services</span>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Forensic Verification Solutions Built for High-Trust Environments
            </h1>
            <p className="mt-6 leading-8 text-mist">
              SIS Verification Services provides forensic human capital verification solutions designed for
              organizations operating in high-risk, high-trust environments. Each service is built to eliminate
              uncertainty and deliver verifiable truth.
            </p>
          </header>

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
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-16 rounded-3xl border border-gold/30 bg-navy-card px-6 py-10 text-center sm:mt-20 sm:p-12">
            <h2 className="mb-2 text-2xl font-bold text-gold">Need Trusted Verification Intelligence?</h2>
            <p className="mb-7 text-mist">
              Submit a request and our team will respond with a confidential intelligence brief.
            </p>
            <Link to="/contact" className="btn-gold px-8 py-3.5">
              Request Verification
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
