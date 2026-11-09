import type { Metadata } from 'next';
import ContactView from './ContactView';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Contact JanLabh | Report an Error or Send Feedback',
  description: 'Contact JanLabh to report outdated scheme details, broken official links, or share feedback. We verify corrections against government sources.',
  alternates: {
    canonical: 'https://janlabh.in/contact',
    languages: {
      'en': 'https://janlabh.in/contact',
      'hi': 'https://janlabh.in/hi/contact',
      'x-default': 'https://janlabh.in/contact',
    },
  },
  openGraph: {
    title: 'Contact JanLabh | Report an Error or Send Feedback',
    description: 'Contact JanLabh to report outdated scheme details, broken official links, or share feedback. We verify corrections against government sources.',
    url: 'https://janlabh.in/contact',
    siteName: 'JanLabh India',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact JanLabh',
    'description': 'Contact JanLabh to report outdated scheme details, broken official links, or share feedback. We verify corrections against government sources.',
    'url': 'https://janlabh.in/contact',
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
      <ContactView />
    </>
  );
}
