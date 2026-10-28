import { useId, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { site, serviceOptions } from '../data/site';

// FormSubmit's AJAX endpoint: no backend needed. The first real submission emails an activation
// link to the address below; until that link is clicked, requests are rejected.
const ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

function Field({ id, label, children }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      {children}
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
  const [status, setStatus] = useState('idle'); // idle | sending | error
  const id = (name) => `${uid}-${name}`;

  async function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    if (data._honey) return; // filled only by bots

    setStatus('sending');
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <Field id={id('name')} label="Full name">
        <input id={id('name')} name="name" type="text" required autoComplete="name" placeholder="Full Name" className="field" />
      </Field>

      {!compact && (
        <Field id={id('company')} label="Company name">
          <input id={id('company')} name="company" type="text" autoComplete="organization" placeholder="Company Name" className="field" />
        </Field>
      )}

      <Field id={id('email')} label="Official email">
        <input id={id('email')} name="email" type="email" required autoComplete="email" placeholder="Official Email" className="field" />
      </Field>

      {!compact && (
        <Field id={id('phone')} label="Phone number">
          <input id={id('phone')} name="phone" type="tel" autoComplete="tel" placeholder="Phone Number" className="field" />
        </Field>
      )}

      <Field id={id('service')} label="Service">
        <select id={id('service')} name="service" required defaultValue={preselected} className="field">
          <option value="" disabled>
            Select Service
          </option>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Field>

      <Field id={id('message')} label="Describe your request">
        <textarea
          id={id('message')}
          name="message"
          required
          rows={compact ? 4 : 6}
          placeholder="Describe your request..."
          className="field resize-none"
        />
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
