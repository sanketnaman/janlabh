import type { Metadata } from 'next';
import PrivacyPolicyView from './PrivacyPolicyView';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Privacy Policy & DPDP Act 2023 Compliance | JanLabh.in',
  description: 'Official Privacy Policy of JanLabh.in. Learn about our strict zero personal data collection, DPDP Act 2023 compliance, Google AdSense cookies, and statutory Grievance Officer details.',
  alternates: {
    canonical: 'https://janlabh.in/privacy-policy',
    languages: {
      'en': 'https://janlabh.in/privacy-policy',
      'hi': 'https://janlabh.in/hi/privacy-policy',
      'x-default': 'https://janlabh.in/privacy-policy',
    },
  },
  openGraph: {
    title: 'Privacy Policy & DPDP Act 2023 Compliance | JanLabh.in',
    description: 'Official Privacy Policy of JanLabh.in. Learn about our strict zero personal data collection, DPDP Act 2023 compliance, Google AdSense cookies, and statutory Grievance Officer details.',
    url: 'https://janlabh.in/privacy-policy',
    siteName: 'JanLabh India',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'JanLabh Privacy Policy (DPDP Act 2023 Compliant)',
    'description': 'Official Privacy Policy of JanLabh.in detailing zero sensitive data storage, Google AdSense cookies, and DPDP Act rights.',
    'url': 'https://janlabh.in/privacy-policy',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'JanLabh India',
      'url': 'https://janlabh.in',
      'email': 'privacy@janlabh.in'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PrivacyPolicyView />
    </>
  );
}
