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
    <section className="relative overflow-hidden py-12 sm:pt-32 sm:pb-24">
      <div
        className="pointer-events-none absolute top-[190px] right-[-34px] hidden h-64 w-72 lg:block"
        aria-hidden
      >
        <Image src="/hero-decoration.svg" alt="" fill className="object-contain" />
      </div>
      <Container className="flex flex-col items-center gap-12 text-center sm:gap-16">
        <div className="flex items-center gap-3">
          <span className="text-base text-white">Backed by</span>
          <Image
            src="/y_combinator_logo.png"
            alt="Y Combinator"
            width={416}
            height={87}
            className="h-5 w-auto shrink-0 sm:h-[21.6px]"
          />
        </div>

        <div className="flex flex-col items-center gap-24">
          <div className="flex flex-col items-center gap-6">
            <h1 className="font-display text-3xl leading-9 font-black sm:text-[56px] sm:leading-[64px]">
              <span className="text-white">AI engineering capacity. </span>
              <span className="text-lime-200">Made simple.</span>
            </h1>
            <div className="flex flex-col items-center gap-12">
              <p className="max-w-[920px] text-base leading-6 font-medium text-zinc-400 sm:text-xl sm:leading-8">
                Access a global network of verified engineers, AI-augmented
                teams, and expert AI evaluators — with instant search that
                helps you start finding and interviewing talent in seconds.
              </p>
              <div className="flex w-full flex-col items-center gap-8 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
                <Button
                  href="https://www.index.dev/hire"
                  className="w-full sm:w-auto"
                >
                  Start Searching
                </Button>
                <TextLink href="https://www.index.dev/hire">
                  Talk to Us
                </TextLink>
              </div>
            </div>
          </div>

          <div className="hidden flex-wrap items-center justify-center gap-3 sm:flex">
            {heroChecklist.map((item) => (
              <CheckPill key={item}>{item}</CheckPill>
            ))}
          </div>

          <div className="relative h-56 w-full sm:hidden">
            <CheckPill className="absolute top-0 left-0">
              {heroChecklist[0]}
            </CheckPill>
            <CheckPill className="absolute top-[60px] right-0">
              {heroChecklist[1]}
            </CheckPill>
            <CheckPill className="absolute top-[120px] left-0">
              {heroChecklist[2]}
            </CheckPill>
            <CheckPill className="absolute top-[180px] right-0">
              {heroChecklist[3]}
            </CheckPill>
          </div>
        </div>
      </Container>
    </section>
  );
}
