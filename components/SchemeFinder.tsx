'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Language, Scheme, SchemeState, SchemeFinderInput, SchemeFinderRecommendation } from '@/types';
import { findRelevantSchemes } from '@/lib/schemeFinderEngine';
import {
  Search,
  CheckCircle2,
  Lock,
  ArrowRight,
  RotateCcw,
  Building,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Info,
  Check
} from 'lucide-react';

interface SchemeFinderProps {
  lang: Language;
  onSelectScheme: (scheme: Scheme) => void;
  onCheckEligibility: (scheme: Scheme) => void;
  allSchemes: Scheme[];
}

export default function SchemeFinder({
  lang,
  onSelectScheme,
  onCheckEligibility,
  allSchemes
}: SchemeFinderProps) {
  const isHi = lang === 'hi';

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<SchemeFinderInput>({
    state: 'jharkhand',
    ageGroup: '26-40',
    identity: 'farmer',
    interests: ['farming', 'financial'],
    contextAnswer: 'own-land'
  });

  const [recommendations, setRecommendations] = useState<SchemeFinderRecommendation[] | null>(null);

  const toggleInterest = (interestId: string) => {
    setFormData(prev => {
      const exists = prev.interests.includes(interestId);
      if (exists) {
        return { ...prev, interests: prev.interests.filter(i => i !== interestId) };
      } else {
        return { ...prev, interests: [...prev.interests, interestId] };
      }
    });
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      const results = findRelevantSchemes(formData);
      setRecommendations(results);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setRecommendations(null);
  };

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs transition-colors duration-200">
      
      {/* Header & Tool Identity */}
      <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <Search className="h-4 w-4" />
            <span>{isHi ? 'नागरिक योजना खोजक' : 'CITIZEN SCHEME FINDER'}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <Lock className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
            <span>{isHi ? '🔒 कोई डेटा संग्रहीत नहीं' : '🔒 Zero Data Stored'}</span>
          </div>
        </div>

        <h1 className="mt-2 text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
          {isHi ? '🔍 योजना खोजें' : '🔍 Find Government Schemes for You'}
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {isHi
            ? 'अपने सामान्य प्रोफाइल से जुड़े कुछ सरल सवालों के उत्तर दें और जानें कि कौन सी सरकारी योजनाएं आपके लिए प्रासंगिक हो सकती हैं।'
            : 'Answer a few quick questions to discover government schemes that may be relevant to you.'}
        </p>
      </div>

      {/* Progress Bar */}
      {!recommendations && (
        <div className="mt-6 mb-8">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
            <span>{isHi ? `चरण ${step} / 5` : `Question ${step} of 5`}</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300">{Math.round((step / 5) * 100)}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div 
              className="h-full bg-amber-600 transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Questionnaire View */}
      {!recommendations ? (
        <div className="space-y-6">
          
          {/* Question 1: State */}
          {step === 1 && (
            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-900 dark:text-white">
                1. {isHi ? 'आप वर्तमान में किस राज्य में निवास करते हैं?' : 'Which state do you currently live in?'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'jharkhand', name_en: 'Jharkhand', name_hi: 'झारखंड' },
                  { id: 'bihar', name_en: 'Bihar', name_hi: 'बिहार' },
                  { id: 'uttar-pradesh', name_en: 'Uttar Pradesh', name_hi: 'उत्तर प्रदेश' },
                  { id: 'rajasthan', name_en: 'Rajasthan', name_hi: 'राजस्थान' },
                  { id: 'madhya-pradesh', name_en: 'Madhya Pradesh', name_hi: 'मध्य प्रदेश' },
                  { id: 'maharashtra', name_en: 'Maharashtra', name_hi: 'महाराष्ट्र' },
                  { id: 'all-india', name_en: 'Other State / Central Schemes', name_hi: 'अन्य राज्य / केंद्रीय योजनाएं' },
                ].map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, state: st.id as SchemeState })}
                    className={`p-3.5 text-left rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                      formData.state === st.id
                        ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 font-semibold shadow-xs'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {isHi ? st.name_hi : st.name_en}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 2: Age Group */}
          {step === 2 && (
            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-900 dark:text-white">
                2. {isHi ? 'आपकी आयु वर्ग क्या है?' : 'What is your age group?'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'under-18', label_en: 'Under 18 (School / Minor)', label_hi: '18 वर्ष से कम (नाबालिग/छात्र)' },
                  { id: '18-25', label_en: '18–25 years (Youth & Higher Education)', label_hi: '18 से 25 वर्ष (युवा व उच्च शिक्षा)' },
                  { id: '26-40', label_en: '26–40 years (Working Age & Family)', label_hi: '26 से 40 वर्ष (कार्यशील आयु वर्ग)' },
                  { id: '41-60', label_en: '41–60 years (Middle Age & Household Head)', label_hi: '41 से 60 वर्ष (प्रौढ़)' },
                  { id: '60-plus', label_en: '60+ years (Senior Citizen)', label_hi: '60 वर्ष या अधिक (वरिष्ठ नागरिक)' },
                ].map((age) => (
                  <button
                    key={age.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, ageGroup: age.id as any })}
                    className={`p-3.5 text-left rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                      formData.ageGroup === age.id
                        ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 font-semibold shadow-xs'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {isHi ? age.label_hi : age.label_en}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 3: Identity / Occupation */}
          {step === 3 && (
            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-900 dark:text-white">
                3. {isHi ? 'इनमें से कौन सा विकल्प आपका सबसे अच्छा वर्णन करता है?' : 'Which best describes you?'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'student', label_en: 'Student', label_hi: 'विद्यार्थी / छात्र' },
                  { id: 'farmer', label_en: 'Farmer / Agricultural worker', label_hi: 'किसान / कृषि कार्य से जुड़े' },
                  { id: 'salaried', label_en: 'Salaried / Working in formal sector', label_hi: 'वेतनभोगी / नौकरीपेशा' },
                  { id: 'self-employed', label_en: 'Self-employed / Artisan / Micro-business', label_hi: 'स्वरोजगार / कारीगर / छोटा व्यवसाय' },
                  { id: 'unemployed', label_en: 'Unemployed / Looking for work', label_hi: 'बेरोजगार / काम की तलाश में' },
                  { id: 'homemaker', label_en: 'Homemaker / Woman head of family', label_hi: 'गृहणी / महिला मुखिया' },
                  { id: 'senior', label_en: 'Senior Citizen / Retired', label_hi: 'वरिष्ठ नागरिक / सेवानिवृत्त' },
                  { id: 'other', label_en: 'Other category', label_hi: 'अन्य श्रेणी' },
                ].map((occ) => (
                  <button
                    key={occ.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, identity: occ.id as any })}
                    className={`p-3.5 text-left rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                      formData.identity === occ.id
                        ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 font-semibold shadow-xs'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {isHi ? occ.label_hi : occ.label_en}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 4: Areas of Interest (Multi-Select) */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-white">
                  4. {isHi ? 'आप किन क्षेत्रों में सरकारी योजनाओं की जानकारी चाहते हैं?' : 'Which areas are you interested in?'}
                </label>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {isHi ? 'आप एक से अधिक विकल्प चुन सकते हैं:' : 'Select all options that apply to you:'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'financial', label_en: 'Financial assistance (Direct Benefit Transfer)', label_hi: 'नकद आर्थिक सहायता (DBT)' },
                  { id: 'education', label_en: 'Education / Scholarship / Student Loans', label_hi: 'शिक्षा / छात्रवृत्ति / शिक्षा ऋण' },
                  { id: 'healthcare', label_en: 'Healthcare / Free Hospital Treatment', label_hi: 'मुफ्त अस्पताल इलाज / स्वास्थ्य सुरक्षा' },
                  { id: 'farming', label_en: 'Farming / Agriculture Equipment / Inputs', label_hi: 'कृषि / उपकरण / किसान सहायता' },
                  { id: 'housing', label_en: 'Housing / Pucca House Construction', label_hi: 'पक्का मकान निर्माण सहायता (आवास)' },
                  { id: 'pension', label_en: 'Pension & Senior Citizen Security', label_hi: 'मासिक पेंशन व वृद्धावस्था सुरक्षा' },
                  { id: 'employment', label_en: 'Employment, Skill Training & Toolkits', label_hi: 'रोजगार, कौशल विकास व टूलकिट' },
                  { id: 'women', label_en: 'Women-focused Schemes & Family Support', label_hi: 'महिला-केंद्रित कल्याणकारी योजनाएं' },
                ].map((cat) => {
                  const isChecked = formData.interests.includes(cat.id);
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => toggleInterest(cat.id)}
                      className={`p-3.5 text-left rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                        isChecked
                          ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 font-semibold shadow-xs'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <span>{isHi ? cat.label_hi : cat.label_en}</span>
                      <div className={`h-4 w-4 rounded flex items-center justify-center border ${
                        isChecked ? 'bg-amber-600 border-amber-600 text-white' : 'border-slate-300 dark:border-slate-600'
                      }`}>
                        {isChecked && <Check className="h-3 w-3 stroke-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Question 5: Additional Profile Context */}
          {step === 5 && (
            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-900 dark:text-white">
                5. {formData.identity === 'student' 
                  ? (isHi ? 'क्या आप वर्तमान में किसी मान्यता प्राप्त शिक्षण संस्थान में नामांकित हैं?' : 'Are you currently enrolled in an educational institution?')
                  : formData.identity === 'farmer'
                  ? (isHi ? 'आपकी कृषि स्थिति इनमें से किससे सबसे अच्छी मेल खाती है?' : 'Are you involved in agricultural activity / own cultivable land?')
                  : (isHi ? 'आपके परिवार की अनुमानित वार्षिक आय सीमा क्या है?' : 'What is your approximate family annual income bracket?')}
              </label>

              <div className="grid grid-cols-1 gap-3">
                {formData.identity === 'student' ? (
                  [
                    { id: 'enrolled-college', label_en: 'Yes, enrolled in College / University / Professional Course', label_hi: 'हाँ, कॉलेज / विश्वविद्यालय अथवा व्यावसायिक कोर्स में नामांकित' },
                    { id: 'enrolled-school', label_en: 'Yes, studying in School (Class 9th–12th)', label_hi: 'हाँ, स्कूल (कक्षा 9वीं से 12वीं) में अध्ययनरत' },
                    { id: 'planning-admission', label_en: 'Planning for higher education / Competitive entrance', label_hi: 'उच्च शिक्षा अथवा प्रवेश परीक्षा की तैयारी में' },
                    { id: 'other', label_en: 'Not enrolled currently', label_hi: 'वर्तमान में नामांकित नहीं हैं' }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, contextAnswer: opt.id })}
                      className={`p-3.5 text-left rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                        formData.contextAnswer === opt.id
                          ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 font-semibold shadow-xs'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {isHi ? opt.label_hi : opt.label_en}
                    </button>
                  ))
                ) : formData.identity === 'farmer' ? (
                  [
                    { id: 'own-land', label_en: 'Yes, I hold agricultural land registered in revenue records', label_hi: 'हाँ, मेरे नाम पर राजस्व रिकॉर्ड में कृषि योग्य भूमि दर्ज है' },
                    { id: 'small-farmer', label_en: 'Small or marginal farmer (landholding up to 2 hectares)', label_hi: 'लघु या सीमांत किसान (2 हेक्टेयर तक भूमि)' },
                    { id: 'tenant-farmer', label_en: 'Tenant farmer / agricultural laborer without land title', label_hi: 'बटाईदार किसान अथवा भूमिहीन कृषि मजदूर' },
                    { id: 'allied', label_en: 'Engaged in allied dairy, animal husbandry, or fisheries', label_hi: 'डेयरी, पशुपालन अथवा मत्स्य पालन से जुड़े' }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, contextAnswer: opt.id })}
                      className={`p-3.5 text-left rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                        formData.contextAnswer === opt.id
                          ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 font-semibold shadow-xs'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {isHi ? opt.label_hi : opt.label_en}
                    </button>
                  ))
                ) : (
                  [
                    { id: 'under-1-lakh', label_en: 'Under ₹1,00,000 per year (Priority / BPL household)', label_hi: '₹1 लाख प्रति वर्ष से कम (प्राथमिकता/बीपीएल परिवार)' },
                    { id: '1-to-2.5-lakh', label_en: '₹1,00,000 to ₹2,50,000 per year', label_hi: '₹1,00,000 से ₹2,50,000 प्रति वर्ष' },
                    { id: '2.5-to-8-lakh', label_en: '₹2,50,000 to ₹8,00,000 per year (Middle income)', label_hi: '₹2,50,000 से ₹8,00,000 प्रति वर्ष' },
                    { id: 'above-8-lakh', label_en: 'Above ₹8,00,000 per year / Income tax payer', label_hi: '₹8 लाख से अधिक / आयकरदाता परिवार' }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, contextAnswer: opt.id })}
                      className={`p-3.5 text-left rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                        formData.contextAnswer === opt.id
                          ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 font-semibold shadow-xs'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {isHi ? opt.label_hi : opt.label_en}
                    </button>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button
              type="button"
              disabled={step === 1}
              onClick={handlePrevious}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                step === 1
                  ? 'opacity-40 cursor-not-allowed text-slate-400'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {isHi ? '← पिछला' : '← Previous'}
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-slate-950 text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>{step === 5 ? (isHi ? 'योजनाएं खोजें →' : 'Discover Schemes →') : (isHi ? 'अगला प्रश्न →' : 'Next Step →')}</span>
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                {isHi ? 'योजना खोज परिणाम' : 'Scheme Discovery Matches'}
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                {isHi ? 'आपके लिए संभावित प्रासंगिक योजनाएं' : 'Schemes That May Be Relevant to You'}
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                {isHi
                  ? 'आपके द्वारा दी गई जानकारी के आधार पर निम्नलिखित योजनाएं आपके लिए उपयोगी हो सकती हैं।'
                  : 'Based on the information you provided, these government schemes may be worth exploring.'}
              </p>
            </div>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shrink-0"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>{isHi ? 'पुनः खोजें' : 'Start Over'}</span>
            </button>
          </div>

          {/* Matches List */}
          <div className="space-y-4">
            {recommendations.length > 0 ? (
              recommendations.map(({ scheme, relevanceReason_en, relevanceReason_hi, potentialBenefit_en, potentialBenefit_hi, isStateSpecific }) => (
                <div
                  key={scheme.id}
                  className={`p-4 sm:p-5 rounded-xl border transition-all ${
                    isStateSpecific
                      ? 'border-amber-300 dark:border-amber-900/80 bg-amber-50/40 dark:bg-amber-950/20'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {isStateSpecific && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 px-2 py-0.5 rounded">
                            {isHi ? `${scheme.stateLabel_hi} विशेष` : `${scheme.stateLabel_en} Exclusive`}
                          </span>
                        )}
                        <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          {scheme.category}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white hover:text-amber-700 dark:hover:text-amber-400 transition-colors">
                        <Link href={`/schemes/${scheme.slug}`} onClick={() => onSelectScheme(scheme)}>
                          {isHi ? scheme.title_hi : scheme.title_en}
                        </Link>
                      </h3>
                    </div>
                  </div>

                  {/* Why it may be relevant */}
                  <div className="mt-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-150 dark:border-slate-800 space-y-1.5 text-xs">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white">
                        {isHi ? 'यह क्यों प्रासंगिक हो सकती है:' : 'Why it may be relevant:'}{' '}
                      </span>
                      <span className="text-slate-700 dark:text-slate-300">
                        {isHi ? relevanceReason_hi : relevanceReason_en}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white">
                        {isHi ? 'संभावित लाभ:' : 'Potential benefit:'}{' '}
                      </span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                        {isHi ? potentialBenefit_hi : potentialBenefit_en}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                    <Link
                      href={`/schemes/${scheme.slug}`}
                      onClick={() => onSelectScheme(scheme)}
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>{isHi ? 'योजना का पूरा विवरण पढ़ें' : 'View Scheme Details'}</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>

                    <button
                      onClick={() => onCheckEligibility(scheme)}
                      className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-slate-950 text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>{isHi ? 'पात्रता जांचें →' : 'Check Eligibility →'}</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-xs text-slate-500 dark:text-slate-400">
                {isHi
                  ? 'आपकी चुनी गई प्राथमिकताओं के लिए कोई सीधी योजना नहीं मिली। कृपया अलग विकल्प चुनकर पुनः प्रयास करें।'
                  : 'No specific schemes directly matched this filter combination. Try selecting alternate options.'}
              </div>
            )}
          </div>

          {/* Important Statutory Disclaimer */}
          <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/70 dark:bg-amber-950/30 text-xs text-amber-950 dark:text-amber-200 leading-relaxed flex items-start gap-2.5">
            <Info className="h-4 w-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold uppercase tracking-wider text-[11px] mb-0.5 text-amber-900 dark:text-amber-300">
                {isHi ? 'महत्वपूर्ण अस्वीकरण (Discovery Guidance Only)' : 'Important Disclaimer'}
              </div>
              <p>
                {isHi
                  ? 'ये सिफारिशें आपके द्वारा दी गई सामान्य जानकारी पर आधारित हैं और केवल मार्गदर्शन के लिए हैं। किसी भी सरकारी योजना की आधिकारिक पात्रता और स्वीकृति केवल सक्षम सरकारी प्राधिकारी द्वारा निर्धारित की जाती है।'
                  : 'These recommendations are based on the information you provided and are intended for general guidance. Scheme eligibility and approval are determined by the relevant government authority.'}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
