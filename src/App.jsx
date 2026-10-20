import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Toast from './components/common/Toast';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import AssessmentPage from './pages/AssessmentPage';
import ExplorerPage from './pages/ExplorerPage';
import ComparePage from './pages/ComparePage';
import FamilyPage from './pages/FamilyPage';
import RoadmapPage from './pages/RoadmapPage';

function AppContent() {
  const { currentView } = useApp();
  const isDashboard = currentView === 'dashboard';

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardPage />;
      case 'assessment':
        return <AssessmentPage />;
      case 'explorer':
        return <ExplorerPage />;
      case 'compare':
        return <ComparePage />;
      case 'family':
        return <FamilyPage />;
      case 'roadmap':
        return <RoadmapPage />;
      case 'landing':
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#E9EEF5] text-[#172033] transition-colors duration-200">
      {!isDashboard && <Navbar />}
      <main className="flex-1 flex flex-col">
        {renderCurrentView()}
      </main>
      {!isDashboard && <Footer />}
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
