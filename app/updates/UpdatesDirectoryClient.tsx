'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UpdateArticle, Language } from '@/types';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import {
  Bell,
  ChevronRight,
  Home,
  Calendar,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Building
} from 'lucide-react';

interface UpdatesDirectoryClientProps {
  updates: UpdateArticle[];
  initialLang?: Language;
}

export default function UpdatesDirectoryClient({
  updates,
  initialLang = 'en',
}: UpdatesDirectoryClientProps) {
  const router = useRouter();
  const isHi = initialLang === 'hi';
  const { isDark, toggleTheme } = useTheme();
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Header
        lang={initialLang}
        onToggleLang={() => {
          if (isHi) {
            router.push('/updates');
          } else {
            router.push('/hi/updates');
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

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 mb-6">
          <Link href={isHi ? '/hi' : '/'} className="hover:text-amber-700 dark:hover:text-amber-400 flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
            <span>{isHi ? 'होम' : 'Home'}</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="font-semibold text-slate-900 dark:text-white">
            {isHi ? 'सरकारी अपडेट्स व अधिसूचनाएं' : 'Policy Updates & Gazettes'}
          </span>
        </nav>

        {/* Hero Header */}
        <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              <Bell className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              {isHi ? 'प्रमाणित सरकारी अपडेट' : 'Verified Policy Feed'}
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400">
              {isHi ? 'अंतिम तिथि, किस्त ट्रांसफर और ई-केवाईसी' : 'Installment schedules, e-KYC notices & deadlines'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isHi ? 'सरकारी योजना ताजा अपडेट्स 2026' : 'Government Schemes Latest Updates 2026'}
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            {isHi
              ? 'केंद्रीय मंत्रालयों और राज्य सरकारों द्वारा जारी आधिकारिक अधिसूचनाएं, किस्त भुगतान तिथियां, ई-केवाईसी गाइडलाइंस और पोर्टल घोषणाएं।'
              : 'Directly sourced policy changes, installment release dates, Aadhaar-DBT guidelines, and gazette notices verified from official portals.'}
          </p>
        </div>

        {/* Updates Grid */}
        <div className="space-y-6 mb-12">
          {updates.map((update) => {
            const articleUrl = isHi ? `/hi/updates/${update.slug}` : `/updates/${update.slug}`;

            return (
              <article
                key={update.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 hover:border-amber-500/50 dark:hover:border-amber-500/50 transition-all shadow-xs flex flex-col md:flex-row md:items-start justify-between gap-6"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 font-semibold uppercase tracking-wider">
                      <FileText className="h-3.5 w-3.5" />
                      {isHi ? 'आधिकारिक सूचना' : 'Official Notice'}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {update.publishedDate}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      {update.officialSource.authority}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 dark:text-white hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                    <Link href={articleUrl}>
                      {isHi ? update.title_hi : update.title_en}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {isHi ? update.summary_hi : update.summary_en}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {(isHi ? update.keyFacts_hi : update.keyFacts_en).slice(0, 2).map((fact, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-lg"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span className="line-clamp-1">{fact}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex md:flex-col items-center md:items-end justify-between gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
                  <Link
                    href={articleUrl}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-xs transition-colors whitespace-nowrap"
                  >
                    <span>{isHi ? 'पूरा अपडेट पढ़ें' : 'Read Full Notice'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
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
