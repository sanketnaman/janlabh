import React from 'react';
import type { Metadata } from 'next';
import { ARTICLES } from '@/data/articles';
import ArticlesDirectoryClient from '@/app/articles/ArticlesDirectoryClient';

export const metadata: Metadata = {
  title: 'नागरिक गाइड्स व समाधान 2026: सरकारी योजना फॉर्म, NPCI व स्टेटस | JanLabh',
  description: 'सरकारी योजनाओं के सरल समाधान व स्टेप-बाय-स्टेप गाइड्स: बैंक खाते में आधार NPCI / DBT लिंक कैसे करें, योजना रिजेक्शन कैसे ठीक करें, पीडीएफ लिस्ट डाउनलोड व फॉर्म गाइड।',
  keywords: [
    'सरकारी योजना समाधान',
    'बैंक खाते में आधार एनपीसीआई लिंक कैसे करें',
    'डीबीटी एक्टिव कैसे करें',
    'झारखंड सरकारी योजना लिस्ट 2026 पीडीएफ',
    'योजना फॉर्म डाउनलोड',
    'सरकारी योजना गाइड'
  ],
  alternates: {
    canonical: 'https://janlabh.in/hi/articles',
    languages: {
      'en': 'https://janlabh.in/articles',
      'hi': 'https://janlabh.in/hi/articles',
      'x-default': 'https://janlabh.in/articles',
    },
  },
  openGraph: {
    title: 'नागरिक समाधान केंद्र व गाइड्स: फॉर्म, समस्या निवारण व पीडीएफ | JanLabh',
    description: 'बैंक खाते में DBT लिंक, फॉर्म रिजेक्शन सुधार, योजना लिस्ट और ऑनलाइन आवेदन की पूरी जानकारी आसान भाषा में।',
    url: 'https://janlabh.in/hi/articles',
    siteName: 'JanLabh India',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function HindiArticlesPage() {
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
            'name': 'गाइड्स व समाधान',
            'item': 'https://janlabh.in/hi/articles',
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        'name': 'नागरिक गाइड्स व सरकारी योजना समाधान 2026',
        'url': 'https://janlabh.in/hi/articles',
        'description': 'सरकारी योजनाओं के सरल समाधान व स्टेप-बाय-स्टेप गाइड्स।',
        'mainEntity': {
          '@type': 'ItemList',
          'numberOfItems': ARTICLES.length,
          'itemListElement': ARTICLES.map((article, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
            'name': article.title_hi,
            'url': `https://janlabh.in/hi/articles/${article.slug}`,
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
      <ArticlesDirectoryClient articles={ARTICLES} initialLang="hi" />
    </>
  );
}
