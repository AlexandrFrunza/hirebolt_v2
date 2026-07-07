export default function DomainCard({
  category,
  description,
  tags,
}: {
  category: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="flex w-full flex-1 basis-64 flex-col gap-5 rounded-2xl p-6 outline outline-2 -outline-offset-2 outline-lime-200/20 transition-colors duration-200 hover:outline-lime-200">

      <span className="inline-flex w-fit items-center rounded-sm bg-white/10 px-3 py-2 text-xs font-medium uppercase tracking-wider text-white outline outline-1 -outline-offset-1 outline-white/5">
        {category}
      </span>
      <p className="text-base font-medium text-zinc-400">{description}</p>
      <div className="mt-auto flex flex-wrap gap-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-3xl bg-lime-200/10 px-2 py-1 text-xs font-medium text-lime-200 outline outline-1 -outline-offset-1 outline-lime-200/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
