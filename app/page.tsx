import React from 'react';
import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'JanLabh – Government Schemes & Citizen Benefits in India 2026: Eligibility & Apply | सरकारी योजनाएं',
  description: 'Discover all Central and State government welfare schemes in India (PM Kisan, Ayushman Bharat, PMAY, Ladli Behna, Vishwakarma). Check instant eligibility, required documents, and apply online.',
  keywords: [
    'government schemes India 2026',
    'sarkari yojana list',
    'PM Kisan eligibility',
    'Ayushman card apply',
    'PM Awas Yojana 2026',
    'state government schemes',
    'scholarships India',
    'DBT welfare schemes',
    'सरकारी योजना 2026'
  ],
  alternates: {
    canonical: 'https://janlabh.in',
    languages: {
      'en': 'https://janlabh.in',
      'hi': 'https://janlabh.in/hi',
      'x-default': 'https://janlabh.in',
    },
  },
  openGraph: {
    title: 'JanLabh – Government Schemes & Citizen Benefits in India 2026',
    description: 'Empowering Indian citizens to discover welfare schemes, understand eligibility, prepare required documents, and access official government portals.',
    url: 'https://janlabh.in',
    siteName: 'JanLabh.in',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'JanLabh.in',
    'url': 'https://janlabh.in',
    'inLanguage': 'en-IN',
    'description': 'Independent public information platform for Indian Central and State government schemes.',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': 'https://janlabh.in/schemes?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient initialLang="en" />
    </>
  );
}
