'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Language, Scheme } from '@/types';
import { searchJanLabh, SearchItem } from '@/lib/search';
import { SCHEMES } from '@/data/schemes';
import {
  Search,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  X,
  ChevronRight,
  FileText,
  Newspaper,
  TrendingUp,
  ExternalLink
} from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
  onOpenFinder: () => void;
  onOpenChecker: () => void;
  onExploreSchemes: () => void;
  onSearchSubmit: (query: string) => void;
  onSelectScheme?: (scheme: Scheme) => void;
}

export default function HeroSection({
  lang,
  onOpenFinder,
  onOpenChecker,
  onExploreSchemes,
  onSearchSubmit,
  onSelectScheme
}: HeroSectionProps) {
  const router = useRouter();
  const isHi = lang === 'hi';

  const [searchVal, setSearchVal] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [results, setResults] = useState<SearchItem[]>([]);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Quick popular searches query pills
  const sampleQueries = isHi
    ? ['पीएम किसान सम्मान निधि', 'आयुष्मान 70+ कार्ड', 'मंईयां सम्मान योजना', 'अबुआ आवास', 'एनएसपी स्कॉलरशिप']
    : ['PM Kisan status', 'Ayushman 70+ Senior Card', 'Maiya Samman Yojana', 'Abua Awas', 'NSP Scholarship'];

  // Curated popular schemes for initial zero-query focus
  const popularSchemes = useMemo(() => {
    const popularIds = [
      'jharkhand-maiya-samman',
      'jharkhand-abua-awas',
      'pm-kisan',
      'ayushman-bharat',
      'national-scholarship-portal'
    ];
    return SCHEMES.filter(s => popularIds.includes(s.id));
  }, []);

  // Update suggestions live as the user types
  const handleInputChange = (val: string) => {
    setSearchVal(val);
    setShowSuggestions(true);
    if (val.trim().length > 0) {
      const searchRes = searchJanLabh(val);
      setResults(searchRes);
    } else {
      setResults([]);
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Select a suggestion and navigate directly
  const handleSelectSuggestion = (item: SearchItem) => {
    setShowSuggestions(false);
    if (item.type === 'scheme' && item.rawScheme) {
      if (onSelectScheme) {
        onSelectScheme(item.rawScheme);
      } else {
        router.push(`/schemes/${item.rawScheme.slug}`);
      }
    } else if (item.type === 'update' && item.rawUpdate) {
      onSearchSubmit(item.title);
    }
  };

  // Select a direct scheme from the trending list
  const handleSelectSchemeDirect = (scheme: Scheme) => {
    setShowSuggestions(false);
    if (onSelectScheme) {
      onSelectScheme(scheme);
    } else {
      router.push(`/schemes/${scheme.slug}`);
    }
  };

  // Submit on Enter or Search button click
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchVal.trim()) return;

    const currentResults = searchJanLabh(searchVal);
    if (currentResults.length > 0 && currentResults[0].type === 'scheme' && currentResults[0].rawScheme) {
      handleSelectSuggestion(currentResults[0]);
    } else {
      onSearchSubmit(searchVal.trim());
    }
    setShowSuggestions(false);
  };

  // Clear search input
  const handleClear = () => {
    setSearchVal('');
    setResults([]);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Key navigation (Esc to close)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1326] py-12 sm:py-16 lg:py-20 transition-colors duration-200">
      {/* 1. Abstract Indian Tricolor SVG Background Layer - High visibility & rich tones */}
      <div
        className="absolute inset-0 bg-[url('/background/background.svg')] bg-cover bg-center bg-no-repeat pointer-events-none opacity-90 dark:opacity-80 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* 2. Soft readability backdrop (maintains contrast without washing out colors) */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/60 dark:from-[#0B1326]/30 dark:via-transparent dark:to-[#0B1326]/60 pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Foreground Interactive Content Layer */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Trust Kicker with High Contrast Pill */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-100 mb-4 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-xs backdrop-blur-xs">
          <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold">
            <CheckCircle2 className="h-4 w-4" />
            {isHi ? '100% आधिकारिक स्रोत' : '100% Official Sources'}
          </span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
          <span>{isHi ? 'स्वतंत्र नागरिक मार्गदर्शन' : 'Independent Citizen Guidance'}</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
          <span>{isHi ? 'गोपनीयता सुरक्षित' : 'Zero Data Storage'}</span>
        </div>

        {/* PRD Master Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white text-balance leading-tight">
          {isHi ? (
            <>
              सरकारी योजनाएं खोजें, पात्रता समझें और <span className="text-amber-600 dark:text-amber-400">सही आधिकारिक जानकारी पाएं।</span>
            </>
          ) : (
            <>
              Discover Government Schemes, Understand Eligibility & <span className="text-amber-600 dark:text-amber-400">Access Official Portals.</span>
            </>
          )}
        </h1>

        {/* Supporting text */}
        <p className="mt-4 text-base sm:text-lg text-slate-800 dark:text-slate-100 max-w-2xl mx-auto leading-relaxed font-medium">
          {isHi
            ? 'सरकारी योजनाओं, लाभों और जरूरी अपडेट्स की आसान, व्यवस्थित और निष्पक्ष जानकारी।'
            : 'Structured, reliable, and step-by-step guidance to navigate Central and State citizen welfare programs without middlemen.'}
        </p>

        {/* Interactive Search Box with Real-time Auto-Suggest Dropdown */}
        <div ref={searchContainerRef} className="relative mt-8 max-w-2xl mx-auto">
          <form onSubmit={handleSearch}>
            <div className="relative flex items-center shadow-lg rounded-2xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 p-2 focus-within:border-amber-500 dark:focus-within:border-amber-400 focus-within:ring-4 focus-within:ring-amber-500/20 transition-all">
              <Search className="ml-3 h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={searchVal}
                onChange={(e) => handleInputChange(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onKeyDown={handleKeyDown}
                placeholder={
                  isHi
                    ? 'योजना का नाम, श्रेणी या राज्य लिखें (उदा. PM Kisan, मंईयां सम्मान, अबुआ आवास)...'
                    : 'Search scheme, category, or state (e.g. PM Kisan, Ayushman, Maiya Samman)...'
                }
                className="w-full border-none bg-transparent px-3 py-2 text-sm sm:text-base font-semibold text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-300 focus:outline-none"
                autoComplete="off"
              />

              {/* Clear button */}
              {searchVal && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="p-1.5 text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white rounded-lg transition-colors mr-1 cursor-pointer"
                  title={isHi ? 'हटाएं' : 'Clear search'}
                  aria-label="Clear"
                >
                  <X className="h-4 w-4" />
                </button>
              )}

              {/* Submit button */}
              <button
                type="submit"
                className="px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 active:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-xl transition-all whitespace-nowrap shrink-0 shadow-sm cursor-pointer flex items-center gap-1.5"
              >
                <span>{isHi ? 'खोजें' : 'Search'}</span>
                <ArrowRight className="h-4 w-4 hidden sm:inline" />
              </button>
            </div>
          </form>

          {/* Live Auto-Suggest Popup Menu */}
          {showSuggestions && (
            <div className="absolute left-0 right-0 top-full mt-2 z-50 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden text-left animate-in fade-in zoom-in-95 duration-150 max-h-[75vh] flex flex-col">
              
              {/* Header in Suggestion Box */}
              <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-200">
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                  {searchVal.trim()
                    ? (isHi ? `मिलती-जुलती योजनाएं (${results.length})` : `Matching Results (${results.length})`)
                    : (isHi ? 'लोकप्रिय व अत्यधिक खोजी जाने वाली योजनाएं' : 'Popular & Trending Schemes')}
                </span>
                <button
                  type="button"
                  onClick={() => setShowSuggestions(false)}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-white"
                  aria-label="Close"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Suggestions List */}
              <div className="overflow-y-auto max-h-[55vh] divide-y divide-slate-100 dark:divide-slate-800">
                {searchVal.trim() ? (
                  results.length > 0 ? (
                    results.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleSelectSuggestion(item)}
                        className="p-3.5 hover:bg-amber-50/80 dark:hover:bg-slate-800/90 cursor-pointer transition-colors flex items-center justify-between gap-3 group"
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <div className="p-2 rounded-xl bg-amber-100/80 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            {item.type === 'scheme' ? (
                              <FileText className="h-4 w-4" />
                            ) : (
                              <Newspaper className="h-4 w-4" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap mb-0.5">
                              {item.rawScheme && (
                                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200/80 dark:border-amber-800/80">
                                  {isHi ? item.rawScheme.stateLabel_hi : item.rawScheme.stateLabel_en}
                                </span>
                              )}
                              {item.rawScheme?.benefitAmount_en && (
                                <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                                  {isHi ? item.rawScheme.benefitAmount_hi : item.rawScheme.benefitAmount_en}
                                </span>
                              )}
                            </div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors truncate">
                              {isHi ? item.title_hi : item.title}
                            </h4>
                            <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-1 mt-0.5">
                              {isHi ? item.rawScheme?.benefitSummary_hi : item.rawScheme?.benefitSummary_en}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-semibold text-amber-700 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                          <span>{isHi ? 'खोलें' : 'View'}</span>
                          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-6 text-center">
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {isHi ? `"${searchVal}" से संबंधित कोई योजना नहीं मिली` : `No schemes found for "${searchVal}"`}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        {isHi
                          ? 'कृपया अन्य कीवर्ड खोजें या योजना खोजक (Scheme Finder) का उपयोग करें।'
                          : 'Try searching with alternate keywords or discover via Scheme Finder.'}
                      </p>
                      <button
                        type="button"
                        onClick={onOpenFinder}
                        className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-900/60 transition-colors"
                      >
                        <span>{isHi ? 'योजना खोजक खोलें →' : 'Open Scheme Finder →'}</span>
                      </button>
                    </div>
                  )
                ) : (
                  popularSchemes.map((scheme) => (
                    <div
                      key={scheme.id}
                      onClick={() => handleSelectSchemeDirect(scheme)}
                      className="p-3.5 hover:bg-amber-50/80 dark:hover:bg-slate-800/90 cursor-pointer transition-colors flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="p-2 rounded-xl bg-amber-100/80 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-0.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200/80 dark:border-amber-800/80">
                              {isHi ? scheme.stateLabel_hi : scheme.stateLabel_en}
                            </span>
                            <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                              {isHi ? scheme.benefitAmount_hi : scheme.benefitAmount_en}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors truncate">
                            {isHi ? scheme.shortTitle_hi : scheme.shortTitle_en}
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-1 mt-0.5">
                            {isHi ? scheme.benefitSummary_hi : scheme.benefitSummary_en}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                  ))
                )}
              </div>

              {/* Bottom Footer inside Dropdown */}
              <div className="p-2.5 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  {isHi ? 'क्लिक करके पूरी गाइड व पात्रता देखें' : 'Click any scheme to view guide'}
                </span>
                <button
                  type="button"
                  onClick={onExploreSchemes}
                  className="font-bold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>{isHi ? 'सभी 27+ योजनाएं देखें →' : 'View all 27+ Schemes →'}</span>
                </button>
              </div>
            </div>
          )}

          {/* Quick search suggestions pills with High-Contrast */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              {isHi ? 'लोकप्रिय खोज:' : 'Popular searches:'}
            </span>
            {sampleQueries.map((query, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSearchVal(query);
                  const searchRes = searchJanLabh(query);
                  setResults(searchRes);
                  setShowSuggestions(true);
                  if (inputRef.current) inputRef.current.focus();
                }}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 hover:border-amber-500 dark:hover:border-amber-400 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-amber-50/70 dark:hover:bg-slate-700/80 transition-all cursor-pointer shadow-xs"
              >
                {query}
              </button>
            ))}
          </div>
        </div>

        {/* Dual Tool CTAs: Tool 1 (Scheme Finder) + Tool 2 (Eligibility Checker) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenFinder}
            className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 active:bg-amber-800 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <span>{isHi ? '🔍 योजना खोजें' : '🔍 Find Schemes for You'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            onClick={onOpenChecker}
            className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-emerald-900 dark:text-emerald-200 bg-emerald-100/90 dark:bg-emerald-950/70 hover:bg-emerald-200 dark:hover:bg-emerald-900/80 border border-emerald-300 dark:border-emerald-800 rounded-xl transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>{isHi ? '✅ पात्रता जांचें (Check Eligibility)' : '✅ Check Scheme Eligibility'}</span>
          </button>

          <button
            onClick={onExploreSchemes}
            className="w-full sm:w-auto px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:text-slate-950 dark:hover:text-white transition-colors flex items-center justify-center whitespace-nowrap cursor-pointer"
          >
            <span>{isHi ? 'सभी योजनाएं देखें' : 'All Schemes'}</span>
          </button>
        </div>

        {/* 4-point verification strip with High-Contrast Text */}
        <div className="mt-12 pt-8 border-t border-slate-200/90 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="p-3.5 bg-white dark:bg-slate-800/90 rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-xs">
            <div className="text-xs font-bold text-slate-900 dark:text-white">
              {isHi ? 'आधिकारिक स्रोत प्राथमिकता' : 'Official Sources'}
            </div>
            <div className="text-[12px] text-slate-700 dark:text-slate-200 mt-1 font-medium leading-snug">
              {isHi ? 'प्रत्येक योजना .gov.in से जांची गई' : 'Every scheme cited from .gov.in'}
            </div>
          </div>
          <div className="p-3.5 bg-white dark:bg-slate-800/90 rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-xs">
            <div className="text-xs font-bold text-slate-900 dark:text-white">
              {isHi ? 'तथ्य-जांच व नवीनीकरण' : 'Regular Fact-Checks'}
            </div>
            <div className="text-[12px] text-slate-700 dark:text-slate-200 mt-1 font-medium leading-snug">
              {isHi ? 'अंतिम सत्यापन तारीख दर्शित' : 'Explicit last verified dates'}
            </div>
          </div>
          <div className="p-3.5 bg-white dark:bg-slate-800/90 rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-xs">
            <div className="text-xs font-bold text-slate-900 dark:text-white">
              {isHi ? 'सरल हिंदी व अंग्रेजी' : 'True Bilingual'}
            </div>
            <div className="text-[12px] text-slate-700 dark:text-slate-200 mt-1 font-medium leading-snug">
              {isHi ? 'कठिन सरकारी भाषा का सरल रूप' : 'Plain, accessible explanations'}
            </div>
          </div>
          <div className="p-3.5 bg-white dark:bg-slate-800/90 rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-xs">
            <div className="text-xs font-bold text-slate-900 dark:text-white">
              {isHi ? 'पूर्ण गोपनीयता' : 'Privacy Assured'}
            </div>
            <div className="text-[12px] text-slate-700 dark:text-slate-200 mt-1 font-medium leading-snug">
              {isHi ? 'कोई आधार या बैंक डेटा संग्रह नहीं' : 'No Aadhaar or OTP collection'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
