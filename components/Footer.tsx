'use client';

import React from 'react';
import Link from 'next/link';
import { Language } from '@/types';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import CommunityCallout from '@/components/CommunityCallout';

interface FooterProps {
  lang: Language;
  onOpenLegal?: (pageId: string) => void;
  onSelectNav?: (nav: string) => void;
  onSelectCategory?: (catId: string) => void;
  onSelectState?: (stId: string) => void;
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
              {lang === 'hi' ? 'आधिकारिक सरकारी पोर्टलों से सत्यापित' : 'Verified against official government portals'}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Mission & Identity */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/icons/janlabh-logo-dark.svg"
                alt="जनलाभ"
                className="h-10 w-auto object-contain"
              />
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
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              {lang === 'hi' ? 'योजना खोज व पोर्टल' : 'Explore Welfare'}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href={lang === 'hi' ? '/hi/schemes' : '/schemes'}
                  className="hover:text-amber-400 transition-colors text-slate-300 block"
                >
                  {lang === 'hi' ? 'सभी केंद्रीय व राज्य योजनाएं' : 'All Central & State Schemes'}
                </Link>
              </li>
              <li>
                <Link
                  href={lang === 'hi' ? '/hi/finder' : '/finder'}
                  className="hover:text-amber-400 transition-colors text-slate-300 block"
                >
                  {lang === 'hi' ? 'योजना खोजें (Scheme Finder)' : 'Find Schemes for You'}
                </Link>
              </li>
              <li>
                <Link
                  href={lang === 'hi' ? '/hi/checker' : '/checker'}
                  className="hover:text-amber-400 transition-colors text-slate-300 block"
                >
                  {lang === 'hi' ? 'पात्रता जांच कैलकुलेटर' : 'Interactive Eligibility Checker'}
                </Link>
              </li>
              <li>
                <Link
                  href={lang === 'hi' ? '/hi/states' : '/states'}
                  className="hover:text-amber-400 transition-colors text-slate-300 block"
                >
                  {lang === 'hi' ? 'राज्यवार योजना हब' : 'State Scheme Hubs'}
                </Link>
              </li>
              <li>
                <Link
                  href={lang === 'hi' ? '/hi/categories' : '/categories'}
                  className="hover:text-amber-400 transition-colors text-slate-300 block"
                >
                  {lang === 'hi' ? 'श्रेणी अनुसार योजनाएं' : 'Welfare Categories'}
                </Link>
              </li>
              <li>
                <Link
                  href={lang === 'hi' ? '/hi/updates' : '/updates'}
                  className="hover:text-amber-400 transition-colors text-slate-300 block"
                >
                  {lang === 'hi' ? 'ताजा सरकारी अपडेट्स व ई-केवाईसी' : 'Latest Updates & e-KYC Deadlines'}
                </Link>
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
                <Link
                  href="/about"
                  className="hover:text-white transition-colors text-slate-400 block"
                >
                  {lang === 'hi' ? 'संपादकीय नीति (Editorial Policy)' : 'Editorial Policy'}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors text-slate-400 block"
                >
                  {lang === 'hi' ? 'तथ्य-जांच व सत्यापन नीति' : 'Fact-Checking & Verification Policy'}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors text-slate-400 block"
                >
                  {lang === 'hi' ? 'त्रुटि सुधार नीति व रिपोर्ट (Corrections)' : 'Corrections Policy & Report Error'}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors text-slate-400 block"
                >
                  {lang === 'hi' ? 'हमारे बारे में (About JanLabh)' : 'About JanLabh'}
                </Link>
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
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors text-slate-400 block"
                >
                  {lang === 'hi' ? 'गोपनीयता नीति (Privacy Policy)' : 'Privacy Policy (No Aadhaar Stored)'}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors text-slate-400 block"
                >
                  {lang === 'hi' ? 'उपयोग की शर्तें (Terms of Use)' : 'Terms of Use'}
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-white transition-colors text-slate-400 block"
                >
                  {lang === 'hi' ? 'अस्वीकरण (Disclaimer)' : 'Statutory Disclaimer'}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors text-slate-400 block"
                >
                  {lang === 'hi' ? 'संपर्क करें (Contact Editorial Desk)' : 'Contact Editorial Desk'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Community Alert Network (WhatsApp & Telegram) */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <CommunityCallout lang={lang} variant="banner" />
        </div>

        {/* State Hubs Quick Index Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            {lang === 'hi' ? 'राज्यवार योजना डायरेक्टरी' : 'State-Wise Scheme Hubs'}
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {[
              { id: 'all-india', en: 'Central Govt (All-India)', hi: 'केंद्र सरकार (अखिल भारतीय)' },
              { id: 'jharkhand', en: 'Jharkhand Schemes', hi: 'झारखंड योजनाएं' },
              { id: 'bihar', en: 'Bihar Schemes', hi: 'बिहार योजनाएं' },
              { id: 'uttar-pradesh', en: 'Uttar Pradesh Schemes', hi: 'उत्तर प्रदेश योजनाएं' },
              { id: 'madhya-pradesh', en: 'Madhya Pradesh Schemes', hi: 'मध्य प्रदेश योजनाएं' },
              { id: 'maharashtra', en: 'Maharashtra Schemes', hi: 'महाराष्ट्र योजनाएं' },
              { id: 'rajasthan', en: 'Rajasthan Schemes', hi: 'राजस्थान योजनाएं' },
            ].map((st) => (
              <Link
                key={st.id}
                href={lang === 'hi' ? `/hi/states/${st.id}` : `/states/${st.id}`}
                className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/60"
              >
                {lang === 'hi' ? st.hi : st.en}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} JanLabh.in · {lang === 'hi' ? 'सर्वाधिकार सुरक्षित।' : 'All rights reserved.'}
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              sitemap.xml
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
