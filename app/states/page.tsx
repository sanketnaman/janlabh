import React from 'react';
import type { Metadata } from 'next';
import { STATES } from '@/data/categories';
import StatesDirectoryClient from './StatesDirectoryClient';

export const metadata: Metadata = {
  title: 'State Government Schemes 2026: State-Wise Yojana Directory | राज्य सरकार योजनाएं | JanLabh',
  description: 'Explore state-wise government welfare schemes across India (Jharkhand, Uttar Pradesh, Madhya Pradesh, Maharashtra, Bihar, Rajasthan & Central Schemes). Check local subsidies, pensions, and eligibility.',
  keywords: [
    'state government schemes India',
    'state wise yojana list 2026',
    'jharkhand government schemes',
    'up yojana list',
    'mp sarkari yojana',
    'maharashtra yojana',
    'bihar sarkar yojana',
    'rajasthan scheme list',
    'राज्य सरकार योजनाएं 2026'
  ],
  alternates: {
    canonical: 'https://janlabh.in/states',
    languages: {
      'en': 'https://janlabh.in/states',
      'hi': 'https://janlabh.in/hi/states',
      'x-default': 'https://janlabh.in/states',
    },
  },
  openGraph: {
    title: 'State Government Schemes 2026: State-Wise Yojana Directory | JanLabh',
    description: 'Explore state-wise government welfare schemes across India. Find cash benefits, student subsidies, farmer assistance, and direct welfare links.',
    url: 'https://janlabh.in/states',
    siteName: 'JanLabh.in',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function StatesDirectoryPage() {
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
            'name': 'States',
            'item': 'https://janlabh.in/states',
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        'name': 'State-Wise Government Schemes Directory 2026',
        'url': 'https://janlabh.in/states',
        'description': 'Directory of state government welfare schemes across Indian states.',
        'mainEntity': {
          '@type': 'ItemList',
          'numberOfItems': STATES.length,
          'itemListElement': STATES.map((st, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': st.name_en,
            'url': `https://janlabh.in/states/${st.id}`,
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
      <StatesDirectoryClient states={STATES} initialLang="en" />
    </>
  );
}
