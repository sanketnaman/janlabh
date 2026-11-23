import React from 'react';
import type { Metadata } from 'next';
import { STATES } from '@/data/categories';
import StatesDirectoryClient from '@/app/states/StatesDirectoryClient';
import { STATES_FAQS } from '@/app/states/statesData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'राज्य अनुसार सरकारी योजनाएं 2026: सभी राज्यों की योजना लिस्ट, ई-पोर्टल व DBT | JanLabh',
  description: 'भारत के सभी राज्यों (गुजरात, झारखंड, उत्तर प्रदेश, मध्य प्रदेश, महाराष्ट्र, बिहार, राजस्थान एवं केंद्र) की जन कल्याणकारी योजनाएं। प्रत्यक्ष लाभ हस्तांतरण (DBT), निवास प्रमाण पत्र नियम और आधिकारिक ई-डिस्ट्रिक्ट पोर्टल डायरेक्टरी।',
  keywords: [
    'राज्य अनुसार सरकारी योजनाएं 2026',
    'राज्य सरकार योजना लिस्ट',
    'सभी राज्यों की सरकारी योजनाएं',
    'केंद्र और राज्य योजना में अंतर',
    'राज्यवार डीबीटी पोर्टल लिस्ट',
    'गुजरात सरकारी योजनाएं',
    'गुजरात महिला उत्कर्ष योजना',
    'झारखंड सरकारी योजना',
    'मंईयां सम्मान योजना पोर्टल',
    'यूपी सरकारी योजना फैमिली आईडी',
    'मध्य प्रदेश लाडली बहना पोर्टल',
    'महाराष्ट्र माझी लाड़की बहिण',
    'बिहार सरकारी योजना आरटीपीएस',
    'राजस्थान जन आधार योजनाएं',
    'state sarkari yojana 2026'
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
    title: 'राज्य अनुसार सरकारी योजनाएं 2026: सभी राज्यों की योजना लिस्ट एवं पोर्टल | JanLabh',
    description: 'भारत के सभी राज्यों की जन कल्याणकारी योजनाएं, ऑनलाइन आवेदन, डीबीटी तुलना और पात्रता की संपूर्ण जानकारी हिंदी में।',
    url: 'https://janlabh.in/hi/states',
    siteName: 'JanLabh India',
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
        'description': 'भारत के सभी राज्यों की सरकारी जनकल्याण योजनाओं, नकद हस्तांतरण (DBT) और आधिकारिक ई-डिस्ट्रिक्ट पोर्टल्स की संपूर्ण डायरेक्टरी।',
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
      {
        '@type': 'FAQPage',
        'mainEntity': STATES_FAQS.map((faq) => ({
          '@type': 'Question',
          'name': faq.q_hi,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.a_hi,
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
      <StatesDirectoryClient states={STATES} initialLang="hi" />
    </>
  );
}
