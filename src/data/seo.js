// Page titles and descriptions. Used twice: in the browser (src/hooks/usePageMeta.js) and at build time
// (scripts/postbuild.mjs), which writes a separate HTML file per page so that link previews on WhatsApp,
// LinkedIn and search engines see the right text without running any JavaScript.
// Keep this file free of imports so Node can load it directly.

// The public address of the site. Used for canonical links, the share image and sitemap.xml.
// Override at build time with VITE_SITE_URL if the site lives somewhere else.
export const SITE_URL = 'https://sisverification.com.ng';
export const SITE_NAME = 'SIS Verification Services';

export const pages = {
  '/': {
    title: 'SIS Verification Services | Forensic Employee and Guarantor Verification',
    description:
      'SIS Verification Services is a field-focused intelligence company that verifies employees and guarantors with physical, evidence-based methods across Nigeria.',
  },
  '/about': {
    title: 'About Us | SIS Verification Services',
    description:
      'SIS Verification Services delivers field-first intelligence and forensic verification that protects organizations from fraud, liability and operational risk.',
  },
  '/method': {
    title: 'The PAI Method | SIS Verification Services',
    description:
      'The PAI Method is the SIS field workflow for tackling identity fraud, residency falsification and guarantor risk with physical evidence.',
  },
  '/services': {
    title: 'Our Services | SIS Verification Services',
    description:
      'Employee verification, guarantor vetting, field intelligence operations and risk profiling and reporting from SIS Verification Services.',
  },
  '/contact': {
    title: 'Request Verification | SIS Verification Services',
    description: 'Send SIS Verification Services a confidential verification request for an employee or guarantor.',
  },
  '/terms': {
    title: 'Terms and Conditions | SIS Verification Services',
    description:
      'The terms that apply to using the SIS Verification Services website and to requesting employee, guarantor and field verification services.',
  },
  '/privacy': {
    title: 'Privacy Policy | SIS Verification Services',
    description:
      'How SIS Verification Services collects, uses, shares and protects personal data, and the rights people have under Nigerian data protection law.',
  },
  '/consent': {
    title: 'Verification Consent Forms | SIS Verification Services',
    description:
      'Printable consent forms for candidates and guarantors to sign before SIS Verification Services carries out a check.',
  },
  '/thank-you': {
    title: 'Request Received | SIS Verification Services',
    description: 'Your verification request has been received.',
    noindex: true,
  },
  '/404': {
    title: 'Page not found | SIS Verification Services',
    description: 'The page you were looking for could not be found.',
    noindex: true,
  },
};
