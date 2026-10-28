import { Link, useSearchParams } from 'react-router-dom';
import { FiDownload, FiPrinter } from 'react-icons/fi';
import PageBand from '../components/PageBand.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import logo from '../assets/brand/logo.webp';
import { site } from '../data/site';

// The PDFs in public/documents are generated from this page (see README: "Consent form PDFs").
const DOCS = `${import.meta.env.BASE_URL}documents/`;

const forms = [
  {
    id: 'candidate',
    label: 'Form A',
    who: 'Candidate / Employee',
    pdf: 'SIS-Consent-Form-A-Candidate.pdf',
    intro:
      'SIS Verification Services (“SIS”) has been asked by the organisation named below (the “Organisation”) to verify information about you as part of a hiring or onboarding process. This form explains what we will do and asks for your consent. Please read it before you sign. You are free to ask questions, or to decline.',
    request: [
      { label: 'Requesting organisation' },
      { label: 'Reference (if any)' },
    ],
    checks: [
      'Your identity, using the documents and identification numbers you give us (for example NIN, BVN where relevant, passport, driver’s licence or voter’s card).',
      'Your residential address, through a visit by a SIS field agent, who may record the location and take timestamped photographs of the premises and its surroundings as evidence.',
      'Your employment history and professional references, by contacting the previous employers and referees you name.',
      'Your guarantors, by contacting them to confirm who they are and that they know you.',
      'Where needed, enquiries with people who know you at your address, to confirm that you live there.',
    ],
    detailsTitle: 'Your details',
    fields: [
      { label: 'Full name' },
      { label: 'Other names used (if any)' },
      { label: 'Date of birth (DD/MM/YYYY)' },
      { label: 'Position or role' },
      { label: 'Phone number' },
      { label: 'Email address' },
      { label: 'Residential address', wide: true },
      { label: 'ID type and number (for example NIN, passport)', wide: true },
    ],
    consents: [
      'I confirm that the information I have given is true, complete and up to date.',
      'I consent to SIS verifying my identity, address, employment history and references as described above, and to contacting the people and organisations I have named.',
      'I consent to a SIS field agent visiting my residential address, to photographs and the GPS location of the premises being recorded as evidence, and to enquiries with people who know me there.',
      'I consent to my identification numbers (such as NIN or BVN) being used only to verify my identity.',
      'I understand that SIS will give its report to the Organisation. I may withdraw my consent at any time by writing to SIS or the Organisation. Withdrawing will not affect checks already done, and the Organisation may be unable to continue my application without them.',
      'I have had the chance to read how SIS handles personal data and to ask questions.',
    ],
  },
  {
    id: 'guarantor',
    label: 'Form B',
    who: 'Guarantor',
    pdf: 'SIS-Consent-Form-B-Guarantor.pdf',
    intro:
      'The organisation named below (the “Organisation”) has asked SIS Verification Services (“SIS”) to confirm the details of a guarantor for the candidate named below, and you have been named as that guarantor. This form explains what we will do and asks for your consent. Please read it before you sign. You are free to ask questions, or to decline.',
    request: [
      { label: 'Candidate’s full name' },
      { label: 'Requesting organisation' },
      { label: 'Reference (if any)' },
    ],
    checks: [
      'Your identity, using the documents and identification numbers you give us (for example NIN, BVN where relevant, passport, driver’s licence or voter’s card).',
      'Your residential and work addresses, through a visit by a SIS field agent, who may record the location and take timestamped photographs of the premises and its surroundings as evidence.',
      'Your occupation and employer, by contacting them to confirm the details you give.',
      'That you know the candidate and are willing to act as their guarantor, by contacting you directly.',
    ],
    note: 'This form is about verification only. It is not a guarantee. The terms of any guarantee you give are agreed between you and the Organisation, and signing this form does not make you liable to SIS.',
    detailsTitle: 'Your details',
    fields: [
      { label: 'Full name' },
      { label: 'Relationship to the candidate' },
      { label: 'How long you have known the candidate' },
      { label: 'Occupation and employer' },
      { label: 'Phone number' },
      { label: 'Email address' },
      { label: 'Residential address', wide: true },
      { label: 'Work address', wide: true },
      { label: 'ID type and number (for example NIN, passport)', wide: true },
    ],
    consents: [
      'I confirm that the information I have given is true, complete and up to date.',
      'I know the candidate named above, and I agree to be named as their guarantor.',
      'I consent to SIS verifying my identity, residential and work addresses and occupation as described above, and to contacting me and my employer to confirm them.',
      'I consent to a SIS field agent visiting my address, and to photographs and the GPS location of the premises being recorded as evidence.',
      'I consent to my identification numbers (such as NIN or BVN) being used only to verify my identity.',
      'I understand that SIS will give its report to the Organisation. I may withdraw my consent at any time by writing to SIS or the Organisation. Withdrawing will not affect checks already done.',
      'I have had the chance to read how SIS handles personal data and to ask questions.',
    ],
  },
];

function Line({ label, wide = false }) {
  return (
    <div className={`break-inside-avoid ${wide ? 'sm:col-span-2' : ''}`}>
      <div className="h-9 border-b border-navy/60" />
      <p className="mt-1 text-xs text-navy/70">{label}</p>
    </div>
  );
}

function Part({ title, children }) {
  return (
    <section className="mt-6 break-inside-avoid">
      <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy/70">{title}</h3>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}

function Sheet({ form }) {
  return (
    <article
      id={form.id}
      className="scroll-mt-24 overflow-hidden rounded-2xl bg-white text-[13px] leading-6 text-navy shadow-card print:break-after-page print:rounded-none print:shadow-none"
    >
      <header className="print-exact flex flex-wrap items-center justify-between gap-3 bg-navy px-6 py-4 sm:px-10">
        <img src={logo} alt={site.name} width="800" height="285" className="h-12 w-auto" />
        <div className="text-right text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{form.label}</p>
          <p className="text-base font-bold">{form.who}</p>
        </div>
      </header>

      <div className="px-6 pb-8 pt-6 sm:px-10 print:pb-0">
        <h2 className="text-xl font-extrabold">Verification Consent and Authorisation</h2>
        <p className="mt-3">{form.intro}</p>

        <div className="mt-5 grid gap-x-8 gap-y-1 sm:grid-cols-2">
          {form.request.map((field) => (
            <Line key={field.label} {...field} />
          ))}
        </div>

        <Part title="What we will check">
          <ul className="list-disc space-y-1.5 pl-5 marker:text-navy">
            {form.checks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {form.note && <p className="mt-3 font-semibold">{form.note}</p>}
        </Part>

        <Part title="How your information is used">
          <ul className="list-disc space-y-1.5 pl-5 marker:text-navy">
            <li>We collect only what is needed for these checks, and use it only to carry out the verification and to report to the Organisation.</li>
            <li>
              Our report goes to the Organisation. We share information with our staff, agents and service providers
              only as needed and under confidentiality, and with others only where the law requires.
            </li>
            <li>We keep it only as long as needed, then delete or anonymise it securely.</li>
            <li>
              You can ask to see, correct or delete your information, restrict or object to how it is used, or withdraw
              your consent, by emailing {site.email}. Our{' '}
              <Link to="/privacy" className="font-semibold underline print:no-underline">
                Privacy Policy
              </Link>{' '}
              gives the full details and is available on request.
            </li>
          </ul>
        </Part>

        <Part title={form.detailsTitle}>
          <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
            {form.fields.map((field) => (
              <Line key={field.label} {...field} />
            ))}
          </div>
        </Part>

        <Part title="Your consent (tick each box)">
          <ul className="space-y-2.5">
            {form.consents.map((item) => (
              <li key={item} className="flex gap-3 break-inside-avoid">
                <span aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 border-2 border-navy" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Part>

        <Part title="Signed">
          <div className="grid gap-x-8 gap-y-1 sm:grid-cols-[2fr_1fr]">
            <Line label="Signature" />
            <Line label="Date (DD/MM/YYYY)" />
          </div>
        </Part>

        <p className="mt-6 border-t border-navy/20 pt-3 text-xs text-navy/70">
          {form.label} ({form.who}) &middot; {site.name} &middot; {site.email} &middot; {site.phone}
        </p>
      </div>
    </article>
  );
}

export default function Consent() {
  // ?only=candidate or ?only=guarantor shows a single form without the intro (used to make the PDFs).
  const [params] = useSearchParams();
  const only = params.get('only');
  const shown = forms.filter((form) => !only || form.id === only);
  const single = only && shown.length === 1 ? shown[0] : null;

  usePageMeta(
    '/consent',
    single ? { title: `${single.label} (${single.who}): Verification Consent Form | SIS Verification Services` } : {},
  );

  return (
    <>
      <PageBand />
      <section className="bg-navy px-0 py-16 print:bg-white print:py-0 sm:py-24">
        <div className="container-x max-w-4xl print:max-w-none print:px-0">
          {!only && (
            <header className="mb-12 print:hidden">
              <span className="eyebrow block">For clients and the people we verify</span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Verification Consent Forms
              </h1>
              <p className="mt-5 max-w-3xl leading-8 text-mist">
                Before we verify anyone, we need to know they have agreed. Ask each candidate and each guarantor to
                read and sign the relevant form, then send us the signed copies with your request. Keep a copy for
                your records.
              </p>

              <ol className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ['1', 'Download or print', 'Use Form A for the candidate and Form B for each guarantor.'],
                  ['2', 'Read and sign', 'Each person reads the form, ticks the boxes and signs and dates it.'],
                  ['3', 'Send it to us', `Email the signed copies to ${site.email} with your request.`],
                ].map(([n, title, text]) => (
                  <li key={n} className="rounded-2xl border border-gold/25 bg-navy-card p-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold font-bold text-navy">
                      {n}
                    </span>
                    <h2 className="mt-3 font-bold text-white">{title}</h2>
                    <p className="mt-1 text-sm leading-6 text-mist">{text}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex flex-wrap gap-3">
                {forms.map((form) => (
                  <a key={form.id} href={`${DOCS}${form.pdf}`} download className="btn-gold">
                    <FiDownload aria-hidden="true" />
                    {form.label} (PDF): {form.who}
                  </a>
                ))}
                <button type="button" onClick={() => window.print()} className="btn-outline">
                  <FiPrinter aria-hidden="true" />
                  Print this page
                </button>
              </div>
            </header>
          )}

          <div className="space-y-12 print:space-y-0">
            {shown.map((form) => (
              <Sheet key={form.id} form={form} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
