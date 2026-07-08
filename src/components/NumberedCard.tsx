export default function NumberedCard({
  number,
  title,
  description,
  className = "",
}: {
  number: number;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-slate-800 p-8 outline outline-1 -outline-offset-1 outline-white/5 ${className}`}
    >
      <div className="flex flex-col items-start gap-6 sm:flex-row">
        <span className="w-[52px] shrink-0 font-display text-[56px] leading-[52px] font-bold text-lime-200 sm:w-auto sm:text-6xl">
          {number}.
        </span>
        <div className="flex flex-col gap-2">
          <p className="font-display text-xl leading-7 font-bold text-white sm:leading-6">
            {title}
          </p>
          <p className="text-base leading-6 text-[#BECAD2] sm:text-slate-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
