'use client';

import React from 'react';
import StaticPageLayout from '@/components/StaticPageLayout';
import { Building, ShieldCheck, CheckCircle2, Award, Users, BookOpen } from 'lucide-react';

export default function AboutView() {
  return (
    <StaticPageLayout
      breadcrumbTitle_en="About JanLabh"
      breadcrumbTitle_hi="जनलाभ के बारे में"
      activeNav="trust"
    >
      {(lang) => {
        const isHi = lang === 'hi';
        return (
          <article className="prose prose-slate dark:prose-invert max-w-none space-y-8 bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
                <Building className="h-4 w-4" />
                <span>{isHi ? 'हमारा मिशन एवं संपादकीय सिद्धांत' : 'Our Mission & Editorial Integrity'}</span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
                {isHi ? 'जनलाभ (JanLabh.in) के बारे में' : 'About JanLabh.in'}
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isHi ? 'पारदर्शी नागरिक मार्गदर्शन एवं लोकहित' : 'Empowering Citizens through Verifiable Civic Literacy'}
              </p>
            </div>

            {/* Core Mission */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {isHi ? 'हमारा उद्देश्य (Our Mission)' : 'Our Core Purpose'}
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'भारत में करोड़ों नागरिक सरकारी कल्याणकारी योजनाओं (Welfare Schemes), छात्रवृत्तियों और वित्तीय लाभों के कानूनी पात्र होने के बावजूद केवल सटीक सूचना के अभाव, जटिल शब्दावली और बिचौलियों के कारण इनका लाभ नहीं उठा पाते। JanLabh इस समस्या का स्थायी समाधान प्रस्तुत करता है।'
                  : 'Across India, hundreds of millions of citizens qualify for vital welfare entitlements, scholarships, and healthcare benefits but miss out due to fragmented gazettes, convoluted bureaucratic jargon, and predatory middlemen. JanLabh was established to eliminate this information asymmetry.'}
              </p>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 space-y-3">
              <div className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
                {isHi ? 'हम क्या हैं और क्या नहीं हैं:' : 'What We Are & What We Are NOT:'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-emerald-200 dark:border-emerald-900/50">
                  <span className="font-bold text-emerald-800 dark:text-emerald-400">✓ {isHi ? 'हम हैं:' : 'We Are:'}</span>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">
                    {isHi ? 'एक निष्पक्ष, स्वतंत्र और द्विभाषी सूचना मंच जो सरकारी राजपत्रों को सरल व स्पष्ट मार्गदर्शन में बदलता है।' : 'An unbiased, independent bilingual public information platform synthesizing official gazettes into actionable guides.'}
                  </p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-rose-200 dark:border-rose-900/50">
                  <span className="font-bold text-rose-800 dark:text-rose-400">✗ {isHi ? 'हम नहीं हैं:' : 'We Are NOT:'}</span>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">
                    {isHi ? 'हम सरकारी पोर्टल या बिचौलिए नहीं हैं। हम किसी सरकारी मंजूरी का दावा नहीं करते और न ही नागरिकों से कोई शुल्क लेते हैं।' : 'We are NOT a government ministry, not middlemen, and we never charge application fees or guarantee sanction approvals.'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Editorial Policy */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {isHi ? 'संपादकीय एवं सत्यापन नीति' : 'Editorial & Verification Rigor'}
            </h2>
            <div className="space-y-3">
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span>1. {isHi ? '100% आधिकारिक स्रोत प्राथमिकता (Primary Citations Only)' : 'Primary Government Sources Only'}</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  {isHi
                    ? 'प्रत्येक योजना और दिशा-निर्देश केवल भारत सरकार के .gov.in या .nic.in पोर्टलों तथा आधिकारिक गजट अधिसूचनाओं से प्रमाणित करके ही प्रकाशित किए जाते हैं।'
                    : 'Every eligibility matrix, subsidy percentage, and document checklist is cross-verified against live statutory gazettes and verified department portals (.gov.in / .nic.in).'}
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span>2. {isHi ? 'व्यावसायिक प्रभाव से पूर्ण स्वतंत्रता' : 'Zero Commercial Influence on Editorial Guidance'}</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  {isHi
                    ? 'हमारी पात्रता गणना और योजना मार्गदर्शन किसी भी विज्ञापनदाता या व्यावसायिक समझौते से पूरी तरह स्वतंत्र हैं।'
                    : 'Editorial evaluations, algorithm logic, and scheme rankings are strictly firewall-separated from any advertising relationships.'}
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span>3. {isHi ? 'नियमित तथ्य-जांच व नवीनीकरण' : 'Regular Fact-Checking & Date Transparency'}</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  {isHi
                    ? 'प्रत्येक योजना में उसके अंतिम सत्यापन की तारीख (Last Verified Date) स्पष्ट रूप से दर्शित होती है ताकि नागरिक पुरानी जानकारी से भ्रमित न हों।'
                    : 'All schemes display an explicit "Last Verified" date, reflecting the most recent audit against active department circulars.'}
                </p>
              </div>
            </div>
          </section>

          {/* Editorial Desk Details */}
          <section className="space-y-3 border-t border-slate-200 dark:border-slate-800 pt-6">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              {isHi ? 'संपादकीय संपर्क एवं टीम' : 'Editorial Desk & Location'}
            </h2>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {isHi
                ? 'JanLabh की अनुसंधान और संपादकीय टीम नई दिल्ली और रांची, भारत से संचालित होती है। किसी भी सुझाव या त्रुटि सुधार के लिए contact@janlabh.in पर संपर्क करें।'
                : 'JanLabh\'s editorial and policy research team operates out of New Delhi & Ranchi, India. For inquiries or corrections, reach out at contact@janlabh.in.'}
            </p>
          </section>
        </article>
      );
    }}
  </StaticPageLayout>
  );
}
