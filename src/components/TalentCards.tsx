"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { talentDomains } from "@/data/talentDomains";

function EducationText({ education }: { education: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const institutionRef = useRef<HTMLSpanElement>(null);
  const [fits, setFits] = useState(true);
  const commaIndex = education.indexOf(", ");
  const degree = education.slice(0, commaIndex + 1);
  const institution = education.slice(commaIndex + 2);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const el = institutionRef.current;
    if (container && el) setFits(el.scrollWidth <= container.clientWidth - 10);
  }, [education]);

  if (commaIndex === -1) return <>{education}</>;

  if (!fits) return <>{education}</>;

  return (
    <span ref={containerRef} className="block">
      <span className="block">{degree}</span>
      <span ref={institutionRef} className="inline-block whitespace-nowrap">
        {institution}
      </span>
    </span>
  );
}

export default function TalentCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const domain = talentDomains[activeIndex];

  return (
    <div className="w-full rounded-2xl bg-white/10 p-6 outline outline-1 -outline-offset-1 outline-white/5 sm:p-12">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-wrap items-center gap-2">
            {talentDomains.map((d, index) => (
              <button
                key={d.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-lg px-3 py-2 text-xs leading-4 font-medium tracking-[1.92px] uppercase outline outline-1 -outline-offset-1 outline-white/5 transition-colors ${
                  index === activeIndex
                    ? "bg-white text-neutral-900"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
          <div className="flex w-[580px] flex-col items-center justify-center gap-2.5 rounded-lg bg-white/10 p-6 text-center text-base leading-6 font-medium text-white shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08),0px_8px_8px_-4px_rgba(16,24,40,0.03)] outline outline-1 -outline-offset-1 outline-white/5 lg:self-stretch">
            {domain.description}
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          {domain.profiles.map((profile) => (
            <div
              key={profile.name}
              className="flex-1 rounded-xl bg-black/20 p-6 outline outline-1 -outline-offset-1 outline-black/5"
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="font-display text-xl leading-6 font-bold text-lime-200">
                      {profile.name}
                    </p>
                    <p className="text-xl leading-6 font-medium text-white">
                      {profile.role}
                    </p>
                    <p className="text-base font-medium text-zinc-400">
                      <EducationText education={profile.education} />
                    </p>
                  </div>
                  <div className="h-px w-full bg-white/10" />
                  <div className="flex flex-wrap gap-1">
                    {profile.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-sm px-2 py-1 text-xs text-white outline outline-1 -outline-offset-1 outline-white/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-base font-medium text-zinc-300">
                  {profile.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
