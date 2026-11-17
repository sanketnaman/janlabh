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
  ArrowRight,
  PhoneCall,
  Globe,
  HelpCircle,
  FileCheck,
  ChevronDown,
  ChevronUp,
  Download
} from 'lucide-react';
import { ARTICLES } from '@/data/articles';
import { STATE_HUB_PROFILES } from '@/data/stateHubData';

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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  const hubProfile = STATE_HUB_PROFILES[stateInfo.id] || STATE_HUB_PROFILES['all-india'];

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
              ? `${stateInfo.name_hi} सरकारी योजनाएं एवं नागरिक ई-सेवाएं 2026`
              : `${stateInfo.name_en} Government Schemes & Citizen E-Services 2026`}
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-4xl leading-relaxed">
            {isHi ? hubProfile.welfareOverview_hi : hubProfile.welfareOverview_en}
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

          {/* Quick Action Link Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-xs"
            >
              <span>{isHi ? 'राज्य का मुख्य सरकारी पोर्टल' : 'Official State Government Portal'}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <Link
              href={isHi ? '/hi/checker' : '/checker'}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-xl bg-amber-600 text-white hover:bg-amber-700 transition-colors shadow-xs"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>{isHi ? 'अपनी पात्रता जांचें' : 'Check Your Eligibility'}</span>
            </Link>
            <Link
              href={isHi ? '/hi/states' : '/states'}
              className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-400"
            >
              <span>{isHi ? 'अन्य सभी राज्य देखें' : 'View All States'}</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Jharkhand Special Callout: 25+ Schemes Directory & PDF Download Guide */}
        {stateInfo.id === 'jharkhand' && (
          <div className="mb-8 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/5 dark:from-amber-950/40 dark:via-orange-950/20 dark:to-slate-900 border-2 border-amber-500/30 dark:border-amber-600/40 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-slate-950 uppercase tracking-wider">
                <Download className="h-3.5 w-3.5" />
                <span>{isHi ? 'विशेष पीडीएफ गाइड उपलब्ध' : 'Special PDF Guide Available'}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                {isHi
                  ? 'झारखंड 25+ सरकारी योजना लिस्ट 2026: पूरी डायरेक्टरी व फॉर्म डाउनलोड'
                  : 'Jharkhand 25+ Schemes Directory 2026: Complete PDF List & Forms'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {isHi
                  ? 'मंईयां सम्मान, अबुआ आवास, गुरुजी क्रेडिट कार्ड, सर्वजन पेंशन और बिरसा फसल बीमा सहित सभी 26 योजनाओं की श्रेणीवार लाभ राशि, पात्रता नियम व आधिकारिक फॉर्म डाउनलोड करें।'
                  : 'Explore all 26 Jharkhand schemes categorized by women, housing, farmers, students, and pensions with exact grant figures, document lists, and downloadable PDF application forms.'}
              </p>
            </div>
            <Link
              href={isHi ? '/hi/articles/jharkhand-government-schemes-list-pdf-download' : '/articles/jharkhand-government-schemes-list-pdf-download'}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md shrink-0 whitespace-nowrap"
            >
              <FileText className="h-4 w-4" />
              <span>{isHi ? 'पूरी 26+ लिस्ट व PDF पढ़ें' : 'Read Full 25+ List & PDF'}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        {/* Section: Official State Citizen Portals Directory */}
        <section aria-labelledby="portals-title" className="mb-10">
          <div className="flex items-center justify-between gap-2 mb-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                {isHi ? 'एकल-खिड़की आधिकारिक मंच' : 'Single-Window Digital Governance'}
              </div>
              <h2 id="portals-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                {isHi
                  ? `${stateInfo.name_hi} के प्रमुख आधिकारिक ई-गवर्नेंस एवं कल्याण पोर्टल`
                  : `Key Official Citizen & E-Governance Portals in ${stateInfo.name_en}`}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hubProfile.portals.map((p, idx) => (
              <a
                key={idx}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-amber-100/70 dark:bg-amber-950/50 text-amber-900 dark:text-amber-300 font-semibold text-[11px] uppercase tracking-wider">
                      {p.category}
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {isHi ? p.name_hi : p.name_en}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {isHi ? p.purpose_hi : p.purpose_en}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-amber-700 dark:text-amber-400">
                  <span>{isHi ? 'आधिकारिक पोर्टल खोलें' : 'Open Portal'}</span>
                  <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Schemes Section */}
        <section aria-labelledby="schemes-title" className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <h2 id="schemes-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
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
                    showBanner={true}
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
        </section>

        {/* Section: State Helplines & Grievance Directory */}
        <section aria-labelledby="helplines-title" className="mb-12">
          <div className="mb-4">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              {isHi ? 'सहायता एवं जन शिकायत निवारण' : 'Citizen Assistance & Grievance Redressal'}
            </div>
            <h2 id="helplines-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {isHi
                ? `${stateInfo.name_hi} आधिकारिक हेल्पलाइन व सहायता केंद्र`
                : `${stateInfo.name_en} Official Citizen Helplines & Support`}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {hubProfile.helplines.map((h, idx) => (
              <div
                key={idx}
                className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    <PhoneCall className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="line-clamp-1">{isHi ? h.department_hi : h.department_en}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {isHi ? h.title_hi : h.title_en}
                  </h3>
                  <div className="mt-3 text-lg sm:text-xl font-extrabold text-amber-700 dark:text-amber-400">
                    <a href={`tel:${h.number.replace(/[^0-9+]/g, '')}`} className="hover:underline">
                      {h.number}
                    </a>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>{isHi ? 'कार्य समय:' : 'Timing:'}</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{isHi ? h.timing_hi : h.timing_en}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: State Domicile & Certificate Authority */}
        <section aria-labelledby="domicile-title" className="mb-12">
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <FileCheck className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <h2 id="domicile-title" className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                {isHi
                  ? `${stateInfo.name_hi} में स्थानीय निवास प्रमाण पत्र (Domicile) के नियम`
                  : `Domicile & Residency Certificate Guidelines in ${stateInfo.name_en}`}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              {isHi ? hubProfile.domicileRules_hi : hubProfile.domicileRules_en}
            </p>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <span className="font-semibold text-slate-900 dark:text-white">
                {isHi ? 'सक्षम प्रमाण पत्र जारीकर्ता प्राधिकरण:' : 'Competent Issuing Authority:'}
              </span>
              <span className="text-amber-700 dark:text-amber-400 font-bold">
                {isHi ? hubProfile.issuingAuthority_hi : hubProfile.issuingAuthority_en}
              </span>
            </div>
          </div>
        </section>

        {/* Section: State-Specific Frequently Asked Questions */}
        <section aria-labelledby="faqs-title" className="mb-12">
          <div className="mb-4">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              {isHi ? 'नागरिकों द्वारा अक्सर पूछे जाने वाले सवाल' : 'Frequently Asked Questions'}
            </div>
            <h2 id="faqs-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {isHi
                ? `${stateInfo.name_hi} सरकारी योजनाओं से जुड़े महत्वपूर्ण प्रश्न`
                : `Key Questions on ${stateInfo.name_en} Government Welfare`}
            </h2>
          </div>

          <div className="space-y-3">
            {hubProfile.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                  >
                    <span>{isHi ? faq.q_hi : faq.q_en}</span>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-amber-600 shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                      {isHi ? faq.a_hi : faq.a_en}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Related Articles & Guides for this State */}
        {relatedArticles.length > 0 && (
          <section aria-labelledby="articles-title" className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <h2 id="articles-title" className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
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
          </section>
        )}
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
