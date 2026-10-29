import { useId, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { site, serviceOptions } from '../data/site';
import { LIMITS, validate } from '../lib/validation';

// FormSubmit's AJAX endpoint: no backend needed. The first real submission emails an activation
// link to the inbox; until that link is clicked, requests are rejected. Once activated, put the
// private alias FormSubmit gives you in site.formAlias (src/data/site.js) so the raw email stops
// appearing in the request address.
const ENDPOINT = `https://formsubmit.co/ajax/${site.formAlias || site.email}`;

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label} ({required ? 'required' : 'optional'})
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm({ compact = false }) {
  const uid = useId();
  const navigate = useNavigate();
  // Links like /contact?service=Guarantor%20Vetting arrive with that service already chosen.
  const [params] = useSearchParams();
  const requested = params.get('service');
  const preselected = serviceOptions.includes(requested) ? requested : '';
  const [status, setStatus] = useState('idle'); // idle | invalid | sending | error
  const [errors, setErrors] = useState({});
  const id = (name) => `${uid}-${name}`;

  // Attributes every input shares: limits, accessibility links to its error, and the red outline when it has one.
  const attrs = (name, required) => ({
    id: id(name),
    name,
    maxLength: LIMITS[name],
    required,
    'aria-required': required || undefined,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${id(name)}-error` : undefined,
    className: `field ${errors[name] ? 'border-red-400 focus:border-red-400 focus:ring-red-400/40' : ''}`,
  });

  // Typing in a field clears its error straight away.
  const clearError = (event) => {
    const { name } = event.target;
    if (errors[name]) setErrors(({ [name]: _removed, ...rest }) => rest);
    if (status === 'invalid') setStatus('idle');
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const raw = Object.fromEntries(new FormData(form));
    if (raw._honey) return; // filled only by bots

    const trim = (value) => (typeof value === 'string' ? value.trim() : '');
    const values = {
      name: trim(raw.name),
      company: trim(raw.company),
      email: trim(raw.email),
      phone: trim(raw.phone),
      service: trim(raw.service),
      message: trim(raw.message),
    };

    const found = validate(values, { optionalFields: !compact, services: serviceOptions });
    setErrors(found);
    const firstBad = Object.keys(found)[0];
    if (firstBad) {
      setStatus('invalid');
      form.elements[firstBad]?.focus();
      return;
    }

    setStatus('sending');
    try {
      const payload = Object.fromEntries(Object.entries(values).filter(([, value]) => value));
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...payload,
          _subject: 'New verification request from the SIS website',
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || String(result.success) !== 'true') throw new Error(result.message || 'Request failed');
      navigate('/thank-you');
    } catch {
      setStatus('error');
    }
  }

  const sending = status === 'sending';

  return (
    <form onSubmit={handleSubmit} onInput={clearError} onChange={clearError} noValidate className="flex flex-col gap-4">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <p className="text-sm text-white/70">
        Fields marked <span className="font-bold text-gold">*</span> are required.
      </p>

      <Field id={id('name')} label="Full name" required error={errors.name}>
        <input {...attrs('name', true)} type="text" autoComplete="name" placeholder="Full Name *" />
      </Field>

      {!compact && (
        <Field id={id('company')} label="Company name" error={errors.company}>
          <input {...attrs('company', false)} type="text" autoComplete="organization" placeholder="Company Name (optional)" />
        </Field>
      )}

      <Field id={id('email')} label="Official email" required error={errors.email}>
        <input {...attrs('email', true)} type="email" inputMode="email" autoComplete="email" placeholder="Official Email *" />
      </Field>

      {!compact && (
        <Field id={id('phone')} label="Phone number" error={errors.phone}>
          <input {...attrs('phone', false)} type="tel" inputMode="tel" autoComplete="tel" placeholder="Phone Number (optional)" />
        </Field>
      )}

      <Field id={id('service')} label="Service" required error={errors.service}>
        <select {...attrs('service', true)} maxLength={undefined} defaultValue={preselected}>
          <option value="" disabled>
            Select Service *
          </option>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Field>

      <Field id={id('message')} label="Describe your request" required error={errors.message}>
        <textarea {...attrs('message', true)} rows={compact ? 4 : 6} placeholder="Describe your request... *" className={`${attrs('message', true).className} resize-none`} />
      </Field>

      <button type="submit" disabled={sending} className="btn-gold w-full py-4 disabled:cursor-wait disabled:opacity-70">
        {sending ? 'Sending...' : 'Submit Request'}
      </button>

      <p className="text-center text-xs leading-5 text-white/60">
        By submitting this request you agree to our{' '}
        <Link to="/terms" className="text-gold underline-offset-4 hover:underline">
          Terms &amp; Conditions
        </Link>{' '}
        and acknowledge our{' '}
        <Link to="/privacy" className="text-gold underline-offset-4 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>

      <p role="alert" aria-live="polite" className="min-h-[1.25rem] text-center text-sm text-red-300">
        {status === 'invalid' && 'Please correct the highlighted fields and try again.'}
        {status === 'error' && (
          <>
            We could not send your request. Please try again, or email{' '}
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>{' '}
            or call{' '}
            <a href={site.phoneHref} className="underline">
              {site.phone}
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}
