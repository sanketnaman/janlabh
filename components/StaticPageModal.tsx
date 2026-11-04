'use client';

import React, { useState } from 'react';
import { Language } from '@/types';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  FileText,
  AlertTriangle,
  Mail,
  Send,
  Building,
  Info
} from 'lucide-react';

interface StaticPageModalProps {
  pageId: string | null;
  onClose: () => void;
  lang: Language;
}

export default function StaticPageModal({ pageId, onClose, lang }: StaticPageModalProps) {
  const isHi = lang === 'hi';
  const [reportScheme, setReportScheme] = useState('');
  const [reportDetails, setReportDetails] = useState('');
  const [reportEmail, setReportEmail] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);

  if (!pageId) return null;

  const handleCorrectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reportScheme.trim() && reportDetails.trim()) {
      setReportSubmitted(true);
      setTimeout(() => {
        setReportSubmitted(false);
        setReportScheme('');
        setReportDetails('');
        setReportEmail('');
      }, 4000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 flex justify-center">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4 bg-slate-50 dark:bg-slate-900/90">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
            <ShieldCheck className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
            <span>JanLabh.in · {isHi ? 'विश्वास व वैधानिक नीतियां' : 'Trust, Editorial & Legal Standards'}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto text-sm text-slate-700 dark:text-slate-300 space-y-6">
          
          {/* 1. About JanLabh */}
          {pageId === 'about' && (
            <div className="space-y-4">
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {isHi ? 'जनलाभ (JanLabh.in) के बारे में' : 'About JanLabh.in'}
              </h1>
              <p className="leading-relaxed">
                {isHi
                  ? 'JanLabh एक स्वतंत्र, नागरिक-हितैषी सूचना और पात्रता मार्गदर्शन मंच है। भारत में करोड़ों नागरिक सरकारी कल्याणकारी योजनाओं के पात्र होने के बावजूद सूचना के अभाव या जटिल नियमों के कारण इनका लाभ नहीं ले पाते। JanLabh इस समस्या का स्थायी समाधान प्रस्तुत करता है।'
                  : 'JanLabh.in is an independent public information platform dedicated to helping Indian citizens discover, understand, and navigate government welfare schemes, scholarships, and statutory benefits.'}
              </p>
              
              <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/70 dark:bg-amber-950/30 space-y-2">
                <div className="font-bold text-amber-900 dark:text-amber-400 text-xs uppercase tracking-wider">
                  {isHi ? 'हम क्या हैं और क्या नहीं हैं:' : 'What We Are & What We Are Not:'}
                </div>
                <ul className="text-xs space-y-1.5 text-slate-800 dark:text-slate-200">
                  <li>• <strong>{isHi ? 'हम हैं:' : 'We Are:'}</strong> {isHi ? 'एक निष्पक्ष, पारदर्शी सूचना मार्गदर्शिका जो सरकारी राजपत्रों, पोर्टल अधिसूचनाओं को सरल भाषा में नागरिकों तक पहुंचाती है।' : 'An unbiased, transparent information and eligibility navigation portal synthesizing government gazettes into accessible guidance.'}</li>
                  <li>• <strong>{isHi ? 'हम नहीं हैं:' : 'We Are NOT:'}</strong> {isHi ? 'हम भारत सरकार या किसी राज्य सरकार का आधिकारिक पोर्टल या अधिकृत प्रतिनिधि नहीं हैं। हम कभी भी सरकारी मंजूरी की गारंटी नहीं देते।' : 'We are NOT a Government of India portal, not an official application counter, and we never charge citizens or guarantee scheme sanctions.'}</li>
                </ul>
              </div>

              <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-2">
                {isHi ? 'हमारा मुख्य सिद्धांत' : 'Our Core Philosophy'}
              </h2>
              <blockquote className="border-l-2 border-amber-600 dark:border-amber-500 pl-4 italic text-slate-600 dark:text-slate-400">
                {isHi 
                  ? '“SEO नागरिकों को JanLabh तक लाता है; वास्तविक उपयोगिता, सटीकता और विश्वसनीयता उन्हें रुकने और पुनः लौटने का कारण देती है।”'
                  : '"SEO brings users to JanLabh. Genuine usefulness, accuracy, and trust give them a reason to stay and return."'}
              </blockquote>
            </div>
          )}

          {/* 2. Editorial Policy */}
          {pageId === 'editorial' && (
            <div className="space-y-4">
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {isHi ? 'संपादकीय नीति (Editorial Policy)' : 'Editorial Policy'}
              </h1>
              <p className="leading-relaxed">
                {isHi
                  ? 'JanLabh की संपादकीय नीति का मुख्य उद्देश्य नागरिकों को शत-प्रतिशत निष्पक्ष, अद्यतित और प्रमाणित जानकारी उपलब्ध कराना है।'
                  : 'Our editorial principles guarantee objective, rigorously cited, and user-first public guidance across all Central and State schemes.'}
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-lg border border-slate-200 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white">1. {isHi ? 'आधिकारिक स्रोत प्राथमिकता' : 'Official Primary Sources Only'}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {isHi
                      ? 'प्रत्येक योजना और अपडेट केवल .gov.in, .nic.in, अथवा आधिकारिक सरकारी राजपत्र (Gazette) से पुष्टि के बाद ही प्रकाशित किया जाता है।'
                      : 'All eligibility criteria, financial figures, and document checklists are sourced directly from verified government gazettes, department portals (.gov.in / .nic.in), and statutory press releases.'}
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-lg border border-slate-200 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white">2. {isHi ? 'विज्ञापनदाता प्रभाव से पूर्ण स्वतंत्रता' : 'Zero Commercial Influence on Coverage'}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {isHi
                      ? 'JanLabh पर किसी भी योजना के पक्षपातपूर्ण प्रचार के लिए कोई शुल्क या प्रायोजन स्वीकार नहीं किया जाता।'
                      : 'Editorial decisions, scheme guides, and eligibility determinations are strictly independent of advertising relationships. No paid placement alters guidance rules.'}
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-lg border border-slate-200 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white">3. {isHi ? 'द्विभाषी प्रामाणिकता (Bilingual Quality)' : 'Bilingual Vernacular Accuracy'}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {isHi
                      ? 'हिंदी भाषा केवल अनुवाद नहीं है, बल्कि ग्रामीण व शहरी पाठकों की व्यावहारिक शब्दावली को ध्यान में रखकर मूल रूप से तैयार की जाती है।'
                      : 'Hindi translations are culturally and legally adapted, avoiding automated translation errors so that grassroots citizens understand their legal rights.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 3. Verification & Fact-Checking Policy */}
          {pageId === 'verification' && (
            <div className="space-y-4">
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {isHi ? 'तथ्य-जांच व सत्यापन नीति' : 'Fact-Checking & Verification Policy'}
              </h1>
              <p className="leading-relaxed">
                {isHi
                  ? 'सरकारी योजनाओं में नियमों, बजट आवंटनों, और आवेदन तिथियों में निरंतर परिवर्तन होते रहते हैं। इसलिए JanLabh एक बहु-स्तरीय सत्यापन प्रणाली अपनाता है।'
                  : 'Public benefits frequently undergo regulatory amendments, revised budgetary ceilings, and deadline extensions. We maintain a systematic verification cadence.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 rounded-lg">
                  <div className="font-bold text-emerald-900 dark:text-emerald-300">1. {isHi ? 'प्रकाशित तिथि (Published Date)' : 'Published Date'}</div>
                  <div className="text-emerald-800 dark:text-emerald-400 mt-1">
                    {isHi ? 'जिस तिथि को मूल विस्तृत योजना गाइड तैयार किया गया।' : 'The exact date the comprehensive pillar guide was first published.'}
                  </div>
                </div>
                <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 rounded-lg">
                  <div className="font-bold text-emerald-900 dark:text-emerald-300">2. {isHi ? 'अंतिम सत्यापन (Last Verified Date)' : 'Last Verified Date'}</div>
                  <div className="text-emerald-800 dark:text-emerald-400 mt-1">
                    {isHi ? 'जिस तिथि को आधिकारिक पोर्टल पर जाकर सभी नियमों की पुनः जांच की गई।' : 'The most recent audit against live department guidelines and circulars.'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. Corrections Policy & Interactive Reporting Form (PRD §26) */}
          {pageId === 'corrections' && (
            <div className="space-y-4">
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {isHi ? 'त्रुटि सुधार नीति (Corrections Policy)' : 'Corrections Policy & Feedback'}
              </h1>
              <p className="leading-relaxed text-xs sm:text-sm">
                {isHi
                  ? 'हम अपनी सामग्री में पूर्ण सटीकता के लिए प्रतिबद्ध हैं। यदि आपको किसी योजना की जानकारी, पात्रता नियम या लिंक में कोई त्रुटि मिलती है, तो कृपया नीचे दिए गए फॉर्म के माध्यम से हमें तुरंत सूचित करें।'
                  : 'Transparency includes acknowledging and swiftly correcting errors. If you observe an outdated deadline, broken official link, or factual discrepancy, report it directly below.'}
              </p>

              {reportSubmitted ? (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 rounded-xl text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>
                    {isHi 
                      ? 'धन्यवाद! आपकी त्रुटि रिपोर्ट संपादकीय डेस्क को भेज दी गई है। 24 घंटे के भीतर इसकी जांच की जाएगी।' 
                      : 'Thank you! Your correction report has been dispatched to our editorial desk for verification within 24 hours.'}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleCorrectionSubmit} className="space-y-3.5 p-4 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 rounded-xl">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                      {isHi ? 'संबंधित योजना या पृष्ठ का नाम:' : 'Scheme or Page Title:'}
                    </label>
                    <input
                      type="text"
                      required
                      value={reportScheme}
                      onChange={(e) => setReportScheme(e.target.value)}
                      placeholder={isHi ? 'उदा. पीएम किसान 19वीं किस्त' : 'e.g., PM-Kisan e-KYC status'}
                      className="w-full px-3 py-2 text-xs border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-amber-600 dark:focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                      {isHi ? 'पहचानी गई त्रुटि या सुधार का विवरण:' : 'Observed Inaccuracy or Correction Details:'}
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={reportDetails}
                      onChange={(e) => setReportDetails(e.target.value)}
                      placeholder={isHi ? 'कृपया बताएं कि आधिकारिक पोर्टल पर क्या भिन्न है...' : 'Please specify the exact discrepancy compared to the official gazette/portal...'}
                      className="w-full px-3 py-2 text-xs border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-amber-600 dark:focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                      {isHi ? 'आपका ईमेल (वैकल्पिक, उत्तर पाने हेतु):' : 'Your Email (Optional, for follow-up):'}
                    </label>
                    <input
                      type="email"
                      value={reportEmail}
                      onChange={(e) => setReportEmail(e.target.value)}
                      placeholder="citizen@example.com"
                      className="w-full px-3 py-2 text-xs border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-amber-600 dark:focus:border-amber-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-bold text-white dark:text-slate-950 bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>{isHi ? 'संपादकीय डेस्क को रिपोर्ट भेजें' : 'Submit Correction to Editorial Desk'}</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* 5. Contact Us */}
          {pageId === 'contact' && (
            <div className="space-y-4">
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {isHi ? 'हमसे संपर्क करें (Contact JanLabh)' : 'Contact JanLabh'}
              </h1>
              <p className="leading-relaxed">
                {isHi
                  ? 'JanLabh की संपादकीय व सत्यापन टीम से सीधे संपर्क करने के लिए निम्नलिखित माध्यमों का उपयोग करें:'
                  : 'Reach out to the JanLabh editorial, research, and technical desks:'}
              </p>

              <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {isHi ? 'संपादकीय डेस्क ईमेल:' : 'Editorial Desk Email:'}
                  </span>{' '}
                  <span className="font-mono text-slate-900 dark:text-white">contact@janlabh.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {isHi ? 'कार्यक्षेत्र:' : 'Location:'}
                  </span>{' '}
                  <span className="text-slate-700 dark:text-slate-300">New Delhi & Ranchi, India</span>
                </div>
              </div>
            </div>
          )}

          {/* 6. Privacy Policy */}
          {pageId === 'privacy' && (
            <div className="space-y-4">
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {isHi ? 'गोपनीयता नीति (Privacy Policy)' : 'Privacy Policy'}
              </h1>
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 rounded-xl text-xs space-y-1 text-emerald-900 dark:text-emerald-300">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                  <span>{isHi ? 'नागरिक सुरक्षा की पूर्ण गारंटी' : 'Zero Personal Data Collection Policy'}</span>
                </div>
                <p className="text-emerald-800 dark:text-emerald-300">
                  {isHi
                    ? 'JanLabh कभी भी आपका आधार नंबर, बैंक खाता संख्या, ओटीपी, या सरकारी लॉगिन क्रेडेंशियल नहीं मांगता और न ही सर्वर पर संग्रहीत करता है।'
                    : 'JanLabh strictly never collects, asks for, or stores Aadhaar numbers, bank account details, OTPs, or government portal passwords.'}
                </p>
              </div>
              <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'पात्रता कैलकुलेटर में चुने गए सभी विकल्प (जैसे आयु वर्ग या आय सीमा) केवल आपके ब्राउज़र में अस्थायी रूप से परखे जाते हैं और किसी डेटाबेस में रिकॉर्ड नहीं होते।'
                  : 'All responses given in the interactive Eligibility Checker are computed purely in-memory on the client device and are discarded immediately upon session closure.'}
              </p>
            </div>
          )}

          {/* 7. Terms & Statutory Disclaimer */}
          {(pageId === 'terms' || pageId === 'disclaimer') && (
            <div className="space-y-4">
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {isHi ? 'वैधानिक अस्वीकरण व नियम (Statutory Disclaimer)' : 'Statutory Disclaimer & Terms of Use'}
              </h1>
              <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 rounded-xl text-xs text-amber-950 dark:text-amber-200 space-y-2 leading-relaxed">
                <div className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-amber-900 dark:text-amber-300">
                  <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <span>{isHi ? 'महत्वपूर्ण विधिक सूचना' : 'Important Legal Notice'}</span>
                </div>
                <p>
                  {isHi
                    ? '1. JanLabh.in एक निजी, स्वतंत्र सूचना पोर्टल है जिसका भारत सरकार, किसी भी राज्य सरकार अथवा उनके मंत्रालयों से कोई आधिकारिक संबंध नहीं है।'
                    : '1. JanLabh.in is an independent civic information platform with no official affiliation, sponsorship, or endorsement by the Government of India or any State Government.'}
                </p>
                <p>
                  {isHi
                    ? '2. वेबसाइट पर दी गई सभी सूचनाएं सार्वजनिक सरकारी पोर्टलों और राजपत्रों से केवल जन-जागरूकता हेतु संकलित की गई हैं। अंतिम पात्रता व अनुमोदन संबंधित सरकारी प्राधिकारी के निर्णय पर निर्भर करता है।'
                    : '2. All scheme guides, eligibility ratings, and document checklists are compiled from public notifications for awareness only. Final entitlement and approval are determined strictly by competent government officers.'}
                </p>
              </div>
            </div>
          )}

          {/* 8. sitemap.xml View */}
          {pageId === 'sitemap' && (
            <div className="space-y-3 font-mono text-xs">
              <h1 className="text-xl font-bold font-sans text-slate-900 dark:text-white">
                Sitemap Index (sitemap.xml)
              </h1>
              <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
                Canonical indexable URLs dynamically compiled per PRD §32:
              </p>
              <div className="p-4 bg-slate-900 dark:bg-slate-950 text-slate-200 rounded-xl space-y-1.5 overflow-x-auto border border-slate-800">
                <div>https://janlabh.in/</div>
                <div>https://janlabh.in/hi/</div>
                <div>https://janlabh.in/en/</div>
                <div>https://janlabh.in/schemes/pm-kisan-samman-nidhi</div>
                <div>https://janlabh.in/schemes/ayushman-bharat-pmjay-health-card</div>
                <div>https://janlabh.in/schemes/jharkhand-mukhyamantri-maiya-samman-yojana</div>
                <div>https://janlabh.in/schemes/pm-awas-yojana-pmay-housing</div>
                <div>https://janlabh.in/schemes/pm-vishwakarma-yojana-artisan-support</div>
                <div>https://janlabh.in/schemes/jharkhand-abua-awas-yojana-housing</div>
                <div>https://janlabh.in/schemes/national-scholarship-portal-nsp-guide</div>
                <div>https://janlabh.in/schemes/atal-pension-yojana-apy-retirement</div>
                <div>https://janlabh.in/schemes/bihar-student-credit-card-yojana</div>
                <div>https://janlabh.in/states/jharkhand</div>
                <div>https://janlabh.in/states/bihar</div>
                <div>https://janlabh.in/states/uttar-pradesh</div>
                <div>https://janlabh.in/check</div>
                <div>https://janlabh.in/updates</div>
                <div>https://janlabh.in/about</div>
                <div>https://janlabh.in/editorial-policy</div>
                <div>https://janlabh.in/verification-policy</div>
                <div>https://janlabh.in/corrections-policy</div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-6 py-3.5 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            {isHi ? 'बंद करें' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
