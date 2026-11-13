'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { StateInfo, Scheme, Language } from '@/types';
import { useTheme } from '@/hooks/useTheme';
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
  Layers,
  FileText,
  Clock,
  ArrowRight
} from 'lucide-react';
import { ARTICLES } from '@/data/articles';

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
  'gujarat': { name: 'Government of Gujarat Official Portal', url: 'https://gujaratindia.gov.in' },
};

export default function StateDetailView({
  stateInfo,
  schemes,
  initialLang,
}: StateDetailViewProps) {
  const router = useRouter();
  const isHi = initialLang === 'hi';
  const { isDark, toggleTheme } = useTheme();
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  type FilterType = 'state' | 'all' | 'central';
  const isAllIndia = stateInfo.id === 'all-india';
  const hasStateSpecific = schemes.some((s) => s.state === stateInfo.id);

  const [filter, setFilter] = useState<FilterType>(() => {
    if (isAllIndia) return 'all';
    return hasStateSpecific ? 'state' : 'all';
  });

  const stateSpecificSchemes = schemes.filter((s) => s.state === stateInfo.id);
  const centralSchemes = schemes.filter((s) => s.state === 'all-india');

  const displayedSchemes = React.useMemo(() => {
    if (isAllIndia || filter === 'all') {
      return [...stateSpecificSchemes, ...centralSchemes];
    }
    if (filter === 'state') {
      return stateSpecificSchemes;
    }
    if (filter === 'central') {
      return centralSchemes;
    }
    return schemes;
  }, [filter, schemes, isAllIndia, stateSpecificSchemes, centralSchemes]);

  const portal = STATE_OFFICIAL_PORTALS[stateInfo.id] || {
    name: 'National Portal of India',
    url: 'https://india.gov.in',
  };

  const relatedArticles = React.useMemo(() => {
    return ARTICLES.filter((a) => a.relatedStateId === stateInfo.id);
  }, [stateInfo.id]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {isAllIndia
                  ? (isHi ? 'केंद्रीय सरकार की प्रमुख कल्याणकारी योजनाएं' : 'Central Flagship Welfare Schemes')
                  : filter === 'state'
                  ? (isHi
                      ? `${stateInfo.name_hi} सरकार की विशेष योजनाएं (${displayedSchemes.length})`
                      : `${stateInfo.name_en} State-Specific Schemes (${displayedSchemes.length})`)
                  : filter === 'central'
                  ? (isHi
                      ? `केंद्र सरकार की योजनाएं जो ${stateInfo.name_hi} में लागू हैं (${displayedSchemes.length})`
                      : `Central Schemes Active in ${stateInfo.name_en} (${displayedSchemes.length})`)
                  : (isHi
                      ? `${stateInfo.name_hi} में सभी लागू योजनाएं (राज्य + केंद्र) (${displayedSchemes.length})`
                      : `All Applicable Schemes in ${stateInfo.name_en} (${displayedSchemes.length})`)}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                {filter === 'state' && !isAllIndia
                  ? (isHi
                      ? `${stateInfo.name_hi} शासन द्वारा विशेष रूप से राज्य के नागरिकों हेतु संचालित योजनाएं।`
                      : `Schemes specifically funded and administered by the Government of ${stateInfo.name_en}.`)
                  : (isHi
                      ? 'पात्रता नियम, लाभ राशि और आधिकारिक आवेदन की पूरी जानकारी।'
                      : 'Complete guidelines, eligibility rules, and official application links.')}
              </p>
            </div>
          </div>

          {/* Filter Pills for States (State-Specific vs All vs Central) */}
          {!isAllIndia && (
            <div className="flex flex-wrap items-center gap-2 mb-6 p-1.5 bg-slate-100 dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 w-fit">
              <button
                type="button"
                onClick={() => setFilter('state')}
                className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  filter === 'state'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
                }`}
              >
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>{isHi ? `${stateInfo.name_hi} विशेष` : `${stateInfo.name_en} Only`}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
                    filter === 'state'
                      ? 'bg-amber-700/90 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {stateSpecificSchemes.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  filter === 'all'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
                }`}
              >
                <Layers className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>{isHi ? 'सभी योजनाएं (राज्य + केंद्र)' : 'All (State + Central)'}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
                    filter === 'all'
                      ? 'bg-amber-700/90 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {schemes.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setFilter('central')}
                className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  filter === 'central'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
                }`}
              >
                <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>{isHi ? 'केंद्रीय योजनाएं' : 'Central Only'}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
                    filter === 'central'
                      ? 'bg-amber-700/90 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {centralSchemes.length}
                </span>
              </button>
            </div>
          )}

          {displayedSchemes.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedSchemes.map((scheme) => (
                  <SchemeCard
                    key={scheme.id}
                    scheme={scheme}
                    lang={initialLang || 'en'}
                    onSelect={() => {
                      router.push(isHi ? `/hi/schemes/${scheme.slug}` : `/schemes/${scheme.slug}`);
                    }}
                    onCheckEligibility={() => {
                      router.push(isHi ? `/hi/checker?scheme=${scheme.slug}` : `/checker?scheme=${scheme.slug}`);
                    }}
                  />
                ))}
              </div>

              {/* Central Schemes Suggestion Banner when filtered to State-Only */}
              {!isAllIndia && filter === 'state' && centralSchemes.length > 0 && (
                <div className="mt-8 p-5 bg-gradient-to-r from-amber-50/90 via-orange-50/50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 rounded-2xl border border-amber-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400">
                      <Sparkles className="h-4 w-4 text-amber-600" />
                      <span>
                        {isHi
                          ? `${stateInfo.name_hi} के निवासियों के लिए केंद्र सरकार की योजनाएं भी उपलब्ध हैं`
                          : `Central Schemes Also Available for ${stateInfo.name_en} Residents`}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {isHi
                        ? `पीएम किसान, आयुष्मान भारत, पीएम आवास सहित केंद्र सरकार की ${centralSchemes.length} अन्य प्रमुख योजनाएं भी आप प्राप्त कर सकते हैं।`
                        : `You can also access ${centralSchemes.length} nationwide Central Government schemes active in ${stateInfo.name_en}.`}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFilter('all')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors whitespace-nowrap"
                  >
                    <span>{isHi ? 'सभी योजनाएं देखें' : 'View All Schemes'}</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-14 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
              <Layers className="h-10 w-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {isHi
                  ? `${stateInfo.name_hi} की राज्य विशेष योजनाएं जोड़ी जा रही हैं`
                  : `State-Specific Schemes for ${stateInfo.name_en} Being Added`}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                {isHi
                  ? 'हमारी संपादकीय टीम इस राज्य की विशेष योजनाओं का सत्यापन कर रही है। तब तक आप इस राज्य में लागू सभी केंद्रीय योजनाएं देख सकते हैं।'
                  : 'Our editorial desk is actively compiling and verifying welfare programs for this state. In the meantime, you can explore all applicable Central schemes.'}
              </p>
              <button
                type="button"
                onClick={() => setFilter('all')}
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition-colors"
              >
                <span>{isHi ? 'सभी लागू योजनाएं देखें' : 'View All Applicable Schemes'}</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          {/* Related Articles & Guides for this State */}
          {relatedArticles.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {isHi
                    ? `${stateInfo.name_hi} संबंधित महत्वपूर्ण गाइड्स व दस्तावेज़`
                    : `Important Guides & Documents for ${stateInfo.name_en}`}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedArticles.map((art) => (
                  <Link
                    key={art.id}
                    href={isHi ? `/hi/articles/${art.slug}` : `/articles/${art.slug}`}
                    className="group block p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-semibold text-[11px]">
                        {isHi ? art.categoryLabel_hi : art.categoryLabel_en}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {isHi ? art.readTime_hi : art.readTime_en}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {isHi ? art.title_hi : art.title_en}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                      {isHi ? art.summary_hi : art.summary_en}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      <span>{isHi ? 'पूरा आर्टिकल व लिस्ट पढ़ें' : 'Read Full Guide'}</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
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
            router.push(isHi ? `/hi/schemes/${s.slug}` : `/schemes/${s.slug}`);
          }}
        />
      )}
    </div>
  );
}
