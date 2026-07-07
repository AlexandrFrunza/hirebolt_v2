import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import CheckPill from "@/components/CheckPill";
import TalentCards from "@/components/TalentCards";

const trustSignals = [
  "Grads and researchers from MIT, Stanford, Oxford, and leading institutions",
  "Talent across 60+ countries supporting 40+ languages for multilingual evaluation",
  "100% identity-verified, live-proctored, and technical credential-checked",
];

export default function TalentSection() {
  return (
    <section className="pt-24 pb-28">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <Eyebrow>Our talent</Eyebrow>
          <div className="flex flex-col gap-4">
            <h2 className="max-w-2xl font-display text-5xl font-bold leading-[56px]">
              <span className="text-white">Specialists for </span>
              <span className="text-lime-200">
                high-stakes
                <br />
                AI training and evaluation
              </span>
            </h2>
            <p className="max-w-2xl text-base font-medium text-zinc-400">
              Access a global network of engineers, researchers, and domain
              experts who help build, test, and improve AI systems across
              coding, STEM, language, and multimodal tasks.
            </p>
          </div>
        </div>

        <TalentCards />

        <div className="flex flex-wrap items-center justify-center gap-3">
          {trustSignals.map((signal) => (
            <CheckPill key={signal}>{signal}</CheckPill>
          ))}
        </div>
      </Container>
    </section>
  );
}
