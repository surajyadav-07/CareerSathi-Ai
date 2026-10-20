import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import Student3DIllustration from '../illustrations/Student3DIllustration';
import DemoBadge from '../common/DemoBadge';

export default function HeroSection() {
  const { navigateTo } = useApp();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1220] via-[#101828] to-[#182338] text-[#F8FAFC] pt-10 pb-16 lg:pt-20 lg:pb-24 border-b border-[#334155]">
      {/* Background restrained ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-12 left-10 w-96 h-96 bg-[#F5C451]/10 rounded-full blur-3xl" />
        <div className="absolute top-36 right-10 w-96 h-96 bg-[#E99A55]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Supporting Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Announcement */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F5C451]" />
              <span className="text-xs font-semibold text-[#F8FAFC]">
                Intelligent Career Guidance
              </span>
              <span className="text-white/20">|</span>
              <span className="text-xs text-[#B5C0D0] font-mono">Student & Family Platform</span>
            </div>

            {/* Exact Master Hero Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.12] font-['Outfit']">
              Your Future. <br className="hidden sm:inline" />
              <span className="text-[#F5C451]">Your Strengths.</span> <br className="hidden sm:inline" />
              <span className="text-[#E99A55]">Your Career.</span>
            </h1>

            {/* Exact Master Subtitle */}
            <p className="text-base sm:text-lg text-[#B5C0D0] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Discover your strengths, explore career opportunities, and build a practical roadmap designed around your goals.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => navigateTo('assessment')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-[#101828] bg-[#F5C451] hover:bg-[#FFD36A] shadow-lg shadow-[#F5C451]/25 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#101828] group-hover:rotate-45 transition-transform" />
                <span>Find My Career Path</span>
                <ArrowRight className="w-4 h-4 text-[#101828] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('explorer')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-[#F8FAFC] bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 hover:border-white/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Careers</span>
              </button>
            </div>

            {/* Concise Value Propositions */}
            <div className="pt-6 border-t border-[#334155] grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] font-['Outfit']">5 Mins</div>
                <div className="text-xs text-[#B5C0D0]">Clear Assessment</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-extrabold text-[#F5C451] font-['Outfit']">100% Free</div>
                <div className="text-xs text-[#B5C0D0]">Open Exploration</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-extrabold text-[#E99A55] font-['Outfit']">Step-by-Step</div>
                <div className="text-xs text-[#B5C0D0]">Actionable Roadmap</div>
              </div>
            </div>

            <div className="pt-1 flex items-center justify-center lg:justify-start">
              <DemoBadge text="Interactive Guidance Prototype — Sample Educational Pathways" size="xs" />
            </div>

          </div>

          {/* Right Column: Polished Career Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <Student3DIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}
