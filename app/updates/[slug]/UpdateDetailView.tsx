'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UpdateArticle, Language, Scheme } from '@/types';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import {
  Calendar,
  ExternalLink,
  ChevronRight,
  Home,
  CheckCircle2,
  AlertCircle,
  FileText,
  Building,
  ArrowRight,
  ShieldCheck,
  Bell,
  Share2,
  Check
} from 'lucide-react';
import CommunityCallout from '@/components/CommunityCallout';

interface UpdateDetailViewProps {
  update: UpdateArticle;
  relatedScheme?: Scheme | null;
  initialLang?: Language;
}

export default function UpdateDetailView({
  update,
  relatedScheme,
  initialLang = 'en',
}: UpdateDetailViewProps) {
  const router = useRouter();
  const isHi = initialLang === 'hi';

  const { isDark, toggleTheme } = useTheme();
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Header
        lang={initialLang}
        onToggleLang={() => {
          if (isHi) {
            router.push(`/updates/${update.slug}`);
          } else {
            router.push(`/hi/updates/${update.slug}`);
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
        activeNav="updates"
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 mb-6">
          <Link href={isHi ? '/hi' : '/'} className="hover:text-amber-700 dark:hover:text-amber-400 flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
            <span>{isHi ? 'होम' : 'Home'}</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <Link href={isHi ? '/hi/updates' : '/updates'} className="hover:text-amber-700 dark:hover:text-amber-400">
            {isHi ? 'ताजा अपडेट्स' : 'Updates'}
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="font-semibold text-slate-900 dark:text-white line-clamp-1">
            {isHi ? update.title_hi : update.title_en}
          </span>
        </nav>

        {/* Article Container */}
        <article className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-8">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-5">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                <Bell className="h-3 w-3 text-amber-600" />
                {isHi ? 'सत्यापित सरकारी सूचना' : 'Official Update'}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {update.publishedDate}
              </span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>{isHi ? 'कॉपी हो गया' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Share2 className="h-3.5 w-3.5" />
                  <span>{isHi ? 'शेयर करें' : 'Share'}</span>
                </>
              )}
            </button>
          </div>

          {/* Headline & Summary */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {isHi ? update.title_hi : update.title_en}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {isHi ? update.summary_hi : update.summary_en}
            </p>
          </div>

          {/* Banner Image */}
          {update.bannerImage && (
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm bg-slate-100 dark:bg-slate-900">
              <img
                src={update.bannerImage}
                alt={isHi ? update.title_hi : update.title_en}
                className="w-full h-auto object-cover max-h-[500px]"
                loading="eager"
              />
            </div>
          )}

          {/* Key Facts Box */}
          <div className="bg-amber-50/60 dark:bg-slate-800/80 rounded-xl p-5 sm:p-6 border border-amber-200/80 dark:border-slate-700 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <span>{isHi ? 'मुख्य बिंदु व निष्कर्ष (Key Facts)' : 'Key Facts & Direct Benefits'}</span>
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-800 dark:text-slate-200">
              {(isHi ? update.keyFacts_hi : update.keyFacts_en).map((fact, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-600 shrink-0">▪</span>
                  <span className="leading-relaxed">{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Dates */}
          {((isHi ? update.importantDates_hi : update.importantDates_en)?.length || 0) > 0 && (
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar className="h-4 w-4 text-sky-600" />
                <span>{isHi ? 'महत्वपूर्ण तिथियां व समय-सीमा' : 'Important Dates & Deadlines'}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {(isHi ? update.importantDates_hi : update.importantDates_en)?.map((dateStr, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                  >
                    {dateStr}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Who is Affected */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {isHi ? 'कौन प्रभावित होगा? (Who Is Affected)' : 'Who is Affected by this Announcement?'}
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {isHi ? update.whoIsAffected_hi : update.whoIsAffected_en}
            </p>
          </div>

          {/* Citizen Action Checklist */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {isHi ? 'नागरिकों को क्या करना चाहिए? (Action Steps)' : 'What Should Citizens Do Next?'}
            </h2>
            <div className="space-y-2">
              {(isHi ? update.whatShouldUsersDo_hi : update.whatShouldUsersDo_en).map((action, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80"
                >
                  <span className="flex items-center justify-center h-5 w-5 rounded-full bg-amber-600 text-white text-[11px] font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {action}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Related Scheme Link */}
          {relatedScheme && (
            <div className="bg-emerald-50/60 dark:bg-emerald-950/30 rounded-xl p-5 border border-emerald-200/80 dark:border-emerald-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                  {isHi ? 'संबंधित मुख्य योजना' : 'Related Flagship Scheme'}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  {isHi ? relatedScheme.title_hi : relatedScheme.title_en}
                </h3>
              </div>
              <Link
                href={isHi ? `/hi/schemes/${relatedScheme.slug}` : `/schemes/${relatedScheme.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors whitespace-nowrap self-start sm:self-auto"
              >
                <span>{isHi ? 'योजना विवरण देखें' : 'View Scheme Guide'}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}

          {/* Community Channel Alert Box */}
          <CommunityCallout lang={isHi ? 'hi' : 'en'} variant="card" />

          {/* Official Verification Citation Box */}
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-5 border border-slate-200 dark:border-slate-700 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>{isHi ? 'आधिकारिक स्रोत व प्राधिकार' : 'Official Source & Verification Authority'}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-white">{update.officialSource.name}</span> — {update.officialSource.authority}
            </p>
            {update.officialSource.url && (
              <a
                href={update.officialSource.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-400 hover:underline font-semibold pt-1"
              >
                <span>{isHi ? 'आधिकारिक पोर्टल लिंक खोलें' : 'Visit Official Authority Portal'}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </article>
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
