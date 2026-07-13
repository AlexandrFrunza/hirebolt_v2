import Container from "@/components/Container";
import DomainCard from "@/components/DomainCard";

const trainingDomains = [
  {
    category: "Software engineering",
    description:
      "Build coding datasets, benchmarks, and evaluation workflows designed to improve reasoning, code quality, and agent performance across real-world software engineering tasks.",
    tags: ["Agentic coding", "Function calling", "Code generation", "Evaluation"],
  },
  {
    category: "RL environments",
    description:
      "Structured reinforcement learning environments with prompts, verifiers, and test scenarios that support training, evaluation, and controlled experimentation.",
    tags: ["Custom environments", "Verifiers", "Tasks", "Agent evaluation"],
  },
  {
    category: "Frontier STEM",
    description:
      "Human-authored datasets and benchmarks designed to evaluate and improve scientific reasoning, symbolic accuracy, and domain expertise in advanced models.",
    tags: ["Mathematics", "Physics", "Chemistry", "Biology"],
  },
  {
    category: "Enterprise knowledge work",
    description:
      "Structured reinforcement learning environments with prompts, verifiers, and test scenarios that support training, evaluation, and controlled experimentation.",
    tags: ["Finance", "Legal", "Medical", "Economics"],
  },
  {
    category: "Multimodality",
    description:
      "Curated multimodal datasets and evaluations that help models understand, reason across, and generate outputs from multiple data types.",
    tags: ["Vision", "Audio", "Documents", "Interface reasoning"],
  },
  {
    category: "Robotics & embodied AI",
    description:
      "Structured datasets for embodied reasoning, simulation, and agent interaction across virtual and real-world environments.",
    tags: ["World modeling", "Teleoperation", "Simulation", "VLA"],
  },
  {
    category: "Benchmarks",
    description:
      "Design, execution, and management of benchmarks that help measure model capabilities, identify weaknesses, and track improvements across training cycles.",
    tags: ["Private evals for SWE, Tau, MLE, MMMU", "+ more"],
  },
  {
    category: "Datasets",
    description:
      "Structured reinforcement learning environments with prompts, verifiers, and test scenarios that support training, evaluation, and controlled experimentation.",
    tags: ["Research datasets", "Expert annotation", "Custom data creation"],
  },
];

export default function TrainingDomainsSection() {
  return (
    <section className="py-12 sm:py-28">
      <Container className="flex flex-col gap-12 sm:gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-[32px] leading-9 font-bold sm:text-5xl sm:leading-[56px]">
            <span className="text-white">Train </span>
            <span className="text-lime-200">frontier models</span>
          </h2>
          <p className="text-base font-medium text-zinc-400">
            We build the datasets, evals, and environments AI labs need to
            advance model performance.
          </p>
        </div>
        <div className="-mr-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:hidden [&::-webkit-scrollbar]:hidden">
          {trainingDomains.map((domain) => (
            <DomainCard
              key={domain.category}
              className="!h-auto !w-[85vw] shrink-0 snap-start"
              {...domain}
            />
          ))}
        </div>
        <div className="hidden flex-wrap gap-6 sm:flex">
          {trainingDomains.map((domain) => (
            <DomainCard key={domain.category} {...domain} />
          ))}
        </div>
      </Container>
    </section>
  );
}
