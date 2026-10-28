// Runs after `vite build`. Turns the single-page build into something search engines, link previews and
// static hosts all understand:
//   - one HTML file per page (dist/about/index.html, ...) with that page's own title, description,
//     canonical link and share-image tags, so WhatsApp, LinkedIn and Google read the right text;
//   - dist/404.html, the fallback GitHub Pages serves for unknown addresses;
//   - dist/sitemap.xml and dist/robots.txt.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { loadEnv } from 'vite';
import { pages, SITE_NAME, SITE_URL } from '../src/data/seo.js';

const env = loadEnv('production', process.cwd(), 'VITE_');
const origin = (env.VITE_SITE_URL || SITE_URL).replace(/\/$/, '');
const base = `${(env.VITE_BASE || '/').replace(/\/+$/, '')}/`; // '/' or '/SIS-WEBSITE/'

const esc = (text) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const urlFor = (path) => `${origin}${base.replace(/\/$/, '')}${path === '/' ? '/' : path}`;

const template = readFileSync('dist/index.html', 'utf8')
  // remove the tags we are about to write fresh for each page
  .replace(/\s*<title>[\s\S]*?<\/title>/, '')
  .replace(/\s*<meta\s+name="(?:description|robots|twitter:[^"]+)"[^>]*>/g, '')
  .replace(/\s*<meta\s+property="og:[^"]+"[^>]*>/g, '')
  .replace(/\s*<link\s+rel="canonical"[^>]*>/g, '');

function render(path, page) {
  const url = urlFor(path);
  const image = `${origin}${base}og-image.jpg`;
  const tags = [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    page.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${url}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta name="twitter:card" content="summary_large_image" />',
  ];
  return template.replace('</head>', `${tags.map((tag) => `    ${tag}`).join('\n')}\n  </head>`);
}

function write(file, content) {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
}

for (const [path, page] of Object.entries(pages)) {
  if (path === '/404') write('dist/404.html', render(path, page));
  else write(path === '/' ? 'dist/index.html' : join('dist', path, 'index.html'), render(path, page));
}

const today = new Date().toISOString().slice(0, 10);
const listed = Object.entries(pages).filter(([, page]) => !page.noindex);
write(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${listed
    .map(([path]) => `  <url>\n    <loc>${urlFor(path)}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
    .join('\n')}\n</urlset>\n`,
);
write('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${origin}${base}sitemap.xml\n`);

console.log(`postbuild: ${Object.keys(pages).length} pages, sitemap.xml (${listed.length} urls) and robots.txt for ${origin}${base}`);
