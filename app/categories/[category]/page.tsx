import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CATEGORIES } from '@/data/categories';
import { SCHEMES } from '@/data/schemes';
import CategoryDetailView from './CategoryDetailView';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.id,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categoryId } = await params;
  const categoryInfo = CATEGORIES.find((c) => c.id === categoryId);

  if (!categoryInfo) {
    return {
      title: 'Category Not Found | JanLabh',
    };
  }

  const pageTitle = `${categoryInfo.name_en} Government Schemes 2026: List, Eligibility & Apply | JanLabh`;
  const pageDescription = `Explore all government schemes for ${categoryInfo.name_en}. Check eligibility criteria, direct cash subsidies, required documents, and official application portals.`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      `${categoryInfo.name_en} schemes`,
      `${categoryInfo.name_en} yojana list 2026`,
      `${categoryInfo.name_hi} सरकारी योजनाएं`,
      `${categoryInfo.name_en} government subsidies`,
      'sarkari yojana'
    ],
    alternates: {
      canonical: `https://janlabh.in/categories/${categoryInfo.id}`,
      languages: {
        'en': `https://janlabh.in/categories/${categoryInfo.id}`,
        'hi': `https://janlabh.in/hi/categories/${categoryInfo.id}`,
        'x-default': `https://janlabh.in/categories/${categoryInfo.id}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://janlabh.in/categories/${categoryInfo.id}`,
      siteName: 'JanLabh India',
      locale: 'en_IN',
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
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
            'name': 'Home',
            'item': 'https://janlabh.in',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Categories',
            'item': 'https://janlabh.in/categories',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': categoryInfo.name_en,
            'item': `https://janlabh.in/categories/${categoryInfo.id}`,
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        'name': `${categoryInfo.name_en} Government Schemes 2026`,
        'url': `https://janlabh.in/categories/${categoryInfo.id}`,
        'description': categoryInfo.description_en,
        'mainEntity': {
          '@type': 'ItemList',
          'numberOfItems': categorySchemes.length,
          'itemListElement': categorySchemes.map((scheme, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
            'name': scheme.title_en,
            'url': `https://janlabh.in/schemes/${scheme.slug}`,
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
        initialLang="en"
      />
    </>
  );
}
