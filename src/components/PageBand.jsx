import { photoUrl } from '../data/photos';

// Banner under the transparent navbar on inner pages. Uses the brand wordmark artwork, or a real
// photo (with a navy wash so the nav stays readable) when one exists for `photoName`.
export default function PageBand({ photoName }) {
  const photo = photoName && photoUrl(photoName);

  return (
    <div
      aria-hidden="true"
      className="relative h-[34vh] min-h-[220px] w-full bg-wordmark print:hidden sm:h-[52vh] sm:min-h-[360px]"
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
