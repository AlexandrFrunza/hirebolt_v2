export type DemoProfile = {
  title: string;
  years: string;
  overlap: string;
  skills: string[];
  availability: string;
};

export type DemoScene = {
  activeFilters: string[];
  profiles: [DemoProfile, DemoProfile];
};

export const filterLabels = [
  "Role",
  "Stack",
  "Timezone",
  "Availability",
  "AI Capability",
];

export const demoScenes: DemoScene[] = [
  {
    activeFilters: ["Role", "Timezone", "AI Capability"],
    profiles: [
      {
        title: "Senior Backend Engineer",
        years: "9 years of",
        overlap: "6 hrs",
        skills: ["Python", "LLM", "RAG"],
        availability: "Available this week",
      },
      {
        title: "AI Full-Stack Engineer",
        years: "7 years of",
        overlap: "8 hrs",
        skills: ["Next.js", "Python", "AI agents"],
        availability: "Available this week",
      },
    ],
  },
  {
    activeFilters: ["Stack", "Availability", "AI Capability"],
    profiles: [
      {
        title: "ML Platform Engineer",
        years: "8 years of",
        overlap: "5 hrs",
        skills: ["Python", "MLOps", "AWS"],
        availability: "Starts in 3 days",
      },
      {
        title: "Applied AI Engineer",
        years: "6 years of",
        overlap: "7 hrs",
        skills: ["LangChain", "RAG", "TypeScript"],
        availability: "Available this week",
      },
    ],
  },
  {
    activeFilters: ["Role", "Stack", "Timezone"],
    profiles: [
      {
        title: "LLM Product Engineer",
        years: "5 years of",
        overlap: "4 hrs",
        skills: ["Node.js", "OpenAI", "Agents"],
        availability: "Available next week",
      },
      {
        title: "Data + AI Engineer",
        years: "10 years of",
        overlap: "6 hrs",
        skills: ["dbt", "Python", "Vector DBs"],
        availability: "Available this week",
      },
    ],
  },
];
