import React from 'react';
import type { Metadata } from 'next';
import { ARTICLES } from '@/data/articles';
import ArticlesDirectoryClient from './ArticlesDirectoryClient';

export const metadata: Metadata = {
  title: 'Citizen Guides & Problem Solving 2026: Bank Aadhaar NPCI Link, Rejections & Forms | JanLabh',
  description: 'Verified step-by-step citizen problem solving guides for Indian government schemes: how to link bank Aadhaar NPCI, resolve PFMS rejections, download scheme affidavits & apply online.',
  keywords: [
    'bank account me aadhar npci dbt link status check online',
    'dbt link bank account status check kaise kare',
    'npci aadhar link bank account status check 2026',
    'aadhaar npci link nahi hai to kya kare bank me',
    'dbt payment rejected by bank account type mismatch solution',
    'sarkari yojana form reject hone par kya kare',
    'application disapproved rejected by verification officer solution',
    'aadhaar dbt mandate form pdf download',
    'kya ek se jyada bank account me dbt enable ho sakta hai',
    'samagra id me ekyc status check online samagra gov in',
    'government scheme problem solution guide',
    'sarkari yojana form download'
  ],
  alternates: {
    canonical: 'https://janlabh.in/articles',
    languages: {
      'en': 'https://janlabh.in/articles',
      'hi': 'https://janlabh.in/hi/articles',
      'x-default': 'https://janlabh.in/articles',
    },
  },
  openGraph: {
    title: 'Citizen Problem Solving Guides & Scheme Solutions | JanLabh',
    description: 'Practical walkthroughs solving real citizen pain points: Aadhaar NPCI bank mapping, form rejection appeals, and authorized proforma downloads.',
    url: 'https://janlabh.in/articles',
    siteName: 'JanLabh India',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ArticlesPage() {
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
            'name': 'Articles & Guides',
            'item': 'https://janlabh.in/articles',
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        'name': 'Citizen Guides & Problem Solving Directory 2026',
        'url': 'https://janlabh.in/articles',
        'description': 'Verified walkthroughs and solutions for Indian government welfare benefits.',
        'mainEntity': {
          '@type': 'ItemList',
          'numberOfItems': ARTICLES.length,
          'itemListElement': ARTICLES.map((article, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
            'name': article.title_en,
            'url': `https://janlabh.in/articles/${article.slug}`,
          })),
        },
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is the difference between normal Aadhaar bank linking and NPCI DBT seeding?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Normal Aadhaar linking merely verifies your KYC identity within your branch to keep the account active. NPCI DBT Seeding maps your account onto the National Payments Corporation of India (NPCI) central server. Government disbursements route via Aadhaar numbers, not bank account numbers, crediting solely to the active NPCI-mapped account. You may link Aadhaar in multiple banks, but only ONE bank account can receive DBT benefits nationwide.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What should a citizen do if bank branch staff refuses to accept the Aadhaar DBT Seeding Mandate?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Under Reserve Bank of India (RBI) mandates, bank branches cannot refuse Aadhaar seeding requests from account holders. If branch staff declines, submit a written complaint to the Branch Manager. If unresolved, the fastest field-tested solution is to visit your nearest India Post Payments Bank (IPPB) branch or postal counter, open a zero-balance account in 10 minutes, and enable DBT seeding. IPPB mapping clears on NPCI within 24 hours.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can a citizen receive payments from two different government schemes in two different bank accounts?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Under the Government of India\'s DBT architecture, a citizen\'s Aadhaar can be mapped to only one primary DBT account on NPCI at any given time. Whether receiving PM-KISAN, Ladli Behna, state scholarships, or pensions, all funds automatically route into that single mapped account. Seeding a new bank automatically overwrites and replaces the previous bank mapping.'
            }
          },
          {
            '@type': 'Question',
            'name': 'When and how can an applicant re-apply after their scheme form is disapproved or rejected?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'First, log into the official portal using your Application ID or Aadhaar number to identify the exact rejection code. If rejection was due to unreadable document uploads or minor clerical discrepancies, use the portal\'s "Edit Application" window to re-upload. If permanently disapproved, attend the subsequent administrative camp round (such as Round 3 camps) at your Gram Panchayat to submit a fresh application.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is expensive court notary stamp paper mandatory for government scheme affidavits and self-declarations?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No, this is a widespread misconception often propagated by unauthorized intermediaries. Under government administrative simplification reforms, most social welfare schemes (such as UP Kanya Sumangala or Majhi Ladki Bahin) accept standardized departmental self-declaration formats signed directly by the parent or applicant on plain paper. Expensive court notary stamp papers are completely unnecessary.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How can a citizen retrieve their scheme application number if their acknowledgement receipt is lost?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'If you lose your acknowledgement slip, visit the scheme\'s official portal (e.g. cmladlibahna.mp.gov.in, mksy.up.gov.in, or pmkisan.gov.in) and select "Know Your Registration / Application Number". Enter your 12-digit Aadhaar number or state family ID and registered mobile number. Complete OTP authentication, and your registration number and full payment tracking will display instantly.'
            }
          }
        ]
      }
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticlesDirectoryClient articles={ARTICLES} initialLang="en" />
    </>
  );
}
