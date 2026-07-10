export type ComplianceItem = {
  tag: string;
  description: string;
};

export default function ComplianceCard({
  title,
  items,
}: {
  title: string;
  items: ComplianceItem[];
}) {
  return (
    <div className="flex w-[627px] flex-col items-center gap-6 rounded-2xl bg-white/10 p-6 outline outline-1 -outline-offset-1 outline-white/5">
      <p className="text-center font-display text-xl leading-7 font-bold text-white">
        {title}
      </p>
      <div className="flex w-full flex-col gap-6 rounded-lg bg-black/10 p-6 outline outline-1 -outline-offset-1 outline-black/5">
        {items.map((item) => (
          <div key={item.tag} className="flex flex-col items-start gap-2">
            <span className="inline-flex items-center rounded-lg bg-lime-200/10 px-3 py-2 text-xs leading-4 font-medium tracking-[1.5px] text-lime-200 uppercase outline outline-1 -outline-offset-1 outline-white/5">
              {item.tag}
            </span>
            <p className="text-base font-medium text-zinc-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
