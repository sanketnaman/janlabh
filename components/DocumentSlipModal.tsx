'use client';

import React, { useState, useRef } from 'react';
import { Scheme } from '@/types';
import { COMMUNITY_CONFIG } from '@/data/community';
import {
  Printer,
  Copy,
  Check,
  X,
  FileText,
  ExternalLink,
  ShieldCheck,
  CheckSquare,
  Square,
  PhoneCall,
  Sparkles
} from 'lucide-react';

interface DocumentSlipModalProps {
  isOpen: boolean;
  onClose: () => void;
  scheme: Scheme;
  isHi: boolean;
  checkedDocs?: Record<number, boolean>;
}

export default function DocumentSlipModal({
  isOpen,
  onClose,
  scheme,
  isHi,
  checkedDocs = {},
}: DocumentSlipModalProps) {
  const [copied, setCopied] = useState(false);
  const [printing, setPrinting] = useState(false);
  const slipRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  // Format today's date in Indian readable format (e.g., 17 Nov 2026)
  const todayDate = new Date().toLocaleDateString(isHi ? 'hi-IN' : 'en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  // Primary Official Portal URL
  const officialUrl = scheme.officialSources?.[0]?.url || scheme.officialStatusUrl || 'https://janlabh.in';

  // Number of required documents
  const docCount = Math.max(
    scheme.requiredDocuments_hi?.length || 0,
    scheme.requiredDocuments_en?.length || 0
  );

  // Copy structured checklist formatted for WhatsApp / SMS
  const handleCopyForWhatsApp = async () => {
    const lines = [
      `📋 *${scheme.shortTitle_hi || scheme.shortTitle_en} - आवश्यक दस्तावेज़ चेकलिस्ट*`,
      `🏛️ *राज्य/क्षेत्र:* ${scheme.stateLabel_hi} (${scheme.stateLabel_en})`,
      `💰 *मुख्य लाभ:* ${scheme.benefitAmount_hi || scheme.benefitAmount_en}`,
      `🌐 *आवेदन मोड:* ${scheme.applicationMode}`,
      '',
      `✅ *अनिवार्य दस्तावेज़ों की सूची:*`,
    ];

    for (let i = 0; i < docCount; i++) {
      const docHi = scheme.requiredDocuments_hi?.[i] || '';
      const docEn = scheme.requiredDocuments_en?.[i] || '';
      lines.push(`[ ] ${i + 1}. ${docHi}`);
      if (docEn && docEn !== docHi) {
        lines.push(`     (${docEn})`);
      }
    }

    lines.push('');
    lines.push(`📌 *CSC / साइबर कैफे / आवेदक हेतु आवश्यक निर्देश:*`);
    lines.push(`1. आवेदन हेतु सभी मूल प्रमाण पत्र (Original Documents) सत्यापन हेतु साथ रखें।`);
    lines.push(`2. बैंक खाता NPCI / Aadhaar DBT से सक्रिय (Seeded) होना अनिवार्य है।`);
    lines.push(`3. 2 नवीनतम पासपोर्ट साइज रंगीन फोटो एवं आधार से लिंक चालू मोबाइल नंबर साथ ले जाएं।`);
    lines.push('');
    lines.push(`🔗 *पूरी जानकारी व ऑनलाइन पोर्टल लिंक:* https://janlabh.in/schemes/${scheme.slug}`);
    lines.push(`📢 *JanLabh WhatsApp चैनल:* ${COMMUNITY_CONFIG.whatsappChannelUrl}`);
    lines.push(`📱 *JanLabh Telegram चैनल:* ${COMMUNITY_CONFIG.telegramChannelUrl}`);
    lines.push(`🌐 *जनलाभ पोर्टल:* https://janlabh.in (भारत का विश्वसनीय जन-कल्याण मंच)`);

    try {
      await navigator.clipboard.writeText(lines.join('\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  // Dedicated Print handler via isolated hidden iframe (zero page distortion, 100% white background, clean A4)
  const handlePrint = () => {
    setPrinting(true);

    const printFrame = document.createElement('iframe');
    printFrame.style.position = 'fixed';
    printFrame.style.right = '0';
    printFrame.style.bottom = '0';
    printFrame.style.width = '0';
    printFrame.style.height = '0';
    printFrame.style.border = '0';
    document.body.appendChild(printFrame);

    const slipContent = slipRef.current?.innerHTML;
    if (!slipContent || !printFrame.contentWindow) {
      setPrinting(false);
      return;
    }

    const doc = printFrame.contentWindow.document;
    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html lang="hi">
        <head>
          <meta charset="utf-8" />
          <title>जनलाभ दस्तावेज़ पर्ची - ${scheme.shortTitle_hi || scheme.shortTitle_en}</title>
          <style>
            @page {
              size: A4 portrait;
              margin: 10mm 12mm 10mm 12mm;
            }
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Nirmala UI", Mangal, "Noto Sans Devanagari", sans-serif;
              color: #0f172a;
              background: #ffffff;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
              font-size: 11pt;
              line-height: 1.4;
            }
            .slip-wrapper {
              position: relative;
              width: 100%;
              background: #ffffff;
              padding: 4px;
            }
            /* Subtle Watermark */
            .watermark-overlay {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) rotate(-30deg);
              font-size: 42pt;
              font-weight: 900;
              color: rgba(6, 41, 90, 0.05);
              text-transform: uppercase;
              letter-spacing: 6px;
              white-space: nowrap;
              pointer-events: none;
              z-index: 0;
            }
            .watermark-sub {
              font-size: 16pt;
              font-weight: 700;
              color: rgba(6, 41, 90, 0.04);
              letter-spacing: 3px;
              text-align: center;
              margin-top: 8px;
            }
            .content-layer {
              position: relative;
              z-index: 1;
            }
            .header-bar {
              display: flex;
              align-items: center;
              justify-content: space-between;
              border-bottom: 2px solid #06295A;
              padding-bottom: 8px;
              margin-bottom: 12px;
            }
            .brand-name {
              font-size: 20pt;
              font-weight: 800;
              color: #06295A;
              line-height: 1.1;
            }
            .brand-feather {
              color: #FF6A00;
            }
            .brand-tagline {
              font-size: 8.5pt;
              color: #475569;
              font-weight: 600;
              margin-top: 2px;
            }
            .header-meta {
              text-align: right;
              font-size: 8.5pt;
              color: #334155;
            }
            .header-meta .url {
              font-weight: 800;
              color: #06295A;
              font-size: 10pt;
            }
            .title-box {
              background: #f8fafc;
              border: 1px solid #cbd5e1;
              border-left: 4px solid #FF6A00;
              border-radius: 6px;
              padding: 8px 12px;
              margin-bottom: 12px;
            }
            .scheme-title-hi {
              font-size: 13pt;
              font-weight: 800;
              color: #0f172a;
              line-height: 1.25;
            }
            .scheme-title-en {
              font-size: 9.5pt;
              font-weight: 600;
              color: #475569;
              margin-top: 2px;
            }
            .scheme-meta-pills {
              display: flex;
              gap: 12px;
              font-size: 8pt;
              color: #334155;
              margin-top: 4px;
              font-weight: 600;
            }
            .docs-section-heading {
              font-size: 11pt;
              font-weight: 800;
              color: #06295A;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 8px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              border-bottom: 1px solid #e2e8f0;
              padding-bottom: 4px;
            }
            .docs-list {
              list-style: none;
              padding: 0;
              margin: 0 0 12px 0;
            }
            .doc-item {
              display: flex;
              align-items: flex-start;
              gap: 10px;
              padding: 6px 8px;
              border-bottom: 1px dashed #e2e8f0;
              page-break-inside: avoid;
            }
            .doc-checkbox {
              width: 14px;
              height: 14px;
              border: 1.5px solid #0f172a;
              border-radius: 3px;
              margin-top: 3px;
              flex-shrink: 0;
            }
            .doc-number {
              font-weight: 700;
              color: #06295A;
              font-size: 9pt;
              width: 18px;
              flex-shrink: 0;
              margin-top: 1px;
            }
            .doc-text-hi {
              font-weight: 700;
              font-size: 9.5pt;
              color: #0f172a;
              line-height: 1.3;
            }
            .doc-text-en {
              font-size: 8pt;
              color: #475569;
              font-weight: 500;
              margin-top: 1px;
              line-height: 1.25;
            }
            .notice-box {
              background: #fffbeb;
              border: 1px solid #fde68a;
              border-radius: 6px;
              padding: 8px 12px;
              margin-bottom: 12px;
              page-break-inside: avoid;
            }
            .notice-title {
              font-size: 8.5pt;
              font-weight: 800;
              color: #92400e;
              margin-bottom: 4px;
              text-transform: uppercase;
            }
            .notice-list {
              font-size: 8pt;
              color: #78350f;
              line-height: 1.35;
              padding-left: 16px;
            }
            .notice-list li {
              margin-bottom: 2px;
            }
            .footer-bar {
              border-top: 1.5px solid #cbd5e1;
              padding-top: 8px;
              margin-top: 8px;
              page-break-inside: avoid;
            }
            .footer-socials {
              display: flex;
              justify-content: space-between;
              font-size: 8pt;
              font-weight: 600;
              color: #1e293b;
              margin-bottom: 4px;
              flex-wrap: wrap;
              gap: 8px;
            }
            .footer-social-pill {
              display: inline-flex;
              align-items: center;
              gap: 4px;
            }
            .footer-disclaimer {
              font-size: 7pt;
              color: #64748b;
              text-align: center;
              margin-top: 4px;
              line-height: 1.2;
            }
          </style>
        </head>
        <body>
          <div class="slip-wrapper">
            <div class="watermark-overlay">
              <div>जनलाभ • JANLABH.IN</div>
              <div class="watermark-sub">GOVERNMENT SCHEMES & CITIZEN BENEFITS</div>
            </div>
            <div class="content-layer">
              ${slipContent}
            </div>
          </div>
        </body>
      </html>
    `);
    doc.close();

    printFrame.contentWindow.focus();
    setTimeout(() => {
      printFrame.contentWindow?.print();
      setPrinting(false);
      setTimeout(() => {
        if (document.body.contains(printFrame)) {
          document.body.removeChild(printFrame);
        }
      }, 1500);
    }, 400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
      >
        {/* Modal Top Action Toolbar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/80 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                {isHi ? 'आवश्यक दस्तावेज़ चेकलिस्ट पर्ची' : 'Required Documents Checklist Slip'}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {isHi ? 'CSC, साइबर कैफे एवं नागरिकों हेतु A4 प्रिंटेबल फॉर्मेट' : 'Printable A4 Slip for CSC, Cyber Cafes & Citizens'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyForWhatsApp}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer"
              title={isHi ? 'व्हाट्सएप पर भेजने के लिए कॉपी करें' : 'Copy formatted text for WhatsApp'}
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? (isHi ? 'कॉपी हो गया!' : 'Copied!') : (isHi ? 'WhatsApp हेतु कॉपी' : 'Copy for WhatsApp')}</span>
            </button>

            <button
              onClick={handlePrint}
              type="button"
              disabled={printing}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer disabled:opacity-50"
              title={isHi ? 'प्रिंट करें या पीडीएफ सेव करें' : 'Print or Save as PDF'}
            >
              <Printer className="h-3.5 w-3.5" />
              <span>{printing ? (isHi ? 'लोड हो रहा...' : 'Printing...') : (isHi ? 'प्रिंट / PDF सेव करें' : 'Print / Save PDF')}</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body showing Slip Preview */}
        <div className="p-4 sm:p-6 overflow-y-auto bg-slate-200/50 dark:bg-slate-950/70">
          <div className="mx-auto max-w-2xl bg-white text-slate-900 rounded-xl p-6 sm:p-8 shadow-md border border-slate-300 relative select-text">
            {/* Hidden Printable Container used for isolated print iframe */}
            <div ref={slipRef}>
              {/* Slip Header */}
              <div className="header-bar border-b-2 border-[#06295A] pb-3 mb-3 flex items-center justify-between">
                <div>
                  <div className="brand-name text-2xl font-black text-[#06295A] tracking-tight leading-none flex items-center gap-1">
                    <span>जनलाभ</span>
                    <span className="brand-feather text-[#FF6A00] font-normal text-xl">✦</span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 border-l border-slate-300 pl-1.5">JanLabh.in</span>
                  </div>
                  <div className="brand-tagline text-[11px] font-semibold text-slate-600 mt-1">
                    भारत का विश्वसनीय जन-कल्याण एवं सरकारी योजना पोर्टल
                  </div>
                </div>
                <div className="header-meta text-right text-xs text-slate-600">
                  <div className="url text-sm font-extrabold text-[#06295A]">https://janlabh.in</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">पर्ची जारी तिथि: {todayDate}</div>
                </div>
              </div>

              {/* Scheme Title & State Header */}
              <div className="title-box bg-slate-50 border border-slate-200 border-l-4 border-l-[#FF6A00] rounded-lg p-3 mb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-0.5">
                  आवश्यक दस्तावेज़ चेकलिस्ट पर्ची (Required Documents Checklist)
                </div>
                <h4 className="scheme-title-hi text-base sm:text-lg font-extrabold text-slate-950 leading-snug">
                  {scheme.title_hi || scheme.title_en}
                </h4>
                <div className="scheme-title-en text-xs font-semibold text-slate-600 mt-0.5">
                  {scheme.title_en}
                </div>
                <div className="scheme-meta-pills flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700 font-semibold mt-2 pt-2 border-t border-slate-200/80">
                  <span>🏛️ <strong>राज्य:</strong> {scheme.stateLabel_hi} ({scheme.stateLabel_en})</span>
                  <span>💰 <strong>मुख्य लाभ:</strong> {scheme.benefitAmount_hi || scheme.benefitAmount_en}</span>
                  <span>📝 <strong>आवेदन मोड:</strong> {scheme.applicationMode}</span>
                </div>
              </div>

              {/* Documents Checklist List */}
              <div className="mb-4">
                <div className="docs-section-heading text-xs font-bold uppercase tracking-wider text-[#06295A] pb-1 mb-2 border-b border-slate-200 flex justify-between">
                  <span>अनिवार्य दस्तावेज़ों की सूची (Checklist of Documents)</span>
                  <span className="text-[10px] text-slate-500 font-normal">कुल दस्तावेज़: {docCount}</span>
                </div>

                <div className="docs-list space-y-1.5">
                  {Array.from({ length: docCount }).map((_, idx) => {
                    const docHi = scheme.requiredDocuments_hi?.[idx];
                    const docEn = scheme.requiredDocuments_en?.[idx];
                    const isChecked = !!checkedDocs[idx];

                    return (
                      <div
                        key={idx}
                        className="doc-item flex items-start gap-2.5 p-2 rounded-md border border-slate-100 bg-slate-50/50 hover:bg-slate-100/50 transition-colors"
                      >
                        <div className="doc-checkbox w-4 h-4 border-2 border-slate-800 rounded-sm mt-0.5 shrink-0 flex items-center justify-center">
                          {isChecked && <Check className="w-3 h-3 text-[#06295A] stroke-[3]" />}
                        </div>
                        <div className="doc-number text-xs font-bold text-[#06295A] w-5 shrink-0 mt-0.5">
                          {(idx + 1).toString().padStart(2, '0')}.
                        </div>
                        <div className="flex-1">
                          <p className="doc-text-hi text-xs font-bold text-slate-900 leading-snug">
                            {docHi || docEn}
                          </p>
                          {docEn && docEn !== docHi && (
                            <p className="doc-text-en text-[11px] text-slate-600 font-medium mt-0.5 leading-tight">
                              {docEn}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CSC & Citizen Notice Box */}
              <div className="notice-box bg-amber-50/90 border border-amber-200 rounded-lg p-3 mb-4 text-xs text-amber-950">
                <div className="notice-title font-bold text-[11px] text-amber-900 mb-1 flex items-center gap-1.5 uppercase">
                  <span>📌 महत्वपूर्ण निर्देश (CSC ऑपरेटर / साइबर कैफे / नागरिक हेतु):</span>
                </div>
                <ul className="notice-list list-disc list-inside space-y-0.5 text-[11px] text-amber-900 leading-relaxed">
                  <li>सत्यापन हेतु सभी आवश्यक प्रमाण पत्रों की <strong>मूल प्रति (Original Copy)</strong> साथ ले जाएं।</li>
                  <li>बैंक खाता <strong>Aadhaar-NPCI से लिंक (DBT Seeded)</strong> होना अनिवार्य है।</li>
                  <li>कम से कम <strong>2 नवीनतम पासपोर्ट साइज रंगीन फोटो</strong> और आधार से लिंक सक्रिय मोबाइल साथ रखें।</li>
                  <li>आधिकारिक पोर्टल: <strong>{officialUrl}</strong> | कभी भी अपना पासवर्ड या ओटीपी किसी से शेयर न करें।</li>
                </ul>
              </div>

              {/* Footer with Social Links matching user sketch */}
              <div className="footer-bar border-t border-slate-300 pt-3 mt-3 text-xs text-slate-700">
                <div className="footer-socials flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold text-slate-800 mb-1.5">
                  <div className="footer-social-pill flex items-center gap-1">
                    <span className="text-[#06295A]">📢 Telegram:</span>
                    <span className="font-bold">t.me/janlabhindia</span>
                  </div>
                  <div className="footer-social-pill flex items-center gap-1">
                    <span className="text-emerald-700">💬 WhatsApp:</span>
                    <span className="font-bold">janlabh.in/whatsapp</span>
                  </div>
                  <div className="footer-social-pill flex items-center gap-1">
                    <span className="text-blue-700">🌐 Facebook:</span>
                    <span className="font-bold">facebook.com/janlabh</span>
                  </div>
                </div>

                <div className="footer-disclaimer text-[10px] text-slate-500 text-center border-t border-slate-200 pt-2 mt-1">
                  जनलाभ - भारत का जन-कल्याण एवं सरकारी योजना सूचना मंच | प्रमाणित ई-सेवा सहायता पर्ची | https://janlabh.in
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Helper Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>💡 CSC / प्रज्ञा केंद्र वाले इस पर्ची को A4 पेपर पर सीधे प्रिंट कर सकते हैं।</span>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline"
          >
            {isHi ? 'बंद करें' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
