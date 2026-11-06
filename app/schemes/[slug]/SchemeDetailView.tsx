'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/hooks/useLanguage';
import { Scheme, Language } from '@/types';
import { SCHEMES } from '@/data/schemes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import SchemeEligibilityChecker from '@/components/SchemeEligibilityChecker';
import AdBannerSlot from '@/components/AdBannerSlot';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Calendar,
  Building,
  FileText,
  AlertCircle,
  HelpCircle,
  Clock,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Share2,
  Copy,
  Check,
  CheckSquare,
  Square,
  AlertTriangle,
  X
} from 'lucide-react';

interface SchemeDetailViewProps {
  scheme: Scheme;
  initialLang?: Language;
}

export default function SchemeDetailView({ scheme, initialLang }: SchemeDetailViewProps) {
  const router = useRouter();
  const { lang, toggleLanguage } = useLanguage();
  const currentLang = initialLang || lang;
  const isHi = currentLang === 'hi';
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [eligibilityModalOpen, setEligibilityModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      setCanNativeShare(true);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(event.target as Node)) {
        setShareOpen(false);
      }
    };
    if (shareOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [shareOpen]);

  useEffect(() => {
    const stored = localStorage.getItem('janlabh-theme');
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else if (stored === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('janlabh-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('janlabh-theme', 'light');
      }
      return next;
    });
  };

  const handleSelectNav = (navId: string) => {
    const prefix = isHi ? '/hi' : '';
    if (navId === 'home') router.push(prefix || '/');
    else if (navId === 'checker') {
      router.push(`${prefix}/checker?scheme=${scheme.slug}`);
    } else if (navId === 'schemes') {
      router.push(`${prefix}/schemes`);
    } else if (navId === 'finder') {
      router.push(`${prefix}/finder`);
    } else if (navId === 'states') {
      router.push(`${prefix}/states`);
    } else if (navId === 'updates') {
      router.push(`${prefix}/updates`);
    } else if (navId === 'trust' || navId === 'editorial') {
      router.push(`${prefix}/about`);
    }
  };

  const handleOpenLegal = (pageId: string) => {
    if (pageId === 'privacy') router.push('/privacy-policy');
    else if (pageId === 'terms' || pageId === 'disclaimer') router.push('/terms');
    else if (pageId === 'about' || pageId === 'editorial' || pageId === 'verification' || pageId === 'corrections') router.push('/about');
    else if (pageId === 'contact') router.push('/contact');
  };

  const getShareDetails = () => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://janlabh.in/schemes/${scheme.slug}`;
    const schemeTitle = isHi ? scheme.title_hi : scheme.title_en;
    const shareText = isHi
      ? `📢 *${schemeTitle}*\n\nजनलाभ पर इस सरकारी योजना की संपूर्ण जानकारी, पात्रता, मुख्य लाभ और आवेदन प्रक्रिया देखें:\n👉 ${shareUrl}`
      : `📢 *${schemeTitle}*\n\nCheck full details, eligibility, benefits, and how to apply on JanLabh:\n👉 ${shareUrl}`;

    return { shareUrl, shareText };
  };

  const handleWhatsAppShare = () => {
    const { shareText } = getShareDetails();
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setShareOpen(false);
  };

  const handleTelegramShare = () => {
    const { shareUrl, shareText } = getShareDetails();
    const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(tgUrl, '_blank', 'noopener,noreferrer');
    setShareOpen(false);
  };

  const handleNativeShare = async () => {
    const { shareUrl, shareText } = getShareDetails();
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: isHi ? scheme.title_hi : scheme.title_en,
          text: shareText,
          url: shareUrl,
        });
        setShareOpen(false);
      } catch {
        // User dismissed system share dialog
      }
    }
  };

  const handleCopyLink = async () => {
    const { shareUrl } = getShareDetails();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = shareUrl;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setShareOpen(false);
      }, 1800);
    } catch (e) {
      console.error('Failed to copy', e);
    }
  };

  const toggleDoc = (index: number) => {
    setCheckedDocs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const relatedSchemes = SCHEMES.filter(
    (s) => s.id !== scheme.id && (s.category === scheme.category || s.state === scheme.state)
  ).slice(0, 3);

  const problemsList = isHi ? scheme.commonProblems_hi : scheme.commonProblems_en;

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Header
        lang={currentLang}
        onToggleLang={() => {
          if (initialLang === 'hi') {
            router.push(`/schemes/${scheme.slug}`);
          } else if (initialLang === 'en') {
            router.push(`/hi/schemes/${scheme.slug}`);
          } else {
            toggleLanguage();
          }
        }}
        onOpenSearch={() => setSearchModalOpen(true)}
        onSelectNav={handleSelectNav}
        activeNav="schemes"
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Breadcrumb strip with Share action */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-slate-500 dark:text-slate-400">
        <div className="mx-auto max-w-5xl flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <Link href={isHi ? '/hi' : '/'} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium">
              {isHi ? 'होम' : 'Home'}
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link href={isHi ? '/hi/schemes' : '/schemes'} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium">
              {isHi ? 'सभी योजनाएं' : 'All Schemes'}
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-xs">
              {isHi ? scheme.shortTitle_hi : scheme.shortTitle_en}
            </span>
          </div>

          {/* Share Action Dropdown */}
          <div className="relative" ref={shareRef}>
            <button
              onClick={() => setShareOpen((prev) => !prev)}
              className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-all cursor-pointer border border-transparent hover:border-slate-300 dark:hover:border-slate-700"
              title="Share this scheme guide"
              aria-expanded={shareOpen}
            >
              <Share2 className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>{isHi ? 'शेयर करें' : 'Share'}</span>
            </button>

            {shareOpen && (
              <div className="absolute left-0 sm:left-auto sm:right-0 top-full mt-2 w-72 max-w-[calc(100vw-2.5rem)] rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-2.5 py-1.5 border-b border-slate-100 dark:border-slate-800/80 mb-1 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {isHi ? 'योजना शेयर करें' : 'Share Scheme'}
                  </span>
                  <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">
                    जनलाभ JanLabh
                  </span>
                </div>

                <div className="space-y-1">
                  {/* WhatsApp */}
                  <button
                    onClick={handleWhatsAppShare}
                    className="w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-left text-xs font-medium hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-800 dark:text-slate-100 flex items-center justify-between">
                        <span>WhatsApp</span>
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">चैट</span>
                      </div>
                      <div className="text-[11px] text-slate-400 truncate">
                        {isHi ? 'व्हाट्सएप पर शेयर करें' : 'Share on WhatsApp'}
                      </div>
                    </div>
                  </button>

                  {/* Telegram */}
                  <button
                    onClick={handleTelegramShare}
                    className="w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-left text-xs font-medium hover:bg-sky-50 dark:hover:bg-sky-950/40 text-slate-700 dark:text-slate-200 hover:text-sky-700 dark:hover:text-sky-300 transition-colors group cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-full bg-sky-500/10 text-[#229ED9] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-800 dark:text-slate-100 flex items-center justify-between">
                        <span>Telegram</span>
                        <span className="text-[10px] text-sky-600 dark:text-sky-400 font-medium">ग्रुप / चैनल</span>
                      </div>
                      <div className="text-[11px] text-slate-400 truncate">
                        {isHi ? 'टेलीग्राम पर भेजें' : 'Share on Telegram'}
                      </div>
                    </div>
                  </button>

                  {/* Native Device Share (Available on mobile devices) */}
                  {canNativeShare && (
                    <button
                      onClick={handleNativeShare}
                      className="w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-left text-xs font-medium hover:bg-amber-50 dark:hover:bg-amber-950/40 text-slate-700 dark:text-slate-200 hover:text-amber-700 dark:hover:text-amber-300 transition-colors group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Share2 className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-slate-800 dark:text-slate-100 flex items-center justify-between">
                          <span>{isHi ? 'अन्य ऐप्स पर शेयर' : 'More Apps'}</span>
                          <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">{isHi ? 'शेयर' : 'Share'}</span>
                        </div>
                        <div className="text-[11px] text-slate-400 truncate">
                          {isHi ? 'सिस्टम शेयर डायलॉग खोलें' : 'Open device share sheet'}
                        </div>
                      </div>
                    </button>
                  )}

                  {/* Copy Link */}
                  <button
                    onClick={handleCopyLink}
                    className="w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-left text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors group cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {copied ? (
                        <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-800 dark:text-slate-100">
                        {copied
                          ? (isHi ? 'लिंक कॉपी हो गया!' : 'Link Copied!')
                          : (isHi ? 'लिंक कॉपी करें' : 'Copy Link')}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate">
                        {isHi ? 'क्लिपबोर्ड पर कॉपी करें' : 'Copy URL to clipboard'}
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <main className="flex-1 py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-6 sm:space-y-8">
          
          {/* Scheme Hero Photo Banner / Placeholder */}
          {scheme.bannerImage ? (
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all">
              <img
                src={scheme.bannerImage}
                alt={isHi ? scheme.title_hi : scheme.title_en}
                className="w-full h-auto rounded-2xl block object-contain"
                loading="eager"
              />
            </div>
          ) : (
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-sm aspect-[16/9] sm:aspect-[21/9] max-h-[420px] group transition-all">
              <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden">
                {/* Background SVG Watermark */}
                <img
                  src="/images/schemes/default-banner.svg"
                  alt="Scheme Banner Placeholder"
                  className="absolute inset-0 w-full h-full object-cover opacity-65 pointer-events-none"
                />

                {/* Top Badge Strip */}
                <div className="relative z-10 flex items-center justify-between gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{isHi ? 'आधिकारिक योजना गाइड' : 'Official Scheme Guide'}</span>
                  </span>
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-800/90 text-sky-300 border border-sky-400/30 backdrop-blur-md">
                    {isHi ? 'जनलाभ गाइड' : 'JanLabh Guide'}
                  </span>
                </div>

                {/* Center Dynamic Typography */}
                <div className="relative z-10 text-center max-w-2xl mx-auto my-auto space-y-1.5 py-2">
                  <div className="text-[11px] uppercase font-bold tracking-widest text-slate-400">
                    {isHi ? scheme.stateLabel_hi : scheme.stateLabel_en} · {scheme.category.toUpperCase()}
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                    {isHi ? scheme.shortTitle_hi : scheme.shortTitle_en}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-1 max-w-xl mx-auto font-normal">
                    {isHi ? scheme.benefitSummary_hi : scheme.benefitSummary_en}
                  </p>
                </div>

                {/* Bottom Spec Details */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10 pt-2.5">
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>{isHi ? 'सत्यापित नागरिक कल्याण गाइड' : 'Verified Civic Guidance'}</span>
                  </span>
                  <span className="font-medium text-slate-300 text-[10px] sm:text-[11px]">
                    {isHi ? 'संपूर्ण पात्रता एवं आवेदन मार्गदर्शिका' : 'Complete Eligibility & Application Guide'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Top Title & Metadata Header */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300">
                {isHi ? scheme.stateLabel_hi : scheme.stateLabel_en}
              </span>
              <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 uppercase">
                {scheme.category}
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-emerald-700 dark:text-emerald-400 ml-auto">
                <ShieldCheck className="h-4 w-4" />
                <span>{isHi ? `सत्यापित: ${scheme.lastVerified}` : `Verified: ${scheme.lastVerified}`}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {isHi ? scheme.title_hi : scheme.title_en}
            </h1>

            {/* Quick Answer Box */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs">
              <div>
                <span className="font-semibold text-slate-500 dark:text-slate-400 block mb-0.5">
                  {isHi ? 'वित्तीय लाभ / सहायता:' : 'Benefit / Financial Cover:'}
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {isHi ? scheme.benefitAmount_hi : scheme.benefitAmount_en}
                </span>
              </div>
              <div>
                <span className="font-semibold text-slate-500 dark:text-slate-400 block mb-0.5">
                  {isHi ? 'कौन आवेदन कर सकता है:' : 'Who Can Apply:'}
                </span>
                <span className="text-xs text-slate-800 dark:text-slate-200 font-medium">
                  {isHi ? scheme.whoCanApply_hi : scheme.whoCanApply_en}
                </span>
              </div>
              <div>
                <span className="font-semibold text-slate-500 dark:text-slate-400 block mb-0.5">
                  {isHi ? 'आवेदन का माध्यम:' : 'Application Mode:'}
                </span>
                <span className="text-xs text-slate-800 dark:text-slate-200 font-medium">
                  {scheme.applicationMode}
                </span>
              </div>
            </div>

            {/* Action CTAs: Official Portal + Eligibility Checker */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {scheme.officialSources[0] && (
                <a
                  href={scheme.officialSources[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 shadow-sm transition-colors cursor-pointer"
                >
                  <span>{isHi ? 'आधिकारिक पोर्टल पर आवेदन करें' : 'Apply on Official Government Portal'}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}

              <button
                type="button"
                onClick={() => setEligibilityModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors cursor-pointer shadow-xs"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>{isHi ? 'विस्तृत पात्रता जांचें' : 'Evaluate Full Eligibility'}</span>
              </button>
            </div>
          </div>

          {/* Scheme Overview */}
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {isHi ? 'योजना क्या है और इसका उद्देश्य क्या है?' : 'What is this Scheme & Objectives?'}
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {isHi ? scheme.whatIsThis_hi : scheme.whatIsThis_en}
            </p>
          </section>

          {/* Key Benefits */}
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {isHi ? 'प्रमुख लाभ एवं विशेषताएं (Key Benefits)' : 'Key Benefits & Entitlements'}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {(isHi ? scheme.benefitsList_hi : scheme.benefitsList_en).map((benefit, idx) => (
                <li key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* AdSense Unit / Advisory Slot */}
          <AdBannerSlot lang={lang} format="in-article" adSlot="scheme-detail-mid" />

          {/* Secondary Scheme Infographic Banner (Below Ad Section) */}
          {scheme.secondaryImage && (
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all">
              <img
                src={scheme.secondaryImage}
                alt={isHi ? `${scheme.title_hi} विवरण एवं लाभ पोस्टर` : `${scheme.title_en} Infographic Banner`}
                className="w-full h-auto rounded-2xl block object-contain"
                loading="lazy"
              />
            </div>
          )}

          {/* Eligibility Matrix */}
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {isHi ? 'पात्रता मानदंड (Eligibility Criteria)' : 'Eligibility Matrix'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/60 space-y-2">
                <span className="font-bold text-xs text-emerald-900 dark:text-emerald-300 uppercase tracking-wider block">
                  ✓ {isHi ? 'कौन पात्र हैं (Eligible If):' : 'Who is Eligible:'}
                </span>
                <ul className="text-xs space-y-2 text-slate-800 dark:text-slate-200">
                  {(isHi ? scheme.eligibility.eligibleIf_hi : scheme.eligibility.eligibleIf_en).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 space-y-2">
                <span className="font-bold text-xs text-rose-900 dark:text-rose-300 uppercase tracking-wider block">
                  ✗ {isHi ? 'कौन पात्र नहीं हैं (Not Eligible If):' : 'Who is NOT Eligible:'}
                </span>
                <ul className="text-xs space-y-2 text-slate-800 dark:text-slate-200">
                  {(isHi ? scheme.eligibility.notEligibleIf_hi : scheme.eligibility.notEligibleIf_en).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-600 dark:text-rose-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 flex justify-start">
              <button
                type="button"
                onClick={() => setEligibilityModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors cursor-pointer shadow-xs"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>{isHi ? 'क्या आप पात्र हैं? अपनी पात्रता तुरंत जांचें →' : 'Are You Eligible? Test Your Eligibility Now →'}</span>
              </button>
            </div>
          </section>

          {/* Required Documents (Interactive Checkbox List) */}
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <span>{isHi ? 'आवश्यक दस्तावेज चेकलिस्ट' : 'Required Documents Checklist'}</span>
              </h2>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {isHi ? 'तैयार दस्तावेजों पर टिक करें' : 'Click to check off prepared documents'}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {(isHi ? scheme.requiredDocuments_hi : scheme.requiredDocuments_en).map((doc, idx) => {
                const isChecked = !!checkedDocs[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleDoc(idx)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center gap-2.5 select-none ${
                      isChecked
                        ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {isChecked ? (
                      <CheckSquare className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    ) : (
                      <Square className="h-4 w-4 text-slate-400 dark:text-slate-500 shrink-0" />
                    )}
                    <span className={`font-medium ${isChecked ? 'line-through text-emerald-700 dark:text-emerald-400' : ''}`}>
                      {doc}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Step-by-Step Application */}
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {isHi ? 'आवेदन कैसे करें (Step-by-Step Application Guide)' : 'How to Apply (Step-by-Step Guide)'}
            </h2>
            <ol className="space-y-3 text-xs">
              {(isHi ? scheme.howToApply_hi : scheme.howToApply_en).map((step, idx) => (
                <li key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 dark:bg-amber-600 text-white font-bold shrink-0 text-xs">
                    {idx + 1}
                  </span>
                  <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Status Check Guide */}
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>{isHi ? 'आवेदन की स्थिति कैसे जांचें (Status Check)' : 'Application Status Tracking Guide'}</span>
            </h2>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {isHi ? scheme.statusCheckGuide_hi : scheme.statusCheckGuide_en}
            </p>
          </section>

          {/* Common Problems / Pitfalls (if available) */}
          {problemsList && problemsList.length > 0 && (
            <section className="bg-amber-50/60 dark:bg-amber-950/20 p-6 sm:p-8 rounded-2xl border border-amber-200 dark:border-amber-900/50 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-amber-950 dark:text-amber-200 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <span>{isHi ? 'सामान्य समस्याएं व प्रमाणित समाधान' : 'Common Application Issues & Solutions'}</span>
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {problemsList.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-amber-200/80 dark:border-amber-900/60 bg-white dark:bg-slate-900 space-y-1">
                    <div className="text-xs font-bold text-rose-800 dark:text-rose-400 flex items-center gap-1.5">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{item.problem}</span>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 pl-5 leading-relaxed">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{isHi ? 'समाधान: ' : 'Solution: '}</span>
                      {item.solution}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Frequently Asked Questions */}
          {scheme.faqs_en && scheme.faqs_en.length > 0 && (
            <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <span>{isHi ? 'अक्सर पूछे जाने वाले सवाल (FAQs)' : 'Frequently Asked Questions (FAQs)'}</span>
              </h2>
              <div className="space-y-3">
                {(isHi ? scheme.faqs_hi : scheme.faqs_en).map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h3 className="font-bold text-xs text-slate-900 dark:text-white">
                      Q: {faq.q}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      A: {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related Schemes (Pillars) */}
          {relatedSchemes.length > 0 && (
            <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {isHi ? 'संबंधित अन्य सरकारी योजनाएं' : 'Related Government Welfare Schemes'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedSchemes.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/schemes/${rel.slug}`}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-500 bg-slate-50 dark:bg-slate-800/50 hover:shadow-sm transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="text-[10px] font-semibold uppercase text-amber-700 dark:text-amber-400 mb-1">
                        {isHi ? rel.stateLabel_hi : rel.stateLabel_en}
                      </div>
                      <h3 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                        {isHi ? rel.shortTitle_hi : rel.shortTitle_en}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                        {isHi ? rel.benefitSummary_hi : rel.benefitSummary_en}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-amber-700 dark:text-amber-400">
                      <span>{isHi ? 'गाइड पढ़ें' : 'Read Guide'}</span>
                      <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Primary Statutory Citations */}
          <section className="bg-slate-100/70 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs space-y-2">
            <div className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {isHi ? 'प्राथमिक आधिकारिक स्रोत एवं उद्धरण:' : 'Primary Official Citations & Sources:'}
            </div>
            {scheme.officialSources.map((source, idx) => (
              <div key={idx} className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">{source.name}</span>
                  <span className="text-slate-500 dark:text-slate-400"> — {source.authority}</span>
                </div>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>{source.url}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            ))}
          </section>

        </div>
      </main>

      <Footer
        lang={lang}
        onOpenLegal={handleOpenLegal}
        onSelectNav={handleSelectNav}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        lang={lang}
        onSelectScheme={(s) => {
          setSearchModalOpen(false);
          router.push(`/schemes/${s.slug}`);
        }}
        onSelectUpdate={() => {
          setSearchModalOpen(false);
          router.push('/');
        }}
        allSchemes={SCHEMES}
      />

      {/* Interactive Scheme Eligibility Checker Modal */}
      {eligibilityModalOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 dark:bg-slate-950/85 backdrop-blur-sm p-3 sm:p-6 lg:p-8 flex justify-center items-start animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl my-2 sm:my-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col">
            {/* Top Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-bold text-sm text-slate-900 dark:text-white">
                  {isHi ? 'पात्रता मूल्यांकन' : 'Eligibility Evaluation'}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">
                  — {isHi ? scheme.shortTitle_hi : scheme.shortTitle_en}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setEligibilityModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Checker Body */}
            <div className="p-3 sm:p-6 max-h-[82vh] overflow-y-auto">
              <SchemeEligibilityChecker
                lang={lang}
                selectedScheme={scheme}
                allSchemes={SCHEMES}
                onSelectSchemeDetails={(s) => {
                  setEligibilityModalOpen(false);
                  if (s.slug !== scheme.slug) {
                    router.push(`/schemes/${s.slug}`);
                  }
                }}
                onBackToFinder={() => {
                  setEligibilityModalOpen(false);
                  router.push('/?nav=finder');
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
