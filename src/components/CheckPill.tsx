import { Check } from "lucide-react";

export default function CheckPill({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-base font-medium text-white outline outline-1 -outline-offset-1 outline-white/5">
      <Check className="h-4 w-4 shrink-0 text-lime-200" />
      {children}
    </span>
  );
}
