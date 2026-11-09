import { Scheme } from '@/types';

export const SCHEMES: Scheme[] = [
  {
    id: 'pm-kisan',
    slug: 'pm-kisan-samman-nidhi',
    title_en: 'PM Kisan Samman Nidhi 2026: 24th Installment Released, 25th Date Status, e-KYC & Status Check',
    title_hi: 'पीएम किसान सम्मान निधि 2026: 24वीं किस्त जारी, 25वीं किस्त कब आएगी? e-KYC, स्टेटस चेक व नई लिस्ट',
    shortTitle_en: 'PM-Kisan Samman Nidhi',
    shortTitle_hi: 'प्रधानमंत्री किसान सम्मान निधि',
    category: 'farmers',
    state: 'all-india',
    stateLabel_en: 'Central (All India)',
    stateLabel_hi: 'केंद्र सरकार (अखिल भारतीय)',
    status: 'Active',
    lastVerified: 'November 09, 2026',
    
    benefitSummary_en: '₹6,000 direct income support per year credited in 3 equal four-monthly installments of ₹2,000 directly to Aadhaar-seeded bank accounts via DBT. 24th installment was released on 30 October 2026 from Banaskantha, Gujarat.',
    benefitSummary_hi: 'प्रति वर्ष ₹6,000 की प्रत्यक्ष आर्थिक सहायता, जो ₹2,000 की 3 समान किस्तों में सीधे आधार-सीडेड बैंक खाते में डीबीटी (DBT) द्वारा भेजी जाती है। 24वीं किस्त 30 अक्टूबर 2026 को बनासकांठा (गुजरात) से जारी की गई।',
    benefitAmount_en: '₹6,000 / year (₹2,000 every 4 months)',
    benefitAmount_hi: '₹6,000 प्रति वर्ष (₹2,000 की 3 किस्तें)',
    whoCanApply_en: 'Small and marginal landholding farmer families with cultivable land parcels in their name.',
    whoCanApply_hi: 'छोटे व सीमांत किसान परिवार जिनके नाम पर कृषि योग्य भूमि के वैध राजस्व दस्तावेज (खतियान/जमाबंदी) दर्ज हैं।',
    applicationMode: 'Online (pmkisan.gov.in) & Offline (CSC Center)',
    bannerImage: '/images/schemes/pm-kisan-samman-nidhi.png',
    
    whatIsThis_en: 'PM Kisan Samman Nidhi is a 100% Central Government funded flagship initiative designed to provide direct financial assistance of ₹6,000 per year to landholding farmer families across India. The 24th installment was released on 30 October 2026 from Banaskantha, Gujarat, transferring over ₹18,690 crore directly to more than 9.34 crore farmers. As of 9 November 2026, the 25th installment date has not been officially announced. Beneficiaries must complete e-KYC, Land Seeding, Aadhaar-Bank NPCI mapping, and AgriStack Digital Farmer ID integration.',
    whatIsThis_hi: 'प्रधानमंत्री किसान सम्मान निधि भारत सरकार की 100% केंद्र-पोषित फ्लैगशिप योजना है, जिसके तहत देश भर के पात्र भूमिधारक किसान परिवारों को ₹6,000 प्रति वर्ष (₹2,000 की 3 किस्तों में) प्रत्यक्ष आर्थिक सहायता दी जाती है। योजना की 24वीं किस्त 30 अक्टूबर 2026 को बनासकांठा (गुजरात) से जारी की गई, जिसके तहत 9.34 करोड़ से अधिक किसानों को ₹18,690 करोड़ से ज्यादा सीधे डीबीटी द्वारा भेजे गए। 9 नवंबर 2026 की स्थिति के अनुसार 25वीं किस्त की आधिकारिक तारीख घोषित नहीं हुई है। योजना का निर्बाध लाभ पाने के लिए ई-केवाईसी, लैंड सीडिंग, एनपीसीआई आधार मैपिंग और एग्रीस्टैक फार्मर आईडी अनिवार्य है।',
    
    benefitsList_en: [
      '₹2,000 sent directly to the bank account every 4 months (April-July, August-November, December-March).',
      'Total ₹6,000 annual direct cash assistance without middlemen or commission cuts.',
      'Direct Benefit Transfer (DBT) via Aadhaar-linked NPCI payment gateway ensuring zero leakage.',
      'Face Authentication feature in the official PM-KISAN mobile app for seamless biometric e-KYC without fingerprint scanner.',
      'Integration with Digital Agriculture Mission (AgriStack Farmer ID) and low-interest Kisan Credit Card (KCC) loans up to ₹3 Lakh.'
    ],
    benefitsList_hi: [
      'हर 4 महीने में ₹2,000 सीधे बैंक खाते में (अप्रैल-जुलाई, अगस्त-नवंबर, दिसंबर-मार्च)।',
      'सालाना ₹6,000 की सुनिश्चित आर्थिक सहायता, बिना किसी बिचौलिए या कमीशन कटौती के।',
      'प्रत्यक्ष लाभ अंतरण (DBT) और एनपीसीआई (NPCI) मैपिंग से सीधा पारदर्शी भुगतान।',
      'आधिकारिक PM-KISAN मोबाइल ऐप में फेस ऑथेंटिकेशन (Face Auth) से बिना फिंगरप्रिंट घर बैठे ई-केवाईसी की सुविधा।',
      'डिजिटल कृषि मिशन (एग्रीस्टैक फार्मर आईडी) से जुड़ाव और रियायती ब्याज दर पर ₹3 लाख तक का किसान क्रेडिट कार्ड (KCC) ऋण।'
    ],
    
    eligibility: {
      eligibleIf_en: [
        'The applicant is a citizen of India residing in any State or Union Territory.',
        'The farmer family holds cultivable agricultural land registered in their name in state land records.',
        'Definition of family: Husband, wife, and minor children (single beneficiary unit; only one eligible landholder per family can receive benefits).',
        'Landholding transfer cut-off date: 1 February 2019 (land transferred after this date is eligible only via inheritance on the death of landowner).',
        'The applicant has an active Aadhaar card linked with their bank account (NPCI DBT mapped).',
        'e-KYC has been successfully completed via OTP on PM-Kisan portal, biometric at CSC center, or Face Auth on PM-KISAN app.',
        'Land seeding verification status shows "YES" in the revenue portal database.'
      ],
      eligibleIf_hi: [
        'आवेदक भारत का नागरिक हो और किसी भी राज्य या केंद्र शासित प्रदेश का निवासी हो।',
        'किसान परिवार के नाम पर कृषि योग्य भूमि के वैध राजस्व रिकॉर्ड (खतियान/जमाबंदी) दर्ज हों।',
        'परिवार की कानूनी परिभाषा: पति, पत्नी और उनके नाबालिग बच्चे एक एकल लाभार्थी इकाई हैं (परिवार से केवल एक ही भूमिधारक को ₹6,000 सालाना मिल सकता है)।',
        'कट-ऑफ डेट नियम: 1 फरवरी 2019 के बाद जमीन की रजिस्ट्री होने पर अपात्रता (केवल पारिवारिक उत्तराधिकार/विरासत के आधार पर छूट मान्य)।',
        'बैंक खाता आधार कार्ड से जुड़ा हो और एनपीसीआई (NPCI) डीबीटी के लिए सक्रिय रूप से मैप हो।',
        'पीएम किसान पोर्टल पर ओटीपी, सीएससी केंद्र पर बायोमेट्रिक, अथवा PM-KISAN ऐप पर फेस ऑथ द्वारा ई-केवाईसी पूर्ण हो।',
        'राजस्व पोर्टल डेटाबेस में लैंड सीडिंग (Land Seeding) स्टेटस "YES" सत्यापित हो।'
      ],
      notEligibleIf_en: [
        'Institutional landholders or persons holding only non-agricultural land.',
        'Present or retired constitutional post holders, Ministers, MPs, MLAs, MLCs, Mayors, or Zila Panchayat Chairpersons.',
        'Serving or retired officers and employees of Central/State Government departments and PSUs (excluding Class IV / Multi-Tasking Staff).',
        'All retired pensioners receiving a monthly pension of ₹10,000 or more (excluding Class IV employees).',
        'Any individual who paid income tax in the last assessment year.',
        'Professionals like Doctors, Engineers, Lawyers, Chartered Accountants (CA), and Registered Architects.'
      ],
      notEligibleIf_hi: [
        'संस्थागत भूमि धारक या केवल गैर-कृषि / आवासीय भूमि वाले व्यक्ति।',
        'संवैधानिक पदों के वर्तमान या पूर्व धारक, मंत्री, सांसद, विधायक, विधान पार्षद, मेयर या जिला पंचायत अध्यक्ष।',
        'केंद्र/राज्य सरकार और सार्वजनिक उपक्रमों के सेवारत या सेवानिवृत्त कर्मचारी (ग्रुप-डी/चतुर्थ श्रेणी/एमटीएस को छोड़कर)।',
        '₹10,000 या अधिक की मासिक पेंशन प्राप्त करने वाले सेवानिवृत्त पेंशनभोगी (चतुर्थ श्रेणी कर्मचारियों को छोड़कर)।',
        'गत वित्तीय वर्ष में आयकर (Income Tax) का भुगतान करने वाले व्यक्ति या परिवार।',
        'डॉक्टर, इंजीनियर, वकील, चार्टर्ड अकाउंटेंट (सीए) और आर्किटेक्ट जैसे पंजीकृत पेशेवर।'
      ]
    },
    
    requiredDocuments_en: [
      'Aadhaar Card of the applicant farmer (linked with active mobile number)',
      'Proof of cultivable land ownership (Khata, Khesra, Jamabandi / RoR document / Land Revenue Receipt)',
      'Bank Account Passbook (Bank account must be NPCI Aadhaar Seeded for DBT)',
      'Active Mobile Number linked to Aadhaar for OTP verification and FaceRD',
      'Digital Farmer ID (AgriStack) where mandated by State Agriculture Department',
      'Self-Declaration form confirming non-income-taxpayer status and eligible landholding'
    ],
    requiredDocuments_hi: [
      'आवेदक किसान का आधार कार्ड (सक्रिय मोबाइल नंबर से लिंक)',
      'कृषि योग्य भूमि स्वामित्व का आधिकारिक प्रमाण (खतियान, जमाबंदी पर्चा, लगान रसीद / RoR)',
      'बैंक पासबुक (खाता एनपीसीआई आधार सीडेड व डीबीटी सक्रिय होना अनिवार्य है)',
      'आधार से लिंक चालू मोबाइल नंबर (ओटीपी सत्यापन व फेस ऑथेंटिकेशन हेतु)',
      'डिजिटल फार्मर आईडी (AgriStack) जहाँ राज्य कृषि विभाग द्वारा लागू किया गया है',
      'गैर-आयकरदाता एवं पात्रता का स्व-घोषणा पत्र'
    ],
    
    howToApply_en: [
      'Visit the official PM Kisan portal at pmkisan.gov.in.',
      'Under the "Farmers Corner" section, click on "New Farmer Registration".',
      'Select whether you are a "Rural Farmer Registration" or "Urban Farmer Registration".',
      'Enter your 12-digit Aadhaar Number, 10-digit Mobile Number, select your State, and submit the OTP.',
      'Fill in personal details, district, sub-district, block, village, and land record details (Survey/Khata No., Khasra No., Area in Hectare).',
      'Upload the scanned copy of your land revenue document (PDF) and submit the application.',
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
    
    statusCheckGuide_en: 'To check your payment and installment status: 1. Go to pmkisan.gov.in > Farmers Corner > "Know Your Status". 2. Enter your Registration Number (or click "Know Your Registration Number" using Aadhaar or Mobile). 3. Enter the Captcha and verify OTP to view your installment release date, FTO generation status, and bank credit details. Ensure e-KYC, Land Seeding, and Aadhaar-Bank Seeding all show green YES. Never share your OTP with unknown callers.',
    statusCheckGuide_hi: 'अपनी किस्त और आवेदन का स्टेटस देखने के लिए: 1. pmkisan.gov.in पर जाएं और "Know Your Status" विकल्प चुनें। 2. अपना रजिस्ट्रेशन नंबर दर्ज करें (रजिस्ट्रेशन नंबर नहीं पता तो आधार कार्ड या मोबाइल नंबर से सर्च करें)। 3. कैप्चा और ओटीपी सत्यापित करें। यहां आपको किस्त ट्रांसफर की तारीख, FTO जेनरेशन और बैंक क्रेडिट का पूरा ब्योरा दिखेगा। सुनिश्चित करें कि e-KYC, Land Seeding और Aadhaar-Bank Seeding तीनों हरे YES दिख रहे हैं। किसी भी अनजान व्यक्ति को अपना ओटीपी न दें।',
    officialStatusUrl: 'https://pmkisan.gov.in/BeneficiaryStatus_New.aspx',
    
    commonProblems_en: [
      {
        problem: 'Land Seeding status shows "NO"',
        solution: 'Visit your local Circle Office (Tehsil/Block) or Agriculture Coordinator with your original land records (Khata/Khesra/Jamabandi) to update and link your land verification in the revenue database.'
      },
      {
        problem: 'e-KYC Pending or Incomplete',
        solution: 'Complete e-KYC immediately on pmkisan.gov.in using Aadhaar OTP (free of cost), through Face Auth on PM-KISAN App, or visit your nearest CSC Center for biometric fingerprint e-KYC.'
      },
      {
        problem: 'Bank Account Not Aadhaar Seeded / DBT Inactive',
        solution: 'Visit your bank branch and submit the "NPCI Aadhaar Seeding / Mandate Form", or open a DBT-enabled Aadhaar-seeded account in India Post Payments Bank (IPPB).'
      },
      {
        problem: 'FTO is Generated and Payment confirmation is pending',
        solution: 'This indicates the Central Government has verified your eligibility and sent the fund release order to PFMS. The installment will reflect in your account within a few business days.'
      }
    ],
    commonProblems_hi: [
      {
        problem: 'लैंड सीडिंग (Land Seeding) स्टेटस "NO" दिखा रहा है',
        solution: 'अपनी जमीन के मूल कागजात (खतियान, जमाबंदी रसीद) लेकर अपने तहसील/ब्लॉक कार्यालय में अंचल अधिकारी या कृषि समन्वयक से मिलें और पोर्टल पर लैंड रिकॉर्ड सत्यापित करवाएं।'
      },
      {
        problem: 'ई-केवाईसी (e-KYC) लंबित या अधूरा है',
        solution: 'पोर्टल पर आधार ओटीपी के माध्यम से मुफ्त ई-केवाईसी तुरंत पूर्ण करें, PM-KISAN ऐप में फेस ऑथेंटिकेशन का उपयोग करें, या नजदीकी सीएससी केंद्र पर जाकर बायोमेट्रिक फिंगरप्रिंट द्वारा करवाएं।'
      },
      {
        problem: 'बैंक खाता आधार से सीडेड नहीं है या डीबीटी अमान्य है',
        solution: 'अपनी बैंक शाखा में जाकर एनपीसीआई आधार सीडिंग फॉर्म जमा करें अथवा इंडिया पोस्ट पेमेंट्स बैंक (IPPB) में नया डीबीटी सक्षम खाता खुलवाएं।'
      },
      {
        problem: 'FTO Generated दिखा रहा है पर पैसा नहीं आया',
        solution: 'FTO (Fund Transfer Order) का मतलब है कि सरकार ने आपकी पात्रता स्वीकार कर भुगतान आदेश जारी कर दिया है। 2 से 4 कार्यदिवसों में राशि सीधे आपके खाते में क्रेडिट हो जाएगी।'
      }
    ],
    
    faqs_en: [
      {
        q: 'What is the latest status of PM Kisan 24th and 25th installment in 2026?',
        a: 'The 24th installment was released on 30 October 2026 from Banaskantha, Gujarat, transferring over ₹18,690 crore directly to more than 9.34 crore eligible farmers via DBT. As of 9 November 2026, the 25th installment date has not been officially announced by the Ministry of Agriculture. Under the normal 4-month cycle (December–March), it is expected tentatively around February/March 2027.'
      },
      {
        q: 'How to check PM Kisan beneficiary status by Aadhaar Card or Mobile Number?',
        a: "Visit pmkisan.gov.in > Click \"Know Your Status\" > If you don't remember your Registration Number, click \"Know your Registration No.\", enter your Aadhaar Card number or registered mobile number to retrieve it, and submit the OTP to see full payment history."
      },
      {
        q: 'How to complete PM Kisan e-KYC online, offline and via Face Auth?',
        a: 'Online: Visit pmkisan.gov.in > click "e-KYC" > enter Aadhaar number > verify OTP. Offline: Visit any Common Service Center (CSC) for biometric fingerprint verification. Mobile App: Download official PM-KISAN mobile app along with UIDAI FaceRD to complete face-scanning e-KYC without fingerprint scanner.'
      },
      {
        q: 'Why is my PM Kisan ₹2,000 installment not credited? How to fix it?',
        a: 'The three most common reasons are: 1. Land Seeding marked as "NO" (fix by submitting land records at your Block/Tehsil), 2. e-KYC incomplete, and 3. Bank account not linked to NPCI Aadhaar DBT. Once these 3 indicators show green "YES" in your status, pending arrears are automatically released.'
      },
      {
        q: 'What is AgriStack and is Farmer ID mandatory for PM Kisan?',
        a: 'AgriStack is the Digital Public Infrastructure for Agriculture launched by the Government of India. Under this system, states are creating a unique 14-digit digital Farmer ID linked to land records. Linking Farmer ID with PM-KISAN eliminates paperwork, automates land verification, and provides single-window access to Kisan Credit Card and crop insurance.'
      },
      {
        q: 'How to check your name in PM Kisan Village Wise Beneficiary List?',
        a: 'Go to pmkisan.gov.in > Farmers Corner > click "Beneficiary List" > select your State, District, Sub-District, Block, and Village > click "Get Report" to view the complete list of registered farmers receiving benefits in your village.'
      },
      {
        q: 'Can both husband and wife receive PM-Kisan payments?',
        a: 'No. The scheme definition specifies a "farmer family" (consisting of husband, wife, and minor children) as a single beneficiary unit. Only one adult cultivator per family unit can legally receive the ₹6,000 annual benefit.'
      },
      {
        q: 'What is the official PM Kisan toll-free helpline number?',
        a: 'The official Government of India PM Kisan Helpline numbers are 155261, 1800-115-526 (Toll-Free), and 011-24300606.'
      }
    ],
    faqs_hi: [
      {
        q: 'पीएम किसान की 24वीं और 25वीं किस्त की क्या आधिकारिक स्थिति है?',
        a: 'योजना की 24वीं किस्त 30 अक्टूबर 2026 को बनासकांठा (गुजरात) से 9.34 करोड़ से अधिक किसानों को ₹18,690 करोड़ से ज्यादा डीबीटी द्वारा अंतरित की जा चुकी है। 9 नवंबर 2026 की स्थिति के अनुसार 25वीं किस्त की आधिकारिक तारीख सरकार द्वारा घोषित नहीं की गई है। 4 महीने के नियमित चक्र (दिसंबर-मार्च) के आधार पर यह फरवरी या मार्च 2027 में अपेक्षित है।'
      },
      {
        q: 'आधार कार्ड और मोबाइल नंबर से पीएम किसान का स्टेटस कैसे चेक करें?',
        a: '1. आधिकारिक वेबसाइट pmkisan.gov.in पर जाएं। 2. Farmers Corner में "Know Your Status" पर क्लिक करें। 3. यदि रजिस्ट्रेशन नंबर नहीं पता तो "Know your Registration No." लिंक पर क्लिक करें और आधार नंबर या मोबाइल नंबर दर्ज कर अपना रजिस्ट्रेशन नंबर प्राप्त करें। 4. कैप्चा व ओटीपी दर्ज कर अपनी सभी किस्तों का विवरण देखें।'
      },
      {
        q: 'पीएम किसान e-KYC (ई-केवाईसी) फेस ऑथेंटिकेशन से कैसे पूरी करें?',
        a: 'पोर्टल पर आधार ओटीपी से मुफ्त ई-केवाईसी करें, या गूगल प्ले स्टोर से PM-KISAN ऐप और UIDAI FaceRD ऐप डाउनलोड करें। ऐप में फेस ऑथेंटिकेशन चुनकर चेहरा स्कैन करें—बिना फिंगरप्रिंट डिवाइस और बिना ओटीपी के ई-केवाईसी तुरंत पूर्ण हो जाती है।'
      },
      {
        q: 'अगर 24वीं किस्त के ₹2,000 खाते में नहीं आए तो क्या करें?',
        a: 'किस्त रुकने के मुख्य 3 कारण होते हैं: 1. लैंड सीडिंग (Land Seeding) "NO" होना (तहसील/ब्लॉक में जमीन के कागजात जमा करें), 2. ई-केवाईसी अधूरा होना, और 3. बैंक खाते में NPCI आधार सीडिंग न होना। जब स्टेटस में ये तीनों बिंदु हरे (YES) हो जाएंगे, तो रुकी हुई किस्तें सीधे खाते में ट्रांसफर हो जाएंगी।'
      },
      {
        q: 'एग्रीस्टैक (AgriStack) क्या है और क्या फार्मर आईडी पीएम किसान के लिए जरूरी है?',
        a: 'एग्रीस्टैक भारत सरकार का डिजिटल कृषि मिशन है, जिसके तहत प्रत्येक किसान की 14 अंकों की डिजिटल फार्मर आईडी (किसान पहचान पत्र) बनाई जा रही है। इससे जमीन का ब्योरा स्वतः सत्यापित हो जाता है और भविष्य में पीएम किसान, फसल बीमा और केसीसी ऋण का लाभ बिना कागजी झंझट के तुरंत मिलता है।'
      },
      {
        q: 'पीएम किसान की नई लाभार्थी सूची (Village Wise List) में अपना नाम कैसे देखें?',
        a: '1. pmkisan.gov.in पर "Beneficiary List" (लाभार्थी सूची) पर क्लिक करें। 2. अपना राज्य, जिला, उप-जिला (तहसील), ब्लॉक और गाँव चुनें। 3. "Get Report" पर क्लिक करें। आपके गाँव के सभी पंजीकृत किसानों की सूची स्क्रीन पर आ जाएगी।'
      },
      {
        q: 'क्या परिवार में पति और पत्नी दोनों को पीएम किसान का ₹6,000 सालाना मिल सकता है?',
        a: 'नहीं। योजना के नियमों के अनुसार पति, पत्नी और नाबालिग बच्चों को मिलाकर एक पारिवारिक इकाई माना जाता है। एक परिवार से केवल एक ही भूमिधारक वयस्क किसान को प्रति वर्ष ₹6,000 का लाभ मिल सकता है।'
      },
      {
        q: 'पीएम किसान का आधिकारिक हेल्पलाइन नंबर क्या है?',
        a: 'पीएम किसान की आधिकारिक राष्ट्रीय टोल-फ्री हेल्पलाइन 155261 एवं 1800-115-526 है। इसके अतिरिक्त केंद्रीय हेल्पडेस्क नंबर 011-24300606 पर भी संपर्क किया जा सकता है।'
      }
    ],
    
    officialSources: [
      {
        name: 'PM Kisan Official Portal',
        authority: 'Department of Agriculture & Farmers Welfare, Ministry of Agriculture, Govt. of India',
        url: 'https://pmkisan.gov.in',
        verificationDate: 'November 09, 2026'
      },
      {
        name: 'Press Information Bureau (PIB) Release on 24th Installment',
        authority: 'Government of India',
        url: 'https://pib.gov.in',
        verificationDate: 'November 09, 2026'
      }
    ],
    keywords: [
      'pm kisan', 'pm kisan samman nidhi', 'pm kisan gov in', 'pm kisan government in',
      'pm kisan yojana', 'pm kisan portal', 'pm kisan samman nidhi yojana', 'pm kisan nidhi',
      'pm kisan nidhi yojana', 'pm kisan registration', 'pm kisan gov in registration', 'pm kisan csc login',
      'pm kisan status', 'pm kisan beneficiary status', 'pm kisan status check aadhar card',
      'pm kisan status check balance', 'pm kisan beneficiary status mobile number', 'pm kisan payment status',
      'pm kisan status check aadhar card mobile number', 'pm kisan gov in beneficiary status', 'pm kisan status check',
      'pm kisan 24th installment date 2026', 'pm kisan 24th installment date', 'pm kisan 24th installment release date',
      'pm kisan 25th installment date 2026', 'pm kisan 25th installment date', 'pm kisan next installment',
      'pm kisan 24 kist kab aayi', 'pm kisan 25 kist kab aayegi 2026', 'pm kisan samman nidhi kab aaegi',
      'pm kisan ka paisa kab aayega', 'pm kisan 2000 installment date',
      'pm kisan beneficiary list', 'pm kisan list', 'pm kisan beneficiary list village wise',
      'pm kisan beneficiary', 'pm kisan beneficiary list 2026', 'pm kisan gramin list',
      'pm kisan kyc', 'pm kisan ekyc', 'pm kisan e kyc check', 'pm kisan aadhar link status',
      'pm kisan face authentication', 'pm kisan agristack farmer id',
      'pm kisan land seeding problem solution', 'land seeding status no pm kisan',
      'पीएम किसान', 'पीएम किसान सम्मान निधि', 'पीएम किसान सम्मान निधि योजना', 'पीएम किसान स्टेटस',
      'पीएम किसान स्टेटस चेक आधार कार्ड', 'पीएम किसान की 24वीं किस्त', 'पीएम किसान की 25वीं किस्त कब आएगी',
      'पीएम किसान लाभार्थी सूची', 'पीएम किसान ई-केवाईसी', 'पीएम किसान पोर्टल', 'किसान सम्मान निधि योजना 2026'
    ],
    metaDescription_en: '✅ PM Kisan Samman Nidhi 2026: 24th installment released on 30 Oct 2026 (₹18,690+ Cr). Check 25th installment status, Aadhaar payment status online, e-KYC update & village list.',
    metaDescription_hi: '✅ पीएम किसान सम्मान निधि 2026: 24वीं किस्त (₹18,690+ करोड़) जारी। 25वीं किस्त की आधिकारिक स्थिति, आधार पेमेंट स्टेटस चेक, e-KYC प्रक्रिया और नई विलेज लिस्ट।'
  },
  {
    id: 'ayushman-bharat',
    slug: 'ayushman-bharat-pmjay-health-card',
    title_en: 'Ayushman Card 2026: Online Apply, Download PDF, Hospital List & ₹5 Lakh Free Cover',
    title_hi: 'आयुष्मान कार्ड 2026: ऑनलाइन कैसे बनाएं? ₹5 लाख मुफ्त इलाज, डाउनलोड PDF व लिस्ट',
    shortTitle_en: 'Ayushman Card (PM-JAY)',
    shortTitle_hi: 'आयुष्मान भारत कार्ड (PM-JAY)',
    category: 'health',
    state: 'all-india',
    stateLabel_en: 'Central (All India)',
    stateLabel_hi: 'केंद्र सरकार (अखिल भारतीय)',
    status: 'Updated',
    lastVerified: 'November 2026',
    
    benefitSummary_en: 'Cashless inpatient medical treatment up to ₹5,00,000 per family per year in empanelled private and public hospitals across India. Special expanded coverage provides free ₹5 Lakh top-up for every senior citizen aged 70+ regardless of family income.',
    benefitSummary_hi: 'देश भर के सूचीबद्ध सरकारी व निजी अस्पतालों में प्रति परिवार प्रति वर्ष ₹5,00,000 तक का मुफ्त कैशलेस इलाज। 70 वर्ष या अधिक उम्र के सभी बुजुर्गों के लिए अलग से ₹5 लाख तक का विशेष सुरक्षा टॉप-अप (वय वंदना कार्ड)।',
    benefitAmount_en: '₹5 Lakh / family / year (plus ₹5 Lakh for 70+ seniors)',
    benefitAmount_hi: '₹5 लाख प्रति परिवार प्रति वर्ष (70+ बुजुर्गों हेतु अतिरिक्त ₹5 लाख)',
    whoCanApply_en: 'Families listed in SECC 2011/NFSA Ration Card, and all Indian senior citizens aged 70 years and above (under Ayushman Vaya Vandana Card).',
    whoCanApply_hi: 'एसईसीसी 2011 सूची या पात्र राशन कार्डधारी परिवार, तथा 70 वर्ष या उससे अधिक आयु के सभी भारतीय नागरिक (वय वंदना कार्ड)।',
    applicationMode: 'Online (beneficiary.nha.gov.in / Ayushman App) & Offline (CSC / Hospital)',
    bannerImage: '/images/schemes/ayushman-bharat-pmjay-health-card.png',
    secondaryImage: '/images/schemes/ayushman-bharat-pmjay-en.png',
    
    whatIsThis_en: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) is the world’s largest government-financed health assurance scheme. It covers secondary and tertiary hospitalization costs, medicines, diagnostics, surgical packages, ICU charges, and pre/post-hospitalization expenses without any out-of-pocket costs at 28,000+ empanelled public and private hospitals across India.',
    whatIsThis_hi: 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना (PM-JAY) विश्व की सबसे बड़ी सरकारी स्वास्थ्य आश्वासन योजना है। इसके अंतर्गत गंभीर बीमारियों के ऑपरेशन, दवाएं, आईसीयू, जांच और अस्पताल में भर्ती के 3 दिन पहले तथा 15 दिन बाद तक का संपूर्ण खर्च देश के 28,000+ सूचीबद्ध सरकारी और निजी अस्पतालों में 100% कैशलेस कवर होता है।',
    
    benefitsList_en: [
      'Cashless hospital admission covering 1,950+ medical and surgical procedures (cardiac surgery, cancer chemotherapy/radiation, neurosurgery, knee replacement, etc.).',
      'All pre-existing medical conditions covered from Day 1 without any waiting periods or medical checkups.',
      'No cap on family size, gender, or age of family members.',
      '100% Nationwide Portability: an Ayushman card made in Bihar, Jharkhand, UP, or MP is fully honored in empanelled private & govt hospitals in Delhi, Mumbai, or Bengaluru.',
      'Ayushman Vaya Vandana Card: Every senior citizen aged 70+ receives an independent ₹5 Lakh medical cover regardless of family income.'
    ],
    benefitsList_hi: [
      '1,950+ मेडिकल और सर्जिकल प्रक्रियाओं (हार्ट सर्जरी, कैंसर कीमो/रेडियोथेरेपी, न्यूरो, घुटना प्रत्यारोपण) का पूर्ण कैशलेस इलाज।',
      'पुरानी और गंभीर बीमारियां (Pre-existing diseases) पहले दिन से ही बिना किसी वेटिंग पीरियड के कवर होती हैं।',
      'परिवार के सदस्यों की संख्या, आयु या लिंग की कोई सीमा नहीं है।',
      'देशव्यापी 100% पोर्टेबिलिटी: बिहार, झारखंड, यूपी या एमपी का बना कार्ड दिल्ली, मुंबई या हैदराबाद के बड़े निजी व सरकारी अस्पतालों में भी मान्य है।',
      'आयुष्मान वय वंदना कार्ड: 70 वर्ष से अधिक उम्र के सभी बुजुर्गों के लिए पारिवारिक सीमा और आय से अलग ₹5 लाख का समर्पित कार्ड।'
    ],
    
    eligibility: {
      eligibleIf_en: [
        'Family name is included in the Socio-Economic Caste Census (SECC 2011) database.',
        'Family holds an active Antyodaya Anna Yojana (AAY) or Priority Household (PHH) Ration Card in participating states.',
        'Any Indian citizen aged 70 years or older (authenticated via Aadhaar date of birth) qualifies for the Senior Citizen Vaya Vandana Card regardless of economic status or income.',
        'Registered construction workers (BOCW) in state-specific linked implementations.'
      ],
      eligibleIf_hi: [
        'परिवार का नाम सामाजिक-आर्थिक जाति जनगणना (SECC 2011) की सूची में दर्ज हो।',
        'परिवार के पास अंत्योदय (AAY) या प्राथमिकता राशन कार्ड (PHH/लाल-पीला कार्ड) उपलब्ध हो।',
        '70 वर्ष या अधिक उम्र का कोई भी भारतीय नागरिक (आधार में दर्ज जन्मतिथि अनुसार) आय सीमा की बाध्यता के बिना वय वंदना कार्ड हेतु पात्र है।',
        'कई राज्यों में पंजीकृत निर्माण श्रमिक (BOCW कार्डधारक)।'
      ],
      notEligibleIf_en: [
        'Families paying income tax or holding government employee insurance (CGHS/ECHS) are not eligible for general SECC quota (except 70+ seniors who can choose between CGHS and Ayushman).',
        'Households owning motorized 3/4-wheeler fishing boats or mechanized agricultural equipment (under general rural criteria).',
        'Citizens who already hold corporate health insurance and are not in SECC/Ration card database.'
      ],
      notEligibleIf_hi: [
        'सामान्य कोटे में आयकरदाता या केंद्र/राज्य सरकारी स्वास्थ्य योजना (CGHS/ECHS) के लाभार्थी (सिवाय 70+ बुजुर्ग जो विकल्प चुन सकते हैं)।',
        'सामान्य ग्रामीण मानकों में चार पहिया वाहन या बड़े यंत्रीकृत उपकरण वाले परिवार।',
        'जो परिवार एसईसीसी अथवा राज्य राशन कार्ड सूची में शामिल नहीं हैं।'
      ]
    },
    
    requiredDocuments_en: [
      'Aadhaar Card of each family member (mandatory for e-KYC and authentication)',
      'Ration Card / Family Samagra ID / SECC Family Reference Number',
      'Active Mobile number linked to Aadhaar for OTP verification',
      'Age proof for 70+ Senior Citizen Card (Aadhaar Card date of birth is sufficient)'
    ],
    requiredDocuments_hi: [
      'परिवार के सभी सदस्यों का आधार कार्ड (ई-केवाईसी व पहचान सत्यापन हेतु अनिवार्य)',
      'राशन कार्ड / परिवार समग्र आईडी / एसईसीसी संदर्भ विवरण',
      'आधार से लिंक चालू मोबाइल नंबर (ओटीपी सत्यापन हेतु)',
      '70+ बुजुर्ग कार्ड हेतु आयु प्रमाण के लिए आधार कार्ड'
    ],
    
    howToApply_en: [
      'Visit the official National Health Authority Beneficiary Portal at beneficiary.nha.gov.in or download the "Ayushman App" from Google Play Store.',
      'Select "Beneficiary" login mode, enter your 10-digit mobile number, and authenticate via OTP.',
      'Select your State, Scheme (PMJAY), District, and Search by (Aadhaar Number, Family ID, or Ration Card Number).',
      "If your family members appear in the list, click \"Action / e-KYC\" beside the person's name.",
      'Authenticate identity using Aadhaar OTP, Face Auth (in Ayushman App), or Fingerprint, and capture a live photograph.',
      'Once verified, your Ayushman Card will be approved instantly and available for PDF download on your smartphone.',
      'Alternatively, visit any empanelled Government/Private Hospital (Ayushman Mitra desk) or nearest CSC center for instant offline creation.'
    ],
    howToApply_hi: [
      'राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA) के आधिकारिक पोर्टल beneficiary.nha.gov.in पर जाएं या प्ले स्टोर से "Ayushman App" डाउनलोड करें।',
      '"Beneficiary" विकल्प चुनें, अपना मोबाइल नंबर दर्ज करें और प्राप्त ओटीपी से लॉगिन करें।',
      'अपना राज्य, योजना (PMJAY), जिला चुनें और सर्च में आधार नंबर या राशन कार्ड नंबर दर्ज करें।',
      'सूची में नाम आते ही सदस्य के नाम के आगे "e-KYC" बटन पर क्लिक करें।',
      'आधार ओटीपी या फेस ऑथेंटिकेशन से सत्यापन करें और कैमरे से लाइव फोटो खींचें।',
      'सत्यापन पूरा होते ही आयुष्मान कार्ड तुरंत अप्रूव हो जाएगा और आप इसका डिजिटल पीडीएफ कार्ड डाउनलोड कर सकते हैं।',
      'ऑफलाइन बनवाने के लिए किसी भी पैनलबद्ध अस्पताल के "आयुष्मान मित्र" काउंटर या सीएससी (CSC) केंद्र पर जाएं।'
    ],
    
    statusCheckGuide_en: 'To check your Ayushman Card status: 1. Visit beneficiary.nha.gov.in. 2. Login as Beneficiary with your mobile OTP. 3. Enter your Aadhaar Number to see card status (Approved, Pending, or e-KYC Required) for all family members. Empanelled hospital directory is available at hospitals.pmjay.gov.in.',
    statusCheckGuide_hi: 'अपना आयुष्मान कार्ड स्टेटस देखने के लिए: 1. beneficiary.nha.gov.in पर जाएं। 2. मोबाइल ओटीपी से "Beneficiary" मोड में लॉगिन करें। 3. अपना आधार नंबर दर्ज करें। यहां परिवार के सभी सदस्यों के कार्ड का लाइव स्टेटस (स्वीकृत, लंबित या ई-केवाईसी आवश्यक) दिखाई देगा। पैनलबद्ध अस्पतालों की सूची hospitals.pmjay.gov.in पर देखें।',
    officialStatusUrl: 'https://beneficiary.nha.gov.in',
    
    commonProblems_en: [
      {
        problem: 'Name found in list but e-KYC photo mismatch error',
        solution: 'Capture a clear live photo against a plain background in bright lighting, or update your photograph at the nearest Aadhaar Seva Kendra, then retry on the portal.'
      },
      {
        problem: 'Empanelled hospital refuses to admit patient or demands money',
        solution: 'Immediately call the National Health Authority 24x7 Toll-Free Grievance Helpline at 14555 or 1800-111-565, or report to the Ayushman Mitra desk at the hospital.'
      },
      {
        problem: 'Aadhaar OTP is not received during e-KYC',
        solution: 'Use the "Face Auth" feature in the official Ayushman App (requires Aadhaar FaceRD app) or visit a CSC Center for biometric fingerprint e-KYC.'
      }
    ],
    commonProblems_hi: [
      {
        problem: 'सूची में नाम है लेकिन ई-केवाईसी में फोटो मैच नहीं हो रहा',
        solution: 'अच्छी रोशनी में सादे बैकग्राउंड पर दोबारा साफ लाइव फोटो खींचें या नजदीकी आधार केंद्र पर फोटो अपडेट कराकर पोर्टल पर पुनः प्रयास करें।'
      },
      {
        problem: 'सूचीबद्ध अस्पताल आयुष्मान कार्ड पर इलाज देने से मना करे या पैसे मांगे',
        solution: 'तुरंत 24x7 राष्ट्रीय टोल-फ्री हेल्पलाइन 14555 या 1800-111-565 पर शिकायत दर्ज कराएं अथवा अस्पताल में तैनात "आयुष्मान मित्र" से संपर्क करें।'
      },
      {
        problem: 'ई-केवाईसी करते समय आधार ओटीपी नहीं आ रहा',
        solution: 'मोबाइल में "Ayushman App" और "Aadhaar FaceRD" ऐप डाउनलोड कर चेहरा स्कैन (Face Auth) से e-KYC करें, या सीएससी सेंटर पर फिंगरप्रिंट से कराएं।'
      }
    ],
    
    faqs_en: [
      {
        q: 'How to apply for an Ayushman Card online and download the PDF on mobile?',
        a: 'Visit beneficiary.nha.gov.in or download the "Ayushman App". Login as a Beneficiary using your mobile OTP. Search by Aadhaar number or Ration Card, complete the instant Aadhaar OTP or Face Auth e-KYC, and download your PVC-format Ayushman Card PDF immediately.'
      },
      {
        q: 'Is the Ayushman Card valid in private hospitals? Does it cover private care?',
        a: 'Yes! Ayushman Card is valid in over 28,000+ empanelled private and government hospitals across India. Treatments including heart surgery, cancer chemotherapy, neurosurgery, joint replacement, ICU stays, tests, and medicines are 100% cashless without any payment.'
      },
      {
        q: 'What is the Ayushman Vaya Vandana Card for senior citizens aged 70 and above?',
        a: 'The Government of India has extended Ayushman Bharat coverage to ALL citizens aged 70 years and above, irrespective of their income or economic status. Eligible seniors receive a distinct Ayushman Vaya Vandana Card with an exclusive ₹5 Lakh annual cashless hospital cover.'
      },
      {
        q: 'Is ABHA Card and Ayushman Card the same thing?',
        a: 'No, they are different. An ABHA Card (Ayushman Bharat Health Account) is a 14-digit digital health ID used as a digital locker for medical records and test reports. An Ayushman Card (PM-JAY) provides actual ₹5 Lakh free hospitalization insurance cover.'
      },
      {
        q: 'How to check Ayushman Card eligibility using Aadhaar Card or mobile number?',
        a: 'Go to beneficiary.nha.gov.in, log in with mobile OTP, and select Search by Aadhaar Number. If your name appears with your family details, you are eligible and can generate your card immediately.'
      },
      {
        q: 'How to find the list of empanelled hospitals accepting Ayushman Card near me?',
        a: 'Visit hospitals.pmjay.gov.in or open the Ayushman App. Select your State, District, Hospital Type (Private / Public), and Medical Specialty (Cardiology, Oncology, Orthopedics) to see nearby empaneled hospitals with contact numbers.'
      },
      {
        q: 'Is the Ayushman Card valid across all states in India (Portability)?',
        a: 'Yes, PM-JAY offers 100% nationwide portability. A card issued in any state (e.g., Bihar, Jharkhand, UP, MP, Rajasthan) is legally accepted in top empanelled hospitals across metro cities including Delhi, Mumbai, Kolkata, Chennai, and Bengaluru.'
      },
      {
        q: 'What is the official toll-free helpline number for Ayushman Bharat (PM-JAY)?',
        a: 'The official 24x7 National Health Authority toll-free helpline numbers are 14555 and 1800-111-565 for card generation help, hospital issues, or complaint lodging.'
      }
    ],
    faqs_hi: [
      {
        q: 'आयुष्मान कार्ड मोबाइल से ऑनलाइन कैसे बनाएं और PDF कार्ड कैसे डाउनलोड करें?',
        a: 'आधिकारिक पोर्टल beneficiary.nha.gov.in पर जाएं या "Ayushman App" डाउनलोड करें। मोबाइल ओटीपी से "Beneficiary" मोड में लॉगिन करें। आधार नंबर या राशन कार्ड से नाम खोजें, आधार ओटीपी या फेस ऑथ (Face Auth) से e-KYC पूरा करें और तुरंत अपना आयुष्मान डिजिटल कार्ड PDF डाउनलोड करें।'
      },
      {
        q: 'क्या आयुष्मान कार्ड प्राइवेट (निजी) अस्पतालों में भी मान्य है?',
        a: 'हाँ! आयुष्मान कार्ड देश भर के 28,000 से अधिक सूचीबद्ध प्राइवेट और सरकारी अस्पतालों में पूरी तरह मान्य है। हार्ट सर्जरी, कैंसर का इलाज, न्यूरोसर्जरी, डायलिसिस, घुटना प्रत्यारोपण, आईसीयू और दवाइयों सहित 1,950+ बीमारियों का पूरा इलाज 100% कैशलेस और मुफ्त होता है।'
      },
      {
        q: '70 वर्ष या उससे अधिक उम्र के बुजुर्गों के लिए आयुष्मान वय वंदना कार्ड क्या है?',
        a: 'केंद्र सरकार ने 70 वर्ष और उससे अधिक आयु के सभी भारतीय वरिष्ठ नागरिकों के लिए आय सीमा की कोई भी शर्त हटाकर ₹5 लाख का मुफ्त स्वास्थ्य कवर शुरू किया है। इसके तहत बुजुर्गों को एक अलग "आयुष्मान वय वंदना कार्ड" मिलता है, जिसमें ₹5 लाख का अलग टॉप-अप कवर होता है।'
      },
      {
        q: 'क्या आभा कार्ड (ABHA Card) और आयुष्मान कार्ड (Ayushman Card) एक ही हैं?',
        a: 'नहीं, दोनों बिल्कुल अलग हैं। आभा कार्ड (ABHA) केवल 14 अंकों की डिजिटल हेल्थ आईडी है जिसमें आपके मेडिकल रिकॉर्ड और जांच रिपोर्ट सुरक्षित रहती हैं। जबकि आयुष्मान कार्ड (PM-JAY) एक स्वास्थ्य बीमा कार्ड है जिससे अस्पताल में ₹5 लाख तक का मुफ्त इलाज मिलता है।'
      },
      {
        q: 'आधार कार्ड या मोबाइल नंबर से आयुष्मान कार्ड की पात्रता कैसे चेक करें?',
        a: 'वेबसाइट beneficiary.nha.gov.in पर जाएं, मोबाइल नंबर से लॉगिन करें और "Search by Aadhaar Number" चुनें। यदि आपका और आपके परिवार का नाम लिस्ट में दिखता है, तो आप तुरंत e-KYC करके अपना कार्ड बना सकते हैं।'
      },
      {
        q: 'नजदीकी आयुष्मान पैनल वाले प्राइवेट और सरकारी अस्पतालों की सूची कैसे देखें?',
        a: 'hospitals.pmjay.gov.in पर जाएं या आयुष्मान ऐप खोलें। अपना राज्य, जिला, अस्पताल का प्रकार (प्राइवेट/सरकारी) और बीमारी की स्पेशलिटी चुनें। आपके शहर के सभी पैनलबद्ध अस्पतालों की सूची और उनके फोन नंबर स्क्रीन पर आ जाएंगे।'
      },
      {
        q: 'क्या आयुष्मान कार्ड देश के किसी भी राज्य में चल सकता है (पोर्टेबिलिटी)?',
        a: 'हाँ, आयुष्मान भारत योजना 100% देशव्यापी पोर्टेबल है। बिहार, झारखंड, यूपी, एमपी या राजस्थान का बना कार्ड दिल्ली, मुंबई, हैदराबाद, कोलकाता या बेंगलुरु के किसी भी पैनलबद्ध अस्पताल में पूरी तरह स्वीकार किया जाता है।'
      },
      {
        q: 'आयुष्मान भारत (PM-JAY) का आधिकारिक टोल-फ्री हेल्पलाइन नंबर क्या है?',
        a: 'आयुष्मान भारत की आधिकारिक 24x7 राष्ट्रीय टोल-फ्री हेल्पलाइन 14555 एवं 1800-111-565 है। कार्ड बनवाने में मदद, अस्पताल द्वारा मना किए जाने या किसी भी शिकायत हेतु इस नंबर पर संपर्क किया जा सकता है।'
      }
    ],
    
    officialSources: [
      {
        name: 'National Health Authority (NHA) Beneficiary Portal',
        authority: 'Ministry of Health and Family Welfare, Govt. of India',
        url: 'https://beneficiary.nha.gov.in',
        verificationDate: 'November 2026'
      },
      {
        name: 'PM-JAY Official Portal',
        authority: 'Government of India',
        url: 'https://pmjay.gov.in',
        verificationDate: 'November 2026'
      }
    ],
    keywords: [
      'ayushman card', 'pmjay', 'ayushman bharat', 'ayushman bharat yojana', 'ayushman card online',
      'ayushman card apply', 'ayushman card online apply', 'ayushman card apply online',
      'ayushman bharat health card', 'ayushman card login', 'ayushman bharat login',
      'pmjay website', 'pmjay portal', 'pmjay full form', 'ayushman bharat pradhan mantri jan arogya yojana',
      'ayushman card download', 'download ayushman card', 'ayushman card download pdf',
      'ayushman bharat health card download', 'ayushman card download pdf by mobile number',
      'how to download ayushman card', 'how to download ayushman card online', 'ayushman card kaise download karen',
      'how to apply for ayushman card', 'ayushman card kaise banaen', 'ayushman card kaise banaye',
      'ayushman card kaise banta hai', 'how to make ayushman card', 'how to make ayushman card online',
      'ayushman card kaise banvaen', 'ayushman card kaise banega', 'how to get ayushman card',
      'ayushman card apply online process', 'ayushman card online registration', 'register for ayushman card',
      'ayushman card eligibility', 'ayushman card eligibility check', 'ayushman card check',
      'who is eligible for ayushman card', 'who can make ayushman card', 'am i eligible for pmjay',
      'pmjay beneficiary list', 'ayushman card beneficiary', 'pmjay id search',
      'ayushman card hospital list', 'ayushman bharat hospital list near me', 'is ayushman card valid in private hospital',
      'can ayushman card be used in private hospital', 'which hospital accept ayushman card',
      'ayushman card benefits', 'free hospital treatment 5 lakh',
      'ayushman 70 plus senior citizen', 'vaya vandana card', 'ayushman vay vandana card online apply',
      'is abha card and ayushman card same', 'abha card vs ayushman card', 'golden card',
      'आयुष्मान कार्ड', 'आयुष्मान भारत', 'आयुष्मान कार्ड ऑनलाइन अप्लाई', 'आयुष्मान कार्ड डाउनलोड PDF',
      'आयुष्मान कार्ड कैसे बनाएं', 'आयुष्मान कार्ड पात्रता', 'आयुष्मान कार्ड लिस्ट', 'आयुष्मान भारत योजना 2026',
      'आयुष्मान वय वंदना कार्ड 70 प्लस', 'गोल्डन कार्ड डाउनलोड', 'फ्री ₹5 लाख इलाज'
    ],
    metaDescription_en: '✅ Ayushman Card 2026: How to apply online & download PDF in 5 minutes? Check ₹5 Lakh free cashless treatment, 70+ senior citizen card, eligibility & private hospital list.',
    metaDescription_hi: '✅ आयुष्मान कार्ड 2026: मोबाइल से 5 मिनट में आयुष्मान कार्ड कैसे बनाएं व PDF डाउनलोड करें? जानिए ₹5 लाख मुफ्त इलाज, 70+ बुजुर्ग वय वंदना कार्ड, पात्रता व प्राइवेट हॉस्पिटल लिस्ट।'
  },
  {
    id: 'jharkhand-maiya-samman',
    slug: 'jharkhand-mukhyamantri-maiya-samman-yojana',
    title_en: 'Jharkhand Maiya Samman Yojana 2026: Payment Date, DBT Status Check & Form PDF',
    title_hi: 'मंईयां सम्मान योजना 2026: पैसा कब मिलेगा? अगली किस्त तारीख, DBT स्टेटस चेक व फॉर्म PDF',
    shortTitle_en: 'Jharkhand Maiya Samman Yojana',
    shortTitle_hi: 'मुख्यमंत्री मंईयां सम्मान योजना (झारखंड)',
    category: 'women',
    state: 'jharkhand',
    stateLabel_en: 'Jharkhand State',
    stateLabel_hi: 'झारखंड राज्य',
    status: 'Updated',
    lastVerified: 'November 06, 2026',
    
    benefitSummary_en: 'Direct monthly financial assistance of ₹1,000 (up to ₹2,500) transferred via DBT to eligible women aged 18 to 50 in Jharkhand to support financial independence, nutrition, and family health.',
    benefitSummary_hi: 'झारखंड की 18 से 50 वर्ष की पात्र महिलाओं के बैंक खाते में ₹1,000 से ₹2,500 प्रतिमाह सीधे डीबीटी (DBT) के माध्यम से आर्थिक सहायता।',
    benefitAmount_en: '₹1,000 – ₹2,500 / Month (DBT Transfer)',
    benefitAmount_hi: '₹1,000 से ₹2,500 प्रतिमाह (सीधा डीबीटी)',
    whoCanApply_en: 'Women permanent residents of Jharkhand aged 18–50 years from non-taxpayer families holding an active Ration Card (Yellow/Pink/White) and Aadhaar-seeded DBT bank account.',
    whoCanApply_hi: 'झारखंड की स्थायी निवासी 18 से 50 वर्ष की महिलाएं, जिनके पास राशन कार्ड और आधार से लिंक बैंक खाता हो तथा परिवार में कोई आयकरदाता न हो।',
    applicationMode: 'Offline (Panchayat / Camp / Pragya Kendra) & Online Portal',
    bannerImage: '/images/schemes/jharkhand-maiya-samman.webp',
    
    whatIsThis_en: 'Mukhyamantri Maiya Samman Yojana (JMMSY) is a flagship women empowerment initiative by the Government of Jharkhand. It provides assured monthly financial support (₹1,000 to ₹2,500) directly into beneficiaries’ bank accounts through Direct Benefit Transfer (DBT), ensuring dignity and economic security.',
    whatIsThis_hi: 'मुख्यमंत्री मंईयां सम्मान योजना (JMMSY) झारखंड सरकार की महत्वाकांक्षी योजना है। इसके तहत राज्य की 18 से 50 वर्ष की करोड़ों महिलाओं के बैंक खाते में हर महीने निश्चित आर्थिक सहायता (₹1,000 से ₹2,500) सीधी डीबीटी के जरिए भेजी जाती है ताकि वे आर्थिक रूप से सशक्त बन सकें।',
    
    benefitsList_en: [
      'Assured monthly assistance (₹1,000 to ₹2,500) credited directly to the woman’s personal bank account.',
      '100% transparent Direct Benefit Transfer (DBT) with zero middleman deduction.',
      'Statewide coverage across all 24 districts, rural Panchayats, and urban wards in Jharkhand.',
      'Paperless recurring transfer once the initial verification and Aadhaar-NPCI seeding is complete.'
    ],
    benefitsList_hi: [
      'महिला के निजी बैंक खाते में ₹1,000 से ₹2,500 प्रतिमाह सीधे डीबीटी से भुगतान।',
      'बिचौलियों और दलालों से पूरी तरह मुक्त, 100% पारदर्शी सरकारी सहायता।',
      'झारखंड के सभी 24 जिलों के ग्रामीण पंचायतों और शहरी वार्डों में समान रूप से लागू।',
      'एक बार आधार व बैंक सत्यापन होने पर हर महीने बिना दोबारा फॉर्म भरे स्वतः भुगतान।'
    ],
    
    eligibility: {
      eligibleIf_en: [
        'Applicant woman must be a permanent resident of Jharkhand state.',
        'Age must be between 18 and 50 years on the date of application.',
        'Applicant must have an individual bank account mapped with Aadhaar and active NPCI DBT status.',
        'Family must hold an Antyodaya (Yellow), Priority (Pink), or White Ration card issued by Jharkhand Government.',
        'Family members must not be permanent government employees or income tax payers.'
      ],
      eligibleIf_hi: [
        'आवेदक महिला झारखंड राज्य की स्थायी निवासी होनी चाहिए।',
        'आवेदन के समय महिला की आयु 18 वर्ष से 50 वर्ष के बीच होनी चाहिए।',
        'महिला का स्वयं का एकल बैंक खाता हो, जो आधार कार्ड से लिंक और NPCI DBT सक्रिय हो।',
        'परिवार के पास झारखंड का अंत्योदय (पीला), प्राथमिकता (गुलाबी) अथवा सफेद राशन कार्ड होना आवश्यक है।',
        'परिवार का कोई भी सदस्य सरकारी नौकरी या आयकरदाता (Income Tax Payer) नहीं होना चाहिए।'
      ],
      notEligibleIf_en: [
        'Applicant or family member pays income tax.',
        'Applicant or spouse is employed in permanent Central/State Government, public sector undertaking, or drawing pension.',
        'Women already receiving higher-value state social pensions (such as Old Age or Disability Pension).',
        'Applicants under 18 years or over 50 years of age.'
      ],
      notEligibleIf_hi: [
        'आवेदक या उसके परिवार का कोई सदस्य आयकर (Income Tax) भरता हो।',
        'आवेदक या पति केंद्र/राज्य सरकार अथवा सरकारी उपक्रम में नियमित कर्मचारी या पेंशनधारक हों।',
        'महिला पहले से किसी अन्य समकक्ष अथवा अधिक राशि वाली सरकारी सामाजिक पेंशन का लाभ ले रही हो।',
        '18 वर्ष से कम या 50 वर्ष से अधिक उम्र की महिलाएं।'
      ]
    },
    
    requiredDocuments_en: [
      'Aadhaar Card of the applicant woman (clear photocopy & original for verification)',
      'Jharkhand Residential Certificate (Niwas Praman Patra) or Voter ID',
      'Jharkhand Ration Card (Yellow/Pink/White) with applicant woman’s name listed',
      'Personal Bank Passbook (Bank account must be Aadhaar-NPCI seeded for DBT)',
      'Passport-size photographs and Mobile number linked with Aadhaar',
      'Self-declaration form of income and non-taxpayer status (Satyapan Form)'
    ],
    requiredDocuments_hi: [
      'आवेदक महिला का आधार कार्ड (स्पष्ट फोटोकॉपी व मूल प्रति)',
      'झारखंड का स्थानीय निवास प्रमाण पत्र अथवा मतदाता पहचान पत्र',
      'झारखंड राशन कार्ड (जिसमें महिला का नाम दर्ज हो)',
      'महिला का स्वयं का बैंक पासबुक (खाता आधार व NPCI DBT से लिंक होना अनिवार्य)',
      'पासपोर्ट साइज फोटो और आधार से लिंक सक्रिय मोबाइल नंबर',
      'स्व-घोषणा व सत्यापन पत्र (सत्यापन फॉर्म PDF)'
    ],
    
    howToApply_en: [
      'Obtain the official JMMSY Application / Satyapan Form free of cost from your local Gram Panchayat Bhawan, Ward Office, CSC Pragya Kendra, or download the official form PDF.',
      'Carefully fill in your personal details, Aadhaar number, Ration Card number, and individual Bank account number with IFSC code.',
      'Attach self-attested photocopies of your Aadhaar card, Ration card, and Bank passbook.',
      'Submit the application form at your local Panchayat Camp or nearest CSC Pragya Kendra for digital entry into the state portal.',
      'Receive your official stamped Acknowledgement Slip with Application Tracking Number to monitor your verification and payment status.'
    ],
    howToApply_hi: [
      'अपनी ग्राम पंचायत भवन, वार्ड कार्यालय, सीएससी प्रज्ञा केंद्र अथवा आधिकारिक पोर्टल से मंईयां सम्मान योजना का सत्यापन फॉर्म PDF निःशुल्क प्राप्त करें।',
      'फॉर्म में अपना नाम, पिता/पति का नाम, आधार संख्या, राशन कार्ड नंबर और बैंक खाता विवरण सावधानीपूर्वक भरें।',
      'आधार कार्ड, राशन कार्ड और बैंक पासबुक की स्व-हस्ताक्षरित फोटोकॉपी फॉर्म के साथ संलग्न करें।',
      'अपने पंचायत शिविर (आपकी योजना आपकी सरकार आपके द्वार) या प्रज्ञा केंद्र में फॉर्म जमा कर डिजिटल पोर्टल पर एंट्री करवाएं।',
      'आवेदन जमा करने के बाद पावती रसीद (Acknowledgement Slip) अनिवार्य रूप से प्राप्त करें, जिस पर आपका आवेदन क्रमांक (Tracking ID) लिखा होता है।'
    ],
    
    statusCheckGuide_en: 'To check your Maiya Samman Yojana payment & DBT status: 1) Verify that your bank account is Aadhaar-NPCI mapped by visiting your bank branch or checking via Aadhaar DBT portal. 2) Visit your local Block Development Office (BDO) or CDPO desk with your Aadhaar number or Application ID to check your approval list status. 3) For payment credit alerts, ensure SMS service is active on your registered mobile number.',
    statusCheckGuide_hi: 'मंईयां सम्मान योजना का पेमेंट और डीबीटी स्टेटस चेक करने के लिए: 1) अपनी बैंक शाखा में जाकर सुनिश्चित करें कि आपका खाता आधार से एनपीसीआई (NPCI) मैप्ड है। 2) अपने प्रखंड विकास पदाधिकारी (BDO) या बाल विकास परियोजना (CDPO) कार्यालय में आधार नंबर अथवा पावती रसीद दिखाकर लाभार्थी सूची में नाम जांचें। 3) बैंक खाते में डीबीटी राशि क्रेडिट होते ही पंजीकृत मोबाइल नंबर पर एसएमएस प्राप्त होता है।',
    officialStatusUrl: 'https://jharkhand.gov.in',
    
    commonProblems_en: [
      {
        problem: 'Form submitted but monthly DBT payment not credited to bank account',
        solution: '90% of payment failures occur due to inactive NPCI Aadhaar Seeding. Visit your bank branch and submit the "Aadhaar NPCI Mandate Form", or open an instant DBT-enabled account at India Post Payments Bank (IPPB).'
      },
      {
        problem: 'Name in Ration Card differs from Aadhaar Card spelling',
        solution: 'Submit an identity affidavit along with a name rectification request at your local Block Supply Office (BSO) or Panchayat Camp to synchronize your data.'
      },
      {
        problem: 'Application rejected during Panchayat verification',
        solution: 'Visit your Block CDPO / Social Welfare desk to identify the exact rejection ground (age limit, document mismatch, or tax status), submit corrected documents, and request re-verification.'
      }
    ],
    commonProblems_hi: [
      {
        problem: 'फॉर्म जमा हो चुका है पर खाते में ₹1000/₹2500 का पैसा नहीं आया',
        solution: '90% मामलों में बैंक खाते में NPCI आधार मैपिंग न होने से डीबीटी फेल होता है। अपनी बैंक शाखा में जाकर "NPCI Aadhaar Seeding Form" जमा करें अथवा पोस्ट ऑफिस बैंक (IPPB) में नया डीबीटी खाता खुलवाएं।'
      },
      {
        problem: 'राशन कार्ड और आधार कार्ड में नाम की स्पेलिंग में अंतर है',
        solution: 'प्रखंड आपूर्ति कार्यालय (BSO) या पंचायत कैंप में जाकर राशन कार्ड में नाम सुधार का आवेदन दें अथवा नोटरी शपथ पत्र प्रस्तुत करें।'
      },
      {
        problem: 'आवेदन सत्यापन के दौरान रिजेक्ट (अस्वीकृत) हो गया है',
        solution: 'अपने प्रखंड के CDPO या समाज कल्याण कार्यालय में जाकर रिजेक्शन का कारण पता करें (दस्तावेज की कमी, उम्र सीमा या पात्रता), सही कागजात लगाकर पुनः सत्यापन करवाएं।'
      }
    ],
    
    faqs_en: [
      {
        q: 'When will Maiya Samman Yojana payment come into the bank account?',
        a: 'Approved beneficiaries receive their monthly DBT payment directly into their Aadhaar-linked bank accounts between the 7th and 15th of every month. If payment is delayed, verify your bank’s active NPCI Aadhaar seeding status.'
      },
      {
        q: 'How to check Maiya Samman Yojana payment and DBT status online?',
        a: 'You can verify your approval and DBT status by presenting your Aadhaar number or Application ID at your local Block Development Office (BDO), CDPO office, or Gram Panchayat camp. Also check your bank passbook/SMS for DBT credit under JMMSY.'
      },
      {
        q: 'How to download Maiya Samman Yojana Satyapan Form PDF and apply?',
        a: 'The physical application and verification form (सत्यापन फॉर्म) can be collected 100% free of charge from any Gram Panchayat Bhawan, Ward Office, or Pragya Kendra camp across Jharkhand. Completed forms with Aadhaar, Ration card, and bank passbook copies are submitted at Panchayat camps for digital entry.'
      },
      {
        q: 'How much financial assistance is provided under Maiya Samman Yojana?',
        a: 'The scheme provides ₹1,000 per month directly via DBT to eligible women aged 18 to 50 years. The state government has also proposed enhancing this financial assistance up to ₹2,500 per month.'
      },
      {
        q: 'Who is eligible to receive benefits under Maiya Samman Yojana?',
        a: 'Women who are permanent residents of Jharkhand, aged between 18 and 50 years, whose families hold an active state ration card and have no member employed in permanent government service or paying income tax.'
      },
      {
        q: 'Is Maiya Samman Yojana closed or still accepting applications?',
        a: 'No, the scheme is NOT closed. It is an active, ongoing flagship welfare program in Jharkhand. Eligible women can register at special Panchayat camps or through their local CDPO / Block administration.'
      },
      {
        q: 'What is the official helpline or toll-free number for Maiya Samman Yojana?',
        a: 'Beneficiaries can contact the official state welfare helpline or visit their local Block Development Office (BDO) and Child Development Project Office (CDPO) for immediate assistance with rejected forms or pending DBT payments.'
      }
    ],
    faqs_hi: [
      {
        q: 'मंईयां सम्मान योजना का पैसा कब मिलेगा और अगली किस्त कब आएगी?',
        a: 'स्वीकृत पात्र महिलाओं के बैंक खाते में योजना का पैसा हर महीने की 7 से 15 तारीख के बीच सीधे डीबीटी (DBT) के जरिए भेजा जाता है। यदि आपके खाते में किस्त नहीं आई है, तो तुरंत अपनी बैंक शाखा में जाकर आधार-एनपीसीआई सीडिंग की जांच करवाएं।'
      },
      {
        q: 'मंईयां सम्मान योजना का पेमेंट और डीबीटी स्टेटस ऑनलाइन कैसे चेक करें?',
        a: 'आप अपने आधार नंबर अथवा पावती रसीद (Acknowledgement ID) के माध्यम से अपने नजदीकी प्रखंड विकास कार्यालय (BDO), बाल विकास परियोजना (CDPO) अथवा पंचायत कैंप में जाकर अपना नाम व भुगतान स्टेटस देख सकते हैं।'
      },
      {
        q: 'मंईयां सम्मान योजना का सत्यापन फॉर्म PDF कैसे डाउनलोड करें और आवेदन कैसे करें?',
        a: 'मंईयां सम्मान योजना का आवेदन व सत्यापन फॉर्म (Satyapan Form) अपनी ग्राम पंचायत, वार्ड कार्यालय अथवा प्रज्ञा केंद्र से पूरी तरह निःशुल्क प्राप्त किया जा सकता है। फॉर्म भरकर आधार, राशन कार्ड और बैंक पासबुक की प्रति के साथ पंचायत शिविर में जमा करना होता है।'
      },
      {
        q: 'मंईयां सम्मान योजना में कितनी राशि मिलती है (₹1000 या ₹2500)?',
        a: 'योजना के तहत पात्र महिलाओं को ₹1,000 प्रतिमाह सीधे बैंक खाते में प्रदान किया जाता है। राज्य सरकार द्वारा इस सहायता राशि को बढ़ाकर ₹2,500 प्रतिमाह करने की घोषणा की गई है।'
      },
      {
        q: 'मंईयां सम्मान योजना किसको मिलेगी और क्या पात्रता है?',
        a: 'झारखंड की 18 से 50 वर्ष की वह महिलाएं जिनके पास राज्य का राशन कार्ड (पीला/गुलाबी/सफेद) है और जिनके परिवार का कोई सदस्य आयकरदाता या सरकारी सेवा में नहीं है, वे सभी इस योजना के पात्र हैं।'
      },
      {
        q: 'क्या मंईयां सम्मान योजना बंद हो गई है?',
        a: 'नहीं, मंईयां सम्मान योजना बिल्कुल बंद नहीं हुई है। यह झारखंड सरकार की निरंतर चलने वाली प्रमुख कल्याणकारी योजना है और पात्र महिलाओं के खाते में नियमित रूप से किस्तें भेजी जा रही हैं।'
      },
      {
        q: 'मंईयां सम्मान योजना का आधिकारिक हेल्पलाइन या शिकायत नंबर क्या है?',
        a: 'योजना से जुड़ी किसी भी समस्या, पेंडिंग पेमेंट या रिजेक्टेड फॉर्म की शिकायत के लिए लाभार्थी अपने प्रखंड के BDO अथवा CDPO कार्यालय के समाज कल्याण पटल पर संपर्क कर सकते हैं।'
      }
    ],
    
    officialSources: [
      {
        name: 'Government of Jharkhand Official Portal',
        authority: 'Department of Women, Child Development and Social Security, Govt. of Jharkhand',
        url: 'https://jharkhand.gov.in',
        verificationDate: 'November 06, 2026'
      }
    ],
    keywords: [
      'maiya samman yojana',
      'jharkhand maiya samman yojana',
      'mukhyamantri maiya samman yojana',
      'मंईयां सम्मान योजना',
      'मैया सम्मान योजना झारखंड ऑनलाइन अप्लाई',
      'मंईयां सम्मान योजना झारखंड',
      'jmmsy',
      'maiya samman yojana ka paisa kab milega',
      'maiya samman yojana kab milega',
      'maiya samman yojana ka paisa kab aaega',
      'maiya samman yojana paisa kab milega',
      'maiya samman yojana 2500 kab milega',
      'maiya samman yojana next installment date',
      'maiya samman yojana kist kab aayegi',
      'maiya samman yojana 18 kist kab aayegi',
      'maiya samman yojana 16 kist kab aayegi',
      'maiya samman yojana 6th installment date',
      'maiya samman yojana 6 kist kab aayegi',
      'maiya samman yojana 17 kist kab aayegi',
      'maiya samman yojana 19 kist kab aayegi',
      'maiya samman yojana 20 kist kab aayegi',
      'maiya samman yojana 21 kist kab aayegi',
      'मंईयां सम्मान योजना का पैसा कब मिलेगा',
      'मंईयां सम्मान योजना की अगली किस्त कब आएगी',
      'maiya samman yojana status check',
      'maiya samman yojana jharkhand status check',
      'how to check maiya samman yojana status',
      'how to check maiya samman yojana status online',
      'how to check maiya samman yojana payment status',
      'how to check maiya samman yojana dbt status',
      'maiya samman yojana payment status',
      'मंईयां सम्मान योजना स्टेटस चेक',
      'maiya samman yojana online apply',
      'maiya samman yojana online apply 2026',
      'maiya samman yojana online apply last date 2026',
      'maiya samman yojana jharkhand online apply',
      'maiya samman yojana form pdf',
      'maiya samman yojana form pdf download',
      'maiya samman yojana satyapan form pdf download',
      'maiya samman yojana satyapan form 2026',
      'मंईयां सम्मान योजना फॉर्म pdf',
      'maiya samman yojana list',
      'maiya samman yojana list pdf',
      'maiya samman yojana beneficiary list pdf',
      'how to check maiya samman yojana list',
      'maiya samman yojana list check',
      'maiya samman yojana kisko milega',
      'eligibility for maiya samman yojana',
      'documents required for maiya samman yojana',
      'is maiya samman yojana closed',
      'maiya samman yojana helpline number',
      'maiya samman yojana toll free number',
      'what is maiya samman yojana',
      'maiya samman yojana update',
      'maiya samman yojana news',
      'maiya samman yojana news today',
      'maiya samman yojana today news'
    ],
    metaDescription_en: '✅ Jharkhand Maiya Samman Yojana 2026: When will your ₹1,000/₹2,500 DBT payment arrive? Check next installment date, Aadhaar payment status online, new beneficiary list & download PDF form.',
    metaDescription_hi: '✅ मंईयां सम्मान योजना 2026: आपका ₹1000/₹2500 का पैसा खाते में कब आएगा? जानिए अगली किस्त की तारीख, आधार से DBT पेमेंट स्टेटस चेक, नई लिस्ट व सत्यापन फॉर्म PDF डाउनलोड की 100% सही जानकारी।'
  },
  {
    id: 'pm-awas-yojana',
    slug: 'pm-awas-yojana-pmay-housing',
    title_en: 'PM Awas Yojana 2026 (PMAY 2.0): New Gramin & Urban List, Status Check & Apply',
    title_hi: 'पीएम आवास योजना 2026: नई ग्रामीण/शहरी लिस्ट में नाम देखें, ₹1.20-₹2.50 लाख व स्टेटस',
    shortTitle_en: 'PM Awas Yojana (PMAY 2.0)',
    shortTitle_hi: 'प्रधानमंत्री आवास योजना (PMAY)',
    category: 'housing',
    state: 'all-india',
    stateLabel_en: 'Central (All India)',
    stateLabel_hi: 'केंद्र सरकार (अखिल भारतीय)',
    status: 'Updated',
    lastVerified: 'November 2026',
    
    benefitSummary_en: 'Financial grant of ₹1,20,000 (plain areas) to ₹1,30,000 (hilly/NE states) for rural pucca house construction + 90-95 days of MGNREGA wages (₹25,000+) and ₹12,000 toilet grant. PMAY-Urban 2.0 provides interest subsidies and construction grants up to ₹2.5 Lakh.',
    benefitSummary_hi: 'ग्रामीण क्षेत्रों में पक्का मकान बनाने हेतु ₹1,20,000 (मैदानी) से ₹1,30,000 (पहाड़ी/पूर्वोत्तर) की सीधी आर्थिक सहायता, 90-95 दिनों की मनरेगा मजदूरी (₹25,000+) और ₹12,000 शौचालय सहायता। शहरी 2.0 में ₹2.5 लाख तक की ब्याज सब्सिडी व अनुदान।',
    benefitAmount_en: '₹1.2 Lakh to ₹2.5 Lakh grant/subsidy',
    benefitAmount_hi: '₹1.20 लाख से ₹2.50 लाख तक का अनुदान/सब्सिडी',
    whoCanApply_en: 'Homeless households or families living in kutcha, dilapidated houses with no family member in government service.',
    whoCanApply_hi: 'बेघर परिवार या कच्चे/जीर्ण-शीर्ण मकानों में रहने वाले नागरिक जिनके पूरे परिवार में कोई सरकारी नौकरी या पक्का मकान न हो।',
    applicationMode: 'Offline (Gram Panchayat Awaas+ Survey) & Online (pmaymis.gov.in)',
    bannerImage: '/images/schemes/pm-awas-yojana.webp',
    
    whatIsThis_en: 'Pradhan Mantri Awas Yojana (PMAY-G & PMAY-U 2.0) is India’s flagship affordable housing mission ensuring that every homeless and kutcha-dwelling family receives a durable, hygienic pucca house equipped with clean tap water, sanitary toilet, electricity connection, and LPG cylinder under central convergent schemes.',
    whatIsThis_hi: 'प्रधानमंत्री आवास योजना (ग्रामीण व शहरी 2.0) भारत सरकार का राष्ट्रीय आवास मिशन है, जिसका उद्देश्य देश के सभी बेघर और कच्चे/टूटे-फूटे मकानों में रहने वाले जरूरतमंद परिवारों को बुनियादी सुविधाओं (शौचालय, नल से जल, बिजली और उज्ज्वला गैस) से युक्त सुरक्षित पक्का मकान उपलब्ध कराना है।',
    
    benefitsList_en: [
      'Direct stage-wise DBT bank transfers pegged to verified geo-tagged physical construction milestones (Plinth, Lintel, Roof level).',
      'Additional 90 to 95 days of unskilled wage employment under MGNREGA credited directly to the beneficiary (approx. ₹20,000–₹25,000).',
      '₹12,000 dedicated financial grant for toilet construction under Swachh Bharat Mission (Grameen).',
      'Free LPG connection under PM Ujjwala Yojana and priority electricity connection under Saubhagya.',
      'PMAY-U 2.0: Up to ₹2.5 Lakh interest subsidy on affordable home loans for EWS/LIG families in urban municipal jurisdictions.'
    ],
    benefitsList_hi: [
      'मकान निर्माण के विभिन्न चरणों (नींव, लिंटेल, छत ढलाई) के पारदर्शी जियो-टैग सत्यापन के बाद सीधे बैंक खाते में DBT किस्तों का भुगतान।',
      'मनरेगा के अंतर्गत 90 से 95 दिनों की अकुशल मजदूरी का अतिरिक्त आर्थिक लाभ (लगभग ₹20,000 से ₹25,000 सीधे खाते में)।',
      'स्वच्छ भारत मिशन के तहत शौचालय निर्माण हेतु ₹12,000 की अलग निःशुल्क सरकारी सहायता।',
      'उज्ज्वला योजना के तहत मुफ्त गैस कनेक्शन और सौभाग्य योजना से निःशुल्क बिजली कनेक्शन।',
      'पीएम आवास शहरी 2.0: मध्यम और निम्न आय वर्ग (EWS/LIG) के परिवारों हेतु होम लोन पर ₹2.50 लाख तक की ब्याज सब्सिडी।'
    ],
    
    eligibility: {
      eligibleIf_en: [
        'Family does not own a pucca house anywhere in India in the name of any family member.',
        'Household living in houses with zero, one, or two rooms with kutcha walls and kutcha roof.',
        'Identified through Awaas+ priority survey database or SECC deprivation criteria.',
        'Landless households deriving a major part of their income from manual casual labor.',
        'Female-headed households, SC/ST, minority, and differently-abled (PwD) families receive special priority.'
      ],
      eligibleIf_hi: [
        'पूरे देश में परिवार के किसी भी सदस्य के नाम पर कोई पक्का मकान पंजीकृत न हो।',
        'परिवार कच्चे छप्पर, मिट्टी या घास-फूस की दीवारों वाले एक या दो कमरों के मकान में रहता हो।',
        'आवास प्लस (Awaas+) आधिकारिक सर्वे या एसईसीसी प्राथमिकता सूची में नाम दर्ज हो।',
        'भूमिहीन परिवार जिनकी आजीविका का मुख्य साधन दिहाड़ी मजदूरी हो।',
        'महिला मुखिया वाले परिवार, अनुसूचित जाति/जनजाति (SC/ST), अल्पसंख्यक और दिव्यांगजन परिवारों को प्राथमिकता।'
      ],
      notEligibleIf_en: [
        'Households owning motorized two/three/four wheelers, motorized fishing boats, or mechanized agricultural equipment like tractors.',
        'Families with any member who is a regular government employee or pays income/professional tax.',
        'Households holding a Kisan Credit Card (KCC) with credit limit of ₹50,000 or above.',
        'Households with any member earning more than ₹15,000 per month.',
        'Families who have previously received housing assistance under Indira Awaas Yojana or PMAY.'
      ],
      notEligibleIf_hi: [
        'जिनके पास मोटरयुक्त दो/तीन/चार पहिया वाहन, नाव या ट्रैक्टर/हार्वेस्टर जैसे कृषि उपकरण हों।',
        'परिवार में कोई भी सदस्य नियमित सरकारी/पीएसयू कर्मचारी हो या आयकर/प्रोफेशनल टैक्स देता हो।',
        '₹50,000 या अधिक की क्रेडिट सीमा वाला किसान क्रेडिट कार्ड (KCC) धारक परिवार।',
        'परिवार का कोई सदस्य ₹15,000 से अधिक मासिक कमाता हो या व्यापार में पंजीकृत हो।',
        'जिन परिवारों को पहले कभी इंदिरा आवास योजना अथवा पीएम आवास योजना का लाभ मिल चुका हो।'
      ]
    },
    
    requiredDocuments_en: [
      'Aadhaar Card of all family members (mandatory for biometric & DBT linkage)',
      'Bank Account Passbook (Account must be Aadhaar-seeded / NPCI active for DBT fund transfer)',
      'Job Card number (MGNREGA) to claim 90-95 days of unskilled construction wages',
      'Proof of land ownership, Pattadar passbook, or local Gram Panchayat possession certificate',
      'Clear photograph of existing kutcha house before commencement of construction',
      'Active Mobile number for status updates and OTP verification'
    ],
    requiredDocuments_hi: [
      'परिवार के सभी सदस्यों का आधार कार्ड (पहचान व डीबीटी सत्यापन हेतु अनिवार्य)',
      'बैंक खाता पासबुक (खाता एनपीसीआई आधार सीडेड होना चाहिए ताकि किस्त सीधे क्रेडिट हो)',
      'मनरेगा जॉब कार्ड (90-95 दिनों की मजदूरी का भुगतान पाने हेतु)',
      'जमीन का स्वामित्व प्रमाण पत्र, खतियान, पर्चा या ग्राम पंचायत द्वारा निर्गत दखल प्रमाण पत्र',
      'वर्तमान कच्चे मकान की स्पष्ट तस्वीर (जियो-टैगिंग से पहले की)',
      'सक्रिय मोबाइल नंबर (एसएमएस अलर्ट व ओटीपी हेतु)'
    ],
    
    howToApply_en: [
      'For PMAY-G (Rural): Beneficiary identification is done through the official Awaas+ 2024-2026 mobile app survey conducted by your local Panchayat Secretary and Gram Rozgar Sahayak.',
      'Check your name in the Gram Panchayat Permanent Waiting List (PWL) published at your Block / Panchayat office.',
      'Submit your Aadhaar, bank passbook, and land ownership document to the Panchayat Secretary for registration on the AwaasSoft portal.',
      'For PMAY-U 2.0 (Urban): Visit the official portal pmaymis.gov.in and click on "Citizen Assessment" or apply at your local Municipal Corporation / Nagar Palika office.',
      'Municipal and block officials conduct physical verification and geo-tag your kutcha house before sanctioning the financial grant.'
    ],
    howToApply_hi: [
      'पीएम आवास ग्रामीण (PMAY-G): चयन पंचायत सचिव और ग्राम रोजगार सेवक द्वारा आवास प्लस (Awaas+ 2024-2026) ऐप पर किए गए सर्वे द्वारा होता है।',
      'अपनी ग्राम पंचायत या प्रखंड कार्यालय में प्रकाशित स्थायी प्रतीक्षा सूची (Waiting List) में अपना नाम देखें।',
      'अपना आधार कार्ड, बैंक पासबुक और जमीन के कागजात पंचायत सचिव को सौंपें ताकि आवास-सॉफ्ट (AwaasSoft) पोर्टल पर आपका रजिस्ट्रेशन हो सके।',
      'पीएम आवास शहरी (PMAY-U 2.0): आधिकारिक पोर्टल pmaymis.gov.in पर जाएं और "Citizen Assessment" विकल्प से ऑनलाइन फॉर्म भरें अथवा नजदीकी नगर निगम/नगर पालिका कार्यालय जाएं।',
      'ब्लॉक या नगर पालिका के अधिकारी मौके पर जाकर कच्चे मकान की पहली जियो-टैगिंग करेंगे, जिसके बाद स्वीकृति आदेश जारी होता है।'
    ],
    
    statusCheckGuide_en: 'To check your PMAY application status: 1. For Rural: Visit rhreporting.nic.in > Stakeholders > click "IAY/PMAYG Beneficiary". Enter your Registration Number (or click "Advanced Search" by State, District, Block, and Name) to view installment credit dates and FTO status. 2. For Urban: Visit pmaymis.gov.in > Search Beneficiary.',
    statusCheckGuide_hi: 'पीएम आवास का स्टेटस देखने के लिए: 1. ग्रामीण: आधिकारिक पोर्टल rhreporting.nic.in पर जाएं > Stakeholders मेनू में "IAY/PMAYG Beneficiary" पर क्लिक करें। अपना रजिस्ट्रेशन नंबर दर्ज करें (रजिस्ट्रेशन नंबर न पता हो तो "Advanced Search" से राज्य, जिला, ब्लॉक और नाम चुनकर खोजें)। यहाँ आपको किस्तों का भुगतान और FTO स्टेटस दिखाई देगा। 2. शहरी: pmaymis.gov.in पर जाकर Search Beneficiary पर क्लिक करें।',
    officialStatusUrl: 'https://rhreporting.nic.in',
    
    commonProblems_en: [
      {
        problem: 'Second or Third installment delayed after construction milestone',
        solution: 'Immediately contact your Panchayat Secretary or Block Housing Coordinator to schedule the physical geo-tag photo upload on the AwaasSoft mobile app. The next fund transfer order (FTO) is generated within 7 days of geo-tag approval.'
      },
      {
        problem: 'FTO generated but installment money not received in bank account',
        solution: 'Ensure your bank account is active and mapped to NPCI Aadhaar DBT. If the account is dormant or has an old IFSC code after bank mergers, visit your bank to re-seed Aadhaar.'
      },
      {
        problem: 'Name missing from Awaas+ 2026 rural waiting list',
        solution: 'Submit a representation during the special Gram Sabha meeting or appeal to the Block Development Officer (BDO) with photographic proof of your kutcha dwelling.'
      }
    ],
    commonProblems_hi: [
      {
        problem: 'नींव या लिंटेल बनने के बाद दूसरी/तीसरी किस्त खाते में नहीं आई',
        solution: 'तुरंत अपने पंचायत सचिव या आवास समन्वयक से मिलें और आवास-सॉफ्ट (AwaasSoft) ऐप पर निर्माण की अगली जियो-टैग फोटो अपलोड करवाएं। फोटो स्वीकृत होने के 7 से 15 दिनों में अगली किस्त जारी हो जाती है।'
      },
      {
        problem: 'FTO बन गया है लेकिन बैंक खाते में पैसा क्रेडिट नहीं हुआ',
        solution: 'जांचें कि आपका बैंक खाता आधार से एनपीसीआई (NPCI DBT) मैप है या नहीं। यदि खाता इनएक्टिव है, तो बैंक शाखा जाकर नया आधार सीडिंग फॉर्म जमा करें।'
      },
      {
        problem: 'आवास प्लस की नई सूची में नाम नहीं दिख रहा',
        solution: 'विशेष ग्राम सभा बैठक में अपनी आपत्ति दर्ज कराएं या कच्चे मकान की फोटो व पहचान पत्र के साथ प्रखंड विकास पदाधिकारी (BDO) को आवेदन दें।'
      }
    ],
    
    faqs_en: [
      {
        q: 'How to check your name in the PM Awas Yojana 2026 Gramin & Urban list online?',
        a: 'For Rural (PMAY-G): Visit rhreporting.nic.in > click "High Level Physical Progress Report" or "Category-wise SECC data verification summary" > select your State, District, Block, and Gram Panchayat to view the complete list with sanctioned amounts. For Urban (PMAY-U): Visit pmaymis.gov.in > Search Beneficiary by Aadhaar.'
      },
      {
        q: 'How much total financial assistance is provided under PM Awas Yojana in 2026?',
        a: 'In rural areas (PMAY-G), plain areas receive ₹1,20,000 and hilly/difficult/North-Eastern states receive ₹1,30,000. Additionally, beneficiaries receive 90–95 days of MGNREGA wages (approx. ₹20,000–₹25,000) and ₹12,000 for toilet construction, taking total assistance to over ₹1.50 Lakh. Urban PMAY 2.0 provides grants and interest subsidies up to ₹2.50 Lakh.'
      },
      {
        q: 'When will the PM Awas Yojana 2nd and 3rd installments be released?',
        a: 'The 1st installment is released immediately upon sanction for foundation excavation. The 2nd installment is released within 7–15 days after plinth-level completion and official geo-tagged photo verification on AwaasSoft. The 3rd and final installment is credited upon reaching the roof lintel level.'
      },
      {
        q: 'How to check PM Awas payment status using Aadhaar Card or Mobile Number?',
        a: 'Go to rhreporting.nic.in > Stakeholders > IAY/PMAYG Beneficiary. If you do not have your registration number, click "Advanced Search", choose your State, District, Block, Panchayat, and search by Aadhaar Number or Applicant Name to see all FTOs and account credit details.'
      },
      {
        q: 'What is PM Awas Yojana 2.0 and who will benefit from the 3 Crore new houses?',
        a: 'The Union Cabinet has approved PMAY 2.0 to construct 3 Crore additional pucca houses across India (2 Crore in rural areas and 1 Crore in urban areas). PMAY 2.0 expands coverage to neo-middle class families, eligible tenants, and urban poor with interest subsidies on home loans.'
      },
      {
        q: 'How to apply for PM Awas Yojana online and offline in 2026?',
        a: 'Rural: Eligible families are enrolled via the Awaas+ door-to-door survey by Panchayat officials. Urban: Eligible individuals can apply online directly at pmaymis.gov.in under "Citizen Assessment" or submit forms at local CSC centers or municipal offices.'
      },
      {
        q: 'Can a family who previously received Indira Awaas Yojana benefit from PMAY?',
        a: 'No. Government housing rules strictly exclude any family that has previously received assistance under Indira Awaas Yojana, PM Awas Yojana, or any state government housing scheme.'
      },
      {
        q: 'What is the official toll-free helpline number for PM Awas Yojana?',
        a: 'For PMAY Gramin: Toll-free numbers are 1800-11-6446 and 1800-11-3444 (Email: support-pmayg@gov.in). For PMAY Urban: Toll-free number is 1800-11-6163.'
      }
    ],
    faqs_hi: [
      {
        q: 'पीएम आवास योजना 2026 की नई ग्रामीण व शहरी लिस्ट में अपना नाम कैसे देखें?',
        a: 'ग्रामीण आवास लिस्ट देखने के लिए rhreporting.nic.in पर जाएं > "Physical Progress Reports" में Category-wise लिस्ट पर क्लिक करें > अपना राज्य, जिला, ब्लॉक और ग्राम पंचायत चुनें। आपके गाँव के सभी चयनित लाभार्थियों के नाम और स्वीकृत राशि की सूची आ जाएगी। शहरी आवास हेतु pmaymis.gov.in पर "Search Beneficiary" पर जाएं।'
      },
      {
        q: 'पीएम आवास योजना में कुल कितना पैसा मिलता है 2026 में?',
        a: 'ग्रामीण क्षेत्रों में मैदानी इलाकों के लिए ₹1,20,000 और पहाड़ी/दुर्गम राज्यों में ₹1,30,000 की नकद सहायता मिलती है। इसके अलावा 90-95 दिनों की मनरेगा मजदूरी (₹20,000 से ₹25,000) और स्वच्छ भारत मिशन से ₹12,000 शौचालय अनुदान मिलता है, जिससे कुल लाभ ₹1.50 लाख से अधिक हो जाता है। शहरी 2.0 में ₹2.50 लाख तक की सहायता/सब्सिडी मिलती है।'
      },
      {
        q: 'पीएम आवास योजना की दूसरी और तीसरी किस्त कब आएगी?',
        a: 'पहली किस्त स्वीकृति के तुरंत बाद नींव खुदाई हेतु जारी होती है। दूसरी किस्त नींव (Plinth level) पूरी होने और आवास-सॉफ्ट (AwaasSoft) पर अधिकारी द्वारा जियो-टैग फोटो अपलोड करने के 7 से 15 दिनों के भीतर खाते में भेजी जाती है। तीसरी किस्त छत ढलाई (Roof level) पूरा होने पर जारी की जाती है।'
      },
      {
        q: 'आधार कार्ड और मोबाइल नंबर से पीएम आवास का स्टेटस कैसे चेक करें?',
        a: 'rhreporting.nic.in पर जाएं > Stakeholders मेनू में "IAY/PMAYG Beneficiary" चुनें। यदि रजिस्ट्रेशन नंबर नहीं है, तो "Advanced Search" पर क्लिक करें। अपना राज्य, जिला, ब्लॉक, पंचायत चुनें और आधार नंबर या नाम से सर्च करें। यहाँ आपको किस्तों का भुगतान और FTO स्टेटस दिखाई देगा।'
      },
      {
        q: 'पीएम आवास योजना 2.0 क्या है और 3 करोड़ नए मकान किन्हें मिलेंगे?',
        a: 'केंद्रीय मंत्रिमंडल ने 3 करोड़ अतिरिक्त परिवारों (2 करोड़ ग्रामीण और 1 करोड़ शहरी) को पक्का मकान देने हेतु PMAY 2.0 को मंजूरी दी है। इसके तहत आवास प्लस 2024-2026 के नए पात्र परिवारों तथा शहरी किराएदारों और मध्यम वर्ग (MIG) को किफायती होम लोन ब्याज सब्सिडी का लाभ दिया जा रहा है।'
      },
      {
        q: 'पीएम आवास योजना में नया आवेदन कैसे करें (ऑनलाइन व ऑफलाइन)?',
        a: 'ग्रामीण: पंचायत स्तर पर आवास प्लस (Awaas+) सर्वे के तहत पंचायत सचिव/मुखिया के माध्यम से नाम दर्ज कराया जाता है। शहरी: pmaymis.gov.in पोर्टल पर "Citizen Assessment" में जाकर ऑनलाइन फॉर्म भर सकते हैं या नजदीकी नगर पालिका/सीएससी केंद्र में आवेदन जमा कर सकते हैं।'
      },
      {
        q: 'जिन्हें पहले इंदिरा आवास या सरकारी मकान मिला था, क्या वे दोबारा आवेदन कर सकते हैं?',
        a: 'नहीं। सरकारी नियमों के अनुसार यदि परिवार के किसी भी सदस्य को पहले इंदिरा आवास, पीएम आवास या किसी राज्यीय आवास योजना का लाभ मिल चुका है, तो वह परिवार दोबारा पात्र नहीं होगा।'
      },
      {
        q: 'पीएम आवास योजना का आधिकारिक हेल्पलाइन और शिकायत नंबर क्या है?',
        a: 'पीएम आवास ग्रामीण की आधिकारिक टोल-फ्री हेल्पलाइन 1800-11-6446 एवं 1800-11-3444 है (ईमेल: support-pmayg@gov.in)। शहरी आवास योजना हेतु टोल-फ्री हेल्पलाइन 1800-11-6163 है।'
      }
    ],
    
    officialSources: [
      {
        name: 'Ministry of Rural Development Official Portal (PMAY-G)',
        authority: 'Ministry of Rural Development, Govt. of India',
        url: 'https://pmayg.nic.in',
        verificationDate: 'November 2026'
      },
      {
        name: 'Ministry of Housing and Urban Affairs (PMAY-U)',
        authority: 'Government of India',
        url: 'https://pmaymis.gov.in',
        verificationDate: 'November 2026'
      }
    ],
    keywords: [
      'pm awas yojana', 'pmay', 'pm awas yojana gramin', 'pmay gramin', 'pm awas yojana urban',
      'pmay urban', 'pm awas yojana 2.0', 'pmay 2.0', 'pm awas yojana 2026', 'pm awas yojana 2025',
      'pmay scheme', 'pm awas yojana portal', 'pmayg nic in', 'pmaymis gov in', 'pmay urban gov in',
      'pmayg dord gov in', 'awaassoft rhreporting', 'rhreporting nic in',
      'pm awas yojana list', 'pm awas yojana gramin list', 'pm awas yojana 2026 list',
      'pm awas yojana 2026 new list', 'pm awas yojana gramin list 2026', 'pm awas yojana 2026 list pdf download',
      'pmay list', 'pmay gramin list', 'pmay beneficiary list check 2026', 'pmayg nic in list 2026',
      'pm awas yojana 2026 list kaise check kare', 'pm awas yojana bihar list 2026', 'pm awas yojana up list',
      'pmay apply online', 'pm awas yojana apply online', 'pm awas yojana online apply',
      'pm awas yojana online apply 2026', 'pmay 2.0 apply online', 'pm awas yojana 2.0 apply online',
      'how to apply for pm awas yojana', 'how to apply pm awas yojana gramin', 'pm awas yojana ka form kaise bharen',
      'pmay applicant login', 'apply for pmay 2.0',
      'pm awas yojana status', 'pm awas yojana status check', 'pmay status by application id',
      'pmay status check with mobile number', 'how to check pm awas yojana status',
      'pm awas yojana 2 kist kab aayegi 2026', 'pm awas yojana 2 kist kab aayegi 2026 last date',
      'pm awas yojana kitna paisa milta hai 2026', 'pm awas yojana subsidy amount',
      'पीएम आवास योजना', 'पीएम आवास योजना ग्रामीण', 'प्रधानमंत्री आवास योजना 2026',
      'पीएम आवास योजना लिस्ट', 'पीएम आवास योजना 2026 की नई लिस्ट', 'पीएम आवास योजना में कितना पैसा मिलता है',
      'पीएम आवास योजना ऑनलाइन आवेदन', 'पीएम आवास योजना स्टेटस', 'पीएम आवास 2 किस्त कब आएगी',
      'पीएम आवास योजना 2.0', 'आवास प्लस नई लिस्ट 2026', 'प्रधानमंत्री ग्रामीण आवास योजना'
    ],
    metaDescription_en: '✅ PM Awas Yojana 2026 (PMAY 2.0): Check your name in new Gramin/Urban list online. Know ₹1.20–₹2.50 Lakh assistance, 2nd installment date, Aadhaar status & apply.',
    metaDescription_hi: '✅ पीएम आवास योजना 2026: ग्रामीण व शहरी नई लिस्ट में अपना नाम कैसे देखें? जानिए ₹1.20 लाख से ₹2.50 लाख सहायता, दूसरी किस्त की तारीख, आधार स्टेटस व ऑनलाइन आवेदन।'
  },
  {
    id: 'pm-vishwakarma',
    slug: 'pm-vishwakarma-yojana-artisan-support',
    title_en: 'PM Vishwakarma Yojana 2026: Online Apply, ₹15,000 Toolkit & ₹3 Lakh Loan',
    title_hi: 'पीएम विश्वकर्मा योजना 2026: ऑनलाइन रजिस्ट्रेशन, ₹15,000 टूलकिट व ₹3 लाख लोन',
    shortTitle_en: 'PM Vishwakarma Scheme',
    shortTitle_hi: 'पीएम विश्वकर्मा योजना',
    category: 'employment',
    state: 'all-india',
    stateLabel_en: 'Central (All India)',
    stateLabel_hi: 'केंद्र सरकार (अखिल भारतीय)',
    status: 'Active',
    lastVerified: 'November 2026',
    
    benefitSummary_en: 'Collateral-free business loans up to ₹3,00,000 at a subsidized 5% interest rate (₹1 Lakh in 1st tranche, ₹2 Lakh in 2nd tranche), ₹15,000 e-RUPI voucher for advanced modern toolkit, 5–7 days free basic skill training with ₹500/day daily stipend, and official PM Vishwakarma Certificate & Digital ID Card.',
    benefitSummary_hi: '5% की रियायती ब्याज दर पर बिना किसी गारंटी (कोलैटरल-फ्री) के ₹3,00,000 तक का लोन (पहली बार ₹1 लाख, दूसरी बार ₹2 लाख), आधुनिक टूलकिट हेतु ₹15,000 का ई-वाउचर, 5-7 दिन का मुफ्त प्रशिक्षण व ₹500 प्रतिदिन का दैनिक भत्ता।',
    benefitAmount_en: 'Up to ₹3 Lakh loan (5% interest) + ₹15,000 toolkit voucher',
    benefitAmount_hi: '₹3 लाख तक का सस्ता लोन (5% ब्याज) + ₹15,000 टूलकिट वाउचर',
    whoCanApply_en: 'Traditional artisans and craftspeople working with their hands and tools across 18 designated family trades (Carpenters, Blacksmiths, Masons, Tailors, Barbers, Potters, Cobblers, etc.).',
    whoCanApply_hi: 'हाथ और पारंपरिक औजारों से कार्य करने वाले 18 चिन्हित व्यवसायों के कारीगर व दस्तकार (बढ़ई, लोहार, कुम्हार, राजमिस्त्री, दर्जी, नाई, मोची, धोबी आदि)।',
    applicationMode: 'Online (via CSC Centers / pmvishwakarma.gov.in)',
    bannerImage: '/images/schemes/pm-vishwakarma.webp',
    
    whatIsThis_en: 'PM Vishwakarma is an ambitious Central Sector scheme spearheaded by the Ministry of Micro, Small and Medium Enterprises (MSME) to formally recognize and empower traditional craftspeople and artisans across India. The scheme provides holistic end-to-end support including national identity recognition, free advanced skill upgradation, ₹15,000 modern toolkits, low-interest collateral-free loans, and digital marketing linkages.',
    whatIsThis_hi: 'पीएम विश्वकर्मा योजना सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय (MSME) द्वारा पारंपरिक शिल्पकारों व दस्तकारों को औपचारिक पहचान, कौशल उन्नयन, आधुनिक टूलकिट और सस्ती वित्तीय पूंजी प्रदान करने के लिए शुरू की गई राष्ट्रीय योजना है, ताकि वे अपने हुनर को आधुनिक बाजार से जोड़कर आत्मनिर्भर बन सकें।',
    
    benefitsList_en: [
      'Official PM Vishwakarma Certificate and Digital ID Card recognizing the artisan across India.',
      'Free 5–7 days Basic Skill Training (and optional 15+ days Advanced Training) with ₹500 daily stipend deposited directly to bank.',
      '₹15,000 Digital Incentive grant (e-RUPI voucher) for purchasing modern specialized trade toolkits.',
      'Subsidized enterprise loan: First tranche of ₹1,00,000 (repayable in 18 months), followed by second tranche of ₹2,00,000 (repayable in 30 months) at just 5% interest with zero collateral.',
      'Digital transaction incentive of ₹1 per transaction for up to 100 eligible digital transactions every month.'
    ],
    benefitsList_hi: [
      'आधिकारिक पीएम विश्वकर्मा प्रमाण पत्र और डिजिटल आईडी कार्ड, जिससे देश भर में मान्यता मिलती है।',
      '5 से 7 दिनों का मुफ्त बुनियादी कौशल प्रशिक्षण और प्रतिदिन ₹500 का स्टाइपेंड सीधे बैंक खाते में।',
      'उन्नत आधुनिक औजार खरीदने के लिए ₹15,000 का निःशुल्क टूलकिट ई-वाउचर (e-RUPI)।',
      'बिना किसी गारंटी (कोलैटरल-फ्री) लोन: प्रथम चरण में ₹1,00,000 (18 महीने) और समय पर भुगतान के बाद दूसरे चरण में ₹2,00,000 (30 महीने) मात्र 5% ब्याज पर।',
      'डिजिटल लेन-देन करने पर प्रति ट्रांजेक्शन ₹1 का प्रोत्साहन (अधिकतम 100 ट्रांजेक्शन प्रतिमाह)।'
    ],
    
    eligibility: {
      eligibleIf_en: [
        'Applicant must be an artisan or craftsperson engaged in one of the 18 designated traditional family trades on a self-employment basis.',
        'Minimum age of 18 years on the date of online registration.',
        'The applicant must not have availed similar central credit schemes like PMEGP, PM SVANidhi, or Mudra loans in the past 5 years (except where existing loans are fully cleared).',
        'Benefit is restricted to only one adult member per family unit (husband, wife, and unmarried children).'
      ],
      eligibleIf_hi: [
        'आवेदक स्वरोजगार के आधार पर 18 निर्दिष्ट पारंपरिक शिल्पों/व्यवसायों में से किसी एक में कार्यरत कारीगर हो।',
        'पंजीकरण की तिथि पर न्यूनतम आयु 18 वर्ष पूर्ण हो चुकी हो।',
        'आवेदक ने पिछले 5 वर्षों में पीएमईजीपी, स्वनिधि या मुद्रा जैसी सरकारी योजनाओं से कोई बकाया लोन न लिया हो (पूरी तरह चुकता लोन वाले पात्र हैं)।',
        'परिवार में से केवल एक ही सदस्य (पति, पत्नी और अविवाहित संतान) इस योजना का लाभ ले सकता है।'
      ],
      notEligibleIf_en: [
        'Persons in regular government service (Central/State/PSU) and their immediate family members.',
        'Individuals working on fixed salaried employment in private factories or commercial companies without self-employed traditional craftsmanship.',
        'Individuals engaged outside the 18 officially designated traditional trades.'
      ],
      notEligibleIf_hi: [
        'सरकारी सेवा (केंद्र/राज्य/पीएसयू) में कार्यरत नियमित कर्मचारी और उनके परिवार के सदस्य।',
        'कंपनियों या कारखानों में नियमित वेतन पर कार्य करने वाले गैर-हस्तशिल्पी।',
        'योजना में शामिल 18 आधिकारिक पारंपरिक व्यवसायों से बाहर के कार्य।'
      ]
    },
    
    requiredDocuments_en: [
      'Aadhaar Card of the artisan (mandatory for biometric authentication)',
      'Active Mobile number linked to Aadhaar for OTP and e-RUPI voucher delivery',
      'Bank Account Passbook details (account must be Aadhaar-seeded / NPCI active for stipend and loan)',
      'Ration Card / Family Samagra ID / Family Identity Proof',
      'Trade skill self-declaration during CSC biometric registration'
    ],
    requiredDocuments_hi: [
      'आवेदक कारीगर का आधार कार्ड (बायोमेट्रिक फिंगरप्रिंट सत्यापन हेतु अनिवार्य)',
      'आधार से लिंक चालू मोबाइल नंबर (ओटीपी और ₹15,000 ई-वाउचर एसएमएस प्राप्त करने हेतु)',
      'बैंक खाता पासबुक विवरण (खाता एनपीसीआई आधार सीडेड होना चाहिए ताकि स्टाइपेंड व लोन क्रेडिट हो)',
      'राशन कार्ड / परिवार का पहचान प्रमाण',
      'व्यवसाय और हुनर का स्व-प्रमाणीकरण'
    ],
    
    howToApply_en: [
      'Visit your nearest Common Service Centre (CSC) with your Aadhaar Card, linked mobile, and bank passbook.',
      'The CSC VLE operator logs into pmvishwakarma.gov.in using their verified credentials.',
      'Undergo biometric Aadhaar fingerprint authentication to create and verify your digital artisan profile.',
      'Select your trade from the 18 eligible traditional categories (e.g., Carpenter, Tailor, Barber, Mason, Potter).',
      'Submit the application for three-stage official verification: Gram Panchayat / Urban Local Body level, District Implementation Committee, and National Screening Committee.',
      'Once verified, complete the 5-7 days basic skill training, receive your ₹15,000 toolkit voucher, and apply for the 5% collateral-free loan.'
    ],
    howToApply_hi: [
      'अपने नजदीकी सीएससी (CSC) प्रज्ञा केंद्र पर अपने आधार कार्ड, लिंक मोबाइल नंबर और बैंक पासबुक के साथ जाएं।',
      'सीएससी संचालक आधिकारिक पोर्टल pmvishwakarma.gov.in पर आपका ऑनलाइन पंजीकरण शुरू करेगा।',
      'बायोमेट्रिक फिंगरप्रिंट से आधार सत्यापन करवाएं और अपने परिवार व हुनर का विवरण दर्ज करें।',
      '18 श्रेणियों में से अपने काम (जैसे बढ़ई, दर्जी, राजमिस्त्री, धोबी, मोची आदि) का सही चुनाव करें।',
      'आवेदन जमा होने पर ग्राम पंचायत/शहरी निकाय, जिला कार्यान्वयन समिति तथा स्क्रीनिंग समिति द्वारा तीन-स्तरीय सत्यापन होगा।',
      'सत्यापन पूरा होते ही 5-7 दिन की ट्रेनिंग में भाग लें, ₹15,000 का टूलकिट वाउचर प्राप्त करें और 5% ब्याज पर लोन के लिए आवेदन करें।'
    ],
    
    statusCheckGuide_en: 'To check your PM Vishwakarma application status: 1. Visit pmvishwakarma.gov.in > click "Login > Applicant / Beneficiary Login". 2. Enter your registered mobile number and verify via OTP. 3. Your dashboard will display real-time verification stages (Panchayat, District, Screening), training schedule, and loan disbursement status.',
    statusCheckGuide_hi: 'पीएम विश्वकर्मा आवेदन का स्टेटस देखने के लिए: 1. pmvishwakarma.gov.in पर जाएं और "Login > Applicant / Beneficiary Login" पर क्लिक करें। 2. अपना पंजीकृत मोबाइल नंबर और प्राप्त ओटीपी दर्ज करें। 3. डैशबोर्ड पर आपको ग्राम पंचायत, जिला समिति के सत्यापन का स्तर, ट्रेनिंग की तारीख और लोन स्वीकृति का लाइव स्टेटस दिखेगा।',
    officialStatusUrl: 'https://pmvishwakarma.gov.in',
    
    commonProblems_en: [
      {
        problem: 'Application status shows "Pending at Gram Panchayat / ULB Level"',
        solution: 'Contact your Village Mukhiya, Gram Panchayat Secretary, or Ward Councillor to approve your trade verification in their official PM Vishwakarma portal dashboard queue.'
      },
      {
        problem: 'How to redeem the ₹15,000 toolkit e-RUPI voucher',
        solution: 'The e-RUPI voucher code and QR link is delivered via SMS upon completing basic training. Present this SMS/QR code at authorized hardware vendors and registered tool supply stores to purchase your trade toolkit.'
      },
      {
        problem: 'Aadhaar biometric fingerprint mismatch at CSC',
        solution: 'Clean fingers thoroughly, update your biometric data at the nearest Aadhaar Seva Kendra, or use IRIS eye-scan authentication at the CSC center.'
      }
    ],
    commonProblems_hi: [
      {
        problem: 'स्टेटस में "Pending at Gram Panchayat / ULB Level" दिख रहा है',
        solution: 'अपने ग्राम प्रधान/मुखिया या वार्ड पार्षद से संपर्क करें और उन्हें आधिकारिक पोर्टल पर अपने लॉगिन से आपका सत्यापन स्वीकृत (Approve) करने का अनुरोध करें।'
      },
      {
        problem: '₹15,000 का टूलकिट ई-वाउचर कैसे भुनाएं (Redeem करें)',
        solution: 'ट्रेनिंग पूरी होने पर मोबाइल पर एसएमएस के जरिए e-RUPI वाउचर कोड प्राप्त होता है। इसे अधिकृत टूलकिट दुकानों या हार्डवेयर स्टोर पर दिखाकर अपने काम के औजार खरीदें।'
      },
      {
        problem: 'सीएससी केंद्र पर बायोमेट्रिक फिंगरप्रिंट मैच नहीं हो रहा',
        solution: 'नजदीकी आधार सेवा केंद्र पर जाकर अपना बायोमेट्रिक अपडेट करवाएं अथवा सीएससी सेंटर पर आईरिस (आंखों की पुतली) स्कैन से सत्यापन करवाएं।'
      }
    ],
    
    faqs_en: [
      {
        q: 'What is PM Vishwakarma Yojana and what are the main benefits in 2026?',
        a: 'PM Vishwakarma is a flagship Central Government scheme supporting traditional artisans with: 1. Official National Certificate & ID Card, 2. Free 5-7 days basic skill training with ₹500/day stipend, 3. ₹15,000 digital e-RUPI voucher for modern toolkits, 4. Up to ₹3 Lakh collateral-free loan at just 5% interest (₹1 Lakh in 1st stage, ₹2 Lakh in 2nd stage), and 5. Digital transaction cashback.'
      },
      {
        q: 'Which 18 traditional artisan trades are eligible for PM Vishwakarma Scheme?',
        a: 'The 18 covered trades are: 1. Carpenter (Suthar), 2. Boat Maker, 3. Armourer, 4. Blacksmith (Lohar), 5. Hammer & Tool Kit Maker, 6. Locksmith, 7. Sculptor (Moortikar/Stone Carver), 8. Goldsmith (Sonar), 9. Potter (Kumhaar), 10. Cobbler (Charmakar/Footwear artisan), 11. Mason (Rajmistri), 12. Basket/Mat/Broom Maker/Coir Weaver, 13. Doll & Toy Maker (Traditional), 14. Barber (Naai), 15. Garland Maker (Malakaar), 16. Washerman (Dhobi), 17. Tailor (Darzi), and 18. Fishing Net Maker.'
      },
      {
        q: 'How to get and redeem the ₹15,000 modern toolkit e-voucher?',
        a: 'After completing 5–7 days of basic skill training with satisfactory evaluation, an e-RUPI digital voucher worth ₹15,000 is issued by the government directly to your registered mobile number via SMS. You can redeem this voucher at empaneled tool suppliers and hardware stores to purchase certified trade equipment.'
      },
      {
        q: 'How to get a ₹3 Lakh collateral-free loan at 5% interest under PM Vishwakarma?',
        a: 'Eligible artisans who complete basic skill training are eligible for an enterprise loan: Stage 1 provides up to ₹1,00,000 repayable in 18 months. Upon successful timely repayment, Stage 2 offers an additional ₹2,00,000 repayable in 30 months. The effective interest rate for the artisan is just 5% per annum, with the remaining interest subsidized by the Central Government.'
      },
      {
        q: 'How to apply for PM Vishwakarma Yojana online through CSC?',
        a: "Artisans can register through any local Common Service Center (CSC). The CSC operator enters the applicant's Aadhaar, conducts biometric fingerprint e-KYC, captures trade proof, and submits the application to the Gram Panchayat / Urban local body for official verification."
      },
      {
        q: 'How to download the PM Vishwakarma Certificate and Digital ID Card?',
        a: 'Visit pmvishwakarma.gov.in > click "Login > Applicant Login" > log in using your registered mobile number and Aadhaar OTP. Once your application is officially approved by the committee, you can view and download your high-resolution PM Vishwakarma Certificate and ID card PDF.'
      },
      {
        q: 'How to check PM Vishwakarma application and loan status online?',
        a: 'Go to pmvishwakarma.gov.in and log in to the Applicant/Beneficiary portal with mobile OTP. The dashboard displays the live stage of your application (Stage 1 Gram Panchayat, Stage 2 District Committee, Stage 3 Screening Committee) and bank loan sanction status.'
      },
      {
        q: 'What is the official toll-free helpline number for PM Vishwakarma Yojana?',
        a: 'The official Government of India PM Vishwakarma toll-free helpline numbers are 1800-267-7777 and 17923. The MSME Champions desk can be reached at 011-23061500 or by email at champions@gov.in.'
      }
    ],
    faqs_hi: [
      {
        q: 'पीएम विश्वकर्मा योजना क्या है और इसमें क्या-क्या बड़े लाभ मिलते हैं?',
        a: 'पीएम विश्वकर्मा केंद्र सरकार की फ्लैगशिप योजना है जिसमें पारंपरिक कारीगरों को: 1. राष्ट्रीय विश्वकर्मा प्रमाण पत्र व आईडी कार्ड, 2. ₹500 प्रतिदिन भत्ते के साथ 5-7 दिन की मुफ्त ट्रेनिंग, 3. आधुनिक औजारों के लिए ₹15,000 का फ्री ई-वाउचर (e-RUPI), 4. 5% ब्याज पर ₹3 लाख तक का बिना गारंटी लोन (पहले ₹1 लाख, फिर ₹2 लाख), और 5. डिजिटल ट्रांजेक्शन पर कैशबैक मिलता है।'
      },
      {
        q: 'पीएम विश्वकर्मा योजना में कौन-कौन से 18 पारंपरिक काम (Trades) शामिल हैं?',
        a: 'शामिल 18 व्यवसाय: 1. बढ़ई (सुथार), 2. नाव निर्माता, 3. अस्त्रकार, 4. लोहार, 5. हथौड़ा व टूलकिट निर्माता, 6. ताला बनाने वाले, 7. मूर्तिकार (पत्थर तराशने वाले), 8. सुनार, 9. कुम्हार, 10. मोची (जूता बनाने वाले), 11. राजमिस्त्री, 12. टोकरी/चटाई/झाड़ू निर्माता, 13. पारंपरिक गुड़िया व खिलौना निर्माता, 14. नाई, 15. मालाकार (फूल विक्रेता), 16. धोबी, 17. दर्जी, और 18. मछली का जाल बनाने वाले।'
      },
      {
        q: '₹15,000 का फ्री टूलकिट ई-वाउचर कैसे मिलता है और इसे कैसे भुनाएं?',
        a: '5 से 7 दिनों का बेसिक कौशल प्रशिक्षण पूरा होने पर सरकार द्वारा आपके रजिस्टर्ड मोबाइल नंबर पर ₹15,000 का e-RUPI डिजिटल वाउचर भेजा जाता है। इस वाउचर/क्यूआर कोड को अधिकृत हार्डवेयर स्टोर्स पर दिखाकर आप अपने काम के उन्नत आधुनिक औजार बिल्कुल मुफ्त खरीद सकते हैं।'
      },
      {
        q: 'पीएम विश्वकर्मा में 5% ब्याज पर ₹3 लाख का लोन कैसे मिलता है?',
        a: 'ट्रेनिंग पूरी करने वाले कारीगरों को प्रथम चरण में ₹1,00,000 का लोन (18 महीने की अवधि) बिना किसी गारंटी के मात्र 5% ब्याज पर मिलता है। इस लोन को समय पर चुकाने के बाद द्वितीय चरण में व्यवसाय विस्तार हेतु ₹2,00,000 का अतिरिक्त लोन (30 महीने की अवधि) दिया जाता है।'
      },
      {
        q: 'पीएम विश्वकर्मा योजना में ऑनलाइन आवेदन (Registration) कैसे करें?',
        a: 'कारीगर नजदीकी सीएससी (CSC) प्रज्ञा केंद्र पर जाकर आवेदन कर सकते हैं। सीएससी संचालक आपके आधार नंबर से बायोमेट्रिक फिंगरप्रिंट ई-केवाईसी करेगा, आपके हुनर का विवरण भरेगा और फॉर्म को ग्राम पंचायत/शहरी निकाय सत्यापन हेतु सबमिट करेगा।'
      },
      {
        q: 'पीएम विश्वकर्मा का सर्टिफिकेट और डिजिटल आईडी कार्ड कैसे डाउनलोड करें?',
        a: 'pmvishwakarma.gov.in पोर्टल पर जाएं > "Login > Applicant Login" पर क्लिक करें > अपने मोबाइल नंबर और ओटीपी से लॉगिन करें। सत्यापन पूरा होते ही डैशबोर्ड पर "Download Certificate" और "Download ID Card" का विकल्प मिल जाएगा।'
      },
      {
        q: 'पीएम विश्वकर्मा एप्लीकेशन का स्टेटस (Status Check) ऑनलाइन कैसे देखें?',
        a: 'आधिकारिक पोर्टल pmvishwakarma.gov.in पर जाकर "Applicant Login" करें। यहाँ आपको तीनों चरणों के सत्यापन (ग्राम पंचायत, जिला समिति, स्क्रीनिंग समिति) और बैंक लोन की स्वीकृति का लाइव स्टेटस दिखाई देगा।'
      },
      {
        q: 'पीएम विश्वकर्मा योजना का आधिकारिक हेल्पलाइन और टोल-फ्री नंबर क्या है?',
        a: 'पीएम विश्वकर्मा की आधिकारिक राष्ट्रीय टोल-फ्री हेल्पलाइन 1800-267-7777 एवं 17923 है। इसके अलावा एमएसएमई हेल्पडेस्क नंबर 011-23061500 और ईमेल champions@gov.in पर भी सहायता प्राप्त की जा सकती है।'
      }
    ],
    
    officialSources: [
      {
        name: 'PM Vishwakarma Official Portal',
        authority: 'Ministry of Micro, Small and Medium Enterprises (MSME), Govt. of India',
        url: 'https://pmvishwakarma.gov.in',
        verificationDate: 'November 2026'
      },
      {
        name: 'Ministry of Skill Development and Entrepreneurship',
        authority: 'Government of India',
        url: 'https://msde.gov.in',
        verificationDate: 'November 2026'
      }
    ],
    keywords: [
      'pm vishwakarma', 'pm vishwakarma yojana', 'vishwakarma yojana', 'pm vishwakarma scheme',
      'pm vishwakarma portal', 'pmvishwakarma gov in', 'pm vishwakarma gov in registration online login',
      'pm vishwakarma login', 'pm vishwakarma yojana login', 'pm vishwakarma beneficiary login',
      'pm vishwakarma csc login', 'pm vishwakarma app', 'pm vishwakarma gov in login',
      'pm vishwakarma yojana online apply', 'pm vishwakarma online apply', 'pm vishwakarma registration',
      'vishwakarma yojana online apply', 'pm vishwakarma yojana online apply 2026', 'pm vishwakarma online apply 2026',
      'pm vishwakarma yojana online apply last date', 'how to apply pm vishwakarma yojana',
      'pm vishwakarma yojana registration', 'vishwakarma yojana online form', 'how to register pm vishwakarma',
      'pm vishwakarma loan apply', 'pm vishwakarma loan', 'pm vishwakarma loan apply online',
      'vishwakarma yojana loan apply', 'how to apply pm vishwakarma loan', 'vishwakarma scheme 3 lakh loan',
      'pm vishwakarma loan interest rate', 'collateral free loan 5 percent',
      'pm vishwakarma tool kit', 'pm vishwakarma toolkit voucher', 'pm vishwakarma tool kit apply online',
      'how to get pm vishwakarma toolkit', 'how to redeem pm vishwakarma voucher', 'pm vishwakarma toolkit pdf',
      'pm vishwakarma status', 'pm vishwakarma yojana status', 'pm vishwakarma application status',
      'pm vishwakarma certificate download', 'pm vishwakarma id card download',
      'pm vishwakarma yojana kya hai', 'pm vishwakarma yojana kiske liye hai', 'pm vishwakarma 18 trades list',
      'pm vishwakarma yojana benefits', 'pm vishwakarma helpline number', 'pm vishwakarma toll free number',
      'पीएम विश्वकर्मा योजना', 'पीएम विश्वकर्मा योजना 2026', 'विश्वकर्मा योजना ऑनलाइन आवेदन',
      'पीएम विश्वकर्मा लोन', 'विश्वकर्मा टूलकिट ₹15000', 'पीएम विश्वकर्मा स्टेटस चेक',
      'पीएम विश्वकर्मा सर्टिफिकेट डाउनलोड', 'विश्वकर्मा योजना क्या है', 'विश्वकर्मा 18 ट्रेड लिस्ट',
      'पीएम विश्वकर्मा सीएससी लॉगिन', 'पीएम विश्वकर्मा हेल्पलाइन नंबर'
    ],
    metaDescription_en: '✅ PM Vishwakarma Yojana 2026: Apply online for ₹15,000 free toolkit voucher, ₹3 Lakh collateral-free loan at 5%, ₹500/day skill stipend & certificate download.',
    metaDescription_hi: '✅ पीएम विश्वकर्मा योजना 2026: 18 पारंपरिक कारीगरों को ₹15,000 फ्री टूलकिट, 5% ब्याज पर ₹3 लाख का बिना गारंटी लोन, ₹500 दैनिक भत्ता व ऑनलाइन रजिस्ट्रेशन की पूरी गाइड।'
  },
  {
    id: 'jharkhand-abua-awas',
    slug: 'jharkhand-abua-awas-yojana-housing',
    title_en: 'Jharkhand Abua Awas Yojana 2026: New Beneficiary List, ₹2 Lakh Grant & Status Check',
    title_hi: 'अबुआ आवास योजना 2026: नई लिस्ट में अपना नाम देखें, ₹2 लाख सहायता, स्टेटस चेक व फॉर्म PDF',
    shortTitle_en: 'Jharkhand Abua Awas',
    shortTitle_hi: 'अबुआ आवास योजना (झारखंड)',
    category: 'housing',
    state: 'jharkhand',
    stateLabel_en: 'Jharkhand State',
    stateLabel_hi: 'झारखंड राज्य',
    status: 'Active',
    lastVerified: 'November 06, 2026',
    
    benefitSummary_en: 'State-funded grant of ₹2,00,000 disbursed in 4 installments to construct a modern 3-room pucca house with a kitchen for families left out of central housing schemes, plus MGNREGA wages.',
    benefitSummary_hi: 'केंद्र की आवास योजना से वंचित परिवारों के लिए 3 कमरों और पक्की रसोई युक्त मकान हेतु 4 किस्तों में ₹2,00,000 की शत-प्रतिशत राज्य सरकार द्वारा आर्थिक सहायता।',
    benefitAmount_en: '₹2,00,000 (in 4 installments) + MGNREGA wages',
    benefitAmount_hi: '₹2,00,000 (4 किस्तों में) + मनरेगा मजदूरी',
    whoCanApply_en: 'Permanent residents of Jharkhand living in kutcha/dilapidated homes who did not receive PMAY or Baba Saheb Ambedkar housing grants.',
    whoCanApply_hi: 'झारखंड के स्थायी निवासी जो कच्चे/जीर्ण घरों में रहते हैं और जिन्हें पूर्व में पीएम आवास या आंबेडकर आवास का लाभ नहीं मिला है।',
    applicationMode: 'Offline (Aapki Sarkar Aapke Dwar Camps & Block BDO Office)',
    bannerImage: '/images/schemes/jharkhand-abua-awas.webp',
    
    whatIsThis_en: 'Abua Awas Yojana (AAY) is a 100% Jharkhand State funded housing initiative launched to ensure that vulnerable, tribal, and rural families deprived of Central PMAY housing build spacious 3-room pucca homes with permanent concrete roofing.',
    whatIsThis_hi: 'अबुआ आवास योजना झारखंड सरकार द्वारा शुरू की गई 100% राज्य-पोषित योजना है। इसका उद्देश्य केंद्र सरकार की प्रधानमंत्री आवास योजना से छूट गए जरूरतमंद, गरीब और ग्रामीण परिवारों को 3 कमरों का पक्का मकान उपलब्ध कराना है।',
    
    benefitsList_en: [
      'Substantial ₹2,00,000 financial support (significantly higher than typical rural housing schemes).',
      'Mandates a spacious 3-room layout with an integrated kitchen for comfortable family living (minimum 31 sq. meters).',
      'Direct Benefit Transfer (DBT) into 4 milestone installments: 15% on plinth level, 25% on lintel, 50% on roof casting, and 10% on completion.',
      'Additional wage assistance under MGNREGS for family members contributing unskilled labor during construction.'
    ],
    benefitsList_hi: [
      '₹2,00,000 की बड़ी वित्तीय सहायता जो आम ग्रामीण आवास योजनाओं से काफी अधिक है।',
      'परिवार के गरिमापूर्ण जीवन हेतु 3 पक्के कमरे तथा स्वच्छ रसोईघर का अनिवार्य प्रावधान (न्यूनतम 31 वर्ग मीटर)।',
      'निर्माण की प्रगति के अनुसार 4 पारदर्शी किस्तों में सीधे बैंक खाते में भुगतान: प्लिंथ पर 15%, लिंटेल पर 25%, छत ढलाई पर 50%, और प्लास्टर/पूर्णता पर 10%।',
      'मकान निर्माण में श्रम करने वाले परिवार को मनरेगा की अकुशल मजदूरी का अतिरिक्त आर्थिक लाभ।'
    ],
    
    eligibility: {
      eligibleIf_en: [
        'Applicant must be a permanent resident of Jharkhand state.',
        'Household living in kutcha houses or temporary huts without a permanent concrete roof.',
        'Families not having benefited from PMAY-G, PMAY-U, or Dr. Bhimrao Ambedkar Awas Yojana.',
        'Priority given to Particularly Vulnerable Tribal Groups (PVTG), destitute households, widows, and disaster-affected families.'
      ],
      eligibleIf_hi: [
        'आवेदक झारखंड राज्य का स्थायी निवासी होना चाहिए।',
        'परिवार कच्चे मकान, मिट्टी की दीवारों या छप्पर की झोपड़ी में निवास कर रहा हो।',
        'परिवार के किसी भी सदस्य को पूर्व में पीएम आवास (PMAY) या बाबा साहेब आंबेडकर आवास का लाभ न मिला हो।',
        'आदिम जनजाति (PVTG), विधवा, प्राकृतिक आपदा प्रभावित और बेसहारा परिवारों को चयन में सर्वोच्च प्राथमिकता दी जाती है।'
      ],
      notEligibleIf_en: [
        'Households owning a pucca house anywhere in the country.',
        'Families with any member paying income tax or employed in regular government/public sector service.',
        'Owners of motorized four-wheeler vehicles or agricultural mechanized equipment (tractors).'
      ],
      notEligibleIf_hi: [
        'परिवार के पास देश में कहीं भी पक्का मकान पहले से मौजूद हो।',
        'परिवार का कोई भी सदस्य आयकरदाता (Income Tax Payer) या नियमित सरकारी सेवा में पदस्थ हो।',
        'चार पहिया मोटर वाहन या ट्रैक्टर धारक परिवार।'
      ]
    },
    
    requiredDocuments_en: [
      'Aadhaar Card of the applicant and adult family members',
      'Jharkhand Residential Certificate (Niwas Praman Patra) or Voter ID',
      'Ration Card copy (Yellow / Pink / White)',
      'Aadhaar-seeded personal bank account passbook copy',
      'MGNREGA Job Card (for daily wage labor benefit)',
      'Photographs of existing kutcha house (with family in front)',
      'Self-declaration of not owning any pucca house'
    ],
    requiredDocuments_hi: [
      'आवेदक व परिवार के वयस्क सदस्यों का आधार कार्ड',
      'झारखंड का स्थानीय निवास प्रमाण पत्र अथवा मतदाता पहचान पत्र',
      'झारखंड राशन कार्ड (जिसमें परिवार का नाम दर्ज हो)',
      'आधार से लिंक बैंक खाते की पासबुक प्रति',
      'मनरेगा जॉब कार्ड (दैनिक मजदूरी लाभ प्राप्त करने हेतु)',
      'वर्तमान कच्चे मकान की स्पष्ट तस्वीर (परिवार के सदस्यों के साथ)',
      'पूर्व में पक्का मकान न होने का स्व-घोषणा पत्र'
    ],
    
    howToApply_en: [
      'Obtain the official Abua Awas Yojana application form free of cost from your Gram Panchayat Bhawan or special "Aapki Yojana, Aapki Sarkar, Aapke Dwar" camp.',
      'Fill in personal details, Aadhaar number, existing housing condition, and bank account information.',
      'Attach photocopies of Aadhaar, Ration Card, Bank Passbook, MGNREGA Job Card, and photo of the kutcha house.',
      'Submit the physical application at your Panchayat camp or Block Development Office (BDO) and collect the stamped acknowledgement receipt.',
      'The Gram Sabha conducts field verification, calculates deprivation priority points, and publishes the provisional beneficiary waiting list for approval.'
    ],
    howToApply_hi: [
      'अपनी ग्राम पंचायत भवन अथवा विशेष "आपकी योजना, आपकी सरकार, आपके द्वार" शिविर से अबुआ आवास का फॉर्म निःशुल्क प्राप्त करें।',
      'फॉर्म में अपना नाम, आधार नंबर, परिवार के सदस्यों का विवरण, वर्तमान कच्चे घर की स्थिति और बैंक खाता संख्या सावधानीपूर्वक भरें।',
      'आधार कार्ड, राशन कार्ड, बैंक पासबुक, मनरेगा जॉब कार्ड और कच्चे घर के फोटो की स्व-हस्ताक्षरित प्रति संलग्न करें।',
      'अपने पंचायत शिविर या प्रखंड कार्यालय (BDO) में फॉर्म जमा कर पावती रसीद (Acknowledgement Receipt) प्राप्त करें।',
      'ग्राम सभा द्वारा भौतिक सत्यापन कर अभाव अंकों के आधार पर वरीयता सूची (Waiting List) तैयार कर स्वीकृति दी जाती है।'
    ],
    
    statusCheckGuide_en: 'To check your Abua Awas Yojana list & approval status: 1) Visit the official portal or your local Gram Panchayat Bhawan to view the published Gram Sabha Priority Waiting List. 2) Visit your local Block Development Office (BDO) with your Aadhaar number or Application Acknowledgment Slip to inspect the Sanction Register. 3) Upon approval, the BDO issues an official Sanction Letter (Swikriti Patra) and geotagging begins for installment disbursement.',
    statusCheckGuide_hi: 'अबुआ आवास योजना की नई लिस्ट और स्टेटस चेक करने के लिए: 1) अपने ग्राम पंचायत भवन या प्रखंड कार्यालय में चस्पा की गई अनुमोदित ग्राम सभा प्रतीक्षा सूची (Waiting List) में अपना नाम देखें। 2) अपने प्रखंड विकास पदाधिकारी (BDO) कार्यालय में आधार नंबर अथवा पावती रसीद दिखाकर स्वीकृति रजिस्टर में अपनी स्थिति जांचें। 3) स्वीकृति मिलने पर प्रखंड कार्यालय द्वारा आधिकारिक स्वीकृति पत्र जारी किया जाता है और जियो-टैगिंग के बाद किस्तें जारी होती हैं।',
    officialStatusUrl: 'https://jharkhand.gov.in',
    
    commonProblems_en: [
      {
        problem: 'Name approved in Gram Sabha list but 1st installment not credited',
        solution: 'First installment requires mandatory Geotagging of the existing kutcha site by the Panchayat Sewak. Also ensure your bank account has active NPCI Aadhaar mapping for DBT.'
      },
      {
        problem: 'Construction reached roof level but next installment delayed',
        solution: 'Each installment requires milestone geotagged photographic verification (Plinth, Lintel, Roof). Contact your Panchayat Secretary / Junior Engineer to upload construction stage photos on the portal.'
      },
      {
        problem: 'Name omitted from priority waiting list despite living in kutcha house',
        solution: 'Submit an objection/appeal during the Gram Sabha social audit meeting or submit a rectification petition directly to the BDO / Sub-Divisional Officer (SDO).'
      }
    ],
    commonProblems_hi: [
      {
        problem: 'ग्राम सभा सूची में नाम स्वीकृत है पर पहली किस्त नहीं आई',
        solution: 'पहली किस्त जारी होने से पहले पंचायत सेवक द्वारा पुराने कच्चे घर की जियो-टैगिंग (Geotagging) अनिवार्य है। साथ ही बैंक में आधार NPCI डीबीटी मैपिंग सक्रिय होना जरूरी है।'
      },
      {
        problem: 'मकान का लिंटेल या छत ढलाई हो चुकी है पर अगली किस्त रुकी हुई है',
        solution: 'हर चरण (प्लिंथ, लिंटेल, छत) के पूरा होने पर भौतिक फोटो अपलोड होती है। अपने पंचायत सचिव या कनीय अभियंता (JE) से मिलकर कार्यस्थल का जियो-टैग फोटो पोर्टल पर दर्ज कराएं।'
      },
      {
        problem: 'कच्चे मकान में रहने के बावजूद प्राथमिकता सूची में नाम नहीं आया',
        solution: 'ग्राम सभा की सामाजिक अंकेक्षण (Social Audit) बैठक में आपत्ति दर्ज कराएं अथवा सीधे प्रखंड विकास पदाधिकारी (BDO) को पुनः भौतिक सत्यापन हेतु आवेदन दें।'
      }
    ],
    
    faqs_en: [
      {
        q: 'How to check your name in the new Abua Awas Yojana List 2026 online?',
        a: 'You can check your name by inspecting the published Gram Sabha Priority Waiting List at your local Gram Panchayat Bhawan or Block Development Office (BDO). The state rural development department also publishes district-wise approved beneficiary registers.'
      },
      {
        q: 'How much money is provided under Abua Awas Yojana and what are the installments?',
        a: 'The scheme provides a total financial assistance of ₹2,00,000 in 4 milestone-based DBT installments: 1st installment (15% on plinth level), 2nd installment (25% on lintel completion), 3rd installment (50% on roof casting), and 4th installment (10% on completion and plaster), plus additional daily labor wages under MGNREGS.'
      },
      {
        q: 'How to check Abua Awas Yojana status by Aadhaar number?',
        a: 'You can track your application and payment status by presenting your Aadhaar Card and Application Acknowledgement Slip at your Block Development Office (BDO) housing desk or by consulting your Panchayat Secretary.'
      },
      {
        q: 'How to download Abua Awas Yojana Form PDF and how to fill it?',
        a: 'The official physical application and verification form is available 100% free of charge at all Gram Panchayat offices and "Aapki Yojana Aapki Sarkar Aapke Dwar" camps. Fill in personal details, Aadhaar, land details, and submit it along with photographs of your kutcha house.'
      },
      {
        q: 'What is the required layout, naksha, and room size under Abua Awas?',
        a: 'Unlike older housing schemes with only 1 or 2 rooms, Abua Awas mandates a spacious 3-room pucca house with a separate permanent kitchen, requiring a minimum plinth area of 31 square meters.'
      },
      {
        q: 'Who is eligible to get a house under Abua Awas Yojana?',
        a: 'Permanent residents of Jharkhand living in kutcha, mud, or thatched houses who have never received benefits under PMAY-G, PMAY-U, or Ambedkar Awas, and whose families do not own a four-wheeler, permanent government job, or income tax filing status.'
      }
    ],
    faqs_hi: [
      {
        q: 'अबुआ आवास योजना की नई लिस्ट 2026 में अपना नाम कैसे चेक करें?',
        a: 'आप अपनी ग्राम पंचायत भवन या प्रखंड विकास पदाधिकारी (BDO) कार्यालय में चस्पा की गई अनुमोदित ग्राम सभा प्रतीक्षा सूची (Waiting List) में अपना नाम देख सकते हैं। इसके अलावा ग्रामीण विकास विभाग द्वारा स्वीकृत लाभार्थियों का रजिस्टर भी पंचायत स्तर पर उपलब्ध रहता है।'
      },
      {
        q: 'अबुआ आवास योजना में कुल कितना पैसा मिलता है और किस्तें कैसे आती हैं?',
        a: 'योजना के तहत 3 कमरों के पक्के मकान के लिए कुल ₹2,00,000 की सरकारी सहायता 4 किस्तों में सीधे बैंक खाते में मिलती है: पहली किस्त 15% (प्लिंथ निर्माण पर), दूसरी किस्त 25% (लिंटेल स्तर पर), तीसरी किस्त 50% (छत ढलाई पर), और चौथी किस्त 10% (प्लास्टर व पूर्णता पर), साथ ही मनरेगा मजदूरी अलग से मिलती है।'
      },
      {
        q: 'अबुआ आवास योजना का स्टेटस (Aadhaar Number से) कैसे चेक करें?',
        a: 'अपने प्रखंड कार्यालय (BDO) के आवास पटल अथवा पंचायत सचिव के पास जाकर आधार नंबर और आवेदन पावती रसीद (Acknowledgement Slip) दिखाकर अपनी स्वीकृति और जियो-टैगिंग का लाइव स्टेटस चेक कर सकते हैं।'
      },
      {
        q: 'अबुआ आवास योजना का आवेदन फॉर्म PDF कैसे डाउनलोड करें और कैसे भरें?',
        a: 'अबुआ आवास योजना का फॉर्म अपनी ग्राम पंचायत अथवा "आपकी योजना आपकी सरकार आपके द्वार" शिविर से पूरी तरह निःशुल्क प्राप्त किया जा सकता है। फॉर्म में अपना नाम, आधार नंबर, परिवार के सदस्यों का विवरण, जमीन का ब्योरा भरकर कच्चे घर के फोटो के साथ जमा करना होता है।'
      },
      {
        q: 'अबुआ आवास योजना के मकान का नक्शा (Naksha) और कमरे का आकार क्या है?',
        a: 'इस योजना में 3 पक्के कमरे और एक अलग पक्की रसोई का निर्माण अनिवार्य है, जिसका न्यूनतम कारपेट एरिया 31 वर्ग मीटर (लगभग 334 वर्ग फीट) होना जरूरी है।'
      },
      {
        q: 'अबुआ आवास योजना के लिए कौन पात्र है और किसको प्राथमिकता मिलती है?',
        a: 'झारखंड के वह सभी गरीब परिवार जो कच्चे मकान या झोपड़ी में रहते हैं और जिन्हें कभी पीएम आवास या आंबेडकर आवास नहीं मिला, वे पात्र हैं। आदिम जनजाति (PVTG), विधवा, और प्राकृतिक आपदा पीड़ितों को चयन में पहली प्राथमिकता मिलती है।'
      }
    ],
    
    officialSources: [
      {
        name: 'Rural Development Department, Govt. of Jharkhand',
        authority: 'Government of Jharkhand',
        url: 'https://jharkhand.gov.in',
        verificationDate: 'November 06, 2026'
      }
    ],
    keywords: [
      'abua awas yojana',
      'jharkhand abua awas yojana',
      'अबुआ आवास योजना',
      'अबुआ आवास योजना झारखंड लिस्ट pdf download',
      'abua awas yojana list 2026',
      'abua awas yojana jharkhand list check online 2026',
      'abua awas yojana jharkhand list check online',
      'abua awas yojana list pdf',
      'abua awas yojana list 2026 jharkhand',
      'abua awas yojana status check',
      'abua awas yojana status check by aadhaar number',
      'abua awas yojana track status',
      'abua awas yojana payment status',
      'abua awas yojana official website',
      'abua awas yojana me kitna paisa milta hai',
      'abua awas yojana kitna paisa milta hai',
      'abua awas yojana amount',
      'abua awas yojana total amount',
      'abua awas yojana 2 lakh',
      'abua awas yojana 2nd installment',
      'abua awas yojana 3 kist kab aayegi',
      'abua awas yojana form pdf',
      'abua awas yojana form pdf download',
      'abua awas yojana form kaise bhare',
      'how to fill abua awas yojana form',
      'abua awas yojana jharkhand online apply',
      'abua awas yojana jharkhand online registration',
      'अबुआ आवास योजना झारखंड',
      'अबुआ आवास योजना झारखंड लिस्ट चेक ऑनलाइन',
      'अबुआ आवास लिस्ट 2026',
      'abua awas yojana gramin list',
      'abua awas yojana naksha',
      'abua awas yojana kisko milega',
      'abua awas yojana who is eligible',
      'eligibility for abua awas yojana',
      'how to check abua awas yojana list',
      'how to check abua awas yojana status',
      'how to check abua awas yojana status online',
      'abua awas yojana online list jharkhand',
      'abua awas yojana list app',
      'abua awas yojana kya hai',
      'what is abua awas yojana',
      'what is abua awas yojana in jharkhand',
      'abua awas yojana benefits',
      'abua awas yojana me kya kya document chahiye',
      'abua awas yojana 2026'
    ],
    metaDescription_en: '✅ Jharkhand Abua Awas Yojana 2026: Check your name in the new beneficiary list online, ₹2 Lakh grant installment schedule (4 installments), Aadhaar status check, 3-room house naksha & PDF form.',
    metaDescription_hi: '✅ अबुआ आवास योजना झारखंड 2026: नई ग्रामीण/शहरी लिस्ट में अपना नाम कैसे देखें? जानिए 3 कमरों के मकान हेतु ₹2 लाख की 4 किस्तें, आधार से स्टेटस चेक, नक्शा और फॉर्म PDF डाउनलोड का 100% सही तरीका।'
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
,
{
  "id": "mgnrega-job-card",
  "slug": "mgnrega-job-card-list-online-apply",
  "title_en": "MGNREGA Job Card List 2026: Online Apply, Check Name in NREGA List, Download PDF, Muster Roll & Payment Status",
  "title_hi": "मनरेगा जॉब कार्ड लिस्ट 2026: ऑनलाइन आवेदन, नरेगा लिस्ट में नाम देखें, PDF डाउनलोड, मस्टर रोल व पेमेंट स्टेटस",
  "shortTitle_en": "MGNREGA Job Card",
  "shortTitle_hi": "मनरेगा जॉब कार्ड (NREGA)",
  "category": "employment",
  "state": "all-india",
  "stateLabel_en": "Central (All India)",
  "stateLabel_hi": "केंद्र सरकार (अखिल भारतीय)",
  "status": "Active",
  "lastVerified": "November 2026",
  "benefitSummary_en": "Guaranteed 100 days of wage employment per financial year for rural households at government-notified daily wages (₹234 to ₹374/day), paid directly into Aadhaar-seeded bank accounts via ABPS DBT.",
  "benefitSummary_hi": "ग्रामीण परिवारों के वयस्क सदस्यों को प्रति वित्तीय वर्ष 100 दिनों के अकुशल शारीरिक रोजगार की कानूनी गारंटी, सरकारी अधिसूचित दैनिक मजदूरी (₹234 से ₹374/दिन) पर सीधे आधार-सीडेड बैंक खाते में डीबीटी (DBT) द्वारा भुगतान।",
  "benefitAmount_en": "100 Days Guaranteed Wage Work (₹234 to ₹374/day state-wise) + Statutory Unemployment Allowance",
  "benefitAmount_hi": "100 दिनों का कानूनी गारंटी रोजगार (₹234 से ₹374 प्रतिदिन राज्यवार) + 15 दिनों में काम न मिलने पर बेरोजगारी भत्ता",
  "whoCanApply_en": "Adult members (aged 18+) of rural households residing in Gram Panchayats willing to do unskilled manual physical work.",
  "whoCanApply_hi": "ग्राम पंचायत के ग्रामीण परिवारों के 18 वर्ष या उससे अधिक आयु के वयस्क सदस्य जो अकुशल शारीरिक श्रम करने के इच्छुक हों।",
  "applicationMode": "Online (nrega.nic.in / UMANG) & Offline (Gram Panchayat / Block Office / CSC)",
  "bannerImage": "/images/schemes/mgnrega-job-card.webp",
  "whatIsThis_en": "The Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA / NREGA) is India’s landmark social security and rural wage employment guarantee program passed under the MGNREGA Act 2005. It legally guarantees 100 days of unskilled manual wage employment every financial year to every rural household whose adult members volunteer for public community works such as water conservation, check dams, canal digging, rural road connectivity, tree plantation, and land development. A NREGA Job Card is issued within 15 days of application, serving as a statutory identity card and proof of employment demand. Under the Act, if the government fails to provide employment within 15 days of submitting Form 6 (Work Demand Application), the worker is legally entitled to a daily Unemployment Allowance paid by the State Government directly into their bank account.",
  "whatIsThis_hi": "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम (मनरेगा / MGNREGA) भारत सरकार का ऐतिहासिक ग्रामीण आजीविका व सामाजिक सुरक्षा कानून है। इसके तहत देश के प्रत्येक ग्रामीण परिवार के 18 वर्ष से अधिक उम्र के इच्छुक वयस्क सदस्यों को एक वित्तीय वर्ष में कम से कम 100 दिनों के अकुशल शारीरिक रोजगार की कानूनी गारंटी दी जाती है। जल संरक्षण, चेक डैम निर्माण, नहर व तालाब खुदाई, ग्रामीण संपर्क मार्ग, पौधरोपण और भूमि सुधार जैसे सार्वजनिक कार्यों के लिए जॉब कार्ड जारी किया जाता है। आवेदन जमा करने के 15 दिनों के भीतर ग्राम पंचायत द्वारा मनरेगा जॉब कार्ड जारी करना अनिवार्य है। यदि काम की मांग (फॉर्म-6) जमा करने के 15 दिनों के अंदर रोजगार उपलब्ध नहीं कराया जाता है, तो अधिनियम के तहत आवेदक को प्रतिदिन बेरोजगारी भत्ता (Unemployment Allowance) पाने का कानूनी अधिकार प्राप्त है।",
  "benefitsList_en": [
    "Legal guarantee of 100 days of wage employment per rural household in every financial year.",
    "State-notified daily wage rates revised up to ₹234 to ₹374 per day (highest in Haryana and Sikkim; ₹245+ in UP, Bihar, Jharkhand, MP, and Rajasthan).",
    "Statutory Unemployment Allowance paid if the administration fails to provide employment within 15 days of applying through Form 6.",
    "Direct Benefit Transfer (DBT) directly into worker bank or post office savings account via Aadhaar Based Payment System (ABPS).",
    "Mandatory worksite facilities: clean drinking water, shade for rest, medical first-aid kit, and crèche facility for workers with children under 6 years.",
    "Extra 10% wage bonus as travel allowance if the allotted work site is beyond 5 kilometers from the worker residence.",
    "Equal wages for men and women without gender wage discrimination, with special priority for single women, widows, and persons with disabilities (Divyangjan)."
  ],
  "benefitsList_hi": [
    "प्रत्येक ग्रामीण परिवार को प्रति वित्तीय वर्ष 100 दिनों के सुनिश्चित रोजगार की कानूनी गारंटी।",
    "राज्यवार संशोधित दैनिक मजदूरी ₹234 से ₹374 प्रतिदिन (हरियाणा/सिक्किम में उच्चतम, यूपी, बिहार, झारखंड, एमपी, राजस्थान में ₹245 से अधिक)।",
    "काम की मांग (फॉर्म-6) जमा करने के 15 दिनों के भीतर काम न मिलने पर राज्य सरकार द्वारा कानूनी बेरोजगारी भत्ता।",
    "बिना किसी बिचौलिए या ठेकेदार के, आधार आधारित भुगतान प्रणाली (ABPS) व डीबीटी द्वारा सीधे बैंक या डाकघर खाते में मजदूरी अंतरण।",
    "कार्यस्थल पर स्वच्छ पेयजल, छायादार विश्राम स्थल, प्राथमिक उपचार किट और 6 वर्ष से छोटे बच्चों हेतु शिशु गृह (क्रेश) की अनिवार्य सुविधा।",
    "गाँव या निवास स्थान से 5 किलोमीटर से अधिक दूरी पर काम मिलने पर 10% अतिरिक्त यात्रा भत्ता।",
    "पुरुष व महिला श्रमिकों को बिना किसी भेदभाव के समान काम के लिए समान मजदूरी, तथा एकल महिलाओं व दिव्यांगों हेतु विशेष कार्य आवंटन प्राथमिकता।"
  ],
  "eligibility": {
    "eligibleIf_en": [
      "The applicant is a citizen of India and permanent resident of a rural area (Gram Panchayat jurisdiction).",
      "The applicant is an adult member of the household (completed 18 years of age or older).",
      "The applicant is willing to undertake unskilled manual physical labor for public works projects.",
      "The applicant holds an active Bank or Post Office Savings Account linked to Aadhaar (NPCI mapped for ABPS payment).",
      "All adult members of the household agree to register their names under the single household Job Card unit."
    ],
    "eligibleIf_hi": [
      "आवेदक भारत का नागरिक हो और किसी ग्रामीण क्षेत्र/ग्राम पंचायत का स्थायी निवासी हो।",
      "परिवार का वयस्क सदस्य हो (उम्र 18 वर्ष या उससे अधिक पूर्ण हो चुकी हो)।",
      "ग्रामीण विकास व सार्वजनिक निर्माण कार्यों में अकुशल शारीरिक श्रम (मैनुअल लेबर) करने के लिए स्वेच्छा से तैयार हो।",
      "आवेदक के पास आधार से लिंक और डीबीटी/ABPS सक्षम बैंक या डाकघर बचत खाता हो।",
      "परिवार के सभी वयस्क सदस्य एक ही पारिवारिक जॉब कार्ड इकाई के अंतर्गत अपना नाम दर्ज कराने के लिए सहमत हों।"
    ],
    "notEligibleIf_en": [
      "Residents of urban statutory areas (Municipal Corporations, Nagar Palikas, or Cantonment Boards).",
      "Minors under 18 years of age (child labor is strictly prohibited under the MGNREGA Act).",
      "Individuals looking only for clerical, managerial, desk, or skilled contractor work (MGNREGA is exclusively for unskilled manual work).",
      "Households that already possess an active Job Card (only one Job Card is issued per rural household unit).",
      "Private contractors, labor intermediaries, or brokers attempting proxy enrollment."
    ],
    "notEligibleIf_hi": [
      "शहरी क्षेत्रों (नगर निगम, नगरपालिका परिषद, नगर पंचायत या छावनी बोर्ड) के निवासी।",
      "18 वर्ष से कम आयु के नाबालिग (मनरेगा कानून के तहत बाल श्रम पूर्णतः अवैध व प्रतिबंधित है)।",
      "केवल क्लर्क, पर्यवेक्षक, डेस्क वर्क या कुशल ठेकेदारी कार्य चाहने वाले व्यक्ति (मनरेगा केवल अकुशल शारीरिक श्रम हेतु है)।",
      "जिन ग्रामीण परिवारों का पहले से सक्रिय जॉब कार्ड बना हुआ है (एक परिवार का केवल एक ही कार्ड जारी होता है)।",
      "निजी ठेकेदार, दलाल या बिचौलिए जो फर्जी या प्रॉक्सी पंजीकरण कराने का प्रयास करते हैं।"
    ]
  },
  "requiredDocuments_en": [
    "Aadhaar Card of all adult household members applying for the Job Card",
    "Recent passport-sized photographs of all applying adult members",
    "Proof of Rural Residence (Ration Card, Voter ID / EPIC Card, or Electricity Bill)",
    "Bank Account Passbook / Post Office Savings Account (must be Aadhaar-seeded for ABPS payments)",
    "Active Mobile Number linked to Aadhaar for receiving muster roll notifications and DBT wage alerts",
    "Duly filled and signed Form 4 Application for Job Card registration (submitted to Gram Panchayat or CSC)"
  ],
  "requiredDocuments_hi": [
    "जॉब कार्ड में शामिल होने वाले सभी वयस्क पारिवारिक सदस्यों का आधार कार्ड",
    "आवेदन करने वाले सभी वयस्क सदस्यों की हालिया पासपोर्ट साइज फोटो",
    "ग्रामीण निवास का वैध प्रमाण (राशन कार्ड, वोटर आईडी कार्ड अथवा बिजली बिल)",
    "बैंक या डाकघर पासबुक (खाता आधार से सीडेड व ABPS डीबीटी हेतु सक्रिय होना अनिवार्य)",
    "मस्टर रोल सूचना व मजदूरी भुगतान एसएमएस प्राप्त करने हेतु आधार से लिंक चालू मोबाइल नंबर",
    "ग्राम पंचायत या सीएससी में जमा करने हेतु विधिवत हस्ताक्षरित जॉब कार्ड आवेदन पत्र (फॉर्म 4)"
  ],
  "howToApply_en": [
    "Offline via Gram Panchayat (Fastest): Visit your local Gram Panchayat office or meet your Gram Rozgar Sahayak (GRS) / Panchayat Secretary.",
    "Collect Form 4 (Application Form for Registration under MGNREGA) free of cost, fill in personal details, age, caste, and Aadhaar numbers of all adult family members.",
    "Attach passport photos, copies of Aadhaar cards, and bank passbooks, then submit it to the Gram Panchayat.",
    "Collect the dated acknowledgment receipt. By law, the Gram Panchayat must verify records and issue your NREGA Job Card within 15 days.",
    "Online via UMANG Portal: Download the UMANG App or visit web.umang.gov.in > Search \"MGNREGA\" > Select \"Apply for Job Card\" > Enter father/husband name, address, category, Aadhaar, and upload photos > Submit to generate tracking reference.",
    "State Rural Portals: In states with e-Panchayat facilities (e.g. VB-GRAM-G, e-GramSwaraj, or State PRD portals), apply through CSC Common Service Centers with biometric verification.",
    "Requesting Work (Form 6): Once your Job Card is issued, submit Form 6 (Application for Work) specifying dates and days of employment needed. The administration must allot work within 15 days or pay unemployment allowance."
  ],
  "howToApply_hi": [
    "ग्राम पंचायत द्वारा ऑफलाइन आवेदन (सबसे सरल): अपनी ग्राम पंचायत कार्यालय में जाएं अथवा ग्राम रोजगार सहायक (GRS) या पंचायत सचिव से मिलें।",
    "फॉर्म-4 (मनरेगा पंजीकरण आवेदन पत्र) निःशुल्क प्राप्त करें और परिवार के सभी 18+ वर्ष के वयस्क सदस्यों का नाम, उम्र, जाति और आधार नंबर भरें।",
    "पासपोर्ट फोटो, आधार कार्ड की छायाप्रति और बैंक पासबुक संलग्न कर ग्राम पंचायत में जमा करें।",
    "आवेदन जमा करने की तारीख वाली पावती (रसीद) अवश्य प्राप्त करें। कानूनन 15 दिनों के अंदर ग्राम पंचायत द्वारा जॉब कार्ड जारी करना अनिवार्य है।",
    "उमंग (UMANG) ऐप से ऑनलाइन आवेदन: उमंग ऐप या web.umang.gov.in पर जाएं > \"MGNREGA\" सर्च करें > \"Apply for Job Card\" चुनें > व्यक्तिगत विवरण, पता, बैंक खाता व आधार विवरण भरकर फोटो अपलोड करें और सबमिट करें।",
    "राज्य ग्रामीण पोर्टल/सीएससी: अपने नजदीकी जन सेवा केंद्र (CSC) पर जाकर ई-ग्रामस्वराज या संबंधित राज्य के पंचायती राज पोर्टल से बायोमेट्रिक सत्यापन के साथ आवेदन करें।",
    "काम की मांग (फॉर्म-6): जॉब कार्ड बनने के बाद रोजगार पाने के लिए फॉर्म-6 भरकर ग्राम पंचायत में जमा करें। ग्राम पंचायत को 15 दिनों में काम देना होगा अन्यथा बेरोजगारी भत्ता देना पड़ेगा।"
  ],
  "statusCheckGuide_en": "To check your NREGA Job Card List 2026, Job Card Number, Muster Roll Attendance, and DBT Payment Status: 1. Visit the official portal at nrega.nic.in (or state-level VB-GRAM-G / e-GramSwaraj portals). 2. Under the \"Quick Navigation\" section, select \"Gram Panchayats\" > click \"Generate Reports\". 3. Select your State (e.g. Uttar Pradesh, Bihar, Jharkhand, Rajasthan, Madhya Pradesh, West Bengal, Odisha, Maharashtra). 4. Select Financial Year (2025-2026 or 2026-2027), District, Block, and Panchayat. 5. Under R1. Job Card/Registration, click \"Job Card/Employment Register\". 6. Your entire village list with Job Card Numbers and Worker Names will appear. Click your Job Card Number (blue link) to view and download your full Job Card PDF, worked days history, muster roll numbers, and direct payment transfer dates.",
  "statusCheckGuide_hi": "मनरेगा जॉब कार्ड लिस्ट 2026, जॉब कार्ड नंबर, मस्टर रोल हाजिरी और बैंक पेमेंट स्टेटस चेक करने का तरीका: 1. आधिकारिक वेबसाइट nrega.nic.in (या राज्य स्तरीय VB-GRAM-G/ई-ग्रामस्वराज) पर जाएं। 2. होमपेज पर \"Gram Panchayats\" अनुभाग में \"Generate Reports\" पर क्लिक करें। 3. अपना राज्य चुनें (जैसे उत्तर प्रदेश, बिहार, झारखंड, राजस्थान, मध्य प्रदेश, पश्चिम बंगाल आदि)। 4. वित्तीय वर्ष (2025-2026 / 2026-2027), जिला, ब्लॉक और ग्राम पंचायत चुनें। 5. R1. Job Card/Registration के तहत \"Job Card/Employment Register\" लिंक पर क्लिक करें। 6. आपके गाँव के सभी पंजीकृत श्रमिकों की सूची खुल जाएगी। अपने जॉब कार्ड नंबर (नीले लिंक) पर क्लिक करें—यहाँ आपका जॉब कार्ड PDF, कुल काम किए गए दिन, मस्टर रोल संख्या और खाते में भेजी गई मजदूरी का पूरा ब्योरा दिख जाएगा।",
  "officialStatusUrl": "https://nrega.nic.in/netnrega/sthome.aspx",
  "commonProblems_en": [
    {
      "problem": "Job Card Marked Inactive or Name Deleted from NREGA List",
      "solution": "During nationwide Aadhaar verification drives, job cards without Aadhaar linking or suspected duplicate entries were flagged inactive. Visit your Gram Panchayat Secretary or Program Officer (PO) at the Block office with your original Aadhaar card, ration card, and bank passbook to submit a Re-verification & Re-activation application."
    },
    {
      "problem": "Payment Failed or Rejected due to ABPS (Aadhaar Based Payment System)",
      "solution": "MGNREGA wages are disbursed strictly through ABPS. If your bank account is not seeded with NPCI or your Aadhaar details have name/spelling mismatches, payment fails. Visit your bank branch immediately, fill the NPCI Aadhaar Seeding Mandate Form, or open an Aadhaar-seeded account in India Post Payments Bank (IPPB)."
    },
    {
      "problem": "Form 6 Work Demand Submitted but No Work Allotted in 15 Days",
      "solution": "Under Section 7 of the MGNREGA Act 2005, if employment is not provided within 15 days of submitting Form 6, you are entitled to daily Unemployment Allowance (1/4th of daily wage for first 30 days, 1/2 thereafter). File a written claim for Unemployment Allowance with your dated Form 6 receipt before the Block Development Officer (BDO)."
    },
    {
      "problem": "Attendance Mismatch in NMMS (National Mobile Monitoring System) Muster Roll",
      "solution": "NREGA worksite attendance is captured twice daily through the NMMS mobile app with geotagged worker photos. If your attendance was missed due to network glitch or supervisor oversight, file an objection with your Gram Rozgar Sahayak (GRS) before the weekly muster roll is closed and signed."
    }
  ],
  "commonProblems_hi": [
    {
      "problem": "जॉब कार्ड निष्क्रिय (Inactive) दिखा रहा है या लिस्ट से नाम कट गया है",
      "solution": "राष्ट्रव्यापी आधार सत्यापन अभियान के दौरान जिन कार्डों में आधार सीडिंग नहीं थी या दोहरी प्रविष्टि की आशंका थी, उन्हें निष्क्रिय कर दिया गया था। अपने मूल आधार कार्ड, राशन कार्ड और बैंक पासबुक के साथ ग्राम रोजगार सहायक या ब्लॉक कार्यालय में कार्यक्रम अधिकारी (PO) से मिलकर पुनः सत्यापन व री-एक्टिवेशन का फॉर्म भरें।"
    },
    {
      "problem": "एबीपीएस (ABPS) के कारण मजदूरी भुगतान विफल (Payment Rejected)",
      "solution": "मनरेगा मजदूरी का भुगतान केवल आधार आधारित भुगतान प्रणाली (ABPS) से होता है। यदि बैंक खाता एनपीसीआई से लिंक नहीं है या नाम की स्पेलिंग में अंतर है, तो पेमेंट रुक जाता है। अपनी बैंक शाखा में जाकर आधार सीडिंग फॉर्म जमा करें अथवा नजदीकी डाकघर (IPPB) में नया डीबीटी सक्षम खाता खुलवाएं।"
    },
    {
      "problem": "काम की मांग (फॉर्म 6) जमा की लेकिन 15 दिनों में काम नहीं मिला",
      "solution": "मनरेगा कानून की धारा 7 के अनुसार, फॉर्म 6 जमा करने के 15 दिनों के भीतर काम न मिलने पर राज्य सरकार द्वारा बेरोजगारी भत्ता देना अनिवार्य है। अपने आवेदन की प्राप्ति रसीद के साथ प्रखंड विकास पदाधिकारी (BDO) या कार्यक्रम अधिकारी को बेरोजगारी भत्ते हेतु लिखित आवेदन दें।"
    },
    {
      "problem": "एनएमएमएस (NMMS) मोबाइल ऐप हाजिरी या मस्टर रोल में अनुपस्थिति दर्ज होना",
      "solution": "कार्यस्थल पर श्रमिकों की फोटो युक्त लाइव हाजिरी NMMS ऐप से दिन में दो बार ली जाती है। यदि नेटवर्क समस्या या मेट की गलती से हाजिरी छूट गई है, तो मस्टर रोल क्लोज होने से पहले अपने ग्राम रोजगार सहायक को सूचित करें और आपत्ति दर्ज करवाएं।"
    }
  ],
  "faqs_en": [
    {
      "q": "How to check NREGA Job Card List 2026 online state-wise on nrega.nic.in?",
      "a": "Go to nrega.nic.in > Select \"Gram Panchayats\" > Click \"Generate Reports\" > Select your State (UP, Bihar, Jharkhand, MP, Rajasthan, etc.) > Choose Financial Year 2025-2026 / 2026-2027, District, Block, and Panchayat > Click \"Job Card/Employment Register\" to see the full village worker list."
    },
    {
      "q": "How to download NREGA Job Card PDF online?",
      "a": "When you open your Panchayat’s Job Card List on nrega.nic.in, click on your blue Job Card Number (e.g. UP-01-002-...). Your complete official Job Card will open showing family member details, registration photo, and work history. Press Ctrl+P or use the print option to save it as a PDF."
    },
    {
      "q": "What is the MGNREGA daily wage rate in 2026 for different states?",
      "a": "The central government revises MGNREGA wages annually based on CPI-AL (Consumer Price Index for Agricultural Laborers). In 2026, daily wages range from ₹234 to ₹374 per day across states: Haryana and Sikkim have the highest rates (₹374/day), while states like Uttar Pradesh, Bihar, Jharkhand, Madhya Pradesh, and Rajasthan range between ₹237 and ₹275 per day."
    },
    {
      "q": "How to check NREGA payment status and DBT account credit online?",
      "a": "Open your Job Card on nrega.nic.in and scroll to the employment details table. Click on the Muster Roll Number next to your work period. The system displays the Wage List Number, FTO (Fund Transfer Order) Number, and credit date. You can also track the transaction on the PFMS portal (pfms.nic.in) using your Aadhaar number."
    },
    {
      "q": "What is NREGA muster roll and how to check online attendance (NMMS)?",
      "a": "A muster roll is the official statutory attendance and wage register for each sanctioned work project. Attendance is captured live via the NMMS (National Mobile Monitoring System) mobile application twice a day. Workers can view filled and e-muster rolls under the \"Muster Roll\" section of their Gram Panchayat report on nrega.nic.in."
    },
    {
      "q": "What is the VB-GRAM-G portal and how is it related to NREGA job cards?",
      "a": "VB-GRAM-G (Village Beneficiary Gram Panchayat Gateway) is a dedicated state-level rural reporting interface used in several states to fetch Village Wise Job Card Lists, public work assets, and Panchayat muster roll statuses directly synced with the central NIC NREGA server."
    },
    {
      "q": "Can a rural household get more than 100 days of work under MGNREGA?",
      "a": "Normally, the legal guarantee under Section 3(1) of the Act is 100 days per rural household per financial year. However, in officially notified drought-affected or natural calamity-hit rural areas, or for Scheduled Tribe (ST) households living in Forest Rights Act areas, the central government extends this limit up to 150 days of guaranteed wage employment."
    },
    {
      "q": "What should you do if NREGA wages are delayed beyond 15 days?",
      "a": "Under the MGNREGA Act, wages must be credited within 15 days of the closure of the muster roll. If wages are delayed beyond this period, workers are legally entitled to Delay Compensation at the rate of 0.05% of the unpaid wages per day of delay. You can file a grievance on nrega.nic.in under \"Lodge Public Grievance\" or call the rural helpline 1800-345-6500."
    }
  ],
  "faqs_hi": [
    {
      "q": "मनरेगा जॉब कार्ड लिस्ट 2026 में अपना नाम ऑनलाइन कैसे देखें (nrega.nic.in)?",
      "a": "1. आधिकारिक पोर्टल nrega.nic.in पर जाएं। 2. \"Gram Panchayats\" > \"Generate Reports\" पर क्लिक करें। 3. अपना राज्य चुनें (जैसे उत्तर प्रदेश, बिहार, झारखंड, राजस्थान, मध्य प्रदेश आदि)। 4. वित्तीय वर्ष (2025-2026 / 2026-2027), जिला, ब्लॉक और ग्राम पंचायत सेलेक्ट करें। 5. \"Job Card/Employment Register\" पर क्लिक करते ही पूरे गाँव की जॉब कार्ड लिस्ट स्क्रीन पर आ जाएगी।"
    },
    {
      "q": "नरेगा जॉब कार्ड ऑनलाइन PDF कैसे डाउनलोड करें?",
      "a": "जब आप nrega.nic.in पर अपनी पंचायत की लिस्ट खोलते हैं, तो अपने नाम के आगे दिए गए नीले रंग के जॉब कार्ड नंबर पर क्लिक करें। आपका डिजिटल जॉब कार्ड खुल जाएगा, जिसमें परिवार के सदस्यों के नाम, फोटो और काम का इतिहास दर्ज होगा। ब्राउज़र में \"Print\" (Ctrl+P) दबाकर इसे PDF फॉर्मेट में सेव कर लें।"
    },
    {
      "q": "साल 2026 में मनरेगा की दैनिक मजदूरी (Wage Rate) कितनी है?",
      "a": "केंद्र सरकार कृषि मजदूरों के उपभोक्ता मूल्य सूचकांक (CPI-AL) के आधार पर हर वर्ष मजदूरी दरों में संशोधन करती है। 2026 में विभिन्न राज्यों में दैनिक मजदूरी ₹234 से लेकर ₹374 प्रतिदिन तक है। हरियाणा और सिक्किम में यह सर्वाधिक (₹374/दिन) है, जबकि यूपी, बिहार, झारखंड, एमपी और राजस्थान में यह ₹237 से ₹275 प्रतिदिन के बीच है।"
    },
    {
      "q": "नरेगा मजदूरी का पेमेंट स्टेटस (डीबीटी ट्रांसफर) कैसे चेक करें?",
      "a": "nrega.nic.in पर अपना जॉब कार्ड खोलें और नीचे कार्य विवरण तालिका में जाएं। संबंधित कार्य अवधि के मस्टर रोल नंबर पर क्लिक करें। यहाँ आपको वेज लिस्ट नंबर, FTO (फंड ट्रांसफर ऑर्डर) नंबर और बैंक में राशि क्रेडिट होने की तारीख दिख जाएगी। इसे आप PFMS पोर्टल पर भी आधार से चेक कर सकते हैं।"
    },
    {
      "q": "नरेगा मस्टर रोल क्या है और ऑनलाइन हाजिरी (NMMS) कैसे चेक करें?",
      "a": "मस्टर रोल कार्यस्थल का आधिकारिक उपस्थिति और मजदूरी रजिस्टर होता है। श्रमिकों की हाजिरी नेशनल मोबाइल मॉनिटरिंग सिस्टम (NMMS) ऐप के माध्यम से दिन में दो बार लाइव फोटो के साथ ली जाती है। nrega.nic.in पर अपनी ग्राम पंचायत रिपोर्ट के तहत \"Muster Roll\" विकल्प में जाकर आप चालू और बंद मस्टर रोल की हाजिरी देख सकते हैं।"
    },
    {
      "q": "VB-GRAM-G पोर्टल क्या है और यह नरेगा जॉब कार्ड से कैसे जुड़ा है?",
      "a": "VB-GRAM-G (विलेज बेनिफिशियरी ग्राम पंचायत गेटवे) कई राज्यों में इस्तेमाल होने वाला ग्रामीण सेवा इंटरफ़ेस है, जिससे ग्रामीण नागरिक सीधे अपने गाँव की जॉब कार्ड लिस्ट, स्वीकृत निर्माण कार्य और मस्टर रोल रिपोर्ट केंद्रीय NIC सर्वर से रियल-टाइम देख सकते हैं।"
    },
    {
      "q": "क्या एक परिवार को मनरेगा में 100 दिन से ज्यादा का काम मिल सकता है?",
      "a": "सामान्यतः प्रति परिवार प्रति वर्ष 100 दिनों के काम की कानूनी गारंटी होती है। परंतु सूखाग्रस्त या प्राकृतिक आपदा प्रभावित घोषित ग्रामीण क्षेत्रों में, तथा वन अधिकार अधिनियम के तहत आने वाले अनुसूचित जनजाति (ST) परिवारों को सरकार 150 दिनों तक के रोजगार का विशेष प्रावधान करती है।"
    },
    {
      "q": "यदि नरेगा का पैसा 15 दिनों में खाते में न आए तो क्या करें?",
      "a": "मनरेगा कानून के अनुसार मस्टर रोल बंद होने के 15 दिनों के भीतर मजदूरी का भुगतान अनिवार्य है। 15 दिन से अधिक देरी होने पर श्रमिक को प्रतिदिन 0.05% की दर से देरी का मुआवजा (Delay Compensation) पाने का कानूनी अधिकार है। आप nrega.nic.in पर \"Lodge Public Grievance\" में जाकर ऑनलाइन शिकायत दर्ज करा सकते हैं या टोल-फ्री हेल्पलाइन पर कॉल कर सकते हैं।"
    }
  ],
  "officialSources": [
    {
      "name": "MGNREGA National Official Portal",
      "authority": "Ministry of Rural Development, Government of India",
      "url": "https://nrega.nic.in",
      "verificationDate": "November 2026"
    },
    {
      "name": "Department of Rural Development Guidelines",
      "authority": "Government of India",
      "url": "https://rural.gov.in",
      "verificationDate": "November 2026"
    }
  ],
  "keywords": [
    "nrega job card list",
    "mgnrega job card list 2026",
    "nrega nic in",
    "nrega job card",
    "nrega job card list 2026 up",
    "nrega job card list bihar",
    "nrega job card jharkhand",
    "nrega job card mp",
    "nrega job card rajasthan",
    "nrega job card list odisha",
    "nrega job card west bengal",
    "nrega job card list haryana",
    "nrega job card chhattisgarh",
    "vb gram g job card list",
    "vbgramg",
    "vb gram g nrega portal",
    "nrega nic in online apply",
    "nrega online apply",
    "nrega job card online apply",
    "job card download pdf",
    "nrega job card download",
    "mgnrega job card download pdf",
    "job card status",
    "nrega payment status check",
    "nrega payment status check aadhar card",
    "mgnrega payment status",
    "nrega muster roll online",
    "mgnrega muster roll check",
    "nrega attendance online check",
    "nmms nrega attendance",
    "nrega wage rate 2026",
    "mgnrega daily wage 2026",
    "nrega form 6 download",
    "nrega unemployment allowance",
    "abps nrega payment",
    "मनरेगा जॉब कार्ड लिस्ट 2026",
    "नरेगा जॉब कार्ड लिस्ट",
    "नरेगा जॉब कार्ड कैसे देखें",
    "नरेगा हाजिरी चेक ऑनलाइन",
    "नरेगा पेमेंट चेक आधार कार्ड",
    "मनरेगा मस्टर रोल ऑनलाइन",
    "जॉब कार्ड कैसे बनाएं ऑनलाइन",
    "नरेगा जॉब कार्ड डाउनलोड",
    "मनरेगा मजदूरी दर 2026",
    "नरेगा काम की मांग फॉर्म 6",
    "नरेगा बेरोजगारी भत्ता नियम",
    "नरेगा लिस्ट में अपना नाम कैसे देखें"
  ],
  "metaDescription_en": "✅ MGNREGA Job Card List 2026: Check your name in NREGA village list, download Job Card PDF, check NMMS muster roll attendance, ABPS payment status & wage rates at nrega.nic.in.",
  "metaDescription_hi": "✅ मनरेगा जॉब कार्ड लिस्ट 2026: नरेगा ग्राम पंचायत लिस्ट में अपना नाम देखें, जॉब कार्ड PDF डाउनलोड करें, मस्टर रोल हाजिरी और खाते में मजदूरी पेमेंट स्टेटस nrega.nic.in से चेक करें।"
}
];
