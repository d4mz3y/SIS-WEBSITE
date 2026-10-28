// Real photographs only (no AI-generated images). To add one, drop a .webp/.jpg/.png into
// src/assets/photos/ named after its slot, e.g. facility-database.webp. No code change needed.
//
// Slots in use:
//   facility-database, facility-vetting   (home: Our Facilities. The Advanced Surveillance card is the GlobeTracker)
//   step-identity, step-address, step-guarantor, step-employment, step-report   (home: How We Verify)
//   hero-about, hero-method, hero-services, hero-contact, hero-legal, hero-thanks   (inner-page heroes)
// Any photo of a person must show a Black Nigerian. Photos of places should be shot in Nigeria.
const files = import.meta.glob('../assets/photos/*.{webp,jpg,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const byName = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split('/').pop().replace(/\.[^.]+$/, ''), url]),
);

export const photoUrl = (name) => byName[name];
