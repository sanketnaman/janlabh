import type { Metadata } from 'next';
import AboutView from '@/app/about/AboutView';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'जनलाभ के बारे में, संपादकीय मानक एवं सत्यापन नीति | JanLabh.in',
  description: 'जनलाभ (JanLabh.in) के बारे में जानें। हमारा स्वतंत्र मिशन, संपादकीय सत्यनिष्ठा, 5-चरणीय तथ्य-जांच प्रक्रिया, संस्थापक परिचय एवं पारदर्शी नागरिक मार्गदर्शन।',
  alternates: {
    canonical: 'https://janlabh.in/hi/about',
    languages: {
      'en': 'https://janlabh.in/about',
      'hi': 'https://janlabh.in/hi/about',
      'x-default': 'https://janlabh.in/about',
    },
  },
  openGraph: {
    title: 'जनलाभ के बारे में, संपादकीय मानक एवं सत्यापन | JanLabh.in',
    description: 'जनलाभ (JanLabh.in) के बारे में जानें। हमारा स्वतंत्र मिशन, संपादकीय सत्यनिष्ठा, 5-चरणीय तथ्य-जांच प्रक्रिया, संस्थापक परिचय एवं पारदर्शी नागरिक मार्गदर्शन।',
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
    'description': 'जनलाभ का स्वतंत्र मिशन, संपादकीय मानक, 5-चरणीय तथ्य-जांच पद्धति एवं नागरिक सेवा मार्गदर्शन।',
    'url': 'https://janlabh.in/hi/about',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'JanLabh India',
      'url': 'https://janlabh.in',
      'email': 'contact@janlabh.in',
      'founder': {
        '@type': 'Person',
        'name': 'Sanket Sinha',
        'jobTitle': 'संस्थापक एवं संपादक',
        'email': 'contact@janlabh.in',
        'nationality': 'Indian',
      },
      'knowsAbout': [
        'प्रत्यक्ष लाभ अंतरण (DBT)',
        'भारत सरकार की कल्याणकारी योजनाएं',
        'पीएम किसान सम्मान निधि',
        'लाड़ली बहना योजना',
        'आयुष्मान भारत'
      ]
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
