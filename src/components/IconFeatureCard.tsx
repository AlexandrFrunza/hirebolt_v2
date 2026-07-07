import { ReactNode } from "react";

export default function IconFeatureCard({
  icon,
  title,
  description,
  layout = "col",
  className = "",
}: {
  icon: ReactNode;
  title: string;
  description: string;
  layout?: "row" | "col";
  className?: string;
}) {
  return (
    <div
      className={`flex-1 rounded-2xl bg-white/10 p-8 outline outline-1 -outline-offset-1 outline-white/5 ${className}`}
    >
      <div
        className={`flex ${layout === "row" ? "flex-row items-center gap-6" : "flex-col gap-6"}`}
      >
        <div
          className={`flex shrink-0 items-center justify-center text-lime-200 [&>img]:h-12 [&>img]:w-12 [&>img]:shrink-0 [&>img]:object-contain [&>svg]:h-12 [&>svg]:w-12 [&>svg]:shrink-0 ${
            layout === "row" ? "h-20 w-20" : "h-12 w-12"
          }`}
        >
          {icon}
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-display text-xl leading-6 font-bold text-white">
            {title}
          </p>
          <p className="text-base leading-6 text-[#D9D9D9]">{description}</p>
        </div>
      </div>
    </div>
  );
}
