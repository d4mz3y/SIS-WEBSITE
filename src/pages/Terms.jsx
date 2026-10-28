import PageBand from '../components/PageBand.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { site } from '../data/site';

// Each section body is a list of blocks: a string is a paragraph, { list } is a bulleted list,
// and { contact } renders the contact details.
const sections = [
  {
    id: 'about',
    title: 'About us',
    body: [
      'SIS Verification Services (“SIS”, “we”, “us”, “our”) is a field-focused intelligence company that verifies employees and guarantors using physical, evidence-based methods. Our services include identity confirmation, address verification, guarantor verification, employment checks, field intelligence operations, and risk profiling and reporting (the “Services”).',
    ],
  },
  {
    id: 'acceptance',
    title: 'Accepting these Terms',
    body: [
      'These Terms apply to your use of this website (the “Website”) and to every request you make for the Services. By using the Website or submitting a request, you agree to be bound by them.',
      'If you accept on behalf of a company or other organisation, you confirm that you have authority to bind it, and “you” includes that organisation (the “Client”). If you do not agree to these Terms, please do not use the Website or the Services.',
    ],
  },
  {
    id: 'website',
    title: 'Using the Website',
    body: [
      'You agree not to:',
      {
        list: [
          'use the Website unlawfully or in any way that breaches these Terms;',
          'try to gain unauthorised access to the Website, our systems or other people’s information;',
          'introduce viruses or other harmful code;',
          'scrape, copy or overload the Website by automated means; or',
          'impersonate anyone, or give false or misleading information in a request.',
        ],
      },
      'Information on the Website is for general information only. It is not an offer, a quotation or professional advice, and nothing on the Website creates a contract between you and SIS.',
    ],
  },
  {
    id: 'engagement',
    title: 'Requests and engagement',
    body: [
      'Submitting the request form is an invitation for us to respond. It does not create a binding contract. We will contact you to confirm the scope, fees and timelines in writing, and email counts as writing.',
      'Once both of us have confirmed those details (an “Engagement”), the Engagement and these Terms together form the agreement between us for that work. If they conflict, the Engagement prevails on scope, fees and timelines, and these Terms prevail on everything else.',
      'We may decline any request, or stop work on it, at our discretion.',
    ],
  },
  {
    id: 'responsibilities',
    title: 'Your responsibilities',
    body: [
      'When you request the Services you agree to:',
      {
        list: [
          'give us information that is accurate, complete and up to date (full names, addresses, identification details, contact details and anything else we ask for), and tell us promptly if it changes;',
          'have a lawful basis for asking us to verify each person and, before you give us anyone’s personal data, tell them and obtain their consent where the law requires it. This includes consent to a physical visit to their residence or workplace, to enquiries with referees, guarantors and others who know them, and to checks against identifiers such as NIN or BVN;',
          'use our reports only for the purpose you gave us, and make decisions based on them lawfully, fairly and without unlawful discrimination;',
          'not ask us to do anything unlawful or intrusive beyond what the law allows, including accessing anyone’s private communications or following or harassing any person; and',
          'cooperate with us in good time, for example by giving access, introductions or documents we reasonably request.',
        ],
      },
      'We may refuse or stop any request that appears unlawful, unsafe or unfair.',
    ],
  },
  {
    id: 'fees',
    title: 'Fees and payment',
    body: [
      'Fees, applicable taxes (including VAT where it applies) and payment terms are set out in the Engagement. Unless the Engagement says otherwise, invoices are payable on receipt.',
      'We may suspend work, or hold back a report, until an overdue invoice is paid. Once work has started, including any field visit, fees for the work done are not refundable, except where we have failed to deliver the agreed Services through our own fault.',
    ],
  },
  {
    id: 'limits',
    title: 'What our verification does and does not cover',
    body: [
      'We take care to carry out every verification properly. You understand and accept that:',
      {
        list: [
          'turnaround times are estimates, not guarantees. Field verification depends on access, the availability of the people involved, weather, travel conditions, public holidays and security;',
          'where we cannot complete a check, we will tell you and report what we were able to confirm;',
          'a report reflects the information and observations available to us at the time, from sources we believe to be reliable. We do not guarantee the accuracy of information provided by third parties;',
          '“Verified” means we confirmed the item concerned from the evidence described in the report, on the date of the report. It is not a guarantee of anyone’s future conduct, honesty, ability or creditworthiness; and',
          'our reports are not credit reports, legal opinions, or recommendations to hire, reject or lend. The decision remains yours.',
        ],
      },
    ],
  },
  {
    id: 'safety',
    title: 'Safety of our field staff',
    body: [
      'Our field agents may withdraw from any location, or stop any task, where they believe their safety or anyone else’s is at risk. If that happens we will tell you what could not be completed and agree with you how to proceed.',
    ],
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality and use of reports',
    body: [
      'Each report is confidential and prepared for your own use, for the purpose you stated. You must not share it with anyone else, except where the law requires or where you are obliged to give the person concerned access to it.',
      'We will keep your instructions and the contents of each report confidential. We may share them only with staff, field agents and service providers who need them to deliver the Services and are bound to keep them confidential, and where we are required to disclose them by law, a court or a regulator.',
      'This section continues to apply after an Engagement ends.',
    ],
  },
  {
    id: 'data',
    title: 'Personal data',
    body: [
      'We handle personal data in line with applicable Nigerian data protection law, including the Nigeria Data Protection Act 2023. We collect and use it to deliver the Services, to respond to enquiries, to meet our legal obligations, and to run and protect our business.',
      'In the course of the Services we may collect identification details, address and contact details, employment information, and evidence gathered on field visits such as GPS-tagged location data and timestamped photographs. Details you send through the Website contact form (name, company, email address, phone number, service and message) are used to respond to you and are delivered to us through a third-party form service.',
      'You confirm that you have the right to give us the personal data you provide, and that you have given the notices and obtained the consents the law requires. We use reasonable technical and organisational measures to protect personal data. We keep it only for as long as we need it for these purposes or the law requires, and then delete or anonymise it securely.',
      'Individuals can ask us about, or exercise their rights over, their personal data by contacting us at the email address below.',
    ],
  },
  {
    id: 'ip',
    title: 'Intellectual property',
    body: [
      'The Website, its content, the SIS name and logo, the “PAI Method”, and our report formats and methods belong to SIS or its licensors and are protected by law. We give you a limited, non-exclusive, non-transferable right to view the Website and to print or download pages for your own internal business use.',
      'You must not copy, modify, distribute, resell or create derivative works from them without our written permission. Reports are provided to you for the use described in the confidentiality section above. We keep ownership of our methods and know-how.',
    ],
  },
  {
    id: 'disclaimer',
    title: 'Website disclaimer',
    body: [
      'The Website is provided “as is” and “as available”. We do not promise that it will be uninterrupted, secure or free of errors. It may link to third-party websites that we do not control, and we are not responsible for their content or practices.',
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    body: [
      'Nothing in these Terms limits liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot be limited or excluded by law.',
      'Subject to that, we are not liable for indirect or consequential loss, or for loss of profit, revenue, business, goodwill or opportunity. We are also not liable for loss that results from inaccurate or incomplete information provided by you or by third parties, or from decisions you make based on a report.',
      'Our total liability for all claims arising out of an Engagement is limited to the fees you paid us for that Engagement.',
    ],
  },
  {
    id: 'indemnity',
    title: 'Indemnity',
    body: [
      'You agree to compensate us for losses, claims, costs and reasonable legal fees we suffer because you breached these Terms, gave us unlawful instructions, or failed to obtain consents or give notices that the law requires.',
    ],
  },
  {
    id: 'termination',
    title: 'Suspension and termination',
    body: [
      'Either of us may end an Engagement by giving written notice. We may suspend or end an Engagement immediately if you do not pay, breach these Terms, or ask for something that is unlawful or unsafe.',
      'When an Engagement ends, you must pay for the work done and the costs we have incurred up to that date. Sections that by their nature should continue, including confidentiality, liability, indemnity and governing law, will continue.',
    ],
  },
  {
    id: 'force-majeure',
    title: 'Events beyond our control',
    body: [
      'Neither of us is liable for delay or failure caused by events beyond reasonable control, such as natural disasters, flooding, fire, civil unrest, strikes, government action, or failures of power, telecoms or internet services. The affected party must tell the other as soon as reasonably possible and take reasonable steps to resume.',
    ],
  },
  {
    id: 'complaints',
    title: 'Complaints',
    body: [
      'If you are unhappy with the Services or the Website, please tell us using the contact details below. We will acknowledge your complaint and work to resolve it promptly and fairly.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to these Terms',
    body: [
      'We may update these Terms from time to time. The updated version will be posted on the Website with a new “last updated” date and takes effect when posted. By continuing to use the Website or to ask for the Services after that, you accept the update.',
      'An Engagement already confirmed stays under the Terms that applied when it was confirmed, unless the law requires otherwise.',
    ],
  },
  {
    id: 'general',
    title: 'General',
    body: [
      {
        list: [
          'These Terms and the Engagement are the whole agreement between us on their subject and replace earlier discussions.',
          'If any part is found invalid or unenforceable, the rest stays in force.',
          'If we do not enforce a right straight away, we have not given it up.',
          'You may not transfer your rights or duties under these Terms without our written consent.',
          'Nothing here makes either of us the partner, agent or employee of the other.',
          'We may send notices to you by email to the address you gave us.',
        ],
      },
    ],
  },
  {
    id: 'law',
    title: 'Governing law and disputes',
    body: [
      'These Terms, and any dispute arising from them or from the Services, are governed by the laws of the Federal Republic of Nigeria.',
      'If a dispute arises, we will first try to resolve it through good-faith discussion. If it is not resolved within 30 days of written notice of the dispute, either of us may bring it before the courts of competent jurisdiction in Nigeria.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact us',
    body: ['Questions about these Terms can be sent to us at:', { contact: true }],
  },
];

function Block({ block }) {
  if (typeof block === 'string') return <p className="leading-8 text-mist">{block}</p>;

  if (block.list) {
    return (
      <ul className="list-disc space-y-2 pl-6 leading-8 text-mist marker:text-gold">
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="space-y-2 leading-8 text-mist">
      <li>
        Email:{' '}
        <a href={`mailto:${site.email}`} className="font-semibold text-gold underline-offset-4 hover:underline">
          {site.email}
        </a>
      </li>
      <li>
        Phone:{' '}
        <a href={site.phoneHref} className="font-semibold text-gold underline-offset-4 hover:underline">
          {site.phone}
        </a>
      </li>
    </ul>
  );
}

export default function Terms() {
  usePageMeta(
    'Terms and Conditions',
    'The terms that apply to using the SIS Verification Services website and to requesting employee, guarantor and field verification services.',
  );

  return (
    <>
      <PageBand />
      <section className="bg-navy px-0 py-16 sm:py-24">
        <div className="container-x max-w-3xl">
          <header>
            <span className="eyebrow block">Legal</span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Terms and Conditions
            </h1>
            <p className="mt-4 text-sm text-white/60">Last updated: {site.termsUpdated}</p>
            <p className="mt-6 leading-8 text-mist">
              Please read these Terms and Conditions (“Terms”) carefully. They explain how you may use our website and
              the rules that apply when you ask SIS Verification Services to verify an employee or a guarantor.
            </p>
          </header>

          <nav aria-label="Contents" className="mt-10 rounded-2xl border border-gold/25 bg-navy-card p-6 sm:p-8">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-gold">Contents</h2>
            <ol className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
              {sections.map(({ id, title }, index) => (
                <li key={id}>
                  <a href={`#${id}`} className="block py-1 text-mist transition-colors hover:text-gold">
                    <span className="mr-2 text-gold">{index + 1}.</span>
                    {title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-12 space-y-12">
            {sections.map(({ id, title, body }, index) => (
              <article key={id} id={id} className="scroll-mt-24">
                <h2 className="mb-4 text-xl font-bold text-gold sm:text-2xl">
                  <span className="mr-2">{index + 1}.</span>
                  {title}
                </h2>
                <div className="space-y-4">
                  {body.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
