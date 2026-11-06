import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { UPDATES } from '@/data/updates';
import { SCHEMES } from '@/data/schemes';
import UpdateDetailView from './UpdateDetailView';

interface UpdatePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return UPDATES.map((u) => ({
    slug: u.slug,
  }));
}

export async function generateMetadata({ params }: UpdatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const update = UPDATES.find((u) => u.slug === slug);

  if (!update) {
    return {
      title: 'Update Not Found | JanLabh',
    };
  }

  const pageTitle = `${update.title_en} | Government Scheme Notice 2026 | JanLabh`;
  const pageDescription = update.summary_en.slice(0, 155);

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `https://janlabh.in/updates/${update.slug}`,
      languages: {
        'en': `https://janlabh.in/updates/${update.slug}`,
        'hi': `https://janlabh.in/hi/updates/${update.slug}`,
        'x-default': `https://janlabh.in/updates/${update.slug}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://janlabh.in/updates/${update.slug}`,
      siteName: 'JanLabh.in',
      locale: 'en_IN',
      type: 'article',
      publishedTime: update.publishedDate,
      modifiedTime: update.updatedDate || update.publishedDate,
    },
  };
}

export default async function UpdatePage({ params }: UpdatePageProps) {
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
            'name': 'Home',
            'item': 'https://janlabh.in',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Updates',
            'item': 'https://janlabh.in/updates',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': update.title_en,
            'item': `https://janlabh.in/updates/${update.slug}`,
          },
        ],
      },
      {
        '@type': 'NewsArticle',
        'headline': update.title_en,
        'description': update.summary_en,
        'url': `https://janlabh.in/updates/${update.slug}`,
        'datePublished': update.publishedDate,
        'dateModified': update.updatedDate || update.publishedDate,
        'publisher': {
          '@type': 'Organization',
          'name': 'JanLabh.in',
          'url': 'https://janlabh.in',
        },
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
        initialLang="en"
      />
    </>
  );
}
