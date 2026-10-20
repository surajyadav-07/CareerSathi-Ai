import React from 'react';
import { Info } from 'lucide-react';

export default function DemoBadge({ text = "Educational Demo Info", size = "sm" }) {
  const sizeClasses = size === 'xs' 
    ? "text-[10px] px-2 py-0.5" 
    : "text-xs px-2.5 py-1";

  return (
    <span className={`inline-flex items-center gap-1.5 font-medium rounded-full bg-white/[0.06] text-[#B5C0D0] border border-white/10 ${sizeClasses}`}>
      <Info className="w-3 h-3 text-[#F5C451] shrink-0" />
      <span>{text}</span>
    </span>
  );
}
