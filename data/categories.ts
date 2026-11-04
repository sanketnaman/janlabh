import { CategoryInfo, StateInfo } from '@/types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'farmers',
    name_en: 'Farmers & Agriculture',
    name_hi: 'किसान और कृषि कल्याण',
    iconName: 'Tractor',
    description_en: 'Direct income support, crop insurance, solar pump subsidies, and agricultural credit schemes for cultivators.',
    description_hi: 'प्रत्यक्ष आय सहायता, फसल बीमा, सोलर पंप सब्सिडी और किसानों के लिए रियायती कृषि ऋण योजनाएं।',
    priorityCriteria_en: 'Landholding records (Khata/Khesra), Aadhaar-linked DBT account, and e-KYC compliance.',
    priorityCriteria_hi: 'भूमि रिकॉर्ड (खाता/खसरा), आधार लिंक डीबीटी बैंक खाता, और ई-केवाईसी पूर्णता।'
  },
  {
    id: 'women',
    name_en: 'Women Empowerment',
    name_hi: 'महिला सशक्तिकरण व सहायता',
    iconName: 'HeartHandshake',
    description_en: 'Direct financial assistance, maternity benefits, self-help group livelihood loans, and safety initiatives.',
    description_hi: 'मासिक आर्थिक सहायता, मातृत्व पोषण लाभ, स्वयं सहायता समूह (SHG) ऋण और आजीविका कार्यक्रम।',
    priorityCriteria_en: 'Age brackets (18–50/60 years), family annual income thresholds, and non-taxpayer status.',
    priorityCriteria_hi: 'आयु सीमा (18 से 50/60 वर्ष), पारिवारिक आय सीमा और गैर-आयकरदाता प्रमाण।'
  },
  {
    id: 'students',
    name_en: 'Students & Higher Education',
    name_hi: 'छात्र व उच्च शिक्षा',
    iconName: 'GraduationCap',
    description_en: 'Zero or low-interest education loans, laptop distributions, tuition fee waivers, and coaching support.',
    description_hi: 'सस्ती शिक्षा ऋण योजनाएं, लैपटॉप वितरण, शिक्षण शुल्क प्रतिपूर्ति और प्रतियोगी कोचिंग सहायता।',
    priorityCriteria_en: 'Enrollment in recognized institutions, minimum percentage in qualifying examination.',
    priorityCriteria_hi: 'मान्यता प्राप्त संस्थान में प्रवेश, पिछली कक्षा में न्यूनतम आवश्यक अंक प्रतिशत।'
  },
  {
    id: 'scholarships',
    name_en: 'Scholarships (Pre & Post Matric)',
    name_hi: 'छात्रवृत्ति (प्री व पोस्ट मैट्रिक)',
    iconName: 'Award',
    description_en: 'National and state merit-cum-means financial aid for SC, ST, OBC, EWS, and minority candidates.',
    description_hi: 'एससी, एसटी, ओबीसी, ईडब्ल्यूएस और अल्पसंख्यक छात्रों के लिए राष्ट्रीय व राज्य स्तरीय वित्तीय सहायता।',
    priorityCriteria_en: 'Income certificate (under ₹2.5 Lakh/annum for post-matric), OTR registration, and biometric KYC.',
    priorityCriteria_hi: 'पारिवारिक आय प्रमाण पत्र (सालाना ₹2.5 लाख से कम), ओसीआर/एनएसपी पंजीकरण और बायोमेट्रिक।'
  },
  {
    id: 'health',
    name_en: 'Health & Medical Cover',
    name_hi: 'स्वास्थ्य और मुफ्त इलाज',
    iconName: 'ShieldPlus',
    description_en: 'Cashless inpatient treatment up to ₹5 Lakh/year in empanelled hospitals for families and senior citizens.',
    description_hi: 'सूचीबद्ध अस्पतालों में प्रति वर्ष ₹5 लाख तक का कैशलेस इलाज व 70+ वरिष्ठ नागरिकों के लिए विशेष कार्ड।',
    priorityCriteria_en: 'SECC 2011 inclusion, active Ration card, or Age 70+ for Vaya Vandana card.',
    priorityCriteria_hi: 'राशन कार्ड में नाम, एसईसीसी 2011 डेटाबेस या 70 वर्ष से अधिक आयु (वय वंदना कार्ड)।'
  },
  {
    id: 'housing',
    name_en: 'Housing & Shelter (Awas)',
    name_hi: 'आवास व पक्का मकान',
    iconName: 'Home',
    description_en: 'Financial grants to construct permanent pucca homes in rural and urban areas for homeless or kutcha householders.',
    description_hi: 'कच्चे घरों या बेघर परिवारों को पक्का मकान निर्माण हेतु सीधी सरकारी वित्तीय सहायता।',
    priorityCriteria_en: 'Kutcha roof/wall house, absence of motorized vehicles or government salaried family members.',
    priorityCriteria_hi: 'कच्चा मकान होना, परिवार में कोई सरकारी नौकरी या चार पहिया वाहन न होना।'
  },
  {
    id: 'pension',
    name_en: 'Social Security & Pension',
    name_hi: 'पेंशन व सामाजिक सुरक्षा',
    iconName: 'UserCheck',
    description_en: 'Monthly financial security for senior citizens, widows, differently-abled persons, and unorganized workers.',
    description_hi: 'वृद्धावस्था, विधवा, दिव्यांगजनों और असंगठित क्षेत्र के कामगारों के लिए मासिक सम्मान पेंशन।',
    priorityCriteria_en: 'Age 60+ (Old Age), death certificate of spouse (Widow), disability certificate 40%+ (Divyang).',
    priorityCriteria_hi: 'आयु 60 वर्ष या अधिक (वृद्धा), पति का मृत्यु प्रमाण पत्र (विधवा), 40% दिव्यांगता प्रमाण पत्र।'
  },
  {
    id: 'employment',
    name_en: 'Skills & Employment',
    name_hi: 'कौशल विकास व स्वरोजगार',
    iconName: 'Briefcase',
    description_en: 'Government subsidized artisan loans, toolkits, 100-day wage guarantee (MGNREGS), and apprenticeship stipends.',
    description_hi: 'कारीगरों के लिए सस्ता ऋण, मुफ्त टूलकिट, 100 दिन का कानूनी रोजगार और अप्रेंटिसशिप वजीफा।',
    priorityCriteria_en: 'Traditional craft practice (Vishwakarma), job card registration (MGNREGA), age 18–45.',
    priorityCriteria_hi: 'पारंपरिक 18 ट्रेड कारीगर (विश्वकर्मा), जॉब कार्डधारक (मनरेगा), आयु 18 से 45 वर्ष।'
  }
];

export const STATES: StateInfo[] = [
  {
    id: 'all-india',
    name_en: 'Central Government (All India)',
    name_hi: 'केंद्र सरकार (अखिल भारतीय)',
    capital_en: 'New Delhi',
    capital_hi: 'नई दिल्ली',
    activeSchemesCount: 45,
    description_en: 'Flagship nationwide welfare schemes funded fully or centrally sponsored by Ministries of Government of India.',
    description_hi: 'भारत सरकार के मंत्रालयों द्वारा देश भर के पात्र नागरिकों के लिए संचालित केंद्रीय योजनाएं।',
    flagshipPrograms_en: ['PM-Kisan', 'Ayushman Bharat', 'PM Awas Yojana', 'PM Vishwakarma', 'Atal Pension Yojana'],
    flagshipPrograms_hi: ['पीएम किसान', 'आयुष्मान भारत', 'पीएम आवास योजना', 'पीएम विश्वकर्मा', 'अटल पेंशन']
  },
  {
    id: 'jharkhand',
    name_en: 'Jharkhand',
    name_hi: 'झारखंड',
    capital_en: 'Ranchi',
    capital_hi: 'राँची',
    activeSchemesCount: 28,
    description_en: 'Comprehensive state-funded welfare programs focusing on tribal welfare, women monthly support, and housing.',
    description_hi: 'महिला सम्मान, अबुआ आवास, मरांग गोमके छात्रवृत्ति और सर्वजन पेंशन जैसे प्रमुख राज्य कल्याणकारी कार्यक्रम।',
    flagshipPrograms_en: ['Mukhyamantri Maiya Samman Yojana', 'Abua Awas Yojana', 'Guruji Student Credit Card', 'Sarvajan Pension'],
    flagshipPrograms_hi: ['मुख्यमंत्री मंईयां सम्मान योजना', 'अबुआ आवास योजना', 'गुरुजी स्टूडेंट क्रेडिट कार्ड', 'सर्वजन पेंशन योजना']
  },
  {
    id: 'bihar',
    name_en: 'Bihar',
    name_hi: 'बिहार',
    capital_en: 'Patna',
    capital_hi: 'पटना',
    activeSchemesCount: 24,
    description_en: 'Saat Nischay-II flagship youth, higher education, women employment, and entrepreneurship initiatives.',
    description_hi: 'सात निश्चय-2 के तहत बिहार स्टूडेंट क्रेडिट कार्ड, मुख्यमंत्री कन्या उत्थान और उद्यमी सहायता योजनाएं।',
    flagshipPrograms_en: ['Bihar Student Credit Card', 'Mukhyamantri Kanya Utthan', 'Udyami Yojana', 'Laxmi Bai Social Security Pension'],
    flagshipPrograms_hi: ['बिहार स्टूडेंट क्रेडिट कार्ड', 'मुख्यमंत्री कन्या उत्थान', 'मुख्यमंत्री उद्यमी योजना', 'लक्ष्मीबाई सामाजिक सुरक्षा पेंशन']
  },
  {
    id: 'uttar-pradesh',
    name_en: 'Uttar Pradesh',
    name_hi: 'उत्तर प्रदेश',
    capital_en: 'Lucknow',
    capital_hi: 'लखनऊ',
    activeSchemesCount: 32,
    description_en: 'Social security pensions, rural banking correspondent (BC Sakhi) livelihood, and daughter marriage aid.',
    description_hi: 'वृद्धावस्था पेंशन, बीसी सखी, शादी अनुदान, मुख्यमंत्री कन्या सुमंगला और अभ्युदय मुफ्त कोचिंग।',
    flagshipPrograms_en: ['Kanya Sumangala Yojana', 'BC Sakhi Yojana', 'UP Shadi Anudan', 'Abhyudaya Free Coaching'],
    flagshipPrograms_hi: ['कन्या सुमंगला योजना', 'बीसी सखी योजना', 'शादी अनुदान योजना', 'अभ्युदय निशुल्क कोचिंग']
  },
  {
    id: 'rajasthan',
    name_en: 'Rajasthan',
    name_hi: 'राजस्थान',
    capital_en: 'Jaipur',
    capital_hi: 'जयपुर',
    activeSchemesCount: 22,
    description_en: 'Direct social security pensions, free medicine programs, and agricultural subsidy schemes.',
    description_hi: 'सामाजिक सुरक्षा पेंशन, निःशुल्क दवा योजना और किसान साथी सब्सिडी कार्यक्रम।',
    flagshipPrograms_en: ['Jan Samman Pension', 'Kisan Seva Portal', 'Anuprati Coaching'],
    flagshipPrograms_hi: ['जन सम्मान पेंशन', 'किसान सेवा पोर्टल', 'अनुप्रति कोचिंग योजना']
  },
  {
    id: 'madhya-pradesh',
    name_en: 'Madhya Pradesh',
    name_hi: 'मध्य प्रदेश',
    capital_en: 'Bhopal',
    capital_hi: 'भोपाल',
    activeSchemesCount: 25,
    description_en: 'Direct cash transfer schemes for rural and urban women, crop loss compensation, and education incentives.',
    description_hi: 'लाडली बहना योजना, किसान कल्याण और मेधावी विद्यार्थी प्रोत्साहन योजना।',
    flagshipPrograms_en: ['Ladli Behna Yojana', 'Kalyan Yojana for Farmers', 'Medhavi Vidyarthi'],
    flagshipPrograms_hi: ['लाड़ली बहना योजना', 'किसान कल्याण योजना', 'मेधावी विद्यार्थी योजना']
  },
  {
    id: 'maharashtra',
    name_en: 'Maharashtra',
    name_hi: 'महाराष्ट्र',
    capital_en: 'Mumbai',
    capital_hi: 'मुंबई',
    activeSchemesCount: 21,
    description_en: 'Majhi Ladki Bahin direct financial assistance, crop insurance, and state youth apprenticeship stipend.',
    description_hi: 'माझी लाडकी बहीण योजना, ₹1 में फसल बीमा और युवा कार्यप्रशिक्षण योजना।',
    flagshipPrograms_en: ['Majhi Ladki Bahin Yojana', 'Namo Shetkari Mahasanman', 'Yuva Karya Prashikshan'],
    flagshipPrograms_hi: ['माझी लाडकी बहीण योजना', 'नमो शेतकरी महासन्मान', 'युवा कार्यप्रशिक्षण योजना']
  }
];
