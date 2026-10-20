import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useApp();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-[#F8FAFC] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F5C451]/40 cursor-pointer"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-[#F5C451]" />
        ) : (
          <Moon className="w-4 h-4 text-[#F5C451]" />
        )}
      </div>
    </button>
  );
}
