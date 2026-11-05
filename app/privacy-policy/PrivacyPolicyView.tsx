'use client';

import React from 'react';
import StaticPageLayout from '@/components/StaticPageLayout';
import { ShieldCheck, Lock, Cookie, AlertCircle, Mail } from 'lucide-react';

export default function PrivacyPolicyView() {
  return (
    <StaticPageLayout
      breadcrumbTitle_en="Privacy Policy"
      breadcrumbTitle_hi="गोपनीयता नीति"
      activeNav="trust"
    >
      {(lang) => {
        const isHi = lang === 'hi';
        return (
          <article className="prose prose-slate dark:prose-invert max-w-none space-y-8 bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                <ShieldCheck className="h-4 w-4" />
                <span>{isHi ? 'कानूनी एवं सुरक्षा मानक' : 'Trust, Security & Privacy Standards'}</span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
                {isHi ? 'गोपनीयता नीति (Privacy Policy)' : 'Privacy Policy'}
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isHi ? 'अंतिम संशोधन: 5 नवंबर 2026' : 'Last Updated: November 5, 2026'}
              </p>
            </div>

            {/* Core Zero Data Guarantee */}
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-900 dark:text-emerald-200">
                <Lock className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>{isHi ? 'नागरिक डेटा सुरक्षा की पूर्ण गारंटी (Zero Aadhaar Storage)' : 'Zero Sensitive Personal Data Storage Guarantee'}</span>
              </div>
              <p className="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed">
                {isHi
                  ? 'JanLabh.in कभी भी नागरिकों का आधार नंबर, बैंक खाता संख्या, पासवर्ड, मोबाइल ओटीपी अथवा कोई भी सरकारी पहचान पत्र का विवरण न तो मांगता है और न ही किसी सर्वर पर संग्रहीत करता है।'
                  : 'JanLabh.in strictly never requests, processes, or stores Aadhaar numbers, bank account numbers, banking PINs, OTPs, or government portal credentials. Our calculators compute eligibility transiently in client memory.'}
              </p>
            </div>

            {/* Section 1: Introduction */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                1. {isHi ? 'प्रस्तावना (Introduction)' : 'Introduction'}
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'JanLabh ("हम", "हमारा" या "मंच") भारतीय नागरिकों को सरकारी कल्याणकारी योजनाओं और छात्रवृत्तियों के बारे में सटीक व निष्पक्ष जानकारी प्रदान करता है। यह गोपनीयता नीति स्पष्ट करती है कि हमारी वेबसाइट (janlabh.in) का उपयोग करते समय आपकी कौन-सी गैर-संवेदनशील जानकारी का उपयोग किया जा सकता है।'
                  : 'JanLabh ("we", "our", or "platform") operates an independent civic guidance portal at janlabh.in. This Privacy Policy informs users of our policies regarding the collection, use, and disclosure of personal and technical data when you use our service.'}
              </p>
            </section>

            {/* Section 2: Google AdSense and Third-Party Advertising Policy */}
            <section className="space-y-4 p-5 bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-xl">
              <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
                <Cookie className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <h2>2. {isHi ? 'Google AdSense एवं कुकीज नीति (Google AdSense & DoubleClick Cookies)' : 'Google AdSense & Advertising Cookies Policy'}</h2>
              </div>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'हमारी वेबसाइट पर तीसरे पक्ष के विज्ञापन साझेदार, विशेष रूप से Google AdSense, विज्ञापन प्रदर्शित करने के लिए कुकीज (Cookies) का उपयोग कर सकते हैं:'
                  : 'Third-party vendors, including Google, use cookies to serve ads based on a user\'s prior visits to your website or other websites on the internet.'}
              </p>
              <ul className="text-xs space-y-2 text-slate-700 dark:text-slate-300 list-disc pl-5">
                <li>
                  <strong>{isHi ? 'DoubleClick DART कुकी:' : 'DoubleClick DART Cookie:'}</strong>{' '}
                  {isHi
                    ? 'Google DART कुकी का उपयोग करता है ताकि वह हमारे उपयोगकर्ताओं को janlabh.in और इंटरनेट पर अन्य साइटों के उनके दौरे के आधार पर प्रासंगिक विज्ञापन दिखा सके।'
                    : 'Google\'s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to janlabh.in and/or other sites on the Internet.'}
                </li>
                <li>
                  <strong>{isHi ? 'विज्ञापन वैयक्तिकरण से बाहर निकलना (Opt-out):' : 'Opting Out of Personalized Advertising:'}</strong>{' '}
                  {isHi
                    ? 'उपयोगकर्ता Google विज्ञापन सेटिंग्स (Ads Settings) पर जाकर वैयक्तिकृत विज्ञापनों (Personalized Ads) से बाहर निकल सकते हैं। वैकल्पिक रूप से, आप www.aboutads.info पर जाकर तीसरे पक्ष के वेंडर्स द्वारा कुकीज के उपयोग से बाहर निकल सकते हैं।'
                    : 'Users may opt out of personalized advertising by visiting Google Ads Settings at https://adssettings.google.com or by visiting https://www.aboutads.info.'}
                </li>
                <li>
                  <strong>{isHi ? 'तीसरे पक्ष के विज्ञापन नेटवर्क:' : 'Third-Party Ad Networks:'}</strong>{' '}
                  {isHi
                    ? 'तीसरे पक्ष के विज्ञापन सर्वर या विज्ञापन नेटवर्क तकनीक का उपयोग करते हैं जो janlabh.in पर दिखाई देने वाले विज्ञापनों और लिंक्स में उपयोग किए जाते हैं, जो सीधे उपयोगकर्ताओं के ब्राउज़र पर भेजे जाते हैं।'
                    : 'Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on janlabh.in.'}
                </li>
              </ul>
            </section>

            {/* Section 3: Log Files */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                3. {isHi ? 'लॉग फ़ाइलें (Log Files)' : 'Log Files'}
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'JanLabh.in मानक लॉग फाइलों के उपयोग की प्रक्रिया का पालन करता है। ये फाइलें वेबसाइट पर आने वाले आगंतुकों की गैर-व्यक्तिगत तकनीकी जानकारी दर्ज करती हैं, जिसमें इंटरनेट प्रोटोकॉल (IP) पते, ब्राउज़र का प्रकार, इंटरनेट सेवा प्रदाता (ISP), दिनांक और समय की मुहर, और पेजों की संख्या शामिल हैं। यह जानकारी रुझानों का विश्लेषण करने और साइट के प्रदर्शन को बेहतर बनाने के लिए उपयोग की जाती है।'
                  : 'JanLabh.in follows standard industry practice regarding log files. These files log non-personal technical data including IP addresses, browser types, Internet Service Providers (ISP), date/time stamps, referring/exit pages, and click counts to administer the site, track trends, and safeguard infrastructure.'}
              </p>
            </section>

            {/* Section 4: Eligibility Calculator In-Memory Processing */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                4. {isHi ? 'पात्रता कैलकुलेटर और इन-मेमोरी निष्पादन' : 'Eligibility Calculator Client-Side Execution'}
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'जब आप हमारे "Scheme Finder" या "Eligibility Checker" का उपयोग करते हैं, तो आपके द्वारा चुने गए विकल्प (जैसे आयु वर्ग, राज्य, पेशा) विशुद्ध रूप से आपके अपने ब्राउज़र के अंदर क्लाइंट-साइड निष्पादित होते हैं। यह डेटा कभी भी हमारे सर्वर या किसी डेटाबेस में रिकॉर्ड या स्टोर नहीं होता।'
                  : 'Whenever you interact with our Scheme Finder or Eligibility Engine, demographic inputs (age, state, income bracket) are evaluated strictly in client-side memory inside your web browser. Nothing is saved or persisted to any server or database.'}
              </p>
            </section>

            {/* Section 5: External Official Links Disclaimer */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                5. {isHi ? 'बाहरी सरकारी वेबसाइटों के लिंक (External Government Links)' : 'Third-Party & Official Government Website Links'}
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'हमारी वेबसाइट में भारत सरकार और राज्य सरकारों के आधिकारिक पोर्टलों (.gov.in / .nic.in) के सीधे वेब लिंक शामिल हैं। एक बार जब आप उन बाहरी वेबसाइटों पर जाते हैं, तो आप उनकी संबंधित गोपनीयता नीतियों और सेवा शर्तों द्वारा शासित होते हैं। हम बाहरी वेबसाइटों की सामग्री या गोपनीयता प्रथाओं के लिए उत्तरदायी नहीं हैं।'
                  : 'JanLabh.in contains outbound hyperlinks directly to official Central and State government portals (.gov.in / .nic.in). Once you leave our domain, you are governed by the privacy policy of the respective government ministry or service provider.'}
              </p>
            </section>

            {/* Section 6: Children's Online Privacy */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                6. {isHi ? 'बच्चों की ऑनलाइन गोपनीयता (Children\'s Privacy Protection)' : 'Children\'s Privacy (COPPA Compliance)'}
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'JanLabh.in 13 वर्ष से कम आयु के बच्चों से जानबूझकर कोई भी व्यक्तिगत पहचान योग्य जानकारी एकत्र नहीं करता है। यदि किसी अभिभावक को लगता है कि उनके बच्चे ने ऐसी जानकारी साझा की है, तो कृपया तुरंत हमसे संपर्क करें।'
                  : 'JanLabh.in does not knowingly collect personal identifiable information from children under the age of 13. If you believe that your child provided personal information on our site, please contact us immediately to purge the record.'}
              </p>
            </section>

            {/* Section 7: Grievance Officer & Contact */}
            <section className="space-y-3 border-t border-slate-200 dark:border-slate-800 pt-6">
              <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
                <Mail className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <h2>7. {isHi ? 'गोपनीयता अधिकारी एवं संपर्क सूत्र' : 'Grievance Officer & Privacy Contact'}</h2>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {isHi
                  ? 'यदि आपके पास इस गोपनीयता नीति या हमारी प्रथाओं के संबंध में कोई प्रश्न या सुझाव है, तो कृपया हमारी संपादकीय एवं डेटा डेस्क से संपर्क करें:'
                  : 'For questions, feedback, or grievance redressal regarding our privacy policy, contact our Data & Editorial Desk:'}
              </p>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl text-xs space-y-1 font-mono text-slate-800 dark:text-slate-200">
                <div><strong>Email:</strong> privacy@janlabh.in / contact@janlabh.in</div>
                <div><strong>Portal:</strong> JanLabh.in – Independent Citizen Welfare Guidance Desk</div>
                <div><strong>Location:</strong> New Delhi & Ranchi, India</div>
              </div>
            </section>
          </article>
        );
      }}
    </StaticPageLayout>
  );
}
