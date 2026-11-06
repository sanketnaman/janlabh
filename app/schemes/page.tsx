import React from 'react';
import type { Metadata } from 'next';
import { SCHEMES } from '@/data/schemes';
import SchemesDirectoryClient from './SchemesDirectoryClient';

export const metadata: Metadata = {
  title: 'All Government Schemes in India 2026: Search & Check Eligibility | सभी सरकारी योजनाएं | JanLabh',
  description: 'Explore all Central and State government schemes in India. Check eligibility, benefits (PM Kisan, Ayushman Bharat, PMAY, Maiya Samman, Vishwakarma), required documents, and apply online.',
  keywords: [
    'all government schemes India',
    'sarkari yojana list 2026',
    'central government schemes',
    'state government schemes',
    'सभी सरकारी योजनाएं',
    'पीएम योजना लिस्ट',
    'government subsidies India',
    'DBT schemes list'
  ],
  alternates: {
    canonical: 'https://janlabh.in/schemes',
    languages: {
      'en': 'https://janlabh.in/schemes',
      'hi': 'https://janlabh.in/hi/schemes',
      'x-default': 'https://janlabh.in/schemes',
    },
  },
  openGraph: {
    title: 'All Government Schemes in India 2026 | JanLabh',
    description: 'Explore all Central and State government schemes in India with official application links and verified eligibility rules.',
    url: 'https://janlabh.in/schemes',
    siteName: 'JanLabh.in',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function SchemesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://janlabh.in',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'All Schemes',
            'item': 'https://janlabh.in/schemes',
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        'name': 'All Government Schemes in India 2026',
        'url': 'https://janlabh.in/schemes',
        'description': 'Comprehensive directory of Central and State Government schemes for Indian citizens.',
        'mainEntity': {
          '@type': 'ItemList',
          'numberOfItems': SCHEMES.length,
          'itemListElement': SCHEMES.map((scheme, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': scheme.title_en,
            'url': `https://janlabh.in/schemes/${scheme.slug}`,
          })),
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SchemesDirectoryClient schemes={SCHEMES} initialLang="en" />
    </>
  );
}
