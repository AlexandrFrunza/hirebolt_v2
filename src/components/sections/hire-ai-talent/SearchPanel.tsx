import Image from "next/image";
import Container from "@/components/Container";

export default function SearchPanel() {
  return (
    <section className="flex flex-col items-start self-stretch bg-neutral-900 py-12 sm:py-28">
      <Container>
        <div className="flex flex-col items-start gap-8 sm:hidden">
          <h2 className="font-display text-3xl leading-9 font-bold">
            <span className="text-white">Search the network.</span>
            <br />
            <span className="text-lime-200">Start in seconds.</span>
          </h2>
          <div className="flex w-full items-center gap-2 rounded-2xl bg-lime-200 py-2 pr-2 pl-5">
            <span className="flex-1 text-left text-base leading-4 font-medium text-neutral-900">
              Search AI engineers, ML engineers, LLM developers, or AI teams
            </span>
            <button
              type="button"
              className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-800 p-2"
            >
              <Image
                src="/hire-ai-talent/search-md-20.svg"
                alt=""
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>

        <div className="relative hidden aspect-[1280/402] w-full outline outline-1 -outline-offset-1 outline-white/10 sm:block">
          <Image
            src="/hire-ai-talent/frame.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end px-[48px] py-8">
            <h2 className="font-display text-[48px] leading-[56px] font-bold">
              <span className="text-white">Search the network.</span>
              <br />
              <span className="text-lime-200">Start in seconds.</span>
            </h2>
            <div className="mt-8 flex items-center gap-2 rounded-2xl bg-lime-200 py-2 pr-2 pl-5">
              <span className="w-[518px] text-left text-base leading-4 font-medium text-neutral-900">
                Search AI engineers, ML engineers, LLM developers, or AI
                teams
              </span>
              <button
                type="button"
                className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-800 p-2"
              >
                <Image
                  src="/hire-ai-talent/search-md-20.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <p className="mt-3 ml-5 text-sm leading-4 font-medium text-white/80">
              Powered by Index.dev
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
