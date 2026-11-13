import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ARTICLES, getArticleBySlug } from '@/data/articles';
import { SCHEMES } from '@/data/schemes';
import ArticleDetailView from '@/app/articles/[slug]/ArticleDetailView';

interface HindiArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: HindiArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'आर्टिकल नहीं मिला | JanLabh',
    };
  }

  const pageTitle = article.title_hi.includes('JanLabh')
    ? article.title_hi
    : `${article.title_hi} | JanLabh`;
  const pageDescription = article.metaDescription_hi || article.summary_hi.slice(0, 155);

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `https://janlabh.in/hi/articles/${article.slug}`,
      languages: {
        'en': `https://janlabh.in/articles/${article.slug}`,
        'hi': `https://janlabh.in/hi/articles/${article.slug}`,
        'x-default': `https://janlabh.in/articles/${article.slug}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://janlabh.in/hi/articles/${article.slug}`,
      siteName: 'JanLabh India',
      locale: 'hi_IN',
      type: 'article',
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate || article.publishedDate,
      images: article.bannerImage
        ? [
            {
              url: `https://janlabh.in${article.bannerImage}`,
              width: 1200,
              height: 675,
              alt: article.title_hi,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: article.bannerImage ? [`https://janlabh.in${article.bannerImage}`] : undefined,
    },
  };
}

export default async function HindiArticlePage({ params }: HindiArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedScheme = article.relatedSchemeSlug
    ? SCHEMES.find((s) => s.slug === article.relatedSchemeSlug)
    : null;

  const jsonLdGraph: any[] = [
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
          'name': 'गाइड्स व समाधान',
          'item': 'https://janlabh.in/hi/articles',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': article.title_hi,
          'item': `https://janlabh.in/hi/articles/${article.slug}`,
        },
      ],
    },
    {
      '@type': 'Article',
      'headline': article.title_hi,
      'description': article.metaDescription_hi || article.summary_hi,
      'mainEntityOfPage': `https://janlabh.in/hi/articles/${article.slug}`,
      'datePublished': article.publishedDate,
      'dateModified': article.updatedDate || article.publishedDate,
      'author': {
        '@type': 'Organization',
        'name': 'JanLabh Citizen Research Desk',
        'url': 'https://janlabh.in/hi/about',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'JanLabh India',
        'url': 'https://janlabh.in',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://janlabh.in/icons/janlabh-logo.svg',
        },
      },
    },
  ];

  if (article.faqs_hi && article.faqs_hi.length > 0) {
    jsonLdGraph.push({
      '@type': 'FAQPage',
      'mainEntity': article.faqs_hi.map((faq) => ({
        '@type': 'Question',
        'name': faq.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.a,
        },
      })),
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': jsonLdGraph }) }}
      />
      <ArticleDetailView article={article} relatedScheme={relatedScheme} initialLang="hi" />
    </>
  );
}
