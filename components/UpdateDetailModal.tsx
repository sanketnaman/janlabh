'use client';

import React from 'react';
import Link from 'next/link';
import { UpdateArticle, Language, Scheme } from '@/types';
import {
  X,
  ExternalLink,
  Calendar,
  CheckCircle2,
  AlertCircle,
  FileText,
  Building,
  ArrowRight
} from 'lucide-react';
import AdBannerSlot from '@/components/AdBannerSlot';

interface UpdateDetailModalProps {
  update: UpdateArticle;
  lang: Language;
  onClose: () => void;
  onSelectSchemeBySlug?: (slug: string) => void;
}

export default function UpdateDetailModal({
  update,
  lang,
  onClose,
  onSelectSchemeBySlug
}: UpdateDetailModalProps) {
  const isHi = lang === 'hi';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm p-3 sm:p-6 lg:p-8 flex justify-center">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="update-modal-title"
      >
        {/* Top bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 px-5 py-3.5 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-sky-800 dark:text-sky-400 uppercase tracking-wider">
              {isHi ? 'ताजा सरकारी अपडेट' : 'Verified Update'}
            </span>
            <span>·</span>
            <span>{update.publishedDate}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content body following PRD §22 */}
        <div className="px-5 py-6 sm:px-8 sm:py-8 space-y-6 max-h-[85vh] overflow-y-auto">
          
          {/* Section 1: H1 Clear Update Headline */}
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
              <Calendar className="h-3.5 w-3.5" />
              <span>{isHi ? `अपडेट किया गया: ${update.updatedDate}` : `Updated: ${update.updatedDate}`}</span>
              <span>·</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                {isHi ? `सत्यापित: ${update.lastVerified}` : `Verified: ${update.lastVerified}`}
              </span>
            </div>

            <h1 id="update-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-snug">
              {isHi ? update.title_hi : update.title_en}
            </h1>
          </div>

          {/* Section 2: Quick Summary (What Changed?) */}
          <div className="p-4 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/60 rounded-xl">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400 mb-1">
              {isHi ? 'त्वरित सारांश (क्या बदलाव हुआ?)' : 'Quick Summary (What Changed?)'}
            </div>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              {isHi ? update.summary_hi : update.summary_en}
            </p>
          </div>

          {/* Section 3: Key Information / Facts */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              {isHi ? 'महत्वपूर्ण मुख्य तथ्य' : 'Key Information & Facts'}
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm">
              {(isHi ? update.keyFacts_hi : update.keyFacts_en).map((fact, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Important Dates */}
          {update.importantDates_en && (
            <div className="space-y-2.5">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {isHi ? 'जरूरी तिथियां (Important Dates)' : 'Important Deadlines & Dates'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(isHi ? update.importantDates_hi! : update.importantDates_en).map((date, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-medium text-slate-800 dark:text-slate-200">
                    {date}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AdSense slot */}
          <AdBannerSlot lang={lang} format="in-article" />

          {/* Section 5: Who Is Affected? */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              {isHi ? 'कौन प्रभावित होगा?' : 'Who Is Affected?'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-lg border border-slate-200 dark:border-slate-800">
              {isHi ? update.whoIsAffected_hi : update.whoIsAffected_en}
            </p>
          </div>

          {/* Section 6: What Should Users Do? (Actionable Steps) */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              {isHi ? 'नागरिकों को अब क्या करना चाहिए?' : 'What Should You Do Now?'}
            </h2>
            <div className="space-y-2">
              {(isHi ? update.whatShouldUsersDo_hi : update.whatShouldUsersDo_en).map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 font-mono text-[10px] font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 7: Official Source */}
          <div className="p-4 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <div className="font-bold text-slate-900 dark:text-white">{update.officialSource.name}</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">{update.officialSource.authority}</div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                {isHi ? `सत्यापन तिथि: ${update.officialSource.verificationDate}` : `Verified: ${update.officialSource.verificationDate}`}
              </div>
            </div>
            <a
              href={update.officialSource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-slate-950 font-semibold transition-colors shrink-0"
            >
              <span>{isHi ? 'आधिकारिक परिपत्र देखें' : 'View Official Notification'}</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Section 8: Related Pillar Scheme Guide */}
          {update.relatedSchemeSlug && (
            <div className="pt-2">
              <Link
                href={`/schemes/${update.relatedSchemeSlug}`}
                onClick={() => {
                  if (onSelectSchemeBySlug) onSelectSchemeBySlug(update.relatedSchemeSlug!);
                  onClose();
                }}
                className="w-full flex items-center justify-between p-4 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/70 dark:bg-amber-950/30 hover:bg-amber-100/60 dark:hover:bg-amber-950/50 transition-colors text-left block"
              >
                <div>
                  <div className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">
                    {isHi ? 'संबंधित मुख्य योजना गाइड पढ़ें' : 'Read Main Scheme Pillar Guide'}
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-300 mt-0.5">
                    {isHi ? 'पात्रता नियम, जरूरी दस्तावेज व संपूर्ण आवेदन प्रक्रिया' : 'Full eligibility rules, required documents & application steps'}
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-amber-700 dark:text-amber-400 shrink-0" />
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
