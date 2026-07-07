import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import HowStepCard from "@/components/HowStepCard";

const howSteps = [
  {
    icon: "/hire-ai-talent/shape-1.png",
    title: "Search the network",
    description: "Start with role, stack, AI capability, or delivery need.",
  },
  {
    icon: "/hire-ai-talent/shape-2.png",
    title: "Shortlist and interview fast",
    description:
      "Review relevant profiles and move quickly into conversations.",
  },
  {
    icon: "/hire-ai-talent/shape-3.png",
    title: "Add execution capacity",
    description:
      "Bring in individual engineers, flexible teams, or evaluation support to ship faster.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-28">
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-start">
        <div className="max-w-xl lg:pt-7">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl sm:leading-[56px]">
            <span className="text-white">From need to execution.</span>
            <br />
            <span className="text-lime-200">In three simple steps.</span>
          </h2>
        </div>
        <div className="flex w-full flex-col gap-6">
          {howSteps.map((step) => (
            <HowStepCard key={step.title} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
