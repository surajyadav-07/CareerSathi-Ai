import React, { useState } from 'react';
import { 
  Scale, Plus, X, Trash2, Clock, Sparkles 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COURSES_DATA } from '../data/coursesData';
import DemoBadge from '../components/common/DemoBadge';

export default function ComparePage() {
  const { 
    comparisonList, 
    addToCompare, 
    removeFromCompare, 
    clearComparison 
  } = useApp();

  const [selectorModalOpen, setSelectorModalOpen] = useState(false);

  // Selected courses
  const selectedCourses = COURSES_DATA.filter(c => comparisonList.includes(c.id));

  // Available courses not yet added
  const availableCourses = COURSES_DATA.filter(c => !comparisonList.includes(c.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 transition-colors">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#101828] uppercase tracking-wider font-mono">
              Vocational Benchmarking
            </span>
            <DemoBadge text="Demo Program Data" size="xs" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] font-['Outfit'] tracking-tight">
            Course Comparison
          </h1>
          <p className="text-sm text-[#64748B]">
            Compare eligibility, duration, fees, and hands-on projects side-by-side (Max 3 courses).
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {comparisonList.length < 3 && (
            <button
              onClick={() => setSelectorModalOpen(true)}
              className="px-4 py-2.5 rounded-xl font-bold text-xs text-[#101828] bg-[#F5C451] hover:bg-[#FFD36A] transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Course ({comparisonList.length}/3)</span>
            </button>
          )}

          {comparisonList.length > 0 && (
            <button
              onClick={clearComparison}
              className="px-3.5 py-2.5 rounded-xl font-bold text-xs text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear Table</span>
            </button>
          )}
        </div>
      </div>

      {/* Empty State (Clean White Card on #E9EEF5) */}
      {selectedCourses.length === 0 ? (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-[#F4F1E8] text-[#101828] mx-auto flex items-center justify-center border border-[#E2E8F0]">
            <Scale className="w-10 h-10" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-[#172033] font-['Outfit']">
              No Courses in Your Comparison Yet
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Add up to three vocational courses to inspect key differences in fees, timeline, format, and job roles.
            </p>
          </div>

          {/* Quick Presets */}
          <div className="pt-2 max-w-xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block font-mono">
              Or Try A Popular 1-Click Comparison Preset:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  clearComparison();
                  setTimeout(() => {
                    addToCompare('course-fullstack');
                    addToCompare('course-uiux');
                  }, 50);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#F4F1E8] hover:bg-[#F8FAFC] text-[#172033] transition-colors border border-[#E2E8F0] hover:border-[#CBD5E1] cursor-pointer"
              >
                Web Development vs UI/UX Design
              </button>

              <button
                onClick={() => {
                  clearComparison();
                  setTimeout(() => {
                    addToCompare('course-solar-pv');
                    addToCompare('course-ev-powertrain');
                  }, 50);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#F4F1E8] hover:bg-[#F8FAFC] text-[#172033] transition-colors border border-[#E2E8F0] hover:border-[#CBD5E1] cursor-pointer"
              >
                Solar Energy vs Electric Vehicle Tech
              </button>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => setSelectorModalOpen(true)}
              className="px-6 py-3 rounded-xl font-bold text-sm text-[#101828] bg-[#F5C451] hover:bg-[#FFD36A] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Browse & Select Courses</span>
            </button>
          </div>
        </div>
      ) : (
        /* Comparison Table on Clean White Card */
        <div className="space-y-6">
          
          <div className="overflow-x-auto rounded-3xl border border-[#E2E8F0] shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[700px]">
              
              {/* Table Header: Course Titles */}
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                  <th className="p-5 w-48 text-xs font-bold text-[#64748B] uppercase tracking-wider font-mono">
                    Criteria
                  </th>
                  {selectedCourses.map((c) => (
                    <th key={c.id} className="p-5 w-1/3 min-w-[240px] align-top">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#182338] text-[#F8FAFC]">
                          {c.category}
                        </span>
                        <button
                          onClick={() => removeFromCompare(c.id)}
                          className="p-1 rounded-lg text-[#64748B] hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                          title="Remove from comparison"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <h3 className="text-base font-bold text-[#172033] font-['Outfit']">
                        {c.name}
                      </h3>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        {c.providerType}
                      </p>
                    </th>
                  ))}
                  {/* Empty placeholder column if fewer than 3 */}
                  {selectedCourses.length < 3 && (
                    <th className="p-5 w-1/3 min-w-[200px] border-l border-dashed border-[#CBD5E1] align-middle text-center">
                      <button
                        onClick={() => setSelectorModalOpen(true)}
                        className="py-8 w-full border-2 border-dashed border-[#CBD5E1] hover:border-[#101828] rounded-2xl flex flex-col items-center justify-center gap-2 group transition-colors cursor-pointer"
                      >
                        <Plus className="w-6 h-6 text-[#64748B] group-hover:text-[#101828]" />
                        <span className="text-xs font-bold text-[#64748B] group-hover:text-[#101828]">
                          Add 3rd Course
                        </span>
                      </button>
                    </th>
                  )}
                </tr>
              </thead>

              {/* Table Body Rows */}
              <tbody className="divide-y divide-[#E2E8F0] text-xs sm:text-sm">
                
                {/* Eligibility Row */}
                <tr className="hover:bg-[#FAF9F5]">
                  <td className="p-5 font-bold text-[#172033] bg-[#F8FAFC]">
                    Eligibility
                  </td>
                  {selectedCourses.map((c) => (
                    <td key={c.id} className="p-5 text-[#64748B] font-medium">
                      {c.eligibility}
                    </td>
                  ))}
                  {selectedCourses.length < 3 && <td className="p-5 border-l border-dashed border-[#CBD5E1]" />}
                </tr>

                {/* Duration Row */}
                <tr className="hover:bg-[#FAF9F5]">
                  <td className="p-5 font-bold text-[#172033] bg-[#F8FAFC]">
                    Duration
                  </td>
                  {selectedCourses.map((c) => (
                    <td key={c.id} className="p-5">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#F5C451]/20 text-[#101828] font-bold text-xs border border-[#F5C451]/40">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{c.duration}</span>
                      </div>
                    </td>
                  ))}
                  {selectedCourses.length < 3 && <td className="p-5 border-l border-dashed border-[#CBD5E1]" />}
                </tr>

                {/* Estimated Fees Row */}
                <tr className="hover:bg-[#FAF9F5]">
                  <td className="p-5 font-bold text-[#172033] bg-[#F8FAFC]">
                    Estimated Fees (Demo)
                  </td>
                  {selectedCourses.map((c) => (
                    <td key={c.id} className="p-5">
                      <span className="font-extrabold text-sm text-[#172033] block font-['Outfit']">
                        {c.estFees}
                      </span>
                      <span className="text-[10px] text-[#64748B]">Sample institutional range</span>
                    </td>
                  ))}
                  {selectedCourses.length < 3 && <td className="p-5 border-l border-dashed border-[#CBD5E1]" />}
                </tr>

                {/* Learning Format */}
                <tr className="hover:bg-[#FAF9F5]">
                  <td className="p-5 font-bold text-[#172033] bg-[#F8FAFC]">
                    Learning Format
                  </td>
                  {selectedCourses.map((c) => (
                    <td key={c.id} className="p-5 text-[#64748B]">
                      {c.learningFormat}
                    </td>
                  ))}
                  {selectedCourses.length < 3 && <td className="p-5 border-l border-dashed border-[#CBD5E1]" />}
                </tr>

                {/* Skills Learned */}
                <tr className="hover:bg-[#FAF9F5]">
                  <td className="p-5 font-bold text-[#172033] bg-[#F8FAFC]">
                    Skills Learned
                  </td>
                  {selectedCourses.map((c) => (
                    <td key={c.id} className="p-5">
                      <div className="flex flex-wrap gap-1.5">
                        {c.skillsLearned.map((sk, idx) => (
                          <span key={idx} className="text-[11px] px-2 py-0.5 rounded-md bg-[#F4F1E8] text-[#172033] border border-[#E2E8F0]">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                  {selectedCourses.length < 3 && <td className="p-5 border-l border-dashed border-[#CBD5E1]" />}
                </tr>

                {/* Hands-on Projects */}
                <tr className="hover:bg-[#FAF9F5]">
                  <td className="p-5 font-bold text-[#172033] bg-[#F8FAFC]">
                    Hands-On Projects
                  </td>
                  {selectedCourses.map((c) => (
                    <td key={c.id} className="p-5 text-xs text-[#64748B] leading-relaxed">
                      {c.handsOnProjects}
                    </td>
                  ))}
                  {selectedCourses.length < 3 && <td className="p-5 border-l border-dashed border-[#CBD5E1]" />}
                </tr>

                {/* Career Opportunities */}
                <tr className="hover:bg-[#FAF9F5]">
                  <td className="p-5 font-bold text-[#172033] bg-[#F8FAFC]">
                    Career Opportunities
                  </td>
                  {selectedCourses.map((c) => (
                    <td key={c.id} className="p-5">
                      <div className="space-y-1">
                        {c.careerOpportunities.map((op, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs font-semibold text-[#172033]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#16845B]" />
                            <span>{op}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                  ))}
                  {selectedCourses.length < 3 && <td className="p-5 border-l border-dashed border-[#CBD5E1]" />}
                </tr>

              </tbody>
            </table>
          </div>

          {/* Meaningful Difference Summary Banner (Deep Navy Surface) */}
          <div className="bg-[#182338] rounded-2xl p-6 border border-[#334155] shadow-xl space-y-2 text-[#F8FAFC]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F5C451]" />
              <h4 className="font-bold text-sm text-[#F8FAFC] font-['Outfit']">
                How to Evaluate These Options Without Declaring a "Single Best"
              </h4>
            </div>
            <p className="text-xs text-[#B5C0D0] leading-relaxed">
              Every course offers distinct trade-offs: shorter 4-month programs help you test industry interest with lower financial commitment, while 9-18 month diplomas provide deeper certified clinical or technical credentials. Review weekly commitments with your family to choose what aligns best with your current schedule.
            </p>
          </div>

        </div>
      )}

      {/* --- Course Selector Modal --- */}
      {selectorModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl bg-[#182338] rounded-3xl p-6 border border-[#334155] shadow-2xl max-h-[85vh] flex flex-col text-[#F8FAFC]">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#334155]">
              <div>
                <h3 className="text-lg font-bold text-[#F8FAFC] font-['Outfit']">
                  Select a Course to Add ({comparisonList.length}/3)
                </h3>
                <p className="text-xs text-[#B5C0D0]">Pick from our practical vocational catalog</p>
              </div>
              <button
                onClick={() => setSelectorModalOpen(false)}
                className="p-1.5 rounded-xl text-[#B5C0D0] hover:text-[#F8FAFC] hover:bg-white/[0.08] cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto py-4 space-y-3 flex-1 pr-1">
              {availableCourses.map((c) => (
                <div
                  key={c.id}
                  className="p-4 rounded-2xl border border-[#334155] bg-[#101828] hover:border-[#F5C451]/50 flex items-center justify-between gap-4 transition-colors"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#F5C451] text-[#101828]">
                      {c.category}
                    </span>
                    <h4 className="text-sm font-bold text-[#F8FAFC] font-['Outfit']">
                      {c.name}
                    </h4>
                    <p className="text-xs text-[#B5C0D0]">
                      {c.duration} • {c.estFees.split('(')[0]}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      addToCompare(c.id);
                      if (comparisonList.length >= 2) {
                        setSelectorModalOpen(false);
                      }
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold text-[#101828] bg-[#F5C451] hover:bg-[#FFD36A] transition-colors shrink-0 cursor-pointer shadow-sm"
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[#334155] text-center">
              <button
                onClick={() => setSelectorModalOpen(false)}
                className="text-xs font-bold text-[#B5C0D0] hover:text-[#F8FAFC] cursor-pointer transition-colors"
              >
                Done Adding
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
