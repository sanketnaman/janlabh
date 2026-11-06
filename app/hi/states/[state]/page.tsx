import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { STATES } from '@/data/categories';
import { SCHEMES } from '@/data/schemes';
import StateDetailView from '@/app/states/[state]/StateDetailView';

interface HindiStatePageProps {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return STATES.map((st) => ({
    state: st.id,
  }));
}

export async function generateMetadata({ params }: HindiStatePageProps): Promise<Metadata> {
  const { state: stateId } = await params;
  const stateInfo = STATES.find((s) => s.id === stateId);

  if (!stateInfo) {
    return {
      title: 'राज्य नहीं मिला | JanLabh',
    };
  }

  const isAllIndia = stateInfo.id === 'all-india';
  const pageTitle = isAllIndia
    ? 'केंद्र सरकार की योजनाएं 2026: सभी केंद्रीय योजनाओं की सूची व पात्रता | JanLabh'
    : `${stateInfo.name_hi} सरकारी योजनाएं 2026: नई लिस्ट, पात्रता नियम व आवेदन लिंक | JanLabh`;

  const pageDescription = isAllIndia
    ? 'भारत सरकार की सभी प्रमुख केंद्रीय कल्याणकारी योजनाओं (पीएम किसान, आयुष्मान भारत, पीएम आवास, विश्वकर्मा) की प्रामाणिक जानकारी, पात्रता व लाभ।'
    : `${stateInfo.name_hi} (राजधानी: ${stateInfo.capital_hi}) की सभी राज्य और केंद्रीय कल्याणकारी योजनाओं की सूची, नकद सहायता, पात्रता व आधिकारिक सरकारी लिंक।`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      `${stateInfo.name_hi} सरकारी योजनाएं`,
      `${stateInfo.name_hi} योजना लिस्ट 2026`,
      `${stateInfo.name_en} government schemes in hindi`,
      `${stateInfo.name_hi} कल्याणकारी योजनाएं`,
      'सरकारी योजना'
    ],
    alternates: {
      canonical: `https://janlabh.in/hi/states/${stateInfo.id}`,
      languages: {
        'en': `https://janlabh.in/states/${stateInfo.id}`,
        'hi': `https://janlabh.in/hi/states/${stateInfo.id}`,
        'x-default': `https://janlabh.in/states/${stateInfo.id}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://janlabh.in/hi/states/${stateInfo.id}`,
      siteName: 'JanLabh.in',
      locale: 'hi_IN',
      type: 'website',
    },
  };
}

export default async function HindiStatePage({ params }: HindiStatePageProps) {
  const { state: stateId } = await params;
  const stateInfo = STATES.find((s) => s.id === stateId);

  if (!stateInfo) {
    notFound();
  }

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
            'name': 'होम',
            'item': 'https://janlabh.in/hi',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'राज्य हब',
            'item': 'https://janlabh.in/hi/states',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': stateInfo.name_hi,
            'item': `https://janlabh.in/hi/states/${stateInfo.id}`,
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        'name': `${stateInfo.name_hi} सरकारी योजनाएं 2026`,
        'url': `https://janlabh.in/hi/states/${stateInfo.id}`,
        'description': stateInfo.description_hi,
        'mainEntity': {
          '@type': 'ItemList',
          'numberOfItems': stateSchemes.length,
          'itemListElement': stateSchemes.map((scheme, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
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
      <StateDetailView stateInfo={stateInfo} schemes={stateSchemes} initialLang="hi" />
    </>
  );
}
