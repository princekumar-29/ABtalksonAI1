import React from 'react';
import { Home, LayoutDashboard, Code, Sparkles } from 'lucide-react';

interface BottomNavigationProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ currentPath, navigate }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-lg border-t border-zinc-800 px-4 py-2">
      <div className="max-w-[390px] mx-auto flex items-center justify-around">
        
        {/* Landing / Home */}
        <button
          onClick={() => navigate('/')}
          className={`flex flex-col items-center gap-1 py-1.5 px-3 rounded-xl transition-all cursor-pointer ${
            currentPath === '/' 
              ? 'text-[#D1FF00] font-black' 
              : 'text-zinc-500 hover:text-white'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-tight uppercase">Home</span>
        </button>

        {/* Dashboard */}
        <button
          onClick={() => navigate('/dashboard')}
          className={`flex flex-col items-center gap-1 py-1.5 px-3 rounded-xl transition-all relative cursor-pointer ${
            currentPath === '/dashboard' 
              ? 'text-[#D1FF00] font-black' 
              : 'text-zinc-500 hover:text-white'
          }`}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-tight uppercase">Dashboard</span>
          {currentPath === '/dashboard' && (
            <span className="absolute -top-1 w-1.5 h-1.5 bg-[#D1FF00] rounded-full glow-acid" />
          )}
        </button>

        {/* Day 12 Challenge */}
        <button
          onClick={() => navigate('/day/12')}
          className={`flex flex-col items-center gap-1 py-1.5 px-3.5 rounded-xl transition-all relative cursor-pointer ${
            currentPath === '/day/12' 
              ? 'text-[#D1FF00] font-black' 
              : 'text-zinc-500 hover:text-white'
          }`}
        >
          <div className={`p-1 rounded-lg ${currentPath === '/day/12' ? 'bg-[#D1FF00]/15 text-[#D1FF00]' : ''}`}>
            <Code className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold tracking-tight uppercase">Day 12</span>
          {currentPath === '/day/12' && (
            <span className="absolute -top-1 w-1.5 h-1.5 bg-[#D1FF00] rounded-full glow-acid" />
          )}
        </button>

      </div>
    </nav>
  );
};
