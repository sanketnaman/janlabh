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

  const pageTitle = scheme.title_en.includes('JanLabh')
    ? scheme.title_en
    : `${scheme.title_en} | JanLabh`;
  const pageDescription = scheme.metaDescription_en || scheme.benefitSummary_en;
  const bannerImgUrl = scheme.bannerImage || '/images/schemes/default-banner.svg';
  const fullImgUrl = bannerImgUrl.startsWith('http') ? bannerImgUrl : `https://janlabh.in${bannerImgUrl}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: scheme.keywords,
    alternates: {
      canonical: `https://janlabh.in/schemes/${scheme.slug}`,
      languages: {
        'en': `https://janlabh.in/schemes/${scheme.slug}`,
        'hi': `https://janlabh.in/hi/schemes/${scheme.slug}`,
        'x-default': `https://janlabh.in/schemes/${scheme.slug}`,
      },
    },
    openGraph: {
      title: `${scheme.shortTitle_en} – Eligibility, Benefits & Apply | JanLabh`,
      description: pageDescription,
      url: `https://janlabh.in/schemes/${scheme.slug}`,
      siteName: 'JanLabh.in',
      locale: 'en_IN',
      type: 'article',
      images: [
        {
          url: fullImgUrl,
          width: 1200,
          height: 630,
          alt: `${scheme.shortTitle_en} - JanLabh Official Guidance Banner`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${scheme.shortTitle_en} – Eligibility, Benefits & Apply | JanLabh`,
      description: pageDescription,
      images: [fullImgUrl],
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
        'image': scheme.bannerImage ? `https://janlabh.in${scheme.bannerImage}` : undefined,
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
      {
        '@type': 'Article',
        'headline': scheme.title_en,
        'description': scheme.benefitSummary_en,
        'image': scheme.bannerImage ? `https://janlabh.in${scheme.bannerImage}` : 'https://janlabh.in/images/schemes/default-banner.svg',
        'datePublished': '2026-01-01',
        'dateModified': scheme.lastVerified ? new Date(scheme.lastVerified).toISOString().split('T')[0] : '2026-11-01',
        'mainEntityOfPage': `https://janlabh.in/schemes/${scheme.slug}`,
        'author': {
          '@type': 'Person',
          'name': 'Sanket Sinha',
          'jobTitle': 'Lead Policy Analyst & Founder',
          'url': 'https://janlabh.in/about',
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'JanLabh',
          'url': 'https://janlabh.in',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://janlabh.in/favicon.ico',
          },
        },
      },
      {
        '@type': 'HowTo',
        'name': `How to Apply for ${scheme.shortTitle_en}`,
        'description': `Official step-by-step application procedure for ${scheme.shortTitle_en}.`,
        'step': scheme.howToApply_en.map((stepText, idx) => ({
          '@type': 'HowToStep',
          'position': idx + 1,
          'name': `Step ${idx + 1}: ${stepText.slice(0, 50)}...`,
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
      <SchemeDetailView scheme={scheme} initialLang="en" />
    </>
  );
}
