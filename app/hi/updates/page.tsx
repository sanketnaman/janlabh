import React from 'react';
import type { Metadata } from 'next';
import { UPDATES } from '@/data/updates';
import UpdatesDirectoryClient from '@/app/updates/UpdatesDirectoryClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'सरकारी योजना ताजा अपडेट्स 2026: ई-केवाईसी, अगली किस्त व नियम | JanLabh',
  description: 'सरकारी योजनाओं की ताजा खबरें व सरकारी आदेश। पीएम किसान 19वीं किस्त, लाडली बहना, मंईयां सम्मान योजना, आयुष्मान कार्ड और ई-केवाईसी की अंतिम तिथि की जानकारी हिंदी में।',
  keywords: [
    'सरकारी योजना ताजा अपडेट्स',
    'पीएम किसान 19वीं किस्त कब आएगी',
    'लाडली बहना किस्त अपडेट',
    'सरकारी योजना नई लिस्ट',
    'ई-केवाईसी अंतिम तिथि'
  ],
  alternates: {
    canonical: 'https://janlabh.in/hi/updates',
    languages: {
      'en': 'https://janlabh.in/updates',
      'hi': 'https://janlabh.in/hi/updates',
      'x-default': 'https://janlabh.in/updates',
    },
  },
  openGraph: {
    title: 'सरकारी योजना ताजा अपडेट्स 2026: ई-केवाईसी, अगली किस्त व नियम | JanLabh',
    description: 'केंद्र एवं राज्य सरकारों द्वारा जारी नवीनतम अधिसूचनाएं और किस्त जारी होने की तिथियां।',
    url: 'https://janlabh.in/hi/updates',
    siteName: 'JanLabh.in',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function HindiUpdatesDirectoryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'होम',
            'item': 'https://janlabh.in/hi',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'ताजा अपडेट्स',
            'item': 'https://janlabh.in/hi/updates',
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        'name': 'सरकारी योजना ताजा अपडेट्स 2026',
        'url': 'https://janlabh.in/hi/updates',
        'description': 'सरकारी योजनाओं से जुड़े ताजा दिशा-निर्देश एवं आदेश।',
        'mainEntity': {
          '@type': 'ItemList',
          'numberOfItems': UPDATES.length,
          'itemListElement': UPDATES.map((u, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
            'name': u.title_hi || u.title_en,
            'url': `https://janlabh.in/hi/updates/${u.slug}`,
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
      <UpdatesDirectoryClient updates={UPDATES} initialLang="hi" />
    </>
  );
}
