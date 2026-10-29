// Checks for the request form. Pure functions, so they are easy to test and to reuse on a server later.
// Every value is trimmed before it is checked, so a name or message made only of spaces is rejected.

export const LIMITS = { name: 80, company: 100, email: 120, phone: 20, message: 2000 };
export const MIN_MESSAGE = 10;

const NAME = /^[\p{L}][\p{L}\p{M}\s.'’-]*$/u; // letters, spaces, full stops, apostrophes and hyphens
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@.]{2,}$/; // needs a domain ending, so "a@b" is rejected
const PHONE = /^\+?[\d\s()-]+$/; // digits, spaces, brackets and hyphens, with an optional leading +

export function validate(values, { optionalFields = true, services = [] } = {}) {
  const errors = {};
  const { name, company, email, phone, service, message } = values;

  if (name.length < 2) errors.name = 'Please enter your full name.';
  else if (name.length > LIMITS.name) errors.name = `Please keep your name under ${LIMITS.name} characters.`;
  else if (!NAME.test(name)) errors.name = 'Please use letters only in your name.';

  if (!email) errors.email = 'Please enter your email address.';
  else if (email.length > LIMITS.email || !EMAIL.test(email)) errors.email = 'Please enter a valid email, such as name@company.com.';

  if (!service || (services.length && !services.includes(service))) errors.service = 'Please choose a service.';

  if (message.length < MIN_MESSAGE) errors.message = `Please describe your request (at least ${MIN_MESSAGE} characters).`;
  else if (message.length > LIMITS.message) errors.message = `Please keep your message under ${LIMITS.message} characters.`;

  if (optionalFields) {
    if (company && (company.length < 2 || company.length > LIMITS.company)) {
      errors.company = `Company name should be 2 to ${LIMITS.company} characters.`;
    }
    if (phone) {
      const digits = phone.replace(/\D/g, '').length;
      if (!PHONE.test(phone) || digits < 7 || digits > 15 || phone.length > LIMITS.phone) {
        errors.phone = 'Please enter a valid phone number, using digits only, for example +234 706 503 0051.';
      }
    }
  }

  return errors;
}
