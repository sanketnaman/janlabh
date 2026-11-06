'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Language, Scheme } from '@/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemeFinder from '@/components/SchemeFinder';
import SearchModal from '@/components/SearchModal';
import { ChevronRight, Home, Sparkles } from 'lucide-react';

interface FinderClientProps {
  schemes: Scheme[];
  initialLang?: Language;
}

export default function FinderClient({ schemes, initialLang = 'en' }: FinderClientProps) {
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

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
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

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 mb-6">
          <Link href={isHi ? '/hi' : '/'} className="hover:text-amber-700 dark:hover:text-amber-400 flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
            <span>{isHi ? 'होम' : 'Home'}</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="font-semibold text-slate-900 dark:text-white">
            {isHi ? 'योजना खोजें (Scheme Finder)' : 'Find Relevant Schemes'}
          </span>
        </nav>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              <Sparkles className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              {isHi ? 'स्मार्ट योजना खोज' : 'Smart Eligibility Recommendation'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {isHi ? 'अपने लिए सरकारी योजनाएं खोजें' : 'Discover Government Schemes Matching Your Profile'}
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {isHi
              ? 'अपना राज्य, आयु वर्ग, पेशा और आवश्यकता चुनें। हमारा एल्गोरिथ्म तुरंत आपके लिए सबसे उपयुक्त केंद्रीय एवं राज्य सरकारी योजनाएं खोजेगा।'
              : 'Select your state, age group, profession, and financial needs. Get instant personalized recommendations from 50+ central and state government welfare schemes.'}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-8 shadow-sm">
          <SchemeFinder
            lang={initialLang}
            allSchemes={schemes}
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
