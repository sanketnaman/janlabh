import React from 'react';
import type { Metadata } from 'next';
import { SCHEMES } from '@/data/schemes';
import CheckerClient from '@/app/checker/CheckerClient';

export const metadata: Metadata = {
  title: 'सरकारी योजना पात्रता जांचें 2026: कैलकुलेटर | Scheme Eligibility | JanLabh',
  description: 'पीएम किसान, आयुष्मान कार्ड, पीएम आवास योजना, लाडली बहना, मंईयां सम्मान योजना की ऑनलाइन पात्रता जांचें। 4-5 सीधे सवालों के जवाब देकर रिजेक्शन से बचें।',
  keywords: [
    'सरकारी योजना पात्रता जांचें',
    'योजना पात्रता कैलकुलेटर',
    'पीएम किसान पात्रता',
    'आयुष्मान कार्ड पात्रता चेक',
    'आवास योजना पात्रता 2026'
  ],
  alternates: {
    canonical: 'https://janlabh.in/hi/checker',
    languages: {
      'en': 'https://janlabh.in/checker',
      'hi': 'https://janlabh.in/hi/checker',
      'x-default': 'https://janlabh.in/checker',
    },
  },
  openGraph: {
    title: 'सरकारी योजना पात्रता जांचें 2026: कैलकुलेटर | JanLabh',
    description: 'आधिकारिक नियमों के आधार पर सरकारी योजनाओं के लिए अपनी पात्रता ऑनलाइन चेक करें।',
    url: 'https://janlabh.in/hi/checker',
    siteName: 'JanLabh.in',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function HindiCheckerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'JanLabh Scheme Eligibility Calculator (Hindi)',
    'url': 'https://janlabh.in/hi/checker',
    'applicationCategory': 'BusinessApplication',
    'description': 'सरकारी योजनाओं के लिए निःशुल्क ऑनलाइन पात्रता जांच कैलकुलेटर।',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CheckerClient schemes={SCHEMES} initialLang="hi" />
    </>
  );
}
