export default function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-8">
      <p className="text-[32px] leading-9 font-medium text-lime-200">
        {children}
      </p>
      <div className="h-px flex-1 bg-lime-200/50" />
    </div>
  );
}
