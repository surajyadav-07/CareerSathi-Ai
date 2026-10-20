import React, { useState } from 'react';
import { Compass, Menu, X, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Navbar() {
  const { currentView, navigateTo, comparisonList, roadmapPercent, favorites } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'landing', label: 'Home' },
    { id: 'dashboard', label: 'Dashboard', badge: null },
    { id: 'assessment', label: 'Assessment', highlight: true },
    { id: 'explorer', label: 'Career Explorer', badge: favorites.length > 0 ? `${favorites.length}` : null },
    { id: 'compare', label: 'Compare Courses', badge: comparisonList.length > 0 ? `${comparisonList.length}` : null },
    { id: 'family', label: 'Family Guide' },
    { id: 'roadmap', label: 'Roadmap', badge: `${roadmapPercent}%` }
  ];

  const handleNav = (viewId) => {
    navigateTo(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#101828] text-[#F8FAFC] border-b border-[#334155] shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleNav('landing')} 
          className="flex items-center gap-3 cursor-pointer group py-2"
        >
          <div className="w-10 h-10 rounded-xl bg-[#F5C451] text-[#101828] flex items-center justify-center font-extrabold shadow-sm group-hover:scale-105 transition-all duration-200">
            <Compass className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-[#F8FAFC] font-['Outfit']">
                CareerSaathi
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#F5C451] text-[#101828] font-mono tracking-wider">
                AI
              </span>
            </div>
            <span className="text-[10px] text-[#B5C0D0] font-medium -mt-1 hidden sm:inline">
              Career Guidance Platform
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-2xl bg-white/[0.04] border border-[#334155]">
          {navLinks.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`relative px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'text-[#101828] bg-[#F5C451] font-bold shadow-xs'
                    : 'text-[#B5C0D0] hover:text-[#F8FAFC] hover:bg-white/[0.06] border border-transparent'
                }`}
              >
                {item.label}
                {item.badge && (
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    isActive 
                      ? 'bg-[#101828] text-[#F5C451]' 
                      : 'bg-white/10 text-white/90'
                  }`}>
                    {item.badge}
                  </span>
                )}
                {item.highlight && !isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E99A55] animate-pulse" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Primary CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNav('assessment')}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#F5C451] hover:bg-[#FFD36A] text-[#101828] shadow-xs transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#101828]" />
            <span>Find My Career</span>
          </button>
        </div>

        {/* Mobile controls & toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile navigation menu"
            className="p-2 rounded-xl text-[#F8FAFC] bg-white/5 border border-[#334155] hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#334155] bg-[#182338] px-4 pt-3 pb-6 space-y-1.5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#F5C451] text-[#101828] font-bold'
                    : 'text-[#B5C0D0] hover:text-[#F8FAFC] hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/10 text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-3 border-t border-[#334155]">
            <button
              onClick={() => handleNav('assessment')}
              className="w-full py-3 rounded-xl font-bold text-sm bg-[#F5C451] text-[#101828] text-center shadow-xs cursor-pointer"
            >
              Start Free Assessment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
