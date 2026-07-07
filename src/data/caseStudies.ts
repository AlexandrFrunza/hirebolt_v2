import type { CaseStudy } from "@/components/CaseStudyCard";

export const caseStudies: CaseStudy[] = [
  {
    title: "Technical AI Evaluation Program",
    industry: "Frontier AI Lab | UK",
    teamSize: "7 technical contributors",
    duration: "6-month engagement",
    focus: "Model evaluation and reasoning quality",
    delivered:
      "Supported an evaluation workflow for an AI system requiring contributors with strong engineering ability. Tasks included assessing outputs involving Python, Docker, Linux, debugging, and infrastructure reasoning. The focus was on technical accuracy and depth of understanding, not annotation volume. The lab ran continuous evaluation cycles without quality degradation across the full engagement.",
    outcomes: [
      "92% first-match success rate for technical evaluations",
      "Reduced evaluation cycle time by 35%",
      "Contributors shipped 1,000+ validated engineering reasoning tasks",
    ],
  },
  {
    title: "Multilingual Expert Review",
    industry: "Enterprise AI Team | Multilingual systems | EU",
    teamSize: "15 multilingual reviewers (5 languages)",
    duration: "Ongoing",
    focus: "Quality control across languages & domains",
    delivered:
      "A European AI team needed fluent, domain-literate reviewers across multiple languages — not translators, but specialists who understood the subject matter well enough to judge output quality. We built a distributed team across 5 languages with consistent application of review guidelines throughout.",
    outcomes: [
      "96% guideline adherence rate across all languages",
      "Covered 5 languages with <3% error rate",
      "Delivered 2,400+ multilingual Review tasks with consistent quality",
    ],
  },
  {
    title: "Scalable Contributor Operations",
    industry: "AI Infrastructure Company | US",
    teamSize: "30+ vetted contributors (flexible pool)",
    duration: "8-months engagement",
    focus: "RLHF and human feedback workflows",
    delivered:
      "A fast-growing AI infrastructure company needed to expand contributor capacity quickly while keeping QA controls intact. We built and managed a flexible pool of vetted contributors for asynchronous training and evaluation work, scaling up during high-demand periods and maintaining signal quality and reliability throughout.",
    outcomes: [
      "Scaled from 5 to 30+ contributors in 3 months",
      "Maintained 94% QA pass rate across workflows",
      "98% contributor reliability (on-time delivery, no dropouts)",
    ],
  },
];
