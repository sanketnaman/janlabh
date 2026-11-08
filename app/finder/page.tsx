import React from 'react';
import type { Metadata } from 'next';
import FinderClient from './FinderClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Government Scheme Finder: Discover Eligible Welfare Schemes | सरकारी योजना खोजें | JanLabh',
  description: 'Use our AI-assisted scheme finder to discover central and state government schemes tailored to your age, state, profession, and family income. Instant eligibility match.',
  keywords: [
    'scheme finder',
    'find government schemes',
    'eligibility search tool',
    'sarkari yojana finder',
    'सरकारी योजना खोजें',
    'government scheme recommendation'
  ],
  alternates: {
    canonical: 'https://janlabh.in/finder',
    languages: {
      'en': 'https://janlabh.in/finder',
      'hi': 'https://janlabh.in/hi/finder',
      'x-default': 'https://janlabh.in/finder',
    },
  },
  openGraph: {
    title: 'Government Scheme Finder | JanLabh',
    description: 'Find welfare schemes tailored to your profile in 3 simple steps.',
    url: 'https://janlabh.in/finder',
    siteName: 'JanLabh.in',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function FinderPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'JanLabh Scheme Finder Tool',
    'url': 'https://janlabh.in/finder',
    'applicationCategory': 'GovernmentApplication',
    'description': 'Interactive eligibility and scheme discovery tool for Indian citizens.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FinderClient initialLang="en" />
    </>
  );
}
