import type { Metadata } from 'next';
import TermsView from '@/app/terms/TermsView';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'उपयोग की शर्तें एवं वैधानिक अस्वीकरण | JanLabh',
  description: 'जनलाभ (JanLabh.in) के उपयोग की शर्तें व वैधानिक अस्वीकरण। जानें हमारी स्वतंत्र स्थिति, गैर-सरकारी स्वरूप एवं सामग्री उपयोग के नियम।',
  alternates: {
    canonical: 'https://janlabh.in/hi/terms',
    languages: {
      'en': 'https://janlabh.in/terms',
      'hi': 'https://janlabh.in/hi/terms',
      'x-default': 'https://janlabh.in/terms',
    },
  },
  openGraph: {
    title: 'उपयोग की शर्तें एवं वैधानिक अस्वीकरण | JanLabh',
    description: 'जनलाभ (JanLabh.in) के उपयोग की शर्तें व वैधानिक अस्वीकरण। जानें हमारी स्वतंत्र स्थिति, गैर-सरकारी स्वरूप एवं सामग्री उपयोग के नियम।',
    url: 'https://janlabh.in/hi/terms',
    siteName: 'JanLabh India',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function HindiTermsPage() {
  return <TermsView forcedLang="hi" />;
}
