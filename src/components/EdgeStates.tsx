import React from 'react';
import { UserPlus, Github, Linkedin, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

interface EdgeStatesProps {
  type: 'first_day' | 'missed_day' | 'empty_profile';
  onAction?: () => void;
}

export const EdgeStates: React.FC<EdgeStatesProps> = ({ type, onAction }) => {
  if (type === 'empty_profile') {
    return (
      <div className="bg-[#121620] border border-[#38BDF8]/40 rounded-2xl p-4 sm:p-5 relative overflow-hidden">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30 text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase">
                Profile Incomplete
              </span>
            </div>
            <h3 className="font-bold text-white text-base">Complete your profile</h3>
            <p className="text-xs text-[#8E9AAF] mt-1">
              Add your GitHub username and LinkedIn handle to make your proof trail visible to hiring recruiters.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 bg-[#181D29] border border-[#2B3548] px-2.5 py-1 rounded-lg text-xs font-mono text-[#A0AEC0]">
                <Github className="w-3.5 h-3.5 text-white" />
                <span>github.com/username</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#181D29] border border-[#2B3548] px-2.5 py-1 rounded-lg text-xs font-mono text-[#A0AEC0]">
                <Linkedin className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>linkedin.com/in/username</span>
              </div>
            </div>
          </div>

          <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-xl flex-shrink-0">
            👤
          </div>
        </div>
      </div>
    );
  }

  return null;
};
