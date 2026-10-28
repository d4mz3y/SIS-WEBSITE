import PageBand from '../components/PageBand.jsx';
import ContactForm from '../components/ContactForm.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

export default function Contact() {
  usePageMeta('/contact');

  return (
    <>
      <PageBand photoName="contact-header" />
      <section className="bg-navy px-0 py-16 sm:py-24">
        <div className="container-x max-w-2xl">
          <header className="mb-10 text-center sm:mb-12">
            <h1 className="text-3xl font-bold text-gold sm:text-4xl">Request Intelligence Brief</h1>
            <p className="mt-3 text-mist">All submissions are handled with strict confidentiality.</p>
          </header>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
