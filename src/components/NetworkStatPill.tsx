import Image from "next/image";

export default function NetworkStatPill({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-lg bg-white/10 px-4 py-3 text-base font-medium whitespace-nowrap text-white outline outline-1 -outline-offset-1 outline-white/5">
      <Image src={icon} alt="" width={24} height={24} />
      <span>{label}</span>
    </div>
  );
}
