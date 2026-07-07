import StatCard from "./StatCard";

export type Stat = {
  value: string;
  label: string;
};

export default function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="flex w-full flex-col items-center gap-6 sm:flex-row">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
