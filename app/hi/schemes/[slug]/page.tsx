import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SCHEMES } from '@/data/schemes';
import SchemeDetailView from '@/app/schemes/[slug]/SchemeDetailView';

interface HindiSchemePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SCHEMES.map((scheme) => ({
    slug: scheme.slug,
  }));
}

export async function generateMetadata({ params }: HindiSchemePageProps): Promise<Metadata> {
  const { slug } = await params;
  const scheme = SCHEMES.find((s) => s.slug === slug);

  if (!scheme) {
    return {
      title: 'योजना नहीं मिली | JanLabh',
    };
  }

  const pageTitle = scheme.title_hi.includes('JanLabh')
    ? scheme.title_hi
    : `${scheme.title_hi} | JanLabh`;
  const pageDescription = scheme.metaDescription_hi || scheme.benefitSummary_hi;
  const bannerImgUrl = scheme.bannerImage || '/images/schemes/default-banner.svg';
  const fullImgUrl = bannerImgUrl.startsWith('http') ? bannerImgUrl : `https://janlabh.in${bannerImgUrl}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: scheme.keywords,
    alternates: {
      canonical: `https://janlabh.in/hi/schemes/${scheme.slug}`,
      languages: {
        'en': `https://janlabh.in/schemes/${scheme.slug}`,
        'hi': `https://janlabh.in/hi/schemes/${scheme.slug}`,
        'x-default': `https://janlabh.in/schemes/${scheme.slug}`,
      },
    },
    openGraph: {
      title: `${scheme.shortTitle_hi} – पात्रता, लाभ और ऑनलाइन आवेदन | JanLabh`,
      description: pageDescription,
      url: `https://janlabh.in/hi/schemes/${scheme.slug}`,
      siteName: 'JanLabh.in',
      locale: 'hi_IN',
      type: 'article',
      images: [
        {
          url: fullImgUrl,
          width: 1200,
          height: 630,
          alt: `${scheme.shortTitle_hi} - जनलाभ आधिकारिक विवरण`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${scheme.shortTitle_hi} – पात्रता, लाभ और ऑनलाइन आवेदन | JanLabh`,
      description: pageDescription,
      images: [fullImgUrl],
    },
  };
}

export default async function HindiSchemePage({ params }: HindiSchemePageProps) {
  const { slug } = await params;
  const scheme = SCHEMES.find((s) => s.slug === slug);

  if (!scheme) {
    notFound();
  }

  // Schema.org structured data for SEO & Google Rich Snippets in Hindi
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'होम',
            'item': 'https://janlabh.in/hi',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'सभी योजनाएं',
            'item': 'https://janlabh.in/hi/schemes',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': scheme.title_hi,
            'item': `https://janlabh.in/hi/schemes/${scheme.slug}`,
          },
        ],
      },
      {
        '@type': 'GovernmentService',
        'name': scheme.title_hi,
        'alternateName': scheme.title_en,
        'description': scheme.benefitSummary_hi,
        'image': scheme.bannerImage ? `https://janlabh.in${scheme.bannerImage}` : undefined,
        'provider': {
          '@type': 'GovernmentOrganization',
          'name': scheme.officialSources[0]?.authority || 'भारत सरकार',
        },
        'serviceType': scheme.category,
        'areaServed': {
          '@type': 'Country',
          'name': 'India',
        },
        'url': scheme.officialSources[0]?.url,
      },
      {
        '@type': 'FAQPage',
        'mainEntity': scheme.faqs_hi.map((faq) => ({
          '@type': 'Question',
          'name': faq.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.a,
          },
        })),
      },
      {
        '@type': 'Article',
        'headline': scheme.title_hi,
        'description': scheme.benefitSummary_hi,
        'image': scheme.bannerImage ? `https://janlabh.in${scheme.bannerImage}` : 'https://janlabh.in/images/schemes/default-banner.svg',
        'datePublished': '2026-01-01',
        'dateModified': scheme.lastVerified ? new Date(scheme.lastVerified).toISOString().split('T')[0] : '2026-11-01',
        'mainEntityOfPage': `https://janlabh.in/hi/schemes/${scheme.slug}`,
        'author': {
          '@type': 'Person',
          'name': 'संकेत सिन्हा (Sanket Sinha)',
          'jobTitle': 'Founder & Editor',
          'url': 'https://janlabh.in/hi/about',
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'जनलाभ (JanLabh)',
          'url': 'https://janlabh.in',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://janlabh.in/favicon.ico',
          },
        },
      },
      {
        '@type': 'HowTo',
        'name': `${scheme.shortTitle_hi} के लिए ऑनलाइन व ऑफलाइन आवेदन कैसे करें?`,
        'description': `${scheme.shortTitle_hi} हेतु संपूर्ण चरणबद्ध आवेदन प्रक्रिया और नियम।`,
        'step': scheme.howToApply_hi.map((stepText, idx) => ({
          '@type': 'HowToStep',
          'position': idx + 1,
          'name': `चरण ${idx + 1}: ${stepText.slice(0, 50)}...`,
          'text': stepText,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SchemeDetailView scheme={scheme} initialLang="hi" />
    </>
  );
}
