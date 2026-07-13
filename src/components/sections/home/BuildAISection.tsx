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
    icon: <Image src="/home/plan.svg" alt="" width={48} height={48} />,
    title: "Plan",
    description:
      "Identify the right use cases, models, and workflows for your business. We help define where AI creates value and what it takes to ship it properly.",
  },
  {
    icon: <Image src="/home/build.svg" alt="" width={48} height={48} />,
    title: "Build",
    description:
      "Develop production-ready AI applications powered by frontier models. From RAG pipelines to autonomous agents, we move from concept to working product fast.",
  },
  {
    icon: <Image src="/home/improve.svg" alt="" width={48} height={48} />,
    title: "Improve",
    description:
      "Refine prompts, model behavior, and system performance over time. We help improve accuracy, reduce costs, and adapt AI systems to changing requirements.",
  },
];

const buildTagsRow1 = buildTags.slice(0, 6);
const buildTagsRow2 = buildTags.slice(6);

function MarqueeRow({
  tags,
  direction,
}: {
  tags: string[];
  direction: "left" | "right";
}) {
  return (
    <div className="flex w-full gap-4 overflow-hidden">
      <div
        className={`flex shrink-0 gap-4 [--gap:1rem] ${
          direction === "left" ? "marquee-left-animate" : "marquee-right-animate"
        }`}
      >
        {tags.map((tag) => (
          <Pill key={tag}>{tag}</Pill>
        ))}
      </div>
      <div
        className={`flex shrink-0 gap-4 [--gap:1rem] ${
          direction === "left" ? "marquee-left-animate" : "marquee-right-animate"
        }`}
        aria-hidden
      >
        {tags.map((tag) => (
          <Pill key={tag}>{tag}</Pill>
        ))}
      </div>
    </div>
  );
}

export default function BuildAISection() {
  return (
    <section className="pt-12 pb-16 sm:pt-28 sm:pb-24">
      <Container className="flex flex-col gap-12 sm:gap-16">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <SectionLabel>Build AI</SectionLabel>
            <div className="flex flex-col gap-4">
              <h2 className="w-[845px] max-w-full text-2xl leading-8 font-medium text-white sm:text-[32px] sm:leading-9">
                Turn raw models into secure enterprise software, automated
                workflows, and reliable user experiences.
              </h2>
              <p className="w-[845px] max-w-full text-base leading-6 font-medium text-[#B9B9B9]">
                Whether you are deploying custom agents, secure retrieval
                systems, or smart automation, Hirebolt handles the
                engineering required to transition your AI experiments into
                resilient, everyday business tools.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:hidden">
            <MarqueeRow tags={buildTagsRow1} direction="left" />
            <MarqueeRow tags={buildTagsRow2} direction="right" />
          </div>
          <div className="hidden flex-wrap gap-2 sm:flex">
            {buildTags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
          <div className="-mr-6 flex snap-x snap-mandatory gap-4 overflow-x-auto sm:hidden [&::-webkit-scrollbar]:hidden">
            {buildFeatures.map((feature) => (
              <IconFeatureCard
                key={feature.title}
                layout="col"
                className="!w-[85vw] !shrink-0 !grow-0 !basis-auto snap-start"
                {...feature}
              />
            ))}
          </div>
          <div className="hidden sm:flex sm:flex-wrap sm:gap-6">
            {buildFeatures.map((feature) => (
              <IconFeatureCard
                key={feature.title}
                layout="col"
                className="sm:basis-72"
                {...feature}
              />
            ))}
          </div>
        </div>
        <Button
          href="/build-ai"
          className="mt-[168px] w-full sm:mt-0 sm:w-auto sm:self-start"
        >
          Build an AI Solution
        </Button>
      </Container>
    </section>
  );
}
