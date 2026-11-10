'use client';

import React from 'react';
import StaticPageLayout from '@/components/StaticPageLayout';
import { AlertTriangle } from 'lucide-react';
import { Language } from '@/types';

export default function DisclaimerView({ forcedLang }: { forcedLang?: Language } = {}) {
  return (
    <StaticPageLayout
      breadcrumbTitle_en="Statutory Disclaimer"
      breadcrumbTitle_hi="वैधानिक अस्वीकरण"
      activeNav="trust"
      forcedLang={forcedLang}
    >
      {(lang) => {
        const isHi = lang === 'hi';
        return (
          <article className="prose prose-slate dark:prose-invert max-w-none space-y-8 bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-2">
                <AlertTriangle className="h-4 w-4" />
                <span>{isHi ? 'कानूनी घोषणा' : 'Statutory Declaration'}</span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
                {isHi ? 'वैधानिक अस्वीकरण (Disclaimer)' : 'Statutory Disclaimer'}
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isHi ? 'अंतिम सत्यापन: 5 नवंबर 2026' : 'Last Verified: November 5, 2026'}
              </p>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/40 border-2 border-rose-300 dark:border-rose-900 rounded-xl space-y-3">
              <h2 className="text-base font-bold text-rose-950 dark:text-rose-200">
                {isHi ? 'स्वतंत्र नागरिक मंच – कोई सरकारी संबद्धता नहीं' : 'Independent Platform – Not Affiliated with Government'}
              </h2>
              <p className="text-xs text-rose-900 dark:text-rose-300 leading-relaxed">
                {isHi
                  ? 'JanLabh.in (जनलाभ) भारत सरकार (Government of India) अथवा किसी भी राज्य सरकार या केंद्र शासित प्रदेश का आधिकारिक पोर्टल नहीं है। यह वेबसाइट विशुद्ध रूप से एक स्वतंत्र नागरिक सूचना मार्गदर्शन मंच है।'
                  : 'JanLabh.in is an independent public information resource. It is NOT operated by, affiliated with, or endorsed by the Government of India, State Governments, or any ministry/department.'}
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                {isHi
                  ? 'वेबसाइट पर प्रकाशित सभी योजनाएं, नियम, पात्रता मानदंड, और आवेदन प्रक्रियाएं केवल नागरिकों की जागरूकता और समझ के लिए हैं। किसी भी योजना के लिए औपचारिक आवेदन केवल संबंधित विभाग की अधिकृत सरकारी वेबसाइट (.gov.in / .nic.in) पर ही किया जाना चाहिए।'
                  : 'All information provided on this platform is curated for educational and awareness purposes only. Citizens are strongly urged to access official government portals ending with .gov.in or .nic.in for official applications and statutory confirmations.'}
              </p>
              <p>
                {isHi
                  ? 'JanLabh.in कभी भी किसी भी नागरिक से किसी योजना का लाभ दिलाने के नाम पर कोई शुल्क, कमीशन या बैंक क्रेडेंशियल (जैसे ओटीपी या पासवर्ड) नहीं मांगता है।'
                  : 'JanLabh.in never demands money, processing charges, registration fees, OTPs, or passwords for accessing scheme benefits.'}
              </p>
            </div>
          </article>
        );
      }}
    </StaticPageLayout>
  );
}
