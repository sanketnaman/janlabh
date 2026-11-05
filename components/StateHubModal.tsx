'use client';

import React from 'react';
import { StateInfo, Scheme, Language } from '@/types';
import SchemeCard from '@/components/SchemeCard';
import { X, Building2, MapPin, CheckCircle2 } from 'lucide-react';

interface StateHubModalProps {
  stateInfo: StateInfo | null;
  onClose: () => void;
  lang: Language;
  onSelectScheme: (scheme: Scheme) => void;
  onCheckEligibility?: (scheme: Scheme) => void;
  allSchemes: Scheme[];
}

export default function StateHubModal({
  stateInfo,
  onClose,
  lang,
  onSelectScheme,
  onCheckEligibility,
  allSchemes
}: StateHubModalProps) {
  if (!stateInfo) return null;
  const isHi = lang === 'hi';

  const stateSchemes = allSchemes.filter(s => 
    s.state === stateInfo.id || (stateInfo.id === 'all-india' ? s.state === 'all-india' : s.state === 'all-india' || s.state === stateInfo.id)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm p-3 sm:p-6 lg:p-8 flex justify-center">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4 bg-slate-50 dark:bg-slate-900/90">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <MapPin className="h-4 w-4" />
            <span>{isHi ? 'राज्य विशेष कल्याण हब' : 'State Welfare Resource Hub'}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-2">
              <span>{isHi ? `राजधानी: ${stateInfo.capital_hi}` : `Capital: ${stateInfo.capital_en}`}</span>
              <span>·</span>
              <span>{isHi ? `${stateSchemes.length} सत्यापित योजनाएं` : `${stateSchemes.length} Verified Schemes`}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {isHi ? `${stateInfo.name_hi} सरकारी योजनाएं व नागरिक लाभ` : `${stateInfo.name_en} Government Schemes & Citizen Benefits`}
            </h1>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {isHi ? stateInfo.description_hi : stateInfo.description_en}
            </p>
          </div>

          {/* Flagship Programs Summary */}
          <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/70 dark:bg-amber-950/30">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400 mb-2">
              {isHi ? 'राज्य के प्रमुख फ्लैगशिप कार्यक्रम' : 'Key Flagship Welfare Initiatives'}
            </div>
            <div className="flex flex-wrap gap-2">
              {(isHi ? stateInfo.flagshipPrograms_hi : stateInfo.flagshipPrograms_en).map((prog, idx) => (
                <span key={idx} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-900/60 text-slate-800 dark:text-slate-200">
                  {prog}
                </span>
              ))}
            </div>
          </div>

          {/* Schemes in this state */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {isHi ? 'सत्यापित योजना मार्गदर्शिका' : 'Verified State Schemes'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stateSchemes.map(s => (
                <SchemeCard
                  key={s.id}
                  scheme={s}
                  lang={lang}
                  onSelect={(selected) => {
                    onClose();
                    onSelectScheme(selected);
                  }}
                  onCheckEligibility={onCheckEligibility ? (selected) => {
                    onClose();
                    onCheckEligibility(selected);
                  } : undefined}
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
