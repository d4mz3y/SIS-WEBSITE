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
          <Link to="/" className="btn-outline mt-8">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
