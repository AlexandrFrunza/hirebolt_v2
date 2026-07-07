"use client";

import { useState } from "react";
import { everydayWorkTabs } from "@/data/everydayWorkTabs";

export default function EverydayWorkTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tab = everydayWorkTabs[activeIndex];

  return (
    <div className="w-full rounded-2xl bg-neutral-900 p-6 outline outline-2 -outline-offset-2 outline-lime-200/20 sm:p-12">
      <div className="flex flex-col gap-9">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
          {everydayWorkTabs.map((t, index) => (
            <button
              key={t.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`border-b-2 px-1 py-2 text-base font-semibold text-white transition-colors ${
                index === activeIndex
                  ? "border-lime-200"
                  : "border-transparent hover:border-white/30"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <p className="text-base font-medium text-zinc-300">
              {tab.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {tab.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-3xl bg-lime-200/10 px-3 py-1 text-sm font-medium text-lime-200 outline outline-1 -outline-offset-1 outline-lime-200/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-base font-medium text-lime-200">
                Challenges we solve
              </p>
              <div className="flex flex-col gap-3">
                {tab.challenges.map((challenge) => (
                  <div key={challenge} className="flex items-stretch gap-3">
                    <div className="w-1 shrink-0 rounded-[10px] bg-lime-200" />
                    <p className="text-base font-medium text-zinc-400">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-base font-medium text-lime-200">
                Our solution
              </p>
              <div className="flex flex-col gap-3">
                {tab.solutions.map((solution) => (
                  <div key={solution.label} className="flex items-stretch gap-3">
                    <div className="w-1 shrink-0 rounded-[10px] bg-lime-200" />
                    <p className="text-base font-medium text-zinc-400">
                      <span className="font-bold text-white">
                        {solution.label}
                      </span>{" "}
                      {solution.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
