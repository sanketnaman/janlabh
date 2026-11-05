'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/hooks/useLanguage';
import { Language, Scheme, UpdateArticle, CategoryInfo, StateInfo } from '@/types';
import { SCHEMES } from '@/data/schemes';
import { UPDATES } from '@/data/updates';
import { CATEGORIES, STATES } from '@/data/categories';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SchemeCard from '@/components/SchemeCard';
import SchemeFinder from '@/components/SchemeFinder';
import SchemeEligibilityChecker from '@/components/SchemeEligibilityChecker';
import SearchModal from '@/components/SearchModal';
import UpdateDetailModal from '@/components/UpdateDetailModal';
import StateHubModal from '@/components/StateHubModal';
import CategoryHubModal from '@/components/CategoryHubModal';
import StaticPageModal from '@/components/StaticPageModal';
import AdminCmsModal from '@/components/AdminCmsModal';
import AdBannerSlot from '@/components/AdBannerSlot';
import {
  Tractor,
  HeartHandshake,
  GraduationCap,
  Award,
  ShieldPlus,
  Home,
  UserCheck,
  Briefcase,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldAlert,
  Search,
  ExternalLink,
  ChevronRight,
  Sparkles,
  MapPin,
  Building,
  Lock
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const { lang, toggleLanguage, isHi } = useLanguage();
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [activeNav, setActiveNav] = useState('home');
  const [selectedEligibilityScheme, setSelectedEligibilityScheme] = useState<Scheme | null>(null);
  const [selectedUpdate, setSelectedUpdate] = useState<UpdateArticle | null>(null);
  const [selectedState, setSelectedState] = useState<StateInfo | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryInfo | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [adminCmsOpen, setAdminCmsOpen] = useState(false);
  const [staticPageId, setStaticPageId] = useState<string | null>(null);
  
  // Category & State filters for Schemes directory
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [stateFilter, setStateFilter] = useState<string>('all');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem('janlabh-theme');
      if (!stored) {
        document.documentElement.classList.toggle('dark', e.matches);
        setIsDark(e.matches);
      }
    };
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
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

  const handleSelectNav = (navId: string) => {
    if (navId === 'admin') {
      setAdminCmsOpen(true);
      return;
    }
    setActiveNav(navId);
    if (navId === 'trust') {
      setStaticPageId('editorial');
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEligibility = (scheme: Scheme) => {
    setSelectedEligibilityScheme(scheme);
    setActiveNav('checker');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectScheme = (scheme: Scheme) => {
    router.push(`/schemes/${scheme.slug}`);
  };

  const handleSelectSchemeBySlug = (slug: string) => {
    router.push(`/schemes/${slug}`);
  };

  const handleSearchSubmit = (query: string) => {
    setSearchModalOpen(true);
  };

  const filteredSchemes = SCHEMES.filter(scheme => {
    const matchCategory = categoryFilter === 'all' || scheme.category === categoryFilter;
    const matchState = stateFilter === 'all' || scheme.state === stateFilter || scheme.state === 'all-india';
    return matchCategory && matchState;
  });

  // Icon resolver for categories
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tractor': return <Tractor className="h-5 w-5 text-amber-700 dark:text-amber-400" />;
      case 'HeartHandshake': return <HeartHandshake className="h-5 w-5 text-rose-700 dark:text-rose-400" />;
      case 'GraduationCap': return <GraduationCap className="h-5 w-5 text-sky-700 dark:text-sky-400" />;
      case 'Award': return <Award className="h-5 w-5 text-indigo-700 dark:text-indigo-400" />;
      case 'ShieldPlus': return <ShieldPlus className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />;
      case 'Home': return <Home className="h-5 w-5 text-amber-800 dark:text-amber-300" />;
      case 'UserCheck': return <UserCheck className="h-5 w-5 text-teal-700 dark:text-teal-400" />;
      case 'Briefcase': return <Briefcase className="h-5 w-5 text-purple-700 dark:text-purple-400" />;
      default: return <Building className="h-5 w-5 text-slate-700 dark:text-slate-300" />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* Top Header */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenSearch={() => setSearchModalOpen(true)}
        onSelectNav={handleSelectNav}
        activeNav={activeNav}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1">
        
        {/* VIEW 1A: SCHEME FINDER (DISCOVERY TOOL - PRD Part 1) */}
        {activeNav === 'finder' ? (
          <div className="py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-6 flex items-center justify-between">
              <button
                onClick={() => setActiveNav('home')}
                className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                ← {isHi ? 'होमपेज पर वापस जाएं' : 'Back to Home'}
              </button>
            </div>
            <SchemeFinder
              lang={lang}
              onSelectScheme={handleSelectScheme}
              onCheckEligibility={handleOpenEligibility}
              allSchemes={SCHEMES}
            />
          </div>
        ) : activeNav === 'checker' ? (
          /* VIEW 1B: SCHEME-SPECIFIC ELIGIBILITY CHECKER (EVALUATION ENGINE - PRD Part 2) */
          <div className="py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-6 flex items-center justify-between">
              <button
                onClick={() => setActiveNav('home')}
                className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                ← {isHi ? 'होमपेज पर वापस जाएं' : 'Back to Home'}
              </button>
              {selectedEligibilityScheme && (
                <button
                  onClick={() => setSelectedEligibilityScheme(null)}
                  className="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline"
                >
                  {isHi ? 'अन्य योजना चुनें' : 'Choose Another Scheme'}
                </button>
              )}
            </div>
            <SchemeEligibilityChecker
              lang={lang}
              selectedScheme={selectedEligibilityScheme}
              onSelectSchemeDetails={handleSelectScheme}
              onBackToFinder={() => setActiveNav('finder')}
              allSchemes={SCHEMES}
            />
          </div>
        ) : activeNav === 'schemes' ? (
          /* VIEW 2: ALL SCHEMES DIRECTORY */
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
            <div>
              <div className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-1">
                {isHi ? 'सार्वजनिक लाभ निर्देशिका' : 'Public Benefits Directory'}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {isHi ? 'सभी केंद्रीय व राज्य सरकारी योजनाएं' : 'All Central & State Government Schemes'}
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {isHi 
                  ? 'सत्यापित नियम, पात्रता मानदंड, आवश्यक दस्तावेज और सीधे आधिकारिक सरकारी पोर्टल लिंक।' 
                  : 'Verified rules, eligibility benchmarks, required documentation checklists, and direct official portal links.'}
              </p>
            </div>

            {/* Filters Bar */}
            <div className="flex flex-col sm:flex-row gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="flex-1">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {isHi ? 'श्रेणी अनुसार फिल्टर करें:' : 'Filter by Category:'}
                </label>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                >
                  <option value="all">{isHi ? 'सभी श्रेणियां (All Categories)' : 'All Categories'}</option>
                  {CATEGORIES.map(c => (
                    <option key={c.id} value={c.id}>{isHi ? c.name_hi : c.name_en}</option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {isHi ? 'राज्य अनुसार फिल्टर करें:' : 'Filter by State:'}
                </label>
                <select
                  value={stateFilter}
                  onChange={(e) => setStateFilter(e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                >
                  <option value="all">{isHi ? 'सभी राज्य / केंद्र (All States / Central)' : 'All States & Central'}</option>
                  {STATES.map(s => (
                    <option key={s.id} value={s.id}>{isHi ? s.name_hi : s.name_en}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Scheme Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchemes.map(s => (
                <SchemeCard
                  key={s.id}
                  scheme={s}
                  lang={lang}
                  onSelect={handleSelectScheme}
                  onCheckEligibility={handleOpenEligibility}
                />
              ))}
            </div>
          </div>
        ) : activeNav === 'states' ? (
          /* VIEW 3: STATES HUB DIRECTORY */
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
            <div>
              <div className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-1">
                {isHi ? 'राज्य कल्याण हब' : 'State Welfare Resource Hubs'}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {isHi ? 'राज्यों के अनुसार सरकारी योजनाएं खोजें' : 'Browse Schemes by State in India'}
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {isHi
                  ? 'झारखंड, बिहार, उत्तर प्रदेश सहित प्रमुख राज्यों के राज्य-स्तरीय कल्याणकारी कार्यक्रम।'
                  : 'Deep-dive state portals covering state-sponsored financial assistance, housing, and social security programs.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {STATES.map(st => (
                <div
                  key={st.id}
                  onClick={() => setSelectedState(st)}
                  className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 mb-2">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{isHi ? `राजधानी: ${st.capital_hi}` : `Capital: ${st.capital_en}`}</span>
                      <span>{st.activeSchemesCount}+ {isHi ? 'योजनाएं' : 'Schemes'}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {isHi ? st.name_hi : st.name_en}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {isHi ? st.description_hi : st.description_en}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-amber-700 dark:text-amber-400 font-semibold">
                    <span>{isHi ? 'राज्य योजना हब खोलें' : 'Explore State Hub'}</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : activeNav === 'updates' ? (
          /* VIEW 4: UPDATES DIRECTORY */
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
            <div>
              <div className="text-xs font-semibold text-sky-700 dark:text-sky-400 uppercase tracking-wider mb-1">
                {isHi ? 'सरकारी समाचार व अधिसूचनाएं' : 'Government Announcements & e-KYC Deadlines'}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {isHi ? 'ताजा सरकारी योजना अपडेट्स (Verified Updates)' : 'Latest Government Welfare Updates & Notices'}
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {isHi
                  ? 'किस्त जारी होने की तिथियां, ई-केवाईसी नियम, छात्रवृत्ति समय-सीमा और आधिकारिक सुधार शिविर।'
                  : 'Verified installment releases, biometric e-KYC deadlines, scholarship OTR guidelines, and official rectification drives.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {UPDATES.map(up => (
                <article
                  key={up.id}
                  onClick={() => setSelectedUpdate(up)}
                  className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="font-semibold text-sky-800 dark:text-sky-400 uppercase tracking-wider">
                        {up.category}
                      </span>
                      <span>·</span>
                      <span className="dark:text-slate-400">{up.publishedDate}</span>
                      <span>·</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                        {isHi ? 'सत्यापित' : 'Verified'}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white hover:text-amber-700 dark:hover:text-amber-400 transition-colors leading-snug">
                      {isHi ? up.title_hi : up.title_en}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {isHi ? up.summary_hi : up.summary_en}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-amber-700 dark:text-amber-400 font-semibold">
                    <span>{isHi ? 'पूरा परिपत्र व निर्देश पढ़ें' : 'Read Full Instructions'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          /* VIEW 5: HOMEPAGE (PRD §9, §10, §11) */
          <>
            {/* Master Hero */}
            <HeroSection
              lang={lang}
              onOpenFinder={() => {
                setActiveNav('finder');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenChecker={() => {
                setSelectedEligibilityScheme(null);
                setActiveNav('checker');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreSchemes={() => {
                setActiveNav('schemes');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSearchSubmit={handleSearchSubmit}
            />

            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
              
              {/* Section 1 — Popular Schemes (PRD §11 Section 1) */}
              <section aria-labelledby="popular-schemes-title">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                      {isHi ? 'अत्यधिक खोजी जाने वाली योजनाएं' : 'High Search Intent'}
                    </div>
                    <h2 id="popular-schemes-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                      {isHi ? 'लोकप्रिय सरकारी योजनाएं (Popular Government Schemes)' : 'Popular Citizen Welfare Schemes'}
                    </h2>
                  </div>
                  <button
                    onClick={() => setActiveNav('schemes')}
                    className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors flex items-center gap-1"
                  >
                    <span>{isHi ? 'सभी योजनाएं देखें' : 'View All Schemes'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SCHEMES.slice(0, 6).map(scheme => (
                    <SchemeCard
                      key={scheme.id}
                      scheme={scheme}
                      lang={lang}
                      onSelect={handleSelectScheme}
                      onCheckEligibility={handleOpenEligibility}
                    />
                  ))}
                </div>
              </section>

              {/* Section 2 — Citizen Utilities: Scheme Finder vs Eligibility Checker (PRD Part 1 & Part 2) */}
              <section className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                      {isHi ? 'नागरिक सहायता उपकरण' : 'Citizen Digital Utilities'}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                      {isHi ? 'खोजें व पात्रता जांचें (Scheme Finder & Eligibility Checker)' : 'Discover Schemes & Check Qualification'}
                    </h2>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Lock className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium text-emerald-700 dark:text-emerald-400">{isHi ? '🔒 शून्य डेटा संग्रह' : '🔒 Zero Data Stored'}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Tool 1: Scheme Discovery Tool */}
                  <div className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-white dark:from-amber-950/40 dark:via-slate-900/80 dark:to-slate-900 p-6 sm:p-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="font-mono uppercase font-bold text-amber-800 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-950/80 px-2 py-0.5 rounded">
                          {isHi ? 'उपकरण 1: योजना खोजकर्ता' : 'Tool 1: Discovery'}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400">5 Quick Questions</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                        {isHi ? '🔍 योजना खोजें' : '🔍 Find Government Schemes for You'}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {isHi
                          ? 'अपने राज्य, आयु समूह, व्यवसाय और रुचि के क्षेत्रों के आधार पर जानें कि कौन-सी सरकारी योजनाएं आपके लिए प्रासंगिक हो सकती हैं।'
                          : 'Answer a few quick questions to discover government welfare schemes that may be relevant to your profile and location.'}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-amber-200/60 dark:border-amber-900/40 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        {isHi ? 'प्रासंगिकता खोज' : 'Relevance Matching'}
                      </span>
                      <button
                        onClick={() => {
                          setActiveNav('finder');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                      >
                        <span>{isHi ? 'योजना खोजें →' : 'Launch Scheme Finder →'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Tool 2: Actual Eligibility Checker */}
                  <div className="rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-white dark:from-emerald-950/40 dark:via-slate-900/80 dark:to-slate-900 p-6 sm:p-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="font-mono uppercase font-bold text-emerald-800 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-950/80 px-2 py-0.5 rounded">
                          {isHi ? 'उपकरण 2: पात्रता मूल्यांकन' : 'Tool 2: Gazette Rules'}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400">Scheme-Specific</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                        {isHi ? '✅ विशिष्ट योजना पात्रता जांचें' : '✅ Check Scheme Eligibility'}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {isHi
                          ? 'किसी विशिष्ट योजना (जैसे PM Kisan, मंईयां सम्मान, आयुष्मान) के प्रकाशित आधिकारिक नियमों के आधार पर अपनी पात्रता का तुरंत आकलन करें।'
                          : 'Evaluate your qualification against the published gazette criteria of a specific central or state government scheme.'}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-emerald-200/60 dark:border-emerald-900/40 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        {isHi ? 'विशिष्ट राजपत्र नियम' : 'Official Gazette Rules'}
                      </span>
                      <button
                        onClick={() => {
                          setSelectedEligibilityScheme(null);
                          setActiveNav('checker');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                      >
                        <span>{isHi ? 'पात्रता जांचें →' : 'Check Eligibility →'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* AdSense Placement Slot 1 (§41, §42: after substantial editorial) */}
              <AdBannerSlot lang={lang} format="in-article" />

              {/* Section 3 — Browse by Category (PRD §11 Section 3) */}
              <section aria-labelledby="categories-title">
                <div className="mb-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                    {isHi ? 'विषयवार वर्गीकरण' : 'Thematic Clusters'}
                  </div>
                  <h2 id="categories-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                    {isHi ? 'श्रेणी अनुसार योजनाएं खोजें (Browse by Category)' : 'Explore Welfare Schemes by Category'}
                  </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {CATEGORIES.map(cat => (
                    <div
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat)}
                      className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg inline-block mb-3">
                          {getCategoryIcon(cat.iconName)}
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                          {isHi ? cat.name_hi : cat.name_en}
                        </h3>
                        <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                          {isHi ? cat.description_hi : cat.description_en}
                        </p>
                      </div>
                      <div className="mt-3 text-[11px] text-amber-700 dark:text-amber-400 font-semibold flex items-center gap-1">
                        <span>{isHi ? 'देखें' : 'Explore'}</span>
                        <ChevronRight className="h-3 w-3" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4 — Browse by State (PRD §11 Section 4) */}
              <section aria-labelledby="states-title">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                      {isHi ? 'राज्य स्तरीय कल्याण' : 'Geographic Hubs'}
                    </div>
                    <h2 id="states-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                      {isHi ? 'राज्य के अनुसार खोजें (Explore by State)' : 'Explore Schemes by State'}
                    </h2>
                  </div>
                  <button
                    onClick={() => setActiveNav('states')}
                    className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors flex items-center gap-1"
                  >
                    <span>{isHi ? 'सभी राज्य देखें' : 'View All States'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {STATES.slice(0, 3).map(st => (
                    <div
                      key={st.id}
                      onClick={() => setSelectedState(st)}
                      className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                        <MapPin className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                        <span>{isHi ? `राजधानी: ${st.capital_hi}` : `Capital: ${st.capital_en}`}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {isHi ? st.name_hi : st.name_en}
                      </h3>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                        {isHi ? st.description_hi : st.description_en}
                      </p>
                      <div className="mt-3 text-xs text-amber-700 dark:text-amber-400 font-semibold flex items-center gap-1">
                        <span>{isHi ? 'राज्य हब देखें' : 'Open State Hub'}</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5 — Latest Verified Government Updates (PRD §11 Section 5) */}
              <section aria-labelledby="updates-title">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                      {isHi ? 'ताजा अधिसूचनाएं' : 'Real-Time Verification'}
                    </div>
                    <h2 id="updates-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                      {isHi ? 'नवीनतम सरकारी अपडेट्स (Latest Updates)' : 'Latest Government Announcements'}
                    </h2>
                  </div>
                  <button
                    onClick={() => setActiveNav('updates')}
                    className="text-xs font-bold text-sky-800 dark:text-sky-400 hover:text-sky-900 dark:hover:text-sky-300 transition-colors flex items-center gap-1"
                  >
                    <span>{isHi ? 'सभी अपडेट्स देखें' : 'View All Updates'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {UPDATES.map(up => (
                    <article
                      key={up.id}
                      onClick={() => setSelectedUpdate(up)}
                      className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                          <span className="font-semibold text-sky-800 dark:text-sky-400 uppercase tracking-wider">{up.category}</span>
                          <span>·</span>
                          <span className="dark:text-slate-400">{up.publishedDate}</span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-amber-800 dark:hover:text-amber-400 transition-colors">
                          {isHi ? up.title_hi : up.title_en}
                        </h3>
                        <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {isHi ? up.summary_hi : up.summary_en}
                        </p>
                      </div>

                      <div className="mt-3 text-xs text-amber-700 dark:text-amber-400 font-semibold flex items-center gap-1">
                        <span>{isHi ? 'निर्देश पढ़ें' : 'Read Guidance'}</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 6 & 7 — Trust Signals & Why Trust JanLabh (PRD §11 Section 7) */}
              <section aria-labelledby="trust-signals-title" className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-1">
                  {isHi ? 'विश्वास व प्रामाणिकता' : 'Trust Invariants'}
                </div>
                <h2 id="trust-signals-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {isHi ? 'नागरिक JanLabh पर क्यों भरोसा करते हैं?' : 'Why Citizens Trust JanLabh'}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
                  {isHi
                    ? 'JanLabh.in स्वतंत्र, निष्पक्ष और तथ्य-आधारित नागरिक मार्गदर्शन उपलब्ध कराता है। हमारा उद्देश्य नागरिकों को बिचौलियों और भ्रामक जानकारी से बचाना है।'
                    : 'JanLabh operates under strict editorial separation, verified gazette citations, and zero collection of personal identity credentials.'}
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      <span>{isHi ? '1. प्राथमिक आधिकारिक स्रोत' : '1. Official Citations Only'}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {isHi
                        ? 'हर गाइड में संबंधित मंत्रालय, राजपत्र और .gov.in पोर्टल का सीधा आधिकारिक लिंक प्रदान किया जाता है।'
                        : 'Every scheme page links transparently to the designated department portal (.gov.in) and gazette resolution.'}
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      <span>{isHi ? '2. अंतिम सत्यापन तारीख' : '2. Verification Dates'}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {isHi
                        ? 'प्रत्येक योजना के शीर्ष पर अंतिम समीक्षा तिथि दिखाई जाती है, ताकि पाठक जान सकें कि जानकारी अद्यतित है।'
                        : 'Distinct published and last verified timestamps demonstrate active regulatory review.'}
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      <span>{isHi ? '3. पूर्ण नागरिक गोपनीयता' : '3. Zero Aadhaar Storage'}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {isHi
                        ? 'हम कभी भी नागरिकों से आधार नंबर, बैंक खाता, या पासवर्ड नहीं मांगते और न ही संग्रहीत करते हैं।'
                        : 'No Aadhaar numbers, bank accounts, or passwords are ever requested or stored on our servers.'}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-slate-500 dark:text-slate-400">
                    {isHi ? 'क्या आपको कोई अशुद्ध जानकारी मिली?' : 'Spotted an outdated circular or discrepancy?'}
                  </span>
                  <button
                    onClick={() => setStaticPageId('corrections')}
                    className="text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 font-semibold underline"
                  >
                    {isHi ? 'संपादकीय डेस्क को त्रुटि रिपोर्ट भेजें →' : 'Report an Error to Editorial Desk →'}
                  </button>
                </div>
              </section>

            </div>
          </>
        )}
      </main>

      {/* Global Modals */}
      {selectedUpdate && (
        <UpdateDetailModal
          update={selectedUpdate}
          lang={lang}
          onClose={() => setSelectedUpdate(null)}
          onSelectSchemeBySlug={handleSelectSchemeBySlug}
        />
      )}

      {selectedState && (
        <StateHubModal
          stateInfo={selectedState}
          lang={lang}
          onClose={() => setSelectedState(null)}
          onSelectScheme={(scheme) => {
            setSelectedState(null);
            handleSelectScheme(scheme);
          }}
          allSchemes={SCHEMES}
        />
      )}

      {selectedCategory && (
        <CategoryHubModal
          categoryInfo={selectedCategory}
          lang={lang}
          onClose={() => setSelectedCategory(null)}
          onSelectScheme={(scheme) => {
            setSelectedCategory(null);
            handleSelectScheme(scheme);
          }}
          allSchemes={SCHEMES}
        />
      )}

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        lang={lang}
        onSelectScheme={(scheme) => {
          setSearchModalOpen(false);
          handleSelectScheme(scheme);
        }}
        onSelectUpdate={setSelectedUpdate}
        allSchemes={SCHEMES}
        allUpdates={UPDATES}
      />

      <AdminCmsModal
        isOpen={adminCmsOpen}
        onClose={() => setAdminCmsOpen(false)}
        lang={lang}
        schemes={SCHEMES}
        updates={UPDATES}
      />

      <StaticPageModal
        pageId={staticPageId}
        onClose={() => setStaticPageId(null)}
        lang={lang}
      />

      {/* Primary Civic Footer */}
      <Footer
        lang={lang}
        onOpenLegal={setStaticPageId}
        onSelectNav={handleSelectNav}
      />

    </div>
  );
}
