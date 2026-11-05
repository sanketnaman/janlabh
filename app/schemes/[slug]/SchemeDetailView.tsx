'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Scheme, Language } from '@/types';
import { SCHEMES } from '@/data/schemes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import AdBannerSlot from '@/components/AdBannerSlot';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Calendar,
  Building,
  FileText,
  AlertCircle,
  HelpCircle,
  Clock,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Share2,
  Check,
  CheckSquare,
  Square,
  AlertTriangle
} from 'lucide-react';

interface SchemeDetailViewProps {
  scheme: Scheme;
}

export default function SchemeDetailView({ scheme }: SchemeDetailViewProps) {
  const router = useRouter();
  const [lang, setLang] = useState<Language>('hi');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const stored = localStorage.getItem('janlabh-theme');
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else if (stored === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('janlabh-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('janlabh-theme', 'light');
      }
      return next;
    });
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'hi' ? 'en' : 'hi'));
  };

  const handleSelectNav = (navId: string) => {
    if (navId === 'home') router.push('/');
    else if (navId === 'schemes' || navId === 'finder' || navId === 'checker' || navId === 'states' || navId === 'updates') {
      router.push(`/?nav=${navId}`);
    } else if (navId === 'trust' || navId === 'editorial') {
      router.push('/about');
    }
  };

  const handleOpenLegal = (pageId: string) => {
    if (pageId === 'privacy') router.push('/privacy-policy');
    else if (pageId === 'terms' || pageId === 'disclaimer') router.push('/terms');
    else if (pageId === 'about' || pageId === 'editorial' || pageId === 'verification' || pageId === 'corrections') router.push('/about');
    else if (pageId === 'contact') router.push('/contact');
  };

  const handleShare = () => {
    const url = `https://janlabh.in/schemes/${scheme.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const toggleDoc = (index: number) => {
    setCheckedDocs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const isHi = lang === 'hi';

  const relatedSchemes = SCHEMES.filter(
    (s) => s.id !== scheme.id && (s.category === scheme.category || s.state === scheme.state)
  ).slice(0, 3);

  const problemsList = isHi ? scheme.commonProblems_hi : scheme.commonProblems_en;

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenSearch={() => setSearchModalOpen(true)}
        onSelectNav={handleSelectNav}
        activeNav="schemes"
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Breadcrumb strip with Share action */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-slate-500 dark:text-slate-400">
        <div className="mx-auto max-w-5xl flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium">
              {isHi ? 'होम' : 'Home'}
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link href="/?nav=schemes" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium">
              {isHi ? 'सभी योजनाएं' : 'All Schemes'}
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-xs">
              {isHi ? scheme.shortTitle_hi : scheme.shortTitle_en}
            </span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            title="Share this scheme guide"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-300 font-semibold">{isHi ? 'लिंक कॉपी हुआ' : 'Link Copied'}</span>
              </>
            ) : (
              <>
                <Share2 className="h-3.5 w-3.5 text-slate-600 dark:text-slate-400" />
                <span>{isHi ? 'शेयर करें' : 'Share'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-8">
          
          {/* Top Title & Metadata Header */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300">
                {isHi ? scheme.stateLabel_hi : scheme.stateLabel_en}
              </span>
              <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 uppercase">
                {scheme.category}
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-emerald-700 dark:text-emerald-400 ml-auto">
                <ShieldCheck className="h-4 w-4" />
                <span>{isHi ? `सत्यापित: ${scheme.lastVerified}` : `Verified: ${scheme.lastVerified}`}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {isHi ? scheme.title_hi : scheme.title_en}
            </h1>

            {/* Quick Answer Box */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs">
              <div>
                <span className="font-semibold text-slate-500 dark:text-slate-400 block mb-0.5">
                  {isHi ? 'वित्तीय लाभ / सहायता:' : 'Benefit / Financial Cover:'}
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {isHi ? scheme.benefitAmount_hi : scheme.benefitAmount_en}
                </span>
              </div>
              <div>
                <span className="font-semibold text-slate-500 dark:text-slate-400 block mb-0.5">
                  {isHi ? 'कौन आवेदन कर सकता है:' : 'Who Can Apply:'}
                </span>
                <span className="text-xs text-slate-800 dark:text-slate-200 font-medium">
                  {isHi ? scheme.whoCanApply_hi : scheme.whoCanApply_en}
                </span>
              </div>
              <div>
                <span className="font-semibold text-slate-500 dark:text-slate-400 block mb-0.5">
                  {isHi ? 'आवेदन का माध्यम:' : 'Application Mode:'}
                </span>
                <span className="text-xs text-slate-800 dark:text-slate-200 font-medium">
                  {scheme.applicationMode}
                </span>
              </div>
            </div>

            {/* Action CTAs: Official Portal + Eligibility Checker */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {scheme.officialSources[0] && (
                <a
                  href={scheme.officialSources[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 shadow-sm transition-colors cursor-pointer"
                >
                  <span>{isHi ? 'आधिकारिक पोर्टल पर आवेदन करें' : 'Apply on Official Government Portal'}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}

              <Link
                href="/?nav=checker"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100 transition-colors cursor-pointer"
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>{isHi ? 'विस्तृत पात्रता जांचें' : 'Evaluate Full Eligibility'}</span>
              </Link>
            </div>
          </div>

          {/* Scheme Overview */}
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {isHi ? 'योजना क्या है और इसका उद्देश्य क्या है?' : 'What is this Scheme & Objectives?'}
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {isHi ? scheme.whatIsThis_hi : scheme.whatIsThis_en}
            </p>
          </section>

          {/* Key Benefits */}
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {isHi ? 'प्रमुख लाभ एवं विशेषताएं (Key Benefits)' : 'Key Benefits & Entitlements'}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {(isHi ? scheme.benefitsList_hi : scheme.benefitsList_en).map((benefit, idx) => (
                <li key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* AdSense Unit / Advisory Slot */}
          <AdBannerSlot lang={lang} format="in-article" adSlot="scheme-detail-mid" />

          {/* Eligibility Matrix */}
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {isHi ? 'पात्रता मानदंड (Eligibility Criteria)' : 'Eligibility Matrix'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/60 space-y-2">
                <span className="font-bold text-xs text-emerald-900 dark:text-emerald-300 uppercase tracking-wider block">
                  ✓ {isHi ? 'कौन पात्र हैं (Eligible If):' : 'Who is Eligible:'}
                </span>
                <ul className="text-xs space-y-2 text-slate-800 dark:text-slate-200">
                  {(isHi ? scheme.eligibility.eligibleIf_hi : scheme.eligibility.eligibleIf_en).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 space-y-2">
                <span className="font-bold text-xs text-rose-900 dark:text-rose-300 uppercase tracking-wider block">
                  ✗ {isHi ? 'कौन पात्र नहीं हैं (Not Eligible If):' : 'Who is NOT Eligible:'}
                </span>
                <ul className="text-xs space-y-2 text-slate-800 dark:text-slate-200">
                  {(isHi ? scheme.eligibility.notEligibleIf_hi : scheme.eligibility.notEligibleIf_en).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-600 dark:text-rose-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Required Documents (Interactive Checkbox List) */}
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <span>{isHi ? 'आवश्यक दस्तावेज चेकलिस्ट' : 'Required Documents Checklist'}</span>
              </h2>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {isHi ? 'तैयार दस्तावेजों पर टिक करें' : 'Click to check off prepared documents'}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {(isHi ? scheme.requiredDocuments_hi : scheme.requiredDocuments_en).map((doc, idx) => {
                const isChecked = !!checkedDocs[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleDoc(idx)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center gap-2.5 select-none ${
                      isChecked
                        ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {isChecked ? (
                      <CheckSquare className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    ) : (
                      <Square className="h-4 w-4 text-slate-400 dark:text-slate-500 shrink-0" />
                    )}
                    <span className={`font-medium ${isChecked ? 'line-through text-emerald-700 dark:text-emerald-400' : ''}`}>
                      {doc}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Step-by-Step Application */}
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {isHi ? 'आवेदन कैसे करें (Step-by-Step Application Guide)' : 'How to Apply (Step-by-Step Guide)'}
            </h2>
            <ol className="space-y-3 text-xs">
              {(isHi ? scheme.howToApply_hi : scheme.howToApply_en).map((step, idx) => (
                <li key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 dark:bg-amber-600 text-white font-bold shrink-0 text-xs">
                    {idx + 1}
                  </span>
                  <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Status Check Guide */}
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>{isHi ? 'आवेदन की स्थिति कैसे जांचें (Status Check)' : 'Application Status Tracking Guide'}</span>
            </h2>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {isHi ? scheme.statusCheckGuide_hi : scheme.statusCheckGuide_en}
            </p>
          </section>

          {/* Common Problems / Pitfalls (if available) */}
          {problemsList && problemsList.length > 0 && (
            <section className="bg-amber-50/60 dark:bg-amber-950/20 p-6 sm:p-8 rounded-2xl border border-amber-200 dark:border-amber-900/50 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-amber-950 dark:text-amber-200 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <span>{isHi ? 'सामान्य समस्याएं व प्रमाणित समाधान' : 'Common Application Issues & Solutions'}</span>
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {problemsList.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-amber-200/80 dark:border-amber-900/60 bg-white dark:bg-slate-900 space-y-1">
                    <div className="text-xs font-bold text-rose-800 dark:text-rose-400 flex items-center gap-1.5">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{item.problem}</span>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 pl-5 leading-relaxed">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{isHi ? 'समाधान: ' : 'Solution: '}</span>
                      {item.solution}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Frequently Asked Questions */}
          {scheme.faqs_en && scheme.faqs_en.length > 0 && (
            <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <span>{isHi ? 'अक्सर पूछे जाने वाले सवाल (FAQs)' : 'Frequently Asked Questions (FAQs)'}</span>
              </h2>
              <div className="space-y-3">
                {(isHi ? scheme.faqs_hi : scheme.faqs_en).map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h3 className="font-bold text-xs text-slate-900 dark:text-white">
                      Q: {faq.q}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      A: {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related Schemes (Pillars) */}
          {relatedSchemes.length > 0 && (
            <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {isHi ? 'संबंधित अन्य सरकारी योजनाएं' : 'Related Government Welfare Schemes'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedSchemes.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/schemes/${rel.slug}`}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-500 bg-slate-50 dark:bg-slate-800/50 hover:shadow-sm transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="text-[10px] font-semibold uppercase text-amber-700 dark:text-amber-400 mb-1">
                        {isHi ? rel.stateLabel_hi : rel.stateLabel_en}
                      </div>
                      <h3 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                        {isHi ? rel.shortTitle_hi : rel.shortTitle_en}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                        {isHi ? rel.benefitSummary_hi : rel.benefitSummary_en}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-amber-700 dark:text-amber-400">
                      <span>{isHi ? 'गाइड पढ़ें' : 'Read Guide'}</span>
                      <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Primary Statutory Citations */}
          <section className="bg-slate-100/70 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs space-y-2">
            <div className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {isHi ? 'प्राथमिक आधिकारिक स्रोत एवं उद्धरण:' : 'Primary Official Citations & Sources:'}
            </div>
            {scheme.officialSources.map((source, idx) => (
              <div key={idx} className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">{source.name}</span>
                  <span className="text-slate-500 dark:text-slate-400"> — {source.authority}</span>
                </div>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>{source.url}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            ))}
          </section>

        </div>
      </main>

      <Footer
        lang={lang}
        onOpenLegal={handleOpenLegal}
        onSelectNav={handleSelectNav}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        lang={lang}
        onSelectScheme={(s) => {
          setSearchModalOpen(false);
          router.push(`/schemes/${s.slug}`);
        }}
        onSelectUpdate={() => {
          setSearchModalOpen(false);
          router.push('/');
        }}
        allSchemes={SCHEMES}
      />
    </div>
  );
}
