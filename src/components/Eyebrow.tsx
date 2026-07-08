export default function Eyebrow({ children }: { children: string }) {
  return (
    <span className="inline-block self-start rounded-lg bg-lime-200/10 px-3 py-2 text-xs leading-4 font-medium tracking-[2.88px] text-lime-200 uppercase outline outline-1 -outline-offset-1 outline-lime-200/5">
      {children}
    </span>
  );
}
