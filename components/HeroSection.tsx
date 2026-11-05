'use client';

import React, { useState } from 'react';
import { Language } from '@/types';
import { Search, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
  onOpenFinder: () => void;
  onOpenChecker: () => void;
  onExploreSchemes: () => void;
  onSearchSubmit: (query: string) => void;
}

export default function HeroSection({
  lang,
  onOpenFinder,
  onOpenChecker,
  onExploreSchemes,
  onSearchSubmit
}: HeroSectionProps) {
  const [searchVal, setSearchVal] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      onSearchSubmit(searchVal.trim());
    }
  };

  const sampleQueries = lang === 'hi' 
    ? ['पीएम किसान सम्मान निधि', 'आयुष्मान 70+ कार्ड', 'मंईयां सम्मान योजना', 'अबुआ आवास', 'एनएसपी स्कॉलरशिप']
    : ['PM Kisan status', 'Ayushman 70+ Senior Card', 'Maiya Samman Yojana', 'Abua Awas', 'NSP Scholarship'];

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
        
        {/* Subtle trust kicker (Zero-pill discipline: unboxed text with dot separator) */}
        <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 mb-4">
          <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold">
            <CheckCircle2 className="h-3.5 w-3.5" />
            {lang === 'hi' ? '100% आधिकारिक स्रोत' : '100% Official Sources'}
          </span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span>{lang === 'hi' ? 'स्वतंत्र नागरिक मार्गदर्शन' : 'Independent Citizen Guidance'}</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span>{lang === 'hi' ? 'गोपनीयता सुरक्षित' : 'Zero Data Storage'}</span>
        </div>

        {/* PRD Master Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance leading-tight">
          {lang === 'hi' ? (
            <>
              सरकारी योजनाएं खोजें, पात्रता समझें और <span className="text-amber-700 dark:text-amber-400">सही आधिकारिक जानकारी पाएं।</span>
            </>
          ) : (
            <>
              Discover Government Schemes, Understand Eligibility & <span className="text-amber-700 dark:text-amber-400">Access Official Portals.</span>
            </>
          )}
        </h1>

        {/* Supporting text */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {lang === 'hi'
            ? 'सरकारी योजनाओं, लाभों और जरूरी अपडेट्स की आसान, व्यवस्थित और निष्पक्ष जानकारी।'
            : 'Structured, reliable, and step-by-step guidance to navigate Central and State citizen welfare programs without middlemen.'}
        </p>

        {/* Integrated Search Box */}
        <form onSubmit={handleSearch} className="mt-8 max-w-2xl mx-auto">
          <div className="relative flex items-center shadow-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-1.5 focus-within:border-amber-600 focus-within:ring-2 focus-within:ring-amber-500/20 transition-all">
            <Search className="ml-3 h-5 w-5 text-slate-400 dark:text-slate-500 shrink-0" />
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder={
                lang === 'hi'
                  ? 'योजना का नाम, विषय या राज्य लिखें (उदा. PM Kisan, मंईयां सम्मान, छात्रवृत्ति)...'
                  : 'Search by scheme name, category, or state (e.g. PM Kisan, Ayushman, Maiya Samman)...'
              }
              className="w-full border-none bg-transparent px-3 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              {lang === 'hi' ? 'खोजें' : 'Search'}
            </button>
          </div>

          {/* Quick search suggestions */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="text-slate-400 dark:text-slate-500 font-medium">
              {lang === 'hi' ? 'लोकप्रिय खोज:' : 'Popular searches:'}
            </span>
            {sampleQueries.map((query, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSearchVal(query);
                  onSearchSubmit(query);
                }}
                className="hover:text-amber-700 dark:hover:text-amber-400 hover:underline transition-colors cursor-pointer"
              >
                {query}
                {idx < sampleQueries.length - 1 && <span className="ml-2 text-slate-300 dark:text-slate-700">·</span>}
              </button>
            ))}
          </div>
        </form>

        {/* Dual Tool CTAs: Tool 1 (Scheme Finder) + Tool 2 (Eligibility Checker) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenFinder}
            className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 active:bg-amber-800 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <span>{lang === 'hi' ? '🔍 योजना खोजें' : '🔍 Find Schemes for You'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            onClick={onOpenChecker}
            className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-300 dark:border-emerald-800 rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>{lang === 'hi' ? '✅ पात्रता जांचें (Check Eligibility)' : '✅ Check Scheme Eligibility'}</span>
          </button>

          <button
            onClick={onExploreSchemes}
            className="w-full sm:w-auto px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors flex items-center justify-center whitespace-nowrap"
          >
            <span>{lang === 'hi' ? 'सभी योजनाएं देखें' : 'All Schemes'}</span>
          </button>
        </div>

        {/* 4-point verification strip */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="p-3 bg-white/70 dark:bg-slate-900/70 rounded-lg border border-slate-200/60 dark:border-slate-800">
            <div className="text-xs font-semibold text-slate-900 dark:text-white">
              {lang === 'hi' ? 'आधिकारिक स्रोत प्राथमिकता' : 'Official Sources'}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              {lang === 'hi' ? 'प्रत्येक योजना .gov.in से जांची गई' : 'Every scheme cited from .gov.in'}
            </div>
          </div>
          <div className="p-3 bg-white/70 dark:bg-slate-900/70 rounded-lg border border-slate-200/60 dark:border-slate-800">
            <div className="text-xs font-semibold text-slate-900 dark:text-white">
              {lang === 'hi' ? 'तथ्य-जांच व नवीनीकरण' : 'Regular Fact-Checks'}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              {lang === 'hi' ? 'अंतिम सत्यापन तारीख दर्शित' : 'Explicit last verified dates'}
            </div>
          </div>
          <div className="p-3 bg-white/70 dark:bg-slate-900/70 rounded-lg border border-slate-200/60 dark:border-slate-800">
            <div className="text-xs font-semibold text-slate-900 dark:text-white">
              {lang === 'hi' ? 'सरल हिंदी व अंग्रेजी' : 'True Bilingual'}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              {lang === 'hi' ? 'कठिन सरकारी भाषा का सरल रूप' : 'Plain, accessible explanations'}
            </div>
          </div>
          <div className="p-3 bg-white/70 dark:bg-slate-900/70 rounded-lg border border-slate-200/60 dark:border-slate-800">
            <div className="text-xs font-semibold text-slate-900 dark:text-white">
              {lang === 'hi' ? 'पूर्ण गोपनीयता' : 'Privacy Assured'}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              {lang === 'hi' ? 'कोई आधार या बैंक डेटा संग्रह नहीं' : 'No Aadhaar or OTP collection'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
