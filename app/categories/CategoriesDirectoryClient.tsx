'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CategoryInfo, Scheme, Language } from '@/types';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import {
  Tag,
  ChevronRight,
  Home,
  CheckCircle2,
  ArrowRight,
  Layers,
  Tractor,
  HeartHandshake,
  GraduationCap,
  Award,
  ShieldPlus,
  Briefcase,
  UserCheck
} from 'lucide-react';

interface CategoriesDirectoryClientProps {
  categories: CategoryInfo[];
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

export default function CategoriesDirectoryClient({
  categories,
  schemes,
  initialLang = 'en',
}: CategoriesDirectoryClientProps) {
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
            router.push('/categories');
          } else {
            router.push('/hi/categories');
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
          <span className="font-semibold text-slate-900 dark:text-white">
            {isHi ? 'कल्याणकारी श्रेणियां' : 'Welfare Categories'}
          </span>
        </nav>

        {/* Hero Header */}
        <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              <Layers className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              {isHi ? '8 प्रमुख कल्याण क्षेत्र' : '8 Citizen Welfare Sectors'}
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400">
              {isHi ? 'किसानों, महिलाओं, छात्रों, स्वास्थ्य व स्वरोजगार के लिए' : 'Targeted aid for farmers, women, students, healthcare & livelihoods'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isHi ? 'सरकारी योजना श्रेणियां 2026' : 'Government Scheme Categories 2026'}
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            {isHi
              ? 'अपनी जरूरत के अनुसार योजनाएं खोजें। किसान सम्मान निधि, लाडली बहना, आयुष्मान भारत, छात्रवृत्ति एवं पीएम आवास जैसी सभी योजनाओं को श्रेणी अनुसार देखें।'
              : 'Browse government welfare schemes by beneficiary sector. Access direct benefit transfers, insurance covers, scholarships, and housing grants tailored to your profile.'}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat) => {
            const Icon = CATEGORY_ICON_MAP[cat.id] || Tag;
            const count = schemes.filter((s) => s.category === cat.id).length;
            const catUrl = isHi ? `/hi/categories/${cat.id}` : `/categories/${cat.id}`;

            return (
              <Link
                key={cat.id}
                href={catUrl}
                className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 rounded-xl group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                      {count} {isHi ? 'योजनाएं' : 'Schemes'}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {isHi ? cat.name_hi : cat.name_en}
                  </h2>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {isHi ? cat.description_hi : cat.description_en}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-400">
                  <span>{isHi ? 'योजनाएं व पात्रता देखें' : 'View Schemes & Criteria'}</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
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
