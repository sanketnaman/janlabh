'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { StateInfo, Language } from '@/types';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import {
  MapPin,
  Building,
  ChevronRight,
  Home,
  CheckCircle2,
  ArrowRight,
  Layers
} from 'lucide-react';

interface StatesDirectoryClientProps {
  states: StateInfo[];
  initialLang?: Language;
}

export default function StatesDirectoryClient({
  states,
  initialLang,
}: StatesDirectoryClientProps) {
  const router = useRouter();
  const isHi = initialLang === 'hi';
  const { isDark, toggleTheme } = useTheme();
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Header
        lang={initialLang || 'en'}
        onToggleLang={() => {
          if (isHi) {
            router.push('/states');
          } else {
            router.push('/hi/states');
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
        activeNav="states"
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
            {isHi ? 'राज्य विशेष हब' : 'States Resource Hub'}
          </span>
        </nav>

        {/* Hero Header */}
        <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              <MapPin className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>{isHi ? 'राज्य स्तरीय कल्याणकारी पोर्टल' : 'State-Wise Welfare Portals'}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isHi ? 'राज्य अनुसार सरकारी योजनाएं एवं लाभ 2026' : 'State-Wise Government Schemes in India 2026'}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
            {isHi
              ? 'अपने राज्य की विशिष्ट कल्याणकारी योजनाओं, महिला सम्मान, आवास, छात्रवृत्ति और पेंशन योजनाओं की जानकारी प्राप्त करने के लिए अपना राज्य चुनें।'
              : 'Select your state to explore state-funded welfare initiatives, women empowerment pensions, student credit cards, and rural housing programs.'}
          </p>
        </div>

        {/* States Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {states.map((st) => {
            const stateUrl = isHi ? `/hi/states/${st.id}` : `/states/${st.id}`;
            return (
              <Link
                key={st.id}
                href={stateUrl}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition-all hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="flex items-center gap-1 font-semibold text-amber-700 dark:text-amber-400">
                      <MapPin className="h-3.5 w-3.5" />
                      {isHi ? `राजधानी: ${st.capital_hi}` : `Capital: ${st.capital_en}`}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300">
                      {isHi ? `${st.activeSchemesCount}+ योजनाएं` : `${st.activeSchemesCount}+ Schemes`}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {isHi ? st.name_hi : st.name_en}
                  </h2>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {isHi ? st.description_hi : st.description_en}
                  </p>

                  {/* Flagship badges */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      {isHi ? 'प्रमुख योजनाएं:' : 'Flagship Programs:'}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {(isHi ? st.flagshipPrograms_hi : st.flagshipPrograms_en).slice(0, 3).map((prog, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/40"
                        >
                          {prog}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-400">
                  <span>{isHi ? 'सभी योजनाएं देखें' : 'Explore State Schemes'}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer lang={initialLang || 'en'} />

      {/* Search Modal */}
      {searchModalOpen && (
        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
          lang={initialLang || 'en'}
          onSelectScheme={(s) => {
            setSearchModalOpen(false);
            router.push(isHi ? `/hi/schemes/${s.slug}` : `/schemes/${s.slug}`);
          }}
        />
      )}
    </div>
  );
}
