import React, { useState, useMemo } from 'react';
import { 
  Search, Star, Clock, X, ChevronRight 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CAREERS_DATA, CAREER_CATEGORIES, EDUCATION_FILTERS, DURATION_FILTERS } from '../data/careersData';
import DemoBadge from '../components/common/DemoBadge';

export default function ExplorerPage() {
  const { 
    favorites, 
    toggleFavorite, 
    selectedCareerModal, 
    setSelectedCareerModal, 
    navigateTo 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedEducation, setSelectedEducation] = useState('All Education Levels');
  const [selectedDuration, setSelectedDuration] = useState('All Durations');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // Filter careers
  const filteredCareers = useMemo(() => {
    return CAREERS_DATA.filter((career) => {
      // Favorites filter
      if (showOnlyFavorites && !favorites.includes(career.id)) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'All Categories' && career.category !== selectedCategory) {
        return false;
      }

      // Education filter
      if (selectedEducation !== 'All Education Levels') {
        if (selectedEducation === 'After 10th / ITI' && !career.educationLevel.includes('10th')) return false;
        if (selectedEducation === 'After 12th / Intermediate' && !career.educationLevel.includes('12th')) return false;
        if (selectedEducation === 'Diploma / Graduate' && !career.educationLevel.includes('Diploma') && !career.educationLevel.includes('Graduate')) return false;
      }

      // Duration filter
      if (selectedDuration !== 'All Durations') {
        if (selectedDuration === 'Under 6 Months' && !career.duration.includes('4') && !career.duration.includes('5')) return false;
        if (selectedDuration === '6 - 12 Months' && !career.duration.includes('6') && !career.duration.includes('8') && !career.duration.includes('12')) return false;
        if (selectedDuration === '1 - 2 Years' && !career.duration.includes('1 - 2') && !career.duration.includes('2')) return false;
      }

      // Search keyword
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = career.title.toLowerCase().includes(q);
        const matchesDesc = career.shortDescription.toLowerCase().includes(q);
        const matchesSkills = career.keySkills.some(s => s.toLowerCase().includes(q));
        const matchesCategory = career.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesSkills && !matchesCategory) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedEducation, selectedDuration, showOnlyFavorites, favorites]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setSelectedEducation('All Education Levels');
    setSelectedDuration('All Durations');
    setShowOnlyFavorites(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 transition-colors">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-bold text-[#101828] uppercase tracking-wider font-mono">
              Vocational & Modern Pathways
            </span>
            <DemoBadge text="Demo Career Directory" size="xs" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] font-['Outfit'] tracking-tight">
            Career Explorer
          </h1>
          <p className="text-sm sm:text-base text-[#64748B] max-w-2xl leading-relaxed">
            Search job-ready practical roles, inspect day-in-the-life tasks, and discover estimated training durations and fee ranges.
          </p>
        </div>

        {/* Saved Favorites quick filter toggle */}
        <button
          onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all border cursor-pointer ${
            showOnlyFavorites
              ? 'bg-[#E99A55]/15 border-[#E99A55] text-[#101828] shadow-sm'
              : 'bg-white border-[#E2E8F0] text-[#64748B] hover:text-[#172033] hover:border-[#CBD5E1]'
          }`}
        >
          <Star className={`w-4 h-4 ${showOnlyFavorites ? 'fill-[#E99A55] text-[#E99A55]' : 'text-[#64748B]'}`} />
          <span>Saved Wishlist ({favorites.length})</span>
        </button>
      </div>

      {/* Search & Filter Bar (Clean White Surface on #E9EEF5) */}
      <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm space-y-4 mb-8">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-[#64748B] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by role title, skill (e.g. React, Solar, Figma), or industry..."
            className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#172033] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#F5C451] focus:border-[#F5C451]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#172033] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {CAREER_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#F5C451] text-[#101828] font-bold shadow-xs'
                    : 'bg-[#F4F1E8] border border-[#E2E8F0] text-[#172033] hover:border-[#CBD5E1]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Secondary Dropdown Filters: Education & Duration */}
        <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-[#E2E8F0] text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-[#64748B] font-medium">Education:</span>
              <select
                value={selectedEducation}
                onChange={(e) => setSelectedEducation(e.target.value)}
                className="px-2.5 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] font-semibold text-[#172033] focus:outline-none focus:ring-1 focus:ring-[#F5C451] cursor-pointer"
              >
                {EDUCATION_FILTERS.map(ef => (
                  <option key={ef} value={ef} className="bg-white text-[#172033]">{ef}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[#64748B] font-medium">Duration:</span>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="px-2.5 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] font-semibold text-[#172033] focus:outline-none focus:ring-1 focus:ring-[#F5C451] cursor-pointer"
              >
                {DURATION_FILTERS.map(df => (
                  <option key={df} value={df} className="bg-white text-[#172033]">{df}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#64748B] font-medium font-mono text-[11px]">Showing {filteredCareers.length} career options</span>
            {(selectedCategory !== 'All Categories' || selectedEducation !== 'All Education Levels' || selectedDuration !== 'All Durations' || searchQuery || showOnlyFavorites) && (
              <button
                onClick={handleResetFilters}
                className="text-[#101828] hover:text-[#E99A55] hover:underline font-bold cursor-pointer transition-colors"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Careers Grid */}
      {filteredCareers.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#E2E8F0] p-8 space-y-4 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-[#F4F1E8] text-[#101828] mx-auto flex items-center justify-center border border-[#E2E8F0]">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-[#172033] font-['Outfit']">
            No careers matched your search criteria
          </h3>
          <p className="text-sm text-[#64748B] max-w-md mx-auto">
            Try adjusting your search terms or clearing duration and education filters to see all available pathways.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2.5 bg-[#F5C451] text-[#101828] rounded-xl text-xs font-bold hover:bg-[#FFD36A] transition-colors cursor-pointer shadow-xs"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career) => {
            const isFav = favorites.includes(career.id);
            return (
              <div
                key={career.id}
                className="group bg-white hover:bg-[#FAF9F5] rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#CBD5E1] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Category & Favorite Button */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#182338] text-[#F8FAFC]">
                      {career.category}
                    </span>
                    <button
                      onClick={() => toggleFavorite(career.id)}
                      className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                        isFav
                          ? 'bg-[#E99A55]/15 border-[#E99A55] text-[#E99A55]'
                          : 'border-[#E2E8F0] text-[#64748B] hover:text-[#172033] hover:bg-[#F8FAFC]'
                      }`}
                      title={isFav ? "Remove from wishlist" : "Save to wishlist"}
                    >
                      <Star className={`w-4 h-4 ${isFav ? 'fill-[#E99A55] text-[#E99A55]' : ''}`} />
                    </button>
                  </div>

                  {/* Title & Short description */}
                  <h3 className="text-xl font-bold text-[#172033] font-['Outfit'] group-hover:text-[#101828] transition-colors">
                    {career.title}
                  </h3>

                  <p className="text-xs text-[#64748B] mt-2 leading-relaxed line-clamp-3">
                    {career.shortDescription}
                  </p>

                  {/* Metric Chips */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-[#E2E8F0] text-xs">
                    <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <span className="text-[10px] text-[#64748B] block font-medium">Training Duration</span>
                      <span className="font-bold text-[#172033]">{career.duration}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <span className="text-[10px] text-[#64748B] block font-medium">Est. Fees Range</span>
                      <span className="font-bold text-[#172033]">{career.estFee.split('(')[0]}</span>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="mt-4">
                    <span className="text-[10px] font-semibold text-[#64748B] block mb-1.5 uppercase tracking-wider font-mono">
                      Core Skills Required:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {career.keySkills.slice(0, 3).map((sk, idx) => (
                        <span key={idx} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#F4F1E8] text-[#172033] border border-[#E2E8F0]">
                          {sk}
                        </span>
                      ))}
                      {career.keySkills.length > 3 && (
                        <span className="text-[10px] text-[#64748B] self-center">
                          +{career.keySkills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                  <button
                    onClick={() => setSelectedCareerModal(career)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#101828] hover:bg-[#182338] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Learn More & Deep Dive</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* --- Detailed Career Modal / Drawer (Elevated Navy Surface) --- */}
      {selectedCareerModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-[#182338] rounded-3xl p-6 sm:p-8 border border-[#334155] shadow-2xl my-8 space-y-6 text-[#F8FAFC]">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#F5C451] text-[#101828]">
                    {selectedCareerModal.category}
                  </span>
                  <DemoBadge text="Demo Career Blueprint" size="xs" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] font-['Outfit'] tracking-tight">
                  {selectedCareerModal.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedCareerModal(null)}
                className="p-2 rounded-xl text-[#B5C0D0] hover:text-[#F8FAFC] hover:bg-white/[0.08] cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Full Description */}
            <div className="space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5C451] font-mono">Role Overview</h4>
              <p className="text-sm text-[#B5C0D0] leading-relaxed">
                {selectedCareerModal.fullDescription}
              </p>
            </div>

            {/* Day in the Life */}
            <div className="p-4 rounded-2xl bg-[#101828] border border-[#334155] space-y-1">
              <h4 className="text-xs font-bold text-[#F5C451] flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#F5C451]" />
                <span>A Typical Day in This Role</span>
              </h4>
              <p className="text-xs text-[#B5C0D0] leading-relaxed">
                {selectedCareerModal.dayInLife}
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#202D42] border border-[#334155]">
                <span className="text-[#B5C0D0] block text-[10px]">Education Stage</span>
                <span className="font-bold text-[#F8FAFC]">{selectedCareerModal.educationLevel}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#202D42] border border-[#334155]">
                <span className="text-[#B5C0D0] block text-[10px]">Training Fees (Estimate)</span>
                <span className="font-bold text-[#F8FAFC]">{selectedCareerModal.estFee}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#202D42] border border-[#334155] col-span-2 sm:col-span-1">
                <span className="text-[#B5C0D0] block text-[10px]">Entry Salary Range</span>
                <span className="font-bold text-[#F8FAFC]">{selectedCareerModal.avgStartingSalary}</span>
              </div>
            </div>

            {/* Pros and Cons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#16845B]/15 border border-[#16845B]/30 space-y-2">
                <span className="font-bold text-[#16845B] block">Top Advantages:</span>
                <ul className="space-y-1.5 text-[#F8FAFC]">
                  {selectedCareerModal.pros.map((p, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#16845B] font-bold">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-[#E99A55]/15 border border-[#E99A55]/30 space-y-2">
                <span className="font-bold text-[#E99A55] block">Things to Keep in Mind:</span>
                <ul className="space-y-1.5 text-[#F8FAFC]">
                  {selectedCareerModal.cons.map((c, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#E99A55] font-bold">!</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Progression Ladder */}
            <div className="p-4 rounded-2xl bg-[#101828] border border-[#334155] space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F5C451] font-mono">Career Progression Ladder</span>
              <p className="text-xs font-semibold text-[#F8FAFC]">
                {selectedCareerModal.careerPath}
              </p>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#334155]">
              <button
                onClick={() => toggleFavorite(selectedCareerModal.id)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[#334155] text-xs font-bold flex items-center justify-center gap-1.5 text-[#F8FAFC] hover:bg-white/[0.08] cursor-pointer"
              >
                <Star className={`w-4 h-4 ${favorites.includes(selectedCareerModal.id) ? 'fill-[#E99A55] text-[#E99A55]' : ''}`} />
                <span>{favorites.includes(selectedCareerModal.id) ? 'Saved in Wishlist' : 'Save to Wishlist'}</span>
              </button>

              <div className="w-full sm:w-auto flex items-center gap-2">
                <button
                  onClick={() => {
                    setSelectedCareerModal(null);
                    navigateTo('compare');
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-[#101828] bg-[#F5C451] hover:bg-[#FFD36A] transition-colors shadow-sm cursor-pointer"
                >
                  Compare Related Courses
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
