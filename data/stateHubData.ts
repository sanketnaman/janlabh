import { SchemeState } from '@/types';

export interface StateOfficialPortal {
  name_en: string;
  name_hi: string;
  url: string;
  purpose_en: string;
  purpose_hi: string;
  category: 'services' | 'welfare' | 'land' | 'employment' | 'scholarship';
}

export interface StateHelpline {
  title_en: string;
  title_hi: string;
  number: string;
  timing_en: string;
  timing_hi: string;
  department_en: string;
  department_hi: string;
}

export interface StateFaq {
  q_en: string;
  q_hi: string;
  a_en: string;
  a_hi: string;
}

export interface StateHubProfile {
  stateId: SchemeState;
  welfareOverview_en: string;
  welfareOverview_hi: string;
  domicileRules_en: string;
  domicileRules_hi: string;
  issuingAuthority_en: string;
  issuingAuthority_hi: string;
  portals: StateOfficialPortal[];
  helplines: StateHelpline[];
  faqs: StateFaq[];
}

export const STATE_HUB_PROFILES: Record<SchemeState, StateHubProfile> = {
  'jharkhand': {
    stateId: 'jharkhand',
    welfareOverview_en:
      'The Government of Jharkhand focuses extensively on tribal empowerment, women economic independence, and rural social protection. Flagship welfare programs such as Mukhyamantri Maiya Samman Yojana (JMMSY) disburse direct monthly cash assistance, while Abua Awas Yojana finances 3-room pucca houses for families excluded from central housing. Higher education is bolstered by Guruji Student Credit Card, and universal social security is guaranteed under the Sarvajan Pension Yojana.',
    welfareOverview_hi:
      'झारखंड सरकार का मुख्य वेलफेयर फोकस जनजातीय सशक्तिकरण, महिला आर्थिक स्वावलंबन और ग्रामीण सामाजिक सुरक्षा पर है। मुख्यमंत्री मंईयां सम्मान योजना (JMMSY) के जरिए महिलाओं को नियमित मासिक नकद सहायता दी जा रही है, जबकि अबुआ आवास योजना के तहत केंद्रीय योजनाओं से छूटे परिवारों को 3-कमरों का पक्का घर मिल रहा है। उच्च शिक्षा हेतु गुरुजी स्टूडेंट क्रेडिट कार्ड और बुजुर्गों व विधवाओं के लिए सर्वजन पेंशन योजना राज्य के प्रमुख स्तंभ हैं।',
    domicileRules_en:
      'Resident certificates in Jharkhand are issued on the basis of local land records (Khatiyan) or continuous verified residency in the state. Applicants must produce school transfer certificates, land possession slips, or Gram Sabha residence verification.',
    domicileRules_hi:
      'झारखंड में स्थानीय निवास प्रमाण पत्र खतियान (भूमि रिकॉर्ड) अथवा राज्य में निरंतर निवास के आधार पर जारी किए जाते हैं। इसके लिए स्कूल टीसी, जमीन की रसीद या ग्राम सभा की अनुशंसा आवश्यक होती है।',
    issuingAuthority_en: 'Circle Officer (CO) / Sub-Divisional Officer (SDO) via Jharsewa or Pragya Kendra (CSC).',
    issuingAuthority_hi: 'अंचलाधिकारी (CO) / अनुमंडल पदाधिकारी (SDO) — झारसेवा पोर्टल अथवा प्रज्ञा केंद्र (CSC) के माध्यम से।',
    portals: [
      {
        name_en: 'Jharsewa Portal',
        name_hi: 'झारसेवा पोर्टल',
        url: 'https://jharsewa.jharkhand.gov.in',
        purpose_en: 'Single-window online delivery of Domicile, Caste, Income, and Birth/Death certificates.',
        purpose_hi: 'निवास, जाति, आय और जन्म/मृत्यु प्रमाण पत्रों के लिए सिंगल-विंडो सरकारी सेवा पोर्टल।',
        category: 'services',
      },
      {
        name_en: 'Mukhyamantri Maiya Samman Portal',
        name_hi: 'मंईयां सम्मान पोर्टल',
        url: 'https://mmmsy.jharkhand.gov.in',
        purpose_en: 'Official application verification, DBT payment tracker, and village list for women assistance.',
        purpose_hi: 'मंईयां सम्मान योजना आवेदन सत्यापन, भुगतान स्थिति और लाभार्थी सूची की आधिकारिक वेबसाइट।',
        category: 'welfare',
      },
      {
        name_en: 'Aahar Jharkhand (Food & Ration Portal)',
        name_hi: 'आहार झारखंड (राशन कार्ड पोर्टल)',
        url: 'https://aahar.jharkhand.gov.in',
        purpose_en: 'Green/White Ration card application, dealer allocation, and monthly foodgrain distribution slips.',
        purpose_hi: 'हरा/सफेद राशन कार्ड आवेदन, डीलर विवरण और मासिक खाद्यान्न वितरण पर्ची ऑनलाइन प्राप्त करें।',
        category: 'welfare',
      },
      {
        name_en: 'e-Kalyan Jharkhand Scholarship',
        name_hi: 'ई-कल्याण झारखंड छात्रवृत्ति',
        url: 'https://ekalyan.cgg.gov.in',
        purpose_en: 'Post-matric scholarships for SC, ST, and BC college students with direct tuition fee reimbursement.',
        purpose_hi: 'एससी, एसटी और पिछड़ा वर्ग कॉलेज विद्यार्थियों हेतु पोस्ट-मैट्रिक छात्रवृत्ति व शिक्षण शुल्क प्रतिपूर्ति।',
        category: 'scholarship',
      },
    ],
    helplines: [
      {
        title_en: 'Jharkhand CM Helpline',
        title_hi: 'झारखंड मुख्यमंत्री हेल्पलाइन',
        number: '181',
        timing_en: '24x7 All Days',
        timing_hi: '24 घंटे सातों दिन',
        department_en: 'Chief Minister Secretariat, Ranchi',
        department_hi: 'मुख्यमंत्री सचिवालय, राँची',
      },
      {
        title_en: 'Jharsewa Citizen Support Desk',
        title_hi: 'झारसेवा नागरिक सहायता केंद्र',
        number: '0651-2401040',
        timing_en: '10:00 AM to 5:00 PM (Working Days)',
        timing_hi: 'सुबह 10 से शाम 5 बजे (कार्यदिवस)',
        department_en: 'Department of IT & e-Governance',
        department_hi: 'सूचना प्रौद्योगिकी एवं ई-गवर्नेंस विभाग',
      },
      {
        title_en: 'State Food & Civil Supplies Helpline',
        title_hi: 'खाद्य एवं उपभोक्ता संरक्षण हेल्पलाइन',
        number: '1967',
        timing_en: '8:00 AM to 8:00 PM',
        timing_hi: 'सुबह 8 से रात 8 बजे',
        department_en: 'Food, Public Distribution & Consumer Affairs',
        department_hi: 'खाद्य, सार्वजनिक वितरण एवं उपभोक्ता मामले विभाग',
      },
    ],
    faqs: [
      {
        q_en: 'How can I check my welfare DBT payment status in Jharkhand?',
        q_hi: 'झारखंड में किसी भी योजना का DBT पेमेंट स्टेटस कैसे चेक करें?',
        a_en: 'You can check your DBT status on PFMS (pfms.nic.in) under "Know Your Payments", via the scheme portal (e.g., mmmsy.jharkhand.gov.in for Maiya Samman), or at your local Pragya Kendra using your Aadhaar number.',
        a_hi: 'आप PFMS (pfms.nic.in) पर "Know Your Payments" में, संबंधित योजना पोर्टल (जैसे मंईयां सम्मान हेतु mmmsy.jharkhand.gov.in) पर, अथवा नजदीकी प्रज्ञा केंद्र पर अपने आधार नंबर से डीबीटी स्टेटस देख सकते हैं।',
      },
      {
        q_en: 'What is the official turnaround time for a Domicile Certificate on Jharsewa?',
        q_hi: 'झारसेवा पोर्टल पर निवास प्रमाण पत्र बनने में कितने दिन लगते हैं?',
        a_en: 'Under the Jharkhand Right to Service Act, normal service delivery takes 15 to 21 working days once verified by the Halka Karamchari and Circle Inspector.',
        a_hi: 'झारखंड सेवा का अधिकार अधिनियम के अंतर्गत हल्का कर्मचारी और अंचल निरीक्षक के सत्यापन के बाद सामान्यतः 15 से 21 कार्यदिवस में प्रमाण पत्र जारी होता है।',
      },
      {
        q_en: 'Can a family receive both PM Awas and Abua Awas in Jharkhand?',
        q_hi: 'क्या एक परिवार को पीएम आवास और अबुआ आवास दोनों का लाभ मिल सकता है?',
        a_en: 'No. Abua Awas Yojana strictly prioritizes families that were left out of or not sanctioned under PM Awas Yojana (PMAY-G/U). Beneficiaries already covered under PMAY are ineligible.',
        a_hi: 'नहीं। अबुआ आवास योजना विशेष रूप से उन गरीब परिवारों के लिए है जिन्हें पीएम आवास योजना का लाभ नहीं मिल सका था। जिन्हें पहले पीएम आवास मिल चुका है वे इसके पात्र नहीं हैं।',
      },
    ],
  },
  'bihar': {
    stateId: 'bihar',
    welfareOverview_en:
      'Bihar’s welfare architecture is anchored by the Chief Minister’s Saat Nischay-II (Seven Resolves) program. Major state priorities include higher education access through the Bihar Student Credit Card (up to ₹4 Lakh at 1% interest for women/disabled, 4% for men), women entrepreneurship under Mukhyamantri Udyami Yojana (₹10 Lakh assistance with 50% subsidy), DBT Agriculture grants for farmers, and conditional cash transfers under Mukhyamantri Kanya Utthan Yojana.',
    welfareOverview_hi:
      'बिहार की जनकल्याणकारी नीतियां मुख्यमंत्री सात निश्चय-2 कार्यक्रम पर आधारित हैं। राज्य की प्राथमिकताओं में बिहार स्टूडेंट क्रेडिट कार्ड (उच्च शिक्षा हेतु ₹4 लाख तक 1% या 4% ब्याज पर ऋण), मुख्यमंत्री उद्यमी योजना (युवा व महिलाओं को नया व्यवसाय शुरू करने हेतु ₹10 लाख की सहायता जिसमें 50% अनुदान), डीबीटी कृषि इनपुट अनुदान और मुख्यमंत्री कन्या उत्थान योजना के अंतर्गत जन्म से स्नातक तक नकद सहायता शामिल है।',
    domicileRules_en:
      'Residential (Niwas) certificates in Bihar require proof of continuous domicile or permanent ancestral residence. Application is submitted online via RTPS Bihar (ServicePlus) with Aadhaar authentication and self-declaration.',
    domicileRules_hi:
      'बिहार में निवास प्रमाण पत्र हेतु स्थाई पैतृक आवास अथवा निरंतर निवास का प्रमाण आवश्यक है। आवेदन आरटीपीएस बिहार (ServicePlus) पर आधार प्रमाणीकरण और स्व-घोषणा पत्र के साथ ऑनलाइन किया जाता है।',
    issuingAuthority_en: 'Revenue Officer (RO) / Sub-Divisional Officer (SDO) via RTPS Bihar (serviceonline.bihar.gov.in).',
    issuingAuthority_hi: 'राजस्व अधिकारी (RO) / अनुमंडल पदाधिकारी (SDO) — RTPS बिहार (serviceonline.bihar.gov.in) के माध्यम से।',
    portals: [
      {
        name_en: 'RTPS Bihar (ServicePlus)',
        name_hi: 'आरटीपीएस बिहार (सर्विसप्लस)',
        url: 'https://serviceonline.bihar.gov.in',
        purpose_en: 'Online application and instant digitally signed download of Domicile, Caste, and Income certificates.',
        purpose_hi: 'निवास, जाति, आय और चरित्र प्रमाण पत्रों का ऑनलाइन आवेदन व डिजिटल हस्ताक्षरित डाउनलोड।',
        category: 'services',
      },
      {
        name_en: 'Bihar Mukhyamantri Udyami Portal',
        name_hi: 'बिहार मुख्यमंत्री उद्यमी पोर्टल',
        url: 'https://udyami.bihar.gov.in',
        purpose_en: 'Registration and selection for ₹10 Lakh financial assistance for youth, SC/ST, and women entrepreneurs.',
        purpose_hi: 'युवा, महिला, एससी/एसटी और पिछड़ा वर्ग हेतु ₹10 लाख के स्वरोजगार ऋण व अनुदान का आधिकारिक पोर्टल।',
        category: 'employment',
      },
      {
        name_en: 'DBT Agriculture Bihar',
        name_hi: 'डीबीटी कृषि विभाग बिहार',
        url: 'https://dbtagriculture.bihar.gov.in',
        purpose_en: 'Farmer registration, diesel subsidy, agriculture input grant, and certified seed booking.',
        purpose_hi: 'किसान पंजीकरण, डीजल अनुदान, कृषि इनपुट सब्सिडी और प्रमाणित बीज बुकिंग की सिंगल-विंडो सेवा।',
        category: 'welfare',
      },
      {
        name_en: 'MNSSBY Bihar Student Credit Card',
        name_hi: 'एमएनएसएसबीवाई बिहार स्टूडेंट क्रेडिट कार्ड',
        url: 'https://www.7nishchay-yuvaupmission.bihar.gov.in',
        purpose_en: 'Higher education education loan assistance up to ₹4 Lakh managed via District Registration & Counselling Centres (DRCC).',
        purpose_hi: 'डीआरसीसी के माध्यम से उच्च शिक्षा (बीटेक, बीएड, एमबीए, नर्सिंग) हेतु ₹4 लाख तक के लोन का प्रबंधन।',
        category: 'scholarship',
      },
    ],
    helplines: [
      {
        title_en: 'Bihar Lok Shikayat Nivaran (Public Grievance)',
        title_hi: 'बिहार लोक शिकायत निवारण हेल्पलाइन',
        number: '1800-345-6262',
        timing_en: '9:30 AM to 6:00 PM (Monday–Saturday)',
        timing_hi: 'सुबह 9:30 से शाम 6:00 बजे (सोम-शनि)',
        department_en: 'General Administration Department, Patna',
        department_hi: 'सामान्य प्रशासन विभाग, पटना',
      },
      {
        title_en: 'DRCC Student Credit Card Helpline',
        title_hi: 'डीआरसीसी छात्र क्रेडिट कार्ड हेल्पलाइन',
        number: '1800-3456-444',
        timing_en: '8:00 AM to 8:00 PM All Days',
        timing_hi: 'सुबह 8 से रात 8 बजे प्रतिदिन',
        department_en: 'Bihar Vikas Mission, Govt. of Bihar',
        department_hi: 'बिहार विकास मिशन, बिहार सरकार',
      },
      {
        title_en: 'Kisan Call Center Bihar',
        title_hi: 'किसान कॉल सेंटर बिहार',
        number: '1800-180-1551',
        timing_en: '6:00 AM to 10:00 PM',
        timing_hi: 'सुबह 6 से रात 10 बजे',
        department_en: 'Department of Agriculture, Bihar',
        department_hi: 'कृषि विभाग, बिहार सरकार',
      },
    ],
    faqs: [
      {
        q_en: 'How to track the status of RTPS certificate in Bihar?',
        q_hi: 'बिहार में RTPS प्रमाण पत्र का स्टेटस और डाउनलोड कैसे करें?',
        a_en: 'Visit serviceonline.bihar.gov.in, click on "Track Application Status", enter your Application Reference Number, and download the digitally signed PDF once approved.',
        a_hi: 'serviceonline.bihar.gov.in पर जाएं, "आवेदन की स्थिति देखें" पर क्लिक करें, अपना एप्लीकेशन रेफरेंस नंबर डालें और स्वीकृत होने पर डिजिटल हस्ताक्षरित पीडीएफ डाउनलोड करें।',
      },
      {
        q_en: 'What is the repayment condition for Bihar Student Credit Card?',
        q_hi: 'बिहार स्टूडेंट क्रेडिट कार्ड में लोन वापसी की शर्तें क्या हैं?',
        a_en: 'Repayment starts 1 year after course completion or 6 months after getting a job (whichever is earlier). Female, transgender, and disabled students pay only 1% simple interest; others pay 4%.',
        a_hi: 'कोर्स पूरा होने के 1 वर्ष बाद या नौकरी लगने के 6 महीने बाद (जो भी पहले हो) किस्त शुरू होती है। छात्राओं, दिव्यांगों व थर्ड जेंडर को केवल 1% साधारण ब्याज तथा छात्रों को 4% देना होता है।',
      },
      {
        q_en: 'How much subsidy is provided under Bihar Mukhyamantri Udyami Yojana?',
        q_hi: 'बिहार मुख्यमंत्री उद्यमी योजना में कितना अनुदान (सब्सिडी) मिलता है?',
        a_en: 'The project financial assistance is up to ₹10 Lakh, where 50% (up to ₹5 Lakh) is a non-refundable government grant/subsidy, and the remaining 50% is an interest-free loan (or 1% for general youth) repayable in 84 installments.',
        a_hi: 'योजना में कुल ₹10 लाख की सहायता मिलती है, जिसमें से 50% (₹5 लाख तक) गैर-वापसी योग्य सरकारी अनुदान (सब्सिडी) होता है और शेष 50% ब्याज-मुक्त लोन (या 1% ब्याज) 84 किस्तों में चुकाना होता है।',
      },
    ],
  },
  'uttar-pradesh': {
    stateId: 'uttar-pradesh',
    welfareOverview_en:
      'Uttar Pradesh runs one of the largest social welfare infrastructures in India. Key state programs include the Mukhyamantri Kanya Sumangala Yojana (providing ₹25,000 phased support for girl children from birth to higher education), the Integrated Pension Portal (SSPY) covering millions under Old Age, Widow, and Divyang pensions, UP Shadi Anudan for poor families, and Mukhyamantri Abhyudaya Yojana offering free residential and digital coaching for competitive exams.',
    welfareOverview_hi:
      'उत्तर प्रदेश देश का सबसे बड़ा सामाजिक सुरक्षा तंत्र संचालित करता है। प्रमुख राज्य कार्यक्रमों में मुख्यमंत्री कन्या सुमंगला योजना (बालिकाओं को जन्म से स्नातक तक कुल ₹25,000 की 6 चरणों में वित्तीय सहायता), एकीकृत पेंशन पोर्टल (SSPY) के माध्यम से वृद्धावस्था, निराश्रित महिला व दिव्यांग पेंशन, शादी अनुदान, और मुख्यमंत्री अभ्युदय योजना (प्रतियोगी परीक्षाओं की निःशुल्क कोचिंग) शामिल हैं।',
    domicileRules_en:
      'Domicile (Niwas Praman Patra) in Uttar Pradesh requires minimum 10 years continuous residence, ancestral land holdings, or verified family employment in UP. Applications are processed through eDistrict UP with Lekhpal inquiry.',
    domicileRules_hi:
      'उत्तर प्रदेश में निवास प्रमाण पत्र हेतु न्यूनतम 10 वर्ष का निरंतर निवास, पैतृक संपत्ति अथवा स्थायी रोजगार का प्रमाण चाहिए। आवेदन ई-डिस्ट्रिक्ट यूपी पर लेखपाल व कानूनगो की जांच के आधार पर स्वीकृत होता है।',
    issuingAuthority_en: 'Tehsildar / Sub-Divisional Magistrate (SDM) via eDistrict UP (edistrict.up.gov.in).',
    issuingAuthority_hi: 'तहसीलदार / उपजिलाधिकारी (SDM) — eDistrict UP (edistrict.up.gov.in) एवं जन सेवा केंद्र के माध्यम से।',
    portals: [
      {
        name_en: 'eDistrict Uttar Pradesh',
        name_hi: 'ई-डिस्ट्रिक्ट उत्तर प्रदेश',
        url: 'https://edistrict.up.gov.in',
        purpose_en: 'Application and verification for Domicile, Caste, Income, and Land Revenue certificates.',
        purpose_hi: 'निवास, जाति, आय, हैसियत और खतौनी नकल प्रमाण पत्रों का आधिकारिक ऑनलाइन नागरिक पोर्टल।',
        category: 'services',
      },
      {
        name_en: 'SSPY Integrated Pension Portal UP',
        name_hi: 'एसएसपीवाई एकीकृत पेंशन पोर्टल यूपी',
        url: 'https://sspy-up.gov.in',
        purpose_en: 'Online management and Aadhaar DBT payment tracking for Old Age, Widow, and Disability pensions.',
        purpose_hi: 'वृद्धावस्था पेंशन, निराश्रित महिला (विधवा) पेंशन व दिव्यांग पेंशन का ऑनलाइन आवेदन व स्टेटस।',
        category: 'welfare',
      },
      {
        name_en: 'UP Shadi Anudan Portal',
        name_hi: 'यूपी शादी अनुदान पोर्टल',
        url: 'https://shadianudan.upsdc.gov.in',
        purpose_en: 'Direct ₹20,000 marriage grant for daughters of BPL, SC, ST, OBC, and minority families.',
        purpose_hi: 'गरीब, अनुसूचित जाति, जनजाति, पिछड़ा वर्ग व अल्पसंख्यक परिवारों की पुत्रियों के विवाह हेतु ₹20,000 सहायता।',
        category: 'welfare',
      },
      {
        name_en: 'Mukhyamantri Abhyudaya Yojana',
        name_hi: 'मुख्यमंत्री अभ्युदय योजना पोर्टल',
        url: 'https://abhyuday.up.gov.in',
        purpose_en: 'Free quality coaching, study material, and tablets for UPSC, UPPSC, JEE, and NEET aspirants.',
        purpose_hi: 'यूपीएससी, यूपीपीएससी, जेईई, नीट व अन्य प्रतियोगी परीक्षाओं की तैयारी हेतु निःशुल्क कोचिंग व टैबलेट।',
        category: 'scholarship',
      },
    ],
    helplines: [
      {
        title_en: 'UP Chief Minister Helpline',
        title_hi: 'उत्तर प्रदेश मुख्यमंत्री हेल्पलाइन',
        number: '1076',
        timing_en: '24x7 All Days',
        timing_hi: '24 घंटे सातों दिन',
        department_en: 'CM Secretariat & IGRS Jansunwai, Lucknow',
        department_hi: 'मुख्यमंत्री कार्यालय एवं आईजीआरएस जनसुनवाई, लखनऊ',
      },
      {
        title_en: 'Women Power Line UP',
        title_hi: 'महिला पावर लाइन (सुरक्षा व सहायता)',
        number: '1090',
        timing_en: '24x7 Immediate Response',
        timing_hi: '24 घंटे त्वरित सहायता',
        department_en: 'Uttar Pradesh Police',
        department_hi: 'उत्तर प्रदेश पुलिस',
      },
      {
        title_en: 'eDistrict UP Technical Support Desk',
        title_hi: 'ई-डिस्ट्रिक्ट यूपी हेल्पडेस्क',
        number: '0522-2304706',
        timing_en: '10:00 AM to 5:00 PM (Working Days)',
        timing_hi: 'सुबह 10 से शाम 5 बजे (कार्यदिवस)',
        department_en: 'Centre for e-Governance, Lucknow',
        department_hi: 'सेंटर फॉर ई-गवर्नेंस, लखनऊ',
      },
    ],
    faqs: [
      {
        q_en: 'How to check UP Pension (Old Age/Widow) status online?',
        q_hi: 'यूपी में वृद्धावस्था या विधवा पेंशन का स्टेटस कैसे चेक करें?',
        a_en: 'Visit sspy-up.gov.in, choose your pension scheme, click on "Track Beneficiary Status", and enter your 12-digit Registration Number and registered mobile number for OTP status check.',
        a_hi: 'sspy-up.gov.in पर जाएं, अपनी पेंशन योजना चुनें, "आवेदन की स्थिति" पर क्लिक करें और अपना 12 अंकों का रजिस्ट्रेशन नंबर व मोबाइल ओटीपी डालकर स्टेटस देखें।',
      },
      {
        q_en: 'What is the revised amount under UP Kanya Sumangala Yojana?',
        q_hi: 'यूपी मुख्यमंत्री कन्या सुमंगला योजना में अब कुल कितनी राशि मिलती है?',
        a_en: 'The Uttar Pradesh Government increased the total assistance under Kanya Sumangala Yojana to ₹25,000 (disbursed in 6 developmental stages from birth, vaccination, school admission to degree college).',
        a_hi: 'उत्तर प्रदेश सरकार ने कन्या सुमंगला योजना की सहायता राशि बढ़ाकर कुल ₹25,000 कर दी है, जो जन्म, टीकाकरण, कक्षा 1, 6, 9 और स्नातक/डिप्लोमा में प्रवेश पर 6 चरणों में दी जाती है।',
      },
      {
        q_en: 'How can citizens file a complaint on UP CM Helpline 1076?',
        q_hi: 'यूपी सीएम हेल्पलाइन 1076 पर शिकायत कैसे दर्ज कराएं?',
        a_en: 'Dial 1076 directly from any phone or register via jansunwai.up.nic.in. You receive a tracking SMS, and senior departmental officers must resolve the grievance within a time-bound window.',
        a_hi: 'किसी भी फोन से सीधे 1076 डायल करें या jansunwai.up.nic.in पर शिकायत दर्ज करें। आपको एसएमएस से ट्रैकिंग नंबर मिलता है और अधिकारी समयबद्ध रूप से समाधान करते हैं।',
      },
    ],
  },
  'madhya-pradesh': {
    stateId: 'madhya-pradesh',
    welfareOverview_en:
      'Madhya Pradesh is renowned for pioneering direct benefit transfer ecosystems built on the unified Samagra ID. Its landmark program, Mukhyamantri Ladli Behna Yojana, provides ₹1,250 every month directly to over 1.29 crore women. For unorganized workers, the Sambal 2.0 portal delivers comprehensive life insurance, maternity grants, education assistance, and electrical bill waivers. MP also tops agricultural farmer welfare through the Mukhyamantri Kisan Kalyan Yojana matching central grants.',
    welfareOverview_hi:
      'मध्य प्रदेश का जनकल्याण तंत्र समग्र आईडी (Samagra ID) पर आधारित पारदर्शी डीबीटी मॉडल के लिए प्रसिद्ध है। मुख्यमंत्री लाड़ली बहना योजना के अंतर्गत राज्य की 1.29 करोड़ से अधिक महिलाओं के खाते में हर माह ₹1,250 सीधे भेजे जाते हैं। असंगठित श्रमिकों के लिए संबल 2.0 योजना के तहत अनुग्रह सहायता, प्रसूति सहायता और छात्रवृत्ति मिलती है। इसके अलावा किसान कल्याण योजना के तहत किसानों को राज्य टॉप-अप दिया जाता है।',
    domicileRules_en:
      'Mool Niwas (Domicile) certificates in MP are issued using the Samagra Family ID, verified electricity/property bills, and 15 years proof of residence in Madhya Pradesh.',
    domicileRules_hi:
      'मध्य प्रदेश में मूल निवासी प्रमाण पत्र परिवार की समग्र आईडी, बिजली बिल/जमीन के दस्तावेज और राज्य में 15 वर्षों के स्थायी निवास के आधार पर लोक सेवा केंद्र के माध्यम से जारी किए जाते हैं।',
    issuingAuthority_en: 'Tehsildar / Lok Seva Kendra via MP e-District (mpedistrict.gov.in).',
    issuingAuthority_hi: 'तहसीलदार / लोक सेवा केंद्र (LSK) — एमपी ई-डिस्ट्रिक्ट (mpedistrict.gov.in) के माध्यम से।',
    portals: [
      {
        name_en: 'MP e-District (Lok Seva Kendra)',
        name_hi: 'एमपी ई-डिस्ट्रिक्ट (लोक सेवा गारंटी)',
        url: 'https://mpedistrict.gov.in',
        purpose_en: 'Right to Service portal for guaranteed time-bound delivery of Domicile, Caste, and Revenue services.',
        purpose_hi: 'लोक सेवा गारंटी अधिनियम के तहत मूल निवासी, जाति और आय प्रमाण पत्रों की समयबद्ध ऑनलाइन सेवाएं।',
        category: 'services',
      },
      {
        name_en: 'Mukhyamantri Ladli Behna Portal',
        name_hi: 'लाड़ली बहना योजना आधिकारिक पोर्टल',
        url: 'https://cmladlibehna.mp.gov.in',
        purpose_en: 'Samagra DBT status check, monthly installment credit report, and objection redressal.',
        purpose_hi: 'समग्र आईडी से डीबीटी भुगतान स्थिति, मासिक किस्त विवरण और पावती पर्ची डाउनलोड करने का पोर्टल।',
        category: 'welfare',
      },
      {
        name_en: 'Sambal 2.0 Portal',
        name_hi: 'संबल 2.0 जनकल्याण पोर्टल',
        url: 'https://sambal.mp.gov.in',
        purpose_en: 'Unorganized labor card registration, ex-gratia death compensation (up to ₹4 Lakh), and health benefits.',
        purpose_hi: 'असंगठित श्रमिक पंजीकरण, संबल कार्ड डाउनलोड, अनुग्रह सहायता (₹4 लाख तक) व प्रसूति सहायता।',
        category: 'employment',
      },
      {
        name_en: 'MP Bhulekh Land Records',
        name_hi: 'एमपी भूलेख भू-अभिलेख पोर्टल',
        url: 'https://mpbhulekh.gov.in',
        purpose_en: 'Digital certified copies of Khasra, Khatauni, and land map for agricultural schemes.',
        purpose_hi: 'खसरा, खतौनी और भू-नक्शा की प्रमाणित डिजिटल नकल किसान कल्याण योजनाओं हेतु प्राप्त करें।',
        category: 'land',
      },
    ],
    helplines: [
      {
        title_en: 'MP CM Helpline 181',
        title_hi: 'मध्य प्रदेश सीएम हेल्पलाइन 181',
        number: '181',
        timing_en: '24x7 All Days',
        timing_hi: '24 घंटे सातों दिन (मुफ्त कॉल)',
        department_en: 'Public Service Management Department, Bhopal',
        department_hi: 'लोक सेवा प्रबंधन विभाग, भोपाल',
      },
      {
        title_en: 'Samagra Social Security Helpdesk',
        title_hi: 'समग्र सामाजिक सुरक्षा मिशन हेल्पलाइन',
        number: '0755-2558391',
        timing_en: '10:00 AM to 5:00 PM',
        timing_hi: 'सुबह 10 से शाम 5 बजे',
        department_en: 'Samagra Samajik Suraksha Mission, MP',
        department_hi: 'समग्र सामाजिक सुरक्षा मिशन, म.प्र.',
      },
      {
        title_en: 'Sambal Shramik Toll-Free Helpline',
        title_hi: 'संबल श्रमिक टोल-फ्री हेल्पलाइन',
        number: '1800-233-1826',
        timing_en: '10:30 AM to 5:30 PM (Working Days)',
        timing_hi: 'सुबह 10:30 से शाम 5:30 बजे',
        department_en: 'Madhya Pradesh Building & Other Construction Workers Board',
        department_hi: 'मध्य प्रदेश श्रम कल्याण मंडल',
      },
    ],
    faqs: [
      {
        q_en: 'How to check MP Ladli Behna installment status via Samagra ID?',
        q_hi: 'लाड़ली बहना योजना की किस्त समग्र आईडी से कैसे चेक करें?',
        a_en: 'Visit cmladlibehna.mp.gov.in, click on "Application and Payment Status", enter your 9-digit Samagra Member ID or Application Number, verify the OTP, and view all monthly ₹1,250 credits.',
        a_hi: 'cmladlibehna.mp.gov.in पर जाएं, "आवेदन एवं भुगतान की स्थिति" पर क्लिक करें, अपनी 9 अंकों की समग्र सदस्य आईडी या आवेदन नंबर दर्ज करें और ओटीपी डालकर हर माह के ₹1,250 का स्टेटस देखें।',
      },
      {
        q_en: 'What benefits does an MP Sambal 2.0 Card provide?',
        q_hi: 'मध्य प्रदेश संबल 2.0 कार्ड से क्या-क्या लाभ मिलते हैं?',
        a_en: 'Sambal 2.0 cardholders receive up to ₹4 Lakh ex-gratia in accidental death, ₹2 Lakh in natural death, ₹16,000 maternity assistance, free electricity scheme subsidies, and complete tuition fee waivers for children in college.',
        a_hi: 'संबल कार्डधारी को दुर्घटना मृत्यु पर ₹4 लाख, सामान्य मृत्यु पर ₹2 लाख, प्रसूति पर ₹16,000, अंत्येष्टि सहायता ₹5,000 और बच्चों की उच्च शिक्षा में पूर्ण फीस माफी का लाभ मिलता है।',
      },
      {
        q_en: 'Why is Samagra eKYC mandatory for government schemes in MP?',
        q_hi: 'मध्य प्रदेश में सरकारी योजनाओं के लिए समग्र e-KYC क्यों जरूरी है?',
        a_en: 'Samagra eKYC links the beneficiary’s Aadhaar, name, and bank account to their Samagra ID, eliminating fake records and ensuring direct DBT transfer without any intermediary.',
        a_hi: 'समग्र e-KYC से नागरिक का आधार, नाम, जन्मतिथि और बैंक खाता समग्र आईडी से प्रमाणित हो जाता है, जिससे फर्जीवाड़ा रुकता है और डीबीटी का पैसा बिना किसी रुकावट के सीधे खाते में आता है।',
      },
    ],
  },
  'rajasthan': {
    stateId: 'rajasthan',
    welfareOverview_en:
      'Rajasthan leads India in citizen transparency through its Jan Soochna Portal and the One Family One Identity Jan Aadhaar system. Key welfare pillars include the Mukhyamantri Anupriti Coaching Yojana (sponsoring free residential coaching for 30,000+ competitive exam aspirants), Rajasthan Social Security Pensions (ensuring a statutory minimum of ₹1,000+ monthly pension with automatic 15% annual increase), and digital public service access via 80,000+ e-Mitra kiosks.',
    welfareOverview_hi:
      'राजस्थान जन सूचना पोर्टल और "एक परिवार, एक पहचान" जन आधार प्रणाली के जरिए जन-पारदर्शिता में देश का अग्रणी राज्य है। प्रमुख कल्याणकारी स्तंभों में मुख्यमंत्री अनुप्रति कोचिंग योजना (30,000+ मेधावी विद्यार्थियों को यूपीएससी, आरएएस, जेईई, नीट की निःशुल्क कोचिंग), न्यूनतम ₹1,000 मासिक सामाजिक सुरक्षा पेंशन (जिसमें 15% की स्वतः वार्षिक वृद्धि का प्रावधान है), और 80,000+ ई-मित्र केंद्रों का मजबूत नेटवर्क शामिल है।',
    domicileRules_en:
      'Bonafide Resident (Mool Niwas) certificate in Rajasthan is linked to the family’s Jan Aadhaar Card and 10 years of verified continuous residence in Rajasthan.',
    domicileRules_hi:
      'राजस्थान में मूल निवास प्रमाण पत्र परिवार के जन आधार कार्ड, राशन कार्ड और राज्य में न्यूनतम 10 वर्ष के निरंतर निवास के सत्यापन के आधार पर ई-मित्र के जरिए जारी होता है।',
    issuingAuthority_en: 'Tehsildar / Sub-Divisional Magistrate (SDM) via e-Mitra or SSO Portal (sso.rajasthan.gov.in).',
    issuingAuthority_hi: 'तहसीलदार / उपखंड अधिकारी (SDM) — ई-मित्र एवं राजस्थान एसएसओ पोर्टल के माध्यम से।',
    portals: [
      {
        name_en: 'Jan Soochna Portal Rajasthan',
        name_hi: 'जन सूचना पोर्टल राजस्थान',
        url: 'https://jansoochna.rajasthan.gov.in',
        purpose_en: 'Section 4(2) RTI public transparency portal tracking eligibility and payments across 115+ departments without login.',
        purpose_hi: 'बिना किसी लॉगिन के 115+ विभागों की योजनाओं, पात्रता और लाभार्थी भुगतान सूची की खुली सार्वजनिक जानकारी।',
        category: 'welfare',
      },
      {
        name_en: 'Rajasthan SSO (Single Sign-On)',
        name_hi: 'राजस्थान एसएसओ पोर्टल',
        url: 'https://sso.rajasthan.gov.in',
        purpose_en: 'Unified single-login identity for 100+ public citizen services, competitive exams, and government job applications.',
        purpose_hi: '100+ सरकारी नागरिक सेवाओं, प्रतियोगी परीक्षाओं और छात्रवृत्तियों के लिए सिंगल-विंडो लॉगिन हब।',
        category: 'services',
      },
      {
        name_en: 'Jan Aadhaar Portal',
        name_hi: 'जन आधार पोर्टल राजस्थान',
        url: 'https://janaadhaar.rajasthan.gov.in',
        purpose_en: 'Family identity registry, member eKYC, and master DBT bank seeding for all state welfare schemes.',
        purpose_hi: 'परिवार पहचान पत्र, सदस्यों की ई-केवाईसी और सभी राज्य योजनाओं हेतु प्राथमिक डीबीटी डेटाबेस।',
        category: 'services',
      },
      {
        name_en: 'RajSSP Social Security Pension',
        name_hi: 'राज-एसएसपी सामाजिक सुरक्षा पेंशन पोर्टल',
        url: 'https://rajssp.raj.nic.in',
        purpose_en: 'Old age, widow, and disability pension application, annual face-recognition biometric verification, and payment passbook.',
        purpose_hi: 'वृद्धावस्था, एकल नारी व विशेष योग्यजन पेंशन आवेदन, वार्षिक भौतिक सत्यापन व भुगतान पासबुक।',
        category: 'welfare',
      },
    ],
    helplines: [
      {
        title_en: 'Rajasthan Sampark Helpline 181',
        title_hi: 'राजस्थान संपर्क हेल्पलाइन 181',
        number: '181',
        timing_en: '24x7 Toll-Free',
        timing_hi: '24 घंटे सातों दिन (टोल-फ्री)',
        department_en: 'Department of Public Grievance Redressal, Jaipur',
        department_hi: 'जन अभाव अभियोग निराकरण विभाग, जयपुर',
      },
      {
        title_en: 'Jan Aadhaar Citizen Helpdesk',
        title_hi: 'जन आधार नागरिक सहायता डेस्क',
        number: '0141-2921450',
        timing_en: '9:30 AM to 6:00 PM (Working Days)',
        timing_hi: 'सुबह 9:30 से शाम 6:00 बजे (कार्यदिवस)',
        department_en: 'Rajasthan Jan Aadhaar Authority, Jaipur',
        department_hi: 'राजस्थान जन आधार प्राधिकरण, जयपुर',
      },
      {
        title_en: 'e-Mitra Citizen Support',
        title_hi: 'ई-मित्र नागरिक सहायता केंद्र',
        number: '0141-2221424',
        timing_en: '9:30 AM to 6:00 PM',
        timing_hi: 'सुबह 9:30 से शाम 6:00 बजे',
        department_en: 'DoIT&C, Government of Rajasthan',
        department_hi: 'सूचना प्रौद्योगिकी एवं संचार विभाग (DoIT&C)',
      },
    ],
    faqs: [
      {
        q_en: 'Why is Jan Aadhaar Card compulsory for schemes in Rajasthan?',
        q_hi: 'राजस्थान में सभी सरकारी योजनाओं के लिए जन आधार कार्ड क्यों अनिवार्य है?',
        a_en: 'Jan Aadhaar acts as the "One Family, One Card, One Identity" ledger in Rajasthan. All state cash subsidies, free foodgrains, and pensions are mapped directly to the family head’s Jan Aadhaar DBT account.',
        a_hi: 'जन आधार राजस्थान में "एक परिवार, एक कार्ड, एक पहचान" का डिजिटल आधार है। राज्य की सभी नकद सब्सिडी, मुफ्त राशन और पेंशन महिला मुखिया के जन आधार खाते से सीधे ट्रांसफर होती हैं।',
      },
      {
        q_en: 'How can students apply for Mukhyamantri Anupriti Coaching Yojana?',
        q_hi: 'मुख्यमंत्री अनुप्रति कोचिंग योजना में आवेदन कैसे करें?',
        a_en: 'Eligible students (whose family income is under ₹8 Lakh/year or parents are pay matrix L-11 employees) apply through their Rajasthan SSO portal via the SJMS (Social Justice & Empowerment) portal during open intake rounds.',
        a_hi: 'पात्र छात्र (जिनकी पारिवारिक आय ₹8 लाख से कम हो) राजस्थान एसएसओ (SSO) पोर्टल पर SJMS एप्लिकेशन के माध्यम से विभिन्न प्रतियोगी परीक्षाओं की निःशुल्क कोचिंग के लिए आवेदन करते हैं।',
      },
      {
        q_en: 'How to perform annual physical verification for Rajasthan Pension (RajSSP)?',
        q_hi: 'राजस्थान सामाजिक सुरक्षा पेंशन का वार्षिक भौतिक सत्यापन कैसे करें?',
        a_en: 'Pensioners must verify annually every November–December using the "RajSSP Mobile App" via Aadhaar Face Recognition from home, or at any nearby e-Mitra kiosk using fingerprint biometric.',
        a_hi: 'पेंशनरों को प्रतिवर्ष नवंबर-दिसंबर में घर बैठे "RajSSP Mobile App" से आधार फेस रिकग्निशन के जरिए या नजदीकी ई-मित्र पर बायोमेट्रिक फिंगरप्रिंट लगाकर वार्षिक सत्यापन कराना होता है।',
      },
    ],
  },
  'maharashtra': {
    stateId: 'maharashtra',
    welfareOverview_en:
      'Maharashtra powers citizen benefits through its unified Aaple Sarkar citizen services portal and the MahaDBT scholarship transfer system. Key flagship programs include the Mukhyamantri Majhi Ladki Bahin Yojana (providing ₹1,500 monthly direct cash assistance to women aged 21–65), the Mukhyamantri Yuva Karya Prashikshan Yojana (providing on-the-job apprenticeship stipends up to ₹10,000/month for youth), ₹1 token crop insurance for farmers, and complete higher education fee waivers for girls from families earning up to ₹8 Lakh.',
    welfareOverview_hi:
      'महाराष्ट्र सरकार अपने एकीकृत "आपले सरकार" पोर्टल और "MahaDBT" तंत्र के जरिए करोड़ों नागरिकों तक सेवाएं पहुंचाती है। प्रमुख फ्लैगशिप योजनाओं में मुख्यमंत्री माझी लाडकी बहीण योजना (21 से 65 वर्ष की महिलाओं को हर माह ₹1,500 की नकद सहायता), मुख्यमंत्री युवा कार्यप्रशिक्षण योजना (युवाओं को ₹10,000/माह तक का अप्रेंटिसशिप स्टाइपेंड), किसानों के लिए ₹1 में फसल बीमा, और ₹8 लाख तक आय वाले परिवारों की बालिकाओं हेतु उच्च शिक्षा में 100% फीस माफी शामिल है।',
    domicileRules_en:
      'Domicile Certificate in Maharashtra requires proof of minimum 15 years continuous residence in the state, supported by school leaving certificates, ration cards, and residence self-declaration.',
    domicileRules_hi:
      'महाराष्ट्र में अधिवास प्रमाण पत्र (Domicile) हेतु राज्य में न्यूनतम 15 वर्ष के निरंतर निवास का प्रमाण आवश्यक है। इसके लिए स्कूल लीविंग सर्टिफिकेट (LC), राशन कार्ड और निवास स्व-घोषणा पत्र जमा करना होता है।',
    issuingAuthority_en: 'Tehsildar / Executive Magistrate via Aaple Sarkar Portal (aaplesarkar.mahaonline.gov.in).',
    issuingAuthority_hi: 'तहसीलदार / कार्यकारी दंडाधिकारी — आपले सरकार पोर्टल (aaplesarkar.mahaonline.gov.in) के माध्यम से।',
    portals: [
      {
        name_en: 'Aaple Sarkar Portal',
        name_hi: 'आपले सरकार पोर्टल (महाराष्ट्र)',
        url: 'https://aaplesarkar.mahaonline.gov.in',
        purpose_en: 'Right to Public Services portal for online delivery of Domicile, Non-Creamy Layer, Caste, and Income certificates.',
        purpose_hi: 'लोकसेवा हक्क अधिनियम के तहत अधिवास (Domicile), नॉन-क्रीमी लेयर, जाति और आय प्रमाण पत्रों की ऑनलाइन सेवा।',
        category: 'services',
      },
      {
        name_en: 'MahaDBT Portal',
        name_hi: 'महाडीबीटी पोर्टल (MahaDBT)',
        url: 'https://mahadbt.maharashtra.gov.in',
        purpose_en: 'Direct Benefit Transfer portal managing 50+ post-matric scholarships, tuition fee waivers, and hostel allowances.',
        purpose_hi: '50+ पोस्ट-मैट्रिक छात्रवृत्तियों, शिक्षण शुल्क प्रतिपूर्ति और निर्वाह भत्ते का केंद्रीकृत डीबीटी पोर्टल।',
        category: 'scholarship',
      },
      {
        name_en: 'Mukhyamantri Majhi Ladki Bahin Portal',
        name_hi: 'माझी लाडकी बहीण योजना पोर्टल',
        url: 'https://ladakibahin.maharashtra.gov.in',
        purpose_en: 'Official portal and mobile application tracking the ₹1,500 monthly DBT financial assistance for women.',
        purpose_hi: 'महिलाओं के लिए ₹1,500 प्रतिमाह वित्तीय सहायता आवेदन, आधार लिंक स्टेटस व लाभार्थी सूची का पोर्टल।',
        category: 'welfare',
      },
      {
        name_en: 'Mahabhulekh (7/12 Land Records)',
        name_hi: 'महाभूलेख (7/12 व 8A सातबारा)',
        url: 'https://bhulekh.mahabhumi.gov.in',
        purpose_en: 'Digital signed copies of 7/12 (Saat Bara) and 8A extracts for agricultural subsidies and crop insurance.',
        purpose_hi: 'कृषि ऋण, फसल बीमा और सरकारी योजनाओं हेतु डिजिटल हस्ताक्षरित 7/12 (सातबारा) और 8अ उतारा प्राप्त करें।',
        category: 'land',
      },
    ],
    helplines: [
      {
        title_en: 'Aaple Sarkar Citizen Helpline',
        title_hi: 'आपले सरकार नागरिक टोल-फ्री हेल्पलाइन',
        number: '1800-120-8040',
        timing_en: '24x7 Toll-Free Support',
        timing_hi: '24 घंटे सातों दिन (टोल-फ्री)',
        department_en: 'Directorate of Information Technology, Mumbai',
        department_hi: 'माहिती तंत्रज्ञान संचालनालय (DIT), मुंबई',
      },
      {
        title_en: 'MahaDBT Scholarship Helpdesk',
        title_hi: 'महाडीबीटी छात्रवृत्ति हेल्पडेस्क',
        number: '022-49150800',
        timing_en: '9:00 AM to 6:00 PM (Monday–Saturday)',
        timing_hi: 'सुबह 9 से शाम 6 बजे (सोमवार-शनिवार)',
        department_en: 'Social Justice & Special Assistance Department',
        department_hi: 'सामाजिक न्याय व विशेष सहाय्य विभाग, महाराष्ट्र',
      },
      {
        title_en: 'Women & Child Development Helpline',
        title_hi: 'महिला व बाल विकास हेल्पलाइन',
        number: '181',
        timing_en: '24x7 Emergency & Guidance',
        timing_hi: '24 घंटे आपातकालीन व परामर्श सहायता',
        department_en: 'WCD Department, Govt. of Maharashtra',
        department_hi: 'महिला व बाल विकास विभाग, महाराष्ट्र शासन',
      },
    ],
    faqs: [
      {
        q_en: 'What are the eligibility conditions for Maharashtra Majhi Ladki Bahin Yojana?',
        q_hi: 'महाराष्ट्र मुख्यमंत्री माझी लाडकी बहीण योजना की पात्रता शर्तें क्या हैं?',
        a_en: 'Resident women of Maharashtra aged 21 to 65 whose total family annual income is under ₹2.5 Lakh, who hold an active bank account linked with Aadhaar NPCI, and do not possess four-wheeler vehicles (excluding tractors) are eligible for ₹1,500/month.',
        a_hi: 'महाराष्ट्र की 21 से 65 वर्ष की वह महिलाएं जिनके परिवार की वार्षिक आय ₹2.5 लाख से कम हो, बैंक खाता आधार से लिंक हो और परिवार में चार पहिया वाहन न हो, वे ₹1,500 प्रतिमाह की पात्र हैं।',
      },
      {
        q_en: 'How to track certificate application status on Aaple Sarkar?',
        q_hi: 'आपले सरकार पोर्टल पर आवेदन की स्थिति (Status) कैसे देखें?',
        a_en: 'Visit aaplesarkar.mahaonline.gov.in, click on "Track Your Application", enter your 15-digit Application ID, and download the digitally signed certificate directly upon Tehsildar approval.',
        a_hi: 'aaplesarkar.mahaonline.gov.in पर जाएं, "Track Your Application" पर क्लिक करें, अपना 15 अंकों का एप्लीकेशन आईडी दर्ज करें और अनुमोदन के बाद डिजिटल सर्टिफिकेट डाउनलोड करें।',
      },
      {
        q_en: 'What is the ₹1 Crop Insurance Scheme in Maharashtra?',
        q_hi: 'महाराष्ट्र में ₹1 में फसल बीमा योजना (Crop Insurance) क्या है?',
        a_en: 'Under the Sarvसमावेशक (Comprehensive) PM Fasal Bima Yojana, Maharashtra farmers pay only a nominal token premium of ₹1 per crop season, with the entire remaining farmer share subsidized by the State Government.',
        a_hi: 'सर्वसमावेशक पीएम फसल बीमा योजना के तहत महाराष्ट्र के किसानों को प्रति सीजन केवल ₹1 का टोकन प्रीमियम देना होता है; किसान हिस्से का बाकी पूरा प्रीमियम राज्य सरकार खुद वहन करती है।',
      },
    ],
  },
  'gujarat': {
    stateId: 'gujarat',
    welfareOverview_en:
      'Gujarat delivers citizen welfare through its pioneering Digital Gujarat citizen portal and the i-Khedut agriculture ecosystem. High-impact programs include the Mukhyamantri Mahila Utkarsh Yojana (MMUY) facilitating 0% interest group loans up to ₹1 Lakh for women Joint Liability Earning Groups (JLEG), the Vhali Dikri Yojana providing ₹1.10 Lakh phased incentives for daughters, comprehensive subsidies for solar pumps and drip irrigation on i-Khedut, and full health coverage under PMJAY-MA.',
    welfareOverview_hi:
      'गुजरात अपने डिजिटल गुजरात पोर्टल और "आई-खेड़ूत" (i-Khedut) कृषि मंच के जरिए योजनाओं का पारदर्शी वितरण करता है। प्रमुख कार्यक्रमों में मुख्यमंत्री महिला उत्कर्ष योजना (MMUY - महिला समूहों को ₹1 लाख तक 0% ब्याज पर ऋण), वहाली डिकरी योजना (बेटियों के जन्म, कक्षा 1, 9 और 18 वर्ष की आयु पर कुल ₹1.10 लाख की सहायता), आई-खेड़ूत पर सोलर पंप व ड्रिप सिंचाई सब्सिडी, और PMJAY-मा अमृतम योजना शामिल हैं।',
    domicileRules_en:
      'Domicile certificate in Gujarat requires verified proof of continuous residence for at least 10 years in Gujarat, land ownership or rent agreements, school leaving certificates, and verification by the Talati/Mamlatdar.',
    domicileRules_hi:
      'गुजरात में निवास प्रमाण पत्र हेतु राज्य में न्यूनतम 10 वर्ष का निरंतर निवास, तलाटी की रिपोर्ट, स्कूल एलसी और राशन कार्ड आवश्यक होता है। यह जन सेवा केंद्र अथवा डिजिटल गुजरात पोर्टल से जारी होता है।',
    issuingAuthority_en: 'Mamlatdar / Taluka Development Officer (TDO) via Digital Gujarat (digitalgujarat.gov.in).',
    issuingAuthority_hi: 'मामलतदार / तालुका विकास अधिकारी (TDO) — डिजिटल गुजरात एवं जन सेवा केंद्र के माध्यम से।',
    portals: [
      {
        name_en: 'Digital Gujarat Portal',
        name_hi: 'डिजिटल गुजरात पोर्टल',
        url: 'https://www.digitalgujarat.gov.in',
        purpose_en: 'Single-window delivery of Domicile, Income, Caste, Senior Citizen, and Higher Education scholarships.',
        purpose_hi: 'निवास, आय, जाति, सीनियर सिटीजन कार्ड और उच्च शिक्षा छात्रवृत्ति का एकीकृत आधिकारिक सरकारी मंच।',
        category: 'services',
      },
      {
        name_en: 'i-Khedut Portal Gujarat',
        name_hi: 'आई-खेड़ूत पोर्टल गुजरात',
        url: 'https://ikhedut.gujarat.gov.in',
        purpose_en: 'Direct farmer subsidies for tractors, micro-irrigation, solar pumps, organic farming, and animal husbandry.',
        purpose_hi: 'किसानों के लिए ट्रैक्टर, सूक्ष्म सिंचाई, सोलर पंप, बागवानी और पशुपालन सब्सिडी का आधिकारिक पोर्टल।',
        category: 'welfare',
      },
      {
        name_en: 'e-Samaj Kalyan Gujarat',
        name_hi: 'ई-समाज कल्याण पोर्टल',
        url: 'https://esamajkalyan.gujarat.gov.in',
        purpose_en: 'Welfare schemes for SC, ST, SEBC, and Economically Backward Classes including Kunwarbai nu Mameru.',
        purpose_hi: 'कुंवरबाई नु मामेरू योजना, विदेशी अध्ययन ऋण, और सामाजिक व शैक्षणिक पिछड़े वर्गों हेतु कल्याणकारी योजनाएं।',
        category: 'welfare',
      },
      {
        name_en: 'AnyRoR Anywhere Gujarat (Land Records)',
        name_hi: 'एनी-आरओआर (AnyRoR) भूलेख गुजरात',
        url: 'https://anyror.gujarat.gov.in',
        purpose_en: 'Instant certified viewing of VF-7, VF-8A land records, and 135-D mutation notices across all Gujarat talukas.',
        purpose_hi: 'गांव नमूना नं 7/12, 8A और 135-D म्यूटेशन नोटिस की ऑनलाइन आधिकारिक डिजिटल प्रति प्राप्त करें।',
        category: 'land',
      },
    ],
    helplines: [
      {
        title_en: 'Digital Gujarat Citizen Helpdesk',
        title_hi: 'डिजिटल गुजरात नागरिक हेल्पडेस्क',
        number: '1800-233-5500',
        timing_en: '10:30 AM to 6:00 PM (Working Days)',
        timing_hi: 'सुबह 10:30 से शाम 6:00 बजे (कार्यदिवस)',
        department_en: 'Science & Technology Department, Gandhinagar',
        department_hi: 'विज्ञान एवं प्रौद्योगिकी विभाग, गांधीनगर',
      },
      {
        title_en: 'i-Khedut Farmer Support Helpline',
        title_hi: 'आई-खेड़ूत किसान सहायता हेल्पलाइन',
        number: '1800-180-1551',
        timing_en: '6:00 AM to 10:00 PM All Days',
        timing_hi: 'सुबह 6 से रात 10 बजे प्रतिदिन',
        department_en: 'Department of Agriculture & Farmers Welfare, Gujarat',
        department_hi: 'कृषि, किसान कल्याण एवं सहकारिता विभाग',
      },
      {
        title_en: 'CM Dashboard & Grievance Cell',
        title_hi: 'मुख्यमंत्री जन शिकायत निवारण (स्वागत SWAGAT)',
        number: '079-23250073',
        timing_en: '10:00 AM to 6:00 PM',
        timing_hi: 'सुबह 10 से शाम 6 बजे',
        department_en: 'Chief Minister Office, Swarnim Sankul-1, Gandhinagar',
        department_hi: 'मुख्यमंत्री कार्यालय, स्वर्णिम संकुल-1, गांधीनगर',
      },
    ],
    faqs: [
      {
        q_en: 'What is Mukhyamantri Mahila Utkarsh Yojana (MMUY) in Gujarat?',
        q_hi: 'गुजरात में मुख्यमंत्री महिला उत्कर्ष योजना (MMUY) क्या है?',
        a_en: 'MMUY provides 100% interest-free loans of ₹1 Lakh to groups of 10 women (Joint Liability and Earning Group - JLEG) for micro-businesses, with the government covering the entire bank interest burden.',
        a_hi: 'MMUY योजना के तहत 10 महिलाओं के समूह (JLEG) को नया छोटा व्यवसाय शुरू करने हेतु ₹1 लाख तक का 0% ब्याज-मुक्त ऋण दिया जाता है; बैंक ब्याज का पूरा खर्च राज्य सरकार खुद उठाती है।',
      },
      {
        q_en: 'How does a farmer apply for equipment subsidy on i-Khedut?',
        q_hi: 'आई-खेड़ूत पोर्टल पर कृषि यंत्र या ड्रिप सिंचाई सब्सिडी के लिए आवेदन कैसे करें?',
        a_en: 'Farmers register on ikhedut.gujarat.gov.in using their 7/12 land records and Aadhaar details when component application windows open, submit the form at their Gram Panchayat VCE, and receive subsidies via direct DBT.',
        a_hi: 'योजना की विंडो खुलने पर किसान ikhedut.gujarat.gov.in पर 7/12 भूमि रिकॉर्ड व आधार से आवेदन करते हैं, पंचायत VCE पर पावती जमा करते हैं और खरीद के बाद सब्सिडी सीधे बैंक खाते में आती है।',
      },
      {
        q_en: 'What is the financial grant under Vhali Dikri Yojana?',
        q_hi: 'गुजरात वहाली डिकरी योजना में बेटियों को कितनी सहायता मिलती है?',
        a_en: 'Eligible girl children receive ₹4,000 on Class 1 admission, ₹6,000 on Class 9 admission, and ₹1,00,000 upon reaching 18 years of age (total ₹1,10,000) for higher education or marriage.',
        a_hi: 'पात्र बेटी को कक्षा 1 में प्रवेश पर ₹4,000, कक्षा 9 में ₹6,000 और 18 वर्ष की आयु पूरी होने पर उच्च शिक्षा या विवाह हेतु ₹1,00,000 (कुल ₹1,10,000) की वित्तीय सहायता मिलती है।',
      },
    ],
  },
  'all-india': {
    stateId: 'all-india',
    welfareOverview_en:
      'Central Government welfare initiatives represent India’s national social safety net, covering over 90 crore citizens across 28 states and 8 union territories. Flagship central schemes provide guaranteed direct bank transfer (PM Kisan), universal secondary and tertiary health insurance (Ayushman Bharat PM-JAY), all-weather pucca housing (PM Awas Yojana Gramin & Urban), free rooftop solar installations (PM Surya Ghar), and artisan collateral-free credit (PM Vishwakarma).',
    welfareOverview_hi:
      'केंद्र सरकार की कल्याणकारी योजनाएं भारत का राष्ट्रीय सामाजिक सुरक्षा कवच हैं, जो 28 राज्यों और 8 केंद्र शासित प्रदेशों के 90 करोड़ से अधिक नागरिकों को लाभान्वित करती हैं। प्रमुख केंद्रीय योजनाओं में प्रत्यक्ष बैंक ट्रांसफर (पीएम किसान), ₹5 लाख का कैशलेस स्वास्थ्य कवर (आयुष्मान भारत PM-JAY), पक्का मकान (पीएम आवास योजना), मुफ्त सौर बिजली (पीएम सूर्य घर), और पारंपरिक कारीगरों हेतु टूलकिट व सस्ता लोन (पीएम विश्वकर्मा) शामिल हैं।',
    domicileRules_en:
      'Central schemes are available to all bona fide citizens of India holding a valid Aadhaar card and meeting scheme-specific economic, occupational, or social criteria regardless of home state.',
    domicileRules_hi:
      'केंद्रीय योजनाएं भारत के सभी वैध आधार कार्डधारी नागरिकों के लिए खुली हैं जो संबंधित योजना के आर्थिक, व्यावसायिक अथवा सामाजिक पात्रता मानदंडों को पूरा करते हैं।',
    issuingAuthority_en: 'Relevant Ministries of Government of India & Central Nodal Agencies.',
    issuingAuthority_hi: 'भारत सरकार के संबंधित मंत्रालय एवं राष्ट्रीय नोडल एजेंसियां।',
    portals: [
      {
        name_en: 'National Portal of India',
        name_hi: 'राष्ट्रीय पोर्टल (India.gov.in)',
        url: 'https://india.gov.in',
        purpose_en: 'Single-entry portal accessing all central government public services, acts, and department directories.',
        purpose_hi: 'भारत सरकार की सभी सार्वजनिक सेवाओं, नियमों और मंत्रालयों की जानकारी का सिंगल-विंडो पोर्टल।',
        category: 'services',
      },
      {
        name_en: 'myScheme Official Portal',
        name_hi: 'माई-स्कीम (myScheme) आधिकारिक पोर्टल',
        url: 'https://www.myscheme.gov.in',
        purpose_en: 'National scheme discovery platform checking citizen eligibility across 700+ central and state schemes.',
        purpose_hi: '700+ केंद्रीय और राज्य योजनाओं में अपनी पात्रता एक ही जगह जांचने का राष्ट्रीय मंच।',
        category: 'welfare',
      },
      {
        name_en: 'DBT Bharat Portal',
        name_hi: 'डीबीटी भारत आधिकारिक पोर्टल',
        url: 'https://dbtbharat.gov.in',
        purpose_en: 'Central government direct benefit transfer dashboard, scheme beneficiaries tracker, and PFMS guidelines.',
        purpose_hi: 'प्रत्यक्ष लाभ अंतरण (DBT) का राष्ट्रीय डैशबोर्ड, लाभार्थी संख्या व आधार सीडिंग दिशा-निर्देश।',
        category: 'welfare',
      },
      {
        name_en: 'UMANG Unified Platform',
        name_hi: 'उमंग (UMANG) मोबाइल व वेब पोर्टल',
        url: 'https://web.umang.gov.in',
        purpose_en: 'Unified Mobile Application for New-age Governance delivering 2,000+ government services in one app.',
        purpose_hi: 'ईपीएफओ, पैन, डिजिलॉकर और गैस बुकिंग सहित 2,000+ सरकारी सेवाओं का एकीकृत मोबाइल व वेब ऐप।',
        category: 'services',
      },
    ],
    helplines: [
      {
        title_en: 'National Citizen Service Helpline',
        title_hi: 'राष्ट्रीय नागरिक सेवा हेल्पलाइन',
        number: '1800-11-0031',
        timing_en: '9:00 AM to 6:00 PM (Monday–Saturday)',
        timing_hi: 'सुबह 9 से शाम 6 बजे (सोम-शनि)',
        department_en: 'National Informatics Centre (NIC), New Delhi',
        department_hi: 'राष्ट्रीय सूचना विज्ञान केंद्र (NIC), नई दिल्ली',
      },
      {
        title_en: 'PM-Kisan National Helpdesk',
        title_hi: 'पीएम किसान राष्ट्रीय हेल्पडेस्क',
        number: '155261',
        timing_en: '24x7 Automated / Office Hours Agent',
        timing_hi: '24 घंटे ऑटोमेटेड / कार्यसमय में सहायक',
        department_en: 'Ministry of Agriculture & Farmers Welfare',
        department_hi: 'कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार',
      },
      {
        title_en: 'Ayushman Bharat PM-JAY Call Center',
        title_hi: 'आयुष्मान भारत राष्ट्रीय कॉल सेंटर',
        number: '14555',
        timing_en: '24x7 Toll-Free Support',
        timing_hi: '24 घंटे सातों दिन (मुफ्त कॉल)',
        department_en: 'National Health Authority (NHA), New Delhi',
        department_hi: 'राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA), नई दिल्ली',
      },
    ],
    faqs: [
      {
        q_en: 'Can a citizen receive benefits from both Central and State schemes?',
        q_hi: 'क्या कोई नागरिक एक साथ केंद्र और राज्य दोनों की योजनाओं का लाभ ले सकता है?',
        a_en: 'Yes! In most categories (e.g. agriculture, education, social security), state schemes act as top-up benefits over central programs. For example, a farmer can receive ₹6,000 from PM-Kisan and additional state cash support where offered.',
        a_hi: 'हाँ! अधिकांश क्षेत्रों (जैसे कृषि, शिक्षा, स्वास्थ्य) में राज्य की योजनाएं केंद्र सरकार की सहायता पर अतिरिक्त टॉप-अप का काम करती हैं। जैसे किसान पीएम-किसान के ₹6,000 के साथ-साथ राज्य की किसान योजना का भी लाभ ले सकते हैं।',
      },
      {
        q_en: 'What is the Aadhaar-NPCI bank linking requirement for Central schemes?',
        q_hi: 'केंद्रीय योजनाओं के लिए आधार-NPCI बैंक खाता लिंक होना क्यों जरूरी है?',
        a_en: 'All central cash transfers are disbursed strictly via the Public Financial Management System (PFMS) through the NPCI Aadhaar payment bridge. Without active NPCI mapping in your bank account, DBT payments fail automatically.',
        a_hi: 'सभी केंद्रीय योजनाओं का भुगतान PFMS और NPCI आधार पेमेंट ब्रिज के जरिए होता है। यदि बैंक खाते में एनपीसीआई मैपिंग एक्टिव नहीं है, तो डीबीटी का पैसा खाते में नहीं पहुंच पाता।',
      },
      {
        q_en: 'How to discover all central schemes eligible for my family profile?',
        q_hi: 'मेरे परिवार के लिए कौन-कौन सी केंद्रीय योजनाएं पात्र हैं, यह कैसे जानें?',
        a_en: 'Use JanLabh’s interactive Eligibility Checker or visit myscheme.gov.in. By entering your age, caste category, occupation, and family income, you receive a curated list of all applicable schemes within seconds.',
        a_hi: 'आप जनलाभ (JanLabh) के पात्रता चेकर का उपयोग करें या myscheme.gov.in पर जाएं। अपनी उम्र, वर्ग, पेशा और आय चुनकर कुछ ही सेकंड में अपने लिए सभी पात्र योजनाओं की सूची देख सकते हैं।',
      },
    ],
  },
};
