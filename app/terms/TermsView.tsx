'use client';

import React from 'react';
import StaticPageLayout from '@/components/StaticPageLayout';
import { AlertTriangle, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Language } from '@/types';

export default function TermsView({ forcedLang }: { forcedLang?: Language } = {}) {
  return (
    <StaticPageLayout
      breadcrumbTitle_en="Terms of Use & Disclaimer"
      breadcrumbTitle_hi="नियम व वैधानिक अस्वीकरण"
      activeNav="trust"
      forcedLang={forcedLang}
    >
      {(lang) => {
        const isHi = lang === 'hi';
        return (
          <article className="prose prose-slate dark:prose-invert max-w-none space-y-8 bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
                <FileText className="h-4 w-4" />
                <span>{isHi ? 'विधिक सेवा शर्तें व डिस्क्लेमर' : 'Legal Terms & Statutory Disclaimers'}</span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
                {isHi ? 'सेवा की शर्तें एवं वैधानिक अस्वीकरण' : 'Terms of Use & Statutory Disclaimer'}
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isHi ? 'अंतिम संशोधन: 5 नवंबर 2026' : 'Last Updated: November 5, 2026'}
              </p>
            </div>

            {/* Mandatory Non-Affiliation Statutory Notice */}
            <div className="p-5 bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-800 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">
                <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>{isHi ? 'अनिवार्य वैधानिक सूचना (Non-Governmental Platform)' : 'Mandatory Statutory Notice'}</span>
              </div>
              <p className="text-xs text-amber-950 dark:text-amber-200 leading-relaxed font-medium">
                {isHi
                  ? 'JanLabh.in एक निजी और स्वतंत्र सूचना मार्गदर्शन पोर्टल है। इसका भारत सरकार (Government of India), किसी राज्य सरकार, केंद्र शासित प्रदेश, अथवा किसी भी सरकारी मंत्रालय या विभाग से कोई प्रत्यक्ष या अप्रत्यक्ष आधिकारिक संबंध नहीं है। हम कोई आधिकारिक सरकारी सेवा या प्रत्यक्ष आवेदन स्वीकृति प्रदान नहीं करते।'
                  : 'JanLabh.in is a strictly independent, private public-interest information initiative. It is NOT affiliated with, sponsored by, authorized by, or endorsed by the Government of India, any State Government, or any Union Territory administration. We do not process official applications or issue scheme sanctions.'}
              </p>
            </div>

            {/* Section 1: Nature of the Service */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                1. {isHi ? 'सेवा का स्वरूप (Nature of the Platform)' : 'Nature of Service'}
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'JanLabh.in नागरिकों की सुविधा के लिए विभिन्न सरकारी पोर्टलों, राजपत्रों और सार्वजनिक घोषणाओं से जानकारी संकलित करके उसे सरल, व्यवस्थित और द्विभाषी (हिंदी व अंग्रेजी) रूप में प्रस्तुत करता है। हमारा उद्देश्य केवल जन-जागरूकता फैलाना और जटिल नियमों को आसानी से समझाना है।'
                  : 'JanLabh.in synthesizes publicly available government gazettes, circulars, and notifications into accessible, structured guidance. All information is provided free of charge for informational and educational awareness.'}
              </p>
            </section>

            {/* Section 2: No Guarantee of Scheme Sanction */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                2. {isHi ? 'पात्रता व स्वीकृति की कोई गारंटी नहीं' : 'No Guarantee of Benefit Sanction'}
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'हमारे "Scheme Finder" और "Eligibility Checker" उपकरण केवल नागरिकों को एक प्रारंभिक मार्गदर्शन देने के लिए बनाए गए हैं। किसी भी योजना की अंतिम पात्रता, सत्यापन और वित्तीय लाभ की स्वीकृति केवल संबंधित सरकारी विभाग और अधिकृत प्रशासनिक अधिकारियों के विवेक पर निर्भर करती है।'
                  : 'Our Scheme Finder and Eligibility Checker tools provide indicative guidance based on published rules. Final eligibility, application acceptance, and benefit disbursements are exclusively within the statutory discretion of competent government officers.'}
              </p>
            </section>

            {/* Section 3: Official Portals vs JanLabh */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                3. {isHi ? 'आधिकारिक सरकारी पोर्टल का उपयोग अनिवार्य' : 'Official Portal Applications Mandatory'}
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'नागरिकों को किसी भी योजना के लिए औपचारिक आवेदन केवल संबंधित सरकार की आधिकारिक वेबसाइट (.gov.in अथवा .nic.in) पर जाकर ही करना चाहिए। JanLabh कभी भी किसी योजना के आवेदन के लिए कोई शुल्क नहीं मांगता।'
                  : 'Citizens must submit official scheme applications strictly on designated official government portals (.gov.in / .nic.in) or authorized physical counters (CSC, BDO, Tehsildar offices). JanLabh never charges fees or takes application commissions.'}
              </p>
            </section>

            {/* Section 4: Limitation of Liability */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                4. {isHi ? 'दायित्व की सीमा (Limitation of Liability)' : 'Limitation of Liability'}
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'यद्यपि हम सामग्री की सटीकता बनाए रखने का हर संभव प्रयास करते हैं, फिर भी नियमों, तिथियों और दिशानिर्देशों में अप्रत्याशित परिवर्तनों के कारण किसी भी अनजाने त्रुटि या विसंगति के लिए JanLabh या उसके संचालक किसी भी वित्तीय या कानूनी क्षति के लिए उत्तरदायी नहीं होंगे।'
                  : 'While we strive for absolute accuracy, government rules, deadlines, and budget allocations are subject to frequent regulatory updates. JanLabh and its operators shall not be liable for any direct or indirect damages arising out of the use of this portal.'}
              </p>
            </section>

            {/* Section 5: Intellectual Property & Citations */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                5. {isHi ? 'बौद्धिक संपदा एवं स्रोत उद्धरण' : 'Intellectual Property & Citations'}
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {isHi
                  ? 'सभी सरकारी योजनाओं के नाम, संबंधित मंत्रालयों के प्रतीक चिन्ह और आधिकारिक दस्तावेज संबंधित सरकारी विभागों की बौद्धिक संपदा हैं। उनका उपयोग यहां केवल सार्वजनिक सूचना और निष्पक्ष उद्धरण (Fair Use) के तहत किया गया है।'
                  : 'All scheme names, department logos, and official gazette excerpts remain the intellectual property of their respective government ministries. They are cited under fair use for public identification and civic literacy.'}
              </p>
            </section>

            {/* Section 6: Contact */}
            <section className="space-y-3 border-t border-slate-200 dark:border-slate-800 pt-6">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                6. {isHi ? 'विधिक प्रश्न एवं संपर्क सूत्र' : 'Legal Inquiries & Contact'}
              </h2>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-mono">
                Email: legal@janlabh.in / contact@janlabh.in | JanLabh Editorial & Legal Desk
              </p>
            </section>
          </article>
        );
      }}
    </StaticPageLayout>
  );
}
