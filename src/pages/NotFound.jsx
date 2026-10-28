import { Link } from 'react-router-dom';
import PageBand from '../components/PageBand.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

export default function NotFound() {
  usePageMeta('Page not found');

  return (
    <>
      <PageBand />
      <section className="bg-navy px-0 py-16 text-center sm:py-24">
        <div className="container-x max-w-2xl">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">We could not find that page</h1>
          <p className="mt-4 leading-7 text-mist">The address may have changed or been typed incorrectly.</p>
          <Link to="/" className="btn-gold mt-8">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
