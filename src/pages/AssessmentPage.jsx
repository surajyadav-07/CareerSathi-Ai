import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, HelpCircle, 
  RotateCcw, BookOpen, AlertCircle, Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { ASSESSMENT_STEPS } from '../data/assessmentQuestions';
import DemoBadge from '../components/common/DemoBadge';
import AssessmentCompleteIllustration from '../components/illustrations/AssessmentCompleteIllustration';

export default function AssessmentPage() {
  const { 
    assessmentAnswers, 
    setAssessmentAnswers, 
    assessmentCompleted, 
    setAssessmentCompleted, 
    computeAssessmentResults, 
    navigateTo, 
    showToast 
  } = useApp();

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [validationError, setValidationError] = useState(false);

  const totalSteps = ASSESSMENT_STEPS.length;
  const currentStep = ASSESSMENT_STEPS[currentStepIndex];
  const currentQuestion = currentStep.questions[0];
  const selectedOptionId = assessmentAnswers[currentQuestion.id];

  const handleSelectOption = (optionId) => {
    setAssessmentAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
    setValidationError(false);
  };

  const handleNext = () => {
    if (!selectedOptionId) {
      setValidationError(true);
      showToast("Please choose an option to continue.", "warning");
      return;
    }

    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    } else {
      // Completed!
      setAssessmentCompleted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Confetti fallback
      }
      showToast("Assessment completed! Review your tailored matches below.", "success");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      setValidationError(false);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  const handleRetake = () => {
    setAssessmentAnswers({});
    setAssessmentCompleted(false);
    setCurrentStepIndex(0);
    setValidationError(false);
    showToast("Assessment reset. Let's start fresh!", "info");
  };

  // If completed, show the Results Page
  if (assessmentCompleted) {
    const results = computeAssessmentResults();

    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 transition-colors">
        
        {/* Results Hero Header (Deep Navy) */}
        <div className="bg-[#182338] rounded-3xl p-8 sm:p-10 border border-[#334155] shadow-xl text-center space-y-6 text-[#F8FAFC]">
          <AssessmentCompleteIllustration />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16845B]/20 text-[#16845B] border border-[#16845B]/30 text-xs font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Assessment Complete</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] font-['Outfit'] tracking-tight">
            Your Career Profile: <span className="text-[#F5C451]">{results.topArchetype}</span>
          </h1>

          <p className="text-[#B5C0D0] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Based on your answers, you thrive when solving problems logically, working with modern digital tools, and seeing tangible progress. Here are your top matching practical career pathways:
          </p>

          {/* Key Strengths Identifiers */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {results.strengthsIdentified.map((st, i) => (
              <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-[#202D42] text-[#F5C451] border border-[#334155]">
                ✨ {st}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <DemoBadge text="Educational Demo Results — Sample career matching simulation" size="sm" />
          </div>
        </div>

        {/* Top 3 Matched Careers (Clean White Cards on #E9EEF5) */}
        <div className="mt-10 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#172033] font-['Outfit']">
                Top 3 Recommended Career Paths
              </h2>
              <p className="text-xs text-[#64748B] mt-0.5">
                Sorted by alignment with your declared work style and curiosity.
              </p>
            </div>
            <button
              onClick={() => navigateTo('explorer')}
              className="text-xs font-bold text-[#101828] hover:text-[#E99A55] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Explore All 9+ Careers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.matchedCareers.map((career, idx) => (
              <div
                key={career.id}
                className="bg-[#FFFFFF] hover:bg-[#FAF9F5] rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#CBD5E1] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative group"
              >
                {idx === 0 && (
                  <span className="absolute -top-3 left-6 text-[10px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full bg-[#F5C451] text-[#101828] shadow-sm font-mono">
                    #1 Top Match
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3 mt-1">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#E9EEF5] text-[#172033] border border-[#CBD5E1]">
                      {career.category}
                    </span>
                    <span className="text-[11px] font-extrabold text-[#16845B] bg-[#16845B]/10 border border-[#16845B]/25 px-2 py-0.5 rounded-full font-mono">
                      {career.matchScore}% Fit
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#172033] font-['Outfit'] group-hover:text-[#101828] transition-colors">
                    {career.title}
                  </h3>

                  <p className="text-xs text-[#64748B] mt-2 leading-relaxed line-clamp-2">
                    {career.shortDescription}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#E2E8F0] space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Duration:</span>
                      <span className="font-semibold text-[#172033]">{career.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Est. Salary:</span>
                      <span className="font-semibold text-[#172033]">{career.avgStartingSalary}</span>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {career.keySkills.slice(0, 3).map((sk, k) => (
                      <span key={k} className="text-[10px] px-2 py-0.5 rounded-md bg-[#F4F1E8] text-[#172033] border border-[#E2E8F0]">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                  <button
                    onClick={() => navigateTo('explorer', { career })}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#101828] hover:bg-[#182338] shadow-sm transition-all cursor-pointer"
                  >
                    View Career Breakdown
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Next Steps / Actions (Elevated Navy Banner) */}
        <div className="mt-12 bg-[#182338] rounded-2xl p-6 sm:p-8 border border-[#334155] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-[#F8FAFC]">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-[#F8FAFC] font-['Outfit']">
              Next Action: Compare Vocational Training Courses
            </h3>
            <p className="text-xs text-[#B5C0D0]">
              Inspect eligibility, duration, fees, and hands-on projects side-by-side.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigateTo('compare')}
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-[#101828] bg-[#F5C451] hover:bg-[#FFD36A] shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#101828]" />
              <span>Compare Courses</span>
            </button>
            <button
              onClick={() => navigateTo('family')}
              className="px-4 py-2.5 rounded-xl font-bold text-xs text-[#F8FAFC] bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 cursor-pointer transition-colors"
            >
              Family Discussion Guide
            </button>
            <button
              onClick={handleRetake}
              className="p-2.5 rounded-xl text-[#B5C0D0] hover:text-[#F8FAFC] hover:bg-white/[0.08] cursor-pointer transition-colors border border-[#334155]"
              title="Retake Assessment"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    );
  }

  // Active Multi-Step Assessment Form
  const progressPercent = Math.round(((currentStepIndex + 1) / totalSteps) * 100);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 transition-colors">
      
      {/* Header & Step Tracker */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#101828] uppercase tracking-wider font-mono">
              Step {currentStep.stepNumber} of {totalSteps}
            </span>
            <span className="text-[#64748B]">•</span>
            <span className="text-xs font-semibold text-[#64748B]">
              {currentStep.shortTitle}
            </span>
          </div>
          <span className="text-xs font-extrabold text-[#172033] font-mono">
            {progressPercent}% Complete
          </span>
        </div>

        {/* Multi-step progress bar */}
        <div className="w-full h-2.5 bg-[#CBD5E1]/60 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#F5C451] to-[#E99A55] rounded-full transition-all duration-300 shadow-sm"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Step dots */}
        <div className="flex items-center justify-between pt-1">
          {ASSESSMENT_STEPS.map((s, idx) => (
            <div key={s.stepNumber} className="flex flex-col items-center gap-1">
              <div className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentStepIndex
                  ? 'bg-[#F5C451] ring-4 ring-[#F5C451]/30'
                  : idx < currentStepIndex
                  ? 'bg-[#16845B]'
                  : 'bg-[#CBD5E1]'
              }`} />
            </div>
          ))}
        </div>
      </div>

      {/* Main Question Card Container (Clean White Card on Cool Blue-Gray) */}
      <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-md space-y-6">
        
        {/* Step Title & Prompt */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033] font-['Outfit'] tracking-tight">
            {currentStep.title}
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            {currentQuestion.prompt}
          </p>
        </div>

        {/* Plain-English Explanation: "Why this question matters" (Soft warm background) */}
        <div className="p-4 rounded-2xl bg-[#F4F1E8] border border-[#E2E8F0] flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-[#E99A55] shrink-0 mt-0.5" />
          <div className="text-xs text-[#64748B] leading-relaxed">
            <span className="font-bold block mb-0.5 text-[#172033]">Why this question matters:</span>
            {currentStep.whyItMatters}
          </div>
        </div>

        {/* Validation Warning if skipped */}
        {validationError && (
          <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-600 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
            <span>Please pick one option below to continue to the next step.</span>
          </div>
        )}

        {/* Large Selectable Answer Cards */}
        <div className="space-y-3 pt-2">
          {currentQuestion.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                className={`cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start justify-between gap-4 select-none ${
                  isSelected
                    ? 'border-[#F5C451] bg-[#F5C451]/15 shadow-sm'
                    : 'border-[#E2E8F0] bg-[#FAF9F5] hover:border-[#CBD5E1] hover:bg-[#FFFFFF]'
                }`}
              >
                <div className="space-y-1">
                  <h4 className={`text-sm sm:text-base font-bold ${
                    isSelected ? 'text-[#101828]' : 'text-[#172033]'
                  } font-['Outfit']`}>
                    {opt.label}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {opt.sublabel}
                  </p>
                </div>

                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                  isSelected
                    ? 'border-[#101828] bg-[#F5C451] text-[#101828]'
                    : 'border-[#CBD5E1]'
                }`}>
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons: Previous and Continue */}
        <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-between gap-4">
          <button
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors ${
              currentStepIndex === 0
                ? 'opacity-30 cursor-not-allowed text-[#64748B]'
                : 'text-[#172033] hover:bg-[#F4F1E8] cursor-pointer'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            className="px-7 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#101828] bg-[#F5C451] hover:bg-[#FFD36A] shadow-md shadow-[#F5C451]/20 flex items-center gap-2 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span>{currentStepIndex === totalSteps - 1 ? "See My Results" : "Continue"}</span>
            <ArrowRight className="w-4 h-4 text-[#101828]" />
          </button>
        </div>

      </div>

      {/* Transparent Disclaimer */}
      <div className="mt-6 text-center">
        <DemoBadge text="Interactive Assessment Demo — Answers are evaluated locally in your browser" size="sm" />
      </div>

    </div>
  );
}
