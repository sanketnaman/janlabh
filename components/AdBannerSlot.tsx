'use client';

import React from 'react';
import { Language } from '@/types';
import { ShieldCheck, Info } from 'lucide-react';

interface AdBannerSlotProps {
  lang: Language;
  format?: 'in-article' | 'sidebar' | 'footer-banner';
}

export default function AdBannerSlot({ lang, format = 'in-article' }: AdBannerSlotProps) {
  const isHi = lang === 'hi';

  return (
    <div className="w-full my-6 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-4 text-center">
      {/* Strict compliance label per PRD §41/§42 */}
      <div className="flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-2">
        <Info className="h-3 w-3" />
        <span>
          {isHi ? 'प्रायोजित जानकारी (Compliant Ad Slot)' : 'Sponsored Information (AdSense Placement Slot)'}
        </span>
      </div>

      <div className="mx-auto max-w-lg py-4 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
        <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
          {isHi 
            ? 'नागरिक सेवा व बैंकिंग सहायता परामर्श' 
            : 'Civic Services, Digital Banking & Financial Inclusion Guidance'}
        </div>
        <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
          {isHi
            ? 'JanLabh पर सभी योजना मार्गदर्शन निष्पक्ष व निःशुल्क है। विज्ञापन नीति के अनुसार कोई भ्रामक बटन या पॉपअप प्रदर्शित नहीं किए जाते।'
            : 'JanLabh content remains 100% useful without ads. Display advertising conforms to non-deceptive placement standards.'}
        </p>
      </div>

      <div className="mt-2 text-[10px] text-slate-400 dark:text-slate-500">
        {isHi ? 'Google AdSense अनुपालक स्थान' : 'Google AdSense Compliant Unit'}
      </div>
    </div>
  );
}
