import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SCHEMES } from '@/data/schemes';
import SchemeDetailView from './SchemeDetailView';

interface SchemePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SCHEMES.map((scheme) => ({
    slug: scheme.slug,
  }));
}

export async function generateMetadata({ params }: SchemePageProps): Promise<Metadata> {
  const { slug } = await params;
  const scheme = SCHEMES.find((s) => s.slug === slug);

  if (!scheme) {
    return {
      title: 'Scheme Not Found | JanLabh',
    };
  }

  return {
    title: `${scheme.title_en} | Eligibility, Benefits & How to Apply | JanLabh`,
    description: scheme.metaDescription_en || scheme.benefitSummary_en,
    keywords: scheme.keywords,
    alternates: {
      canonical: `https://janlabh.in/schemes/${scheme.slug}`,
    },
    openGraph: {
      title: `${scheme.title_en} – JanLabh Guidance Portal`,
      description: scheme.benefitSummary_en,
      url: `https://janlabh.in/schemes/${scheme.slug}`,
      siteName: 'JanLabh.in',
      locale: 'en_IN',
      type: 'article',
    },
  };
}

export default async function SchemePage({ params }: SchemePageProps) {
  const { slug } = await params;
  const scheme = SCHEMES.find((s) => s.slug === slug);

  if (!scheme) {
    notFound();
  }

  // Schema.org structured data for SEO & Google Rich Snippets
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://janlabh.in',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': scheme.category.toUpperCase(),
            'item': `https://janlabh.in/?category=${scheme.category}`,
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': scheme.title_en,
            'item': `https://janlabh.in/schemes/${scheme.slug}`,
          },
        ],
      },
      {
        '@type': 'GovernmentService',
        'name': scheme.title_en,
        'alternateName': scheme.title_hi,
        'description': scheme.benefitSummary_en,
        'provider': {
          '@type': 'GovernmentOrganization',
          'name': scheme.officialSources[0]?.authority || 'Government of India',
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
        'mainEntity': scheme.faqs_en.map((faq) => ({
          '@type': 'Question',
          'name': faq.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.a,
          },
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
      <SchemeDetailView scheme={scheme} />
    </>
  );
}
