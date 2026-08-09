import React, { useState } from 'react';
import { DayChallenge } from '../types';
import { Check, Github, Linkedin, Lock, ChevronRight, Sparkles, ExternalLink, Flame } from 'lucide-react';

interface ProofChainVisualizerProps {
  chain: DayChallenge[];
  currentDay: number;
  navigate: (path: string) => void;
}

export const ProofChainVisualizer: React.FC<ProofChainVisualizerProps> = ({
  chain,
  currentDay,
  navigate,
}) => {
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(currentDay);

  const selectedDay = chain.find((d) => d.dayNumber === selectedDayNumber) || chain[currentDay - 1];

  // We show a focus range around current day for smooth horizontal view on mobile
  const startIndex = Math.max(0, currentDay - 5);
  const endIndex = Math.min(chain.length, currentDay + 4);
  const focusedDays = chain.slice(startIndex, endIndex);

  return (
    <div className="stat-card rounded-3xl p-5 relative overflow-hidden">
      
      {/* Background subtle radial glow */}
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-acid/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-acid text-black font-black">
              <Sparkles className="w-4 h-4" />
            </span>
            <h3 className="font-black text-white text-base uppercase tracking-tight">PROOF CHAIN</h3>
            <span className="bg-acid/15 border border-acid/40 acid-green text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              VERIFIED LINKS
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Every build adds a verified link to your 60-day learning trail.
          </p>
        </div>
      </div>

      {/* Proof Chain Node Track (Horizontal Scrollable with connected line) */}
      <div className="relative my-4 py-3">
        {/* Connection Line */}
        <div className="absolute top-[34px] left-6 right-6 h-[2px] bg-zinc-800 z-0" />
        <div 
          className="absolute top-[34px] left-6 h-[2px] bg-acid z-0 transition-all duration-500"
          style={{ width: `${Math.min(100, Math.max(10, ((currentDay - startIndex) / focusedDays.length) * 100))}%` }}
        />

        {/* Scrollable Node List */}
        <div className="flex items-center justify-between gap-3 overflow-x-auto no-scrollbar relative z-10 px-1 py-1">
          {focusedDays.map((day) => {
            const isCompleted = day.status === 'completed';
            const isCurrent = day.dayNumber === currentDay;
            const isSelected = day.dayNumber === selectedDayNumber;

            return (
              <button
                key={day.dayNumber}
                onClick={() => setSelectedDayNumber(day.dayNumber)}
                className={`flex flex-col items-center gap-2 group flex-shrink-0 focus:outline-none transition-all cursor-pointer ${
                  isSelected ? 'scale-105' : 'hover:scale-102'
                }`}
              >
                {/* Node circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all relative ${
                    isCompleted
                      ? 'border-2 border-acid text-acid bg-transparent'
                      : isCurrent
                      ? 'border-2 border-acid bg-acid text-black font-black shadow-lg glow-acid animate-pulse'
                      : 'border-2 border-zinc-800 text-zinc-500 bg-[#0A0A0A]'
                  } ${isSelected ? 'ring-2 ring-white/80' : ''}`}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 stroke-[3]" />
                  ) : isCurrent ? (
                    <span className="font-black text-xs">12</span>
                  ) : (
                    <span className="text-[11px] font-bold">{String(day.dayNumber).padStart(2, '0')}</span>
                  )}

                  {/* TODAY Badge */}
                  {isCurrent && (
                    <span className="absolute -top-6 bg-acid text-black text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider shadow-sm animate-bounce">
                      TODAY
                    </span>
                  )}
                </div>

                {/* Day label */}
                <div className="text-center">
                  <span
                    className={`block font-mono text-[11px] font-bold ${
                      isCurrent
                        ? 'acid-green'
                        : isCompleted
                        ? 'text-zinc-300'
                        : 'text-zinc-600'
                    }`}
                  >
                    Day {day.dayNumber}
                  </span>
                  <div className="flex items-center justify-center gap-1 mt-0.5">
                    {day.githubProof && (
                      <span className="w-1.5 h-1.5 rounded-full bg-acid" title="GitHub verified" />
                    )}
                    {day.linkedinProof && (
                      <span className="w-1.5 h-1.5 rounded-full bg-acid" title="LinkedIn verified" />
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Day Inspector Card */}
      {selectedDay && (
        <div className="mt-3 bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-4 relative">
          
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-black acid-green uppercase tracking-wider">
                  Day {selectedDay.dayNumber} of 60
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                    selectedDay.status === 'completed'
                      ? 'bg-acid/20 text-acid border border-acid/40'
                      : selectedDay.status === 'in_progress'
                      ? 'bg-acid text-black'
                      : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  {selectedDay.status === 'completed'
                    ? '✓ Verified Complete'
                    : selectedDay.status === 'in_progress'
                    ? '⚡ Today’s Mission'
                    : 'Upcoming'}
                </span>
              </div>
              <h4 className="text-white font-bold text-sm sm:text-base leading-snug">
                {selectedDay.title}
              </h4>
            </div>

            {selectedDay.dayNumber === currentDay && (
              <button
                onClick={() => navigate('/day/12')}
                className="flex-shrink-0 bg-acid hover:bg-[#b8e600] text-black text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
              >
                Open Day 12
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Proof Badges */}
          <div className="mt-3 pt-3 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider">Proofs:</span>
              
              {/* GitHub */}
              {selectedDay.githubProof ? (
                <a
                  href={selectedDay.githubProof}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-zinc-900 hover:bg-zinc-800 acid-green border border-acid/30 text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3 h-3" />
                  <span>GitHub Repo</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                </a>
              ) : (
                <span className="bg-zinc-900 text-zinc-600 text-[11px] font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                  <Github className="w-3 h-3 opacity-50" />
                  <span>GitHub Pending</span>
                </span>
              )}

              {/* LinkedIn */}
              {selectedDay.linkedinProof ? (
                <a
                  href={selectedDay.linkedinProof}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-zinc-900 hover:bg-zinc-800 acid-green border border-acid/30 text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Linkedin className="w-3 h-3" />
                  <span>LinkedIn Post</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                </a>
              ) : (
                <span className="bg-zinc-900 text-zinc-600 text-[11px] font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                  <Linkedin className="w-3 h-3 opacity-50" />
                  <span>LinkedIn Pending</span>
                </span>
              )}
            </div>

            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
              {selectedDay.status === 'completed' ? 'Logged on Chain' : 'Next Goal'}
            </span>
          </div>

        </div>
      )}

    </div>
  );
};
