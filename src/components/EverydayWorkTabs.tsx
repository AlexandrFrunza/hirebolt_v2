"use client";

import { useRef, useState } from "react";
import { everydayWorkTabs, type EverydayWorkTab } from "@/data/everydayWorkTabs";

function TabPanel({ tab }: { tab: EverydayWorkTab }) {
  return (
    <>
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
          <p className="text-base font-medium text-lime-200">Our solution</p>
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
    </>
  );
}

export default function EverydayWorkTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    setActiveIndex(index);
    const track = trackRef.current;
    if (!track) return;
    const panel = track.children[index] as HTMLElement | undefined;
    panel?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    const ratio = scrollLeft / (scrollWidth - clientWidth || 1);
    setActiveIndex(Math.round(ratio * (everydayWorkTabs.length - 1)));
  };

  return (
    <div className="w-full rounded-2xl bg-neutral-900 p-6 outline outline-2 -outline-offset-2 outline-lime-200/20 sm:p-12">
      <div className="flex flex-col gap-9">
        <div className="flex flex-col items-center gap-6 sm:hidden">
          {everydayWorkTabs.map((t, index) => (
            <button
              key={t.label}
              type="button"
              onClick={() => scrollToIndex(index)}
              className={`border-b-2 p-1 text-base leading-6 tracking-[-0.2px] transition-colors ${
                index === activeIndex
                  ? "border-lime-200 font-semibold text-white"
                  : "border-transparent font-medium text-zinc-300"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="hidden flex-wrap justify-center gap-6 sm:flex sm:gap-12">
          {everydayWorkTabs.map((t, index) => (
            <button
              key={t.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`border-b-2 px-1 py-2 text-base leading-6 font-semibold tracking-[-0.2px] text-white transition-colors ${
                index === activeIndex
                  ? "border-lime-200"
                  : "border-transparent hover:border-white/30"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:hidden [&::-webkit-scrollbar]:hidden"
        >
          {everydayWorkTabs.map((tab) => (
            <div
              key={tab.label}
              className="flex w-full shrink-0 snap-start flex-col gap-12"
            >
              <TabPanel tab={tab} />
            </div>
          ))}
        </div>

        <div className="hidden sm:grid sm:grid-cols-1">
          {everydayWorkTabs.map((tab, index) => (
            <div
              key={tab.label}
              className={`col-start-1 row-start-1 flex flex-col gap-12 ${
                index === activeIndex
                  ? "visible"
                  : "invisible pointer-events-none"
              }`}
              aria-hidden={index !== activeIndex}
            >
              <TabPanel tab={tab} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-1.5 sm:hidden">
          {everydayWorkTabs.map((t, index) => (
            <button
              key={t.label}
              type="button"
              aria-label={`Show ${t.label}`}
              onClick={() => scrollToIndex(index)}
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
