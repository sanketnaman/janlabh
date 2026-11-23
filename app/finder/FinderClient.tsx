'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Language, Scheme } from '@/types';
import { SCHEMES } from '@/data/schemes';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemeFinder from '@/components/SchemeFinder';
import SearchModal from '@/components/SearchModal';
import {
  EVALUATION_PILLARS,
  QUICK_CATEGORY_GROUPS,
  READINESS_STEPS,
  FINDER_FAQS,
} from './finderData';
import {
  ChevronRight,
  Home,
  Sparkles,
  ShieldCheck,
  Scale,
  Users,
  CreditCard,
  Lock,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  FileText,
  Check,
  ExternalLink,
  Layers,
  Landmark,
  Compass,
  Briefcase,
  Award,
  Info,
} from 'lucide-react';

interface FinderClientProps {
  schemes?: Scheme[];
  initialLang?: Language;
}

export default function FinderClient({
  schemes = [],
  initialLang = 'en',
}: FinderClientProps) {
  const router = useRouter();
  const isHi = initialLang === 'hi';
  const { isDark, toggleTheme } = useTheme();
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>('faq-calc');

  // Fallback to full SCHEMES list if not passed from server
  const activeSchemes = schemes.length > 0 ? schemes : SCHEMES;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Header
        lang={initialLang}
        onToggleLang={() => {
          if (isHi) {
            router.push('/finder');
          } else {
            router.push('/hi/finder');
          }
        }}
        onOpenSearch={() => setSearchModalOpen(true)}
        onSelectNav={(nav) => {
          const prefix = isHi ? '/hi' : '';
          if (nav === 'home') router.push(prefix || '/');
          else if (nav === 'schemes') router.push(`${prefix}/schemes`);
          else if (nav === 'finder') router.push(`${prefix}/finder`);
          else if (nav === 'checker') router.push(`${prefix}/checker`);
          else if (nav === 'states') router.push(`${prefix}/states`);
          else if (nav === 'updates') router.push(`${prefix}/updates`);
          else if (nav === 'trust') router.push(`${prefix}/about`);
        }}
        activeNav="finder"
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 mb-6"
        >
          <Link
            href={isHi ? '/hi' : '/'}
            className="hover:text-amber-700 dark:hover:text-amber-400 flex items-center gap-1"
          >
            <Home className="h-3.5 w-3.5" />
            <span>{isHi ? 'होम' : 'Home'}</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="font-semibold text-slate-900 dark:text-white">
            {isHi ? 'स्मार्ट योजना खोजक (Scheme Finder)' : 'Smart Scheme Finder'}
          </span>
        </nav>

        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              <Sparkles className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>{isHi ? 'स्मार्ट पात्रता अनुशंसा इंजन 2026' : 'Smart Eligibility Recommendation Engine 2026'}</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              <Lock className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
              <span>{isHi ? '100% शून्य डेटा संग्रह गारंटी' : '100% Zero Data Stored'}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isHi
              ? 'अपनी प्रोफाइल के अनुसार सरकारी योजनाएं खोजें'
              : 'Discover Government Schemes Matching Your Profile'}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-4xl leading-relaxed">
            {isHi
              ? 'भारत के विशाल कल्याणकारी ढांचे में 500 से अधिक केंद्रीय व राज्य स्तरीय योजनाएं सक्रिय हैं। केवल 4 सरल चरणों में अपना राज्य, आयु, पेशा और प्राथमिक आवश्यकता बताएं। हमारा नियम-आधारित इंजन तुरंत आपकी पात्रता का विश्लेषण कर उपयुक्त योजनाओं की सूची प्रस्तुत करेगा।'
              : 'Across India’s federal welfare landscape, hundreds of central and state welfare programs disburse direct cash benefits, pensions, education credit, and housing grants. Select your profile below for instant, transparent eligibility recommendations.'}
          </p>
        </div>

        {/* Section 1: Interactive Scheme Finder Form Component */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 sm:p-8 shadow-sm mb-16">
          <SchemeFinder
            lang={initialLang}
            allSchemes={activeSchemes}
            onSelectScheme={(s) => {
              const prefix = isHi ? '/hi' : '';
              router.push(`${prefix}/schemes/${s.slug}`);
            }}
            onCheckEligibility={(s) => {
              const prefix = isHi ? '/hi' : '';
              router.push(`${prefix}/checker?scheme=${s.id}`);
            }}
          />
        </div>

        {/* Section 2: The 4-Pillar Welfare Evaluation Framework */}
        <section className="mb-16 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <Scale className="h-4 w-4" />
            <span>{isHi ? 'पात्रता निर्धारण के 4 स्तंभ' : 'The 4-Pillar Evaluation Framework'}</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {isHi
              ? 'सरकारी योजना पात्रता कैसे निर्धारित होती है? 4 संवैधानिक मापदंड'
              : 'How Government Welfare Eligibility is Calculated: 4 Core Pillars'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
            {isHi
              ? 'हमारा एल्गोरिथ्म केंद्र और राज्य सरकारों के आधिकारिक गजट अधिसूचनाओं के 4 मूल स्तंभों पर काम करता है। समझिए कि विभिन्न योजनाओं में आपका चयन किन कानूनी और प्रशासनिक नियमों के तहत होता है:'
              : 'Government departments disburse welfare grants strictly through statutory gatekeeping criteria. Understanding these 4 evaluation pillars ensures clarity on why specific schemes are recommended for your profile:'}
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {EVALUATION_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="h-8 w-8 rounded-lg bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 font-extrabold text-xs flex items-center justify-center border border-amber-300/80 dark:border-amber-800">
                      {pillar.number}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {isHi ? pillar.subtitle_hi : pillar.subtitle_en}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {isHi ? pillar.title_hi : pillar.title_en}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isHi ? pillar.description_hi : pillar.description_en}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                    {isHi ? 'मुख्य सत्यापन बिंदु:' : 'Key Statutory Checks:'}
                  </div>
                  {(isHi ? pillar.checklist_hi : pillar.checklist_en).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Category-Wise Quick Discovery Guide */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <Layers className="h-4 w-4" />
            <span>{isHi ? 'त्वरित योजना समूह' : 'Category-Wise Welfare Discovery'}</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {isHi
              ? 'जनसांख्यिकीय समूहों के अनुसार प्रमुख सरकारी योजनाएं'
              : 'Flagship Welfare Programs Grouped by Citizen Life Stage'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
            {isHi
              ? 'यदि आप अपनी श्रेणी के अनुसार सभी उपलब्ध योजनाओं का विस्तृत ब्यौरा देखना चाहते हैं, तो नीचे दिए गए प्रमुख समूहों का अन्वेषण करें:'
              : 'Explore comprehensive welfare clusters catering to rural cultivators, women entrepreneurs, higher education scholars, and vulnerable senior citizens:'}
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {QUICK_CATEGORY_GROUPS.map((group) => (
              <div
                key={group.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between hover:border-amber-400 dark:hover:border-amber-500 transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-amber-700 dark:text-amber-400">
                      {isHi ? group.badge_hi : group.badge_en}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-400 font-semibold">
                      {isHi ? 'सत्यापित श्रेणी' : 'Verified Category'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {isHi ? group.title_hi : group.title_en}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {isHi ? 'लक्षित नागरिक: ' : 'Target Citizens: '}
                    </span>
                    {isHi ? group.targetAudience_hi : group.targetAudience_en}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      {isHi ? 'प्रमुख फ्लैगशिप योजनाएं:' : 'Flagship Entitlements:'}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {(isHi ? group.flagshipSchemes_hi : group.flagshipSchemes_en).map((prog, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/40"
                        >
                          {prog}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-400">
                  <Link
                    href={isHi ? `/hi${group.linkUrl}` : group.linkUrl}
                    className="flex items-center gap-1.5 hover:underline"
                  >
                    <span>{isHi ? 'इस श्रेणी की सभी योजनाएं देखें' : 'Explore All Schemes in Category'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Pre-Application Readiness Checklist */}
        <section className="mb-16 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <CheckCircle2 className="h-4 w-4" />
            <span>{isHi ? 'आवेदन पूर्व तैयारी' : 'Pre-Application Readiness Checklist'}</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {isHi
              ? 'योजना मिलने के बाद क्या करें? आवेदन से पहले 4 अनिवार्य कदम'
              : 'What to Do After Discovering a Scheme: 4 Crucial Steps'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
            {isHi
              ? 'योजना की सिफारिश मिलने के बाद सीधे आवेदन करने से पहले निम्नलिखित 4 प्रशासनिक तैयारियों को पूरा कर लें ताकि आपका आवेदन किसी भी तकनीकी कारण से निरस्त न हो:'
              : 'Discovering an eligible scheme is only the first step. Over 60% of citizen welfare rejections occur due to pre-application document discrepancies. Complete these 4 steps beforehand:'}
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {READINESS_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-6 w-6 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                      {step.stepNumber}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {isHi ? step.title_hi : step.title_en}
                    </h3>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isHi ? step.action_hi : step.action_en}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-start gap-2 text-[11px] text-amber-900 dark:text-amber-300 bg-amber-100/60 dark:bg-amber-950/40 p-2.5 rounded-xl border border-amber-200 dark:border-amber-900/60">
                  <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <span className="font-bold">{isHi ? 'महत्वपूर्ण चेतावनी: ' : 'Critical Warning: '}</span>
                    {isHi ? step.warning_hi : step.warning_en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Statutory Privacy & Client-Side Execution Guarantee */}
        <section className="mb-16 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-slate-100 to-amber-500/10 dark:from-emerald-950/30 dark:via-slate-900 dark:to-amber-950/20 p-6 sm:p-10 border border-emerald-300/60 dark:border-emerald-800/60 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
            <ShieldCheck className="h-4 w-4" />
            <span>{isHi ? 'डिजिटल डेटा सुरक्षा गारंटी' : 'Statutory Privacy Guarantee (DPDP Act 2023)'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {isHi
              ? 'शून्य संवेदनशील व्यक्तिगत डेटा संग्रहण: आपकी गोपनीयता हमारी सर्वोच्च प्राथमिकता'
              : 'Zero Sensitive Data Storage Guarantee: In-Memory Client Execution'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
            {isHi
              ? 'जनलाभ स्कीम फाइंडर भारतीय डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 (DPDP Act) के उच्चतम सुरक्षा मानकों के तहत निर्मित है। हमारा यह दृढ़ विश्वास है कि नागरिक कल्याण की जानकारी पाने के लिए नागरिकों को अपनी व्यक्तिगत पहचान को जोखिम में डालने की आवश्यकता नहीं होनी चाहिए।'
              : 'The JanLabh Scheme Finder operates under stringent data minimization protocols compliant with India’s Digital Personal Data Protection Act, 2023. We believe public welfare knowledge should be accessible without exposing citizens to digital profiling or data harvesting.'}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-900/90 p-4 rounded-2xl border border-emerald-200/60 dark:border-emerald-900/40">
              <div className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1.5 mb-1">
                <Lock className="h-3.5 w-3.5 text-emerald-600" />
                <span>{isHi ? 'कोई आधार / OTP नहीं' : 'No Aadhaar or OTP'}</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {isHi
                  ? 'हम कभी भी 12-अंकीय आधार, ओटीपी, पैन नंबर या बैंक क्रेडेंशियल नहीं मांगते।'
                  : 'We never request 12-digit Aadhaar numbers, OTP verification, PAN cards, or banking passwords.'}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900/90 p-4 rounded-2xl border border-emerald-200/60 dark:border-emerald-900/40">
              <div className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1.5 mb-1">
                <Compass className="h-3.5 w-3.5 text-emerald-600" />
                <span>{isHi ? 'ब्राउज़र मेमोरी निष्पादन' : 'Volatile Memory Only'}</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {isHi
                  ? 'पात्रता मिलान पूरी तरह से आपके डिवाइस के ब्राउज़र में होता है, सर्वर पर कुछ सेव नहीं होता।'
                  : 'Rule evaluation executes client-side in browser RAM; zero user inputs are saved to remote servers.'}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900/90 p-4 rounded-2xl border border-emerald-200/60 dark:border-emerald-900/40">
              <div className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>{isHi ? '100% निशुल्क व निष्पक्ष' : '100% Free & Impartial'}</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {isHi
                  ? 'जनहितैषी सार्वजनिक मंच: कोई पंजीकरण शुल्क, कमीशन या दलाल शामिल नहीं है।'
                  : 'Zero subscription charges, intermediary commissions, or third-party lead selling.'}
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: In-Depth FAQ Accordion (Bilingual) */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <HelpCircle className="h-4 w-4" />
            <span>{isHi ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {isHi
              ? 'स्कीम फाइंडर से जुड़े मुख्य सवाल और उनके सटीक जवाब'
              : 'Frequently Asked Questions on Scheme Discovery'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
            {isHi
              ? 'पात्रता गणना, डेटा सुरक्षा, आवेदन प्रक्रिया और अनुशंसित योजनाओं से संबंधित नागरिकों की सामान्य शंकाओं का समाधान:'
              : 'Authoritative answers regarding recommendation methodology, data privacy guarantees, and government application protocols:'}
          </p>

          <div className="mt-6 space-y-3">
            {FINDER_FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <span className="pr-4">{isHi ? faq.q_hi : faq.q_en}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-500 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                      {isHi ? faq.a_hi : faq.a_en}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer
        lang={initialLang}
        onSelectNav={(nav) => {
          const prefix = isHi ? '/hi' : '';
          if (nav === 'home') router.push(prefix || '/');
          else if (nav === 'schemes') router.push(`${prefix}/schemes`);
          else if (nav === 'finder') router.push(`${prefix}/finder`);
          else if (nav === 'checker') router.push(`${prefix}/checker`);
          else if (nav === 'states') router.push(`${prefix}/states`);
          else if (nav === 'updates') router.push(`${prefix}/updates`);
          else if (nav === 'trust') router.push(`${prefix}/about`);
        }}
        onSelectCategory={(catId) => {
          const prefix = isHi ? '/hi' : '';
          router.push(`${prefix}/categories/${catId}`);
        }}
        onSelectState={(stId) => {
          const prefix = isHi ? '/hi' : '';
          router.push(`${prefix}/states/${stId}`);
        }}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        lang={initialLang}
        onSelectScheme={(s) => {
          setSearchModalOpen(false);
          const prefix = isHi ? '/hi' : '';
          router.push(`${prefix}/schemes/${s.slug}`);
        }}
      />
    </div>
  );
}
