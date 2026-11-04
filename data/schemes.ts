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
  }
];
