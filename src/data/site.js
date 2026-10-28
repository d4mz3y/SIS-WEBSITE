export const site = {
  name: 'SIS Verification Services',
  blurb:
    'Specialized Intelligence for Modern Enterprise. SIS Verification Services is a field-focused intelligence company dedicated to verifying employees and guarantors with physical evidence-based methods.',
  email: 'verify@sisverification.com.ng',
  phone: '+234 706 503 0051',
  phoneHref: 'tel:+2347065030051',
  // Facts only the business can supply. Anything left empty is simply not shown anywhere on the site.
  legalName: '', // registered company name, for example 'SIS Verification Services Limited'
  rcNumber: '', // CAC registration number, digits only
  address: '', // office address, shown in the footer
  whatsapp: '', // international format with no + or spaces, for example '2347065030051'
  // Shown at the top of the Terms and Privacy pages. Update it whenever either changes.
  legalUpdated: '28 October 2026',
  // Paste the real profile URL for each network. An icon only shows in the footer once its href is filled in.
  socials: [
    { key: 'facebook', label: 'Facebook', href: '' },
    { key: 'instagram', label: 'Instagram', href: '' },
    { key: 'linkedin', label: 'LinkedIn', href: '' },
    { key: 'x', label: 'X (Twitter)', href: '' },
  ],
};

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/method', label: 'Method' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

// Footer Quick Links: the main pages plus the consent forms clients need before a check.
export const footerLinks = [...navLinks, { to: '/consent', label: 'Consent Forms' }];

export const legalLinks = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms & Conditions' },
  { to: '/consent', label: 'Consent Forms' },
];

export const serviceOptions = [
  'Employee Verification',
  'Guarantor Vetting',
  'Field Intelligence Operations',
  'Risk Profiling & Reporting',
];
