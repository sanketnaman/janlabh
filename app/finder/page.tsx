import React from 'react';
import type { Metadata } from 'next';
import FinderClient from './FinderClient';
import { FINDER_FAQS } from './finderData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Government Scheme Finder 2026: Discover Eligible Welfare Schemes by Age & State | JanLabh',
  description: 'Use JanLabh’s smart rule-based scheme finder to discover central and state government schemes tailored to your age, state, profession, and family income. Instant, transparent eligibility match with zero data collection.',
  keywords: [
    'scheme finder 2026',
    'find government schemes',
    'eligibility search tool',
    'sarkari yojana finder',
    'how to find government schemes for farmers',
    'women welfare schemes finder',
    'student scholarship finder tool',
    'dbt scheme eligibility finder',
    'सरकारी योजना खोजें',
    'सरकारी योजना पात्रता 2026'
  ],
  alternates: {
    canonical: 'https://janlabh.in/finder',
    languages: {
      'en': 'https://janlabh.in/finder',
      'hi': 'https://janlabh.in/hi/finder',
      'x-default': 'https://janlabh.in/finder',
    },
  },
  openGraph: {
    title: 'Government Scheme Finder: Discover Eligible Welfare Schemes | JanLabh',
    description: 'Find welfare schemes tailored to your profile in 4 simple steps. Instant eligibility recommendations with 100% data privacy.',
    url: 'https://janlabh.in/finder',
    siteName: 'JanLabh India',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function FinderPage() {
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
            'name': 'Scheme Finder',
            'item': 'https://janlabh.in/finder',
          },
        ],
      },
      {
        '@type': 'WebApplication',
        'name': 'JanLabh Scheme Finder Tool',
        'url': 'https://janlabh.in/finder',
        'applicationCategory': 'GovernmentApplication',
        'operatingSystem': 'All modern web browsers',
        'description': 'Interactive eligibility and scheme discovery engine for Indian citizens across central and state welfare programs.',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'INR',
        },
      },
      {
        '@type': 'FAQPage',
        'mainEntity': FINDER_FAQS.map((faq) => ({
          '@type': 'Question',
          'name': faq.q_en,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.a_en,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FinderClient initialLang="en" />
    </>
  );
}
