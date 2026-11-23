'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Article, Language, Scheme } from '@/types';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import {
  Calendar,
  Clock,
  ExternalLink,
  ChevronRight,
  Home,
  CheckCircle2,
  AlertCircle,
  FileText,
  ArrowRight,
  ShieldCheck,
  Share2,
  Check,
  Sparkles,
  HelpCircle,
  BookOpen,
  Download,
  FileDown,
  MapPin,
  Search
} from 'lucide-react';
import { ARTICLES } from '@/data/articles';
import CommunityCallout from '@/components/CommunityCallout';

interface ArticleDetailViewProps {
  article: Article;
  relatedScheme?: Scheme | null;
  initialLang?: Language;
}

function FormattedArticleContent({ content }: { content: string }) {
  const renderLineWithBold = (line: string) => {
    const parts = line.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-bold text-slate-900 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const lines = content.split('\n');

  return (
    <div className="space-y-2">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-1.5" />;
        }

        if (/^\d+\.\s/.test(trimmed)) {
          const numMatch = trimmed.match(/^(\d+)\.\s*/);
          const num = numMatch ? numMatch[1] : '';
          const rest = trimmed.replace(/^\d+\.\s*/, '');
          return (
            <div key={idx} className="flex items-start gap-2.5 pt-2 pb-0.5">
              <span className="flex items-center justify-center h-5 w-5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold shrink-0 mt-0.5">
                {num}
              </span>
              <div className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200">
                {renderLineWithBold(rest)}
              </div>
            </div>
          );
        }

        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-4 sm:pl-6 text-xs sm:text-sm">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0 mt-1">•</span>
              <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {renderLineWithBold(trimmed.slice(2))}
              </div>
            </div>
          );
        }

        return (
          <p key={idx} className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {renderLineWithBold(line)}
          </p>
        );
      })}
    </div>
  );
}

export default function ArticleDetailView({
  article,
  relatedScheme,
  initialLang = 'en',
}: ArticleDetailViewProps) {
  const router = useRouter();
  const isHi = initialLang === 'hi';
  const { isDark, toggleTheme } = useTheme();
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const otherArticles = React.useMemo(() => {
    return ARTICLES.filter((a) => a.id !== article.id);
  }, [article.id]);

  const [matrixQuery, setMatrixQuery] = useState('');
  const [matrixCategory, setMatrixCategory] = useState<string>('all');

  const filteredMatrix = React.useMemo(() => {
    if (!article.schemesMatrix) return [];
    return article.schemesMatrix.filter((item) => {
      let matchCat = true;
      if (matrixCategory === 'women') {
        matchCat =
          item.category_en.toLowerCase().includes('women') ||
          item.category_en.toLowerCase().includes('girl') ||
          item.category_hi.includes('महिला') ||
          item.category_hi.includes('बालिका');
      } else if (matrixCategory === 'housing') {
        matchCat =
          item.category_en.toLowerCase().includes('housing') ||
          item.category_en.toLowerCase().includes('mobility') ||
          item.category_hi.includes('आवास') ||
          item.category_hi.includes('परिवहन');
      } else if (matrixCategory === 'farmers') {
        matchCat =
          item.category_en.toLowerCase().includes('agri') ||
          item.category_en.toLowerCase().includes('crop') ||
          item.category_en.toLowerCase().includes('livestock') ||
          item.category_en.toLowerCase().includes('irrigation') ||
          item.category_hi.includes('कृषि') ||
          item.category_hi.includes('फसल') ||
          item.category_hi.includes('पशु') ||
          item.category_hi.includes('सिंचाई');
      } else if (matrixCategory === 'students') {
        matchCat =
          item.category_en.toLowerCase().includes('education') ||
          item.category_en.toLowerCase().includes('scholarship') ||
          item.category_en.toLowerCase().includes('skill') ||
          item.category_en.toLowerCase().includes('employment') ||
          item.category_hi.includes('शिक्षा') ||
          item.category_hi.includes('छात्र') ||
          item.category_hi.includes('कौशल') ||
          item.category_hi.includes('रोजगार');
      } else if (matrixCategory === 'pension') {
        matchCat =
          item.category_en.toLowerCase().includes('pension') ||
          item.category_en.toLowerCase().includes('security') ||
          item.category_en.toLowerCase().includes('assistive') ||
          item.category_hi.includes('पेंशन') ||
          item.category_hi.includes('सुरक्षा') ||
          item.category_hi.includes('दिव्यांग');
      } else if (matrixCategory === 'healthcare') {
        matchCat =
          item.category_en.toLowerCase().includes('health') ||
          item.category_en.toLowerCase().includes('food') ||
          item.category_en.toLowerCase().includes('relief') ||
          item.category_hi.includes('स्वास्थ्य') ||
          item.category_hi.includes('खाद्य') ||
          item.category_hi.includes('वस्त्र') ||
          item.category_hi.includes('राहत');
      }

      if (!matchCat) return false;

      if (!matrixQuery.trim()) return true;
      const q = matrixQuery.toLowerCase();
      return (
        item.name_en.toLowerCase().includes(q) ||
        item.name_hi.toLowerCase().includes(q) ||
        item.benefit_en.toLowerCase().includes(q) ||
        item.benefit_hi.toLowerCase().includes(q) ||
        item.eligibility_en.toLowerCase().includes(q) ||
        item.eligibility_hi.toLowerCase().includes(q) ||
        item.portalName.toLowerCase().includes(q)
      );
    });
  }, [article.schemesMatrix, matrixCategory, matrixQuery]);

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
            router.push(`/articles/${article.slug}`);
          } else {
            router.push(`/hi/articles/${article.slug}`);
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

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 mb-6">
          <Link href={isHi ? '/hi' : '/'} className="hover:text-amber-700 dark:hover:text-amber-400 flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
            <span>{isHi ? 'होम' : 'Home'}</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <Link href={isHi ? '/hi/articles' : '/articles'} className="hover:text-amber-700 dark:hover:text-amber-400">
            {isHi ? 'आर्टिकल्स व गाइड्स' : 'Articles & Guides'}
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="font-semibold text-slate-900 dark:text-white line-clamp-1">
            {isHi ? article.title_hi : article.title_en}
          </span>
        </nav>

        {/* Article Main Container */}
        <article className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xs space-y-8">
          {/* Metadata Badges & Share Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-5">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                <BookOpen className="h-3 w-3 text-amber-600" />
                {isHi ? article.categoryLabel_hi : article.categoryLabel_en}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {isHi ? article.readTime_hi : article.readTime_en}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {article.publishedDate}
              </span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
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
              {isHi ? article.title_hi : article.title_en}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {isHi ? article.summary_hi : article.summary_en}
            </p>
          </div>

          {/* Hero Banner Image */}
          {article.bannerImage && (
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/90 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
              <img
                src={article.bannerImage}
                alt={isHi ? article.title_hi : article.title_en}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          )}

          {/* Quick Problem & Solution Takeaway Box */}
          {article.problemHighlight_hi && (
            <div className="bg-gradient-to-r from-amber-50/80 via-orange-50/40 to-slate-50 dark:from-slate-800/80 dark:to-slate-800/50 rounded-2xl p-5 sm:p-6 border border-amber-200/80 dark:border-slate-700 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span>{isHi ? 'मुख्य समस्या एवं त्वरित निष्कर्ष' : 'Key Issue & Instant Solution'}</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-start gap-2 text-slate-800 dark:text-slate-200">
                  <span className="font-bold text-amber-600 shrink-0">❓ {isHi ? 'समस्या:' : 'Problem:'}</span>
                  <span>{isHi ? article.problemHighlight_hi : article.problemHighlight_en}</span>
                </div>
                <div className="flex items-start gap-2 text-slate-900 dark:text-white font-medium">
                  <span className="font-bold text-emerald-600 shrink-0">💡 {isHi ? 'समाधान:' : 'Solution:'}</span>
                  <span>{isHi ? article.solutionSummary_hi : article.solutionSummary_en}</span>
                </div>
              </div>
            </div>
          )}

          {/* Dedicated PDF & Forms Download Box */}
          {article.downloadablePdfs && article.downloadablePdfs.length > 0 && (
            <div className="bg-gradient-to-br from-emerald-50/90 via-teal-50/50 to-slate-50 dark:from-slate-900 dark:via-emerald-950/20 dark:to-slate-900 rounded-2xl p-5 sm:p-6 border border-emerald-300/80 dark:border-emerald-800/80 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-600 text-white shadow-sm">
                    <FileDown className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {isHi ? 'प्रमाणिक पीडीएफ एवं आवेदन फॉर्म डाउनलोड' : 'Official PDF & Form Downloads'}
                    </h2>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {isHi ? 'सीधे अपने फोन या कंप्यूटर में डाउनलोड करें' : 'Download directly to your device for print & offline use'}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  {isHi ? '100% सत्यापित व नि:शुल्क' : 'Verified & Free'}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3.5 pt-1">
                {article.downloadablePdfs.map((pdf, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-emerald-200/70 dark:border-slate-700 hover:border-emerald-500/70 dark:hover:border-emerald-500/60 shadow-sm transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                          PDF • {pdf.fileSize}
                        </span>
                        {pdf.isOfficialGovt && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 flex items-center gap-1">
                            <ShieldCheck className="h-3 w-3 text-amber-600" />
                            {isHi ? 'आधिकारिक सरकारी प्रपत्र' : 'Official Govt Form'}
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {isHi ? pdf.title_hi : pdf.title_en}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {isHi ? pdf.description_hi : pdf.description_en}
                      </p>
                      {pdf.officialSourceLabel && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          <span className="font-semibold">{isHi ? 'प्रमाणिक स्रोत: ' : 'Source: '}</span>
                          {pdf.officialSourceLabel}
                        </p>
                      )}
                    </div>

                    <a
                      href={pdf.fileUrl}
                      download
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-700 active:bg-emerald-800 shadow-sm transition-all whitespace-nowrap shrink-0"
                    >
                      <Download className="h-4 w-4" />
                      <span>{isHi ? 'PDF डाउनलोड करें' : 'Download PDF'}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Master 26-Scheme Comparison Matrix Table */}
          {article.schemesMatrix && article.schemesMatrix.length > 0 && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-sm space-y-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 mb-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{isHi ? 'मास्टर कंपैरिजन तालिका' : 'Quick Reference Matrix'}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                    {isHi
                      ? 'झारखंड की सभी 26 कल्याणकारी योजनाओं की मास्टर सूची (तुलनात्मक चार्ट)'
                      : 'Master Comparison Matrix: All 26 Jharkhand Welfare Schemes'}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {isHi
                      ? 'लाभ राशि, पात्रता, विभागीय पोर्टल और विस्तृत गाइड को श्रेणी अनुसार तुरंत खोजें व तुलना करें।'
                      : 'Compare cash grant amounts, eligibility rules, and official departmental portals in one structured view.'}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold">
                    {isHi
                      ? `${filteredMatrix.length} योजनाएं दर्शित`
                      : `Showing ${filteredMatrix.length} Schemes`}
                  </span>
                </div>
              </div>

              {/* Search & Category Pills */}
              <div className="space-y-3 pt-1">
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={matrixQuery}
                    onChange={(e) => setMatrixQuery(e.target.value)}
                    placeholder={
                      isHi
                        ? 'योजना का नाम, लाभ राशि (उदा. ₹1,000, 2 लाख) या पात्रता से खोजें...'
                        : 'Search by scheme name, grant amount (e.g. ₹2 Lakh, ₹1,000) or eligibility...'
                    }
                    className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
                  />
                  {matrixQuery && (
                    <button
                      type="button"
                      onClick={() => setMatrixQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-bold p-1"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                  {[
                    { id: 'all', label_en: 'All (26)', label_hi: 'सभी (26)' },
                    { id: 'women', label_en: 'Women (4)', label_hi: 'महिला (4)' },
                    { id: 'housing', label_en: 'Housing (4)', label_hi: 'आवास (4)' },
                    { id: 'farmers', label_en: 'Farmers (4)', label_hi: 'किसान (4)' },
                    { id: 'students', label_en: 'Education (6)', label_hi: 'शिक्षा व युवा (6)' },
                    { id: 'pension', label_en: 'Pensions (4)', label_hi: 'पेंशन (4)' },
                    { id: 'healthcare', label_en: 'Health & Food (4)', label_hi: 'स्वास्थ्य व राहत (4)' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setMatrixCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                        matrixCategory === cat.id
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {isHi ? cat.label_hi : cat.label_en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Responsive Data Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100/90 dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs uppercase tracking-wider font-bold">
                      <th className="py-3 px-3 w-12 text-center">#</th>
                      <th className="py-3 px-4 min-w-[200px]">{isHi ? 'योजना का नाम व श्रेणी' : 'Scheme Name & Category'}</th>
                      <th className="py-3 px-4 min-w-[200px]">{isHi ? 'सहायता / लाभ राशि' : 'Cash / Grant Benefit'}</th>
                      <th className="py-3 px-4 min-w-[220px]">{isHi ? 'मुख्य पात्रता मानदंड' : 'Key Eligibility'}</th>
                      <th className="py-3 px-3 min-w-[130px]">{isHi ? 'आधिकारिक पोर्टल' : 'Official Portal'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                    {filteredMatrix.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20 transition-colors"
                      >
                        <td className="py-3 px-3 text-center font-bold text-slate-500 dark:text-slate-400">
                          {item.id}
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-bold text-slate-900 dark:text-white">
                            {isHi ? item.name_hi : item.name_en}
                          </div>
                          <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold mt-0.5">
                            {isHi ? item.category_hi : item.category_en}
                          </div>
                          {item.slug && (
                            <Link
                              href={isHi ? `/hi/schemes/${item.slug}` : `/schemes/${item.slug}`}
                              className="inline-flex items-center gap-1 text-[11px] text-amber-700 dark:text-amber-400 hover:underline mt-1 font-semibold"
                            >
                              <span>{isHi ? 'विस्तृत गाइड' : 'Full Guide'}</span>
                              <ChevronRight className="h-3 w-3" />
                            </Link>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold text-xs leading-relaxed">
                            {isHi ? item.benefit_hi : item.benefit_en}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          {isHi ? item.eligibility_hi : item.eligibility_en}
                        </td>
                        <td className="py-3 px-3">
                          <a
                            href={item.portalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 dark:text-sky-400 hover:underline"
                          >
                            <span className="truncate max-w-[120px]">{item.portalName}</span>
                            <ExternalLink className="h-3 w-3 shrink-0" />
                          </a>
                        </td>
                      </tr>
                    ))}
                    {filteredMatrix.length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-8 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                          {isHi
                            ? 'कोई योजना नहीं मिली। कृपया दूसरा शब्द खोजें।'
                            : 'No schemes match your filter. Try searching with another keyword.'}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Article Structured Body Sections */}
          <div className="space-y-8 pt-2">
            {article.sections.map((section, idx) => (
              <div key={idx} className="space-y-3.5">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-start gap-2">
                  <span>{isHi ? section.heading_hi : section.heading_en}</span>
                </h2>
                <FormattedArticleContent content={isHi ? section.content_hi : section.content_en} />
                {section.callout_hi && (
                  <div className="p-4 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-200 dark:border-sky-800 text-xs sm:text-sm text-sky-900 dark:text-sky-200 flex items-start gap-2.5">
                    <AlertCircle className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{isHi ? section.callout_hi : section.callout_en}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Step-by-Step Procedure Checklist */}
          {((isHi ? article.steps_hi : article.steps_en)?.length || 0) > 0 && (
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>{isHi ? 'नागरिक कार्य योजना (स्टेप-बाय-स्टेप प्रक्रिया)' : 'Step-by-Step Action Checklist'}</span>
              </h2>
              <div className="space-y-2.5">
                {(isHi ? article.steps_hi : article.steps_en)?.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700"
                  >
                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-amber-600 text-white text-[11px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Scheme Cross-Link Card */}
          {relatedScheme && (
            <div className="bg-emerald-50/70 dark:bg-emerald-950/30 rounded-2xl p-5 sm:p-6 border border-emerald-200/80 dark:border-emerald-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                  {isHi ? 'संबंधित मुख्य सरकारी योजना' : 'Related Flagship Scheme'}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {isHi ? relatedScheme.title_hi : relatedScheme.title_en}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">
                  {isHi ? relatedScheme.benefitSummary_hi : relatedScheme.benefitSummary_en}
                </p>
              </div>
              <Link
                href={isHi ? `/hi/schemes/${relatedScheme.slug}` : `/schemes/${relatedScheme.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors whitespace-nowrap self-start sm:self-auto shrink-0 shadow-xs"
              >
                <span>{isHi ? 'योजना का पूरा गाइड देखें' : 'View Scheme Guide'}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}

          {/* Related State Schemes Explorer Link */}
          {article.relatedStateId && (
            <div className="p-4 rounded-2xl bg-sky-50/80 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-5 w-5 text-sky-600 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                  {isHi
                    ? 'झारखंड राज्य में लागू सभी सरकारी योजनाओं का संकलन एक नज़र में देखें'
                    : 'Explore all active government welfare schemes in Jharkhand state'}
                </span>
              </div>
              <Link
                href={isHi ? `/hi/states/${article.relatedStateId}` : `/states/${article.relatedStateId}`}
                className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold transition-colors whitespace-nowrap self-start sm:self-auto shrink-0"
              >
                <span>{isHi ? 'झारखंड राज्य पेज खोलें' : 'View State Page'}</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          )}

          {/* Eligibility Checker Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent border border-amber-300/80 dark:border-amber-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span>{isHi ? 'क्या आप इन सरकारी योजनाओं के लिए पात्र हैं?' : 'Are You Eligible For These Schemes?'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'अपनी उम्र, जाति व आय दर्ज कर मात्र 1 मिनट में JanLabh एलिजिबिलिटी चेकर से निशुल्क पात्रता जांचें।'
                  : 'Enter your basic profile to check which government welfare benefits you qualify for in 1 minute.'}
              </p>
            </div>
            <Link
              href={isHi ? '/hi/checker' : '/checker'}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors whitespace-nowrap self-start sm:self-auto shrink-0 shadow-sm"
            >
              <span>{isHi ? 'नि:शुल्क पात्रता जांचें' : 'Check Eligibility Online'}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Other Helpful Guides & Articles (Internal Linking Mesh) */}
          {otherArticles.length > 0 && (
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {isHi ? 'अन्य उपयोगी गाइड्स व समाधान' : 'Other Helpful Guides & Solutions'}
                  </h2>
                </div>
                <Link
                  href={isHi ? '/hi/articles' : '/articles'}
                  className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>{isHi ? 'सभी गाइड्स देखें' : 'View All Guides'}</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {otherArticles.map((other) => (
                  <Link
                    key={other.id}
                    href={isHi ? `/hi/articles/${other.slug}` : `/articles/${other.slug}`}
                    className="group p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/60 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                        {isHi ? other.categoryLabel_hi : other.categoryLabel_en}
                      </span>
                      <h3 className="mt-1 text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 line-clamp-2 transition-colors">
                        {isHi ? other.title_hi : other.title_en}
                      </h3>
                      <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2">
                        {isHi ? other.summary_hi : other.summary_en}
                      </p>
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                      <span>{isHi ? 'गाइड व फॉर्म पढ़ें' : 'Read Full Guide'}</span>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQs Section */}
          {((isHi ? article.faqs_hi : article.faqs_en)?.length || 0) > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-amber-600" />
                <span>{isHi ? 'अक्सर पूछे जाने वाले सवाल (FAQs)' : 'Frequently Asked Questions (FAQs)'}</span>
              </h2>
              <div className="space-y-3">
                {(isHi ? article.faqs_hi : article.faqs_en)?.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5"
                  >
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Q: {faq.q}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Official Verification & Portals Directory */}
          {article.officialLinks && article.officialLinks.length > 0 && (
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>{isHi ? 'सत्यापित आधिकारिक सरकारी लिंक्स' : 'Verified Official Government Portals'}</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm">
                {article.officialLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-1.5 text-amber-700 dark:text-amber-400 hover:underline font-semibold"
                    >
                      <span>{isHi ? link.title_hi : link.title_en}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Community Channel Alert Box */}
          <CommunityCallout lang={isHi ? 'hi' : 'en'} variant="card" />
        </article>
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
