import React from 'react';
import { TrendingUp, Award, Users, Shield } from 'lucide-react';

interface StandingCardProps {
  standingPercentage: number;
  aheadPercentage: number;
  streakDays: number;
}

export const StandingCard: React.FC<StandingCardProps> = ({
  standingPercentage,
  aheadPercentage,
  streakDays,
}) => {
  return (
    <div className="stat-card rounded-3xl p-5 relative overflow-hidden">
      
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-acid text-black font-black">
            <TrendingUp className="w-4 h-4" />
          </div>
          <span className="font-extrabold text-white text-sm uppercase tracking-wider">YOUR STANDING</span>
        </div>

        <span className="bg-acid/15 border border-acid/40 acid-green text-[11px] font-mono px-2.5 py-0.5 rounded-full font-bold">
          TOP {standingPercentage}%
        </span>
      </div>

      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
        Your <span className="text-white font-black">{streakDays}-day streak</span> puts you ahead of{' '}
        <span className="acid-green font-extrabold">{aheadPercentage}% of active participants</span> across Indian engineering colleges this week.
      </p>

      {/* Mini Visual Bar */}
      <div className="mt-4 pt-3 border-t border-zinc-800">
        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1.5 font-bold uppercase tracking-wider">
          <span>Community Percentile</span>
          <span className="acid-green font-black">82nd Percentile</span>
        </div>
        <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
          <div 
            className="h-full bg-acid rounded-full"
            style={{ width: `${aheadPercentage}%` }}
          />
        </div>
      </div>

    </div>
  );
};
