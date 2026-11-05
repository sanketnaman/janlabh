import type { Metadata } from 'next';
import DisclaimerView from './DisclaimerView';

export const metadata: Metadata = {
  title: 'Statutory Disclaimer | JanLabh.in',
  description: 'Official statutory non-government disclaimer for JanLabh.in. Transparent civic guidance, zero official affiliations, and citation guidelines.',
  alternates: {
    canonical: 'https://janlabh.in/disclaimer',
  },
};

export default function DisclaimerPage() {
  return <DisclaimerView />;
}
