import Image from "next/image";

export default function CheckPill({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-base leading-4 font-medium whitespace-nowrap text-white outline outline-1 -outline-offset-1 outline-white/5 ${className}`}
    >
      <Image
        src="/train-ai/check-24.svg"
        alt=""
        width={24}
        height={24}
        className="h-6 w-6 shrink-0"
      />
      {children}
    </span>
  );
}
