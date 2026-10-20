import React from 'react';
import { 
  CheckCircle2, Circle, Clock, 
  Award, RotateCcw, Lightbulb 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { ROADMAP_STAGES } from '../data/roadmapData';
import DemoBadge from '../components/common/DemoBadge';

export default function RoadmapPage() {
  const { 
    roadmapProgress, 
    toggleRoadmapTask, 
    roadmapPercent, 
    totalRoadmapTasks, 
    completedRoadmapCount, 
    showToast 
  } = useApp();

  const handleToggle = (taskId) => {
    toggleRoadmapTask(taskId);
    if (!roadmapProgress[taskId] && completedRoadmapCount + 1 === totalRoadmapTasks) {
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {
        // Confetti fallback
      }
      showToast("Incredible! You completed all 5 roadmap milestones!", "success");
    }
  };

  const handleResetRoadmap = () => {
    Object.keys(roadmapProgress).forEach(taskId => {
      if (roadmapProgress[taskId]) {
        toggleRoadmapTask(taskId);
      }
    });
    showToast("Roadmap checklist reset.", "info");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 transition-colors">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#101828] uppercase tracking-wider font-mono">
              Actionable Milestone Execution
            </span>
            <DemoBadge text="Interactive Timeline" size="xs" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] font-['Outfit'] tracking-tight">
            5-Stage Career Roadmap
          </h1>
          <p className="text-sm text-[#64748B]">
            A step-by-step framework taking you from curiosity to your first real-world internship and job.
          </p>
        </div>

        {/* Reset button */}
        {completedRoadmapCount > 0 && (
          <button
            onClick={handleResetRoadmap}
            className="px-3.5 py-2 rounded-xl text-xs font-bold text-[#64748B] hover:text-[#172033] hover:bg-white transition-colors flex items-center gap-1.5 cursor-pointer border border-[#CBD5E1]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Progress</span>
          </button>
        )}
      </div>

      {/* Master Progress Card (Deep Navy) */}
      <div className="bg-[#182338] border border-[#334155] rounded-3xl p-6 sm:p-8 text-[#F8FAFC] shadow-xl mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F5C451]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#E99A55]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-[#F5C451]">
              <Award className="w-3.5 h-3.5 text-[#F5C451]" />
              <span>Milestone Progress Tracker</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-[#F8FAFC] tracking-tight">
              {roadmapPercent}% of Roadmap Completed
            </h2>
            <p className="text-[#B5C0D0] text-xs sm:text-sm leading-relaxed">
              {completedRoadmapCount} of {totalRoadmapTasks} actionable tasks completed. Check off tasks as you finish them to track your verified journey.
            </p>
          </div>

          <div className="shrink-0 text-center w-full md:w-auto">
            <div className="w-24 h-24 rounded-full border border-[#F5C451]/40 flex items-center justify-center mx-auto bg-[#101828] shadow-md">
              <span className="text-2xl font-extrabold font-['Outfit'] text-[#F5C451] font-mono">{roadmapPercent}%</span>
            </div>
          </div>
        </div>

        {/* Master Progress Bar */}
        <div className="w-full h-2.5 bg-white/10 rounded-full mt-6 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#F5C451] to-[#E99A55] rounded-full transition-all duration-500 shadow-sm"
            style={{ width: `${roadmapPercent}%` }}
          />
        </div>
      </div>

      {/* 5-Stage Connected Timeline */}
      <div className="relative pl-6 sm:pl-8 space-y-10 border-l-2 border-[#CBD5E1] ml-4 sm:ml-6">
        
        {ROADMAP_STAGES.map((stage) => {
          const completedTasksInStage = stage.tasks.filter(t => !!roadmapProgress[t.id]).length;
          const isStageFinished = completedTasksInStage === stage.tasks.length;
          const isStageStarted = completedTasksInStage > 0;

          return (
            <div key={stage.id} className="relative group">
              
              {/* Connected Timeline Marker Circle */}
              <div className={`absolute -left-[35px] sm:-left-[43px] top-4 w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-xs shadow-md transition-all font-mono ${
                isStageFinished
                  ? 'bg-[#16845B] text-white ring-4 ring-[#16845B]/20'
                  : isStageStarted
                  ? 'bg-[#F5C451] text-[#101828] ring-4 ring-[#F5C451]/30'
                  : 'bg-white text-[#64748B] border border-[#CBD5E1]'
              }`}>
                {isStageFinished ? <CheckCircle2 className="w-5 h-5 text-white" /> : stage.stageNumber}
              </div>

              {/* Stage Card (Clean White Surface on #E9EEF5) */}
              <div className="bg-white hover:bg-[#FAF9F5] rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] hover:border-[#CBD5E1] shadow-xs hover:shadow-md transition-all duration-200 space-y-5">
                
                {/* Stage Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#182338] text-[#F8FAFC] font-mono">
                        {stage.badge}
                      </span>
                      <span className="text-xs text-[#64748B] flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{stage.durationEst}</span>
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#172033] font-['Outfit']">
                      {stage.title}
                    </h3>
                  </div>

                  <span className={`text-xs font-bold px-3 py-1 rounded-full border font-mono ${
                    isStageFinished
                      ? 'bg-[#16845B]/10 text-[#16845B] border-[#16845B]/30'
                      : isStageStarted
                      ? 'bg-[#F5C451]/20 text-[#101828] border-[#F5C451]/40'
                      : 'bg-[#F8FAFC] text-[#64748B] border-[#E2E8F0]'
                  }`}>
                    {completedTasksInStage}/{stage.tasks.length} Completed
                  </span>
                </div>

                {/* Short Explanation */}
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {stage.description}
                </p>

                {/* Actionable Tasks List */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#172033] block font-mono">
                    Action Items:
                  </span>
                  {stage.tasks.map((task) => {
                    const isChecked = !!roadmapProgress[task.id];
                    return (
                      <div
                        key={task.id}
                        onClick={() => handleToggle(task.id)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                          isChecked
                            ? 'bg-[#F8FAFC] border-[#16845B]/30'
                            : 'bg-[#F8FAFC] border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-white'
                        }`}
                      >
                        <button
                          type="button"
                          className="mt-0.5 focus:outline-none shrink-0 cursor-pointer"
                          aria-label={`Toggle ${task.label}`}
                        >
                          {isChecked ? (
                            <CheckCircle2 className="w-5 h-5 text-[#16845B]" />
                          ) : (
                            <Circle className="w-5 h-5 text-[#CBD5E1] hover:text-[#101828] transition-colors" />
                          )}
                        </button>

                        <div className="space-y-0.5">
                          <h4 className={`text-xs sm:text-sm font-bold ${
                            isChecked ? 'line-through text-[#94A3B8]' : 'text-[#172033]'
                          }`}>
                            {task.label}
                          </h4>
                          <p className="text-xs text-[#64748B] leading-relaxed">
                            {task.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Pro Tip Box (Warm beige accent) */}
                <div className="p-3.5 rounded-xl bg-[#F4F1E8] border border-[#E2E8F0] flex items-start gap-2.5 text-xs text-[#172033]">
                  <Lightbulb className="w-4 h-4 text-[#E99A55] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Stage Insight: </span>
                    <span className="text-[#64748B]">{stage.proTip}</span>
                  </div>
                </div>

              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}
