import { Scheme } from '@/types';

export const SCHEMES: Scheme[] = [
  {
    id: 'pm-kisan',
    slug: 'pm-kisan-samman-nidhi',
    title_en: 'PM Kisan Samman Nidhi: Eligibility, Benefits, Status & Application',
    title_hi: 'पीएम किसान सम्मान निधि: पात्रता, लाभ, स्टेटस और आवेदन प्रक्रिया',
    shortTitle_en: 'PM-Kisan Samman Nidhi',
    shortTitle_hi: 'प्रधानमंत्री किसान सम्मान निधि',
    category: 'farmers',
    state: 'all-india',
    stateLabel_en: 'Central (All India)',
    stateLabel_hi: 'केंद्र सरकार (अखिल भारतीय)',
    status: 'Active',
    lastVerified: 'October 28, 2026',
    
    benefitSummary_en: '₹6,000 direct income support per year credited in 3 equal four-monthly installments of ₹2,000 directly to Aadhaar-seeded bank accounts.',
    benefitSummary_hi: 'प्रति वर्ष ₹6,000 की प्रत्यक्ष आर्थिक सहायता, जो ₹2,000 की 3 समान किस्तों में सीधे आधार-सीडेड बैंक खाते में डीबीटी द्वारा भेजी जाती है।',
    benefitAmount_en: '₹6,000 / year (3 installments)',
    benefitAmount_hi: '₹6,000 प्रति वर्ष (3 किस्तें)',
    whoCanApply_en: 'Small and marginal landholding farmer families with cultivable land parcels in their name.',
    whoCanApply_hi: 'छोटे व सीमांत किसान परिवार जिनके नाम पर कृषि योग्य भूमि के वैध राजस्व दस्तावेज दर्ज हैं।',
    applicationMode: 'Online & Offline',
    bannerImage: '/images/schemes/pm-kisan-samman-nidhi.png',
    
    whatIsThis_en: 'PM Kisan Samman Nidhi is a 100% Central Government funded initiative designed to provide financial support to landholding farmer families across India to procure agricultural inputs like seeds, fertilizers, and meet household expenses without turning to high-interest moneylenders.',
    whatIsThis_hi: 'पीएम किसान सम्मान निधि भारत सरकार की 100% केंद्र-पोषित योजना है, जिसका उद्देश्य देशभर के भूमिधारक किसान परिवारों को बीज, खाद, कीटनाशक खरीदने और कृषि संबंधी प्राथमिक आवश्यकताओं को पूरा करने हेतु आर्थिक सहायता प्रदान करना है।',
    
    benefitsList_en: [
      '₹2,000 sent directly to the bank account every 4 months (April-July, August-November, December-March).',
      'Direct Benefit Transfer (DBT) eliminates middlemen and transaction fees.',
      'Aadhaar-authenticated transfer ensures payment transparently reaches the registered cultivator.',
      'Eligible farmers can also avail low-interest Kisan Credit Card (KCC) loans up to ₹3 Lakh.'
    ],
    benefitsList_hi: [
      'हर 4 महीने में ₹2,000 सीधे बैंक खाते में (अप्रैल-जुलाई, अगस्त-नवंबर, दिसंबर-मार्च)।',
      'प्रत्यक्ष लाभ अंतरण (DBT) से बिचौलियों की कोई भूमिका नहीं रहती।',
      'आधार प्रमाणीकरण और भू-सत्यापन से सीधा पारदर्शी भुगतान।',
      'लाभार्थी किसानों को रियायती ब्याज दर पर ₹3 लाख तक का किसान क्रेडिट कार्ड (KCC) भी मिलता है।'
    ],
    
    eligibility: {
      eligibleIf_en: [
        'The applicant is a citizen of India residing in any State or Union Territory.',
        'The farmer family holds cultivable agricultural land registered in their name in state land records.',
        'The applicant has an active Aadhaar card linked with their bank account (NPCI DBT mapped).',
        'e-KYC has been completed via OTP on PM-Kisan portal or biometric at CSC center.'
      ],
      eligibleIf_hi: [
        'आवेदक भारत का स्थायी निवासी हो।',
        'किसान या उसके परिवार के सदस्य के नाम पर कृषि योग्य भूमि के वैध राजस्व रिकॉर्ड (खतियान/जमाबंदी) दर्ज हों।',
        'बैंक खाता आधार कार्ड से जुड़ा हो और एनपीसीआई (NPCI) डीबीटी के लिए सक्रिय रूप से मैप हो।',
        'पीएम किसान पोर्टल पर ओटीपी अथवा सीएससी केंद्र पर बायोमेट्रिक द्वारा ई-केवाईसी पूर्ण हो।'
      ],
      notEligibleIf_en: [
        'Institutional landholders or holding non-agricultural land.',
        'Present or retired constitutional post holders, Ministers, MPs, MLAs, Mayors, or Zila Panchayat Chairpersons.',
        'Serving or retired officers and employees of Central/State Government departments and PSUs (excluding Class IV/Peons).',
        'All retired pensioners receiving a monthly pension of ₹10,000 or more (excluding Class IV employees).',
        'Any individual who paid income tax in the last assessment year.',
        'Professionals like Doctors, Engineers, Lawyers, Chartered Accountants, and Architects.'
      ],
      notEligibleIf_hi: [
        'संस्थागत भूमि धारक या केवल गैर-कृषि भूमि वाले व्यक्ति।',
        'संवैधानिक पदों के वर्तमान या पूर्व धारक, सांसद, विधायक, मंत्री, मेयर या जिला पंचायत अध्यक्ष।',
        'केंद्र/राज्य सरकार और सार्वजनिक उपक्रमों के सेवारत या सेवानिवृत्त कर्मचारी (ग्रुप-डी/चतुर्थ श्रेणी को छोड़कर)।',
        '₹10,000 या अधिक की मासिक पेंशन प्राप्त करने वाले सेवानिवृत्त कर्मचारी (चतुर्थ श्रेणी को छोड़कर)।',
        'गत वित्तीय वर्ष में आयकर (Income Tax) का भुगतान करने वाले व्यक्ति।',
        'डॉक्टर, इंजीनियर, वकील, चार्टर्ड अकाउंटेंट (सीए) और आर्किटेक्ट जैसे पेशेवर।'
      ]
    },
    
    requiredDocuments_en: [
      'Aadhaar Card of the applicant farmer',
      'Proof of land ownership (Khata, Khesra, Jamabandi / RoR document)',
      'Bank Account Passbook (Bank account must be NPCI Aadhaar Seeded)',
      'Active Mobile Number linked to Aadhaar for OTP verification',
      'Self-Declaration form confirming non-taxpayer status'
    ],
    requiredDocuments_hi: [
      'आवेदक किसान का आधार कार्ड',
      'भूमि स्वामित्व का आधिकारिक प्रमाण (खतियान, जमाबंदी पर्चा, लगान रसीद / RoR)',
      'बैंक पासबुक (खाता एनपीसीआई आधार सीडेड होना अनिवार्य है)',
      'आधार से लिंक सक्रिय मोबाइल नंबर (ओटीपी सत्यापन हेतु)',
      'गैर-आयकरदाता एवं पात्रता का स्व-घोषणा पत्र'
    ],
    
    howToApply_en: [
      'Visit the official PM Kisan portal at pmkisan.gov.in.',
      'Under the "Farmers Corner" section, click on "New Farmer Registration".',
      'Select whether you are a "Rural Farmer Registration" or "Urban Farmer Registration".',
      'Enter your 12-digit Aadhaar Number, 10-digit Mobile Number, select your State, and submit the OTP.',
      'Fill in personal details, district, sub-district, village, and land record details (Survey/Khata No., Khasra No., Area in Hectare).',
      'Upload the land revenue document (PDF) and submit the application.',
      'Save your Application Reference Number for tracking state revenue verification status.'
    ],
    howToApply_hi: [
      'आधिकारिक पोर्टल pmkisan.gov.in पर जाएं।',
      '"Farmers Corner" अनुभाग में "New Farmer Registration" (नया किसान पंजीकरण) पर क्लिक करें।',
      '"ग्रामीण किसान पंजीकरण" (Rural) या "शहरी किसान पंजीकरण" (Urban) में से सही विकल्प चुनें।',
      'अपना 12 अंकों का आधार नंबर, मोबाइल नंबर दर्ज करें, अपना राज्य चुनें और कैप्चा भरकर ओटीपी प्राप्त करें।',
      'व्यक्तिगत विवरण, जिला, ब्लॉक, गाँव और जमीन का ब्योरा (खाता संख्या, खसरा संख्या, रकबा) भरें।',
      'जमीन के दस्तावेज (खतियान/लगान रसीद) की प्रति अपलोड करें और फॉर्म सबमिट करें।',
      'पटवारी/अंचल अधिकारी द्वारा सत्यापन हेतु प्राप्त रजिस्ट्रेशन नंबर सुरक्षित रख लें।'
    ],
    
    statusCheckGuide_en: 'To check your payment and installment status, go to pmkisan.gov.in > Farmers Corner > "Know Your Status". Enter your Registration Number or Search by Aadhaar Number. Complete the Captcha and verify OTP. Never share your OTP with unauthorized third parties.',
    statusCheckGuide_hi: 'अपनी किस्त और आवेदन का स्टेटस देखने के लिए pmkisan.gov.in पर जाएं और "Know Your Status" विकल्प चुनें। अपना पंजीकरण नंबर या आधार नंबर दर्ज करें, कैप्चा भरें और ओटीपी सत्यापित करें। किसी भी अनजान व्यक्ति को अपना ओटीपी न दें।',
    officialStatusUrl: 'https://pmkisan.gov.in/BeneficiaryStatus_New.aspx',
    
    commonProblems_en: [
      {
        problem: 'Land Seeding status shows "NO"',
        solution: 'Visit your local Circle Office (Tehsil/Block) or Agriculture Officer with your original land documents (Khata/Khesra) to link your land records in the revenue database.'
      },
      {
        problem: 'e-KYC Pending or Failed',
        solution: 'Complete e-KYC directly on pmkisan.gov.in using Aadhaar OTP, or visit your nearest CSC Center for biometric fingerprint e-KYC.'
      },
      {
        problem: 'Bank Account Not Aadhaar Seeded / DBT Inactive',
        solution: 'Visit your bank branch and submit the "NPCI Aadhaar Seeding / Mandate Form" or open an Aadhaar-seeded account in India Post Payments Bank (IPPB).'
      }
    ],
    commonProblems_hi: [
      {
        problem: 'लैंड सीडिंग (Land Seeding) स्टेटस "NO" दिखा रहा है',
        solution: 'अपनी जमीन के मूल कागजात (खतियान/रसीद) लेकर अपने अंचल कार्यालय (तहसील/ब्लॉक) या कृषि समन्वयक से संपर्क करें और राजस्व डेटाबेस में भू-सत्यापन करवाएं।'
      },
      {
        problem: 'ई-केवाईसी (e-KYC) लंबित या विफल है',
        solution: 'पोर्टल पर आधार ओटीपी के माध्यम से मुफ्त ई-केवाईसी करें, या अपने नजदीकी सीएससी (CSC) केंद्र पर बायोमेट्रिक फिंगरप्रिंट देकर ई-केवाईसी पूर्ण कराएं।'
      },
      {
        problem: 'बैंक खाता आधार से सीडेड नहीं है या डीबीटी अमान्य है',
        solution: 'अपनी बैंक शाखा में जाकर एनपीसीआई आधार सीडिंग फॉर्म जमा करें अथवा इंडिया पोस्ट पेमेंट्स बैंक (IPPB) में नया डीबीटी सक्षम खाता खुलवाएं।'
      }
    ],
    
    faqs_en: [
      {
        q: 'Can both husband and wife receive PM-Kisan payments?',
        a: 'No. The scheme definition specifies "farmer family" (consisting of husband, wife, and minor children) as a single beneficiary unit. Only one adult cultivator per family unit can receive the benefit.'
      },
      {
        q: 'Is PM Kisan benefit taxable?',
        a: 'Income tax payers are legally excluded from PM-Kisan. If a recipient starts paying income tax, they must surrender the benefit and refund ineligible installments.'
      },
      {
        q: 'What is the toll-free PM-Kisan helpline number?',
        a: 'The official Government of India PM Kisan Helpline numbers are 155261 and 011-24300606.'
      }
    ],
    faqs_hi: [
      {
        q: 'क्या पति और पत्नी दोनों को पीएम किसान का लाभ मिल सकता है?',
        a: 'नहीं। योजना के नियमों के अनुसार पति, पत्नी और नाबालिग बच्चों को मिलाकर एक परिवार माना जाता है। एक परिवार से केवल एक ही पात्र किसान को इसका लाभ मिल सकता है।'
      },
      {
        q: 'यदि किसान आयकर (Income Tax) देता है तो क्या वह पात्र है?',
        a: 'नहीं। आयकरदाता किसान इस योजना के दायरे से बाहर हैं। यदि कोई गलत तरीके से लाभ लेता है तो सरकार द्वारा वसूली की कार्रवाई की जा सकती है।'
      },
      {
        q: 'पीएम किसान की आधिकारिक हेल्पलाइन क्या है?',
        a: 'पीएम किसान की आधिकारिक राष्ट्रीय हेल्पलाइन 155261 एवं 011-24300606 है।'
      }
    ],
    
    officialSources: [
      {
        name: 'PM Kisan Official Portal',
        authority: 'Department of Agriculture & Farmers Welfare, Ministry of Agriculture, Govt. of India',
        url: 'https://pmkisan.gov.in',
        verificationDate: 'October 28, 2026'
      },
      {
        name: 'Ministry of Agriculture and Farmers Welfare Guidelines',
        authority: 'Government of India',
        url: 'https://agricoop.nic.in',
        verificationDate: 'October 15, 2026'
      }
    ],
    keywords: [
      'pm kisan', 'pm kisan status', 'pm kisan eligibility', 'pm kisan 19th installment',
      'pm kisan kyc', 'pm kisan samman nidhi', 'pm kisan gov in', 'kisan registration',
      'पीएम किसान', 'पीएम किसान स्टेटस', 'पीएम किसान सम्मान निधि', 'किसान योजना'
    ],
    metaDescription_en: 'Check PM Kisan Samman Nidhi benefits (₹6,000/yr), who can apply, landholding criteria, e-KYC process, documents checklist, and official status link.',
    metaDescription_hi: 'पीएम किसान सम्मान निधि योजना: ₹6,000 वार्षिक सहायता, पात्रता नियम, जरूरी दस्तावेज, ऑनलाइन आवेदन व आधिकारिक स्टेटस चेक करने की पूरी जानकारी।'
  },
  {
    id: 'ayushman-bharat',
    slug: 'ayushman-bharat-pmjay-health-card',
    title_en: 'Ayushman Bharat PM-JAY: Free ₹5 Lakh Hospital Cover & 70+ Senior Card',
    title_hi: 'आयुष्मान भारत योजना (PM-JAY): ₹5 लाख तक मुफ्त इलाज व 70+ वरिष्ठ नागरिक कार्ड',
    shortTitle_en: 'Ayushman Bharat (PM-JAY)',
    shortTitle_hi: 'आयुष्मान भारत (PM-JAY)',
    category: 'health',
    state: 'all-india',
    stateLabel_en: 'Central (All India)',
    stateLabel_hi: 'केंद्र सरकार (अखिल भारतीय)',
    status: 'Updated',
    lastVerified: 'November 01, 2026',
    
    benefitSummary_en: 'Cashless inpatient medical treatment up to ₹5,00,000 per family per year in empanelled private and public hospitals across India. Special expanded coverage provides free ₹5 Lakh top-up for every senior citizen aged 70+ regardless of family income.',
    benefitSummary_hi: 'देश भर के सूचीबद्ध सरकारी व निजी अस्पतालों में प्रति परिवार प्रति वर्ष ₹5,00,000 तक का मुफ्त कैशलेस इलाज। 70 वर्ष या अधिक उम्र के सभी बुजुर्गों के लिए अलग से ₹5 लाख तक का विशेष सुरक्षा टॉप-अप।',
    benefitAmount_en: '₹5 Lakh / family / year (plus ₹5 Lakh for 70+ seniors)',
    benefitAmount_hi: '₹5 लाख प्रति परिवार प्रति वर्ष (70+ बुजुर्गों हेतु अतिरिक्त ₹5 लाख)',
    whoCanApply_en: 'Families listed in SECC 2011/NFSA Ration Card, and all Indian senior citizens aged 70 years and above (under Ayushman Vaya Vandana Card).',
    whoCanApply_hi: 'एसईसीसी 2011 सूची या पात्र राशन कार्डधारी परिवार, तथा 70 वर्ष या उससे अधिक आयु के सभी भारतीय नागरिक (वय वंदना कार्ड)।',
    applicationMode: 'Online & Offline',
    bannerImage: '/images/schemes/ayushman-bharat-pmjay-health-card.png',
    secondaryImage: '/images/schemes/ayushman-bharat-pmjay-en.png',
    
    whatIsThis_en: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) is the world’s largest government-financed health insurance scheme. It covers secondary and tertiary hospitalization costs, medicines, diagnostics, surgical packages, and pre/post-hospitalization expenses without any out-of-pocket costs at empanelled facilities.',
    whatIsThis_hi: 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना (PM-JAY) विश्व की सबसे बड़ी सरकारी स्वास्थ्य आश्वासन योजना है। इसके अंतर्गत गंभीर बीमारियों के ऑपरेशन, दवाएं, आईसीयू, जांच और अस्पताल में भर्ती के 3 दिन पहले तथा 15 दिन बाद तक का खर्च कैशलेस कवर होता है।',
    
    benefitsList_en: [
      'Cashless hospital admission covering 1,900+ medical and surgical procedures (cardiac, cancer, neurosurgery, orthopedics, etc.).',
      'All pre-existing conditions covered from Day 1 without waiting periods.',
      'No cap on family size, gender, or age of members.',
      'Portability across all states: an Ayushman card issued in Jharkhand or Bihar is honored in empanelled hospitals in Delhi, Mumbai, or Chennai.',
      'Ayushman Vaya Vandana Card: Seniors aged 70+ receive a dedicated card with an independent ₹5 Lakh cover.'
    ],
    benefitsList_hi: [
      '1,900+ मेडिकल और सर्जिकल प्रक्रियाओं (हार्ट सर्जरी, कैंसर कीमो/रेडियोथेरेपी, न्यूरो, घुटना प्रत्यारोपण) का कैशलेस इलाज।',
      'पुरानी और गंभीर बीमारियां (Pre-existing diseases) पहले दिन से ही कवर होती हैं।',
      'परिवार के सदस्यों की संख्या, आयु या लिंग की कोई सीमा नहीं है।',
      'देशव्यापी पोर्टेबिलिटी: झारखंड या बिहार का बना कार्ड दिल्ली, मुंबई या हैदराबाद के बड़े अस्पतालों में भी मान्य है।',
      'आयुष्मान वय वंदना कार्ड: 70 वर्ष से अधिक उम्र के बुजुर्गों के लिए पारिवारिक सीमा से अलग ₹5 लाख का अलग कवर।'
    ],
    
    eligibility: {
      eligibleIf_en: [
        'Family name is included in the Socio-Economic Caste Census (SECC 2011) database.',
        'Family holds an active Antyodaya Anna Yojana (AAY) or Priority Household (PHH) Ration Card in participating states.',
        'Any citizen aged 70 years or older (authenticated via Aadhaar date of birth) qualifies for the Senior Citizen Vaya Vandana Card regardless of economic category.',
        'Registered construction workers (BOCW) in several state-linked implementations.'
      ],
      eligibleIf_hi: [
        'परिवार का नाम सामाजिक-आर्थिक जाति जनगणना (SECC 2011) की सूची में दर्ज हो।',
        'परिवार के पास अंत्योदय (AAY) या प्राथमिकता राशन कार्ड (PHH) उपलब्ध हो।',
        '70 वर्ष या अधिक उम्र का कोई भी भारतीय नागरिक (आधार में दर्ज जन्मतिथि अनुसार) आय सीमा की बाध्यता के बिना पात्र है।',
        'कई राज्यों में पंजीकृत निर्माण श्रमिक (BOCW कार्डधारक)।'
      ],
      notEligibleIf_en: [
        'Families paying income tax or holding government employee insurance (CGHS/ECHS) are not eligible for general SECC quota (except 70+ senior who can choose between CGHS and Ayushman).',
        'Households owning motorized 3/4-wheeler fishing boats or mechanized agricultural equipment (under general rural criteria).',
        'Citizens who already hold private corporate health insurance and are not in SECC/Ration database.'
      ],
      notEligibleIf_hi: [
        'सामान्य कोटे में आयकरदाता या केंद्र/राज्य सरकारी स्वास्थ्य योजना (CGHS/ECHS) के लाभार्थी (सिवाय 70+ बुजुर्ग जो विकल्प चुन सकते हैं)।',
        'सामान्य ग्रामीण मानकों में चार पहिया वाहन या बड़े कृषि यंत्र वाले परिवार।',
        'जो परिवार एसईसीसी अथवा राज्य राशन कार्ड सूची में शामिल नहीं हैं।'
      ]
    },
    
    requiredDocuments_en: [
      'Aadhaar Card of each family member (mandatory for e-KYC)',
      'Ration Card / Family Samagra ID / SECC Family ID',
      'Active Mobile number linked to Aadhaar for OTP verification',
      'Age proof for 70+ card (Aadhaar Card is sufficient)'
    ],
    requiredDocuments_hi: [
      'परिवार के सभी सदस्यों का आधार कार्ड (ई-केवाईसी हेतु अनिवार्य)',
      'राशन कार्ड / परिवार समग्र आईडी / एसईसीसी संदर्भ विवरण',
      'आधार से लिंक सक्रिय मोबाइल नंबर (ओटीपी हेतु)',
      '70+ बुजुर्ग कार्ड हेतु आयु प्रमाण के लिए आधार कार्ड'
    ],
    
    howToApply_en: [
      'Visit the official National Health Authority Beneficiary Portal at beneficiary.nha.gov.in or download the "Ayushman App".',
      'Select "Beneficiary" login mode, enter your mobile number, and authenticate via OTP.',
      'Select your State, Scheme (PMJAY), District, and Search by (Aadhaar Number, Family ID, or Ration Card).',
      'If your family name appears in the list, click "Action / e-KYC".',
      'Authenticate your identity using Aadhaar OTP, IRIS, or Fingerprint, and capture a live photograph.',
      'Once verified, your Ayushman Card will be approved and available for instant PDF download.',
      'Alternatively, visit any empanelled Government/Private Hospital (Ayushman Mitra desk) or CSC center.'
    ],
    howToApply_hi: [
      'राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA) के आधिकारिक पोर्टल beneficiary.nha.gov.in पर जाएं या "Ayushman App" डाउनलोड करें।',
      '"Beneficiary" विकल्प चुनें, अपना मोबाइल नंबर दर्ज करें और ओटीपी से लॉगिन करें।',
      'अपना राज्य, योजना (PMJAY), जिला चुनें और आधार नंबर या राशन कार्ड नंबर से खोजें।',
      'यदि सूची में आपका नाम है, तो सदस्य के नाम के आगे "e-KYC" पर क्लिक करें।',
      'आधार ओटीपी या फिंगरप्रिंट से सत्यापन करें और कैमरे से लाइव फोटो खींचें।',
      'सत्यापन पूरा होते ही आयुष्मान कार्ड तुरंत स्वीकृत हो जाएगा और आप इसका डिजिटल पीडीएफ कार्ड डाउनलोड कर सकते हैं।',
      'आप नजदीकी सरकारी अस्पताल के "आयुष्मान मित्र" डेस्क या सीएससी केंद्र पर जाकर भी यह कार्ड बनवा सकते हैं।'
    ],
    
    statusCheckGuide_en: 'Visit beneficiary.nha.gov.in, login with your mobile OTP, search by your Aadhaar number to see all approved family cards. Empanelled hospital directory is available at hospitals.pmjay.gov.in.',
    statusCheckGuide_hi: 'beneficiary.nha.gov.in पर जाएं, मोबाइल ओटीपी से लॉगिन करें और अपना आधार नंबर डालकर परिवार के सभी सदस्यों के कार्ड का स्टेटस देखें। नजदीकी अस्पतालों की सूची hospitals.pmjay.gov.in पर देखें।',
    officialStatusUrl: 'https://beneficiary.nha.gov.in',
    
    commonProblems_en: [
      {
        problem: 'Name found in list but e-KYC photo mismatch',
        solution: 'Capture a clear live photo in bright lighting or update your photo at your local Aadhaar Seva Kendra, then retry on the Beneficiary portal.'
      },
      {
        problem: 'Hospital refuses to admit patient on Ayushman Card',
        solution: 'Immediately call the National Health Authority 24x7 Toll-Free Grievance Helpline at 14555 or contact the District Grievance Redressal Officer.'
      }
    ],
    commonProblems_hi: [
      {
        problem: 'सूची में नाम है लेकिन ई-केवाईसी में फोटो मैच नहीं हो रहा',
        solution: 'अच्छी रोशनी में दोबारा साफ लाइव फोटो खींचें या नजदीकी आधार सेवा केंद्र पर जाकर आधार में नवीनतम फोटो अपडेट करवाएं।'
      },
      {
        problem: 'सूचीबद्ध अस्पताल आयुष्मान कार्ड पर इलाज देने से मना कर रहा है',
        solution: 'तुरंत 24x7 राष्ट्रीय टोल-फ्री हेल्पलाइन 14555 पर शिकायत दर्ज कराएं अथवा अस्पताल में तैनात "आयुष्मान मित्र" से संपर्क करें।'
      }
    ],
    
    faqs_en: [
      {
        q: 'Is there any fee to make an Ayushman Card?',
        a: 'No. Ayushman Card creation through beneficiary.nha.gov.in, Ayushman App, and government hospitals is 100% free of charge.'
      },
      {
        q: 'Can private hospitals charge any extra money for medicines or surgery?',
        a: 'No. PMJAY is strictly cashless. All costs from doctor consultation, surgery, implants, tests, to medicines are pre-negotiated package rates paid by the government.'
      }
    ],
    faqs_hi: [
      {
        q: 'क्या आयुष्मान कार्ड बनवाने का कोई सरकारी शुल्क लगता है?',
        a: 'नहीं। आधिकारिक पोर्टल beneficiary.nha.gov.in, ऐप और सरकारी अस्पतालों में आयुष्मान कार्ड बनाना पूरी तरह निःशुल्क है।'
      },
      {
        q: 'क्या प्राइवेट अस्पताल दवाओं या ऑपरेशन के लिए अलग से पैसे मांग सकते हैं?',
        a: 'बिल्कुल नहीं। यह पूर्णतः कैशलेस योजना है। डॉक्टर फीस, जांच, दवा, इम्प्लांट और भोजन का खर्च सरकार द्वारा वहन किया जाता है।'
      }
    ],
    
    officialSources: [
      {
        name: 'National Health Authority (NHA) Beneficiary Portal',
        authority: 'Ministry of Health and Family Welfare, Govt. of India',
        url: 'https://beneficiary.nha.gov.in',
        verificationDate: 'November 01, 2026'
      },
      {
        name: 'PM-JAY Official Portal',
        authority: 'Government of India',
        url: 'https://pmjay.gov.in',
        verificationDate: 'October 25, 2026'
      }
    ],
    keywords: [
      'ayushman bharat', 'pmjay', 'ayushman card download', 'ayushman card eligibility',
      'ayushman 70 plus senior citizen', 'vaya vandana card', 'golden card', 'free hospital treatment',
      'आयुष्मान भारत', 'आयुष्मान कार्ड', 'गोल्डन कार्ड', 'फ्री इलाज', 'वय वंदना कार्ड'
    ],
    metaDescription_en: 'Ayushman Bharat PM-JAY ₹5 Lakh free medical cover guide: who can apply, 70+ senior citizen card rollout, required documents, and official e-KYC portal.',
    metaDescription_hi: 'आयुष्मान भारत योजना (PM-JAY): ₹5 लाख तक का मुफ्त अस्पताल इलाज, 70+ बुजुर्गों हेतु कार्ड, पात्रता, आवश्यक कागजात और आधिकारिक कार्ड डाउनलोड गाइड।'
  },
  {
    id: 'jharkhand-maiya-samman',
    slug: 'jharkhand-mukhyamantri-maiya-samman-yojana',
    title_en: 'Jharkhand Mukhyamantri Maiya Samman Yojana (JMMSY): Financial Aid & Status',
    title_hi: 'झारखंड मुख्यमंत्री मंईयां सम्मान योजना (JMMSY): आर्थिक सहायता, पात्रता व स्टेटस',
    shortTitle_en: 'Jharkhand Maiya Samman Yojana',
    shortTitle_hi: 'मुख्यमंत्री मंईयां सम्मान योजना (झारखंड)',
    category: 'women',
    state: 'jharkhand',
    stateLabel_en: 'Jharkhand State',
    stateLabel_hi: 'झारखंड राज्य',
    status: 'Updated',
    lastVerified: 'October 30, 2026',
    
    benefitSummary_en: 'Direct monthly financial assistance transferred via DBT to eligible women aged 18 to 50 residing in Jharkhand to support financial autonomy, nutrition, and family health.',
    benefitSummary_hi: 'झारखंड की 18 से 50 वर्ष की पात्र महिलाओं को आर्थिक स्वावलंबन और पोषण सुधार हेतु प्रतिमाह बैंक खाते में सीधी आर्थिक सहायता।',
    benefitAmount_en: 'Direct Monthly DBT Assistance',
    benefitAmount_hi: 'प्रतिमाह डीबीटी आर्थिक सहायता',
    whoCanApply_en: 'Women permanent residents of Jharkhand aged 18–50 years from non-taxpayer families holding an active Ration Card and Aadhaar-seeded bank account.',
    whoCanApply_hi: 'झारखंड की स्थायी निवासी 18 से 50 वर्ष की महिलाएं, जिनके परिवार का कोई सदस्य आयकरदाता या सरकारी सेवा में न हो।',
    applicationMode: 'Offline (Panchayat / Camp) & Online Portal',
    bannerImage: '/images/schemes/jharkhand-maiya-samman.webp',
    
    whatIsThis_en: 'Mukhyamantri Maiya Samman Yojana (JMMSY) is a flagship state welfare program launched by the Government of Jharkhand. It provides recurring financial security to millions of women in both rural and urban areas, promoting dignified living and women empowerment at the grassroots.',
    whatIsThis_hi: 'मुख्यमंत्री मंईयां सम्मान योजना झारखंड सरकार की प्रमुख जनकल्याणकारी योजना है। इसका मुख्य उद्देश्य राज्य की करोड़ों बहन-बेटियों को सीधे आर्थिक सहायता पहुंचाकर उन्हें आत्मनिर्भर बनाना और परिवार के पोषण व स्वास्थ्य में सहयोग देना है।',
    
    benefitsList_en: [
      'Assured monthly financial support deposited directly into the woman’s personal bank account.',
      'No collateral, loan repayment, or intermediaries involved.',
      'Comprehensive coverage across all 24 districts of Jharkhand.',
      'Single DBT authentication eliminates paperwork delays once approved.'
    ],
    benefitsList_hi: [
      'महिला के निजी बैंक खाते में प्रतिमाह निश्चित आर्थिक संबल।',
      'कोई ऋण या वापसी की बाध्यता नहीं, पूर्णतः अनुदान स्वरूप।',
      'झारखंड के सभी 24 जिलों के ग्रामीण एवं शहरी क्षेत्रों में समान क्रियान्वयन।',
      'एक बार स्वीकृति के बाद नियमित डीबीटी भुगतान।'
    ],
    
    eligibility: {
      eligibleIf_en: [
        'Applicant woman must be a permanent resident of Jharkhand state.',
        'Age must be between 18 and 50 years on the date of application.',
        'Applicant must have an individual bank account mapped to Aadhaar with DBT enabled.',
        'Family must hold an Antyodaya (Yellow), Priority (Pink), or White Ration card issued by Jharkhand Government.',
        'Total annual family income must not exceed the prescribed state poverty guidelines.'
      ],
      eligibleIf_hi: [
        'आवेदक महिला झारखंड राज्य की स्थायी निवासी हो।',
        'आवेदन तिथि को उम्र 18 वर्ष से अधिक तथा 50 वर्ष से कम हो।',
        'महिला का स्वयं का एकल बैंक खाता हो जो आधार से सीडेड और डीबीटी सक्षम हो।',
        'परिवार के पास झारखंड खाद्य आपूर्ति विभाग द्वारा जारी अंत्योदय (पीला) या प्राथमिकता (गुलाबी) राशन कार्ड हो।',
        'पारिवारिक आय सीमा राज्य द्वारा निर्धारित गरीबी रेखा के अंतर्गत हो।'
      ],
      notEligibleIf_en: [
        'Applicant or family member pays income tax.',
        'Applicant or spouse is employed in permanent Central/State Government, public enterprise, or drawing government pension.',
        'Women already receiving other state old age or disability pensions of equivalent or higher value.',
        'Applicants under 18 years or above 50 years of age.'
      ],
      notEligibleIf_hi: [
        'आवेदक या उसके परिवार का कोई सदस्य आयकरदाता हो।',
        'आवेदक या उसका पति केंद्र/राज्य सरकार अथवा उपक्रमों में नियमित कर्मचारी/पेंशनर हो।',
        'महिला को पहले से राज्य की किसी अन्य समकक्ष या अधिक राशि वाली पेंशन का लाभ मिल रहा हो।',
        '18 वर्ष से कम या 50 वर्ष से अधिक आयु की महिलाएं।'
      ]
    },
    
    requiredDocuments_en: [
      'Aadhaar Card of the applicant woman',
      'Jharkhand Residential Certificate (Niwas Praman Patra) or voter card',
      'Ration Card (Yellow/Pink) showing applicant’s name',
      'Personal Bank Passbook (Aadhaar linked with DBT status active)',
      'Self-declaration of family income and non-taxpayer status'
    ],
    requiredDocuments_hi: [
      'आवेदक महिला का आधार कार्ड',
      'झारखंड का स्थानीय निवास प्रमाण पत्र या मतदाता पहचान पत्र',
      'राशन कार्ड (जिसमें आवेदिका का नाम दर्ज हो)',
      'स्वयं का बैंक पासबुक (खाता डीबीटी से जुड़ा होना अनिवार्य)',
      'आय एवं गैर-सरकारी नौकरी का स्व-घोषणा पत्र'
    ],
    
    howToApply_en: [
      'Obtain the JMMSY application form free of cost from your local Gram Panchayat Bhawan, Ward Office, or special Aapki Yojana Camp.',
      'Carefully fill in your personal details, Aadhaar number, Ration card number, and Bank account IFSC code.',
      'Attach photocopies of your Aadhaar card, Ration card, and Bank passbook.',
      'Submit the physical application at your Panchayat Camp or CSC VLE operator for digital data entry.',
      'Collect the stamped acknowledgement receipt containing your Application Tracking ID.'
    ],
    howToApply_hi: [
      'अपनी ग्राम पंचायत भवन, वार्ड कार्यालय या "आपकी योजना आपकी सरकार आपके द्वार" शिविर से निःशुल्क आवेदन फॉर्म प्राप्त करें।',
      'फॉर्म में अपना नाम, आधार नंबर, राशन कार्ड संख्या, और बैंक खाता संख्या व आईएफएससी कोड सावधानीपूर्वक भरें।',
      'आधार कार्ड, राशन कार्ड और बैंक पासबुक की स्व-हस्ताक्षरित प्रति संलग्न करें।',
      'पंचायत शिविर या सीएससी प्रज्ञा केंद्र में जाकर डेटा एंट्री करवाएं और फॉर्म जमा करें।',
      'आवेदन संख्या युक्त पावती रसीद (Acknowledgement Receipt) प्राप्त करें और संभाल कर रखें।'
    ],
    
    statusCheckGuide_en: 'Application and payment status can be verified by visiting your local Block Development Office (BDO) / CDPO desk with your Aadhaar number or via the official state social welfare tracking desk.',
    statusCheckGuide_hi: 'आवेदन व भुगतान की स्थिति अपने प्रखंड विकास पदाधिकारी (BDO) या बाल विकास परियोजना पदाधिकारी (CDPO) कार्यालय में आधार नंबर दिखाकर जांची जा सकती है।',
    officialStatusUrl: 'https://jharkhand.gov.in',
    
    commonProblems_en: [
      {
        problem: 'Application submitted but payment not credited',
        solution: 'Check if your bank account has active NPCI Aadhaar Mapping. If the account is dormant or not mapped, DBT transfers automatically fail.'
      },
      {
        problem: 'Name in Ration card differs from Aadhaar',
        solution: 'Submit an affidavit of identity clarification along with a revised ration card amendment request at your local Block Supply Office (BSO).'
      }
    ],
    commonProblems_hi: [
      {
        problem: 'फॉर्म जमा हो चुका है पर बैंक में पैसा नहीं आया',
        solution: 'बैंक जाकर जांचें कि खाता एनपीसीआई (NPCI) से मैप है या नहीं। यदि खाता इनएक्टिव या डीबीटी बंद है तो भुगतान विफल हो जाता है।'
      },
      {
        problem: 'राशन कार्ड में नाम की स्पेलिंग आधार से अलग है',
        solution: 'प्रखंड आपूर्ति कार्यालय (BSO) में जाकर राशन कार्ड में नाम सुधार का आवेदन दें अथवा शपथ पत्र जमा करें।'
      }
    ],
    
    faqs_en: [
      {
        q: 'Can unmarried daughters aged 18+ apply?',
        a: 'Yes, unmarried girls aged 18 and above residing in Jharkhand who satisfy family income and ration card criteria can apply.'
      },
      {
        q: 'Is any private agency authorized to charge an application fee?',
        a: 'No. Application forms and submission under JMMSY are completely free of charge. Report any extortion to the local Block office.'
      }
    ],
    faqs_hi: [
      {
        q: 'क्या 18 वर्ष से अधिक आयु की अविवाहित बेटियां भी आवेदन कर सकती हैं?',
        a: 'हाँ, 18 से 50 वर्ष की आयु सीमा में आने वाली अविवाहित युवतियां भी पात्रता शर्तों के अनुसार आवेदन कर सकती हैं।'
      },
      {
        q: 'क्या इस योजना का फॉर्म भरने के लिए कोई सरकारी फीस लगती है?',
        a: 'नहीं। फॉर्म और आवेदन प्रक्रिया 100% निःशुल्क है। किसी भी बिचौलिए को कोई शुल्क न दें।'
      }
    ],
    
    officialSources: [
      {
        name: 'Government of Jharkhand Official Portal',
        authority: 'Department of Women, Child Development and Social Security, Govt. of Jharkhand',
        url: 'https://jharkhand.gov.in',
        verificationDate: 'October 30, 2026'
      }
    ],
    keywords: [
      'jharkhand maiya samman yojana', 'jmmsy status', 'jharkhand mahila yojana',
      'maiya samman form', 'jharkhand women financial aid', 'mukhyamantri maiya samman',
      'मंईयां सम्मान योजना', 'झारखंड महिला योजना', 'मंईयां सम्मान स्टेटस'
    ],
    metaDescription_en: 'Jharkhand Mukhyamantri Maiya Samman Yojana (JMMSY): monthly financial aid for women 18–50, eligibility rules, required documents, Panchayat camps & tracking.',
    metaDescription_hi: 'झारखंड मुख्यमंत्री मंईयां सम्मान योजना (JMMSY): 18-50 वर्ष की महिलाओं हेतु सहायता, पात्रता, आवश्यक दस्तावेज, आवेदन फॉर्म और आधिकारिक स्टेटस।'
  },
  {
    id: 'pm-awas-yojana',
    slug: 'pm-awas-yojana-pmay-housing',
    title_en: 'PM Awas Yojana (PMAY-G & PMAY-U 2.0): Subsidy, Beneficiary List & Eligibility',
    title_hi: 'प्रधानमंत्री आवास योजना (PMAY): पक्का मकान सहायता, नई सूची व पात्रता',
    shortTitle_en: 'PM Awas Yojana (PMAY)',
    shortTitle_hi: 'प्रधानमंत्री आवास योजना (PMAY)',
    category: 'housing',
    state: 'all-india',
    stateLabel_en: 'Central (All India)',
    stateLabel_hi: 'केंद्र सरकार (अखिल भारतीय)',
    status: 'Updated',
    lastVerified: 'October 26, 2026',
    
    benefitSummary_en: 'Financial assistance of ₹1,20,000 (plain areas) to ₹1,30,000 (hilly/difficult areas) for rural construction + 90/95 days of MGNREGA wages and ₹12,000 for toilet construction. PMAY-Urban 2.0 provides interest subsidy and affordable housing grants up to ₹2.5 Lakh.',
    benefitSummary_hi: 'ग्रामीण क्षेत्रों में पक्का मकान बनाने हेतु ₹1,20,000 (मैदानी) से ₹1,30,000 (पहाड़ी/दुर्गम) की सीधी सहायता, 90-95 दिनों की मनरेगा मजदूरी और ₹12,000 शौचालय सहायता। शहरी 2.0 में ₹2.5 लाख तक की ब्याज सब्सिडी व अनुदान।',
    benefitAmount_en: '₹1.2 Lakh to ₹2.5 Lakh grant/subsidy',
    benefitAmount_hi: '₹1.20 लाख से ₹2.50 लाख तक का अनुदान/सब्सिडी',
    whoCanApply_en: 'Homeless households or families living in kutcha, dilapidated houses with no family member in government service.',
    whoCanApply_hi: 'बेघर परिवार या कच्चे/जीर्ण-शीर्ण मकानों में रहने वाले नागरिक जिनके परिवार में कोई सरकारी नौकरी न हो।',
    applicationMode: 'Offline & Online (via Gram Panchayat Survey & Urban Portal)',
    bannerImage: '/images/schemes/pm-awas-yojana.webp',
    
    whatIsThis_en: 'Pradhan Mantri Awas Yojana (PMAY) is India’s flagship affordable housing mission guaranteeing pucca houses with basic amenities like water, sanitation, and electricity to all eligible homeless and kutcha-dwelling households in rural and urban sectors.',
    whatIsThis_hi: 'प्रधानमंत्री आवास योजना भारत सरकार का एक महत्वाकांक्षी मिशन है, जिसके तहत देश के सभी बेघर और कच्चे घरों में रहने वाले परिवारों को बुनियादी सुविधाओं (शौचालय, बिजली, रसोई गैस) से युक्त पक्का मकान उपलब्ध कराया जाता है।',
    
    benefitsList_en: [
      'Direct installment releases pegged to geo-tagged physical construction stages (Plinth, Lintel, Roof level).',
      'Additional 90 to 95 days of unskilled wage employment under MGNREGS (approx. ₹20,000–₹25,000).',
      '₹12,000 dedicated financial assistance for toilet construction under Swachh Bharat Mission (Grameen).',
      'Free LPG connection under PM Ujjwala Yojana and electricity tap under Saubhagya.'
    ],
    benefitsList_hi: [
      'मकान निर्माण के विभिन्न स्तरों (नींव, लिंटेल, छत) की जियो-टैगिंग के बाद सीधे बैंक में किस्तों का भुगतान।',
      'मनरेगा के तहत 90 से 95 दिनों की अकुशल मजदूरी का अतिरिक्त लाभ (लगभग ₹20,000 से ₹25,000)।',
      'स्वच्छ भारत मिशन के तहत शौचालय निर्माण के लिए ₹12,000 की अलग सरकारी सहायता।',
      'उज्ज्वला योजना के तहत मुफ्त गैस कनेक्शन और सौभाग्य योजना से बिजली कनेक्शन की प्राथमिकता।'
    ],
    
    eligibility: {
      eligibleIf_en: [
        'Family does not own a pucca house anywhere in India.',
        'Household living in houses with zero, one, or two rooms with kutcha walls and kutcha roof.',
        'Identified through Awaas+ surveys or SECC priority deprivation criteria.',
        'Landless households deriving a major part of their income from manual casual labor.'
      ],
      eligibleIf_hi: [
        'पूरे देश में परिवार के किसी भी सदस्य के नाम पर कोई पक्का मकान न हो।',
        'परिवार कच्चे छप्पर/दीवारों वाले एक या दो कमरों के मकान में रहता हो।',
        'आवास प्लस (Awaas+) सर्वे या एसईसीसी प्राथमिकता सूची में नाम दर्ज हो।',
        'भूमिहीन परिवार जिनकी आय का मुख्य स्रोत दिहाड़ी मजदूरी हो।'
      ],
      notEligibleIf_en: [
        'Households owning motorized two/three/four wheelers, mechanized three/four wheeler agricultural equipment.',
        'Families with any member who is a government servant or income tax payer.',
        'Households holding Kisan Credit Card with credit limit of ₹50,000 or above.',
        'Households with any member earning more than ₹15,000 per month.'
      ],
      notEligibleIf_hi: [
        'जिनके पास मोटरयुक्त दो/तीन/चार पहिया वाहन या ट्रैक्टर जैसे कृषि उपकरण हों।',
        'परिवार में कोई भी सदस्य सरकारी कर्मचारी हो या आयकर देता हो।',
        '₹50,000 या अधिक की सीमा वाला किसान क्रेडिट कार्ड धारक परिवार।',
        'परिवार का कोई सदस्य ₹15,000 से अधिक मासिक कमाता हो।'
      ]
    },
    
    requiredDocuments_en: [
      'Aadhaar Card of all family members',
      'Bank Account Passbook (Aadhaar linked for DBT installments)',
      'Job Card number (MGNREGA) to claim unskilled wage entitlement',
      'Consent letter and land title or certificate of possession',
      'Photograph of existing kutcha dwelling'
    ],
    requiredDocuments_hi: [
      'परिवार के सभी सदस्यों का आधार कार्ड',
      'बैंक खाता पासबुक (डीबीटी से जुड़ा सक्रिय खाता)',
      'मनरेगा जॉब कार्ड संख्या (मजदूरी भुगतान हेतु)',
      'जमीन का स्वामित्व प्रमाण या पट्टा/दखल प्रमाण पत्र',
      'वर्तमान कच्चे मकान की स्पष्ट तस्वीर'
    ],
    
    howToApply_en: [
      'For PMAY-G (Rural): Beneficiary selection is conducted through official Gram Sabha verification and Awaas+ survey conducted by the Panchayat Secretary / Mukhiya.',
      'Check your name in the official Gram Panchayat Awaas+ waiting list.',
      'For PMAY-U 2.0 (Urban): Visit pmaymis.gov.in and click "Citizen Assessment" or apply via your local Urban Local Body / Nagar Palika office.',
      'Complete biometric e-KYC and upload identity and property possession documents.',
      'A physical survey and geo-tagging will be conducted by authorized municipal or block officials before approval.'
    ],
    howToApply_hi: [
      'पीएम आवास ग्रामीण (PMAY-G): चयन ग्राम सभा और आवास प्लस सर्वे के आधार पर पंचायत सचिव/मुखिया द्वारा किया जाता है।',
      'अपनी ग्राम पंचायत की स्थायी प्रतीक्षा सूची (Waitlist) में अपना नाम देखें।',
      'पीएम आवास शहरी (PMAY-U): pmaymis.gov.in पर जाएं और "Citizen Assessment" पर क्लिक करें अथवा नगरपालिका कार्यालय जाएं।',
      'बायोमेट्रिक ई-केवाईसी पूर्ण करें और पहचान व भूमि दस्तावेज संलग्न करें।',
      'ब्लॉक या नगरपालिका के अधिकारियों द्वारा मौके पर जाकर कच्चे मकान की जियो-टैगिंग की जाएगी।'
    ],
    
    statusCheckGuide_en: 'Visit rhreporting.nic.in (for Rural) and click on "Report > Physical Progress > High Level Physical Progress Report" or enter your Registration Number. For Urban, visit pmaymis.gov.in > "Search Beneficiary".',
    statusCheckGuide_hi: 'ग्रामीण आवास का स्टेटस देखने के लिए rhreporting.nic.in पर जाएं और अपना रजिस्ट्रेशन नंबर दर्ज करें। शहरी आवास के लिए pmaymis.gov.in पर "Search Beneficiary" पर जाएं।',
    officialStatusUrl: 'https://rhreporting.nic.in',
    
    commonProblems_en: [
      {
        problem: 'Installment delayed after plinth completion',
        solution: 'Contact your Panchayat Secretary or Block Coordinator to schedule the physical geo-tag photo upload on the AwaasSoft mobile app.'
      }
    ],
    commonProblems_hi: [
      {
        problem: 'नींव (Plinth) बनने के बाद अगली किस्त नहीं आई',
        solution: 'अपने पंचायत सचिव या आवास समन्वयक से संपर्क कर आवास-सॉफ्ट (AwaasSoft) ऐप पर निर्माण की अगली जियो-टैग फोटो अपलोड करवाएं।'
      }
    ],
    
    faqs_en: [
      {
        q: 'Can a person who already received Indira Awaas apply for PMAY?',
        a: 'No. Any household that has previously benefited from government housing schemes (Indira Awaas or PMAY) is strictly excluded.'
      }
    ],
    faqs_hi: [
      {
        q: 'जिन्हें पहले इंदिरा आवास मिला था, क्या वे दोबारा आवेदन कर सकते हैं?',
        a: 'नहीं। जिन परिवारों को पहले सरकारी आवास योजना का लाभ मिल चुका है, वे दोबारा पात्र नहीं हैं।'
      }
    ],
    
    officialSources: [
      {
        name: 'Ministry of Rural Development Official Portal',
        authority: 'Ministry of Rural Development, Govt. of India',
        url: 'https://pmayg.nic.in',
        verificationDate: 'October 26, 2026'
      },
      {
        name: 'Ministry of Housing and Urban Affairs (MoHUA)',
        authority: 'Government of India',
        url: 'https://pmaymis.gov.in',
        verificationDate: 'October 20, 2026'
      }
    ],
    keywords: [
      'pm awas yojana', 'pmay g list', 'pm awas status', 'pmay subsidy',
      'pm awas online apply', 'awaassoft rhreporting', 'pmay urban 2.0',
      'प्रधानमंत्री आवास योजना', 'पीएम आवास लिस्ट', 'आवास स्टेटस'
    ],
    metaDescription_en: 'PM Awas Yojana (PMAY-G & Urban 2.0): check ₹1.2–₹2.5 Lakh housing grants, new beneficiary lists, eligibility criteria, and official status tracking portal.',
    metaDescription_hi: 'प्रधानमंत्री आवास योजना (PMAY): ₹1.20 से ₹2.50 लाख तक की मकान सहायता, आवास प्लस नई लाभार्थी सूची, नियम, आवश्यक दस्तावेज व स्टेटस जांचें।'
  },
  {
    id: 'pm-vishwakarma',
    slug: 'pm-vishwakarma-yojana-artisan-support',
    title_en: 'PM Vishwakarma Scheme: ₹3 Lakh Loan at 5%, Free Toolkit & Skill Stipend',
    title_hi: 'पीएम विश्वकर्मा योजना: 5% ब्याज पर ₹3 लाख ऋण, मुफ्त ₹15,000 टूलकिट व दैनिक भत्ता',
    shortTitle_en: 'PM Vishwakarma Scheme',
    shortTitle_hi: 'पीएम विश्वकर्मा योजना',
    category: 'employment',
    state: 'all-india',
    stateLabel_en: 'Central (All India)',
    stateLabel_hi: 'केंद्र सरकार (अखिल भारतीय)',
    status: 'Active',
    lastVerified: 'October 24, 2026',
    
    benefitSummary_en: 'Collateral-free enterprise loans up to ₹3,00,000 at a subsidized 5% interest rate (₹1 Lakh in 1st tranche, ₹2 Lakh in 2nd tranche), ₹15,000 e-voucher for modern toolkit, 5–7 days free basic skill training with ₹500/day stipend, and official PM Vishwakarma Certificate & ID card.',
    benefitSummary_hi: '5% की रियायती ब्याज दर पर बिना किसी गारंटी (कोलैटरल) के ₹3,00,000 तक का लोन (पहली बार ₹1 लाख, दूसरी बार ₹2 लाख), आधुनिक टूलकिट हेतु ₹15,000 का ई-वाउचर, 5-7 दिन का मुफ्त प्रशिक्षण व ₹500 प्रतिदिन का स्टाइपेंड।',
    benefitAmount_en: 'Up to ₹3 Lakh loan + ₹15,000 toolkit voucher',
    benefitAmount_hi: '₹3 लाख तक का सस्ता लोन + ₹15,000 टूलकिट वाउचर',
    whoCanApply_en: 'Traditional artisans and craftspeople working with their hands and tools across 18 designated family trades (Carpenters, Blacksmiths, Masons, Tailors, Barbers, Potters, Cobblers, etc.).',
    whoCanApply_hi: 'हाथ और औजारों से पारंपरिक कार्य करने वाले 18 चिन्हित व्यवसायों के कारीगर (बढ़ई, लोहार, कुम्हार, राजमिस्त्री, दर्जी, नाई, मोची, धोबी आदि)।',
    applicationMode: 'Online via CSC Centres',
    bannerImage: '/images/schemes/pm-vishwakarma.webp',
    
    whatIsThis_en: 'PM Vishwakarma is an ambitious Central Sector initiative by the Ministry of Micro, Small and Medium Enterprises (MSME) to empower traditional craftspeople and artisans across India, providing them end-to-end support from identity recognition and skill upgradation to credit support and digital market linkages.',
    whatIsThis_hi: 'पीएम विश्वकर्मा योजना सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय (MSME) द्वारा पारंपरिक शिल्पकारों व दस्तकारों को औपचारिक पहचान, कौशल उन्नयन, आधुनिक टूलकिट और सस्ती वित्तीय पूंजी प्रदान करने के लिए शुरू की गई राष्ट्रीय योजना है।',
    
    benefitsList_en: [
      'Official PM Vishwakarma Certificate and Digital ID Card recognizing the artisan.',
      'Free Basic Skill Training (5–7 days) with ₹500 daily stipend deposited to bank.',
      '₹15,000 Digital Incentive grant / e-voucher for purchasing modern trade toolkits.',
      'Subsidized loan: ₹1,00,000 (repayable in 18 months), followed by ₹2,00,000 (repayable in 30 months) at just 5% interest.',
      'Incentive of ₹1 per transaction for up to 100 digital transactions monthly.'
    ],
    benefitsList_hi: [
      'आधिकारिक पीएम विश्वकर्मा प्रमाण पत्र और डिजिटल आईडी कार्ड की मान्यता।',
      '5 से 7 दिनों का मुफ्त बुनियादी कौशल प्रशिक्षण और ₹500 प्रतिदिन का दैनिक भत्ता।',
      'उन्नत औजार खरीदने के लिए ₹15,000 का निःशुल्क टूलकिट ई-वाउचर।',
      'बिना गारंटी लोन: प्रथम चरण में ₹1,00,000 (18 महीने) और दूसरे चरण में ₹2,00,000 (30 महीने) मात्र 5% ब्याज पर।',
      'डिजिटल लेन-देन करने पर प्रति ट्रांजेक्शन ₹1 का प्रोत्साहन (अधिकतम 100 ट्रांजेक्शन प्रतिमाह)।'
    ],
    
    eligibility: {
      eligibleIf_en: [
        'Applicant must be an artisan or craftsperson engaged in one of the 18 specified trades on self-employment basis.',
        'Minimum age of 18 years on the date of registration.',
        'The applicant must not have availed similar credit-based schemes like PMEGP, PM SVANidhi, or Mudra in the past 5 years (except where loans are fully repaid).',
        'Only one member per family is eligible for benefits under this scheme.'
      ],
      eligibleIf_hi: [
        'आवेदक स्वरोजगार के आधार पर 18 निर्दिष्ट पारंपरिक व्यवसायों में से किसी एक में कार्यरत कारीगर हो।',
        'पंजीकरण की तिथि पर न्यूनतम आयु 18 वर्ष पूर्ण हो चुकी हो।',
        'आवेदक ने पिछले 5 वर्षों में पीएमईजीपी, स्वनिधि या मुद्रा जैसी सरकारी लोन योजनाओं से कोई बकाया लोन न लिया हो।',
        'परिवार में से केवल एक ही सदस्य (पति/पत्नी/अविवाहित संतान) इस योजना का लाभ ले सकता है।'
      ],
      notEligibleIf_en: [
        'Persons in government service and their family members.',
        'Persons working on salary in private factories without traditional craftsmanship.',
        'Individuals engaged outside the 18 declared trades.'
      ],
      notEligibleIf_hi: [
        'सरकारी सेवा में कार्यरत कर्मचारी और उनके परिवार के सदस्य।',
        'कंपनियों या कारखानों में नियमित वेतन पर कार्य करने वाले गैर-हस्तशिल्पी।',
        'योजना में सूचीबद्ध 18 पारंपरिक व्यवसायों से बाहर के कार्य।'
      ]
    },
    
    requiredDocuments_en: [
      'Aadhaar Card of the applicant artisan',
      'Active Mobile number linked with Aadhaar (biometric verification required)',
      'Bank Account Passbook details (Aadhaar seeded)',
      'Ration Card / Proof of family identity',
      'Trade Skill verification during CSC biometric registration'
    ],
    requiredDocuments_hi: [
      'आवेदक कारीगर का आधार कार्ड',
      'आधार से लिंक सक्रिय मोबाइल नंबर (बायोमेट्रिक सत्यापन अनिवार्य)',
      'बैंक खाता पासबुक विवरण (आधार से लिंक)',
      'राशन कार्ड / परिवार का पहचान प्रमाण',
      'व्यवसाय और हुनर का स्व-प्रमाणीकरण'
    ],
    
    howToApply_en: [
      'Visit your nearest Common Service Centre (CSC) with your Aadhaar and bank details.',
      'The CSC VLE operator logs into pmvishwakarma.gov.in using their official credentials.',
      'Complete biometric Aadhaar authentication and enter trade and family details.',
      'Select your trade from the 18 eligible categories (e.g. Carpenter, Tailor, Barber, Mason).',
      'Submit the application for three-stage verification: Gram Panchayat / ULB level, District Implementation Committee, and Screening Committee.',
      'Upon approval, attend training and receive the toolkit voucher and loan disbursement.'
    ],
    howToApply_hi: [
      'अपने नजदीकी सीएससी (CSC) प्रज्ञा केंद्र पर अपने आधार कार्ड और बैंक पासबुक के साथ जाएं।',
      'सीएससी संचालक pmvishwakarma.gov.in पोर्टल पर आपका ऑनलाइन पंजीकरण प्रारंभ करेगा।',
      'बायोमेट्रिक फिंगरप्रिंट सत्यापन करवाएं और अपने परिवार व कार्य का विवरण भरें।',
      '18 ट्रेडों में से अपने काम (जैसे बढ़ई, दर्जी, राजमिस्त्री, धोबी आदि) का चयन करें।',
      'आवेदन जमा होने पर ग्राम पंचायत/शहरी निकाय, जिला कार्यान्वयन समिति द्वारा सत्यापन किया जाएगा।',
      'सत्यापन के उपरांत प्रशिक्षण में भाग लें और टूलकिट वाउचर व कम ब्याज के लोन का लाभ उठाएं।'
    ],
    
    statusCheckGuide_en: 'Check registration and verification stage at pmvishwakarma.gov.in by clicking "Login > Applicant / Beneficiary Login" and entering your Aadhaar OTP.',
    statusCheckGuide_hi: 'pmvishwakarma.gov.in पर जाकर "Login > Applicant Login" पर क्लिक करें और आधार ओटीपी से अपने आवेदन व लोन की स्थिति देखें।',
    officialStatusUrl: 'https://pmvishwakarma.gov.in',
    
    commonProblems_en: [
      {
        problem: 'Pending verification at Gram Panchayat level',
        solution: 'Contact your Village Mukhiya / Panchayat Secretary or Ward Councillor to approve your trade identity in their official PM Vishwakarma portal queue.'
      }
    ],
    commonProblems_hi: [
      {
        problem: 'ग्राम पंचायत स्तर पर सत्यापन लंबित है',
        solution: 'अपने ग्राम प्रधान/मुखिया या वार्ड पार्षद से संपर्क करें और उन्हें आधिकारिक पोर्टल पर आपका सत्यापन अनुमोदित (Approve) करने का अनुरोध करें।'
      }
    ],
    
    faqs_en: [
      {
        q: 'Do I need to submit property papers to get the ₹1 Lakh loan?',
        a: 'No. The loan under PM Vishwakarma is 100% collateral-free and backed by the Credit Guarantee Fund Trust.'
      }
    ],
    faqs_hi: [
      {
        q: 'क्या ₹1 लाख का लोन लेने के लिए कोई जमीन या संपत्ति गिरवी रखनी होगी?',
        a: 'नहीं। यह ऋण पूरी तरह कोलैटरल-फ्री (बिना किसी गारंटी) है और भारत सरकार द्वारा गारंटीकृत है।'
      }
    ],
    
    officialSources: [
      {
        name: 'PM Vishwakarma Official Portal',
        authority: 'Ministry of MSME and Ministry of Skill Development, Govt. of India',
        url: 'https://pmvishwakarma.gov.in',
        verificationDate: 'October 24, 2026'
      }
    ],
    keywords: [
      'pm vishwakarma', 'vishwakarma loan status', 'vishwakarma toolkit voucher',
      'pm vishwakarma eligibility', '18 trades list', 'vishwakarma certificate',
      'पीएम विश्वकर्मा', 'विश्वकर्मा योजना लोन', 'टूलकिट वाउचर', 'विश्वकर्मा रजिस्ट्रेशन'
    ],
    metaDescription_en: 'PM Vishwakarma Scheme details: 5% subsidized ₹3 Lakh loan, ₹15,000 free toolkit voucher, 18 eligible trades, daily stipend, and CSC registration process.',
    metaDescription_hi: 'पीएम विश्वकर्मा योजना: 5% ब्याज पर ₹3 लाख का लोन, ₹15,000 टूलकिट वाउचर, 18 पारंपरिक कारीगर ट्रेड, पात्रता और ऑनलाइन रजिस्ट्रेशन की पूरी जानकारी।'
  },
  {
    id: 'jharkhand-abua-awas',
    slug: 'jharkhand-abua-awas-yojana-housing',
    title_en: 'Jharkhand Abua Awas Yojana: ₹2 Lakh 3-Room Permanent House Grant',
    title_hi: 'झारखंड अबुआ आवास योजना: 3 कमरों के पक्के मकान हेतु ₹2 लाख की सरकारी सहायता',
    shortTitle_en: 'Jharkhand Abua Awas',
    shortTitle_hi: 'अबुआ आवास योजना (झारखंड)',
    category: 'housing',
    state: 'jharkhand',
    stateLabel_en: 'Jharkhand State',
    stateLabel_hi: 'झारखंड राज्य',
    status: 'Active',
    lastVerified: 'October 27, 2026',
    
    benefitSummary_en: 'State-funded grant of ₹2,00,000 disbursed in 4 milestones to construct a modern 3-room pucca house with a kitchen for families left out of central housing schemes, plus MGNREGA wages.',
    benefitSummary_hi: 'केंद्र की आवास योजना से वंचित परिवारों के लिए 3 कमरों और रसोईघर युक्त पक्के मकान हेतु 4 किस्तों में ₹2,00,000 की शत-प्रतिशत राज्य प्रायोजित सहायता।',
    benefitAmount_en: '₹2,00,000 (in 4 installments)',
    benefitAmount_hi: '₹2,00,000 (4 किस्तों में)',
    whoCanApply_en: 'Permanent residents of Jharkhand living in kutcha/dilapidated homes who did not receive PMAY or Baba Saheb Ambedkar housing grants.',
    whoCanApply_hi: 'झारखंड के स्थायी निवासी जो कच्चे/जीर्ण घरों में रहते हैं और जिन्हें पीएम आवास या अंबेडकर आवास का लाभ कभी नहीं मिला।',
    applicationMode: 'Offline (Aapki Sarkar Camps & Block Office)',
    bannerImage: '/images/schemes/jharkhand-abua-awas.webp',
    
    whatIsThis_en: 'Abua Awas Yojana (AAY) is a 100% Jharkhand State funded housing initiative launched to ensure that vulnerable, tribal, and rural families deprived of Central PMAY housing build spacious 3-room pucca homes with permanent concrete roofing.',
    whatIsThis_hi: 'अबुआ आवास योजना झारखंड सरकार द्वारा शुरू की गई 100% राज्य-पोषित योजना है। इसका उद्देश्य केंद्र सरकार की प्रधानमंत्री आवास योजना से छूट गए जरूरतमंद, गरीब और ग्रामीण परिवारों को 3 कमरों का पक्का मकान उपलब्ध कराना है।',
    
    benefitsList_en: [
      'Substantial ₹2,00,000 financial support (significantly higher than typical rural housing schemes).',
      'Mandates a 3-room layout with an integrated kitchen for comfortable family living.',
      'Direct Benefit Transfer (DBT) into 4 installments: 15% on plinth, 25% on lintel, 50% on roof completion, 10% on completion.',
      'Additional wage assistance under MGNREGS for family members contributing labor.'
    ],
    benefitsList_hi: [
      '₹2,00,000 की बड़ी वित्तीय सहायता जो आम आवास योजनाओं से काफी अधिक है।',
      'परिवार के गरिमापूर्ण जीवन हेतु 3 पक्के कमरे तथा स्वच्छ रसोईघर का अनिवार्य प्रावधान।',
      'निर्माण की प्रगति के अनुसार 4 पारदर्शी किस्तों में सीधे बैंक खाते में भुगतान।',
      'मकान निर्माण में श्रम करने वाले परिवार को मनरेगा की अकुशल मजदूरी का अतिरिक्त लाभ।'
    ],
    
    eligibility: {
      eligibleIf_en: [
        'Permanent resident of Jharkhand state.',
        'Household living in kutcha houses or temporary huts without a permanent concrete roof.',
        'Families not having benefited from PMAY-G, PMAY-U, or Dr. Bhimrao Ambedkar Awas Yojana.',
        'Priority to Particularly Vulnerable Tribal Groups (PVTG), widows, disaster-affected, and destitute households.'
      ],
      eligibleIf_hi: [
        'आवेदक झारखंड राज्य का स्थायी निवासी हो।',
        'परिवार कच्चे मकान या छप्पर की झोपड़ी में निवास कर रहा हो।',
        'परिवार के किसी भी सदस्य को पूर्व में पीएम आवास या आंबेडकर आवास का लाभ न मिला हो।',
        'आदिम जनजाति (PVTG), विधवा, प्राकृतिक आपदा प्रभावित और बेसहारा परिवारों को सर्वोच्च प्राथमिकता।'
      ],
      notEligibleIf_en: [
        'Households owning a pucca house anywhere in the country.',
        'Families with any member paying income tax or holding government employment.',
        'Owners of four-wheeler vehicles or agricultural mechanized equipment.'
      ],
      notEligibleIf_hi: [
        'जिनके पास देश में कहीं भी पक्का मकान हो।',
        'परिवार में कोई आयकरदाता या सरकारी सेवा में पदस्थ हो।',
        'चार पहिया वाहन या ट्रैक्टर धारक परिवार।'
      ]
    },
    
    requiredDocuments_en: [
      'Aadhaar Card of applicant and adult family members',
      'Residential Certificate of Jharkhand',
      'Ration Card copy',
      'Aadhaar-seeded bank account passbook copy',
      'Job Card (MGNREGA)',
      'Photographs of existing kutcha house'
    ],
    requiredDocuments_hi: [
      'आवेदक व परिवार के सदस्यों का आधार कार्ड',
      'झारखंड का स्थानीय निवास प्रमाण पत्र',
      'राशन कार्ड की प्रति',
      'आधार से लिंक बैंक पासबुक',
      'मनरेगा जॉब कार्ड',
      'वर्तमान कच्चे मकान की स्पष्ट तस्वीर'
    ],
    
    howToApply_en: [
      'Applications are collected during the "Aapki Yojana, Aapki Sarkar, Aapke Dwar" camps in Panchayats.',
      'Submit the prescribed application along with land documents and photo proof to the verification team.',
      'The Gram Sabha reviews the list and prioritizes beneficiaries based on points/deprivation score.',
      'Selected beneficiaries receive an official Sanction Letter (Swikriti Patra) from the Block Development Office.'
    ],
    howToApply_hi: [
      'ग्राम पंचायतों में आयोजित होने वाले "आपकी योजना, आपकी सरकार, आपके द्वार" शिविरों में आवेदन फॉर्म जमा करें।',
      'फॉर्म के साथ जमीन के कागजात, आधार और कच्चे घर का फोटो संलग्न करें।',
      'ग्राम सभा द्वारा भौतिक सत्यापन कर अभाव अंकों के आधार पर अंतिम प्राथमिकता सूची बनाई जाती है।',
      'चयनित लाभार्थियों को प्रखंड विकास पदाधिकारी (BDO) द्वारा आधिकारिक स्वीकृति पत्र जारी किया जाता है।'
    ],
    
    statusCheckGuide_en: 'Visit your Gram Panchayat office or Block Development Office to check the approved Abua Awas Waiting List and Sanction Register.',
    statusCheckGuide_hi: 'अपनी ग्राम पंचायत या प्रखंड कार्यालय जाकर अबुआ आवास की अनुमोदित प्रतीक्षा सूची और स्वीकृति रजिस्टर में अपना नाम देख सकते हैं।',
    officialStatusUrl: 'https://jharkhand.gov.in',
    
    commonProblems_en: [
      {
        problem: 'Name in waiting list but sanction delayed',
        solution: 'Sanctions are released in target quotas per year. Inquire at your BDO office regarding your priority ranking in the Gram Sabha approved list.'
      }
    ],
    commonProblems_hi: [
      {
        problem: 'प्रतीक्षा सूची में नाम है लेकिन स्वीकृति नहीं मिली',
        solution: 'योजना का लक्ष्य चरणबद्ध तरीके से आवंटित होता है। अपने प्रखंड विकास पदाधिकारी से अपनी वरीयता सूची क्रम की जानकारी लें।'
      }
    ],
    
    faqs_en: [
      {
        q: 'How many rooms are constructed under Abua Awas?',
        a: 'The scheme specifically provides for a 3-room pucca house with a kitchen, requiring at least 31 square meters of plinth area.'
      }
    ],
    faqs_hi: [
      {
        q: 'अबुआ आवास योजना के तहत कितने कमरे बनाए जाते हैं?',
        a: 'इस योजना में विशेष रूप से 3 कमरों और एक पक्की रसोई का निर्माण कराया जाता है, जिसका न्यूनतम क्षेत्रफल 31 वर्ग मीटर होना चाहिए।'
      }
    ],
    
    officialSources: [
      {
        name: 'Rural Development Department, Govt. of Jharkhand',
        authority: 'Government of Jharkhand',
        url: 'https://jharkhand.gov.in',
        verificationDate: 'October 27, 2026'
      }
    ],
    keywords: [
      'abua awas yojana', 'jharkhand abua awas list', 'abua awas 2 lakh',
      'abua awas status', 'jharkhand housing scheme', 'abua awas eligibility',
      'अबुआ आवास योजना', 'अबुआ आवास लिस्ट', 'झारखंड आवास', 'अबुआ आवास स्टेटस'
    ],
    metaDescription_en: 'Jharkhand Abua Awas Yojana: ₹2 Lakh financial grant for 3-room pucca houses, eligibility criteria, beneficiary lists, Panchayat verification process.',
    metaDescription_hi: 'झारखंड अबुआ आवास योजना: 3 कमरों के पक्के मकान हेतु ₹2 लाख की सरकारी मदद, नियम, ग्राम सभा प्राथमिकता सूची और आवेदन की सम्पूर्ण जानकारी।'
  },
  {
    id: 'national-scholarship-portal',
    slug: 'national-scholarship-portal-nsp-guide',
    title_en: 'National Scholarship Portal (NSP 2026-27): OTR, Schemes, Dates & Renewal',
    title_hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP): वन-टाइम रजिस्ट्रेशन (OTR), पात्रता, अंतिम तिथि व स्टेटस',
    shortTitle_en: 'National Scholarship Portal (NSP)',
    shortTitle_hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)',
    category: 'scholarships',
    state: 'all-india',
    stateLabel_en: 'Central (All India)',
    stateLabel_hi: 'केंद्र सरकार (अखिल भारतीय)',
    status: 'Updated',
    lastVerified: 'October 29, 2026',
    
    benefitSummary_en: 'Single window platform disbursing over 50 Central, State, and UGC scholarship schemes offering ₹10,000 to ₹75,000+ per year directly via DBT for Pre-Matric, Post-Matric, Merit-cum-Means, and Higher Education students.',
    benefitSummary_hi: 'प्री-मैट्रिक, पोस्ट-मैट्रिक, मेरिट-कम-मीन्स और उच्च शिक्षा के छात्रों हेतु केंद्र व यूजीसी की 50+ छात्रवृत्तियों में ₹10,000 से ₹75,000+ प्रति वर्ष की सीधी डीबीटी सहायता।',
    benefitAmount_en: '₹10,000 to ₹75,000+ per academic year',
    benefitAmount_hi: '₹10,000 से ₹75,000+ प्रति शैक्षणिक सत्र',
    whoCanApply_en: 'Regular students belonging to SC, ST, OBC, EWS, and minority categories or meritorious college scholars with parental income below prescribed scheme limits (usually under ₹2.5 Lakh).',
    whoCanApply_hi: 'मान्यता प्राप्त स्कूलों, कॉलेजों और विश्वविद्यालयों में अध्ययनरत नियमित छात्र (एससी, एसटी, ओबीसी, अल्पसंख्यक व सामान्य मेधावी वर्ग)।',
    applicationMode: 'Online via NSP Portal',
    bannerImage: '/images/schemes/national-scholarship-portal.webp',
    
    whatIsThis_en: 'National Scholarship Portal (NSP) is the digital backbone initiated by the Ministry of Electronics and Information Technology (MeitY) to standardize, verify, and disburse all Central and State government educational scholarships seamlessly using Aadhaar e-KYC and Institute-level validation.',
    whatIsThis_hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) भारत सरकार का एकीकृत डिजिटल प्लेटफॉर्म है, जिसके माध्यम से देश भर के जरूरतमंद व मेधावी छात्रों को बिना किसी बिचौलिए के सीधे बैंक खाते में छात्रवृत्ति प्रदान की जाती है।',
    
    benefitsList_en: [
      'One-Time Registration (OTR) generates a lifetime ID eliminating duplicate document uploads every year.',
      'Direct Benefit Transfer (DBT) ensures fast disbursement directly into student’s Aadhaar-linked bank account.',
      'Transparency: Live SMS and portal status updates from Institute verification to Ministry sanction.',
      'Coverage includes course tuition fees, maintenance allowance, and book stipends.'
    ],
    benefitsList_hi: [
      'वन-टाइम रजिस्ट्रेशन (OTR) से छात्रों को हर वर्ष दोबारा दस्तावेज अपलोड करने की झंझट से मुक्ति।',
      'आधार-सीडेड बैंक खाते में डीबीटी द्वारा बिना किसी कटौती के छात्रवृत्ति की राशि का अंतरण।',
      'संस्थान सत्यापन, जिला नोडल अधिकारी और मंत्रालय स्तर की लाइव ट्रैकिंग।',
      'पाठ्यक्रम शुल्क, हॉस्टल भत्ता और अध्ययन सामग्री हेतु आर्थिक सहायता शामिल।'
    ],
    
    eligibility: {
      eligibleIf_en: [
        'Enrolled in recognized schools, colleges, ITIs, polytechnics, or universities with a valid AISHE / UDISE+ code.',
        'Secured minimum prescribed marks (typically 50% or 80th percentile for Central Sector Scheme) in previous board examination.',
        'Family annual income certified by competent revenue authority within scheme ceiling (mostly ≤ ₹2.50 Lakh; up to ₹4.50 Lakh for specific technical programs).',
        'Active bank account seeded with Aadhaar in student’s own name.'
      ],
      eligibleIf_hi: [
        'मान्यता प्राप्त स्कूल, कॉलेज, आईटीआई, पॉलिटेक्निक या यूनिवर्सिटी में नियमित रूप से नामांकित हों।',
        'पिछली बोर्ड या विश्वविद्यालय परीक्षा में न्यूनतम आवश्यक अंक (आमतौर पर 50% या 80th पर्सेन्टाइल) प्राप्त किए हों।',
        'परिवार की वार्षिक आय सरकारी सीमा (अधिकांश योजनाओं में ₹2.50 लाख से कम) के अंतर्गत हो।',
        'छात्र के अपने नाम का बैंक खाता आधार से लिंक और डीबीटी सक्षम हो।'
      ],
      notEligibleIf_en: [
        'Students pursuing education through distance mode or correspondence (except where specifically allowed).',
        'Students already receiving full financial scholarship from another government source.',
        'Applicants submitting forged income certificates or duplicate registrations.'
      ],
      notEligibleIf_hi: [
        'दूरस्थ शिक्षा (Distance/Correspondence) से अध्ययन करने वाले छात्र (विशेष प्रावधानों को छोड़कर)।',
        'जो छात्र पहले से किसी अन्य सरकारी छात्रवृत्ति का पूरा लाभ ले रहे हों।',
        'फर्जी आय प्रमाण पत्र या एक से अधिक योजनाओं में अनुचित दोहरा आवेदन करने वाले छात्र।'
      ]
    },
    
    requiredDocuments_en: [
      'Student Aadhaar Card (Biometric OTR validated)',
      'Current Academic Year Fee Receipt & Bonafide Student Certificate',
      'Previous Class / Semester Marksheet',
      'Valid Family Income Certificate (issued by Circle Officer / Tehsildar)',
      'Caste Certificate / Minority Community Self-Declaration',
      'Student Bank Passbook (NPCI mapped)'
    ],
    requiredDocuments_hi: [
      'छात्र का आधार कार्ड (OTR प्रमाणीकरण हेतु)',
      'वर्तमान सत्र का फीस रसीद व बोनाफाइड प्रमाण पत्र (Bonafide Certificate)',
      'पिछली कक्षा/सेमेस्टर की अंकतालिका (Marksheet)',
      'राजस्व अधिकारी (अंचलाधिकारी/तहसीलदार) द्वारा जारी वैध आय प्रमाण पत्र',
      'जाति प्रमाण पत्र / अल्पसंख्यक समुदाय स्व-घोषणा',
      'छात्र का अपना बैंक पासबुक'
    ],
    
    howToApply_en: [
      'Download the NSP OTR App from Google Play Store or visit scholarships.gov.in.',
      'Generate your One-Time Registration (OTR) number using Aadhaar Face Authentication or OTP.',
      'Log into the NSP Portal using your OTR number and set your password.',
      'Select your eligible Scheme from the list (Pre-Matric, Post-Matric, MCM, Central Sector Scheme).',
      'Upload academic documents, bonafide certificate, and submit the application.',
      'Submit the physical copy of the application along with certificates to your College / School Nodal Officer for verification.'
    ],
    howToApply_hi: [
      'scholarships.gov.in पर जाएं या गूगल प्ले स्टोर से "NSP OTR App" डाउनलोड करें।',
      'आधार फेस ऑथेंटिकेशन या ओटीपी द्वारा अपना 14 अंकों का वन-टाइम रजिस्ट्रेशन (OTR) नंबर जनरेट करें।',
      'ओटीआर नंबर और पासवर्ड से राष्ट्रीय छात्रवृत्ति पोर्टल पर लॉगिन करें।',
      'पात्रतानुसार अपनी योजना (पोस्ट-मैट्रिक, मेरिट-कम-मीन्स या सेंट्रल सेक्टर) का चयन करें।',
      'बोनाफाइड प्रमाण पत्र, फीस रसीद और अंकपत्र अपलोड कर फॉर्म सबमिट करें।',
      'फॉर्म का प्रिंटआउट अपने कॉलेज/स्कूल के छात्रवृत्ति नोडल अधिकारी के पास सत्यापन हेतु जमा करें।'
    ],
    
    statusCheckGuide_en: 'Log in at scholarships.gov.in with your OTR/Application ID and password to see real-time status: "Application Verified by Institute", "Verified by DNO", or "Payment Processed by PFMS".',
    statusCheckGuide_hi: 'scholarships.gov.in पर जाकर अपने OTR/आवेदन नंबर से लॉगिन करें और देखें कि आवेदन संस्थान, जिला नोडल या पीएफएमएस (PFMS) के किस स्तर पर है।',
    officialStatusUrl: 'https://scholarships.gov.in',
    
    commonProblems_en: [
      {
        problem: 'Defective Application marked by Institute',
        solution: 'Log into NSP, review the defect remarks (e.g. incorrect marksheet or fee receipt), rectify the upload, and re-submit before the institute closing date.'
      },
      {
        problem: 'Bank Account validation failed on PFMS',
        solution: 'Ensure the bank account is opened in the student’s exact name as on Aadhaar and visit the branch to confirm NPCI Aadhaar seeding.'
      }
    ],
    commonProblems_hi: [
      {
        problem: 'संस्थान द्वारा आवेदन में डिफेक्ट (Defective) लगा दिया गया है',
        solution: 'पोर्टल पर लॉगिन कर रिमार्क देखें (जैसे गलत अंकपत्र या रसीद), सही दस्तावेज दोबारा अपलोड करें और कॉलेज से पुनः अग्रसारित कराएं।'
      },
      {
        problem: 'पीएफएमएस (PFMS) पर बैंक खाता सत्यापन विफल हुआ',
        solution: 'सुनिश्चित करें कि बैंक खाता छात्र के स्वयं के नाम पर है और बैंक जाकर एनपीसीआई आधार सीडिंग की पुष्टि करें।'
      }
    ],
    
    faqs_en: [
      {
        q: 'Is NSP OTR mandatory for all scholarship renewals?',
        a: 'Yes. The Ministry has made One-Time Registration (OTR) with biometric/face-auth mandatory for all fresh and renewal applicants.'
      }
    ],
    faqs_hi: [
      {
        q: 'क्या रिन्यूअल (Renewal) वाले छात्रों को भी OTR बनाना जरूरी है?',
        a: 'हाँ। सरकार ने सभी नए और पुराने (नवीनीकरण) छात्रों के लिए फेस ऑथेंटिकेशन युक्त OTR अनिवार्य कर दिया है।'
      }
    ],
    
    officialSources: [
      {
        name: 'National Scholarship Portal',
        authority: 'Ministry of Electronics & IT and Ministry of Education, Govt. of India',
        url: 'https://scholarships.gov.in',
        verificationDate: 'October 29, 2026'
      }
    ],
    keywords: [
      'national scholarship portal', 'nsp otr', 'scholarship last date', 'nsp login',
      'post matric scholarship', 'merit cum means scholarship', 'nsp biometric kyc',
      'राष्ट्रीय छात्रवृत्ति पोर्टल', 'एनएसपी स्कॉलरशिप', 'छात्रवृत्ति स्टेटस', 'पोस्ट मैट्रिक स्कॉलरशिप'
    ],
    metaDescription_en: 'Complete NSP (National Scholarship Portal 2026-27) guide: OTR registration, eligible Central & State schemes, required documents, deadlines & status tracking.',
    metaDescription_hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) गाइड: OTR रजिस्ट्रेशन प्रक्रिया, छात्रवृत्ति योजनाएं, पात्रता, आवश्यक कागजात, अंतिम तिथियां व स्टेटस देखने की विधि।'
  },
  {
    id: 'atal-pension-yojana',
    slug: 'atal-pension-yojana-apy-retirement',
    title_en: 'Atal Pension Yojana (APY): Guaranteed ₹1,000–₹5,000 Monthly Pension',
    title_hi: 'अटल पेंशन योजना (APY): 60 वर्ष बाद ₹1,000 से ₹5,000 की गारंटीड मासिक पेंशन',
    shortTitle_en: 'Atal Pension Yojana (APY)',
    shortTitle_hi: 'अटल पेंशन योजना (APY)',
    category: 'pension',
    state: 'all-india',
    stateLabel_en: 'Central (All India)',
    stateLabel_hi: 'केंद्र सरकार (अखिल भारतीय)',
    status: 'Active',
    lastVerified: 'October 25, 2026',
    
    benefitSummary_en: 'Guaranteed lifetime monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 from age 60 based on modest monthly contributions starting between ages 18 and 40. Continued pension to spouse upon subscriber death and return of entire corpus to nominee.',
    benefitSummary_hi: '18 से 40 वर्ष की आयु में मामूली मासिक अंशदान जमा करने पर 60 वर्ष की आयु के बाद आजीवन ₹1,000 से ₹5,000 की पक्की मासिक पेंशन। सब्सक्राइबर के बाद जीवनसाथी को पेंशन व नॉमिनी को पूरा फंड वापस।',
    benefitAmount_en: '₹1,000 to ₹5,000 guaranteed monthly pension',
    benefitAmount_hi: '₹1,000 से ₹5,000 प्रति माह गारंटीड पेंशन',
    whoCanApply_en: 'All Indian citizens aged between 18 and 40 years holding a savings bank account who are not income-tax payers.',
    whoCanApply_hi: '18 से 40 वर्ष की आयु के सभी भारतीय नागरिक जिनका किसी बैंक या डाकघर में बचत खाता है और जो आयकरदाता नहीं हैं।',
    applicationMode: 'Online via Netbanking & Bank Branches',
    bannerImage: '/images/schemes/atal-pension-yojana.webp',
    
    whatIsThis_en: 'Atal Pension Yojana (APY) is a flagship social security initiative launched by the Government of India, administered by the Pension Fund Regulatory and Development Authority (PFRDA), focused on providing unorganized sector workers with guaranteed old-age financial independence.',
    whatIsThis_hi: 'अटल पेंशन योजना (APY) भारत सरकार द्वारा संचालित प्रमुख सामाजिक सुरक्षा योजना है, जिसका नियमन पीएफआरडीए (PFRDA) द्वारा किया जाता है। इसका उद्देश्य असंगठित क्षेत्र के कामगारों और युवाओं को वृद्धावस्था में सुरक्षित मासिक आय की गारंटी देना है।',
    
    benefitsList_en: [
      'Government of India guarantees the minimum pension amount irrespective of market return fluctuations.',
      'Same pension amount continues to the spouse for life upon subscriber’s demise.',
      'Upon demise of both subscriber and spouse, the entire accumulated pension wealth (up to ₹8.5 Lakh for ₹5,000 pension) is handed over to the nominee.',
      'Automated auto-debit facility from bank savings account.'
    ],
    benefitsList_hi: [
      'बाजार के उतार-चढ़ाव से बेअसर, सरकार द्वारा न्यूनतम पेंशन राशि की 100% गारंटी।',
      'सब्सक्राइबर की मृत्यु के पश्चात उसके पति/पत्नी को आजीवन समान पेंशन का भुगतान।',
      'दोनों के निधन के बाद जमा संपूर्ण संचित कोष (₹5,000 पेंशन पर लगभग ₹8.5 लाख) कानूनी उत्तराधिकारी/नॉमिनी को वापस।',
      'बचत खाते से ऑटो-डेबिट की आसान सुविधा।'
    ],
    
    eligibility: {
      eligibleIf_en: [
        'Citizen of India aged between 18 and 40 years.',
        'Holder of a savings bank account or post office savings account.',
        'Aadhaar card and active mobile number for communication.',
        'Non-taxpayer on the date of joining.'
      ],
      eligibleIf_hi: [
        'भारत का नागरिक जिसकी उम्र 18 से 40 वर्ष के बीच हो।',
        'किसी बैंक या डाकघर में सक्रिय बचत बैंक खाता होना आवश्यक।',
        'आधार कार्ड और पंजीकृत मोबाइल नंबर।',
        'जुड़ने की तिथि को आयकरदाता (Taxpayer) न हो।'
      ],
      notEligibleIf_en: [
        'Anyone who is or has been an income tax payer as per Income Tax Act rules (amended from Oct 1, 2022).',
        'Persons below 18 years or above 40 years.'
      ],
      notEligibleIf_hi: [
        'जो व्यक्ति आयकर का भुगतान करते हैं (1 अक्टूबर 2022 से आयकरदाताओं के लिए यह योजना बंद कर दी गई है)।',
        '18 वर्ष से कम या 40 वर्ष से अधिक आयु के व्यक्ति।'
      ]
    },
    
    requiredDocuments_en: [
      'Aadhaar Card of subscriber',
      'Savings Bank / Post Office account number and IFSC code',
      'Nominee details and spouse Aadhaar',
      'Active mobile number'
    ],
    requiredDocuments_hi: [
      'ग्राहक का आधार कार्ड',
      'बैंक अथवा डाकघर का बचत खाता नंबर व आईएफएससी कोड',
      'नॉमिनी और जीवनसाथी का विवरण व आधार',
      'सक्रिय मोबाइल नंबर'
    ],
    
    howToApply_en: [
      'Log into your Internet Banking or Mobile Banking app (available in SBI, PNB, BoB, Canara, HDFC, ICICI, etc.).',
      'Navigate to "Social Security Schemes / Government Schemes" > "Atal Pension Yojana".',
      'Choose your desired monthly pension amount (₹1,000 to ₹5,000) and premium debit frequency (Monthly/Quarterly).',
      'Verify nominee details and submit. Your PRAN (Permanent Retirement Account Number) is generated immediately.',
      'Alternatively, visit your bank branch and submit the physical APY Registration Form.'
    ],
    howToApply_hi: [
      'अपनी बैंक की नेट बैंकिंग या मोबाइल बैंकिंग ऐप में लॉगिन करें।',
      '"Government Schemes" या "Social Security" में "Atal Pension Yojana" पर क्लिक करें।',
      'अपनी इच्छित मासिक पेंशन (₹1,000 से ₹5,000) और प्रीमियम आवृत्ति (मासिक/त्रैमासिक) चुनें।',
      'नॉमिनी का विवरण भरकर सबमिट करें; आपका प्रान (PRAN) नंबर तुरंत जारी हो जाएगा।',
      'आप अपनी बैंक शाखा में जाकर भी सरल APY फॉर्म जमा कर सकते हैं।'
    ],
    
    statusCheckGuide_en: 'Subscribers can check their APY account e-PRAN and transaction statement on the Protean CRA portal (npscra.nsdl.co.in) using their PRAN or Savings Bank Account number.',
    statusCheckGuide_hi: 'nsdl.co.in / npscra.nsdl.co.in पर जाकर अपने प्रान नंबर या बैंक खाता संख्या द्वारा अपना ई-प्रान और जमा राशि का स्टेटमेंट कभी भी डाउनलोड कर सकते हैं।',
    officialStatusUrl: 'https://www.npscra.nsdl.co.in',
    
    commonProblems_en: [
      {
        problem: 'Overdue penalty charged due to low balance',
        solution: 'Ensure sufficient balance in your bank on the designated monthly debit date. Overdue interest is minimal (₹1 per ₹100 per month).'
      }
    ],
    commonProblems_hi: [
      {
        problem: 'खाते में बैलेंस न होने से किस्त छूट गई',
        solution: 'खाते में पर्याप्त राशि रखें। छूटी हुई किस्त पर मामूली ब्याज (₹1 प्रति ₹100 प्रति माह) काटकर अगली तारीख पर खाता पुनः नियमित हो जाता है।'
      }
    ],
    
    faqs_en: [
      {
        q: 'What is the monthly contribution for an 18-year-old for ₹5,000 pension?',
        a: 'For an 18-year-old, the monthly contribution is just ₹210 per month until age 60 to secure a guaranteed ₹5,000 monthly pension.'
      }
    ],
    faqs_hi: [
      {
        q: '18 वर्ष के युवा को ₹5,000 पेंशन पाने के लिए हर महीने कितना जमा करना होगा?',
        a: 'मात्र ₹210 प्रति माह! 18 वर्ष की आयु में शुरू करने पर 60 वर्ष तक हर महीने ₹210 जमा करने पर आजीवन ₹5,000 मासिक पेंशन मिलती है।'
      }
    ],
    
    officialSources: [
      {
        name: 'Pension Fund Regulatory and Development Authority (PFRDA)',
        authority: 'Government of India',
        url: 'https://www.pfrda.org.in',
        verificationDate: 'October 25, 2026'
      }
    ],
    keywords: [
      'atal pension yojana', 'apy chart', 'apy calculator', 'guaranteed pension',
      'apy status check', 'pfrda pension scheme', 'अटल पेंशन योजना', 'मासिक पेंशन', 'एपीवाई चार्ट'
    ],
    metaDescription_en: 'Atal Pension Yojana (APY) complete guide: ₹1,000–₹5,000 guaranteed monthly pension chart, age eligibility (18–40), nomination rules, and netbanking application.',
    metaDescription_hi: 'अटल पेंशन योजना (APY): ₹1,000 से ₹5,000 मासिक पेंशन चार्ट, 18-40 वर्ष आयु पात्रता नियम, अंशदान तालिका, नॉमिनी अधिकार और ऑनलाइन आवेदन गाइड।'
  },
  {
    id: 'bihar-student-credit-card',
    slug: 'bihar-student-credit-card-yojana',
    title_en: 'Bihar Student Credit Card (MNSSBY): ₹4 Lakh Education Loan at 1% for Girls',
    title_hi: 'बिहार स्टूडेंट क्रेडिट कार्ड योजना: उच्च शिक्षा हेतु ₹4 लाख तक का रियायती ऋण',
    shortTitle_en: 'Bihar Student Credit Card',
    shortTitle_hi: 'बिहार स्टूडेंट क्रेडिट कार्ड',
    category: 'students',
    state: 'bihar',
    stateLabel_en: 'Bihar State',
    stateLabel_hi: 'बिहार राज्य',
    status: 'Active',
    lastVerified: 'October 28, 2026',
    
    benefitSummary_en: 'State government guaranteed education loan up to ₹4,00,000 for 12th pass students pursuing higher education in technical, medical, and general courses. Subsidized interest rate of 4% for male students and just 1% for female, transgender, and divyang students, with repayment starting 1 year after course completion.',
    benefitSummary_hi: '12वीं पास छात्रों को तकनीकी, मेडिकल और सामान्य उच्च शिक्षा हेतु ₹4,00,000 तक का सरकारी गारंटी युक्त शिक्षा ऋण। छात्राओं, दिव्यांगों और ट्रांसजेंडरों हेतु मात्र 1% और छात्रों हेतु 4% सरल ब्याज दर, जिसकी वापसी पढ़ाई पूरी होने के 1 साल बाद शुरू होती है।',
    benefitAmount_en: 'Up to ₹4,00,000 education loan',
    benefitAmount_hi: '₹4,00,000 तक का रियायती शिक्षा ऋण',
    whoCanApply_en: '12th pass permanent residents of Bihar aged up to 25 years enrolled in recognized colleges or technical institutes across India.',
    whoCanApply_hi: 'बिहार के स्थायी निवासी 12वीं उत्तीर्ण छात्र जिनकी आयु 25 वर्ष से कम हो और जो देश भर के मान्यता प्राप्त संस्थानों में नामांकित हों।',
    applicationMode: 'Online via MNSSBY Portal + DRCC Verification',
    bannerImage: '/images/schemes/bihar-student-credit-card.webp',
    
    whatIsThis_en: 'Bihar Student Credit Card Scheme is a flagship scheme under Bihar Chief Minister Nitish Kumar’s "Saat Nischay" initiative (Aarthik Hal, Yuvaon Ko Bal), managed by the Bihar State Education Finance Corporation (BSEFC) to eliminate financial barriers to higher education.',
    whatIsThis_hi: 'बिहार स्टूडेंट क्रेडिट कार्ड योजना मुख्यमंत्री के सात निश्चय कार्यक्रम के तहत संचालित है। इसका उद्देश्य राज्य के गरीब और मेधावी युवाओं को उच्च शिक्षण संस्थानों में प्रवेश के समय आर्थिक तंगी के कारण पढ़ाई छोड़ने से बचाना है।',
    
    benefitsList_en: [
      'Collateral-free loan up to ₹4 Lakh backed 100% by the State Government of Bihar.',
      'Covers tuition fees, hostel expenses, books, and laptop costs.',
      'Ultra-low interest rate: only 1% for female and divyang students; 4% for boys.',
      'Moratorium period: Repayment starts only 1 year after course completion or 6 months after getting a job, whichever is earlier.'
    ],
    benefitsList_hi: [
      'बिहार सरकार की 100% गारंटी पर बिना किसी गिरवी या बंधक के ₹4 लाख तक का ऋण।',
      'कॉलेज फीस, हॉस्टल मेस खर्च, किताबें और लैपटॉप खरीदने का खर्च शामिल।',
      'अत्यंत कम ब्याज दर: छात्राओं व दिव्यांगों के लिए केवल 1% और छात्रों के लिए 4%।',
      'कोर्स पूरा होने के एक साल बाद अथवा नौकरी लगने के 6 महीने बाद ही किस्तों की शुरुआत।'
    ],
    
    eligibility: {
      eligibleIf_en: [
        'Applicant must be a permanent resident of Bihar.',
        'Must have passed Intermediate (12th grade) from a recognized board in Bihar or bordering area.',
        'Age must not exceed 25 years on the date of application.',
        'Admission must be secured in a recognized institution listed on the official BSEFC portal.'
      ],
      eligibleIf_hi: [
        'आवेदक बिहार राज्य का मूल निवासी हो।',
        'बिहार अथवा सीमावर्ती मान्यता प्राप्त बोर्ड से 12वीं कक्षा उत्तीर्ण की हो।',
        'आवेदन तिथि को अधिकतम आयु 25 वर्ष से अधिक न हो।',
        'बीहार शिक्षा वित्त निगम की अनुमोदित सूची में शामिल मान्यता प्राप्त कॉलेज में प्रवेश लिया हो।'
      ],
      notEligibleIf_en: [
        'Students taking admission in unapproved or fake colleges not listed on MNSSBY.',
        'Already availing another government education loan for the same degree.'
      ],
      notEligibleIf_hi: [
        'गैर-मान्यता प्राप्त संस्थानों में नामांकित छात्र।',
        'उसी डिग्री हेतु पहले से किसी अन्य सरकारी बैंक शिक्षा ऋण का लाभ ले रहे छात्र।'
      ]
    },
    
    requiredDocuments_en: [
      'Aadhaar Card of student and co-applicant (Father/Mother/Guardian)',
      '10th and 12th Board Marksheets and Certificates',
      'Proof of Admission and Fee Structure from the College / University',
      'Residential Certificate (Niwas Praman Patra) of Bihar',
      'Bank Account Passbook (Student and Co-applicant)',
      'PAN Card of student and co-applicant'
    ],
    requiredDocuments_hi: [
      'छात्र एवं सह-आवेदक (माता/पिता/अभिभावक) का आधार कार्ड',
      '10वीं और 12वीं बोर्ड की मूल अंकतालिका व प्रमाण पत्र',
      'कॉलेज/विश्वविद्यालय का आधिकारिक एडमिशन लेटर व फीस स्ट्रक्चर',
      'बिहार का स्थानीय निवास प्रमाण पत्र',
      'छात्र व सह-आवेदक का बैंक पासबुक',
      'छात्र व अभिभावक का पैन कार्ड'
    ],
    
    howToApply_en: [
      'Register on the official 7 Nischay portal at 7nishchay-yuvaupmission.bihar.gov.in.',
      'Fill out the online application for Bihar Student Credit Card and book an appointment slot at your District Registration and Counseling Centre (DRCC).',
      'Visit your DRCC on the scheduled date with original documents and photocopies for physical verification.',
      'BSEFC verifies documents and issues a sanction order.',
      'Tuition fees are disbursed directly to the college account, and living expenses to the student account.'
    ],
    howToApply_hi: [
      '7nishchay-yuvaupmission.bihar.gov.in पोर्टल पर नया पंजीकरण करें।',
      'स्टूडेंट क्रेडिट कार्ड फॉर्म भरकर अपने गृह जिले के डीआरसीसी (DRCC) केंद्र का अपॉइंटमेंट स्लॉट बुक करें।',
      'निर्धारित तिथि पर सभी मूल कागजात और फोटोकॉपी लेकर डीआरसीसी केंद्र में भौतिक सत्यापन करवाएं।',
      'शिक्षा वित्त निगम द्वारा जांच के बाद ऋण स्वीकृति आदेश जारी किया जाता है।',
      'कॉलेज फीस सीधे संस्थान के बैंक खाते में और हॉस्टल/किताब खर्च छात्र के खाते में भेजा जाता है।'
    ],
    
    statusCheckGuide_en: 'Track application stage on 7nishchay-yuvaupmission.bihar.gov.in under "Track Application Status" using your Registration ID or Aadhaar number.',
    statusCheckGuide_hi: '7nishchay-yuvaupmission.bihar.gov.in पर "Track Application Status" में जाकर रजिस्ट्रेशन नंबर या आधार डालकर स्टेटस ट्रैक करें।',
    officialStatusUrl: 'https://www.7nishchay-yuvaupmission.bihar.gov.in',
    
    commonProblems_en: [
      {
        problem: 'College not visible in approved institute drop-down list',
        solution: 'The institution must have NAAC "A" rating or NBA accreditation to be eligible for state funds. Check the institution eligibility register.'
      }
    ],
    commonProblems_hi: [
      {
        problem: 'पोर्टल पर कॉलेज का नाम सूची में नहीं आ रहा',
        solution: 'संस्थान के पास नैक (NAAC) या एनबीए की निर्धारित मान्यता होना आवश्यक है। अपने कॉलेज प्रशासन से संपर्क कर उन्हें पोर्टल पर निबंधन हेतु कहें।'
      }
    ],
    
    faqs_en: [
      {
        q: 'What happens if a student does not get a job immediately after college?',
        a: 'The moratorium period allows 1 full year after graduation before repayment starts. If unemployed, the applicant can apply for loan deferment as per BSEFC rules.'
      }
    ],
    faqs_hi: [
      {
        q: 'यदि पढ़ाई पूरी होने के तुरंत बाद नौकरी न लगे तो क्या तुरंत किस्त भरनी होगी?',
        a: 'नहीं। डिग्री पूरी होने के 1 साल बाद तक कोई ईएमआई नहीं लगती (Moratorium Period), जिससे छात्र को रोजगार ढूंढने का पर्याप्त समय मिलता है।'
      }
    ],
    
    officialSources: [
      {
        name: 'Bihar State Education Finance Corporation & MNSSBY',
        authority: 'Education Department, Government of Bihar',
        url: 'https://www.7nishchay-yuvaupmission.bihar.gov.in',
        verificationDate: 'October 28, 2026'
      }
    ],
    keywords: [
      'bihar student credit card', 'mnssby bihar', 'drcc appointment',
      'student credit card status', 'bihar education loan', 'bihar higher education scheme',
      'बिहार स्टूडेंट क्रेडिट कार्ड', 'डीआरसीसी बिहार', 'शिक्षा ऋण योजना'
    ],
    metaDescription_en: 'Bihar Student Credit Card Scheme: ₹4 Lakh education loan at 1% interest for girls / 4% for boys, eligible courses, DRCC appointment, and application tracking.',
    metaDescription_hi: 'बिहार स्टूडेंट क्रेडिट कार्ड योजना: ₹4 लाख तक का शिक्षा ऋण, छात्राओं हेतु मात्र 1% ब्याज, पात्रता, डीआरसीसी सत्यापन, आवश्यक दस्तावेज और स्टेटस।'
  },

{
  "id": "sukanya-samriddhi-yojana",
  "slug": "sukanya-samriddhi-yojana-girl-child",
  "title_en": "Sukanya Samriddhi Yojana (SSY) – Small Savings Scheme for Girl Child",
  "title_hi": "सुकन्या समृद्धि योजना (SSY) – बालिकाओं के लिए उच्च ब्याज बचत योजना",
  "shortTitle_en": "Sukanya Samriddhi Yojana",
  "shortTitle_hi": "सुकन्या समृद्धि योजना",
  "category": "women",
  "state": "all-india",
  "stateLabel_en": "Central Scheme (All India)",
  "stateLabel_hi": "केंद्रीय योजना (अखिल भारतीय)",
  "status": "Active",
  "lastVerified": "November 2, 2026",
  "benefitSummary_en": "Government-backed small savings scheme for girl children offering 8.2% annual compounded interest, triple tax exemption under Section 80C, and guaranteed maturity returns.",
  "benefitSummary_hi": "बालिकाओं के उज्ज्वल भविष्य के लिए 8.2% वार्षिक चक्रवृद्धि ब्याज, 80C के तहत पूर्ण आयकर छूट और परिपक्वता पर गारंटीड एकमुश्त राशि।",
  "benefitAmount_en": "8.2% compounding interest, up to ₹1.5 Lakh yearly deposit",
  "benefitAmount_hi": "8.2% वार्षिक चक्रवृद्धि ब्याज, ₹1.5 लाख प्रति वर्ष तक निवेश पर छूट",
  "whoCanApply_en": "Parents or legal guardians of a girl child aged between 0 to 10 years (maximum 2 girls per family).",
  "whoCanApply_hi": "0 से 10 वर्ष तक की बालिकाओं के माता-पिता या कानूनी अभिभावक (प्रति परिवार अधिकतम 2 बेटियां)।",
  "applicationMode": "Offline at Post Office or Designated Bank Branches",
    "bannerImage": "/images/schemes/sukanya-samriddhi-yojana.webp",
  "whatIsThis_en": "Sukanya Samriddhi Yojana is a flagship savings scheme under the \"Beti Bachao Beti Padhao\" mission. It empowers families to build a substantial education and marriage fund for their daughters with guaranteed high sovereign returns.",
  "whatIsThis_hi": "सुकन्या समृद्धि योजना केंद्र सरकार के \"बेटी बचाओ बेटी पढ़ाओ\" अभियान का प्रमुख हिस्सा है। यह बालिकाओं की उच्च शिक्षा और विवाह हेतु वित्तीय सुरक्षा सुनिश्चित करती है।",
  "benefitsList_en": [
    "High sovereign guaranteed interest rate of 8.2% compounded annually.",
    "Triple Tax Exemption (EEE) under Section 80C on deposit, interest earned, and final maturity.",
    "Low initial deposit threshold starting from just ₹250 per financial year.",
    "Partial withdrawal allowed up to 50% of balance once the girl turns 18 for higher education."
  ],
  "benefitsList_hi": [
    "8.2% की उच्चतम सुरक्षित वार्षिक चक्रवृद्धि ब्याज दर।",
    "आयकर अधिनियम की धारा 80C के तहत जमा, ब्याज और परिपक्वता पर शून्य कर (EEE श्रेणी)।",
    "सालाना मात्र ₹250 की न्यूनतम राशि से खाता खोलने की सुविधा।",
    "बेटी की आयु 18 वर्ष पूरी होने पर उच्च शिक्षा हेतु 50% तक आंशिक निकासी की अनुमति।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "Girl child is an Indian citizen and resident.",
      "Age of the girl child is strictly below 10 years at account opening.",
      "Maximum 2 accounts per family (triplets/twins exception allowed)."
    ],
    "eligibleIf_hi": [
      "बालिका भारत की स्थायी नागरिक हो।",
      "खाता खोलते समय बालिका की आयु 10 वर्ष से कम हो।",
      "एक परिवार से अधिकतम 2 बालिकाओं के खाते अनुमत (जुड़वां बहनों के मामले में छूट)।"
    ],
    "notEligibleIf_en": [
      "Girl child has crossed 10 years of age.",
      "Non-Resident Indian (NRI) status."
    ],
    "notEligibleIf_hi": [
      "बालिका की उम्र 10 वर्ष से अधिक हो चुकी हो।",
      "अनिवासी भारतीय (NRI) नागरिक।"
    ]
  },
  "requiredDocuments_en": [
    "Birth Certificate of the girl child (mandatory)",
    "Aadhaar card of parent or legal guardian",
    "PAN card of parent/guardian",
    "Proof of residence (Electricity bill, Passport, Ration Card)",
    "Passport size photographs of guardian and child"
  ],
  "requiredDocuments_hi": [
    "बालिका का जन्म प्रमाण पत्र (Birth Certificate)",
    "अभिभावक/माता-पिता का आधार कार्ड",
    "अभिभावक का पैन कार्ड",
    "स्थानीय निवास प्रमाण पत्र",
    "अभिभावक व बालिका की पासपोर्ट साइज फोटो"
  ],
  "howToApply_en": [
    "Visit your nearest India Post Office or empanelled commercial bank (SBI, PNB, BoB, etc.).",
    "Collect and fill the Sukanya Samriddhi Account Opening Form (Form-1).",
    "Attach copy of girl's birth certificate and guardian KYC documents.",
    "Deposit the opening amount (minimum ₹250 in cash or cheque).",
    "Receive the official SSY passbook with account number and interest credits recorded."
  ],
  "howToApply_hi": [
    "अपने निकटतम डाकघर (Post Office) या अधिकृत बैंक (SBI, PNB, आदि) शाखा में जाएं।",
    "सुकन्या समृद्धि खाता खोलने का फॉर्म (फॉर्म-1) भरें।",
    "बालिका के जन्म प्रमाण पत्र व अभिभावक के केवाईसी दस्तावेजों की प्रति संलग्न करें।",
    "न्यूनतम ₹250 की आरंभिक राशि जमा करें।",
    "खाता खुलने पर पासबुक प्राप्त करें जिसमें जमा व ब्याज का विवरण दर्ज होता है।"
  ],
  "statusCheckGuide_en": "Check your SSY account balance and interest credits directly through Post Office IPPB mobile banking or your linked net banking portal.",
  "statusCheckGuide_hi": "डाकघर आईपीपीबी मोबाइल बैंकिंग या अपने संबंधित बैंक के इंटरनेट बैंकिंग पोर्टल से सीधे बैलेंस और ब्याज जांचें।",
  "officialStatusUrl": "https://www.indiapost.gov.in",
  "commonProblems_en": [
    {
      "problem": "Account marked default due to missed annual payment",
      "solution": "Pay ₹50 penalty along with the minimum ₹250 deposit for each missed year at your post office branch."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "सालाना ₹250 जमा न करने पर खाता डिफॉल्ट होना",
      "solution": "संबंधित डाकघर या बैंक में प्रति वर्ष ₹50 का जुर्माना और ₹250 न्यूनतम जमा करके खाता पुनः सक्रिय कराएं।"
    }
  ],
  "faqs_en": [
    {
      "q": "For how many years do I need to deposit money in SSY?",
      "a": "Deposits are required for 15 years from account opening. The account continues to earn interest until maturity at 21 years."
    }
  ],
  "faqs_hi": [
    {
      "q": "सुकन्या खाते में कितने साल तक पैसे जमा करने होते हैं?",
      "a": "खाता खुलने की तिथि से केवल 15 वर्षों तक राशि जमा करनी होती है। इसके बाद 21 वर्ष की परिपक्वता तक ब्याज जुड़ता रहता है।"
    }
  ],
  "officialSources": [
    {
      "name": "Ministry of Finance & Department of Posts",
      "authority": "Government of India",
      "url": "https://www.indiapost.gov.in",
      "verificationDate": "November 2, 2026"
    }
  ],
  "keywords": [
    "sukanya samriddhi yojana",
    "ssy interest rate",
    "post office scheme for girls",
    "sukanya account opening",
    "सुकन्या समृद्धि योजना",
    "सुकन्या ब्याज दर"
  ],
  "metaDescription_en": "Sukanya Samriddhi Yojana: 8.2% interest rate, eligibility criteria, tax exemptions under 80C, required documents, and post office account guide.",
  "metaDescription_hi": "सुकन्या समृद्धि योजना: 8.2% ब्याज, खाता खोलने के नियम, आवश्यक दस्तावेज, आयकर छूट और पोस्ट ऑफिस फॉर्म गाइड।"
},

{
  "id": "pm-surya-ghar",
  "slug": "pm-surya-ghar-muft-bijli-yojana",
  "title_en": "PM Surya Ghar: Muft Bijli Yojana – Rooftop Solar Subsidy Scheme",
  "title_hi": "पीएम सूर्य घर: मुफ्त बिजली योजना – रूफटॉप सोलर सब्सिडी योजना",
  "shortTitle_en": "PM Surya Ghar Yojana",
  "shortTitle_hi": "पीएम सूर्य घर योजना",
  "category": "housing",
  "state": "all-india",
  "stateLabel_en": "Central Scheme (All India)",
  "stateLabel_hi": "केंद्रीय योजना (अखिल भारतीय)",
  "status": "Active",
  "lastVerified": "November 1, 2026",
  "benefitSummary_en": "Direct central subsidy of up to ₹78,000 for installing residential rooftop solar panels, providing up to 300 units of free electricity every month and grid export earnings.",
  "benefitSummary_hi": "घरों की छत पर सोलर पैनल लगाने हेतु ₹78,000 तक की प्रत्यक्ष सरकारी सब्सिडी, प्रति माह 300 यूनिट तक मुफ्त बिजली और अतिरिक्त बिजली बेचने की सुविधा।",
  "benefitAmount_en": "Up to ₹78,000 direct subsidy & 300 free monthly units",
  "benefitAmount_hi": "₹78,000 तक सीधी बैंक सब्सिडी और 300 यूनिट मुफ्त बिजली",
  "whoCanApply_en": "Indian households with a valid residential electricity connection and suitable rooftop space.",
  "whoCanApply_hi": "घरेलू बिजली कनेक्शन और उपयुक्त छत (Rooftop) वाले सभी भारतीय परिवार।",
  "applicationMode": "Online via pmsuryaghar.gov.in national portal",
    "bannerImage": "/images/schemes/pm-surya-ghar.webp",
  "whatIsThis_en": "PM Surya Ghar: Muft Bijli Yojana is a national clean energy initiative aimed at solarizing 1 crore households across India with up to ₹78,000 direct DBT subsidy.",
  "whatIsThis_hi": "पीएम सूर्य घर मुफ्त बिजली योजना देश के 1 करोड़ घरों को सौर ऊर्जा से जोड़कर बिजली बिल शून्य करने की महत्वाकांक्षी राष्ट्रीय योजना है।",
  "benefitsList_en": [
    "₹30,000 subsidy for 1 kW systems, ₹60,000 for 2 kW, and maximum ₹78,000 for 3 kW or higher systems.",
    "Save ₹15,000 to ₹25,000 annually on domestic electricity bills.",
    "Low-interest collateral-free loans at ~7% from designated public sector banks.",
    "Sell excess generated electricity back to DISCOM via net metering."
  ],
  "benefitsList_hi": [
    "1 किलोवाट पर ₹30,000, 2 किलोवाट पर ₹60,000 तथा 3 किलोवाट या अधिक पर ₹78,000 की सीधी सब्सिडी।",
    "सालाना ₹15,000 से ₹25,000 तक बिजली बिल की स्थायी बचत।",
    "राष्ट्रीयकृत बैंकों से 7% की रियायती ब्याज दर पर बिना गारंटी सोलर लोन।",
    "नेट मीटरिंग के जरिए अतिरिक्त उत्पादित बिजली ग्रिड को बेचकर अतिरिक्त कमाई।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "Applicant must be an Indian citizen holding a residential power connection.",
      "Adequate shadow-free rooftop space available.",
      "Electricity consumer connection must be in the applicant's or family's name."
    ],
    "eligibleIf_hi": [
      "आवेदक के नाम से वैध घरेलू बिजली कनेक्शन होना चाहिए।",
      "छत पर पर्याप्त छाया-मुक्त स्थान उपलब्ध हो।",
      "बिजली बिल पर कोई पुराना कानूनी बकाया न हो।"
    ],
    "notEligibleIf_en": [
      "Commercial and industrial electricity connections.",
      "Already availed full central capital subsidy for rooftop solar earlier."
    ],
    "notEligibleIf_hi": [
      "व्यावसायिक अथवा औद्योगिक बिजली कनेक्शन धारक।",
      "पूर्व में उसी छत हेतु केंद्रीय सोलर सब्सिडी प्राप्त कर चुके उपभोक्ता।"
    ]
  },
  "requiredDocuments_en": [
    "Latest residential electricity bill (Consumer CA/Account Number)",
    "Aadhaar card of consumer",
    "Bank account passbook/cancelled cheque for DBT subsidy credit",
    "Rooftop ownership/possession proof"
  ],
  "requiredDocuments_hi": [
    "नवीनतम घरेलू बिजली बिल (उपभोक्ता संख्या / CA Number)",
    "बिजली कनेक्शन धारक का आधार कार्ड",
    "सब्सिडी ट्रांसफर हेतु बैंक पासबुक/कैंसिल्ड चेक",
    "मकान/छत स्वामित्व का प्रमाण पत्र"
  ],
  "howToApply_en": [
    "Register on the national portal pmsuryaghar.gov.in with your state, DISCOM name, and electricity consumer number.",
    "Apply online for Rooftop Solar installation and wait for technical feasibility approval from your DISCOM.",
    "Install the solar plant through any registered/empanelled vendor in your district.",
    "Submit installation details and apply for Net Metering inspection.",
    "Following commissioning certificate, upload bank details to receive subsidy directly in bank account within 30 days."
  ],
  "howToApply_hi": [
    "आधिकारिक पोर्टल pmsuryaghar.gov.in पर राज्य, बिजली कंपनी और कंज्यूमर नंबर दर्ज कर पंजीकरण करें।",
    "रूफटॉप सोलर के लिए आवेदन करें और डिस्कॉम से तकनीकी स्वीकृति (Feasibility) प्राप्त करें।",
    "अपने जिले के किसी भी पंजीकृत वेंडर से सोलर सिस्टम इंस्टॉल कराएं।",
    "नेट मीटरिंग निरीक्षण के बाद कमीशनिंग सर्टिफिकेट प्राप्त करें।",
    "पोर्टल पर बैंक विवरण सबमिट करें; 30 दिनों के भीतर सीधी सब्सिडी खाते में प्राप्त होगी।"
  ],
  "statusCheckGuide_en": "Log in to your dashboard on pmsuryaghar.gov.in using your mobile number and consumer ID to track application, inspection, and subsidy release status.",
  "statusCheckGuide_hi": "pmsuryaghar.gov.in पर मोबाइल नंबर से लॉगिन कर आवेदन, नेट मीटर अप्रूवल और सब्सिडी ट्रांसफर का स्टेटस ट्रैक करें।",
  "officialStatusUrl": "https://pmsuryaghar.gov.in",
  "commonProblems_en": [
    {
      "problem": "Delay in DISCOM net meter installation",
      "solution": "Raise an automated grievance on the PM Surya Ghar grievance portal with your consumer ID."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "डिस्कॉम द्वारा नेट मीटर लगाने में देरी",
      "solution": "पीएम सूर्य घर पोर्टल के Grievance सेक्शन में सीधे कंज्यूमर नंबर के साथ शिकायत दर्ज करें।"
    }
  ],
  "faqs_en": [
    {
      "q": "How much roof area is needed for a 2 kW solar setup?",
      "a": "Approximately 200 square feet of shadow-free roof area is required for a 2 kW solar plant."
    }
  ],
  "faqs_hi": [
    {
      "q": "2 किलोवाट सोलर पैनल लगाने के लिए कितनी छत की जरूरत होती है?",
      "a": "2 किलोवाट सिस्टम के लिए लगभग 180 से 200 वर्ग फुट छाया-रहित छत की आवश्यकता होती है।"
    }
  ],
  "officialSources": [
    {
      "name": "Ministry of New and Renewable Energy (MNRE)",
      "authority": "Government of India",
      "url": "https://pmsuryaghar.gov.in",
      "verificationDate": "November 1, 2026"
    }
  ],
  "keywords": [
    "pm surya ghar",
    "rooftop solar subsidy",
    "free electricity scheme",
    "solar panel subsidy 78000",
    "पीएम सूर्य घर",
    "रूफटॉप सोलर योजना"
  ],
  "metaDescription_en": "PM Surya Ghar Muft Bijli Yojana: Get up to ₹78,000 rooftop solar subsidy, 300 free electricity units, eligibility criteria, and online application steps.",
  "metaDescription_hi": "पीएम सूर्य घर योजना: छत पर सोलर पैनल लगाने पर ₹78,000 तक सब्सिडी, 300 यूनिट मुफ्त बिजली, ऑनलाइन आवेदन और स्टेटस।"
},

{
  "id": "pm-mudra-yojana",
  "slug": "pm-mudra-yojana-business-loan",
  "title_en": "Pradhan Mantri MUDRA Yojana (PMMY) – Collateral-Free Micro Business Loans",
  "title_hi": "प्रधानमंत्री मुद्रा योजना (PMMY) – बिना गारंटी सूक्ष्म व्यापार ऋण",
  "shortTitle_en": "PM MUDRA Yojana",
  "shortTitle_hi": "पीएम मुद्रा योजना",
  "category": "employment",
  "state": "all-india",
  "stateLabel_en": "Central Scheme (All India)",
  "stateLabel_hi": "केंद्रीय योजना (अखिल भारतीय)",
  "status": "Active",
  "lastVerified": "October 30, 2026",
  "benefitSummary_en": "Institutional bank credit up to ₹20 Lakh without collateral for micro, small, and nano enterprises across Shishu, Kishore, Tarun, and Tarun Plus categories.",
  "benefitSummary_hi": "छोटे उद्यमियों, व्यापारियों और दुकानदारों को बिना किसी गारंटी के ₹20 लाख तक का रियायती बैंक ऋण (शिशु, किशोर, तरुण व तरुण प्लस श्रेणियां)।",
  "benefitAmount_en": "Collateral-free loans up to ₹20 Lakh",
  "benefitAmount_hi": "बिना गारंटी ₹50,000 से ₹20 लाख तक का व्यवसाय ऋण",
  "whoCanApply_en": "Non-farm micro and small entrepreneurs in manufacturing, trading, retail, transport, and service sectors.",
  "whoCanApply_hi": "गैर-कृषि सूक्ष्म उद्यम, छोटे दुकानदार, कारीगर, सर्विस प्रोवाइडर और नए स्टार्टअप उद्यमी।",
  "applicationMode": "Online via udyamimitra.in or offline at commercial/Gramin banks",
    "bannerImage": "/images/schemes/pm-mudra-yojana.webp",
  "whatIsThis_en": "PMMY funds the unfunded by providing seamless bank finance up to ₹20 Lakh to informal micro-enterprises to generate grassroots employment without requiring property collateral.",
  "whatIsThis_hi": "प्रधानमंत्री मुद्रा योजना देश के छोटे व्यापारियों और स्वरोजगार करने वाले नागरिकों को बिना किसी संपत्ति गारंटी के आसान व्यापार ऋण उपलब्ध कराती है।",
  "benefitsList_en": [
    "Shishu loan category: Up to ₹50,000 for starting new micro ventures.",
    "Kishore loan category: ₹50,000 to ₹5 Lakh for expanding existing businesses.",
    "Tarun & Tarun Plus: ₹5 Lakh to ₹20 Lakh for established micro enterprises.",
    "Zero collateral or third-party guarantor required for eligible enterprises."
  ],
  "benefitsList_hi": [
    "शिशु ऋण: नया व्यापार शुरू करने के लिए ₹50,000 तक का लोन।",
    "किशोर ऋण: स्थापित व्यवसाय के विस्तार हेतु ₹50,000 से ₹5 लाख तक का लोन।",
    "तरुण व तरुण प्लस: कारोबार को बढ़ाने हेतु ₹5 लाख से ₹20 लाख तक का ऋण।",
    "ऋण के लिए किसी जमीन, संपत्ति या थर्ड-पार्टी गारंटर की जरूरत नहीं।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "Indian citizen with a viable business plan for a non-farm income-generating activity.",
      "Applicant must not be a defaulter with any financial institution.",
      "Age 18 years and above."
    ],
    "eligibleIf_hi": [
      "भारतीय नागरिक जिसकी गैर-कृषि व्यावसायिक योजना व्यावहारिक हो।",
      "आवेदक किसी भी बैंक अथवा वित्तीय संस्थान का डिफॉल्टर न हो।",
      "आयु 18 वर्ष या उससे अधिक।"
    ],
    "notEligibleIf_en": [
      "Agricultural land purchase or direct crop production activities (covered under KCC).",
      "Large corporate entities."
    ],
    "notEligibleIf_hi": [
      "सीधे फसल उत्पादन या कृषि भूमि खरीद (यह किसान क्रेडिट कार्ड के अंतर्गत आता है)।",
      "बड़े कॉरपोरेट संस्थान।"
    ]
  },
  "requiredDocuments_en": [
    "Proof of identity (Aadhaar / Voter ID / PAN)",
    "Proof of residence (Electricity bill, Ration card, Aadhaar)",
    "Business address proof & Udyam Registration (for existing units)",
    "Last 6 months bank statement",
    "Quotation of machinery/items to be purchased"
  ],
  "requiredDocuments_hi": [
    "पहचान प्रमाण (आधार कार्ड / पैन कार्ड / वोटर कार्ड)",
    "निवास प्रमाण पत्र",
    "व्यवसाय स्थल का प्रमाण व उद्यम पंजीकरण (Udyam Registration)",
    "पिछले 6 महीने का बैंक खाता विवरण (Bank Statement)",
    "खरीदे जाने वाले सामान/मशीनरी का कोटेशन"
  ],
  "howToApply_en": [
    "Prepare a business project summary with projected revenue and machinery/stock costs.",
    "Apply online on the official portal udyamimitra.in or visit any scheduled commercial bank or RRB branch.",
    "Fill the PMMY application form and submit KYC and business quotations.",
    "Upon sanction, receive the MUDRA Card (RuPay Debit Card) to withdraw working capital as needed."
  ],
  "howToApply_hi": [
    "अपने व्यवसाय का प्रोजेक्ट विवरण व आवश्यक सामान/स्टॉक का खर्च तैयार करें।",
    "udyamimitra.in पोर्टल पर ऑनलाइन आवेदन करें अथवा किसी भी बैंक शाखा में जाएं।",
    "मुद्रा लोन फॉर्म भरकर आवश्यक दस्तावेज व कोटेशन संलग्न करें।",
    "मंजूरी मिलने पर मुद्रा रुपे कार्ड (MUDRA Card) प्राप्त करें जिससे कार्यशील पूंजी कभी भी निकाली जा सके।"
  ],
  "statusCheckGuide_en": "Track your application status online on udyamimitra.in using your Application Reference Number.",
  "statusCheckGuide_hi": "udyamimitra.in पोर्टल पर अपने एप्लीकेशन रेफरेंस नंबर के जरिए लोन प्रोसेसिंग स्टेटस ट्रैक करें।",
  "officialStatusUrl": "https://udyamimitra.in",
  "commonProblems_en": [
    {
      "problem": "Branch demanding collateral despite official guidelines",
      "solution": "Lodge a complaint on the DFS portal or National MUDRA Toll-Free Helpline: 1800-180-1111."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "बैंक शाखा द्वारा गारंटी या गिरवी संपत्ति की मांग करना",
      "solution": "मुद्रा योजना के राष्ट्रीय टोल-फ्री नंबर 1800-180-1111 अथवा वित्तीय सेवा विभाग (DFS) पोर्टल पर शिकायत दर्ज कराएं।"
    }
  ],
  "faqs_en": [
    {
      "q": "Is a collateral or guarantor needed for a Mudra loan?",
      "a": "No collateral is required for loans up to ₹20 Lakh under PMMY as credit guarantee is provided by CGFMU."
    }
  ],
  "faqs_hi": [
    {
      "q": "क्या मुद्रा लोन के लिए किसी गारंटी या गिरवी की आवश्यकता होती है?",
      "a": "नहीं। भारत सरकार के CGFMU ट्रस्ट द्वारा क्रेडिट गारंटी प्रदान की जाती है, इसलिए किसी संपत्ति को गिरवी रखने की आवश्यकता नहीं है।"
    }
  ],
  "officialSources": [
    {
      "name": "Ministry of Finance & MUDRA Ltd.",
      "authority": "Government of India",
      "url": "https://www.mudra.org.in",
      "verificationDate": "October 30, 2026"
    }
  ],
  "keywords": [
    "pm mudra yojana",
    "mudra loan eligibility",
    "shishu kishore tarun loan",
    "collateral free business loan",
    "मुद्रा लोन",
    "पीएम मुद्रा योजना"
  ],
  "metaDescription_en": "PM MUDRA Yojana: Apply for collateral-free business loans up to ₹20 Lakh under Shishu, Kishore, and Tarun categories. Eligibility rules and online portal.",
  "metaDescription_hi": "पीएम मुद्रा योजना: ₹20 लाख तक का बिना गारंटी व्यापार ऋण, शिशु, किशोर व तरुण लोन की पात्रता, दस्तावेज और ऑनलाइन आवेदन।"
},

{
  "id": "pm-fasal-bima-yojana",
  "slug": "pm-fasal-bima-yojana-crop-insurance",
  "title_en": "Pradhan Mantri Fasal Bima Yojana (PMFBY) – Comprehensive Crop Insurance",
  "title_hi": "प्रधानमंत्री फसल बीमा योजना (PMFBY) – व्यापक फसल सुरक्षा व क्षतिपूर्ति",
  "shortTitle_en": "PM Fasal Bima Yojana",
  "shortTitle_hi": "पीएम फसल बीमा योजना",
  "category": "farmers",
  "state": "all-india",
  "stateLabel_en": "Central Scheme (All India)",
  "stateLabel_hi": "केंद्रीय योजना (अखिल भारतीय)",
  "status": "Active",
  "lastVerified": "October 29, 2026",
  "benefitSummary_en": "Comprehensive financial protection for farmers against non-preventable natural risks (drought, flood, hailstorm, pests) with low farmer premium of 1.5% to 2%.",
  "benefitSummary_hi": "बाढ़, सूखा, ओलावृष्टि और कीट प्रकोप से फसल क्षति पर पूर्ण बीमा सुरक्षा; किसानों हेतु मात्र 1.5% से 2% की रियायती प्रीमियम दर।",
  "benefitAmount_en": "Full sum insured compensation for crop loss",
  "benefitAmount_hi": "फसल क्षति पर बीमित राशि का 100% तक प्रत्यक्ष बैंक भुगतान",
  "whoCanApply_en": "All farmers cultivating notified crops in notified areas (both loanee and non-loanee farmers).",
  "whoCanApply_hi": "अधिसूचित क्षेत्रों में अधिसूचित फसल उगाने वाले सभी किसान (बटाईदार व गैर-ऋणी किसान भी शामिल)।",
  "applicationMode": "Online via pmfby.gov.in, CSC centers, or banks",
    "bannerImage": "/images/schemes/pm-fasal-bima-yojana.webp",
  "whatIsThis_en": "PMFBY provides uniform, affordable crop insurance cover to insulate Indian cultivators against catastrophic yield losses arising from unpredictable natural disasters.",
  "whatIsThis_hi": "प्रधानमंत्री फसल बीमा योजना प्राकृतिक आपदाओं से किसानों की फसलों के नुकसान की भरपाई करने वाली देश की सबसे बड़ी फसल सुरक्षा योजना है।",
  "benefitsList_en": [
    "Ultra-low premium: only 2% for Kharif crops, 1.5% for Rabi crops, and 5% for annual horticultural crops.",
    "Balance premium shared equally between Central and State Governments.",
    "Covers prevented sowing, mid-season adversity, localized calamities, and post-harvest losses.",
    "Claim amounts directly credited to farmer's Aadhaar-linked bank accounts."
  ],
  "benefitsList_hi": [
    "न्यूनतम प्रीमियम दर: खरीफ हेतु 2%, रबी हेतु 1.5% तथा बागवानी फसलों हेतु 5%।",
    "शेष प्रीमियम का 100% भुगतान केंद्र व राज्य सरकार द्वारा वहन किया जाता है।",
    "बुवाई न होने, खड़ी फसल के नुकसान तथा कटाई उपरांत 14 दिनों तक के नुकसान की भरपाई।",
    "क्षतिपूर्ति राशि सीधे किसान के आधार-लिंक बैंक खाते में डीबीटी द्वारा अंतरित।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "Cultivating notified crops in the notified district/tehsil for the season.",
      "Holding valid land records (RoR) or registered sharecropper agreement."
    ],
    "eligibleIf_hi": [
      "अधिसूचित क्षेत्र में सीजन की अधिसूचित फसल की खेती कर रहे हों।",
      "वैध भू-स्वामित्व रिकॉर्ड (खतौनी/जमाबंदी) अथवा बटाईदार अनुबंध धारक।"
    ],
    "notEligibleIf_en": [
      "Non-notified crops or applications submitted after the cutoff date."
    ],
    "notEligibleIf_hi": [
      "गैर-अधिसूचित फसलें अथवा अंतिम कट-ऑफ तिथि के बाद प्रस्तुत आवेदन।"
    ]
  },
  "requiredDocuments_en": [
    "Landholding documents (Khasra/Khata/RoR)",
    "Sowing certificate / self-declaration of crop sown",
    "Aadhaar card copy",
    "Bank passbook copy",
    "KCC loan book (for loanee farmers)"
  ],
  "requiredDocuments_hi": [
    "भूमि स्वामित्व दस्तावेज (खसरा/खतौनी/भू-अभिलेख)",
    "फसल बुवाई प्रमाण पत्र (पटवारी/कृषि अधिकारी या स्व-घोषणा)",
    "आधार कार्ड",
    "बैंक खाता पासबुक",
    "केसीसी ऋण पुस्तिका (ऋणी किसानों हेतु)"
  ],
  "howToApply_en": [
    "Visit the national crop portal pmfby.gov.in or nearest Common Service Centre (CSC).",
    "Select season (Kharif/Rabi), enter Aadhaar number, and link land khasra numbers.",
    "Upload sowing certificate and pay the nominal farmer share premium.",
    "Keep the policy receipt number safe for claim intimations."
  ],
  "howToApply_hi": [
    "आधिकारिक पोर्टल pmfby.gov.in पर जाएं या नजदीकी सीएससी (CSC) केंद्र पर संपर्क करें।",
    "सीजन व फसल का चयन कर जमीन का खसरा नंबर व आधार दर्ज करें।",
    "बुवाई प्रमाण पत्र अपलोड करें और रियायती प्रीमियम का ऑनलाइन भुगतान करें।",
    "बीमा पॉलिसी रसीद प्राप्त करें और क्लेम की स्थिति में इसका उपयोग करें।"
  ],
  "statusCheckGuide_en": "Check your crop insurance application and claim status on pmfby.gov.in using your Application ID or Policy Number.",
  "statusCheckGuide_hi": "pmfby.gov.in पोर्टल पर \"Application Status\" पर क्लिक करके अपनी पॉलिसी संख्या से क्लेम स्टेटस जांचें।",
  "officialStatusUrl": "https://pmfby.gov.in",
  "commonProblems_en": [
    {
      "problem": "Crop loss due to localized calamity not reported within 72 hours",
      "solution": "Immediately call PMFBY Crop Insurance App or toll-free number 14447 within 72 hours of damage."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "स्थानीय आपदा (ओलावृष्टि/जलभराव) की 72 घंटे में सूचना न देना",
      "solution": "फसल क्षति के 72 घंटे के भीतर \"Crop Insurance App\" या टोल-फ्री 14447 पर तुरंत सूचना दर्ज कराना अनिवार्य है।"
    }
  ],
  "faqs_en": [
    {
      "q": "How within what time should a crop loss intimation be filed?",
      "a": "Localized crop loss must be intimated within 72 hours via the Crop Insurance mobile app or toll-free helpline 14447."
    }
  ],
  "faqs_hi": [
    {
      "q": "फसल खराब होने पर कितने समय में सूचना देनी होती है?",
      "a": "प्राकृतिक आपदा के 72 घंटे के भीतर Crop Insurance ऐप अथवा टोल-फ्री नंबर 14447 पर सूचना दर्ज कराना अनिवार्य है।"
    }
  ],
  "officialSources": [
    {
      "name": "Ministry of Agriculture and Farmers Welfare",
      "authority": "Government of India",
      "url": "https://pmfby.gov.in",
      "verificationDate": "October 29, 2026"
    }
  ],
  "keywords": [
    "pm fasal bima yojana",
    "pmfby claim status",
    "crop insurance online apply",
    "fasal bima premium",
    "प्रधानमंत्री फसल बीमा योजना",
    "फसल बीमा क्लेम"
  ],
  "metaDescription_en": "PM Fasal Bima Yojana (PMFBY): Crop insurance coverage, premium rates for Kharif and Rabi, 72-hour claim reporting, and policy status portal.",
  "metaDescription_hi": "प्रधानमंत्री फसल बीमा योजना: फसलों के नुकसान पर बीमा क्लेम, 1.5% प्रीमियम दर, 72 घंटे में सूचना नियम और स्टेटस जांच।"
},

{
  "id": "pm-ujjwala-yojana",
  "slug": "pm-ujjwala-yojana-free-gas-connection",
  "title_en": "Pradhan Mantri Ujjwala Yojana 2.0 (PMUY) – Deposit-Free LPG Connection",
  "title_hi": "प्रधानमंत्री उज्ज्वला योजना 2.0 (PMUY) – मुफ्त एलपीजी गैस कनेक्शन व सब्सिडी",
  "shortTitle_en": "PM Ujjwala Yojana 2.0",
  "shortTitle_hi": "पीएम उज्ज्वला योजना 2.0",
  "category": "women",
  "state": "all-india",
  "stateLabel_en": "Central Scheme (All India)",
  "stateLabel_hi": "केंद्रीय योजना (अखिल भारतीय)",
  "status": "Active",
  "lastVerified": "October 27, 2026",
  "benefitSummary_en": "Deposit-free LPG cylinder connection, free stove (hotplate), first refill free, and ongoing direct subsidy of ₹300 per refill for eligible rural women.",
  "benefitSummary_hi": "गरीब ग्रामीण महिलाओं को मुफ्त गैस कनेक्शन, पहला भरा सिलेंडर और चूल्हा निःशुल्क, साथ ही ₹300 प्रति सिलेंडर की निरंतर डीबीटी सब्सिडी।",
  "benefitAmount_en": "Free LPG connection + ₹300 subsidy per refill",
  "benefitAmount_hi": "मुफ्त गैस कनेक्शन + ₹300 प्रति सिलेंडर सब्सिडी",
  "whoCanApply_en": "Adult women belonging to BPL/poor households without any existing LPG connection in the family.",
  "whoCanApply_hi": "गरीब परिवारों की वयस्क महिलाएं (18+ वर्ष) जिनके घर में पहले से कोई गैस कनेक्शन न हो।",
  "applicationMode": "Online via pmuy.gov.in or offline at nearest LPG distributor",
    "bannerImage": "/images/schemes/pm-ujjwala-yojana.webp",
  "whatIsThis_en": "PMUY 2.0 provides clean cooking fuel to underprivileged households, protecting women and children from hazardous indoor smoke and offering substantial refill subsidies.",
  "whatIsThis_hi": "उज्ज्वला योजना ग्रामीण महिलाओं को चूल्हे के जहरीले धुएं से मुक्ति दिलाकर स्वच्छ ईंधन उपलब्ध कराने वाली देशव्यापी सामाजिक कल्याण योजना है।",
  "benefitsList_en": [
    "Deposit-free LPG connection including cylinder, regulator, and safety hose.",
    "First 14.2 kg LPG cylinder refill provided completely free of cost.",
    "Free two-burner gas stove (hotplate) supplied with the connection.",
    "Direct bank subsidy of ₹300 per domestic cylinder for up to 12 refills per year."
  ],
  "benefitsList_hi": [
    "बिना किसी सिक्योरिटी डिपॉजिट के नया एलपीजी कनेक्शन, रेगुलेटर व पाइप।",
    "पहला 14.2 किग्रा भरा गैस सिलेंडर पूर्णतः मुफ्त।",
    "कनेक्शन के साथ मुफ्त 2-बर्नर गैस चूल्हा (Hotplate)।",
    "प्रति वर्ष 12 सिलेंडरों तक ₹300 प्रति रिफिल सीधी बैंक खाता सब्सिडी।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "Applicant must be an adult woman aged 18 years or above.",
      "No other LPG connection exists in the same household.",
      "Belongs to SC/ST, PMAY beneficiary, Forest Dwellers, Most Backward Classes, or verified poor household."
    ],
    "eligibleIf_hi": [
      "आवेदक महिला की आयु 18 वर्ष या उससे अधिक हो।",
      "परिवार में किसी अन्य सदस्य के नाम पर पहले से एलपीजी कनेक्शन न हो।",
      "एससी/एसटी, पीएम आवास लाभार्थी, अंत्योदय या 14-सूत्रीय गरीब परिवार श्रेणी में आती हों।"
    ],
    "notEligibleIf_en": [
      "Family already has an active LPG connection from Indane, Bharat Gas, or HP Gas."
    ],
    "notEligibleIf_hi": [
      "परिवार में पहले से किसी भी कंपनी का सक्रिय गैस कनेक्शन मौजूद हो।"
    ]
  },
  "requiredDocuments_en": [
    "Aadhaar card of woman applicant and adult family members",
    "Ration Card / Family Composition Certificate",
    "Aadhaar-linked Bank Account Passbook (IFSC & Account number)",
    "Passport size photograph of applicant"
  ],
  "requiredDocuments_hi": [
    "आवेदक महिला व परिवार के वयस्क सदस्यों का आधार कार्ड",
    "राशन कार्ड अथवा परिवार रजिस्टर की नकल",
    "डीबीटी-सक्रिय बैंक खाता पासबुक",
    "आवेदक की पासपोर्ट साइज फोटो"
  ],
  "howToApply_en": [
    "Visit the official website pmuy.gov.in or your local LPG agency (Indane, HP, Bharat Gas).",
    "Fill Ujjwala 2.0 Application Form with family Aadhaar details.",
    "Submit the form along with ration card and bank passbook copies.",
    "After biometric e-KYC and deduplication check, collect your free gas connection and stove."
  ],
  "howToApply_hi": [
    "pmuy.gov.in पोर्टल पर जाएं या नजदीकी गैस एजेंसी (Indane, HP, Bharat Gas) में जाएं।",
    "उज्ज्वला 2.0 का आवेदन फॉर्म भरकर परिवार के सदस्यों का आधार दर्ज करें।",
    "राशन कार्ड व बैंक पासबुक की प्रतिलिपि जमा करें।",
    "बायोमेट्रिक ई-केवाईसी पूर्ण होने के बाद एजेंसी से मुफ्त गैस कनेक्शन और चूल्हा प्राप्त करें।"
  ],
  "statusCheckGuide_en": "Inquire directly at your registered LPG distributor with your Consumer ID or Mobile Number.",
  "statusCheckGuide_hi": "अपने रजिस्टर्ड मोबाइल नंबर या एप्लीकेशन नंबर के साथ गैस एजेंसी पर जाकर स्टेटस जांचें।",
  "officialStatusUrl": "https://pmuy.gov.in",
  "commonProblems_en": [
    {
      "problem": "Subsidy not credited in bank account",
      "solution": "Ensure your bank account is Aadhaar seeded with active DBT mandate on the NPCI mapper."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "सिलेंडर सब्सिडी बैंक खाते में न आना",
      "solution": "अपने बैंक में जाकर आधार सीडिंग (Aadhaar Seeding) और NPCI DBT मैपिंग चेक कराएं।"
    }
  ],
  "faqs_en": [
    {
      "q": "Can migrant families apply for Ujjwala 2.0 without local address proof?",
      "a": "Yes. Ujjwala 2.0 allows migrant workers to submit a self-declaration for residential address without demanding local ration cards."
    }
  ],
  "faqs_hi": [
    {
      "q": "क्या प्रवासी परिवार बिना स्थानीय निवास प्रमाण पत्र के उज्ज्वला 2.0 में आवेदन कर सकते हैं?",
      "a": "हाँ। उज्ज्वला 2.0 में प्रवासी कामगारों के लिए स्व-घोषणा (Self-Declaration) के आधार पर कनेक्शन देने का विशेष प्रावधान है।"
    }
  ],
  "officialSources": [
    {
      "name": "Ministry of Petroleum and Natural Gas (MoPNG)",
      "authority": "Government of India",
      "url": "https://pmuy.gov.in",
      "verificationDate": "October 27, 2026"
    }
  ],
  "keywords": [
    "pm ujjwala yojana",
    "ujjwala 2.0 free cylinder",
    "lpg gas subsidy 300",
    "free gas connection",
    "प्रधानमंत्री उज्ज्वला योजना",
    "मुफ्त गैस कनेक्शन"
  ],
  "metaDescription_en": "PM Ujjwala Yojana 2.0: Free LPG gas connection, ₹300 refill subsidy, eligibility criteria, required documents, and agency application process.",
  "metaDescription_hi": "प्रधानमंत्री उज्ज्वला योजना 2.0: मुफ्त गैस कनेक्शन, ₹300 सिलेंडर सब्सिडी, आवश्यक दस्तावेज और ऑनलाइन व ऑफलाइन आवेदन प्रक्रिया।"
},

{
  "id": "ladli-behna-yojana",
  "slug": "ladli-behna-yojana-madhya-pradesh",
  "title_en": "Mukhyamantri Ladli Behna Yojana – Madhya Pradesh Women Financial Aid",
  "title_hi": "मुख्यमंत्री लाड़ली बहना योजना – मध्य प्रदेश ₹1250 मासिक आर्थिक सहायता",
  "shortTitle_en": "Ladli Behna Yojana (MP)",
  "shortTitle_hi": "लाड़ली बहना योजना (MP)",
  "category": "women",
  "state": "madhya-pradesh",
  "stateLabel_en": "Madhya Pradesh State Scheme",
  "stateLabel_hi": "मध्य प्रदेश राज्य योजना",
  "status": "Active",
  "lastVerified": "October 26, 2026",
  "benefitSummary_en": "Direct monthly financial assistance of ₹1,250 transferred via DBT directly into the bank accounts of married, widowed, divorced, and abandoned women in MP.",
  "benefitSummary_hi": "मध्य प्रदेश की 21 से 60 वर्ष की विवाहित, विधवा व तलाकशुदा महिलाओं को प्रति माह ₹1,250 की प्रत्यक्ष आर्थिक सहायता (सालाना ₹15,000)।",
  "benefitAmount_en": "₹1,250 per month directly in bank account",
  "benefitAmount_hi": "₹1,250 प्रति माह (सालाना ₹15,000) सीधा बैंक खाते में",
  "whoCanApply_en": "Resident women of Madhya Pradesh aged 21 to 60 years whose family annual income is below ₹2.5 Lakh.",
  "whoCanApply_hi": "मध्य प्रदेश की स्थायी निवासी महिलाएं (21-60 वर्ष) जिनके परिवार की वार्षिक आय ₹2.5 लाख से कम हो।",
  "applicationMode": "Gram Panchayat & Ward Camps via cmladlibahna.mp.gov.in",
  "bannerImage": "/images/schemes/ladli-behna-yojana.webp",
  "whatIsThis_en": "Mukhyamantri Ladli Behna Yojana is Madhya Pradesh's landmark direct benefit transfer scheme empowering women economically and supporting healthcare and nutritional autonomy.",
  "whatIsThis_hi": "लाड़ली बहना योजना मध्य प्रदेश शासन की प्रमुख योजना है जिसका उद्देश्य प्रदेश की बहनों को आर्थिक रूप से स्वावलंबी और सशक्त बनाना है।",
  "benefitsList_en": [
    "Guaranteed ₹1,250 credited on the 10th of every calendar month.",
    "Annual financial cushion of ₹15,000 per eligible woman.",
    "No physical queue required—processed through Aadhaar DBT enabled bank accounts.",
    "Special priority during regional nutrition and health initiatives."
  ],
  "benefitsList_hi": [
    "प्रत्येक माह की 10 तारीख को सीधे बैंक खाते में ₹1,250 का गारंटीड अंतरण।",
    "प्रति पात्र महिला को सालाना ₹15,000 की वित्तीय संबलता।",
    "आधार-लिंक डीबीटी बैंक खाते के जरिए पारदर्शी भुगतान।",
    "परिवार के पोषण, स्वास्थ्य व स्वरोजगार में प्रत्यक्ष सहयोग।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "Permanent resident of Madhya Pradesh.",
      "Age between 21 and 60 years on the date of application.",
      "Married, widowed, divorced, or legally separated women.",
      "Family combined annual income less than ₹2.5 Lakh."
    ],
    "eligibleIf_hi": [
      "मध्य प्रदेश की स्थानीय निवासी महिला।",
      "आवेदन के समय आयु 21 से 60 वर्ष के बीच हो।",
      "विवाहित, विधवा, तलाकशुदा अथवा परित्यक्ता महिला।",
      "परिवार की कुल वार्षिक आय ₹2.5 लाख से कम हो।"
    ],
    "notEligibleIf_en": [
      "Any family member is an income tax payee.",
      "Family owns more than 5 acres of agricultural land.",
      "Family owns a four-wheeler (excluding tractor)."
    ],
    "notEligibleIf_hi": [
      "परिवार का कोई सदस्य आयकरदाता हो।",
      "परिवार के पास कुल 5 एकड़ से अधिक कृषि भूमि हो।",
      "परिवार में चार पहिया वाहन (ट्रैक्टर को छोड़कर) पंजीकृत हो।"
    ]
  },
  "requiredDocuments_en": [
    "Samagra Family ID and Member ID (e-KYC verified)",
    "Aadhaar Card linked with mobile number",
    "Aadhaar-seeded personal bank account (DBT enabled)",
    "Passport size photograph"
  ],
  "requiredDocuments_hi": [
    "समग्र परिवार आईडी व सदस्य आईडी (ई-केवाईसी पूर्ण)",
    "आधार कार्ड (मोबाइल नंबर से लिंक)",
    "व्यक्तिगत आधार-सीडेड डीबीटी बैंक खाता",
    "पासपोर्ट साइज फोटो"
  ],
  "howToApply_en": [
    "Ensure your Samagra ID is e-KYC compliant and your bank account is DBT seeded.",
    "Attend the designated Ladli Behna camp in your Gram Panchayat or Urban Ward.",
    "Submit the application form with Samagra ID and Aadhaar.",
    "The camp official takes your photo and registers biometric KYC, generating an acknowledgment slip."
  ],
  "howToApply_hi": [
    "अपनी समग्र आईडी का ई-केवाईसी और बैंक खाते में डीबीटी सक्रिय कराएं।",
    "अपनी ग्राम पंचायत या वार्ड में आयोजित लाड़ली बहना शिविर में जाएं।",
    "समग्र आईडी और आधार कार्ड के साथ आवेदन फॉर्म जमा करें।",
    "अधिकारी द्वारा बायोमेट्रिक सत्यापन और फोटो खींचकर पावती रसीद दी जाएगी।"
  ],
  "statusCheckGuide_en": "Visit cmladlibahna.mp.gov.in, click on \"आवेदन एवं भुगतान की स्थिति\", enter your Application Number or Samagra ID to verify monthly installment credits.",
  "statusCheckGuide_hi": "cmladlibahna.mp.gov.in पोर्टल पर \"आवेदन एवं भुगतान की स्थिति\" पर क्लिक कर समग्र आईडी दर्ज करें और मासिक किस्त का स्टेटस देखें।",
  "officialStatusUrl": "https://cmladlibahna.mp.gov.in",
  "commonProblems_en": [
    {
      "problem": "Installment failed due to inactive DBT in bank",
      "solution": "Visit your home bank branch and request an immediate Aadhaar-NPCI DBT mandate linking."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "किस्त खाते में न आना (DBT Inactive)",
      "solution": "अपने बैंक में जाकर NPCI आधार मैपिंग फॉर्म भरकर डीबीटी सक्रिय कराएं।"
    }
  ],
  "faqs_en": [
    {
      "q": "On which day of the month is the Ladli Behna amount credited?",
      "a": "The installment of ₹1,250 is transferred directly on the 10th of every month into verified DBT accounts."
    }
  ],
  "faqs_hi": [
    {
      "q": "लाड़ली बहना योजना का पैसा महीने की किस तारीख को आता है?",
      "a": "योजना की ₹1,250 की मासिक किस्त प्रत्येक माह की 10 तारीख को बैंक खाते में डीबीटी द्वारा ट्रांसफर की जाती है।"
    }
  ],
  "officialSources": [
    {
      "name": "Women & Child Development Department",
      "authority": "Government of Madhya Pradesh",
      "url": "https://cmladlibahna.mp.gov.in",
      "verificationDate": "October 26, 2026"
    }
  ],
  "keywords": [
    "ladli behna yojana mp",
    "ladli behna 1250 status",
    "cmladlibahna mp gov in",
    "mp women scheme",
    "लाड़ली बहना योजना",
    "लाड़ली बहना स्टेटस"
  ],
  "metaDescription_en": "Ladli Behna Yojana MP: ₹1,250 monthly assistance for women in Madhya Pradesh. Eligibility criteria, Samagra e-KYC, installment payment status, and portal guide.",
  "metaDescription_hi": "लाड़ली बहना योजना मध्य प्रदेश: ₹1250 मासिक सहायता, समग्र ई-केवाईसी, पात्रता नियम, आवश्यक दस्तावेज और भुगतान स्टेटस।"
},

{
  "id": "pm-swanidhi-yojana",
  "slug": "pm-swanidhi-street-vendor-loan",
  "title_en": "PM SVANidhi – Micro Credit Scheme for Urban & Rural Street Vendors",
  "title_hi": "पीएम स्वनिधि योजना – रेहड़ी-पटरी व स्ट्रीट वेंडर्स हेतु रियायती ऋण",
  "shortTitle_en": "PM SVANidhi Scheme",
  "shortTitle_hi": "पीएम स्वनिधि योजना",
  "category": "employment",
  "state": "all-india",
  "stateLabel_en": "Central Scheme (All India)",
  "stateLabel_hi": "केंद्रीय योजना (अखिल भारतीय)",
  "status": "Active",
  "lastVerified": "October 25, 2026",
  "benefitSummary_en": "Collateral-free working capital microloans of ₹10,000, ₹20,000, and ₹50,000 with 7% interest subsidy and cashback rewards for digital transactions.",
  "benefitSummary_hi": "रेहड़ी-पटरी विक्रेताओं को बिना गारंटी ₹10,000, ₹20,000 तथा ₹50,000 का कार्यशील पूंजी ऋण, 7% ब्याज सब्सिडी और डिजिटल कैशबैक लाभ।",
  "benefitAmount_en": "Collateral-free loans up to ₹50,000 + 7% interest subsidy",
  "benefitAmount_hi": "₹10,000 से ₹50,000 तक बिना गारंटी ऋण + 7% ब्याज सब्सिडी",
  "whoCanApply_en": "Street vendors, hawkers, thelawalas, and small artisans operating in urban and peri-urban locations.",
  "whoCanApply_hi": "शहरी व कस्बाई क्षेत्रों में ठेला लगाने वाले, फेरीवाले, रेहड़ी-पटरी दुकानदार व फुटपाथ विक्रेता।",
  "applicationMode": "Online via pmsvanidhi.mohua.gov.in or Urban Local Bodies",
    "bannerImage": "/images/schemes/pm-swanidhi-yojana.webp",
  "whatIsThis_en": "PM SVANidhi provides formal credit access to street vendors to resume and expand their livelihoods with interest subvention and escalating loan limits upon timely repayment.",
  "whatIsThis_hi": "पीएम स्वनिधि रेहड़ी-पटरी व्यवसायियों को साहूकारों के चंगुल से निकालकर औपचारिक बैंकिंग ऋण व डिजिटल लेनदेन से जोड़ने वाली केंद्रीय योजना है।",
  "benefitsList_en": [
    "Initial working capital loan of ₹10,000 for 1-year tenure.",
    "Second tranche of ₹20,000 upon timely repayment of first loan.",
    "Third tranche of ₹50,000 for seasoned vendors.",
    "7% annual interest subsidy credited quarterly to bank accounts.",
    "Monthly cashback up to ₹100 on digital payment transactions."
  ],
  "benefitsList_hi": [
    "प्रथम किस्त में 1 वर्ष हेतु ₹10,000 का बिना गारंटी कार्यशील ऋण।",
    "समय पर अदायगी करने पर द्वितीय किस्त में ₹20,000 का ऋण।",
    "तृतीय किस्त में ₹50,000 तक का बड़ा कार्यशील ऋण।",
    "सालाना 7% ब्याज सब्सिडी का सीधा बैंक खाते में तिमाही भुगतान।",
    "डिजिटल क्यूआर कोड से भुगतान स्वीकार करने पर ₹100 तक मासिक कैशबैक।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "Possession of Certificate of Vending (CoV) / Identity Card issued by Urban Local Body (ULB).",
      "Vendors identified in the survey or possessing Letter of Recommendation (LoR)."
    ],
    "eligibleIf_hi": [
      "नगर निगम/नगर पालिका द्वारा जारी वेंडिंग प्रमाण पत्र अथवा पहचान पत्र धारक।",
      "शहरी सर्वेक्षण में चिन्हित अथवा नगर निकाय से सिफारिश पत्र (LoR) प्राप्त विक्रेता।"
    ],
    "notEligibleIf_en": [
      "Non-vendors or vendors engaged in non-vending activities."
    ],
    "notEligibleIf_hi": [
      "जो रेहड़ी-पटरी या फेरी का कार्य न करते हों।"
    ]
  },
  "requiredDocuments_en": [
    "Vending Certificate / Identity Card / Letter of Recommendation (LoR)",
    "Aadhaar card linked with mobile number",
    "Bank passbook copy",
    "Active UPI ID / QR code (for cashback enrollment)"
  ],
  "requiredDocuments_hi": [
    "वेंडिंग प्रमाण पत्र / आई-कार्ड / नगर पालिका अनुशंसा पत्र (LoR)",
    "आधार कार्ड (मोबाइल लिंक)",
    "बैंक खाता पासबुक",
    "यूपीआई आईडी/क्यूआर कोड"
  ],
  "howToApply_en": [
    "Visit pmsvanidhi.mohua.gov.in or nearest Common Service Centre.",
    "Apply online with mobile number and select loan amount (₹10,000 / ₹20,000 / ₹50,000).",
    "Upload Vending ID or LoR and Aadhaar card.",
    "Select preferred lending institution (SBI, PNB, Bank of Baroda, etc.)."
  ],
  "howToApply_hi": [
    "पोर्टल pmsvanidhi.mohua.gov.in पर जाएं या सीएससी केंद्र पर जाएं।",
    "मोबाइल नंबर से लॉगिन कर ऋण राशि (₹10,000 / ₹20,000 / ₹50,000) चुनें।",
    "वेंडिंग कार्ड या LoR अपलोड करें और बैंक शाखा का चयन करें।",
    "बैंक सत्यापन के बाद लोन राशि सीधे खाते में अंतरित की जाती है।"
  ],
  "statusCheckGuide_en": "Log in on pmsvanidhi.mohua.gov.in with your mobile number to check loan processing, sanction, and disbursement status.",
  "statusCheckGuide_hi": "pmsvanidhi.mohua.gov.in पर मोबाइल नंबर से लॉगिन कर लोन स्वीकृति व वितरण की स्थिति जांचें।",
  "officialStatusUrl": "https://pmsvanidhi.mohua.gov.in",
  "commonProblems_en": [
    {
      "problem": "Vendor does not possess a Certificate of Vending",
      "solution": "Apply for a Letter of Recommendation (LoR) directly on the PM SVANidhi portal or municipal office."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "वेंडिंग पहचान पत्र न होना",
      "solution": "पीएम स्वनिधि पोर्टल पर नगर निकाय से \"Letter of Recommendation (LoR)\" हेतु सीधे ऑनलाइन आवेदन करें।"
    }
  ],
  "faqs_en": [
    {
      "q": "Is any guarantee or collateral required for PM SVANidhi?",
      "a": "No collateral or guarantor is required. The loan is 100% unsecured and backed by central credit guarantee."
    }
  ],
  "faqs_hi": [
    {
      "q": "क्या पीएम स्वनिधि के लिए कोई गारंटी देनी होती है?",
      "a": "नहीं। यह पूर्णतः बिना गारंटी (Collateral-Free) ऋण है जिसकी गारंटी केंद्र सरकार द्वारा दी जाती है।"
    }
  ],
  "officialSources": [
    {
      "name": "Ministry of Housing and Urban Affairs (MoHUA)",
      "authority": "Government of India",
      "url": "https://pmsvanidhi.mohua.gov.in",
      "verificationDate": "October 25, 2026"
    }
  ],
  "keywords": [
    "pm svanidhi",
    "street vendor loan 10000",
    "svanidhi interest subsidy",
    "thela loan scheme",
    "पीएम स्वनिधि",
    "स्ट्रीट वेंडर लोन"
  ],
  "metaDescription_en": "PM SVANidhi Scheme: Get ₹10,000, ₹20,000, and ₹50,000 collateral-free working capital loan for street vendors with 7% interest subsidy and cashback.",
  "metaDescription_hi": "पीएम स्वनिधि योजना: रेहड़ी-पटरी वालों के लिए ₹10,000 से ₹50,000 तक बिना गारंटी लोन, 7% ब्याज छूट और आवेदन प्रक्रिया।"
},

{
  "id": "kisan-credit-card",
  "slug": "kisan-credit-card-kcc-scheme",
  "title_en": "Kisan Credit Card (KCC) – Low-Interest Agricultural Credit Scheme",
  "title_hi": "किसान क्रेडिट कार्ड (KCC) – रियायती 4% ब्याज पर कृषि व पशुपालन ऋण",
  "shortTitle_en": "Kisan Credit Card (KCC)",
  "shortTitle_hi": "किसान क्रेडिट कार्ड (KCC)",
  "category": "farmers",
  "state": "all-india",
  "stateLabel_en": "Central Scheme (All India)",
  "stateLabel_hi": "केंद्रीय योजना (अखिल भारतीय)",
  "status": "Active",
  "lastVerified": "October 24, 2026",
  "benefitSummary_en": "Affordable short-term agricultural credit up to ₹3 Lakh at an effective interest rate of just 4% per annum (with prompt repayment incentive) for cultivation, animal husbandry, and fisheries.",
  "benefitSummary_hi": "किसानों, पशुपालकों व मत्स्य पालकों को ₹3 लाख तक का कृषि ऋण मात्र 4% प्रभावी वार्षिक ब्याज पर (समय पर भुगतान प्रोत्साहन सहित)।",
  "benefitAmount_en": "Short-term credit up to ₹3 Lakh at 4% interest",
  "benefitAmount_hi": "₹3 लाख तक का अल्पकालिक कृषि ऋण मात्र 4% ब्याज पर",
  "whoCanApply_en": "Owner cultivators, tenant farmers, sharecroppers, SHGs, and animal husbandry/dairy farmers.",
  "whoCanApply_hi": "भूमि स्वामी किसान, बटाईदार, पट्टेदार, स्वयं सहायता समूह तथा पशुपालन व डेयरी पालक किसान।",
  "applicationMode": "Offline via bank branches or online via pmkisan.gov.in",
    "bannerImage": "/images/schemes/kisan-credit-card.webp",
  "whatIsThis_en": "The Kisan Credit Card scheme simplifies access to timely formal credit for farmers to meet cultivation expenses, post-harvest needs, and allied sector investments without extortionate interest rates.",
  "whatIsThis_hi": "किसान क्रेडिट कार्ड योजना किसानों को साहूकारों के भारी ब्याज से बचाकर बीज, खाद, कृषि यंत्र और पशुपालन हेतु न्यूनतम 4% ब्याज पर सस्ता बैंक ऋण उपलब्ध कराती है।",
  "benefitsList_en": [
    "Effective interest rate of only 4% per annum for prompt repaying borrowers (7% base with 3% prompt repayment subvention).",
    "Credit limit up to ₹1.60 Lakh without any collateral requirement.",
    "Credit limit up to ₹3 Lakh covered under interest subvention.",
    "Flexible revolving credit with RuPay KCC ATM Card.",
    "Comprehensive insurance coverage against accidental death and permanent disability."
  ],
  "benefitsList_hi": [
    "समय पर अदायगी करने पर मात्र 4% वार्षिक प्रभावी ब्याज दर (7% बेस - 3% शीघ्र भुगतान छूट)।",
    "₹1.60 लाख तक का ऋण बिना किसी भूमि बंधक (Collateral-Free) के प्राप्त।",
    "₹3 लाख तक की ऋण सीमा पर सरकारी ब्याज छूट का लाभ।",
    "रुपे केसीसी एटीएम कार्ड से किसी भी एटीएम से कभी भी पैसे निकालने की सुविधा।",
    "दुर्घटना बीमा सुरक्षा कवर उपलब्ध।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "Individual farmer/cultivator aged 18 to 75 years.",
      "Owner cultivator with agricultural land records or authorized tenant farmer.",
      "Dairy, poultry, or fisheries operators."
    ],
    "eligibleIf_hi": [
      "व्यक्तिगत किसान (आयु 18 से 75 वर्ष)।",
      "कृषि भूमि के स्वामी अथवा पट्टेदार/बटाईदार किसान।",
      "डेयरी, बकरी पालन, पोल्ट्री अथवा मत्स्य पालन से जुड़े किसान।"
    ],
    "notEligibleIf_en": [
      "Willful bank loan defaulters."
    ],
    "notEligibleIf_hi": [
      "बैंक ऋण के घोषित डिफॉल्टर।"
    ]
  },
  "requiredDocuments_en": [
    "Duly filled KCC application form",
    "Landholding revenue record (Khata/Khasra/Patta/Jamabandi)",
    "Aadhaar card and PAN card",
    "Passport size photographs",
    "Declaration of crops cultivated and acreage"
  ],
  "requiredDocuments_hi": [
    "केसीसी आवेदन पत्र (KCC Form)",
    "भू-स्वामित्व अभिलेख (खसरा/खतौनी/पट्टा/जमाबंदी)",
    "आधार कार्ड व पैन कार्ड",
    "पासपोर्ट साइज फोटो",
    "बोई जाने वाली फसल और रकबे का घोषणा पत्र"
  ],
  "howToApply_en": [
    "Download the one-page KCC application form from pmkisan.gov.in or collect from your nearest rural/commercial bank.",
    "Attach your land revenue records (Khata/Khesra) and Aadhaar.",
    "Submit to the bank branch where you maintain your PM-Kisan account.",
    "The bank processes and sanctions the card within 14 working days."
  ],
  "howToApply_hi": [
    "pmkisan.gov.in से एक पन्ने का केसीसी फॉर्म डाउनलोड करें या बैंक से प्राप्त करें।",
    "जमीन का खसरा/खतौनी और आधार कार्ड संलग्न करें।",
    "जिस बैंक में पीएम किसान का खाता है, उसी शाखा में फॉर्म जमा करें।",
    "बैंक द्वारा 14 कार्य दिवसों के भीतर केसीसी जारी कर दिया जाता है।"
  ],
  "statusCheckGuide_en": "Check status directly with your bank branch loan officer or through your bank's mobile app.",
  "statusCheckGuide_hi": "संबंधित बैंक शाखा के कृषि ऋण अधिकारी से संपर्क कर अथवा नेट बैंकिंग से केसीसी स्टेटस जांचें।",
  "officialStatusUrl": "https://pmkisan.gov.in",
  "commonProblems_en": [
    {
      "problem": "Bank delaying KCC sanction beyond 14 days",
      "solution": "Contact the Lead Bank Manager (LDM) or raise a complaint on PM-Kisan Samadhan Portal."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "14 दिन बाद भी बैंक द्वारा केसीसी जारी न करना",
      "solution": "जिले के अग्रणी बैंक प्रबंधक (LDM) अथवा पीएम किसान हेल्पलाइन पर शिकायत दर्ज करें।"
    }
  ],
  "faqs_en": [
    {
      "q": "Can PM-Kisan beneficiaries get a KCC easily?",
      "a": "Yes. PM-Kisan beneficiaries need only submit a simplified one-page application form with land records to receive their KCC card."
    }
  ],
  "faqs_hi": [
    {
      "q": "क्या पीएम किसान लाभार्थियों को केसीसी आसानी से मिल जाता है?",
      "a": "हाँ। पीएम किसान लाभार्थियों के लिए केवल एक पेज का सरल फॉर्म और जमीन की नकल देकर 14 दिन में केसीसी बनाने का नियम है।"
    }
  ],
  "officialSources": [
    {
      "name": "Ministry of Agriculture and Farmers Welfare & RBI",
      "authority": "Government of India",
      "url": "https://pmkisan.gov.in",
      "verificationDate": "October 24, 2026"
    }
  ],
  "keywords": [
    "kisan credit card",
    "kcc loan interest rate",
    "kcc online apply 2026",
    "kcc collateral limit",
    "किसान क्रेडिट कार्ड",
    "केसीसी लोन ब्याज दर"
  ],
  "metaDescription_en": "Kisan Credit Card (KCC): 4% interest rate, loan up to ₹3 Lakh for farmers, eligibility rules, required documents, and bank application procedure.",
  "metaDescription_hi": "किसान क्रेडिट कार्ड (KCC): 4% ब्याज पर ₹3 लाख तक का कृषि ऋण, पात्रता, आवश्यक दस्तावेज और 14 दिनों में केसीसी बनवाने का तरीका।"
},

{
  "id": "pm-shram-yogi-maan-dhan",
  "slug": "pm-shram-yogi-maan-dhan-pension",
  "title_en": "Pradhan Mantri Shram Yogi Maan-dhan (PM-SYM) – Old Age Pension for Unorganized Workers",
  "title_hi": "प्रधानमंत्री श्रम योगी मानधन योजना (PM-SYM) – असंगठित कामगारों हेतु ₹3000 मासिक पेंशन",
  "shortTitle_en": "PM Shram Yogi Maan-dhan",
  "shortTitle_hi": "पीएम श्रम योगी मानधन",
  "category": "pension",
  "state": "all-india",
  "stateLabel_en": "Central Scheme (All India)",
  "stateLabel_hi": "केंद्रीय योजना (अखिल भारतीय)",
  "status": "Active",
  "lastVerified": "October 23, 2026",
  "benefitSummary_en": "Guaranteed minimum monthly pension of ₹3,000 for unorganized sector workers upon reaching 60 years of age, with 50% matching contribution from the Central Government.",
  "benefitSummary_hi": "असंगठित क्षेत्र के कामगारों को 60 वर्ष की आयु के बाद ₹3,000 प्रति माह की गारंटीड आजीवन पेंशन, जिसमें 50% प्रीमियम केंद्र सरकार भरती है।",
  "benefitAmount_en": "Guaranteed ₹3,000 monthly pension from age 60",
  "benefitAmount_hi": "60 वर्ष की आयु के बाद ₹3,000 प्रति माह आजीवन पेंशन",
  "whoCanApply_en": "Unorganized workers aged 18 to 40 years with a monthly income of ₹15,000 or less.",
  "whoCanApply_hi": "18 से 40 वर्ष के असंगठित श्रमिक (रिक्शा चालक, घरेलू कामगार, निर्माण मजदूर) जिनकी मासिक आय ₹15,000 से कम हो।",
  "applicationMode": "Online via maandhan.in or CSC Digital Seva Kendras",
    "bannerImage": "/images/schemes/pm-shram-yogi-maan-dhan.webp",
  "whatIsThis_en": "PM-SYM is a voluntary and contributory pension scheme offering social security and old-age financial dignity to unorganized workers with a sovereign central guarantee.",
  "whatIsThis_hi": "प्रधानमंत्री श्रम योगी मानधन योजना असंगठित क्षेत्र के दैनिक मजदूरों और श्रमिकों को बुढ़ापे में सम्मानजनक जीवन जीने के लिए पेंशन सुरक्षा देती है।",
  "benefitsList_en": [
    "Guaranteed pension of ₹3,000 per month after attaining 60 years of age.",
    "Equal matching monthly contribution deposited by the Central Government.",
    "Affordable monthly premium ranging from ₹55 to ₹200 based on entry age.",
    "Family pension of 50% (₹1,500/month) to surviving spouse in case of subscriber's demise."
  ],
  "benefitsList_hi": [
    "60 वर्ष की आयु पूरी होने पर ₹3,000 प्रति माह की पक्की पेंशन।",
    "जितनी राशि श्रमिक जमा करता है, उतनी ही 50% राशि केंद्र सरकार अपने कोष से मिलाती है।",
    "उम्र के आधार पर मात्र ₹55 से ₹200 प्रति माह का न्यूनतम अंशदान।",
    "सब्सक्राइबर की मृत्यु की दशा में पति/पत्नी को 50% (₹1,500 प्रति माह) पारिवारिक पेंशन।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "Entry age between 18 and 40 years.",
      "Engaged in unorganized occupations (street vendor, domestic worker, agricultural laborer, rickshaw puller).",
      "Monthly income does not exceed ₹15,000."
    ],
    "eligibleIf_hi": [
      "प्रवेश आयु 18 से 40 वर्ष के बीच हो।",
      "असंगठित क्षेत्र में कार्यरत हों (मजदूर, दाई, धोबी, मोची, बढ़ई, ऑटो चालक)।",
      "मासिक आय ₹15,000 या उससे कम हो।"
    ],
    "notEligibleIf_en": [
      "Covered under EPFO, NPS, or ESIC statutory social security.",
      "Income tax payee."
    ],
    "notEligibleIf_hi": [
      "ईपीएफओ (EPFO), एनपीएस (NPS) अथवा ईएसआईसी (ESIC) के सदस्य।",
      "आयकरदाता।"
    ]
  },
  "requiredDocuments_en": [
    "Aadhaar card",
    "Savings bank account passbook with IFSC code",
    "Active mobile number"
  ],
  "requiredDocuments_hi": [
    "आधार कार्ड",
    "बचत बैंक खाता पासबुक (IFSC कोड सहित)",
    "मोबाइल नंबर"
  ],
  "howToApply_en": [
    "Visit any nearby Common Service Centre (CSC) with Aadhaar and bank passbook.",
    "The Village Level Entrepreneur (VLE) enters details on maandhan.in and verifies biometric KYC.",
    "Initial monthly contribution (e.g. ₹55-₹200) paid in cash.",
    "Receive your official Shram Yogi Pension Card with unique Pension Account Number."
  ],
  "howToApply_hi": [
    "अपने नजदीकी जन सेवा केंद्र (CSC) में आधार कार्ड और बैंक पासबुक लेकर जाएं।",
    "वीएलई द्वारा maandhan.in पोर्टल पर विवरण दर्ज कर बायोमेट्रिक सत्यापन किया जाएगा।",
    "प्रथम किस्त नकद जमा करें और ऑटो-डेबिट मैंडेट पर हस्ताक्षर करें।",
    "तुरंत अपना \"श्रम योगी पेंशन कार्ड\" प्राप्त करें।"
  ],
  "statusCheckGuide_en": "Log in on maandhan.in with your Mobile Number or Pension Account Number to view your account ledger and monthly debit status.",
  "statusCheckGuide_hi": "maandhan.in पोर्टल पर मोबाइल नंबर से लॉगिन कर अपनी जमा राशि और पासबुक विवरण जांचें।",
  "officialStatusUrl": "https://maandhan.in",
  "commonProblems_en": [
    {
      "problem": "Monthly auto-debit bounced due to low bank balance",
      "solution": "Maintain sufficient balance in your linked bank account on the deduction date, or pay dues at CSC."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "खाते में बैलेंस न होने से किस्त कटना रुक जाना",
      "solution": "बैंक खाते में पर्याप्त बैलेंस रखें या सीएससी केंद्र पर जाकर बकाया किस्त जमा करें।"
    }
  ],
  "faqs_en": [
    {
      "q": "Can an unorganized worker exit PM-SYM before age 60?",
      "a": "Yes. Upon exit before 10 years, the subscriber receives their own contribution with savings bank interest rate."
    }
  ],
  "faqs_hi": [
    {
      "q": "क्या 60 वर्ष से पहले योजना से बाहर निकला जा सकता है?",
      "a": "हाँ। 10 वर्ष से पहले बाहर निकलने पर श्रमिक को उसका पूरा अंशदान बचत बैंक ब्याज सहित वापस मिल जाता है।"
    }
  ],
  "officialSources": [
    {
      "name": "Ministry of Labour and Employment & LIC",
      "authority": "Government of India",
      "url": "https://maandhan.in",
      "verificationDate": "October 23, 2026"
    }
  ],
  "keywords": [
    "pm shram yogi mandhan",
    "pmsym 3000 pension",
    "unorganized worker pension",
    "shram yogi card download",
    "पीएम श्रम योगी मानधन",
    "मजदूर पेंशन योजना"
  ],
  "metaDescription_en": "PM Shram Yogi Maan-dhan (PM-SYM): Guaranteed ₹3,000 monthly pension for unorganized workers, contribution chart, eligibility rules, and CSC registration.",
  "metaDescription_hi": "प्रधानमंत्री श्रम योगी मानधन योजना: असंगठित मजदूरों हेतु ₹3000 मासिक पेंशन, उम्र अनुसार प्रीमियम चार्ट, पात्रता व पेंशन कार्ड।"
},

{
  "id": "lakhpati-didi-yojana",
  "slug": "lakhpati-didi-yojana-shg-women",
  "title_en": "Lakhpati Didi Yojana – Micro-Enterprise & Livelihood Scheme for SHG Women",
  "title_hi": "लखपति दीदी योजना – स्वयं सहायता समूह (SHG) महिलाओं हेतु आजीविका व कौशल प्रोत्साहन",
  "shortTitle_en": "Lakhpati Didi Yojana",
  "shortTitle_hi": "लखपति दीदी योजना",
  "category": "women",
  "state": "all-india",
  "stateLabel_en": "Central Scheme (All India)",
  "stateLabel_hi": "केंद्रीय योजना (अखिल भारतीय)",
  "status": "Active",
  "lastVerified": "October 22, 2026",
  "benefitSummary_en": "Skill training, interest-subvention micro-credit up to ₹5 Lakh, and market linkages to empower 3 crore Self-Help Group (SHG) women to earn at least ₹1 Lakh annually.",
  "benefitSummary_hi": "स्वयं सहायता समूह की महिलाओं को कौशल प्रशिक्षण, ₹5 लाख तक का रियायती ऋण व बाजार लिंकेज ताकि वे सालाना कम से कम ₹1 लाख की आय अर्जित कर सकें।",
  "benefitAmount_en": "Training + Interest-free loans up to ₹5 Lakh for enterprise",
  "benefitAmount_hi": "निःशुल्क व्यावसायिक प्रशिक्षण + ₹5 लाख तक का रियायती ऋण",
  "whoCanApply_en": "Women members of registered Self-Help Groups (SHGs) under Deendayal Antyodaya Yojana-NRLM.",
  "whoCanApply_hi": "दीनदयाल अंत्योदय योजना-एनआरएलएम (DAY-NRLM) के तहत पंजीकृत स्वयं सहायता समूहों की महिला सदस्य।",
  "applicationMode": "Offline through Gram Panchayat SHG Cluster / Block Project Office",
    "bannerImage": "/images/schemes/lakhpati-didi-yojana.webp",
  "whatIsThis_en": "Lakhpati Didi is a targeted mission to transform rural SHG women into sustainable micro-entrepreneurs across agriculture, food processing, textiles, LED manufacturing, and drone services.",
  "whatIsThis_hi": "लखपति दीदी केंद्र सरकार की ऐतिहासिक पहल है जिसका उद्देश्य देश की 3 करोड़ ग्रामीण महिलाओं को स्वावलंबी उद्यमी बनाकर लखपति बनाना है।",
  "benefitsList_en": [
    "Comprehensive technical skill training in LED bulb assembly, plumbing, drone operation (Drone Didi), agro-processing, and organic farming.",
    "Collateral-free credit support up to ₹5 Lakh through Community Investment Funds and bank linkages.",
    "E-commerce integration on Government e-Marketplace (GeM) and retail platforms.",
    "Financial literacy, accounting, and digital banking empowerment."
  ],
  "benefitsList_hi": [
    "ड्रोन दीदी, फूड प्रोसेसिंग, सोलर लैंप निर्माण, टेलरिंग व जैविक खेती में उच्च स्तरीय प्रशिक्षण।",
    "कम्युनिटी इन्वेस्टमेंट फंड (CIF) और बैंकों के माध्यम से ₹5 लाख तक का सुलभ ऋण।",
    "सरकारी ई-मार्केटप्लेस (GeM) और ऑनलाइन प्लेटफॉर्म से उत्पादों की सीधी बिक्री।",
    "डिजिटल साक्षरता, खाता प्रबंधन और वित्तीय स्वतंत्रता का प्रशिक्षण।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "Active member of an NRLM-compliant Self-Help Group for at least 6 months.",
      "Commitment to participate in livelihood and entrepreneurship training."
    ],
    "eligibleIf_hi": [
      "कम से कम 6 माह से एनआरएलएम पंजीकृत स्वयं सहायता समूह की सक्रिय सदस्य हों।",
      "आजीविका गतिविधि और प्रशिक्षण में भाग लेने की इच्छुक हों।"
    ],
    "notEligibleIf_en": [
      "Non-members of Self-Help Groups."
    ],
    "notEligibleIf_hi": [
      "जो किसी स्वयं सहायता समूह की सदस्य न हों।"
    ]
  },
  "requiredDocuments_en": [
    "SHG Membership Passbook / Resolution Copy",
    "Aadhaar card of woman member",
    "Bank account passbook (linked with SHG)",
    "Passport size photographs"
  ],
  "requiredDocuments_hi": [
    "स्वयं सहायता समूह पासबुक / सदस्यता प्रमाण पत्र",
    "महिला सदस्य का आधार कार्ड",
    "बैंक खाता पासबुक",
    "पासपोर्ट साइज फोटो"
  ],
  "howToApply_en": [
    "Contact your Village Organization (VO) or Cluster Level Federation (CLF) of the SHG.",
    "Submit your interest for the Lakhpati Didi business/enterprise training track.",
    "Prepare a micro-business plan with guidance from the Community Resource Person (CRP).",
    "Receive sanction for seed capital/loan through bank linkage or Community Investment Fund."
  ],
  "howToApply_hi": [
    "अपने गांव के ग्राम संगठन (VO) अथवा संकुल स्तरीय संघ (CLF) में संपर्क करें।",
    "लखपति दीदी प्रशिक्षण व व्यवसाय शुरू करने हेतु अपनी सहमति दर्ज कराएं।",
    "सीआरपी (CRP) की सहायता से अपनी व्यावसायिक कार्ययोजना (Micro Plan) तैयार करें।",
    "बैंक लिंकेज अथवा कम्युनिटी फंड से ऋण व उपकरण प्राप्त करें।"
  ],
  "statusCheckGuide_en": "Track your enrollment and enterprise loan progress through your Block Mission Management Unit (BMMU) or NRLM portal nrlm.gov.in.",
  "statusCheckGuide_hi": "प्रखंड मिशन प्रबंधन इकाई (BMMU) अथवा nrlm.gov.in पोर्टल पर अपने समूह का विवरण जांचें।",
  "officialStatusUrl": "https://nrlm.gov.in",
  "commonProblems_en": [
    {
      "problem": "Group has not received training allocation",
      "solution": "Contact the Block Programme Manager (BPM) at the local Block Development Office."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "समूह को प्रशिक्षण स्लॉट न मिलना",
      "solution": "प्रखंड विकास कार्यालय (Block Office) में स्थित बीपीएम (BPM) अधिकारी से संपर्क करें।"
    }
  ],
  "faqs_en": [
    {
      "q": "What is the income target under Lakhpati Didi?",
      "a": "The target is to enable each participating woman to earn a sustainable minimum income of ₹1,00,000 per annum (over ₹8,300/month)."
    }
  ],
  "faqs_hi": [
    {
      "q": "लखपति दीदी योजना का मुख्य आय लक्ष्य क्या है?",
      "a": "प्रत्येक प्रतिभागी महिला की स्थायी शुद्ध वार्षिक आय कम से कम ₹1 लाख (₹8,300+ प्रति माह) तक पहुंचाना है।"
    }
  ],
  "officialSources": [
    {
      "name": "Ministry of Rural Development (MoRD)",
      "authority": "Government of India",
      "url": "https://nrlm.gov.in",
      "verificationDate": "October 22, 2026"
    }
  ],
  "keywords": [
    "lakhpati didi yojana",
    "shg loan 5 lakh",
    "drone didi training",
    "nrlm scheme",
    "लखपति दीदी योजना",
    "स्वयं सहायता समूह लोन"
  ],
  "metaDescription_en": "Lakhpati Didi Yojana: Skill training, ₹5 Lakh micro-enterprise loans, market linkages for SHG women to achieve ₹1 Lakh annual income.",
  "metaDescription_hi": "लखपति दीदी योजना: स्वयं सहायता समूह की महिलाओं हेतु ₹5 लाख तक का ऋण, व्यावसायिक प्रशिक्षण और ₹1 लाख सालाना आय का लक्ष्य।"
},

{
  "id": "up-kanya-sumangala-yojana",
  "slug": "up-mukhyamantri-kanya-sumangala-yojana",
  "title_en": "Mukhyamantri Kanya Sumangala Yojana – Uttar Pradesh Girl Child Financial Support",
  "title_hi": "मुख्यमंत्री कन्या सुमंगला योजना – उत्तर प्रदेश बालिकाओं हेतु ₹25,000 की वित्तीय सहायता",
  "shortTitle_en": "Kanya Sumangala Yojana (UP)",
  "shortTitle_hi": "कन्या सुमंगला योजना (UP)",
  "category": "women",
  "state": "uttar-pradesh",
  "stateLabel_en": "Uttar Pradesh State Scheme",
  "stateLabel_hi": "उत्तर प्रदेश राज्य योजना",
  "status": "Active",
  "lastVerified": "October 21, 2026",
  "benefitSummary_en": "Total financial grant of ₹25,000 given in 6 milestone stages from birth to graduation for the education, healthcare, and empowerment of daughters in Uttar Pradesh.",
  "benefitSummary_hi": "उत्तर प्रदेश में बेटियों के जन्म से लेकर स्नातक तक की पढ़ाई के लिए 6 चरणों में कुल ₹25,000 की सरकारी आर्थिक सहायता।",
  "benefitAmount_en": "Total ₹25,000 in 6 installment stages",
  "benefitAmount_hi": "कुल ₹25,000 की वित्तीय सहायता (6 चरणों में)",
  "whoCanApply_en": "Permanent residents of UP with a family annual income of less than ₹3 Lakh (maximum 2 daughters per family).",
  "whoCanApply_hi": "उत्तर प्रदेश के मूल निवासी परिवार जिनकी वार्षिक आय ₹3 लाख से कम हो (प्रति परिवार अधिकतम 2 बेटियां)।",
  "applicationMode": "Online via mksy.up.gov.in",
  "bannerImage": "/images/schemes/up-kanya-sumangala-yojana.webp",
  "whatIsThis_en": "Kanya Sumangala Yojana is a milestone-based conditional cash transfer program by the Government of Uttar Pradesh to eradicate female foeticide and promote girls' higher education.",
  "whatIsThis_hi": "कन्या सुमंगला योजना उत्तर प्रदेश सरकार की बालिकाओं के जन्म, टीकाकरण, प्राथमिक, माध्यमिक व उच्च शिक्षा को प्रोत्साहित करने वाली ऐतिहासिक योजना है।",
  "benefitsList_en": [
    "Stage 1: ₹5,000 at the birth of the girl child.",
    "Stage 2: ₹2,000 upon complete immunization within 1 year.",
    "Stage 3: ₹3,000 upon admission in Class 1.",
    "Stage 4: ₹3,000 upon admission in Class 6.",
    "Stage 5: ₹5,000 upon admission in Class 9.",
    "Stage 6: ₹7,000 upon passing Class 12 and taking admission in Graduation/Diploma."
  ],
  "benefitsList_hi": [
    "प्रथम चरण: बेटी के जन्म के समय ₹5,000 की एकमुश्त सहायता।",
    "द्वितीय चरण: 1 वर्ष तक के पूर्ण टीकाकरण पर ₹2,000।",
    "तृतीय चरण: कक्षा 1 में प्रवेश लेने पर ₹3,000।",
    "चतुर्थ चरण: कक्षा 6 में प्रवेश लेने पर ₹3,000।",
    "पंचम चरण: कक्षा 9 में प्रवेश लेने पर ₹5,000।",
    "छठा चरण: 12वीं उत्तीर्ण कर स्नातक या डिप्लोमा में प्रवेश पर ₹7,000।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "Resident of Uttar Pradesh with permanent domicile.",
      "Family annual income must not exceed ₹3,00,000.",
      "Maximum two daughters per family (relaxable in case of twin girls)."
    ],
    "eligibleIf_hi": [
      "उत्तर प्रदेश का स्थायी निवासी होना अनिवार्य।",
      "परिवार की कुल वार्षिक आय ₹3,00,000 से कम हो।",
      "एक परिवार से अधिकतम दो बालिकाओं को लाभ।"
    ],
    "notEligibleIf_en": [
      "Annual income exceeds ₹3 Lakh.",
      "Third daughter born without twins exception."
    ],
    "notEligibleIf_hi": [
      "परिवार की वार्षिक आय ₹3 लाख से अधिक हो।",
      "परिवार की तीसरी संतान (जुड़वां बहनों को छोड़कर)।"
    ]
  },
  "requiredDocuments_en": [
    "Birth Certificate of girl child",
    "UP Domicile / Niwas Praman Patra",
    "Family Income Certificate (below ₹3 Lakh)",
    "School admission certificate / fees receipt for academic stages",
    "Immunization card (for Stage 2)",
    "Aadhaar card of parents and daughter",
    "Bank passbook copy (joint or mother's account)"
  ],
  "requiredDocuments_hi": [
    "बालिका का जन्म प्रमाण पत्र",
    "उत्तर प्रदेश का निवास प्रमाण पत्र",
    "आय प्रमाण पत्र (सालाना ₹3 लाख से कम)",
    "स्कूल/कॉलेज में प्रवेश का प्रमाण पत्र व फीस रसीद",
    "टीकाकरण कार्ड (द्वितीय चरण हेतु)",
    "माता-पिता व बालिका का आधार कार्ड",
    "बैंक खाता पासबुक"
  ],
  "howToApply_en": [
    "Visit the official portal mksy.up.gov.in and click on \"Citizen Service Portal\".",
    "Register with mobile number and create user login credentials.",
    "Choose the relevant stage (Birth, Vaccination, Class 1, 6, 9, or Degree).",
    "Upload required certificates and submit. Applications are verified by Block/SDM officers."
  ],
  "howToApply_hi": [
    "आधिकारिक पोर्टल mksy.up.gov.in पर जाकर \"नागरिक सेवा पोर्टल\" पर क्लिक करें।",
    "मोबाइल नंबर दर्ज कर नया पंजीकरण करें और लॉगिन आईडी बनाएं।",
    "संबंधित चरण (जन्म, टीकाकरण, कक्षा 1, 6, 9 या स्नातक) का चयन कर विवरण भरें।",
    "दस्तावेज अपलोड करें; बीडीओ व एसडीएम द्वारा सत्यापन के बाद राशि सीधे बैंक खाते में आएगी।"
  ],
  "statusCheckGuide_en": "Log in to mksy.up.gov.in with your User ID to check verification status and payment release details.",
  "statusCheckGuide_hi": "mksy.up.gov.in पर यूजर आईडी से लॉगिन कर आवेदन व किस्त अंतरण का स्टेटस ट्रैक करें।",
  "officialStatusUrl": "https://mksy.up.gov.in",
  "commonProblems_en": [
    {
      "problem": "Application rejected due to expired income certificate",
      "solution": "Renew your Tehsildar income certificate and re-upload before submitting the stage claim."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "पुराने आय प्रमाण पत्र के कारण आवेदन निरस्त होना",
      "solution": "तहसील से 3 साल के भीतर का वैध आय प्रमाण पत्र बनवाकर पुनः अपलोड करें।"
    }
  ],
  "faqs_en": [
    {
      "q": "Can a family claim Kanya Sumangala for adopted daughters?",
      "a": "Yes. If a family has adopted a daughter legally, she is fully eligible under the scheme guidelines."
    }
  ],
  "faqs_hi": [
    {
      "q": "क्या गोद ली गई बालिका को भी इस योजना का लाभ मिल सकता है?",
      "a": "हाँ। यदि परिवार ने कानूनी रूप से बेटी को गोद लिया है, तो वह भी इस योजना की पूर्ण पात्र है।"
    }
  ],
  "officialSources": [
    {
      "name": "Women & Child Development Department",
      "authority": "Government of Uttar Pradesh",
      "url": "https://mksy.up.gov.in",
      "verificationDate": "October 21, 2026"
    }
  ],
  "keywords": [
    "kanya sumangala yojana up",
    "mksy up gov in",
    "up girl child scheme 25000",
    "kanya sumangala stages",
    "कन्या सुमंगला योजना",
    "यूपी कन्या सुमंगला स्टेटस"
  ],
  "metaDescription_en": "Mukhyamantri Kanya Sumangala Yojana UP: ₹25,000 grant in 6 stages for daughters in Uttar Pradesh. Eligibility, required documents, and online portal guide.",
  "metaDescription_hi": "मुख्यमंत्री कन्या सुमंगला योजना उत्तर प्रदेश: बेटियों को 6 चरणों में ₹25,000 की सहायता, पात्रता, आवश्यक दस्तावेज व ऑनलाइन आवेदन।"
},

{
  "id": "maharashtra-ladki-bahin",
  "slug": "maharashtra-ladki-bahin-yojana",
  "title_en": "Mukhyamantri Majhi Ladki Bahin Yojana – Maharashtra Women Monthly Assistance",
  "title_hi": "मुख्यमंत्री माझी लाड़की बहिन योजना – महाराष्ट्र महिलाओं हेतु ₹1500 मासिक सहायता",
  "shortTitle_en": "Majhi Ladki Bahin (Maharashtra)",
  "shortTitle_hi": "माझी लाड़की बहिन (महाराष्ट्र)",
  "category": "women",
  "state": "maharashtra",
  "stateLabel_en": "Maharashtra State Scheme",
  "stateLabel_hi": "महाराष्ट्र राज्य योजना",
  "status": "Active",
  "lastVerified": "October 20, 2026",
  "benefitSummary_en": "Direct monthly financial assistance of ₹1,500 transferred via DBT directly into the bank accounts of economically backward women aged 21 to 65 years in Maharashtra.",
  "benefitSummary_hi": "महाराष्ट्र की 21 से 65 वर्ष की आर्थिक रूप से कमजोर महिलाओं को प्रति माह ₹1,500 की प्रत्यक्ष बैंक सहायता (सालाना ₹18,000)।",
  "benefitAmount_en": "₹1,500 per month directly in bank account",
  "benefitAmount_hi": "₹1,500 प्रति माह (सालाना ₹18,000) सीधा बैंक खाते में",
  "whoCanApply_en": "Resident women of Maharashtra aged 21 to 65 years whose family annual income is up to ₹2.5 Lakh.",
  "whoCanApply_hi": "महाराष्ट्र की स्थायी निवासी महिलाएं (21 से 65 वर्ष) जिनकी पारिवारिक वार्षिक आय ₹2.5 लाख तक हो।",
  "applicationMode": "Online via ladkibahin.maharashtra.gov.in or Nari Shakti Doot App",
  "bannerImage": "/images/schemes/maharashtra-ladki-bahin.webp",
  "whatIsThis_en": "Mukhyamantri Majhi Ladki Bahin Yojana is Maharashtra's pioneering social welfare scheme providing direct financial independence and nutritional safety net to over 2 crore women.",
  "whatIsThis_hi": "माझी लाड़की बहिन योजना महाराष्ट्र सरकार की प्रमुख पहल है जिसका उद्देश्य महिलाओं को आर्थिक स्वावलंबन और सामाजिक सुरक्षा प्रदान करना है।",
  "benefitsList_en": [
    "₹1,500 per month deposited directly into Aadhaar-linked bank accounts.",
    "Annual financial empowerment support of ₹18,000 per beneficiary.",
    "Paperless mobile application process through the dedicated portal and app.",
    "Autonomous discretion for women to spend on personal health, family nutrition, and child education."
  ],
  "benefitsList_hi": [
    "प्रति माह ₹1,500 की सम्मान राशि सीधे आधार-लिंक बैंक खाते में।",
    "प्रति वर्ष कुल ₹18,000 की वित्तीय सहायता।",
    "नारी शक्ति दूत ऐप अथवा आधिकारिक पोर्टल से पेपरलेस आवेदन की सुविधा।",
    "दवाइयों, पोषण और बच्चों की शिक्षा में महिलाओं को आत्मनिर्भरता।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "Resident of Maharashtra holding state domicile or yellow/orange ration card.",
      "Age between 21 and 65 years.",
      "Family annual income less than or equal to ₹2.5 Lakh.",
      "Married, widowed, divorced, deserted, or single women."
    ],
    "eligibleIf_hi": [
      "महाराष्ट्र की स्थायी निवासी महिला (अथवा पीला/केसरी राशन कार्ड धारक)।",
      "आयु 21 से 65 वर्ष के मध्य हो।",
      "पारिवारिक वार्षिक आय ₹2.5 लाख से कम हो।",
      "विवाहित, विधवा, तलाकशुदा अथवा अविवाहित महिलाएं।"
    ],
    "notEligibleIf_en": [
      "Family member paying income tax.",
      "Family member is a permanent government employee or pensioner.",
      "Family owns a four-wheeler (excluding tractor)."
    ],
    "notEligibleIf_hi": [
      "परिवार का कोई सदस्य आयकरदाता हो।",
      "परिवार का सदस्य नियमित सरकारी कर्मचारी या पेंशनभोगी हो।",
      "परिवार में चार पहिया वाहन (ट्रैक्टर को छोड़कर) पंजीकृत हो।"
    ]
  },
  "requiredDocuments_en": [
    "Aadhaar card of the woman",
    "Maharashtra Domicile Certificate / Ration Card (Yellow or Orange)",
    "Income Certificate (below ₹2.5 Lakh) or Yellow/Orange Ration Card proof",
    "Aadhaar-seeded Bank Account Passbook",
    "Hamipatra (Self-declaration form)"
  ],
  "requiredDocuments_hi": [
    "महिला का आधार कार्ड",
    "महाराष्ट्र का अधिवास प्रमाण पत्र (Domicile) अथवा राशन कार्ड",
    "आय प्रमाण पत्र (सालाना ₹2.5 लाख से कम)",
    "डीबीटी-सक्षम व्यक्तिगत बैंक पासबुक",
    "हमीपत्र (स्व-घोषणा पत्र)"
  ],
  "howToApply_en": [
    "Visit the official website ladkibahin.maharashtra.gov.in or download the Nari Shakti Doot mobile app.",
    "Register with mobile number and complete Aadhaar OTP verification.",
    "Fill personal details, bank information, and upload ration card/domicile copy.",
    "Submit the application and download the digital acknowledgment receipt."
  ],
  "howToApply_hi": [
    "ladkibahin.maharashtra.gov.in वेबसाइट पर जाएं या नारी शक्ति दूत ऐप डाउनलोड करें।",
    "मोबाइल नंबर दर्ज कर आधार ओटीपी के जरिए सत्यापन करें।",
    "व्यक्तिगत विवरण, बैंक खाता भरें और राशन कार्ड/अधिवास प्रमाण पत्र अपलोड करें।",
    "आवेदन सबमिट कर पावती रसीद प्राप्त करें।"
  ],
  "statusCheckGuide_en": "Log in to ladkibahin.maharashtra.gov.in with your mobile number to view application approval and DBT installment credit history.",
  "statusCheckGuide_hi": "ladkibahin.maharashtra.gov.in पर लॉगिन कर आवेदन स्वीकृति और मासिक किस्त का विवरण जांचें।",
  "officialStatusUrl": "https://ladkibahin.maharashtra.gov.in",
  "commonProblems_en": [
    {
      "problem": "Application pending due to name mismatch between Aadhaar and Bank passbook",
      "solution": "Ensure bank passbook name matches Aadhaar exactly and update Aadhaar-NPCI mapping at your bank."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "आधार और बैंक खाते के नाम में अंतर होने से पेंडिंग होना",
      "solution": "बैंक जाकर आधार कार्ड के अनुसार नाम सही कराएं और एनपीसीआई डीबीटी मैपिंग सक्रिय कराएं।"
    }
  ],
  "faqs_en": [
    {
      "q": "Is a domicile certificate compulsory if the family has a ration card?",
      "a": "If a woman possesses a Yellow or Orange Ration Card issued before the prescribed cutoff, it serves as acceptable proof of residence."
    }
  ],
  "faqs_hi": [
    {
      "q": "क्या राशन कार्ड होने पर भी अधिवास (Domicile) प्रमाण पत्र अनिवार्य है?",
      "a": "यदि परिवार के पास पीला अथवा केसरी राशन कार्ड है, तो इसे निवास प्रमाण के रूप में स्वीकार किया जाता है।"
    }
  ],
  "officialSources": [
    {
      "name": "Women & Child Development Department",
      "authority": "Government of Maharashtra",
      "url": "https://ladkibahin.maharashtra.gov.in",
      "verificationDate": "October 20, 2026"
    }
  ],
  "keywords": [
    "majhi ladki bahin yojana",
    "ladki bahin 1500 status",
    "maharashtra women scheme",
    "nari shakti doot app",
    "माझी लाड़की बहिन",
    "लाड़की बहिन योजना महाराष्ट्र"
  ],
  "metaDescription_en": "Majhi Ladki Bahin Yojana Maharashtra: ₹1,500 monthly DBT financial assistance for women. Eligibility criteria, application portal, and payment tracking.",
  "metaDescription_hi": "मुख्यमंत्री माझी लाड़की बहिन योजना महाराष्ट्र: महिलाओं हेतु ₹1500 मासिक सहायता, पात्रता, आवश्यक दस्तावेज और ऑनलाइन आवेदन।"
},

{
  "id": "pm-internship-scheme",
  "slug": "pm-internship-scheme-youth-employment",
  "title_en": "Prime Minister's Internship Scheme – Top 500 Companies Youth Training",
  "title_hi": "प्रधानमंत्री इंटर्नशिप योजना – शीर्ष 500 कंपनियों में युवाओं हेतु ₹5000 मासिक मानदेय",
  "shortTitle_en": "PM Internship Scheme",
  "shortTitle_hi": "पीएम इंटर्नशिप योजना",
  "category": "students",
  "state": "all-india",
  "stateLabel_en": "Central Scheme (All India)",
  "stateLabel_hi": "केंद्रीय योजना (अखिल भारतीय)",
  "status": "Active",
  "lastVerified": "October 19, 2026",
  "benefitSummary_en": "12-month paid internship opportunity in India's top 500 companies with ₹5,000 monthly stipend (₹4,500 from Government + ₹500 from Company CSR) plus a ₹6,000 one-time incidentals grant.",
  "benefitSummary_hi": "भारत की शीर्ष 500 कंपनियों में 12 महीने की इंटर्नशिप, ₹5,000 मासिक स्टाइपेंड तथा ₹6,000 का एकमुश्त आकस्मिक सहायता अनुदान।",
  "benefitAmount_en": "₹5,000 monthly stipend + ₹6,000 one-time grant",
  "benefitAmount_hi": "₹5,000 प्रति माह स्टाइपेंड + ₹6,000 एकमुश्त अनुदान",
  "whoCanApply_en": "Youth aged 21 to 24 years who have passed Class 10th, 12th, ITI, Polytechnic Diploma, or Graduation (BA, B.Sc, B.Com, BBA, Pharmacy).",
  "whoCanApply_hi": "21 से 24 वर्ष के युवा जिन्होंने 10वीं, 12वीं, आईटीआई, पॉलिटेक्निक डिप्लोमा अथवा स्नातक उत्तीर्ण किया हो।",
  "applicationMode": "Online via pminternship.mca.gov.in portal",
    "bannerImage": "/images/schemes/pm-internship-scheme.webp",
    "secondaryImage": "/images/schemes/pm-internship-scheme-secondary.webp",
  "whatIsThis_en": "PM Internship Scheme bridges the academia-industry gap by offering real corporate work exposure to 1 crore youth over 5 years in leading private and public corporations.",
  "whatIsThis_hi": "प्रधानमंत्री इंटर्नशिप योजना देश के युवाओं को देश की अग्रणी कंपनियों में काम का व्यावहारिक अनुभव और मासिक वजीफा देने की ऐतिहासिक राष्ट्रीय योजना है।",
  "benefitsList_en": [
    "₹5,000 monthly stipend credited directly via DBT (₹4,500 Government + ₹500 Company CSR).",
    "One-time grant of ₹6,000 upon joining the internship for living expenses.",
    "Comprehensive insurance coverage under PM Jeevan Jyoti Bima and PM Suraksha Bima Yojana.",
    "Hands-on experience and prestigious certification from India's top 500 corporations."
  ],
  "benefitsList_hi": [
    "प्रति माह ₹5,000 का स्टाइपेंड (₹4,500 केंद्र सरकार + ₹500 कंपनी CSR द्वारा)।",
    "इंटर्नशिप में योगदान करने पर ₹6,000 की एकमुश्त आकस्मिक सहायता राशि।",
    "पीएम जीवन ज्योति और सुरक्षा बीमा योजना के तहत पूर्ण बीमा कवर।",
    "शीर्ष 500 कंपनियों से प्रशिक्षण व कार्य अनुभव का मूल्यवान प्रमाण पत्र।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "Age between 21 and 24 years on the application deadline.",
      "Qualifications: Class 10, 12, ITI certificate, Polytechnic diploma, or Non-professional graduation.",
      "Indian citizen not engaged in full-time employment."
    ],
    "eligibleIf_hi": [
      "आयु 21 से 24 वर्ष के बीच हो।",
      "शैक्षणिक योग्यता: 10वीं, 12वीं, आईटीआई, पॉलिटेक्निक अथवा सामान्य स्नातक (BA/B.Sc/B.Com)।",
      "आवेदक वर्तमान में पूर्णकालिक नौकरी में न हो।"
    ],
    "notEligibleIf_en": [
      "Graduates from IITs, IIMs, IISERs, National Law Universities, or holding CA/CMA/MBBS/B.Tech/MBA degrees.",
      "Family income exceeds ₹8 Lakh per annum.",
      "Family member is a permanent government employee."
    ],
    "notEligibleIf_hi": [
      "आईआईटी, आईआईएम, एनएलयू अथवा सीए/सीएमए/एमबीबीएस/बीटेक/एमबीए डिग्री धारक।",
      "परिवार की वार्षिक आय ₹8 लाख से अधिक हो।",
      "परिवार में कोई स्थायी सरकारी कर्मचारी हो।"
    ]
  },
  "requiredDocuments_en": [
    "Aadhaar card",
    "Educational certificates & marksheets (10th/12th/ITI/Diploma/Degree)",
    "Self-declaration of family income (below ₹8 Lakh)",
    "Aadhaar-seeded bank account details",
    "Curriculum Vitae / Resume"
  ],
  "requiredDocuments_hi": [
    "आधार कार्ड",
    "शैक्षणिक अंकतालिका व प्रमाण पत्र (10वीं/12वीं/डिप्लोमा/डिग्री)",
    "पारिवारिक आय का स्व-घोषणा पत्र (सालाना ₹8 लाख से कम)",
    "डीबीटी-सक्षम बैंक खाता पासबुक",
    "बायोडाटा / रिज्यूमे"
  ],
  "howToApply_en": [
    "Visit the dedicated portal pminternship.mca.gov.in and click \"Register Candidate\".",
    "Verify mobile and Aadhaar via OTP.",
    "Upload educational qualifications, preferred locations, and industry sectors.",
    "Browse matching internship openings from top 500 companies and submit your application."
  ],
  "howToApply_hi": [
    "आधिकारिक पोर्टल pminternship.mca.gov.in पर जाकर \"Register Candidate\" पर क्लिक करें।",
    "मोबाइल व आधार ओटीपी से पंजीकरण पूर्ण करें।",
    "शैक्षणिक योग्यता, पसंदीदा राज्य/जिले और उद्योग क्षेत्र का चयन करें।",
    "उपलब्ध कंपनियों के इंटर्नशिप पदों पर ऑनलाइन आवेदन सबमिट करें।"
  ],
  "statusCheckGuide_en": "Log in on pminternship.mca.gov.in to track application shortlisting, company interview calls, and selection offers.",
  "statusCheckGuide_hi": "pminternship.mca.gov.in पर लॉगिन कर अपनी शॉर्टलिस्टिंग, इंटरव्यू कॉल और चयन की स्थिति देखें।",
  "officialStatusUrl": "https://pminternship.mca.gov.in",
  "commonProblems_en": [
    {
      "problem": "Application rejected due to family income above ₹8 Lakh",
      "solution": "Ensure family income self-declaration complies strictly with EWS income threshold guidelines."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "पारिवारिक आय सीमा के कारण अपात्रता",
      "solution": "परिवार की कुल आय सभी स्रोतों से ₹8 लाख से कम होनी चाहिए।"
    }
  ],
  "faqs_en": [
    {
      "q": "What is the duration of the PM Internship?",
      "a": "The internship program is structured for a period of 12 months with hands-on corporate training."
    }
  ],
  "faqs_hi": [
    {
      "q": "प्रधानमंत्री इंटर्नशिप योजना की अवधि कितनी है?",
      "a": "यह इंटर्नशिप कार्यक्रम 12 महीने (1 वर्ष) की अवधि के लिए आयोजित किया जाता है।"
    }
  ],
  "officialSources": [
    {
      "name": "Ministry of Corporate Affairs (MCA)",
      "authority": "Government of India",
      "url": "https://pminternship.mca.gov.in",
      "verificationDate": "October 19, 2026"
    }
  ],
  "keywords": [
    "pm internship scheme",
    "pminternship mca gov in",
    "internship 5000 stipend",
    "pm internship eligibility",
    "प्रधानमंत्री इंटर्नशिप योजना",
    "पीएम इंटर्नशिप आवेदन"
  ],
  "metaDescription_en": "PM Internship Scheme: 12-month paid training in top 500 companies with ₹5,000 monthly stipend and ₹6,000 grant. Eligibility criteria and registration portal.",
  "metaDescription_hi": "प्रधानमंत्री इंटर्नशिप योजना: शीर्ष 500 कंपनियों में 12 महीने का प्रशिक्षण, ₹5000 मासिक मानदेय, ₹6000 अनुदान व ऑनलाइन आवेदन।"
},

{
  "id": "pm-egp-loan",
  "slug": "pmegp-prime-minister-employment-generation-programme",
  "title_en": "Prime Minister's Employment Generation Programme (PMEGP) – Credit-Linked Subsidy Scheme",
  "title_hi": "प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP) – ₹50 लाख तक सूक्ष्म उद्योग सब्सिडी व ऋण",
  "shortTitle_en": "PMEGP Subsidy Scheme",
  "shortTitle_hi": "PMEGP योजना",
  "category": "employment",
  "state": "all-india",
  "stateLabel_en": "Central Scheme (All India)",
  "stateLabel_hi": "केंद्रीय योजना (अखिल भारतीय)",
  "status": "Active",
  "lastVerified": "October 18, 2026",
  "benefitSummary_en": "Credit-linked capital subsidy of up to 35% on project loans up to ₹50 Lakh for manufacturing and ₹20 Lakh for service enterprises to generate self-employment.",
  "benefitSummary_hi": "नया उद्योग या सेवा केंद्र शुरू करने हेतु ₹50 लाख तक का बैंक ऋण तथा 35% तक की प्रत्यक्ष सरकारी मार्जिन मनी (सब्सिडी)।",
  "benefitAmount_en": "Up to 35% government subsidy on loans up to ₹50 Lakh",
  "benefitAmount_hi": "₹50 लाख तक ऋण पर 15% से 35% तक सरकारी सब्सिडी",
  "whoCanApply_en": "Any individual above 18 years of age with a minimum Class 8 pass qualification for projects above ₹10 Lakh (Mfg) / ₹5 Lakh (Service).",
  "whoCanApply_hi": "18 वर्ष से अधिक आयु का कोई भी भारतीय नागरिक (₹10 लाख से बड़े प्रोजेक्ट हेतु न्यूनतम 8वीं पास होना अनिवार्य)।",
  "applicationMode": "Online via kviconline.gov.in (PMEGP e-Portal)",
    "bannerImage": "/images/schemes/pm-egp-loan.webp",
  "whatIsThis_en": "PMEGP is a flagship credit-linked subsidy program administered by KVIC under the Ministry of MSME to establish micro-enterprises across rural and urban India.",
  "whatIsThis_hi": "प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP) सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय द्वारा देश में नए कारखाने व सेवा केंद्र खोलने हेतु शुरू की गई प्रमुख योजना है।",
  "benefitsList_en": [
    "Maximum project cost covered: ₹50 Lakh for manufacturing sector and ₹20 Lakh for service sector.",
    "Margin Money subsidy: 25% in rural areas for general category, 35% for SC, ST, OBC, women, ex-servicemen, and minorities.",
    "Beneficiary contribution only 5% to 10% of total project cost.",
    "Second loan up to ₹1 Crore available for upgrading high-performing existing PMEGP units."
  ],
  "benefitsList_hi": [
    "अधिकतम परियोजना लागत: विनिर्माण क्षेत्र हेतु ₹50 लाख तथा सेवा क्षेत्र हेतु ₹20 लाख।",
    "ग्रामीण क्षेत्रों में विशेष श्रेणी (महिला, SC/ST, OBC, दिव्यांग) को 35% तथा सामान्य वर्ग को 25% सब्सिडी।",
    "लाभार्थी को स्वयं का अंशदान मात्र 5% से 10% ही लगाना होता है।",
    "सफल उद्यमियों को व्यवसाय विस्तार हेतु ₹1 करोड़ तक का दूसरा रियायती ऋण उपलब्ध।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "Age 18 years and above.",
      "At least Class 8 pass for projects over ₹10 Lakh in manufacturing or over ₹5 Lakh in service.",
      "New micro-enterprise project only (not for existing units)."
    ],
    "eligibleIf_hi": [
      "आयु 18 वर्ष से अधिक हो।",
      "विनिर्माण में ₹10 लाख और सेवा में ₹5 लाख से अधिक की परियोजना हेतु न्यूनतम 8वीं कक्षा पास।",
      "केवल नई परियोजनाएं (New Projects) ही पात्र हैं।"
    ],
    "notEligibleIf_en": [
      "Existing units or units that have already availed government capital subsidy under any other central/state scheme.",
      "Projects dealing with tobacco, liquor, or environmental pollutants."
    ],
    "notEligibleIf_hi": [
      "पहले से चल रही इकाइयां अथवा जो किसी अन्य सरकारी योजना से सब्सिडी ले चुके हों।",
      "तंबाकू, शराब, मांस व पर्यावरण के लिए हानिकारक उद्योगों से संबंधित इकाइयां।"
    ]
  },
  "requiredDocuments_en": [
    "Detailed Project Report (DPR) with cost estimates",
    "Aadhaar card and PAN card",
    "Caste/Special Category Certificate (for 35% subsidy claim)",
    "Class 8th / Educational marksheet",
    "EDP training certificate (can be completed online after in-principle sanction)"
  ],
  "requiredDocuments_hi": [
    "विस्तृत परियोजना रिपोर्ट (DPR - Project Report)",
    "आधार कार्ड व पैन कार्ड",
    "जाति / विशेष श्रेणी प्रमाण पत्र (35% सब्सिडी हेतु)",
    "शैक्षणिक योग्यता प्रमाण पत्र (8वीं/10वीं/12वीं)",
    "उद्यमिता विकास प्रशिक्षण (EDP) प्रमाण पत्र"
  ],
  "howToApply_en": [
    "Visit kviconline.gov.in/pmegpeportal and click on \"Apply Online as Individual\".",
    "Fill personal, project, and bank branch details in the comprehensive form.",
    "Upload Aadhaar, DPR, and educational certificates.",
    "KVIC/DIC forwards application to selected financing bank for sanction within 30 days."
  ],
  "howToApply_hi": [
    "kviconline.gov.in/pmegpeportal पर जाकर \"Apply Online\" पर क्लिक करें।",
    "व्यक्तिगत विवरण, प्रोजेक्ट का प्रकार व चुनी गई बैंक शाखा का विवरण दर्ज करें।",
    "आधार, प्रोजेक्ट रिपोर्ट (DPR) और शैक्षिक प्रमाण पत्र अपलोड करें।",
    "जिला उद्योग केंद्र (DIC) व बैंक द्वारा सत्यापन के बाद लोन मंजूर किया जाता है।"
  ],
  "statusCheckGuide_en": "Log in on the PMEGP e-Portal with your Application ID and Password to view real-time score card, bank scrutiny, and subsidy escrow status.",
  "statusCheckGuide_hi": "kviconline.gov.in पर एप्लीकेशन आईडी से लॉगिन कर बैंक जांच, लोन मंजूरी और सब्सिडी का स्टेटस ट्रैक करें।",
  "officialStatusUrl": "https://www.kviconline.gov.in/pmegpeportal",
  "commonProblems_en": [
    {
      "problem": "DPR preparation format rejected by financing bank",
      "solution": "Use the official KVIC model project profiles available for free download on the portal."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "बैंक द्वारा प्रोजेक्ट रिपोर्ट (DPR) के प्रारूप को अस्वीकार करना",
      "solution": "केवीआईसी पोर्टल पर उपलब्ध मुफ्त आधिकारिक मॉडल डीपीआर प्रोफाइल्स का उपयोग करें।"
    }
  ],
  "faqs_en": [
    {
      "q": "Is entrepreneurship EDP training mandatory for PMEGP disbursement?",
      "a": "Yes. Successful applicants must undergo a short EDP training (available free online or offline) before final loan disbursement."
    }
  ],
  "faqs_hi": [
    {
      "q": "क्या PMEGP लोन के लिए ईडीपी (EDP) ट्रेनिंग अनिवार्य है?",
      "a": "हाँ। लोन वितरण से पूर्व उद्यमिता विकास कार्यक्रम (EDP) का 5 से 10 दिन का प्रशिक्षण ऑनलाइन अथवा ऑफलाइन पूरा करना अनिवार्य है।"
    }
  ],
  "officialSources": [
    {
      "name": "Khadi and Village Industries Commission (KVIC) & Ministry of MSME",
      "authority": "Government of India",
      "url": "https://www.kviconline.gov.in",
      "verificationDate": "October 18, 2026"
    }
  ],
  "keywords": [
    "pmegp online apply",
    "kviconline gov in",
    "pmegp subsidy 35 percent",
    "business loan subsidy",
    "पीएमईजीपी योजना",
    "पीएमईजीपी लोन सब्सिडी"
  ],
  "metaDescription_en": "PMEGP Scheme: Get up to 35% government subsidy on project loans up to ₹50 Lakh for starting a new business or micro-enterprise. Online portal guidelines.",
  "metaDescription_hi": "प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP): ₹50 लाख तक का प्रोजेक्ट लोन, 35% तक सरकारी सब्सिडी, आवश्यक दस्तावेज और ऑनलाइन आवेदन।"
},

{
  "id": "pm-suraksha-bima",
  "slug": "pm-suraksha-bima-yojana-accidental-cover",
  "title_en": "Pradhan Mantri Suraksha Bima Yojana (PMSBY) – ₹20/Year Accidental Insurance",
  "title_hi": "प्रधानमंत्री सुरक्षा बीमा योजना (PMSBY) – मात्र ₹20 सालाना में ₹2 लाख का दुर्घटना बीमा",
  "shortTitle_en": "PM Suraksha Bima Yojana",
  "shortTitle_hi": "पीएम सुरक्षा बीमा योजना",
  "category": "health",
  "state": "all-india",
  "stateLabel_en": "Central Scheme (All India)",
  "stateLabel_hi": "केंद्रीय योजना (अखिल भारतीय)",
  "status": "Active",
  "lastVerified": "October 17, 2026",
  "benefitSummary_en": "Low-cost government-backed accidental death and disability insurance cover of ₹2 Lakh for a nominal premium of just ₹20 per year deducted automatically from your bank account.",
  "benefitSummary_hi": "मात्र ₹20 प्रति वर्ष के न्यूनतम प्रीमियम पर ₹2 लाख का दुर्घटना मृत्यु व स्थायी दिव्यांगता बीमा कवर, जो सीधे बैंक खाते से ऑटो-डेबिट होता है।",
  "benefitAmount_en": "₹2 Lakh accidental death / full disability cover",
  "benefitAmount_hi": "₹2 लाख का दुर्घटना मृत्यु व पूर्ण दिव्यांगता बीमा कवर",
  "whoCanApply_en": "All individual bank account holders aged 18 to 70 years.",
  "whoCanApply_hi": "18 से 70 वर्ष के सभी बैंक या डाकघर बचत खाता धारक।",
  "applicationMode": "Online via net banking or offline at any bank branch",
    "bannerImage": "/images/schemes/pm-suraksha-bima.webp",
  "whatIsThis_en": "PMSBY is a universal social security initiative designed to protect economically vulnerable families from financial devastation caused by unforeseen accidental tragedies.",
  "whatIsThis_hi": "प्रधानमंत्री सुरक्षा बीमा योजना हर भारतीय परिवार को दुर्घटना के समय आर्थिक सुरक्षा देने वाली देश की सबसे सस्ती और सुलभ बीमा योजना है।",
  "benefitsList_en": [
    "₹2 Lakh compensation in the event of accidental death.",
    "₹2 Lakh compensation for total and irrecoverable loss of both eyes or both hands/feet.",
    "₹1 Lakh compensation for total loss of one eye or one hand/foot.",
    "Extremely affordable annual premium of only ₹20 auto-debited in the month of May/June."
  ],
  "benefitsList_hi": [
    "दुर्घटना में मृत्यु होने पर नॉमिनी को ₹2 लाख की एकमुश्त बीमा राशि।",
    "दोनों आंखों या दोनों हाथ/पैर की पूर्ण स्थायी क्षति पर ₹2 लाख।",
    "एक आंख या एक हाथ/पैर की स्थायी क्षति पर ₹1 लाख।",
    "सालाना मात्र ₹20 का नगण्य प्रीमियम जो प्रति वर्ष मई/जून माह में स्वतः कट जाता है।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "Age between 18 and 70 years.",
      "Holder of an individual savings bank account with Aadhaar linkage."
    ],
    "eligibleIf_hi": [
      "आयु 18 से 70 वर्ष के बीच हो।",
      "किसी भी बैंक या डाकघर में सक्रिय बचत खाता धारक।"
    ],
    "notEligibleIf_en": [
      "Age below 18 years or above 70 years.",
      "Failure to maintain ₹20 balance for auto-debit on scheduled renewal."
    ],
    "notEligibleIf_hi": [
      "18 वर्ष से कम या 70 वर्ष से अधिक आयु।",
      "नवीनीकरण के समय खाते में ₹20 की शेष राशि न होना।"
    ]
  },
  "requiredDocuments_en": [
    "Savings bank account passbook",
    "Aadhaar card copy",
    "PMSBY Consent-cum-Declaration form with nominee details"
  ],
  "requiredDocuments_hi": [
    "बैंक बचत खाता पासबुक",
    "आधार कार्ड",
    "नॉमिनी (उत्तराधिकारी) विवरण सहित सहमति फॉर्म"
  ],
  "howToApply_en": [
    "Log in to your bank's mobile banking app or Internet banking portal.",
    "Go to \"Social Security Schemes / Insurance\" and select PMSBY.",
    "Select savings account, nominate a family member, and confirm with OTP.",
    "Alternatively, submit a one-page form at your home bank branch."
  ],
  "howToApply_hi": [
    "अपने बैंक की मोबाइल बैंकिंग या इंटरनेट बैंकिंग में लॉगिन करें।",
    "Social Security / PMSBY विकल्प चुनें।",
    "नॉमिनी का नाम भरें और ओटीपी दर्ज कर पुष्टि करें।",
    "अथवा अपनी बैंक शाखा में जाकर एक पन्ने का पीएमएसबीवाई फॉर्म जमा करें।"
  ],
  "statusCheckGuide_en": "Check your annual bank statement for the ₹20 debit entry in May/June or download the PMSBY certificate from your bank portal.",
  "statusCheckGuide_hi": "अपनी बैंक पासबुक या स्टेटमेंट में मई/जून महीने में ₹20 की डेबिट एंट्री चेक करें अथवा नेट बैंकिंग से बीमा सर्टिफिकेट डाउनलोड करें।",
  "officialStatusUrl": "https://financialservices.gov.in",
  "commonProblems_en": [
    {
      "problem": "Policy lapsed due to insufficient balance in account in May",
      "solution": "Deposit funds and submit a fresh re-enrollment consent form at your branch."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "मई महीने में बैलेंस न होने से बीमा लैप्स होना",
      "solution": "खाते में बैलेंस रखें और बैंक में जाकर पुनः नामांकन (Re-Enrollment) फॉर्म जमा करें।"
    }
  ],
  "faqs_en": [
    {
      "q": "Can an individual hold multiple PMSBY policies across different banks?",
      "a": "No. PMSBY covers an individual under only one bank account. Extra premium deducted across other banks is liable to be forfeited."
    }
  ],
  "faqs_hi": [
    {
      "q": "क्या एक व्यक्ति कई बैंकों से PMSBY ले सकता है?",
      "a": "नहीं। एक व्यक्ति को केवल एक ही बैंक खाते से बीमा कवर मिलता है। अन्य खातों से कटी राशि निरस्त हो जाती है।"
    }
  ],
  "officialSources": [
    {
      "name": "Department of Financial Services (DFS)",
      "authority": "Ministry of Finance, Government of India",
      "url": "https://financialservices.gov.in",
      "verificationDate": "October 17, 2026"
    }
  ],
  "keywords": [
    "pm suraksha bima yojana",
    "pmsby 20 rupees insurance",
    "accidental insurance scheme 2 lakh",
    "pmsby status certificate",
    "प्रधानमंत्री सुरक्षा बीमा योजना"
  ],
  "metaDescription_en": "PM Suraksha Bima Yojana (PMSBY): Get ₹2 Lakh accidental death and disability cover for just ₹20/year. Eligibility criteria and bank registration process.",
  "metaDescription_hi": "प्रधानमंत्री सुरक्षा बीमा योजना (PMSBY): मात्र ₹20 सालाना में ₹2 लाख का दुर्घटना बीमा, पात्रता, क्लेम नियम और बैंक आवेदन फॉर्म।"
},

{
  "id": "pm-jeevan-jyoti-bima",
  "slug": "pm-jeevan-jyoti-bima-yojana-life-cover",
  "title_en": "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) – ₹2 Lakh Pure Life Term Insurance",
  "title_hi": "प्रधानमंत्री जीवन ज्योति बीमा योजना (PMJJBY) – ₹436 सालाना में ₹2 लाख का जीवन बीमा",
  "shortTitle_en": "PM Jeevan Jyoti Bima",
  "shortTitle_hi": "पीएम जीवन ज्योति बीमा",
  "category": "pension",
  "state": "all-india",
  "stateLabel_en": "Central Scheme (All India)",
  "stateLabel_hi": "केंद्रीय योजना (अखिल भारतीय)",
  "status": "Active",
  "lastVerified": "October 16, 2026",
  "benefitSummary_en": "One-year renewable term life insurance cover of ₹2 Lakh for death due to any reason (natural or accidental) for a modest annual premium of ₹436.",
  "benefitSummary_hi": "किसी भी कारण से (प्राकृतिक अथवा दुर्घटना) मृत्यु होने पर परिवार/नॉमिनी को ₹2 लाख का पक्का जीवन बीमा कवर, वार्षिक प्रीमियम मात्र ₹436।",
  "benefitAmount_en": "₹2 Lakh pure life insurance cover for any cause of death",
  "benefitAmount_hi": "₹2 लाख का एकमुश्त जीवन बीमा कवर (मृत्यु का कोई भी कारण हो)",
  "whoCanApply_en": "All individual bank account holders aged 18 to 50 years.",
  "whoCanApply_hi": "18 से 50 वर्ष के सभी बैंक या डाकघर बचत खाता धारक।",
  "applicationMode": "Online via net banking or offline at any bank branch",
    "bannerImage": "/images/schemes/pm-jeevan-jyoti-bima.webp",
  "whatIsThis_en": "PMJJBY provides financial security to underprivileged families in the event of the breadwinner's untimely demise from disease, medical emergency, or accident.",
  "whatIsThis_hi": "प्रधानमंत्री जीवन ज्योति बीमा योजना परिवार के मुखिया की असामयिक मृत्यु की स्थिति में उसके आश्रितों को तुरंत ₹2 लाख की आर्थिक संबलता प्रदान करती है।",
  "benefitsList_en": [
    "₹2 Lakh guaranteed death benefit paid to nominee on death of insured due to any reason.",
    "Affordable annual premium of ₹436 (approximately ₹1.20 per day).",
    "No medical examination required; simple self-declaration of good health.",
    "Renewable annually until age 55 (risk cover valid up to 55 years)."
  ],
  "benefitsList_hi": [
    "किसी भी कारण से मृत्यु होने पर नॉमिनी को ₹2 लाख का तत्काल वित्तीय भुगतान।",
    "सालाना मात्र ₹436 का किफायती प्रीमियम (लगभग सवा रुपया प्रतिदिन)।",
    "किसी मेडिकल जांच की आवश्यकता नहीं; केवल साधारण स्वास्थ्य घोषणा।",
    "55 वर्ष की आयु तक निरंतर वार्षिक नवीनीकरण की सुविधा।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "Age between 18 and 50 years at enrollment.",
      "Holder of an individual savings bank account with Aadhaar linking."
    ],
    "eligibleIf_hi": [
      "नामांकन के समय आयु 18 से 50 वर्ष के मध्य हो।",
      "किसी भी बैंक अथवा डाकघर में बचत खाता धारक हों।"
    ],
    "notEligibleIf_en": [
      "Age over 50 years at initial entry.",
      "Multiple enrollments under different bank accounts (only one policy valid)."
    ],
    "notEligibleIf_hi": [
      "प्रवेश के समय 50 वर्ष से अधिक आयु।",
      "एक से अधिक बैंक खातों से दोहरा बीमा लेना।"
    ]
  },
  "requiredDocuments_en": [
    "Savings bank account details",
    "Aadhaar card copy",
    "Nominee identification and relationship proof"
  ],
  "requiredDocuments_hi": [
    "बैंक बचत खाता पासबुक",
    "आधार कार्ड",
    "नॉमिनी (वारिसदार) का पहचान पत्र व बैंक खाता विवरण"
  ],
  "howToApply_en": [
    "Access your mobile banking app or net banking portal.",
    "Navigate to Social Security Schemes > PMJJBY.",
    "Enter nominee details and authorize annual auto-debit of ₹436.",
    "Alternatively, visit your bank branch and submit the PMJJBY enrollment form."
  ],
  "howToApply_hi": [
    "अपने बैंक की नेट बैंकिंग या मोबाइल ऐप में जाएं।",
    "PMJJBY का चयन कर नॉमिनी का नाम व संबंध दर्ज करें।",
    "₹436 के वार्षिक ऑटो-डेबिट की सहमति दें।",
    "अथवा अपनी बैंक शाखा में जाकर एक पन्ने का फॉर्म जमा करें।"
  ],
  "statusCheckGuide_en": "Review your bank statement for the annual debit of ₹436 in May/June or download the policy certificate from your banking portal.",
  "statusCheckGuide_hi": "मई/जून माह में बैंक खाते से ₹436 की कटौती जांचें अथवा नेट बैंकिंग से बीमा पॉलिसी रसीद डाउनलोड करें।",
  "officialStatusUrl": "https://financialservices.gov.in",
  "commonProblems_en": [
    {
      "problem": "Nominee delay in claiming within 30 days",
      "solution": "Submit death certificate, original policy certificate, and nominee KYC at the home bank branch within 30 days of demise."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "क्लेम फॉर्म जमा करने में देरी होना",
      "solution": "मृत्यु के 30 दिनों के भीतर मृत्यु प्रमाण पत्र और नॉमिनी के कागजात संबंधित बैंक शाखा में जमा करें।"
    }
  ],
  "faqs_en": [
    {
      "q": "Is suicide covered under PMJJBY?",
      "a": "Suicide is excluded during the first 45 days of initial enrollment (lien period). Death due to accident is covered from day one."
    }
  ],
  "faqs_hi": [
    {
      "q": "क्या प्राकृतिक बीमारी से मृत्यु होने पर भी ₹2 लाख मिलते हैं?",
      "a": "हाँ। PMJJBY में मृत्यु किसी भी कारण से हो (बीमारी, हार्ट अटैक, दुर्घटना आदि), नॉमिनी को पूरे ₹2 लाख मिलते हैं।"
    }
  ],
  "officialSources": [
    {
      "name": "Department of Financial Services (DFS)",
      "authority": "Ministry of Finance, Government of India",
      "url": "https://financialservices.gov.in",
      "verificationDate": "October 16, 2026"
    }
  ],
  "keywords": [
    "pm jeevan jyoti bima yojana",
    "pmjjby 436 rupees",
    "term insurance scheme 2 lakh",
    "pmjjby claim form",
    "प्रधानमंत्री जीवन ज्योति बीमा योजना"
  ],
  "metaDescription_en": "PM Jeevan Jyoti Bima Yojana (PMJJBY): ₹2 Lakh life term insurance for death due to any reason at just ₹436/year. Eligibility rules and claim form guide.",
  "metaDescription_hi": "प्रधानमंत्री जीवन ज्योति बीमा योजना: ₹436 सालाना में ₹2 लाख का जीवन बीमा, पात्रता, आवश्यक दस्तावेज और बैंक आवेदन प्रक्रिया।"
},

{
  "id": "bihar-kanya-utthan",
  "slug": "bihar-mukhyamantri-kanya-utthan-yojana",
  "title_en": "Mukhyamantri Kanya Utthan Yojana – Bihar Direct Financial Grant for Girls",
  "title_hi": "मुख्यमंत्री कन्या उत्थान योजना – बिहार बालिकाओं हेतु जन्म से स्नातक तक ₹50,000 अनुदान",
  "shortTitle_en": "Kanya Utthan Yojana (Bihar)",
  "shortTitle_hi": "कन्या उत्थान योजना (बिहार)",
  "category": "women",
  "state": "bihar",
  "stateLabel_en": "Bihar State Scheme",
  "stateLabel_hi": "बिहार राज्य योजना",
  "status": "Active",
  "lastVerified": "October 15, 2026",
  "benefitSummary_en": "Direct financial assistance of up to ₹54,100 from birth until graduation (including ₹50,000 lump-sum grant upon passing graduation) for girl students in Bihar.",
  "benefitSummary_hi": "बिहार में बेटियों के जन्म से लेकर स्नातक (Graduation) उत्तीर्ण करने तक कुल ₹54,100 की सरकारी प्रोत्साहन राशि (स्नातक पास करने पर एकमुश्त ₹50,000)।",
  "benefitAmount_en": "Up to ₹54,100 total (₹50,000 on graduation)",
  "benefitAmount_hi": "जन्म से स्नातक तक कुल ₹54,100 (स्नातक पर ₹50,000)",
  "whoCanApply_en": "Permanent resident girl students of Bihar studying in recognized schools, colleges, and state universities.",
  "whoCanApply_hi": "बिहार की स्थायी निवासी छात्राएं जिन्होंने राज्य के मान्यता प्राप्त कॉलेज/विश्वविद्यालय से इंटरमीडिएट अथवा स्नातक उत्तीर्ण किया हो।",
  "applicationMode": "Online via medhasoft.bih.nic.in portal",
  "bannerImage": "/images/schemes/bihar-kanya-utthan.webp",
  "whatIsThis_en": "Mukhyamantri Kanya Utthan Yojana is Bihar's flagship initiative to reduce maternal/infant mortality, eradicate child marriage, and achieve universal higher education for women.",
  "whatIsThis_hi": "कन्या उत्थान योजना बिहार सरकार की क्रांतिकारी योजना है जिसका उद्देश्य बाल विवाह रोकना, कन्या भ्रूण हत्या समाप्त करना और बेटियों को उच्च शिक्षा दिलाना है।",
  "benefitsList_en": [
    "₹2,000 on birth and ₹1,000 on 1st birthday registration.",
    "₹2,000 on complete immunization up to 2 years.",
    "₹25,000 one-time grant upon passing Class 12 (Intermediate) unmarried.",
    "₹50,000 one-time grant upon passing Graduation (B.A./B.Sc./B.Com/equivalent) for both married and unmarried women."
  ],
  "benefitsList_hi": [
    "जन्म के समय ₹2,000 तथा 1 वर्ष की उम्र पूरी होने पर ₹1,000।",
    "2 वर्ष तक पूर्ण टीकाकरण पर ₹2,000।",
    "अविवाहित रहते हुए इंटरमीडिएट (12वीं) उत्तीर्ण करने पर ₹25,000।",
    "स्नातक (Graduation) उत्तीर्ण करने पर ₹50,000 की एकमुश्त सम्मान राशि (विवाहित/अविवाहित दोनों हेतु)।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "Permanent domicile resident of Bihar state.",
      "Girl child passed Intermediate (unmarried) or Graduation (from recognized Bihar university).",
      "Personal bank account in a bank branch situated within Bihar."
    ],
    "eligibleIf_hi": [
      "बिहार की मूल निवासी छात्रा।",
      "इंटरमीडिएट पास (अविवाहित) अथवा स्नातक पास (विवाहित/अविवाहित)।",
      "छात्रा का बैंक खाता बिहार स्थित किसी बैंक शाखा में होना अनिवार्य।"
    ],
    "notEligibleIf_en": [
      "Non-residents of Bihar or degrees from non-recognized fraudulent universities.",
      "Bank accounts located outside Bihar."
    ],
    "notEligibleIf_hi": [
      "बिहार राज्य के बाहर के निवासी।",
      "बिहार के बाहर की बैंक शाखाओं में खाता होना।"
    ]
  },
  "requiredDocuments_en": [
    "Graduation/12th Marks Sheet and Admit Card",
    "Aadhaar card of student",
    "Bihar Domicile (Niwas Praman Patra)",
    "Bank passbook copy (Aadhaar linked with IFSC)",
    "Passport size photograph and signature"
  ],
  "requiredDocuments_hi": [
    "स्नातक अथवा 12वीं की अंकतालिका व प्रवेश पत्र",
    "छात्रा का आधार कार्ड",
    "बिहार का मूल निवास प्रमाण पत्र",
    "बिहार में स्थित बैंक खाते की पासबुक",
    "पासपोर्ट साइज फोटो और हस्ताक्षर"
  ],
  "howToApply_en": [
    "Visit medhasoft.bih.nic.in and select \"Mukhyamantri Kanya Utthan Yojana (Snathak)\".",
    "Search your University, College, and University Registration number to verify college upload.",
    "Fill bank details, verify Aadhaar with OTP, and submit online.",
    "Upon university level verification, ₹50,000 is credited directly via DBT."
  ],
  "howToApply_hi": [
    "medhasoft.bih.nic.in पोर्टल पर जाकर \"मुख्यमंत्री कन्या उत्थान योजना (स्नातक)\" चुनें।",
    "विश्वविद्यालय, कॉलेज और रजिस्ट्रेशन नंबर डालकर पोर्टल पर अपना नाम चेक करें।",
    "आधार व बैंक खाता विवरण दर्ज कर सबमिट करें।",
    "विश्वविद्यालय द्वारा सत्यापन के बाद ₹50,000 की राशि सीधे बैंक खाते में ट्रांसफर की जाती है।"
  ],
  "statusCheckGuide_en": "Enter your University Registration Number on medhasoft.bih.nic.in to track payment in-process, university verification, and bank rejection status.",
  "statusCheckGuide_hi": "medhasoft.bih.nic.in पर अपना यूनिवर्सिटी रजिस्ट्रेशन नंबर दर्ज कर \"Payment Status\" ट्रैक करें।",
  "officialStatusUrl": "https://medhasoft.bih.nic.in",
  "commonProblems_en": [
    {
      "problem": "Name not found in University result list on Medhasoft",
      "solution": "Contact your college/university examination department to upload your finalized degree result to the portal."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "मेधासॉफ्ट पोर्टल पर नाम या रिजल्ट न दिखना",
      "solution": "अपने कॉलेज या यूनिवर्सिटी के परीक्षा विभाग से संपर्क कर मेधासॉफ्ट पोर्टल पर रिजल्ट डाटा अपलोड कराएं।"
    }
  ],
  "faqs_en": [
    {
      "q": "Can married female students receive the ₹50,000 graduation incentive?",
      "a": "Yes. For the graduation incentive of ₹50,000, both married and unmarried female graduates from Bihar are eligible."
    }
  ],
  "faqs_hi": [
    {
      "q": "क्या विवाहित छात्राएं भी स्नातक पास ₹50,000 के लिए पात्र हैं?",
      "a": "हाँ। स्नातक प्रोत्साहन राशि हेतु छात्रा का विवाहित होना कोई बाधा नहीं है; विवाहित व अविवाहित दोनों को ₹50,000 मिलते हैं।"
    }
  ],
  "officialSources": [
    {
      "name": "Education Department",
      "authority": "Government of Bihar",
      "url": "https://medhasoft.bih.nic.in",
      "verificationDate": "October 15, 2026"
    }
  ],
  "keywords": [
    "kanya utthan yojana bihar",
    "medhasoft bihar nic in",
    "graduation 50000 scheme bihar",
    "snatak kanya utthan",
    "कन्या उत्थान योजना",
    "मेधासॉफ्ट 50000 स्टेटस"
  ],
  "metaDescription_en": "Bihar Mukhyamantri Kanya Utthan Yojana: ₹50,000 grant for female graduates. Eligibility criteria, Medhasoft online registration, and payment status tracking.",
  "metaDescription_hi": "मुख्यमंत्री कन्या उत्थान योजना बिहार: स्नातक पास छात्राओं हेतु ₹50,000 की सरकारी सहायता, मेधासॉफ्ट ऑनलाइन फॉर्म व स्टेटस।"
},

{
  "id": "rajasthan-anupriti-coaching",
  "slug": "rajasthan-anupriti-coaching-yojana",
  "title_en": "Mukhyamantri Anupriti Coaching Yojana – Rajasthan Free Competitive Exam Coaching",
  "title_hi": "मुख्यमंत्री अनुप्रति कोचिंग योजना – राजस्थान मुफ्त प्रतियोगी परीक्षा कोचिंग व आवास सहायता",
  "shortTitle_en": "Anupriti Coaching (Rajasthan)",
  "shortTitle_hi": "अनुप्रति कोचिंग योजना",
  "category": "scholarships",
  "state": "rajasthan",
  "stateLabel_en": "Rajasthan State Scheme",
  "stateLabel_hi": "राजस्थान राज्य योजना",
  "status": "Active",
  "lastVerified": "October 14, 2026",
  "benefitSummary_en": "100% free coaching in reputed institutes for UPSC, RPSC, REET, NEET, IIT-JEE, and banking exams, plus ₹40,000 annual accommodation allowance for outstation students in Rajasthan.",
  "benefitSummary_hi": "आईएएस, आरएएस, नीट, जेईई व अन्य प्रतियोगी परीक्षाओं हेतु प्रतिष्ठित संस्थानों में निःशुल्क कोचिंग तथा बाहर रहकर पढ़ने पर ₹40,000 वार्षिक आवास भत्ता।",
  "benefitAmount_en": "100% Free Coaching + ₹40,000/year living allowance",
  "benefitAmount_hi": "100% मुफ्त कोचिंग + ₹40,000 सालाना आवास/भोजन भत्ता",
  "whoCanApply_en": "Meritorious SC, ST, OBC, MBC, EWS, and minority students of Rajasthan with family annual income up to ₹8 Lakh.",
  "whoCanApply_hi": "राजस्थान के मूल निवासी एससी, एसटी, ओबीसी, एमबीसी, ईडब्ल्यूएस व अल्पसंख्यक छात्र जिनकी पारिवारिक वार्षिक आय ₹8 लाख तक हो।",
  "applicationMode": "Online via sso.rajasthan.gov.in (SJMS Portal)",
  "bannerImage": "/images/schemes/rajasthan-anupriti-coaching.webp",
  "whatIsThis_en": "Mukhyamantri Anupriti Coaching Yojana breaks financial barriers for underprivileged youth in Rajasthan, granting merit seats in top coaching centers with state-funded fees.",
  "whatIsThis_hi": "अनुप्रति कोचिंग योजना राजस्थान सरकार की अनूठी पहल है जो आर्थिक रूप से कमजोर मेधावी युवाओं को सिविल सेवा व मेडिकल-इंजीनियरिंग की मुफ्त तैयारी कराती है।",
  "benefitsList_en": [
    "Complete tuition fee waiver for premier coaching institutes across Jaipur, Kota, Jodhpur, and Delhi.",
    "₹40,000 per annum paid directly to students living in hostels or rented rooms away from home.",
    "Over 30,000 merit coaching seats allocated annually.",
    "Covers UPSC Civil Services, RPSC RAS, Sub-Inspector, REET, Constable, Patwari, CLAT, NEET, and IIT-JEE."
  ],
  "benefitsList_hi": [
    "जयपुर, कोटा, जोधपुर आदि के शीर्ष कोचिंग संस्थानों की पूरी फीस सरकार द्वारा वहन।",
    "अपने गृह नगर से बाहर हॉस्टल/किराये पर रहने वाले छात्रों को ₹40,000 वार्षिक आवास व भोजन भत्ता।",
    "प्रति वर्ष 30,000 से अधिक मेधावी सीटों पर पारदर्शी चयन।",
    "आईएएस, आरएएस, सब-इंस्पेक्टर, नीट, जेईई व क्लैट की संपूर्ण तैयारी।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "Domicile resident of Rajasthan.",
      "Belongs to SC, ST, OBC, MBC, EWS, or Minority communities.",
      "Family annual income must not exceed ₹8,00,000.",
      "Meets minimum 10th/12th qualifying percentage for the chosen coaching track."
    ],
    "eligibleIf_hi": [
      "राजस्थान का मूल निवासी छात्र/छात्रा।",
      "अनुसूचित जाति, जनजाति, ओबीसी, एमबीसी, ईडब्ल्यूएस या अल्पसंख्यक वर्ग से संबंधित हों।",
      "परिवार की वार्षिक आय ₹8 लाख या उससे कम हो।",
      "संबंधित परीक्षा की न्यूनतम शैक्षणिक योग्यता पूरी करते हों।"
    ],
    "notEligibleIf_en": [
      "Already availed Anupriti coaching benefit for the same competitive exam stage earlier.",
      "Family income above ₹8 Lakh."
    ],
    "notEligibleIf_hi": [
      "पूर्व में उसी परीक्षा हेतु अनुप्रति योजना का लाभ ले चुके हों।",
      "पारिवारिक आय ₹8 लाख से अधिक हो।"
    ]
  },
  "requiredDocuments_en": [
    "Jan Aadhaar Card / Rajasthan SSO ID",
    "Caste Certificate (Jati Praman Patra)",
    "Income Certificate (below ₹8 Lakh)",
    "10th and 12th marksheet",
    "Domicile Certificate (Mool Niwas Praman Patra)",
    "Bank passbook details in Jan Aadhaar"
  ],
  "requiredDocuments_hi": [
    "जन आधार कार्ड / एसएसओ आईडी (SSO ID)",
    "जाति प्रमाण पत्र",
    "आय प्रमाण पत्र (सालाना ₹8 लाख से कम)",
    "10वीं व 12वीं की अंकतालिका",
    "मूल निवास प्रमाण पत्र",
    "जन आधार से लिंक बैंक खाता"
  ],
  "howToApply_en": [
    "Log in to sso.rajasthan.gov.in using your SSO ID and password.",
    "Click on the \"SJMS Portal\" and select \"Mukhyamantri Anupriti Coaching Yojana\".",
    "Fetch your Jan Aadhaar profile and select the competitive exam track and preferred coaching institute.",
    "Submit the application. Merit lists are announced transparently based on 10th/12th marks."
  ],
  "howToApply_hi": [
    "sso.rajasthan.gov.in पर अपनी एसएसओ आईडी से लॉगिन करें।",
    "SJMS पोर्टल पर जाकर \"मुख्यमंत्री अनुप्रति कोचिंग योजना\" का चयन करें।",
    "जन आधार से डाटा सत्यापित कर पसंदीदा प्रतियोगी परीक्षा और कोचिंग संस्थान का चयन करें।",
    "फॉर्म सबमिट करें; 10वीं/12वीं के अंकों की मेरिट के आधार पर चयन सूची जारी होती है।"
  ],
  "statusCheckGuide_en": "Log in on sso.rajasthan.gov.in to check application verification status, district merit rank, and coaching allotment letter.",
  "statusCheckGuide_hi": "एसएसओ पोर्टल पर लॉगिन कर अपनी मेरिट रैंक और कोचिंग आवंटन पत्र (Allotment Letter) डाउनलोड करें।",
  "officialStatusUrl": "https://sso.rajasthan.gov.in",
  "commonProblems_en": [
    {
      "problem": "Jan Aadhaar profile missing caste or income data",
      "solution": "Update your Jan Aadhaar card details at any E-Mitra kiosk before filling the coaching form."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "जन आधार में जाति या आय अपडेट न होना",
      "solution": "फॉर्म भरने से पहले ई-मित्र केंद्र पर जाकर जन आधार कार्ड में जाति व आय अपडेट कराएं।"
    }
  ],
  "faqs_en": [
    {
      "q": "Is there any exam to get selected in Anupriti Coaching?",
      "a": "No entrance exam is conducted. Selection is done strictly on the basis of 10th and 12th board examination marks."
    }
  ],
  "faqs_hi": [
    {
      "q": "क्या अनुप्रति कोचिंग में चयन के लिए कोई परीक्षा देनी होती है?",
      "a": "नहीं। चयन पूर्णतः 10वीं व 12वीं बोर्ड परीक्षा के अंकों की मेरिट के आधार पर पारदर्शी तरीके से किया जाता है।"
    }
  ],
  "officialSources": [
    {
      "name": "Social Justice and Empowerment Department",
      "authority": "Government of Rajasthan",
      "url": "https://sje.rajasthan.gov.in",
      "verificationDate": "October 14, 2026"
    }
  ],
  "keywords": [
    "anupriti coaching yojana",
    "sso rajasthan gov in",
    "free neet iit coaching rajasthan",
    "anupriti merit list",
    "अनुप्रति कोचिंग योजना",
    "राजस्थान फ्री कोचिंग"
  ],
  "metaDescription_en": "Mukhyamantri Anupriti Coaching Yojana Rajasthan: Free coaching for UPSC, NEET, IIT-JEE, and ₹40,000 living allowance. Eligibility criteria, SSO online application.",
  "metaDescription_hi": "मुख्यमंत्री अनुप्रति कोचिंग योजना राजस्थान: यूपीएससी, नीट, जेईई की मुफ्त कोचिंग व ₹40,000 आवास भत्ता, पात्रता व एसएसओ ऑनलाइन फॉर्म।"
}
];
