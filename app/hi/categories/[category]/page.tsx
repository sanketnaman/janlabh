import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CATEGORIES } from '@/data/categories';
import { SCHEMES } from '@/data/schemes';
import CategoryDetailView from '@/app/categories/[category]/CategoryDetailView';

interface HindiCategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.id,
  }));
}

export async function generateMetadata({ params }: HindiCategoryPageProps): Promise<Metadata> {
  const { category: categoryId } = await params;
  const categoryInfo = CATEGORIES.find((c) => c.id === categoryId);

  if (!categoryInfo) {
    return {
      title: 'श्रेणी नहीं मिली | JanLabh',
    };
  }

  const pageTitle = `${categoryInfo.name_hi} सरकारी योजनाएं 2026: पात्रता, लाभ और ऑनलाइन आवेदन | JanLabh`;
  const pageDescription = `${categoryInfo.name_hi} से संबंधित सभी केंद्रीय और राज्य सरकार की कल्याणकारी योजनाएं। प्रत्यक्ष नकद लाभ, सब्सिडी, पात्रता मानदंड और ऑनलाइन आवेदन प्रक्रिया।`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      `${categoryInfo.name_hi} सरकारी योजनाएं`,
      `${categoryInfo.name_hi} योजना लिस्ट 2026`,
      `${categoryInfo.name_en} schemes`,
      'सरकारी योजना',
      'पात्रता नियम'
    ],
    alternates: {
      canonical: `https://janlabh.in/hi/categories/${categoryInfo.id}`,
      languages: {
        'en': `https://janlabh.in/categories/${categoryInfo.id}`,
        'hi': `https://janlabh.in/hi/categories/${categoryInfo.id}`,
        'x-default': `https://janlabh.in/categories/${categoryInfo.id}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://janlabh.in/hi/categories/${categoryInfo.id}`,
      siteName: 'JanLabh.in',
      locale: 'hi_IN',
      type: 'website',
    },
  };
}

export default async function HindiCategoryPage({ params }: HindiCategoryPageProps) {
  const { category: categoryId } = await params;
  const categoryInfo = CATEGORIES.find((c) => c.id === categoryId);

  if (!categoryInfo) {
    notFound();
  }

  const categorySchemes = SCHEMES.filter((s) => s.category === categoryInfo.id);

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
          {
            '@type': 'ListItem',
            'position': 3,
            'name': categoryInfo.name_hi,
            'item': `https://janlabh.in/hi/categories/${categoryInfo.id}`,
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        'name': `${categoryInfo.name_hi} सरकारी योजनाएं 2026`,
        'url': `https://janlabh.in/hi/categories/${categoryInfo.id}`,
        'description': categoryInfo.description_hi,
        'mainEntity': {
          '@type': 'ItemList',
          'numberOfItems': categorySchemes.length,
          'itemListElement': categorySchemes.map((scheme, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
            'name': scheme.title_hi || scheme.title_en,
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
      <CategoryDetailView
        categoryInfo={categoryInfo}
        schemes={categorySchemes}
        initialLang="hi"
      />
    </>
  );
}
