import Image from "next/image";
import { Search } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Pill from "@/components/Pill";
import SectionLabel from "@/components/SectionLabel";
import IconFeatureCard from "@/components/IconFeatureCard";

const hireSkills = [
  "AI Engineers",
  "ML Engineers",
  "LLM Developers",
  "AI Full-Stack Engineers",
  "Data Engineers",
  "MLOps Engineers",
  "AI Product Teams",
  "Specialized Data Teams",
  "Technical Evaluators",
  "AI Delivery Teams",
];

const hireFeatures = [
  {
    icon: (
      <Image
        src="/home/vetted-ai-specialist.svg"
        alt=""
        width={48}
        height={48}
      />
    ),
    title: "Vetted AI specialists",
    description:
      "Pre-screened engineers and AI specialists across multiple regions and time zones.",
  },
  {
    icon: (
      <Image
        src="/home/multilingual-coverage.svg"
        alt=""
        width={48}
        height={48}
      />
    ),
    title: "Multilingual coverage",
    description:
      "Work with specialists across 40+ languages to support global products and localized AI systems.",
  },
  {
    icon: (
      <Image
        src="/home/ai-delivery-capacity.svg"
        alt=""
        width={48}
        height={48}
      />
    ),
    title: "AI delivery capacity",
    description:
      "Add flexible engineering teams that integrate directly into your standups, tools, and workflows.",
  },
  {
    icon: (
      <Image
        src="/home/expert-evaluation.svg"
        alt=""
        width={48}
        height={48}
      />
    ),
    title: "Expert evaluation",
    description:
      "Access deep technical reviewers and AI-specific evaluators for projects where quality matters.",
  },
];

const hireFeaturesMobile = [
  {
    icon: (
      <Image
        src="/home/vetted-ai-specialist.svg"
        alt=""
        width={48}
        height={48}
      />
    ),
    title: "Vetted global network",
    description:
      "Pre-screened engineers and AI specialists across multiple regions and time zones.",
  },
  {
    icon: <Search className="h-12 w-12" strokeWidth={1.75} />,
    title: "Search in seconds",
    description:
      "Find relevant talent by skills, AI expertise, availability, and location.",
  },
  {
    icon: (
      <Image
        src="/home/ai-delivery-capacity.svg"
        alt=""
        width={48}
        height={48}
      />
    ),
    title: "AI delivery capacity",
    description:
      "Add flexible engineering teams that integrate directly into your standups, tools, and workflows.",
  },
  {
    icon: (
      <Image
        src="/home/expert-evaluation.svg"
        alt=""
        width={48}
        height={48}
      />
    ),
    title: "Expert evaluation",
    description:
      "Access deep technical reviewers and AI-specific evaluators for projects where quality matters.",
  },
];

export default function HireAISection() {
  return (
    <section className="pt-12 pb-16 sm:pt-28 sm:pb-24">
      <Container className="flex flex-col gap-12 sm:gap-16">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-12 sm:gap-16">
            <div className="flex flex-col gap-8">
              <SectionLabel>Hire AI</SectionLabel>
              <div className="flex flex-col gap-4">
                <h2 className="w-[845px] max-w-full text-2xl leading-8 font-medium text-white sm:hidden">
                  Find the engineers, AI specialists, and delivery teams you
                  need to build, launch, and scale AI products.
                </h2>
                <h2 className="hidden w-[845px] max-w-full text-[32px] leading-9 font-medium text-white sm:block">
                  Find the engineers, AI specialists, and domain experts you
                  need to build, launch, and scale AI products.
                </h2>
                <p className="w-[845px] max-w-full text-base leading-6 font-medium text-[#B9B9B9]">
                  Access a global network of engineers and AI professionals
                  across software, machine learning, data, and AI
                  implementation. Review pre-vetted profiles, shortlist
                  candidates immediately, and add capacity to your team
                  without lengthy hiring cycles.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {hireSkills.map((skill) => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </div>
          </div>
          <div className="-mr-6 flex snap-x snap-mandatory gap-4 overflow-x-auto sm:hidden [&::-webkit-scrollbar]:hidden">
            {hireFeaturesMobile.map((feature) => (
              <IconFeatureCard
                key={feature.title}
                layout="row"
                className="!w-[85vw] !shrink-0 !grow-0 !basis-auto snap-start"
                {...feature}
              />
            ))}
          </div>
          <div className="hidden flex-wrap gap-6 sm:flex">
            {hireFeatures.map((feature) => (
              <IconFeatureCard
                key={feature.title}
                layout="row"
                className="basis-[45%]"
                {...feature}
              />
            ))}
          </div>
        </div>
        <Button href="/hire-ai-talent" className="w-full sm:w-auto sm:self-start">
          Search AI Talent Instantly
        </Button>
      </Container>
    </section>
  );
}
