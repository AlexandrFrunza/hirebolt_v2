import { Target, Rocket, Activity } from "lucide-react";
import Container from "@/components/Container";
import IconFeatureCard from "@/components/IconFeatureCard";

const processSteps = [
  {
    icon: <Target />,
    title: "Scope & align",
    description:
      "We review your existing stack, product goals, and constraints. Together we define a clear MVP, set performance benchmarks, and agree on what the team needs to deliver it.",
  },
  {
    icon: <Rocket />,
    title: "Integrate & ship",
    description:
      "We deploy top 1% AI talent into your workflows with the stack and models that fit. Team codes prototypes, builds data pipelines, hooks models into your infrastructure around your KPIs.",
  },
  {
    icon: <Activity />,
    title: "Monitor & refine",
    description:
      "Once live, we keep improving. Model behavior gets refined, performance is monitored, and new capabilities are added as your product and requirements grow.",
  },
];

export default function CoCreateSection() {
  return (
    <section className="py-28">
      <Container className="flex flex-col gap-6 lg:flex-row">
        <div className="flex w-full flex-col gap-4 lg:max-w-md">
          <span className="inline-block w-fit rounded-lg bg-lime-200/10 px-3 py-2 text-xs font-medium uppercase tracking-wider text-lime-200 outline outline-1 -outline-offset-1 outline-lime-200/5">
            How it works
          </span>
          <h2 className="font-display text-5xl font-bold leading-[56px]">
            <span className="text-white">
              How we co-create
              <br />
            </span>
            <span className="text-lime-200">your AI systems</span>
          </h2>
          <p className="text-base font-medium text-zinc-400">
            Simple steps to design, build, and improve AI systems.
          </p>
        </div>
        <div className="flex w-full flex-col gap-6">
          {processSteps.map((step) => (
            <IconFeatureCard key={step.title} layout="row" {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
