'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Language, Scheme } from '@/types';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemeEligibilityChecker from '@/components/SchemeEligibilityChecker';
import SearchModal from '@/components/SearchModal';
import { ChevronRight, Home, CheckCircle2 } from 'lucide-react';

interface CheckerClientProps {
  schemes: Scheme[];
  initialLang?: Language;
}

function CheckerContent({ schemes, initialLang = 'en' }: CheckerClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const schemeParam = searchParams.get('scheme');
  const isHi = initialLang === 'hi';
  const { isDark, toggleTheme } = useTheme();
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const initialScheme = useMemo(() => {
    if (!schemeParam) return null;
    return (
      schemes.find((s) => s.id === schemeParam || s.slug === schemeParam) || null
    );
  }, [schemeParam, schemes]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Header
        lang={initialLang}
        onToggleLang={() => {
          const path = isHi ? '/checker' : '/hi/checker';
          const query = schemeParam ? `?scheme=${encodeURIComponent(schemeParam)}` : '';
          router.push(`${path}${query}`);
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
        activeNav="checker"
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 mb-6">
          <Link href={isHi ? '/hi' : '/'} className="hover:text-amber-700 dark:hover:text-amber-400 flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
            <span>{isHi ? 'होम' : 'Home'}</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="font-semibold text-slate-900 dark:text-white">
            {isHi ? 'पात्रता जांच कैलकुलेटर' : 'Eligibility Calculator'}
          </span>
        </nav>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              {isHi ? '100% सटीक नियम' : 'Official Criteria Verified'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {isHi ? 'सरकारी योजना पात्रता जांचें' : 'Interactive Scheme Eligibility Checker'}
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {isHi
              ? 'आधिकारिक दिशा-निर्देशों के आधार पर अपनी योग्यता जांचें। 4-5 सीधे प्रश्नों के उत्तर दें और जानें कि क्या आप इस योजना के लिए पात्र हैं।'
              : 'Answer simple yes/no questions based on official scheme rules to verify your eligibility and avoid rejection.'}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-8 shadow-sm">
          <SchemeEligibilityChecker
            lang={initialLang}
            selectedScheme={initialScheme}
            allSchemes={schemes}
            onSelectSchemeDetails={(s) => {
              const prefix = isHi ? '/hi' : '';
              router.push(`${prefix}/schemes/${s.slug}`);
            }}
            onBackToFinder={() => {
              const prefix = isHi ? '/hi' : '';
              router.push(`${prefix}/finder`);
            }}
          />
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

export default function CheckerClient(props: CheckerClientProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600" />
        </div>
      }
    >
      <CheckerContent {...props} />
    </Suspense>
  );
}
