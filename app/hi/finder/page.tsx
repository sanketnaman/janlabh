import React from 'react';
import type { Metadata } from 'next';
import FinderClient from '@/app/finder/FinderClient';
import { FINDER_FAQS } from '@/app/finder/finderData';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'सरकारी योजना खोजें 2026: अपनी पात्रता के अनुसार योजनाएं जानें | Scheme Finder | JanLabh',
  description: 'स्मार्ट योजना खोज टूल: अपना राज्य, आयु, पेशा और आवश्यकता चुनें। आपके लिए उपयुक्त केंद्रीय एवं राज्य सरकारी योजनाओं (पीएम किसान, लाडली बहना, आवास, छात्रवृत्ति) की तुरंत सूची प्राप्त करें। शून्य डेटा संग्रहण और 100% निजता सुरक्षा।',
  keywords: [
    'सरकारी योजना खोजें 2026',
    'योजना पात्रता सर्च',
    'स्कीम फाइंडर टूल',
    'पीएम योजना सर्च',
    'सर्च सरकारी योजना',
    'किसान सरकारी योजना खोजें',
    'महिला सरकारी योजना पात्रता',
    'छात्रवृत्ति योजना फाइंडर',
    'डीबीटी योजना पात्रता चेक',
    'sarkari yojana finder hindi'
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
    description: '4 आसान चरणों में अपने लिए योग्य सरकारी योजनाएं खोजें। त्वरित पात्रता अनुशंसा और 100% डेटा गोपनीयता।',
    url: 'https://janlabh.in/hi/finder',
    siteName: 'JanLabh India',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function HindiFinderPage() {
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
            'name': 'स्मार्ट योजना खोजक',
            'item': 'https://janlabh.in/hi/finder',
          },
        ],
      },
      {
        '@type': 'WebApplication',
        'name': 'JanLabh Scheme Finder Tool (Hindi)',
        'url': 'https://janlabh.in/hi/finder',
        'applicationCategory': 'GovernmentApplication',
        'operatingSystem': 'सभी आधुनिक वेब ब्राउज़र',
        'description': 'भारतीय नागरिकों के लिए केंद्रीय एवं राज्य कल्याणकारी योजनाओं की खोज हेतु स्मार्ट पात्रता अनुशंसा इंजन।',
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
          'name': faq.q_hi,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.a_hi,
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
      <FinderClient initialLang="hi" />
    </>
  );
}
