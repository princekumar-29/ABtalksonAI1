export interface Student {
  name: string;
  college: string;
  track: string;
  dayCurrent: number;
  totalDays: number;
  streakDays: number;
  standingPercentage: number;
  aheadPercentage: number;
  avatarUrl: string;
  githubUsername: string;
  linkedinUsername: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface DayChallenge {
  dayNumber: number;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  mission: string;
  whatToBuild: string[];
  techStack: string[];
  checklist: ChecklistItem[];
  status: 'completed' | 'in_progress' | 'upcoming' | 'missed';
  githubProof?: string;
  linkedinProof?: string;
  completedAt?: string;
}

export interface Achievement {
  id: string;
  title: string;
  icon: string;
  description: string;
  unlocked: boolean;
  unlockRequirement?: string;
}

export type DemoState = 'normal' | 'first_day' | 'missed_day' | 'empty_profile';
