import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import TagCard from "@/components/TagCard";

const trainTags = [
  {
    tag: "Technical rigor",
    description: "Agentic code-gen and function-calling evaluation",
  },
  {
    tag: "RL Environments",
    description: "Scoped, repeatable tasks and automated verifiers",
  },
  {
    tag: "Frontier STEM",
    description: "Human-authored datasets for physics, math, and chemistry",
  },
  {
    tag: "Knowledge Work",
    description: "Domain-specific tasks across finance, legal, and medical",
  },
  {
    tag: "Multimodality & Audio",
    description: "Vision-language QA, ASR, TTS, and interface trajectories",
  },
  {
    tag: "Robotics",
    description:
      "VLA data packs, simulation trajectories, and teleoperation setups",
  },
];

export default function TrainAISection() {
  return (
    <section className="pt-28 pb-24">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <SectionLabel>Train AI</SectionLabel>
            <div className="flex flex-col gap-4">
              <h2 className="max-w-3xl text-3xl font-medium text-white">
                Build better models with expert-led training data,
                evaluations, and human feedback workflows.
              </h2>
              <p className="max-w-3xl text-base font-medium text-zinc-400">
                We build custom evaluations, private benchmarks, and
                high-quality post-training datasets — SFT, RLHF, and RL
                environments — to help AI labs advance model capabilities
                across multiple modalities and domains.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            {trainTags.map((item) => (
              <TagCard key={item.tag} {...item} />
            ))}
          </div>
        </div>
        <Button href="/train-ai" className="self-start">
          Explore Train AI Solutions
        </Button>
      </Container>
    </section>
  );
}
