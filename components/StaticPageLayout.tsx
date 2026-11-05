'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Language } from '@/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import { useRouter } from 'next/navigation';

interface StaticPageLayoutProps {
  children: (lang: Language) => React.ReactNode;
  activeNav?: string;
  breadcrumbTitle_en: string;
  breadcrumbTitle_hi: string;
}

export default function StaticPageLayout({
  children,
  activeNav = '',
  breadcrumbTitle_en,
  breadcrumbTitle_hi,
}: StaticPageLayoutProps) {
  const router = useRouter();
  const [lang, setLang] = useState<Language>('hi');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [searchModalOpen, setSearchModalOpen] = useState(false);

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
    if (navId === 'home') {
      router.push('/');
    } else if (navId === 'schemes' || navId === 'finder' || navId === 'checker' || navId === 'states' || navId === 'updates') {
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

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenSearch={() => setSearchModalOpen(true)}
        onSelectNav={handleSelectNav}
        activeNav={activeNav}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Breadcrumb strip */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-slate-500 dark:text-slate-400">
        <div className="mx-auto max-w-5xl flex items-center gap-2">
          <Link href="/" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            {lang === 'hi' ? 'होम' : 'Home'}
          </Link>
          <span>/</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {lang === 'hi' ? breadcrumbTitle_hi : breadcrumbTitle_en}
          </span>
        </div>
      </div>

      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {children(lang)}
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
        onSelectScheme={(scheme) => {
          setSearchModalOpen(false);
          router.push(`/schemes/${scheme.slug}`);
        }}
        onSelectUpdate={() => {
          setSearchModalOpen(false);
          router.push('/');
        }}
      />
    </div>
  );
}
