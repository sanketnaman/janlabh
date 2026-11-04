'use client';

import React from 'react';
import { CategoryInfo, Scheme, Language } from '@/types';
import SchemeCard from '@/components/SchemeCard';
import { X, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';

interface CategoryHubModalProps {
  categoryInfo: CategoryInfo | null;
  onClose: () => void;
  lang: Language;
  onSelectScheme: (scheme: Scheme) => void;
  allSchemes: Scheme[];
}

export default function CategoryHubModal({
  categoryInfo,
  onClose,
  lang,
  onSelectScheme,
  allSchemes
}: CategoryHubModalProps) {
  if (!categoryInfo) return null;
  const isHi = lang === 'hi';

  const categorySchemes = allSchemes.filter(s => s.category === categoryInfo.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm p-3 sm:p-6 lg:p-8 flex justify-center">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4 bg-slate-50 dark:bg-slate-900/90">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <Tag className="h-4 w-4" />
            <span>{isHi ? 'श्रेणी कल्याण हब' : 'Category Welfare Hub'}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-2">
              <span>{isHi ? `${categorySchemes.length} योजनाएं उपलब्ध` : `${categorySchemes.length} Active Schemes`}</span>
              <span>·</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                {isHi ? 'प्रमाणित नियम' : 'Verified Criteria'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {isHi ? `${categoryInfo.name_hi}` : `${categoryInfo.name_en} Welfare Schemes`}
            </h1>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {isHi ? categoryInfo.description_hi : categoryInfo.description_en}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-1">
              {isHi ? 'प्राथमिक पात्रता व दस्तावेज मानदंड' : 'Priority Eligibility & Documentation Criteria'}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {isHi ? categoryInfo.priorityCriteria_hi : categoryInfo.priorityCriteria_en}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {isHi ? 'उपलब्ध योजनाएं' : 'Featured Schemes in this Category'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categorySchemes.map(s => (
                <SchemeCard
                  key={s.id}
                  scheme={s}
                  lang={lang}
                  onSelect={(selected) => {
                    onClose();
                    onSelectScheme(selected);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-6 py-3.5 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            {isHi ? 'बंद करें' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
