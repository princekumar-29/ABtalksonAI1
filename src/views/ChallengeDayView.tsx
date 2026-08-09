import React, { useState } from 'react';
import { DayChallenge } from '../types';
import {
  ArrowLeft,
  CheckCircle2,
  Github,
  Linkedin,
  Sparkles,
  Clock,
  Gauge,
  CheckSquare,
  Square,
  Share2,
  ExternalLink,
  Lock,
  Loader2,
  PartyPopper,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ChallengeDayViewProps {
  challenge: DayChallenge;
  navigate: (path: string) => void;
  onCompleteDay12: () => void;
}

export const ChallengeDayView: React.FC<ChallengeDayViewProps> = ({
  challenge,
  navigate,
  onCompleteDay12,
}) => {
  // Checklist state
  const [checklist, setChecklist] = useState(challenge.checklist);

  // Proof submission states
  const [githubUrl, setGithubUrl] = useState<string>(
    'https://github.com/arjunsharma-dev/responsive-portfolio'
  );
  const [githubVerifying, setGithubVerifying] = useState<boolean>(false);
  const [githubVerified, setGithubVerified] = useState<boolean>(false);

  const [linkedinUrl, setLinkedinUrl] = useState<string>(
    'https://linkedin.com/posts/arjunsharma-day12-portfolio-build'
  );
  const [linkedinVerifying, setLinkedinVerifying] = useState<boolean>(false);
  const [linkedinVerified, setLinkedinVerified] = useState<boolean>(false);

  // Completion state
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [shareCopied, setShareCopied] = useState<boolean>(false);

  const toggleChecklistItem = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleVerifyGithub = () => {
    if (!githubUrl.trim()) return;
    setGithubVerifying(true);
    setTimeout(() => {
      setGithubVerifying(false);
      setGithubVerified(true);
    }, 900);
  };

  const handleVerifyLinkedin = () => {
    if (!linkedinUrl.trim()) return;
    setLinkedinVerifying(true);
    setTimeout(() => {
      setLinkedinVerifying(false);
      setLinkedinVerified(true);
    }, 900);
  };

  const proofCount = (githubVerified ? 1 : 0) + (linkedinVerified ? 1 : 0);
  const isBothVerified = githubVerified && linkedinVerified;

  const handleCompleteDay = () => {
    if (!isBothVerified) return;
    setIsCompleted(true);
    onCompleteDay12();

    // Trigger celebratory confetti burst!
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D1FF00', '#FAFAFA', '#A1A1AA'],
    });
  };

  const handleShareProgress = () => {
    const shareText = `🚀 Day 12/60 Completed on ABTalks!\n\nBuilt: Responsive Developer Portfolio\nGitHub: ${githubUrl}\nLinkedIn: ${linkedinUrl}\n\n#60DaysCodingChallenge #ABTalks #BuildInPublic`;
    navigator.clipboard.writeText(shareText);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAFAFA] pb-24 md:pb-12 px-4 sm:px-6 pt-6 max-w-3xl mx-auto space-y-6">
      
      {/* Top Header & Back Button */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-[#0A0A0A] hover:bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs font-bold px-3.5 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Dashboard</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="bg-acid text-black font-mono font-black text-xs px-3 py-1 rounded-lg uppercase tracking-wider">
            DAY 12 / 60
          </span>
          <span className="bg-zinc-900 border border-zinc-800 acid-green text-[11px] font-mono px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
            {isCompleted ? '✓ Completed' : 'In Progress'}
          </span>
        </div>
      </div>

      {/* Main Title & Tags */}
      <div>
        <span className="text-xs font-mono acid-green uppercase font-black tracking-widest">
          DAILY SPRINT CHALLENGE
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-white mt-1 leading-tight uppercase tracking-tight">
          {challenge.title}
        </h1>

        {/* Tech Stack & Difficulty Bar */}
        <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-zinc-800/80 text-xs font-mono font-bold">
          <div className="flex items-center gap-1.5 acid-green">
            <Gauge className="w-3.5 h-3.5" />
            <span>DIFFICULTY: {challenge.difficulty.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-400">
            <Clock className="w-3.5 h-3.5 acid-green" />
            <span>EST. TIME: {challenge.estimatedTime.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-zinc-500">STACK:</span>
            {challenge.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-zinc-900 border border-zinc-800 text-white px-2.5 py-0.5 rounded uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* TODAY'S MISSION Card */}
      <div className="stat-card border-acid rounded-3xl p-5 sm:p-6 relative overflow-hidden">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1 rounded-md bg-acid/20 text-acid">
            <Sparkles className="w-4 h-4 acid-green" />
          </div>
          <h2 className="font-extrabold text-white text-sm sm:text-base uppercase tracking-wider">
            TODAY’S MISSION
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
          {challenge.mission}
        </p>

        {/* What to build bullets */}
        <div className="mt-5 pt-4 border-t border-zinc-800">
          <h3 className="text-xs font-mono font-bold acid-green uppercase tracking-wider mb-2.5">
            WHAT TO BUILD
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300">
            {challenge.whatToBuild.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 font-medium">
                <span className="acid-green font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Definition of Done Checklist */}
      <div className="stat-card rounded-3xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-extrabold text-white text-sm sm:text-base flex items-center gap-2 uppercase tracking-wider">
            <CheckSquare className="w-4 h-4 acid-green" />
            <span>Definition of Done Checklist</span>
          </h3>
          <span className="font-mono text-xs font-bold text-zinc-400">
            {checklist.filter((c) => c.completed).length} / {checklist.length} COMPLETED
          </span>
        </div>

        <div className="space-y-2.5">
          {checklist.map((item) => (
            <button
              key={item.id}
              onClick={() => toggleChecklistItem(item.id)}
              className={`w-full text-left p-3.5 rounded-2xl border flex items-center gap-3 transition-all cursor-pointer ${
                item.completed
                  ? 'bg-zinc-900 border-zinc-700 text-white'
                  : 'bg-[#0A0A0A] border-zinc-800 text-zinc-400 hover:border-zinc-700'
              }`}
            >
              {item.completed ? (
                <CheckSquare className="w-4 h-4 acid-green flex-shrink-0" />
              ) : (
                <Square className="w-4 h-4 text-zinc-600 flex-shrink-0" />
              )}
              <span
                className={`text-xs sm:text-sm font-bold ${
                  item.completed ? 'line-through text-zinc-500' : 'text-white'
                }`}
              >
                {item.text}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* PROOF OF WORK SECTION */}
      <div className="stat-card rounded-3xl p-5 space-y-4">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 acid-green" />
            <h2 className="font-black text-white text-base sm:text-lg uppercase tracking-tight">Show your proof</h2>
          </div>
          <p className="text-xs text-zinc-400 mt-0.5 font-medium">
            Submit both proof points to complete Day 12 and keep your streak alive.
          </p>
        </div>

        {/* PROOF 1 - GITHUB */}
        <div className="bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 text-white" />
              <span className="font-extrabold text-xs text-white uppercase tracking-wider font-mono">
                PROOF 1 — GITHUB REPOSITORY / COMMIT
              </span>
            </div>
            {githubVerified && (
              <span className="text-[10px] font-mono acid-green bg-acid/15 border border-acid/30 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                ✓ Connected
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={githubUrl}
              onChange={(e) => {
                setGithubUrl(e.target.value);
                setGithubVerified(false);
              }}
              placeholder="https://github.com/username/portfolio"
              className="flex-1 bg-[#050505] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-acid transition-colors placeholder:text-zinc-600"
            />
            <button
              onClick={handleVerifyGithub}
              disabled={githubVerifying || githubVerified || !githubUrl.trim()}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-black flex items-center gap-1.5 transition-all cursor-pointer uppercase ${
                githubVerified
                  ? 'bg-acid/20 acid-green border border-acid/40'
                  : 'bg-acid hover:bg-[#b8e600] text-black'
              }`}
            >
              {githubVerifying ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : githubVerified ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </>
              ) : (
                <span>Verify GitHub</span>
              )}
            </button>
          </div>
        </div>

        {/* PROOF 2 - LINKEDIN */}
        <div className="bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 acid-green" />
              <span className="font-extrabold text-xs text-white uppercase tracking-wider font-mono">
                PROOF 2 — LINKEDIN POST
              </span>
            </div>
            {linkedinVerified && (
              <span className="text-[10px] font-mono acid-green bg-acid/15 border border-acid/30 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                ✓ Connected
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={linkedinUrl}
              onChange={(e) => {
                setLinkedinUrl(e.target.value);
                setLinkedinVerified(false);
              }}
              placeholder="https://linkedin.com/posts/username..."
              className="flex-1 bg-[#050505] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-acid transition-colors placeholder:text-zinc-600"
            />
            <button
              onClick={handleVerifyLinkedin}
              disabled={linkedinVerifying || linkedinVerified || !linkedinUrl.trim()}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-black flex items-center gap-1.5 transition-all cursor-pointer uppercase ${
                linkedinVerified
                  ? 'bg-acid/20 acid-green border border-acid/40'
                  : 'bg-acid hover:bg-[#b8e600] text-black'
              }`}
            >
              {linkedinVerifying ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : linkedinVerified ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </>
              ) : (
                <span>Verify LinkedIn</span>
              )}
            </button>
          </div>
        </div>

        {/* DAY COMPLETION BAR & BUTTON */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2 font-bold uppercase tracking-wider">
            <span>DAY COMPLETION</span>
            <span className={proofCount === 2 ? 'acid-green font-black' : 'text-zinc-400'}>
              {proofCount} of 2 proofs submitted
            </span>
          </div>

          <div className="w-full h-2.5 bg-[#050505] rounded-full overflow-hidden border border-zinc-800 mb-5">
            <div
              className="h-full bg-acid rounded-full transition-all duration-500"
              style={{ width: `${(proofCount / 2) * 100}%` }}
            />
          </div>

          {!isCompleted ? (
            <button
              onClick={handleCompleteDay}
              disabled={!isBothVerified}
              className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                isBothVerified
                  ? 'bg-acid hover:bg-[#b8e600] text-black shadow-xl'
                  : 'bg-zinc-900 text-zinc-600 border border-zinc-800 cursor-not-allowed opacity-75'
              }`}
            >
              {isBothVerified ? (
                <>
                  <Sparkles className="w-4 h-4 fill-black text-black" />
                  <span>Complete Day 12</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-zinc-600" />
                  <span>Verify both proofs to enable</span>
                </>
              )}
            </button>
          ) : (
            /* SUCCESS STATE AFTER COMPLETION */
            <div className="stat-card border-acid rounded-3xl p-6 text-center space-y-4 animate-fade-in">
              <div className="inline-flex p-3 bg-acid text-black rounded-2xl">
                <PartyPopper className="w-7 h-7" />
              </div>

              <h3 className="font-black text-2xl text-white uppercase tracking-tight">✓ DAY 12 COMPLETE</h3>

              <p className="text-xs text-zinc-300 font-medium">
                Your proof chain just got stronger. <br />
                <span className="acid-green font-mono font-bold uppercase">Day 13 unlocks tomorrow.</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="w-full sm:w-auto bg-acid hover:bg-[#b8e600] text-black font-black text-xs px-6 py-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer uppercase tracking-wider"
                >
                  <span>View Dashboard</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleShareProgress}
                  className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-bold text-xs px-6 py-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer uppercase tracking-wider"
                >
                  <Share2 className="w-3.5 h-3.5 acid-green" />
                  <span>{shareCopied ? 'Copied to Clipboard!' : 'Share Your Progress'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
