'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Scheme, Language } from '@/types';
import { CheckCircle2, ChevronRight } from 'lucide-react';

interface SchemeCardProps {
  scheme: Scheme;
  lang: Language;
  onSelect?: (scheme: Scheme) => void;
  onCheckEligibility?: (scheme: Scheme) => void;
  showBanner?: boolean;
}

export default function SchemeCard({
  scheme,
  lang,
  onSelect,
  onCheckEligibility,
  showBanner = false,
}: SchemeCardProps) {
  const router = useRouter();
  const isHi = lang === 'hi';
  const schemeUrl = isHi ? `/hi/schemes/${scheme.slug}` : `/schemes/${scheme.slug}`;

  const handleCardClick = () => {
    if (onSelect) {
      onSelect(scheme);
    } else {
      router.push(schemeUrl);
    }
  };

  const hasBanner = showBanner && !!scheme.bannerImage;

  return (
    <article
      onClick={handleCardClick}
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-all hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg cursor-pointer"
    >
      <div>
        {/* Natural 16:9 Banner Image - Complete, Unobscured & Cleanly Framed */}
        {hasBanner && (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-slate-100 dark:border-slate-800">
            <img
              src={scheme.bannerImage}
              alt={isHi ? scheme.title_hi : scheme.title_en}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        )}

        <div className="p-5 pb-0">
          {/* Metadata line with typographic separators */}
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 mb-2 flex-wrap">
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              {isHi ? scheme.stateLabel_hi : scheme.stateLabel_en}
            </span>
            <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">
              ·
            </span>
            <span>{scheme.applicationMode}</span>
            <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">
              ·
            </span>
            <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="h-3 w-3" />
              <span>{isHi ? 'सत्यापित' : 'Verified'}</span>
            </span>
          </div>

          {/* Primary Scheme Title */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors leading-snug">
            <Link href={schemeUrl}>
              {isHi ? scheme.shortTitle_hi : scheme.shortTitle_en}
            </Link>
          </h3>

          {/* Core Benefit Box */}
          <div className="mt-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 p-3.5 border border-amber-100/80 dark:border-amber-900/40">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-900 dark:text-amber-300">
              {isHi ? 'मुख्य लाभ / सहायता' : 'Primary Benefit'}
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
              {isHi ? scheme.benefitAmount_hi : scheme.benefitAmount_en}
            </div>
            <p className="mt-1 text-xs text-slate-700 dark:text-slate-200 font-medium line-clamp-2 leading-relaxed">
              {isHi ? scheme.benefitSummary_hi : scheme.benefitSummary_en}
            </p>
          </div>

          {/* Short Who Can Apply */}
          <div className="mt-3 text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
            <span className="font-semibold text-slate-900 dark:text-white">
              {isHi ? 'पात्रता:' : 'Eligibility:'}
            </span>{' '}
            <span className="line-clamp-2">
              {isHi ? scheme.whoCanApply_hi : scheme.whoCanApply_en}
            </span>
          </div>
        </div>
      </div>

      {/* Card Action footer with dual actions */}
      <div className="p-5 pt-4">
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs gap-2">
          {onCheckEligibility ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onCheckEligibility(scheme);
              }}
              className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:underline flex items-center gap-1"
            >
              <span>{isHi ? 'पात्रता जांचें →' : 'Check Eligibility →'}</span>
            </button>
          ) : (
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              {isHi ? `सत्यापन: ${scheme.lastVerified}` : `Verified: ${scheme.lastVerified}`}
            </span>
          )}
          <Link
            href={schemeUrl}
            className="flex items-center gap-1 font-semibold text-amber-700 dark:text-amber-400 group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors"
          >
            <span>{isHi ? 'पूरी जानकारी देखें' : 'View Full Guide'}</span>
            <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
