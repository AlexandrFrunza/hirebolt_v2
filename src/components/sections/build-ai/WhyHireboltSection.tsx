import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import NumberedCard from "@/components/NumberedCard";

const whyHirebolt = [
  {
    title: "We build alongside you",
    description:
      "Our engineers join your standups, use your tools, and stay aligned with how your team works day to day. No handoffs, no work happening in a black box somewhere else.",
  },
  {
    title: "AI-native engineers, not generalists",
    description:
      "Every engineer is vetted for hands-on AI experience: LLM integration, RAG systems, agent development, fine-tuning, and production monitoring. We don't place generic developers on AI projects.",
  },
  {
    title: "Total support for the full product",
    description:
      "Start with one specialist and scale to a full team as the project grows. We cover every role in the AI product stack: ML engineers, full-stack developers, data engineers, and MLOps specialists.",
  },
  {
    title: "You own everything",
    description:
      "All code, model weights, fine-tuning outputs, and text data stay 100% yours. We work inside your systems and infrastructure. No vendor lock-in and no proprietary platforms.",
  },
];

export default function WhyHireboltSection() {
  return (
    <section className="pt-24 pb-28">
      <Container className="flex flex-col gap-12">
        <div className="max-w-2xl">
          <Eyebrow>Why Hirebolt</Eyebrow>
          <h2 className="mt-4 font-display text-5xl font-bold leading-[56px]">
            <span className="text-white">
              Engineering-led.
              <br />
            </span>
            <span className="text-lime-200">Outcome-focused.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {whyHirebolt.map((item, index) => (
            <NumberedCard key={item.title} number={index + 1} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
