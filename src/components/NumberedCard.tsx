export default function NumberedCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-800 p-8 outline outline-1 -outline-offset-1 outline-white/5">
      <div className="flex items-start gap-6">
        <span className="font-display text-6xl font-bold leading-[52px] text-lime-200">
          {number}.
        </span>
        <div className="flex flex-col gap-2">
          <p className="font-display text-xl font-bold text-white">
            {title}
          </p>
          <p className="text-base text-slate-300">{description}</p>
        </div>
      </div>
    </div>
  );
}
