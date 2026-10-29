import { photoUrl } from '../data/photos';

// Shows the real photo for a slot (see src/data/photos.js). Until the file exists it renders a
// branded placeholder, never an AI image.
export default function Photo({ name, alt, Icon, className = '', position, sizes = '100vw' }) {
  const src = photoUrl(name);
  // `<name>-sm.webp` is a half-size copy (450 px against 900 px). The browser picks whichever fits the space.
  const small = photoUrl(`${name}-sm`);

  if (src) {
    return (
      <img
        src={src}
        srcSet={small ? `${small} 450w, ${src} 900w` : undefined}
        sizes={small ? sizes : undefined}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={position ? { objectPosition: position } : undefined}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-card to-navy text-gold/70 ${className}`}
    >
      {Icon && <Icon className="h-10 w-10" aria-hidden="true" />}
    </div>
  );
}
