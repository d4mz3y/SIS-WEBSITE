# SIS Verification Services website

Marketing site for SIS Verification Services. React 18, React Router 7, Tailwind CSS 3.4, built with Vite.

## Run it

```bash
npm install
npm run dev        # http://127.0.0.1:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

Needs Node 20.19 or newer.

## Where things are

| What | Where |
|---|---|
| Pages | `src/pages/` (Home, About, Method, Services, Contact, ThankYou, NotFound) |
| Navbar (sticky), Footer (shared by every page), floating button | `src/components/` |
| Phone, email, social links, nav links | `src/data/site.js` |
| Colours and fonts | `tailwind.config.js` (one navy, one card colour, one gold, one light grey) |
| Photos | `src/assets/photos/`, picked up by file name. See `CREDITS.md` there |
| Logo and brand artwork | `src/assets/brand/` |

## Things to know

- **Photos are real photographs only.** To change one, replace the file in `src/assets/photos/` keeping the same name.
  Any photo of a person must show a Black Nigerian; places should be shot in Nigeria. `CREDITS.md` there records how
  each photo was chosen.
- **Page heroes:** every inner page opens with a large hero (`src/components/PageHero.jsx`): a Nigerian photo that
  drifts slowly, a faint scan line and pulsing GPS markers. The photo is `hero-<page>.webp` in the photos folder.
- **Animation:** the home hero and PAI shield (`AnimatedShield.jsx`), the globe tracker on the Advanced Surveillance
  card (`GlobeTracker.jsx`) and the page heroes all animate, and all stop for visitors who have turned on
  "reduce motion" in their device settings.
- **Details only the business can supply** (registered company name, CAC/RC number, office address, WhatsApp number,
  social profile URLs) are slots at the top of `src/data/site.js`. Each one appears in the footer, and the company
  details also in the Terms, only once it is filled in.
- **Page titles, descriptions and share previews** come from `src/data/seo.js`. `npm run build` then writes one HTML
  file per page (so WhatsApp, LinkedIn and Google read the right tags), plus `sitemap.xml` and `robots.txt`.
  The public address used for those is `SITE_URL` in the same file, or `VITE_SITE_URL` at build time.
- **Service links:** `/contact?service=Guarantor%20Vetting` opens the form with that service already chosen.
- **Contact form** posts to FormSubmit (`formsubmit.co`). The first real submission emails an activation link to
  `verify@sisverification.com.ng`; the form will not deliver until that link is clicked.
- **Old links** such as `/about.html` and `/service.html` redirect to the new pages.

## Legal pages and consent forms

| Page | Source |
|---|---|
| `/terms` Terms and Conditions | `src/pages/Terms.jsx` |
| `/privacy` Privacy Policy | `src/pages/Privacy.jsx` |
| `/consent` Consent forms for candidates (Form A) and guarantors (Form B) | `src/pages/Consent.jsx` |

All three are drafts that need a Nigerian lawyer's review before they are relied on. When you change the Terms or the
Privacy Policy, update `legalUpdated` in `src/data/site.js`.

### Consent form PDFs

The downloads in `public/documents/` are generated from the `/consent` page, so they match it exactly. After you edit
`Consent.jsx`, regenerate them with the site running (`npm run dev`):

```bash
google-chrome --headless=new --no-pdf-header-footer --virtual-time-budget=10000 \
  --print-to-pdf=public/documents/SIS-Consent-Form-A-Candidate.pdf "http://127.0.0.1:5173/consent?only=candidate"
google-chrome --headless=new --no-pdf-header-footer --virtual-time-budget=10000 \
  --print-to-pdf=public/documents/SIS-Consent-Form-B-Guarantor.pdf "http://127.0.0.1:5173/consent?only=guarantor"
```

## Deploying

The site is a single-page app, so the host must serve `index.html` for unknown paths.

- **Vercel or Netlify:** connect the repo. Settings are already in `vercel.json` and `public/_redirects`. Build
  command `npm run build`, output folder `dist`.
- **GitHub Pages:** build with the repo path as the base, then publish `dist/`:
  `VITE_BASE=/SIS-WEBSITE/ npm run build`. The build also writes `dist/404.html` so deep links work.
  Pages cannot serve this branch directly from the repo root; it needs a build step (for example a GitHub Actions
  workflow) or a manual upload of `dist/`.
