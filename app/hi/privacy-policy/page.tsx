import type { Metadata } from 'next';
import PrivacyPolicyView from '@/app/privacy-policy/PrivacyPolicyView';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'गोपनीयता नीति | JanLabh – सरकारी योजना व नागरिक लाभ',
  description: 'जनलाभ (JanLabh.in) की आधिकारिक गोपनीयता नीति। जानें हमारे शून्य व्यक्तिगत डेटा संकलन, गूगल एडसेंस कुकीज, विज्ञापन नीति एवं डेटा सुरक्षा मानक।',
  alternates: {
    canonical: 'https://janlabh.in/hi/privacy-policy',
    languages: {
      'en': 'https://janlabh.in/privacy-policy',
      'hi': 'https://janlabh.in/hi/privacy-policy',
      'x-default': 'https://janlabh.in/privacy-policy',
    },
  },
  openGraph: {
    title: 'गोपनीयता नीति | JanLabh – सरकारी योजना व नागरिक लाभ',
    description: 'जनलाभ (JanLabh.in) की आधिकारिक गोपनीयता नीति। जानें हमारे शून्य व्यक्तिगत डेटा संकलन, गूगल एडसेंस कुकीज, विज्ञापन नीति एवं डेटा सुरक्षा मानक।',
    url: 'https://janlabh.in/hi/privacy-policy',
    siteName: 'JanLabh India',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function HindiPrivacyPolicyPage() {
  return <PrivacyPolicyView forcedLang="hi" />;
}
