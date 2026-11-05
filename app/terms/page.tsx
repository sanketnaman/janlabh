import type { Metadata } from 'next';
import TermsView from './TermsView';

export const metadata: Metadata = {
  title: 'Terms of Use & Statutory Disclaimer | JanLabh',
  description: 'Terms of Service and Statutory Legal Disclaimer of JanLabh.in. Understand our independent status, non-government affiliation, and terms governing content use.',
  alternates: {
    canonical: 'https://janlabh.in/terms',
  },
};

export default function TermsPage() {
  return <TermsView />;
}
