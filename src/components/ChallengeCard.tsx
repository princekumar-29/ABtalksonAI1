import React from 'react';
import { DayChallenge } from '../types';
import { ArrowRight, Clock, Gauge, Code2, Play } from 'lucide-react';

interface ChallengeCardProps {
  challenge: DayChallenge;
  navigateDay12: () => void;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, navigateDay12 }) => {
  return (
    <div className="glass rounded-3xl p-5 border-acid relative overflow-hidden">
      
      {/* Top Tag & Time */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="bg-zinc-800 text-zinc-300 font-bold text-[10px] px-2.5 py-1 rounded uppercase tracking-wider">
            TODAY'S MISSION
          </span>
          <span className="bg-acid text-black font-black text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
            DAY {challenge.dayNumber}
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono font-bold text-zinc-400">
          <span className="flex items-center gap-1">
            <Gauge className="w-3.5 h-3.5 acid-green" />
            {challenge.difficulty}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 acid-green" />
            {challenge.estimatedTime}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-extrabold text-white text-xl sm:text-2xl leading-snug mb-3 tracking-tight">
        {challenge.title}
      </h3>

      {/* Tech Badges */}
      <div className="flex flex-wrap items-center gap-1.5 mb-5">
        {challenge.techStack.map((tech) => (
          <span
            key={tech}
            className="bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-[11px] font-bold px-2.5 py-1 rounded-lg"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Bottom CTA & Status */}
      <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-bold text-zinc-400">
          <Code2 className="w-4 h-4 acid-green" />
          <span>Proof 0 / 2 Submitted</span>
        </div>

        <button
          onClick={navigateDay12}
          className="bg-acid hover:bg-[#b8e600] active:scale-98 text-black font-bold text-xs px-5 py-3 rounded-2xl flex items-center gap-2 transition-all shadow-md cursor-pointer"
        >
          <Play className="w-3.5 h-3.5 fill-black" />
          <span>Open Day 12</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
