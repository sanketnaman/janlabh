import { Scheme, SchemeFinderInput, SchemeFinderRecommendation } from '@/types';
import { SCHEMES } from '@/data/schemes';

export function findRelevantSchemes(input: SchemeFinderInput): SchemeFinderRecommendation[] {
  const recommendations: SchemeFinderRecommendation[] = [];
  const selectedInterests = input.interests || [];

  for (const scheme of SCHEMES) {
    let score = 0;
    const reasons_en: string[] = [];
    const reasons_hi: string[] = [];
    const isStateMatch = scheme.state === input.state;
    const isCentral = scheme.state === 'all-india';

    // Must be either all-india or matching user state
    if (!isCentral && !isStateMatch) {
      continue;
    }

    if (isStateMatch && !isCentral) {
      score += 40;
      reasons_en.push(`Flagship program for residents of ${scheme.stateLabel_en}`);
      reasons_hi[`push`](`${scheme.stateLabel_hi} के निवासियों के लिए विशेष राज्य योजना`);
    }

    // Identity match
    if (input.identity === 'farmer' && (scheme.category === 'farmers' || scheme.id === 'pm-kisan')) {
      score += 50;
      reasons_en.push('You indicated that you are involved in agriculture/farming');
      reasons_hi.push('आपने संकेत दिया कि आप कृषि/खेती से जुड़े हैं');
    }

    if (input.identity === 'student' && (scheme.category === 'students' || scheme.category === 'scholarships' || scheme.id === 'national-scholarship-portal' || scheme.id === 'bihar-student-credit-card')) {
      score += 50;
      reasons_en.push('You indicated that you are a student or pursuing education');
      reasons_hi.push('आपने संकेत दिया कि आप छात्र हैं अथवा उच्च शिक्षा में अध्ययनरत हैं');
    }

    if (input.identity === 'homemaker' && (scheme.category === 'women' || scheme.id === 'jharkhand-maiya-samman')) {
      score += 45;
      reasons_en.push('Dedicated to empowering women and female household heads');
      reasons_hi.push('महिलाओं व गृहणियों के आर्थिक सशक्तिकरण हेतु समर्पित');
    }

    if ((input.identity === 'senior' || input.ageGroup === '60-plus') && (scheme.category === 'health' || scheme.id === 'ayushman-bharat')) {
      score += 45;
      reasons_en.push('Senior citizens receive high-priority universal health coverage (Ayushman 70+)');
      reasons_hi.push('वरिष्ठ नागरिकों हेतु उच्च प्राथमिकता मुफ्त स्वास्थ्य सुरक्षा');
    }

    if (input.identity === 'self-employed' && scheme.id === 'pm-vishwakarma') {
      score += 40;
      reasons_en.push('Designed for traditional artisans, craftspersons, and micro-entrepreneurs');
      reasons_hi.push('पारंपरिक कारीगरों और सूक्ष्म उद्यमियों के लिए तैयार की गई योजना');
    }

    // Age suitability
    if (input.ageGroup === '18-25' && scheme.id === 'bihar-student-credit-card' && isStateMatch) {
      score += 30;
      reasons_en.push('Targeted for young adults under 25 pursuing higher professional education');
      reasons_hi.push('25 वर्ष से कम उम्र के युवाओं की उच्च शिक्षा हेतु विशेष ऋण योजना');
    }

    if ((input.ageGroup === '18-25' || input.ageGroup === '26-40') && scheme.id === 'atal-pension-yojana') {
      score += 30;
      reasons_en.push('Ideal entry age (18–40) to build a guaranteed lifetime government pension');
      reasons_hi.push('सरकारी गारंटी वाली आजीवन पेंशन निर्माण हेतु आदर्श आयु वर्ग (18-40 वर्ष)');
    }

    // Interests match
    if (selectedInterests.includes('farming') && scheme.category === 'farmers') {
      score += 25;
      reasons_en.push('Matches your interest in farming and agricultural assistance');
      reasons_hi.push('कृषि सहायता और किसान कल्याण में आपकी रुचि से मेल खाता है');
    }

    if (selectedInterests.includes('education') && (scheme.category === 'students' || scheme.category === 'scholarships')) {
      score += 25;
      reasons_en.push('Matches your interest in scholarships and education finance');
      reasons_hi.push('छात्रवृत्ति व शिक्षा वित्त में आपकी रुचि से मेल खाता है');
    }

    if (selectedInterests.includes('healthcare') && scheme.category === 'health') {
      score += 25;
      reasons_en.push('Matches your interest in healthcare and hospital hospitalization cover');
      reasons_hi.push('कैशलेस स्वास्थ्य व अस्पताल इलाज सुरक्षा में आपकी रुचि से मेल खाता है');
    }

    if (selectedInterests.includes('housing') && scheme.category === 'housing') {
      score += 25;
      reasons_en.push('Matches your interest in housing grants for permanent pucca home construction');
      reasons_hi.push('पक्के मकान निर्माण व आवास सहायता में आपकी रुचि से मेल खाता है');
    }

    if (selectedInterests.includes('pension') && scheme.category === 'pension') {
      score += 25;
      reasons_en.push('Matches your interest in social security and retirement pension');
      reasons_hi.push('सामाजिक सुरक्षा व मासिक पेंशन में आपकी रुचि से मेल खाता है');
    }

    if (selectedInterests.includes('women') && (scheme.category === 'women' || scheme.id === 'jharkhand-maiya-samman')) {
      score += 25;
      reasons_en.push('Matches your interest in women-focused welfare programs');
      reasons_hi.push('महिला-केंद्रित कल्याणकारी योजनाओं में आपकी रुचि से मेल खाता है');
    }

    if (selectedInterests.includes('financial') && (scheme.benefitAmount_en.includes('₹') || scheme.benefitAmount_en.includes('Lakh'))) {
      score += 15;
    }

    // Include if score meets threshold or default popular for the state
    if (score >= 25 || (isStateMatch && !isCentral)) {
      const relevance_en = reasons_en.length > 0
        ? reasons_en.slice(0, 2).join(' · ')
        : `Potentially beneficial public program for ${input.state !== 'all-india' ? scheme.stateLabel_en : 'citizens across India'}`;
      
      const relevance_hi = reasons_hi.length > 0
        ? reasons_hi.slice(0, 2).join(' · ')
        : `${scheme.stateLabel_hi} अथवा देश भर के नागरिकों हेतु लाभकारी सरकारी कार्यक्रम`;

      recommendations.push({
        scheme,
        relevanceReason_en: relevance_en,
        relevanceReason_hi: relevance_hi,
        potentialBenefit_en: scheme.benefitSummary_en || scheme.benefitAmount_en,
        potentialBenefit_hi: scheme.benefitSummary_hi || scheme.benefitAmount_hi,
        isStateSpecific: isStateMatch && !isCentral
      });
    }
  }

  // Sort: state-specific programs first, then by general relevance
  recommendations.sort((a, b) => {
    if (a.isStateSpecific && !b.isStateSpecific) return -1;
    if (!a.isStateSpecific && b.isStateSpecific) return 1;
    return 0;
  });

  return recommendations;
}
