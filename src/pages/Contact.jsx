import PageHero from '../components/PageHero.jsx';
import ContactForm from '../components/ContactForm.jsx';
import ContactMethods from '../components/ContactMethods.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

export default function Contact() {
  usePageMeta('/contact');

  return (
    <>
      <PageHero
        photo="hero-contact"
        title="Request Intelligence Brief"
        lead="All submissions are handled with strict confidentiality."
      />
      <section className="bg-navy px-0 py-14 sm:py-20">
        <div className="container-x grid max-w-5xl gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <ContactForm />
          </div>

          <aside aria-labelledby="direct-heading" className="lg:pt-1">
            <h2 id="direct-heading" className="text-xl font-bold text-gold">
              Prefer to talk to us?
            </h2>
            <p className="mb-6 mt-2 text-sm leading-6 text-mist">
              Reach the team directly. We handle every enquiry in confidence.
            </p>
            <ContactMethods />
          </aside>
        </div>
      </section>
    </>
  );
}
