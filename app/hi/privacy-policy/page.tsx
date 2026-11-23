import type { Metadata } from 'next';
import PrivacyPolicyView from '@/app/privacy-policy/PrivacyPolicyView';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'गोपनीयता नीति एवं DPDP अधिनियम 2023 अनुपालन | JanLabh.in',
  description: 'जनलाभ (JanLabh.in) की आधिकारिक गोपनीयता नीति। जानें हमारे शून्य संवेदनशील डेटा संकलन, DPDP एक्ट 2023 अनुपालन, गूगल एडसेंस कुकीज, एवं वैधानिक शिकायत निवारण अधिकारी का विवरण।',
  alternates: {
    canonical: 'https://janlabh.in/hi/privacy-policy',
    languages: {
      'en': 'https://janlabh.in/privacy-policy',
      'hi': 'https://janlabh.in/hi/privacy-policy',
      'x-default': 'https://janlabh.in/privacy-policy',
    },
  },
  openGraph: {
    title: 'गोपनीयता नीति एवं DPDP अधिनियम 2023 अनुपालन | JanLabh.in',
    description: 'जनलाभ (JanLabh.in) की आधिकारिक गोपनीयता नीति। जानें हमारे शून्य संवेदनशील डेटा संकलन, DPDP एक्ट 2023 अनुपालन, गूगल एडसेंस कुकीज, एवं वैधानिक शिकायत निवारण अधिकारी का विवरण।',
    url: 'https://janlabh.in/hi/privacy-policy',
    siteName: 'JanLabh India',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function HindiPrivacyPolicyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'जनलाभ गोपनीयता नीति (DPDP अधिनियम 2023 अनुपालन)',
    'description': 'जनलाभ की आधिकारिक गोपनीयता नीति, शून्य संवेदनशील डेटा संकलन की गारंटी, गूगल एडसेंस कुकीज नीति एवं डेटा सुरक्षा मानक।',
    'url': 'https://janlabh.in/hi/privacy-policy',
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
      <PrivacyPolicyView forcedLang="hi" />
    </>
  );
}
