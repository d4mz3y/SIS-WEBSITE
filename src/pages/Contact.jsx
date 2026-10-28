import PageHero from '../components/PageHero.jsx';
import ContactForm from '../components/ContactForm.jsx';
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
        <div className="container-x max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
