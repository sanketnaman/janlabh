'use client';

import React from 'react';
import StaticPageLayout from '@/components/StaticPageLayout';
import {
  Building,
  ShieldCheck,
  CheckCircle2,
  Award,
  Users,
  BookOpen,
  UserCheck,
  MapPin,
  Mail,
  ExternalLink,
  SearchCheck,
  Scale,
  RefreshCw,
  FileCheck2,
  AlertTriangle,
  Globe2,
  Clock
} from 'lucide-react';
import Link from 'next/link';
import { Language } from '@/types';
import { COMMUNITY_CONFIG } from '@/data/community';

export default function AboutView({ forcedLang }: { forcedLang?: Language } = {}) {
  return (
    <StaticPageLayout
      breadcrumbTitle_en="About JanLabh"
      breadcrumbTitle_hi="जनलाभ के बारे में"
      activeNav="trust"
      forcedLang={forcedLang}
    >
      {(lang) => {
        const isHi = lang === 'hi';
        return (
          <article className="prose prose-slate dark:prose-invert max-w-none space-y-10 bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* Page Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
                <Building className="h-4 w-4" />
                <span>{isHi ? 'हमारा मिशन, संपादकीय मानक एवं सत्यनिष्ठा' : 'Our Mission, Editorial Integrity & Governance'}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
                {isHi ? 'जनलाभ (JanLabh.in) के बारे में' : 'About JanLabh.in'}
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl">
                {isHi
                  ? 'सत्यापित नागरिक मार्गदर्शन, पारदर्शी सरकारी योजना सूचना एवं लोकहित में समर्पित एक स्वतंत्र नागरिक मंच।'
                  : 'Empowering Indian citizens through verified, plain-language civic knowledge, transparent welfare navigation, and independent fact-checking.'}
              </p>
            </div>

            {/* Core Mission & The Problem We Solve */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Scale className="h-5 w-5 text-amber-600" />
                <span>{isHi ? 'हमारा उद्देश्य और जिस समस्या का हम समाधान करते हैं' : 'Our Purpose & The Civic Problem We Solve'}</span>
              </h2>
              <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 space-y-3">
                <p>
                  {isHi
                    ? 'भारत सरकार और विभिन्न राज्य सरकारों द्वारा प्रतिवर्ष 3.5 लाख करोड़ रुपये से अधिक की राशि प्रत्यक्ष लाभ अंतरण (DBT), किसान सहायता, महिला सशक्तिकरण, उच्च शिक्षा छात्रवृत्ति, और ग्रामीण आवास योजनाओं के लिए आवंटित की जाती है। इन योजनाओं का उद्देश्य समाज के वंचित, ग्रामीण, महिला, और मध्यमवर्गीय परिवारों को सशक्त बनाना है।'
                    : 'Every financial year, the Central and State Governments of India allocate over ₹3.5 Lakh Crore toward Direct Benefit Transfers (DBT), farmer subsidies, women pensions, student scholarships, and rural housing. These initiatives represent life-changing social safety nets designed to uplift millions.'}
                </p>
                <p>
                  {isHi
                    ? 'इसके बावजूद, जमीनी स्तर पर लाखों पात्र नागरिक इन लाभों से वंचित रह जाते हैं। इसका मुख्य कारण जानकारी का अभाव नहीं, बल्कि बिखरी हुई सूचनाएं, जटिल कानूनी राजपत्र (Gazettes), अस्पष्ट नियम, बैंक में आधार सीडिंग की तकनीकी गलतियां, और साइबर कैफे पर दलालों द्वारा की जाने वाली अवैध वसूली है। JanLabh.in की स्थापना इसी सूचना विषमता (Information Asymmetry) को समाप्त करने के लिए की गई है।'
                    : 'Yet on the ground, millions of legally eligible citizens fail to receive their rightful dues. The breakdown rarely stems from a lack of government funding; rather, it is driven by fragmented administrative circulars, dense legalese, confusing bank Aadhaar seeding failures, and predatory unauthorized intermediaries. JanLabh was established to eliminate this structural information divide once and for all.'}
                </p>
              </div>

              {/* What We Are & What We Are NOT Grid */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 space-y-4 not-prose">
                <div className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>{isHi ? 'हमारी स्पष्ट पहचान: हम क्या हैं और क्या नहीं हैं' : 'Our Institutional Charter: What We Are & What We Are NOT'}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-emerald-200 dark:border-emerald-900/60 space-y-2">
                    <span className="font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider block text-[11px]">
                      ✓ {isHi ? 'हम क्या हैं (What We Are):' : 'What We Are:'}
                    </span>
                    <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 list-disc pl-4 leading-relaxed">
                      <li>{isHi ? 'एक पूर्णतः स्वतंत्र, निष्पक्ष और गैर-सरकारी नागरिक सूचना मंच।' : 'A 100% independent, non-governmental civic research and public literacy portal.'}</li>
                      <li>{isHi ? 'सरकारी राजपत्रों और पोर्टलों का अध्ययन कर सरल द्विभाषी (हिंदी-अंग्रेजी) गाइड प्रदाता।' : 'A bilingual synthesis engine translating complex statutory gazettes into plain-language guides.'}</li>
                      <li>{isHi ? 'जमीनी समस्याओं (जैसे NPCI लिंकिंग, बायोमेट्रिक ई-केवाईसी, अंतिम सूची में नाम) का व्यवहारिक समाधानकर्ता।' : 'A practical troubleshooter for ground failures: NPCI mapping, Samagra/Ration Card sync, and appeals.'}</li>
                      <li>{isHi ? 'नागरिकों से शून्य शुल्क लेने वाला पूर्णतः लोकहितैषी (Pro Bono Publico) मंच।' : 'A completely free public resource that charges zero fees from citizens.'}</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-rose-200 dark:border-rose-900/60 space-y-2">
                    <span className="font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wider block text-[11px]">
                      ✗ {isHi ? 'हम क्या नहीं हैं (What We Are NOT):' : 'What We Are NOT:'}
                    </span>
                    <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 list-disc pl-4 leading-relaxed">
                      <li>{isHi ? 'हम कोई सरकारी मंत्रालय, विभाग या सरकारी एजेंसी नहीं हैं।' : 'We are NOT a government ministry, department, or official public agency.'}</li>
                      <li>{isHi ? 'हम किसी योजना की स्वीकृति, चयन या राशि जारी करने का कोई दावा नहीं करते।' : 'We do NOT sanction benefits, approve applications, or disburse public funds.'}</li>
                      <li>{isHi ? 'हम कोई बिचौलिए या पेड कंसल्टेंट नहीं हैं और न ही किसी से पैसे मांगते हैं।' : 'We are NOT commercial brokers or intermediaries; we never solicit consulting fees or bribes.'}</li>
                      <li>{isHi ? 'हम कभी भी उपयोगकर्ताओं का आधार नंबर, पासवर्ड या बैंकिंग पिन नहीं मांगते।' : 'We NEVER solicit, access, or store Aadhaar numbers, OTPs, or financial credentials.'}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* E-E-A-T Editorial Leadership & Author Profile */}
            <section className="space-y-4 not-prose border-t border-slate-200 dark:border-slate-800 pt-8">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                <UserCheck className="h-4 w-4" />
                <span>{isHi ? 'संपादकीय नेतृत्व एवं अनुसंधानकर्ता (E-E-A-T)' : 'Editorial Leadership & Subject Expertise (E-E-A-T)'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {isHi ? 'जनलाभ की संपादकीय टीम और नेतृत्व' : 'Who Researches, Audits & Publishes JanLabh'}
              </h2>

              <div className="p-6 sm:p-7 bg-gradient-to-br from-amber-50/50 via-white to-slate-50 dark:from-slate-800/80 dark:via-slate-900 dark:to-slate-900 rounded-2xl border border-amber-200/70 dark:border-slate-700 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>Sanket Sinha</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-semibold border border-amber-300 dark:border-amber-800">
                        {isHi ? 'संस्थापक एवं संपादक' : 'Founder & Editor'}
                      </span>
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-amber-600" />
                        <span>India</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Mail className="h-3.5 w-3.5 text-amber-600" />
                        <a href="mailto:contact@janlabh.in" className="hover:text-amber-700 dark:hover:text-amber-400 font-mono">
                          contact@janlabh.in
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <p>
                    {isHi
                      ? 'संकेत सिन्हा जनलाभ (JanLabh.in) के संस्थापक एवं मुख्य संपादक हैं। भारत में सार्वजनिक कल्याणकारी योजनाओं, प्रत्यक्ष लाभ अंतरण (DBT) आर्किटेक्चर, और डिजिटल ई-गवर्नेंस के स्वतंत्र अनुसंधान में उनकी गहरी रुचि व विशेषज्ञता है।'
                      : 'Sanket Sinha is the Founder and Editor-in-Chief of JanLabh. Based in India, Sanket oversees editorial integrity, civic research methodologies, and public welfare guides across Central and State government schemes.'}
                  </p>
                  <p>
                    {isHi
                      ? 'संकेत भारत सरकार के विभिन्न मंत्रालयों (जैसे महिला एवं बाल विकास, कृषि एवं किसान कल्याण, ग्रामीण विकास, और स्वास्थ्य मंत्रालय) के वैधानिक राजपत्रों (Statutory Gazettes), नीतिगत संकल्पों, और पीएफएमएस (PFMS) डीबीटी नियमों का विश्लेषण करते हैं। उनका उद्देश्य बिचौलियों की संस्कृति को समाप्त कर नागरिकों को उनके अधिकारों की ऐसी स्पष्ट और व्यावहारिक जानकारी देना है जिससे वे स्वयं अपना हक प्राप्त कर सकें।'
                      : 'Specializing in the intersection of public policy, administrative circulars, and banking clearance architectures (NPCI APB/PFMS), Sanket leads JanLabh\'s strict verification protocols. His objective is to dismantle bureaucratic gatekeeping by publishing actionable, step-by-step guides that enable any citizen to apply, track, and secure their legal benefits without paying bribes or falling prey to misinformation.'}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold text-slate-600 dark:text-slate-400">{isHi ? 'अनुसंधान एवं विशेषज्ञता क्षेत्र:' : 'Areas of Direct Research:'}</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    {isHi ? 'प्रत्यक्ष लाभ अंतरण (DBT & NPCI)' : 'Direct Benefit Transfers (DBT/NPCI)'}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    {isHi ? 'कृषि व किसान सहायता (PM-KISAN)' : 'Agriculture & Rural Welfare'}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    {isHi ? 'महिला सशक्तिकरण व मातृत्व योजनाएं' : 'Women Empowerment & Child Welfare'}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    {isHi ? 'सार्वजनिक स्वास्थ्य (PMJAY)' : 'Universal Health Coverage'}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    {isHi ? 'छात्रवृत्ति एवं उच्च शिक्षा ऋण' : 'Scholarships & Student Credit Cards'}
                  </span>
                </div>
              </div>
            </section>

            {/* JanLabh 5-Stage Verification Lifecycle */}
            <section className="space-y-4 not-prose border-t border-slate-200 dark:border-slate-800 pt-8">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                <SearchCheck className="h-4 w-4" />
                <span>{isHi ? 'तथ्य-जांच एवं अनुसंधान कार्यप्रणाली' : 'Methodology & Fact-Checking Rigor'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {isHi ? 'जनलाभ की 5-चरणीय तथ्य-जांच एवं सत्यापन प्रक्रिया' : 'The JanLabh 5-Stage Verification Lifecycle'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isHi
                  ? 'जनलाभ पर प्रकाशित किसी भी योजना या आर्टिकल को पाठकों तक पहुंचाने से पहले 5 कड़े सत्यापन चरणों से गुजरना पड़ता है:'
                  : 'Before any scheme guide, problem-solving article, or eligibility calculator rule is published on JanLabh, it must pass five mandatory editorial verification gates:'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2">
                  <div>
                    <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-extrabold flex items-center justify-center text-xs mb-2">
                      1
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {isHi ? 'राजपत्र एवं जीओ ऑडिट' : 'Gazette & GO Extraction'}
                    </h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {isHi ? 'संबंधित मंत्रालय या विभाग द्वारा जारी आधिकारिक गजट अधिसूचना व शासनादेश (Government Order) का मूल अध्ययन।' : 'Primary analysis of statutory gazettes, ministry orders, and operational cabinet guidelines.'}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2">
                  <div>
                    <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-extrabold flex items-center justify-center text-xs mb-2">
                      2
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {isHi ? 'लाइव पोर्टल मिलान' : 'Live Portal Cross-Check'}
                    </h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {isHi ? 'आधिकारिक .gov.in या .nic.in पोर्टल पर जाकर सक्रिय आवेदन फॉर्म, पात्रता शर्तें और सर्वर स्थिति का परीक्षण।' : 'Hands-on auditing of official .gov.in/.nic.in web portals, form fields, and digital upload requirements.'}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2">
                  <div>
                    <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-extrabold flex items-center justify-center text-xs mb-2">
                      3
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {isHi ? 'जमीनी बाधाओं की पहचान' : 'Ground-Reality Stress Testing'}
                    </h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {isHi ? 'बैंक शाखा स्तर पर डीबीटी अस्वीकृति, समग्र/राशन कार्ड मिसमैच और जाति/आय प्रमाणपत्र सत्यापन की वास्तविक जांच।' : 'Field research into banking PFMS rejections, single vs joint accounts, and demographic name mismatches.'}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2">
                  <div>
                    <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-extrabold flex items-center justify-center text-xs mb-2">
                      4
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {isHi ? 'सरल द्विभाषी निर्माण' : 'Plain-Language Synthesis'}
                    </h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {isHi ? 'जटिल कानूनी भाषा को आम नागरिक की समझ योग्य हिंदी व अंग्रेजी में टेबल, फॉर्म लिस्ट और स्टेप्स में ढालना।' : 'Translating administrative jargon into clear, actionable checklists and structured comparison tables.'}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2">
                  <div>
                    <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 font-extrabold flex items-center justify-center text-xs mb-2">
                      5
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {isHi ? 'मासिक समीक्षा एवं मोहर' : 'Monthly Verification Audit'}
                    </h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {isHi ? 'प्रत्येक योजना में "Last Verified" दिनांक अंकित होती है, जिसे नए सरकारी नियमों के अनुसार निरंतर अपडेट किया जाता है।' : 'Regular post-publication audits reflecting active policy changes with explicit date stamps on every page.'}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Correction & Retraction Policy */}
            <section className="space-y-4 not-prose border-t border-slate-200 dark:border-slate-800 pt-8">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                <RefreshCw className="h-4 w-4" />
                <span>{isHi ? 'पारदर्शिता एवं त्रुटि सुधार नीति' : 'Correction, Feedback & Transparency Policy'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {isHi ? 'संशोधन एवं त्वरित सुधार नीति (Correction Policy)' : 'Transparent Corrections & Reader Feedback Standards'}
              </h2>
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-3 leading-relaxed">
                <p>
                  {isHi
                    ? 'सार्वजनिक कल्याणकारी योजनाओं के नियमों, बजट आवंटन, और आवेदन कटऑफ में सरकार द्वारा निरंतर संशोधन किए जाते हैं। जनलाभ अपने पाठकों को पूर्णतः प्रामाणिक और अद्यतन सूचना देने के लिए प्रतिबद्ध है।'
                    : 'Government welfare programs frequently evolve with revised income thresholds, updated installment schedules, and altered documentation portals. JanLabh maintains an open, rigorous corrections protocol to protect readers from outdated information.'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">
                      {isHi ? '1. पाठकों द्वारा रिपोर्टिंग' : '1. Open Reader Reporting'}
                    </span>
                    <span>{isHi ? 'यदि आपको किसी योजना के नियम या लिंक में कोई विसंगति दिखे, तो हमें contact@janlabh.in पर सूचित करें।' : 'Readers can flag broken links, changed eligibility criteria, or portal updates via contact@janlabh.in.'}</span>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">
                      {isHi ? '2. 24-घंटे में सत्यापन' : '2. 24-Hour Audit SLA'}
                    </span>
                    <span>{isHi ? 'हमारी संपादकीय टीम प्राप्त सुझाव को आधिकारिक सरकारी स्रोत से 24 घंटे के भीतर सत्यापित करती है।' : 'Our editorial desk reviews flagged discrepancies against live gazettes within 24 business hours.'}</span>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">
                      {isHi ? '3. सार्वजनिक अपडेट मोहर' : '3. Timestamped Updates'}
                    </span>
                    <span>{isHi ? 'सुधार के पश्चात पेज पर नवीनीकरण दिनांक (Updated Date) स्पष्ट रूप से अंकित की जाती है।' : 'Corrected guides display transparent "Last Verified" and "Updated" timestamps for historical integrity.'}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Non-Affiliation & Commercial Independence Declaration */}
            <section className="space-y-4 not-prose border-t border-slate-200 dark:border-slate-800 pt-8">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                <AlertTriangle className="h-4 w-4" />
                <span>{isHi ? 'वैधानिक गैर-संबद्धता घोषणा' : 'Statutory Non-Affiliation Declaration'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {isHi ? 'सरकारी गैर-संबद्धता एवं व्यावसायिक स्वतंत्रता' : 'Declaration of Non-Affiliation & Commercial Independence'}
              </h2>
              <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
                <p>
                  <strong>{isHi ? 'महत्वपूर्ण घोषणा:' : 'Official Disclaimer:'}</strong>{' '}
                  {isHi
                    ? 'JanLabh.in एक स्वतंत्र नागरिक सेवा पोर्टल है। इसका भारत सरकार, किसी भी राज्य सरकार, मंत्रालय, अथवा किसी सरकारी विभाग से कोई प्रत्यक्ष या अप्रत्यक्ष आधिकारिक संबंध नहीं है। हम किसी भी योजना का आधिकारिक आवेदन स्वीकार नहीं करते हैं और न ही किसी सरकारी दस्तावेज के वितरण का दावा करते हैं। हमारा उद्देश्य केवल आधिकारिक स्रोतों से प्रमाणित जानकारी को सरल भाषा में नागरिकों तक पहुंचाना है।'
                    : 'JanLabh.in is an independent civic research and public information initiative. It is NOT affiliated with, sponsored by, or operating on behalf of the Government of India, any State Government, or any public ministry. We do not accept government applications, charge citizen fees, or issue official sanctions. All scheme names, department logos, and portal references remain the intellectual property of their respective statutory bodies.'}
                </p>
                <p>
                  {isHi
                    ? 'हमारा संपादकीय कार्य किसी भी विज्ञापनदाता या व्यावसायिक समझौते से पूरी तरह अप्रभावित रहता है। हम नागरिकों को जागरूक करने के लिए सभी योजनाओं के आधिकारिक सरकारी पोर्टल (.gov.in / .nic.in) का सीधा लिंक उपलब्ध कराते हैं।'
                    : 'Our editorial evaluations, eligibility calculations, and guidance matrices are strictly separated from any advertising relationships. We provide direct links to authentic government portals (.gov.in / .nic.in) so citizens can apply safely without intermediaries.'}
                </p>
              </div>
            </section>

            {/* Multi-Lingual Digital Inclusion */}
            <section className="space-y-4 not-prose border-t border-slate-200 dark:border-slate-800 pt-8">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                <Globe2 className="h-4 w-4" />
                <span>{isHi ? 'डिजिटल समावेशन एवं भाषा सुलभता' : 'Bilingual Accessibility & Digital Inclusion'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {isHi ? 'द्विभाषी पहुंच: प्रत्येक नागरिक की भाषा में जानकारी' : 'Reaching Every Citizen in Their Preferred Language'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {isHi
                  ? 'भारत की विविधता को ध्यान में रखते हुए जनलाभ हिंदी और अंग्रेजी दोनों भाषाओं में पूर्णतः अनुकूलित है। प्रत्येक योजना, पात्रता जांच, समस्या समाधान गाइड और अपडेट दोनों भाषाओं में समान गुणवत्ता और विवरण के साथ उपलब्ध कराए जाते हैं ताकि ग्रामीण और अर्ध-शहरी क्षेत्रों के नागरिक भी बिना किसी कठिनाई के जानकारी प्राप्त कर सकें।'
                  : 'Reflecting India\'s linguistic diversity, JanLabh provides end-to-end parallel bilingual accessibility in Hindi and English. Every scheme dossier, eligibility calculator, troubleshooting matrix, and gazette update is authored with equal rigor in both languages, ensuring rural, semi-urban, and first-generation digital citizens experience frictionless access.'}
              </p>
            </section>

            {/* Editorial Contact & Institutional Channels */}
            <section className="space-y-4 border-t border-slate-200 dark:border-slate-800 pt-8 not-prose">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Mail className="h-5 w-5 text-amber-600" />
                <span>{isHi ? 'संपादकीय संपर्क एवं जन शिकायत निवारण' : 'Editorial Inquiries & Reader Redressal'}</span>
              </h2>
              <div className="p-5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-3">
                <p className="leading-relaxed">
                  {isHi
                    ? 'यदि आपके पास किसी योजना, सरकारी अधिसूचना या हमारे लेखों के संबंध में कोई प्रश्न, प्रतिक्रिया अथवा सुधार का सुझाव है, तो हमारी संपादकीय टीम से सीधे संपर्क करें:'
                    : 'For editorial questions, corrections, research inquiries, or institutional feedback, contact our editorial team directly:'}
                </p>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-mono text-xs space-y-1.5">
                  <div><strong>Founder & Editor:</strong> Sanket Sinha</div>
                  <div>
                    <strong>Direct Email:</strong>{' '}
                    <a href="mailto:contact@janlabh.in" className="text-amber-700 dark:text-amber-400 font-bold hover:underline">
                      contact@janlabh.in
                    </a>
                  </div>
                  <div><strong>Platform:</strong> JanLabh.in (Government Schemes & Citizen Benefits)</div>
                  <div><strong>Operating Location:</strong> India</div>
                  <div><strong>Turnaround Time:</strong> 24 to 48 business hours</div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60 flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-slate-900 dark:text-white">{isHi ? 'आधिकारिक सोशल मीडिया चैनल:' : 'Official Citizen Channels:'}</span>
                  <a
                    href={COMMUNITY_CONFIG.facebookPageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center gap-1"
                  >
                    <span>Facebook Page</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <span>·</span>
                  <a
                    href={COMMUNITY_CONFIG.whatsappChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline flex items-center gap-1"
                  >
                    <span>WhatsApp Community</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <span>·</span>
                  <a
                    href={COMMUNITY_CONFIG.telegramChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 dark:text-sky-400 font-medium hover:underline flex items-center gap-1"
                  >
                    <span>Telegram Alerts</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="pt-2">
                  <Link
                    href={isHi ? '/hi/contact' : '/contact'}
                    className="inline-flex items-center gap-1.5 font-bold text-amber-700 dark:text-amber-400 hover:underline"
                  >
                    <span>{isHi ? 'हमारे आधिकारिक संपर्क फ़ॉर्म के माध्यम से संदेश भेजें →' : 'Submit an inquiry via our Official Contact Form →'}</span>
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
