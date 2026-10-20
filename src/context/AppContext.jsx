import React, { createContext, useContext, useState, useEffect } from 'react';
import { CAREERS_DATA } from '../data/careersData';
import { ROADMAP_STAGES } from '../data/roadmapData';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Theme state with local persistence
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('careersaathi_theme');
      if (savedTheme) return savedTheme;
      return 'dark';
    } catch {
      return 'dark';
    }
  });

  // Current view / routing state
  const [currentView, setCurrentView] = useState('landing');
  const [selectedCareerModal, setSelectedCareerModal] = useState(null);

  // Student Profile
  const [studentProfile, setStudentProfile] = useState(() => {
    try {
      const saved = localStorage.getItem('careersaathi_profile');
      return saved ? JSON.parse(saved) : { name: "Aarav Sharma", educationLevel: "12th Standard (Science)", careerInterest: "Technology & Creative Design" };
    } catch {
      return { name: "Aarav Sharma", educationLevel: "12th Standard (Science)", careerInterest: "Technology & Creative Design" };
    }
  });

  // Favorites state
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('careersaathi_favorites');
      return saved ? JSON.parse(saved) : ['fullstack-dev', 'uiux-designer'];
    } catch {
      return ['fullstack-dev', 'uiux-designer'];
    }
  });

  // Course Comparison list (Max 3)
  const [comparisonList, setComparisonList] = useState(() => {
    try {
      const saved = localStorage.getItem('careersaathi_compare');
      return saved ? JSON.parse(saved) : ['course-fullstack', 'course-uiux'];
    } catch {
      return ['course-fullstack', 'course-uiux'];
    }
  });

  // Assessment state
  const [assessmentAnswers, setAssessmentAnswers] = useState(() => {
    try {
      const saved = localStorage.getItem('careersaathi_assessment_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [assessmentCompleted, setAssessmentCompleted] = useState(() => {
    try {
      const saved = localStorage.getItem('careersaathi_assessment_done');
      return saved === 'true';
    } catch {
      return false;
    }
  });

  // Roadmap Progress Checklist
  const [roadmapProgress, setRoadmapProgress] = useState(() => {
    try {
      const saved = localStorage.getItem('careersaathi_roadmap_progress');
      return saved ? JSON.parse(saved) : { 'task_1_1': true, 'task_1_2': true };
    } catch {
      return { 'task_1_1': true, 'task_1_2': true };
    }
  });

  // Family Support Notes
  const [familyNotes, setFamilyNotes] = useState(() => {
    try {
      const saved = localStorage.getItem('careersaathi_family_notes');
      return saved || "Discussed with parents on Sunday: We agreed that exploring a hands-on 6-month tech or design diploma is a strong starting point. Budget target is under ₹50,000. Plan to review project outcomes together in month 3.";
    } catch {
      return "";
    }
  });

  // Toast / Notification banner
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Sync theme to DOM
  useEffect(() => {
    try {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('careersaathi_theme', theme);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  // Persist Profile
  useEffect(() => {
    try {
      localStorage.setItem('careersaathi_profile', JSON.stringify(studentProfile));
    } catch (e) {
      console.error(e);
    }
  }, [studentProfile]);

  // Persist Favorites
  useEffect(() => {
    try {
      localStorage.setItem('careersaathi_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  // Persist Comparison
  useEffect(() => {
    try {
      localStorage.setItem('careersaathi_compare', JSON.stringify(comparisonList));
    } catch (e) {
      console.error(e);
    }
  }, [comparisonList]);

  // Persist Assessment
  useEffect(() => {
    try {
      localStorage.setItem('careersaathi_assessment_answers', JSON.stringify(assessmentAnswers));
      localStorage.setItem('careersaathi_assessment_done', assessmentCompleted ? 'true' : 'false');
    } catch (e) {
      console.error(e);
    }
  }, [assessmentAnswers, assessmentCompleted]);

  // Persist Roadmap
  useEffect(() => {
    try {
      localStorage.setItem('careersaathi_roadmap_progress', JSON.stringify(roadmapProgress));
    } catch (e) {
      console.error(e);
    }
  }, [roadmapProgress]);

  // Persist Family Notes
  useEffect(() => {
    try {
      localStorage.setItem('careersaathi_family_notes', familyNotes);
    } catch (e) {
      console.error(e);
    }
  }, [familyNotes]);

  // Favorites toggle
  const toggleFavorite = (careerId) => {
    if (favorites.includes(careerId)) {
      setFavorites(favorites.filter(id => id !== careerId));
      showToast("Removed from saved careers", "info");
    } else {
      setFavorites([...favorites, careerId]);
      showToast("Saved to your career wishlist!", "success");
    }
  };

  // Comparison actions
  const addToCompare = (courseId) => {
    if (comparisonList.includes(courseId)) {
      showToast("Course is already in your comparison table", "info");
      return;
    }
    if (comparisonList.length >= 3) {
      showToast("Comparison limit reached (Max 3 courses). Please remove one first.", "warning");
      return;
    }
    setComparisonList([...comparisonList, courseId]);
    showToast("Course added to comparison!", "success");
  };

  const removeFromCompare = (courseId) => {
    setComparisonList(comparisonList.filter(id => id !== courseId));
    showToast("Course removed from comparison", "info");
  };

  const clearComparison = () => {
    setComparisonList([]);
    showToast("Comparison table cleared", "info");
  };

  // Toggle Roadmap Task
  const toggleRoadmapTask = (taskId) => {
    setRoadmapProgress(prev => {
      const next = { ...prev, [taskId]: !prev[taskId] };
      return next;
    });
  };

  // Calculate Roadmap Completion Percentage
  const totalRoadmapTasks = ROADMAP_STAGES.reduce((acc, stage) => acc + stage.tasks.length, 0);
  const completedRoadmapCount = Object.values(roadmapProgress).filter(Boolean).length;
  const roadmapPercent = Math.round((completedRoadmapCount / (totalRoadmapTasks || 1)) * 100);

  // Derived Assessment Results
  const computeAssessmentResults = () => {
    // Archetype and match weighting from demo answers
    let targetCareerIds = [];
    if (assessmentAnswers.q_interest_main) {
      if (assessmentAnswers.q_interest_main === 'tech_software') targetCareerIds.push('fullstack-dev', 'cybersecurity-analyst', 'data-analyst');
      if (assessmentAnswers.q_interest_main === 'creative_design') targetCareerIds.push('uiux-designer', 'digital-marketing-spec');
      if (assessmentAnswers.q_interest_main === 'hands_on_green') targetCareerIds.push('solar-energy-tech', 'ev-maintenance-spec', 'industrial-automation-tech');
      if (assessmentAnswers.q_interest_main === 'data_investigation') targetCareerIds.push('data-analyst', 'cybersecurity-analyst');
      if (assessmentAnswers.q_interest_main === 'health_helping') targetCareerIds.push('healthcare-lab-tech');
    }

    if (targetCareerIds.length === 0) {
      targetCareerIds = ['fullstack-dev', 'uiux-designer', 'solar-energy-tech'];
    }

    const matchedCareers = CAREERS_DATA.filter(c => targetCareerIds.includes(c.id)).slice(0, 3);
    if (matchedCareers.length < 3) {
      const remaining = CAREERS_DATA.filter(c => !targetCareerIds.includes(c.id));
      matchedCareers.push(...remaining.slice(0, 3 - matchedCareers.length));
    }

    return {
      topArchetype: matchedCareers[0]?.archetype || "Creative Problem Solver",
      matchScore: 94,
      matchedCareers,
      strengthsIdentified: ["Visual Reasoning", "Systematic Problem Solving", "Quick Digital Tool Adoption"]
    };
  };

  const navigateTo = (view, extra = null) => {
    setCurrentView(view);
    if (extra && extra.career) {
      setSelectedCareerModal(extra.career);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        currentView,
        navigateTo,
        studentProfile,
        setStudentProfile,
        favorites,
        toggleFavorite,
        comparisonList,
        addToCompare,
        removeFromCompare,
        clearComparison,
        assessmentAnswers,
        setAssessmentAnswers,
        assessmentCompleted,
        setAssessmentCompleted,
        computeAssessmentResults,
        roadmapProgress,
        toggleRoadmapTask,
        roadmapPercent,
        totalRoadmapTasks,
        completedRoadmapCount,
        familyNotes,
        setFamilyNotes,
        selectedCareerModal,
        setSelectedCareerModal,
        toast,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
