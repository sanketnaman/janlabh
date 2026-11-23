'use client';

import React from 'react';
import StaticPageLayout from '@/components/StaticPageLayout';
import {
  ShieldCheck,
  Lock,
  Cookie,
  AlertCircle,
  Mail,
  Scale,
  FileText,
  Server,
  UserCheck,
  ExternalLink,
  ShieldAlert,
  Clock
} from 'lucide-react';
import { Language } from '@/types';
import Link from 'next/link';

export default function PrivacyPolicyView({ forcedLang }: { forcedLang?: Language } = {}) {
  return (
    <StaticPageLayout
      breadcrumbTitle_en="Privacy Policy"
      breadcrumbTitle_hi="गोपनीयता नीति"
      activeNav="trust"
      forcedLang={forcedLang}
    >
      {(lang) => {
        const isHi = lang === 'hi';
        return (
          <article className="prose prose-slate dark:prose-invert max-w-none space-y-10 bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* Page Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                <ShieldCheck className="h-4 w-4" />
                <span>{isHi ? 'डेटा सुरक्षा, कानूनी अधिकार एवं गोपनीयता मानक' : 'Trust, Data Privacy & Legal Compliance'}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
                {isHi ? 'गोपनीयता नीति (Privacy Policy)' : 'Privacy Policy'}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                <span>{isHi ? 'अंतिम संशोधन: 23 नवंबर 2026' : 'Last Updated: November 23, 2026'}</span>
                <span>•</span>
                <span>{isHi ? 'डीपीडीपी अधिनियम 2023 एवं गूगल एडसेंस अनुपालन' : 'DPDP Act 2023 & Google AdSense Compliant'}</span>
              </div>
            </div>

            {/* Core Zero Sensitive Data Guarantee Box */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-slate-900 border-2 border-emerald-300 dark:border-emerald-800/80 rounded-2xl space-y-3 not-prose">
              <div className="flex items-center gap-2 text-base font-bold text-emerald-950 dark:text-emerald-200">
                <Lock className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{isHi ? 'शून्य संवेदनशील डेटा संकलन की पूर्ण गारंटी (Zero Sensitive Data Guarantee)' : 'Strict Zero Sensitive Data Storage Guarantee'}</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-300 leading-relaxed">
                {isHi
                  ? 'JanLabh.in कभी भी नागरिकों का आधार नंबर, बैंक खाता संख्या, एटीएम पिन, नेटबैंकिंग पासवर्ड, मोबाइल ओटीपी (OTP), या कोई भी सरकारी पहचान पत्र न तो मांगता है और न ही किसी सर्वर या डेटाबेस पर एकत्र करता है। हमारे सभी पात्रता कैलकुलेटर (Eligibility Checkers) विशुद्ध रूप से आपके अपने ब्राउज़र की मेमोरी में क्लाइंट-साइड निष्पादित होते हैं।'
                  : 'JanLabh.in strictly NEVER requests, processes, or stores Aadhaar numbers, biometric credentials, bank account numbers, ATM PINs, OTPs, or government identity documents. All scheme eligibility calculators and category filters operate entirely in client-side volatile memory within your web browser.'}
              </p>
            </div>

            {/* Section 1: Introduction & Institutional Charter */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Scale className="h-5 w-5 text-amber-600" />
                <span>1. {isHi ? 'प्रस्तावना एवं संस्थागत दायित्व' : 'Introduction & Platform Charter'}</span>
              </h2>
              <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 space-y-2">
                <p>
                  {isHi
                    ? 'JanLabh ("हम", "हमारा" या "मंच") भारत में सरकारी कल्याणकारी योजनाओं, छात्रवृत्तियों और वित्तीय लाभों की प्रामाणिक व निष्पक्ष जानकारी प्रदान करने वाला एक स्वतंत्र नागरिक सूचना पोर्टल (janlabh.in) संचालित करता है।'
                    : 'JanLabh ("we", "our", or "platform") operates an independent civic guidance and welfare information portal accessible at janlabh.in. This Privacy Policy transparently sets forth our practices regarding the processing, protection, and non-retention of information when you access or use our services.'}
                </p>
                <p>
                  {isHi
                    ? 'यह गोपनीयता नीति स्पष्ट करती है कि हमारी वेबसाइट का उपयोग करते समय आपकी कौन-सी तकनीकी जानकारी एकत्र की जा सकती है, कुकीज का प्रबंधन कैसे होता है, और भारतीय डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम (DPDP Act, 2023) के तहत आपके क्या वैधानिक अधिकार हैं।'
                    : 'This document details our minimal technical logging, cookie management protocols, Google AdSense standards, and your statutory rights under the Digital Personal Data Protection Act, 2023 (DPDP Act, India).'}
                </p>
              </div>
            </section>

            {/* Section 2: DPDP Act 2023 Compliance */}
            <section className="space-y-4 p-5 sm:p-6 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-2xl not-prose">
              <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
                <ShieldCheck className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                <h2>2. {isHi ? 'डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम (DPDP Act 2023) अनुपालन' : 'Digital Personal Data Protection Act (DPDP Act 2023) Compliance'}</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {isHi
                  ? 'JanLabh.in भारतीय डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 (DPDP Act) के सिद्धांतों का पूर्ण निष्ठा से पालन करता है:'
                  : 'JanLabh operates in strict alignment with the statutory principles set forth under the Digital Personal Data Protection Act, 2023 (Act No. 22 of 2023):'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white block">
                    {isHi ? 'डेटा न्यूनतमकरण (Data Minimisation):' : 'Strict Data Minimisation:'}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400">
                    {isHi ? 'हम केवल वही तकनीकी डेटा उपयोग करते हैं जो साइट संचालन और सुरक्षा के लिए अपरिहार्य हो। किसी भी नागरिक की व्यक्तिगत प्रोफाइलिंग नहीं की जाती।' : 'We collect only non-personal telemetry strictly essential for network delivery. We do not build user behavioral profiles.'}
                  </p>
                </div>

                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white block">
                    {isHi ? 'उद्देश्य सीमा (Purpose Limitation):' : 'Purpose Limitation:'}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400">
                    {isHi ? 'यदि आप संपर्क फ़ॉर्म के माध्यम से स्वेच्छा से अपना नाम या ईमेल भेजते हैं, तो उसका उपयोग केवल आपके प्रश्न का उत्तर देने के लिए होता है।' : 'Voluntarily provided contact details are used solely to reply to citizen inquiries and are never repurposed for marketing.'}
                  </p>
                </div>

                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white block">
                    {isHi ? 'नागरिक अधिकार (Citizen Rights):' : 'Citizen Privacy Rights:'}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400">
                    {isHi ? 'नागरिकों को अपने द्वारा भेजे गए संदेश के विवरण को देखने, सुधारने या पूर्णतः मिटाने (Erasure) का कानूनी अधिकार है।' : 'Users hold the statutory right to request a summary of, correction to, or immediate deletion of voluntarily submitted messages.'}
                  </p>
                </div>

                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white block">
                    {isHi ? 'नो डेटा ब्रोकरेज (Zero Sale):' : 'Zero Commercial Sale of Data:'}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400">
                    {isHi ? 'जनलाभ किसी भी उपयोगकर्ता का डेटा किसी विज्ञापन ब्रोकर, टेलीमार्केटर या राजनीतिक एजेंसी को कभी नहीं बेचता।' : 'We never sell, rent, license, or barter user data to third-party data brokers, telemarketers, or commercial agencies.'}
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Google AdSense and Third-Party Advertising Policy */}
            <section className="space-y-4 p-5 sm:p-6 bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl not-prose">
              <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
                <Cookie className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <h2>3. {isHi ? 'Google AdSense, DoubleClick कुकीज एवं विज्ञापन नीति' : 'Google AdSense, DoubleClick Cookies & Advertising Policy'}</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {isHi
                  ? 'जनलाभ एक निःशुल्क सूचना सेवा है। साइट के संचालन और सर्वर व्यय को वहन करने के लिए हमारी वेबसाइट पर Google AdSense के माध्यम से तीसरे पक्ष के विज्ञापन प्रदर्शित किए जा सकते हैं। इस संबंध में निम्नलिखित नियम लागू होते हैं:'
                  : 'JanLabh provides free public guidance funded through contextual programmatic advertising served by Google AdSense. Google and other third-party vendors adhere to the following privacy standards:'}
              </p>
              <ul className="text-xs space-y-2 text-slate-700 dark:text-slate-300 list-disc pl-5 leading-relaxed">
                <li>
                  <strong>{isHi ? 'Google DoubleClick DART कुकी:' : 'Google DoubleClick DART Cookie:'}</strong>{' '}
                  {isHi
                    ? 'Google एक तीसरे पक्ष के विक्रेता के रूप में janlabh.in पर विज्ञापन प्रदर्शित करने के लिए कुकीज का उपयोग करता है। DART कुकी का उपयोग Google को हमारे उपयोगकर्ताओं को इंटरनेट पर उनकी पिछली विज़िट के आधार पर प्रासंगिक विज्ञापन दिखाने में सक्षम बनाता है।'
                    : 'Google, as a third-party vendor, uses cookies to serve ads on janlabh.in. Google\'s use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other destinations across the Internet.'}
                </li>
                <li>
                  <strong>{isHi ? 'विज्ञापन वैयक्तिकरण से बाहर निकलना (Opt-Out):' : 'Opting Out of Personalized Advertising:'}</strong>{' '}
                  {isHi
                    ? 'उपयोगकर्ता किसी भी समय Google विज्ञापन सेटिंग्स पर जाकर वैयक्तिकृत विज्ञापनों से बाहर निकल सकते हैं: '
                    : 'Users may opt out of personalized advertising at any time by visiting Google Ads Settings: '}
                  <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer nofollow" className="text-amber-700 dark:text-amber-400 font-bold hover:underline">
                    adssettings.google.com
                  </a>
                  {isHi ? '। वैकल्पिक रूप से, आप ' : '. Alternatively, you can opt out of third-party cookie usage via '}
                  <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer nofollow" className="text-amber-700 dark:text-amber-400 font-bold hover:underline">
                    aboutads.info
                  </a>
                  ।
                </li>
                <li>
                  <strong>{isHi ? 'सहमति प्रबंधन (Consent Management Platform - CMP):' : 'Consent Management Platform (CMP):'}</strong>{' '}
                  {isHi
                    ? 'हमारी वेबसाइट Google द्वारा प्रमाणित सहमति प्रबंधन प्रणाली (CMP) का उपयोग करती है, जो उपयोगकर्ताओं को उनकी कुकी प्राथमिकताओं को चुनने और नियंत्रित करने का पूरा अधिकार देती है।'
                    : 'Our platform implements Google-certified Consent Management Platform (CMP) frameworks, enabling citizens to control, modify, or decline non-essential cookies.'}
                </li>
              </ul>
            </section>

            {/* Section 4: First-Party Local Storage & Functional Cookies */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Server className="h-5 w-5 text-amber-600" />
                <span>4. {isHi ? 'जनलाभ द्वारा उपयोग की जाने वाली आंतरिक कुकीज एवं लोकल स्टोरेज' : 'First-Party Local Storage & Functional Preferences'}</span>
              </h2>
              <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 space-y-2">
                <p>
                  {isHi
                    ? 'JanLabh.in आपके ब्राउज़र के लोकल स्टोरेज (Local Storage) का उपयोग केवल दो तकनीकी कार्यों के लिए करता है:'
                    : 'JanLabh.in uses modern browser LocalStorage solely for two non-identifying functional preferences:'}
                </p>
                <ul className="text-xs space-y-1.5 list-disc pl-5">
                  <li><strong>{isHi ? 'भाषा चयन (Language Preference):' : 'Language Preference:'}</strong> {isHi ? 'हिंदी या अंग्रेजी में साइट देखने की आपकी पसंद याद रखने के लिए।' : 'Remembers whether you selected Hindi or English.'}</li>
                  <li><strong>{isHi ? 'थीम चयन (Dark / Light Theme):' : 'Theme Preference:'}</strong> {isHi ? 'आपकी आंखों की सुविधा के लिए डार्क मोड या लाइट मोड की प्राथमिकता सुरक्षित रखने के लिए।' : 'Saves your display choice between Light Mode and Dark Mode.'}</li>
                </ul>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {isHi
                    ? 'यह डेटा आपके डिवाइस पर ही रहता है और हमारे सर्वर पर कभी नहीं भेजा जाता।'
                    : 'This configuration data resides entirely on your local device and is never transmitted to our backend.'}
                </p>
              </div>
            </section>

            {/* Section 5: Log Files & Network Telemetry */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-600" />
                <span>5. {isHi ? 'लॉग फ़ाइलें एवं नेटवर्क सुरक्षा टेलीमेट्री' : 'Log Files & Network Security Telemetry'}</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'JanLabh.in मानक उद्योग सुरक्षा प्रक्रियाओं के तहत सामान्य सर्वर लॉग फाइलों का उपयोग करता है। इनमें इंटरनेट प्रोटोकॉल (IP) पते, ब्राउज़र का प्रकार, ऑपरेटिंग सिस्टम, रेफ़रिंग/एग्जिट पेज, और अनुरोधित पृष्ठों के टाइमस्टैम्प शामिल होते हैं। यह डेटा किसी भी व्यक्ति की व्यक्तिगत पहचान से नहीं जोड़ा जाता और इसका उपयोग केवल डीडीओएस (DDoS) हमलों से बचाव, साइट स्पीड सुधार और तकनीकी विसंगतियों को ठीक करने के लिए किया जाता है।'
                  : 'Following standard web infrastructure practices, JanLabh.in logs non-personal technical telemetry including IP addresses, browser agents, operating systems, referring URLs, and request timestamps. This technical information is unlinked to any individual identity and is utilized exclusively to maintain Cloudflare edge security, mitigate DDoS abuse, and optimize server response times.'}
              </p>
            </section>

            {/* Section 6: Client-Side In-Memory Execution of Eligibility Checkers */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Lock className="h-5 w-5 text-amber-600" />
                <span>6. {isHi ? 'पात्रता कैलकुलेटर: पूर्णतः इन-मेमोरी निष्पादन' : 'Eligibility Engines: 100% In-Memory Execution'}</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'जब आप हमारे "Scheme Finder" या "Eligibility Checker" का उपयोग करते हैं, तो आपके द्वारा चुने गए विकल्प (जैसे आयु, श्रेणी, राज्य या पेशा) विशुद्ध रूप से आपके अपने ब्राउज़र के अंदर जावास्क्रिप्ट में निष्पादित होते हैं। यह जानकारी कभी भी किसी सर्वर पर भेजी या संग्रहीत नहीं की जाती। जैसे ही आप पेज बंद करते हैं, यह डेटा पूरी तरह मिट जाता है।'
                  : 'Whenever you interact with our Scheme Finder, Category Filters, or Eligibility Checker, inputs (such as age group, gender, or state) are evaluated purely in-memory via client-side JavaScript within your own browser. No input is ever transmitted across the network or logged in any backend database. Closing the browser window purges all volatile states instantly.'}
              </p>
            </section>

            {/* Section 7: External Official Government Portal Links */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-amber-600" />
                <span>7. {isHi ? 'बाहरी सरकारी वेबसाइटों के लिंक (Outbound Links)' : 'Outbound Government Ministry Links (.gov.in)'}</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'नागरिकों की सुरक्षा के लिए JanLabh.in केवल भारत सरकार और राज्य सरकारों के आधिकारिक पोर्टलों (.gov.in / .nic.in) के सीधे लिंक प्रदान करता है। जब आप उन बाहरी वेबसाइटों पर क्लिक करते हैं, तो आप उन संबंधित मंत्रालयों की अपनी गोपनीयता नीति और शर्तों के अधीन होते हैं। हम बाहरी सरकारी वेबसाइटों की सामग्री या उनकी डेटा नीतियों के लिए उत्तरदायी नहीं हैं।'
                  : 'For citizen authenticity, JanLabh.in embeds verified hyperlinks directly to official Central and State government portals (.gov.in / .nic.in). Upon navigating away to external government domains, your interactions are governed by the respective ministry\'s privacy policies and service conditions. JanLabh exercises no control over external public infrastructure.'}
              </p>
            </section>

            {/* Section 8: Children's Online Privacy Protection */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-amber-600" />
                <span>8. {isHi ? 'बच्चों की ऑनलाइन गोपनीयता सुरक्षा (Protection of Minors)' : 'Protection of Minors (COPPA & DPDP Guidelines)'}</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'JanLabh.in 18 वर्ष से कम आयु के बच्चों से जानबूझकर कोई भी व्यक्तिगत पहचान योग्य जानकारी एकत्र नहीं करता है। हमारी सामग्री पूरी तरह सार्वजनिक कल्याणकारी सूचनाओं पर केंद्रित है। यदि किसी अभिभावक को संदेह हो कि उनके बच्चे ने संपर्क फॉर्म के माध्यम से कोई व्यक्तिगत विवरण साझा किया है, तो कृपया privacy@janlabh.in पर संपर्क करें; हम उस संदेश को तुरंत रिकॉर्ड से हटा देंगे।'
                  : 'JanLabh.in does not knowingly solicit or collect personal data from minors under the age of 18. Our platform provides purely educational civic information. If a parent or guardian believes their child has submitted identifying information through our contact channel, please email privacy@janlabh.in immediately for expedited deletion.'}
              </p>
            </section>

            {/* Section 9: Data Security & Encryption Standards */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-amber-600" />
                <span>9. {isHi ? 'डेटा सुरक्षा एवं एन्क्रिप्शन मानक' : 'Data Security & SSL/TLS Encryption'}</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'JanLabh.in पर सभी नेटवर्क संचार आधुनिक SSL/TLS 1.3 एन्क्रिप्शन के माध्यम से सुरक्षित होते हैं। हमारा इंफ्रास्ट्रक्चर आधुनिक सुरक्षा फ़ायरवॉल और क्लाउडफ्लेयर के सुरक्षित नेटवर्क पर संचालित होता है ताकि नागरिकों को सुरक्षित ब्राउजिंग अनुभव मिल सके।'
                  : 'All network transmissions across JanLabh.in are safeguarded using industry-standard TLS 1.3 encryption. Our infrastructure operates on enterprise-grade Cloudflare edge security protocols with automated DDoS mitigation, HTTP Strict Transport Security (HSTS), and secure content headers.'}
              </p>
            </section>

            {/* Section 10: Grievance Officer & Statutory Contact */}
            <section className="space-y-4 border-t border-slate-200 dark:border-slate-800 pt-8 not-prose">
              <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
                <Mail className="h-5 w-5 text-amber-600" />
                <h2>10. {isHi ? 'वैधानिक शिकायत निवारण अधिकारी (Grievance Redressal Officer)' : 'Statutory Grievance Redressal Officer (IT Rules & DPDP Act)'}</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {isHi
                  ? 'सूचना प्रौद्योगिकी अधिनियम, 2000 एवं डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 के तहत गोपनीयता या डेटा संबंधी किसी भी शिकायत के लिए हमारे नामित शिकायत अधिकारी से संपर्क करें:'
                  : 'In compliance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules and the DPDP Act 2023, the designated Grievance Officer details are published below:'}
              </p>
              <div className="p-5 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 font-mono text-xs space-y-2 text-slate-800 dark:text-slate-200">
                <div><strong>Grievance Officer:</strong> Sanket Sinha</div>
                <div><strong>Designation:</strong> Data Protection & Grievance Officer, JanLabh.in</div>
                <div>
                  <strong>Official Privacy Email:</strong>{' '}
                  <a href="mailto:privacy@janlabh.in" className="text-amber-700 dark:text-amber-400 font-bold hover:underline">
                    privacy@janlabh.in
                  </a>
                  {' '}/ contact@janlabh.in
                </div>
                <div><strong>Platform:</strong> JanLabh.in (Independent Public Information Initiative)</div>
                <div><strong>Country of Operation:</strong> India</div>
                <div><strong>Statutory Acknowledgment:</strong> Within 48 business hours</div>
                <div><strong>Grievance Resolution Window:</strong> Within 15 business days</div>
              </div>
            </section>
          </article>
        );
      }}
    </StaticPageLayout>
  );
}
