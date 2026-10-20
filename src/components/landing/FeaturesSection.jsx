import React from 'react';
import { Sparkles, BookOpen, HeartHandshake, ArrowRight, Award, Target, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function FeaturesSection() {
  const { navigateTo } = useApp();

  const features = [
    {
      id: "personalized-guidance",
      title: "Personalized Career Assessment",
      subtitle: "Evaluate natural problem-solving habits, work styles, and passions—free of academic bias or pressure.",
      icon: Sparkles,
      iconBg: "bg-[#F5C451]/15 text-[#F5C451] border border-[#F5C451]/30",
      benefits: [
        "Uncovers your natural career archetype",
        "Plain-English explanations of why questions matter",
        "Top 3 career recommendations with match breakdown"
      ],
      actionText: "Take 5-Min Assessment",
      targetView: "assessment"
    },
    {
      id: "vocational-explorer",
      title: "Vocational Career Explorer",
      subtitle: "Filter, search, and inspect practical diploma courses, training durations, and transparent fee estimations.",
      icon: BookOpen,
      iconBg: "bg-[#E99A55]/15 text-[#E99A55] border border-[#E99A55]/30",
      benefits: [
        "Side-by-side comparison of up to 3 programs",
        "Clear eligibility filters (10th, 12th, Graduate)",
        "Curated practical skills & portfolio project breakdown"
      ],
      actionText: "Explore All Careers",
      targetView: "explorer"
    },
    {
      id: "family-support",
      title: "Family Decision Support",
      subtitle: "Bridge generational differences with structured, respectful discussion guides and local discussion notes.",
      icon: HeartHandshake,
      iconBg: "bg-[#F5C451]/15 text-[#F5C451] border border-[#F5C451]/30",
      benefits: [
        "Questions students can ask parents openly",
        "Inquiries parents can ask to understand modern fields",
        "Shared notes & agreements saved locally"
      ],
      actionText: "Open Family Guide",
      targetView: "family"
    },
    {
      id: "step-by-step-roadmap",
      title: "Step-by-Step Career Roadmap",
      subtitle: "A 5-stage interactive timeline guiding you from initial curiosity to your first real-world internship and job.",
      icon: Target,
      iconBg: "bg-[#16845B]/15 text-[#16845B] border border-[#16845B]/30",
      benefits: [
        "5 progressive stages with actionable tasks",
        "Interactive completion checkboxes saved on refresh",
        "Practical portfolio and interview launch tips"
      ],
      actionText: "Track Your Roadmap",
      targetView: "roadmap"
    }
  ];

  return (
    <section className="py-20 bg-[#101828] text-[#F8FAFC] border-b border-[#334155] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] text-[#F5C451] border border-white/10 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#F5C451]" />
            <span>Built For Practical Success</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] font-['Outfit'] tracking-tight">
            Four Pillars of CareerSaathi AI
          </h2>
          <p className="text-[#B5C0D0] text-base sm:text-lg">
            Everything a student or parent needs to move from hesitation to a confident, job-ready career choice.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="group relative bg-[#182338] hover:bg-[#202D42] rounded-2xl p-7 sm:p-8 border border-[#334155] hover:border-[#F5C451]/50 shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl ${feat.iconBg} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-white/30 uppercase tracking-widest font-mono">
                      PILLAR
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F8FAFC] font-['Outfit'] group-hover:text-[#F5C451] transition-colors mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-[#B5C0D0] leading-relaxed mb-6">
                    {feat.subtitle}
                  </p>

                  {/* Bullet Benefits with Emerald Checks */}
                  <ul className="space-y-2.5 mb-8">
                    {feat.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#F8FAFC]">
                        <span className="w-4 h-4 rounded-full bg-[#16845B]/20 border border-[#16845B]/40 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#16845B]" />
                        </span>
                        <span className="leading-tight text-[#B5C0D0]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#334155]">
                  <button
                    onClick={() => navigateTo(feat.targetView)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#F8FAFC] bg-white/[0.06] hover:bg-[#F5C451] hover:text-[#101828] border border-white/10 hover:border-[#F5C451] transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <span>{feat.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
