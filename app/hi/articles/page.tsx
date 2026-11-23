import React from 'react';
import type { Metadata } from 'next';
import { ARTICLES } from '@/data/articles';
import ArticlesDirectoryClient from '@/app/articles/ArticlesDirectoryClient';

export const metadata: Metadata = {
  title: 'नागरिक गाइड्स व समस्या समाधान 2026: बैंक आधार NPCI लिंक, फॉर्म रिजेक्शन व प्रपत्र | JanLabh',
  description: 'सरकारी योजनाओं के स्टेप-बाय-स्टेप नागरिक समाधान: बैंक खाते में आधार NPCI DBT लिंक कैसे करें, फॉर्म रिजेक्शन ठीक करने का तरीका, शपथ पत्र फॉर्मेट व ऑनलाइन आवेदन गाइड।',
  keywords: [
    'bank account me aadhar npci dbt link status check online',
    'dbt link bank account status check kaise kare',
    'npci aadhar link bank account status check 2026',
    'aadhaar npci link nahi hai to kya kare bank me',
    'dbt payment rejected by bank account type mismatch solution',
    'sarkari yojana form reject hone par kya kare',
    'application disapproved rejected by verification officer solution',
    'aadhaar dbt mandate form pdf download',
    'kya ek se jyada bank account me dbt enable ho sakta hai',
    'samagra id me ekyc status check online samagra gov in',
    'सरकारी योजना समस्या समाधान',
    'बैंक खाते में आधार एनपीसीआई लिंक कैसे करें',
    'डीबीटी एक्टिव कैसे करें',
    'योजना फॉर्म रिजेक्ट होने पर क्या करें'
  ],
  alternates: {
    canonical: 'https://janlabh.in/hi/articles',
    languages: {
      'en': 'https://janlabh.in/articles',
      'hi': 'https://janlabh.in/hi/articles',
      'x-default': 'https://janlabh.in/articles',
    },
  },
  openGraph: {
    title: 'नागरिक समाधान केंद्र व गाइड्स: फॉर्म, समस्या निवारण व समाधान | JanLabh',
    description: 'बैंक खाते में DBT लिंक, फॉर्म रिजेक्शन सुधार, योजना लिस्ट और ऑनलाइन आवेदन की पूरी जानकारी आसान भाषा में।',
    url: 'https://janlabh.in/hi/articles',
    siteName: 'JanLabh India',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function HindiArticlesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'होम',
            'item': 'https://janlabh.in/hi',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'गाइड्स व समाधान',
            'item': 'https://janlabh.in/hi/articles',
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        'name': 'नागरिक गाइड्स व सरकारी योजना समस्या समाधान डायरेक्टरी 2026',
        'url': 'https://janlabh.in/hi/articles',
        'description': 'सरकारी योजनाओं के सरल समाधान व स्टेप-बाय-स्टेप गाइड्स।',
        'mainEntity': {
          '@type': 'ItemList',
          'numberOfItems': ARTICLES.length,
          'itemListElement': ARTICLES.map((article, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
            'name': article.title_hi,
            'url': `https://janlabh.in/hi/articles/${article.slug}`,
          })),
        },
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'बैंक खाते में सामान्य आधार लिंक होने और NPCI DBT सीडिंग में क्या अंतर है?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'सामान्य आधार लिंकिंग केवल बैंक शाखा स्तर पर पहचान (KYC) सत्यापन के लिए होती है ताकि आपका खाता चालू रहे। वहीं आधार NPCI सीडिंग आपके खाते को भारतीय राष्ट्रीय भुगतान निगम (NPCI) के केंद्रीय सर्वर से जोड़ती है। जब भी केंद्र या राज्य सरकार डीबीटी का पैसा भेजती है, वह बैंक खाते के बजाय आधार नंबर पर भेजा जाता है, जो केवल उसी खाते में जमा होता है जो NPCI सर्वर पर सीडेड हो। एक व्यक्ति के कई खातों में आधार लिंक हो सकता है, लेकिन पूरे देश में केवल एक ही खाता NPCI से सीड हो सकता है।'
            }
          },
          {
            '@type': 'Question',
            'name': 'यदि बैंक शाखा का कर्मचारी आधार डीबीटी सीडिंग (NPCI Mandate) फॉर्म जमा करने से मना करे तो क्या करें?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'आरबीआई (RBI) के स्पष्ट दिशानिर्देशों के अनुसार कोई भी बैंक शाखा ग्राहक से आधार सीडिंग फॉर्म लेने से इनकार नहीं कर सकती। यदि शाखा आनाकानी करे, तो बैंक के शाखा प्रबंधक (Branch Manager) से लिखित शिकायत करें। यदि फिर भी समाधान न हो, तो सबसे सरल और 24-घंटे का उपाय यह है कि नजदीकी डाकघर (India Post Payments Bank - IPPB) जाएं और 10 मिनट में नया बायोमेट्रिक शून्य-शेष खाता खुलवाकर डीबीटी सीडिंग टिक करवाएं। IPPB का डीबीटी खाता 24 घंटे में एनपीसीआई सर्वर पर एक्टिव हो जाता है।'
            }
          },
          {
            '@type': 'Question',
            'name': 'क्या एक ही नागरिक को दो अलग-अलग योजनाओं का पैसा दो अलग-अलग बैंक खातों में मिल सकता है?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'नहीं। भारत सरकार के डीबीटी नियमों के अनुसार एक नागरिक के आधार नंबर पर पूरे देश में एक समय में केवल एक ही बैंक खाता प्राथमिक डीबीटी खाता (Primary DBT Account) के रूप में मैप हो सकता है। चाहे वह पीएम-किसान हो, लाड़ली बहना, मंईयां सम्मान, या छात्रवृत्ति—सभी योजनाओं का डीबीटी भुगतान स्वतः उसी एक सक्रिय बैंक खाते में आएगा। यदि आप दूसरा खाता सीड कराएंगे, तो पुराना खाता स्वतः डी-लिंक हो जाएगा।'
            }
          },
          {
            '@type': 'Question',
            'name': 'सरकारी योजना का आवेदन फॉर्म निरस्त (Disapproved/Rejected) होने के बाद नया फॉर्म कब और कैसे भर सकते हैं?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'सबसे पहले आधिकारिक पोर्टल पर अपना आवेदन क्रमांक या आधार नंबर डालकर रिजेक्शन का सटीक कारण (Rejection Reason) देखें। यदि रिजेक्शन दस्तावेजों में अस्पष्टता या मामूली त्रुटि के कारण हुआ है, तो पोर्टल पर "Edit Application" विकल्प द्वारा सही दस्तावेज दोबारा अपलोड करें। यदि आवेदन स्थायी रूप से निरस्त हो गया है, तो आगामी प्रशासनिक चरण (जैसे लाड़ली बहना या मंईयां सम्मान का अगला राउंड) में ग्राम पंचायत कैंप में उपस्थित होकर नया आवेदन जमा करें।'
            }
          },
          {
            '@type': 'Question',
            'name': 'क्या सरकारी योजनाओं के शपथ पत्र के लिए कचहरी से महंगा ₹100 का स्टाम्प पेपर बनवाना जरूरी है?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'नहीं, यह दलालों द्वारा फैलाई जाने वाली सबसे बड़ी भ्रांति है। भारत सरकार और अधिकांश राज्य सरकारों (जैसे यूपी, एमपी, महाराष्ट्र, झारखंड) ने नागरिक सरलीकरण नियमों के तहत शपथ पत्र प्रक्रिया को आसान बनाया है। अधिकांश योजनाओं (जैसे कन्या सुमंगला या लाड़ली बहना) में आधिकारिक पोर्टल पर उपलब्ध निर्धारित स्व-घोषणा पत्र (Self-Declaration Format) सादे कागज पर प्रिंट करके अभिभावक/आवेदक के हस्ताक्षर के साथ 100% मान्य होता है। इसके लिए नोटरी या महंगे स्टाम्प पेपर की आवश्यकता नहीं होती।'
            }
          },
          {
            '@type': 'Question',
            'name': 'आवेदन की पावती पर्ची (Acknowledgement Receipt) खो जाने पर आवेदन क्रमांक दोबारा कैसे निकालें?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'पावती पर्ची खोने पर घबराने की आवश्यकता नहीं है। संबंधित योजना के आधिकारिक पोर्टल (जैसे cmladlibahna.mp.gov.in, mksy.up.gov.in या pmkisan.gov.in) पर जाएं और "Know Your Application Status" या "Know Your Registration Number" पर क्लिक करें। वहां अपना 12 अंकों का आधार नंबर अथवा 9 अंकों की समग्र/राशन कार्ड सदस्य संख्या और रजिस्टर्ड मोबाइल नंबर दर्ज करें। आपके मोबाइल पर प्राप्त ओटीपी दर्ज करते ही स्क्रीन पर आपका आवेदन क्रमांक और पूरी स्थिति प्रदर्शित हो जाएगी।'
            }
          }
        ]
      }
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticlesDirectoryClient articles={ARTICLES} initialLang="hi" />
    </>
  );
}
