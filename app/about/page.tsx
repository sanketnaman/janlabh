import type { Metadata } from 'next';
import AboutView from './AboutView';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About Us, Editorial Integrity & Verification Standards | JanLabh.in',
  description: 'Learn about JanLabh.in, our independent mission to eliminate information asymmetry in Indian welfare schemes, our 5-stage verification methodology, founder profile, and editorial standards.',
  alternates: {
    canonical: 'https://janlabh.in/about',
    languages: {
      'en': 'https://janlabh.in/about',
      'hi': 'https://janlabh.in/hi/about',
      'x-default': 'https://janlabh.in/about',
    },
  },
  openGraph: {
    title: 'About Us, Editorial Integrity & Standards | JanLabh.in',
    description: 'Learn about JanLabh.in, our independent mission to eliminate information asymmetry in Indian welfare schemes, our 5-stage verification methodology, founder profile, and editorial standards.',
    url: 'https://janlabh.in/about',
    siteName: 'JanLabh India',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': 'About JanLabh (जनलाभ के बारे में)',
    'description': 'JanLabh independent mission, 5-stage verification methodology, editorial standards, and civic problem-solving charter.',
    'url': 'https://janlabh.in/about',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'JanLabh India',
      'url': 'https://janlabh.in',
      'email': 'contact@janlabh.in',
      'founder': {
        '@type': 'Person',
        'name': 'Sanket Sinha',
        'jobTitle': 'Founder & Editor',
        'email': 'contact@janlabh.in',
        'nationality': 'Indian',
      },
      'knowsAbout': [
        'Direct Benefit Transfer (DBT)',
        'Indian Government Welfare Schemes',
        'Public Distribution System (PDS)',
        'National Scholarship Portal',
        'Ayushman Bharat PMJAY'
      ]
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutView />
    </>
  );
}
