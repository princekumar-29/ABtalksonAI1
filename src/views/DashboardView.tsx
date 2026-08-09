import React from 'react';
import { Student, DayChallenge, Achievement, DemoState } from '../types';
import { StreakCard } from '../components/StreakCard';
import { ChallengeCard } from '../components/ChallengeCard';
import { ProofChainVisualizer } from '../components/ProofChainVisualizer';
import { StandingCard } from '../components/StandingCard';
import { AchievementsGrid } from '../components/AchievementsGrid';
import { EdgeStates } from '../components/EdgeStates';
import { Bell, Sparkles, Flame, CheckCircle2, User, Trophy, Shield, ArrowRight } from 'lucide-react';

interface DashboardViewProps {
  student: Student;
  challenge: DayChallenge;
  chain: DayChallenge[];
  achievements: Achievement[];
  demoState: DemoState;
  setDemoState: (state: DemoState) => void;
  navigate: (path: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  student,
  challenge,
  chain,
  achievements,
  demoState,
  setDemoState,
  navigate,
}) => {
  const isFirstDay = demoState === 'first_day';
  const isMissedDay = demoState === 'missed_day';
  const isEmptyProfile = demoState === 'empty_profile';

  const currentStreakDays = isFirstDay ? 0 : isMissedDay ? 0 : student.streakDays;
  const currentDayNum = isFirstDay ? 1 : student.dayCurrent;

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAFAFA] pb-24 md:pb-12 px-4 sm:px-6 pt-6 max-w-4xl mx-auto space-y-6">
      
      {/* Top Header / Profile Info */}
      <div className="stat-card rounded-3xl p-5 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="relative">
            <img
              src={student.avatarUrl}
              alt={student.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-acid"
            />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-acid rounded-full ring-2 ring-[#0A0A0A]" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-extrabold text-white text-base sm:text-lg">{student.name}</h2>
              <span className="bg-acid/15 border border-acid/40 acid-green text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                {student.track}
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-medium">{student.college}</p>
          </div>
        </div>

        {/* Demo Switcher Quick Bar */}
        <div className="hidden sm:flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 p-1.5 rounded-2xl text-xs font-mono font-bold text-zinc-400">
          <span className="px-2 text-[10px] uppercase tracking-wider text-zinc-500">State:</span>
          <button
            onClick={() => setDemoState('normal')}
            className={`px-2.5 py-1 rounded-xl transition-colors cursor-pointer ${demoState === 'normal' ? 'bg-acid text-black font-black' : 'hover:text-white'}`}
          >
            Day 12
          </button>
          <button
            onClick={() => setDemoState('first_day')}
            className={`px-2.5 py-1 rounded-xl transition-colors cursor-pointer ${demoState === 'first_day' ? 'bg-acid text-black font-black' : 'hover:text-white'}`}
          >
            First Day
          </button>
          <button
            onClick={() => setDemoState('missed_day')}
            className={`px-2.5 py-1 rounded-xl transition-colors cursor-pointer ${demoState === 'missed_day' ? 'bg-red-500 text-white font-black' : 'hover:text-white'}`}
          >
            Missed
          </button>
          <button
            onClick={() => setDemoState('empty_profile')}
            className={`px-2.5 py-1 rounded-xl transition-colors cursor-pointer ${demoState === 'empty_profile' ? 'bg-amber-400 text-black font-black' : 'hover:text-white'}`}
          >
            Empty Profile
          </button>
        </div>
      </div>

      {/* Greeting */}
      <div>
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Good evening, {student.name.split(' ')[0]}.</p>
        <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tighter uppercase mt-1">
          {isFirstDay
            ? 'Day 1 is ready for your first build.'
            : isMissedDay
            ? 'Start a fresh streak tonight.'
            : `Day ${currentDayNum} is waiting.`}
        </h1>
      </div>

      {/* Edge State Profile Completion Banner if active */}
      {isEmptyProfile && <EdgeStates type="empty_profile" />}

      {/* Streak Card */}
      <StreakCard
        streakDays={currentStreakDays}
        navigateDay12={() => navigate('/day/12')}
        isFirstDay={isFirstDay}
        isMissedDay={isMissedDay}
      />

      {/* Today's Challenge Card */}
      <ChallengeCard
        challenge={{
          ...challenge,
          dayNumber: currentDayNum,
          title: isFirstDay
            ? 'Build your first HTML5 personal homepage'
            : challenge.title,
        }}
        navigateDay12={() => navigate('/day/12')}
      />

      {/* 60-DAY PROGRESS Section */}
      <div className="stat-card rounded-3xl p-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 acid-green" />
            <span className="font-extrabold text-white text-sm uppercase tracking-wider">60-DAY PROGRESS</span>
          </div>
          <span className="font-mono text-xs acid-green font-extrabold">
            Day {currentDayNum} / 60 • {Math.round((currentDayNum / 60) * 100)}% COMPLETE
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
          <div
            className="h-full bg-acid rounded-full transition-all duration-700"
            style={{ width: `${(currentDayNum / 60) * 100}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mt-2 font-bold uppercase tracking-wider">
          <span>Sprint Progress: {currentDayNum} Days Logged</span>
          <span>48 Days Remaining</span>
        </div>
      </div>

      {/* Proof Chain Visualizer */}
      <ProofChainVisualizer
        chain={chain}
        currentDay={currentDayNum}
        navigate={navigate}
      />

      {/* Community Standing & Achievements in 2-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <StandingCard
          standingPercentage={student.standingPercentage}
          aheadPercentage={student.aheadPercentage}
          streakDays={currentStreakDays}
        />

        <AchievementsGrid achievements={achievements} />
      </div>

    </div>
  );
};
