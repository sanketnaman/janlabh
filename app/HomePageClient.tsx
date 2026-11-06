'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Language, Scheme, UpdateArticle, CategoryInfo, StateInfo } from '@/types';
import { useTheme } from '@/hooks/useTheme';
import { SCHEMES } from '@/data/schemes';
import { UPDATES } from '@/data/updates';
import { CATEGORIES, STATES } from '@/data/categories';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SchemeCard from '@/components/SchemeCard';
import SearchModal from '@/components/SearchModal';
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
  Lock,
  Tag,
  Layers,
  FileCheck2,
  Bell
} from 'lucide-react';

interface HomePageClientProps {
  initialLang?: Language;
}

export default function HomePageClient({ initialLang = 'en' }: HomePageClientProps) {
  const router = useRouter();
  const isHi = initialLang === 'hi';
  const lang: Language = initialLang;
  const { isDark, toggleTheme } = useTheme();
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [adminCmsOpen, setAdminCmsOpen] = useState(false);

  const handleToggleLang = () => {
    if (isHi) {
      router.push('/');
    } else {
      router.push('/hi');
    }
  };

  const handleSelectNav = (navId: string) => {
    const prefix = isHi ? '/hi' : '';
    if (navId === 'admin') {
      setAdminCmsOpen(true);
    } else if (navId === 'home') {
      router.push(prefix || '/');
    } else if (navId === 'schemes') {
      router.push(`${prefix}/schemes`);
    } else if (navId === 'finder') {
      router.push(`${prefix}/finder`);
    } else if (navId === 'checker') {
      router.push(`${prefix}/checker`);
    } else if (navId === 'states') {
      router.push(`${prefix}/states`);
    } else if (navId === 'updates') {
      router.push(`${prefix}/updates`);
    } else if (navId === 'trust') {
      router.push('/about');
    }
  };

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
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Top Header */}
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenSearch={() => setSearchModalOpen(true)}
        onSelectNav={handleSelectNav}
        activeNav="home"
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          lang={lang}
          onOpenFinder={() => router.push(isHi ? '/hi/finder' : '/finder')}
          onOpenChecker={() => router.push(isHi ? '/hi/checker' : '/checker')}
          onExploreSchemes={() => router.push(isHi ? '/hi/schemes' : '/schemes')}
          onSearchSubmit={() => setSearchModalOpen(true)}
          onSelectScheme={(s) => router.push(isHi ? `/hi/schemes/${s.slug}` : `/schemes/${s.slug}`)}
        />

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
          {/* Section 1: Official Data Trust Banner */}
          <div className="bg-linear-to-r from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-900/80 rounded-2xl border border-amber-200/80 dark:border-slate-800 p-5 sm:p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3">
                <div className="p-2.5 bg-amber-600 text-white rounded-xl shrink-0">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {isHi
                      ? '100% निःशुल्क नागरिक जन-सूचना मंच · बिना किसी एजेंट या शुल्क के'
                      : '100% Free Public Civic Guidance · No Agents, Zero Fees'}
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    {isHi
                      ? 'JanLabh.in कोई व्यक्तिगत डेटा या आधार संख्या संग्रह नहीं करता है। सभी आवेदन सीधे आधिकारिक सरकारी पोर्टल पर होते हैं।'
                      : 'JanLabh never stores sensitive PII or Aadhaar numbers. All scheme applications take place directly on official government servers.'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href={isHi ? '/hi/finder' : '/finder'}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors shadow-xs"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{isHi ? 'पात्रता खोजें' : 'Smart Finder'}</span>
                </Link>
                <Link
                  href={isHi ? '/hi/checker' : '/checker'}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-300 dark:border-slate-700 transition-colors"
                >
                  <span>{isHi ? 'कैलकुलेटर' : 'Calculator'}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Section 2: Flagship National Schemes */}
          <section aria-labelledby="featured-title">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  {isHi ? 'उच्च प्राथमिकता कल्याणकारी योजनाएं' : 'High Priority Citizen Programs'}
                </div>
                <h2 id="featured-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {isHi ? 'प्रमुख सरकारी योजनाएं 2026' : 'Featured Flagship Government Schemes'}
                </h2>
              </div>
              <Link
                href={isHi ? '/hi/schemes' : '/schemes'}
                className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors flex items-center gap-1"
              >
                <span>{isHi ? 'सभी योजनाएं देखें' : 'View All Schemes'}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SCHEMES.slice(0, 6).map((scheme) => (
                <SchemeCard
                  key={scheme.id}
                  scheme={scheme}
                  lang={lang}
                  onSelect={(s) => router.push(isHi ? `/hi/schemes/${s.slug}` : `/schemes/${s.slug}`)}
                  onCheckEligibility={(s) => router.push(isHi ? `/hi/checker?scheme=${s.id}` : `/checker?scheme=${s.id}`)}
                />
              ))}
            </div>
          </section>

          {/* Section 3: Browse by Category (Direct Crawlable Links) */}
          <section aria-labelledby="categories-title">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  {isHi ? 'विषयवार वर्गीकरण' : 'Thematic Sectors'}
                </div>
                <h2 id="categories-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {isHi ? 'श्रेणी अनुसार योजनाएं खोजें' : 'Explore Welfare Schemes by Category'}
                </h2>
              </div>
              <Link
                href={isHi ? '/hi/categories' : '/categories'}
                className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors flex items-center gap-1"
              >
                <span>{isHi ? 'सभी 8 श्रेणियां देखें' : 'View All 8 Categories'}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={isHi ? `/hi/categories/${cat.id}` : `/categories/${cat.id}`}
                  className="group p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg inline-block mb-3 group-hover:scale-105 transition-transform">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                      {isHi ? cat.name_hi : cat.name_en}
                    </h3>
                    <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                      {isHi ? cat.description_hi : cat.description_en}
                    </p>
                  </div>
                  <div className="mt-3 text-[11px] text-amber-700 dark:text-amber-400 font-semibold flex items-center gap-1">
                    <span>{isHi ? 'योजनाएं देखें' : 'Explore'}</span>
                    <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 4: Browse by State (Direct Crawlable Links) */}
          <section aria-labelledby="states-title">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  {isHi ? 'राज्य स्तरीय कल्याण हब' : 'Geographic Welfare Portals'}
                </div>
                <h2 id="states-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {isHi ? 'राज्य अनुसार सरकारी योजनाएं' : 'Explore Schemes by State'}
                </h2>
              </div>
              <Link
                href={isHi ? '/hi/states' : '/states'}
                className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors flex items-center gap-1"
              >
                <span>{isHi ? 'सभी राज्य देखें' : 'View All States'}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {STATES.map((st) => (
                <Link
                  key={st.id}
                  href={isHi ? `/hi/states/${st.id}` : `/states/${st.id}`}
                  className="group p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                        <span>{isHi ? `राजधानी: ${st.capital_hi}` : `Capital: ${st.capital_en}`}</span>
                      </div>
                      <span className="font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px]">
                        {st.activeSchemesCount}+ {isHi ? 'योजनाएं' : 'Schemes'}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                      {isHi ? st.name_hi : st.name_en}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {isHi ? st.description_hi : st.description_en}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-amber-700 dark:text-amber-400 font-semibold">
                    <span>{isHi ? 'राज्य हब खोलें' : 'Open State Hub'}</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 5: Latest Verified Government Updates (Direct Crawlable Links) */}
          <section aria-labelledby="updates-title">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                  {isHi ? 'ताजा सरकारी अधिसूचनाएं' : 'Real-Time Policy Verification'}
                </div>
                <h2 id="updates-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {isHi ? 'नवीनतम सरकारी योजना अपडेट्स 2026' : 'Latest Government Announcements & Notices'}
                </h2>
              </div>
              <Link
                href={isHi ? '/hi/updates' : '/updates'}
                className="text-xs font-bold text-sky-800 dark:text-sky-400 hover:text-sky-900 dark:hover:text-sky-300 transition-colors flex items-center gap-1"
              >
                <span>{isHi ? 'सभी अपडेट्स देखें' : 'View All Updates'}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {UPDATES.map((up) => (
                <Link
                  key={up.id}
                  href={isHi ? `/hi/updates/${up.slug}` : `/updates/${up.slug}`}
                  className="group p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 dark:hover:border-sky-500/50 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <span className="font-semibold text-sky-800 dark:text-sky-400 uppercase tracking-wider text-[11px]">
                        {up.category}
                      </span>
                      <span>·</span>
                      <span>{up.publishedDate}</span>
                      <span>·</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                        {isHi ? 'सत्यापित' : 'Verified'}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors">
                      {isHi ? up.title_hi : up.title_en}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {isHi ? up.summary_hi : up.summary_en}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-sky-700 dark:text-sky-400 font-semibold">
                    <span>{isHi ? 'पूरा अपडेट पढ़ें' : 'Read Full Notice'}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer
        lang={lang}
        onSelectNav={handleSelectNav}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        lang={lang}
        onSelectScheme={(s) => {
          setSearchModalOpen(false);
          router.push(isHi ? `/hi/schemes/${s.slug}` : `/schemes/${s.slug}`);
        }}
      />

      <AdminCmsModal
        isOpen={adminCmsOpen}
        onClose={() => setAdminCmsOpen(false)}
        lang={lang}
        schemes={SCHEMES}
        updates={UPDATES}
      />
    </div>
  );
}
