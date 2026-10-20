import React, { useState } from 'react';
import { 
  Compass, LayoutDashboard, CheckSquare, Scale, MapPin, 
  HeartHandshake, Settings, CheckCircle2, Circle, ArrowRight, 
  Bookmark, ChevronRight, Menu, X, Sparkles, 
  User, Check
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CAREERS_DATA } from '../data/careersData';
import { ROADMAP_STAGES } from '../data/roadmapData';

export default function DashboardPage() {
  const { 
    studentProfile, 
    setStudentProfile, 
    navigateTo, 
    currentView,
    assessmentCompleted, 
    assessmentAnswers,
    setAssessmentAnswers,
    setAssessmentCompleted,
    roadmapPercent,
    roadmapProgress,
    toggleRoadmapTask,
    totalRoadmapTasks,
    completedRoadmapCount,
    computeAssessmentResults,
    favorites,
    toggleFavorite,
    comparisonList,
    addToCompare,
    showToast 
  } = useApp();

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  
  // Settings form state
  const [editName, setEditName] = useState(studentProfile.name);
  const [editLevel, setEditLevel] = useState(studentProfile.educationLevel);
  const [editInterest, setEditInterest] = useState(studentProfile.careerInterest);

  const results = computeAssessmentResults();
  const recommendedCareers = results.matchedCareers;

  // Find next actionable roadmap step
  let nextActionableTask = null;
  let activeStageNumber = 1;

  for (const stage of ROADMAP_STAGES) {
    const uncompleted = stage.tasks.find(t => !roadmapProgress[t.id]);
    if (uncompleted) {
      nextActionableTask = { ...uncompleted, stageTitle: stage.title, stageNumber: stage.stageNumber };
      activeStageNumber = stage.stageNumber;
      break;
    }
  }

  // Answered questions count
  const answeredCount = Object.keys(assessmentAnswers || {}).length;
  const assessmentPercent = assessmentCompleted ? 100 : Math.round((answeredCount / 5) * 100);

  // Handle Save Settings
  const handleSaveSettings = (e) => {
    e.preventDefault();
    if (editName.trim()) {
      setStudentProfile({
        name: editName.trim(),
        educationLevel: editLevel,
        careerInterest: editInterest
      });
      setSettingsModalOpen(false);
      showToast("Student profile updated successfully!", "success");
    }
  };

  const handleResetData = () => {
    if (window.confirm("Are you sure you want to reset your demo progress and assessment answers?")) {
      setAssessmentAnswers({});
      setAssessmentCompleted(false);
      Object.keys(roadmapProgress).forEach(k => {
        if (roadmapProgress[k]) toggleRoadmapTask(k);
      });
      setSettingsModalOpen(false);
      showToast("Assessment & roadmap progress reset.", "info");
    }
  };

  // Sidebar navigation items
  const sidebarNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'assessment', label: 'Career Assessment', icon: CheckSquare, badge: assessmentCompleted ? 'Done' : '5 min' },
    { id: 'explorer', label: 'Explore Careers', icon: Compass, badge: favorites.length > 0 ? `${favorites.length}` : null },
    { id: 'compare', label: 'Compare Careers', icon: Scale, badge: comparisonList.length > 0 ? `${comparisonList.length}` : null },
    { id: 'roadmap', label: 'My Roadmap', icon: MapPin, badge: `${roadmapPercent}%` },
    { id: 'family', label: 'Family Support', icon: HeartHandshake }
  ];

  return (
    <div className="min-h-screen bg-[#E9EEF5] text-[#172033] flex flex-col lg:flex-row antialiased">
      
      {/* =========================================================================
          1. NAVY SIDEBAR (Desktop & Mobile Drawer)
          Colors: Sidebar Navy #182338, Deep Navy #101828, Active Yellow #F5C451
         ========================================================================= */}
      
      {/* Mobile Top Header Bar for Sidebar Trigger */}
      <div className="lg:hidden bg-[#182338] text-white px-4 py-3 flex items-center justify-between border-b border-[#334155] sticky top-0 z-30">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#F5C451] text-[#101828] flex items-center justify-center font-extrabold shadow-sm">
            <Compass className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-base tracking-tight font-['Outfit'] text-white">
              CareerSaathi
            </span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#F5C451] text-[#101828]">
              AI
            </span>
          </div>
        </div>

        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Backdrop for Mobile Drawer */}
      {mobileSidebarOpen && (
        <div 
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      {/* Actual Sidebar Content */}
      <aside className={`
        fixed top-0 bottom-0 left-0 z-50 w-72 bg-[#182338] text-white flex flex-col justify-between border-r border-[#101828] shadow-xl lg:shadow-none transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:h-screen lg:shrink-0
        ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        {/* Top Branding Section */}
        <div>
          <div className="p-6 border-b border-[#334155] flex items-center justify-between">
            <div 
              onClick={() => { navigateTo('landing'); setMobileSidebarOpen(false); }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F5C451] text-[#101828] flex items-center justify-center font-extrabold shadow-sm group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg tracking-tight font-['Outfit'] text-[#F8FAFC]">
                    CareerSaathi
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#F5C451] text-[#101828]">
                    AI
                  </span>
                </div>
                <p className="text-[11px] text-[#B5C0D0] font-medium leading-none mt-0.5">
                  Career Guidance Platform
                </p>
              </div>
            </div>

            <button 
              onClick={() => setMobileSidebarOpen(false)} 
              className="lg:hidden p-1 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Navigation List */}
          <nav className="p-4 space-y-1.5">
            <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#B5C0D0]/70">
              Navigation
            </div>
            {sidebarNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    navigateTo(item.id);
                    setMobileSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-[#F5C451] text-[#101828] shadow-sm font-bold'
                      : 'text-[#B5C0D0] hover:text-[#F8FAFC] hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#101828]' : 'text-[#B5C0D0]'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isActive 
                        ? 'bg-[#101828] text-[#F5C451]' 
                        : 'bg-white/10 text-white/90'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Settings Trigger Item */}
            <button
              onClick={() => {
                setSettingsModalOpen(true);
                setMobileSidebarOpen(false);
              }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#B5C0D0] hover:text-[#F8FAFC] hover:bg-white/[0.06] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Settings className="w-4 h-4 text-[#B5C0D0]" />
                <span>Settings</span>
              </div>
            </button>
          </nav>
        </div>

        {/* Bottom User Profile Section */}
        <div className="p-4 border-t border-[#334155] bg-[#101828]/50">
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04] border border-white/5">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-xl bg-[#F5C451] text-[#101828] flex items-center justify-center font-extrabold text-sm shrink-0">
                {studentProfile.name.charAt(0)}
              </div>
              <div className="truncate">
                <h4 className="text-xs font-bold text-white truncate">
                  {studentProfile.name}
                </h4>
                <p className="text-[11px] text-[#B5C0D0] truncate">
                  {studentProfile.educationLevel}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSettingsModalOpen(true)}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              title="Edit Profile"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

      </aside>


      {/* =========================================================================
          2. LIGHT WORKSPACE AREA (#E9EEF5)
         ========================================================================= */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Top Header */}
        <header className="bg-white border-b border-[#E2E8F0] px-6 sm:px-8 py-5 sticky top-0 z-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-extrabold text-[#172033] font-['Outfit'] tracking-tight">
                  Dashboard
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#16845B]/10 text-[#16845B] text-xs font-semibold border border-[#16845B]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16845B]" />
                  Active Student
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
                Welcome back, {studentProfile.name}. Track your career readiness, view recommendations, and plan next steps.
              </p>
            </div>

            {/* Profile controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setSettingsModalOpen(true)}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-[#172033] bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] shadow-2xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <User className="w-3.5 h-3.5 text-[#64748B]" />
                <span>Edit Profile</span>
              </button>

              <button
                onClick={() => navigateTo('assessment')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-[#101828] bg-[#F5C451] hover:bg-[#FFD36A] shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{assessmentCompleted ? "Explore Results" : answeredCount > 0 ? "Continue Assessment" : "Start Assessment"}</span>
              </button>
            </div>
          </div>
        </header>


        {/* Workspace Body Content */}
        <div className="p-6 sm:p-8 space-y-8 max-w-7xl w-full">
          
          {/* =========================================================================
              3. WELCOME HERO SECTION
              Heading: "Your career journey starts here."
              Supporting Text: "Discover your strengths, explore suitable opportunities, and take the next step toward your future."
             ========================================================================= */}
          <div className="relative overflow-hidden bg-[#101828] rounded-2xl p-6 sm:p-8 text-white border border-[#334155] shadow-sm">
            {/* Subtle Abstract Career Growth Visual (Minimalist CSS Lines) */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-25 hidden md:block">
              <svg viewBox="0 0 300 200" fill="none" className="w-full h-full object-cover">
                <path d="M0 180 C 80 160, 140 100, 240 40 L 300 10" stroke="#F5C451" strokeWidth="3" strokeDasharray="6 6" />
                <path d="M0 195 C 100 180, 180 120, 280 60" stroke="#E99A55" strokeWidth="2" />
                <circle cx="140" cy="100" r="5" fill="#F5C451" />
                <circle cx="240" cy="40" r="6" fill="#E99A55" />
                <circle cx="280" cy="60" r="4" fill="#16845B" />
              </svg>
            </div>

            <div className="relative z-10 max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#F5C451] border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-[#F5C451]" />
                <span>Personalized Career Guidance</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] tracking-tight text-[#F8FAFC]">
                Your career journey starts here.
              </h2>

              <p className="text-sm text-[#B5C0D0] leading-relaxed max-w-xl">
                Discover your strengths, explore suitable opportunities, and take the next step toward your future.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigateTo('assessment')}
                  className="px-6 py-3 rounded-xl font-bold text-sm bg-[#F5C451] hover:bg-[#FFD36A] text-[#101828] shadow-xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{assessmentCompleted ? "Explore Results" : answeredCount > 0 ? "Continue Assessment" : "Start Assessment"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigateTo('explorer')}
                  className="px-5 py-3 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 text-[#F8FAFC] border border-white/15 transition-colors cursor-pointer"
                >
                  Explore All Careers
                </button>
              </div>
            </div>
          </div>


          {/* =========================================================================
              4. PROGRESS OVERVIEW (Three Summary Cards)
              - Assessment Progress
              - Career Matches
              - Roadmap Progress
             ========================================================================= */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#101828] font-['Outfit']">
                  Progress Overview
                </h3>
                <p className="text-xs text-[#64748B]">Your active milestone achievements</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Card 1: Assessment Progress */}
              <div 
                onClick={() => navigateTo('assessment')}
                className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-xs hover:border-[#CBD5E1] hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#64748B]">Assessment Progress</span>
                    <div className="w-8 h-8 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#101828]">
                      <CheckSquare className="w-4 h-4 text-[#101828]" />
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-extrabold text-[#172033] font-['Outfit']">
                      {assessmentPercent}%
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      assessmentCompleted 
                        ? 'bg-[#16845B]/10 text-[#16845B] border border-[#16845B]/20'
                        : answeredCount > 0 
                        ? 'bg-[#F5C451]/20 text-[#101828] border border-[#F5C451]/40'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {assessmentCompleted ? "Completed" : answeredCount > 0 ? "In Progress" : "Not Started"}
                    </span>
                  </div>

                  {/* Meaningful Progress Bar */}
                  <div className="w-full h-2 bg-[#F1F5F9] rounded-full overflow-hidden mb-2">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        assessmentCompleted ? 'bg-[#16845B]' : 'bg-[#F5C451]'
                      }`}
                      style={{ width: `${assessmentPercent}%` }}
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#64748B]">
                  <span>{assessmentCompleted ? "Archetype fit unlocked" : `${answeredCount} of 5 questions answered`}</span>
                  <span className="text-[#172033] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    {assessmentCompleted ? "View Results" : "Continue"} →
                  </span>
                </div>
              </div>

              {/* Card 2: Career Matches */}
              <div 
                onClick={() => navigateTo('explorer')}
                className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-xs hover:border-[#CBD5E1] hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#64748B]">Career Matches</span>
                    <div className="w-8 h-8 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#172033]">
                      <Compass className="w-4 h-4 text-[#172033]" />
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-extrabold text-[#172033] font-['Outfit']">
                      {assessmentCompleted ? `${recommendedCareers.length} Matches` : `${CAREERS_DATA.length} Available`}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#172033]/5 text-[#172033] border border-[#E2E8F0]">
                      {assessmentCompleted ? results.topArchetype : "General Directory"}
                    </span>
                  </div>

                  <p className="text-xs text-[#64748B] mb-3 leading-relaxed">
                    {assessmentCompleted 
                      ? `${recommendedCareers.length} career pathways tailored to your fit profile.` 
                      : "Complete the assessment to unlock customized match scores."}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#64748B]">
                  <span>{favorites.length} saved in wishlist</span>
                  <span className="text-[#172033] font-bold">Explore All →</span>
                </div>
              </div>

              {/* Card 3: Roadmap Progress */}
              <div 
                onClick={() => navigateTo('roadmap')}
                className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-xs hover:border-[#CBD5E1] hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#64748B]">Roadmap Progress</span>
                    <div className="w-8 h-8 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#E99A55]">
                      <MapPin className="w-4 h-4 text-[#E99A55]" />
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-extrabold text-[#172033] font-['Outfit']">
                      {roadmapPercent}%
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#E99A55]/15 text-[#E99A55] border border-[#E99A55]/30">
                      {completedRoadmapCount}/{totalRoadmapTasks} Tasks
                    </span>
                  </div>

                  {/* Meaningful Progress Bar */}
                  <div className="w-full h-2 bg-[#F1F5F9] rounded-full overflow-hidden mb-2">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        roadmapPercent === 100 ? 'bg-[#16845B]' : 'bg-[#E99A55]'
                      }`}
                      style={{ width: `${roadmapPercent}%` }}
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#64748B]">
                  <span>Stage {activeStageNumber} of 5 Active</span>
                  <span className="text-[#172033] font-bold">Open Roadmap →</span>
                </div>
              </div>

            </div>
          </div>


          {/* =========================================================================
              5. RECOMMENDED CAREERS SECTION
              Clean, responsive cards with Title, Short Description, Skills,
              View Details, Save, and Compare actions.
             ========================================================================= */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#172033] font-['Outfit']">
                  Recommended Careers
                </h3>
                <p className="text-xs text-[#64748B]">
                  {assessmentCompleted 
                    ? `Curated based on your "${results.topArchetype}" archetype.` 
                    : "High-growth practical career pathways to explore."}
                </p>
              </div>

              <button
                onClick={() => navigateTo('explorer')}
                className="text-xs font-bold text-[#172033] hover:text-[#E99A55] flex items-center gap-1 transition-colors self-start sm:self-auto cursor-pointer"
              >
                <span>View All Careers</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Assessment State Note */}
            {!assessmentCompleted && (
              <div className="mb-4 p-3.5 rounded-xl bg-[#F5C451]/15 border border-[#F5C451]/40 flex items-center justify-between gap-3 text-xs text-[#172033]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#101828] shrink-0" />
                  <span>
                    <strong>Personalize these options:</strong> Completing the 5-minute self-discovery assessment tailors match percentages to your problem-solving strengths.
                  </span>
                </div>
                <button
                  onClick={() => navigateTo('assessment')}
                  className="font-bold underline text-[#101828] shrink-0 cursor-pointer"
                >
                  Take Assessment
                </button>
              </div>
            )}

            {/* 3 Career Recommendation Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {recommendedCareers.map((career) => {
                const isSaved = favorites.includes(career.id);
                const isCompared = comparisonList.includes(career.id);

                return (
                  <div
                    key={career.id}
                    className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-xs hover:border-[#CBD5E1] hover:shadow-md transition-all flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]">
                          {career.category}
                        </span>
                        {assessmentCompleted ? (
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#F5C451]/20 text-[#101828] border border-[#F5C451]/50 font-mono">
                            {career.matchScore}% Match
                          </span>
                        ) : (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#F1F5F9] text-[#64748B]">
                            {career.demandLevel}
                          </span>
                        )}
                      </div>

                      {/* Career Title & Description */}
                      <h4 className="text-base font-bold text-[#172033] font-['Outfit'] mb-1.5">
                        {career.title}
                      </h4>

                      <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3 mb-4">
                        {career.shortDescription}
                      </p>

                      {/* Training & Salary Chips */}
                      <div className="grid grid-cols-2 gap-2 p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs mb-4">
                        <div>
                          <span className="text-[10px] text-[#94A3B8] block">Duration</span>
                          <span className="font-semibold text-[#172033]">{career.duration}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-[#94A3B8] block">Est. Starting Salary</span>
                          <span className="font-semibold text-[#172033]">{career.avgStartingSalary}</span>
                        </div>
                      </div>

                      {/* Relevant Skills */}
                      <div className="mb-4">
                        <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider block mb-1.5">
                          Relevant Skills:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {career.keySkills.slice(0, 3).map((skill, sIdx) => (
                            <span 
                              key={sIdx}
                              className="text-[11px] px-2 py-0.5 rounded bg-[#F8FAFC] text-[#172033] border border-[#E2E8F0]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Actions: View Details, Save, and Compare */}
                    <div className="pt-4 border-t border-[#E2E8F0] flex items-center gap-2">
                      <button
                        onClick={() => navigateTo('explorer', { career })}
                        className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-[#101828] hover:bg-[#182338] transition-colors text-center cursor-pointer"
                      >
                        View Details
                      </button>

                      {/* Save Action */}
                      <button
                        onClick={() => toggleFavorite(career.id)}
                        className={`p-2 rounded-xl border text-xs transition-colors cursor-pointer ${
                          isSaved
                            ? 'bg-[#F5C451]/20 border-[#F5C451] text-[#101828]'
                            : 'border-[#E2E8F0] text-[#64748B] hover:bg-[#F8FAFC]'
                        }`}
                        title={isSaved ? "Remove from saved" : "Save career"}
                      >
                        <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#F5C451]' : ''}`} />
                      </button>

                      {/* Compare Action */}
                      <button
                        onClick={() => {
                          addToCompare('course-fullstack');
                          navigateTo('compare');
                        }}
                        className={`p-2 rounded-xl border text-xs transition-colors cursor-pointer ${
                          isCompared
                            ? 'bg-[#E99A55]/15 border-[#E99A55] text-[#101828]'
                            : 'border-[#E2E8F0] text-[#64748B] hover:bg-[#F8FAFC]'
                        }`}
                        title="Compare in Benchmarking Table"
                      >
                        <Scale className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>


          {/* =========================================================================
              6. CAREER ROADMAP & NEXT ACTIONABLE STEP
              Step-based layout: Completed (green #16845B), Current (yellow #F5C451),
              Upcoming (neutral #E2E8F0).
             ========================================================================= */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-7 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-[#172033] font-['Outfit']">
                    Career Roadmap
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#E99A55]/15 text-[#101828] border border-[#E99A55]/30">
                    {roadmapPercent}% Completed
                  </span>
                </div>
                <p className="text-xs text-[#64748B] mt-0.5">
                  Step-by-step milestone tracking from initial discovery to career placement.
                </p>
              </div>

              <button
                onClick={() => navigateTo('roadmap')}
                className="text-xs font-bold text-[#172033] hover:text-[#E99A55] flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>Open Full Roadmap</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* 5-Step Horizontal Timeline Progress */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-6">
              {ROADMAP_STAGES.map((stage) => {
                const completedInStage = stage.tasks.filter(t => !!roadmapProgress[t.id]).length;
                const isFinished = completedInStage === stage.tasks.length;
                const isCurrent = !isFinished && stage.stageNumber === activeStageNumber;

                return (
                  <div
                    key={stage.id}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isFinished
                        ? 'bg-[#16845B]/10 border-[#16845B]/30 text-[#16845B]'
                        : isCurrent
                        ? 'bg-[#F5C451]/20 border-[#F5C451] text-[#101828] shadow-xs'
                        : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#64748B]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider font-mono">
                        Step 0{stage.stageNumber}
                      </span>
                      {isFinished ? (
                        <CheckCircle2 className="w-4 h-4 text-[#16845B]" />
                      ) : isCurrent ? (
                        <span className="w-2 h-2 rounded-full bg-[#E99A55] animate-pulse" />
                      ) : (
                        <Circle className="w-3.5 h-3.5 text-[#CBD5E1]" />
                      )}
                    </div>

                    <h4 className={`text-xs font-bold truncate ${isCurrent ? 'text-[#101828]' : ''}`}>
                      {stage.badge}
                    </h4>
                    <p className="text-[10px] text-[#64748B] mt-0.5">
                      {completedInStage}/{stage.tasks.length} Done
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Next Actionable Step Box */}
            {nextActionableTask ? (
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F5C451] text-[#101828]">
                      Next Actionable Step
                    </span>
                    <span className="text-xs text-[#64748B] font-medium">
                      {nextActionableTask.stageTitle}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#172033]">
                    {nextActionableTask.label}
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    {nextActionableTask.detail}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => toggleRoadmapTask(nextActionableTask.id)}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold text-[#16845B] bg-[#16845B]/10 hover:bg-[#16845B]/20 border border-[#16845B]/20 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Mark Done</span>
                  </button>

                  <button
                    onClick={() => navigateTo('roadmap')}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-[#101828] hover:bg-[#182338] text-white transition-colors cursor-pointer"
                  >
                    View in Roadmap
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-[#16845B]/10 border border-[#16845B]/20 text-center space-y-1">
                <span className="text-sm font-bold text-[#16845B] block">
                  🎉 Fantastic! You completed all 5 roadmap milestones!
                </span>
                <p className="text-xs text-[#64748B]">
                  You have built your foundation, practiced hands-on skills, and prepared your job portfolio.
                </p>
              </div>
            )}
          </div>


          {/* =========================================================================
              7. QUICK ACTIONS (Only Useful Working Actions That Exist)
             ========================================================================= */}
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-[#172033] font-['Outfit']">
                Quick Actions
              </h3>
              <p className="text-xs text-[#64748B]">
                Immediate tools to help navigate your educational planning
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Action 1: Assessment */}
              <button
                onClick={() => navigateTo('assessment')}
                className="p-5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#F5C451] hover:shadow-sm text-left transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F5C451]/20 text-[#101828] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#172033]">
                  {assessmentCompleted ? "Review Assessment" : "Career Assessment"}
                </h4>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  5-minute quiz to map your natural problem-solving strengths.
                </p>
              </button>

              {/* Action 2: Explorer */}
              <button
                onClick={() => navigateTo('explorer')}
                className="p-5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#101828] hover:shadow-sm text-left transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#101828]/5 text-[#101828] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#172033]">
                  Explore Careers
                </h4>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  Browse 9+ vocational pathways by duration and salary tiers.
                </p>
              </button>

              {/* Action 3: Compare */}
              <button
                onClick={() => navigateTo('compare')}
                className="p-5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#E99A55] hover:shadow-sm text-left transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E99A55]/15 text-[#101828] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#172033]">
                  Compare Courses
                </h4>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  Benchmark eligibility, fees, and hands-on projects side-by-side.
                </p>
              </button>

              {/* Action 4: Roadmap */}
              <button
                onClick={() => navigateTo('roadmap')}
                className="p-5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#16845B] hover:shadow-sm text-left transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#16845B]/10 text-[#16845B] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#172033]">
                  Milestone Roadmap
                </h4>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  Follow actionable steps from basic learning to internships.
                </p>
              </button>
            </div>
          </div>

        </div>
      </main>


      {/* =========================================================================
          8. SETTINGS & PROFILE EDIT MODAL
         ========================================================================= */}
      {settingsModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-[#E2E8F0] shadow-xl space-y-5 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#101828]" />
                <h3 className="text-lg font-bold text-[#172033] font-['Outfit']">
                  Student Settings
                </h3>
              </div>
              <button
                onClick={() => setSettingsModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-[#172033] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-[#172033] block mb-1">Student Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#F5C451]"
                  required
                />
              </div>

              <div>
                <label className="font-bold text-[#172033] block mb-1">Education Level</label>
                <select
                  value={editLevel}
                  onChange={(e) => setEditLevel(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#F5C451]"
                >
                  <option value="Class 10th / Secondary Student">Class 10th / Secondary Student</option>
                  <option value="Class 12th / Intermediate Student">Class 12th / Intermediate Student</option>
                  <option value="Vocational Diploma / Graduate">Vocational Diploma / Graduate</option>
                  <option value="Early Career Seeker">Early Career Seeker</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-[#172033] block mb-1">Target Career Interest</label>
                <select
                  value={editInterest}
                  onChange={(e) => setEditInterest(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#F5C451]"
                >
                  <option value="Technology & Software">Technology & Software</option>
                  <option value="Design & Creative Arts">Design & Creative Arts</option>
                  <option value="Clean Energy & EV">Clean Energy & EV</option>
                  <option value="Healthcare & Diagnostics">Healthcare & Diagnostics</option>
                  <option value="Data & Analytics">Data & Analytics</option>
                </select>
              </div>

              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] text-[#64748B]">
                Data is saved automatically in your local browser storage.
              </div>

              <div className="pt-2 flex items-center justify-between gap-3 border-t border-[#E2E8F0]">
                <button
                  type="button"
                  onClick={handleResetData}
                  className="text-xs font-semibold text-rose-600 hover:underline cursor-pointer"
                >
                  Reset Progress
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSettingsModalOpen(false)}
                    className="px-4 py-2 rounded-xl border border-[#E2E8F0] text-xs font-semibold text-[#64748B] hover:bg-[#F8FAFC] cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#F5C451] hover:bg-[#FFD36A] text-[#101828] text-xs font-bold shadow-xs cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
