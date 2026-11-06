import React from 'react';
import type { Metadata } from 'next';
import { UPDATES } from '@/data/updates';
import UpdatesDirectoryClient from './UpdatesDirectoryClient';

export const metadata: Metadata = {
  title: 'Government Scheme Updates 2026: e-KYC Deadlines, Installment Dates & Orders | JanLabh',
  description: 'Stay updated on Indian government welfare schemes. Check PM Kisan 19th installment status, Ayushman Vaya Vandana card rules, Ladli Behna updates, and eKYC deadlines.',
  keywords: [
    'government scheme updates 2026',
    'PM Kisan 19th installment date',
    'Ayushman card update',
    'Ladli Behna payment status',
    'e-KYC deadline sarkari yojana',
    'सरकारी योजना ताजा अपडेट'
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
    description: 'Verified policy announcements, installment release dates, and compliance alerts directly from government gazettes.',
    url: 'https://janlabh.in/updates',
    siteName: 'JanLabh.in',
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
