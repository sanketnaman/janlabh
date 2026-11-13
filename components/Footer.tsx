'use client';

import React from 'react';
import Link from 'next/link';
import { Language } from '@/types';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import CommunityCallout from '@/components/CommunityCallout';
import { COMMUNITY_CONFIG } from '@/data/community';

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
                  href={lang === 'hi' ? '/hi/articles' : '/articles'}
                  className="hover:text-amber-400 transition-colors text-slate-300 block"
                >
                  {lang === 'hi' ? 'नागरिक गाइड्स व समाधान' : 'Citizen Guides & How-To'}
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
                  href={lang === 'hi' ? '/hi/about' : '/about'}
                  className="hover:text-white transition-colors text-slate-400 block"
                >
                  {lang === 'hi' ? 'संपादकीय नीति (Editorial Policy)' : 'Editorial Policy'}
                </Link>
              </li>
              <li>
                <Link
                  href={lang === 'hi' ? '/hi/about' : '/about'}
                  className="hover:text-white transition-colors text-slate-400 block"
                >
                  {lang === 'hi' ? 'तथ्य-जांच व सत्यापन नीति' : 'Fact-Checking & Verification Policy'}
                </Link>
              </li>
              <li>
                <Link
                  href={lang === 'hi' ? '/hi/contact' : '/contact'}
                  className="hover:text-white transition-colors text-slate-400 block"
                >
                  {lang === 'hi' ? 'त्रुटि सुधार नीति व रिपोर्ट (Corrections)' : 'Corrections Policy & Report Error'}
                </Link>
              </li>
              <li>
                <Link
                  href={lang === 'hi' ? '/hi/about' : '/about'}
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
                  href={lang === 'hi' ? '/hi/privacy-policy' : '/privacy-policy'}
                  className="hover:text-white transition-colors text-slate-400 block"
                >
                  {lang === 'hi' ? 'गोपनीयता नीति (Privacy Policy)' : 'Privacy Policy (No Aadhaar Stored)'}
                </Link>
              </li>
              <li>
                <Link
                  href={lang === 'hi' ? '/hi/terms' : '/terms'}
                  className="hover:text-white transition-colors text-slate-400 block"
                >
                  {lang === 'hi' ? 'उपयोग की शर्तें (Terms of Use)' : 'Terms of Use'}
                </Link>
              </li>
              <li>
                <Link
                  href={lang === 'hi' ? '/hi/disclaimer' : '/disclaimer'}
                  className="hover:text-white transition-colors text-slate-400 block"
                >
                  {lang === 'hi' ? 'अस्वीकरण (Disclaimer)' : 'Statutory Disclaimer'}
                </Link>
              </li>
              <li>
                <Link
                  href={lang === 'hi' ? '/hi/contact' : '/contact'}
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
              { id: 'gujarat', en: 'Gujarat Schemes', hi: 'गुजरात योजनाएं' },
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
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} JanLabh.in · {lang === 'hi' ? 'सर्वाधिकार सुरक्षित।' : 'All rights reserved.'}
          </div>

          {/* Social Channels */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="text-slate-500 font-semibold">{lang === 'hi' ? 'सोशल मीडिया:' : 'Official Channels:'}</span>
            <a
              href={COMMUNITY_CONFIG.facebookPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5 font-medium"
              aria-label="JanLabh India on Facebook"
            >
              <svg className="h-4 w-4 fill-current text-blue-500" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </a>
            <a
              href={COMMUNITY_CONFIG.whatsappChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-medium"
              aria-label="JanLabh on WhatsApp"
            >
              <svg className="h-4 w-4 fill-current text-emerald-500" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.15-.176.2-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.634-.929-2.237-.245-.588-.493-.508-.678-.517-.176-.01-.377-.01-.578-.01s-.527.075-.803.377c-.276.301-1.054 1.03-1.054 2.511s1.079 2.912 1.229 3.113c.15.201 2.124 3.243 5.146 4.55.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.58-.088 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.352zM12.04 2C6.527 2 2.04 6.487 2.04 12c0 1.942.554 3.754 1.517 5.289L2 22l4.862-1.522A9.914 9.914 0 0012.04 22c5.514 0 10-4.487 10-10s-4.486-10-10-10zm0 18.25c-1.674 0-3.235-.494-4.549-1.344l-.326-.21-2.88.902.924-2.809-.229-.344A8.195 8.195 0 013.79 12c0-4.549 3.701-8.25 8.25-8.25 4.549 0 8.25 3.701 8.25 8.25 0 4.549-3.701 8.25-8.25 8.25z" />
              </svg>
              <span>WhatsApp</span>
            </a>
            <a
              href={COMMUNITY_CONFIG.telegramChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-sky-400 transition-colors flex items-center gap-1.5 font-medium"
              aria-label="JanLabh on Telegram"
            >
              <svg className="h-4 w-4 fill-current text-sky-400" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.99 1.27-5.63 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.75 4-1.74 6.67-2.89 8.02-3.45 3.82-1.6 4.62-1.88 5.14-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.21-.04.34z" />
              </svg>
              <span>Telegram</span>
            </a>
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
