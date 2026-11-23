export interface StatePortalInfo {
  stateId: string;
  stateName_en: string;
  stateName_hi: string;
  portalName_en: string;
  portalName_hi: string;
  url: string;
  primaryService_en: string;
  primaryService_hi: string;
  category: string;
}

export interface StateDbtComparison {
  stateId: string;
  stateName_en: string;
  stateName_hi: string;
  schemeName_en: string;
  schemeName_hi: string;
  benefit_en: string;
  benefit_hi: string;
  eligibility_en: string;
  eligibility_hi: string;
  portalName: string;
  portalUrl: string;
}

export interface StateIdentitySystem {
  stateId: string;
  stateName_en: string;
  stateName_hi: string;
  idName_en: string;
  idName_hi: string;
  purpose_en: string;
  purpose_hi: string;
  howToGet_en: string;
  howToGet_hi: string;
}

export interface StateFaqItem {
  id: string;
  q_en: string;
  q_hi: string;
  a_en: string;
  a_hi: string;
}

export const STATE_PORTALS: StatePortalInfo[] = [
  {
    stateId: 'all-india',
    stateName_en: 'Central Government',
    stateName_hi: 'केंद्र सरकार',
    portalName_en: 'myScheme & National Portal',
    portalName_hi: 'माईस्कीम एवं राष्ट्रीय पोर्टल',
    url: 'https://www.myscheme.gov.in',
    primaryService_en: 'Unified search & eligibility engine across all Union Ministries and central sector schemes.',
    primaryService_hi: 'सभी केंद्रीय मंत्रालयों और योजनाओं की एकीकृत खोज एवं पात्रता जांच इंजन।',
    category: 'National Portal',
  },
  {
    stateId: 'jharkhand',
    stateName_en: 'Jharkhand',
    stateName_hi: 'झारखंड',
    portalName_en: 'Jharsewa (e-District)',
    portalName_hi: 'झारसेवा (ई-डिस्ट्रिक्ट)',
    url: 'https://jharsewa.jharkhand.gov.in',
    primaryService_en: 'Online issuance of Domicile (Niwas), Caste (Jati), Income certificates and Guruji Credit Card.',
    primaryService_hi: 'स्थानीय निवास प्रमाण पत्र, जाति, आय प्रमाण पत्र और गुरुजी स्टूडेंट क्रेडिट कार्ड आवेदन।',
    category: 'Citizen Services',
  },
  {
    stateId: 'bihar',
    stateName_en: 'Bihar',
    stateName_hi: 'बिहार',
    portalName_en: 'RTPS Bihar (ServicePlus)',
    portalName_hi: 'आर.टी.पी.एस. बिहार (सर्विसप्लस)',
    url: 'https://serviceonline.bihar.gov.in',
    primaryService_en: 'Right to Public Services delivery: Resident proof, Non-Creamy Layer, Kanya Utthan tracking.',
    primaryService_hi: 'लोक सेवाओं का अधिकार: ऑनलाइन निवास, गैर-क्रीमी लेयर, और कन्या उत्थान योजना ट्रैकिंग।',
    category: 'Citizen Services',
  },
  {
    stateId: 'uttar-pradesh',
    stateName_en: 'Uttar Pradesh',
    stateName_hi: 'उत्तर प्रदेश',
    portalName_en: 'e-District UP & Family ID',
    portalName_hi: 'ई-डिस्ट्रिक्ट यूपी एवं फैमिली आईडी',
    url: 'https://edistrict.up.gov.in',
    primaryService_en: 'Revenue certificates, scholarships, pensioner registration, and Ek Parivar Ek Pehchan card.',
    primaryService_hi: 'राजस्व प्रमाण पत्र, छात्रवृत्ति, पेंशन सत्यापन और एक परिवार एक पहचान (Family ID) पोर्टल।',
    category: 'Citizen Services',
  },
  {
    stateId: 'madhya-pradesh',
    stateName_en: 'Madhya Pradesh',
    stateName_hi: 'मध्य प्रदेश',
    portalName_en: 'Samagra Social Security Mission (SPRS)',
    portalName_hi: 'समग्र सामाजिक सुरक्षा मिशन',
    url: 'https://samagra.gov.in',
    primaryService_en: '9-digit Samagra ID registration, Ladli Behna e-KYC, school admissions, and ration cards.',
    primaryService_hi: '9-अंकीय समग्र आईडी पंजीकरण, लाडली बहना ई-केवाईसी, राशन कार्ड और छात्रवृत्ति मैपिंग।',
    category: 'Citizen ID & Welfare',
  },
  {
    stateId: 'maharashtra',
    stateName_en: 'Maharashtra',
    stateName_hi: 'महाराष्ट्र',
    portalName_en: 'Aaple Sarkar & MahaDBT',
    portalName_hi: 'आपले सरकार एवं महाडीबीटी',
    url: 'https://aaplesarkar.mahaonline.gov.in',
    primaryService_en: 'Single window citizen services, post-matric scholarships, and Majhi Ladki Bahin tracking.',
    primaryService_hi: 'सिंगल विंडो नागरिक सेवाएं, पोस्ट-मैट्रिक छात्रवृत्ति और माझी लाड़की बहिण योजना ट्रैकिंग।',
    category: 'Citizen Services & DBT',
  },
  {
    stateId: 'rajasthan',
    stateName_en: 'Rajasthan',
    stateName_hi: 'राजस्थान',
    portalName_en: 'Jan Soochna & Jan Aadhaar Portal',
    portalName_hi: 'जन सूचना एवं जन आधार पोर्टल',
    url: 'https://jansoochna.rajasthan.gov.in',
    primaryService_en: 'Proactive welfare disclosure, Jan Aadhaar family profiling, and Anupriti coaching results.',
    primaryService_hi: 'पारदर्शी जनकल्याण सूचनाएं, जन आधार परिवार कार्ड और अनुप्रति कोचिंग योजना आवंटन।',
    category: 'Transparency & ID',
  },
  {
    stateId: 'gujarat',
    stateName_en: 'Gujarat',
    stateName_hi: 'गुजरात',
    portalName_en: 'Digital Gujarat Portal',
    portalName_hi: 'डिजिटल गुजरात पोर्टल',
    url: 'https://www.digitalgujarat.gov.in',
    primaryService_en: 'Over 80+ online citizen certificates, Mahila Utkarsh SHG loans, and digital revenue records.',
    primaryService_hi: '80 से अधिक ऑनलाइन प्रमाण पत्र, मुख्यमंत्री महिला उत्कर्ष योजना और डिजिटल राजस्व रिकॉर्ड।',
    category: 'Citizen Services',
  },
];

export const STATE_DBT_MATRIX: StateDbtComparison[] = [
  {
    stateId: 'jharkhand',
    stateName_en: 'Jharkhand',
    stateName_hi: 'झारखंड',
    schemeName_en: 'Mukhyamantri Maiya Samman Yojana (JMMSY)',
    schemeName_hi: 'मुख्यमंत्री मंईयां सम्मान योजना',
    benefit_en: '₹2,500 / month (₹30,000 / year) direct bank cash transfer',
    benefit_hi: '₹2,500 प्रति माह (₹30,000 सालाना) सीधा बैंक खाता ट्रांसफर',
    eligibility_en: 'Women aged 18–50, Jharkhand resident, family non-taxpayer, Aadhaar-linked DBT account.',
    eligibility_hi: '18 से 50 वर्ष की महिलाएं, झारखंड की स्थानीय निवासी, गैर-आयकरदाता परिवार, आधार लिंक्ड बैंक खाता।',
    portalName: 'MMMSY Portal',
    portalUrl: 'https://mmmsy.jharkhand.gov.in',
  },
  {
    stateId: 'madhya-pradesh',
    stateName_en: 'Madhya Pradesh',
    stateName_hi: 'मध्य प्रदेश',
    schemeName_en: 'Mukhyamantri Ladli Behna Yojana',
    schemeName_hi: 'मुख्यमंत्री लाडली बहना योजना',
    benefit_en: '₹1,250 / month (₹15,000 / year) direct monthly DBT',
    benefit_hi: '₹1,250 प्रति माह (₹15,000 सालाना) सीधा मासिक डीबीटी',
    eligibility_en: 'Married/widowed/divorced women aged 21–60, MP resident, family annual income under ₹2.5 Lakh.',
    eligibility_hi: '21 से 60 वर्ष की विवाहित/विधवा/परित्यक्ता महिलाएं, म.प्र. निवासी, परिवार की आय ₹2.5 लाख से कम।',
    portalName: 'Ladli Behna Portal',
    portalUrl: 'https://cmladlibahna.mp.gov.in',
  },
  {
    stateId: 'maharashtra',
    stateName_en: 'Maharashtra',
    stateName_hi: 'महाराष्ट्र',
    schemeName_en: 'Mukhyamantri Majhi Ladki Bahin Yojana',
    schemeName_hi: 'मुख्यमंत्री माझी लाड़की बहिण योजना',
    benefit_en: '₹1,500 / month (₹18,000 / year) direct financial assistance',
    benefit_hi: '₹1,500 प्रति माह (₹18,000 सालाना) सीधी आर्थिक सहायता',
    eligibility_en: 'Women aged 21–65, domicile of Maharashtra, family income under ₹2.5 Lakh, Yellow/Orange Ration Card.',
    eligibility_hi: '21 से 65 वर्ष की महिलाएं, महाराष्ट्र अधिवास, परिवार की आय ₹2.5 लाख से कम, पीला/केसरी राशन कार्ड।',
    portalName: 'Nari Shakti Doot / MahaDBT',
    portalUrl: 'https://ladakibahin.maharashtra.gov.in',
  },
  {
    stateId: 'gujarat',
    stateName_en: 'Gujarat',
    stateName_hi: 'गुजरात',
    schemeName_en: 'Mukhyamantri Mahila Utkarsh Yojana (MMUY)',
    schemeName_hi: 'मुख्यमंत्री महिला उत्कर्ष योजना',
    benefit_en: '₹1,00,000 zero-interest loan per Joint Liability and Earning Group (JLEG)',
    benefit_hi: 'महिला स्वयं सहायता समूहों को ₹1,00,000 तक का 0% ब्याज-मुक्त समूह ऋण',
    eligibility_en: 'Women in urban/rural SHGs aged 18–59, Gujarat domicile, registered in JLEG formation.',
    eligibility_hi: '18 से 59 वर्ष की शहरी/ग्रामीण महिलाएं, गुजरात की मूल निवासी, पंजीकृत महिला समूह की सदस्य।',
    portalName: 'Digital Gujarat',
    portalUrl: 'https://www.digitalgujarat.gov.in',
  },
  {
    stateId: 'bihar',
    stateName_en: 'Bihar',
    stateName_hi: 'बिहार',
    schemeName_en: 'Mukhyamantri Kanya Utthan Yojana',
    schemeName_hi: 'मुख्यमंत्री कन्या उत्थान योजना',
    benefit_en: 'Up to ₹50,000 in progressive milestones from birth till graduation',
    benefit_hi: 'जन्म से लेकर स्नातक पास करने तक कुल ₹50,000 की चरणबद्ध प्रोत्साहन राशि',
    eligibility_en: 'Girl students residing in Bihar, studying in recognized state schools/universities, unmarried at 12th.',
    eligibility_hi: 'बिहार की मूल निवासी छात्राएं, मान्यता प्राप्त संस्थान से उत्तीर्ण, 12वीं तक अविवाहित होना अनिवार्य।',
    portalName: 'Medhasoft Portal',
    portalUrl: 'https://medhasoft.bih.nic.in',
  },
  {
    stateId: 'rajasthan',
    stateName_en: 'Rajasthan',
    stateName_hi: 'राजस्थान',
    schemeName_en: 'Mukhyamantri Anupriti Coaching Yojana',
    schemeName_hi: 'मुख्यमंत्री अनुप्रति कोचिंग योजना',
    benefit_en: '100% Free competitive exams coaching (UPSC, RPSC, NEET, JEE) + ₹40,000 lodging stipend',
    benefit_hi: 'प्रतिष्ठित संस्थानों में 100% निशुल्क प्रतियोगी कोचिंग + आवास हेतु ₹40,000 वार्षिक भत्ता',
    eligibility_en: 'SC, ST, OBC, MBC, EWS students of Rajasthan, family annual income under ₹8 Lakh.',
    eligibility_hi: 'राजस्थान के एससी, एसटी, ओबीसी, ईडब्ल्यूएस छात्र, परिवार की वार्षिक आय ₹8 लाख से कम।',
    portalName: 'SJE Rajasthan Portal',
    portalUrl: 'https://sje.rajasthan.gov.in',
  },
  {
    stateId: 'all-india',
    stateName_en: 'Central Government',
    stateName_hi: 'केंद्र सरकार',
    schemeName_en: 'PM Kisan Samman Nidhi & PM-JAY',
    schemeName_hi: 'पीएम किसान सम्मान निधि एवं आयुष्मान भारत',
    benefit_en: '₹6,000/year farmer cash transfer + ₹5 Lakh cashless annual hospital cover',
    benefit_hi: '₹6,000 वार्षिक किसान सहायता + ₹5 लाख प्रति परिवार निशुल्क कैशलेस अस्पताल इलाज',
    eligibility_en: 'All-India eligible landholding farmer families and SECC/Ration card families nationwide.',
    eligibility_hi: 'देश भर के सभी पात्र भूमिधारक किसान और राशन कार्ड/एसईसीसी डेटाबेस में शामिल परिवार।',
    portalName: 'PM-Kisan & NHA',
    portalUrl: 'https://pmkisan.gov.in',
  },
];

export const STATE_IDENTITY_SYSTEMS: StateIdentitySystem[] = [
  {
    stateId: 'madhya-pradesh',
    stateName_en: 'Madhya Pradesh',
    stateName_hi: 'मध्य प्रदेश',
    idName_en: 'Samagra ID (SSSM ID)',
    idName_hi: 'समग्र आईडी (9-अंकीय सदस्य / 8-अंकीय परिवार)',
    purpose_en: 'Mandatory digital registry required for all state welfare, school admission, ration allocation, and Ladli Behna DBT.',
    purpose_hi: 'सभी राज्य योजनाओं, स्कूल प्रवेश, राशन पर्ची और लाडली बहना डीबीटी के लिए अनिवार्य डिजिटल पहचान।',
    howToGet_en: 'Apply at Gram Panchayat / Ward Office or online on samagra.gov.in with e-KYC via Aadhaar OTP.',
    howToGet_hi: 'ग्राम पंचायत / वार्ड कार्यालय में आधार ओटीपी ई-केवाईसी या samagra.gov.in पर ऑनलाइन पंजीकरण करें।',
  },
  {
    stateId: 'rajasthan',
    stateName_en: 'Rajasthan',
    stateName_hi: 'राजस्थान',
    idName_en: 'Jan Aadhaar Card',
    idName_hi: 'जन आधार कार्ड (एक नंबर, एक कार्ड, एक पहचान)',
    purpose_en: 'Single database mapping family members, female head of household, and social security pension entitlements.',
    purpose_hi: 'महिला मुखिया आधारित परिवार पहचान पत्र जो राज्य की पेंशन, राशन और निशुल्क योजनाओं से सीधे जुड़ा है।',
    howToGet_en: 'Enroll at any e-Mitra kiosk or online through the SSO Rajasthan portal using electricity bill or voter ID.',
    howToGet_hi: 'नजदीकी ई-मित्र केंद्र पर या sso.rajasthan.gov.in के माध्यम से जन आधार नामांकन कराएं।',
  },
  {
    stateId: 'uttar-pradesh',
    stateName_en: 'Uttar Pradesh',
    stateName_hi: 'उत्तर प्रदेश',
    idName_en: 'Family ID (Ek Parivar Ek Pehchan)',
    idName_hi: 'फैमिली आईडी (एक परिवार एक पहचान)',
    purpose_en: 'Creates a comprehensive family database to provide at least one employment/welfare opportunity per household.',
    purpose_hi: 'प्रत्येक परिवार को कम से कम एक रोजगार अथवा कल्याणकारी योजना से जोड़ने हेतु 12-अंकीय परिवार पहचान।',
    howToGet_en: 'Ration card holders already have Family ID mapped; non-ration card families apply at familyid.up.gov.in.',
    howToGet_hi: 'राशन कार्ड धारकों की फैमिली आईडी स्वतः सृजित है; अन्य परिवार familyid.up.gov.in पर आवेदन कर सकते हैं।',
  },
  {
    stateId: 'jharkhand',
    stateName_en: 'Jharkhand',
    stateName_hi: 'झारखंड',
    idName_en: 'Jharsewa Resident Certificate (Khatiyan Domicile)',
    idName_hi: 'झारसेवा स्थानीय निवास प्रमाण पत्र (खतियानी व आवासीय)',
    purpose_en: 'Legal proof of state domicile required for state job reservations, Maiya Samman, and Guruji Credit Card.',
    purpose_hi: 'मंईयां सम्मान, अबुआ आवास, छात्रवृत्ति और राज्य भर्तियों के लिए अनिवार्य स्थानीयता प्रमाण पत्र।',
    howToGet_en: 'Apply online on jharsewa.jharkhand.gov.in or Pragya Kendra with land Khatiyan or verified local resident proof.',
    howToGet_hi: 'प्रज्ञा केंद्र (CSC) या jharsewa.jharkhand.gov.in पर खतियान पर्ची अथवा ग्रामीण सत्यापन के साथ आवेदन करें।',
  },
  {
    stateId: 'bihar',
    stateName_en: 'Bihar',
    stateName_hi: 'बिहार',
    idName_en: 'RTPS Resident & Income Certificate',
    idName_hi: 'आर.टी.पी.एस. ऑनलाइन निवास व आय प्रमाण पत्र',
    purpose_en: 'Enables access to Student Credit Card, Kanya Utthan, post-matric scholarships, and local welfare.',
    purpose_hi: 'स्टूडेंट क्रेडिट कार्ड, कन्या उत्थान, पोस्ट-मैट्रिक छात्रवृत्ति और आरक्षण लाभ हेतु वैधानिक प्रमाण पत्र।',
    howToGet_en: 'Apply free of cost on serviceonline.bihar.gov.in with digital signature and download digitally certified PDF.',
    howToGet_hi: 'serviceonline.bihar.gov.in पर बिना किसी शुल्क के ऑनलाइन आवेदन करें और डिजिटल हस्ताक्षरित प्रमाण पत्र पाएं।',
  },
  {
    stateId: 'maharashtra',
    stateName_en: 'Maharashtra',
    stateName_hi: 'महाराष्ट्र',
    idName_en: 'Aaple Sarkar Domicile & MahaDBT Profile',
    idName_hi: 'आपले सरकार अधिवास (Domicile) व महाडीबीटी प्रोफाइल',
    purpose_en: 'Mandatory 15-year residency certificate and verified beneficiary profile for social welfare and Ladki Bahin.',
    purpose_hi: '15-वर्षीय राज्य अधिवास प्रमाण पत्र और महाडीबीटी प्रोफाइल जो सभी छात्रवृत्तियों व लाभों के लिए आवश्यक है।',
    howToGet_en: 'Apply at Maha e-Seva Kendra or aaplesarkar.mahaonline.gov.in with electricity bill and school leaving certificate.',
    howToGet_hi: 'महा ई-सेवा केंद्र या aaplesarkar.mahaonline.gov.in पर स्कूल लीविंग सर्टिफिकेट और निवास साक्ष्य के साथ आवेदन करें।',
  },
  {
    stateId: 'gujarat',
    stateName_en: 'Gujarat',
    stateName_hi: 'गुजरात',
    idName_en: 'Digital Gujarat Citizen Profile',
    idName_hi: 'डिजिटल गुजरात सिटिजन प्रोफाइल',
    purpose_en: 'Single login profile verified with Aadhaar for domicile, income, and interest-free SHG group credit.',
    purpose_hi: 'आधार से प्रमाणित सिंगल लॉगिन प्रोफाइल जिससे निवास प्रमाण पत्र, आय प्रमाण पत्र और महिला समूह ऋण प्राप्त होते हैं।',
    howToGet_en: 'Register online at digitalgujarat.gov.in or visit eGram centers across all village panchayats in Gujarat.',
    howToGet_hi: 'digitalgujarat.gov.in पर ऑनलाइन या गुजरात की सभी ग्राम पंचायतों में स्थित ई-ग्राम केंद्रों पर पंजीकरण करें।',
  },
];

export const STATES_FAQS: StateFaqItem[] = [
  {
    id: 'faq-diff',
    q_en: 'What is the exact constitutional and financial difference between Central and State Government schemes?',
    q_hi: 'केंद्र सरकार और राज्य सरकार की योजनाओं में संवैधानिक और वित्तीय अंतर क्या होता है?',
    a_en: 'In India’s federal structure, welfare schemes are divided into three categories: 1) Central Sector Schemes (100% funded and managed directly by the Union Government, such as PM-Kisan); 2) Centrally Sponsored Schemes (CSS) (co-funded between Centre and States in ratios such as 60:40 or 90:10, such as PMAY housing and Ayushman Bharat); and 3) Pure State Welfare Schemes (100% conceptualized, designed, and funded out of the State Consolidated Fund, such as Jharkhand’s Maiya Samman, MP’s Ladli Behna, and Maharashtra’s Majhi Ladki Bahin).',
    a_hi: 'भारत के संघीय ढांचे में सरकारी योजनाएं तीन श्रेणियों में विभाजित होती हैं: 1) केंद्रीय क्षेत्र योजनाएं (100% केंद्र सरकार द्वारा वित्तपोषित, जैसे पीएम-किसान); 2) केंद्र प्रायोजित योजनाएं (केंद्र और राज्यों के बीच 60:40 या 90:10 के अनुपात में साझा वित्तपोषण, जैसे पीएम आवास और आयुष्मान भारत); तथा 3) विशुद्ध राज्य योजनाएं (100% संबंधित राज्य के खजाने से संचालित, जैसे झारखंड की मंईयां सम्मान, म.प्र. की लाडली बहना और महाराष्ट्र की माझी लाड़की बहिण)।',
  },
  {
    id: 'faq-dual',
    q_en: 'Can a citizen receive benefits from both a Central scheme and a State scheme at the same time?',
    q_hi: 'क्या एक नागरिक केंद्र और राज्य दोनों की योजनाओं का एक साथ लाभ ले सकता है?',
    a_en: 'Yes. In the vast majority of welfare domains, central and state schemes are mutually complementary. For example, a farming family can legally receive ₹6,000/year under the Central PM-Kisan scheme and simultaneously claim state-level input subsidies or crop insurance bonuses. Similarly, holding an Ayushman Bharat Card (₹5 Lakh cashless hospital cover) does not disqualify a woman from receiving state monthly cash assistance under Maiya Samman or Ladli Behna, provided state domicile and income ceilings are fulfilled.',
    a_hi: 'हाँ! अधिकांश मामलों में केंद्र और राज्य की योजनाएं एक-दूसरे की पूरक होती हैं और दोनों का लाभ एक साथ लिया जा सकता है। उदाहरण के लिए, एक किसान परिवार केंद्र से ₹6,000 की पीएम-किसान सहायता के साथ-साथ अपने राज्य की खाद-बीज या सिंचाई सब्सिडी ले सकता है। इसी तरह आयुष्मान कार्ड (₹5 लाख मुफ्त इलाज) धारक महिला अपने राज्य की मासिक नकद योजना (जैसे मंईयां सम्मान या लाडली बहना) की भी पात्र होती है।',
  },
  {
    id: 'faq-domicile',
    q_en: 'Why is a State Domicile or Residential Certificate (Niwas Praman Patra) strictly mandatory for state schemes?',
    q_hi: 'राज्य सरकार की योजनाओं के लिए स्थानीय निवास प्रमाण पत्र (Domicile) अनिवार्य क्यों होता है?',
    a_en: 'Pure state schemes are financed directly by the revenue and taxes collected from that specific state. To safeguard state taxpayer resources and prevent fraudulent cross-border claiming, state revenue departments enforce strict domicile verification (issued via state e-District portals like Jharsewa, RTPS Bihar, or Aaple Sarkar). Verification is validated against ancestral land records (Khatiyan), parental voter registration, or continuous verified residency for 10 to 15 years.',
    a_hi: 'राज्य स्तरीय योजनाएं संबंधित राज्य के करदाताओं के पैसों से संचालित होती हैं। राज्य के बजट का सही उपयोग सुनिश्चित करने और अन्य राज्यों के फर्जी दावों को रोकने के लिए राज्य सरकारें स्थानीय निवास प्रमाण पत्र (जैसे झारसेवा, आरटीपीएस बिहार, आपले सरकार द्वारा जारी) अनिवार्य करती हैं। यह प्रमाण पत्र पैतृक भूमि रिकॉर्ड (खतियान), 10-15 वर्ष के निरंतर निवास, या स्कूल प्रमाण पत्रों के सत्यापन पर जारी होता है।',
  },
  {
    id: 'faq-bank-interstate',
    q_en: 'If my bank account is in another state, can I still receive Direct Benefit Transfer (DBT) from my home state?',
    q_hi: 'यदि मेरा बैंक खाता किसी दूसरे राज्य का है, तो क्या मुझे अपने गृह राज्य की डीबीटी (DBT) राशि मिल सकेगी?',
    a_en: 'Yes. Modern Direct Benefit Transfer operates on the National Automated Clearing House (NACH) and Aadhaar Payment Bridge System (APBS) managed by NPCI. State treasuries disburse funds directly to your 12-digit Aadhaar number, which automatically routes the money to your active NPCI-seeded bank account anywhere in India. However, to qualify for the scheme initially, your residential proof, family identity, and physical application must strictly belong to the sponsoring state.',
    a_hi: 'हाँ। आधुनिक डीबीटी (Direct Benefit Transfer) प्रणाली भारतीय राष्ट्रीय भुगतान निगम (NPCI) के आधार पेमेंट ब्रिज सिस्टम (APBS) पर चलती है। राज्य सरकारें सीधे आपके 12-अंकीय आधार नंबर पर पैसा भेजती हैं, जो पूरे देश में आपके किसी भी आधार-सीडेड बैंक खाते में स्वतः क्रेडिट हो जाता है। बशर्ते आवेदन के समय आपका निवास प्रमाण पत्र उसी संबंधित राज्य का प्रमाणित होना चाहिए।',
  },
  {
    id: 'faq-family-id',
    q_en: 'What are State Family IDs (Samagra, Jan Aadhaar, Family ID) and why are states moving towards them?',
    q_hi: 'राज्यों की समग्र आईडी, जन आधार और फैमिली आईडी क्या हैं और राज्य इन्हें क्यों अनिवार्य कर रहे हैं?',
    a_en: 'States like Madhya Pradesh (Samagra), Rajasthan (Jan Aadhaar), and Uttar Pradesh (Family ID) have developed unified household registries. Instead of asking citizens to repeatedly submit caste, income, and relationship proofs for every single scheme, the integrated family ID acts as a Single Source of Truth. It instantly verifies family income, age brackets, and existing welfare overlap, eliminating bureaucratic delays and enabling direct paperless sanctioning.',
    a_hi: 'मध्य प्रदेश (समग्र), राजस्थान (जन आधार), और उत्तर प्रदेश (फैमिली आईडी) ने परिवार-आधारित एकीकृत डिजिटल डेटाबेस तैयार किए हैं। बार-बार हर नई योजना के लिए आय, जाति और निवास प्रमाण पत्र जमा करने के बजाय, यह फैमिली आईडी "सिंगल सोर्स ऑफ ट्रुथ" का काम करती है। इससे सरकारी दफ्तरों के चक्कर नहीं लगाने पड़ते और पात्र परिवारों को बिना कागजी अड़चनों के तुरंत लाभ मिलता है।',
  },
  {
    id: 'faq-troubleshoot',
    q_en: 'What are the top three reasons state welfare applications get rejected, and how can citizens avoid them?',
    q_hi: 'राज्य कल्याणकारी योजनाओं के आवेदन खारिज होने के तीन मुख्य कारण क्या हैं और इनसे कैसे बचें?',
    a_en: 'The top three causes of rejection across Indian states are: 1) Inactive Aadhaar-Bank Seeding (Bank account is KYC-compliant but not flagged for DBT on the NPCI mapper); 2) Mismatched Name or Date of Birth between Aadhaar and Domicile/Ration Card; and 3) Incomplete Local Domicile Proof (e.g. invalid Khatiyan, missing Circle Officer approval). Citizens should resolve bank seeding via NPCI BASE or their home branch, correct spelling errors at an Aadhaar Seva Kendra, and apply for digital barcoded domicile certificates before submitting welfare applications.',
    a_hi: 'राज्य योजनाओं में आवेदन रिजेक्ट होने के 3 प्रमुख कारण हैं: 1) बैंक खाते का एनपीसीआई (NPCI) मैपर पर डीबीटी इनेबल्ड न होना; 2) आधार कार्ड और निवास/राशन कार्ड के नाम या जन्मतिथि में स्पेलिंग का अंतर; तथा 3) अधूरा स्थानीय निवास प्रमाण पत्र (डिजिटल बारकोड या अंचलाधिकारी सत्यापन का अभाव)। नागरिकों को आवेदन से पहले बैंक जाकर "आधार डीबीटी मैंडेट" फॉर्म जमा करना चाहिए और सभी पहचान पत्रों में नाम की स्पेलिंग एक समान रखनी चाहिए।',
  },
];
