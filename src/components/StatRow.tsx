import StatCard from "./StatCard";

export type Stat = {
  value: string;
  label: string;
};

export default function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
