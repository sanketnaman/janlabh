'use client';

import React, { useState } from 'react';
import { Language } from '@/types';
import { Search, Globe, ShieldCheck, Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenSearch: () => void;
  onSelectNav: (nav: string) => void;
  activeNav: string;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Header({
  lang,
  onToggleLang,
  onOpenSearch,
  onSelectNav,
  activeNav,
  isDark,
  onToggleTheme
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'schemes', label_en: 'All Schemes', label_hi: 'सभी योजनाएं' },
    { id: 'finder', label_en: 'Find Schemes', label_hi: 'योजना खोजें' },
    { id: 'checker', label_en: 'Check Eligibility', label_hi: 'पात्रता जांचें' },
    { id: 'states', label_en: 'States', label_hi: 'राज्य' },
    { id: 'updates', label_en: 'Latest Updates', label_hi: 'ताजा अपडेट' },
    { id: 'trust', label_en: 'Why JanLabh', label_hi: 'भरोसा व नीतियां' },
  ];

  const handleNavClick = (id: string) => {
    onSelectNav(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-colors duration-200">
      {/* Top Bar Contract: Zone 1, Zone 2, Zone 3 */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Pure Brand Logo (Transparent SVG, No English text) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 whitespace-nowrap shrink-0 group py-1"
          aria-label="JanLabh Home"
        >
          <img
            src={isDark ? "/icons/janlabh-logo-dark.svg" : "/icons/janlabh-logo.svg"}
            alt="जनलाभ"
            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </button>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-950 dark:hover:text-white ${
                activeNav === item.id
                  ? 'text-amber-700 dark:text-amber-400 font-semibold border-b-2 border-amber-600 dark:border-amber-400 pb-0.5'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {lang === 'hi' ? item.label_hi : item.label_en}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 primary action cluster - Uniform h-10 height for all controls across mobile, tablet & desktop */}
        <div className="flex items-center gap-2 shrink-0">
          {/* 1. Search Trigger Button */}
          <button
            onClick={onOpenSearch}
            className="h-10 flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 text-xs text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-xs shrink-0"
            aria-label="Search schemes"
          >
            <Search className="h-4 w-4 text-slate-500 dark:text-slate-400 shrink-0" />
            <span className="hidden sm:inline">
              {lang === 'hi' ? 'योजना खोजें...' : 'Search schemes...'}
            </span>
            <kbd className="hidden sm:inline-block rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-1.5 text-[10px] text-slate-400">
              Ctrl+K
            </kbd>
          </button>

          {/* 2. Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="h-10 w-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-xs shrink-0"
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={isDark ? (lang === 'hi' ? 'लाइट मोड चालू करें' : 'Switch to Light Mode') : (lang === 'hi' ? 'डार्क मोड चालू करें' : 'Switch to Dark Mode')}
          >
            {isDark ? (
              <Sun className="h-4.5 w-4.5 text-amber-400" />
            ) : (
              <Moon className="h-4.5 w-4.5 text-slate-600" />
            )}
          </button>

          {/* 3. Bilingual switcher with English & Hindi icons - Exact h-10 matching height */}
          <div className="h-10 flex items-center rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100/90 dark:bg-slate-800/90 p-1 shadow-xs shrink-0">
            <button
              type="button"
              onClick={() => lang !== 'hi' && onToggleLang()}
              className={`h-full flex items-center gap-1.5 px-2 rounded-lg transition-all ${
                lang === 'hi'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs ring-1 ring-amber-500 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white opacity-65 hover:opacity-100'
              }`}
              title="हिन्दी"
              aria-label="हिन्दी भाषा चुनें"
            >
              <img
                src="/icons/hindi_icon.svg"
                alt="हिंदी अ"
                className="h-6 w-6 sm:h-6.5 sm:w-6.5 rounded-md object-contain shrink-0 shadow-2xs"
              />
              <span className="hidden sm:inline text-xs font-semibold pr-0.5">हिंदी</span>
            </button>

            <button
              type="button"
              onClick={() => lang !== 'en' && onToggleLang()}
              className={`h-full flex items-center gap-1.5 px-2 rounded-lg transition-all ${
                lang === 'en'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs ring-1 ring-blue-500 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white opacity-65 hover:opacity-100'
              }`}
              title="English"
              aria-label="Switch to English"
            >
              <img
                src="/icons/english_icon.svg"
                alt="English EN"
                className="h-6 w-6 sm:h-6.5 sm:w-6.5 rounded-md object-contain shrink-0 shadow-2xs"
              />
              <span className="hidden sm:inline text-xs font-semibold pr-0.5">English</span>
            </button>
          </div>

          {/* 4. Mobile menu hamburger - Exact h-10 w-10 matching size */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden h-10 w-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-xs shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 space-y-2 shadow-lg">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                activeNav === item.id
                  ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {lang === 'hi' ? item.label_hi : item.label_en}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-3">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              {lang === 'hi' ? 'सत्यापित स्वतंत्र पोर्टल' : 'Independent verified portal'}
            </span>
            {/* Mobile language switch */}
            <div className="flex items-center rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-1">
              <button
                type="button"
                onClick={() => { if (lang !== 'hi') onToggleLang(); setMobileMenuOpen(false); }}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold ${
                  lang === 'hi' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs ring-1 ring-amber-500' : 'text-slate-500 opacity-70'
                }`}
              >
                <img src="/icons/hindi_icon.svg" alt="हिन्दी" className="h-7 w-7 rounded-md object-contain" />
                <span>हिंदी</span>
              </button>
              <button
                type="button"
                onClick={() => { if (lang !== 'en') onToggleLang(); setMobileMenuOpen(false); }}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold ${
                  lang === 'en' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs ring-1 ring-blue-500' : 'text-slate-500 opacity-70'
                }`}
              >
                <img src="/icons/english_icon.svg" alt="English" className="h-7 w-7 rounded-md object-contain" />
                <span>English</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

