import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Pill from "@/components/Pill";
import SectionLabel from "@/components/SectionLabel";
import IconFeatureCard from "@/components/IconFeatureCard";

const buildTags = [
  "AI copilots",
  "AI agents",
  "RAG systems",
  "Knowledge assistants",
  "Workflow automation",
  "Internal tools",
  "AI Product Teams",
  "Customer support AI",
  "Predictive models",
  "Document intelligence",
  "Multimodal applications",
];

const buildFeatures = [
  {
    icon: <Image src="/home/plan.png" alt="" width={48} height={48} />,
    title: "Plan",
    description:
      "Identify the right use cases, models, and workflows for your business. We help define where AI creates value and what it takes to ship it properly.",
  },
  {
    icon: <Image src="/home/build.png" alt="" width={48} height={48} />,
    title: "Build",
    description:
      "Develop production-ready AI applications powered by frontier models. From RAG pipelines to autonomous agents, we move from concept to working product fast.",
  },
  {
    icon: <Image src="/home/improve.png" alt="" width={48} height={48} />,
    title: "Improve",
    description:
      "Refine prompts, model behavior, and system performance over time. We help improve accuracy, reduce costs, and adapt AI systems to changing requirements.",
  },
];

export default function BuildAISection() {
  return (
    <section className="pt-28 pb-24">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <SectionLabel>Build AI</SectionLabel>
            <div className="flex flex-col gap-4">
              <h2 className="max-w-3xl text-3xl font-medium text-white">
                Turn raw models into secure enterprise software, automated
                workflows, and reliable user experiences.
              </h2>
              <p className="max-w-3xl text-base font-medium text-zinc-400">
                Whether you are deploying custom agents, secure retrieval
                systems, or smart automation, Hirebolt handles the
                engineering required to transition your AI experiments into
                resilient, everyday business tools.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {buildTags.map((tag) => (
                <Pill key={tag}>{tag}</Pill>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            {buildFeatures.map((feature) => (
              <IconFeatureCard
                key={feature.title}
                layout="col"
                className="!grow-0 w-96 basis-auto"
                {...feature}
              />
            ))}
          </div>
        </div>
        <Button href="/build-ai" className="self-start">
          Build an AI Solution
        </Button>
      </Container>
    </section>
  );
}
