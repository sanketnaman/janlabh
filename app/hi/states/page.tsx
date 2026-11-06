import React from 'react';
import type { Metadata } from 'next';
import { STATES } from '@/data/categories';
import StatesDirectoryClient from '@/app/states/StatesDirectoryClient';

export const metadata: Metadata = {
  title: 'राज्य अनुसार सरकारी योजनाएं 2026: सभी राज्यों की योजना लिस्ट | State Schemes | JanLabh',
  description: 'भारत के सभी राज्यों (झारखंड, उत्तर प्रदेश, मध्य प्रदेश, महाराष्ट्र, बिहार, राजस्थान एवं केंद्र सरकार) की जन कल्याणकारी योजनाएं। राज्यवार सब्सिडी, पेंशन और पात्रता चेक करें।',
  keywords: [
    'राज्य अनुसार सरकारी योजनाएं',
    'राज्य सरकार योजना लिस्ट 2026',
    'झारखंड सरकारी योजना',
    'यूपी सरकारी योजना',
    'मध्य प्रदेश लाडली बहना',
    'महाराष्ट्र योजना लिस्ट',
    'बिहार सरकारी योजना',
    'राजस्थान योजनाएं',
    'state sarkari yojana'
  ],
  alternates: {
    canonical: 'https://janlabh.in/hi/states',
    languages: {
      'en': 'https://janlabh.in/states',
      'hi': 'https://janlabh.in/hi/states',
      'x-default': 'https://janlabh.in/states',
    },
  },
  openGraph: {
    title: 'राज्य अनुसार सरकारी योजनाएं 2026: सभी राज्यों की योजना लिस्ट | JanLabh',
    description: 'भारत के सभी राज्यों की जन कल्याणकारी योजनाएं, ऑनलाइन आवेदन और पात्रता की संपूर्ण जानकारी हिंदी में।',
    url: 'https://janlabh.in/hi/states',
    siteName: 'JanLabh.in',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function HindiStatesDirectoryPage() {
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
            'name': 'राज्य विशेष हब',
            'item': 'https://janlabh.in/hi/states',
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        'name': 'राज्य अनुसार सरकारी योजनाएं 2026',
        'url': 'https://janlabh.in/hi/states',
        'description': 'भारत के सभी राज्यों की सरकारी जनकल्याण योजनाओं की सूची।',
        'mainEntity': {
          '@type': 'ItemList',
          'numberOfItems': STATES.length,
          'itemListElement': STATES.map((st, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': st.name_hi || st.name_en,
            'url': `https://janlabh.in/hi/states/${st.id}`,
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
      <StatesDirectoryClient states={STATES} initialLang="hi" />
    </>
  );
}
