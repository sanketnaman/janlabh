'use client';

import React, { useState } from 'react';
import StaticPageLayout from '@/components/StaticPageLayout';
import { Mail, Send, CheckCircle2, MapPin, Clock, AlertCircle, Loader2, ExternalLink, ShieldCheck, Info } from 'lucide-react';
import { Language } from '@/types';
import { COMMUNITY_CONFIG } from '@/data/community';

// Postal address configuration constant - set to a real postal address only if one exists
const PUBLIC_ADDRESS: string | null = null;

interface ContactViewProps {
  forcedLang?: Language;
}

export default function ContactView({ forcedLang }: ContactViewProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage(
        forcedLang === 'hi'
          ? 'कृपया नाम, ईमेल और संदेश भरें।'
          : 'Please fill in all required fields (Name, Email, and Message).'
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || 'JanLabh Inquiry',
          message: formData.message.trim(),
          _hp: honeypot, // Honeypot spam trap
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setHoneypot('');
      } else {
        const errorMsg =
          data?.message ||
          (forcedLang === 'hi'
            ? 'संदेश भेजने में समस्या आई। कृपया पुनः प्रयास करें अथवा सीधे contact@janlabh.in पर ईमेल करें।'
            : 'Unable to deliver message right now. Please try again or email contact@janlabh.in directly.');
        setErrorMessage(errorMsg);
      }
    } catch {
      setErrorMessage(
        forcedLang === 'hi'
          ? 'नेटवर्क त्रुटि। कृपया अपना इंटरनेट कनेक्शन जांचें अथवा सीधे contact@janlabh.in पर ईमेल करें।'
          : 'Network error. Please check your connection or email contact@janlabh.in directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StaticPageLayout
      breadcrumbTitle_en="Contact JanLabh"
      breadcrumbTitle_hi="जनलाभ से संपर्क करें"
      activeNav="trust"
      forcedLang={forcedLang}
    >
      {(lang) => {
        const isHi = (forcedLang || lang) === 'hi';
        return (
          <article className="prose prose-slate dark:prose-invert max-w-none space-y-8 bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* Header & Subtext */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
                <Mail className="h-4 w-4" />
                <span>{isHi ? 'नागरिक सहायता एवं संपादकीय संपर्क' : 'Citizen Assistance & Editorial Contact'}</span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
                {isHi ? 'जनलाभ से संपर्क करें (Contact JanLabh)' : 'Contact JanLabh'}
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed not-prose">
                {isHi
                  ? 'किसी योजना के विवरण में त्रुटि, पुराने नियम, टूटे लिंक की सूचना दें अथवा सुझाव भेजें। हम सत्यापित गलतियों को सुधारकर \'अंतिम सत्यापन\' की तारीख अपडेट करते हैं।'
                  : 'Report a wrong or outdated scheme detail, a broken official link, or send feedback. We correct verified errors and update the \'Last verified\' date.'}
              </p>
            </div>

            {/* Statutory Platform Notice */}
            <div className="p-3.5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 rounded-xl text-xs text-amber-900 dark:text-amber-200 not-prose flex items-start gap-2.5">
              <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>
                  {isHi ? 'वैधानिक सूचना: ' : 'Statutory Notice: '}
                </strong>
                {isHi
                  ? 'JanLabh.in एक स्वतंत्र सूचना मंच है। यह भारत सरकार या किसी भी राज्य सरकार का आधिकारिक पोर्टल नहीं है।'
                  : 'JanLabh.in is an independent information platform. It is NOT an official Government of India or State Government website.'}
              </span>
            </div>

            {/* Quick Contact & Verification Guidelines */}
            <div className={`grid grid-cols-1 ${PUBLIC_ADDRESS ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4 not-prose`}>
              {/* Primary Email */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <Mail className="h-4 w-4" />
                  <span>{isHi ? 'संपादकीय व सामान्य ईमेल' : 'General & Editorial Inquiries'}</span>
                </div>
                <div className="text-sm font-mono font-semibold text-slate-900 dark:text-white break-all">
                  <a href="mailto:contact@janlabh.in" className="hover:text-amber-600 underline">
                    contact@janlabh.in
                  </a>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {isHi ? 'गोपनीयता व डेटा संपर्क:' : 'Privacy Requests:'}
                  </span>{' '}
                  <a href="mailto:privacy@janlabh.in" className="hover:text-amber-600 underline font-mono">
                    privacy@janlabh.in
                  </a>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1 flex items-center gap-1.5">
                  <Clock className="h-3 w-3 text-slate-400 shrink-0" />
                  <span>{isHi ? 'हम 2–3 कार्य दिवसों में ईमेल का जवाब देते हैं।' : 'We reply to emails within 2–3 working days.'}</span>
                </p>
              </div>

              {/* Founder & Editor Information */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="h-4 w-4" />
                  <span>{isHi ? 'संपादकीय नेतृत्व' : 'Editorial Leadership'}</span>
                </div>
                <div className="text-sm text-slate-900 dark:text-white font-medium">
                  <strong>Sanket Sinha</strong>, {isHi ? 'संस्थापक एवं संपादक' : 'Founder & Editor'}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {isHi
                    ? 'भारत भर में सरकारी कल्याणकारी योजनाओं का स्वतंत्र अनुसंधान, तथ्य-जांच और निष्पक्ष नागरिक मार्गदर्शन।'
                    : 'Independent civic research, scheme fact-checking, and transparent public welfare literacy across India.'}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1 flex items-center gap-1.5">
                  <Clock className="h-3 w-3 text-slate-400 shrink-0" />
                  <span>{isHi ? 'हम 2–3 कार्य दिवसों में ईमेल का जवाब देते हैं।' : 'We reply to emails within 2–3 working days.'}</span>
                </p>
              </div>

              {/* Official Social & Community Channels */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2.5">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <ExternalLink className="h-4 w-4" />
                  <span>{isHi ? 'आधिकारिक सोशल मीडिया व चैनल' : 'Official Social Channels'}</span>
                </div>
                <div className="flex flex-col gap-2 pt-1 text-xs">
                  <a
                    href={COMMUNITY_CONFIG.facebookPageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-600" />
                      Facebook: /janlabh
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  </a>
                  <a
                    href={COMMUNITY_CONFIG.whatsappChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-600" />
                      WhatsApp Channel
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  </a>
                  <a
                    href={COMMUNITY_CONFIG.telegramChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-sky-500" />
                      Telegram: @janlabhindia
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  </a>
                </div>
              </div>

              {/* Optional Physical Postal Address (Only rendered if PUBLIC_ADDRESS is non-null) */}
              {PUBLIC_ADDRESS && (
                <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <MapPin className="h-4 w-4" />
                    <span>{isHi ? 'डाक पता' : 'Postal address'}</span>
                  </div>
                  <div className="text-xs text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                    {PUBLIC_ADDRESS}
                  </div>
                </div>
              )}
            </div>

            {/* What to include when reporting an error */}
            <section className="p-5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 not-prose space-y-2.5">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Info className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>
                  {isHi
                    ? 'त्रुटि या पुरानी जानकारी की सूचना देते समय क्या शामिल करें:'
                    : 'What to include when reporting a scheme error or outdated detail:'}
                </span>
              </h2>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-disc list-inside">
                <li>
                  <strong>{isHi ? '1. संबंधित पृष्ठ का URL: ' : '1. Page URL: '}</strong>
                  {isHi
                    ? 'JanLabh की जिस योजना या लेख में आपको त्रुटि मिली उसका लिंक (उदा. janlabh.in/schemes/...)।'
                    : 'The link of the specific scheme or article on JanLabh (e.g. janlabh.in/schemes/...).'}
                </li>
                <li>
                  <strong>{isHi ? '2. त्रुटि का विवरण: ' : '2. What is wrong: '}</strong>
                  {isHi
                    ? 'कौन सा नियम, पात्रता शर्त, राशि या प्रक्रिया पुरानी या गलत है।'
                    : 'The specific eligibility rule, installment amount, date, or procedure that is incorrect or outdated.'}
                </li>
                <li>
                  <strong>{isHi ? '3. आधिकारिक स्रोत लिंक: ' : '3. Official source link: '}</strong>
                  {isHi
                    ? 'आधिकारिक सरकारी पोर्टल (.gov.in या .nic.in) का सीधा लिंक जिसमें सही जानकारी उपलब्ध हो।'
                    : 'A direct link to the official government source (.gov.in or .nic.in) showing the verified current information.'}
                </li>
              </ul>
            </section>

            {/* Interactive Contact Form */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {isHi ? 'संदेश या सुधार भेजें (Send a Message)' : 'Send Us a Message or Report an Error'}
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {isHi
                  ? 'यदि आपको किसी योजना के नियम, पात्रता या लिंक में कोई त्रुटि मिलती है, तो नीचे दिए गए फॉर्म से हमें अवगत कराएं।'
                  : 'Submit corrections, feedback, or general questions using the form below. We verify every factual report.'}
              </p>

              {formSubmitted ? (
                <div className="p-5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-emerald-800 dark:text-emerald-300 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>
                      {isHi
                        ? 'धन्यवाद! आपका संदेश सफलतापूर्वक प्राप्त हो गया है।'
                        : 'Thank you! Your message has been received.'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {isHi
                      ? 'हम प्रत्येक सत्यापित रिपोर्ट की समीक्षा करते हैं और 2–3 कार्य दिवसों के भीतर उत्तर देते हैं।'
                      : 'We review every factual report against official government sources and reply within 2–3 working days.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setErrorMessage('');
                    }}
                    className="text-xs text-emerald-700 dark:text-emerald-400 font-bold underline cursor-pointer pt-1 inline-block"
                  >
                    {isHi ? 'दूसरा संदेश भेजें' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 not-prose p-6 bg-slate-50/70 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800">
                  {errorMessage && (
                    <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-lg text-xs text-rose-800 dark:text-rose-300 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-rose-600 dark:text-rose-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Honeypot anti-spam field (hidden from legitimate users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="_hp">Leave this empty</label>
                    <input
                      id="_hp"
                      type="text"
                      name="_hp"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        {isHi ? 'आपका पूरा नाम *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isHi ? 'उदा. राहुल शर्मा' : 'e.g. Rahul Sharma'}
                        className="w-full px-3 py-2 text-xs border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-amber-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        {isHi ? 'ईमेल पता *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@example.com"
                        className="w-full px-3 py-2 text-xs border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-amber-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                      {isHi ? 'विषय या संबंधित योजना पृष्ठ URL' : 'Subject or Scheme Page URL'}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={isHi ? 'उदा. पीएम किसान ई-केवाईसी या janlabh.in/schemes/pm-kisan...' : 'e.g. PM-Kisan verification query or page URL'}
                      className="w-full px-3 py-2 text-xs border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                      {isHi ? 'संदेश / त्रुटि विवरण *' : 'Message / Correction Details *'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isHi ? 'कृपया अपना संदेश, सुझाव अथवा त्रुटि और आधिकारिक स्रोत का लिंक यहां लिखें...' : 'Please enter your message, feedback, or report the incorrect detail along with official government link...'}
                      className="w-full px-3 py-2 text-xs border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-lg transition-colors flex items-center gap-2 shadow-xs cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          <span>{isHi ? 'भेजा जा रहा है...' : 'Sending message...'}</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" />
                          <span>{isHi ? 'संदेश भेजें' : 'Send Message'}</span>
                        </>
                      )}
                    </button>

                    <a
                      href="mailto:contact@janlabh.in?subject=JanLabh%20Inquiry"
                      className="text-xs text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 flex items-center gap-1 font-medium"
                    >
                      <span>{isHi ? 'सीधे ईमेल द्वारा भेजें' : 'Or open default email client'}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </form>
              )}

              {/* Explicit Non-Government Disclaimer under form */}
              <div className="p-4 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 leading-relaxed not-prose flex items-start gap-2.5">
                <ShieldCheck className="h-4 w-4 text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <strong>{isHi ? 'महत्वपूर्ण सूचना: ' : 'Important Notice: '}</strong>
                  {isHi
                    ? 'जनलाभ एक स्वतंत्र सूचना वेबसाइट है। हम कोई सरकारी कार्यालय नहीं हैं और न ही आवेदन स्थिति की जांच कर सकते हैं, न आवेदन प्रोसेस कर सकते हैं, और न ही आधार, ओटीपी या बैंक विवरण स्वीकार कर सकते हैं। इसके लिए कृपया संबंधित योजना के आधिकारिक पोर्टल का उपयोग करें।'
                    : 'JanLabh is an independent information website. We are not a government office and cannot check application status, process applications, or accept Aadhaar, OTP or bank details. Please use the official portal of the scheme for that.'}
                </div>
              </div>
            </section>
          </article>
        );
      }}
    </StaticPageLayout>
  );
}
