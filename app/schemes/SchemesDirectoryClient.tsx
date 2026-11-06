'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import { Scheme, Language } from '@/types';
import { CATEGORIES, STATES } from '@/data/categories';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemeCard from '@/components/SchemeCard';
import SearchModal from '@/components/SearchModal';
import {
  Search,
  Filter,
  Layers,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Home,
  SlidersHorizontal
} from 'lucide-react';

interface SchemesDirectoryClientProps {
  schemes: Scheme[];
  initialLang?: Language;
  initialCategory?: string;
  initialState?: string;
}

export default function SchemesDirectoryClient({
  schemes,
  initialLang,
  initialCategory = 'all',
  initialState = 'all',
}: SchemesDirectoryClientProps) {
  const { lang, toggleLanguage, isHi } = useLanguage();
  const currentLang = initialLang || lang;
  const isHindi = currentLang === 'hi';

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedState, setSelectedState] = useState<string>(initialState);

  const toggleTheme = () => {
    setIsDark(prev => {
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

  const filteredSchemes = useMemo(() => {
    return schemes.filter((s) => {
      // Category filter
      if (selectedCategory !== 'all' && s.category !== selectedCategory) {
        return false;
      }
      // State filter
      if (selectedState !== 'all') {
        if (selectedState === 'all-india') {
          if (s.state !== 'all-india') return false;
        } else {
          if (s.state !== selectedState && s.state !== 'all-india') return false;
        }
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const titleEn = s.title_en.toLowerCase();
        const titleHi = s.title_hi.toLowerCase();
        const shortEn = s.shortTitle_en.toLowerCase();
        const shortHi = s.shortTitle_hi.toLowerCase();
        const keywords = (s.keywords || []).join(' ').toLowerCase();
        const summary = (s.benefitSummary_en + ' ' + s.benefitSummary_hi).toLowerCase();

        return (
          titleEn.includes(q) ||
          titleHi.includes(q) ||
          shortEn.includes(q) ||
          shortHi.includes(q) ||
          keywords.includes(q) ||
          summary.includes(q)
        );
      }
      return true;
    });
  }, [schemes, selectedCategory, selectedState, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Header
        lang={currentLang}
        onToggleLang={toggleLanguage}
        onOpenSearch={() => setSearchModalOpen(true)}
        onSelectNav={(nav) => {
          if (nav === 'home') window.location.href = isHindi ? '/hi' : '/';
          else if (nav === 'schemes') window.location.href = isHindi ? '/hi/schemes' : '/schemes';
          else if (nav === 'finder') window.location.href = isHindi ? '/hi/finder' : '/finder';
          else if (nav === 'checker') window.location.href = isHindi ? '/hi/checker' : '/checker';
          else if (nav === 'states') window.location.href = isHindi ? '/hi/states' : '/states';
          else if (nav === 'updates') window.location.href = isHindi ? '/hi/updates' : '/updates';
          else if (nav === 'trust') window.location.href = isHindi ? '/hi/about' : '/about';
        }}
        activeNav="schemes"
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 mb-6">
          <Link href={isHindi ? '/hi' : '/'} className="hover:text-amber-700 dark:hover:text-amber-400 flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
            <span>{isHindi ? 'होम' : 'Home'}</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="font-semibold text-slate-900 dark:text-white">
            {isHindi ? 'सभी सरकारी योजनाएं' : 'All Schemes Directory'}
          </span>
        </nav>

        {/* Hero Header */}
        <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              <Layers className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>{isHindi ? 'आधिकारिक योजना डायरेक्टरी 2026' : 'Official Schemes Directory 2026'}</span>
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400">
              · {isHindi ? `${filteredSchemes.length} योजनाएं उपलब्ध` : `${filteredSchemes.length} Verified Schemes`}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isHindi
              ? 'सभी सरकारी योजनाएं एवं नागरिक कल्याण लाभ'
              : 'All Government Schemes & Citizen Welfare Benefits'}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
            {isHindi
              ? 'केंद्र एवं राज्य सरकारों द्वारा संचालित सभी प्रमुख कल्याणकारी योजनाओं की प्रमाणित जानकारी, पात्रता नियम, जरूरी कागजात और सीधे आधिकारिक आवेदन लिंक।'
              : 'Comprehensive verified guide to Central and State government schemes in India. Explore subsidies, direct bank transfers (DBT), housing, healthcare, pensions, and student financial aid.'}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 mb-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <label htmlFor="scheme-search" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {isHindi ? 'योजना का नाम या कीवर्ड खोजें' : 'Search by Scheme Name or Keyword'}
              </label>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  id="scheme-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    isHindi
                      ? 'उदा. पीएम किसान, आवास, आयुष्मान, छात्रवृत्ति...'
                      : 'e.g. PM Kisan, Awas, Ayushman, Scholarship...'
                  }
                  className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    {isHindi ? 'हटाएं' : 'Clear'}
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:col-span-3">
              <label htmlFor="category-filter" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {isHindi ? 'श्रेणी (Category)' : 'Category'}
              </label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="all">{isHindi ? 'सभी श्रेणियां (All Categories)' : 'All Categories'}</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {isHindi ? cat.name_hi : cat.name_en}
                  </option>
                ))}
              </select>
            </div>

            {/* State Filter */}
            <div className="md:col-span-3">
              <label htmlFor="state-filter" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {isHindi ? 'राज्य (State)' : 'State / Jurisdiction'}
              </label>
              <select
                id="state-filter"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="all">{isHindi ? 'सभी राज्य / केंद्र (All India)' : 'All States & Central'}</option>
                {STATES.map((st) => (
                  <option key={st.id} value={st.id}>
                    {isHindi ? st.name_hi : st.name_en}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Category Pills */}
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-amber-800 text-white dark:bg-amber-600'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {isHindi ? 'सभी' : 'All'}
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-amber-800 text-white dark:bg-amber-600'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {isHindi ? cat.name_hi : cat.name_en}
              </button>
            ))}
          </div>
        </div>

        {/* Schemes Grid */}
        {filteredSchemes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchemes.map((scheme) => (
              <SchemeCard
                key={scheme.id}
                scheme={scheme}
                lang={currentLang}
                onSelect={() => {
                  window.location.href = isHindi ? `/hi/schemes/${scheme.slug}` : `/schemes/${scheme.slug}`;
                }}
                onCheckEligibility={() => {
                  window.location.href = isHindi ? `/hi/checker?scheme=${scheme.slug}` : `/checker?scheme=${scheme.slug}`;
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <Layers className="h-12 w-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {isHindi ? 'कोई योजना नहीं मिली' : 'No Schemes Found'}
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {isHindi
                ? 'कृपया अपने सर्च कीवर्ड बदलें या फ़िल्टर रीसेट करें।'
                : 'Please try adjusting your search keywords or clear your active filters.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedState('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-bold rounded-xl bg-amber-800 text-white hover:bg-amber-900 dark:bg-amber-600 transition-colors"
            >
              {isHindi ? 'सभी फ़िल्टर रीसेट करें' : 'Reset All Filters'}
            </button>
          </div>
        )}
      </main>

      <Footer lang={currentLang} />

      {/* Global Search Modal */}
      {searchModalOpen && (
        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
          lang={currentLang}
          onSelectScheme={(s) => {
            setSearchModalOpen(false);
            window.location.href = isHindi ? `/hi/schemes/${s.slug}` : `/schemes/${s.slug}`;
          }}
        />
      )}
    </div>
  );
}
