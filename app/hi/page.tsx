import React from 'react';
import type { Metadata } from 'next';
import HomePageClient from '@/app/HomePageClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'जनलाभ (JanLabh): सभी सरकारी योजनाएं, पात्रता जांच व ऑनलाइन आवेदन 2026 | Sarkari Yojana',
  description: 'भारत सरकार और राज्य सरकारों (झारखंड, उत्तर प्रदेश, बिहार, राजस्थान, मध्य प्रदेश, महाराष्ट्र) की जनकल्याणकारी योजनाओं की संपूर्ण जानकारी। पीएम किसान, आयुष्मान भारत, पीएम आवास, लाडली बहना की पात्रता, दस्तावेज और ऑनलाइन आवेदन लिंक।',
  keywords: [
    'सरकारी योजना 2026',
    'पीएम किसान सम्मान निधि',
    'आयुष्मान भारत कार्ड',
    'पीएम आवास योजना',
    'लाडली बहना योजना',
    'मंईयां सम्मान योजना',
    'सरकारी योजना ऑनलाइन आवेदन',
    'sarkari yojana in hindi',
    'पात्रता जांच'
  ],
  alternates: {
    canonical: 'https://janlabh.in/hi',
    languages: {
      'en': 'https://janlabh.in',
      'hi': 'https://janlabh.in/hi',
      'x-default': 'https://janlabh.in',
    },
  },
  openGraph: {
    title: 'जनलाभ (JanLabh): सभी सरकारी योजनाएं, पात्रता जांच व ऑनलाइन आवेदन 2026',
    description: 'भारत के नागरिकों के लिए स्वतंत्र सरकारी योजना सूचना एवं पात्रता मार्गदर्शन पोर्टल।',
    url: 'https://janlabh.in/hi',
    siteName: 'JanLabh India',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function HindiHomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'JanLabh India',
    'alternateName': ['जनलाभ', 'JanLabh', 'JanLabh.in'],
    'url': 'https://janlabh.in/hi',
    'inLanguage': 'hi-IN',
    'description': 'भारत सरकार एवं राज्य सरकारों की जनकल्याणकारी योजनाओं की नागरिक सूचना मार्गदर्शिका।',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': 'https://janlabh.in/hi/schemes?search={search_term_string}',
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
      <HomePageClient initialLang="hi" />
    </>
  );
}
