import React from 'react';
import { ArrowRight, Code, Github, Linkedin, Sparkles, Trophy, CheckCircle2, Flame, Shield, Users, Layers, Zap, Play } from 'lucide-react';

interface LandingPageProps {
  navigate: (path: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ navigate }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAFAFA] pb-24 md:pb-12">
      
      {/* Hero Container */}
      <section className="px-4 pt-8 pb-12 max-w-4xl mx-auto text-left sm:text-center relative overflow-hidden">
        
        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 bg-[#0A0A0A] border border-zinc-800 px-3.5 py-1.5 rounded-full mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-acid animate-pulse" />
          <span className="font-mono text-xs acid-green font-bold tracking-[0.2em] uppercase">
            60 DAYS • BUILD EVERY DAY
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.95] text-white mb-5 uppercase">
          DON’T JUST LEARN TO CODE.<br />
          <span className="acid-green">BUILD PROOF.</span>
        </h1>

        {/* Supporting text */}
        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed mb-8">
          Build something every day for 60 days. Ship it, prove it, and turn your learning streak into a portfolio recruiters can see.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 mb-10">
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-acid hover:bg-[#b8e600] text-black font-extrabold text-sm px-8 py-4 rounded-2xl flex items-center justify-center gap-2.5 shadow-xl transition-all cursor-pointer"
          >
            <span>Start the 60-Day Challenge</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollToSection('how-it-works')}
            className="bg-[#0A0A0A] hover:bg-zinc-900 text-zinc-300 border border-zinc-800 font-bold text-sm px-6 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>See how it works</span>
          </button>
        </div>

        {/* Visual Proof Chain Teaser */}
        <div className="stat-card rounded-3xl p-5 sm:p-6 text-left relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between mb-4 border-b border-zinc-800/80 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 acid-green" />
              <span className="font-extrabold text-xs sm:text-sm text-white uppercase tracking-wider">The Public Learning Trail</span>
            </div>
            <span className="text-[10px] font-mono font-bold acid-green bg-acid/15 border border-acid/30 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
              Verified Links
            </span>
          </div>

          <div className="flex items-center justify-between gap-1 overflow-x-auto no-scrollbar py-2">
            
            {/* Day 01 */}
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <div className="w-10 h-10 rounded-full border-2 border-acid text-acid bg-transparent flex items-center justify-center font-bold text-xs">
                ✓
              </div>
              <span className="font-mono text-[11px] font-bold acid-green">Day 01</span>
            </div>

            <div className="h-[2px] w-6 sm:w-12 bg-acid flex-shrink-0" />

            {/* Day 12 */}
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-acid text-black flex items-center justify-center font-black text-xs ring-4 ring-acid/30 glow-acid animate-pulse">
                12
              </div>
              <span className="font-mono text-[11px] acid-green font-black">Day 12 TODAY</span>
            </div>

            <div className="h-[2px] w-6 sm:w-12 bg-zinc-800 flex-shrink-0" />

            {/* Day 30 */}
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0 opacity-60">
              <div className="w-10 h-10 rounded-full border-2 border-zinc-800 text-zinc-500 bg-[#0A0A0A] flex items-center justify-center font-bold text-xs">
                30
              </div>
              <span className="font-mono text-[11px] text-zinc-500 font-bold">Day 30</span>
            </div>

            <div className="h-[2px] w-6 sm:w-12 bg-zinc-800 flex-shrink-0" />

            {/* Day 60 */}
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0 opacity-40">
              <div className="w-10 h-10 rounded-full border-2 border-zinc-800 text-zinc-500 bg-[#0A0A0A] flex items-center justify-center font-bold text-xs">
                60
              </div>
              <span className="font-mono text-[11px] text-zinc-500 font-bold">Day 60</span>
            </div>

          </div>

          <div className="mt-4 bg-[#0A0A0A] rounded-2xl p-3.5 border border-zinc-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-zinc-400 uppercase tracking-wider text-[10px]">Proof Links:</span>
              <span className="flex items-center gap-1 bg-zinc-900 px-2.5 py-1 rounded-lg text-[11px] acid-green font-bold">
                <Github className="w-3 h-3" /> Commit #f8a21
              </span>
              <span className="flex items-center gap-1 bg-zinc-900 px-2.5 py-1 rounded-lg text-[11px] acid-green font-bold">
                <Linkedin className="w-3 h-3" /> Post Linked
              </span>
            </div>
            <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider hidden sm:inline">Automatic Streak Sync</span>
          </div>
        </div>

      </section>

      {/* Trust Statistics Section */}
      <section className="px-4 py-8 max-w-4xl mx-auto border-y border-zinc-800 bg-[#0A0A0A]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          
          <div className="p-3">
            <div className="font-black italic text-3xl sm:text-4xl text-white">12,400+</div>
            <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1">Students Joined</div>
          </div>

          <div className="p-3">
            <div className="font-black italic text-3xl sm:text-4xl acid-green">60 DAYS</div>
            <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1">Unbroken Sprint</div>
          </div>

          <div className="p-3">
            <div className="font-black italic text-3xl sm:text-4xl text-white">2 PROOFS</div>
            <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1">GitHub + LinkedIn/Day</div>
          </div>

          <div className="p-3">
            <div className="font-black italic text-3xl sm:text-4xl acid-green">1 PUBLIC</div>
            <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1">Recruiter Learning Trail</div>
          </div>

        </div>
      </section>

      {/* Built for students who want to... Section */}
      <section className="px-4 py-12 max-w-4xl mx-auto">
        <div className="text-left sm:text-center mb-8">
          <span className="text-xs font-mono acid-green uppercase font-black tracking-widest">WHY ABTALKS</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-1 uppercase tracking-tight">
            Built for students who want to...
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Benefit 1 */}
          <div className="stat-card rounded-3xl p-6 hover:border-acid transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-acid text-black flex items-center justify-center font-black text-lg mb-4">
              ⚡
            </div>
            <h3 className="font-black text-lg text-white mb-1 uppercase tracking-tight">BUILD</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-medium">
              Turn passive YouTube tutorials into real, functional code projects every single night.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="stat-card rounded-3xl p-6 hover:border-acid transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-acid text-black flex items-center justify-center font-black text-lg mb-4">
              🚀
            </div>
            <h3 className="font-black text-lg text-white mb-1 uppercase tracking-tight">SHIP</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-medium">
              Build the essential habit of finishing what you start and pushing public deployments.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="stat-card rounded-3xl p-6 hover:border-acid transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-acid text-black flex items-center justify-center font-black text-lg mb-4">
              🔗
            </div>
            <h3 className="font-black text-lg text-white mb-1 uppercase tracking-tight">PROVE</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-medium">
              Show actual GitHub commit history paired with LinkedIn proof posts for tamper-proof accountability.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="stat-card rounded-3xl p-6 hover:border-acid transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-acid text-black flex items-center justify-center font-black text-lg mb-4">
              🏆
            </div>
            <h3 className="font-black text-lg text-white mb-1 uppercase tracking-tight">STAND OUT</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-medium">
              Create a public record of your consistency that speaks louder than a standard 1-page resume.
            </p>
          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-4 py-12 max-w-4xl mx-auto border-t border-zinc-800">
        <div className="text-left sm:text-center mb-8">
          <span className="text-xs font-mono acid-green uppercase font-black tracking-widest">THE BLUEPRINT</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-1 uppercase tracking-tight">
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          
          <div className="stat-card p-5 rounded-3xl relative">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-black text-white mb-3">01</div>
            <h4 className="font-bold text-sm text-white mb-1 uppercase tracking-wider">Choose Track</h4>
            <p className="text-xs text-zinc-400 font-medium">Full Stack, AI Systems, Frontend, or Backend.</p>
          </div>

          <div className="stat-card p-5 rounded-3xl relative">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-black text-white mb-3">02</div>
            <h4 className="font-bold text-sm text-white mb-1 uppercase tracking-wider">Build Every Day</h4>
            <p className="text-xs text-zinc-400 font-medium">2–3 hours late night coding challenge.</p>
          </div>

          <div className="stat-card p-5 rounded-3xl relative">
            <div className="w-8 h-8 rounded-full bg-acid text-black flex items-center justify-center text-xs font-black mb-3">03</div>
            <h4 className="font-bold text-sm text-white mb-1 uppercase tracking-wider">Submit Proof</h4>
            <p className="text-xs text-zinc-400 font-medium">GitHub commit URL + LinkedIn post link.</p>
          </div>

          <div className="stat-card p-5 rounded-3xl relative">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-black text-white mb-3">04</div>
            <h4 className="font-bold text-sm text-white mb-1 uppercase tracking-wider">Complete 60 Days</h4>
            <p className="text-xs text-zinc-400 font-medium">Lock in your streak and share with recruiters.</p>
          </div>

        </div>
      </section>

      {/* Dashboard Interactive Preview Card */}
      <section className="px-4 py-10 max-w-4xl mx-auto">
        <div className="stat-card rounded-[32px] p-6 sm:p-8 relative overflow-hidden shadow-2xl border-acid">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="bg-zinc-800 text-zinc-400 text-[10px] font-mono px-2.5 py-1 rounded font-black uppercase tracking-widest">
                STUDENT DASHBOARD PREVIEW
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-2 uppercase tracking-tight">
                Inside Arjun Sharma’s Sprint
              </h3>
            </div>

            <button
              onClick={() => navigate('/dashboard')}
              className="bg-acid hover:bg-[#b8e600] text-black font-extrabold text-xs px-5 py-3 rounded-2xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Explore Live Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Snippet Card */}
          <div className="bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-black text-white flex items-center gap-1">
                <Flame className="w-4 h-4 fill-[#D1FF00] acid-green" />
                11 DAY STREAK
              </span>
              <span className="font-bold acid-green">Day 12 of 60 (20% Complete)</span>
            </div>

            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-acid w-[20%]" />
            </div>

            <div className="flex items-center justify-between pt-2 text-xs">
              <span className="text-white font-bold">Today’s Challenge: Build a responsive developer portfolio</span>
              <span className="acid-green font-bold">Open →</span>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="px-4 py-12 max-w-4xl mx-auto text-center">
        <div className="stat-card border-acid rounded-[32px] p-8 sm:p-12 relative overflow-hidden">
          
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-3 uppercase tracking-tighter">
            DON'T JUST LEARN.<br /><span className="acid-green">BUILD PROOF.</span>
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mb-8 font-medium">
            Join 12,400+ Indian engineering students building real proof of work every night.
          </p>

          <button
            onClick={() => navigate('/dashboard')}
            className="bg-acid hover:bg-[#b8e600] text-black font-black text-base px-10 py-4 rounded-2xl shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Start Day 1</span>
            <ArrowRight className="w-5 h-5" />
          </button>

        </div>
      </section>

    </div>
  );
};
