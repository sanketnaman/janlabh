export type Language = 'en' | 'hi';

export type SchemeCategory = 
  | 'farmers'
  | 'women'
  | 'students'
  | 'scholarships'
  | 'health'
  | 'housing'
  | 'pension'
  | 'employment';

export type SchemeState = 
  | 'all-india'
  | 'jharkhand'
  | 'bihar'
  | 'uttar-pradesh'
  | 'rajasthan'
  | 'madhya-pradesh'
  | 'maharashtra';

export interface OfficialSource {
  name: string;
  authority: string;
  url: string;
  verificationDate: string;
}

export interface Scheme {
  id: string;
  slug: string;
  title_en: string;
  title_hi: string;
  shortTitle_en: string;
  shortTitle_hi: string;
  category: SchemeCategory;
  state: SchemeState;
  stateLabel_en: string;
  stateLabel_hi: string;
  status: 'Active' | 'Updated' | 'Upcoming';
  lastVerified: string;
  
  // Quick Answer Box
  benefitSummary_en: string;
  benefitSummary_hi: string;
  benefitAmount_en: string;
  benefitAmount_hi: string;
  whoCanApply_en: string;
  whoCanApply_hi: string;
  applicationMode: string;
  
  // Comprehensive Sections
  whatIsThis_en: string;
  whatIsThis_hi: string;
  benefitsList_en: string[];
  benefitsList_hi: string[];
  
  eligibility: {
    eligibleIf_en: string[];
    eligibleIf_hi: string[];
    notEligibleIf_en: string[];
    notEligibleIf_hi: string[];
  };
  
  requiredDocuments_en: string[];
  requiredDocuments_hi: string[];
  
  howToApply_en: string[];
  howToApply_hi: string[];
  
  statusCheckGuide_en: string;
  statusCheckGuide_hi: string;
  officialStatusUrl?: string;
  
  commonProblems_en: { problem: string; solution: string }[];
  commonProblems_hi: { problem: string; solution: string }[];
  
  faqs_en: { q: string; a: string }[];
  faqs_hi: { q: string; a: string }[];
  
  officialSources: OfficialSource[];
  keywords: string[];
  metaDescription_en: string;
  metaDescription_hi: string;
}

export interface UpdateArticle {
  id: string;
  slug: string;
  title_en: string;
  title_hi: string;
  category: 'scheme-update' | 'scholarship' | 'announcement' | 'recruitment';
  publishedDate: string;
  updatedDate: string;
  lastVerified: string;
  summary_en: string;
  summary_hi: string;
  keyFacts_en: string[];
  keyFacts_hi: string[];
  importantDates_en?: string[];
  importantDates_hi?: string[];
  whoIsAffected_en: string;
  whoIsAffected_hi: string;
  whatShouldUsersDo_en: string[];
  whatShouldUsersDo_hi: string[];
  officialSource: OfficialSource;
  relatedSchemeSlug?: string;
}

export interface CategoryInfo {
  id: SchemeCategory;
  name_en: string;
  name_hi: string;
  iconName: string;
  description_en: string;
  description_hi: string;
  priorityCriteria_en: string;
  priorityCriteria_hi: string;
}

export interface StateInfo {
  id: SchemeState;
  name_en: string;
  name_hi: string;
  description_en: string;
  description_hi: string;
  capital_en: string;
  capital_hi: string;
  activeSchemesCount: number;
  flagshipPrograms_en: string[];
  flagshipPrograms_hi: string[];
}

export interface EligibilityResult {
  schemeId: string;
  schemeTitle: string;
  schemeSlug: string;
  rating: 'eligible' | 'verify' | 'unlikely';
  reason_en: string;
  reason_hi: string;
  benefit_en: string;
  benefit_hi: string;
  officialUrl: string;
}

// ----------------------------------------------------
// 1. SCHEME FINDER TYPES
// ----------------------------------------------------
export interface SchemeFinderInput {
  state: SchemeState | 'all-india';
  ageGroup: 'under-18' | '18-25' | '26-40' | '41-60' | '60-plus';
  identity: 'student' | 'farmer' | 'salaried' | 'self-employed' | 'unemployed' | 'homemaker' | 'senior' | 'other';
  interests: string[];
  contextAnswer?: string;
}

export interface SchemeFinderRecommendation {
  scheme: Scheme;
  relevanceReason_en: string;
  relevanceReason_hi: string;
  potentialBenefit_en: string;
  potentialBenefit_hi: string;
  isStateSpecific: boolean;
}

// ----------------------------------------------------
// 2. SCHEME-SPECIFIC DYNAMIC ELIGIBILITY CHECKER TYPES
// ----------------------------------------------------
export type EligibilityAnswerValue = 'yes' | 'no' | 'not-sure';

export interface EligibilityQuestionOption {
  label_en: string;
  label_hi: string;
  value: EligibilityAnswerValue;
}

export interface EligibilityQuestion {
  id: string;
  question_en: string;
  question_hi: string;
  helpText_en?: string;
  helpText_hi?: string;
  options: EligibilityQuestionOption[];
  isExclusionCheck?: boolean;
}

export type EligibilityResultState = 
  | 'potentially_eligible'
  | 'needs_verification'
  | 'potentially_not_eligible';

export interface EligibilityEvaluation {
  schemeId: string;
  schemeTitle_en: string;
  schemeTitle_hi: string;
  schemeSlug: string;
  resultState: EligibilityResultState;
  headline_en: string;
  headline_hi: string;
  explanation_en: string;
  explanation_hi: string;
  whatThisMeans_en: string;
  whatThisMeans_hi: string;
  nextSteps_en: string[];
  nextSteps_hi: string[];
  officialSource: OfficialSource;
}

export interface SchemeEligibilityConfig {
  schemeId: string;
  schemeSlug: string;
  schemeTitle_en: string;
  schemeTitle_hi: string;
  questions: EligibilityQuestion[];
  evaluate: (answers: Record<string, EligibilityAnswerValue>) => {
    resultState: EligibilityResultState;
    explanation_en: string;
    explanation_hi: string;
    whatThisMeans_en: string;
    whatThisMeans_hi: string;
    nextSteps_en: string[];
    nextSteps_hi: string[];
  };
}
