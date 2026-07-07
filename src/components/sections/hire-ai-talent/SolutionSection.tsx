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
    <section className="py-28">
      <Container className="flex flex-col gap-12">
        <div className="max-w-xl">
          <Eyebrow>Solution</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl sm:leading-[56px]">
            <span className="text-white">Build AI products faster.</span>
            <br />
            <span className="text-lime-200">Access talent instantly.</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-6">
          {solutionSteps.map((step, index) => (
            <SolutionStepCard key={step.title} number={index + 1} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
