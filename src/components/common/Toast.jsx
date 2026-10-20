import React from 'react';
import { CheckCircle2, AlertTriangle, Info } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Toast() {
  const { toast } = useApp();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-[#16845B] shrink-0" />,
    warning: <AlertTriangle className="w-5 h-5 text-[#E99A55] shrink-0" />,
    info: <Info className="w-5 h-5 text-[#F5C451] shrink-0" />
  };

  const borders = {
    success: "border-[#16845B]/40",
    warning: "border-[#E99A55]/40",
    info: "border-[#F5C451]/40"
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all duration-300">
      <div className={`bg-[#101828] border ${borders[toast.type] || borders.info} px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 max-w-sm`}>
        {icons[toast.type] || icons.info}
        <p className="text-sm font-medium text-white">{toast.message}</p>
      </div>
    </div>
  );
}
