'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/hooks/useTheme';
import { Scheme, Language } from '@/types';
import { SCHEMES } from '@/data/schemes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import AdBannerSlot from '@/components/AdBannerSlot';
import CommunityCallout from '@/components/CommunityCallout';
import DocumentSlipModal from '@/components/DocumentSlipModal';
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
  UserCheck,
  BookOpen,
  MapPin,
  Printer,
  TrendingUp,
  GraduationCap,
  Info
} from 'lucide-react';
import { ARTICLES } from '@/data/articles';

interface SchemeDetailViewProps {
  scheme: Scheme;
  initialLang?: Language;
}

export default function SchemeDetailView({ scheme, initialLang = 'en' }: SchemeDetailViewProps) {
  const router = useRouter();
  const currentLang = initialLang;
  const lang = currentLang;
  const isHi = currentLang === 'hi';
  const prefix = isHi ? '/hi' : '';
  const { isDark, toggleTheme } = useTheme();
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});
  const [slipModalOpen, setSlipModalOpen] = useState(false);

  const relevantArticles = React.useMemo(() => {
    return ARTICLES.filter((a) => {
      if (a.relatedSchemeSlug === scheme.slug) return true;
      if (a.relatedStateId && a.relatedStateId === scheme.state) return true;
      const isDbtScheme = ['farmers', 'women', 'pension', 'scholarships', 'employment'].includes(scheme.category);
      if (isDbtScheme && a.id === 'bank-account-aadhaar-npci-link-dbt-status-check-online') return true;
      return false;
    });
  }, [scheme.slug, scheme.state, scheme.category]);

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
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Header
        lang={currentLang}
        onToggleLang={() => {
          if (isHi) {
            router.push(`/schemes/${scheme.slug}`);
          } else {
            router.push(`/hi/schemes/${scheme.slug}`);
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
            {scheme.state && scheme.state !== 'all-india' && (
              <>
                <ChevronRight className="h-3 w-3 text-slate-400" />
                <Link
                  href={isHi ? `/hi/states/${scheme.state}` : `/states/${scheme.state}`}
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
                >
                  {isHi ? scheme.stateLabel_hi : scheme.stateLabel_en}
                </Link>
              </>
            )}
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
              {scheme.state && scheme.state !== 'all-india' ? (
                <Link
                  href={isHi ? `/hi/states/${scheme.state}` : `/states/${scheme.state}`}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900 transition-colors"
                >
                  <MapPin className="h-3 w-3 text-amber-700 dark:text-amber-400" />
                  <span>{isHi ? `${scheme.stateLabel_hi} कल्याण हब` : `${scheme.stateLabel_en} Welfare Hub`}</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              ) : (
                <Link
                  href={isHi ? '/hi/states/all-india' : '/states/all-india'}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900 transition-colors"
                >
                  <span>{isHi ? scheme.stateLabel_hi : scheme.stateLabel_en}</span>
                </Link>
              )}
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

            {/* E-E-A-T Author & Fact-Check Byline */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-slate-600 dark:text-slate-400 border-y border-slate-100 dark:border-slate-800/80 py-2.5">
              <span className="flex items-center gap-1.5 font-medium">
                <UserCheck className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                <span>{isHi ? 'लेखक एवं संपादक:' : 'Author & Editor:'}</span>
                <Link
                  href={isHi ? '/hi/about' : '/about'}
                  className="font-bold text-slate-900 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 underline decoration-amber-500/40 underline-offset-2"
                >
                  Sanket Sinha
                </Link>
                <span className="text-[11px] text-slate-400 dark:text-slate-500">
                  ({isHi ? 'संस्थापक एवं संपादक' : 'Founder & Editor'})
                </span>
              </span>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
              <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-medium">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>
                  {isHi
                    ? `${scheme.officialSources[0]?.url ? new URL(scheme.officialSources[0].url).hostname : 'pmkisan.gov.in'} से सत्यापित: ${scheme.lastVerified}`
                    : `Verified against ${scheme.officialSources[0]?.url ? new URL(scheme.officialSources[0].url).hostname : 'pmkisan.gov.in'} on ${scheme.lastVerified}`}
                </span>
              </span>
            </div>

            {/* Dedicated Senior Citizen Callout on General PM-JAY Page */}
            {scheme.slug === 'ayushman-bharat-pmjay-health-card' && (
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-300">
                    <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>{isHi ? 'क्या आपकी आयु 70 वर्ष या उससे अधिक है?' : 'Are you aged 70 or above?'}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {isHi
                      ? '70+ वरिष्ठ नागरिकों के लिए बिना किसी आय सीमा के ₹5 लाख का अलग से आयुष्मान वय वंदना कार्ड जारी किया जा रहा है।'
                      : 'Senior citizens aged 70+ are entitled to an exclusive ₹5 Lakh Ayushman Vay Vandana Card with zero income limits.'}
                  </p>
                </div>
                <Link
                  href={isHi ? '/hi/schemes/senior-citizen-ayushman-card-70-plus' : '/schemes/senior-citizen-ayushman-card-70-plus'}
                  className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <span>{isHi ? '70+ बुजुर्गों के लिए आयुष्मान वय वंदना कार्ड' : 'Ayushman Vay Vandana Card for seniors 70+'}</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}

            {/* Dedicated General Family PM-JAY Link on 70+ Page */}
            {scheme.slug === 'senior-citizen-ayushman-card-70-plus' && (
              <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs">
                <div className="text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-blue-950 dark:text-blue-300">
                    {isHi ? 'पारिवारिक आयुष्मान कार्ड: ' : 'General Family Cover: '}
                  </span>
                  <span>
                    {isHi
                      ? 'यदि आप 70 वर्ष से कम आयु के परिवार के सदस्यों हेतु ₹5 लाख स्वास्थ्य सुरक्षा की जानकारी चाहते हैं:'
                      : 'Looking for ₹5 Lakh family health assurance for members under 70 years?'}
                  </span>
                </div>
                <Link
                  href={isHi ? '/hi/schemes/ayushman-bharat-pmjay-health-card' : '/schemes/ayushman-bharat-pmjay-health-card'}
                  className="shrink-0 font-semibold text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <span>{isHi ? 'आयुष्मान भारत PM-JAY (सामान्य योजना)' : 'Ayushman Bharat PM-JAY (general family cover)'}</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            )}

            {/* Dedicated Live Installment & Status Alert on Maiya Samman Page */}
            {scheme.slug === 'jharkhand-mukhyamantri-maiya-samman-yojana' && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-slate-900 border border-emerald-200 dark:border-emerald-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-950 dark:text-emerald-300">
                    <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>
                      {isHi ? 'मंईयां सम्मान योजना: अगली किस्त व DBT स्टेटस अपडेट' : 'Maiya Samman Yojana: Next Installment & DBT Status'}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {isHi
                      ? 'स्वीकृत लाभार्थियों के खाते में मासिक किस्त सीधे डीबीटी द्वारा ट्रांसफर की जाती है। यदि पैसा नहीं आया, तो बैंक में आधार-NPCI लिंक की स्थिति तुरंत जांचें।'
                      : 'Monthly installments are credited directly via DBT to approved beneficiaries. If payment is delayed, verify your bank account’s Aadhaar-NPCI seeding.'}
                  </p>
                </div>
                <Link
                  href={isHi ? '/hi/articles/bank-account-aadhaar-npci-link-dbt-status-check-online' : '/articles/bank-account-aadhaar-npci-link-dbt-status-check-online'}
                  className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <span>{isHi ? 'बैंक आधार NPCI लिंक गाइड' : 'Aadhaar NPCI Linking Guide'}</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}

            {/* Dedicated Live Installment & Status Alert on Abua Awas Page */}
            {scheme.slug === 'jharkhand-abua-awas-yojana-housing' && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50 via-orange-50 to-slate-50 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-slate-900 border border-amber-200 dark:border-amber-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-amber-950 dark:text-amber-300">
                    <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>
                      {isHi ? 'अबुआ आवास योजना: 4 किस्तें (₹2 लाख), जियो-टैगिंग व लिस्ट अपडेट 2026' : 'Abua Awas Yojana: 4 Installments (₹2 Lakh), Geotagging & 2026 List Updates'}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {isHi
                      ? 'मकान निर्माण की प्रगति (प्लिंथ, लिंटेल, छत) के आधार पर 4 किस्तों में ₹2 लाख डीबीटी द्वारा जारी किए जाते हैं। किस्त का पैसा समय पर पाने हेतु निर्माण स्थल की जियो-टैगिंग और बैंक खाते में आधार NPCI डीबीटी सक्रिय होना अनिवार्य है।'
                      : '₹2 Lakh is released in 4 DBT tranches based on construction progress (Plinth, Lintel, Roof). Mandatory site geotagging by Panchayat Secretary and active Aadhaar-NPCI bank mapping are required for payment clearance.'}
                  </p>
                </div>
                <Link
                  href={isHi ? '/hi/articles/bank-account-aadhaar-npci-link-dbt-status-check-online' : '/articles/bank-account-aadhaar-npci-link-dbt-status-check-online'}
                  className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <span>{isHi ? 'आधार NPCI डीबीटी स्थिति जांचें' : 'Check Aadhaar NPCI DBT Status'}</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}

            {/* Dedicated Live Alert on Bihar Student Credit Card Page */}
            {scheme.slug === 'bihar-student-credit-card-yojana' && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-slate-50 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-slate-900 border border-blue-200 dark:border-blue-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-blue-950 dark:text-blue-300">
                    <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>
                      {isHi ? 'बिहार स्टूडेंट क्रेडिट कार्ड: ₹4 लाख शिक्षा ऋण, 1% ब्याज व DRCC अपडेट 2026' : 'Bihar Student Credit Card: ₹4 Lakh Education Loan, 1% Interest & DRCC Updates 2026'}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {isHi
                      ? 'छात्राओं व दिव्यांगों हेतु मात्र 1% और छात्रों हेतु 4% साधारण ब्याज। ट्यूशन फीस के साथ हॉस्टल, मेस और ₹35,000 लैपटॉप भत्ता शामिल। पूरी पढ़ाई और कोर्स समाप्ति के 1 साल बाद तक 0 EMI।'
                      : 'Just 1% simple interest for female & PwD students, 4% for male students. Covers tuition, hostel mess, and ₹35,000 laptop grant with zero EMI during studies plus 1-year moratorium.'}
                  </p>
                </div>
                <a
                  href="https://www.7nishchay-yuvaupmission.bihar.gov.in"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <span>{isHi ? 'MNSSBY आधिकारिक पोर्टल' : 'Official MNSSBY Portal'}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            )}

            {/* Dedicated Live Alert on Bihar Mukhyamantri Kanya Utthan Yojana Page */}
            {scheme.slug === 'bihar-mukhyamantri-kanya-utthan-yojana' && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-pink-50 via-rose-50 to-slate-50 dark:from-pink-950/40 dark:via-rose-950/30 dark:to-slate-900 border border-pink-200 dark:border-pink-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-pink-950 dark:text-pink-300">
                    <GraduationCap className="h-4 w-4 text-pink-600 dark:text-pink-400 shrink-0" />
                    <span>
                      {isHi ? 'कन्या उत्थान योजना: स्नातक ₹50,000 व 12वीं ₹25,000 मेधासॉफ्ट पोर्टल अपडेट 2026' : 'Bihar Kanya Utthan: ₹50,000 Graduation & ₹25,000 12th Medhasoft DBT Update 2026'}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {isHi
                      ? 'स्नातक पास ₹50,000 हेतु विवाहित व अविवाहित दोनों छात्राएं 100% पात्र हैं। बैंक खाता अनिवार्य रूप से बिहार राज्य में और NPCI आधार डीबीटी सीडेड होना चाहिए।'
                      : 'Both married and unmarried female graduates are 100% eligible for the ₹50,000 grant. Bank account must be situated in a Bihar branch and mapped with NPCI Aadhaar DBT.'}
                  </p>
                </div>
                <a
                  href="https://medhasoft.bih.nic.in"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <span>{isHi ? 'मेधासॉफ्ट आधिकारिक पोर्टल' : 'Official Medhasoft Portal'}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            )}

            {/* Dedicated Live Alert on UP Kanya Sumangala Yojana Page */}
            {scheme.slug === 'up-mukhyamantri-kanya-sumangala-yojana' && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-orange-50 via-amber-50 to-slate-50 dark:from-orange-950/40 dark:via-amber-950/30 dark:to-slate-900 border border-orange-200 dark:border-orange-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-orange-950 dark:text-orange-300">
                    <GraduationCap className="h-4 w-4 text-orange-600 dark:text-orange-400 shrink-0" />
                    <span>
                      {isHi ? 'कन्या सुमंगला योजना: सहायता राशि बढ़कर ₹25,000, 6 किस्तें व सिटिजन पोर्टल लॉगिन' : 'UP Kanya Sumangala: Enhanced ₹25,000 Grant, 6 Milestone Stages & Portal Login'}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {isHi
                      ? 'उत्तर प्रदेश सरकार द्वारा ₹15,000 से बढ़ाकर कुल ₹25,000 की सहायता। जन्म से लेकर डिग्री तक 6 किस्तों में सीधे बैंक खाते में DBT। सिटिजन पोर्टल (mksy.up.gov.in) पर ऑनलाइन क्लेम करें।'
                      : 'Grant increased from ₹15,000 to ₹25,000 across 6 developmental milestones from birth to graduation. Direct DBT transfer via Citizen Service Portal (mksy.up.gov.in).'}
                  </p>
                </div>
                <a
                  href="https://mksy.up.gov.in/mksy/index.php"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <span>{isHi ? 'MKSY सिटिजन पोर्टल लॉगिन' : 'MKSY Citizen Login'}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            )}

            {/* Dedicated Live Alert on Majhi Ladki Bahin Yojana Page */}
            {scheme.slug === 'maharashtra-ladki-bahin-yojana' && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50 via-pink-50 to-slate-50 dark:from-rose-950/40 dark:via-pink-950/30 dark:to-slate-900 border border-rose-200 dark:border-rose-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-rose-950 dark:text-rose-300">
                    <Sparkles className="h-4 w-4 text-rose-600 dark:text-rose-400 shrink-0" />
                    <span>
                      {isHi ? 'माझी लाडकी बहीण योजना: दरमहा ₹1,500 हप्ता, यादी 2026 व हमीपत्र अपडेट' : 'Majhi Ladki Bahin: ₹1,500 Monthly Installment, 2026 List & Hamipatra Updates'}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {isHi
                      ? 'पात्र महिलांच्या खात्यात दर महिन्याला ₹1,500 थेट DBT द्वारे जमा। पिवळे/केशरी रेशन कार्ड असल्यास उत्पन्नाचा दाखला लागत नाही। अधिकृत पोर्टल किंवा नारी शक्ती दूत ॲपद्वारे स्टेटस तपासा।'
                      : 'Direct monthly credit of ₹1,500 via DBT into Aadhaar-linked bank accounts. Yellow/Orange ration card holders exempted from separate income certificate.'}
                  </p>
                </div>
                <a
                  href="https://ladkibahin.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <span>{isHi ? 'लाडकी बहीण अधिकृत पोर्टल' : 'Official Portal Login'}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            )}

            {/* Dedicated Live Alert on MP Ladli Behna Yojana Page */}
            {scheme.slug === 'ladli-behna-yojana-madhya-pradesh' && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-teal-50 via-emerald-50 to-amber-50 dark:from-teal-950/40 dark:via-emerald-950/30 dark:to-slate-900 border border-teal-200 dark:border-teal-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-teal-950 dark:text-teal-300">
                    <Sparkles className="h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0" />
                    <span>
                      {isHi ? 'लाड़ली बहना योजना: हर माह 10 तारीख को ₹1,250 किस्त, अंतिम सूची एवं समग्र ई-केवाईसी अपडेट' : 'Ladli Behna Yojana MP: ₹1,250 Monthly Installment on 10th, Antim Suchi & Samagra e-KYC Guide'}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {isHi
                      ? 'हर महीने 10 तारीख को बहनों के एकल बैंक खाते में ₹1,250 की किस्त DBT द्वारा ट्रांसफर होती है। तीसरे चरण (3rd Round) के नए आवेदन व ई-केवाईसी समग्र पोर्टल (samagra.gov.in) पर एक्टिव बायोमेट्रिक/ओटीपी से जुड़े हैं। ₹450 एलपीजी सिलेंडर रिफिल का लाभ भी प्राप्त करें।'
                      : 'Guaranteed credit of ₹1,250 every month on the 10th directly to single Aadhaar-linked accounts via DBT. Check antim suchi name list and Samagra e-KYC status at cmladlibahna.mp.gov.in.'}
                  </p>
                </div>
                <a
                  href="https://cmladlibahna.mp.gov.in"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <span>{isHi ? 'लाड़ली बहना पोर्टल लॉगिन' : 'Official MP Portal Login'}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            )}

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

              <Link
                href={`${prefix}/checker?scheme=${scheme.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-emerald-950 dark:text-emerald-100 bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950/80 dark:hover:bg-emerald-900/80 border border-emerald-400 dark:border-emerald-700 transition-colors cursor-pointer shadow-xs"
              >
                <img
                  src="/icons/more_icons/guarantee.svg"
                  alt=""
                  className="h-5 w-5 object-contain shrink-0"
                  aria-hidden="true"
                />
                <span>{isHi ? 'विस्तृत पात्रता जांचें' : 'Evaluate Full Eligibility'}</span>
              </Link>
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

          {/* Dedicated APY Contribution Chart Section */}
          {scheme.slug === 'atal-pension-yojana-apy-retirement' && (
            <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <span>{isHi ? 'अटल पेंशन योजना प्रीमियम चार्ट 2026 (Contribution Chart)' : 'Atal Pension Yojana Contribution Chart 2026'}</span>
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {isHi
                      ? 'अपनी उम्र और इच्छित पेंशन (₹1,000 से ₹5,000) के अनुसार आवश्यक मासिक अंशदान तालिका (PFRDA अधिकृत):'
                      : 'PFRDA-authorized monthly contribution required based on your entry age and target pension (₹1,000 to ₹5,000):'}
                  </p>
                </div>
                <span className="shrink-0 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  {isHi ? '100% सरकारी गारंटी' : '100% Govt Guaranteed'}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                      <th className="py-2.5 px-3">{isHi ? 'प्रवेश आयु (Entry Age)' : 'Entry Age'}</th>
                      <th className="py-2.5 px-3">{isHi ? '₹1,000 पेंशन / माह' : '₹1,000 / mo'}</th>
                      <th className="py-2.5 px-3">{isHi ? '₹2,000 पेंशन / माह' : '₹2,000 / mo'}</th>
                      <th className="py-2.5 px-3">{isHi ? '₹3,000 पेंशन / माह' : '₹3,000 / mo'}</th>
                      <th className="py-2.5 px-3">{isHi ? '₹4,000 पेंशन / माह' : '₹4,000 / mo'}</th>
                      <th className="py-2.5 px-3 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-extrabold">{isHi ? '₹5,000 पेंशन / माह' : '₹5,000 / mo'}</th>
                      <th className="py-2.5 px-3">{isHi ? 'नॉमिनी को वापसी (Corpus)' : 'Nominee Return Corpus'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">18 वर्ष</td>
                      <td className="py-2.5 px-3">₹42 / माह</td>
                      <td className="py-2.5 px-3">₹84 / माह</td>
                      <td className="py-2.5 px-3">₹126 / माह</td>
                      <td className="py-2.5 px-3">₹168 / माह</td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400 bg-amber-50/50 dark:bg-amber-950/20">₹210 / माह</td>
                      <td className="py-2.5 px-3 font-medium">₹1.7 लाख – ₹8.5 लाख</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">25 वर्ष</td>
                      <td className="py-2.5 px-3">₹76 / माह</td>
                      <td className="py-2.5 px-3">₹151 / माह</td>
                      <td className="py-2.5 px-3">₹226 / माह</td>
                      <td className="py-2.5 px-3">₹301 / माह</td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400 bg-amber-50/50 dark:bg-amber-950/20">₹376 / माह</td>
                      <td className="py-2.5 px-3 font-medium">₹1.7 लाख – ₹8.5 लाख</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">30 वर्ष</td>
                      <td className="py-2.5 px-3">₹116 / माह</td>
                      <td className="py-2.5 px-3">₹231 / माह</td>
                      <td className="py-2.5 px-3">₹347 / माह</td>
                      <td className="py-2.5 px-3">₹462 / माह</td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400 bg-amber-50/50 dark:bg-amber-950/20">₹577 / माह</td>
                      <td className="py-2.5 px-3 font-medium">₹1.7 लाख – ₹8.5 लाख</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">35 वर्ष</td>
                      <td className="py-2.5 px-3">₹181 / माह</td>
                      <td className="py-2.5 px-3">₹362 / माह</td>
                      <td className="py-2.5 px-3">₹543 / माह</td>
                      <td className="py-2.5 px-3">₹722 / माह</td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400 bg-amber-50/50 dark:bg-amber-950/20">₹902 / माह</td>
                      <td className="py-2.5 px-3 font-medium">₹1.7 लाख – ₹8.5 लाख</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">40 वर्ष (अधिकतम)</td>
                      <td className="py-2.5 px-3">₹291 / माह</td>
                      <td className="py-2.5 px-3">₹582 / माह</td>
                      <td className="py-2.5 px-3">₹873 / माह</td>
                      <td className="py-2.5 px-3">₹1,164 / माह</td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400 bg-amber-50/50 dark:bg-amber-950/20">₹1,454 / माह</td>
                      <td className="py-2.5 px-3 font-medium">₹1.7 लाख – ₹8.5 लाख</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-[11px] text-amber-950 dark:text-amber-200 space-y-1">
                <div className="font-bold flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                  <span>{isHi ? 'महत्वपूर्ण नियम व सलाह:' : 'Key Rules & Advisory:'}</span>
                </div>
                <p>
                  {isHi
                    ? 'अटल पेंशन योजना में जितनी कम उम्र में जुड़ेंगे, मासिक प्रीमियम उतना ही कम होगा। 60 वर्ष पूरे होने तक अंशदान स्वतः बैंक खाते से कटता रहेगा। यदि ग्राहक की मृत्यु होती है, तो जीवनसाथी को आजीवन समान पेंशन मिलेगी और दोनों के बाद नॉमिनी को ₹8.5 लाख तक की पूरी संचित राशि वापस मिलेगी।'
                    : 'Joining APY at a younger age locks in significantly lower lifetime monthly premiums. Contributions are automatically auto-debited until age 60. In case of subscriber death, spouse receives the same monthly pension, and upon both demises, nominee receives up to ₹8.5 Lakh.'}
                </p>
              </div>
            </section>
          )}

          {/* Dedicated Abua Awas 4-Installment Milestone Table */}
          {scheme.slug === 'jharkhand-abua-awas-yojana-housing' && (
            <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Building className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    <span>{isHi ? 'अबुआ आवास योजना 4-किस्त भुगतान व निर्माण प्रगति विवरण (₹2,00,000 DBT)' : 'Abua Awas Yojana 4-Installment Milestone & Payment Schedule'}</span>
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {isHi
                      ? 'झारखंड सरकार द्वारा 3 कमरों के पक्के मकान निर्माण हेतु 4 चरणों में सीधे बैंक खाते में भुगतान की आधिकारिक समय-सारणी:'
                      : 'Official Jharkhand Rural Development Department schedule for 4-phase DBT fund disbursement for 3-room housing construction:'}
                  </p>
                </div>
                <span className="self-start sm:self-auto inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-950/40 px-2.5 py-1 rounded-full border border-amber-300 dark:border-amber-800">
                  <ShieldCheck className="h-3 w-3 text-amber-600 shrink-0" />
                  <span>{isHi ? '100% राज्य-पोषित योजना' : '100% State Funded'}</span>
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-semibold">
                      <th className="py-3 px-3">किस्त (Installment)</th>
                      <th className="py-3 px-3">निर्माण चरण (Construction Stage)</th>
                      <th className="py-3 px-3">राशि व प्रतिशत (Amount)</th>
                      <th className="py-3 px-3">भौतिक सत्यापन (Geotagging Requirement)</th>
                      <th className="py-3 px-3">पैसा कब आएगा (Disbursement Timeline)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'पहली किस्त (1st)' : '1st Installment'}
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {isHi ? 'स्वीकृति व प्लिंथ (नींव) निर्माण' : 'Sanction & Plinth Foundation'}
                        </span>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          {isHi ? 'पुराना कच्चा घर तोड़कर नींव की खुदाई व भराई' : 'Old kutcha house demolition & plinth filling'}
                        </div>
                      </td>
                      <td className="py-2.5 px-3 font-bold text-amber-600 dark:text-amber-400">
                        ₹30,000 <span className="text-[10px] text-slate-500 font-normal">(15%)</span>
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'कच्चे मकान व स्वीकृत स्थल की प्रारंभिक जियो-टैगिंग' : 'Initial site geotagging by Panchayat Secretary'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'ग्राम सभा स्वीकृति व स्वीकृति पत्र जारी होने के 15-30 दिन में' : 'Within 15-30 days of Gram Sabha sanction'}
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'दूसरी किस्त (2nd)' : '2nd Installment'}
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {isHi ? 'लिंटेल स्तर (दीवारों का निर्माण)' : 'Lintel Level Construction'}
                        </span>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          {isHi ? '3 कमरों व रसोई की दीवारें खिड़की/दरवाजे के ऊपरी स्तर तक' : 'Brick walls of 3 rooms & kitchen up to lintel height'}
                        </div>
                      </td>
                      <td className="py-2.5 px-3 font-bold text-amber-600 dark:text-amber-400">
                        ₹50,000 <span className="text-[10px] text-slate-500 font-normal">(25%)</span>
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'प्लिंथ पूर्णता की भौतिक फोटो पोर्टल पर अपलोड' : 'Plinth stage geotag verification on portal'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'प्लिंथ स्तर सत्यापन के 2-3 सप्ताह में बैंक खाते में' : '2-3 weeks after plinth verification approval'}
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 bg-amber-50/30 dark:bg-amber-950/20">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'तीसरी किस्त (3rd)' : '3rd Installment'}
                        <div className="text-[10px] text-amber-700 dark:text-amber-400 font-medium">
                          {isHi ? '★ सबसे बड़ी किस्त' : '★ Largest tranche'}
                        </div>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {isHi ? 'छत ढलाई (Roof Casting / RCC)' : 'RCC Roof Casting'}
                        </span>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          {isHi ? 'पक्की कंक्रीट छत की ढलाई (3 कमरे + रसोई = 31 वर्ग मीटर)' : 'Permanent concrete roof casting for all 3 rooms & kitchen'}
                        </div>
                      </td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                        ₹1,00,000 <span className="text-[10px] text-slate-500 font-normal">(50%)</span>
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'लिंटेल स्तर और शटरिंग कार्य की जियो-टैग पुष्टि' : 'Lintel height and shuttering geotag inspection'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'लिंटेल जियो-टैग सत्यापन के 15-20 दिन में' : 'Within 15-20 days of lintel stage approval'}
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'चौथी किस्त (4th)' : '4th Installment'}
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {isHi ? 'प्लास्टर, खिड़की-दरवाजे व पूर्णता' : 'Finishing, Doors, Windows & Plaster'}
                        </span>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          {isHi ? 'आंतरिक-बाहरी प्लास्टर, फर्श, खिड़की-दरवाजे व पेंट' : 'Plastering, flooring, doors, windows & paint completion'}
                        </div>
                      </td>
                      <td className="py-2.5 px-3 font-bold text-amber-600 dark:text-amber-400">
                        ₹20,000 <span className="text-[10px] text-slate-500 font-normal">(10%)</span>
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'छत ढलाई व पूर्ण मकान का अंतिम जियो-टैग निरीक्षण' : 'Final completed house geotag & BDO sign-off'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'छत ढलाई उपरांत अंतिम निरीक्षण पर' : 'Upon final inspection after roof completion'}
                      </td>
                    </tr>

                    <tr className="bg-slate-100/60 dark:bg-slate-800/60 font-semibold text-slate-900 dark:text-white">
                      <td className="py-2.5 px-3">{isHi ? 'कुल सहायता (Total)' : 'Total Grant'}</td>
                      <td className="py-2.5 px-3">{isHi ? '3 कमरों का पक्का मकान + रसोईघर' : '3-Room Pucca House + Kitchen (31 sq. m)'}</td>
                      <td className="py-2.5 px-3 font-bold text-amber-600 dark:text-amber-400 text-sm">₹2,00,000 (100%)</td>
                      <td className="py-2.5 px-3" colSpan={2}>
                        {isHi
                          ? '+ मनरेगा (MGNREGA) मजदूरी ~₹26,000+ एवं शौचालय प्रोत्साहन ₹12,000 अतिरिक्त'
                          : '+ MGNREGA wages ~₹26,000+ and SBM-G toilet incentive ₹12,000 extra'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-[11px] text-amber-950 dark:text-amber-200 space-y-1">
                <div className="font-bold flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                  <span>{isHi ? 'किस्त का पैसा अटकने या देरी होने का कारण व समाधान:' : 'Reasons for Payment Delay & Immediate Fix:'}</span>
                </div>
                <p>
                  {isHi
                    ? 'यदि निर्माण कार्य पूरा होने के बाद भी किस्त का पैसा नहीं आया है, तो दो प्रमुख कारण होते हैं: 1) पंचायत सेवक द्वारा संबंधित चरण (Plinth/Lintel/Roof) का जियो-टैग फोटो पोर्टल पर अपलोड न होना। 2) बैंक खाते में NPCI आधार डीबीटी मैपिंग निष्क्रिय होना। तुरंत अपने पंचायत सचिव से जियो-टैगिंग करवाएं और बैंक में आधार सीडिंग चेक करें।'
                    : 'If an installment is delayed after construction, the two most common reasons are: 1) Panchayat Secretary has not uploaded milestone stage geotagged photos on the portal. 2) The bank account has an inactive NPCI Aadhaar DBT link. Immediately contact your Panchayat Secretary for geotagging and verify Aadhaar mapping at your bank.'}
                </p>
              </div>
            </section>
          )}

          {/* Bihar Student Credit Card Special Rates & Terms Table */}
          {scheme.slug === 'bihar-student-credit-card-yojana' && (
            <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-blue-200 dark:border-blue-900/60 shadow-sm space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span>{isHi ? 'बिहार स्टूडेंट क्रेडिट कार्ड ब्याज दर, लोन सीमा व शर्तें' : 'Bihar Student Credit Card Interest Rate, Loan Limit & Terms'}</span>
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {isHi ? 'बिहार राज्य शिक्षा वित्त निगम (BSEFC) द्वारा ₹4 लाख तक बिना गारंटी व 1% सरल ब्याज पर ऋण' : 'Collateral-free loan up to ₹4 Lakh by BSEFC with simple interest starting at 1%'}
                  </p>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 font-bold text-xs rounded-full">
                  {isHi ? '100% सरकारी गारंटी' : '100% State Guarantee'}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                      <th className="py-2.5 px-3">{isHi ? 'छात्र श्रेणी / वर्ग' : 'Category / Beneficiary'}</th>
                      <th className="py-2.5 px-3">{isHi ? 'ब्याज दर (Interest Rate)' : 'Interest Rate'}</th>
                      <th className="py-2.5 px-3">{isHi ? 'अधिकतम लोन' : 'Max Loan Limit'}</th>
                      <th className="py-2.5 px-3">{isHi ? 'मोराटोरियम (EMI छूट)' : 'Moratorium Period'}</th>
                      <th className="py-2.5 px-3">{isHi ? 'पैसा भुगतान का माध्यम' : 'Disbursement Method'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'महिला छात्राएं (Girls / Female Students)' : 'Female Students (Girls)'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400">
                        1% {isHi ? 'साधारण ब्याज (Simple Interest)' : 'Simple Interest'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">₹4,00,000</td>
                      <td className="py-2.5 px-3">{isHi ? 'कोर्स + 1 वर्ष (0 EMI)' : 'Course + 1 Year (0 EMI)'}</td>
                      <td className="py-2.5 px-3">{isHi ? 'कॉलेज + छात्र बैंक खाता' : 'College + Student Bank A/c'}</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'दिव्यांग व थर्ड जेंडर (PwD & Transgender)' : 'PwD & Transgender Students'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400">
                        1% {isHi ? 'साधारण ब्याज (Simple Interest)' : 'Simple Interest'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">₹4,00,000</td>
                      <td className="py-2.5 px-3">{isHi ? 'कोर्स + 1 वर्ष (0 EMI)' : 'Course + 1 Year (0 EMI)'}</td>
                      <td className="py-2.5 px-3">{isHi ? 'कॉलेज + छात्र बैंक खाता' : 'College + Student Bank A/c'}</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'सामान्य / ओबीसी / एससी / एसटी छात्र (Boys)' : 'Male Students (General/OBC/SC/ST)'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-blue-600 dark:text-blue-400">
                        4% {isHi ? 'साधारण ब्याज (Simple Interest)' : 'Simple Interest'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">₹4,00,000</td>
                      <td className="py-2.5 px-3">{isHi ? 'कोर्स + 1 वर्ष (0 EMI)' : 'Course + 1 Year (0 EMI)'}</td>
                      <td className="py-2.5 px-3">{isHi ? 'कॉलेज + छात्र बैंक खाता' : 'College + Student Bank A/c'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Crucial Ground Realities: Subsequent Payment & Out-of-State College Rules */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                <div className="p-3.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-blue-950 dark:text-blue-200 space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5 text-xs text-blue-900 dark:text-blue-300">
                    <Sparkles className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>{isHi ? 'सब्सिक्वेंट पेमेंट (अगली किस्त / फीस) कैसे जारी करवाएं?' : 'How to Release Subsequent Year Payment / Installments?'}</span>
                  </div>
                  <p className="leading-relaxed">
                    {isHi
                      ? 'हर साल या सेमेस्टर की अगली किस्त अपने आप ट्रांसफर नहीं होती। इसके लिए छात्र को पिछले सेमेस्टर की अंकतालिका (Marksheet/Promotion Certificate) और संस्थान का डिमांड स्लिप लेकर आधिकारिक पोर्टल (7nishchay-yuvaupmission.bihar.gov.in) पर "Subsequent Payment" फॉर्म भरना होता है या DRCC काउंटर पर भौतिक रूप से जमा करना पड़ता है।'
                      : 'Next semester or annual tranches are not released automatically. Students must submit their previous semester marksheet / promotion certificate along with the college demand fee structure either online via the MNSSBY portal ("Subsequent Payment" tab) or in person at their district DRCC.'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-950 dark:text-amber-200 space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5 text-xs text-amber-900 dark:text-amber-300">
                    <Info className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                    <span>{isHi ? 'बिहार से बाहर कॉलेज हेतु NAAC "A" व NBA मान्यता अनिवार्य' : 'Outside Bihar College Accreditation Rule (NAAC "A" / NBA)'}</span>
                  </div>
                  <p className="leading-relaxed">
                    {isHi
                      ? 'यदि आप बिहार राज्य से बाहर किसी निजी कॉलेज/यूनिवर्सिटी में बीटेक, एमबीए, नर्सिंग या अन्य कोर्स कर रहे हैं, तो वह संस्थान अनिवार्य रूप से NAAC "A" ग्रेड या संबंधित कोर्स NBA प्रत्यायित होना चाहिए। गैर-मान्यता प्राप्त बाहरी संस्थानों के आवेदन DRCC स्तर पर सीधे निरस्त कर दिए जाते हैं।'
                      : 'For private colleges and universities located outside Bihar, the institution must hold NAAC "A" accreditation or NBA course approval. Applications for non-accredited private outside institutions are directly rejected at the DRCC verification level.'}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Bihar Mukhyamantri Kanya Utthan Yojana Status Matrix & Ground Reality Guide */}
          {scheme.slug === 'bihar-mukhyamantri-kanya-utthan-yojana' && (
            <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-pink-200 dark:border-pink-900/60 shadow-sm space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                    <span>{isHi ? 'मेधासॉफ्ट (Medhasoft) एप्लीकेशन स्टेटस, PFMS कोड व समाधान' : 'Medhasoft Application Status Meaning, PFMS Codes & Resolution'}</span>
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {isHi ? 'यूनिवर्सिटी अप्रूवल से लेकर बैंक खाते में ₹50,000 क्रेडिट होने के हर चरण की स्थिति व समाधान' : 'Decoding each stage from university approval to final ₹50,000 credit in bank account'}
                  </p>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 bg-pink-100 dark:bg-pink-950/60 text-pink-800 dark:text-pink-300 font-bold text-xs rounded-full">
                  {isHi ? '100% डीबीटी भुगतान' : '100% Direct DBT'}
                </span>
              </div>

              {/* Status Meaning Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                      <th className="py-2.5 px-3">{isHi ? 'पोर्टल स्टेटस (Portal Status)' : 'Portal Status Message'}</th>
                      <th className="py-2.5 px-3">{isHi ? 'वास्तविक स्थिति (Meaning)' : 'Meaning / Current Stage'}</th>
                      <th className="py-2.5 px-3">{isHi ? 'अनुमानित समय' : 'Estimated Time'}</th>
                      <th className="py-2.5 px-3">{isHi ? 'छात्रा को क्या करना होगा? (Action Required)' : 'Action Required by Student'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-amber-600 dark:text-amber-400">
                        Waiting for Approval by University / College
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'कॉलेज या यूनिवर्सिटी द्वारा डिग्री मार्कशीट और रजिस्ट्रेशन नंबर का मिलान जारी है।' : 'University/College is cross-verifying degree marks and registration records.'}
                      </td>
                      <td className="py-2.5 px-3">15 – 30 {isHi ? 'दिन' : 'Days'}</td>
                      <td className="py-2.5 px-3 text-slate-600 dark:text-slate-400">
                        {isHi ? 'कुछ नहीं करना; यूनिवर्सिटी स्तर पर स्वतः सत्यापन होगा।' : 'No action needed; university approves master roll in tranches.'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-blue-600 dark:text-blue-400">
                        Pending at PFMS / Bank Verification
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'बैंक खाता संख्या, IFSC कोड और आधार नाम का PFMS व UIDAI से सत्यापन हो रहा है।' : 'PFMS and UIDAI are validating bank account name and Aadhaar seeding.'}
                      </td>
                      <td className="py-2.5 px-3">7 – 15 {isHi ? 'दिन' : 'Days'}</td>
                      <td className="py-2.5 px-3 text-slate-600 dark:text-slate-400">
                        {isHi ? 'सत्यापन के बाद रजिस्टर्ड मोबाइल पर User ID व Password SMS द्वारा आएगा।' : 'Wait for User ID & Password SMS once verified.'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-indigo-600 dark:text-indigo-400">
                        Ready for Payment
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'सभी स्तरों से जांच पूरी हो चुकी है। शिक्षा विभाग द्वारा वित्तीय स्वीकृति (Sanction) दी जा चुकी है।' : 'All verifications passed. Education Department has sanctioned fund file.'}
                      </td>
                      <td className="py-2.5 px-3">7 – 20 {isHi ? 'दिन' : 'Days'}</td>
                      <td className="py-2.5 px-3 text-slate-600 dark:text-slate-400">
                        {isHi ? 'फंड लॉट जारी होने का इंतजार करें, कोई दस्तावेज जमा नहीं करना है।' : 'Wait for batch fund clearance; no manual document submission.'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400">
                        Payment in Process
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'ट्रेजरी द्वारा PFMS के जरिए बैंक को भुगतान आदेश भेजा जा चुका है।' : 'Treasury has released payment advice through PFMS to RBI/Bank.'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400">3 – 7 {isHi ? 'कार्यदिवस' : 'Working Days'}</td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400">
                        {isHi ? '₹50,000 आपके बिहार स्थित बैंक खाते में क्रेडिट हो जाएंगे।' : '₹50,000 will be credited directly to your registered bank account.'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 bg-rose-50/40 dark:bg-rose-950/20">
                      <td className="py-2.5 px-3 font-bold text-rose-600 dark:text-rose-400">
                        Rejected by PFMS / Bank Name Mismatch
                      </td>
                      <td className="py-2.5 px-3 text-rose-900 dark:text-rose-300">
                        {isHi ? 'बैंक में आधार NPCI लिंक न होना, जॉइंट खाता होना या शाखा बिहार से बाहर होना।' : 'Bank account not NPCI Aadhaar seeded, joint account, or out-of-Bihar branch.'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-rose-600 dark:text-rose-400">{isHi ? 'तुरंत सुधारें' : 'Immediate Fix'}</td>
                      <td className="py-2.5 px-3 text-rose-800 dark:text-rose-300 font-semibold">
                        {isHi ? 'बिहार स्थित बैंक शाखा जाकर आधार DBT मैंडेट फॉर्म भरें और पोर्टल पर अपडेट करें।' : 'Visit Bihar home branch, submit NPCI DBT mandate form, re-verify.'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Crucial Ground Realities: Marital Status & Bank Mandate */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                <div className="p-3.5 rounded-xl bg-pink-50/80 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 text-pink-950 dark:text-pink-200 space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5 text-xs text-pink-900 dark:text-pink-300">
                    <Sparkles className="h-3.5 w-3.5 text-pink-600 shrink-0" />
                    <span>{isHi ? 'विवाहित बनाम अविवाहित पात्रता स्पष्टीकरण' : 'Marital Status Clarification (Married vs Unmarried)'}</span>
                  </div>
                  <p className="leading-relaxed">
                    {isHi
                      ? 'बिहार की छात्राओं में सबसे बड़ा भ्रम यह रहता है कि शादी हो जाने पर क्या पैसा मिलेगा? नियम स्पष्ट है: 12वीं पास (₹25,000) योजना में केवल अविवाहित छात्राएं पात्र हैं। लेकिन स्नातक पास (₹50,000) योजना में विवाहित और अविवाहित दोनों छात्राएं 100% पात्र हैं। विवाह होने के आधार पर स्नातक का आवेदन निरस्त नहीं किया जा सकता।'
                      : 'The biggest confusion among female students is whether married girls get the grant. The rule is unambiguous: For Class 12 (₹25,000), only UNMARRIED girls are eligible. However, for Graduation (₹50,000), BOTH married and unmarried women are 100% eligible. Marriage is never a ground for rejection in graduation.'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-950 dark:text-amber-200 space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5 text-xs text-amber-900 dark:text-amber-300">
                    <Info className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                    <span>{isHi ? 'बैंक शाखा बिहार में होना और एकल (Single) खाता अनिवार्य' : 'Bank Branch Inside Bihar & Sole Account Mandate'}</span>
                  </div>
                  <p className="leading-relaxed">
                    {isHi
                      ? 'मेधासॉफ्ट पर दो कारणों से सबसे ज्यादा आवेदन रिजेक्ट होते हैं: 1) माता-पिता या पति के साथ जॉइंट बैंक खाता देना। 2) बैंक शाखा बिहार राज्य के बाहर स्थित होना। आवेदन करने से पहले सुनिश्चित करें कि खाता केवल छात्रा के व्यक्तिगत नाम पर हो और शाखा बिहार में स्थित हो तथा आधार से NPCI डीबीटी लिंक्ड हो।'
                      : 'The top two causes for application rejection on Medhasoft are: 1) Providing joint accounts with parents/husband. 2) Bank branch located outside Bihar state. Always ensure the account is in the single name of the student, branch is in Bihar, and NPCI Aadhaar DBT mapping is active.'}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* UP Mukhyamantri Kanya Sumangala Yojana 6-Stage Matrix & Ground Reality Guide */}
          {scheme.slug === 'up-mukhyamantri-kanya-sumangala-yojana' && (
            <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-orange-200 dark:border-orange-900/60 shadow-sm space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    <span>{isHi ? 'कन्या सुमंगला योजना: संशोधित ₹25,000 की 6 किस्तें व पात्रता विवरण' : 'UP Kanya Sumangala: Enhanced ₹25,000 in 6 Milestone Stages & Eligibility'}</span>
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {isHi ? 'बालिका के जन्म से लेकर स्नातक/डिप्लोमा तक हर चरण की नई संशोधित राशि, समय सीमा व आवश्यक दस्तावेज' : 'Comprehensive breakdown of enhanced milestone tranches from birth to degree with claim limits'}
                  </p>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 bg-orange-100 dark:bg-orange-950/60 text-orange-800 dark:text-orange-300 font-bold text-xs rounded-full">
                  {isHi ? 'संशोधित ₹25,000 अनुदान' : 'Revised ₹25,000 Grant'}
                </span>
              </div>

              {/* 6 Stages Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                      <th className="py-2.5 px-3">{isHi ? 'चरण (Milestone Stage)' : 'Milestone Stage'}</th>
                      <th className="py-2.5 px-3">{isHi ? 'पात्रता मानदंड / शैक्षणिक स्तर' : 'Eligibility Benchmark'}</th>
                      <th className="py-2.5 px-3 font-bold text-orange-600 dark:text-orange-400">{isHi ? 'नई राशि (New)' : 'New Amount'}</th>
                      <th className="py-2.5 px-3 text-slate-400">{isHi ? 'पूर्व राशि' : 'Old Amount'}</th>
                      <th className="py-2.5 px-3">{isHi ? 'अनिवार्य दस्तावेज (Proof)' : 'Mandatory Proof'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'प्रथम चरण (Stage 1)' : 'Stage 1 (At Birth)'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'नवजात बालिका के जन्म पर (01-04-2019 के बाद जन्मी; 6 माह के भीतर आवेदन)' : 'Newborn girl child (born on/after 01-04-2019; claim within 6 months of birth)'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400">₹5,000</td>
                      <td className="py-2.5 px-3 text-slate-400 line-through">₹2,000</td>
                      <td className="py-2.5 px-3">{isHi ? 'जन्म प्रमाण पत्र, अस्पताल डिस्चार्ज स्लिप' : 'Birth Certificate, Hospital Discharge slip'}</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'द्वितीय चरण (Stage 2)' : 'Stage 2 (Immunization)'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? '1 वर्ष तक के पूर्ण टीकाकरण पर (2 वर्ष की आयु से पूर्व दावा अनिवार्य)' : 'Complete vaccination up to 1 year of age (claim before age 2)'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400">₹2,000</td>
                      <td className="py-2.5 px-3 text-slate-400 line-through">₹1,000</td>
                      <td className="py-2.5 px-3">{isHi ? 'एमसीपी कार्ड (MCP Card) / पूर्ण टीका कार्ड' : 'MCP Card / Complete Vaccination Record'}</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'तृतीय चरण (Stage 3)' : 'Stage 3 (Class 1)'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'मान्यता प्राप्त स्कूल में कक्षा 1 में विधिवत दाखिला लेने पर' : 'Admission into Class 1 in any recognized school'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400">₹3,000</td>
                      <td className="py-2.5 px-3 text-slate-400 line-through">₹2,000</td>
                      <td className="py-2.5 px-3">{isHi ? 'स्कूल प्रवेश प्रमाण पत्र, UDISE फीस रसीद' : 'Admission Certificate, UDISE Fee Receipt'}</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'चतुर्थ चरण (Stage 4)' : 'Stage 4 (Class 6)'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'मान्यता प्राप्त स्कूल में कक्षा 6 में प्रवेश लेने पर' : 'Admission into Class 6 in a recognized upper primary school'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400">₹3,000</td>
                      <td className="py-2.5 px-3 text-slate-400 line-through">₹2,000</td>
                      <td className="py-2.5 px-3">{isHi ? 'कक्षा 5 की अंकतालिका, कक्षा 6 प्रवेश रसीद' : 'Class 5 Marksheet, Class 6 Admission Receipt'}</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'पंचम चरण (Stage 5)' : 'Stage 5 (Class 9)'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'मान्यता प्राप्त हाई स्कूल में कक्षा 9 में नामांकन पर' : 'Enrollment in Class 9 in a recognized secondary school'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400">₹5,000</td>
                      <td className="py-2.5 px-3 text-slate-400 line-through">₹3,000</td>
                      <td className="py-2.5 px-3">{isHi ? 'कक्षा 8 की अंकतालिका, कक्षा 9 प्रवेश रसीद' : 'Class 8 Marksheet, Class 9 Admission Receipt'}</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 bg-orange-50/40 dark:bg-orange-950/20">
                      <td className="py-2.5 px-3 font-bold text-orange-600 dark:text-orange-400">
                        {isHi ? 'छठा चरण (Stage 6)' : 'Stage 6 (Degree/Diploma)'}
                      </td>
                      <td className="py-2.5 px-3 font-medium">
                        {isHi ? '12वीं उत्तीर्ण कर स्नातक या कम से कम 2 वर्षीय डिप्लोमा कोर्स में दाखिला' : 'Class 12 passed & admitted in undergraduate degree or 2-year diploma'}
                      </td>
                      <td className="py-2.5 px-3 font-extrabold text-orange-600 dark:text-orange-400 text-sm">₹7,000</td>
                      <td className="py-2.5 px-3 text-slate-400 line-through">₹5,000</td>
                      <td className="py-2.5 px-3">{isHi ? '12वीं मार्कशीट, कॉलेज फीस रसीद व आईडी कार्ड' : '12th Marksheet, College Fee Receipt & ID Card'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Crucial Ground Realities: Affidavit & Bank Rules */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                <div className="p-3.5 rounded-xl bg-orange-50/80 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 text-orange-950 dark:text-orange-200 space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5 text-xs text-orange-900 dark:text-orange-300">
                    <Sparkles className="h-3.5 w-3.5 text-orange-600 shrink-0" />
                    <span>{isHi ? 'शपथ पत्र (Affidavit) व आय प्रमाण पत्र का सही नियम' : 'Affidavit & Income Certificate Format Rules'}</span>
                  </div>
                  <p className="leading-relaxed">
                    {isHi
                      ? 'अभिभावकों को कचहरी से महंगा स्टाम्प पेपर बनवाने की आवश्यकता नहीं होती। mksy.up.gov.in पोर्टल पर निर्धारित स्व-घोषणा पत्र (Self-Declaration) प्रारूप उपलब्ध है, जिस पर अभिभावक के हस्ताक्षर व आधार विवरण मान्य होते हैं। परिवार का आय प्रमाण पत्र तहसीलदार द्वारा जारी होना चाहिए और वह 3 वर्ष से अधिक पुराना नहीं होना चाहिए।'
                      : 'Parents do not require expensive notary/court stamp papers. The standardized self-declaration format available on mksy.up.gov.in signed by the parent is officially valid. The family income certificate must be issued by the Tehsildar and must not be older than 3 years.'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-950 dark:text-amber-200 space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5 text-xs text-amber-900 dark:text-amber-300">
                    <Info className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                    <span>{isHi ? 'बैंक खाता अपलोड नियम (चरण 1-4 vs चरण 5-6)' : 'Bank Passbook Upload Mandate (Stages 1-4 vs 5-6)'}</span>
                  </div>
                  <p className="leading-relaxed">
                    {isHi
                      ? 'चरण 1 से 4 (जन्म से कक्षा 6 तक) में माता का बैंक खाता सबसे पहली प्राथमिकता है (माता न होने पर पिता का खाता)। लेकिन कक्षा 9 (चरण 5) और स्नातक/डिप्लोमा (चरण 6) में बैंक खाता अनिवार्य रूप से छात्रा के नाम पर (एकल खाता या माता/पिता के साथ संयुक्त) होना चाहिए और आधार से NPCI डीबीटी लिंक्ड होना चाहिए।'
                      : 'For Stages 1 through 4 (Birth to Class 6), the mother\'s bank account is mandatory (father\'s account only if mother is deceased). For Class 9 (Stage 5) and College/Diploma (Stage 6), the bank account MUST be in the student\'s name (sole or joint with parents) and mapped with NPCI Aadhaar DBT.'}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Majhi Ladki Bahin Yojana Installment Calendar, Status & Hamipatra Guide */}
          {scheme.slug === 'maharashtra-ladki-bahin-yojana' && (
            <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-rose-200 dark:border-rose-900/60 shadow-sm space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                    <span>{isHi ? 'माझी लाडकी बहीण योजना: दरमहा ₹1,500 हप्ता, यादी व हमीपत्र तपशील' : 'Majhi Ladki Bahin: ₹1,500 Monthly Installment, List & Hamipatra Guide'}</span>
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {isHi ? 'हप्ता जमा होण्याची तारीख, ॲप्लिकेशन स्टेटसचे अर्थ, हमीपत्र नियम व पैसे न येण्याचे कारण' : 'Installment credit calendar, application status meanings, Hamipatra rules & troubleshooting'}
                  </p>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 font-bold text-xs rounded-full">
                  {isHi ? 'दरमहा ₹1,500 DBT' : '₹1,500 Monthly DBT'}
                </span>
              </div>

              {/* Status and Parameters Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                      <th className="py-2.5 px-3">{isHi ? 'तपशील / घटक (Parameter)' : 'Parameter'}</th>
                      <th className="py-2.5 px-3">{isHi ? 'अधिकृत नियम / स्थिती (Rule / Status)' : 'Official Rule / Status'}</th>
                      <th className="py-2.5 px-3">{isHi ? 'लाभार्थी महिलांसाठी सूचना (Important Guidance)' : 'Guidance for Beneficiaries'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'मासिक आर्थिक सहाय्य (हप्ता)' : 'Monthly Grant (Installment)'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400">
                        ₹1,500 {isHi ? 'दरमहा (वार्षिक ₹18,000)' : 'Per Month (₹18,000/yr)'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'दर महिन्याच्या 10 ते 15 तारखेदरम्यान थेट आधार-लिंक्ड बँक खात्यात जमा होतो।' : 'Credited between the 10th and 15th of each month directly via Aadhaar DBT.'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'रेशन कार्ड व उत्पन्नाचा दाखला' : 'Ration Card & Income Proof'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'पिवळे (Yellow) किंवा केशरी (Orange) रेशन कार्ड' : 'Yellow or Orange Ration Card'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'स्वतंत्र उत्पन्नाच्या दाखल्याची गरज नाही; रेशन कार्ड हाच उत्पन्नाचा वैध पुरावा मानला जातो।' : 'No separate income certificate required; ration card serves as valid income proof.'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'हमीपत्र (Hamipatra Format)' : 'Hamipatra (Self-Declaration)'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-blue-600 dark:text-blue-400">
                        {isHi ? 'साध्या कागदावरील 1 पानाचे स्व-घोषणापत्र' : '1-Page Simple Self-Declaration'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'कोर्टाच्या स्टॅम्प पेपरची गरज नाही; पोर्टलवरून मोफत डाऊनलोड करून सही करून अपलोड करावे।' : 'No court stamp or notary needed; download free, sign by hand, and upload.'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400">
                        {isHi ? 'स्टेटस: Approved (मंजूर)' : 'Status: Approved'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'अर्जाची सर्व छाननी यशस्वीपणे पूर्ण' : 'Scrutiny passed and bank active'}
                      </td>
                      <td className="py-2.5 px-3 text-emerald-700 dark:text-emerald-300 font-medium">
                        {isHi ? 'नियमित ₹1,500 हप्ता सुरू आहे; कोणत्याही ऑफिसमध्ये जाण्याची गरज नाही।' : 'Active beneficiary; monthly ₹1,500 credited automatically.'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-amber-600 dark:text-amber-400">
                        {isHi ? 'स्टेटस: Pending (प्रलंबित)' : 'Status: Pending'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'अंगणवाडी/तालुका स्तरावर कागदपत्रांची पडताळणी सुरू' : 'Verification underway at Taluka committee'}
                      </td>
                      <td className="py-2.5 px-3 text-slate-600 dark:text-slate-400">
                        {isHi ? 'काही दिवस प्रतीक्षा करा; पडताळणी पूर्ण होताच स्टेटस मंजूर होईल।' : 'Wait a few days; approval updates once committee validates data.'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 bg-rose-50/40 dark:bg-rose-950/20">
                      <td className="py-2.5 px-3 font-bold text-rose-600 dark:text-rose-400">
                        {isHi ? 'स्टेटस: Disapproved / Rejected (नामंजूर)' : 'Status: Disapproved / Rejected'}
                      </td>
                      <td className="py-2.5 px-3 text-rose-900 dark:text-rose-300">
                        {isHi ? 'त्रुटी किंवा अपात्रतेचे कारण (उदा. चारचाकी वाहन किंवा अस्पष्ट कागदपत्र)' : 'Rejection reason shown on portal'}
                      </td>
                      <td className="py-2.5 px-3 text-rose-800 dark:text-rose-300 font-semibold">
                        {isHi ? 'पोर्टलवर "Edit" पर्यायावर जाऊन कागदपत्रांची दुरुस्ती करून पुन्हा सबमिट करा।' : 'Click "Edit" on portal, correct discrepancies, and re-submit.'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Crucial Ground Realities: NPCI Aadhaar Seeding & 4-Wheeler Rules */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                <div className="p-3.5 rounded-xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-rose-950 dark:text-rose-200 space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5 text-xs text-rose-900 dark:text-rose-300">
                    <Sparkles className="h-3.5 w-3.5 text-rose-600 shrink-0" />
                    <span>{isHi ? 'अर्ज मंजूर असूनही ₹1,500 हप्ता न येण्याचे कारण व उपाय' : 'Why ₹1,500 Installment Fails Despite "Approved" Status'}</span>
                  </div>
                  <p className="leading-relaxed">
                    {isHi
                      ? 'अर्ज मंजूर असूनही पैसे न येण्याचे 95% कारण बँकेत आधार NPCI डीबीटी (Aadhaar Seeding) सक्रिय नसणे हे असते। सरकार पैसे थेट आधार क्रमांकाद्वारे पाठवते, खाते क्रमांकाने नाही। तात्काळ आपल्या बँकेच्या शाखेत जाऊन "Aadhaar DBT Mandate Form" भरून द्या। बँक मॅपिंग सक्रिय होताच रखडलेले सर्व हप्ते खात्यात जमा होतात।'
                      : '95% of payment failures occur because the bank account lacks active NPCI Aadhaar DBT mapping. Government funds are routed via Aadhaar DBT, not standard IFSC account transfers. Visit your home bank branch, submit an "Aadhaar DBT Mandate Form", and once mapped, all pending tranches will credit.'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-950 dark:text-amber-200 space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5 text-xs text-amber-900 dark:text-amber-300">
                    <Info className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                    <span>{isHi ? 'चारचाकी वाहन (कार/जीप) व ट्रॅक्टरचा नियम' : 'Four-Wheeler vs Agricultural Tractor Rule'}</span>
                  </div>
                  <p className="leading-relaxed">
                    {isHi
                      ? 'नियमानुसार कुटुंबाच्या नावावर चारचाकी वाहन (कार, जीप, एसयूव्ही किंवा टॅक्सी) नोंदणीकृत असल्यास अपात्र मानले जाते। परंतु, शेतीसाठी वापरला जाणारा ट्रॅक्टर (Tractor) यातून पूर्णपणे वगळण्यात आला आहे। कुटुंबात ट्रॅक्टर असूनही अर्ज नामंजूर झाला असल्यास ग्रीव्हन्स टाकून ट्रॅक्टर आरसी बुक अपलोड करा।'
                      : 'Families owning personal four-wheelers (cars, SUVs, commercial taxis) are ineligible. However, agricultural tractors are explicitly exempted. If an application was mistakenly rejected for owning a tractor, submit a grievance attaching the tractor RC.'}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* MP Mukhyamantri Ladli Behna Yojana Installment Calendar, Status & Samagra e-KYC Guide */}
          {scheme.slug === 'ladli-behna-yojana-madhya-pradesh' && (
            <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-teal-200 dark:border-teal-900/60 shadow-sm space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    <span>{isHi ? 'मुख्यमंत्री लाड़ली बहना योजना (MP): ₹1,250 मासिक किस्त, 3rd राउंड आवेदन व समग्र ई-केवाईसी गाइड' : 'MP Ladli Behna: ₹1,250 Monthly Installment, 3rd Round Camps & Samagra e-KYC Guide'}</span>
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {isHi ? 'हर माह 10 तारीख को किस्त ट्रांसफर, समग्र आईडी से अंतिम सूची व स्टेटस चेक, ₹450 गैस सिलेंडर सब्सिडी एवं समस्या समाधान' : '10th of every month installment calendar, antim suchi name check via Samagra ID, ₹450 LPG subsidy & troubleshooting'}
                  </p>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 font-bold text-xs rounded-full">
                  {isHi ? 'हर माह ₹1,250 DBT' : '₹1,250 Monthly DBT'}
                </span>
              </div>

              {/* Status and Parameters Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                      <th className="py-2.5 px-3">{isHi ? 'घटक / विषय (Parameter)' : 'Parameter'}</th>
                      <th className="py-2.5 px-3">{isHi ? 'नियम व ताज़ा स्थिति (Official Rule / Status)' : 'Official Rule / Status'}</th>
                      <th className="py-2.5 px-3">{isHi ? 'लाड़ली बहनों के लिए आवश्यक दिशानिर्देश (Crucial Guidance)' : 'Guidance for Beneficiaries'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'मासिक आर्थिक सहायता (किस्त कैलेंडर)' : 'Monthly Grant (Installment Calendar)'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-teal-600 dark:text-teal-400">
                        ₹1,250 {isHi ? 'प्रति माह (हर माह 10 तारीख)' : 'Per Month (10th of every month)'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'हर माह की 10 तारीख को बैंक खाते में सीधे ट्रांसफर। त्योहारों (जैसे रक्षाबंधन) पर अग्रिम भुगतान या अतिरिक्त बोनस भी मिलता है। सरकार का आगामी लक्ष्य इसे ₹3,000/माह करना है।' : 'Direct Aadhaar DBT transfer on the 10th of each month. Advanced or bonus payments during festive seasons. Target escalation up to ₹3,000/month.'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'तीसरा चरण नया आवेदन (3rd Round)' : '3rd Round New Applications'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'ग्राम पंचायत व वार्ड कैंप्स (ऑनलाइन घर बैठे नहीं)' : 'In-Person Panchayat & Ward Camps'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'आवेदन केवल अधिकृत ग्राम पंचायत या आंगनवाड़ी कैंप में लाइव फोटो खींचकर जमा होता है। फॉर्म भरने के बाद पावती पर्ची (Acknowledgement Slip) अवश्य लें।' : 'Registrations require in-person camp attendance with live webcam photo. Do not fall for unauthorized private mobile apps or cyber cafe scams.'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'समग्र आईडी व ई-केवाईसी (Samagra Mandate)' : 'Samagra ID & e-KYC Mandate'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-emerald-600 dark:text-emerald-400">
                        {isHi ? '9 अंकों की सदस्य समग्र आईडी में आधार ई-केवाईसी अनिवार्य' : 'Aadhaar e-KYC on 9-digit Samagra ID'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'samagra.gov.in पर समग्र-आधार लिंक स्थिति जांचें। नाम, जन्मतिथि और पिता/पति के नाम में अंतर होने पर पहले समग्र में सुधार कराएं, तभी फॉर्म स्वीकार होगा।' : 'Verify Samagra-Aadhaar linking at samagra.gov.in. Any discrepancy between Aadhaar and Samagra records must be corrected prior to application.'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'अंतिम सूची व स्टेटस चेक (Antim Suchi)' : 'Antim Suchi & Status Check'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'cmladlibahna.mp.gov.in पर सार्वजनिक सूची' : 'Public List on Official Portal'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'पोर्टल पर "अंतिम सूची" मेनू में जिला, तहसील, ग्राम पंचायत या वार्ड चुनकर पूरे गांव की स्वीकृत बहनों की सूची बिना किसी पासवर्ड के पीडीएफ में देख सकते हैं।' : 'Access full village/ward beneficiary lists under "अंतिम सूची" on cmladlibahna.mp.gov.in without requiring login credentials.'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? '₹450 घरेलू एलपीजी गैस सिलेंडर (LPG Subsidy)' : '₹450 Domestic LPG Cylinder Refill'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-amber-600 dark:text-amber-400">
                        {isHi ? 'उज्ज्वला व गैर-उज्ज्वला पात्र लाड़ली बहनें' : 'PMUY & Non-PMUY Eligible Women'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'जिन लाड़ली बहनों के नाम गैस कनेक्शन है, उन्हें ₹450 में सिलेंडर मिलता है। अपनी 17 अंकों की एलपीजी उपभोक्ता आईडी को पोर्टल पर लिंक कराएं; सब्सिडी सीधे खाते में आती है।' : 'Beneficiaries with LPG connection in their own name pay net ₹450. Link 17-digit LPG ID with Ladli Behna portal; subsidy differential is credited via DBT.'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'चारपहिया वाहन vs कृषि ट्रैक्टर नियम' : 'Four-Wheeler vs Agricultural Tractor'}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">
                        {isHi ? 'कार/जीप अपात्र, 1 ट्रैक्टर की पूर्ण छूट' : 'Cars Ineligible, 1 Tractor Permitted'}
                      </td>
                      <td className="py-2.5 px-3">
                        {isHi ? 'परिवार के पास चारपहिया वाहन (कार, टैक्सी) होने पर अपात्र माना जाता है, लेकिन 1 कृषि ट्रैक्टर रखने वाले परिवारों को योजना में पात्र घोषित किया गया है।' : 'Owning personal four-wheelers (cars, SUVs, commercial taxis) disqualifies, but households owning one agricultural tractor are explicitly eligible.'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Crucial Ground Realities: Single Account Mandate & Samagra e-KYC DBT Check */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                <div className="p-3.5 rounded-xl bg-teal-50/80 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 text-teal-950 dark:text-teal-200 space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5 text-xs text-teal-900 dark:text-teal-300">
                    <Sparkles className="h-3.5 w-3.5 text-teal-600 shrink-0" />
                    <span>{isHi ? 'एकल (Single) बैंक खाता अनिवार्य — संयुक्त खाते (Joint Accounts) में किस्त क्यों रुकती है?' : 'Single Bank Account Mandate — Joint Account Rejection Warning'}</span>
                  </div>
                  <p className="leading-relaxed">
                    {isHi
                      ? 'लाड़ली बहना योजना की ₹1,250 की किस्त केवल महिला के स्वयं के नाम वाले एकल (Individual) बैंक खाते में ही भेजी जाती है। यदि खाता पति या परिवार के किसी अन्य सदस्य के साथ संयुक्त (Joint) है, तो पीएफएमएस और एनपीसीआई डीबीटी क्लियरिंग सिस्टम लेनदेन को निरस्त कर देता है। समाधान: किसी भी बैंक या पोस्ट ऑफिस (IPPB) में नया एकल शून्य-शेष खाता खुलवाकर तुरंत आधार डीबीटी सीडिंग फॉर्म जमा करें।'
                      : 'The ₹1,250 monthly installment is cleared solely into an individual (single) account in the applicant\'s own name. Joint accounts shared with spouses or family members fail DBT clearing due to name-mismatch validations. Open an individual zero-balance account (e.g. at IPPB or any public bank) and enable NPCI Aadhaar DBT mapping immediately.'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-950 dark:text-amber-200 space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5 text-xs text-amber-900 dark:text-amber-300">
                    <Info className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                    <span>{isHi ? 'समग्र ई-केवाईसी और डीबीटी सक्रियता (DBT Inactive) कैसे जांचें?' : 'How to Check Samagra e-KYC & Bank DBT Status'}</span>
                  </div>
                  <p className="leading-relaxed">
                    {isHi
                      ? 'किस्त रुकने का 90% कारण बैंक में डीबीटी इनएक्टिव होना या समग्र में आधार लिंक न होना होता है। samagra.gov.in पर "ई-केवाईसी स्थिति जानें" में अपनी 9 अंकों की समग्र आईडी दर्ज करके जांचें कि: (1) समग्र में आधार: हाँ, (2) बैंक में आधार: हाँ, और (3) डीबीटी सक्रिय स्थिति: हाँ। यदि कोई भी स्टेटस "नहीं" दिखे, तो तुरंत बैंक शाखा या एमपी ऑनलाइन कियोस्क पर संपर्क करें।'
                      : 'Over 90% of payment failures stem from inactive Aadhaar DBT seeding or missing Samagra linkage. On samagra.gov.in, check "Know e-KYC Status" using your 9-digit member ID. Confirm that Aadhaar linkage, Bank linkage, and DBT status all reflect "Yes". If any is marked "No", submit an Aadhaar DBT mandate at your home bank branch immediately.'}
                  </p>
                </div>
              </div>
            </section>
          )}

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
              <Link
                href={`${prefix}/checker?scheme=${scheme.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-emerald-950 dark:text-emerald-100 bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950/80 dark:hover:bg-emerald-900/80 border border-emerald-400 dark:border-emerald-700 transition-colors cursor-pointer shadow-xs"
              >
                <img
                  src="/icons/more_icons/guarantee.svg"
                  alt=""
                  className="h-5 w-5 object-contain shrink-0"
                  aria-hidden="true"
                />
                <span>{isHi ? 'क्या आप पात्र हैं? अपनी पात्रता तुरंत जांचें →' : 'Are You Eligible? Test Your Eligibility Now →'}</span>
              </Link>
            </div>
          </section>

          {/* Required Documents (Interactive Checkbox List) */}
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <FileText className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  <span>{isHi ? 'आवश्यक दस्तावेज चेकलिस्ट' : 'Required Documents Checklist'}</span>
                </h2>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {isHi ? 'तैयार दस्तावेजों पर टिक करें या CSC / साइबर कैफे हेतु पर्ची प्रिंट करें' : 'Click to check off prepared documents or print slip for CSC / cyber cafe'}
                </span>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => setSlipModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-all hover:shadow cursor-pointer"
                  title={isHi ? 'दस्तावेज़ पर्ची A4 प्रिंट करें या पीडीएफ सेव करें' : 'Print Document Slip or Save as PDF'}
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>{isHi ? 'दस्तावेज़ पर्ची प्रिंट / PDF' : 'Print / Download Slip'}</span>
                </button>
              </div>
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
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {(isHi ? scheme.statusCheckGuide_hi : scheme.statusCheckGuide_en)
                ?.split('\n\n')
                .filter(Boolean)
                .map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
            </div>
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

          {/* Community Channel Alert Box */}
          <CommunityCallout lang={isHi ? 'hi' : 'en'} variant="card" />

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

          {/* Related Official Guides & PDF Forms (Internal Linking) */}
          {relevantArticles.length > 0 && (
            <section className="bg-gradient-to-r from-emerald-50/70 via-teal-50/40 to-slate-50 dark:from-slate-900 dark:via-emerald-950/20 dark:to-slate-900 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800/80 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    {isHi ? 'संबंधित आधिकारिक गाइड्स व डाउनलोड प्रपत्र' : 'Related Official Guides & PDF Forms'}
                  </h2>
                </div>
                <Link
                  href={isHi ? '/hi/articles' : '/articles'}
                  className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>{isHi ? 'सभी गाइड्स' : 'All Guides'}</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {relevantArticles.map((art) => (
                  <Link
                    key={art.id}
                    href={isHi ? `/hi/articles/${art.slug}` : `/articles/${art.slug}`}
                    className="group p-4 rounded-xl bg-white dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 hover:border-emerald-500/60 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                          {isHi ? art.categoryLabel_hi : art.categoryLabel_en}
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <Clock className="h-2.5 w-2.5" />
                          {isHi ? art.readTime_hi : art.readTime_en}
                        </span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 line-clamp-2 transition-colors">
                        {isHi ? art.title_hi : art.title_en}
                      </h3>
                      <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2">
                        {isHi ? art.summary_hi : art.summary_en}
                      </p>
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                      <span>{isHi ? 'गाइड व फॉर्म डाउनलोड करें' : 'Read Guide & Download PDF'}</span>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
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

      <DocumentSlipModal
        isOpen={slipModalOpen}
        onClose={() => setSlipModalOpen(false)}
        scheme={scheme}
        isHi={isHi}
        checkedDocs={checkedDocs}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        lang={lang}
        onSelectScheme={(s) => {
          setSearchModalOpen(false);
          const prefix = isHi ? '/hi' : '';
          router.push(`${prefix}/schemes/${s.slug}`);
        }}
        onSelectUpdate={() => {
          setSearchModalOpen(false);
          const prefix = isHi ? '/hi' : '';
          router.push(prefix || '/');
        }}
        allSchemes={SCHEMES}
      />
    </div>
  );
}
