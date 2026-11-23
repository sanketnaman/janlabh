import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { STATES } from '@/data/categories';
import { SCHEMES } from '@/data/schemes';
import { STATE_HUB_PROFILES } from '@/data/stateHubData';
import StateDetailView from '@/app/states/[state]/StateDetailView';

interface HindiStatePageProps {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return STATES.map((st) => ({
    state: st.id,
  }));
}

export async function generateMetadata({ params }: HindiStatePageProps): Promise<Metadata> {
  const { state: stateId } = await params;
  const stateInfo = STATES.find((s) => s.id === stateId);

  if (!stateInfo) {
    return {
      title: 'राज्य नहीं मिला | JanLabh',
    };
  }

  const isAllIndia = stateInfo.id === 'all-india';
  const pageTitle = stateInfo.id === 'jharkhand'
    ? 'झारखंड नागरिक कल्याण हब 2026: आधिकारिक पोर्टल, सरकारी योजनाएं व हेल्पलाइन | JanLabh'
    : isAllIndia
    ? 'केंद्र सरकार की योजनाएं 2026: सभी केंद्रीय योजनाओं की सूची व पात्रता | JanLabh'
    : `${stateInfo.name_hi} सरकारी योजनाएं 2026: नई लिस्ट, पात्रता नियम व आवेदन लिंक | JanLabh`;

  const pageDescription = stateInfo.id === 'jharkhand'
    ? 'झारखंड सरकार के आधिकारिक नागरिक कल्याण एवं ई-सेवा पोर्टल। झारसेवा, मंईयां सम्मान, अबुआ आवास, सीएम हेल्पलाइन 181, स्थानीय निवास नियम और सत्यापित योजनाओं की पूरी जानकारी।'
    : isAllIndia
    ? 'भारत सरकार की सभी प्रमुख केंद्रीय कल्याणकारी योजनाओं (पीएम किसान, आयुष्मान भारत, पीएम आवास, विश्वकर्मा) की प्रामाणिक जानकारी, पात्रता व लाभ।'
    : `${stateInfo.name_hi} (राजधानी: ${stateInfo.capital_hi}) की सभी राज्य और केंद्रीय कल्याणकारी योजनाओं की सूची, नकद सहायता, पात्रता व आधिकारिक सरकारी लिंक।`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      `${stateInfo.name_hi} नागरिक कल्याण हब`,
      `${stateInfo.name_hi} सरकारी योजनाएं`,
      `${stateInfo.name_hi} योजना लिस्ट 2026`,
      `${stateInfo.name_en} government schemes in hindi`,
      `${stateInfo.name_hi} आधिकारिक पोर्टल`,
      `${stateInfo.name_hi} हेल्पलाइन`,
      'सरकारी योजना'
    ],
    alternates: {
      canonical: `https://janlabh.in/hi/states/${stateInfo.id}`,
      languages: {
        'en': `https://janlabh.in/states/${stateInfo.id}`,
        'hi': `https://janlabh.in/hi/states/${stateInfo.id}`,
        'x-default': `https://janlabh.in/states/${stateInfo.id}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://janlabh.in/hi/states/${stateInfo.id}`,
      siteName: 'JanLabh India',
      locale: 'hi_IN',
      type: 'website',
    },
  };
}

export default async function HindiStatePage({ params }: HindiStatePageProps) {
  const { state: stateId } = await params;
  const stateInfo = STATES.find((s) => s.id === stateId);

  if (!stateInfo) {
    notFound();
  }

  // Filter schemes: state-specific schemes PLUS central flagship schemes active in the state (strictly deduplicated)
  const rawStateSchemes = SCHEMES.filter((s) => {
    if (stateInfo.id === 'all-india') {
      return s.state === 'all-india';
    }
    return s.state === stateInfo.id || s.state === 'all-india';
  });
  const seenIds = new Set<string>();
  const stateSchemes = rawStateSchemes.filter((s) => {
    if (seenIds.has(s.id)) return false;
    seenIds.add(s.id);
    return true;
  });

  const hubProfile = STATE_HUB_PROFILES[stateInfo.id] || STATE_HUB_PROFILES['all-india'];

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
          'name': 'राज्य हब',
          'item': 'https://janlabh.in/hi/states',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': stateInfo.name_hi,
          'item': `https://janlabh.in/hi/states/${stateInfo.id}`,
        },
      ],
    },
    {
      '@type': 'CollectionPage',
      'name': `${stateInfo.name_hi} सरकारी योजनाएं एवं नागरिक ई-सेवाएं 2026`,
      'url': `https://janlabh.in/hi/states/${stateInfo.id}`,
      'description': stateInfo.description_hi,
      'mainEntity': {
        '@type': 'ItemList',
        'numberOfItems': stateSchemes.length,
        'itemListElement': stateSchemes.map((scheme, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': scheme.title_hi,
          'url': `https://janlabh.in/hi/schemes/${scheme.slug}`,
        })),
      },
    },
  ];

  if (hubProfile && hubProfile.faqs && hubProfile.faqs.length > 0) {
    jsonLdGraph.push({
      '@type': 'FAQPage',
      'mainEntity': hubProfile.faqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.q_hi,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.a_hi,
        },
      })),
    });
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': jsonLdGraph,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StateDetailView stateInfo={stateInfo} schemes={stateSchemes} initialLang="hi" />
    </>
  );
}
