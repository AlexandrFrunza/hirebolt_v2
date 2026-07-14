import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import SolutionStepCard from "@/components/SolutionStepCard";

const solutionSteps = [
  {
    title: "Verified Network",
    description:
      "Access a curated global network of engineers across software, ML, data, and AI implementation.",
    tag: "Curated talent",
  },
  {
    title: "Instant Search",
    description:
      "Search by AI capability, stack, and availability to identify relevant talent quickly.",
    tag: "Find fast",
  },
  {
    title: "AI-Augmented Teams",
    description:
      "Add flexible engineering capacity to build and ship complex AI products.",
    tag: "Flexible capacity",
  },
  {
    title: "Expert Evaluation",
    description:
      "Bring in deep technical review and AI-specific assessment when quality matters.",
    tag: "Technical rigor",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-12 sm:pt-24 sm:pb-28">
      <Container className="flex flex-col gap-16">
        <div className="max-w-xl">
          <Eyebrow className="tracking-[1.5px]">Solution</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-9 font-bold sm:text-5xl sm:leading-[56px]">
            <span className="text-white">Build AI products faster.</span>
            <br />
            <span className="text-lime-200">Access talent instantly.</span>
          </h2>
        </div>
        <div className="-mr-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:hidden [&::-webkit-scrollbar]:hidden">
          {solutionSteps.map((step, index) => (
            <SolutionStepCard
              key={step.title}
              number={index + 1}
              className="!min-w-0 !w-[85vw] !flex-none shrink-0 snap-start"
              {...step}
            />
          ))}
        </div>
        <div className="hidden sm:grid sm:grid-cols-2 sm:gap-6">
          {solutionSteps.map((step, index) => (
            <SolutionStepCard key={step.title} number={index + 1} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
