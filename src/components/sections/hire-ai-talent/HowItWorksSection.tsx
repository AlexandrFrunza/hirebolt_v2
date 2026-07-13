import Image from "next/image";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";

const howSteps = [
  {
    icon: "/shape-1.svg",
    title: "Search the network",
    description: "Start with role, stack, AI capability, or delivery need.",
  },
  {
    icon: "/shape-2.svg",
    title: "Shortlist and interview fast",
    description:
      "Review relevant profiles and move quickly into conversations.",
  },
  {
    icon: "/shape-3.svg",
    title: "Add execution capacity",
    description:
      "Bring in individual engineers, flexible teams, or evaluation support to ship faster.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="overflow-hidden py-12 sm:py-28">
      <Container className="relative flex flex-col gap-12 sm:flex-row sm:gap-6">
        <div
          className="pointer-events-none absolute bottom-[-12px] left-[-140px] hidden h-[221px] w-[404.016px] sm:block"
          aria-hidden
        >
          <Image src="/waves.svg" alt="" fill className="object-contain" />
        </div>
        <div className="flex w-80 flex-col gap-4 sm:w-[628px]">
          <Eyebrow className="tracking-[1.5px]">How it works</Eyebrow>
          <h2 className="font-display text-3xl leading-9 font-bold sm:text-5xl sm:leading-[56px]">
            <span className="text-white">From need to execution.</span>
            <br />
            <span className="text-lime-200">In three simple steps.</span>
          </h2>
          <p className="text-base leading-6 font-medium text-[#B9B9B9]">
            The easiest way to find, interview, and bring AI talent into your
            team.
          </p>
        </div>

        <div className="-mr-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:hidden [&::-webkit-scrollbar]:hidden">
          {howSteps.map((step) => (
            <div
              key={step.title}
              className="flex h-80 w-[85vw] shrink-0 snap-start flex-col justify-center gap-4 rounded-2xl bg-white/10 p-6 outline outline-1 -outline-offset-1 outline-white/5"
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
          {howSteps.map((step) => (
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
