'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Article, ArticleCategory, Language } from '@/types';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import {
  FileText,
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Home,
  ChevronRight,
  ShieldAlert,
  Wrench,
  Download,
  BookOpen,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Building,
  AlertTriangle,
  HelpCircle,
  Info
} from 'lucide-react';

interface ArticlesDirectoryClientProps {
  articles: Article[];
  initialLang?: Language;
}

export default function ArticlesDirectoryClient({
  articles,
  initialLang = 'en',
}: ArticlesDirectoryClientProps) {
  const router = useRouter();
  const isHi = initialLang === 'hi';
  const { isDark, toggleTheme } = useTheme();
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = useMemo(() => [
    {
      id: 'all',
      name_en: 'All Guides & Articles',
      name_hi: 'सभी आर्टिकल्स व समाधान',
      icon: BookOpen,
      count: articles.length
    },
    {
      id: 'problem-solution',
      name_en: 'Fix Errors & Solutions',
      name_hi: 'समस्या समाधान (Error Fix)',
      icon: Wrench,
      count: articles.filter(a => a.category === 'problem-solution').length
    },
    {
      id: 'documents',
      name_en: 'Documents & PDF Guides',
      name_hi: 'दस्तावेज़ व पीडीएफ गाइड',
      icon: Download,
      count: articles.filter(a => a.category === 'documents').length
    },
    {
      id: 'how-to',
      name_en: 'How-To Apply',
      name_hi: 'फॉर्म कैसे भरें',
      icon: FileText,
      count: articles.filter(a => a.category === 'how-to').length
    },
    {
      id: 'status-guide',
      name_en: 'Status & Lists',
      name_hi: 'स्टेटस व लिस्ट',
      icon: CheckCircle2,
      count: articles.filter(a => a.category === 'status-guide').length
    }
  ], [articles]);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const title = (isHi ? article.title_hi : article.title_en).toLowerCase();
      const summary = (isHi ? article.summary_hi : article.summary_en).toLowerCase();
      const keywords = article.keywords.join(' ').toLowerCase();

      return title.includes(q) || summary.includes(q) || keywords.includes(q);
    });
  }, [articles, selectedCategory, searchQuery, isHi]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Header
        lang={initialLang}
        onToggleLang={() => {
          if (isHi) {
            router.push('/articles');
          } else {
            router.push('/hi/articles');
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
          else if (nav === 'articles') router.push(`${prefix}/articles`);
          else if (nav === 'trust') router.push(`${prefix}/about`);
        }}
        activeNav="articles"
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 mb-6">
          <Link href={isHi ? '/hi' : '/'} className="hover:text-amber-700 dark:hover:text-amber-400 flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
            <span>{isHi ? 'होम' : 'Home'}</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="font-semibold text-slate-900 dark:text-white">
            {isHi ? 'नागरिक समाधान केंद्र व आर्टिकल्स' : 'Citizen Guides & Articles'}
          </span>
        </nav>

        {/* Hero Banner Header */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 mb-8 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span>{isHi ? 'नागरिक ज्ञान व समाधान केंद्र' : 'Citizen Knowledge & Solution Desk'}</span>
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400">
              · {isHi ? `${articles.length} प्रामाणिक गाइड्स उपलब्ध` : `${articles.length} In-Depth Guides`}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {isHi
              ? 'सरकारी योजनाएं: सरल समाधान, फॉर्म व स्टेप-बाय-स्टेप गाइड्स'
              : 'Citizen How-To Guides: Step-by-Step Problem Solving & Forms'}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
            {isHi
              ? 'बैंक खाते में DBT / NPCI लिंक करने से लेकर, फॉर्म रिजेक्शन ठीक करने, योजना लिस्ट डाउनलोड करने और ऑनलाइन आवेदन की पूरी जानकारी आसान भाषा में।'
              : 'Practical, verified walkthroughs solving real citizen pain points: Aadhaar NPCI bank mapping, form rejection fixes, scheme list downloads, and portal navigation.'}
          </p>

          {/* Search Input Bar */}
          <div className="mt-6 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isHi
                    ? 'आर्टिकल या समस्या खोजें (उदा. NPCI लिंक, झारखंड लिस्ट, रिजेक्शन...)'
                    : 'Search guides (e.g. NPCI link, Jharkhand list, form rejection...)'
                }
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{isHi ? cat.name_hi : cat.name_en}</span>
                {cat.count > 0 && (
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[11px] font-extrabold ${
                      isSelected
                        ? 'bg-amber-700/80 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {cat.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => {
                  router.push(isHi ? `/hi/articles/${article.slug}` : `/articles/${article.slug}`);
                }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 hover:border-amber-400/80 dark:hover:border-amber-500/50 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Article Thumbnail Banner */}
                  {article.bannerImage && (
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
                      <img
                        src={article.bannerImage}
                        alt={isHi ? article.title_hi : article.title_en}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Category Badge & Metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold bg-amber-50 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-900/60">
                      {isHi ? article.categoryLabel_hi : article.categoryLabel_en}
                    </span>
                    <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{isHi ? article.readTime_hi : article.readTime_en}</span>
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{article.publishedDate}</span>
                      </span>
                    </div>
                  </div>

                  {/* Article Title */}
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors leading-snug">
                    <Link href={isHi ? `/hi/articles/${article.slug}` : `/articles/${article.slug}`}>
                      {isHi ? article.title_hi : article.title_en}
                    </Link>
                  </h2>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {isHi ? article.summary_hi : article.summary_en}
                  </p>

                  {/* Problem & Solution Highlight Snippet */}
                  {article.solutionSummary_hi && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                      <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>{isHi ? 'त्वरित समाधान:' : 'Key Solution:'}</span>
                      </span>
                      <p className="line-clamp-2 leading-relaxed">
                        {isHi ? article.solutionSummary_hi : article.solutionSummary_en}
                      </p>
                    </div>
                  )}
                </div>

                {/* Read Action Button */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-400 group-hover:text-amber-800 dark:group-hover:text-amber-300">
                  <span>{isHi ? 'पूरा गाइड पढ़ें' : 'Read Full Guide'}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <BookOpen className="h-12 w-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {isHi ? 'कोई आर्टिकल नहीं मिला' : 'No Guides Found'}
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {isHi
                ? 'कृपया कोई अन्य कीवर्ड खोजें अथवा सभी आर्टिकल्स देखें।'
                : 'Please try searching with another keyword or reset the filter.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition-colors"
            >
              {isHi ? 'सभी आर्टिकल्स देखें' : 'View All Articles'}
            </button>
          </div>
        )}

        {/* Section: Practical Troubleshooting Matrix for Stuck Payments & Rejections */}
        <section aria-labelledby="troubleshoot-matrix-title" className="mt-14 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                <Wrench className="h-4 w-4" />
                <span>{isHi ? 'त्वरित नागरिक समस्या निवारण तालिका' : 'Citizen Problem Resolution Matrix'}</span>
              </div>
              <h2 id="troubleshoot-matrix-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                {isHi ? 'सरकारी योजना सहायता: 5 सबसे आम तकनीकी बाधाएं व पक्का समाधान' : 'Top 5 Government Scheme Technical Rejections & 24-Hour Fixes'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                {isHi
                  ? 'यदि फॉर्म स्वीकृत होने के बाद भी किस्त रुकी है, या आवेदन रिजेक्ट हुआ है—तो नीचे दिए गए 5 तकनीकी कारणों व उनके जमीनी समाधान का पालन करें:'
                  : 'Practical field-tested solutions for bank DBT failures, biometric discrepancies, and list rejection errors:'}
              </p>
            </div>
            <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              {isHi ? 'सत्यापित समाधान गाइड' : 'Verified Resolution Protocol'}
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                  <th className="py-3 px-4 w-1/4">{isHi ? 'त्रुटि / समस्या (Error / Issue)' : 'Error / System Status'}</th>
                  <th className="py-3 px-4 w-1/3">{isHi ? 'असली ज़मीनी कारण (Root Cause)' : 'Ground Root Cause'}</th>
                  <th className="py-3 px-4">{isHi ? 'कदम-दर-कदम समाधान (Actionable Solution)' : 'Step-by-Step Resolution'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">
                    <span className="text-rose-600 dark:text-rose-400 block mb-0.5">● PFMS / DBT Reject</span>
                    {isHi ? 'भुगतान निरस्त (खाता प्रकार मिसमैच)' : 'Payment Rejected by PFMS / Bank'}
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isHi
                      ? 'बैंक खाता पति या परिवार के किसी सदस्य के साथ संयुक्त (Joint Account) है। सरकारी डीबीटी क्लियरिंग सिस्टम केवल लाभार्थी के स्वयं के एकल (Single) बचत खाते में ही राशि स्वीकार करता है।'
                      : 'Bank account is jointly held with spouse or relatives. PFMS Aadhaar payment clearing strictly mandates an individual single savings account in beneficiary\'s own name.'}
                  </td>
                  <td className="py-3 px-4 leading-relaxed">
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400 block mb-0.5">
                      {isHi ? 'त्वरित समाधान:' : '24-Hour Solution:'}
                    </span>
                    {isHi
                      ? 'किसी भी राष्ट्रीयकृत बैंक या डाकघर बैंक (IPPB) में नया एकल शून्य-शेष (Zero Balance) खाता खुलवाएं और तुरंत "Aadhaar DBT Mandate Form" भरें। 24-48 घंटे में डीबीटी सक्रिय होकर रुकी किस्तों का रास्ता साफ हो जाता है।'
                      : 'Open an individual zero-balance account (at any public bank or IPPB postal branch) and submit the physical Aadhaar DBT Seeding Mandate. NPCI mapper updates within 24-48 hours.'}
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">
                    <span className="text-amber-600 dark:text-amber-400 block mb-0.5">● NPCI Seeding Inactive</span>
                    {isHi ? 'खाते में डीबीटी मैपिंग निष्क्रिय' : 'Aadhaar NPCI Mapping Inactive'}
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isHi
                      ? 'खाते में सामान्य आधार केवाईसी तो है, लेकिन भारतीय राष्ट्रीय भुगतान निगम (NPCI) के आधार पेमेंट ब्रिज (APB) सर्वर पर बैंक खाते की सीडिंग सक्रिय नहीं है।'
                      : 'Aadhaar is linked for basic branch KYC, but the account has not been mapped onto NPCI\'s central Aadhaar Payment Bridge (APB) server for government disbursements.'}
                  </td>
                  <td className="py-3 px-4 leading-relaxed">
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400 block mb-0.5">
                      {isHi ? 'सत्यापन व उपाय:' : 'Verification & Fix:'}
                    </span>
                    {isHi
                      ? 'myaadhaar.uidai.gov.in पर जाकर "Bank Seeding Status" चेक करें। यदि इनएक्टिव दिखे, तो बैंक शाखा जाकर 1-पेज का आधार सीडिंग फॉर्म जमा करें। बैंक द्वारा एनपीसीआई पर रिक्वेस्ट पुश करते ही स्थिति एक्टिव हो जाती है।'
                      : 'Check bank seeding status on myaadhaar.uidai.gov.in. If marked Inactive, submit the NPCI consent form at your home bank branch. Request staff to push the APB mapping mandate.'}
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">
                    <span className="text-rose-600 dark:text-rose-400 block mb-0.5">● Demographic Mismatch</span>
                    {isHi ? 'नाम / जन्मतिथि स्पेलिंग में अंतर' : 'Name / DOB Spelling Discrepancy'}
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isHi
                      ? 'आधार कार्ड और समग्र आईडी, राशन कार्ड या शैक्षणिक अंकसूची में नाम की स्पेलिंग, पिता/पति के नाम या जन्मतिथि में मामूली अंतर होने पर पोर्टल आवेदन रिजेक्ट कर देता है।'
                      : 'Spelling mismatch between Aadhaar card and state databases (Samagra, Ration Card, Jharsewa) triggers automated validation rejection at data scrutiny stages.'}
                  </td>
                  <td className="py-3 px-4 leading-relaxed">
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400 block mb-0.5">
                      {isHi ? 'डॉक्युमेंट सुधार नियम:' : 'Correction Protocol:'}
                    </span>
                    {isHi
                      ? 'पोर्टल पर सीधे फॉर्म न भरें। पहले राज्य के पोर्टल (जैसे samagra.gov.in) पर जाकर आधार ओटीपी या बायोमेट्रिक से ई-केवाईसी सुधार करें। पंचायत सचिव के अनुमोदन के बाद ही योजना का फॉर्म सबमिट करें।'
                      : 'Do not re-apply directly. First update your demographic profile via Aadhaar e-KYC on the state portal (e.g. samagra.gov.in). Once approved by the local authority, re-submit the scheme application.'}
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">
                    <span className="text-amber-600 dark:text-amber-400 block mb-0.5">● Missing in Antim Suchi</span>
                    {isHi ? 'अंतिम सूची में नाम गायब या आपत्ति' : 'Excluded from Final Beneficiary List'}
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isHi
                      ? 'फील्ड स्क्रूटनी में पटवारी या वार्ड नोडल अधिकारी द्वारा अपूर्ण दस्तावेज, परिवार की आय ₹2.5 लाख से अधिक या चारपहिया वाहन के आधार पर नाम अपात्र सूची में डाल दिया जाना।'
                      : 'During field verification, nodal staff flagged income above prescribed ceilings, unregistered land records, or personal four-wheeler ownership without reviewing tractor exemptions.'}
                  </td>
                  <td className="py-3 px-4 leading-relaxed">
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400 block mb-0.5">
                      {isHi ? '15-दिन की अपील प्रक्रिया:' : '15-Day Appeal Window:'}
                    </span>
                    {isHi
                      ? 'अंतिम सूची प्रकाशित होने के 15 दिनों के भीतर अपनी ग्राम पंचायत/वार्ड शिविर या जनपद पंचायत में लिखित आपत्ति दर्ज करें। तहसीलदार द्वारा जारी वैध आय प्रमाण पत्र या ट्रैक्टर आरसी संलग्न करें।'
                      : 'File a formal written grievance with the Gram Panchayat or Janpad Panchayat within 15 days of list publication. Attach Tehsildar income certificate and tractor RC to overturn the rejection.'}
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">
                    <span className="text-teal-600 dark:text-teal-400 block mb-0.5">● Land Seeding: NO</span>
                    {isHi ? 'पीएम किसान भूलेख खतौनी पेंडिंग' : 'PM-Kisan Land Seeding Pending'}
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isHi
                      ? 'राज्य के राजस्व रिकॉर्ड (भूलेख) का खतौनी डेटा पीएम-किसान के राष्ट्रीय सर्वर से स्वतः सिंक न होने के कारण स्थिति "Land Seeding: NO" प्रदर्शित होती है।'
                      : 'State land registry (Bhulekh) records have not reconciled with the central PM-KISAN database, causing system automated freeze on ₹2,000 tranches.'}
                  </td>
                  <td className="py-3 px-4 leading-relaxed">
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400 block mb-0.5">
                      {isHi ? 'पटवारी व कृषि कार्यालय समाधान:' : 'Lekhpal / Agriculture Office Fix:'}
                    </span>
                    {isHi
                      ? 'अपनी अद्यतन खतौनी (जमीन का पर्चा), आधार कार्ड और बैंक पासबुक लेकर स्थानीय लेखपाल/पटवारी अथवा जिला उपकृषि निदेशक (DD Agriculture) कार्यालय में जमा करें। वे पोर्टल पर 7 दिनों में लैंड सीडिंग को YES कर देते हैं।'
                      : 'Take your updated land record (Khatauni), Aadhaar, and bank passbook to your local Lekhpal/Patwari or District Agriculture Office for manual portal verification. Status flips to YES within 7 days.'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: 4 Pillars of Citizen Problem Solving */}
        <section aria-labelledby="pillars-title" className="mb-14">
          <div className="mb-6">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              {isHi ? 'बुनियादी नागरिक नियम' : 'Foundational Citizen Protocols'}
            </div>
            <h2 id="pillars-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
              {isHi ? 'सरकारी योजनाओं के 4 मुख्य तकनीकी स्तम्भ' : 'Four Foundational Pillars of Welfare Delivery'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              {isHi
                ? 'इन चार नियमों को समझकर आप किसी भी सरकारी योजना में बिना किसी दलाल के शत-प्रतिशत सुरक्षित लाभ ले सकते हैं:'
                : 'Master these four foundational compliance areas to safeguard your direct welfare transfers and resolve rejections:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400 flex items-center justify-center font-bold">
                  <Building className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {isHi ? '1. डीबीटी व बैंक सीडिंग' : '1. DBT & Bank Seeding'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isHi
                    ? 'सरकारी पैसा बैंक खाता नंबर से नहीं, केवल आधार नंबर द्वारा भेजा जाता है। देश में एक नागरिक का सिर्फ एक ही बैंक खाता डीबीटी प्राप्त कर सकता है। संयुक्त खाते (Joint Accounts) हमेशा निरस्त होते हैं।'
                    : 'Funds disburse solely via Aadhaar routing numbers, not IFSC account strings. A citizen can maintain only one active primary DBT account nationwide; joint accounts trigger automated clearance failure.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold text-teal-700 dark:text-teal-400 flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" />
                <span>{isHi ? 'एकल खाता अनिवार्य' : 'Single Account Mandate'}</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {isHi ? '2. डेमोग्राफिक व ई-केवाईसी' : '2. Identity & e-KYC Sync'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isHi
                    ? 'आधार, राशन कार्ड, समग्र और मार्कशीट में नाम की स्पेलिंग व जन्मतिथि एक समान होनी चाहिए। आधार में एक्टिव मोबाइल नंबर लिंक होना अनिवार्य है ताकि ओटीपी और फेस आरडी सत्यापन पूरा हो सके।'
                    : 'Name spelling, father\'s name, and date of birth must match character-for-character across UIDAI, state family registries, and educational certificates. Active mobile linkage is essential.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" />
                <span>{isHi ? 'स्पेलिंग मैच अनिवार्य' : 'Character Match Rule'}</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 flex items-center justify-center font-bold">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {isHi ? '3. अपील व शिकायत अधिकार' : '3. Grievance & Appeal Rights'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isHi
                    ? 'गलत तरीके से नाम कटने पर नागरिक को अपील का कानूनी अधिकार है। केंद्र के CPGRAMS पोर्टल और राज्य सीएम हेल्पलाइन (181) पर ऑनलाइन शिकायत दर्ज की जा सकती है, जिस पर 30 दिन में कार्रवाई अनिवार्य है।'
                    : 'Citizens have the statutory right to challenge arbitrary rejections. Tools include Central CPGRAMS, State CM Helplines (181), and village Panchayat review committees with guaranteed 30-day resolution.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" />
                <span>{isHi ? '181 सीएम हेल्पलाइन' : 'CPGRAMS & 181 Support'}</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
                  <Download className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {isHi ? '4. स्व-घोषणा व प्रपत्र प्रारूप' : '4. Standard Formats & Affidavits'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isHi
                    ? 'कचहरी से ₹100 का महंगा स्टाम्प पेपर बनवाना अधिकांश योजनाओं में आवश्यक नहीं होता। विभागीय आधिकारिक स्व-घोषणा (Self-Declaration) व हमीपत्र प्रारूप सादे कागज पर भी पूरी तरह मान्य होते हैं।'
                    : 'Expensive notary court stamp papers are rarely mandatory under modern citizen charters. Standardized departmental self-declarations and undertaking forms (हमीपत्र) carry complete legal validity.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold text-blue-700 dark:text-blue-400 flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" />
                <span>{isHi ? 'निःशुल्क प्रारूप मान्य' : 'Self-Declaration Valid'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Citizen Safety & Cyber Cafe Fraud Advisory */}
        <section aria-label="Citizen Safety Advisory" className="mb-14 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-slate-50 dark:from-amber-950/40 dark:via-orange-950/20 dark:to-slate-900 border border-amber-300 dark:border-amber-800/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-slate-950 uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{isHi ? 'नागरिक सुरक्षा एवं सतर्कता सलाह' : 'Official Citizen Protection Advisory'}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
              {isHi
                ? 'साइबर कैफे दलालों, अवैध वसूली व फर्जी मोबाइल ऐप (APK) से सतर्क रहें'
                : 'Protecting Yourself from Unofficial Agents, Overcharging & Fake APK Apps'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {isHi
                ? 'सरकारी योजनाओं के सभी आधिकारिक आवेदन ग्राम पंचायत व आंगनवाड़ी शिविरों में 100% निःशुल्क होते हैं। जन सेवा केंद्र (CSC) या एमपी ऑनलाइन पर आवेदन की सरकारी फीस ₹30-₹50 से अधिक नहीं होती। किसी भी अज्ञात व्हाट्सएप लिंक या टेलीग्राम ग्रुप से ".apk" ऐप डाउनलोड न करें, और कभी भी किसी अनधिकृत व्यक्ति को अपना आधार ओटीपी न बताएं।'
                : 'Official registrations conducted at village Panchayat and Anganwadi camps are completely free of charge. Authorized CSC and state digital kiosks carry regulated statutory service caps (₹30-₹50). Never install third-party .apk files from WhatsApp or share your Aadhaar OTP with unauthorized callers claiming to expedite benefits.'}
            </p>
          </div>
          <Link
            href={isHi ? '/hi/about' : '/about'}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm transition-all shadow-xs shrink-0 whitespace-nowrap"
          >
            <span>{isHi ? 'जनलाभ सत्यापन नीति पढ़ें' : 'Our Verification Policy'}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        {/* Section: Comprehensive Citizen Problem-Solving FAQs */}
        <section aria-labelledby="faq-title" className="mb-14 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
          <div className="mb-6">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              {isHi ? 'व्यावहारिक प्रश्नोत्तरी' : 'Citizen Problem Redressal FAQs'}
            </div>
            <h2 id="faq-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
              {isHi ? 'सरकारी योजना समस्याओं से जुड़े अक्सर पूछे जाने वाले सवाल (FAQs)' : 'Frequently Asked Questions on Citizen Grievances & Solutions'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              {isHi
                ? 'डीबीटी, बैंक सीडिंग, फॉर्म रिजेक्शन और दस्तावेजों से जुड़े वास्तविक जमीनी सवालों के प्रामाणिक उत्तर:'
                : 'Authoritative, policy-backed answers to real-world citizen questions regarding bank seeding, application rejections, and documentation:'}
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q_hi: '1. बैंक खाते में सामान्य आधार लिंक होने और NPCI DBT सीडिंग में क्या अंतर है?',
                q_en: '1. What is the difference between normal Aadhaar bank linking and NPCI DBT seeding?',
                a_hi: 'सामान्य आधार लिंकिंग केवल बैंक शाखा स्तर पर पहचान (KYC) सत्यापन के लिए होती है ताकि आपका खाता चालू रहे। वहीं आधार NPCI सीडिंग आपके खाते को भारतीय राष्ट्रीय भुगतान निगम (NPCI) के केंद्रीय सर्वर से जोड़ती है। जब भी केंद्र या राज्य सरकार डीबीटी का पैसा भेजती है, वह बैंक खाते के बजाय आधार नंबर पर भेजा जाता है, जो केवल उसी खाते में जमा होता है जो NPCI सर्वर पर सीडेड हो। एक व्यक्ति के कई खातों में आधार लिंक हो सकता है, लेकिन पूरे देश में केवल एक ही खाता NPCI से सीड हो सकता है।',
                a_en: 'Normal Aadhaar linking merely verifies your KYC identity within your branch to keep the account active. NPCI DBT Seeding maps your account onto the National Payments Corporation of India (NPCI) central server. Government disbursements route via Aadhaar numbers, not bank account numbers, crediting solely to the active NPCI-mapped account. You may link Aadhaar in multiple banks, but only ONE bank account can receive DBT benefits nationwide.'
              },
              {
                q_hi: '2. यदि बैंक शाखा का कर्मचारी आधार डीबीटी सीडिंग (NPCI Mandate) फॉर्म जमा करने से मना करे तो क्या करें?',
                q_en: '2. What should a citizen do if bank branch staff refuses to accept the Aadhaar DBT Seeding Mandate?',
                a_hi: 'आरबीआई (RBI) के स्पष्ट दिशानिर्देशों के अनुसार कोई भी बैंक शाखा ग्राहक से आधार सीडिंग फॉर्म लेने से इनकार नहीं कर सकती। यदि शाखा आनाकानी करे, तो बैंक के शाखा प्रबंधक (Branch Manager) से लिखित शिकायत करें। यदि फिर भी समाधान न हो, तो सबसे सरल और 24-घंटे का उपाय यह है कि नजदीकी डाकघर (India Post Payments Bank - IPPB) जाएं और 10 मिनट में नया बायोमेट्रिक शून्य-शेष खाता खुलवाकर डीबीटी सीडिंग टिक करवाएं। IPPB का डीबीटी खाता 24 घंटे में एनपीसीआई सर्वर पर एक्टिव हो जाता है।',
                a_en: 'Under Reserve Bank of India (RBI) mandates, bank branches cannot refuse Aadhaar seeding requests from account holders. If branch staff declines, submit a written complaint to the Branch Manager. If unresolved, the fastest field-tested solution is to visit your nearest India Post Payments Bank (IPPB) branch or postal counter, open a zero-balance account in 10 minutes, and enable DBT seeding. IPPB mapping clears on NPCI within 24 hours.'
              },
              {
                q_hi: '3. क्या एक ही नागरिक को दो अलग-अलग योजनाओं का पैसा दो अलग-अलग बैंक खातों में मिल सकता है?',
                q_en: '3. Can a citizen receive payments from two different government schemes in two different bank accounts?',
                a_hi: 'नहीं। भारत सरकार के डीबीटी नियमों के अनुसार एक नागरिक के आधार नंबर पर पूरे देश में एक समय में केवल एक ही बैंक खाता प्राथमिक डीबीटी खाता (Primary DBT Account) के रूप में मैप हो सकता है। चाहे वह पीएम-किसान हो, लाड़ली बहना, मंईयां सम्मान, या छात्रवृत्ति—सभी योजनाओं का डीबीटी भुगतान स्वतः उसी एक सक्रिय बैंक खाते में आएगा। यदि आप दूसरा खाता सीड कराएंगे, तो पुराना खाता स्वतः डी-लिंक हो जाएगा।',
                a_en: 'No. Under the Government of India\'s DBT architecture, a citizen\'s Aadhaar can be mapped to only one primary DBT account on NPCI at any given time. Whether receiving PM-KISAN, Ladli Behna, state scholarships, or pensions, all funds automatically route into that single mapped account. Seeding a new bank automatically overwrites and replaces the previous bank mapping.'
              },
              {
                q_hi: '4. सरकारी योजना का आवेदन फॉर्म निरस्त (Disapproved/Rejected) होने के बाद नया फॉर्म कब और कैसे भर सकते हैं?',
                q_en: '4. When and how can an applicant re-apply after their scheme form is disapproved or rejected?',
                a_hi: 'सबसे पहले आधिकारिक पोर्टल पर अपना आवेदन क्रमांक या आधार नंबर डालकर रिजेक्शन का सटीक कारण (Rejection Reason) देखें। यदि रिजेक्शन दस्तावेजों में अस्पष्टता या मामूली त्रुटि के कारण हुआ है, तो पोर्टल पर "Edit Application" विकल्प द्वारा सही दस्तावेज दोबारा अपलोड करें। यदि आवेदन स्थायी रूप से निरस्त हो गया है, तो आगामी प्रशासनिक चरण (जैसे लाड़ली बहना या मंईयां सम्मान का अगला राउंड) में ग्राम पंचायत कैंप में उपस्थित होकर नया आवेदन जमा करें।',
                a_en: 'First, log into the official portal using your Application ID or Aadhaar number to identify the exact rejection code. If rejection was due to unreadable document uploads or minor clerical discrepancies, use the portal\'s "Edit Application" window to re-upload. If permanently disapproved, attend the subsequent administrative camp round (such as Round 3 camps) at your Gram Panchayat to submit a fresh application.'
              },
              {
                q_hi: '5. क्या सरकारी योजनाओं के शपथ पत्र के लिए कचहरी से महंगा ₹100 का स्टाम्प पेपर बनवाना जरूरी है?',
                q_en: '5. Is expensive court notary stamp paper mandatory for government scheme affidavits and self-declarations?',
                a_hi: 'नहीं, यह दलालों द्वारा फैलाई जाने वाली सबसे बड़ी भ्रांति है। भारत सरकार और अधिकांश राज्य सरकारों (जैसे यूपी, एमपी, महाराष्ट्र, झारखंड) ने नागरिक सरलीकरण नियमों के तहत शपथ पत्र प्रक्रिया को आसान बनाया है। अधिकांश योजनाओं (जैसे कन्या सुमंगला या लाड़ली बहना) में आधिकारिक पोर्टल पर उपलब्ध निर्धारित स्व-घोषणा पत्र (Self-Declaration Format) सादे कागज पर प्रिंट करके अभिभावक/आवेदक के हस्ताक्षर के साथ 100% मान्य होता है। इसके लिए नोटरी या महंगे स्टाम्प पेपर की आवश्यकता नहीं होती।',
                a_en: 'No, this is a widespread misconception often propagated by unauthorized intermediaries. Under government administrative simplification reforms, most social welfare schemes (such as UP Kanya Sumangala or Majhi Ladki Bahin) accept standardized departmental self-declaration formats (स्व-घोषणा पत्र) signed directly by the parent or applicant on plain paper. Expensive court notary stamp papers are completely unnecessary.'
              },
              {
                q_hi: '6. आवेदन की पावती पर्ची (Acknowledgement Receipt) खो जाने पर आवेदन क्रमांक दोबारा कैसे निकालें?',
                q_en: '6. How can a citizen retrieve their scheme application number if their acknowledgement receipt is lost?',
                a_hi: 'पावती पर्ची खोने पर घबराने की आवश्यकता नहीं है। संबंधित योजना के आधिकारिक पोर्टल (जैसे cmladlibahna.mp.gov.in, mksy.up.gov.in या pmkisan.gov.in) पर जाएं और "Know Your Application Status" या "Know Your Registration Number" पर क्लिक करें। वहां अपना 12 अंकों का आधार नंबर अथवा 9 अंकों की समग्र/राशन कार्ड सदस्य संख्या और रजिस्टर्ड मोबाइल नंबर दर्ज करें। आपके मोबाइल पर प्राप्त ओटीपी दर्ज करते ही स्क्रीन पर आपका आवेदन क्रमांक और पूरी स्थिति प्रदर्शित हो जाएगी।',
                a_en: 'If you lose your acknowledgement slip, visit the scheme\'s official portal (e.g. cmladlibahna.mp.gov.in, mksy.up.gov.in, or pmkisan.gov.in) and select "Know Your Registration / Application Number". Enter your 12-digit Aadhaar number or state family ID and registered mobile number. Complete OTP authentication, and your registration number and full payment tracking will display instantly.'
              }
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                  >
                    <span>{isHi ? faq.q_hi : faq.q_en}</span>
                    <span className="shrink-0 p-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800/80 pt-3 bg-white dark:bg-slate-900/60">
                      <p>{isHi ? faq.a_hi : faq.a_en}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section: JanLabh Editorial Transparency & Trust Policy */}
        <section aria-label="Editorial Standards" className="mb-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block text-sm">
                {isHi ? 'जनलाभ संपादकीय व सत्यापन मानक' : 'JanLabh Editorial & Verification Standards'}
              </span>
              <p className="mt-0.5">
                {isHi
                  ? 'जनलाभ पर प्रकाशित सभी आर्टिकल्स व गाइड्स भारत सरकार के राजपत्र (Gazettes), आधिकारिक विभागीय पोर्टल्स एवं जमीनी बैंकिंग नियमों से सत्यापित होते हैं।'
                  : 'All guides and problem-solving articles published on JanLabh are cross-verified against official government gazettes, departmental circulars, and verified banking rules.'}
              </p>
            </div>
          </div>
          <Link
            href={isHi ? '/hi/about' : '/about'}
            className="shrink-0 font-bold text-amber-700 dark:text-amber-400 hover:underline"
          >
            {isHi ? 'हमारी प्रक्रिया जानें →' : 'Learn How We Verify →'}
          </Link>
        </section>
      </main>

      <Footer lang={initialLang} />

      {/* Global Search Modal */}
      {searchModalOpen && (
        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
          lang={initialLang}
          onSelectScheme={(s) => {
            setSearchModalOpen(false);
            router.push(isHi ? `/hi/schemes/${s.slug}` : `/schemes/${s.slug}`);
          }}
        />
      )}
    </div>
  );
}
