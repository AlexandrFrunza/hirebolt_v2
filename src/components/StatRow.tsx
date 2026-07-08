import StatCard from "./StatCard";

export type Stat = {
  value: string;
  label: string;
};

export default function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
