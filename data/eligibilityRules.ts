import { Scheme, SchemeEligibilityConfig, EligibilityEvaluation, EligibilityAnswerValue } from '@/types';
import { SCHEMES } from './schemes';

export const SCHEME_ELIGIBILITY_CONFIGS: Record<string, SchemeEligibilityConfig> = {
  // 1. PM-KISAN
  'pm-kisan': {
    schemeId: 'pm-kisan',
    schemeSlug: 'pm-kisan-samman-nidhi',
    schemeTitle_en: 'PM Kisan Samman Nidhi',
    schemeTitle_hi: 'पीएम किसान सम्मान निधि',
    questions: [
      {
        id: 'landholding',
        question_en: 'Are you applying as a person connected with eligible cultivable landholding in government revenue records?',
        question_hi: 'क्या आप सरकारी राजस्व अभिलेखों में दर्ज कृषि योग्य भूमि धारक के रूप में आवेदन कर रहे हैं?',
        helpText_en: 'Land title must be mutated in the applicant’s name as per scheme operational guidelines.',
        helpText_hi: 'योजना के नियमानुसार जमीन का दाखिल-खारिज/जमाबंदी आवेदक के नाम पर होना आवश्यक है।',
        options: [
          { label_en: 'Yes (I hold agricultural land in my name)', label_hi: 'हाँ (मेरे नाम पर कृषि भूमि दर्ज है)', value: 'yes' },
          { label_en: 'No (I do not own cultivable land)', label_hi: 'नहीं (मेरे नाम पर कृषि भूमि नहीं है)', value: 'no' },
          { label_en: 'Not sure / Joint family mutation pending', label_hi: 'निश्चित नहीं / वंशावली या म्यूटेशन लंबित है', value: 'not-sure' }
        ]
      },
      {
        id: 'exclusion',
        question_en: 'Does your situation fall into any officially listed exclusion category (e.g. income tax payer, constitutional post holder, serving/retired government employee, or monthly pension ≥ ₹10,000)?',
        question_hi: 'क्या आपका परिवार किसी आधिकारिक अपात्रता श्रेणी में आता है (उदा. आयकरदाता, संवैधानिक पदधारक, सेवारत/सेवानिवृत्त सरकारी कर्मचारी, अथवा ₹10,000+ मासिक पेंशनधारक)?',
        isExclusionCheck: true,
        helpText_en: 'Under operational guidelines, families of income tax payers and institutional landholders are excluded.',
        helpText_hi: 'मार्गदर्शिका के अनुसार आयकरदाता और संस्थागत भूमिधारक पीएम किसान के पात्र नहीं हैं।',
        options: [
          { label_en: 'No (None of these apply to my household)', label_hi: 'नहीं (इनमें से कोई भी हम पर लागू नहीं होता)', value: 'no' },
          { label_en: 'Yes (Someone in household is a taxpayer/govt servant)', label_hi: 'हाँ (परिवार में आयकरदाता अथवा सरकारी कर्मचारी हैं)', value: 'yes' },
          { label_en: 'Not sure about exact tax/exclusion status', label_hi: 'निश्चित नहीं / आयकर या पेंशन नियमों की स्पष्ट जानकारी नहीं है', value: 'not-sure' }
        ]
      },
      {
        id: 'ekyc_bank',
        question_en: 'Do you have an active Aadhaar-linked bank account (DBT/NPCI enabled) and completed biometric/face e-KYC?',
        question_hi: 'क्या आपके पास आधार से लिंक और डीबीटी-सक्षम सक्रिय बैंक खाता है और ई-केवाईसी पूर्ण है?',
        helpText_en: 'Mandatory for direct benefit installment transfers without intermediary delays.',
        helpText_hi: 'किस्त सीधे खाते में अंतरित होने के लिए एनपीसीआई मैपिंग और ई-केवाईसी अनिवार्य है।',
        options: [
          { label_en: 'Yes (Aadhaar linked & e-KYC verified)', label_hi: 'हाँ (आधार लिंक है और ई-केवाईसी हो चुका है)', value: 'yes' },
          { label_en: 'No (Not yet linked or pending biometric)', label_hi: 'नहीं (अभी लिंक नहीं हुआ या ई-केवाईसी बाकी है)', value: 'no' },
          { label_en: 'Not sure of NPCI / e-KYC status', label_hi: 'निश्चित नहीं (बैंक में डीबीटी स्टेटस की जानकारी नहीं)', value: 'not-sure' }
        ]
      }
    ],
    evaluate: (answers) => {
      const { landholding, exclusion, ekyc_bank } = answers;

      // Exclusion condition triggered
      if (exclusion === 'yes' || landholding === 'no') {
        return {
          resultState: 'potentially_not_eligible',
          explanation_en: exclusion === 'yes'
            ? 'You indicated that someone in your household falls under an official exclusion category (such as income tax payment or government employment), which excludes households from PM-Kisan.'
            : 'You indicated that you do not hold cultivable agricultural land registered in revenue records, which is a mandatory statutory prerequisite for PM-Kisan.',
          explanation_hi: exclusion === 'yes'
            ? 'आपने संकेत दिया है कि परिवार में आयकरदाता अथवा सरकारी सेवा की श्रेणी लागू होती है, जो पीएम किसान नियमों के तहत अपात्रता कारक है।'
            : 'आपने संकेत दिया है कि आपके नाम पर राजस्व अभिलेखों में कृषि योग्य भूमि दर्ज नहीं है, जो पीएम किसान हेतु अनिवार्य शर्त है।',
          whatThisMeans_en: 'Based on published guidelines, applicants with institutional landholdings, taxpayer status, or zero revenue land title generally do not qualify. Government authorities make the final binding determination.',
          whatThisMeans_hi: 'प्रकाशित नियमों के अनुसार आयकरदाता परिवार अथवा भूमिहीन किसान सामान्यतः इसके पात्र नहीं हैं। अंतिम निर्णय संबंधित राजस्व प्राधिकारी का होता है।',
          nextSteps_en: [
            'If your land mutation was updated recently, verify revenue records at the Circle / Tehsil office.',
            'Explore other farmer welfare programs such as PM Krishi Sinchayee or Kisan Credit Card (KCC).'
          ],
          nextSteps_hi: [
            'यदि आपकी जमीन का हाल ही में म्यूटेशन हुआ है, तो अंचल/तहसील कार्यालय में अभिलेखों की जांच करें।',
            'अन्य किसान कल्याण योजनाओं जैसे किसान क्रेडिट कार्ड (KCC) अथवा फसल बीमा योजना का अन्वेषण करें।'
          ]
        };
      }

      // Uncertain answers
      if (landholding === 'not-sure' || exclusion === 'not-sure' || ekyc_bank === 'not-sure' || ekyc_bank === 'no') {
        return {
          resultState: 'needs_verification',
          explanation_en: 'Some of your answers could not be evaluated with certainty. In particular, official land revenue mutation and biometric e-KYC verification are required before enrollment can be established.',
          explanation_hi: 'आपके कुछ उत्तरों के आधार पर पूर्ण पात्रता का निश्चय नहीं हो सका। विशेष रूप से भूमि जमाबंदी अभिलेख और बायोमेट्रिक ई-केवाईसी की सरकारी पुष्टि आवश्यक है।',
          whatThisMeans_en: 'You may meet primary prerequisites, but your revenue record status or e-KYC linkage must be verified through the PM-Kisan portal or your local Patwari/Tehsildar.',
          whatThisMeans_hi: 'आप बुनियादी मानदंडों को पूरा कर सकते हैं, परंतु बैंक डीबीटी लिंकिंग अथवा खतियान जांच स्थानीय राजस्व प्राधिकारी से सत्यापित करानी होगी।',
          nextSteps_en: [
            'Check your Aadhaar-DBT linking status at your nearest bank branch or CSC center.',
            'Visit pmkisan.gov.in to verify whether your land record is mapped under Farmer Registry.',
            'Complete pending OTP or Biometric e-KYC on the PM-Kisan portal.'
          ],
          nextSteps_hi: [
            'अपने नजदीकी बैंक शाखा या सीएससी केंद्र में आधार-डीबीटी लिंकिंग की स्थिति जांचें।',
            'pmkisan.gov.in पर जाकर जांचें कि क्या आपकी भूमि का विवरण किसान रजिस्ट्री में दर्ज है।',
            'पोर्टल पर फेस-आधार अथवा बायोमेट्रिक ई-केवाईसी प्रक्रिया पूर्ण करें।'
          ]
        };
      }

      // All clear
      return {
        resultState: 'potentially_eligible',
        explanation_en: 'Based on your answers, you appear to meet the primary landholding criteria and do not identify an officially listed exclusion category under PM-Kisan guidelines.',
        explanation_hi: 'आपके उत्तरों के अनुसार आपके पास वैध कृषि भूमि है, आप किसी अपात्रता श्रेणी (आयकरदाता आदि) में नहीं आते, और आधार लिंकिंग का पालन करते हैं।',
        whatThisMeans_en: 'This indicates potential eligibility under the published operational guidelines. Official enrollment requires validation against state land records and PM-Kisan registry.',
        whatThisMeans_hi: 'यह मूल्यांकन प्रकाशित नियमों के आधार पर संभावित पात्रता दर्शाता है। अंतिम लाभ राज्य सरकार के राजस्व सत्यापन के पश्चात ही स्वीकृत होता है।',
        nextSteps_en: [
          'Review the required documents: Land Jamabandi / Khata-Khesra copy, Aadhaar card, and bank passbook.',
          'Submit your new farmer registration on the official portal (pmkisan.gov.in) or visit your local CSC center.',
          'Track status in the "Beneficiary Status" tab after submission.'
        ],
        nextSteps_hi: [
          'जरूरी दस्तावेज तैयार रखें: जमीन की रसीद/जमाबंदी प्रति, आधार कार्ड और बैंक पासबुक।',
          'आधिकारिक पोर्टल (pmkisan.gov.in) पर "New Farmer Registration" करें अथवा सीएससी केंद्र पर जाएं।',
          'आवेदन के बाद पोर्टल पर "Beneficiary Status" के माध्यम से अनुमोदन ट्रैक करें।'
        ]
      };
    }
  },

  // 2. AYUSHMAN BHARAT
  'ayushman-bharat': {
    schemeId: 'ayushman-bharat',
    schemeSlug: 'ayushman-bharat-pmjay-health-card',
    schemeTitle_en: 'Ayushman Bharat PM-JAY (Including 70+ Vaya Vandana)',
    schemeTitle_hi: 'आयुष्मान भारत पीएम-जय (70+ वय वंदना सहित)',
    questions: [
      {
        id: 'senior_70',
        question_en: 'Is the applicant or any beneficiary family member aged 70 years or above (born in or before 1954)?',
        question_hi: 'क्या आवेदक अथवा परिवार का कोई सदस्य 70 वर्ष या उससे अधिक आयु का है (जन्म वर्ष 1954 या पूर्व)?',
        helpText_en: 'Universal coverage: All senior citizens aged 70+ qualify for a distinct ₹5 Lakh card irrespective of income or caste.',
        helpText_hi: 'सार्वभौमिक नियम: 70 वर्ष से अधिक आयु के सभी वरिष्ठ नागरिक बिना किसी आय सीमा के ₹5 लाख के कार्ड हेतु पात्र हैं।',
        options: [
          { label_en: 'Yes (Applicant is 70+ years old)', label_hi: 'हाँ (आवेदक 70 वर्ष या अधिक उम्र के हैं)', value: 'yes' },
          { label_en: 'No (Applicant is under 70 years)', label_hi: 'नहीं (आयु 70 वर्ष से कम है)', value: 'no' },
          { label_en: 'Not sure of exact age on Aadhaar', label_hi: 'निश्चित नहीं / आधार कार्ड पर जन्मतिथि की पुष्टि नहीं', value: 'not-sure' }
        ]
      },
      {
        id: 'secc_ration',
        question_en: 'If under 70, is your family listed in SECC 2011 Deprivation Criteria or holding an active NFSA Priority / Antyodaya (AAY) Ration Card?',
        question_hi: 'यदि 70 वर्ष से कम हैं, तो क्या आपका परिवार SECC 2011 अथवा खाद्य सुरक्षा प्राथमिकता/अंत्योदय (लाल/पीला) राशन कार्ड धारक है?',
        helpText_en: 'Family health cards for citizens under 70 require inclusion in identified economic categories.',
        helpText_hi: '70 वर्ष से कम आयु वाले परिवारों के लिए राशन कार्ड अथवा एसईसीसी सूची में नाम होना अनिवार्य है।',
        options: [
          { label_en: 'Yes (We have Priority/Antyodaya ration card or SECC entry)', label_hi: 'हाँ (हमारे पास प्राथमिकता/अंत्योदय राशन कार्ड अथवा एसईसीसी प्रविष्टि है)', value: 'yes' },
          { label_en: 'No (We do not hold priority ration card)', label_hi: 'नहीं (हमारे पास ऐसा राशन कार्ड नहीं है)', value: 'no' },
          { label_en: 'Not sure / Need to check beneficiary portal', label_hi: 'निश्चित नहीं / पोर्टल पर नाम खोजना बाकी है', value: 'not-sure' }
        ]
      },
      {
        id: 'other_govt_cover',
        question_en: 'Are you already enrolled in another central government health scheme such as CGHS, ECHS, or Railways?',
        question_hi: 'क्या आप पहले से किसी अन्य केंद्र सरकार स्वास्थ्य योजना (उदा. CGHS, ECHS अथवा रेलवे मेडिकल) से आच्छादित हैं?',
        isExclusionCheck: true,
        helpText_en: 'Senior citizens aged 70+ under CGHS/ECHS can choose either their existing scheme or Ayushman Vaya Vandana, but cannot claim duplicate concurrent benefits.',
        helpText_hi: 'सीजीएचएस/ईसीएचएस लाभार्थी वरिष्ठ नागरिक दोनों में से किसी एक योजना का चयन कर सकते हैं।',
        options: [
          { label_en: 'No (Not covered under CGHS/ECHS/Govt schemes)', label_hi: 'नहीं (अन्य किसी सरकारी योजना से आच्छादित नहीं हैं)', value: 'no' },
          { label_en: 'Yes (Covered under CGHS/ECHS/Railways)', label_hi: 'हाँ (सीजीएचएस/ईसीएचएस/रेलवे मेडिकल कार्ड है)', value: 'yes' },
          { label_en: 'Not sure of government coverage rules', label_hi: 'निश्चित नहीं / नियमों की जानकारी नहीं है', value: 'not-sure' }
        ]
      }
    ],
    evaluate: (answers) => {
      const { senior_70, secc_ration, other_govt_cover } = answers;

      // 70+ Path
      if (senior_70 === 'yes') {
        if (other_govt_cover === 'yes') {
          return {
            resultState: 'needs_verification',
            explanation_en: 'As a citizen aged 70+, you qualify for Ayushman Vaya Vandana, but since you are also covered by CGHS/ECHS, you must exercise a formal one-time option to either retain your existing scheme or migrate to Ayushman Vaya Vandana.',
            explanation_hi: '70+ वरिष्ठ नागरिक के रूप में आप पात्र हैं, परंतु सीजीएचएस/ईसीएचएस के लाभार्थी होने के कारण आपको दोनों में से किसी एक योजना का विकल्प चुनना होगा।',
            whatThisMeans_en: 'Dual coverage is prohibited. You can choose Ayushman Vaya Vandana with its dedicated ₹5 Lakh hospital network or continue your existing institutional card.',
            whatThisMeans_hi: 'दोहरा लाभ मान्य नहीं है। आप ₹5 लाख के आयुष्मान नेटवर्क का विकल्प चुन सकते हैं।',
            nextSteps_en: [
              'Visit beneficiary.nha.gov.in or download the Ayushman App.',
              'Authenticate via Aadhaar e-KYC to generate your golden Ayushman Vaya Vandana card.'
            ],
            nextSteps_hi: [
              'beneficiary.nha.gov.in पर जाएं अथवा आयुष्मान ऐप डाउनलोड करें।',
              'आधार ई-केवाईसी द्वारा अपना विशेष वय वंदना कार्ड जनरेट करें।'
            ]
          };
        }
        return {
          resultState: 'potentially_eligible',
          explanation_en: 'All citizens aged 70 and above qualify for the Ayushman Bharat Vaya Vandana Card with a distinct annual ₹5,00,000 free hospital treatment cover, with zero income ceilings.',
          explanation_hi: '70 वर्ष या उससे अधिक आयु के सभी नागरिक बिना किसी आय अथवा जाति सीमा के ₹5,00,000 के वार्षिक मुफ्त अस्पताल इलाज हेतु पूर्णतः पात्र हैं।',
          whatThisMeans_en: 'Universal age-based entitlement. The benefit is exclusively dedicated to the senior citizen and does not share quota with younger family members.',
          whatThisMeans_hi: 'यह सार्वभौमिक अधिकार है। यह ₹5 लाख का कवर केवल वरिष्ठ नागरिक के लिए आरक्षित रहता है।',
          nextSteps_en: [
            'Have the applicant’s Aadhaar card ready with registered mobile number for OTP.',
            'Visit beneficiary.nha.gov.in, select "Senior Citizen 70+", and download the card.',
            'Show the digital or printed card at any empanelled public or private hospital.'
          ],
          nextSteps_hi: [
            'आवेदक का आधार कार्ड और लिंक मोबाइल नंबर तैयार रखें।',
            'beneficiary.nha.gov.in पर जाएं और "Senior Citizen 70+" विकल्प चुनकर कार्ड डाउनलोड करें।',
            'सूचीबद्ध किसी भी सरकारी या निजी अस्पताल में कार्ड प्रस्तुत कर कैशलेस उपचार प्राप्त करें।'
          ]
        };
      }

      // Under 70 Path
      if (senior_70 === 'no') {
        if (secc_ration === 'yes') {
          return {
            resultState: 'potentially_eligible',
            explanation_en: 'Based on your possession of an active NFSA Priority/Antyodaya Ration Card or verified SECC 2011 entry, your family appears to meet the published criteria for the standard Ayushman Card.',
            explanation_hi: 'खाद्य सुरक्षा प्राथमिकता/अंत्योदय राशन कार्ड अथवा एसईसीसी 2011 पात्रता के आधार पर आपका परिवार सामान्य आयुष्मान कार्ड हेतु पात्र प्रतीत होता है।',
            whatThisMeans_en: 'Family floater cover of ₹5 Lakh per year for hospitalized secondary and tertiary care across empanelled hospitals in India.',
            whatThisMeans_hi: 'परिवार के सभी सदस्यों के लिए प्रति वर्ष ₹5 लाख का सामूहिक कैशलेस अस्पताल इलाज कवर।',
            nextSteps_en: [
              'Search your Ration Card or Aadhaar on beneficiary.nha.gov.in.',
              'Complete face/fingerprint e-KYC at your nearest CSC or Ayushman Mitra counter.',
              'Download the Ayushman PM-JAY card.'
            ],
            nextSteps_hi: [
              'beneficiary.nha.gov.in पर अपना राशन कार्ड या आधार नंबर डालकर पात्रता चेक करें।',
              'सीएससी या अस्पताल में आयुष्मान मित्र काउंटर पर ई-केवाईसी पूर्ण कराएं।',
              'कार्ड डाउनलोड करें।'
            ]
          };
        }
        if (secc_ration === 'no') {
          return {
            resultState: 'potentially_not_eligible',
            explanation_en: 'For citizens under 70 years of age, enrolment in the central Ayushman Bharat PM-JAY quota requires inclusion in the SECC 2011 deprivation list or an NFSA priority ration card.',
            explanation_hi: '70 वर्ष से कम आयु के नागरिकों के लिए केंद्र सरकार के आयुष्मान कोटे में एसईसीसी अथवा प्राथमिकता राशन कार्ड का होना आवश्यक है।',
            whatThisMeans_en: 'You may not qualify under central PM-JAY criteria, though your state may offer separate state health insurance programs.',
            whatThisMeans_hi: 'आप केंद्र सरकार के सामान्य कोटे में अपात्र हो सकते हैं, हालांकि राज्य सरकार की अन्य योजनाएं उपलब्ध हो सकती हैं।',
            nextSteps_en: [
              'Verify whether your state operates expanded universal health schemes (e.g. Chiranjeevi, Bima, etc.).',
              'If your family has senior members aged 70+, they can independently claim the Ayushman Vaya Vandana card.'
            ],
            nextSteps_hi: [
              'जांचें कि क्या आपके राज्य में विस्तारित राज्य स्वास्थ्य योजना लागू है।',
              'यदि परिवार में कोई 70+ बुजुर्ग हैं, तो उनका अलग से वय वंदना कार्ड बनवाया जा सकता है।'
            ]
          };
        }
      }

      // Fallback uncertain
      return {
        resultState: 'needs_verification',
        explanation_en: 'Your eligibility depends on verifying your Aadhaar date of birth or your family entry in the National Health Authority database.',
        explanation_hi: 'आपकी पात्रता की पुष्टि हेतु आधार जन्मतिथि अथवा स्वास्थ्य प्राधिकरण के डेटाबेस में राशन कार्ड नंबर की जांच आवश्यक है।',
        whatThisMeans_en: 'A live beneficiary search using your mobile or Aadhaar number is recommended to confirm your status.',
        whatThisMeans_hi: 'आधिकारिक पोर्टल पर लाइव सर्च करके राशन कार्ड नंबर से पुष्टि करना अनुशंसित है।',
        nextSteps_en: [
          'Visit beneficiary.nha.gov.in to search your name using your Aadhaar or Ration Card number.'
        ],
        nextSteps_hi: [
          'beneficiary.nha.gov.in पर आधार अथवा राशन कार्ड से अपना नाम खोजें।'
        ]
      };
    }
  },

  // 3. JHARKHAND MAIYA SAMMAN
  'jharkhand-maiya-samman': {
    schemeId: 'jharkhand-maiya-samman',
    schemeSlug: 'jharkhand-mukhyamantri-maiya-samman-yojana',
    schemeTitle_en: 'Jharkhand Mukhyamantri Maiya Samman Yojana',
    schemeTitle_hi: 'झारखंड मुख्यमंत्री मंईयां सम्मान योजना',
    questions: [
      {
        id: 'residency',
        question_en: 'Are you a woman permanent resident of Jharkhand state holding proof of local residence?',
        question_hi: 'क्या आप झारखंड राज्य की स्थायी निवासी महिला हैं और आपके पास स्थानीय निवास प्रमाण है?',
        options: [
          { label_en: 'Yes (Permanent resident woman of Jharkhand)', label_hi: 'हाँ (झारखंड की स्थायी निवासी महिला)', value: 'yes' },
          { label_en: 'No (Resident of another state or not female)', label_hi: 'नहीं (अन्य राज्य की निवासी अथवा महिला नहीं)', value: 'no' },
          { label_en: 'Not sure / Domicile documentation in progress', label_hi: 'निश्चित नहीं / आवासीय प्रमाण पत्र प्रक्रियाधीन है', value: 'not-sure' }
        ]
      },
      {
        id: 'age',
        question_en: 'Is your current age between 18 and 50 years (as recorded on your Aadhaar card)?',
        question_hi: 'क्या आपकी वर्तमान आयु 18 से 50 वर्ष के बीच है (जैसा आधार कार्ड पर दर्ज है)?',
        helpText_en: 'The scheme covers adult women up to age 50; senior pension kicks in for older brackets.',
        helpText_hi: 'यह योजना 18 से 50 वर्ष की महिलाओं के लिए है; इससे अधिक उम्र पर वृद्धावस्था पेंशन मिलती है।',
        options: [
          { label_en: 'Yes (Aged between 18 and 50 years)', label_hi: 'हाँ (18 से 50 वर्ष के बीच)', value: 'yes' },
          { label_en: 'No (Under 18 or above 50 years)', label_hi: 'नहीं (18 से कम अथवा 50 वर्ष से अधिक)', value: 'no' },
          { label_en: 'Not sure of exact age on official records', label_hi: 'निश्चित नहीं (आधार जन्मतिथि में संशय है)', value: 'not-sure' }
        ]
      },
      {
        id: 'exclusion_tax',
        question_en: 'Does your family pay income tax, or does any family member hold permanent government service or an existing higher pension?',
        question_hi: 'क्या आपका परिवार आयकर देता है, या परिवार में कोई सदस्य नियमित सरकारी सेवा में है अथवा अन्य पेंशन ले रहा है?',
        isExclusionCheck: true,
        options: [
          { label_en: 'No (Non-taxpayer, no government employment)', label_hi: 'नहीं (गैर-आयकरदाता, कोई सरकारी नौकरी नहीं)', value: 'no' },
          { label_en: 'Yes (Family member pays tax or has govt job)', label_hi: 'हाँ (परिवार में आयकरदाता या सरकारी कर्मचारी हैं)', value: 'yes' },
          { label_en: 'Not sure of family exclusion criteria', label_hi: 'निश्चित नहीं / अपात्रता नियमों की जानकारी नहीं है', value: 'not-sure' }
        ]
      }
    ],
    evaluate: (answers) => {
      const { residency, age, exclusion_tax } = answers;

      if (residency === 'no' || age === 'no' || exclusion_tax === 'yes') {
        return {
          resultState: 'potentially_not_eligible',
          explanation_en: residency === 'no'
            ? 'This welfare initiative is exclusively designated for permanent residents of Jharkhand state.'
            : age === 'no'
            ? 'The scheme operational rules restrict entitlement to adult women aged between 18 and 50 years.'
            : 'Households with income tax payers or permanent government employees are officially excluded from financial assistance under Maiya Samman guidelines.',
          explanation_hi: residency === 'no'
            ? 'यह योजना केवल झारखंड राज्य की स्थायी निवासी महिलाओं के लिए आरक्षित है।'
            : age === 'no'
            ? 'योजना के दिशा-निर्देशों के अनुसार आयु सीमा 18 से 50 वर्ष निर्धारित है।'
            : 'आयकरदाता परिवार अथवा नियमित सरकारी सेवा वाले परिवार इस योजना के दायरे से बाहर हैं।',
          whatThisMeans_en: 'One or more mandatory eligibility requirements under the gazette resolution were not met.',
          whatThisMeans_hi: 'राजपत्र संकल्प के अंतर्गत निर्धारित अनिवार्य शर्तों में से एक या अधिक शर्त पूरी नहीं होती प्रतीत होती है।',
          nextSteps_en: [
            'If aged 50+, explore the Sarvajan Pension Yojana of Jharkhand.',
            'If resident of another state, explore local women welfare initiatives in your home state.'
          ],
          nextSteps_hi: [
            'यदि आयु 50+ है, तो झारखंड की सर्वजन पेंशन योजना का विकल्प देखें।',
            'यदि अन्य राज्य से हैं, तो अपने राज्य की संबंधित महिला कल्याण योजनाएं देखें।'
          ]
        };
      }

      if (residency === 'not-sure' || age === 'not-sure' || exclusion_tax === 'not-sure') {
        return {
          resultState: 'needs_verification',
          explanation_en: 'Your residence proof or Aadhaar age bracket requires official verification at your local Panchayat camp or Block office.',
          explanation_hi: 'आपके स्थानीय निवास प्रमाण अथवा आधार आयु की पुष्टि हेतु पंचायत शिविर या प्रखण्ड कार्यालय में जांच आवश्यक है।',
          whatThisMeans_en: 'You may qualify once verified with your Ration Card and Aadhaar-linked single bank account.',
          whatThisMeans_hi: 'राशन कार्ड और आधार से जुड़े बैंक खाते की पुष्टि के बाद आप पात्र हो सकते हैं।',
          nextSteps_en: [
            'Obtain your residential certificate or ensure your name appears on Jharkhand Ration Card.',
            'Visit the nearest special camp organized by your Block Development Officer (BDO).'
          ],
          nextSteps_hi: [
            'झारखंड का आवासीय प्रमाण पत्र अथवा राशन कार्ड में नाम की पुष्टि करें।',
            'प्रखंड विकास पदाधिकारी द्वारा आयोजित विशेष शिविर में उपस्थित हों।'
          ]
        };
      }

      return {
        resultState: 'potentially_eligible',
        explanation_en: 'You appear to meet all primary criteria: adult female resident of Jharkhand aged 18–50 from a non-taxpayer household.',
        explanation_hi: 'आप सभी बुनियादी मानदंडों को पूरा करती हैं: झारखंड की निवासी, 18-50 वर्ष की आयु और गैर-आयकरदाता परिवार।',
        whatThisMeans_en: 'Entitlement to direct financial assistance of ₹2,500/month (revised from ₹1,000) directly into your single DBT-linked bank account.',
        whatThisMeans_hi: 'प्रति माह ₹2,500 की सीधी आर्थिक सहायता आपके एकल बैंक खाते में डीबीटी के माध्यम से मिलने की पात्रता।',
        nextSteps_en: [
          'Keep your Aadhaar card, Ration Card, and personal bank passbook ready.',
          'Submit the application form at your local Gram Panchayat / Ward special camp or CSC.',
          'Ensure your bank account is Aadhaar-seeded (DBT enabled).'
        ],
        nextSteps_hi: [
          'आधार कार्ड, राशन कार्ड और व्यक्तिगत बैंक पासबुक तैयार रखें।',
          'ग्राम पंचायत/वार्ड विशेष शिविर अथवा प्रज्ञा केंद्र में फॉर्म जमा करें।',
          'सुनिश्चित करें कि बैंक खाता आधार से एनपीसीआई लिंक (DBT सक्षम) है।'
        ]
      };
    }
  },

  // 4. PM AWAS YOJANA (PMAY-G)
  'pm-awas-yojana': {
    schemeId: 'pm-awas-yojana',
    schemeSlug: 'pm-awas-yojana-pmay-housing',
    schemeTitle_en: 'Pradhan Mantri Awas Yojana (PMAY-G)',
    schemeTitle_hi: 'प्रधानमंत्री आवास योजना (ग्रामीण)',
    questions: [
      {
        id: 'kutcha_house',
        question_en: 'Does your family currently live in a kutcha, dilapidated, or temporary structure with no permanent concrete roof?',
        question_hi: 'क्या आपका परिवार वर्तमान में कच्चे, जर्जर अथवा बिना पक्की छत वाले मकान में निवास करता है?',
        options: [
          { label_en: 'Yes (Live in kutcha / temporary house)', label_hi: 'हाँ (कच्चे अथवा अस्थायी मकान में रहते हैं)', value: 'yes' },
          { label_en: 'No (Live in pucca house)', label_hi: 'नहीं (पक्के मकान में रहते हैं)', value: 'no' },
          { label_en: 'Not sure of official housing categorization', label_hi: 'निश्चित नहीं / आवास वर्गीकरण का संशय है', value: 'not-sure' }
        ]
      },
      {
        id: 'pucca_ownership',
        question_en: 'Does any member of your immediate household own a permanent pucca house anywhere in India?',
        question_hi: 'क्या आपके परिवार के किसी भी सदस्य के पास भारत में कहीं भी पक्का मकान उपलब्ध है?',
        isExclusionCheck: true,
        options: [
          { label_en: 'No (Zero pucca house ownership in family)', label_hi: 'नहीं (परिवार में किसी के पास पक्का मकान नहीं है)', value: 'no' },
          { label_en: 'Yes (Family member owns a pucca house)', label_hi: 'हाँ (परिवार के किसी सदस्य के पास पक्का मकान है)', value: 'yes' },
          { label_en: 'Not sure of ownership records', label_hi: 'निश्चित नहीं / मालिकाना हक का संशय है', value: 'not-sure' }
        ]
      },
      {
        id: 'govt_emp_tax',
        question_en: 'Does your family include any permanent government servant, motorized vehicle owner, or income tax payer?',
        question_hi: 'क्या आपके परिवार में कोई सरकारी नौकरी, चार पहिया वाहन, अथवा आयकरदाता शामिल है?',
        isExclusionCheck: true,
        options: [
          { label_en: 'No (None of these automatic exclusion parameters)', label_hi: 'नहीं (इनमें से कोई अपात्रता कारक नहीं है)', value: 'no' },
          { label_en: 'Yes (Family has vehicle/govt job/taxpayer)', label_hi: 'हाँ (परिवार में वाहन/सरकारी नौकरी/आयकरदाता है)', value: 'yes' },
          { label_en: 'Not sure of exclusion details', label_hi: 'निश्चित नहीं', value: 'not-sure' }
        ]
      }
    ],
    evaluate: (answers) => {
      const { kutcha_house, pucca_ownership, govt_emp_tax } = answers;

      if (kutcha_house === 'no' || pucca_ownership === 'yes' || govt_emp_tax === 'yes') {
        return {
          resultState: 'potentially_not_eligible',
          explanation_en: pucca_ownership === 'yes'
            ? 'Families owning a permanent pucca house anywhere in India are officially ineligible for rural housing grants under PMAY-G.'
            : 'Households with pucca dwellings, motorized vehicles, or government employees trigger automatic exclusion parameters under SECC criteria.',
          explanation_hi: pucca_ownership === 'yes'
            ? 'जिन परिवारों के पास पहले से पक्का मकान उपलब्ध है, वे पीएम आवास योजना के नियमों के अनुसार अपात्र हैं।'
            : 'पक्के मकान, चार पहिया वाहन अथवा सरकारी नौकरी वाले परिवार एसईसीसी अपात्रता सूची में आते हैं।',
          whatThisMeans_en: 'PMAY-G prioritizes houseless families and those living in 0, 1, or 2 room kutcha houses with temporary walls and roofs.',
          whatThisMeans_hi: 'पीएम आवास योजना केवल बेघर और कच्चे मकान में रहने वाले परिवारों के लिए है।',
          nextSteps_en: [
            'If you live in an urban area and seek home purchase assistance, check PMAY Urban (Interest Subsidy scheme).',
            'Verify your inclusion in Gram Sabha deprivation waitlists.'
          ],
          nextSteps_hi: [
            'यदि आप शहरी क्षेत्र में हैं, तो पीएम आवास (शहरी) ब्याज सब्सिडी योजना की जांच करें।',
            'ग्राम सभा की वरीयता प्रतीक्षा सूची में अपने नाम की स्थिति देखें।'
          ]
        };
      }

      if (kutcha_house === 'not-sure' || pucca_ownership === 'not-sure' || govt_emp_tax === 'not-sure') {
        return {
          resultState: 'needs_verification',
          explanation_en: 'Your eligibility requires geo-tagging and verification of your current dwelling by the local Panchayat Secretary or Gram Rozgar Sahayak.',
          explanation_hi: 'आपकी पात्रता की पुष्टि हेतु पंचायत सचिव अथवा ग्राम रोजगार सेवक द्वारा मकान की जियो-टैगिंग व भौतिक सत्यापन आवश्यक है।',
          whatThisMeans_en: 'Inclusion in the Awaas+ survey list is necessary for sanctioning construction assistance.',
          whatThisMeans_hi: 'आवास+ सर्वेक्षण सूची में नाम दर्ज होने पर ही पक्का मकान निर्माण सहायता स्वीकृत होती है।',
          nextSteps_en: [
            'Contact your Gram Panchayat Secretary to verify your name in the Awaas+ waitlist.',
            'Keep your Aadhaar, bank passbook, and Job Card ready for geo-tagging.'
          ],
          nextSteps_hi: [
            'अपने पंचायत सचिव से आवास+ सूची में नाम की जांच कराएं।',
            'जियो-टैगिंग हेतु आधार, बैंक पासबुक और मनरेगा जॉब कार्ड तैयार रखें।'
          ]
        };
      }

      return {
        resultState: 'potentially_eligible',
        explanation_en: 'Based on your answers, you appear to meet the core criteria: living in a kutcha house, zero family pucca house ownership, and no exclusion factors.',
        explanation_hi: 'आपके उत्तरों के अनुसार आप मुख्य मानदंडों को पूरा करते हैं: कच्चे मकान में निवास, परिवार में कोई पक्का मकान न होना और गैर-अपवर्जित श्रेणी।',
        whatThisMeans_en: 'Potential entitlement to ₹1,20,000 (plains) to ₹1,30,000 (hilly/difficult areas) direct housing grant plus 90–95 days of MGNREGA wages and ₹12,000 toilet grant under SBM.',
        whatThisMeans_hi: 'मकान निर्माण हेतु ₹1.20 लाख से ₹1.30 लाख की सीधी सहायता, 90-95 दिनों की मनरेगा मजदूरी और ₹12,000 शौचालय निर्माण सहायता की पात्रता।',
        nextSteps_en: [
          'Verify your registration priority on pmayg.nic.in (AwaasSoft portal).',
          'Attend your local Gram Sabha meeting to ensure your name is in the priority verification list.'
        ],
        nextSteps_hi: [
          'pmayg.nic.in (AwaasSoft) पर अपनी ग्राम पंचायत की सूची देखें।',
          'ग्राम सभा की बैठक में भाग लेकर अपने नाम का अनुमोदन कराएं।'
        ]
      };
    }
  },

  // 5. PM VISHWAKARMA
  'pm-vishwakarma': {
    schemeId: 'pm-vishwakarma',
    schemeSlug: 'pm-vishwakarma-yojana-artisan-support',
    schemeTitle_en: 'PM Vishwakarma Scheme',
    schemeTitle_hi: 'पीएम विश्वकर्मा योजना',
    questions: [
      {
        id: 'trade',
        question_en: 'Are you an artisan or craftsperson working hands-on in one of the 18 officially designated traditional trades (e.g. Carpenter, Blacksmith, Potter, Tailor, Cobbler, Mason, Barber, Washerman, Basket Maker)?',
        question_hi: 'क्या आप सरकार द्वारा सूचीबद्ध 18 पारंपरिक शिल्पों में से किसी एक में हाथों से काम करने वाले कारीगर हैं (उदा. बढ़ई, लोहार, कुम्हार, दर्जी, मोची, राजमिस्त्री, नाई, धोबी)?',
        options: [
          { label_en: 'Yes (Engaged in one of the 18 traditional trades)', label_hi: 'हाँ (18 पारंपरिक शिल्पों में से एक में कार्यरत हैं)', value: 'yes' },
          { label_en: 'No (General worker, student, or trader)', label_hi: 'नहीं (सामान्य मजदूर, छात्र अथवा व्यापारी हैं)', value: 'no' },
          { label_en: 'Not sure if my trade is recognized under the 18 crafts', label_hi: 'निश्चित नहीं (मेरा शिल्प सूचीबद्ध है या नहीं, संशय है)', value: 'not-sure' }
        ]
      },
      {
        id: 'age',
        question_en: 'Is your age 18 years or older on the date of registration?',
        question_hi: 'क्या पंजीकरण की तिथि पर आपकी आयु 18 वर्ष या उससे अधिक है?',
        options: [
          { label_en: 'Yes (18 years or older)', label_hi: 'हाँ (18 वर्ष या अधिक)', value: 'yes' },
          { label_en: 'No (Under 18 years)', label_hi: 'नहीं (18 वर्ष से कम)', value: 'no' },
          { label_en: 'Not sure of date of birth record', label_hi: 'निश्चित नहीं', value: 'not-sure' }
        ]
      },
      {
        id: 'family_limit',
        question_en: 'Has any other member of your immediate family (husband/wife/unmarried children) already registered or availed benefits under PM Vishwakarma?',
        question_hi: 'क्या आपके परिवार के किसी अन्य सदस्य (पति/पत्नी/अविवाहित बच्चे) ने पहले से पीएम विश्वकर्मा योजना का लाभ लिया है?',
        isExclusionCheck: true,
        helpText_en: 'Under operational guidelines, registration is strictly restricted to one beneficiary per family.',
        helpText_hi: 'योजना के नियमानुसार प्रति परिवार केवल एक सदस्य को ही लाभ दिया जा सकता है।',
        options: [
          { label_en: 'No (Nobody else in family has applied)', label_hi: 'नहीं (परिवार में किसी अन्य ने आवेदन नहीं किया है)', value: 'no' },
          { label_en: 'Yes (Another family member has registered)', label_hi: 'हाँ (परिवार का एक सदस्य पहले से पंजीकृत है)', value: 'yes' },
          { label_en: 'Not sure', label_hi: 'निश्चित नहीं', value: 'not-sure' }
        ]
      }
    ],
    evaluate: (answers) => {
      const { trade, age, family_limit } = answers;

      if (trade === 'no' || age === 'no' || family_limit === 'yes') {
        return {
          resultState: 'potentially_not_eligible',
          explanation_en: trade === 'no'
            ? 'PM Vishwakarma is strictly reserved for hands-on artisans in the 18 notified traditional trades. General traders and unorganized labor outside these trades are not covered.'
            : family_limit === 'yes'
            ? 'The scheme explicitly limits benefits to one member per family. Multiple registrations from the same ration card / household are rejected.'
            : 'Applicants must be at least 18 years old on the date of application.',
          explanation_hi: trade === 'no'
            ? 'पीएम विश्वकर्मा केवल 18 अधिसूचित पारंपरिक शिल्पों के कारीगरों के लिए है। सामान्य मजदूर अथवा व्यापारी इसके पात्र नहीं हैं।'
            : family_limit === 'yes'
            ? 'योजना के तहत एक परिवार से केवल एक ही सदस्य लाभ प्राप्त कर सकता है।'
            : 'पंजीकरण के समय आवेदक की आयु न्यूनतम 18 वर्ष होना अनिवार्य है।',
          whatThisMeans_en: 'You do not currently meet the published requirements for PM Vishwakarma.',
          whatThisMeans_hi: 'आप वर्तमान में पीएम विश्वकर्मा के प्रकाशित मानदंडों को पूरा नहीं करते हैं।',
          nextSteps_en: [
            'Explore other MSME schemes such as PMEGP (Prime Minister Employment Generation Programme).',
            'Check Mudra Shishu loans (up to ₹50,000) for general small business finance.'
          ],
          nextSteps_hi: [
            'पीएमईजीपी (PMEGP) अथवा मुद्रा लोन योजनाओं का अन्वेषण करें।'
          ]
        };
      }

      if (trade === 'not-sure' || age === 'not-sure' || family_limit === 'not-sure') {
        return {
          resultState: 'needs_verification',
          explanation_en: 'Your specific craft practice must be verified against the official schedule of 18 trades during Gram Panchayat or Urban Local Body verification.',
          explanation_hi: 'आपके शिल्प की जांच ग्राम पंचायत या नगर निकाय द्वारा 18 आधिकारिक शिल्पों की सूची के तहत की जाएगी।',
          whatThisMeans_en: 'Stage 1 verification by Gram Panchayat head and Stage 2 screening by District Implementation Committee are required.',
          whatThisMeans_hi: 'ग्राम प्रधान एवं जिला समिति द्वारा सत्यापन के उपरांत ही प्रशिक्षण एवं टूलकिट स्वीकृत होती है।',
          nextSteps_en: [
            'Review the 18 trade list on pmvishwakarma.gov.in.',
            'Visit your nearest CSC with Aadhaar and bank details.'
          ],
          nextSteps_hi: [
            'pmvishwakarma.gov.in पर 18 शिल्पों की सूची देखें।',
            'सीएससी केंद्र पर जाकर ट्रेड सत्यापन कराएं।'
          ]
        };
      }

      return {
        resultState: 'potentially_eligible',
        explanation_en: 'Based on your answers, you appear to meet all primary criteria: practicing an authorized traditional craft, 18+ years of age, and first applicant from your household.',
        explanation_hi: 'आपके उत्तरों के अनुसार आप पात्र हैं: 18 अधिसूचित शिल्पों में कार्यरत कारीगर, 18+ उम्र और परिवार से प्रथम आवेदक।',
        whatThisMeans_en: 'Entitlement to free basic skill training (5–7 days) with ₹500/day stipend, ₹15,000 digital e-voucher for modern toolkits, and collateral-free enterprise loan at concessional 5% interest.',
        whatThisMeans_hi: '₹500/दिन वजीफे के साथ मुफ्त कौशल प्रशिक्षण, ₹15,000 का टूलकिट ई-वाउचर और 5% रियायती ब्याज पर बिना गारंटी ऋण की पात्रता।',
        nextSteps_en: [
          'Visit any Common Services Center (CSC) with your Aadhaar and mobile number.',
          'Complete biometric authentication and submit trade verification.',
          'Download your official PM Vishwakarma Certificate & ID Card.'
        ],
        nextSteps_hi: [
          'आधार कार्ड और मोबाइल नंबर के साथ नजदीकी सीएससी (CSC) केंद्र जाएं।',
          'बायोमेट्रिक प्रमाणीकरण कराकर ट्रेड फॉर्म सबमिट करें।',
          'पीएम विश्वकर्मा प्रमाणपत्र व पहचान पत्र डाउनलोड करें।'
        ]
      };
    }
  },

  // 6. JHARKHAND ABUA AWAS
  'jharkhand-abua-awas': {
    schemeId: 'jharkhand-abua-awas',
    schemeSlug: 'jharkhand-abua-awas-yojana-housing',
    schemeTitle_en: 'Jharkhand Abua Awas Yojana',
    schemeTitle_hi: 'झारखंड अबुआ आवास योजना',
    questions: [
      {
        id: 'resident',
        question_en: 'Are you a permanent resident of Jharkhand state?',
        question_hi: 'क्या आप झारखंड राज्य के स्थायी निवासी हैं?',
        options: [
          { label_en: 'Yes (Jharkhand permanent resident)', label_hi: 'हाँ (झारखंड के स्थायी निवासी)', value: 'yes' },
          { label_en: 'No (Other state resident)', label_hi: 'नहीं (अन्य राज्य के निवासी)', value: 'no' },
          { label_en: 'Not sure', label_hi: 'निश्चित नहीं', value: 'not-sure' }
        ]
      },
      {
        id: 'kutcha',
        question_en: 'Do you live in a kutcha, mud, or dilapidated house and have NO permanent pucca house?',
        question_hi: 'क्या आप कच्चे/मिट्टी/जर्जर मकान में रहते हैं और आपके पास कोई पक्का मकान नहीं है?',
        options: [
          { label_en: 'Yes (Live in kutcha house, zero pucca house)', label_hi: 'हाँ (कच्चे मकान में रहते हैं, कोई पक्का मकान नहीं है)', value: 'yes' },
          { label_en: 'No (Already own a pucca house)', label_hi: 'नहीं (पहले से पक्का मकान है)', value: 'no' },
          { label_en: 'Not sure of categorization', label_hi: 'निश्चित नहीं', value: 'not-sure' }
        ]
      },
      {
        id: 'prior_pmay',
        question_en: 'Have you or your family ever received house construction assistance under PM Awas Yojana, Baba Saheb Bhimrao Ambedkar Awas, or any other government housing scheme?',
        question_hi: 'क्या आपको या आपके परिवार को पहले कभी पीएम आवास, अंबेडकर आवास अथवा किसी अन्य सरकारी योजना से पक्का मकान मिला है?',
        isExclusionCheck: true,
        options: [
          { label_en: 'No (Never received government housing grant)', label_hi: 'नहीं (पहले कभी सरकारी आवास का लाभ नहीं मिला)', value: 'no' },
          { label_en: 'Yes (Prior beneficiary of housing scheme)', label_hi: 'हाँ (पूर्व में सरकारी आवास का लाभ मिल चुका है)', value: 'yes' },
          { label_en: 'Not sure', label_hi: 'निश्चित नहीं', value: 'not-sure' }
        ]
      }
    ],
    evaluate: (answers) => {
      const { resident, kutcha, prior_pmay } = answers;
      if (resident === 'no' || kutcha === 'no' || prior_pmay === 'yes') {
        return {
          resultState: 'potentially_not_eligible',
          explanation_en: prior_pmay === 'yes'
            ? 'Families who have already received benefits under PM Awas or any previous government housing scheme are excluded from Abua Awas.'
            : 'Abua Awas is strictly intended for houseless or kutcha-house residing permanent citizens of Jharkhand.',
          explanation_hi: prior_pmay === 'yes'
            ? 'जिन परिवारों को पूर्व में पीएम आवास अथवा अन्य योजना से मकान मिल चुका है, वे अबुआ आवास के पात्र नहीं हैं।'
            : 'यह योजना केवल झारखंड के बेघर अथवा कच्चे मकान वाले स्थायी निवासियों के लिए है।',
          whatThisMeans_en: 'Prior housing beneficiaries and permanent pucca house owners are disqualified.',
          whatThisMeans_hi: 'पूर्व लाभार्थी अथवा पक्के मकान वाले परिवार अपात्र हैं।',
          nextSteps_en: ['Verify your household status at the local Panchayat desk.'],
          nextSteps_hi: ['पंचायत भवन में आवास सूची की जांच करें।']
        };
      }
      if (resident === 'not-sure' || kutcha === 'not-sure' || prior_pmay === 'not-sure') {
        return {
          resultState: 'needs_verification',
          explanation_en: 'Your inclusion in the "Aapki Yojana, Aapki Sarkar, Aapke Dwar" verified camp database must be checked.',
          explanation_hi: 'सरकार आपके द्वार शिविर में दर्ज आवेदन की जांच पंचायत स्तर पर आवश्यक है।',
          whatThisMeans_en: 'Gram Sabha prioritizes target beneficiaries across 31 criteria categories.',
          whatThisMeans_hi: 'ग्राम सभा द्वारा वरीयता क्रम निर्धारित किया जाता है।',
          nextSteps_en: ['Check the Abua Awas verification list displayed at your Gram Panchayat.'],
          nextSteps_hi: ['ग्राम पंचायत में चस्पा अबुआ आवास सूची में नाम देखें।']
        };
      }
      return {
        resultState: 'potentially_eligible',
        explanation_en: 'You appear to meet all primary conditions: Jharkhand resident, kutcha dwelling, and no prior government housing grant.',
        explanation_hi: 'आप सभी शर्तों को पूरा करते हैं: झारखंड के निवासी, कच्चे मकान में निवास और पूर्व में किसी योजना का लाभ न मिलना।',
        whatThisMeans_en: 'Entitlement to ₹2,00,000 for a 3-room permanent pucca house with kitchen, disbursed in 4 installments, plus MGNREGA wages.',
        whatThisMeans_hi: 'रसोई सहित 3 कमरों के पक्के मकान हेतु ₹2,00,000 की सहायता (4 किस्तों में) और मनरेगा मजदूरी की पात्रता।',
        nextSteps_en: [
          'Track your application tracking ID on the Jharkhand state housing portal.',
          'Ensure your Aadhaar and bank passbook are ready for field inspection.'
        ],
        nextSteps_hi: [
          'अपने आवेदन की ट्रैकिंग आईडी से स्थिति की जांच करें।',
          'भौतिक जांच हेतु आधार और बैंक पासबुक तैयार रखें।'
        ]
      };
    }
  },

  // 7. NATIONAL SCHOLARSHIP PORTAL
  'national-scholarship-portal': {
    schemeId: 'national-scholarship-portal',
    schemeSlug: 'national-scholarship-portal-nsp-guide',
    schemeTitle_en: 'National Scholarship Portal (NSP)',
    schemeTitle_hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)',
    questions: [
      {
        id: 'student_status',
        question_en: 'Are you currently enrolled as a regular student in a recognized school, college, institute, or university (with valid AISHE/UDISE code)?',
        question_hi: 'क्या आप किसी मान्यता प्राप्त स्कूल, कॉलेज अथवा विश्वविद्यालय में नियमित छात्र के रूप में अध्ययनरत हैं?',
        options: [
          { label_en: 'Yes (Regular enrolled student)', label_hi: 'हाँ (नियमित नामांकित छात्र)', value: 'yes' },
          { label_en: 'No (Not currently enrolled)', label_hi: 'नहीं (वर्तमान में अध्ययनरत नहीं हैं)', value: 'no' },
          { label_en: 'Not sure of institute registration status', label_hi: 'निश्चित नहीं', value: 'not-sure' }
        ]
      },
      {
        id: 'academic_marks',
        question_en: 'Did you score at least 50% or above in your previous year qualifying examination?',
        question_hi: 'क्या आपने अपनी पिछली वार्षिक/बोर्ड परीक्षा में न्यूनतम 50% या उससे अधिक अंक प्राप्त किए हैं?',
        options: [
          { label_en: 'Yes (Scored 50% or more)', label_hi: 'हाँ (50% या अधिक अंक)', value: 'yes' },
          { label_en: 'No (Under 50% marks)', label_hi: 'नहीं (50% से कम अंक)', value: 'no' },
          { label_en: 'Not sure of exact percentage', label_hi: 'निश्चित नहीं', value: 'not-sure' }
        ]
      },
      {
        id: 'family_income',
        question_en: 'Does your annual family income fall within published ceilings (typically ≤ ₹2.5 Lakh/year for post-matric/minority/SC-ST schemes)?',
        question_hi: 'क्या आपके परिवार की वार्षिक आय निर्धारित सीमा के भीतर है (अधिकांश योजनाओं हेतु ₹2.5 लाख/वर्ष तक)?',
        options: [
          { label_en: 'Yes (Annual income within ₹2.5 Lakh)', label_hi: 'हाँ (वार्षिक आय ₹2.5 लाख से कम है)', value: 'yes' },
          { label_en: 'No (Annual income exceeds ₹2.5 Lakh)', label_hi: 'नहीं (आय ₹2.5 लाख से अधिक है)', value: 'no' },
          { label_en: 'Not sure / Income certificate pending', label_hi: 'निश्चित नहीं / आय प्रमाण पत्र लंबित है', value: 'not-sure' }
        ]
      }
    ],
    evaluate: (answers) => {
      const { student_status, academic_marks, family_income } = answers;
      if (student_status === 'no' || academic_marks === 'no') {
        return {
          resultState: 'potentially_not_eligible',
          explanation_en: 'NSP scholarships require active enrollment in recognized educational institutes and minimum 50% academic performance in prior qualifying examinations.',
          explanation_hi: 'एनएसपी छात्रवृत्ति हेतु मान्यता प्राप्त संस्थान में नियमित नामांकन और पिछली परीक्षा में न्यूनतम 50% अंक अनिवार्य हैं।',
          whatThisMeans_en: 'Merit and regular attendance are statutory prerequisites across central scholarship schemes.',
          whatThisMeans_hi: 'नियमित उपस्थिति और न्यूनतम प्राप्तांक अनिवार्य शर्तें हैं।',
          nextSteps_en: ['Focus on upcoming academic exams to meet the 50% threshold for next academic year.'],
          nextSteps_hi: ['आगामी परीक्षा में 50%+ अंक प्राप्त करने पर अगले सत्र में आवेदन करें।']
        };
      }
      if (student_status === 'not-sure' || academic_marks === 'not-sure' || family_income === 'not-sure' || family_income === 'no') {
        return {
          resultState: 'needs_verification',
          explanation_en: family_income === 'no'
            ? 'Your family income exceeds the ₹2.5 Lakh ceiling for means-based scholarships; however, you may still qualify for merit-based schemes (e.g. Central Sector Scheme based on top 20th percentile board marks).'
            : 'Your institute verification code (AISHE/UDISE) and income certificate must be checked against scheme requirements.',
          explanation_hi: family_income === 'no'
            ? 'पारिवारिक आय ₹2.5 लाख से अधिक होने पर सामान्य छात्रवृत्ति नहीं मिलेगी, परंतु बोर्ड मेरिट (शीर्ष 20 प्रतिशत) छात्रवृत्ति हेतु विचार हो सकता है।'
            : 'संस्थान कोड और आय प्रमाण पत्र की जांच आवश्यक है।',
          whatThisMeans_en: 'OTR (One-Time Registration) and institute verification will finalize eligibility.',
          whatThisMeans_hi: 'ओटीआर (OTR) और संस्थान स्तर पर सत्यापन के बाद ही अंतिम स्वीकृति मिलती है।',
          nextSteps_en: [
            'Generate your One Time Registration (NSP OTR) using Aadhaar Face RD app.',
            'Consult your institute Nodal Officer for Scholarship (INO).'
          ],
          nextSteps_hi: [
            'NSP OTR ऐप से वन-टाइम रजिस्ट्रेशन पूर्ण करें।',
            'अपने स्कूल/कॉलेज के छात्रवृत्ति नोडल अधिकारी से संपर्क करें।'
          ]
        };
      }
      return {
        resultState: 'potentially_eligible',
        explanation_en: 'Based on your answers, you appear to meet the primary criteria for central pre-matric / post-matric / merit-cum-means scholarship schemes.',
        explanation_hi: 'आपके उत्तरों के अनुसार आप नियमित छात्र हैं, 50%+ अंक हैं और पारिवारिक आय सीमा के अंतर्गत हैं।',
        whatThisMeans_en: 'Entitlement to direct tuition fee reimbursement and monthly maintenance allowances directly into your Aadhaar-seeded bank account.',
        whatThisMeans_hi: 'सीधे बैंक खाते में शिक्षण शुल्क प्रतिपूर्ति और मासिक अनुरक्षण भत्ते की पात्रता।',
        nextSteps_en: [
          'Complete OTR registration on scholarships.gov.in using Aadhaar.',
          'Upload your income certificate, mark sheet, and Bonafide student certificate.',
          'Submit the application before the published scheme deadline.'
        ],
        nextSteps_hi: [
          'scholarships.gov.in पर जाकर OTR पंजीकरण पूर्ण करें।',
          'आय प्रमाण पत्र, अंकतालिका और बोनाफाइड प्रमाणपत्र अपलोड करें।',
          'अंतिम तिथि से पूर्व ऑनलाइन आवेदन जमा करें।'
        ]
      };
    }
  },

  // 8. ATAL PENSION YOJANA
  'atal-pension-yojana': {
    schemeId: 'atal-pension-yojana',
    schemeSlug: 'atal-pension-yojana-apy-retirement',
    schemeTitle_en: 'Atal Pension Yojana (APY)',
    schemeTitle_hi: 'अटल पेंशन योजना (APY)',
    questions: [
      {
        id: 'age',
        question_en: 'Is your current age strictly between 18 and 40 years?',
        question_hi: 'क्या आपकी वर्तमान आयु 18 से 40 वर्ष के बीच है?',
        helpText_en: 'Statutory rule: APY entry is strictly capped at age 40 to allow minimum 20 years of contributions before pension begins at 60.',
        helpText_hi: 'सख्त नियम: 60 वर्ष की आयु में पेंशन पाने हेतु न्यूनतम 20 वर्ष का अंशदान आवश्यक है, अतः प्रवेश आयु 18-40 वर्ष है।',
        options: [
          { label_en: 'Yes (Age is between 18 and 40 years)', label_hi: 'हाँ (आयु 18 से 40 वर्ष के बीच है)', value: 'yes' },
          { label_en: 'No (Under 18 or above 40 years)', label_hi: 'नहीं (18 से कम अथवा 40 वर्ष से अधिक)', value: 'no' },
          { label_en: 'Not sure', label_hi: 'निश्चित नहीं', value: 'not-sure' }
        ]
      },
      {
        id: 'bank_account',
        question_en: 'Do you have an active savings bank or post office account with auto-debit facility?',
        question_hi: 'क्या आपके पास किसी बैंक अथवा डाकघर में सक्रिय बचत खाता है?',
        options: [
          { label_en: 'Yes (Active savings account)', label_hi: 'हाँ (सक्रिय बचत खाता है)', value: 'yes' },
          { label_en: 'No (Do not have a savings account)', label_hi: 'नहीं (बचत खाता नहीं है)', value: 'no' },
          { label_en: 'Not sure', label_hi: 'निश्चित नहीं', value: 'not-sure' }
        ]
      },
      {
        id: 'taxpayer',
        question_en: 'Have you ever been an income tax payer on or after 1st October 2022?',
        question_hi: 'क्या आपने 1 अक्टूबर 2022 को या उसके बाद कभी भी आयकर (Income Tax) दाखिल किया है?',
        isExclusionCheck: true,
        helpText_en: 'As per Ministry of Finance notification, any citizen who is or has been an income tax payer cannot join APY.',
        helpText_hi: 'वित्त मंत्रालय की अधिसूचना के अनुसार आयकरदाता नागरिक एपीवाई में शामिल नहीं हो सकते।',
        options: [
          { label_en: 'No (Never paid income tax)', label_hi: 'नहीं (कभी आयकर नहीं भरा)', value: 'no' },
          { label_en: 'Yes (I am / was an income tax payer)', label_hi: 'हाँ (आयकरदाता हैं/थे)', value: 'yes' },
          { label_en: 'Not sure', label_hi: 'निश्चित नहीं', value: 'not-sure' }
        ]
      }
    ],
    evaluate: (answers) => {
      const { age, bank_account, taxpayer } = answers;
      if (age === 'no' || taxpayer === 'yes') {
        return {
          resultState: 'potentially_not_eligible',
          explanation_en: age === 'no'
            ? 'Atal Pension Yojana operational rules mandate that entry age must be between 18 and 40 years.'
            : 'Effective 1st October 2022, citizens who are or have been income tax payers are legally excluded from enrolling in APY.',
          explanation_hi: age === 'no'
            ? 'अटल पेंशन योजना में शामिल होने की उम्र अनिवार्य रूप से 18 से 40 वर्ष के बीच होनी चाहिए।'
            : '1 अक्टूबर 2022 से प्रभावी नियमों के अनुसार आयकरदाता नागरिक एपीवाई के लिए पात्र नहीं हैं।',
          whatThisMeans_en: 'You do not meet statutory entry parameters for the government-guaranteed APY pension.',
          whatThisMeans_hi: 'आप सरकारी गारंटी वाली एपीवाई पेंशन के वैधानिक मानदंडों को पूरा नहीं करते हैं।',
          nextSteps_en: [
            'If aged 18–70, explore the National Pension System (NPS All Citizen model).',
            'If above 60, explore the Pradhan Mantri Vaya Vandana Yojana or senior savings accounts.'
          ],
          nextSteps_hi: [
            '18-70 वर्ष के नागरिक राष्ट्रीय पेंशन प्रणाली (NPS) में निवेश कर सकते हैं।'
          ]
        };
      }
      if (age === 'not-sure' || bank_account === 'not-sure' || taxpayer === 'not-sure' || bank_account === 'no') {
        return {
          resultState: 'needs_verification',
          explanation_en: bank_account === 'no'
            ? 'An active savings bank or post office account is mandatory to enable auto-debit of monthly contributions.'
            : 'Your date of birth and tax filing status must be validated with your bank branch.',
          explanation_hi: bank_account === 'no'
            ? 'मासिक अंशदान कटने हेतु सक्रिय बचत बैंक खाता होना आवश्यक है।'
            : 'जन्म तिथि और गैर-आयकरदाता प्रमाण पत्र की जांच आवश्यक है।',
          whatThisMeans_en: 'Open a basic savings bank account or verify date of birth with your bank branch.',
          whatThisMeans_hi: 'बैंक खाते में जन्मतिथि की पुष्टि कराएं।',
          nextSteps_en: ['Visit your bank branch with Aadhaar to verify account auto-debit facility.'],
          nextSteps_hi: ['आधार के साथ अपनी बैंक शाखा में जाएं।']
        };
      }
      return {
        resultState: 'potentially_eligible',
        explanation_en: 'Based on your answers, you appear to meet all statutory criteria: aged 18–40, non-taxpayer, and savings account holder.',
        explanation_hi: 'आप सभी शर्तों को पूरा करते हैं: 18-40 वर्ष की आयु, गैर-आयकरदाता और बचत बैंक खाताधारक।',
        whatThisMeans_en: 'Guaranteed lifetime monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 after age 60, guaranteed by the Government of India.',
        whatThisMeans_hi: '60 वर्ष की आयु के बाद ₹1,000 से ₹5,000 तक की आजीवन निश्चित मासिक पेंशन की पात्रता (भारत सरकार द्वारा गारंटीकृत)।',
        nextSteps_en: [
          'Visit your bank branch or use your mobile banking app to register under APY.',
          'Select your preferred pension tier (e.g. ₹5,000/month) and nominee details.'
        ],
        nextSteps_hi: [
          'अपनी बैंक शाखा या नेट बैंकिंग ऐप के माध्यम से APY का फॉर्म भरें।',
          'पेंशन राशि (उदा. ₹5,000/माह) और नॉमिनी का नाम चुनें।'
        ]
      };
    }
  },

  // 9. BIHAR STUDENT CREDIT CARD
  'bihar-student-credit-card': {
    schemeId: 'bihar-student-credit-card',
    schemeSlug: 'bihar-student-credit-card-yojana',
    schemeTitle_en: 'Bihar Student Credit Card Yojana (MNSSBY)',
    schemeTitle_hi: 'बिहार स्टूडेंट क्रेडिट कार्ड योजना (MNSSBY)',
    questions: [
      {
        id: 'residency',
        question_en: 'Are you a permanent resident of Bihar state holding a local domicile / residence proof?',
        question_hi: 'क्या आप बिहार राज्य के स्थायी निवासी हैं और आपके पास निवास प्रमाण पत्र है?',
        options: [
          { label_en: 'Yes (Permanent resident of Bihar)', label_hi: 'हाँ (बिहार के स्थायी निवासी)', value: 'yes' },
          { label_en: 'No (Other state resident)', label_hi: 'नहीं (अन्य राज्य के निवासी)', value: 'no' },
          { label_en: 'Not sure', label_hi: 'निश्चित नहीं', value: 'not-sure' }
        ]
      },
      {
        id: 'passed_12th',
        question_en: 'Have you passed 12th standard (Intermediate) from an institution recognized by Bihar Board (BSEB), CBSE, ICSE, or equivalent?',
        question_hi: 'क्या आपने बिहार बोर्ड, सीबीएसई अथवा समकक्ष बोर्ड से 12वीं (इंटरमीडिएट) उत्तीर्ण की है?',
        options: [
          { label_en: 'Yes (Passed 12th standard)', label_hi: 'हाँ (12वीं उत्तीर्ण हैं)', value: 'yes' },
          { label_en: 'No (Have not passed 12th)', label_hi: 'नहीं (12वीं उत्तीर्ण नहीं हैं)', value: 'no' },
          { label_en: 'Not sure', label_hi: 'निश्चित नहीं', value: 'not-sure' }
        ]
      },
      {
        id: 'age',
        question_en: 'Is your current age 25 years or younger on the date of application?',
        question_hi: 'क्या आवेदन के समय आपकी आयु 25 वर्ष या उससे कम है?',
        options: [
          { label_en: 'Yes (25 years or younger)', label_hi: 'हाँ (25 वर्ष या उससे कम)', value: 'yes' },
          { label_en: 'No (Above 25 years)', label_hi: 'नहीं (25 वर्ष से अधिक)', value: 'no' },
          { label_en: 'Not sure', label_hi: 'निश्चित नहीं', value: 'not-sure' }
        ]
      }
    ],
    evaluate: (answers) => {
      const { residency, passed_12th, age } = answers;
      if (residency === 'no' || passed_12th === 'no' || age === 'no') {
        return {
          resultState: 'potentially_not_eligible',
          explanation_en: residency === 'no'
            ? 'This credit facility is strictly restricted to permanent residents of Bihar.'
            : passed_12th === 'no'
            ? 'Minimum educational qualification is 12th pass (Intermediate).'
            : 'The maximum entry age for Bihar Student Credit Card is 25 years.',
          explanation_hi: residency === 'no'
            ? 'यह योजना केवल बिहार के स्थायी निवासियों के लिए है।'
            : passed_12th === 'no'
            ? 'न्यूनतम शैक्षणिक योग्यता 12वीं पास होना आवश्यक है।'
            : 'आवेदन के समय अधिकतम आयु 25 वर्ष निर्धारित है।',
          whatThisMeans_en: 'One or more statutory criteria for the Bihar Student Credit Card scheme were not satisfied.',
          whatThisMeans_hi: 'योजना के प्रकाशित मानदंडों में से एक या अधिक शर्त पूरी नहीं होती है।',
          nextSteps_en: ['Explore general education loans under the Vidya Lakshmi Portal (vidyalakshmi.co.in).'],
          nextSteps_hi: ['विद्या लक्ष्मी पोर्टल पर सामान्य शिक्षा ऋण का विकल्प देखें।']
        };
      }
      if (residency === 'not-sure' || passed_12th === 'not-sure' || age === 'not-sure') {
        return {
          resultState: 'needs_verification',
          explanation_en: 'Your higher education institute must be NAAC/NIRF recognized or approved by the Bihar State Education Finance Corporation.',
          explanation_hi: 'जिस कॉलेज में आपने दाखिला लिया है, उसकी मान्यता की जांच डीआरसीसी (DRCC) द्वारा की जाएगी।',
          whatThisMeans_en: 'Verification by your District Registration and Counseling Center (DRCC) is required.',
          whatThisMeans_hi: 'जिला निबंधन एवं परामर्श केंद्र (DRCC) द्वारा सत्यापन आवश्यक है।',
          nextSteps_en: ['Visit your District DRCC office with your college admission offer letter.'],
          nextSteps_hi: ['कॉलेज नामांकन पत्र के साथ अपने जिले के डीआरसीसी केंद्र जाएं।']
        };
      }
      return {
        resultState: 'potentially_eligible',
        explanation_en: 'Based on your answers, you appear to meet all primary criteria: Bihar resident under 25 with 12th pass qualification.',
        explanation_hi: 'आप सभी मुख्य मानदंडों को पूरा करते हैं: बिहार के निवासी, 25 वर्ष से कम आयु और 12वीं उत्तीर्ण।',
        whatThisMeans_en: 'Entitlement to an education loan of up to ₹4 Lakh at a highly subsidized 4% simple interest (1% for women, PwD, and transgender students) with zero collateral and government guarantee.',
        whatThisMeans_hi: 'बिना किसी गारंटी के ₹4 लाख तक का शिक्षा ऋण 4% साधारण ब्याज पर (महिलाओं/दिव्यांगों हेतु केवल 1% ब्याज) पाने की पात्रता।',
        nextSteps_en: [
          'Register on the 7 Nishchay portal (7nishchay-yuvaupmission.bihar.gov.in).',
          'Book an appointment at your home district DRCC center for document verification.'
        ],
        nextSteps_hi: [
          '7nishchay-yuvaupmission.bihar.gov.in पर ऑनलाइन आवेदन करें।',
          'डीआरसीसी केंद्र पर दस्तावेज सत्यापन हेतु समय बुक करें।'
        ]
      };
    }
  },

  // 10. MGNREGA Job Card
  'mgnrega-job-card': {
    schemeId: 'mgnrega-job-card',
    schemeSlug: 'mgnrega-job-card-list-online-apply',
    schemeTitle_en: 'MGNREGA Job Card',
    schemeTitle_hi: 'मनरेगा जॉब कार्ड (NREGA)',
    questions: [
      {
        id: 'rural_residence',
        question_en: 'Do you or your household permanently reside in a rural area under a Gram Panchayat jurisdiction?',
        question_hi: 'क्या आप या आपका परिवार किसी ग्राम पंचायत के अंतर्गत ग्रामीण क्षेत्र में स्थायी रूप से निवास करते हैं?',
        helpText_en: 'MGNREGA is a rural employment act. Urban municipal residents are not covered by this scheme.',
        helpText_hi: 'मनरेगा केवल ग्रामीण क्षेत्रों के लिए है। नगर निगम या नगर पालिका के शहरी निवासी इसके पात्र नहीं हैं।',
        options: [
          { label_en: 'Yes (We live in a rural Gram Panchayat village)', label_hi: 'हाँ (हम ग्रामीण ग्राम पंचायत में रहते हैं)', value: 'yes' },
          { label_en: 'No (We reside in an urban / municipal area)', label_hi: 'नहीं (हम नगर निगम/शहरी क्षेत्र में रहते हैं)', value: 'no' },
          { label_en: 'Not sure of municipal boundary status', label_hi: 'निश्चित नहीं (पंचायत या नगर परिषद सीमा की स्पष्ट जानकारी नहीं)', value: 'not-sure' }
        ]
      },
      {
        id: 'adult_age',
        question_en: 'Are the family members applying for the Job Card at least 18 years of age or older?',
        question_hi: 'क्या जॉब कार्ड में नाम दर्ज कराने वाले आवेदक परिवार के सदस्य 18 वर्ष या उससे अधिक आयु के हैं?',
        helpText_en: 'Under the MGNREGA Act, only adult members (18+) can be registered and assigned wage work.',
        helpText_hi: 'मनरेगा कानून के अनुसार केवल 18 वर्ष या उससे अधिक आयु के वयस्क सदस्यों का ही पंजीकरण हो सकता है।',
        options: [
          { label_en: 'Yes (Applying members are 18 years or older)', label_hi: 'हाँ (आवेदक सदस्यों की उम्र 18 वर्ष या अधिक है)', value: 'yes' },
          { label_en: 'No (Applicant is under 18 years of age)', label_hi: 'नहीं (आवेदक की आयु 18 वर्ष से कम है)', value: 'no' },
          { label_en: 'Not sure / Date of birth proof pending', label_hi: 'निश्चित नहीं / जन्म प्रमाण पत्र या आधार में उम्र सत्यापन बाकी', value: 'not-sure' }
        ]
      },
      {
        id: 'unskilled_work',
        question_en: 'Are adult household members willing to undertake unskilled manual physical work for rural development projects?',
        question_hi: 'क्या वयस्क सदस्य ग्रामीण सार्वजनिक निर्माण कार्यों में अकुशल शारीरिक श्रम (मैनुअल लेबर) करने के इच्छुक हैं?',
        helpText_en: 'The scheme provides legal guarantee exclusively for unskilled manual physical work (e.g. water conservation, earth digging, road works).',
        helpText_hi: 'मनरेगा में तालाब खुदाई, जल संरक्षण, सड़क निर्माण जैसे अकुशल शारीरिक श्रम की कानूनी गारंटी दी जाती है।',
        options: [
          { label_en: 'Yes (Willing to do manual physical labor)', label_hi: 'हाँ (शारीरिक श्रम/मैनुअल काम करने के लिए तैयार हैं)', value: 'yes' },
          { label_en: 'No (Looking only for clerical, office or skilled work)', label_hi: 'नहीं (केवल ऑफिस, क्लर्क या कुशल कार्य की तलाश है)', value: 'no' },
          { label_en: 'Not sure about the nature of work', label_hi: 'निश्चित नहीं (काम के प्रकार को लेकर संशय है)', value: 'not-sure' }
        ]
      }
    ],
    evaluate: (answers) => {
      const { rural_residence, adult_age, unskilled_work } = answers;

      if (rural_residence === 'no' || adult_age === 'no' || unskilled_work === 'no') {
        let reason_en = '';
        let reason_hi = '';

        if (rural_residence === 'no') {
          reason_en = 'You indicated that you reside in an urban or municipal area. The MGNREGA scheme legally covers only rural households under Gram Panchayat jurisdiction.';
          reason_hi = 'आपने संकेत दिया कि आप शहरी क्षेत्र में रहते हैं। मनरेगा कानून केवल ग्राम पंचायत के ग्रामीण परिवारों पर लागू होता है।';
        } else if (adult_age === 'no') {
          reason_en = 'You indicated that the applicant is under 18 years of age. Under the MGNREGA Act 2005, only adult individuals aged 18+ can be registered for wage labor.';
          reason_hi = 'आपने संकेत दिया कि आवेदक 18 वर्ष से कम आयु का है। मनरेगा कानून के तहत केवल 18 वर्ष या उससे अधिक आयु के वयस्क ही काम कर सकते हैं।';
        } else {
          reason_en = 'You indicated that household members are unwilling to do unskilled manual physical labor. MGNREGA is designed exclusively for unskilled manual public works.';
          reason_hi = 'आपने संकेत दिया कि आप अकुशल शारीरिक श्रम करने के इच्छुक नहीं हैं। मनरेगा केवल अकुशल मैनुअल शारीरिक कार्यों हेतु कानूनी गारंटी देता है।';
        }

        return {
          resultState: 'potentially_not_eligible',
          explanation_en: reason_en,
          explanation_hi: reason_hi,
          whatThisMeans_en: 'Statutory criteria under the MGNREGA Act 2005 require rural residency, adult age (18+), and willingness to perform unskilled manual physical labor.',
          whatThisMeans_hi: 'मनरेगा अधिनियम 2005 के अनुसार ग्रामीण निवास, 18+ वर्ष वयस्क आयु और अकुशल शारीरिक श्रम करने की तत्परता अनिवार्य कानूनी शर्तें हैं।',
          nextSteps_en: [
            'If you live in an urban municipality, explore urban employment guarantee schemes in your state or PM SVANidhi.',
            'If you seek skilled or office employment, explore PM Internship Scheme or Skill India Mission training programs.'
          ],
          nextSteps_hi: [
            'यदि आप शहरी क्षेत्र में हैं, तो अपने राज्य की शहरी रोजगार गारंटी योजना अथवा पीएम स्वनिधि का लाभ उठाएं।',
            'यदि आप कुशल कार्य या ऑफिस जॉब चाहते हैं, तो पीएम इंटर्नशिप स्कीम या स्किल इंडिया मिशन के प्रशिक्षण कार्यक्रमों का अन्वेषण करें।'
          ]
        };
      }

      if (rural_residence === 'not-sure' || adult_age === 'not-sure' || unskilled_work === 'not-sure') {
        return {
          resultState: 'needs_verification',
          explanation_en: 'Some of your answers require local Gram Panchayat verification, especially your rural voter/ration card registration and age proof (Aadhaar).',
          explanation_hi: 'आपके कुछ उत्तरों के लिए ग्राम पंचायत स्तर पर सत्यापन आवश्यक है, विशेषकर ग्रामीण निवास प्रमाण और आधार कार्ड में दर्ज आयु।',
          whatThisMeans_en: 'You may meet basic requirements, but the Gram Panchayat must verify your rural residence and biometric Aadhaar status before issuing a Job Card.',
          whatThisMeans_hi: 'आप बुनियादी मानदंडों को पूरा कर सकते हैं, परंतु ग्राम पंचायत और ग्राम रोजगार सहायक द्वारा भौतिक व आधार सत्यापन आवश्यक है।',
          nextSteps_en: [
            'Visit your local Gram Panchayat office or meet your Gram Rozgar Sahayak (GRS).',
            'Take your Aadhaar Card, Ration Card, and bank account passbook for on-the-spot verification.'
          ],
          nextSteps_hi: [
            'अपनी ग्राम पंचायत कार्यालय जाएं अथवा ग्राम रोजगार सहायक (GRS) से संपर्क करें।',
            'आधार कार्ड, राशन कार्ड और बैंक पासबुक लेकर जाएं ताकि मौके पर सत्यापन हो सके।'
          ]
        };
      }

      return {
        resultState: 'potentially_eligible',
        explanation_en: 'You satisfy all primary statutory requirements for MGNREGA: adult rural resident (18+) willing to do manual physical work.',
        explanation_hi: 'आप मनरेगा के सभी प्राथमिक कानूनी मानदंडों को पूरा करते हैं: 18+ वयस्क, ग्रामीण पंचायत निवासी और शारीरिक श्रम करने के इच्छुक।',
        whatThisMeans_en: 'Your rural household is legally entitled to a Job Card within 15 days of Form 4 submission, and 100 days of guaranteed wage employment every financial year.',
        whatThisMeans_hi: 'आवेदन (फॉर्म 4) जमा करने के 15 दिनों के भीतर आपके परिवार को मनरेगा जॉब कार्ड पाने और प्रति वर्ष 100 दिनों के गारंटी रोजगार का कानूनी अधिकार है।',
        nextSteps_en: [
          'Submit Form 4 (free of cost) at your local Gram Panchayat office with Aadhaar and photos of all adult members.',
          'Once your Job Card is issued, submit Form 6 to demand work; if work is not given in 15 days, you are legally entitled to Unemployment Allowance.'
        ],
        nextSteps_hi: [
          'अपनी ग्राम पंचायत में सभी वयस्क सदस्यों के आधार व फोटो के साथ फॉर्म-4 (निःशुल्क) भरकर जमा करें।',
          'जॉब कार्ड जारी होने के बाद काम की मांग हेतु फॉर्म-6 जमा करें; 15 दिनों में काम न मिलने पर आप बेरोजगारी भत्ता पाने के हकदार होंगे।'
        ]
      };
    }
  }
};

export function getSchemeEligibilityConfig(schemeIdOrSlug: string): SchemeEligibilityConfig | undefined {
  if (SCHEME_ELIGIBILITY_CONFIGS[schemeIdOrSlug]) {
    return SCHEME_ELIGIBILITY_CONFIGS[schemeIdOrSlug];
  }
  return Object.values(SCHEME_ELIGIBILITY_CONFIGS).find(c => c.schemeSlug === schemeIdOrSlug);
}

export function evaluateSchemeEligibility(
  scheme: Scheme,
  answers: Record<string, EligibilityAnswerValue>
): EligibilityEvaluation {
  const config = getSchemeEligibilityConfig(scheme.id);
  const officialSource = scheme.officialSources[0] || {
    name: 'Official Government Portal',
    authority: 'Competent Authority',
    url: 'https://india.gov.in',
    verificationDate: scheme.lastVerified
  };

  if (!config) {
    // Generic fallback for any other scheme
    const hasUncertain = Object.values(answers).some(a => a === 'not-sure');
    const hasNo = Object.values(answers).some(a => a === 'no');

    if (hasNo) {
      return {
        schemeId: scheme.id,
        schemeTitle_en: scheme.title_en,
        schemeTitle_hi: scheme.title_hi,
        schemeSlug: scheme.slug,
        resultState: 'potentially_not_eligible',
        headline_en: 'You May Not Meet One or More Listed Criteria',
        headline_hi: 'संभवतः आप एक या अधिक सूचीबद्ध मानदंडों को पूरा नहीं करते हैं',
        explanation_en: 'Based on your answers, one or more evaluated conditions do not align with the published guidelines for this scheme.',
        explanation_hi: 'आपके उत्तरों के अनुसार इस योजना के लिए प्रकाशित कुछ आवश्यक शर्तें पूरी नहीं होती प्रतीत होती हैं।',
        whatThisMeans_en: 'Government authorities make the final binding decision upon reviewing official documents.',
        whatThisMeans_hi: 'अंतिम पात्रता का निर्णय संबंधित सरकारी विभाग द्वारा अभिलेखों के सत्यापन के पश्चात ही मान्य होता है।',
        nextSteps_en: [
          'Review the complete criteria on the official portal.',
          'Explore other welfare schemes in the same category.'
        ],
        nextSteps_hi: [
          'आधिकारिक पोर्टल पर संपूर्ण नियम पढ़ें।',
          'समान श्रेणी की अन्य योजनाओं का अन्वेषण करें।'
        ],
        officialSource
      };
    }

    if (hasUncertain) {
      return {
        schemeId: scheme.id,
        schemeTitle_en: scheme.title_en,
        schemeTitle_hi: scheme.title_hi,
        schemeSlug: scheme.slug,
        resultState: 'needs_verification',
        headline_en: 'More Information or Official Verification Is Needed',
        headline_hi: 'अधिक जानकारी या आधिकारिक सत्यापन आवश्यक है',
        explanation_en: 'One or more of your responses were uncertain. Official record verification is required.',
        explanation_hi: 'कुछ प्रश्नों के उत्तर में संशय होने के कारण आधिकारिक रिकॉर्ड की जांच आवश्यक है।',
        whatThisMeans_en: 'You may meet basic parameters, but statutory proof must be authenticated by competent officers.',
        whatThisMeans_hi: 'आप बुनियादी मानदंडों को पूरा कर सकते हैं, परंतु सरकारी अधिकारी द्वारा दस्तावेजों का सत्यापन आवश्यक है।',
        nextSteps_en: [
          'Prepare required identity and income/category documents.',
          'Contact the designated departmental helpline or nearest CSC.'
        ],
        nextSteps_hi: [
          'पहचान एवं आय/श्रेणी संबंधी प्रमाण पत्र तैयार रखें।',
          'संबंधित विभाग के हेल्पडेस्क या नजदीकी ग्राहक सेवा केंद्र से संपर्क करें।'
        ],
        officialSource
      };
    }

    return {
      schemeId: scheme.id,
      schemeTitle_en: scheme.title_en,
      schemeTitle_hi: scheme.title_hi,
      schemeSlug: scheme.slug,
      resultState: 'potentially_eligible',
      headline_en: 'You May Meet the Listed Eligibility Criteria',
      headline_hi: 'आप बुनियादी सूचीबद्ध मानदंडों को पूरा करते प्रतीत होते हैं',
      explanation_en: 'Based on your answers, you appear to satisfy the primary published criteria evaluated by this tool.',
      explanation_hi: 'आपके उत्तरों के अनुसार आप इस योजना के प्राथमिक प्रकाशित मानदंडों को पूरा करते हैं।',
      whatThisMeans_en: 'This evaluation provides general guidance and is not an official approval or enrollment guarantee.',
      whatThisMeans_hi: 'यह मूल्यांकन सामान्य मार्गदर्शन हेतु है। अंतिम स्वीकृति सक्षम सरकारी अधिकारी द्वारा दी जाती है।',
      nextSteps_en: [
        'Review the required documents checklist for this scheme.',
        'Proceed to the official government portal to apply.'
      ],
      nextSteps_hi: [
        'आवश्यक दस्तावेजों की सूची जांचें।',
        'आधिकारिक सरकारी पोर्टल पर जाकर ऑनलाइन आवेदन करें।'
      ],
      officialSource
    };
  }

  const evalResult = config.evaluate(answers);

  const headline_en = evalResult.resultState === 'potentially_eligible'
    ? 'You May Meet the Listed Eligibility Criteria'
    : evalResult.resultState === 'needs_verification'
    ? 'More Information or Official Verification Is Needed'
    : 'You May Not Meet One or More Listed Criteria';

  const headline_hi = evalResult.resultState === 'potentially_eligible'
    ? 'आप बुनियादी सूचीबद्ध मानदंडों को पूरा करते प्रतीत होते हैं'
    : evalResult.resultState === 'needs_verification'
    ? 'अधिक जानकारी या आधिकारिक सत्यापन आवश्यक है'
    : 'संभवतः आप एक या अधिक सूचीबद्ध मानदंडों को पूरा नहीं करते हैं';

  return {
    schemeId: scheme.id,
    schemeTitle_en: scheme.title_en,
    schemeTitle_hi: scheme.title_hi,
    schemeSlug: scheme.slug,
    resultState: evalResult.resultState,
    headline_en,
    headline_hi,
    explanation_en: evalResult.explanation_en,
    explanation_hi: evalResult.explanation_hi,
    whatThisMeans_en: evalResult.whatThisMeans_en,
    whatThisMeans_hi: evalResult.whatThisMeans_hi,
    nextSteps_en: evalResult.nextSteps_en,
    nextSteps_hi: evalResult.nextSteps_hi,
    officialSource
  };
}
