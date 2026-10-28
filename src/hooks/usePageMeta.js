import { useEffect } from 'react';
import { pages, SITE_NAME } from '../data/seo';

// Find a tag in <head> by selector, or create it, then set one attribute on it.
function upsert(selector, tag, attrs, name, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(tag);
    Object.entries(attrs).forEach(([key, val]) => el.setAttribute(key, val));
    document.head.appendChild(el);
  }
  el.setAttribute(name, value);
}

// Keeps the tab title and the description, canonical, Open Graph and robots tags in step with the page being
// viewed. `path` selects an entry in src/data/seo.js; `overrides` can replace its title or description.
export default function usePageMeta(path, overrides = {}) {
  const page = { ...(pages[path] ?? pages['/404']), ...overrides };

  useEffect(() => {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    const url = `${window.location.origin}${base}${path === '/' || path === '/404' ? '/' : path}`;
    const image = `${window.location.origin}${import.meta.env.BASE_URL}og-image.jpg`;

    document.title = page.title;
    upsert('meta[name="description"]', 'meta', { name: 'description' }, 'content', page.description);
    upsert('link[rel="canonical"]', 'link', { rel: 'canonical' }, 'href', url);
    upsert('meta[property="og:type"]', 'meta', { property: 'og:type' }, 'content', 'website');
    upsert('meta[property="og:site_name"]', 'meta', { property: 'og:site_name' }, 'content', SITE_NAME);
    upsert('meta[property="og:title"]', 'meta', { property: 'og:title' }, 'content', page.title);
    upsert('meta[property="og:description"]', 'meta', { property: 'og:description' }, 'content', page.description);
    upsert('meta[property="og:url"]', 'meta', { property: 'og:url' }, 'content', url);
    upsert('meta[property="og:image"]', 'meta', { property: 'og:image' }, 'content', image);

    const robots = document.head.querySelector('meta[name="robots"]');
    if (page.noindex) upsert('meta[name="robots"]', 'meta', { name: 'robots' }, 'content', 'noindex');
    else robots?.remove();
  }, [path, page.title, page.description, page.noindex]);
}
