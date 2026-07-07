import Container from "@/components/Container";
import Button from "@/components/Button";
import TextLink from "@/components/TextLink";
import CheckPill from "@/components/CheckPill";
import HeroDecoration from "@/components/HeroDecoration";

const heroChecklist = [
  "SFT, RLHF & RL environments",
  "Domain-expert contributors",
  "40+ languages supported",
  "Rigorous technical evaluation",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <HeroDecoration />
      <Container className="flex flex-col items-center gap-16 text-center">
        <div className="flex items-center gap-3">
          <span className="text-base text-white">Backed by</span>
          <span className="text-base font-bold text-white">Y Combinator</span>
        </div>

        <div className="flex flex-col items-center gap-24">
          <div className="flex flex-col items-center gap-6">
            <h1 className="font-display text-4xl font-black leading-tight sm:text-6xl sm:leading-[64px]">
              <span className="text-white">Human intelligence</span>
              <br />
              <span className="text-lime-200">
                for AI training and evaluation.
              </span>
            </h1>
            <div className="flex flex-col items-center gap-12">
              <p className="max-w-[1053px] text-xl font-medium leading-8 text-zinc-400">
                Build stronger models with expert-led evaluation, benchmarks,
                post-training datasets, and human feedback workflows.
                Hirebolt helps AI teams access the specialist talent and
                operational capacity needed to improve model performance at
                scale.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <Button href="/contact">Request a dataset or evaluation</Button>
                <TextLink href="/contact">Talk to an expert</TextLink>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {heroChecklist.map((item) => (
              <CheckPill key={item}>{item}</CheckPill>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
