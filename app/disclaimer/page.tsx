import type { Metadata } from 'next';
import DisclaimerView from './DisclaimerView';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Statutory Disclaimer | JanLabh.in',
  description: 'Official statutory non-government disclaimer for JanLabh.in. Transparent civic guidance, zero official affiliations, and citation guidelines.',
  alternates: {
    canonical: 'https://janlabh.in/disclaimer',
    languages: {
      'en': 'https://janlabh.in/disclaimer',
      'hi': 'https://janlabh.in/hi/disclaimer',
      'x-default': 'https://janlabh.in/disclaimer',
    },
  },
  openGraph: {
    title: 'Statutory Disclaimer | JanLabh.in',
    description: 'Official statutory non-government disclaimer for JanLabh.in. Transparent civic guidance, zero official affiliations, and citation guidelines.',
    url: 'https://janlabh.in/disclaimer',
    siteName: 'JanLabh India',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function DisclaimerPage() {
  return <DisclaimerView />;
}
