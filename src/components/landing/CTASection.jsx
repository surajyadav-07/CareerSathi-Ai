import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Compass } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function CTASection() {
  const { navigateTo } = useApp();

  return (
    <section className="py-20 bg-[#0B1220] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#182338] via-[#101828] to-[#0B1220] border border-[#334155] text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          
          {/* Subtle Decorative Warm Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F5C451]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#E99A55]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-[#F5C451] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#F5C451]" />
              <span>Accessible to Every Student & Family</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Outfit'] text-[#F8FAFC]">
              Ready to Discover Where Your Strengths Lead?
            </h2>

            <p className="text-[#B5C0D0] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Join students and parents exploring informed, confident educational decisions without unnecessary pressure or guesswork.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigateTo('assessment')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-[#101828] bg-[#F5C451] hover:bg-[#FFD36A] shadow-xl shadow-[#F5C451]/20 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#101828] group-hover:rotate-45 transition-transform" />
                <span>Start Free Assessment</span>
                <ArrowRight className="w-4 h-4 text-[#101828] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('family')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-[#F8FAFC] bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 hover:border-white/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 text-[#E99A55]" />
                <span>Explore Family Guide</span>
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#B5C0D0]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#16845B]" /> No signup required
              </span>
              <span className="text-white/20">•</span>
              <span>5-minute completion</span>
              <span className="text-white/20">•</span>
              <span>100% Educational</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
