import React from 'react';
import { Achievement } from '../types';
import { Award, Lock, CheckCircle2 } from 'lucide-react';

interface AchievementsGridProps {
  achievements: Achievement[];
}

export const AchievementsGrid: React.FC<AchievementsGridProps> = ({ achievements }) => {
  return (
    <div className="stat-card rounded-3xl p-5">
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 acid-green" />
          <h3 className="font-extrabold text-white text-sm sm:text-base uppercase tracking-wider">ACHIEVEMENTS</h3>
        </div>
        <span className="text-[11px] font-mono font-bold text-zinc-400">
          {achievements.filter((a) => a.unlocked).length} / {achievements.length} UNLOCKED
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {achievements.map((item) => (
          <div
            key={item.id}
            className={`p-3.5 rounded-2xl border flex flex-col justify-between transition-all ${
              item.unlocked
                ? 'bg-zinc-900 border-zinc-700 text-white hover:border-acid'
                : 'bg-[#0A0A0A] border-zinc-800 text-zinc-600'
            }`}
          >
            <div className="flex items-start justify-between gap-1 mb-2">
              <span className="text-2xl">{item.icon}</span>
              {item.unlocked ? (
                <CheckCircle2 className="w-4 h-4 acid-green" />
              ) : (
                <Lock className="w-3.5 h-3.5 text-zinc-600" />
              )}
            </div>

            <div>
              <h4 className={`font-bold text-xs leading-snug ${item.unlocked ? 'text-white' : 'text-zinc-500'}`}>
                {item.title}
              </h4>
              <p className="text-[10px] text-zinc-400 mt-1 line-clamp-2 leading-tight font-medium">
                {item.unlocked ? item.description : item.unlockRequirement || 'Locked'}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
