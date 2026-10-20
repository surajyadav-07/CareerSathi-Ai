import React, { useState } from 'react';
import { 
  Clock, Wallet, AlertCircle, Sparkles, BookOpen, Save, 
  ChevronDown, ChevronUp 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CAREERS_DATA } from '../data/careersData';
import { FAMILY_DISCUSSION_GUIDE } from '../data/familyQuestionsData';
import FamilyIllustration from '../components/illustrations/FamilyIllustration';
import DemoBadge from '../components/common/DemoBadge';

export default function FamilyPage() {
  const { 
    familyNotes, 
    setFamilyNotes, 
    favorites, 
    showToast 
  } = useApp();

  // Selected career for the family discussion breakdown
  const [selectedCareerId, setSelectedCareerId] = useState(() => {
    return favorites.length > 0 ? favorites[0] : 'fullstack-dev';
  });

  const [activeTab, setActiveTab] = useState('studentQuestions');
  const [saveStatus, setSaveStatus] = useState('Saved in browser');
  const [expandedIndex, setExpandedIndex] = useState(0);

  const selectedCareer = CAREERS_DATA.find(c => c.id === selectedCareerId) || CAREERS_DATA[0];

  const handleNotesChange = (e) => {
    setFamilyNotes(e.target.value);
    setSaveStatus('Saving...');
    setTimeout(() => {
      setSaveStatus('Saved in browser');
    }, 600);
  };

  const handleManualSave = () => {
    showToast("Family notes and agreement saved locally!", "success");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 transition-colors">
      
      {/* Page Header with Vector Illustration (Deep Navy Hero) */}
      <div className="bg-[#182338] rounded-3xl p-6 sm:p-10 border border-[#334155] shadow-xl mb-10 text-[#F8FAFC]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold text-[#F5C451] uppercase tracking-wider font-mono">
                Student & Parent Partnership
              </span>
              <DemoBadge text="Discussion Support" size="xs" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] font-['Outfit'] tracking-tight">
              Family Decision Support
            </h1>

            <p className="text-sm sm:text-base text-[#B5C0D0] leading-relaxed">
              Making career choices is easier when parents and students talk openly without anxiety. Explore requirements, costs, trade-offs, and guided questions together.
            </p>

            {/* Core Values banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {FAMILY_DISCUSSION_GUIDE.corePrinciples.map((p, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#101828] border border-[#334155] space-y-1">
                  <h4 className="text-xs font-bold text-[#F5C451]">{p.title}</h4>
                  <p className="text-[11px] text-[#B5C0D0] leading-tight">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <FamilyIllustration />
          </div>

        </div>
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (7 cols): Career Analysis & Trade-offs (Clean White Surfaces on #E9EEF5) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Career Option Picker */}
          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-[#172033] font-['Outfit']">
                  Career Under Family Consideration
                </h3>
                <p className="text-xs text-[#64748B]">Pick a career to inspect benefits, commitments, and trade-offs</p>
              </div>

              <select
                value={selectedCareerId}
                onChange={(e) => setSelectedCareerId(e.target.value)}
                className="px-3.5 py-2 rounded-xl bg-[#F4F1E8] border border-[#CBD5E1] font-bold text-xs text-[#172033] focus:outline-none focus:ring-1 focus:ring-[#F5C451] cursor-pointer"
              >
                {CAREERS_DATA.map((c) => (
                  <option key={c.id} value={c.id} className="bg-white text-[#172033]">{c.title}</option>
                ))}
              </select>
            </div>

            {/* Structured Perspective Breakdown Cards */}
            <div className="space-y-4 pt-2">
              
              {/* Benefits & Requirements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#16845B]/10 border border-[#16845B]/20 space-y-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#16845B]" />
                    <h4 className="text-xs font-bold text-[#16845B] uppercase tracking-wider font-mono">
                      Key Benefits
                    </h4>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#16845B]">
                    {selectedCareer.pros.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#16845B] font-bold">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-[#F4F1E8] border border-[#E2E8F0] space-y-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#101828]" />
                    <h4 className="text-xs font-bold text-[#172033] uppercase tracking-wider font-mono">
                      Training Requirements
                    </h4>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#64748B]">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#101828] font-bold">•</span>
                      <span><strong className="text-[#172033]">Eligibility:</strong> {selectedCareer.educationLevel}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#101828] font-bold">•</span>
                      <span><strong className="text-[#172033]">Core Tools:</strong> {selectedCareer.keySkills.slice(0, 3).join(', ')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Estimated Costs & Time Commitments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <div className="flex items-center gap-1.5 text-[#64748B] text-xs">
                    <Clock className="w-3.5 h-3.5 text-[#101828]" />
                    <span className="font-semibold text-[#172033]">Time Commitment</span>
                  </div>
                  <div className="text-sm font-extrabold text-[#172033] font-['Outfit']">
                    {selectedCareer.duration}
                  </div>
                  <p className="text-[11px] text-[#64748B]">Includes hands-on practice & capstone labs</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <div className="flex items-center gap-1.5 text-[#64748B] text-xs">
                    <Wallet className="w-3.5 h-3.5 text-[#E99A55]" />
                    <span className="font-semibold text-[#172033]">Estimated Program Fees</span>
                  </div>
                  <div className="text-sm font-extrabold text-[#172033] font-['Outfit']">
                    {selectedCareer.estFee}
                  </div>
                  <p className="text-[11px] text-[#64748B]">Installment & scholarship options common</p>
                </div>
              </div>

              {/* Potential Trade-offs Callout */}
              <div className="p-4 rounded-2xl bg-[#E99A55]/10 border border-[#E99A55]/25 space-y-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#E99A55]" />
                  <h4 className="text-xs font-bold text-[#E99A55] uppercase tracking-wider font-mono">
                    Potential Trade-Offs to Discuss
                  </h4>
                </div>
                <ul className="space-y-1.5 text-xs text-[#64748B]">
                  {selectedCareer.cons.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#E99A55] font-bold">!</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* General Career Trade-offs Reference */}
          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-[#172033] font-['Outfit']">
              Common Pathways: Real-World Trade-Offs
            </h3>

            <div className="space-y-3">
              {FAMILY_DISCUSSION_GUIDE.commonCareerTradeoffs.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <h4 className="font-bold text-sm text-[#172033] font-['Outfit']">
                    {item.title}
                  </h4>
                  <div className="text-xs space-y-1">
                    <p className="text-[#16845B]">
                      <strong>Advantage:</strong> {item.benefit}
                    </p>
                    <p className="text-[#B45309]">
                      <strong>Trade-off:</strong> {item.tradeoff}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (5 cols): Guided Questions & Saved Notes */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Guided Questions Accordion */}
          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm space-y-4">
            
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#172033] font-['Outfit']">
                Guided Questions
              </h3>
              <div className="flex p-1 bg-[#F4F1E8] rounded-xl text-xs font-bold border border-[#E2E8F0]">
                <button
                  onClick={() => setActiveTab('studentQuestions')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'studentQuestions'
                      ? 'bg-[#F5C451] text-[#101828] shadow-xs'
                      : 'text-[#64748B] hover:text-[#172033]'
                  }`}
                >
                  Student → Parents
                </button>
                <button
                  onClick={() => setActiveTab('parentQuestions')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'parentQuestions'
                      ? 'bg-[#F5C451] text-[#101828] shadow-xs'
                      : 'text-[#64748B] hover:text-[#172033]'
                  }`}
                >
                  Parents → Student
                </button>
              </div>
            </div>

            <div className="space-y-3 pt-1">
              {(activeTab === 'studentQuestions' 
                ? FAMILY_DISCUSSION_GUIDE.studentToParentsQuestions 
                : FAMILY_DISCUSSION_GUIDE.parentToStudentQuestions
              ).map((q, idx) => {
                const isExpanded = expandedIndex === idx;
                return (
                  <div
                    key={q.id}
                    className="rounded-xl border border-[#E2E8F0] overflow-hidden bg-[#F8FAFC]"
                  >
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                      className="w-full text-left p-4 hover:bg-white flex items-center justify-between gap-3 transition-colors cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-[#172033]">
                        {q.question}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#64748B] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#64748B] shrink-0" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="p-4 bg-[#F4F1E8] border-t border-[#E2E8F0] text-xs text-[#64748B] leading-relaxed space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#101828] block font-mono">
                          Why Ask This:
                        </span>
                        <p>{q.contextTip}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Family Notes & Joint Action Plan (Saved in localStorage) */}
          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm space-y-4">
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#172033] font-['Outfit']">
                  Family Discussion Notes
                </h3>
                <span className="text-[11px] text-[#16845B] font-medium font-mono">
                  ● {saveStatus}
                </span>
              </div>

              <button
                onClick={handleManualSave}
                className="px-3.5 py-1.5 rounded-xl font-bold text-xs text-[#101828] bg-[#F5C451] hover:bg-[#FFD36A] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Note</span>
              </button>
            </div>

            <p className="text-xs text-[#64748B]">
              Record key agreements, budget targets, or checkpoint review dates agreed upon together.
            </p>

            <textarea
              rows={6}
              value={familyNotes}
              onChange={handleNotesChange}
              placeholder="e.g. On Sunday, we agreed that Aarav will explore the 6-month UI/UX design certificate. Target budget is under ₹40,000. We will review his 3 portfolio projects together in month 3 before applying for internships..."
              className="w-full p-4 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs sm:text-sm text-[#172033] leading-relaxed placeholder-[#94A3B8] focus:outline-none focus:ring-1 focus:ring-[#F5C451] resize-y"
            />

            <div className="p-3 rounded-xl bg-[#F4F1E8] border border-[#E2E8F0] text-[11px] text-[#64748B]">
              💡 <strong>Family Tip:</strong> Set a calendar date 90 days from now to celebrate progress rather than focusing only on end outcomes.
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
