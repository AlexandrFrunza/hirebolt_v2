import Container from "@/components/Container";

const stats = [
  {
    title: "Deployment speed",
    description:
      "From brief to deployed team in ~7 days, drawing from a pool of 2.5M+ pre-vetted contributors.",
  },
  {
    title: "Domain depth",
    description:
      "7,000+ verified AI, STEM, and domain specialists skilled in SFT, RLHF, RAG, and agent workflows.",
  },
  {
    title: "Match precision",
    description:
      "97% first-match success rate with contributors experienced across 20+ AI training domains.",
  },
];

export default function StatsSection() {
  return (
    <section className="py-28">
      <Container>
        <div className="flex flex-wrap items-start gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex-1 basis-72 rounded-2xl bg-slate-800 p-6 outline outline-1 -outline-offset-1 outline-white/5"
            >
              <p className="font-display text-xl leading-6 font-bold text-white">
                {stat.title}
              </p>
              <p className="mt-2 text-base font-medium text-slate-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
