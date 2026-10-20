import React from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import DemoBadge from './DemoBadge';

export default function Footer() {
  const { navigateTo } = useApp();

  return (
    <footer className="w-full bg-[#0B1220] text-[#B5C0D0] border-t border-[#334155] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand & Mission column */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => navigateTo('landing')}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F5C451] text-[#101828] flex items-center justify-center font-extrabold shadow-sm">
                <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-[#F8FAFC] font-['Outfit']">
                  CareerSaathi
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#F5C451] text-[#101828] font-mono">
                  AI
                </span>
              </div>
            </div>

            <p className="text-sm text-[#B5C0D0] leading-relaxed max-w-sm">
              Discover your natural strengths, explore practical job-ready vocational courses, and make confident career decisions together with your family.
            </p>

            <div className="pt-2">
              <DemoBadge text="Educational Demo Simulation — Sample guidance platform" size="sm" />
            </div>
          </div>

          {/* Quick Tools */}
          <div>
            <h4 className="text-[#F8FAFC] font-bold text-xs tracking-wider uppercase mb-4 font-mono">
              Core Features
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => navigateTo('assessment')} className="hover:text-[#F5C451] transition-colors flex items-center gap-1 cursor-pointer">
                  <span>5-Min Assessment</span>
                  <Sparkles className="w-3 h-3 text-[#F5C451]" />
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('explorer')} className="hover:text-[#F5C451] transition-colors cursor-pointer">
                  Career Explorer
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('compare')} className="hover:text-[#F5C451] transition-colors cursor-pointer">
                  Course Comparison Table
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('family')} className="hover:text-[#F5C451] transition-colors cursor-pointer">
                  Family Decision Support
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('roadmap')} className="hover:text-[#F5C451] transition-colors cursor-pointer">
                  5-Stage Career Roadmap
                </button>
              </li>
            </ul>
          </div>

          {/* Career Pathways */}
          <div>
            <h4 className="text-[#F8FAFC] font-bold text-xs tracking-wider uppercase mb-4 font-mono">
              Pathways
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => navigateTo('explorer')} className="hover:text-[#F5C451] transition-colors cursor-pointer">
                  Technology & Software
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('explorer')} className="hover:text-[#F5C451] transition-colors cursor-pointer">
                  UI/UX & Product Design
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('explorer')} className="hover:text-[#F5C451] transition-colors cursor-pointer">
                  Solar & Clean Energy
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('explorer')} className="hover:text-[#F5C451] transition-colors cursor-pointer">
                  Electric Vehicles (EV)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('explorer')} className="hover:text-[#F5C451] transition-colors cursor-pointer">
                  Medical Laboratory Tech
                </button>
              </li>
            </ul>
          </div>

          {/* Transparent Philosophy */}
          <div>
            <h4 className="text-[#F8FAFC] font-bold text-xs tracking-wider uppercase mb-4 font-mono">
              Student Guidance
            </h4>
            <p className="text-xs text-[#B5C0D0] leading-relaxed mb-3">
              We believe in transparent, stress-free career exploration. No single test determines your destiny. Use this platform to spark conversations and research accredited institutes.
            </p>
            <div className="p-3.5 rounded-xl bg-[#182338] border border-[#334155] text-xs text-[#F8FAFC]">
              <span className="font-semibold text-[#F5C451] block mb-0.5">Need help starting?</span>
              Take the 5-minute self-discovery assessment to see tailored options.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-[#334155] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B5C0D0]">
          <p>© 2026 CareerSaathi AI. Built for educational exploration and student empowerment.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#B5C0D0]">
              <span>Frontend Demo System</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#16845B]" />
            </span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="text-[#B5C0D0] hover:text-[#F8FAFC] transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
