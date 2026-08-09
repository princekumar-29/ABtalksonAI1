import { Student, DayChallenge, Achievement } from '../types';

export const initialStudent: Student = {
  name: "Arjun Sharma",
  college: "NSUT Delhi • Computer Engineering '26",
  track: "Full Stack Development",
  dayCurrent: 12,
  totalDays: 60,
  streakDays: 11,
  standingPercentage: 18,
  aheadPercentage: 82,
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
  githubUsername: "arjunsharma-dev",
  linkedinUsername: "in/arjunsharmacode",
};

export const mockAchievements: Achievement[] = [
  {
    id: 'first-commit',
    title: 'First Commit',
    icon: '🏆',
    description: 'Submitted first proof of work',
    unlocked: true,
  },
  {
    id: '7-day-streak',
    title: '7-Day Streak',
    icon: '🔥',
    description: 'Maintained 7 consecutive build days',
    unlocked: true,
  },
  {
    id: '10-builds',
    title: '10 Builds Shipped',
    icon: '🚀',
    description: 'Shipped 10 functional coding projects',
    unlocked: true,
  },
  {
    id: '30-day-streak',
    title: '30-Day Streak',
    icon: '🔒',
    description: '30 days of unbroken proof',
    unlocked: false,
    unlockRequirement: '18 days to unlock',
  },
  {
    id: '60-day-titan',
    title: '60-Day Titan',
    icon: '🛡️',
    description: 'Completed the entire 60-day sprint',
    unlocked: false,
    unlockRequirement: '48 days to unlock',
  },
];

export const day12Challenge: DayChallenge = {
  dayNumber: 12,
  title: "Build a responsive developer portfolio",
  difficulty: "Intermediate",
  estimatedTime: "2–3 hours",
  mission: "Build a responsive personal developer portfolio that showcases your skills, projects, experience and contact information.",
  whatToBuild: [
    "Hero/introduction section with clear headline",
    "About section detailing background & stack",
    "Skills grid with technical badges",
    "Projects showcase with repo & live links",
    "Contact section with functional form/links",
    "Mobile responsive layout optimized for touch"
  ],
  techStack: ["HTML", "CSS", "JavaScript"],
  checklist: [
    { id: 'c1', text: "Portfolio is responsive across screen sizes", completed: false },
    { id: 'c2', text: "At least 3 real projects included with descriptions", completed: false },
    { id: 'c3', text: "GitHub repository and commit links work", completed: false },
    { id: 'c4', text: "Contact section or form functions properly", completed: false },
    { id: 'c5', text: "Deployed publicly on Vercel / Netlify / GitHub Pages", completed: false },
  ],
  status: 'in_progress',
  githubProof: undefined,
  linkedinProof: undefined,
};

// Generate 60 days of Proof Chain data
export const generateProofChain = (currentDay: number = 12): DayChallenge[] => {
  const chain: DayChallenge[] = [];
  
  const sampleTitles = [
    "HTML5 Semantic Structure & SEO Meta",
    "CSS Grid Layouts & Flexbox Deep Dive",
    "Interactive JS Todo App with LocalStorage",
    "Weather App using Fetch API & Async/Await",
    "Responsive Product Landing Page",
    "JavaScript Expense Tracker with Chart.js",
    "Dark Mode Theme Toggle & CSS Variables",
    "Markdown Blog Reader with Dynamic Routing",
    "REST API Integration for GitHub User Search",
    "CSS Micro-animations & Motion Design",
    "Form Validator with Custom Regex Rules",
    "Build a responsive developer portfolio", // Day 12
    "API Proxy Node.js Server & Express Route",
    "React Component Library with Tailwind CSS",
    "Interactive Kanban Drag & Drop Board",
    "JWT Authentication Flow & Cookie Storage",
  ];

  for (let d = 1; d <= 60; d++) {
    let status: 'completed' | 'in_progress' | 'upcoming' | 'missed' = 'upcoming';
    if (d < currentDay) {
      status = 'completed';
    } else if (d === currentDay) {
      status = 'in_progress';
    }

    const titleIndex = (d - 1) % sampleTitles.length;
    const title = sampleTitles[titleIndex];

    chain.push({
      dayNumber: d,
      title: d === 12 ? day12Challenge.title : `Day ${d}: ${title}`,
      difficulty: d < 10 ? 'Beginner' : d < 35 ? 'Intermediate' : 'Advanced',
      estimatedTime: d < 10 ? '1–2 hours' : '2–3 hours',
      mission: d === 12 ? day12Challenge.mission : `Build project #${d} to demonstrate mastery in ${title}.`,
      whatToBuild: d === 12 ? day12Challenge.whatToBuild : [
        "Core functional UI",
        "Clean mobile-first design",
        "Clean Git commit message",
        "Public deployment link"
      ],
      techStack: d === 12 ? day12Challenge.techStack : ["HTML", "CSS", "JavaScript"],
      checklist: d === 12 ? day12Challenge.checklist : [
        { id: `c-${d}-1`, text: "Mobile responsive layout", completed: d < currentDay },
        { id: `c-${d}-2`, text: "Code pushed to GitHub", completed: d < currentDay },
        { id: `c-${d}-3`, text: "Proof posted on LinkedIn", completed: d < currentDay },
      ],
      status: status,
      githubProof: d < currentDay ? `https://github.com/arjunsharma-dev/day-${d}-code` : undefined,
      linkedinProof: d < currentDay ? `https://linkedin.com/posts/arjunsharma-day${d}-build` : undefined,
      completedAt: d < currentDay ? `2026-08-${String(d).padStart(2, '0')}` : undefined,
    });
  }

  return chain;
};
