import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import NumberedCard from "@/components/NumberedCard";

const whyHirebolt = [
  {
    title: "Engineering talent at the core",
    description:
      "Our network was built around vetted AI engineering talent from day one. That means stronger coverage for coding, STEM, evaluation, and technical AI tasks than generalist annotation platforms can offer.",
  },
  {
    title: "Sourcing to delivery, fully managed",
    description:
      "We handle sourcing, vetting, onboarding, and ongoing operations. With 2M+ pre-screened contributors, we maintain throughput, QA, and replacement capacity across long-running workflows without you having to manage it.",
  },
  {
    title: "Fast to start, verified at every step",
    description:
      "Every engineer and contributor is screened, credential-checked, and matched to your requirements before you see them. Most teams have a shortlist within 48 hours and specialists in place within 7 days.",
  },
  {
    title: "Global reach, domain depth",
    description:
      "40+ languages and specialist coverage across STEM, software, legal, medical, and multimodal domains. The network grows with your needs as models and workflows evolve.",
  },
];

export default function WhyHirebolt() {
  return (
    <section className="pt-12 pb-12 sm:pt-24 sm:pb-28">
      <Container className="flex flex-col gap-12 sm:gap-16">
        <div className="flex w-[737px] max-w-full flex-col gap-4">
          <Eyebrow>Why Hirebolt</Eyebrow>
          <h2 className="font-display text-3xl leading-9 font-bold text-white sm:text-5xl sm:leading-[56px]">
            Built specifically for AI development and model training
          </h2>
        </div>
        <div className="-mr-6 flex snap-x snap-mandatory gap-4 overflow-x-auto sm:hidden [&::-webkit-scrollbar]:hidden">
          {whyHirebolt.map((item, index) => (
            <NumberedCard
              key={item.title}
              number={index + 1}
              className="h-[420px] w-[312px] shrink-0 snap-start"
              {...item}
            />
          ))}
        </div>
        <div className="hidden sm:grid sm:grid-cols-2 sm:gap-6">
          {whyHirebolt.map((item, index) => (
            <NumberedCard key={item.title} number={index + 1} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
