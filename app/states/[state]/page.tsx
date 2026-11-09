import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { STATES } from '@/data/categories';
import { SCHEMES } from '@/data/schemes';
import StateDetailView from './StateDetailView';

interface StatePageProps {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return STATES.map((st) => ({
    state: st.id,
  }));
}

export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const { state: stateId } = await params;
  const stateInfo = STATES.find((s) => s.id === stateId);

  if (!stateInfo) {
    return {
      title: 'State Not Found | JanLabh',
    };
  }

  const isAllIndia = stateInfo.id === 'all-india';
  const pageTitle = isAllIndia
    ? 'Central Government Schemes (All India) 2026: List, Eligibility & Apply | JanLabh'
    : `${stateInfo.name_en} Government Schemes 2026: State & Central Yojana List | JanLabh`;

  const pageDescription = isAllIndia
    ? 'Discover all Central Government welfare schemes in India (PM Kisan, Ayushman Bharat, PM Awas, Vishwakarma). Check eligibility, subsidy amounts, and apply online.'
    : `Explore all government schemes in ${stateInfo.name_en} (${stateInfo.capital_en}). Check state welfare programs, direct cash benefits, eligibility rules, and official portal links.`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      `${stateInfo.name_en} government schemes`,
      `${stateInfo.name_en} yojana list 2026`,
      `${stateInfo.name_hi} सरकारी योजना`,
      `${stateInfo.name_en} welfare schemes`,
      `${stateInfo.name_en} state benefits`,
      'sarkari yojana'
    ],
    alternates: {
      canonical: `https://janlabh.in/states/${stateInfo.id}`,
      languages: {
        'en': `https://janlabh.in/states/${stateInfo.id}`,
        'hi': `https://janlabh.in/hi/states/${stateInfo.id}`,
        'x-default': `https://janlabh.in/states/${stateInfo.id}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://janlabh.in/states/${stateInfo.id}`,
      siteName: 'JanLabh India',
      locale: 'en_IN',
      type: 'website',
    },
  };
}

export default async function StatePage({ params }: StatePageProps) {
  const { state: stateId } = await params;
  const stateInfo = STATES.find((s) => s.id === stateId);

  if (!stateInfo) {
    notFound();
  }

  // Filter schemes: state-specific schemes PLUS central flagship schemes active in the state
  const stateSchemes = SCHEMES.filter(
    (s) =>
      s.state === stateInfo.id ||
      (stateInfo.id !== 'all-india' && s.state === 'all-india') ||
      (stateInfo.id === 'all-india' && s.state === 'all-india')
  );

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
          {
            '@type': 'ListItem',
            'position': 3,
            'name': stateInfo.name_en,
            'item': `https://janlabh.in/states/${stateInfo.id}`,
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        'name': `${stateInfo.name_en} Government Schemes 2026`,
        'url': `https://janlabh.in/states/${stateInfo.id}`,
        'description': stateInfo.description_en,
        'mainEntity': {
          '@type': 'ItemList',
          'numberOfItems': stateSchemes.length,
          'itemListElement': stateSchemes.map((scheme, idx) => ({
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
      <StateDetailView stateInfo={stateInfo} schemes={stateSchemes} initialLang="en" />
    </>
  );
}
