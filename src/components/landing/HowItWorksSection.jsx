import React from 'react';
import { Layers, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function HowItWorksSection() {
  const { navigateTo } = useApp();

  const steps = [
    {
      number: "01",
      title: "Assess & Discover",
      subtitle: "Answer 5 intuitive questions about your interests, work styles, and natural problem-solving strengths.",
      actionLabel: "Start Assessment",
      actionView: "assessment",
      badgeColor: "bg-[#182338] text-[#F5C451]",
      highlight: "5-Min Quick Quiz"
    },
    {
      number: "02",
      title: "Explore & Compare",
      subtitle: "Browse job-ready careers, compare vocational courses side-by-side, and inspect realistic fee tiers.",
      actionLabel: "Open Course Comparison",
      actionView: "compare",
      badgeColor: "bg-[#F5C451] text-[#101828]",
      highlight: "Side-by-Side Analysis"
    },
    {
      number: "03",
      title: "Plan & Discuss",
      subtitle: "Align with your family using guided conversation prompts and track your progress along a 5-stage roadmap.",
      actionLabel: "View Roadmap",
      actionView: "roadmap",
      badgeColor: "bg-[#E99A55] text-[#101828]",
      highlight: "Family Alignment"
    }
  ];

  return (
    <section className="py-20 bg-[#F4F1E8] border-b border-[#CBD5E1]/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182338]/8 text-[#101828] border border-[#CBD5E1] text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#182338]" />
            <span>Three Simple Steps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] font-['Outfit'] tracking-tight">
            How CareerSaathi Works
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg">
            No confusion, no academic jargon. A clear, friendly path from uncertainty to a practical, actionable plan.
          </p>
        </div>

        {/* 3 Step Cards with Connected Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative bg-[#FFFFFF] hover:bg-[#FAF9F5] rounded-2xl p-7 border border-[#E2E8F0] hover:border-[#CBD5E1] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step indicator top */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`w-12 h-12 rounded-xl ${step.badgeColor} flex items-center justify-center font-extrabold text-base shadow-sm font-mono`}>
                    {step.number}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F4F1E8] text-[#64748B] border border-[#E2E8F0]">
                    {step.highlight}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2 mb-8">
                  <h3 className="text-lg font-bold text-[#172033] font-['Outfit'] group-hover:text-[#101828] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {step.subtitle}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => navigateTo(step.actionView)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#172033] bg-[#F4F1E8] hover:bg-[#F5C451] hover:text-[#101828] border border-[#CBD5E1] hover:border-[#F5C451] transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <span>{step.actionLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
