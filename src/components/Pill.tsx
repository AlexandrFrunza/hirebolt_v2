export default function Pill({ children }: { children: string }) {
  return (
    <span className="rounded-lg bg-white/10 px-4 py-3 text-base font-medium text-white outline outline-1 -outline-offset-1 outline-white/5">
      {children}
    </span>
  );
}
