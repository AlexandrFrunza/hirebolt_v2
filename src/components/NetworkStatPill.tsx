import Image from "next/image";
import { forwardRef, type CSSProperties } from "react";

const NetworkStatPill = forwardRef<
  HTMLDivElement,
  { icon: string; label: string; style?: CSSProperties }
>(function NetworkStatPill({ icon, label, style }, ref) {
  return (
    <div
      ref={ref}
      style={style}
      className="flex w-full items-center justify-start gap-2.5 rounded-lg bg-white/10 px-4 py-3 text-base font-medium text-white outline outline-1 -outline-offset-1 outline-white/5 sm:w-auto sm:justify-center"
    >
      <Image src={icon} alt="" width={24} height={24} className="shrink-0" />
      <span className="flex-1 text-center">{label}</span>
    </div>
  );
});

export default NetworkStatPill;
