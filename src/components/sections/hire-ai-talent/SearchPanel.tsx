import Image from "next/image";
import Container from "@/components/Container";

export default function SearchPanel() {
  return (
    <section className="py-28">
      <Container>
        <div className="relative h-[420px] overflow-hidden rounded-[40px] bg-slate-800 shadow-[0_18px_42px_rgba(0,0,0,0.18)] sm:h-[402px]">
          <Image
            src="/hire-ai-talent/developers-team.png"
            alt="Developers team"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(18,34,44,0.85) 0%, rgba(18,34,44,0.7) 34%, rgba(18,34,44,0.3) 66%, rgba(18,34,44,0) 100%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-center gap-8 p-6 sm:w-[598px] sm:p-12">
            <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-[56px]">
              Search the network.
              <br />
              <span className="text-lime-200">Start in seconds.</span>
            </h2>
            <a
              href="https://www.index.dev/hire"
              className="flex items-center justify-between gap-4 rounded-2xl bg-lime-200 py-2 pl-5 pr-2 text-neutral-900"
            >
              <span className="truncate text-base font-medium">
                Search AI engineers, ML engineers, LLM developers, or AI
                teams
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-white">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <circle cx="11" cy="11" r="6" stroke="white" strokeWidth="2" />
                  <path
                    d="M20 20L16 16"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </a>
            <p className="text-sm font-medium text-white/80">
              Powered by Index.dev
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
