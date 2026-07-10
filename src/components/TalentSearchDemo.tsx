"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { demoScenes, filterLabels } from "@/data/talentDemoScenes";

export default function TalentSearchDemo() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setSceneIndex((i) => (i + 1) % demoScenes.length);
        setVisible(true);
      }, 220);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scene = demoScenes[sceneIndex];

  return (
    <div className="flex w-full flex-col items-stretch gap-8 rounded-[32px] bg-white/10 p-8 outline outline-1 -outline-offset-1 outline-white/5 lg:flex-row lg:items-stretch lg:justify-center">
      <div className="flex w-full max-w-[408px] flex-col justify-between gap-4">
        <h2 className="text-[32px] leading-9 font-medium text-white">
          Explore AI Talent
          <br />
          Instantly
        </h2>
        <div className="flex flex-col gap-4">
          <p className="text-xs leading-4 font-medium tracking-[1.92px] text-white uppercase">
            Filters
          </p>
          <div className="flex flex-wrap gap-1.5">
            {filterLabels.map((label) => {
              const isActive = scene.activeFilters.includes(label);
              return (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-lg bg-white/5 py-3 pr-4 pl-3 text-base leading-4 font-medium text-white outline outline-1 -outline-offset-1 outline-white/5"
                >
                  <Image
                    src={
                      isActive
                        ? "/hire-ai-talent/checked.svg"
                        : "/hire-ai-talent/unchecked.svg"
                    }
                    alt=""
                    width={24}
                    height={24}
                    className="size-6 shrink-0"
                  />
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[798px] flex-col gap-6 sm:flex-row">
        {scene.profiles.map((profile, i) => (
          <article
            key={i}
            className={`flex w-[387px] shrink-0 flex-col gap-0 rounded-xl bg-white/10 p-6 outline outline-1 -outline-offset-1 outline-white/5 transition-all duration-300 ${
              visible ? "opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            <p className="font-display text-xl leading-6 font-bold text-lime-200">
              {profile.title}
            </p>
            <p className="mt-2 flex justify-between gap-4 text-base leading-6 font-normal">
              <span>
                <span className="text-[#ABABAB]">{profile.years} </span>
                <span className="text-white">experience</span>
              </span>
              <span>
                <span className="text-[#ABABAB]">UTC overlap: </span>
                <span className="text-white">{profile.overlap}</span>
              </span>
            </p>
            <div className="mt-4 flex flex-wrap gap-1 border-t-2 border-white/10 pt-4">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg px-2 py-1 text-base leading-6 font-normal text-white outline outline-1 -outline-offset-1 outline-white/50"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-4 text-base leading-6 font-normal text-white">
              {profile.availability}
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href="/contact"
                className="flex w-[165.5px] shrink-0 items-center justify-center rounded-lg bg-lime-200 px-4 py-3 text-center text-base leading-6 font-bold text-neutral-900"
              >
                View profile
              </a>
              <a
                href="/contact"
                className="flex w-[165.5px] shrink-0 items-center justify-center rounded-lg bg-white px-4 py-3 text-center text-base leading-6 font-bold text-black"
              >
                Shortlist
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
