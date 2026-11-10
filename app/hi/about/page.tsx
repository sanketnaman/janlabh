import type { Metadata } from 'next';
import AboutView from '@/app/about/AboutView';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'जनलाभ के बारे में एवं संपादकीय मानक | JanLabh.in',
  description: 'जनलाभ (JanLabh.in) के बारे में जानें। हमारा मिशन, संपादकीय सिद्धांत, तथ्य-जांच प्रक्रिया एवं आधिकारिक नागरिक सूचना मार्गदर्शन।',
  alternates: {
    canonical: 'https://janlabh.in/hi/about',
    languages: {
      'en': 'https://janlabh.in/about',
      'hi': 'https://janlabh.in/hi/about',
      'x-default': 'https://janlabh.in/about',
    },
  },
  openGraph: {
    title: 'जनलाभ के बारे में एवं संपादकीय मानक | JanLabh.in',
    description: 'जनलाभ (JanLabh.in) के बारे में जानें। हमारा मिशन, संपादकीय सिद्धांत, तथ्य-जांच प्रक्रिया एवं आधिकारिक नागरिक सूचना मार्गदर्शन।',
    url: 'https://janlabh.in/hi/about',
    siteName: 'JanLabh India',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function HindiAboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': 'जनलाभ के बारे में (About JanLabh)',
    'description': 'जनलाभ का परिचय, संपादकीय मानक, तथ्य-जांच पद्धति एवं नागरिक सेवा मार्गदर्शन।',
    'url': 'https://janlabh.in/hi/about',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'JanLabh India',
      'url': 'https://janlabh.in',
      'email': 'contact@janlabh.in',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutView forcedLang="hi" />
    </>
  );
}
