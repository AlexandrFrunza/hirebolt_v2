import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import TextLink from "@/components/TextLink";
import CheckPill from "@/components/CheckPill";

const heroChecklist = [
  "Verified global network",
  "Search in seconds",
  "AI delivery capacity",
  "Expert evaluation",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <Container className="flex flex-col items-center gap-6 text-center">
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

        <div className="flex flex-col items-center gap-6">
          <h1 className="font-display text-4xl font-black leading-tight sm:text-6xl sm:leading-[64px]">
            <span className="text-white">AI engineering capacity. </span>
            <span className="font-serif italic text-lime-200">
              Made simple.
            </span>
          </h1>
          <div className="flex flex-col items-center gap-10">
            <p className="max-w-[1053px] text-base font-medium text-white sm:text-xl sm:leading-8">
              Access a global network of verified engineers, AI-augmented
              teams, and expert AI evaluators — with instant search that
              helps you start finding and interviewing talent in seconds.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <Button href="https://www.index.dev/hire">
                Start Searching
              </Button>
              <TextLink href="https://www.index.dev/hire">
                Talk to Us
              </TextLink>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {heroChecklist.map((item) => (
            <CheckPill key={item}>{item}</CheckPill>
          ))}
        </div>
      </Container>

      <div
        className="pointer-events-none absolute top-[100px] right-[-100px] hidden h-[352px] w-[381px] lg:block"
        aria-hidden
      >
        <Image
          src="/hire-ai-talent/hero-decoration.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
