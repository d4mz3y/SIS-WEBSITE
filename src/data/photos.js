// Real photographs only (no AI-generated images). To add one, drop a .webp/.jpg/.png into
// src/assets/photos/ named after its slot, e.g. facility-database.webp. No code change needed.
//
// Slots in use:
//   facility-database, facility-vetting, facility-surveillance   (home: Our Facilities)
//   step-identity, step-address, step-guarantor, step-employment, step-report   (home: How We Verify)
//   contact-header   (contact page banner)
const files = import.meta.glob('../assets/photos/*.{webp,jpg,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const byName = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split('/').pop().replace(/\.[^.]+$/, ''), url]),
);

export const photoUrl = (name) => byName[name];
