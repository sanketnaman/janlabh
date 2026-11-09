import type { Metadata } from 'next';
import ContactView from '@/app/contact/ContactView';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'जनलाभ से संपर्क करें | त्रुटि सुधार या सुझाव',
  description: 'जनलाभ से संपर्क करें। किसी योजना में त्रुटि, पुराने नियम या टूटे लिंक की सूचना दें या अपना सुझाव भेजें। आधिकारिक स्रोतों से त्वरित सत्यापन।',
  alternates: {
    canonical: 'https://janlabh.in/hi/contact',
    languages: {
      'en': 'https://janlabh.in/contact',
      'hi': 'https://janlabh.in/hi/contact',
      'x-default': 'https://janlabh.in/contact',
    },
  },
  openGraph: {
    title: 'जनलाभ से संपर्क करें | त्रुटि सुधार या सुझाव',
    description: 'जनलाभ से संपर्क करें। किसी योजना में त्रुटि, पुराने नियम या टूटे लिंक की सूचना दें या अपना सुझाव भेजें।',
    url: 'https://janlabh.in/hi/contact',
    siteName: 'जनलाभ (JanLabh)',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function HindiContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'जनलाभ से संपर्क करें (Contact JanLabh)',
    'description': 'जनलाभ से संपर्क करें। किसी योजना में त्रुटि सुधार या सुझाव भेजें। आधिकारिक स्रोतों से त्वरित सत्यापन।',
    'url': 'https://janlabh.in/hi/contact',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'JanLabh',
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
      <ContactView forcedLang="hi" />
    </>
  );
}
