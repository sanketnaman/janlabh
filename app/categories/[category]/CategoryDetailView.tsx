'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CategoryInfo, Scheme, Language } from '@/types';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemeCard from '@/components/SchemeCard';
import SearchModal from '@/components/SearchModal';
import {
  Tag,
  ChevronRight,
  Home,
  CheckCircle2,
  FileCheck2,
  ArrowRight,
  Sparkles,
  Tractor,
  HeartHandshake,
  GraduationCap,
  Award,
  ShieldPlus,
  Briefcase,
  UserCheck
} from 'lucide-react';

interface CategoryDetailViewProps {
  categoryInfo: CategoryInfo;
  schemes: Scheme[];
  initialLang?: Language;
}

const CATEGORY_ICON_MAP: Record<string, React.ElementType> = {
  farmers: Tractor,
  women: HeartHandshake,
  students: GraduationCap,
  scholarships: Award,
  health: ShieldPlus,
  housing: Home,
  pension: UserCheck,
  employment: Briefcase,
};

export default function CategoryDetailView({
  categoryInfo,
  schemes,
  initialLang = 'en',
}: CategoryDetailViewProps) {
  const router = useRouter();
  const isHi = initialLang === 'hi';
  const { isDark, toggleTheme } = useTheme();
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const IconComp = CATEGORY_ICON_MAP[categoryInfo.id] || Tag;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Header
        lang={initialLang}
        onToggleLang={() => {
          if (isHi) {
            router.push(`/categories/${categoryInfo.id}`);
          } else {
            router.push(`/hi/categories/${categoryInfo.id}`);
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
        activeNav="schemes"
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
          <Link href={isHi ? '/hi/categories' : '/categories'} className="hover:text-amber-700 dark:hover:text-amber-400">
            {isHi ? 'सभी श्रेणियां' : 'Categories'}
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="font-semibold text-slate-900 dark:text-white">
            {isHi ? categoryInfo.name_hi : categoryInfo.name_en}
          </span>
        </nav>

        {/* Category Header Hero */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  <IconComp className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                  {isHi ? 'श्रेणी कल्याण पोर्टल' : 'Welfare Category Portal'}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                  {isHi ? `${schemes.length} सत्यापित योजनाएं` : `${schemes.length} Active Schemes`}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {isHi ? categoryInfo.name_hi : categoryInfo.name_en}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {isHi ? categoryInfo.description_hi : categoryInfo.description_en}
              </p>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-amber-50/70 dark:bg-slate-800/80 p-5 rounded-xl border border-amber-200/80 dark:border-slate-700 flex flex-col gap-3 min-w-[240px]">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                {isHi ? 'त्वरित सहायता' : 'Quick Actions'}
              </div>
              <Link
                href={isHi ? '/hi/finder' : '/finder'}
                className="inline-flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-amber-800 dark:hover:text-amber-300 py-1.5 border-b border-amber-200/50 dark:border-slate-700 transition-colors"
              >
                <span>{isHi ? 'पात्रता खोजें' : 'Scheme Finder AI'}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href={isHi ? '/hi/checker' : '/checker'}
                className="inline-flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-amber-800 dark:hover:text-amber-300 py-1.5 border-b border-amber-200/50 dark:border-slate-700 transition-colors"
              >
                <span>{isHi ? 'पात्रता चेक करें' : 'Eligibility Calculator'}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href={isHi ? '/hi/states' : '/states'}
                className="inline-flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-amber-800 dark:hover:text-amber-300 py-1.5 transition-colors"
              >
                <span>{isHi ? 'राज्य अनुसार खोजें' : 'Browse by State'}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Eligibility & Documentation Guidelines */}
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
              <FileCheck2 className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {isHi ? 'प्राथमिक पात्रता व आवश्यक दस्तावेज' : 'Priority Eligibility & Required Documentation'}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isHi ? categoryInfo.priorityCriteria_hi : categoryInfo.priorityCriteria_en}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Schemes Grid */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {isHi
                ? `${categoryInfo.name_hi} की प्रमुख योजनाएं (${schemes.length})`
                : `Schemes Under ${categoryInfo.name_en} (${schemes.length})`}
            </h2>
            <Link
              href={isHi ? '/hi/schemes' : '/schemes'}
              className="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1"
            >
              <span>{isHi ? 'सभी योजनाएं देखें' : 'View All Schemes'}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {schemes.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <p className="text-slate-500 dark:text-slate-400">
                {isHi ? 'इस श्रेणी में फिलहाल कोई योजना उपलब्ध नहीं है।' : 'No schemes available in this category currently.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schemes.map((scheme) => (
                <SchemeCard
                  key={scheme.id}
                  scheme={scheme}
                  lang={initialLang}
                  onSelect={(s) => {
                    const prefix = isHi ? '/hi' : '';
                    router.push(`${prefix}/schemes/${s.slug}`);
                  }}
                  onCheckEligibility={(s) => {
                    const prefix = isHi ? '/hi' : '';
                    router.push(`${prefix}/checker?scheme=${s.id}`);
                  }}
                />
              ))}
            </div>
          )}
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
