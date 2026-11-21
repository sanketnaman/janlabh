'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UpdateArticle, Language, Scheme } from '@/types';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import {
  Calendar,
  ExternalLink,
  ChevronRight,
  Home,
  CheckCircle2,
  AlertCircle,
  FileText,
  Building,
  ArrowRight,
  ShieldCheck,
  Bell,
  Share2,
  Check,
  HelpCircle,
  Sparkles,
  Smartphone,
  Search,
  AlertTriangle,
  Key,
  Clock
} from 'lucide-react';
import CommunityCallout from '@/components/CommunityCallout';

interface UpdateDetailViewProps {
  update: UpdateArticle;
  relatedScheme?: Scheme | null;
  initialLang?: Language;
}

export default function UpdateDetailView({
  update,
  relatedScheme,
  initialLang = 'en',
}: UpdateDetailViewProps) {
  const router = useRouter();
  const isHi = initialLang === 'hi';

  const { isDark, toggleTheme } = useTheme();
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Header
        lang={initialLang}
        onToggleLang={() => {
          if (isHi) {
            router.push(`/updates/${update.slug}`);
          } else {
            router.push(`/hi/updates/${update.slug}`);
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
        activeNav="updates"
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 mb-6">
          <Link href={isHi ? '/hi' : '/'} className="hover:text-amber-700 dark:hover:text-amber-400 flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
            <span>{isHi ? 'होम' : 'Home'}</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <Link href={isHi ? '/hi/updates' : '/updates'} className="hover:text-amber-700 dark:hover:text-amber-400">
            {isHi ? 'ताजा अपडेट्स' : 'Updates'}
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="font-semibold text-slate-900 dark:text-white line-clamp-1">
            {isHi ? update.title_hi : update.title_en}
          </span>
        </nav>

        {/* Article Container */}
        <article className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-8">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-5">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                <Bell className="h-3 w-3 text-amber-600" />
                {isHi ? 'सत्यापित सरकारी सूचना' : 'Official Update'}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {update.publishedDate}
              </span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>{isHi ? 'कॉपी हो गया' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Share2 className="h-3.5 w-3.5" />
                  <span>{isHi ? 'शेयर करें' : 'Share'}</span>
                </>
              )}
            </button>
          </div>

          {/* Headline & Summary */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {isHi ? update.title_hi : update.title_en}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {isHi ? update.summary_hi : update.summary_en}
            </p>
          </div>

          {/* Banner Image */}
          {update.bannerImage && (
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm bg-slate-100 dark:bg-slate-900">
              <img
                src={update.bannerImage}
                alt={isHi ? update.title_hi : update.title_en}
                className="w-full h-auto object-cover max-h-[500px]"
                loading="eager"
              />
            </div>
          )}

          {/* PM Kisan Dedicated Installment Tracker Table */}
          {update.slug === 'pm-kisan-24th-installment-released-25th-status' && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <h2 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>
                      {isHi ? 'पीएम किसान 24वीं व 25वीं किस्त स्टेटस व कैलेंडर 2026-27' : 'PM Kisan 24th & 25th Installment Release Calendar 2026-27'}
                    </span>
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {isHi
                      ? 'प्रत्येक 4 माह में ₹2,000 की डीबीटी किस्त का आधिकारिक वितरण चक्र व ताज़ा अपडेट:'
                      : 'Official 4-month DBT disbursement schedule and latest live status across India:'}
                  </p>
                </div>
                <span className="self-start sm:self-auto inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-100/70 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
                  <ShieldCheck className="h-3 w-3 text-emerald-600 shrink-0" />
                  <span>{isHi ? '100% केंद्र पोषित DBT' : '100% Central DBT'}</span>
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-semibold">
                      <th className="py-2.5 px-3">किस्त (Installment)</th>
                      <th className="py-2.5 px-3">डीबीटी राशि (Amount)</th>
                      <th className="py-2.5 px-3">रिलीज स्थिति / तिथि (Status)</th>
                      <th className="py-2.5 px-3">लाभार्थी किसान (Beneficiaries)</th>
                      <th className="py-2.5 px-3">अनिवार्य पात्रता (Mandatory Status)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? '24वीं किस्त (24th Kist)' : '24th Installment'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400">₹2,000</td>
                      <td className="py-2.5 px-3">
                        <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-sm">
                          <CheckCircle2 className="h-3 w-3" />
                          <span>{isHi ? '30 अक्टूबर 2026 (सफलतापूर्वक जारी)' : '30 Oct 2026 (Disbursed)'}</span>
                        </span>
                        <div className="text-[10px] text-slate-500 mt-0.5">बनासकांठा (गुजरात) से प्रधानमंत्री द्वारा जारी</div>
                      </td>
                      <td className="py-2.5 px-3 font-semibold text-slate-800 dark:text-slate-200">
                        9.34+ करोड़ किसान
                        <div className="text-[10px] text-slate-500 font-normal">₹18,690+ करोड़ ट्रांसफर</div>
                      </td>
                      <td className="py-2.5 px-3">
                        e-KYC (YES), Land Seeding (YES), Aadhaar-Bank Seeding (YES)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 bg-amber-50/30 dark:bg-amber-950/20">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? '25वीं किस्त (25th Kist)' : '25th Installment'}
                        <div className="text-[10px] text-amber-700 dark:text-amber-400 font-medium">★ अगली किस्त</div>
                      </td>
                      <td className="py-2.5 px-3 font-bold text-amber-600 dark:text-amber-400">₹2,000</td>
                      <td className="py-2.5 px-3">
                        <span className="inline-flex items-center gap-1 font-semibold text-amber-800 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-950/40 px-2 py-0.5 rounded-sm">
                          <Clock className="h-3 w-3" />
                          <span>{isHi ? 'दिसंबर 2026 – मार्च 2027 (संभावित)' : 'Dec 2026 – Mar 2027 (Expected)'}</span>
                        </span>
                        <div className="text-[10px] text-slate-500 mt-0.5">मंत्रालय द्वारा आधिकारिक घोषणा प्रतीक्षित</div>
                      </td>
                      <td className="py-2.5 px-3 font-semibold text-slate-800 dark:text-slate-200">
                        ~9.5 करोड़ किसान
                        <div className="text-[10px] text-slate-500 font-normal">₹19,000+ करोड़ अनुमानित</div>
                      </td>
                      <td className="py-2.5 px-3 font-medium text-amber-800 dark:text-amber-300">
                        {isHi ? '3 ग्रीन टिक अनिवार्य (Land + eKYC + Bank)' : '3 Green Ticks Required'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* PM Kisan Registration Number Finder Guide */}
          {update.slug === 'pm-kisan-24th-installment-released-25th-status' && (
            <div className="bg-sky-50/60 dark:bg-sky-950/30 rounded-2xl border border-sky-200 dark:border-sky-800/80 p-5 sm:p-6 space-y-4">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-xl bg-sky-600 text-white shrink-0 mt-0.5">
                  <Key className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {isHi
                      ? 'पीएम किसान रजिस्ट्रेशन नंबर कैसे निकालें (Registration Number Finder Guide)'
                      : 'How to Find PM Kisan Registration Number Online by Mobile / Aadhaar'}
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    {isHi
                      ? 'यदि आप अपना रजिस्ट्रेशन नंबर भूल गए हैं, तो pmkisan.gov.in से 1 मिनट में ऐसे प्राप्त करें:'
                      : 'If you forgot your Registration Number, retrieve it in 60 seconds from pmkisan.gov.in:'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-sky-200 dark:border-sky-800/60 space-y-1.5">
                  <div className="font-bold text-sky-800 dark:text-sky-300 flex items-center gap-1.5">
                    <Smartphone className="h-3.5 w-3.5 text-sky-600" />
                    <span>{isHi ? 'तरीका 1: रजिस्टर्ड मोबाइल नंबर से' : 'Method 1: By Registered Mobile Number'}</span>
                  </div>
                  <ol className="list-decimal list-inside space-y-1 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <li>आधिकारिक पोर्टल <strong>pmkisan.gov.in</strong> पर जाएं।</li>
                    <li>Farmers Corner में <strong>Know Your Registration Number</strong> पर क्लिक करें।</li>
                    <li>अपना 10 अंकों का रजिस्टर्ड मोबाइल नंबर और कैप्चा कोड दर्ज करें।</li>
                    <li><strong>Get Mobile OTP</strong> पर क्लिक करें और OTP डालकर सबमिट करें।</li>
                    <li>आपका रजिस्ट्रेशन नंबर (जैसे <strong>UPXXXXXXXX</strong>) स्क्रीन पर दिख जाएगा।</li>
                  </ol>
                </div>

                <div className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-sky-200 dark:border-sky-800/60 space-y-1.5">
                  <div className="font-bold text-sky-800 dark:text-sky-300 flex items-center gap-1.5">
                    <Search className="h-3.5 w-3.5 text-sky-600" />
                    <span>{isHi ? 'तरीका 2: आधार नंबर से' : 'Method 2: By Aadhaar Number'}</span>
                  </div>
                  <ol className="list-decimal list-inside space-y-1 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <li>पोर्टल पर <strong>Aadhaar Number</strong> विकल्प चुनें।</li>
                    <li>अपना 12 अंकों का आधार कार्ड नंबर और स्क्रीन पर दिया कैप्चा दर्ज करें।</li>
                    <li>आधार से लिंक मोबाइल नंबर पर 6 अंकों का UIDAI OTP आएगा।</li>
                    <li>OTP दर्ज करते ही आपका नाम और <strong>Registration Number</strong> प्रदर्शित होगा।</li>
                    <li>इस नंबर को कॉपी कर लें और <strong>Know Your Status</strong> में स्टेटस चेक करें।</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* Key Facts Box */}
          <div className="bg-amber-50/60 dark:bg-slate-800/80 rounded-xl p-5 sm:p-6 border border-amber-200/80 dark:border-slate-700 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <span>{isHi ? 'मुख्य बिंदु व निष्कर्ष (Key Facts)' : 'Key Facts & Direct Benefits'}</span>
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-800 dark:text-slate-200">
              {(isHi ? update.keyFacts_hi : update.keyFacts_en).map((fact, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-600 shrink-0">▪</span>
                  <span className="leading-relaxed">{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Dates */}
          {((isHi ? update.importantDates_hi : update.importantDates_en)?.length || 0) > 0 && (
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar className="h-4 w-4 text-sky-600" />
                <span>{isHi ? 'महत्वपूर्ण तिथियां व समय-सीमा' : 'Important Dates & Deadlines'}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {(isHi ? update.importantDates_hi : update.importantDates_en)?.map((dateStr, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                  >
                    {dateStr}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Who is Affected */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {isHi ? 'कौन प्रभावित होगा? (Who Is Affected)' : 'Who is Affected by this Announcement?'}
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {isHi ? update.whoIsAffected_hi : update.whoIsAffected_en}
            </p>
          </div>

          {/* Citizen Action Checklist */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {isHi ? 'नागरिकों को क्या करना चाहिए? (Action Steps)' : 'What Should Citizens Do Next?'}
            </h2>
            <div className="space-y-2">
              {(isHi ? update.whatShouldUsersDo_hi : update.whatShouldUsersDo_en).map((action, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80"
                >
                  <span className="flex items-center justify-center h-5 w-5 rounded-full bg-amber-600 text-white text-[11px] font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {action}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* PM Kisan Troubleshooting Matrix */}
          {update.slug === 'pm-kisan-24th-installment-released-25th-status' && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xs space-y-4">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0" />
                  <span>
                    {isHi
                      ? 'पीएम किसान की ₹2,000 किस्त न आने के 4 असली कारण और पक्का समाधान'
                      : 'Why Your ₹2,000 Was Delayed: 4 Common Problems & Definite Solutions'}
                  </span>
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {isHi
                    ? 'यदि 24वीं किस्त का पैसा नहीं आया है, तो अपने स्टेटस में इन 4 बिंदुओं की जांच करें:'
                    : 'If your 24th installment was not credited, check these 4 critical points in your portal status:'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
                {/* Issue 1: Land Seeding */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                  <div className="flex items-center justify-between gap-1 font-bold text-red-600 dark:text-red-400">
                    <span>1. Land Seeding: NO (भू-अभिलेख पेंडिंग)</span>
                    <span className="text-[10px] bg-red-100 dark:bg-red-950/50 px-1.5 py-0.5 rounded-sm">सबसे आम समस्या</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>कारण:</strong> राज्य भूलेख (Revenue Records) में आपकी कृषि भूमि का खतौनी/जमाबंदी सत्यापन पोर्टल पर दर्ज नहीं है।
                  </p>
                  <p className="text-emerald-700 dark:text-emerald-400 font-medium leading-relaxed bg-emerald-50 dark:bg-emerald-950/30 p-2 rounded-lg">
                    <strong>समाधान:</strong> अपनी जमीन की प्रमाणित खतौनी नकल, आधार कार्ड और बैंक पासबुक लेकर अपने हल्का पटवारी/लेखपाल या अंचल अधिकारी (CO) से मिलें। पटवारी अपने आधिकारिक Rev_Staff लॉगिन से पोर्टल पर लैंड सीडिंग <strong>YES</strong> कर देगा।
                  </p>
                </div>

                {/* Issue 2: eKYC Pending */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                  <div className="flex items-center justify-between gap-1 font-bold text-red-600 dark:text-red-400">
                    <span>2. e-KYC: Incomplete / Failed</span>
                    <span className="text-[10px] bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 px-1.5 py-0.5 rounded-sm">2 मिनट में हल</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>कारण:</strong> आधार बायोमेट्रिक या ओटीपी सत्यापन अधूरा है या आधार में मोबाइल नंबर लिंक नहीं है।
                  </p>
                  <p className="text-emerald-700 dark:text-emerald-400 font-medium leading-relaxed bg-emerald-50 dark:bg-emerald-950/30 p-2 rounded-lg">
                    <strong>समाधान:</strong> CSC सेंटर जाने की जरूरत नहीं है। गूगल प्ले स्टोर से <strong>PM-KISAN App</strong> और <strong>AadhaarFaceRD App</strong> डाउनलोड करें। ऐप में आधार नंबर डालकर सिर्फ अपना चेहरा स्कैन (Face Auth) करें। ई-केवाईसी तुरंत <strong>YES</strong> हो जाएगी।
                  </p>
                </div>

                {/* Issue 3: Aadhaar Bank Seeding */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                  <div className="flex items-center justify-between gap-1 font-bold text-red-600 dark:text-red-400">
                    <span>3. Aadhaar Bank Seeding: NO / PFMS Rejected</span>
                    <span className="text-[10px] bg-sky-100 dark:bg-sky-950/50 text-sky-800 dark:text-sky-300 px-1.5 py-0.5 rounded-sm">डाकघर ट्रिक</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>कारण:</strong> आपका बैंक खाता एनपीसीआई (NPCI) मैपर से आधार डीबीटी भुगतान के लिए सक्रिय रूप से लिंक नहीं है।
                  </p>
                  <p className="text-emerald-700 dark:text-emerald-400 font-medium leading-relaxed bg-emerald-50 dark:bg-emerald-950/30 p-2 rounded-lg">
                    <strong>100% पक्का समाधान:</strong> बैंक के चक्कर काटने से बेहतर है कि नजदीकी <strong>डाकघर (Post Office)</strong> जाकर <strong>IPPB (India Post Payments Bank) में नया डीबीटी बचत खाता</strong> खुलवाएं। यह 24 घंटे में स्वतः NPCI से जुड़ जाता है और रुकी हुई सभी किस्तें सीधे इसी में क्रेडिट हो जाती हैं।
                  </p>
                </div>

                {/* Issue 4: FTO Processed: NO */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                  <div className="flex items-center justify-between gap-1 font-bold text-amber-600 dark:text-amber-400">
                    <span>4. FTO Processed: NO / RTO Approved</span>
                    <span className="text-[10px] bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-1.5 py-0.5 rounded-sm">प्रक्रियाधीन</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>कारण:</strong> फंड ट्रांसफर ऑर्डर (FTO) राज्य सरकार द्वारा जनरेट नहीं हुआ है क्योंकि पिछले किसी सत्यापन में विलंब था।
                  </p>
                  <p className="text-emerald-700 dark:text-emerald-400 font-medium leading-relaxed bg-emerald-50 dark:bg-emerald-950/30 p-2 rounded-lg">
                    <strong>समाधान:</strong> जैसे ही आपके स्टेटस में e-KYC, Land Seeding और Bank Seeding तीनों <strong>YES</strong> हो जाएंगे, अगले पेमेंट रन में राज्य सरकार FTO साइन कर देगी और पैसा आपके बैंक खाते में क्रेडिट हो जाएगा।
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* High-Intent FAQs Section */}
          {((isHi ? update.faqs_hi : update.faqs_en)?.length || 0) > 0 && (
            <div className="space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>
                    {isHi ? 'अक्सर पूछे जाने वाले महत्वपूर्ण सवाल (FAQs)' : 'Frequently Asked Questions (FAQs)'}
                  </span>
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {isHi
                    ? '24वीं व 25वीं किस्त, लैंड सीडिंग, रजिस्ट्रेशन नंबर और ई-केवाईसी से जुड़े जरूरी सवाल:'
                    : 'Essential queries regarding 24th/25th installment dates, registration number retrieval, and land seeding:'}
                </p>
              </div>

              <div className="space-y-3">
                {(isHi ? update.faqs_hi : update.faqs_en)?.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 space-y-2"
                  >
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-start gap-2">
                      <span className="text-amber-600 dark:text-amber-400 shrink-0 font-extrabold">Q.</span>
                      <span>{faq.q}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-5 border-l-2 border-amber-300 dark:border-amber-700/60">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Scheme Link */}
          {relatedScheme && (
            <div className="bg-emerald-50/60 dark:bg-emerald-950/30 rounded-xl p-5 border border-emerald-200/80 dark:border-emerald-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                  {isHi ? 'संबंधित मुख्य योजना' : 'Related Flagship Scheme'}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  {isHi ? relatedScheme.title_hi : relatedScheme.title_en}
                </h3>
              </div>
              <Link
                href={isHi ? `/hi/schemes/${relatedScheme.slug}` : `/schemes/${relatedScheme.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors whitespace-nowrap self-start sm:self-auto"
              >
                <span>{isHi ? 'योजना विवरण देखें' : 'View Scheme Guide'}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}

          {/* Community Channel Alert Box */}
          <CommunityCallout lang={isHi ? 'hi' : 'en'} variant="card" />

          {/* Official Verification Citation Box */}
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-5 border border-slate-200 dark:border-slate-700 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>{isHi ? 'आधिकारिक स्रोत व प्राधिकार' : 'Official Source & Verification Authority'}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-white">{update.officialSource.name}</span> — {update.officialSource.authority}
            </p>
            {update.officialSource.url && (
              <a
                href={update.officialSource.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-400 hover:underline font-semibold pt-1"
              >
                <span>{isHi ? 'आधिकारिक पोर्टल लिंक खोलें' : 'Visit Official Authority Portal'}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </article>
      </main>

      <Footer
        lang={initialLang}
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
        onSelectCategory={(catId) => {
          const prefix = isHi ? '/hi' : '';
          router.push(`${prefix}/categories/${catId}`);
        }}
        onSelectState={(stId) => {
          const prefix = isHi ? '/hi' : '';
          router.push(`${prefix}/states/${stId}`);
        }}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        lang={initialLang}
        onSelectScheme={(s) => {
          setSearchModalOpen(false);
          const prefix = isHi ? '/hi' : '';
          router.push(`${prefix}/schemes/${s.slug}`);
        }}
      />
    </div>
  );
}
