import Image from "next/image";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";

const steps = [
  {
    icon: "/shape-1.svg",
    title: "Scope your task",
    description:
      "Share your goals, domains, quality requirements, and expected scale. We help scope the right contributors, evaluation approach, and delivery model.",
  },
  {
    icon: "/shape-2.svg",
    title: "Deploy specialists",
    description:
      "Access vetted contributors, evaluators, and domain experts matched to your needs, ready to work in your existing tools and workflows.",
  },
  {
    icon: "/shape-3.svg",
    title: "Scale as your model evolves",
    description:
      "Expand capacity as needs grow. Add specialists, increase throughput, and maintain quality through ongoing management, QA, and operational support.",
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="overflow-hidden py-28">
      <Container className="relative flex gap-6">
        <div className="pointer-events-none absolute bottom-3 left-[-140px] h-[221px] w-[404.016px]" aria-hidden>
          <Image src="/waves.svg" alt="" fill className="object-contain" />
        </div>
        <div className="flex w-[628px] flex-col gap-4">
          <Eyebrow className="tracking-[1.5px]">How we work with AI labs</Eyebrow>
          <h2 className="font-display text-5xl leading-[56px] font-bold">
            <span className="text-white">From task </span>
            <span className="text-lime-200">
              to <br /> trained system
            </span>
          </h2>
          <p className="w-96 text-base font-medium leading-6 text-zinc-400">
            A simple process designed to get the right specialists working on
            your AI training tasks fast.
          </p>
        </div>
        <div className="flex w-[628px] flex-col gap-6">
          {steps.map((step) => (
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
