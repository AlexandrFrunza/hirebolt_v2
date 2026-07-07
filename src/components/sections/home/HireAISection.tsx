import Image from "next/image";
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
        src="/home/vetted-ai-specialist.png"
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
        src="/home/multilingual-coverage.png"
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
        src="/home/ai-delivery-capacity.png"
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
    icon: <Image src="/home/plan.png" alt="" width={48} height={48} />,
    title: "Expert evaluation",
    description:
      "Access deep technical reviewers and AI-specific evaluators for projects where quality matters.",
  },
];

export default function HireAISection() {
  return (
    <section className="pt-28 pb-24">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <SectionLabel>Hire AI</SectionLabel>
            <div className="flex flex-col gap-4">
              <h2 className="max-w-[845px] text-3xl font-medium text-white">
                Find the engineers, AI specialists, and domain experts you
                need to build, launch, and scale AI products.
              </h2>
              <p className="max-w-[845px] text-base font-medium leading-6 text-zinc-400">
                Access a global network of engineers and AI professionals
                across software, machine learning, data, and AI
                implementation. Review pre-vetted profiles, shortlist
                candidates immediately, and add capacity to your team without
                lengthy hiring cycles.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {hireSkills.map((skill) => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
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
        <Button href="/hire-ai-talent" className="self-start">
          Search AI Talent Instantly
        </Button>
      </Container>
    </section>
  );
}
