export default function SolutionStepCard({
  number,
  title,
  description,
  tag,
  className = "",
}: {
  number: number;
  title: string;
  description: string;
  tag: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full rounded-2xl bg-slate-800 p-8 outline outline-1 -outline-offset-1 outline-white/5 ${className}`}
    >
      <div className="flex h-full flex-col items-start gap-6">
        <span className="font-display text-6xl font-bold leading-[52px] text-lime-200">
          {number}.
        </span>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-2">
            <p className="font-display text-xl leading-7 font-bold text-white">
              {title}
            </p>
            <p className="text-base leading-6 font-normal text-slate-300">
              {description}
            </p>
          </div>
          <span className="inline-flex items-center rounded-lg bg-white/10 px-3 py-2 text-xs font-medium uppercase tracking-widest text-white">
            {tag}
          </span>
        </div>
      </div>
    </div>
  );
}
