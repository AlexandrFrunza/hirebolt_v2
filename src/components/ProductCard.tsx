export default function ProductCard({
  category,
  description,
  featured = false,
}: {
  category: string;
  description: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`flex w-full flex-1 basis-72 flex-col gap-5 rounded-2xl p-6 outline outline-2 -outline-offset-2 ${
        featured ? "outline-lime-200" : "outline-lime-200/20"
      }`}
    >
      <span className="inline-flex w-fit items-center rounded-sm bg-white/10 px-3 py-2 text-xs font-medium uppercase tracking-wider text-white outline outline-1 -outline-offset-1 outline-white/5">
        {category}
      </span>
      <p className="text-base font-medium text-zinc-300">{description}</p>
    </div>
  );
}
