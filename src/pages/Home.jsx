import { Link } from 'react-router-dom';
import {
  FiBriefcase,
  FiCreditCard,
  FiDatabase,
  FiFileText,
  FiMail,
  FiMapPin,
  FiPhone,
  FiShield,
  FiUserCheck,
  FiUsers,
  FiVideo,
} from 'react-icons/fi';
import Photo from '../components/Photo.jsx';
import ContactForm from '../components/ContactForm.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { site } from '../data/site';

const reasons = [
  {
    title: 'Field-First Intelligence',
    text: 'We don’t just “check” addresses; we audit them. Our boots-on-ground methodology confirms the physical reality behind every profile.',
  },
  {
    title: 'Tamper-Proof Evidence',
    text: 'Every report is backed by GPS-tagged metadata and timestamped photography, creating audit-proof proof of presence.',
  },
  {
    title: 'Corporate Risk Reduction',
    text: 'We help organizations reduce hiring fraud, identity manipulation, guarantor falsification, and internal security threats before onboarding.',
  },
];

const facilities = [
  {
    photo: 'facility-database',
    Icon: FiDatabase,
    title: 'Global Database Access',
    alt: 'Server racks with network cabling in a data centre',
    text: 'Access an extensive network of global databases to ensure every background check and identity verification is thorough, accurate, and up to international standards.',
  },
  {
    photo: 'facility-vetting',
    Icon: FiUsers,
    title: 'Reliable Personnel Vetting',
    alt: 'Two professionals in an interview, taking notes at a table',
    text: 'Mitigate internal risks with detailed staff profiling and integrity assessments, ensuring your team is composed of trustworthy and verified individuals.',
  },
  {
    photo: 'facility-surveillance',
    Icon: FiVideo,
    title: 'Advanced Surveillance',
    alt: 'Rows of security cameras mounted on a wall',
    text: 'Utilizing high-tech monitoring solutions and on-ground intelligence to provide real-time security updates and robust protection for your physical and digital assets.',
  },
];

const steps = [
  { photo: 'step-identity', Icon: FiCreditCard, title: 'Identity Confirmation', alt: 'An open passport with entry stamps and travel documents', text: 'We verify identity using valid documentation and background checks.' },
  { photo: 'step-address', Icon: FiMapPin, title: 'Address Verification', alt: 'A busy street scene with motor tricycles in Nigeria', text: 'Field officers physically confirm residence and environment.' },
  { photo: 'step-guarantor', Icon: FiUserCheck, title: 'Guarantor Verification', alt: 'Two people shaking hands to seal an agreement', text: 'We confirm guarantors are real, reachable and reliable.' },
  { photo: 'step-employment', Icon: FiBriefcase, title: 'Employment Checks', alt: 'Colleagues meeting around a table in an office', text: 'We verify workplace history and professional credibility.' },
  { photo: 'step-report', Icon: FiFileText, title: 'Risk Assessment', alt: 'Performance metrics dashboard shown on a screen', text: 'All findings are compiled into structured intelligence reports.' },
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
  usePageMeta(
    '',
    'SIS Verification Services is a field-focused intelligence company that verifies employees and guarantors with physical, evidence-based methods across Nigeria.',
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-hero min-h-hero flex items-center pb-20 pt-28 text-white">
        <div className="container-x">
          <div className="mx-auto max-w-4xl text-center lg:mx-0 lg:max-w-xl lg:text-left xl:max-w-2xl">
            <h1 className="text-[2rem] font-bold leading-tight sm:text-5xl xl:text-6xl">
              The <span className="text-gold">GOLD STANDARD</span> FOR CORPORATE INTEGRITY.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg lg:mx-0">
              Forensic Employee Verification, Guarantor Vetting and Risk Assessments.
            </p>
            <Link to="/about" className="btn-outline mt-9">
              Visit Us To Know More
            </Link>
          </div>
        </div>
      </section>

      {/* Why SIS */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-navy sm:text-4xl">
              Why Leading Organizations <span className="text-gold">Choose SIS</span>
            </h2>
            <p className="mt-5 leading-7 text-navy/80">
              Organizations trust SIS Verification Services because we deliver more than routine background checks.
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
      <section className="bg-white pb-16 sm:pb-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-gold sm:text-4xl">Our Facilities</h2>
            <p className="mt-5 leading-7 text-navy/80">
              Our operational facilities are designed to support accurate, secure, and efficient verification
              processes. Equipped with modern communication systems, secure data handling procedures, and coordinated
              field operations, SIS Verification Services ensures every investigation is conducted with
              professionalism, confidentiality, and precision.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {facilities.map(({ photo, Icon, title, alt, text }) => (
              <article key={title}>
                <div className="aspect-[16/10] overflow-hidden rounded-xl">
                  <Photo name={photo} alt={alt} Icon={Icon} />
                </div>
                <h3 className="mb-3 mt-5 text-lg font-bold text-navy">{title}</h3>
                <p className="text-sm leading-7 text-navy/80">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we verify */}
      <section className="bg-white pb-16 sm:pb-24">
        <div className="container-x max-w-5xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold tracking-[0.2em] text-gold">HOW WE VERIFY</span>
            <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">Our Structured Verification Process</h2>
            <p className="mt-4 leading-7 text-navy/80">
              SIS Verification Services follows a detailed field-first investigative process designed to eliminate
              uncertainty and deliver evidence-based verification.
            </p>
          </div>
          <ol className="space-y-6">
            {steps.map(({ photo, Icon, title, alt, text }, index) => (
              <li
                key={title}
                className="flex flex-col gap-5 rounded-2xl border border-navy/5 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 md:flex-row md:items-center"
              >
                <div className="flex items-center gap-5 md:flex-1">
                  <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-xl bg-navy text-2xl font-bold text-gold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="min-w-0">
                    <h3 className="mb-1.5 text-lg font-bold text-navy">{title}</h3>
                    <p className="text-sm leading-6 text-navy/80">{text}</p>
                  </div>
                </div>
                <div className="h-44 w-full shrink-0 overflow-hidden rounded-xl md:h-[100px] md:w-[140px]">
                  <Photo name={photo} alt={alt} Icon={Icon} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PAI method */}
      <section className="bg-band px-5 py-20 text-center text-white sm:py-24">
        <div className="mx-auto max-w-xl">
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
      <section className="bg-white py-16 text-center sm:py-20">
        <div className="container-x">
          <h2 className="text-3xl font-bold uppercase text-navy sm:text-4xl">
            Industries <span className="text-gold">We Serve</span>
          </h2>
          <p className="mb-12 mt-3 inline-block border-b-[3px] border-gold pb-1 text-lg text-navy">
            Trusted Across Critical Industries
          </p>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((name) => (
              <li
                key={name}
                className="rounded-lg border-l-[5px] border-gold bg-navy p-6 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-gold hover:text-navy"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-navy px-0 py-16 text-white sm:py-24">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">Request Verification</span>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Evidence-Based Verification, <span className="text-gold">You Can Trust</span>
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-mist">
              SIS Verification Services helps organizations reduce fraud and hiring risk through physical
              verification, guarantor vetting, and intelligence-led investigations. Tell us what you need verified and
              we will respond with a confidential intelligence brief.
            </p>

            <ul className="mt-8 space-y-4">
              <li>
                <a href={`mailto:${site.email}`} className="group flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-navy">
                    <FiMail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-white/60">Email</span>
                    <span className="block break-all font-semibold group-hover:text-gold">{site.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="group flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-navy">
                    <FiPhone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-white/60">Phone</span>
                    <span className="block font-semibold group-hover:text-gold">{site.phone}</span>
                  </span>
                </a>
              </li>
            </ul>

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
            <ContactForm compact />
          </div>
        </div>
      </section>
    </>
  );
}
