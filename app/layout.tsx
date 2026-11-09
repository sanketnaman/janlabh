import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JanLabh – Government Schemes & Citizen Benefits in India | सरकारी योजनाएं',
  description: 'Independent bilingual platform to discover, check eligibility, prepare documents, and navigate Central & State government schemes in India.',
  keywords: [
    'सरकारी योजना',
    'government schemes India',
    'PM Kisan eligibility',
    'Ayushman card',
    'scholarships',
    'Jharkhand yojana',
    'Bihar schemes',
    'citizen benefits'
  ],
  authors: [{ name: 'JanLabh Editorial & Verification Desk' }],
  metadataBase: new URL('https://janlabh.in'),
  alternates: {
    canonical: 'https://janlabh.in',
    languages: {
      'en': 'https://janlabh.in',
      'hi': 'https://janlabh.in/hi',
      'x-default': 'https://janlabh.in',
    },
  },
  openGraph: {
    title: 'JanLabh – Government Schemes & Citizen Benefits in India',
    description: 'Understand government schemes, verify potential eligibility, prepare required documents, and access official government portals directly.',
    url: 'https://janlabh.in',
    siteName: 'JanLabh.in',
    locale: 'en_IN',
    alternateLocale: ['hi_IN'],
    type: 'website',
    images: [
      {
        url: 'https://janlabh.in/images/schemes/pm-kisan-samman-nidhi.png',
        width: 1200,
        height: 630,
        alt: 'JanLabh – Government Schemes & Citizen Benefits Guidance Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JanLabh – Government Schemes & Citizen Benefits in India',
    description: 'Independent civic guidance platform for Central & State welfare benefits.',
    images: ['https://janlabh.in/images/schemes/pm-kisan-samman-nidhi.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48 32x32 16x16', type: 'image/x-icon' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://janlabh.in/#organization',
        'name': 'JanLabh',
        'url': 'https://janlabh.in',
        'logo': 'https://janlabh.in/icons/janlabh-logo.svg',
        'description': 'Independent civic and government scheme public information platform for Indian citizens.',
        'publishingPrinciples': 'https://janlabh.in/editorial-policy',
        'correctionsPolicy': 'https://janlabh.in/corrections-policy'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://janlabh.in/#website',
        'url': 'https://janlabh.in',
        'name': 'JanLabh',
        'publisher': { '@id': 'https://janlabh.in/#organization' },
        'inLanguage': ['en-IN', 'hi-IN'],
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://janlabh.in/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js / GTM) */}
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-NM3KWCTG" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="48x48 32x32 16x16" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('janlabh-theme');
                  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (_) {}

                try {
                  var isHindiPath = window.location.pathname.startsWith('/hi');
                  var storedLang = localStorage.getItem('janlabh-lang');
                  var effectiveLang = isHindiPath ? 'hi' : (storedLang === 'hi' ? 'hi' : 'en');
                  document.documentElement.lang = effectiveLang;
                } catch (_) {}
              })();
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-amber-100 selection:text-amber-900 dark:selection:bg-amber-900 dark:selection:text-amber-100" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

