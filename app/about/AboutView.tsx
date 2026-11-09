'use client';

import React from 'react';
import StaticPageLayout from '@/components/StaticPageLayout';
import { Building, ShieldCheck, CheckCircle2, Award, Users, BookOpen, UserCheck, MapPin, Mail, ExternalLink } from 'lucide-react';
import Link from 'next/link';

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

            {/* E-E-A-T Editorial Leadership & Author Profile */}
            <section className="space-y-4 not-prose border-t border-slate-200 dark:border-slate-800 pt-6">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                <UserCheck className="h-4 w-4" />
                <span>{isHi ? 'संपादकीय नेतृत्व एवं अनुसंधानकर्ता' : 'Editorial Leadership & Subject Expertise'}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {isHi ? 'संपादकीय टीम एवं नेतृत्व' : 'Who Researches & Reviews JanLabh'}
              </h2>

              <div className="p-5 sm:p-6 bg-gradient-to-br from-amber-50/50 via-white to-slate-50 dark:from-slate-800/80 dark:via-slate-900 dark:to-slate-900 rounded-2xl border border-amber-200/70 dark:border-slate-700 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>Sanket Sinha</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-semibold border border-amber-300 dark:border-amber-800">
                        {isHi ? 'संस्थापक एवं संपादक' : 'Founder & Editor'}
                      </span>
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-amber-600" />
                        <span>New Delhi, India</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Mail className="h-3.5 w-3.5 text-amber-600" />
                        <a href="mailto:nick.sanket2007@gmail.com" className="hover:text-amber-700 dark:hover:text-amber-400 font-mono">
                          nick.sanket2007@gmail.com
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <p>
                    {isHi
                      ? 'संकेत सिन्हा जनलाभ (JanLabh.in) के संस्थापक एवं संपादक (Founder & Editor) हैं। नई दिल्ली में स्थित, संकेत लोक प्रशासन, ई-गवर्नेंस और सामाजिक कल्याणकारी योजनाओं के स्वतंत्र अनुसंधान और तथ्य-जांच का नेतृत्व करते हैं।'
                      : 'Sanket Sinha is the Founder & Editor of JanLabh. Based in New Delhi, India, Sanket oversees editorial integrity, civic research, and public welfare guides across Central and State government programs.'}
                  </p>
                  <p>
                    {isHi
                      ? 'भारत सरकार के मंत्रालयों और राज्य विभागों के आधिकारिक राजपत्रों (Statutory Gazettes), नीतिगत संकल्पों और प्रत्यक्ष लाभ अंतरण (DBT) नियमों के विश्लेषण में उनकी विशेषज्ञता है। उनका प्राथमिक मिशन जटिल नौकरशाही शब्दावली और बिचौलियों की निर्भरता को समाप्त कर भारत के प्रत्येक नागरिक तक उनके कानूनी अधिकारों और कल्याणकारी योजनाओं की पारदर्शी व सटीक जानकारी पहुंचाना है।'
                      : 'With extensive experience dissecting statutory gazette notifications, ministry circulars, and Direct Benefit Transfer (DBT) protocols, Sanket oversees JanLabh\'s strict verification desk. His objective is to dismantle bureaucratic gatekeeping and eliminate predatory middlemen by delivering verified, transparent, and step-by-step digital guidance to every eligible Indian citizen.'}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold text-slate-600 dark:text-slate-400">{isHi ? 'विशेषज्ञता क्षेत्र:' : 'Core Areas of Research:'}</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    {isHi ? 'कृषि एवं किसान कल्याण' : 'Farmer & Rural Welfare'}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    {isHi ? 'महिला एवं बाल विकास' : 'Women Empowerment & Direct DBT'}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    {isHi ? 'विद्यार्थी छात्रवृत्ति व उच्च शिक्षा' : 'Scholarships & Student Aid'}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    {isHi ? 'सार्वजनिक स्वास्थ्य (आयुष्मान भारत)' : 'Universal Health Coverage'}
                  </span>
                </div>
              </div>
            </section>

            {/* Editorial Policy & Verification Rigor */}
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

            {/* Editorial Desk Details & Direct Contact */}
            <section className="space-y-3 border-t border-slate-200 dark:border-slate-800 pt-6 not-prose">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {isHi ? 'संपादकीय संपर्क एवं कार्यालय' : 'Editorial Desk & Office Correspondence'}
              </h2>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-2">
                <p>
                  <strong>{isHi ? 'संपादकीय कार्यालय:' : 'Editorial Desk:'}</strong> JanLabh Public Policy & Civic Research Desk, Connaught Place, New Delhi - 110001, India.
                </p>
                <p>
                  <strong>{isHi ? 'ईमेल संपर्क:' : 'Direct Inquiries:'}</strong>{' '}
                  <a href="mailto:contact@janlabh.in" className="text-amber-700 dark:text-amber-400 font-mono font-semibold hover:underline">
                    contact@janlabh.in
                  </a>{' '}
                  ({isHi ? 'अथवा मुख्य विश्लेषक:' : 'or direct:'}{' '}
                  <a href="mailto:nick.sanket2007@gmail.com" className="text-amber-700 dark:text-amber-400 font-mono hover:underline">
                    nick.sanket2007@gmail.com
                  </a>)
                </p>
                <div className="pt-2">
                  <Link
                    href={isHi ? '/hi/contact' : '/contact'}
                    className="inline-flex items-center gap-1 font-bold text-amber-700 dark:text-amber-400 hover:underline"
                  >
                    <span>{isHi ? 'हमसे संपर्क फॉर्म के माध्यम से जुड़ें →' : 'Reach out via our Official Contact Form →'}</span>
                  </Link>
                </div>
              </div>
            </section>
          </article>
        );
      }}
    </StaticPageLayout>
  );
}
