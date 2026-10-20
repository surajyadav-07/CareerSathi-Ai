import React, { useState } from 'react';
import HeroSection from '../components/landing/HeroSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import CTASection from '../components/landing/CTASection';
import { useApp } from '../context/AppContext';
import { CAREERS_DATA } from '../data/careersData';
import { Sparkles, Code, Palette, Zap, BarChart3, HeartPulse, ChevronRight } from 'lucide-react';

export default function LandingPage() {
  const { navigateTo } = useApp();
  const [selectedQuickPill, setSelectedQuickPill] = useState('tech');

  const previewCategories = [
    { id: 'tech', label: 'Software & Web', icon: Code, careerId: 'fullstack-dev' },
    { id: 'design', label: 'UI/UX & Creative', icon: Palette, careerId: 'uiux-designer' },
    { id: 'cleanenergy', label: 'Solar & EV Tech', icon: Zap, careerId: 'solar-energy-tech' },
    { id: 'analytics', label: 'Data & Growth', icon: BarChart3, careerId: 'data-analyst' },
    { id: 'health', label: 'Diagnostic Tech', icon: HeartPulse, careerId: 'healthcare-lab-tech' }
  ];

  const activeCareer = CAREERS_DATA.find(c => c.id === previewCategories.find(p => p.id === selectedQuickPill)?.careerId) || CAREERS_DATA[0];

  return (
    <div className="w-full">
      {/* 1. Hero Section (Deep Navy Gradient) */}
      <HeroSection />

      {/* 2. Key Benefits & Instant Peek Section (Cool Blue-Gray #E9EEF5) */}
      <section className="py-16 bg-[#E9EEF5] border-b border-[#CBD5E1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Key Benefits 3-Card Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F5C451] text-[#101828] flex items-center justify-center shrink-0 font-bold">
                1
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#172033] font-['Outfit']">Identify Real Strengths</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Understand your natural problem-solving habits and interests without academic stress or tests.
                </p>
              </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#182338] text-[#F5C451] flex items-center justify-center shrink-0 font-bold">
                2
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#172033] font-['Outfit']">Explore Practical Roles</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Browse high-demand modern careers, realistic timelines, and required vocational skill sets.
                </p>
              </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#E99A55] text-[#101828] flex items-center justify-center shrink-0 font-bold">
                3
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#172033] font-['Outfit']">Family Alignment</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Bridge questions between students and parents with transparent facts, fees, and guided conversations.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Career Teaser Card */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border border-[#E2E8F0] shadow-md">
            
            <div className="space-y-3 max-w-md text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182338]/5 text-[#101828] border border-[#CBD5E1] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#E99A55]" />
                <span>Career Sneak Peek</span>
              </div>
              <h3 className="text-2xl font-bold text-[#172033] font-['Outfit']">
                What area naturally sparks your interest?
              </h3>
              <p className="text-sm text-[#64748B]">
                Click a category below to preview what entry-level training and practical roles look like.
              </p>

              {/* Pills */}
              <div className="flex flex-wrap gap-2 pt-2 justify-center lg:justify-start">
                {previewCategories.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedQuickPill === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedQuickPill(cat.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#F5C451] text-[#101828] shadow-sm font-bold'
                          : 'bg-[#F4F1E8] text-[#172033] border border-[#E2E8F0] hover:border-[#CBD5E1]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 text-[#101828]" />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Preview Card */}
            <div className="w-full lg:max-w-md bg-[#F4F1E8] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#182338] text-[#F8FAFC]">
                  {activeCareer.category}
                </span>
                <span className="text-xs font-bold text-[#16845B] bg-[#16845B]/10 border border-[#16845B]/30 px-2.5 py-0.5 rounded-full font-mono">
                  {activeCareer.demandLevel}
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#172033] font-['Outfit']">
                  {activeCareer.title}
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2 leading-relaxed">
                  {activeCareer.shortDescription}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs bg-[#FFFFFF] p-3 rounded-xl border border-[#E2E8F0]">
                <div>
                  <span className="text-[#64748B] block text-[10px]">Training Duration</span>
                  <span className="font-bold text-[#172033]">{activeCareer.duration}</span>
                </div>
                <div>
                  <span className="text-[#64748B] block text-[10px]">Entry Salary Range</span>
                  <span className="font-bold text-[#172033]">{activeCareer.avgStartingSalary}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => navigateTo('explorer', { career: activeCareer })}
                  className="text-xs font-bold text-[#101828] hover:text-[#E99A55] flex items-center gap-1 group cursor-pointer transition-colors"
                >
                  <span>Learn more details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigateTo('assessment')}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-[#101828] bg-[#F5C451] hover:bg-[#FFD36A] transition-colors shadow-sm cursor-pointer"
                >
                  Match My Fit
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. How It Works Section (Soft Warm Beige #F4F1E8) */}
      <HowItWorksSection />

      {/* 4. Features & Pillars Section (Dark Navy #101828) */}
      <FeaturesSection />

      {/* 5. Call to Action Banner (Deep Navy #0B1220) */}
      <CTASection />
    </div>
  );
}
