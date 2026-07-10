import Container from "@/components/Container";
import NumberedCard from "@/components/NumberedCard";

const whyChooseHirebolt = [
  {
    title: "Top 1% specialists, rigorously vetted",
    description:
      "Our LLM engineers and evaluators have shipped production AI systems using GPT-4, Claude, Llama 2/3, Mistral, and custom transformer models. They understand prompt engineering, RAG, fine-tuning, and model evaluation.",
  },
  {
    title: "Full-stack AI capabilities",
    description:
      "Build complete LLM-powered applications from concept to deployment. Teams handle model selection, fine-tuning, vector database integration, prompt optimization, API development, guardrails, and production monitoring — delivering end-to-end solutions.",
  },
  {
    title: "Technical depth at the core",
    description:
      "Our network was originally built around verified software engineering talent, making us particularly strong for coding, Python, Docker, Linux, cloud infrastructure, STEM, multilingual review, and expert evaluation tasks where generalist annotator pools often struggle.",
  },
  {
    title: "Workflow at scale",
    description:
      "We have a pool of more than 2M specialists for repeatable AI evaluation, training, and human-feedback workflows. We combine a large recruiting organization, established sourcing processes, referral networks, and global talent communities to rapidly identify and qualify contributors.",
  },
  {
    title: "40+ languages supported",
    description:
      "Our UK base gives us strong reach across Europe and beyond. We source domain specialists across more than 40 languages, supporting multilingual annotation, review, and evaluation work. Contributors include talent from Oxford, Stanford, MIT, and Aston University.",
  },
  {
    title: "Quality across the full workflow",
    description:
      "We don't hand off and disappear. We maintain QA, throughput management, replacement capacity, and signal quality across ongoing, long-running AI training workflows so your pipeline stays reliable.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="pt-24 pb-28">
      <Container className="flex flex-col gap-16">
        <div className="w-[737px] max-w-full">
          <h2 className="font-display text-5xl font-bold leading-[56px]">
            <span className="text-white">Why teams </span>
            <span className="text-lime-200">choose Hirebolt</span>
          </h2>
          <p className="mt-4 text-base font-medium text-zinc-400">
            Access infrastructure designed for large-scale AI data training,
            expert evaluation, and multilingual operations, managed from
            sourcing to quality assurance.
          </p>
        </div>
        <div className="flex flex-wrap gap-6">
          {whyChooseHirebolt.map((item, index) => (
            <NumberedCard
              key={item.title}
              number={index + 1}
              className="w-[628px]"
              {...item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
