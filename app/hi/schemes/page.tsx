import React from 'react';
import type { Metadata } from 'next';
import { SCHEMES } from '@/data/schemes';
import SchemesDirectoryClient from '@/app/schemes/SchemesDirectoryClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'सभी सरकारी योजनाएं 2026: नई लिस्ट, पात्रता नियम व ऑनलाइन आवेदन | JanLabh',
  description: 'भारत सरकार एवं सभी राज्य सरकारों की प्रमुख कल्याणकारी योजनाओं (पीएम किसान, आयुष्मान भारत, पीएम आवास, मंईयां सम्मान, विश्वकर्मा योजना) की पूरी जानकारी, पात्रता व आवेदन लिंक।',
  keywords: [
    'सभी सरकारी योजनाएं',
    'सरकारी योजना लिस्ट 2026',
    'पीएम योजना लिस्ट',
    'केंद्र सरकार की योजनाएं',
    'राज्य सरकार की योजनाएं',
    'सरकारी सब्सिडी योजना',
    'डीबीटी योजना सूची'
  ],
  alternates: {
    canonical: 'https://janlabh.in/hi/schemes',
    languages: {
      'en': 'https://janlabh.in/schemes',
      'hi': 'https://janlabh.in/hi/schemes',
      'x-default': 'https://janlabh.in/schemes',
    },
  },
  openGraph: {
    title: 'सभी सरकारी योजनाएं 2026 | JanLabh',
    description: 'भारत सरकार एवं सभी राज्य सरकारों की प्रमुख कल्याणकारी योजनाओं की प्रामाणिक सूची, पात्रता व आवेदन लिंक।',
    url: 'https://janlabh.in/hi/schemes',
    siteName: 'JanLabh.in',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function HindiSchemesPage() {
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
            'name': 'सभी योजनाएं',
            'item': 'https://janlabh.in/hi/schemes',
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        'name': 'सभी सरकारी योजनाएं 2026',
        'url': 'https://janlabh.in/hi/schemes',
        'description': 'भारत सरकार एवं सभी राज्य सरकारों की प्रमुख कल्याणकारी योजनाओं की प्रामाणिक डायरेक्टरी।',
        'mainEntity': {
          '@type': 'ItemList',
          'numberOfItems': SCHEMES.length,
          'itemListElement': SCHEMES.map((scheme, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': scheme.title_hi,
            'url': `https://janlabh.in/hi/schemes/${scheme.slug}`,
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
      <SchemesDirectoryClient schemes={SCHEMES} initialLang="hi" />
    </>
  );
}
