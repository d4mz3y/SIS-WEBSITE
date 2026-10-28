import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import PageBand from '../components/PageBand.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

export default function ThankYou() {
  usePageMeta('Request Received');

  return (
    <>
      <PageBand />
      <section className="bg-navy px-0 py-16 text-center sm:py-24">
        <div className="container-x max-w-2xl">
          <FiCheckCircle className="mx-auto h-14 w-14 text-gold" aria-hidden="true" />
          <h1 className="mt-6 text-3xl font-bold text-gold sm:text-4xl">Request Received</h1>
          <p className="mt-4 leading-7 text-mist">
            Thank you. Our team will review your request and respond with a confidential intelligence brief.
          </p>
          <p className="mx-auto mt-6 max-w-xl rounded-2xl border border-gold/25 bg-navy-card p-5 text-sm leading-6 text-mist">
            <span className="font-bold text-gold">Next step:</span> before we start, each person being verified should
            read and sign our{' '}
            <Link to="/consent" className="font-semibold text-gold underline-offset-4 hover:underline">
              consent form
            </Link>
            . Please email the signed copies to us.
          </p>
          <Link to="/" className="btn-outline mt-8">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
