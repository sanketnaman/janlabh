import { SchemeState, EligibilityResult } from '@/types';
import { SCHEMES } from '@/data/schemes';

export interface UserEligibilityInput {
  state: SchemeState | 'other';
  ageGroup: 'under-18' | '18-25' | '26-45' | '46-59' | '60-69' | '70-plus';
  primaryIdentity: 'farmer' | 'woman' | 'student' | 'artisan' | 'worker-other';
  incomeBracket: 'under-1-lakh' | '1-to-2.5-lakh' | '2.5-to-8-lakh' | 'above-8-lakh-taxpayer';
  housingType: 'kutcha-dilapidated' | 'pucca-house';
  hasCultivableLand: 'yes' | 'no';
}

export function evaluateEligibility(input: UserEligibilityInput): EligibilityResult[] {
  const results: EligibilityResult[] = [];
  const isTaxpayer = input.incomeBracket === 'above-8-lakh-taxpayer';
  const isLowIncome = input.incomeBracket === 'under-1-lakh' || input.incomeBracket === '1-to-2.5-lakh';

  // 1. PM-Kisan Evaluation
  const pmKisan = SCHEMES.find(s => s.id === 'pm-kisan');
  if (pmKisan) {
    if (isTaxpayer) {
      results.push({
        schemeId: pmKisan.id,
        schemeTitle: pmKisan.shortTitle_en,
        schemeSlug: pmKisan.slug,
        rating: 'unlikely',
        reason_en: 'Income tax payers and institutional landholders are excluded from PM-Kisan.',
        reason_hi: 'आयकर देने वाले व्यक्ति पीएम किसान सम्मान निधि के नियमों के अनुसार अपात्र हैं।',
        benefit_en: pmKisan.benefitAmount_en,
        benefit_hi: pmKisan.benefitAmount_hi,
        officialUrl: 'https://pmkisan.gov.in'
      });
    } else if (input.hasCultivableLand === 'yes') {
      results.push({
        schemeId: pmKisan.id,
        schemeTitle: pmKisan.shortTitle_en,
        schemeSlug: pmKisan.slug,
        rating: 'eligible',
        reason_en: 'You hold agricultural land and meet the basic non-taxpayer criteria.',
        reason_hi: 'आपके पास कृषि भूमि है और आप गैर-आयकरदाता श्रेणी में आते हैं।',
        benefit_en: pmKisan.benefitAmount_en,
        benefit_hi: pmKisan.benefitAmount_hi,
        officialUrl: 'https://pmkisan.gov.in'
      });
    } else {
      results.push({
        schemeId: pmKisan.id,
        schemeTitle: pmKisan.shortTitle_en,
        schemeSlug: pmKisan.slug,
        rating: 'unlikely',
        reason_en: 'Cultivable agricultural land in revenue records is mandatory for PM-Kisan.',
        reason_hi: 'पीएम किसान के लिए राजस्व रिकॉर्ड में कृषि योग्य भूमि का होना अनिवार्य है।',
        benefit_en: pmKisan.benefitAmount_en,
        benefit_hi: pmKisan.benefitAmount_hi,
        officialUrl: 'https://pmkisan.gov.in'
      });
    }
  }

  // 2. Ayushman Bharat Evaluation
  const ayushman = SCHEMES.find(s => s.id === 'ayushman-bharat');
  if (ayushman) {
    if (input.ageGroup === '70-plus') {
      results.push({
        schemeId: ayushman.id,
        schemeTitle: 'Ayushman Vaya Vandana Card (70+ Senior)',
        schemeSlug: ayushman.slug,
        rating: 'eligible',
        reason_en: 'All citizens aged 70 and above qualify for free ₹5 Lakh cover without any income cap.',
        reason_hi: '70 वर्ष या उससे अधिक आयु के सभी नागरिक बिना किसी आय सीमा के ₹5 लाख के मुफ्त कवर हेतु पात्र हैं।',
        benefit_en: '₹5 Lakh free health cover per year',
        benefit_hi: '₹5 लाख प्रति वर्ष मुफ्त अस्पताल इलाज',
        officialUrl: 'https://beneficiary.nha.gov.in'
      });
    } else if (isLowIncome || input.housingType === 'kutcha-dilapidated') {
      results.push({
        schemeId: ayushman.id,
        schemeTitle: ayushman.shortTitle_en,
        schemeSlug: ayushman.slug,
        rating: 'verify',
        reason_en: 'May qualify under SECC 2011 / State Priority Ration Card criteria.',
        reason_hi: 'राशन कार्ड या सामाजिक-आर्थिक गणना में नाम होने पर आप पात्र हो सकते हैं।',
        benefit_en: ayushman.benefitAmount_en,
        benefit_hi: ayushman.benefitAmount_hi,
        officialUrl: 'https://beneficiary.nha.gov.in'
      });
    } else {
      results.push({
        schemeId: ayushman.id,
        schemeTitle: ayushman.shortTitle_en,
        schemeSlug: ayushman.slug,
        rating: 'unlikely',
        reason_en: 'General family quota requires inclusion in SECC 2011 or Priority Ration Card lists.',
        reason_hi: 'सामान्य कोटे के लिए राशन कार्ड अथवा एसईसीसी 2011 सूची में नाम होना आवश्यक है।',
        benefit_en: ayushman.benefitAmount_en,
        benefit_hi: ayushman.benefitAmount_hi,
        officialUrl: 'https://beneficiary.nha.gov.in'
      });
    }
  }

  // 3. Jharkhand Maiya Samman Yojana Evaluation
  const maiya = SCHEMES.find(s => s.id === 'jharkhand-maiya-samman');
  if (maiya) {
    const isJharkhandResident = input.state === 'jharkhand';
    const isWoman = input.primaryIdentity === 'woman';
    const isAgeEligible = input.ageGroup === '18-25' || input.ageGroup === '26-45' || input.ageGroup === '46-59';

    if (isJharkhandResident && isWoman && isAgeEligible && !isTaxpayer) {
      results.push({
        schemeId: maiya.id,
        schemeTitle: maiya.shortTitle_en,
        schemeSlug: maiya.slug,
        rating: 'eligible',
        reason_en: 'You are a woman resident of Jharkhand aged 18–50 from a non-taxpayer household.',
        reason_hi: 'आप झारखंड की 18 से 50 वर्ष की महिला हैं और परिवार गैर-आयकरदाता श्रेणी में है।',
        benefit_en: maiya.benefitAmount_en,
        benefit_hi: maiya.benefitAmount_hi,
        officialUrl: 'https://jharkhand.gov.in'
      });
    } else if (!isJharkhandResident && isWoman) {
      results.push({
        schemeId: maiya.id,
        schemeTitle: maiya.shortTitle_en,
        schemeSlug: maiya.slug,
        rating: 'unlikely',
        reason_en: 'This program is exclusive to permanent residents of Jharkhand state.',
        reason_hi: 'यह योजना विशेष रूप से झारखंड राज्य के स्थायी निवासियों के लिए है।',
        benefit_en: maiya.benefitAmount_en,
        benefit_hi: maiya.benefitAmount_hi,
        officialUrl: 'https://jharkhand.gov.in'
      });
    }
  }

  // 4. PM Vishwakarma Evaluation
  const vishwakarma = SCHEMES.find(s => s.id === 'pm-vishwakarma');
  if (vishwakarma) {
    const isArtisan = input.primaryIdentity === 'artisan';
    const isAdult = input.ageGroup !== 'under-18';
    if (isArtisan && isAdult && !isTaxpayer) {
      results.push({
        schemeId: vishwakarma.id,
        schemeTitle: vishwakarma.shortTitle_en,
        schemeSlug: vishwakarma.slug,
        rating: 'eligible',
        reason_en: 'Engaged in traditional craft/artisan trade with age above 18 and non-taxpayer status.',
        reason_hi: '18 वर्ष से अधिक आयु और पारंपरिक कारीगरी से जुड़े होने पर आप इस योजना के पात्र हैं।',
        benefit_en: vishwakarma.benefitAmount_en,
        benefit_hi: vishwakarma.benefitAmount_hi,
        officialUrl: 'https://pmvishwakarma.gov.in'
      });
    } else if (isArtisan && isTaxpayer) {
      results.push({
        schemeId: vishwakarma.id,
        schemeTitle: vishwakarma.shortTitle_en,
        schemeSlug: vishwakarma.slug,
        rating: 'verify',
        reason_en: 'Requires verification of family income and previous enterprise loan status.',
        reason_hi: 'पारिवारिक आय व पूर्व व्यावसायिक लोन की जांच आवश्यक है।',
        benefit_en: vishwakarma.benefitAmount_en,
        benefit_hi: vishwakarma.benefitAmount_hi,
        officialUrl: 'https://pmvishwakarma.gov.in'
      });
    }
  }

  // 5. PM Awas Yojana & Abua Awas Evaluation
  const pmAwas = SCHEMES.find(s => s.id === 'pm-awas-yojana');
  if (pmAwas) {
    if (input.housingType === 'kutcha-dilapidated' && !isTaxpayer) {
      results.push({
        schemeId: pmAwas.id,
        schemeTitle: pmAwas.shortTitle_en,
        schemeSlug: pmAwas.slug,
        rating: 'eligible',
        reason_en: 'Living in a kutcha house with no pucca property and non-taxpayer status.',
        reason_hi: 'कच्चे मकान में निवास और परिवार में कोई सरकारी सेवा/पक्का मकान न होना।',
        benefit_en: pmAwas.benefitAmount_en,
        benefit_hi: pmAwas.benefitAmount_hi,
        officialUrl: 'https://pmayg.nic.in'
      });
    } else if (input.housingType === 'pucca-house') {
      results.push({
        schemeId: pmAwas.id,
        schemeTitle: pmAwas.shortTitle_en,
        schemeSlug: pmAwas.slug,
        rating: 'unlikely',
        reason_en: 'Families owning a permanent pucca house are excluded from rural housing grants.',
        reason_hi: 'जिनके पास पहले से पक्का मकान उपलब्ध है, वे इस योजना के लिए अपात्र हैं।',
        benefit_en: pmAwas.benefitAmount_en,
        benefit_hi: pmAwas.benefitAmount_hi,
        officialUrl: 'https://pmayg.nic.in'
      });
    }
  }

  const abuaAwas = SCHEMES.find(s => s.id === 'jharkhand-abua-awas');
  if (abuaAwas && input.state === 'jharkhand') {
    if (input.housingType === 'kutcha-dilapidated' && !isTaxpayer) {
      results.push({
        schemeId: abuaAwas.id,
        schemeTitle: abuaAwas.shortTitle_en,
        schemeSlug: abuaAwas.slug,
        rating: 'eligible',
        reason_en: 'Jharkhand resident residing in kutcha home without prior PMAY grant.',
        reason_hi: 'झारखंड में कच्चे मकान में रहने वाले और पूर्व में आवास लाभ से वंचित परिवार पात्र हैं।',
        benefit_en: abuaAwas.benefitAmount_en,
        benefit_hi: abuaAwas.benefitAmount_hi,
        officialUrl: 'https://jharkhand.gov.in'
      });
    }
  }

  // 6. National Scholarship Portal (NSP)
  const nsp = SCHEMES.find(s => s.id === 'national-scholarship-portal');
  if (nsp) {
    const isStudent = input.primaryIdentity === 'student';
    if (isStudent && isLowIncome) {
      results.push({
        schemeId: nsp.id,
        schemeTitle: nsp.shortTitle_en,
        schemeSlug: nsp.slug,
        rating: 'eligible',
        reason_en: 'Enrolled student with family annual income within scholarship limits (≤ ₹2.5 Lakh).',
        reason_hi: 'छात्र जिनका पारिवारिक आय प्रमाण पत्र छात्रवृत्ति सीमा (₹2.5 लाख तक) के अंतर्गत है।',
        benefit_en: nsp.benefitAmount_en,
        benefit_hi: nsp.benefitAmount_hi,
        officialUrl: 'https://scholarships.gov.in'
      });
    } else if (isStudent && !isLowIncome) {
      results.push({
        schemeId: nsp.id,
        schemeTitle: nsp.shortTitle_en,
        schemeSlug: nsp.slug,
        rating: 'verify',
        reason_en: 'Merit-based scholarships available subject to 80th percentile board marks.',
        reason_hi: 'बोर्ड परीक्षा में शीर्ष 80th पर्सेन्टाइल अंक होने पर मेरिट छात्रवृत्ति मिल सकती है।',
        benefit_en: nsp.benefitAmount_en,
        benefit_hi: nsp.benefitAmount_hi,
        officialUrl: 'https://scholarships.gov.in'
      });
    }
  }

  // 7. Bihar Student Credit Card
  const bscc = SCHEMES.find(s => s.id === 'bihar-student-credit-card');
  if (bscc && input.state === 'bihar') {
    const isStudentOrYoung = input.primaryIdentity === 'student' || input.ageGroup === '18-25';
    if (isStudentOrYoung) {
      results.push({
        schemeId: bscc.id,
        schemeTitle: bscc.shortTitle_en,
        schemeSlug: bscc.slug,
        rating: 'eligible',
        reason_en: 'Bihar resident under 25 years planning or pursuing higher education.',
        reason_hi: 'बिहार के 25 वर्ष से कम आयु के छात्र जो उच्च शिक्षा प्राप्त कर रहे हैं।',
        benefit_en: bscc.benefitAmount_en,
        benefit_hi: bscc.benefitAmount_hi,
        officialUrl: 'https://www.7nishchay-yuvaupmission.bihar.gov.in'
      });
    }
  }

  // 8. Atal Pension Yojana
  const apy = SCHEMES.find(s => s.id === 'atal-pension-yojana');
  if (apy) {
    const isAgeInRange = input.ageGroup === '18-25' || input.ageGroup === '26-45';
    if (isAgeInRange && !isTaxpayer) {
      results.push({
        schemeId: apy.id,
        schemeTitle: apy.shortTitle_en,
        schemeSlug: apy.slug,
        rating: 'eligible',
        reason_en: 'Aged between 18 and 40 years, non-taxpayer with active savings bank account.',
        reason_hi: '18 से 40 वर्ष की आयु, गैर-आयकरदाता व बचत बैंक खाताधारक होने पर पूर्ण पात्र।',
        benefit_en: apy.benefitAmount_en,
        benefit_hi: apy.benefitAmount_hi,
        officialUrl: 'https://www.npscra.nsdl.co.in'
      });
    } else if (isTaxpayer || input.ageGroup === '46-59' || input.ageGroup === '60-69' || input.ageGroup === '70-plus') {
      results.push({
        schemeId: apy.id,
        schemeTitle: apy.shortTitle_en,
        schemeSlug: apy.slug,
        rating: 'unlikely',
        reason_en: 'APY entry age is strictly capped between 18 and 40 years; taxpayers are excluded.',
        reason_hi: 'एपीवाई में प्रवेश की अधिकतम उम्र 40 वर्ष है और आयकरदाता इसमें शामिल नहीं हो सकते।',
        benefit_en: apy.benefitAmount_en,
        benefit_hi: apy.benefitAmount_hi,
        officialUrl: 'https://www.npscra.nsdl.co.in'
      });
    }
  }

  return results;
}
