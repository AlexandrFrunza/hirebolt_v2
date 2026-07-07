export type SolutionItem = {
  label: string;
  text: string;
};

export type EverydayWorkTab = {
  label: string;
  description: string;
  tags: string[];
  challenges: string[];
  solutions: SolutionItem[];
};

export const everydayWorkTabs: EverydayWorkTab[] = [
  {
    label: "Plan AI Initiatives",
    description:
      "Identify where AI creates real value, align your team around the right priorities, and build a practical roadmap before investing heavily in development.",
    tags: [
      "Use case discovery",
      "AI readiness assessment",
      "Roadmap definition",
      "Success metrics",
    ],
    challenges: [
      "AI pilots succeed in isolation but never scale because the broader organization isn't aligned or ready.",
      "Teams jump into building before validating whether the use case is technically feasible or commercially worthwhile.",
      "Lack of internal alignment regarding data posture, system maturity, and technical constraints.",
    ],
    solutions: [
      {
        label: "Assess readiness:",
        text: "Evaluate where your organization stands on data quality, infrastructure, and team alignment before committing to a direction.",
      },
      {
        label: "Identify the right use cases:",
        text: "Prioritize opportunities based on feasibility, business impact, and what your team can realistically deliver.",
      },
      {
        label: "Build a shared roadmap:",
        text: "Align business and technical stakeholders on what gets built, in what order, and what success looks like.",
      },
      {
        label: "Define outcomes upfront:",
        text: "Set clear metrics tied to business value, not just model performance, before a single line of code is written.",
      },
    ],
  },
  {
    label: "Embed AI engineering talent",
    description:
      "Embed vetted AI engineers, ML specialists, and product teams directly into your workflows, tools, and standups to help you ship faster.",
    tags: [
      "AI & ML engineers",
      "LLM & RAG developers",
      "AI product teams",
      "Data & MLOps engineers",
      "Technical evaluators",
    ],
    challenges: [
      "The roadmap is clear but the internal team doesn't have the bandwidth or specialist depth to execute it.",
      "Internal teams are capable but stretched too thin to handle specialized machine learning infrastructure.",
      "Hiring senior AI engineers through normal channels takes months and often misses the mark.",
    ],
    solutions: [
      {
        label: "Vetted for AI depth:",
        text: "Every engineer is assessed for hands-on experience with LLMs, RAG, fine-tuning, agents, and production AI systems — not just general software skills.",
      },
      {
        label: "Integrated from day one:",
        text: "Engineers work inside your tools and workflows immediately. No long onboarding cycles, no external handoffs.",
      },
      {
        label: "Flexible team structure:",
        text: "Seamlessly expand from a single engineer to a full development team without losing project context or trust.",
      },
      {
        label: "Proven at production scale:",
        text: "Access engineers who have shipped complex model deployments and cloud infrastructure at scale.",
      },
    ],
  },
  {
    label: "Build AI products",
    description:
      "Design and build production-ready AI applications that fit naturally into existing workflows and deliver measurable results.",
    tags: [
      "AI copilots & assistants",
      "Agentic workflows",
      "RAG systems",
      "Internal AI tools",
      "Customer-facing AI products",
    ],
    challenges: [
      "Prototypes work in demos but fall apart under real usage, real data, and real scale.",
      "Internal teams have the vision but not the specialist capacity to execute end to end.",
      "Fearing dependency on rigid, expensive third-party platforms that restrict code access.",
    ],
    solutions: [
      {
        label: "Validate before you build:",
        text: "Test feasibility and early ROI with a scoped prototype before committing to a full development cycle.",
      },
      {
        label: "Build alongside your team:",
        text: "Our engineers embed in your workflows to reduce handoffs and keep delivery moving without gaps.",
      },
      {
        label: "Engineer for production:",
        text: "We build with reliability, latency, cost, and maintainability in mind from the start.",
      },
      {
        label: "You own everything:",
        text: "Your company keeps 100% control over all code repositories, intellectual property, and model data.",
      },
    ],
  },
  {
    label: "Optimize performance",
    description:
      "Keep your AI systems accurate, efficient, and aligned with how your business uses them. Shipping is the beginning, not the end.",
    tags: [
      "Prompt optimization",
      "Model behavior tuning",
      "Evaluation loops",
      "Cost and latency improvements",
      "Capability expansion",
    ],
    challenges: [
      "Model accuracy drifts over time as real-world data diverges from training conditions.",
      "Infrastructure and API token expenses grow exponentially as more users enter the system.",
      "Systems that worked well at launch start underperforming as requirements evolve.",
    ],
    solutions: [
      {
        label: "Continuous monitoring:",
        text: "Track accuracy, latency, and cost across live systems so issues are caught early and addressed before they affect users.",
      },
      {
        label: "Prompt and behavior refinement:",
        text: "Systematically improve model outputs through structured evaluation, feedback loops, and prompt optimization.",
      },
      {
        label: "Model fine-tuning:",
        text: "Update and adapt models with new data to maintain performance as your domain and use cases evolve.",
      },
      {
        label: "Cost and efficiency optimization:",
        text: "Reduce inference overhead and improve response quality without trading one for the other.",
      },
    ],
  },
];
