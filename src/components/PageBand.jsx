import { photoUrl } from '../data/photos';

// Slim banner under the transparent navbar on inner pages, so the page heading starts near the top of the screen.
// Shows a real photo (with a navy wash so the nav stays readable) when one exists for `photoName`.
export default function PageBand({ photoName }) {
  const photo = photoName && photoUrl(photoName);

  return (
    <div
      aria-hidden="true"
      className={`relative w-full bg-banner print:hidden ${photo ? 'h-44 sm:h-56' : 'h-36 sm:h-44'}`}
    >
      {photo && (
        <>
          <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover object-[center_28%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/45 to-navy" />
        </>
      )}
      {/* Fades the banner artwork into the flat page navy so there is no seam between them. */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-navy" />
    </div>
  );
}
