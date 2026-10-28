import { Link } from 'react-router-dom';

// Closing call to action shown at the bottom of About, Method and Services.
export default function CtaBox({ className = '' }) {
  return (
    <div className={`rounded-3xl border border-gold/30 bg-navy-card px-6 py-10 text-center sm:p-12 ${className}`}>
      <h2 className="mb-2 text-2xl font-bold text-gold">Need Trusted Verification Intelligence?</h2>
      <p className="mb-7 text-mist">Submit a request and our team will respond with a confidential intelligence brief.</p>
      <Link to="/contact" className="btn-gold px-8 py-3.5">
        Request Verification
      </Link>
    </div>
  );
}
