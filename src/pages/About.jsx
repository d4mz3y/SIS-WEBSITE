import { FiCheck, FiCompass, FiShield } from 'react-icons/fi';
import PageHero from '../components/PageHero.jsx';
import CtaBox from '../components/CtaBox.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

const trust = ['GPS-Tagged Reports', 'Nationwide Field Operations', 'Confidential Investigations', 'Evidence-Based Verification'];

export default function About() {
  usePageMeta('/about');

  return (
    <>
      <PageHero
        photo="hero-about"
        eyebrow="About SIS"
        title="Specialised Intelligence for Modern Enterprise."
        lead="SIS Verification Services delivers field-first intelligence and forensic verification solutions designed to protect organisations from fraud, liability, and operational risk."
      />
      <section className="bg-navy px-0 py-16 text-white sm:py-24">
        <div className="container-x max-w-6xl">

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-gold/25 bg-navy-card p-7 shadow-card transition duration-300 hover:-translate-y-1.5 sm:p-10 lg:col-span-3">
              <h2 className="mb-6 text-2xl font-bold text-gold sm:text-3xl">The SIS Difference</h2>
              <p className="leading-8 text-mist sm:text-[17px]">
                Most verification agencies rely on phone calls and fragmented databases. At SIS Verification Services,
                we believe digital data in Nigeria is only a starting point.
              </p>
              <p className="mt-5 leading-8 text-white/60 sm:text-[17px]">
                Our methodology is rooted in the high-stakes security requirements of Tier-1 industries, ensuring that
                when we say a candidate is “Verified,” it is backed by field intelligence, documented evidence, and
                operational certainty.
              </p>
            </article>

            <article className="rounded-[2rem] border border-gold/25 bg-navy-card p-7 shadow-card transition duration-300 hover:-translate-y-1.5 sm:p-10">
              <div className="mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-gold text-navy">
                <FiShield className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-gold">Our Mission</h2>
              <p className="leading-8 text-mist">
                To protect our clients from internal fraud and liability by ensuring every employee and guarantor is
                physically and forensically verified.
              </p>
            </article>

            <article className="rounded-[2rem] border border-gold/25 bg-navy-card p-7 shadow-card transition duration-300 hover:-translate-y-1.5 sm:p-10">
              <h2 className="mb-6 text-2xl font-bold text-gold">Trusted Intelligence</h2>
              <ul className="space-y-4">
                {trust.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-mist">
                    <FiCheck className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] border border-gold/25 bg-navy-card p-7 shadow-card transition duration-300 hover:-translate-y-1.5 sm:p-10">
              <div className="mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-gold text-navy">
                <FiCompass className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-gold">Our Vision</h2>
              <p className="leading-8 text-mist">
                To be the most trusted compass for corporate integrity in Africa, setting the Gold Standard for
                physical verification.
              </p>
            </article>
          </div>

          <CtaBox className="mt-16" />
        </div>
      </section>
    </>
  );
}
