import Container from "@/components/Container";

const stats = [
  {
    title: "Strategy to action",
    description:
      "~7 days to align on your technical roadmap and deploy an active engineering pod.",
  },
  {
    title: "Engineering depth",
    description:
      "Top 1% vetted software, machine learning, and infrastructure developers.",
  },
  {
    title: "Proven delivery",
    description: "97% first-match precision for specialized engineering teams.",
  },
];

export default function StatsSection() {
  return (
    <section className="py-12 sm:py-28">
      <Container>
        <div className="-mr-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:hidden [&::-webkit-scrollbar]:hidden">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex w-[85vw] shrink-0 snap-start flex-col gap-3 rounded-2xl bg-slate-800 p-6 outline outline-1 -outline-offset-1 outline-white/5"
            >
              <p className="font-display text-xl leading-7 font-bold text-white">
                {stat.title}
              </p>
              <p className="text-base font-medium text-slate-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        <div className="hidden flex-wrap items-start gap-6 sm:flex">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex-1 basis-72 rounded-2xl bg-slate-800 p-6 outline outline-1 -outline-offset-1 outline-white/5"
            >
              <p className="font-display text-xl font-bold text-white">
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
