export interface EvaluationPillar {
  id: string;
  number: string;
  title_en: string;
  title_hi: string;
  subtitle_en: string;
  subtitle_hi: string;
  description_en: string;
  description_hi: string;
  checklist_en: string[];
  checklist_hi: string[];
}

export interface QuickCategoryGroup {
  id: string;
  title_en: string;
  title_hi: string;
  badge_en: string;
  badge_hi: string;
  flagshipSchemes_en: string[];
  flagshipSchemes_hi: string[];
  targetAudience_en: string;
  targetAudience_hi: string;
  linkUrl: string;
}

export interface ReadinessStep {
  stepNumber: number;
  title_en: string;
  title_hi: string;
  action_en: string;
  action_hi: string;
  warning_en: string;
  warning_hi: string;
}

export interface FinderFaqItem {
  id: string;
  q_en: string;
  q_hi: string;
  a_en: string;
  a_hi: string;
}

export const EVALUATION_PILLARS: EvaluationPillar[] = [
  {
    id: 'jurisdiction',
    number: '01',
    title_en: 'Territorial Jurisdiction & Domicile',
    title_hi: 'क्षेत्राधिकार एवं स्थानीय अधिवास (Domicile)',
    subtitle_en: 'Constitutional allocation of welfare budgets',
    subtitle_hi: 'कल्याणकारी बजट का संवैधानिक राज्यवार आवंटन',
    description_en:
      'Welfare schemes in India are segregated into Central Sector (Union-wide) and State-Funded programs. The finder matches your geographical state against statutory domicile rules, ancestral land records (Khatiyan), or registered residence duration.',
    description_hi:
      'भारत में सरकारी योजनाएं केंद्रीय क्षेत्र (अखिल भारतीय) और राज्य-वित्तपोषित श्रेणियों में विभाजित हैं। हमारा एल्गोरिथ्म आपके गृह राज्य का मिलान राज्य अधिवास नियमों, खतियान भूमि रिकॉर्ड और निरंतर निवास अवधि के आधार पर करता है।',
    checklist_en: [
      'Central schemes available across all 28 states & 8 UTs',
      'State flagship benefits reserved for bona fide state residents',
      'Requires digital Domicile / Niwas certificate from state revenue office',
    ],
    checklist_hi: [
      'केंद्रीय योजनाएं सभी 28 राज्यों व 8 केंद्र शासित प्रदेशों में मान्य',
      'राज्य की फ्लैगशिप योजनाएं केवल प्रमाणित मूल निवासियों के लिए आरक्षित',
      'राज्य राजस्व विभाग द्वारा जारी डिजिटल निवास प्रमाण पत्र आवश्यक',
    ],
  },
  {
    id: 'demographics',
    number: '02',
    title_en: 'Demographic & Age Cohort Thresholds',
    title_hi: 'जनसांख्यिकी एवं आयु वर्ग सीमाएं',
    subtitle_en: 'Targeted life-stage welfare interventions',
    subtitle_hi: 'जीवन-चरण अनुसार विशिष्ट कल्याणकारी लाभ',
    description_en:
      'Every government notification defines strict chronological age boundaries. The finder filters programs catering specifically to childhood immunisation/schooling, youth skill apprenticeships, working-age maternal assistance, or senior citizen pensions.',
    description_hi:
      'प्रत्येक सरकारी गजट में स्पष्ट आयु सीमाएं निर्धारित होती हैं। यह टूल बचपन की पोषण/शिक्षा योजनाओं, युवा कौशल व अप्रेंटिसशिप, कामकाजी महिलाओं की मातृत्व सहायता, और बुजुर्गों की सम्मान पेंशन का सटीक आयु मिलान करता है।',
    checklist_en: [
      'Youth & Students: 14 to 28 years (Scholarships & Education Loans)',
      'Women Empowerment: 18 to 50/65 years (Direct Cash Transfers & SHG credit)',
      'Senior Citizens: 60+ (Indira Gandhi Pension) & 70+ (Ayushman Vaya Vandana)',
    ],
    checklist_hi: [
      'युवा व छात्र: 14 से 28 वर्ष (छात्रवृत्ति एवं शिक्षा ऋण योजनाएं)',
      'महिला सशक्तिकरण: 18 से 50/65 वर्ष (मंईयां सम्मान, लाडली बहना व ऋण)',
      'वरिष्ठ नागरिक: 60+ (वृद्धावस्था पेंशन) एवं 70+ (आयुष्मान वय वंदना ₹5 लाख)',
    ],
  },
  {
    id: 'economic',
    number: '03',
    title_en: 'Economic Profiling & Landholding Metrics',
    title_hi: 'आर्थिक वर्गीकरण एवं भूमि स्वामित्व',
    subtitle_en: 'Means-tested poverty thresholds & asset checks',
    subtitle_hi: 'साधन-परीक्षित गरीबी रेखा एवं संपत्ति सत्यापन',
    description_en:
      'Government schemes utilize specific proxy poverty markers. The engine tests your family income limits (e.g. ₹2.5 Lakh/year for DBT grants, ₹8 Lakh for EWS quota), ration card categorization (Antyodaya/BPL), and agricultural cultivable land limits.',
    description_hi:
      'सरकारी योजनाएं वास्तविक जरूरतमंदों तक पहुँचने के लिए आय सीमाओं की जांच करती हैं। हमारा फाइंडर आपकी पारिवारिक आय सीमा (जैसे डीबीटी हेतु ₹2.5 लाख/वर्ष), राशन कार्ड प्रकार (अंत्योदय/बीपीएल/पीएचएच), और कृषि योग्य भूमि की जांच करता है।',
    checklist_en: [
      'Income Certificate issued by Tehsildar / Circle Officer',
      'Landholding Khata/Khesra verification for farmer income schemes',
      'Non-taxpayer status mandatory for direct welfare pensions',
    ],
    checklist_hi: [
      'तहसीलदार/अंचलाधिकारी द्वारा निर्गत सक्षम आय प्रमाण पत्र',
      'किसान योजनाओं के लिए खसरा/खतौनी/जमाबंदी भूमि रिकॉर्ड',
      'मासिक नकद योजनाओं के लिए परिवार का गैर-आयकरदाता होना अनिवार्य',
    ],
  },
  {
    id: 'occupational',
    number: '04',
    title_en: 'Occupational & Social Vulnerability',
    title_hi: 'व्यावसायिक एवं सामाजिक प्राथमिकता',
    subtitle_en: 'Specialized caste, craft, and worker protections',
    subtitle_hi: 'विशिष्ट जाति, पारंपरिक कारीगर एवं श्रमिक सुरक्षा',
    description_en:
      'Statutory protections and grants are tailored for marginalized communities and unorganized workers. The algorithm matches traditional craft workers (Vishwakarma 18 trades), MGNREGA job cardholders, construction workers (BOCW), and SC/ST/OBC quotas.',
    description_hi:
      'संवैधानिक प्रावधानों के तहत वंचित समुदायों और असंगठित कामगारों के लिए विशेष योजनाएं हैं। यह टूल पारंपरिक 18 ट्रेड के कारीगरों (पीएम विश्वकर्मा), मनरेगा जॉब कार्डधारकों, निर्माण श्रमिकों (BOCW) और एससी/एसटी/ओबीसी आरक्षण का मिलान करता है।',
    checklist_en: [
      'e-Shram / BOCW registration for unorganized labor benefits',
      'Artisan skill verification through Gram Panchayat / ULB',
      'Central & State Caste certificates with digital barcode',
    ],
    checklist_hi: [
      'असंगठित श्रमिकों हेतु ई-श्रम अथवा बीओसीडब्ल्यू (BOCW) पंजीयन',
      'पारंपरिक शिल्पकारों हेतु ग्राम पंचायत/शहरी निकाय सत्यापन',
      'डिजिटल बारकोड युक्त केंद्रीय अथवा राज्य स्तरीय जाति प्रमाण पत्र',
    ],
  },
];

export const QUICK_CATEGORY_GROUPS: QuickCategoryGroup[] = [
  {
    id: 'farmers',
    title_en: 'Farmers & Agricultural Cultivators',
    title_hi: 'किसान एवं कृषि उत्पादक',
    badge_en: 'Income & Crop Security',
    badge_hi: 'आय एवं फसल सुरक्षा',
    flagshipSchemes_en: ['PM-Kisan (₹6,000/yr)', 'Kisan Credit Card (KCC)', 'PM Fasal Bima (PMFBY)', 'PM Krishi Sinchayee'],
    flagshipSchemes_hi: ['पीएम-किसान (₹6,000/वर्ष)', 'किसान क्रेडिट कार्ड (KCC)', 'प्रधानमंत्री फसल बीमा', 'कृषि सिंचाई योजना'],
    targetAudience_en: 'Small & marginal landholders, tenant cultivators, and allied dairy/fishery farmers.',
    targetAudience_hi: 'लघु एवं सीमांत किसान, बटाईदार और पशुपालन/मत्स्य पालन से जुड़े कृषक परिवार।',
    linkUrl: '/categories/farmers',
  },
  {
    id: 'women',
    title_en: 'Women Empowerment & Maternity Support',
    title_hi: 'महिला सशक्तिकरण एवं मातृत्व सुरक्षा',
    badge_en: 'Direct Bank Assistance',
    badge_hi: 'सीधी नकद सहायता',
    flagshipSchemes_en: ['Maiya Samman (₹2,500/mo)', 'Ladli Behna (₹1,250/mo)', 'Majhi Ladki Bahin (₹1,500/mo)', 'PMMVY Maternity (₹5,000)'],
    flagshipSchemes_hi: ['मंईयां सम्मान (₹2,500/माह)', 'लाडली बहना (₹1,250/माह)', 'माझी लाड़की बहिण (₹1,500/माह)', 'मातृ वंदना (₹5,000)'],
    targetAudience_en: 'Women aged 18–60, pregnant/lactating mothers, and women Self-Help Groups (SHGs).',
    targetAudience_hi: '18 से 60 वर्ष की महिलाएं, गर्भवती व धात्री माताएं और स्वयं सहायता समूह (SHG) दीदियां।',
    linkUrl: '/categories/women',
  },
  {
    id: 'students',
    title_en: 'Students & Higher Education Aspirants',
    title_hi: 'छात्र, युवा एवं उच्च शिक्षा',
    badge_en: 'Tuition & Credit Cards',
    badge_hi: 'छात्रवृत्ति एवं ऋण',
    flagshipSchemes_en: ['National Scholarship (NSP)', 'Post-Matric SC/ST/OBC Aid', 'Guruji Student Credit Card', 'Bihar Student Credit Card'],
    flagshipSchemes_hi: ['राष्ट्रीय छात्रवृत्ति (NSP)', 'पोस्ट-मैट्रिक छात्रवृत्ति', 'गुरुजी स्टूडेंट क्रेडिट कार्ड', 'बिहार स्टूडेंट क्रेडिट कार्ड'],
    targetAudience_en: 'Class 9–12 students, undergraduate/postgraduate college attendees, and competitive exam aspirants.',
    targetAudience_hi: 'कक्षा 9-12 के विद्यार्थी, स्नातक/परास्नातक छात्र और प्रतियोगी परीक्षाओं की तैयारी करने वाले युवा।',
    linkUrl: '/categories/students',
  },
  {
    id: 'social-security',
    title_en: 'Seniors, Divyangjan & Health Security',
    title_hi: 'वरिष्ठ नागरिक, दिव्यांगजन व स्वास्थ्य सुरक्षा',
    badge_en: 'Universal Healthcare',
    badge_hi: 'मुफ्त इलाज व पेंशन',
    flagshipSchemes_en: ['Ayushman Bharat (₹5 Lakh cover)', 'Vaya Vandana Card (Age 70+)', 'Indira Gandhi National Pension', 'Sarvajan Pension'],
    flagshipSchemes_hi: ['आयुष्मान भारत (₹5 लाख मुफ्त इलाज)', 'वय वंदना कार्ड (70+ बुजुर्ग)', 'इंदिरा गांधी राष्ट्रीय पेंशन', 'सर्वजन पेंशन योजना'],
    targetAudience_en: 'Senior citizens aged 60+, differently-abled citizens with 40%+ disability, and BPL/SECC families.',
    targetAudience_hi: '60 वर्ष से अधिक आयु के बुजुर्ग, 40%+ दिव्यांगता वाले नागरिक और बीपीएल/गरीब परिवार।',
    linkUrl: '/categories/health',
  },
];

export const READINESS_STEPS: ReadinessStep[] = [
  {
    stepNumber: 1,
    title_en: 'Verify Aadhaar-NPCI Bank Seeding',
    title_hi: 'बैंक खाते की आधार-एनपीसीआई (NPCI) सीडिंग जांचें',
    action_en:
      'Check status on uidai.gov.in or NPCI BASE. Ensure your primary savings account is mapped to the DBT payment bridge, not just linked for simple KYC.',
    action_hi:
      'uidai.gov.in या NPCI पोर्टल पर स्टेटस जांचें। सुनिश्चित करें कि आपका बैंक खाता केवल साधारण केवाईसी नहीं, बल्कि डीबीटी (DBT) भुगतान प्राप्त करने के लिए सक्रिय है।',
    warning_en: 'Over 68% of initial DBT payment failures in India occur due to inactive NPCI bank mapping.',
    warning_hi: 'भारत में 68% से अधिक सरकारी डीबीटी भुगतान केवल इसलिए अटकते हैं क्योंकि खाता बैंक में आधार से मैप नहीं होता।',
  },
  {
    stepNumber: 2,
    title_en: 'Secure Digital Barcoded Domicile & Income Certificates',
    title_hi: 'डिजिटल बारकोड युक्त निवास व आय प्रमाण पत्र बनवाएं',
    action_en:
      'Apply online through your state single-window portal (e.g. Jharsewa, RTPS Bihar, e-District UP). Ensure current fiscal year validity (2025–2026).',
    action_hi:
      'अपने राज्य के आधिकारिक ई-डिस्ट्रिक्ट पोर्टल (झारसेवा, आरटीपीएस बिहार, ई-डिस्ट्रिक्ट यूपी) से ऑनलाइन आवेदन करें। चालू वित्तीय वर्ष (2025-26) की वैधता अनिवार्य है।',
    warning_en: 'Old paper-based offline certificates without verifiable QR codes or digital signatures are rejected.',
    warning_hi: 'बिना क्यूआर कोड या बिना डिजिटल हस्ताक्षर वाले पुराने हस्तलिखित प्रमाण पत्र सरकारी जांच में खारिज हो जाते हैं।',
  },
  {
    stepNumber: 3,
    title_en: 'Synchronize Name & DOB Across Identity Proofs',
    title_hi: 'आधार, राशन कार्ड और अंकपत्र में नाम व जन्मतिथि एक समान रखें',
    action_en:
      'Ensure the exact spelling of your full name and date of birth match across Aadhaar, Ration Card, Bank Passbook, and Voter ID.',
    action_hi:
      'सुनिश्चित करें कि आपके आधार कार्ड, राशन कार्ड, बैंक पासबुक और पहचान पत्र में आपके नाम की स्पेलिंग और जन्मतिथि शत-प्रतिशत एक समान हो।',
    warning_en: 'Spelling mismatches (e.g. Kumari / Devi / Sharma) trigger automated algorithmic rejections.',
    warning_hi: 'नाम में मामूली अंतर (जैसे कुमारी/देवी/उपनाम का छूटना) ऑटोमेटेड कंप्यूटर मिलान में आवेदन निरस्त कर देता है।',
  },
  {
    stepNumber: 4,
    title_en: 'Submit via Authorised Portal or Verified Pragya Kendra / CSC',
    title_hi: 'केवल अधिकृत पोर्टल अथवा सीएससी (प्रज्ञा केंद्र) से आवेदन करें',
    action_en:
      'Always submit applications directly through official .gov.in or .nic.in portals, or visit an authorised CSC Center. Never pay unauthorized agent fees.',
    action_hi:
      'आवेदन हमेशा आधिकारिक .gov.in अथवा .nic.in वेबसाइट से करें या अधिकृत कॉमन सर्विस सेंटर (CSC/प्रज्ञा केंद्र) पर जाएं। किसी दलाल को पैसे न दें।',
    warning_en: 'Government scheme applications on official portals are either 100% free or capped at nominal ₹15–₹30 CSC fees.',
    warning_hi: 'अधिकांश सरकारी योजनाओं में ऑनलाइन आवेदन पूर्णतः निशुल्क होता है अथवा सीएससी शुल्क ₹15-₹30 निर्धारित होता है।',
  },
];

export const FINDER_FAQS: FinderFaqItem[] = [
  {
    id: 'faq-calc',
    q_en: 'How does the JanLabh Scheme Finder calculate and match eligibility for my profile?',
    q_hi: 'जनलाभ स्कीम फाइंडर मेरी प्रोफाइल के लिए पात्रता की गणना और मिलान कैसे करता है?',
    a_en: 'The JanLabh Scheme Finder utilizes a deterministic rule-matching engine built on official Union and State Government gazette notifications. When you select your state, age group, profession, and financial interests, the algorithm evaluates statutory criteria including jurisdictional validity (Central vs State), age brackets, target social categories, and landholding thresholds. Programs matching all essential conditions are scored and ranked with transparent reasons explaining why they fit your profile.',
    a_hi: 'जनलाभ स्कीम फाइंडर भारत सरकार एवं राज्य सरकारों के आधिकारिक गजट अधिसूचनाओं पर आधारित एक पारदर्शी नियम-मिलान इंजन का उपयोग करता है। जब आप अपना राज्य, आयु वर्ग, पेशा और आवश्यकता चुनते हैं, तो एल्गोरिथ्म संवैधानिक क्षेत्राधिकार (केंद्र बनाम राज्य), आयु सीमा, सामाजिक श्रेणी और भूमि स्वामित्व की शर्तों का मिलान करता है। जो योजनाएं आपकी सभी प्राथमिक शर्तों को पूरा करती हैं, उन्हें स्पष्ट कारणों के साथ रैंक करके दिखाया जाता है।',
  },
  {
    id: 'faq-privacy',
    q_en: 'Does JanLabh collect, transmit, or store my personal Aadhaar number or phone number?',
    q_hi: 'क्या जनलाभ मेरा आधार नंबर, मोबाइल नंबर या कोई व्यक्तिगत डेटा एकत्र या स्टोर करता है?',
    a_en: 'No, absolutely not. The JanLabh Scheme Finder operates strictly under a Zero Sensitive Data Storage Guarantee and complies with the Indian Digital Personal Data Protection Act, 2023 (DPDP Act). The recommendation engine executes entirely client-side within your browser’s volatile memory. We do not ask for Aadhaar numbers, PAN cards, OTPs, mobile numbers, or banking passwords. Your selections are deleted the moment you close or refresh your browser tab.',
    a_hi: 'नहीं, बिल्कुल नहीं। जनलाभ स्कीम फाइंडर भारतीय डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 (DPDP Act) के तहत "शून्य डेटा संग्रहण नीति" का पालन करता है। यह टूल पूरी तरह से आपके मोबाइल या कंप्यूटर ब्राउज़र की अस्थायी मेमोरी (Client-side) में निष्पादित होता है। हम कभी भी आधार नंबर, पैन कार्ड, बैंक पासवर्ड, मोबाइल नंबर या ओटीपी नहीं मांगते। जैसे ही आप ब्राउज़र बंद करते हैं, आपका चयन स्वतः समाप्त हो जाता है।',
  },
  {
    id: 'faq-next',
    q_en: 'What should I do after the tool recommends a government scheme for me?',
    q_hi: 'टूल द्वारा किसी योजना की सिफारिश किए जाने के बाद मुझे क्या कदम उठाने चाहिए?',
    a_en: 'Once you discover a matching scheme, click on "View Full Details" to review the comprehensive scheme charter, including required document checklists, income ceilings, and official portal links. Next, ensure your bank account is seeded with Aadhaar on the NPCI mapper, secure valid digital domicile and income certificates from your state e-District portal, and proceed to submit your formal application on the official .gov.in department portal or at your nearest authorized CSC / Pragya Kendra.',
    a_hi: 'अनुशंसित योजना मिलने के बाद, "योजना विवरण देखें" पर क्लिक करके उसके सभी नियम, आवश्यक दस्तावेजों की सूची और आधिकारिक पोर्टल लिंक पढ़ें। इसके बाद सुनिश्चित करें कि आपका बैंक खाता आधार से एनपीसीआई मैपर पर लिंक है, अपने राज्य के ई-डिस्ट्रिक्ट पोर्टल से वैध निवास व आय प्रमाण पत्र जुटाएं, और संबंधित विभाग के आधिकारिक .gov.in पोर्टल अथवा नजदीकी प्रज्ञा केंद्र (CSC) पर जाकर औपचारिक आवेदन करें।',
  },
  {
    id: 'faq-few',
    q_en: 'Why did the finder return only a few schemes for my profile? Does that mean I am not eligible for others?',
    q_hi: 'फाइंडर ने मेरी प्रोफाइल के लिए केवल कुछ योजनाएं ही क्यों दिखाईं? क्या मैं अन्य योजनाओं का पात्र नहीं हूँ?',
    a_en: 'The finder prioritizes high-confidence matches based on the specific inputs you provided (e.g., student-specific scholarships, farmer-specific income support, or state-specific women cash transfers). If you selected "Farmer", the engine will intentionally suppress student scholarships or non-relevant urban schemes to save your time. To explore broader schemes, you can either adjust your filter interests or browse the comprehensive category and state hubs from the main navigation.',
    a_hi: 'फाइंडर केवल उन योजनाओं को दिखाता है जिनका आपकी दी गई जानकारी से शत-प्रतिशत सटीक मिलान होता है। उदाहरण के लिए, यदि आपने "किसान" चुना है, तो टूल छात्रों की छात्रवृत्तियों या अप्रासंगिक शहरी योजनाओं को छिपा देता है ताकि आपका समय बचे। अन्य कल्याणकारी योजनाएं देखने के लिए आप अपनी रुचियां बदल सकते हैं या मुख्य मेनू से "श्रेणी" व "राज्य हब" डायरेक्टरी में जाकर पूरी सूची देख सकते हैं।',
  },
  {
    id: 'faq-apply',
    q_en: 'Can I apply directly for government scheme funds or cash grants on the JanLabh website?',
    q_hi: 'क्या मैं जनलाभ वेबसाइट पर सीधे सरकारी योजना के पैसे या अनुदान के लिए आवेदन कर सकता हूँ?',
    a_en: 'No. JanLabh is an independent public-interest civic information platform and does NOT collect government applications, disburse welfare grants, or charge citizen fees. Official scheme applications must strictly be submitted on verified Union Ministry or State Government portals (ending in .gov.in or .nic.in) or through statutory government kiosks (Pragya Kendra, CSC, e-Mitra, Aaple Sarkar). We provide verified links and document guides to ensure citizens navigate safely without middleman exploitation.',
    a_hi: 'नहीं। जनलाभ एक स्वतंत्र सार्वजनिक नागरिक सूचना पोर्टल है। हम सरकारी योजनाओं के आवेदन स्वीकार नहीं करते और न ही कोई सरकारी अनुदान बांटते हैं। सरकारी योजनाओं के औपचारिक आवेदन केवल भारत सरकार अथवा राज्य सरकारों के आधिकारिक पोर्टल्स (.gov.in या .nic.in) अथवा सरकारी प्रज्ञा केंद्र/सीएससी पर ही जमा होते हैं। हम नागरिकों को दलालों से बचाने के लिए सही सरकारी वेबसाइट्स और आधिकारिक प्रक्रिया की सटीक जानकारी देते हैं।',
  },
  {
    id: 'faq-difference',
    q_en: 'What is the key difference between the "Scheme Finder" and the "Eligibility Checker"?',
    q_hi: 'जनलाभ के "स्कीम फाइंडर (Finder)" और "पात्रता चेकर (Checker)" टूल में क्या मुख्य अंतर है?',
    a_en: 'The Scheme Finder is a discovery tool: you input your general profile (age, state, identity, interests) and it searches across our entire multi-state database to recommend all relevant programs you might not know exist. The Eligibility Checker, by contrast, is a scheme-specific verification tool: you select one specific scheme (e.g. PM-Kisan or Maiya Samman) and answer granular condition questions (exact landholding, taxpayer status, family income) to get a pass/fail eligibility audit and a printable document slip.',
    a_hi: 'स्कीम फाइंडर (Finder) एक खोज उपकरण है: आप अपनी सामान्य जानकारी (आयु, राज्य, पेशा, आवश्यकता) देते हैं और यह पूरे डेटाबेस में से आपके लिए उपयुक्त सभी योजनाएं खोज कर लाता है। वहीं पात्रता चेकर (Checker) एक विशिष्ट जांच उपकरण है: आप किसी एक योजना (जैसे पीएम-किसान या मंईयां सम्मान) को चुनते हैं और उसकी बारीक शर्तों (सटीक भूमि, आयकर स्थिति, आय) के आधार पर अपनी योग्यता की जांच करते हैं और जरूरी दस्तावेजों की पर्ची पाते हैं।',
  },
];
