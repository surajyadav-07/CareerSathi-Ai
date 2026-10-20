import React from 'react';

export default function AssessmentCompleteIllustration() {
  return (
    <div className="relative w-40 h-40 mx-auto flex items-center justify-center select-none">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#F5C451]/20 via-[#E99A55]/15 to-[#16845B]/15 rounded-full blur-2xl animate-pulse-subtle" />
      <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="trophyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD36A" />
            <stop offset="60%" stopColor="#F5C451" />
            <stop offset="100%" stopColor="#E99A55" />
          </linearGradient>
          <linearGradient id="badgeRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#182338" />
            <stop offset="100%" stopColor="#101828" />
          </linearGradient>
        </defs>

        {/* Outer Laurel / Starburst Ring */}
        <circle cx="80" cy="75" r="54" fill="#182338" stroke="#F5C451" strokeOpacity="0.4" strokeWidth="2" />

        {/* Ribbons */}
        <path d="M60 115 L50 150 L68 140 L80 152 L80 115 Z" fill="url(#badgeRibbon)" stroke="#334155" strokeWidth="1" />
        <path d="M100 115 L110 150 L92 140 L80 152 L80 115 Z" fill="#101828" stroke="#334155" strokeWidth="1" />

        {/* Trophy Body */}
        <path d="M55 50 C55 80 70 95 80 95 C90 95 105 80 105 50 Z" fill="url(#trophyGrad)" />
        {/* Handles */}
        <path d="M55 58 C42 58 42 75 56 75" stroke="#E99A55" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M105 58 C118 58 118 75 104 75" stroke="#E99A55" strokeWidth="4" strokeLinecap="round" fill="none" />
        {/* Base */}
        <path d="M74 95 L74 110 L86 110 L86 95 Z" fill="#E99A55" />
        <rect x="62" y="110" width="36" height="12" rx="4" fill="#C27838" />

        {/* Central Star in Trophy */}
        <polygon points="80,55 83,63 92,64 85,71 87,80 80,75 73,80 75,71 68,64 77,63" fill="#FFFFFF" />

        {/* Subtle Floating Stars */}
        <polygon points="40,30 42,35 48,36 43,41 45,47 40,44 35,47 37,41 32,36 38,35" fill="#F5C451" />
        <polygon points="120,35 122,39 127,40 123,44 124,49 120,46 116,49 117,44 113,40 118,39" fill="#16845B" />
      </svg>
    </div>
  );
}
