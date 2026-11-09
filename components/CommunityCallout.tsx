'use client';

import React from 'react';
import { COMMUNITY_CONFIG } from '@/data/community';
import { Bell, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Language } from '@/types';

interface CommunityCalloutProps {
  lang?: Language;
  variant?: 'card' | 'banner';
}

function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.15-.176.2-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.634-.929-2.237-.245-.588-.493-.508-.678-.517-.176-.01-.377-.01-.578-.01s-.527.075-.803.377c-.276.301-1.054 1.03-1.054 2.511s1.079 2.912 1.229 3.113c.15.201 2.124 3.243 5.146 4.55.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.58-.088 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.352zM12.04 2C6.527 2 2.04 6.487 2.04 12c0 1.942.554 3.754 1.517 5.289L2 22l4.862-1.522A9.914 9.914 0 0012.04 22c5.514 0 10-4.487 10-10s-4.486-10-10-10zm0 18.25c-1.674 0-3.235-.494-4.549-1.344l-.326-.21-2.88.902.924-2.809-.229-.344A8.195 8.195 0 013.79 12c0-4.549 3.701-8.25 8.25-8.25 4.549 0 8.25 3.701 8.25 8.25 0 4.549-3.701 8.25-8.25 8.25z" />
    </svg>
  );
}

function TelegramIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.99 1.27-5.63 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.75 4-1.74 6.67-2.89 8.02-3.45 3.82-1.6 4.62-1.88 5.14-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.21-.04.34z" />
    </svg>
  );
}

export default function CommunityCallout({
  lang = 'hi',
  variant = 'card',
}: CommunityCalloutProps) {
  const isHi = lang === 'hi';

  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-emerald-900/90 via-slate-900 to-sky-950 text-white rounded-2xl p-6 sm:p-8 border border-emerald-500/30 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <Bell className="h-3.5 w-3.5" />
              <span>{isHi ? 'ताजा सरकारी योजना अपडेट्स' : 'Instant Scheme Alerts'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              {isHi
                ? 'नई किस्त व लाभार्थी सूची की सूचना सीधे WhatsApp व Telegram पर पाएं'
                : 'Get Instant Installment Dates & Beneficiary Lists on WhatsApp & Telegram'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isHi
                ? 'पीएम किसान, आवास योजना, छात्रवृत्ति व राज्य योजनाओं के नए आदेश और ई-केवाईसी की अंतिम तिथि कभी न चूकें।'
                : 'Never miss government welfare notices, e-KYC deadlines, or direct benefit transfer announcements.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={COMMUNITY_CONFIG.whatsappChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>{isHi ? 'WhatsApp चैनल से जुड़ें' : 'Join WhatsApp'}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href={COMMUNITY_CONFIG.telegramChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
            >
              <TelegramIcon className="h-5 w-5" />
              <span>{isHi ? 'Telegram चैनल से जुड़ें' : 'Join Telegram'}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Card Variant (default for inside articles and scheme pages)
  return (
    <div className="p-5 sm:p-6 bg-gradient-to-br from-emerald-50/70 via-white to-sky-50/70 dark:from-slate-800/90 dark:via-slate-900 dark:to-slate-900 rounded-2xl border border-emerald-200/80 dark:border-slate-700 shadow-xs space-y-4 not-prose">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
            <Bell className="h-3.5 w-3.5" />
            <span>{isHi ? 'जनलाभ नागरिक सूचना नेटवर्क' : 'JanLabh Citizen Alert Network'}</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            {isHi
              ? 'क्या आप कोई सरकारी किस्त या लिस्ट अपडेट नहीं छोड़ना चाहते?'
              : 'Want Instant Notifications for New Installments & Beneficiary Lists?'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {isHi
              ? 'हमारे आधिकारिक कम्युनिटी चैनल से जुड़ें — केवल प्रमाणित सरकारी आदेश, बिना किसी स्पैम के।'
              : 'Join our official channels for verified government circulars and direct application links without spam.'}
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100/70 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full shrink-0">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>100% Free</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        <a
          href={COMMUNITY_CONFIG.whatsappChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-xs"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span>{isHi ? 'WhatsApp चैनल जॉइन करें' : 'Join WhatsApp Channel'}</span>
          <ArrowUpRight className="h-3.5 w-3.5 ml-auto" />
        </a>

        <a
          href={COMMUNITY_CONFIG.telegramChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors shadow-xs"
        >
          <TelegramIcon className="h-4 w-4" />
          <span>{isHi ? 'Telegram चैनल जॉइन करें' : 'Join Telegram Channel'}</span>
          <ArrowUpRight className="h-3.5 w-3.5 ml-auto" />
        </a>
      </div>
    </div>
  );
}
