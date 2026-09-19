export interface PersonalDetails {
  name: string;
  role: string;
  subtitles: string[];
  tagline: string;
  bioIntro: string;
  fullBio: string;
  email: string;
  phone: string;
  location: string;
  address: string;
  dob: string;
  status: string;
  languages: { name: string; level: string; flag: string }[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
  };
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
  category: 'ai' | 'data' | 'web' | 'systems';
  description: string;
  tags: string[];
  iconName: string;
}

export interface SkillCategory {
  id: 'all' | 'ai' | 'data' | 'web' | 'systems';
  label: string;
  iconName: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'ai' | 'data' | 'web' | 'systems';
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  image: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
  interactiveType?: 'credit-card-fraud' | 'art-gallery' | 'prompt-matrix' | 'packet-tracer';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  location: string;
  highlights: string[];
  courses: string[];
  current?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'Certification' | 'Award' | 'Academic' | 'Project';
  description: string;
  credentialId?: string;
  skills: string[];
  iconName: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
