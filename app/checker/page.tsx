import React from 'react';
import type { Metadata } from 'next';
import { SCHEMES } from '@/data/schemes';
import CheckerClient from './CheckerClient';

export const metadata: Metadata = {
  title: 'Check Scheme Eligibility 2026: Instant Calculator | सरकारी योजना पात्रता जांचें | JanLabh',
  description: 'Check your eligibility for PM Kisan, Ayushman Bharat, PM Awas Yojana, Ladli Behna, Maiya Samman, and Vishwakarma schemes. Avoid application rejections with official criteria.',
  keywords: [
    'scheme eligibility checker',
    'check yojana eligibility',
    'PM kisan eligibility check',
    'Ayushman card eligibility test',
    'पात्रता जांच कैलकुलेटर',
    'सरकारी योजना पात्रता'
  ],
  alternates: {
    canonical: 'https://janlabh.in/checker',
    languages: {
      'en': 'https://janlabh.in/checker',
      'hi': 'https://janlabh.in/hi/checker',
      'x-default': 'https://janlabh.in/checker',
    },
  },
  openGraph: {
    title: 'Check Government Scheme Eligibility 2026 | JanLabh',
    description: 'Instant multi-point eligibility validation for Indian government welfare schemes.',
    url: 'https://janlabh.in/checker',
    siteName: 'JanLabh.in',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CheckerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'JanLabh Scheme Eligibility Calculator',
    'url': 'https://janlabh.in/checker',
    'applicationCategory': 'BusinessApplication',
    'description': 'Eligibility calculator for Indian central and state government schemes.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CheckerClient schemes={SCHEMES} initialLang="en" />
    </>
  );
}
