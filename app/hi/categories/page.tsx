import React from 'react';
import type { Metadata } from 'next';
import { CATEGORIES } from '@/data/categories';
import { SCHEMES } from '@/data/schemes';
import CategoriesDirectoryClient from '@/app/categories/CategoriesDirectoryClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'सरकारी योजना श्रेणियां 2026: किसान, महिला, छात्र, स्वास्थ्य व आवास | JanLabh',
  description: 'सरकारी जनकल्याण योजनाओं की संपूर्ण श्रेणी सूची। किसान कल्याण, महिला सशक्तिकरण, छात्रवृत्ति, आयुष्मान भारत स्वास्थ्य कार्ड, आवास योजना एवं पेंशन की जानकारी हिंदी में।',
  keywords: [
    'सरकारी योजना श्रेणियां',
    'किसान योजनाएं 2026',
    'महिला सशक्तिकरण योजना',
    'छात्रवृत्ति योजना',
    'स्वास्थ्य बीमा योजना',
    'आवास योजना',
    'पेंशन योजना',
    'sarkari yojana categories'
  ],
  alternates: {
    canonical: 'https://janlabh.in/hi/categories',
    languages: {
      'en': 'https://janlabh.in/categories',
      'hi': 'https://janlabh.in/hi/categories',
      'x-default': 'https://janlabh.in/categories',
    },
  },
  openGraph: {
    title: 'सरकारी योजना श्रेणियां 2026 | JanLabh',
    description: 'अपनी आवश्यकता के अनुसार सरकारी योजनाएं खोजें। किसानों, महिलाओं, छात्रों और बुजुर्गों के लिए प्रमुख योजनाएं।',
    url: 'https://janlabh.in/hi/categories',
    siteName: 'JanLabh.in',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function HindiCategoriesDirectoryPage() {
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
            'name': 'श्रेणियां',
            'item': 'https://janlabh.in/hi/categories',
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        'name': 'सरकारी योजना श्रेणियां 2026',
        'url': 'https://janlabh.in/hi/categories',
        'description': 'भारत सरकार एवं राज्य सरकारों की कल्याणकारी योजनाओं की श्रेणी सूची।',
        'mainEntity': {
          '@type': 'ItemList',
          'numberOfItems': CATEGORIES.length,
          'itemListElement': CATEGORIES.map((cat, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': cat.name_hi || cat.name_en,
            'url': `https://janlabh.in/hi/categories/${cat.id}`,
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
      <CategoriesDirectoryClient
        categories={CATEGORIES}
        schemes={SCHEMES}
        initialLang="hi"
      />
    </>
  );
}
