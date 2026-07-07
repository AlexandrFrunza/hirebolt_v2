export default function SolutionStepCard({
  number,
  title,
  description,
  tag,
}: {
  number: number;
  title: string;
  description: string;
  tag: string;
}) {
  return (
    <div className="flex-1 basis-[45%] min-w-[320px] rounded-2xl bg-slate-800 p-8">
      <div className="flex items-start gap-6">
        <span className="font-display text-6xl font-bold leading-[52px] text-lime-200">
          {number}.
        </span>
        <div className="flex flex-col items-start gap-4">
          <p className="font-display text-xl font-bold text-white">
            {title}
          </p>
          <p className="text-base text-white">{description}</p>
          <span className="inline-flex items-center rounded-lg bg-white/10 px-3 py-2 text-xs font-medium uppercase tracking-widest text-white">
            {tag}
          </span>
        </div>
      </div>
    </div>
  );
}
