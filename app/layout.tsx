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
      'en': 'https://janlabh.in/en',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JanLabh – Government Schemes & Citizen Benefits in India',
    description: 'Independent civic guidance platform for Central & State welfare benefits.',
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
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
      { url: '/icons/favicon_svg.svg?v=2', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg?v=2',
    apple: '/favicon.svg?v=2',
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
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <link rel="alternate icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=2" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('janlabh-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (_) {}

                try {
                  var storedLang = localStorage.getItem('janlabh-lang');
                  if (storedLang === 'en' || storedLang === 'hi') {
                    document.documentElement.lang = storedLang;
                  }
                } catch (_) {}

                try {
                  var _fetch = window.fetch;
                  try {
                    Object.defineProperty(window, 'fetch', {
                      configurable: true,
                      enumerable: true,
                      get: function() { return _fetch; },
                      set: function(v) { _fetch = v; }
                    });
                  } catch (_) {}
                  if (typeof Window !== 'undefined' && Window.prototype) {
                    try {
                      Object.defineProperty(Window.prototype, 'fetch', {
                        configurable: true,
                        enumerable: true,
                        get: function() { return _fetch; },
                        set: function(v) { _fetch = v; }
                      });
                    } catch (_) {}
                  }
                } catch (e) {}
              })();
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-amber-100 selection:text-amber-900 dark:selection:bg-amber-900 dark:selection:text-amber-100 transition-colors duration-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

