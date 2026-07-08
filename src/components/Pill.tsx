export default function Pill({ children }: { children: string }) {
  return (
    <span className="rounded-lg bg-white/10 px-3 py-2 text-sm leading-5 font-medium text-white outline outline-1 -outline-offset-1 outline-white/5 sm:px-4 sm:py-3 sm:text-base sm:leading-6">
      {children}
    </span>
  );
}
