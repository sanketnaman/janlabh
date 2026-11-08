import React from 'react';
import type { Metadata } from 'next';
import { CATEGORIES } from '@/data/categories';
import { SCHEMES } from '@/data/schemes';
import CategoriesDirectoryClient from './CategoriesDirectoryClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Government Scheme Categories 2026: Farmers, Women, Students, Health & Housing | JanLabh',
  description: 'Browse government welfare schemes by category: Farmers & Agriculture, Women Empowerment, Students, Scholarships, Health (Ayushman Bharat), Housing (PMAY), Pensions, and Employment.',
  keywords: [
    'government scheme categories',
    'farmer schemes 2026',
    'women welfare schemes',
    'student scholarships India',
    'health insurance schemes',
    'housing subsidy schemes',
    'pension schemes',
    'सरकारी योजना श्रेणियां'
  ],
  alternates: {
    canonical: 'https://janlabh.in/categories',
    languages: {
      'en': 'https://janlabh.in/categories',
      'hi': 'https://janlabh.in/hi/categories',
      'x-default': 'https://janlabh.in/categories',
    },
  },
  openGraph: {
    title: 'Government Scheme Categories 2026 | JanLabh',
    description: 'Find welfare schemes tailored to your profile: farmers, women, students, seniors, artisans, and low-income families.',
    url: 'https://janlabh.in/categories',
    siteName: 'JanLabh.in',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CategoriesDirectoryPage() {
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
            'name': 'Categories',
            'item': 'https://janlabh.in/categories',
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        'name': 'Government Scheme Categories 2026',
        'url': 'https://janlabh.in/categories',
        'description': 'Browse government welfare schemes categorized by beneficiary sector.',
        'mainEntity': {
          '@type': 'ItemList',
          'numberOfItems': CATEGORIES.length,
          'itemListElement': CATEGORIES.map((cat, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': cat.name_en,
            'url': `https://janlabh.in/categories/${cat.id}`,
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
        initialLang="en"
      />
    </>
  );
}
