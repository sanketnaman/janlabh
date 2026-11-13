import React from 'react';
import type { Metadata } from 'next';
import { ARTICLES } from '@/data/articles';
import ArticlesDirectoryClient from './ArticlesDirectoryClient';

export const metadata: Metadata = {
  title: 'Citizen Guides & Problem Solving Articles 2026: Forms, NPCI & Status | JanLabh',
  description: 'Verified step-by-step citizen guides for Indian government schemes. Learn how to link bank Aadhaar NPCI, resolve form rejections, download scheme list PDFs, and apply online.',
  keywords: [
    'government scheme guides',
    'how to link aadhar with npci mapper',
    'bank dbt link online status',
    'list of government schemes in jharkhand pdf',
    'sarkari yojana form download',
    'scheme problem solution'
  ],
  alternates: {
    canonical: 'https://janlabh.in/articles',
    languages: {
      'en': 'https://janlabh.in/articles',
      'hi': 'https://janlabh.in/hi/articles',
      'x-default': 'https://janlabh.in/articles',
    },
  },
  openGraph: {
    title: 'Citizen Guides & Articles: How-To, Solutions & Forms | JanLabh',
    description: 'Practical walkthroughs solving real citizen problems: Aadhaar NPCI bank mapping, form rejection fixes, and scheme directory downloads.',
    url: 'https://janlabh.in/articles',
    siteName: 'JanLabh India',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ArticlesPage() {
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
            'name': 'Articles & Guides',
            'item': 'https://janlabh.in/articles',
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        'name': 'Citizen Guides & How-To Articles 2026',
        'url': 'https://janlabh.in/articles',
        'description': 'Verified walkthroughs and solutions for Indian government welfare benefits.',
        'mainEntity': {
          '@type': 'ItemList',
          'numberOfItems': ARTICLES.length,
          'itemListElement': ARTICLES.map((article, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
            'name': article.title_en,
            'url': `https://janlabh.in/articles/${article.slug}`,
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
      <ArticlesDirectoryClient articles={ARTICLES} initialLang="en" />
    </>
  );
}
