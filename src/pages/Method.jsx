import PageBand from '../components/PageBand.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

const pillars = [
  {
    title: 'Physical Threshold Audit',
    text: 'A trained SIS field agent physically visits the declared residence or workplace to confirm existence, occupancy, and authenticity of claims.',
  },
  {
    title: 'GPS Geo-Fencing',
    text: 'Real-time latitude and longitude coordinates are captured to provide verifiable proof of the exact verification location.',
  },
  {
    title: 'HUM-INT (Human Intelligence)',
    text: 'Discreet neighborhood intelligence is gathered to validate tenure, behavior patterns, and social credibility.',
  },
  {
    title: 'Forensic Reporting',
    text: 'All intelligence is cross-referenced with national identifiers (NIN/BVN) and compiled into an audit-ready Intelligence Dossier.',
  },
];

export default function Method() {
  usePageMeta('The PAI Method', 'The PAI Method is SIS’s structured field workflow for eliminating identity fraud, residency falsification and guarantor risk.');

  return (
    <>
      <PageBand />
      <section className="bg-navy px-0 py-16 text-white sm:py-24">
        <div className="container-x max-w-6xl">
          <header className="mx-auto mb-14 max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold text-gold sm:text-4xl lg:text-[2.6rem]">
              The PAI <span className="text-white">Method</span>
            </h1>
            <p className="mt-3 text-mist">Physical Address Intelligence (PAI)</p>
            <p className="mt-5 leading-8 text-mist">
              At SIS Verification Services, we do not perform routine background checks. We execute a structured
              investigative workflow known as the PAI Method, designed to eliminate identity fraud, residency
              falsification, and guarantor’s risk.
            </p>
          </header>

          <ul className="grid gap-6 md:grid-cols-2">
            {pillars.map(({ title, text }) => (
              <li
                key={title}
                className="rounded-3xl border border-gold/25 bg-navy-card p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-gold"
              >
                <h2 className="mb-4 text-xl font-bold text-gold">{title}</h2>
                <p className="leading-7 text-mist">{text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-14 border-t border-gold/20 px-2 pt-10 text-center sm:px-10">
            <h2 className="mb-4 text-2xl font-bold text-gold sm:text-[1.75rem]">
              Why the PAI <span className="text-white">Method Matters</span>
            </h2>
            <p className="mx-auto max-w-3xl leading-8 text-mist">
              In environments where identity fraud and misrepresentation are common, the PAI Method ensures every
              verification is backed by physical evidence, human intelligence, and forensic validation.
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold">
              This transforms hiring decisions from assumptions into evidence-based certainty.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
