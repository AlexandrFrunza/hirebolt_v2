import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import TextLink from "@/components/TextLink";
import StatRow from "@/components/StatRow";

const heroStats = [
  { value: "7,000+", label: "vetted AI, researchers, and domain experts" },
  { value: "20+", label: "AI training domains" },
  { value: "~7 days", label: "from scope to deployment" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-28">
      <div
        className="pointer-events-none absolute top-[190px] right-[-34px] hidden h-64 w-72 lg:block"
        aria-hidden
      >
        <Image
          src="/hero-decoration.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <Container className="flex flex-col items-center gap-24 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-16">
            <div className="flex items-center gap-3">
              <span className="text-base text-white">Backed by</span>
              <Image
                src="/y_combinator_logo.png"
                alt="Y Combinator"
                width={416}
                height={87}
                className="h-[21.6px] w-auto shrink-0"
              />
            </div>
            <h1 className="max-w-[895px] font-display text-4xl font-black leading-tight sm:text-[56px] sm:leading-[64px]">
              <span className="text-white sm:whitespace-nowrap">
                High quality human intelligence
              </span>
              <br />
              <span className="text-lime-200">for frontier AI</span>
            </h1>
          </div>
          <div className="flex flex-col items-center gap-12">
            <p className="max-w-[1053px] text-xl font-medium leading-8 text-zinc-400">
              Hirebolt helps AI companies access specialist talent, AI
              training workflows, and engineering capacity through a global
              network of vetted contributors, engineers, and domain experts.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <Button href="/hire-ai-talent">Explore the network</Button>
              <TextLink href="/contact">Talk to an expert</TextLink>
            </div>
          </div>
        </div>
        <StatRow stats={heroStats} />
      </Container>
    </section>
  );
}
