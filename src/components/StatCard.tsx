export default function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-none flex-col items-center gap-2 rounded-2xl bg-white/10 px-6 py-8 text-center outline outline-1 -outline-offset-1 outline-white/5 sm:flex-1 sm:basis-72">
      <p className="text-3xl font-medium text-lime-200">{value}</p>
      <p className="text-base leading-4 font-medium text-white">{label}</p>
    </div>
  );
}
