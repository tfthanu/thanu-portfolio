export type PersonalTrait = {
  title: string;
  description: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  industry: string;
  period: string;
  description: string;
  responsibilities: string[];
};

export type EducationItem = {
  title: string;
  institution: string;
  qualification: string;
  period: string;
  status: string;
  description: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  accent: 'purple' | 'blue';
};
