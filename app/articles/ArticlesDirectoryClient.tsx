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
  Sparkles
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
