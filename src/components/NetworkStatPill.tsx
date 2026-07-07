import Image from "next/image";

export default function NetworkStatPill({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-white/5 px-4 py-3 text-base font-medium text-white">
      <Image src={icon} alt="" width={24} height={24} />
      <span>{label}</span>
    </div>
  );
}
