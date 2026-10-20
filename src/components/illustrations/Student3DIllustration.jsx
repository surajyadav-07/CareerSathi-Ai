import React from 'react';
import { Compass, BookOpen, Target, Star } from 'lucide-react';

export default function Student3DIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center py-6 select-none">
      {/* Ambient warm yellow/orange glow */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#F5C451]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-[#E99A55]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main isometric platform ring */}
      <div className="relative w-full aspect-square max-w-[420px] flex items-center justify-center">
        
        {/* Deep dark pedestal */}
        <div className="absolute bottom-6 w-3/4 h-20 bg-gradient-to-tr from-[#0B1220] via-[#182338] to-[#101828] rounded-full blur-md transform scale-y-50 -rotate-3 border border-[#334155] shadow-2xl" />

        {/* Central Student Character with Navy & Warm Yellow Accents */}
        <div className="relative z-10 w-80 h-96 flex items-center justify-center">
          <svg
            viewBox="0 0 400 450"
            className="w-full h-full drop-shadow-[0_16px_32px_rgba(16,24,40,0.4)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Natural Skin Tone Gradient */}
              <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FBD5B5" />
                <stop offset="100%" stopColor="#E29E75" />
              </linearGradient>

              <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#0B1220" />
              </linearGradient>

              {/* Navy Hoodie Gradient */}
              <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#202D42" />
                <stop offset="50%" stopColor="#182338" />
                <stop offset="100%" stopColor="#101828" />
              </linearGradient>

              {/* Warm Yellow Accent Gradient */}
              <linearGradient id="yellowAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD36A" />
                <stop offset="100%" stopColor="#F5C451" />
              </linearGradient>

              {/* Soft Orange Gradient */}
              <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFAA6C" />
                <stop offset="100%" stopColor="#E99A55" />
              </linearGradient>

              <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
              </linearGradient>

              <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0B1220" floodOpacity="0.5" />
              </filter>
            </defs>

            {/* Back Accent Ring - Static clean ring */}
            <circle cx="200" cy="220" r="160" stroke="#F5C451" strokeWidth="2" strokeDasharray="8 8" opacity="0.25" />

            {/* Body / Hoodie */}
            <path
              d="M130 390 C130 330 150 280 200 280 C250 280 270 330 270 390 L130 390 Z"
              fill="url(#hoodieGrad)"
            />
            {/* Hoodie Collar Fold */}
            <path
              d="M165 285 C180 320 220 320 235 285 C220 300 180 300 165 285 Z"
              fill="#101828"
            />
            {/* Drawstrings in warm yellow */}
            <path
              d="M185 295 L180 360"
              stroke="#F5C451"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M215 295 L220 360"
              stroke="#F5C451"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Neck */}
            <rect x="185" y="225" width="30" height="40" rx="10" fill="url(#skinGrad)" />

            {/* Head */}
            <ellipse cx="200" cy="180" rx="55" ry="62" fill="url(#skinGrad)" />

            {/* Hair */}
            <path
              d="M142 170 C140 120 160 95 200 95 C245 95 260 125 258 170 C250 140 230 125 200 125 C170 125 152 145 142 170 Z"
              fill="url(#hairGrad)"
            />
            <path
              d="M140 175 C135 150 145 125 165 110 C185 95 230 92 255 115 C260 135 258 160 258 175 C250 145 235 130 200 130 C165 130 148 150 140 175 Z"
              fill="#0B1220"
              opacity="0.4"
            />

            {/* Ears */}
            <ellipse cx="145" cy="182" rx="10" ry="14" fill="#E29E75" />
            <ellipse cx="255" cy="182" rx="10" ry="14" fill="#E29E75" />

            {/* Modern Wireless Headphones */}
            <path
              d="M135 175 C132 100 268 100 265 175"
              stroke="url(#yellowAccentGrad)"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            <rect x="130" y="165" width="16" height="34" rx="8" fill="#182338" />
            <rect x="254" y="165" width="16" height="34" rx="8" fill="#182338" />
            <circle cx="138" cy="182" r="3.5" fill="#F5C451" />
            <circle cx="262" cy="182" r="3.5" fill="#F5C451" />

            {/* Modern Glasses with Warm Gold Rim */}
            <rect x="160" y="165" width="34" height="24" rx="8" stroke="#F5C451" strokeWidth="2.5" fill="#FFFFFF" fillOpacity="0.2" />
            <rect x="206" y="165" width="34" height="24" rx="8" stroke="#F5C451" strokeWidth="2.5" fill="#FFFFFF" fillOpacity="0.2" />
            <path d="M194 175 L206 175" stroke="#F5C451" strokeWidth="2.5" />

            {/* Friendly Eyes */}
            <circle cx="177" cy="177" r="4.5" fill="#0B1220" />
            <circle cx="223" cy="177" r="4.5" fill="#0B1220" />
            <circle cx="178.5" cy="175.5" r="1.5" fill="#FFFFFF" />
            <circle cx="224.5" cy="175.5" r="1.5" fill="#FFFFFF" />

            {/* Cheerful Smile */}
            <path
              d="M185 204 Q200 216 215 204"
              stroke="#B45309"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Digital Tablet in Hands */}
            <g transform="translate(130, 290) rotate(-6)">
              <rect x="0" y="0" width="145" height="95" rx="14" fill="#0B1220" filter="url(#cardShadow)" />
              <rect x="5" y="5" width="135" height="85" rx="10" fill="#182338" />
              {/* Tablet Screen UI Mockup */}
              <rect x="15" y="15" width="50" height="8" rx="4" fill="#F5C451" />
              <rect x="15" y="30" width="80" height="5" rx="2.5" fill="#F8FAFC" fillOpacity="0.8" />
              <circle cx="115" cy="35" r="12" fill="#E99A55" fillOpacity="0.3" />
              <path d="M15 55 L35 45 L55 52 L80 38 L105 44" stroke="#F5C451" strokeWidth="3" strokeLinecap="round" fill="none" />
              <rect x="15" y="65" width="45" height="15" rx="6" fill="#16845B" />
              {/* Screen Reflection highlight */}
              <path d="M5 5 L140 5 L85 90 L5 90 Z" fill="url(#glassReflection)" opacity="0.3" />
            </g>

            {/* Holding Hands */}
            <ellipse cx="140" cy="325" rx="15" ry="12" fill="url(#skinGrad)" />
            <ellipse cx="265" cy="315" rx="15" ry="12" fill="url(#skinGrad)" />

            {/* Subtle Sparkle Accents in warm gold */}
            <g opacity="0.85">
              <polygon points="90,130 95,142 108,144 98,154 101,167 90,160 79,167 82,154 72,144 85,142" fill="#F5C451" />
              <polygon points="315,100 318,108 327,110 320,117 322,126 315,121 308,126 310,117 303,110 312,108" fill="#E99A55" />
            </g>
          </svg>
        </div>

        {/* --- Floating Card 1: Discover Skills (Top Left) --- */}
        <div className="absolute -top-4 -left-6 sm:-left-10 z-20">
          <div className="bg-[#182338]/95 rounded-2xl p-3.5 shadow-2xl border border-[#334155] flex items-center gap-3 backdrop-blur-md hover:border-[#F5C451]/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#F5C451] flex items-center justify-center text-[#101828] shadow-md">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-[#F5C451] uppercase tracking-wider font-mono">Step 1</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#16845B]" />
              </div>
              <h4 className="text-sm font-bold text-[#F8FAFC]">Discover Skills</h4>
              <p className="text-[11px] text-[#B5C0D0]">Match natural strengths</p>
            </div>
          </div>
        </div>

        {/* --- Floating Card 2: Explore Courses (Bottom Left / Center) --- */}
        <div className="absolute -bottom-4 -left-4 sm:-left-8 z-20">
          <div className="bg-[#182338]/95 rounded-2xl p-3.5 shadow-2xl border border-[#334155] flex items-center gap-3 backdrop-blur-md hover:border-[#E99A55]/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#202D42] border border-[#334155] flex items-center justify-center text-[#F5C451] shadow-md">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <div className="flex text-[#F5C451]">
                  <Star className="w-3 h-3 fill-[#F5C451]" />
                  <Star className="w-3 h-3 fill-[#F5C451]" />
                  <Star className="w-3 h-3 fill-[#F5C451]" />
                </div>
                <span className="text-[10px] font-bold text-[#B5C0D0]">4.9/5</span>
              </div>
              <h4 className="text-sm font-bold text-[#F8FAFC]">Explore Courses</h4>
              <p className="text-[11px] text-[#E99A55] font-medium">Practical & Job-Ready</p>
            </div>
          </div>
        </div>

        {/* --- Floating Card 3: Plan Your Future (Top Right) --- */}
        <div className="absolute top-12 -right-4 sm:-right-10 z-20">
          <div className="bg-[#182338]/95 rounded-2xl p-3.5 shadow-2xl border border-[#334155] flex items-center gap-3 backdrop-blur-md hover:border-[#F5C451]/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#E99A55]/15 border border-[#E99A55]/30 flex items-center justify-center text-[#E99A55] shadow-md">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#16845B]/20 text-[#16845B] border border-[#16845B]/30 font-mono">95% Match</span>
              </div>
              <h4 className="text-sm font-bold text-[#F8FAFC]">Plan Your Future</h4>
              <p className="text-[11px] text-[#B5C0D0]">Step-by-step clarity</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
