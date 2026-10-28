import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

export default function NotFound() {
  usePageMeta('/404');

  return (
    <>
      <PageHero
        photo="hero-thanks"
        eyebrow="Error 404"
        title="We could not find that page"
        lead="The address may have changed or been typed incorrectly."
      />
      <section className="bg-navy px-0 py-14 text-center sm:py-20">
        <div className="container-x max-w-2xl">
          <Link to="/" className="btn-gold">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
