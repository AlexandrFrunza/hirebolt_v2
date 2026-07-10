import Container from "@/components/Container";
import NetworkStatPill from "@/components/NetworkStatPill";

const networkStats = [
  { icon: "/hire-ai-talent/icon-globe.svg", label: "40 regions / timezones" },
  {
    icon: "/hire-ai-talent/icon-hourglass.svg",
    label: "48hrs average time to first shortlist",
  },
  {
    icon: "/hire-ai-talent/icon-contrast.svg",
    label: "AI, software, data, and ML coverage",
  },
];

export default function NetworkSection() {
  return (
    <section className="py-28">
      <Container>
        <div className="flex flex-col items-center gap-16 rounded-2xl border-2 border-lime-200 px-6 py-[76px] text-center sm:px-16">
          <div className="flex flex-col items-center gap-8">
            <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl sm:leading-[56px]">
              <span className="text-white">A network built for</span>
              <br />
              <span className="text-lime-200">AI product work.</span>
            </h2>
            <p className="max-w-[924px] text-xl leading-8 text-white">
              Hirebolt gives companies access to a curated network of
              engineers across software, data, ML, and AI implementation.
              Instead of starting from zero, teams tap into an existing
              talent layer designed to reduce time to shortlist, interview,
              and execution.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {networkStats.map((stat) => (
              <NetworkStatPill key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
