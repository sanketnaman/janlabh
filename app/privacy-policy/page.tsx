import type { Metadata } from 'next';
import PrivacyPolicyView from './PrivacyPolicyView';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Privacy Policy | JanLabh – Government Schemes & Citizen Benefits',
  description: 'Official Privacy Policy of JanLabh.in. Learn about our strict zero personal data collection, Google AdSense cookies, third-party advertising, and privacy protections.',
  alternates: {
    canonical: 'https://janlabh.in/privacy-policy',
    languages: {
      'en': 'https://janlabh.in/privacy-policy',
      'hi': 'https://janlabh.in/hi/privacy-policy',
      'x-default': 'https://janlabh.in/privacy-policy',
    },
  },
  openGraph: {
    title: 'Privacy Policy | JanLabh – Government Schemes & Citizen Benefits',
    description: 'Official Privacy Policy of JanLabh.in. Learn about our strict zero personal data collection, Google AdSense cookies, third-party advertising, and privacy protections.',
    url: 'https://janlabh.in/privacy-policy',
    siteName: 'JanLabh India',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView />;
}
