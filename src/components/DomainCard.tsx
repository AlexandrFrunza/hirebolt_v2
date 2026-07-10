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
    <div className="flex h-[340px] w-[302px] flex-col gap-5 rounded-2xl p-6 outline outline-2 -outline-offset-2 outline-lime-200/20 transition-colors duration-200 hover:outline-lime-200">
      <span className="inline-flex w-fit items-center rounded-[4px] bg-white/10 px-3 py-2 text-xs leading-4 font-medium uppercase tracking-[1.5px] text-white outline outline-1 -outline-offset-1 outline-white/5">
        {category}
      </span>
      <p className="text-base leading-6 font-medium text-[#B9B9B9]">{description}</p>
      <div className="mt-auto flex flex-wrap gap-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[28px] bg-lime-200/10 px-2 py-1 text-xs leading-4 font-medium text-lime-200 outline outline-1 -outline-offset-1 outline-lime-200/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
