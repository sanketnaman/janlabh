import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { UPDATES } from '@/data/updates';
import { SCHEMES } from '@/data/schemes';
import UpdateDetailView from '@/app/updates/[slug]/UpdateDetailView';

interface HindiUpdatePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return UPDATES.map((u) => ({
    slug: u.slug,
  }));
}

export async function generateMetadata({ params }: HindiUpdatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const update = UPDATES.find((u) => u.slug === slug);

  if (!update) {
    return {
      title: 'अपडेट नहीं मिला | JanLabh',
    };
  }

  const pageTitle = update.title_hi.length > 55
    ? update.title_hi
    : `${update.title_hi} | JanLabh`;
  const pageDescription = update.summary_hi.slice(0, 155);

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `https://janlabh.in/hi/updates/${update.slug}`,
      languages: {
        'en': `https://janlabh.in/updates/${update.slug}`,
        'hi': `https://janlabh.in/hi/updates/${update.slug}`,
        'x-default': `https://janlabh.in/updates/${update.slug}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://janlabh.in/hi/updates/${update.slug}`,
      siteName: 'JanLabh.in',
      locale: 'hi_IN',
      type: 'article',
      publishedTime: update.publishedDate,
      modifiedTime: update.updatedDate || update.publishedDate,
    },
  };
}

export default async function HindiUpdatePage({ params }: HindiUpdatePageProps) {
  const { slug } = await params;
  const update = UPDATES.find((u) => u.slug === slug);

  if (!update) {
    notFound();
  }

  const relatedScheme = update.relatedSchemeSlug
    ? SCHEMES.find((s) => s.slug === update.relatedSchemeSlug || s.id === update.relatedSchemeSlug) || null
    : null;

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
            'name': 'ताजा अपडेट्स',
            'item': 'https://janlabh.in/hi/updates',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': update.title_hi,
            'item': `https://janlabh.in/hi/updates/${update.slug}`,
          },
        ],
      },
      {
        '@type': 'NewsArticle',
        'headline': update.title_hi,
        'description': update.summary_hi,
        'url': `https://janlabh.in/hi/updates/${update.slug}`,
        'datePublished': update.publishedDate,
        'dateModified': update.updatedDate || update.publishedDate,
        'publisher': {
          '@type': 'Organization',
          'name': 'JanLabh',
          'url': 'https://janlabh.in',
        },
        'inLanguage': 'hi-IN',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UpdateDetailView
        update={update}
        relatedScheme={relatedScheme}
        initialLang="hi"
      />
    </>
  );
}
