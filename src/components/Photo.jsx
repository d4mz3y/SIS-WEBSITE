import { photoUrl } from '../data/photos';

// Shows the real photo for a slot (see src/data/photos.js). Until the file exists it renders a
// branded placeholder, never an AI image.
export default function Photo({ name, alt, Icon, className = '' }) {
  const src = photoUrl(name);

  if (src) {
    return <img src={src} alt={alt} loading="lazy" decoding="async" className={`h-full w-full object-cover ${className}`} />;
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
