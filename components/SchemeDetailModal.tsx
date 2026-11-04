'use client';

import React, { useState } from 'react';
import { Scheme, Language } from '@/types';
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  FileText,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Building,
  CheckSquare,
  Square,
  Share2,
  Check
} from 'lucide-react';
import AdBannerSlot from '@/components/AdBannerSlot';

interface SchemeDetailModalProps {
  scheme: Scheme;
  lang: Language;
  onClose: () => void;
  onSelectScheme: (scheme: Scheme) => void;
  allSchemes: Scheme[];
  onOpenChecker?: () => void;
  onCheckEligibility?: (scheme: Scheme) => void;
}

export default function SchemeDetailModal({
  scheme,
  lang,
  onClose,
  onSelectScheme,
  allSchemes,
  onOpenChecker,
  onCheckEligibility
}: SchemeDetailModalProps) {
  const isHi = lang === 'hi';
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const toggleDoc = (index: number) => {
    setCheckedDocs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleShare = () => {
    const url = `https://janlabh.in/schemes/${scheme.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const relatedSchemes = allSchemes
    .filter(s => s.id !== scheme.id && (s.category === scheme.category || s.state === scheme.state))
    .slice(0, 3);

  const docsList = isHi ? scheme.requiredDocuments_hi : scheme.requiredDocuments_en;
  const faqsList = isHi ? scheme.faqs_hi : scheme.faqs_en;
  const problemsList = isHi ? scheme.commonProblems_hi : scheme.commonProblems_en;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm p-3 sm:p-6 lg:p-8 flex justify-center">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto transition-colors duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="scheme-modal-title"
      >
        {/* Top Sticky Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 px-5 py-3.5 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 truncate">
            <span className="font-semibold text-slate-900 dark:text-white">{isHi ? scheme.stateLabel_hi : scheme.stateLabel_en}</span>
            <span>/</span>
            <span className="truncate">{isHi ? scheme.shortTitle_hi : scheme.shortTitle_en}</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
              title="Share Scheme Guide"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> : <Share2 className="h-3.5 w-3.5 text-slate-600 dark:text-slate-400" />}
              <span>{copied ? (isHi ? 'लिंक कॉपी हुआ' : 'Link Copied') : (isHi ? 'शेयर करें' : 'Share')}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors focus:outline-none"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Follows PRD §12 Master Template */}
        <div className="px-5 py-6 sm:px-8 sm:py-8 space-y-8 max-h-[85vh] overflow-y-auto">
          
          {/* Header section with Breadcrumb & Single Primary H1 */}
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2 mb-2">
              <span>JanLabh</span>
              <span>·</span>
              <span>{isHi ? scheme.stateLabel_hi : scheme.stateLabel_en}</span>
              <span>·</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {isHi ? `सत्यापित: ${scheme.lastVerified}` : `Verified: ${scheme.lastVerified}`}
              </span>
            </div>

            {/* Exact Single Primary H1 (§12.3) */}
            <h1 id="scheme-modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-snug">
              {isHi ? scheme.title_hi : scheme.title_en}
            </h1>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {isHi ? scheme.metaDescription_hi : scheme.metaDescription_en}
            </p>
          </div>

          {/* §12.4 Quick Answer Box (Near top) */}
          <section aria-labelledby="quick-answer-title" className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 overflow-hidden">
            <div className="bg-slate-900 dark:bg-slate-800 px-4 py-2.5 text-white flex items-center justify-between">
              <h2 id="quick-answer-title" className="text-xs font-bold uppercase tracking-wider">
                {isHi ? 'त्वरित सारांश (Quick Answer Box)' : 'Quick Answer Summary'}
              </h2>
              <span className="text-[11px] font-mono text-slate-300 dark:text-slate-400">
                {isHi ? 'आधिकारिक स्रोत सत्यापित' : 'Gov Verified'}
              </span>
            </div>
            <div className="divide-y divide-slate-200 dark:divide-slate-800 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 gap-2">
                <span className="font-semibold text-slate-700 dark:text-slate-300">{isHi ? 'मुख्य लाभ' : 'Benefit Details'}</span>
                <span className="sm:col-span-2 text-slate-900 dark:text-white font-medium">
                  {isHi ? scheme.benefitAmount_hi : scheme.benefitAmount_en} – {isHi ? scheme.benefitSummary_hi : scheme.benefitSummary_en}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 gap-2">
                <span className="font-semibold text-slate-700 dark:text-slate-300">{isHi ? 'पात्र आवेदक' : 'Who Can Apply'}</span>
                <span className="sm:col-span-2 text-slate-900 dark:text-slate-200">
                  {isHi ? scheme.whoCanApply_hi : scheme.whoCanApply_en}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 gap-2">
                <span className="font-semibold text-slate-700 dark:text-slate-300">{isHi ? 'आवेदन का माध्यम' : 'Application Mode'}</span>
                <span className="sm:col-span-2 text-slate-900 dark:text-slate-200 font-medium">
                  {scheme.applicationMode}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 gap-2">
                <span className="font-semibold text-slate-700 dark:text-slate-300">{isHi ? 'स्थिति व अंतिम सत्यापन' : 'Status & Last Verified'}</span>
                <span className="sm:col-span-2 text-slate-900 dark:text-slate-200">
                  {scheme.status} · {scheme.lastVerified}
                </span>
              </div>
            </div>
          </section>

          {/* §12.5 What is this Scheme? */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {isHi ? 'यह योजना क्या है?' : 'What Is This Scheme?'}
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {isHi ? scheme.whatIsThis_hi : scheme.whatIsThis_en}
            </p>
          </section>

          {/* §12.6 Benefits */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {isHi ? 'योजना के प्रमुख लाभ (Benefits)' : 'Detailed Scheme Benefits'}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {(isHi ? scheme.benefitsList_hi : scheme.benefitsList_en).map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* AdSense-compliant Respectful Placement (§41, §42: after substantial intro, between sections) */}
          <AdBannerSlot lang={lang} format="in-article" />

          {/* §12.7 Eligibility (Separated strictly: You may be eligible vs You may not) */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {isHi ? 'पात्रता व अपात्रता के नियम' : 'Eligibility Criteria & Official Exclusions'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isHi 
                ? 'ध्यान दें: अंतिम पात्रता निर्धारण संबंधित सरकारी विभाग व राजस्व जांच के अधीन है।' 
                : 'Note: Potential qualification is indicative based on gazette criteria. Final approval rests with the designated government authority.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* You May Be Eligible If */}
              <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/40 dark:bg-emerald-950/20 p-4 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{isHi ? 'आप पात्र हो सकते हैं यदि:' : 'You May Be Eligible If:'}</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                  {(isHi ? scheme.eligibility.eligibleIf_hi : scheme.eligibility.eligibleIf_en).map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold shrink-0">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* You May Not Be Eligible If */}
              <div className="rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50/40 dark:bg-rose-950/20 p-4 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-300">
                  <AlertCircle className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                  <span>{isHi ? 'आप पात्र नहीं हैं यदि (अपवर्जन):' : 'You May Not Be Eligible If (Exclusions):'}</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                  {(isHi ? scheme.eligibility.notEligibleIf_hi : scheme.eligibility.notEligibleIf_en).map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-700 dark:text-rose-400 font-bold shrink-0">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specific Scheme Eligibility Checker CTA (PRD Part 2 Entry Point Option 1) */}
            <div className="rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50/70 dark:bg-amber-950/40 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{isHi ? 'क्या आप जानना चाहते हैं कि आप पात्र हैं?' : 'Wondering if you may qualify?'}</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {isHi 
                    ? `इस योजना के प्रकाशित नियमों के अनुसार 4-5 सरल प्रश्नों में अपनी संभावित योग्यता जांचें।`
                    : `Check your profile directly against the official published criteria for ${scheme.shortTitle_en}.`}
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  if (onCheckEligibility) {
                    onCheckEligibility(scheme);
                  } else if (onOpenChecker) {
                    onOpenChecker();
                  }
                }}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-slate-950 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shadow-sm flex items-center gap-1.5 shrink-0"
              >
                <span>
                  {isHi 
                    ? `जांचें: ${scheme.shortTitle_hi} पात्रता →` 
                    : `Check ${scheme.shortTitle_en} Eligibility →`}
                </span>
              </button>
            </div>
          </section>

          {/* §12.8 Required Documents Checklist (Interactive) */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {isHi ? 'आवश्यक दस्तावेजों की चेकलिस्ट' : 'Required Documents Checklist'}
              </h2>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {isHi ? 'कागजात तैयार करने के लिए टिक करें' : 'Click to tick prepared documents'}
              </span>
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
              {docsList.map((doc, idx) => {
                const isChecked = !!checkedDocs[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleDoc(idx)}
                    className="flex items-start gap-3 p-3.5 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer transition-colors"
                  >
                    {isChecked ? (
                      <CheckSquare className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <Square className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                    )}
                    <span className={`text-xs ${isChecked ? 'text-slate-400 dark:text-slate-500 line-through' : 'text-slate-800 dark:text-slate-200'}`}>
                      {doc}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* §12.9 How to Apply (Step-by-step) */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {isHi ? 'आवेदन कैसे करें (चरणबद्ध प्रक्रिया)' : 'Step-by-Step How to Apply'}
            </h2>
            <div className="space-y-2.5">
              {(isHi ? scheme.howToApply_hi : scheme.howToApply_en).map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 dark:bg-amber-600 text-white font-mono text-[11px] font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* §12.11 Status Checking Guide */}
          <section className="rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 p-4 space-y-3">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Building className="h-4 w-4 text-amber-700 dark:text-amber-400" />
              <span>{isHi ? 'आधिकारिक स्थिति (Status) जांचने का तरीका' : 'How to Check Official Status'}</span>
            </h2>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {isHi ? scheme.statusCheckGuide_hi : scheme.statusCheckGuide_en}
            </p>
            <div className="pt-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <span className="text-[11px] text-amber-900 dark:text-amber-300 font-medium">
                {isHi ? '⚠️ सुरक्षा चेतावनी: कभी भी अपना पासवर्ड या बैंक ओटीपी किसी अनधिकृत व्यक्ति को न दें।' : '⚠️ Security Warning: Never disclose passwords or bank OTPs to third parties.'}
              </span>
              {scheme.officialStatusUrl && (
                <a
                  href={scheme.officialStatusUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-amber-600 text-white text-xs font-semibold hover:bg-slate-800 dark:hover:bg-amber-500 transition-colors"
                >
                  <span>{isHi ? 'आधिकारिक पोर्टल पर स्टेटस देखें' : 'Visit Official Status Page'}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </section>

          {/* §12.12 Common Problems & Solutions */}
          {problemsList.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {isHi ? 'सामान्य समस्याएं व प्रमाणित समाधान' : 'Common Application Issues & Solutions'}
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {problemsList.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1">
                    <div className="text-xs font-bold text-rose-800 dark:text-rose-400 flex items-center gap-1.5">
                      <AlertCircle className="h-3.5 w-3.5" />
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

          {/* §12.13 FAQ Accordion */}
          {faqsList.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {isHi ? 'अक्सर पूछे जाने वाले सवाल (FAQs)' : 'Frequently Asked Questions (FAQs)'}
              </h2>
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                {faqsList.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div key={idx} className="p-3.5">
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="flex w-full items-center justify-between text-left text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                      >
                        <span>{faq.q}</span>
                        <span className="text-slate-400 font-mono text-sm ml-2">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-2">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* §12.14 Official Sources Box (Mandatory for every scheme) */}
          <section className="rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-950/70 p-4 space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {isHi ? 'आधिकारिक स्रोत व प्राधिकार विवरण' : 'Official Sources & Authorities'}
              </h2>
            </div>
            <div className="space-y-2">
              {scheme.officialSources.map((source, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-xs">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">{source.name}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">{source.authority}</div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">
                      {isHi ? `जांचा गया: ${source.verificationDate}` : `Verified: ${source.verificationDate}`}
                    </span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 hover:underline font-semibold"
                    >
                      <span>{isHi ? 'पोर्टल पर जाएं' : 'Open Portal'}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* §12.15 Related Content */}
          {relatedSchemes.length > 0 && (
            <section className="space-y-3 pt-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {isHi ? 'संबंधित अन्य योजनाएं' : 'Related Government Schemes'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedSchemes.map(rel => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectScheme(rel)}
                    className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors cursor-pointer"
                  >
                    <div className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                      {isHi ? rel.stateLabel_hi : rel.stateLabel_en}
                    </div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white mt-1 line-clamp-2">
                      {isHi ? rel.shortTitle_hi : rel.shortTitle_en}
                    </div>
                    <div className="text-[11px] text-amber-700 dark:text-amber-400 font-medium mt-1">
                      {isHi ? rel.benefitAmount_hi : rel.benefitAmount_en}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
}
