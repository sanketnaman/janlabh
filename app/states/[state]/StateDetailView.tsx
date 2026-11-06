'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { StateInfo, Scheme, Language } from '@/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemeCard from '@/components/SchemeCard';
import SearchModal from '@/components/SearchModal';
import {
  MapPin,
  Building2,
  CheckCircle2,
  ChevronRight,
  Home,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Layers
} from 'lucide-react';

interface StateDetailViewProps {
  stateInfo: StateInfo;
  schemes: Scheme[];
  initialLang?: Language;
}

const STATE_OFFICIAL_PORTALS: Record<string, { name: string; url: string }> = {
  'all-india': { name: 'National Portal of India', url: 'https://india.gov.in' },
  'jharkhand': { name: 'Government of Jharkhand Official Portal', url: 'https://jharkhand.gov.in' },
  'bihar': { name: 'Government of Bihar Portal', url: 'https://state.bihar.gov.in' },
  'uttar-pradesh': { name: 'Government of Uttar Pradesh Portal', url: 'https://up.gov.in' },
  'madhya-pradesh': { name: 'MP State Government Portal', url: 'https://mp.gov.in' },
  'rajasthan': { name: 'Government of Rajasthan Portal', url: 'https://rajasthan.gov.in' },
  'maharashtra': { name: 'Government of Maharashtra Portal', url: 'https://maharashtra.gov.in' },
};

export default function StateDetailView({
  stateInfo,
  schemes,
  initialLang,
}: StateDetailViewProps) {
  const router = useRouter();
  const isHi = initialLang === 'hi';

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        if (next) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('janlabh-theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('janlabh-theme', 'light');
        }
      }
      return next;
    });
  };

  const portal = STATE_OFFICIAL_PORTALS[stateInfo.id] || {
    name: 'National Portal of India',
    url: 'https://india.gov.in',
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Header
        lang={initialLang || 'en'}
        onToggleLang={() => {
          if (isHi) {
            router.push(`/states/${stateInfo.id}`);
          } else {
            router.push(`/hi/states/${stateInfo.id}`);
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
          <Link href={isHi ? '/hi/states' : '/states'} className="hover:text-amber-700 dark:hover:text-amber-400">
            {isHi ? 'राज्य हब' : 'States Hub'}
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="font-semibold text-slate-900 dark:text-white">
            {isHi ? stateInfo.name_hi : stateInfo.name_en}
          </span>
        </nav>

        {/* State Banner Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 mb-8 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              <MapPin className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>{isHi ? 'राज्य विशेष कल्याण हब' : 'State Welfare Resource Hub'}</span>
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400">
              · {isHi ? `राजधानी: ${stateInfo.capital_hi}` : `Capital: ${stateInfo.capital_en}`}
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400">
              · {isHi ? `${schemes.length} सत्यापित योजनाएं` : `${schemes.length} Verified Schemes`}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isHi
              ? `${stateInfo.name_hi} सरकारी योजनाएं एवं नागरिक लाभ 2026`
              : `${stateInfo.name_en} Government Schemes & Citizen Benefits 2026`}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-4xl leading-relaxed">
            {isHi ? stateInfo.description_hi : stateInfo.description_en}
          </p>

          {/* Key Flagship Programs Pills */}
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400 mb-2.5">
              {isHi ? 'राज्य के प्रमुख फ्लैगशिप कार्यक्रम' : 'Key Flagship Welfare Initiatives'}
            </div>
            <div className="flex flex-wrap gap-2">
              {(isHi ? stateInfo.flagshipPrograms_hi : stateInfo.flagshipPrograms_en).map((prog, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {prog}
                </span>
              ))}
            </div>
          </div>

          {/* Official Portal Link */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-xs"
            >
              <span>{isHi ? 'राज्य का आधिकारिक सरकारी पोर्टल' : 'Official State Government Portal'}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <Link
              href={isHi ? '/hi/schemes' : '/schemes'}
              className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-400"
            >
              <span>{isHi ? 'सभी राज्यों की योजनाएं देखें' : 'View All India Schemes'}</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Schemes Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {isHi
                  ? `${stateInfo.name_hi} में सक्रिय सत्यापित योजनाएं`
                  : `Active Verified Schemes in ${stateInfo.name_en}`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                {isHi
                  ? 'पात्रता नियम, लाभ राशि और आधिकारिक आवेदन की पूरी जानकारी।'
                  : 'Complete guidelines, eligibility rules, and official application links.'}
              </p>
            </div>
          </div>

          {schemes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schemes.map((scheme) => (
                <SchemeCard
                  key={scheme.id}
                  scheme={scheme}
                  lang={initialLang || 'en'}
                  onSelect={() => {
                    window.location.href = isHi ? `/hi/schemes/${scheme.slug}` : `/schemes/${scheme.slug}`;
                  }}
                  onCheckEligibility={() => {
                    window.location.href = isHi ? `/hi/checker?scheme=${scheme.slug}` : `/checker?scheme=${scheme.slug}`;
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
              <Layers className="h-12 w-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isHi ? 'इस राज्य की योजनाएं जोड़ी जा रही हैं' : 'Schemes Being Updated'}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {isHi
                  ? 'हमारी संपादकीय टीम इस राज्य की सभी योजनाओं का सत्यापन कर रही है।'
                  : 'Our editorial desk is actively compiling and verifying welfare programs for this state.'}
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer lang={initialLang || 'en'} />

      {/* Global Search Modal */}
      {searchModalOpen && (
        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
          lang={initialLang || 'en'}
          onSelectScheme={(s) => {
            setSearchModalOpen(false);
            window.location.href = isHi ? `/hi/schemes/${s.slug}` : `/schemes/${s.slug}`;
          }}
        />
      )}
    </div>
  );
}
