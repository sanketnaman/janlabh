'use client';

import React, { useState, useMemo } from 'react';
import {
  Language,
  Scheme,
  EligibilityAnswerValue,
  EligibilityEvaluation,
  EligibilityResultState
} from '@/types';
import {
  SCHEME_ELIGIBILITY_CONFIGS,
  getSchemeEligibilityConfig,
  evaluateSchemeEligibility
} from '@/data/eligibilityRules';
import {
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  Building,
  ChevronRight,
  ExternalLink,
  Search,
  Lock,
  FileText,
  Calendar,
  AlertCircle
} from 'lucide-react';

interface SchemeEligibilityCheckerProps {
  lang: Language;
  selectedScheme?: Scheme | null;
  onSelectSchemeDetails: (scheme: Scheme) => void;
  onBackToFinder?: () => void;
  allSchemes: Scheme[];
}

export default function SchemeEligibilityChecker({
  lang,
  selectedScheme: initialScheme,
  onSelectSchemeDetails,
  onBackToFinder,
  allSchemes
}: SchemeEligibilityCheckerProps) {
  const isHi = lang === 'hi';

  const [activeScheme, setActiveScheme] = useState<Scheme | null>(initialScheme || null);
  const [schemeSearch, setSchemeSearch] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, EligibilityAnswerValue>>({});
  const [evaluation, setEvaluation] = useState<EligibilityEvaluation | null>(null);

  const [prevInitialSchemeId, setPrevInitialSchemeId] = useState(initialScheme?.id);

  // Sync if initialScheme changes from parent without effect cascading renders
  if (initialScheme?.id !== prevInitialSchemeId) {
    setPrevInitialSchemeId(initialScheme?.id);
    setActiveScheme(initialScheme || null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setEvaluation(null);
  }

  // Load config for active scheme
  const config = useMemo(() => {
    if (!activeScheme) return null;
    return getSchemeEligibilityConfig(activeScheme.id) || null;
  }, [activeScheme]);

  // Filtered scheme list for Step 0 (Scheme Selector)
  const filteredSchemes = useMemo(() => {
    return allSchemes.filter(s => {
      const matchSearch = schemeSearch.trim() === '' || 
        s.title_en.toLowerCase().includes(schemeSearch.toLowerCase()) ||
        s.title_hi.includes(schemeSearch) ||
        s.shortTitle_en.toLowerCase().includes(schemeSearch.toLowerCase());
      const matchCategory = selectedCategoryFilter === 'all' || s.category === selectedCategoryFilter;
      return matchSearch && matchCategory;
    });
  }, [allSchemes, schemeSearch, selectedCategoryFilter]);

  const questions = config?.questions || [
    {
      id: 'general_criteria',
      question_en: `Do you meet the primary eligibility requirements specified for ${activeScheme?.shortTitle_en}?`,
      question_hi: `क्या आप ${activeScheme?.shortTitle_hi} के लिए निर्दिष्ट प्राथमिक पात्रता शर्तों को पूरा करते हैं?`,
      helpText_en: activeScheme?.whoCanApply_en,
      helpText_hi: activeScheme?.whoCanApply_hi,
      options: [
        { label_en: 'Yes (I believe I qualify)', label_hi: 'हाँ (मैं शर्तों को पूरा करता/करती हूँ)', value: 'yes' },
        { label_en: 'No (I do not meet listed conditions)', label_hi: 'नहीं (मैं शर्तों को पूरा नहीं करता/करती)', value: 'no' },
        { label_en: 'Not sure / Need verification', label_hi: 'निश्चित नहीं / जांच आवश्यक है', value: 'not-sure' }
      ]
    }
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const handleSelectAnswer = (value: EligibilityAnswerValue) => {
    if (!currentQuestion) return;
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      if (activeScheme) {
        const evalResult = evaluateSchemeEligibility(activeScheme, answers);
        setEvaluation(evalResult);
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleResetForCurrentScheme = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setEvaluation(null);
  };

  const handleSwitchScheme = () => {
    setActiveScheme(null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setEvaluation(null);
  };

  // -------------------------------------------------------------
  // VIEW 1: SCHEME SELECTOR (If user didn't preselect a scheme)
  // -------------------------------------------------------------
  if (!activeScheme) {
    return (
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                <span>{isHi ? 'योजना-विशिष्ट पात्रता जांच' : 'SCHEME-SPECIFIC ELIGIBILITY CHECK'}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <Lock className="h-3.5 w-3.5" />
                <span>{isHi ? '🔒 कोई डेटा संग्रहीत नहीं' : '🔒 Zero Data Stored'}</span>
              </div>
            </div>

            <h1 className="mt-2 text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {isHi ? 'आप किस योजना की पात्रता जांचना चाहते हैं?' : 'Which scheme would you like to check?'}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {isHi
                ? 'प्रत्येक सरकारी योजना के पात्रता नियम अलग होते हैं। कृपया नीचे दी गई सूची में से वह योजना चुनें जिसके लिए आप आवेदन करना चाहते हैं।'
                : 'Every government scheme has distinct published rules. Select the scheme you want to evaluate to load its verified criteria questions.'}
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={schemeSearch}
                onChange={(e) => setSchemeSearch(e.target.value)}
                placeholder={isHi ? 'योजना का नाम खोजें (उदा. PM Kisan, आयुष्मान, मंईयां)...' : 'Search scheme name (e.g. PM Kisan, Ayushman, Maiya Samman)...'}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
              />
            </div>

            <select
              value={selectedCategoryFilter}
              onChange={(e) => setSelectedCategoryFilter(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none"
            >
              <option value="all">{isHi ? 'सभी श्रेणियां' : 'All Categories'}</option>
              <option value="farmers">{isHi ? 'किसान (Farmers)' : 'Farmers'}</option>
              <option value="health">{isHi ? 'स्वास्थ्य (Healthcare)' : 'Healthcare'}</option>
              <option value="women">{isHi ? 'महिलाएं (Women)' : 'Women'}</option>
              <option value="housing">{isHi ? 'आवास (Housing)' : 'Housing'}</option>
              <option value="students">{isHi ? 'शिक्षा (Students)' : 'Students'}</option>
              <option value="pension">{isHi ? 'पेंशन (Pension)' : 'Pension'}</option>
              <option value="employment">{isHi ? 'स्वरोजगार (Employment)' : 'Employment'}</option>
            </select>
          </div>

          {/* Scheme Cards Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSchemes.map(scheme => (
              <div
                key={scheme.id}
                onClick={() => {
                  setActiveScheme(scheme);
                  setCurrentQuestionIndex(0);
                  setAnswers({});
                  setEvaluation(null);
                }}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 hover:border-emerald-600 dark:hover:border-emerald-500 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    <span>{scheme.stateLabel_en}</span>
                    <span>·</span>
                    <span>{scheme.category}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {isHi ? scheme.title_hi : scheme.title_en}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {isHi ? scheme.whoCanApply_hi : scheme.whoCanApply_en}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-750 flex items-center justify-between text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <span>{isHi ? 'इस योजना की पात्रता जांचें →' : 'Check Eligibility for this Scheme →'}</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>

          {onBackToFinder && (
            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400">
                {isHi ? 'निश्चित नहीं हैं कि कौन सी योजना सही है?' : 'Not sure which government scheme is right for you?'}
              </span>
              <button
                onClick={onBackToFinder}
                className="text-amber-700 dark:text-amber-400 hover:text-amber-800 font-semibold"
              >
                {isHi ? 'योजना खोजक (Scheme Finder) खोलें →' : 'Open Scheme Finder →'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: SCHEME-SPECIFIC QUESTIONNAIRE OR EVALUATION RESULT
  // -------------------------------------------------------------
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs transition-colors duration-200">
      
      {/* Header with Switch Scheme link */}
      <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 className="h-4 w-4" />
            <span>{isHi ? 'योजना-विशिष्ट पात्रता जांच' : 'SCHEME-SPECIFIC ELIGIBILITY CHECK'}</span>
          </div>
          <button
            onClick={handleSwitchScheme}
            className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white underline transition-colors"
          >
            {isHi ? 'दूसरी योजना चुनें' : 'Switch Scheme'}
          </button>
        </div>

        <h1 className="mt-2 text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
          {isHi 
            ? `${activeScheme.shortTitle_hi} पात्रता जांच` 
            : `Check ${activeScheme.shortTitle_en} Eligibility`}
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {isHi
            ? 'इस योजना के प्रकाशित आधिकारिक पात्रता नियमों के आधार पर प्रश्नों के उत्तर दें और जानें कि क्या आपके उत्तर आवश्यकताओं को पूरा करते प्रतीत होते हैं।'
            : 'Answer questions based on the published eligibility criteria for this scheme to understand whether your answers appear to meet the requirements.'}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1 font-medium">
            <Lock className="h-3 w-3 text-slate-400" />
            <span>{isHi ? '🔒 कोई डेटा संग्रहीत नहीं' : '🔒 Zero Data Stored'}</span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3 text-slate-400" />
            <span>{isHi ? `सत्यापित: ${activeScheme.lastVerified}` : `Verified: ${activeScheme.lastVerified}`}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar (During Questionnaire) */}
      {!evaluation && (
        <div className="mt-6 mb-8">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
            <span>{isHi ? `प्रश्न ${currentQuestionIndex + 1} / ${totalQuestions}` : `Question ${currentQuestionIndex + 1} of ${totalQuestions}`}</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}%
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div 
              className="h-full bg-emerald-600 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* QUESTIONNAIRE FLOW */}
      {!evaluation ? (
        <div className="space-y-6">
          {currentQuestion && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {currentQuestionIndex + 1}. {isHi ? currentQuestion.question_hi : currentQuestion.question_en}
                </label>
                {(currentQuestion.helpText_en || currentQuestion.helpText_hi) && (
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {isHi ? currentQuestion.helpText_hi : currentQuestion.helpText_en}
                  </p>
                )}
              </div>

              {/* 3 Options: Yes, No, Not sure */}
              <div className="grid grid-cols-1 gap-3">
                {currentQuestion.options.map(option => {
                  const isSelected = answers[currentQuestion.id] === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelectAnswer(option.value)}
                      className={`p-4 text-left rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 font-semibold shadow-xs'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <span>{isHi ? option.label_hi : option.label_en}</span>
                      <div className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300 dark:border-slate-600'
                      }`}>
                        {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button
              type="button"
              disabled={currentQuestionIndex === 0}
              onClick={handlePreviousQuestion}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                currentQuestionIndex === 0
                  ? 'opacity-40 cursor-not-allowed text-slate-400'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {isHi ? '← पिछला' : '← Previous'}
            </button>

            <button
              type="button"
              disabled={!answers[currentQuestion?.id]}
              onClick={handleNextQuestion}
              className={`px-6 py-2.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs ${
                !answers[currentQuestion?.id]
                  ? 'opacity-50 cursor-not-allowed bg-slate-300 dark:bg-slate-800 text-slate-500'
                  : 'bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white'
              }`}
            >
              <span>
                {currentQuestionIndex === totalQuestions - 1
                  ? (isHi ? 'पात्रता परिणाम देखें →' : 'Evaluate Eligibility →')
                  : (isHi ? 'अगला प्रश्न →' : 'Next Question →')}
              </span>
            </button>
          </div>
        </div>
      ) : (
        /* EVALUATION RESULT VIEW */
        <div className="space-y-6">
          
          {/* Status Banner */}
          <div className={`p-5 rounded-2xl border ${
            evaluation.resultState === 'potentially_eligible'
              ? 'border-emerald-300 dark:border-emerald-900 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200'
              : evaluation.resultState === 'needs_verification'
              ? 'border-amber-300 dark:border-amber-900 bg-amber-50/80 dark:bg-amber-950/40 text-amber-950 dark:text-amber-200'
              : 'border-rose-300 dark:border-rose-900 bg-rose-50/80 dark:bg-rose-950/40 text-rose-950 dark:text-rose-200'
          }`}>
            <div className="flex items-start gap-3">
              {evaluation.resultState === 'potentially_eligible' ? (
                <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              ) : evaluation.resultState === 'needs_verification' ? (
                <HelpCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="h-6 w-6 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
              )}
              <div>
                <span className={`inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded mb-1.5 ${
                  evaluation.resultState === 'potentially_eligible'
                    ? 'bg-emerald-200/80 text-emerald-900 dark:bg-emerald-900/60 dark:text-emerald-300'
                    : evaluation.resultState === 'needs_verification'
                    ? 'bg-amber-200/80 text-amber-900 dark:bg-amber-900/60 dark:text-amber-300'
                    : 'bg-rose-200/80 text-rose-900 dark:bg-rose-900/60 dark:text-rose-300'
                }`}>
                  {evaluation.resultState === 'potentially_eligible'
                    ? (isHi ? 'संभावित रूप से पात्र' : 'Potentially Meets Criteria')
                    : evaluation.resultState === 'needs_verification'
                    ? (isHi ? 'सत्यापन आवश्यक' : 'Further Verification Needed')
                    : (isHi ? 'संभावित रूप से अपात्र' : 'Potentially Ineligible')}
                </span>

                <h2 className="text-lg sm:text-xl font-extrabold leading-snug">
                  {isHi ? evaluation.headline_hi : evaluation.headline_en}
                </h2>
              </div>
            </div>
          </div>

          {/* Explanation Section */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {isHi ? 'आपके उत्तरों का विश्लेषण (Why you received this result):' : 'Why you received this evaluation:'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {isHi ? evaluation.explanation_hi : evaluation.explanation_en}
            </p>
          </div>

          {/* What This Means Box */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {isHi ? 'इसका क्या अर्थ है (What this means):' : 'What this means:'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {isHi ? evaluation.whatThisMeans_hi : evaluation.whatThisMeans_en}
            </p>
          </div>

          {/* Actionable Next Steps */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {isHi ? 'अनुशंसित अगले कदम (Next Steps):' : 'Recommended Next Steps:'}
            </h3>
            <div className="space-y-2">
              {(isHi ? evaluation.nextSteps_hi : evaluation.nextSteps_en).map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 dark:bg-emerald-600 text-white font-mono text-[10px] font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Official Source & Verification Timestamp */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <div className="font-bold text-slate-900 dark:text-white">{evaluation.officialSource.name}</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">{evaluation.officialSource.authority}</div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                {isHi ? `सत्यापन तिथि: ${evaluation.officialSource.verificationDate}` : `Last Verified: ${evaluation.officialSource.verificationDate}`}
              </div>
            </div>

            <a
              href={evaluation.officialSource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold transition-colors shrink-0 shadow-xs"
            >
              <span>{isHi ? 'आधिकारिक पोर्टल पर जाएं' : 'Visit Official Portal'}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => onSelectSchemeDetails(activeScheme)}
              className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white underline transition-colors"
            >
              {isHi ? '← संपूर्ण योजना विवरण व दस्तावेज पढ़ें' : '← Read Full Scheme Details & Documents'}
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleResetForCurrentScheme}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>{isHi ? 'पुनः जांचें' : 'Retake'}</span>
              </button>

              <button
                onClick={handleSwitchScheme}
                className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
              >
                {isHi ? 'दूसरी योजना चुनें' : 'Check Another Scheme'}
              </button>
            </div>
          </div>

          {/* Mandatory Statutory Legal Disclaimer */}
          <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/70 dark:bg-amber-950/30 text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
            <div className="font-bold uppercase tracking-wider text-[11px] mb-1 text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4" />
              <span>{isHi ? 'विधिक अस्वीकरण (Statutory Notice)' : 'Statutory Legal Disclaimer'}</span>
            </div>
            <p>
              {isHi
                ? 'यह उपकरण आपके द्वारा दर्ज की गई जानकारी और इस योजना के लिए निर्धारित पात्रता मानदंडों के आधार पर सामान्य मार्गदर्शन प्रदान करता है। यह पात्रता, अनुमोदन, नामांकन अथवा लाभ की कोई कानूनी गारंटी नहीं देता है। अंतिम पात्रता नवीनतम लागू नियमों के तहत संबंधित सक्षम सरकारी प्राधिकारी द्वारा ही निर्धारित की जाती है।'
                : 'This tool provides general guidance based on the information you entered and the eligibility criteria configured for this scheme. It does not guarantee eligibility, approval, enrollment, or benefits. Final eligibility is determined by the relevant government authority under the latest applicable rules.'}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
