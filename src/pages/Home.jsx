import { Link } from 'react-router-dom';
import {
  FiBriefcase,
  FiCreditCard,
  FiDatabase,
  FiFileText,
  FiMapPin,
  FiShield,
  FiUserCheck,
  FiUsers,
} from 'react-icons/fi';
import Photo from '../components/Photo.jsx';
import AnimatedShield from '../components/AnimatedShield.jsx';
import GlobeTracker from '../components/GlobeTracker.jsx';
import ContactForm from '../components/ContactForm.jsx';
import ContactMethods from '../components/ContactMethods.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { site } from '../data/site';

const reasons = [
  {
    title: 'Field-First Intelligence',
    text: 'We don’t just “check” addresses; we audit them. Our boots-on-ground methodology confirms the physical reality behind every profile.',
  },
  {
    title: 'Tamper-Proof Evidence',
    text: 'Every report is backed by GPS-tagged metadata and timestamped photography, creating audit-proof evidence of presence.',
  },
  {
    title: 'Corporate Risk Reduction',
    text: 'We help organisations reduce hiring fraud, identity manipulation, guarantor falsification, and internal security threats before onboarding.',
  },
];

const facilities = [
  {
    photo: 'facility-database',
    Icon: FiDatabase,
    title: 'Global Database Access',
    alt: 'Server racks with network cabling in a data centre',
    text: 'Access an extensive network of global databases so that every identity verification is thorough, accurate, and up to international standards.',
  },
  {
    photo: 'facility-vetting',
    Icon: FiUsers,
    title: 'Reliable Personnel Vetting',
    alt: 'A Nigerian professional in a dark shirt and glasses',
    text: 'Mitigate internal risks with detailed staff profiling and integrity assessments, ensuring your team is composed of trustworthy and verified individuals.',
  },
  {
    visual: 'globe',
    title: 'Advanced Surveillance',
    text: 'Utilising high-tech monitoring solutions and on-ground intelligence to support our field operations with real-time security updates, so every verification is carried out safely and securely.',
  },
];

const steps = [
  { photo: 'step-identity', Icon: FiCreditCard, title: 'Identity Confirmation', alt: 'An open passport with entry stamps and travel documents', text: 'We verify identity using valid identification documents and records.' },
  { photo: 'step-address', Icon: FiMapPin, title: 'Address Verification', alt: 'A busy street scene with motor tricycles in Nigeria', text: 'Field officers physically confirm residence and environment.' },
  { photo: 'step-guarantor', Icon: FiUserCheck, title: 'Guarantor Verification', alt: 'Two people shaking hands to seal an agreement', text: 'We confirm guarantors are real, reachable and reliable.' },
  { photo: 'step-employment', Icon: FiBriefcase, title: 'Employment Checks', alt: 'Two Nigerian colleagues working together at a laptop', text: 'We verify workplace history and professional credibility.' },
  { photo: 'step-report', Icon: FiFileText, title: 'Risk Assessment', alt: 'Performance metrics dashboard shown on a screen', text: 'We assess the risk in every finding and compile it into a structured intelligence report.' },
];

const industries = [
  'Logistics Companies',
  'Security Firms',
  'Oil & Gas',
  'Recruitment Firms',
  'Telecommunications',
  'Government Contractors',
  'Manufacturing',
  'Healthcare',
  'Educational Institutions',
];

const assurances = ['GPS-tagged reports', 'Confidential investigations', 'Evidence-based verification'];

export default function Home() {
  usePageMeta('/');

  return (
    <>
      {/* Hero */}
      <section className="bg-hero min-h-hero relative flex items-center overflow-hidden pb-20 pt-28 text-white">
        <AnimatedShield className="pointer-events-none absolute right-[3%] top-1/2 hidden w-[min(38vw,580px)] -translate-y-1/2 lg:block" />
        <div className="container-x relative">
          <div className="mx-auto max-w-4xl text-center lg:mx-0 lg:max-w-xl lg:text-left xl:max-w-2xl">
            <AnimatedShield className="mx-auto mb-6 w-44 sm:w-56 lg:hidden" />
            <h1 className="text-[2rem] font-bold leading-tight sm:text-5xl xl:text-6xl">
              The <span className="text-gold">GOLD STANDARD</span> FOR CORPORATE INTEGRITY.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg lg:mx-0">
              Forensic Employee Verification, Guarantor Vetting and Risk Assessments.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link to="/contact" className="btn-gold">
                Request Verification
              </Link>
              <Link to="/about" className="btn-outline">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why SIS */}
      <section className="bg-white py-12 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-navy sm:text-4xl">
              Why Leading Organisations <span className="text-gold-ink">Choose SIS</span>
            </h2>
            <p className="mt-5 leading-7 text-navy/80">
              Organisations trust SIS Verification Services because we deliver more than routine background checks.
              Through our field-first intelligence approach, we provide physically verified, evidence-backed reports
              that help businesses reduce fraud, strengthen hiring decisions, and protect operational integrity with
              confidence.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reasons.map(({ title, text }) => (
              <div
                key={title}
                className="rounded-xl border border-gold/20 bg-gold/5 p-6 text-center transition duration-500 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]"
              >
                <h3 className="text-lg font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-navy/80">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-white pb-12 sm:pb-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-gold-ink sm:text-4xl">Our Facilities</h2>
            <p className="mt-5 leading-7 text-navy/80">
              Our operational facilities are designed to support accurate, secure, and efficient verification
              processes. Equipped with modern communication systems, secure data handling procedures, and coordinated
              field operations, SIS Verification Services ensures every investigation is conducted with
              professionalism, confidentiality, and precision.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {facilities.map(({ photo, visual, Icon, title, alt, text, position }) => (
              <article key={title}>
                <div className="aspect-[16/10] overflow-hidden rounded-xl">
                  {visual === 'globe' ? <GlobeTracker /> : <Photo name={photo} alt={alt} Icon={Icon} position={position} sizes="(min-width: 768px) 33vw, 100vw" />}
                </div>
                <h3 className="mb-3 mt-5 text-lg font-bold text-navy">{title}</h3>
                <p className="text-sm leading-7 text-navy/80">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we verify */}
      <section className="bg-white pb-12 sm:pb-24">
        <div className="container-x max-w-5xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold tracking-[0.2em] text-gold-ink">HOW WE VERIFY</span>
            <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">Our Structured Verification Process</h2>
            <p className="mt-4 leading-7 text-navy/80">
              SIS Verification Services follows a detailed field-first investigative process designed to eliminate
              uncertainty and deliver evidence-based verification.
            </p>
          </div>
          <ol className="space-y-4 sm:space-y-6">
            {steps.map(({ photo, Icon, title, alt, text, position }, index) => (
              <li
                key={title}
                className="flex items-center gap-3 rounded-2xl border border-navy/5 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1 md:gap-5 md:p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy text-base font-bold text-gold md:h-[70px] md:w-[70px] md:rounded-xl md:text-2xl">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 text-base font-bold text-navy md:mb-1.5 md:text-lg">{title}</h3>
                  <p className="text-sm leading-6 text-navy/80">{text}</p>
                </div>
                <div className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl sm:h-[84px] sm:w-[84px] md:h-[100px] md:w-[140px]">
                  <Photo name={photo} alt={alt} Icon={Icon} position={position} sizes="(min-width: 768px) 140px, 84px" />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PAI method */}
      <section className="bg-band relative overflow-hidden px-5 py-14 text-center text-white sm:py-24">
        <AnimatedShield className="pointer-events-none absolute right-[5%] top-1/2 hidden w-[min(22vw,320px)] -translate-y-1/2 xl:block" />
        <div className="relative mx-auto max-w-xl">
          <AnimatedShield className="mx-auto mb-5 w-32 xl:hidden" />
          <h2 className="text-3xl font-bold sm:text-4xl">
            The PAI <span className="text-gold">Method</span>
          </h2>
          <p className="mt-4 leading-7">
            Our proprietary Physical Address Intelligence workflow eliminates identity fraud and guarantees real-world
            validation.
          </p>
          <Link to="/method" className="btn-outline mt-8">
            Explore Our Method
          </Link>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-12 text-center sm:py-20">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            Industries <span className="text-gold-ink">We Serve</span>
          </h2>
          <p className="mb-8 mt-3 inline-block border-b-[3px] sm:mb-12 border-gold pb-1 text-lg text-navy">
            Trusted Across Critical Industries
          </p>
          <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {industries.map((name) => (
              <li
                key={name}
                className="rounded-lg border-l-[5px] border-gold bg-navy p-4 text-sm font-semibold text-white last:col-span-2 sm:p-6 sm:text-base lg:last:col-span-1"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-navy px-0 py-12 text-white sm:py-24">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">Request Verification</span>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Evidence-Based Verification <span className="text-gold">You Can Trust</span>
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-mist">
              SIS Verification Services helps organisations reduce fraud and hiring risk through physical
              verification, guarantor vetting, and intelligence-led investigations. Tell us what you need verified and
              we will respond with a confidential intelligence brief.
            </p>

            <ContactMethods className="mt-8" />

            <ul className="mt-8 flex flex-wrap gap-3">
              {assurances.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/5 px-4 py-2 text-sm text-mist"
                >
                  <FiShield className="h-4 w-4 text-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-gold/25 bg-navy-card p-6 shadow-card sm:p-8">
            <h3 className="mb-1 text-xl font-bold text-gold">Request Intelligence Brief</h3>
            <p className="mb-6 text-sm text-mist">All submissions are handled with strict confidentiality.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
