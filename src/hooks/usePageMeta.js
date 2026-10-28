import { useEffect } from 'react';

const SUFFIX = 'SIS Verification Services';

export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SUFFIX}` : `${SUFFIX} | Forensic Employee and Guarantor Verification`;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    }
  }, [title, description]);
}
