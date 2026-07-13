"use client";

import { useState } from "react";
import type { ComplianceItem } from "./ComplianceCard";

export default function ComplianceMobileTabs({
  compliance,
  security,
}: {
  compliance: ComplianceItem[];
  security: ComplianceItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = [
    { label: "Compliance", items: compliance },
    { label: "Security", items: security },
  ];

  return (
    <div className="flex w-full flex-col items-start gap-6 overflow-hidden rounded-2xl bg-white/10 px-6 pt-2 pb-6 outline outline-1 -outline-offset-1 outline-white/5 sm:hidden">
      <div className="flex w-full flex-col items-center gap-8">
        <div className="flex w-full flex-col items-center gap-8">
          <div className="-mx-4 flex w-[calc(100%+2rem)] items-start gap-2">
            {tabs.map((tab, index) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex flex-1 flex-col items-center justify-center gap-6 overflow-hidden rounded-lg px-6 py-4 text-base leading-6 font-semibold outline outline-1 -outline-offset-1 ${
                  index === activeIndex
                    ? "bg-lime-200 text-slate-800 outline-lime-200"
                    : "bg-white/10 text-white outline-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex w-full flex-col items-start gap-6">
            {tabs[activeIndex].items.map((item) => (
              <div key={item.tag} className="flex flex-col items-start gap-2">
                <span className="inline-flex items-center rounded-lg bg-lime-200/10 px-3 py-2 text-xs leading-4 font-medium tracking-[1.5px] text-lime-200 uppercase outline outline-1 -outline-offset-1 outline-lime-200/5">
                  {item.tag}
                </span>
                <p className="text-base leading-6 font-medium text-zinc-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              type="button"
              aria-label={`Show ${tab.label}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-[10px] transition-colors ${
                index === activeIndex ? "bg-lime-200" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
