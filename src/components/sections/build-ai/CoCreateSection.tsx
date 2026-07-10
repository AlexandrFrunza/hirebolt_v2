import Image from "next/image";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";

const processSteps = [
  {
    icon: "/shape-1.svg",
    title: "Scope & align",
    description:
      "We review your existing stack, product goals, and constraints. Together we define a clear MVP, set performance benchmarks, and agree on what the team needs to deliver it.",
  },
  {
    icon: "/shape-2.svg",
    title: "Integrate & ship",
    description:
      "We deploy top 1% AI talent into your workflows with the stack and models that fit. Team codes prototypes, builds data pipelines, hooks models into your infrastructure around your KPIs.",
  },
  {
    icon: "/shape-3.svg",
    title: "Monitor & refine",
    description:
      "Once live, we keep improving. Model behavior gets refined, performance is monitored, and new capabilities are added as your product and requirements grow.",
  },
];

export default function CoCreateSection() {
  return (
    <section className="overflow-hidden py-28">
      <Container className="relative flex gap-6">
        <div
          className="pointer-events-none absolute bottom-[59px] left-[-140px] h-[221px] w-[404.016px]"
          aria-hidden
        >
          <Image src="/waves.svg" alt="" fill className="object-contain" />
        </div>
        <div className="flex w-[628px] flex-col gap-4">
          <Eyebrow className="tracking-[1.5px]">How it works</Eyebrow>
          <h2 className="font-display text-5xl leading-[56px] font-bold">
            <span className="text-white">
              How we co-create
              <br />
            </span>
            <span className="text-lime-200">your AI systems</span>
          </h2>
          <p className="max-w-[628px] text-base font-medium leading-6 text-zinc-400">
            Simple steps to design, build, and improve AI systems.
          </p>
        </div>
        <div className="flex w-[628px] flex-col gap-6">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="flex w-[628px] items-center gap-6 rounded-2xl bg-white/10 p-8 outline outline-1 -outline-offset-1 outline-white/5"
            >
              <div className="relative h-[100px] w-[101px] shrink-0">
                <Image src={step.icon} alt="" fill className="object-contain" />
              </div>
              <div className="flex w-[444px] flex-col gap-2">
                <p className="font-display text-xl leading-6 font-bold text-white">
                  {step.title}
                </p>
                <p className="text-base leading-6 font-medium text-[#D9D9D9]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
