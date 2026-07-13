import Image from "next/image";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import CheckPill from "@/components/CheckPill";
import TalentCards from "@/components/TalentCards";

const trustSignals = [
  {
    text: "Talent across 60+ countries supporting 40+ languages for multilingual evaluation",
    className: "top-0 left-[160px]",
  },
  {
    text: "Grads and researchers from MIT, Stanford, Oxford, and leading institutions",
    className: "top-[60px] right-[160px]",
  },
  {
    text: "100% identity-verified, live-proctored, and technical credential-checked",
    className: "top-[120px] left-[308px]",
  },
];

export default function TalentSection() {
  return (
    <section className="py-12 sm:pt-24 sm:pb-28">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <span className="sm:hidden">
            <Eyebrow className="tracking-[1.5px]">Our Talent Network</Eyebrow>
          </span>
          <span className="hidden sm:block">
            <Eyebrow className="tracking-[1.5px]">Our talent</Eyebrow>
          </span>
          <div className="flex flex-col gap-4">
            <h2 className="max-w-2xl font-display text-3xl leading-9 font-bold sm:text-5xl sm:leading-[56px]">
              <span className="text-white">Specialists for </span>
              <span className="text-lime-200">
                high-stakes
                <br className="hidden sm:block" /> AI training and evaluation
              </span>
            </h2>
            <p className="max-w-[628px] text-base font-medium text-zinc-400">
              Access a global network of engineers, researchers, and domain
              experts who help build, test, and improve AI systems across
              coding, STEM, language, and multimodal tasks.
            </p>
          </div>
        </div>

        <TalentCards />

        <div className="hidden h-[168px] w-full sm:relative sm:block">
          {trustSignals.map((signal) => (
            <CheckPill
              key={signal.text}
              className={`absolute ${signal.className}`}
            >
              {signal.text}
            </CheckPill>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:hidden">
          {trustSignals.map((signal) => (
            <div
              key={signal.text}
              className="flex items-center gap-4 rounded-lg bg-white/10 p-4 outline outline-1 -outline-offset-1 outline-white/5"
            >
              <Image
                src="/train-ai/check-24.svg"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 shrink-0"
              />
              <span className="text-base leading-5 font-medium text-white">
                {signal.text}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
