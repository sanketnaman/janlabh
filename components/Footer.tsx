'use client';

import React from 'react';
import { Language } from '@/types';
import { ShieldCheck, ExternalLink, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenLegal: (pageId: string) => void;
  onSelectNav: (nav: string) => void;
}

export default function Footer({ lang, onOpenLegal, onSelectNav }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      {/* Statutory Independent Portal Notice */}
      <div className="border-b border-slate-800 bg-slate-950/70 py-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
            <span>
              {lang === 'hi'
                ? 'वैधानिक अस्वीकरण: JanLabh.in एक स्वतंत्र सूचना मंच है। यह भारत सरकार या किसी भी राज्य सरकार का आधिकारिक पोर्टल नहीं है।'
                : 'Statutory Notice: JanLabh.in is an independent information platform. It is NOT an official Government of India or State Government website.'}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 shrink-0">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>
              {lang === 'hi' ? 'आधिकारिक स्रोतों से सत्यापित' : 'Verified from official gazettes & portals'}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Mission & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 items-center justify-center rounded-lg bg-white p-1 border border-slate-700 shadow-sm">
                <img
                  src="/icons/janlabh-logo.svg"
                  alt="JanLabh Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                JanLabh<span className="text-amber-400">.in</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              {lang === 'hi'
                ? 'सरकारी योजनाओं की जानकारी को आसान, व्यवस्थित और भरोसेमंद बनाना — ताकि हर नागरिक सही जानकारी समझ सके और सही आधिकारिक स्रोत तक पहुंच सके।'
                : 'Empowering Indian citizens to discover welfare schemes, understand eligibility, prepare required documents, and access official government portals.'}
            </p>
            <div className="text-[11px] text-slate-400 pt-1">
              <span className="font-semibold text-slate-300">
                {lang === 'hi' ? 'प्राथमिक लक्ष्य:' : 'Primary Mission:'}
              </span>{' '}
              {lang === 'hi' ? 'जन-उपयोगिता, पारदर्शिता और निष्पक्ष सूचना।' : 'Public utility, zero deception, verifiable citations.'}
            </div>
          </div>

          {/* Column 2: Quick Discovery */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              {lang === 'hi' ? 'योजना खोज' : 'Explore Welfare'}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectNav('schemes')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {lang === 'hi' ? 'सभी केंद्रीय व राज्य योजनाएं' : 'All Central & State Schemes'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNav('finder')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {lang === 'hi' ? 'योजना खोजें (Scheme Finder)' : 'Find Schemes for You'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNav('checker')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {lang === 'hi' ? 'पात्रता जांच कैलकुलेटर' : 'Interactive Eligibility Checker'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNav('states')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {lang === 'hi' ? 'राज्यवार योजना हब (झारखंड, बिहार, यूपी)' : 'State Hubs (Jharkhand, Bihar, UP)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNav('updates')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {lang === 'hi' ? 'ताजा सरकारी अपडेट्स व ई-केवाईसी' : 'Latest Updates & e-KYC Deadlines'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Editorial Policies (PRD §26) */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              {lang === 'hi' ? 'संपादकीय व सत्यापन' : 'Editorial & Verification'}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenLegal('editorial')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {lang === 'hi' ? 'संपादकीय नीति (Editorial Policy)' : 'Editorial Policy'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('verification')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {lang === 'hi' ? 'तथ्य-जांच व सत्यापन नीति' : 'Fact-Checking & Verification Policy'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('corrections')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {lang === 'hi' ? 'त्रुटि सुधार नीति व रिपोर्ट (Corrections)' : 'Corrections Policy & Report Error'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('about')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {lang === 'hi' ? 'हमारे बारे में (About JanLabh)' : 'About JanLabh'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Compliance (PRD §28) */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              {lang === 'hi' ? 'गोपनीयता व नियम' : 'Privacy & Terms'}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {lang === 'hi' ? 'गोपनीयता नीति (Privacy Policy)' : 'Privacy Policy (No Aadhaar Stored)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {lang === 'hi' ? 'उपयोग की शर्तें (Terms of Use)' : 'Terms of Use'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('disclaimer')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {lang === 'hi' ? 'अस्वीकरण (Disclaimer)' : 'Statutory Disclaimer'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('contact')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {lang === 'hi' ? 'संपर्क करें (Contact Editorial Desk)' : 'Contact Editorial Desk'}
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onSelectNav('admin')}
                  className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 font-mono text-[11px]"
                >
                  <span>CMS Portal (/admin)</span>
                  <ExternalLink className="h-3 w-3" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} JanLabh.in · {lang === 'hi' ? 'सर्वाधिकार सुरक्षित।' : 'All rights reserved.'}
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Canonical: https://janlabh.in</span>
            <span>·</span>
            <span>hreflang: en-IN / hi-IN</span>
            <span>·</span>
            <button
              onClick={() => onOpenLegal('sitemap')}
              className="hover:text-white underline"
            >
              sitemap.xml
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
