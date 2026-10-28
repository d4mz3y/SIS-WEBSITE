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
- **Social icons** only appear in the footer once their URL is filled in `src/data/site.js`.
- **Contact form** posts to FormSubmit (`formsubmit.co`). The first real submission emails an activation link to
  `verify@sisverification.com.ng`; the form will not deliver until that link is clicked.
- **Old links** such as `/about.html` and `/service.html` redirect to the new pages.

## Deploying

The site is a single-page app, so the host must serve `index.html` for unknown paths.

- **Vercel or Netlify:** connect the repo. Settings are already in `vercel.json` and `public/_redirects`. Build
  command `npm run build`, output folder `dist`.
- **GitHub Pages:** build with the repo path as the base, then publish `dist/`:
  `VITE_BASE=/SIS-WEBSITE/ npm run build`. The build also writes `dist/404.html` so deep links work.
  Pages cannot serve this branch directly from the repo root; it needs a build step (for example a GitHub Actions
  workflow) or a manual upload of `dist/`.
