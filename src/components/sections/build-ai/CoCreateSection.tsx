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
    <section className="overflow-hidden py-12 sm:py-28">
      <Container className="relative flex flex-col gap-12 sm:flex-row sm:gap-6">
        <div
          className="pointer-events-none absolute bottom-3 left-[-140px] hidden h-[221px] w-[404.016px] sm:block"
          aria-hidden
        >
          <Image src="/waves.svg" alt="" fill className="object-contain" />
        </div>
        <div className="flex w-80 flex-col gap-4 sm:w-[628px]">
          <Eyebrow className="tracking-[1.5px]">How it works</Eyebrow>
          <h2 className="font-display text-3xl leading-9 font-bold sm:text-5xl sm:leading-[56px]">
            <span className="text-white">
              How we co-create
              <br />
            </span>
            <span className="text-lime-200">your AI systems</span>
          </h2>
          <p className="w-full text-base font-medium leading-6 text-zinc-400 sm:w-96">
            Simple steps to design, build, and improve AI systems.
          </p>
        </div>

        <div className="-mr-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:hidden [&::-webkit-scrollbar]:hidden">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="flex h-80 w-80 shrink-0 snap-start flex-col justify-center gap-4 rounded-2xl bg-white/10 p-6 outline outline-1 -outline-offset-1 outline-white/5"
            >
              <div className="relative h-24 w-24 shrink-0">
                <Image src={step.icon} alt="" fill className="object-contain" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-display text-xl leading-7 font-bold text-white">
                  {step.title}
                </p>
                <p className="text-base leading-6 font-medium text-zinc-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden w-[628px] flex-col gap-6 sm:flex">
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
