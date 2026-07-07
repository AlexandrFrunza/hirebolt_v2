import Image from "next/image";

export default function HowStepCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid w-full grid-cols-[auto_1fr] items-center gap-6 rounded-2xl bg-white/5 p-8">
      <div className="relative h-[100px] w-[101px] shrink-0">
        <Image src={icon} alt="" fill className="object-contain" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-display text-xl font-bold text-white">{title}</p>
        <p className="text-base text-white">{description}</p>
      </div>
    </div>
  );
}
