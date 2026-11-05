'use client';

import React from 'react';
import { Language } from '@/types';
import { ShieldCheck, Info, CheckCircle2 } from 'lucide-react';

interface AdBannerSlotProps {
  lang: Language;
  format?: 'in-article' | 'sidebar' | 'footer-banner';
  adSlot?: string;
}

export default function AdBannerSlot({ lang, format = 'in-article', adSlot }: AdBannerSlotProps) {
  const isHi = lang === 'hi';
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  // When live AdSense is configured
  if (adsenseClientId && adSlot) {
    return (
      <div className="w-full my-6 text-center overflow-hidden">
        <div className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-medium mb-1">
          {isHi ? 'विज्ञापन' : 'Advertisement'}
        </div>
        <ins
          className="adsbygoogle block"
          style={{ display: 'block' }}
          data-ad-client={adsenseClientId}
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Pre-approval fallback: Helpful civic awareness advisory
  return (
    <aside
      aria-label={isHi ? 'नागरिक जागरूकता सूचना' : 'Civic Awareness Advisory'}
      className="w-full my-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-amber-50/50 via-white to-slate-50 dark:from-slate-900/60 dark:via-slate-900/30 dark:to-slate-950 p-4 text-left sm:text-center transition-colors"
    >
      <div className="flex items-center sm:justify-center gap-1.5 text-[11px] font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-1">
        <ShieldCheck className="h-3.5 w-3.5" />
        <span>{isHi ? 'नागरिक सुरक्षा परामर्श' : 'Citizen Safety & Official Source Notice'}</span>
      </div>
      <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl sm:mx-auto leading-relaxed">
        {isHi
          ? 'सरकारी योजनाओं के लिए किसी भी बिचौलिए को पैसे न दें। सभी आधिकारिक आवेदन संबंधित मंत्रालय के .gov.in या .nic.in पोर्टल पर ही करें।'
          : 'Never pay middlemen for government schemes. Access official portals (.gov.in or .nic.in) or visit your nearest CSC/BDO office.'}
      </p>
    </aside>
  );
}
