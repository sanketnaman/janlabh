import React from 'react';
import type { Metadata } from 'next';
import { UPDATES } from '@/data/updates';
import UpdatesDirectoryClient from './UpdatesDirectoryClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Government Scheme Updates 2026: e-KYC & Installments | JanLabh',
  description: 'Verified updates on Indian welfare schemes. Check PM Kisan 24th release, 25th installment status, Ayushman Vaya Vandana card rules, and e-KYC deadlines.',
  keywords: [
    'government scheme updates 2026',
    'PM Kisan 24th installment release',
    'PM Kisan 25th installment date',
    'Ayushman card update',
    'e-KYC deadline'
  ],
  alternates: {
    canonical: 'https://janlabh.in/updates',
    languages: {
      'en': 'https://janlabh.in/updates',
      'hi': 'https://janlabh.in/hi/updates',
      'x-default': 'https://janlabh.in/updates',
    },
  },
  openGraph: {
    title: 'Government Scheme Updates 2026 | JanLabh',
    description: 'Verified policy announcements, installment release dates, and compliance alerts directly from official portals.',
    url: 'https://janlabh.in/updates',
    siteName: 'JanLabh',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function UpdatesDirectoryPage() {
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
            'name': 'Updates',
            'item': 'https://janlabh.in/updates',
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        'name': 'Government Scheme Updates 2026',
        'url': 'https://janlabh.in/updates',
        'description': 'Latest verified updates on Indian government schemes.',
        'mainEntity': {
          '@type': 'ItemList',
          'numberOfItems': UPDATES.length,
          'itemListElement': UPDATES.map((u, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
            'name': u.title_en,
            'url': `https://janlabh.in/updates/${u.slug}`,
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
      <UpdatesDirectoryClient updates={UPDATES} initialLang="en" />
    </>
  );
}
