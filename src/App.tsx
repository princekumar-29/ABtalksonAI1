/**
 * ABTalks — 60-Day Coding Challenge Platform
 * 
 * ROUTE MAP:
 * /
 * /dashboard
 * /day/12
 */

import React, { useState, useEffect } from 'react';
import { initialStudent, day12Challenge, generateProofChain, mockAchievements } from './data/mockData';
import { DemoState, DayChallenge, Student } from './types';
import { Navbar } from './components/Navbar';
import { BottomNavigation } from './components/BottomNavigation';
import { LandingPage } from './views/LandingPage';
import { DashboardView } from './views/DashboardView';
import { ChallengeDayView } from './views/ChallengeDayView';

export default function App() {
  // Client-side router state
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Global demo state for testing edge cases
  const [demoState, setDemoState] = useState<DemoState>('normal');

  // Student and challenge states
  const [student, setStudent] = useState<Student>(initialStudent);
  const [challenge, setChallenge] = useState<DayChallenge>(day12Challenge);
  const [proofChain, setProofChain] = useState<DayChallenge[]>(() =>
    generateProofChain(12)
  );

  // Sync route on popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Custom navigation helper
  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Completion callback when student completes Day 12
  const handleCompleteDay12 = () => {
    setStudent((prev) => ({
      ...prev,
      streakDays: prev.streakDays + 1,
    }));

    setProofChain((prevChain) =>
      prevChain.map((day) =>
        day.dayNumber === 12
          ? {
              ...day,
              status: 'completed',
              githubProof: 'https://github.com/arjunsharma-dev/responsive-portfolio',
              linkedinProof: 'https://linkedin.com/posts/arjunsharma-day12-portfolio-build',
              completedAt: new Date().toISOString().split('T')[0],
            }
          : day
      )
    );
  };

  // Route Rendering Logic
  const renderRoute = () => {
    switch (currentPath) {
      case '/dashboard':
        return (
          <DashboardView
            student={student}
            challenge={challenge}
            chain={proofChain}
            achievements={mockAchievements}
            demoState={demoState}
            setDemoState={setDemoState}
            navigate={navigate}
          />
        );

      case '/day/12':
        return (
          <ChallengeDayView
            challenge={challenge}
            navigate={navigate}
            onCompleteDay12={handleCompleteDay12}
          />
        );

      case '/':
      default:
        return <LandingPage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-white flex flex-col font-sans selection:bg-[#38BDF8]/30 selection:text-[#38BDF8]">
      
      {/* Top Navbar */}
      <Navbar
        currentPath={currentPath}
        navigate={navigate}
        demoState={demoState}
        setDemoState={setDemoState}
      />

      {/* Main View Area */}
      <main className="flex-1 w-full">
        {renderRoute()}
      </main>

      {/* Mobile Bottom Navigation (390px Viewport Target) */}
      <BottomNavigation
        currentPath={currentPath}
        navigate={navigate}
      />

    </div>
  );
}
