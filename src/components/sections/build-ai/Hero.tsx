import Container from "@/components/Container";
import Button from "@/components/Button";
import TextLink from "@/components/TextLink";
import CheckPill from "@/components/CheckPill";
import HeroDecoration from "@/components/HeroDecoration";

const heroChecklist = [
  "Vetted AI engineers",
  "From pilot to production",
  "KPI-aligned systems",
  "Full code & IP ownership",
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
              <span className="text-white">Turn AI models </span>
              <span className="text-lime-200">into working products.</span>
            </h1>
            <div className="flex flex-col items-center gap-12">
              <p className="max-w-3xl text-xl font-medium leading-8 text-zinc-400">
                Hirebolt helps teams move from ideas to working AI. We handle
                model selection, integration, and engineering so you can
                ship AI copilots, agents, RAG systems, and automation that
                drive business results.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <Button href="/contact">Launch a project</Button>
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
