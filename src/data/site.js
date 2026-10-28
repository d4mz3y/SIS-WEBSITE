export const site = {
  name: 'SIS Verification Services',
  blurb:
    'Specialized Intelligence for Modern Enterprise. SIS Verification Services is a field-focused intelligence company dedicated to verifying employees and guarantors with physical evidence-based methods.',
  email: 'verify@sisverification.com.ng',
  phone: '+234 706 503 0051',
  phoneHref: 'tel:+2347065030051',
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
];

export const footerLinks = [...navLinks, { to: '/contact', label: 'Contact' }];

export const serviceOptions = [
  'Employee Verification',
  'Guarantor Vetting',
  'Field Intelligence',
  'Risk Profiling',
];
