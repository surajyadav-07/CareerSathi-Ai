import React from 'react';

export default function FamilyIllustration() {
  return (
    <div className="relative w-full max-w-sm mx-auto flex items-center justify-center p-4 select-none">
      <div className="absolute inset-0 bg-gradient-to-r from-[#F5C451]/15 via-[#E99A55]/10 to-[#101828]/20 rounded-3xl blur-2xl pointer-events-none" />
      <svg
        viewBox="0 0 320 220"
        className="w-full h-auto drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="famGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#182338" />
            <stop offset="100%" stopColor="#101828" />
          </linearGradient>
          <linearGradient id="famGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#202D42" />
            <stop offset="100%" stopColor="#182338" />
          </linearGradient>
          <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5C451" />
            <stop offset="100%" stopColor="#E99A55" />
          </linearGradient>
        </defs>

        {/* Living Room / Table Discussion Bench */}
        <rect x="30" y="180" width="260" height="12" rx="6" fill="#334155" opacity="0.8" />
        <ellipse cx="160" cy="195" rx="110" ry="14" fill="#0B1220" opacity="0.4" />

        {/* Parent Figure (Left) */}
        <circle cx="100" cy="70" r="28" fill="#FBD5B5" />
        <path d="M78 62 C80 40 120 40 122 62 Z" fill="#334155" />
        <path d="M60 180 C60 125 80 110 100 110 C120 110 140 125 140 180 Z" fill="url(#famGrad1)" stroke="#334155" strokeWidth="1" />
        {/* Parent Glasses in gold */}
        <rect x="88" y="66" width="12" height="8" rx="2" stroke="#F5C451" strokeWidth="1.5" fill="none" />
        <rect x="104" y="66" width="12" height="8" rx="2" stroke="#F5C451" strokeWidth="1.5" fill="none" />
        <path d="M100 70 L104 70" stroke="#F5C451" strokeWidth="1.5" />
        {/* Smile */}
        <path d="M96 85 Q102 91 108 85" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Student Figure (Right) */}
        <circle cx="215" cy="80" r="26" fill="#FBD5B5" />
        <path d="M192 75 C195 50 235 50 238 75 Z" fill="#182338" />
        <path d="M175 180 C175 130 195 120 215 120 C235 120 255 130 255 180 Z" fill="url(#famGrad2)" stroke="#334155" strokeWidth="1" />
        {/* Student Headset */}
        <path d="M190 78 C190 55 240 55 240 78" stroke="#F5C451" strokeWidth="3" strokeLinecap="round" fill="none" />
        <rect x="187" y="74" width="6" height="12" rx="3" fill="#E99A55" />
        <rect x="237" y="74" width="6" height="12" rx="3" fill="#E99A55" />
        {/* Smile */}
        <path d="M210 93 Q216 99 222 93" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Shared Discussion Tablet on Table */}
        <rect x="135" y="145" width="50" height="34" rx="4" fill="#0B1220" stroke="#334155" strokeWidth="1" />
        <rect x="138" y="148" width="44" height="28" rx="2" fill="#182338" />
        <path d="M142 165 L150 156 L158 162 L172 153" stroke="#F5C451" strokeWidth="2" strokeLinecap="round" />

        {/* Floating Harmony Symbol */}
        <g transform="translate(145, 45) scale(0.8)">
          <path
            d="M20 34 C-10 15 10 -5 20 8 C30 -5 50 15 20 34 Z"
            fill="url(#heartGrad)"
            opacity="0.95"
          />
        </g>
        
        {/* Floating Speech bubbles in dark navy & warm yellow */}
        <rect x="50" y="25" width="40" height="20" rx="8" fill="#182338" stroke="#334155" strokeWidth="1" />
        <circle cx="62" cy="35" r="2.5" fill="#F5C451" />
        <circle cx="70" cy="35" r="2.5" fill="#F5C451" />
        <circle cx="78" cy="35" r="2.5" fill="#F5C451" />

        <rect x="225" y="30" width="40" height="20" rx="8" fill="#182338" stroke="#334155" strokeWidth="1" />
        <circle cx="237" cy="40" r="2.5" fill="#E99A55" />
        <circle cx="245" cy="40" r="2.5" fill="#E99A55" />
        <circle cx="253" cy="40" r="2.5" fill="#E99A55" />
      </svg>
    </div>
  );
}
