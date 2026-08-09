import React from 'react';
import { Shield, Sparkles, Flame, User, ArrowLeft, Layers, CheckCircle2 } from 'lucide-react';
import { DemoState } from '../types';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
  demoState: DemoState;
  setDemoState: (state: DemoState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate, demoState, setDemoState }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-zinc-800 px-4 py-3">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Brand logo & title */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-left group focus:outline-none cursor-pointer"
          >
            <div className="w-8 h-8 bg-acid rounded-lg flex items-center justify-center text-black font-black italic tracking-tighter shadow-md transition-transform group-hover:scale-105">
              AB
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-tighter text-white group-hover:text-[#D1FF00] transition-colors uppercase">
                  ABTalks
                </span>
                <span className="bg-acid/15 border border-acid/40 text-[#D1FF00] text-[10px] font-mono font-bold px-1.5 py-0.5 rounded">
                  60 DAYS
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* Desktop / Navigation links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#111111] border border-zinc-800 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => navigate('/')}
            className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
              currentPath === '/' 
                ? 'bg-acid text-black font-black shadow-sm' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            LANDING
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              currentPath === '/dashboard' 
                ? 'bg-acid text-black font-black shadow-sm' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            DASHBOARD
          </button>
          <button
            onClick={() => navigate('/day/12')}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              currentPath === '/day/12' 
                ? 'bg-acid text-black font-black shadow-sm' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            DAY 12
          </button>
        </nav>

        {/* Profile / Demo Mode Switcher Pill */}
        <div className="flex items-center gap-2">
          {/* Quick Demo State Picker */}
          <div className="relative group">
            <select
              value={demoState}
              onChange={(e) => setDemoState(e.target.value as DemoState)}
              aria-label="Select Demo State"
              className="bg-[#111111] border border-zinc-800 text-zinc-300 text-[11px] font-mono font-bold rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-acid cursor-pointer hover:border-zinc-700 transition-colors"
            >
              <option value="normal">Normal (Day 12)</option>
              <option value="first_day">First Day (Day 1)</option>
              <option value="missed_day">Missed Day State</option>
              <option value="empty_profile">Empty Profile</option>
            </select>
          </div>

          {/* User Avatar */}
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 p-1 rounded-full border border-zinc-800 hover:border-acid bg-[#111111] transition-colors cursor-pointer"
            title="Arjun Sharma Profile"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                alt="Arjun Sharma"
                className="w-7 h-7 rounded-full object-cover border border-zinc-700"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#D1FF00] rounded-full ring-2 ring-[#0A0A0A]" />
            </div>
          </button>
        </div>

      </div>
    </header>
  );
};
