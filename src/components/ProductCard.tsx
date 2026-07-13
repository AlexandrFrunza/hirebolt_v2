export default function ProductCard({
  category,
  description,
  className = "",
}: {
  category: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`flex w-full flex-1 basis-96 flex-col gap-5 rounded-2xl p-6 outline outline-2 -outline-offset-2 outline-lime-200/20 transition-colors duration-200 hover:outline-lime-200 ${className}`}
    >
      <span className="inline-flex w-fit items-center rounded-[4px] bg-white/10 px-3 py-2 text-xs leading-4 font-medium uppercase tracking-wider text-white outline outline-1 -outline-offset-1 outline-white/5">
        {category}
      </span>
      <p className="text-base leading-6 font-medium text-zinc-300">
        {description}
      </p>
    </div>
  );
}
