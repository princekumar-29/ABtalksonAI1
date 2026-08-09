import React from 'react';
import { Flame, ShieldCheck, Zap } from 'lucide-react';

interface StreakCardProps {
  streakDays: number;
  navigateDay12: () => void;
  isFirstDay?: boolean;
  isMissedDay?: boolean;
}

export const StreakCard: React.FC<StreakCardProps> = ({
  streakDays,
  navigateDay12,
  isFirstDay,
  isMissedDay,
}) => {
  if (isFirstDay) {
    return (
      <div className="stat-card rounded-3xl p-5 relative overflow-hidden border-acid/50">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-acid/20 border border-acid flex items-center justify-center text-2xl flex-shrink-0">
            🌱
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold acid-green uppercase tracking-widest">
                DAY 1 STARTS HERE
              </span>
            </div>
            <h3 className="font-bold text-white text-base sm:text-lg tracking-tight">
              Complete your first build to start your streak
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Your 60-day journey begins with a single verified commit.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (isMissedDay) {
    return (
      <div className="stat-card rounded-3xl p-5 relative overflow-hidden border-red-500/40">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-red-500/20 text-red-400 text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                Streak Reset
              </span>
            </div>
            <h3 className="font-bold text-white text-base sm:text-lg tracking-tight">
              Yesterday was missed
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Your previous 11-day streak ended. Don't worry—great developers rebuild.
            </p>
            <button
              onClick={navigateDay12}
              className="mt-3 bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Start a new streak</span>
            </button>
          </div>
          <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-xl flex-shrink-0">
            ⚠️
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="stat-card rounded-3xl p-5 relative overflow-hidden border-zinc-800">
      {/* Background glow circle */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-acid/5 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-acid text-black p-0.5 flex items-center justify-center font-black shadow-lg flex-shrink-0 text-2xl">
            🔥
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black italic tracking-tighter text-white">
                {streakDays}
              </span>
              <span className="text-xs font-black uppercase tracking-widest text-zinc-400">
                DAY STREAK
              </span>
            </div>
            <p className="text-xs acid-green font-bold flex items-center gap-1 mt-0.5">
              <Zap className="w-3.5 h-3.5 fill-[#D1FF00]" />
              <span>1 more proof to keep it alive today</span>
            </p>
          </div>
        </div>

        <button
          onClick={navigateDay12}
          className="hidden sm:flex bg-acid text-black hover:bg-[#b8e600] font-bold text-xs px-4 py-2.5 rounded-2xl items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>Keep Alive →</span>
        </button>
      </div>
    </div>
  );
};
