export default function TagCard({
  tag,
  description,
  className = "",
}: {
  tag: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl p-6 outline outline-2 -outline-offset-2 outline-lime-200 ${className}`}
    >
      <div className="flex flex-col gap-3">
        <span className="inline-flex w-fit items-center rounded-lg bg-white/10 px-3 py-2 text-xs leading-4 font-medium tracking-[1.92px] text-white uppercase outline outline-1 -outline-offset-1 outline-white/5">
          {tag}
        </span>
        <p className="text-base font-medium text-zinc-300">{description}</p>
      </div>
    </div>
  );
}
