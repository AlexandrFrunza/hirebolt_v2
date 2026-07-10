export type CaseStudy = {
  title: string;
  industry: string;
  teamSize: string;
  duration: string;
  focus: string;
  delivered: string;
  outcomes: string[];
};

export default function CaseStudyCard({
  title,
  industry,
  teamSize,
  duration,
  focus,
  delivered,
  outcomes,
}: CaseStudy) {
  return (
    <div className="flex w-[min(954px,90vw)] shrink-0 snap-start flex-col gap-8 rounded-2xl p-6 outline outline-2 -outline-offset-2 outline-lime-200/20 sm:p-8">
      <p className="text-2xl font-medium text-white">{title}</p>

      <div className="flex flex-col gap-4 rounded-lg bg-white/10 px-6 py-4 outline outline-1 -outline-offset-1 outline-white/5">
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          <p className="flex-1 text-base leading-6 font-medium">
            <span className="text-lime-200">Industry: </span>
            <span className="tracking-[-0.48px] text-[#D9D9D9]">{industry}</span>
          </p>
          <p className="flex-1 text-base leading-6 font-medium">
            <span className="text-lime-200">Team size: </span>
            <span className="tracking-[-0.48px] text-[#D9D9D9]">{teamSize}</span>
          </p>
        </div>
        <div className="h-px w-full bg-white/10" />
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          <p className="flex-1 text-base leading-6 font-medium">
            <span className="text-lime-200">Project duration: </span>
            <span className="tracking-[-0.48px] text-[#D9D9D9]">{duration}</span>
          </p>
          <p className="flex-1 text-base leading-6 font-medium">
            <span className="text-lime-200">Focus: </span>
            <span className="tracking-[-0.48px] text-[#D9D9D9]">{focus}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 sm:flex-row">
        <div className="flex flex-1 flex-col gap-3">
          <p className="text-base font-medium text-lime-200">
            What we delivered
          </p>
          <p className="text-base font-medium text-zinc-400">{delivered}</p>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <p className="text-base font-medium text-lime-200">Outcome</p>
          <div className="flex flex-col gap-3">
            {outcomes.map((outcome) => (
              <div key={outcome} className="flex items-stretch gap-3">
                <div className="w-1 shrink-0 rounded-[10px] bg-lime-200" />
                <p className="text-base font-medium text-zinc-400">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
