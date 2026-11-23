'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { StateInfo, Language } from '@/types';
import { SCHEMES } from '@/data/schemes';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import {
  STATE_PORTALS,
  STATE_DBT_MATRIX,
  STATE_IDENTITY_SYSTEMS,
  STATES_FAQS,
} from './statesData';
import {
  MapPin,
  Building,
  ChevronRight,
  Home,
  CheckCircle2,
  ArrowRight,
  Layers,
  Search,
  ShieldCheck,
  HelpCircle,
  ExternalLink,
  FileText,
  CreditCard,
  Users,
  Scale,
  AlertCircle,
  ChevronDown,
  Info,
  Sparkles,
  Landmark,
  Check,
  Compass,
  Briefcase,
  Award,
} from 'lucide-react';

interface StatesDirectoryClientProps {
  states: StateInfo[];
  initialLang?: Language;
}

type ZoneFilter = 'all' | 'central' | 'north-central' | 'east' | 'west';

export default function StatesDirectoryClient({
  states,
  initialLang,
}: StatesDirectoryClientProps) {
  const router = useRouter();
  const isHi = initialLang === 'hi';
  const { isDark, toggleTheme } = useTheme();
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [activeZone, setActiveZone] = useState<ZoneFilter>('all');
  const [openFaq, setOpenFaq] = useState<string | null>('faq-diff');

  // Filtered states logic
  const filteredStates = useMemo(() => {
    return states.filter((st) => {
      // Zone filter
      if (activeZone === 'central' && st.id !== 'all-india') return false;
      if (
        activeZone === 'north-central' &&
        !['uttar-pradesh', 'madhya-pradesh', 'rajasthan'].includes(st.id)
      )
        return false;
      if (activeZone === 'east' && !['jharkhand', 'bihar'].includes(st.id))
        return false;
      if (activeZone === 'west' && !['maharashtra', 'gujarat'].includes(st.id))
        return false;

      // Query filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const matchName =
        st.name_en.toLowerCase().includes(q) ||
        st.name_hi.toLowerCase().includes(q);
      const matchCapital =
        st.capital_en.toLowerCase().includes(q) ||
        st.capital_hi.toLowerCase().includes(q);
      const matchFlagships =
        st.flagshipPrograms_en.some((p) => p.toLowerCase().includes(q)) ||
        st.flagshipPrograms_hi.some((p) => p.toLowerCase().includes(q));

      return matchName || matchCapital || matchFlagships;
    });
  }, [states, activeZone, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Header
        lang={initialLang || 'en'}
        onToggleLang={() => {
          if (isHi) {
            router.push('/states');
          } else {
            router.push('/hi/states');
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
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 mb-6"
        >
          <Link
            href={isHi ? '/hi' : '/'}
            className="hover:text-amber-700 dark:hover:text-amber-400 flex items-center gap-1"
          >
            <Home className="h-3.5 w-3.5" />
            <span>{isHi ? 'होम' : 'Home'}</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="font-semibold text-slate-900 dark:text-white">
            {isHi ? 'राज्य विशेष हब' : 'States Resource Hub'}
          </span>
        </nav>

        {/* Hero Section */}
        <div className="mb-10 rounded-3xl bg-gradient-to-br from-amber-500/10 via-slate-100 to-emerald-500/10 dark:from-amber-950/40 dark:via-slate-900 dark:to-emerald-950/30 p-6 sm:p-10 border border-amber-200/60 dark:border-amber-900/40 shadow-sm">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
              <Compass className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>
                {isHi
                  ? 'अखिल भारतीय राज्य कल्याणकारी डायरेक्टरी 2026'
                  : 'All-India State Welfare & e-Governance Hub 2026'}
              </span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              <ShieldCheck className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
              <span>{isHi ? '8 राज्य हब + अखिल भारतीय' : '8 State Hubs + All India'}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {isHi
              ? 'राज्य अनुसार सरकारी योजनाएं एवं नागरिक पोर्टल 2026'
              : 'State-Wise Government Schemes & Citizen Portals 2026'}
          </h1>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-700 dark:text-slate-300 max-w-4xl leading-relaxed">
            {isHi
              ? 'भारत के संघीय ढांचे में राज्य सरकारें सीधे अपने बजट से महिला नकद हस्तांतरण, किसान प्रोत्साहन, छात्र क्रेडिट कार्ड और सामाजिक पेंशन योजनाएं संचालित करती हैं। अपने राज्य के आधिकारिक ई-डिस्ट्रिक्ट पोर्टल, स्थानीय निवास (Domicile) पात्रता और सत्यापित जनकल्याण योजनाओं की पूरी जानकारी यहाँ प्राप्त करें।'
              : 'Under India’s cooperative federalism, state governments disburse thousands of crores directly from state exchequers for direct cash transfers, farmer bonuses, youth credit cards, and social pensions. Explore state-specific single-window portals, residency criteria, and verified flagship welfare programs.'}
          </p>

          {/* Search & Filter Bar */}
          <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isHi
                    ? 'राज्य का नाम या योजना खोजें (जैसे झारखंड, लाडली बहना, बिहार, किसान)...'
                    : 'Search state by name or scheme (e.g. Jharkhand, Ladli Behna, Bihar, Farmer)...'
                }
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  {isHi ? 'साफ करें' : 'Clear'}
                </button>
              )}
            </div>

            {/* Zone Filter Buttons */}
            <div className="flex flex-wrap gap-1.5 items-center">
              <button
                onClick={() => setActiveZone('all')}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition ${
                  activeZone === 'all'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {isHi ? 'सभी राज्य' : 'All States'}
              </button>
              <button
                onClick={() => setActiveZone('central')}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition ${
                  activeZone === 'central'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {isHi ? 'केंद्र सरकार' : 'Central (All India)'}
              </button>
              <button
                onClick={() => setActiveZone('north-central')}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition ${
                  activeZone === 'north-central'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {isHi ? 'उत्तर व मध्य भारत' : 'North & Central'}
              </button>
              <button
                onClick={() => setActiveZone('east')}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition ${
                  activeZone === 'east'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {isHi ? 'पूर्वी भारत' : 'East India'}
              </button>
              <button
                onClick={() => setActiveZone('west')}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition ${
                  activeZone === 'west'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {isHi ? 'पश्चिम भारत' : 'West India'}
              </button>
            </div>
          </div>
        </div>

        {/* States Directory Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Landmark className="h-5 w-5 text-amber-600" />
              <span>
                {isHi
                  ? `उपलब्ध राज्य हब (${filteredStates.length})`
                  : `State Welfare Hubs (${filteredStates.length})`}
              </span>
            </h2>
            {searchQuery && (
              <span className="text-xs text-slate-500">
                {isHi
                  ? `"${searchQuery}" के लिए परिणाम`
                  : `Results for "${searchQuery}"`}
              </span>
            )}
          </div>

          {filteredStates.length === 0 ? (
            <div className="p-10 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {isHi
                  ? 'कोई राज्य या योजना नहीं मिली। कृपया अलग कीवर्ड आज़माएँ।'
                  : 'No matching state found. Please try a different query.'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveZone('all');
                }}
                className="mt-3 px-4 py-1.5 text-xs font-semibold bg-amber-600 text-white rounded-lg hover:bg-amber-700"
              >
                {isHi ? 'फ़िल्टर रीसेट करें' : 'Reset Filters'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStates.map((st) => {
                const stateUrl = isHi ? `/hi/states/${st.id}` : `/states/${st.id}`;
                const portal = STATE_PORTALS.find((p) => p.stateId === st.id);
                const schemeCount = SCHEMES.filter(
                  (s) => s.state === st.id || (st.id !== 'all-india' && s.state === 'all-india')
                ).length;

                return (
                  <Link
                    key={st.id}
                    href={stateUrl}
                    className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition-all hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-xl"
                  >
                    <div>
                      {/* Top Bar with Capital & Scheme Count */}
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                        <span className="flex items-center gap-1 font-semibold text-amber-700 dark:text-amber-400">
                          <MapPin className="h-3.5 w-3.5" />
                          {isHi ? `राजधानी: ${st.capital_hi}` : `Capital: ${st.capital_en}`}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-[11px] font-bold">
                          {schemeCount} {isHi ? 'सत्यापित योजनाएं' : 'Verified Schemes'}
                        </span>
                      </div>

                      {/* State Title */}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                        {isHi ? st.name_hi : st.name_en}
                      </h3>

                      {/* Official Portal Badge */}
                      {portal && (
                        <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded-md">
                          <Building className="h-3 w-3 text-slate-500" />
                          <span>
                            {isHi ? 'पोर्टल:' : 'Portal:'} {isHi ? portal.portalName_hi : portal.portalName_en}
                          </span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {isHi ? st.description_hi : st.description_en}
                      </p>

                      {/* Flagship Badges */}
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          {isHi ? 'प्रमुख योजनाएं:' : 'Flagship Welfare Programs:'}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {(isHi ? st.flagshipPrograms_hi : st.flagshipPrograms_en)
                            .slice(0, 3)
                            .map((prog, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/40"
                              >
                                {prog}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Action */}
                    <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-400">
                      <span>{isHi ? 'राज्य हब देखें व आवेदन करें' : 'Explore State Hub & Portals'}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Section 3: Federal Welfare Architecture (State vs Central Schemes) */}
        <section className="mb-16 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <Scale className="h-4 w-4" />
            <span>{isHi ? 'संघीय कल्याणकारी ढांचा' : 'Constitutional Welfare Architecture'}</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {isHi
              ? 'केंद्र सरकार बनाम राज्य सरकार की योजनाएं: बजट, फंडिंग एवं पात्रता अंतर'
              : 'Central vs State Welfare Schemes: Funding Ratios, Budgets & Legal Rights'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
            {isHi
              ? 'भारत के संविधान की 7वीं अनुसूची (समवर्ती एवं राज्य सूची) के तहत कल्याणकारी योजनाओं का दायित्व केंद्र और राज्य दोनों के पास है। एक नागरिक के रूप में यह जानना आवश्यक है कि आपकी योजना का खर्च कौन उठा रहा है और आप किन-किन लाभों को एक साथ प्राप्त कर सकते हैं।'
              : 'Under the Seventh Schedule of the Constitution of India, welfare responsibilities are distributed across Central, State, and Concurrent lists. Understanding which tier funds your scheme ensures clarity on eligibility rules and dual-entitlement rights.'}
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Central Sector */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-6">
              <div className="h-10 w-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center font-black text-sm mb-4">
                100%
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {isHi ? 'केंद्रीय क्षेत्र योजनाएं (Central Sector)' : 'Central Sector Schemes'}
              </h3>
              <p className="mt-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
                {isHi ? '100% केंद्रीय बजट से वित्तपोषित' : '100% Funded by Union Government'}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isHi
                  ? 'ये योजनाएं पूरी तरह से भारत सरकार के मंत्रालयों द्वारा चलाई जाती हैं। इनमें राज्य सरकारों का कोई वित्तीय अंशदान नहीं होता। पूरे देश के पात्र नागरिक समान नियमों के तहत पात्र होते हैं।'
                  : 'Implemented directly by Union Ministries with 100% central exchequer outlays. Uniform eligibility criteria apply across all 28 states and 8 union territories.'}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-500">
                <span className="font-bold text-slate-700 dark:text-slate-300">
                  {isHi ? 'प्रमुख उदाहरण: ' : 'Examples: '}
                </span>
                PM-Kisan (₹6,000/yr), PM Vishwakarma, PM Surya Ghar Muft Bijli.
              </div>
            </div>

            {/* Centrally Sponsored */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-6">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-black text-sm mb-4">
                60:40
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {isHi ? 'केंद्र प्रायोजित योजनाएं (Centrally Sponsored - CSS)' : 'Centrally Sponsored Schemes (CSS)'}
              </h3>
              <p className="mt-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                {isHi ? 'केंद्र (60%) : राज्य (40%) साझा खर्च' : 'Shared Cost (60% Centre : 40% State)'}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isHi
                  ? 'नीति और दिशा-निर्देश केंद्र सरकार तय करती है, लेकिन जमीन पर क्रियान्वयन और 40% खर्च संबंधित राज्य सरकार वहन करती है (विशेष राज्यों में 90:10 का अनुपात होता है)।'
                  : 'National guidelines designed by Central Ministries, executed on the ground by State administrations with shared funding (typically 60:40 or 90:10 for Himalayan states).'}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-500">
                <span className="font-bold text-slate-700 dark:text-slate-300">
                  {isHi ? 'प्रमुख उदाहरण: ' : 'Examples: '}
                </span>
                Ayushman Bharat (PM-JAY), PM Awas Yojana (PMAY-G/U), MGNREGA.
              </div>
            </div>

            {/* Pure State Schemes */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-6">
              <div className="h-10 w-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center font-black text-sm mb-4">
                State
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {isHi ? 'विशुद्ध राज्य योजनाएं (Pure State Schemes)' : '100% State Exchequer Welfare'}
              </h3>
              <p className="mt-1 text-xs font-semibold text-amber-700 dark:text-amber-400">
                {isHi ? '100% राज्य के अपने खजाने से संचालित' : '100% Financed by State Taxpayers'}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {isHi
                  ? 'राज्य विधानमंडलों द्वारा स्वीकृत योजनाएं जो राज्य के अपने संसाधनों से चलती हैं। इनके लिए संबंधित राज्य का अधिवास (Domicile) और स्थानीय पहचान प्रमाण अनिवार्य होता है।'
                  : 'Tailored specifically by state cabinets to meet localized socioeconomic priorities. Strict state domicile, local revenue checks, and family registries apply.'}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-500">
                <span className="font-bold text-slate-700 dark:text-slate-300">
                  {isHi ? 'प्रमुख उदाहरण: ' : 'Examples: '}
                </span>
                Maiya Samman (JH), Ladli Behna (MP), Majhi Ladki Bahin (MH), MMUY (GJ).
              </div>
            </div>
          </div>

          {/* Dual Benefit Callout Box */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-amber-500/10 dark:bg-amber-950/40 border border-amber-300/80 dark:border-amber-800 flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              <span className="font-bold text-slate-900 dark:text-white">
                {isHi
                  ? 'नागरिक अधिकार स्पष्टीकरण (Dual Benefit Right): '
                  : 'Citizen Dual-Benefit Clarification: '}
              </span>
              {isHi
                ? 'क्या आप केंद्र और राज्य दोनों की सहायता ले सकते हैं? हाँ! एक किसान परिवार केंद्र से ₹6,000 (PM-Kisan) के साथ राज्य की इनपुट सब्सिडी ले सकता है। एक महिला ₹5 लाख के आयुष्मान कार्ड (केंद्र) का लाभ लेते हुए राज्य की मासिक लाडली बहना या मंईयां सम्मान राशि (राज्य) सीधे अपने खाते में पा सकती है।'
                : 'Can you receive benefits from both Centre and State simultaneously? Yes! Welfare entitlements in different domains do not cancel each other out. A farmer receives ₹6,000/year under PM-Kisan (Centre) while simultaneously receiving state fertilizer subsidies, and a woman holds an Ayushman Card (Centre) while receiving monthly cash aid (State).'}
            </div>
          </div>
        </section>

        {/* Section 4: Flagship DBT Cash Assistance Matrix */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <CreditCard className="h-4 w-4" />
            <span>{isHi ? 'मासिक डीबीटी तुलना' : 'Direct Cash Transfer Matrix'}</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {isHi
              ? 'प्रमुख राज्यवार प्रत्यक्ष लाभ हस्तांतरण (DBT) तुलनात्मक चार्ट'
              : 'State-Wise Direct Benefit Transfer (DBT) Comparative Matrix'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
            {isHi
              ? 'भारत के विभिन्न राज्यों में महिलाओं, छात्रों और सामाजिक सुरक्षा के लिए दी जाने वाली नियमित आर्थिक सहायता, पात्रता मानदंड और आधिकारिक आवेदन पोर्टल्स का तुलनात्मक विश्लेषण:'
              : 'Direct comparison of monthly welfare disbursements, income limits, eligible age brackets, and official digital portals across key Indian states:'}
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="py-3.5 px-4">{isHi ? 'राज्य' : 'State'}</th>
                    <th className="py-3.5 px-4">{isHi ? 'फ्लैगशिप योजना' : 'Flagship Scheme'}</th>
                    <th className="py-3.5 px-4">{isHi ? 'वित्तीय लाभ / राशि' : 'Financial Benefit'}</th>
                    <th className="py-3.5 px-4">{isHi ? 'पात्रता एवं आयु सीमा' : 'Eligibility & Age'}</th>
                    <th className="py-3.5 px-4 text-right">{isHi ? 'आधिकारिक पोर्टल' : 'Official Portal'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {STATE_DBT_MATRIX.map((item, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                        <Link
                          href={isHi ? `/hi/states/${item.stateId}` : `/states/${item.stateId}`}
                          className="hover:text-amber-600 dark:hover:text-amber-400 flex items-center gap-1"
                        >
                          <MapPin className="h-3 w-3 text-amber-500" />
                          <span>{isHi ? item.stateName_hi : item.stateName_en}</span>
                        </Link>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-800 dark:text-slate-200">
                        {isHi ? item.schemeName_hi : item.schemeName_en}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block px-2 py-0.5 rounded-md font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs">
                          {isHi ? item.benefit_hi : item.benefit_en}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400 text-xs leading-relaxed max-w-xs">
                        {isHi ? item.eligibility_hi : item.eligibility_en}
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <a
                          href={item.portalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline"
                        >
                          <span>{item.portalName}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 5: State Citizen ID & Domicile Checklist */}
        <section className="mb-16 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <Users className="h-4 w-4" />
            <span>{isHi ? 'डिजिटल नागरिक पहचान' : 'State Family Registries'}</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {isHi
              ? 'राज्यों की डिजिटल फैमिली आईडी एवं स्थानीय निवास प्रमाण पत्र चेकलिस्ट'
              : 'State Family ID Systems & Domicile Verification Protocols'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
            {isHi
              ? 'कागजी अड़चनों को खत्म करने और सीधे बैंक खाते में भुगतान सुनिश्चित करने के लिए अधिकांश राज्यों ने अपनी स्वयं की डिजिटल परिवार पहचान प्रणाली लागू की है। जानिए आपके राज्य में कौन-सी पहचान अनिवार्य है:'
              : 'To eliminate bureaucratic friction and prevent duplicate claims, Indian states have introduced integrated family registry databases. Here is how citizen identification works in your state:'}
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STATE_IDENTITY_SYSTEMS.map((sys, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-amber-700 dark:text-amber-400 font-bold mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {isHi ? sys.stateName_hi : sys.stateName_en}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-800 text-[10px] text-slate-700 dark:text-slate-300">
                      {isHi ? 'नागरिक डेटाबेस' : 'Citizen Registry'}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {isHi ? sys.idName_hi : sys.idName_en}
                  </h3>

                  <div className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {isHi ? 'उपयोग / महत्व: ' : 'Purpose: '}
                    </span>
                    {isHi ? sys.purpose_hi : sys.purpose_en}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-0.5">
                    {isHi ? 'आवेदन कैसे करें: ' : 'How to Obtain: '}
                  </span>
                  <p className="text-[11px] leading-relaxed">{isHi ? sys.howToGet_hi : sys.howToGet_en}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Official Single-Window Portals Directory */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <Building className="h-4 w-4" />
            <span>{isHi ? 'आधिकारिक पोर्टल्स' : 'Official e-District Directory'}</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {isHi
              ? 'प्रमाणित राज्य ई-डिस्ट्रिक्ट एवं सिंगल-विंडो नागरिक पोर्टल्स'
              : 'Verified State Single-Window & e-District Digital Portals'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
            {isHi
              ? 'फर्जी वेबसाइट्स या साइबर धोखाधड़ी से बचने के लिए हमेशा राज्यों के आधिकारिक .gov.in अथवा .nic.in डोमेन वाले पोर्टल्स का ही उपयोग करें। नीचे प्रत्येक राज्य का अधिकृत पोर्टल दिया गया है:'
              : 'Protect yourself from online fraud by only accessing sanctioned .gov.in and .nic.in digital platforms. Below is the verified directory of primary state citizen delivery engines:'}
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {STATE_PORTALS.map((portal, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 flex flex-col justify-between hover:border-amber-400 dark:hover:border-amber-500 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-amber-700 dark:text-amber-400">
                      {isHi ? portal.stateName_hi : portal.stateName_en}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {portal.category}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {isHi ? portal.portalName_hi : portal.portalName_en}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {isHi ? portal.primaryService_hi : portal.primaryService_en}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800 transition"
                  >
                    <span>{isHi ? 'आधिकारिक पोर्टल खोलें' : 'Visit Official Portal'}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Citizen Troubleshooting & Pre-requisites */}
        <section className="mb-16 rounded-3xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 p-6 sm:p-10">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <AlertCircle className="h-4 w-4" />
            <span>{isHi ? 'नागरिक सहायता व समाधान' : 'Citizen Guidance & Troubleshooting'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {isHi
              ? 'राज्य योजनाओं में आवेदन से पहले 3 अत्यंत महत्वपूर्ण सावधानियां'
              : 'Crucial Rules Before Applying for State Welfare Schemes'}
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white dark:bg-slate-900 p-5 border border-amber-100 dark:border-slate-800">
              <div className="h-8 w-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold text-sm mb-3">
                1
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {isHi ? 'इंटर-स्टेट बैंक खाता एवं NPCI Seeding' : 'Inter-State Bank Account & NPCI'}
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isHi
                  ? 'यदि आपका बैंक खाता किसी दूसरे राज्य का है, तब भी आपको राज्य योजना की डीबीटी राशि प्राप्त हो सकती है। शर्त केवल यह है कि बैंक खाता आधार से लिंक हो और NPCI मैपर पर सक्रिय हो।'
                  : 'Having a bank account opened in another state does not stop your home state’s DBT. DBT operates via Aadhaar numbers on the National NPCI bridge, reaching your account anywhere in India.'}
              </p>
            </div>

            <div className="rounded-2xl bg-white dark:bg-slate-900 p-5 border border-amber-100 dark:border-slate-800">
              <div className="h-8 w-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold text-sm mb-3">
                2
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {isHi ? 'निवास प्रमाण पत्र (Domicile) रिजेक्शन से बचाव' : 'Preventing Domicile Rejections'}
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isHi
                  ? 'निवास प्रमाण पत्र खारिज होने का सबसे बड़ा कारण भूमि रिकॉर्ड (खतियान) न होना या राजस्व अधिकारी द्वारा भौतिक सत्यापन अधूरा होना है। आवेदन करते समय पुराने स्कूल सर्टिफिकेट या बिजली बिल अवश्य लगाएं।'
                  : 'Domicile applications fail primarily due to missing ancestral Khatiyan land records or revenue inspector mismatches. Attach verified utility bills or school transfer certs to avoid delays.'}
              </p>
            </div>

            <div className="rounded-2xl bg-white dark:bg-slate-900 p-5 border border-amber-100 dark:border-slate-800">
              <div className="h-8 w-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold text-sm mb-3">
                3
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {isHi ? 'दो राज्यों में दोहरे अधिवास का कानूनी प्रतिबंध' : 'Dual State Domicile Restriction'}
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isHi
                  ? 'एक नागरिक एक समय में केवल एक ही राज्य का स्थायी निवासी हो सकता है। दो अलग-अलग राज्यों में एक साथ महिला सहायता या छात्रवृत्ति का दावा करना गैरकानूनी है और कानूनी कार्रवाई हो सकती है।'
                  : 'A citizen can legally claim primary domicile in only one state at a time. Simultaneously claiming state-funded monthly cash transfers across two states constitutes financial fraud.'}
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: In-Depth FAQ Accordion (Bilingual) */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <HelpCircle className="h-4 w-4" />
            <span>{isHi ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {isHi
              ? 'राज्य सरकार योजनाओं से जुड़े महत्वपूर्ण सवाल और उनके जवाब'
              : 'Frequently Asked Questions on State Government Schemes'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
            {isHi
              ? 'पात्रता, बैंक खाते, निवास प्रमाण पत्र और केंद्र-राज्य समन्वय से जुड़े प्रमुख नागरिकों के प्रश्नों के सटीक समाधान:'
              : 'Authoritative answers to common questions about state welfare rules, inter-state banking, domicile certificates, and dual-scheme eligibility:'}
          </p>

          <div className="mt-6 space-y-3">
            {STATES_FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <span className="pr-4">{isHi ? faq.q_hi : faq.q_en}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-500 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                      {isHi ? faq.a_hi : faq.a_en}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer lang={initialLang || 'en'} />

      {/* Search Modal */}
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
