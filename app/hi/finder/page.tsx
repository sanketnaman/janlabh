import React from 'react';
import type { Metadata } from 'next';
import { SCHEMES } from '@/data/schemes';
import FinderClient from '@/app/finder/FinderClient';

export const metadata: Metadata = {
  title: 'सरकारी योजना खोजें: अपनी पात्रता के अनुसार योजनाएं जानें | Scheme Finder | JanLabh',
  description: 'स्मार्ट योजना खोज टूल: अपना राज्य, आयु, पेशा और वर्ग चुनें। आपके लिए उपयुक्त केंद्रीय एवं राज्य सरकारी योजनाओं (पीएम किसान, लाडली बहना, आवास) की तुरंत सूची प्राप्त करें।',
  keywords: [
    'सरकारी योजना खोजें',
    'योजना पात्रता सर्च',
    'स्कीम फाइंडर टूल',
    'पीएम योजना सर्च',
    'सर्च सरकारी योजना'
  ],
  alternates: {
    canonical: 'https://janlabh.in/hi/finder',
    languages: {
      'en': 'https://janlabh.in/finder',
      'hi': 'https://janlabh.in/hi/finder',
      'x-default': 'https://janlabh.in/finder',
    },
  },
  openGraph: {
    title: 'सरकारी योजना खोजें: अपनी पात्रता के अनुसार योजनाएं जानें | JanLabh',
    description: '3 आसान चरणों में अपने लिए योग्य सरकारी योजनाएं खोजें।',
    url: 'https://janlabh.in/hi/finder',
    siteName: 'JanLabh.in',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function HindiFinderPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'JanLabh Scheme Finder Tool (Hindi)',
    'url': 'https://janlabh.in/hi/finder',
    'applicationCategory': 'GovernmentApplication',
    'description': 'नागरिकों के लिए स्मार्ट सरकारी योजना पात्रता खोज टूल।',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FinderClient schemes={SCHEMES} initialLang="hi" />
    </>
  );
}
