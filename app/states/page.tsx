import React from 'react';
import type { Metadata } from 'next';
import { STATES } from '@/data/categories';
import StatesDirectoryClient from './StatesDirectoryClient';
import { STATES_FAQS } from './statesData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'State Government Schemes 2026: State-Wise Yojana Directory, Portals & DBT | JanLabh',
  description: 'Complete directory of state government welfare schemes in India (Gujarat, Jharkhand, Uttar Pradesh, Madhya Pradesh, Maharashtra, Bihar, Rajasthan & Central). Compare DBT cash benefits, resident domicile rules, and official e-District portals.',
  keywords: [
    'state government schemes India 2026',
    'state wise yojana list 2026',
    'state welfare schemes directory',
    'central vs state schemes difference',
    'state dbt portal list',
    'gujarat government schemes',
    'jharkhand government schemes',
    'up yojana list',
    'mp ladli behna yojana portal',
    'maharashtra ladki bahin yojana',
    'bihar sarkar yojana list',
    'rajasthan jan aadhaar schemes',
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
    title: 'State Government Schemes 2026: State-Wise Yojana Directory & Portals | JanLabh',
    description: 'Explore state-wise welfare initiatives, direct cash transfers, official e-District portals, and residency guidelines across India.',
    url: 'https://janlabh.in/states',
    siteName: 'JanLabh India',
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
        'description': 'Comprehensive directory of state government welfare schemes, DBT cash transfers, and official citizen e-District portals across Indian states.',
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
      {
        '@type': 'FAQPage',
        'mainEntity': STATES_FAQS.map((faq) => ({
          '@type': 'Question',
          'name': faq.q_en,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.a_en,
          },
        })),
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
