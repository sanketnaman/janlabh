import type { Metadata } from 'next';
import DisclaimerView from '@/app/disclaimer/DisclaimerView';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'वैधानिक अस्वीकरण | JanLabh.in',
  description: 'जनलाभ (JanLabh.in) का आधिकारिक वैधानिक गैर-सरकारी अस्वीकरण। पारदर्शी नागरिक मार्गदर्शन, शून्य सरकारी संबद्धता एवं आधिकारिक स्रोत दिशा-निर्देश।',
  alternates: {
    canonical: 'https://janlabh.in/hi/disclaimer',
    languages: {
      'en': 'https://janlabh.in/disclaimer',
      'hi': 'https://janlabh.in/hi/disclaimer',
      'x-default': 'https://janlabh.in/disclaimer',
    },
  },
  openGraph: {
    title: 'वैधानिक अस्वीकरण | JanLabh.in',
    description: 'जनलाभ (JanLabh.in) का आधिकारिक वैधानिक गैर-सरकारी अस्वीकरण। पारदर्शी नागरिक मार्गदर्शन, शून्य सरकारी संबद्धता एवं आधिकारिक स्रोत दिशा-निर्देश।',
    url: 'https://janlabh.in/hi/disclaimer',
    siteName: 'JanLabh India',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function HindiDisclaimerPage() {
  return <DisclaimerView forcedLang="hi" />;
}
