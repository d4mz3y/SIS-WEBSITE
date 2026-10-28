import { Link } from 'react-router-dom';
import PageBand from './PageBand.jsx';
import { site } from '../data/site';

// Shared layout for the legal pages (Terms, Privacy). A section body is a list of blocks:
// a string is a paragraph, { list } a bulleted list, { contact } the contact details,
// and { node } any ready-made JSX (used for paragraphs that contain links).
const linkClass = 'font-semibold text-gold underline-offset-4 hover:underline';

// Pass `to` for a page inside the site, or `href` for mailto:/tel:/external links.
export function LegalLink({ to, children, ...props }) {
  if (to) {
    return (
      <Link to={to} className={linkClass} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a className={linkClass} {...props}>
      {children}
    </a>
  );
}

function Block({ block }) {
  if (typeof block === 'string') return <p className="leading-8 text-mist">{block}</p>;
  if (block.node) return block.node;

  if (block.list) {
    return (
      <ul className="list-disc space-y-2 pl-6 leading-8 text-mist marker:text-gold">
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="space-y-2 leading-8 text-mist">
      <li>
        Email: <LegalLink href={`mailto:${site.email}`}>{site.email}</LegalLink>
      </li>
      <li>
        Phone: <LegalLink href={site.phoneHref}>{site.phone}</LegalLink>
      </li>
    </ul>
  );
}

export default function LegalDocument({ title, intro, sections }) {
  return (
    <>
      <PageBand />
      <section className="bg-navy px-0 py-16 sm:py-24">
        <div className="container-x max-w-3xl">
          <header>
            <span className="eyebrow block">Legal</span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h1>
            <p className="mt-4 text-sm text-white/60">Last updated: {site.legalUpdated}</p>
            <div className="mt-6 space-y-4">
              {intro.map((paragraph) => (
                <p key={paragraph} className="leading-8 text-mist">
                  {paragraph}
                </p>
              ))}
            </div>
          </header>

          <nav aria-label="Contents" className="mt-10 rounded-2xl border border-gold/25 bg-navy-card p-6 sm:p-8">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-gold">Contents</h2>
            <ol className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
              {sections.map(({ id, title: sectionTitle }, index) => (
                <li key={id}>
                  <a href={`#${id}`} className="block py-1 text-mist transition-colors hover:text-gold">
                    <span className="mr-2 text-gold">{index + 1}.</span>
                    {sectionTitle}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-12 space-y-12">
            {sections.map(({ id, title: sectionTitle, body }, index) => (
              <article key={id} id={id} className="scroll-mt-24">
                <h2 className="mb-4 text-xl font-bold text-gold sm:text-2xl">
                  <span className="mr-2">{index + 1}.</span>
                  {sectionTitle}
                </h2>
                <div className="space-y-4">
                  {body.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
