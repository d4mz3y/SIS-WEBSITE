import LegalDocument, { LegalLink } from '../components/LegalDocument.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { site } from '../data/site';

const sections = [
  {
    id: 'who',
    title: 'Who we are and our role',
    body: [
      'SIS Verification Services (“SIS”, “we”, “us”, “our”) is a field-focused intelligence company that verifies employees and guarantors using physical, evidence-based methods.',
      'Our role depends on the situation. For website visitors, enquiries and our own business records, we decide how and why personal data is used (we are the “data controller”). When we verify a person for a client, we process that person’s data to carry out the client’s request. Depending on the arrangement, we act as the client’s data processor or as a controller in our own right, and our engagement with the client records which applies. Either way, we use the data only for the verification and as this policy describes.',
    ],
  },
  {
    id: 'collect',
    title: 'Personal data we collect',
    body: [
      'Depending on how you deal with us, we collect:',
      {
        list: [
          'From website visitors and people who contact us: the name, company, email address, phone number, service and message you type into the contact form, and the content of emails, calls and messages you send us.',
          'From our clients: the contact details of the people who instruct us, billing details, and the instructions themselves.',
          'About the people we verify (candidates, employees and guarantors): full name and other names, date of birth, contact details, residential and work addresses; identification details and numbers such as NIN, BVN (where relevant and agreed), passport, driver’s licence or voter’s card; employment history and referee details; what referees, previous employers, guarantors and others who know the person tell us; evidence from field visits, including photographs and the GPS-tagged, timestamped location of the address visited; and our findings and reports.',
          'Technical data: our hosting provider keeps standard server logs, such as IP address, browser type and the pages requested. Our website does not use advertising or analytics trackers and does not set cookies of its own.',
        ],
      },
      'We do not ask for sensitive personal data such as health, religious or political information. Where a verification genuinely needs something more sensitive, we take extra care and rely on specific consent or another basis the law allows.',
    ],
  },
  {
    id: 'use',
    title: 'How we use personal data and why',
    body: [
      'We use personal data only for the purposes below, and we rely on one of the legal bases that the Nigeria Data Protection Act 2023 (the “NDPA”) allows for each.',
      {
        list: [
          'To carry out a verification a client has requested. The legal bases are the consent of the person being verified and our contract with the client.',
          'To answer enquiries, prepare quotes and communicate with you. The legal bases are steps taken at your request before a contract, and our legitimate interest in running our business.',
          'To invoice, keep accounts and keep records. The legal bases are our contract and our legal obligations.',
          'To keep the website and our systems secure and to prevent fraud and misuse. The legal basis is our legitimate interest in protecting our business and our clients.',
          'To meet our legal obligations and respond to lawful requests from courts, regulators and law enforcement. The legal basis is legal obligation.',
        ],
      },
      'Where we rely on consent, you can withdraw it at any time (see “Your rights”).',
    ],
  },
  {
    id: 'consent',
    title: 'Verification and consent',
    body: [
      'Before we verify a person, our client must tell them and obtain their consent where the law requires it. To make this simple and provable, we provide Verification Consent Forms for candidates and guarantors to sign.',
      {
        node: (
          <p className="leading-8 text-mist">
            You can read and download them on our <LegalLink to="/consent">Consent Forms</LegalLink> page. We may ask to
            see a signed form before we start, and we may decline a request that does not have proper consent.
          </p>
        ),
      },
    ],
  },
  {
    id: 'sharing',
    title: 'Who we share personal data with',
    body: [
      'We share personal data only where it is needed and with appropriate protection:',
      {
        list: [
          'the client who requested the verification, who receives the report;',
          'our staff, field agents and subcontractors, who are bound to keep it confidential;',
          'service providers that help us run the business, such as email, hosting, cloud storage and the form service that delivers contact-form messages to us;',
          'people we contact during enquiries, such as referees, previous employers and guarantors. We tell them only what is needed to ask our questions, and we do not share the report with them;',
          'courts, regulators and law enforcement where the law requires it; and',
          'professional advisers and insurers, and a future owner of our business if it is restructured or sold, under the same protections.',
        ],
      },
      'We do not sell personal data. Links on our website to other websites are outside our control, and we are not responsible for their privacy practices.',
    ],
  },
  {
    id: 'transfers',
    title: 'Transfers outside Nigeria',
    body: [
      'Some of our service providers, such as email, hosting and form handling, may store or process data outside Nigeria. When that happens, we take steps to make sure the data stays protected as the NDPA requires, for example by choosing providers with appropriate safeguards.',
    ],
  },
  {
    id: 'retention',
    title: 'How long we keep personal data',
    body: [
      'We keep personal data only for as long as we need it for the purposes above, to resolve disputes, and to meet legal and accounting requirements. Verification files are kept for as long as the engagement and any reasonable follow-up require, and are then securely deleted or anonymised. Website enquiries are kept for as long as we need them to deal with the enquiry and for our business records.',
    ],
  },
  {
    id: 'security',
    title: 'How we protect it',
    body: [
      'We use reasonable technical and organisational measures to protect personal data, including limiting access to the staff and agents who need it, binding them to confidentiality, and keeping field evidence together with the verification file it belongs to. No system is completely secure. If a breach occurs that is likely to put people’s rights at risk, we will tell the Nigeria Data Protection Commission and the people affected as the law requires.',
    ],
  },
  {
    id: 'rights',
    title: 'Your rights',
    body: [
      'Under the NDPA you have the right to:',
      {
        list: [
          'be told how your personal data is used;',
          'ask for a copy of the personal data we hold about you;',
          'ask us to correct data that is wrong or incomplete;',
          'ask us to delete your data, or to restrict how we use it, in the circumstances the law allows;',
          'object to our processing of your data, including for direct marketing;',
          'receive your data in a commonly used format and ask us to pass it to another provider, where this applies;',
          'withdraw your consent at any time. This does not affect processing already carried out, and withdrawing during a verification may mean we cannot complete it.',
        ],
      },
      {
        node: (
          <p className="leading-8 text-mist">
            To use any of these rights, email <LegalLink href={`mailto:${site.email}`}>{site.email}</LegalLink>. We may
            need to confirm who you are first, and some rights are limited where the law requires us to keep a record.
            If you are being verified and believe something in a report is wrong, tell us and we will look into it.
          </p>
        ),
      },
      'If you are not satisfied with how we have handled your data, please tell us first. You also have the right to complain to the Nigeria Data Protection Commission.',
    ],
  },
  {
    id: 'children',
    title: 'Children',
    body: [
      'Our website and services are not directed at children, and we do not knowingly collect children’s personal data. If we learn that we have, we will delete it.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: [
      'We may update this policy from time to time. The updated version will be posted on this page with a new “last updated” date. If a change significantly affects how we use personal data, we will take reasonable steps to tell the people affected.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact us',
    body: ['Questions or requests about this policy and your personal data can be sent to us at:', { contact: true }],
  },
];

export default function Privacy() {
  usePageMeta(
    'Privacy Policy',
    'How SIS Verification Services collects, uses, shares and protects personal data, and the rights people have under Nigerian data protection law.',
  );

  return (
    <LegalDocument
      title="Privacy Policy"
      intro={[
        'This policy explains what personal data SIS Verification Services collects, why we collect it, how we use and protect it, and the rights you have under Nigerian data protection law, including the Nigeria Data Protection Act 2023.',
        'It applies to visitors to our website, people who contact us, our clients, and the people we verify on our clients’ behalf, such as candidates, employees and guarantors.',
      ]}
      sections={sections}
    />
  );
}
