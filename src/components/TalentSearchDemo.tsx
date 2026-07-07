"use client";

import { useEffect, useState } from "react";
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
    <div className="flex w-full flex-col items-center gap-8 rounded-[32px] bg-white/10 p-8 lg:flex-row lg:items-center lg:justify-center">
      <div className="flex w-full max-w-[408px] flex-col gap-4">
        <h2 className="font-display text-3xl font-medium leading-9 text-white">
          Explore AI Talent
          <br />
          Instantly
        </h2>
        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium uppercase tracking-widest text-white">
            Filters
          </p>
          <div className="flex flex-wrap gap-1.5">
            {filterLabels.map((label) => {
              const isActive = scene.activeFilters.includes(label);
              return (
                <div
                  key={label}
                  className="inline-flex items-center gap-2.5 rounded-lg bg-white/10 py-3 pl-3 pr-4 text-base font-medium text-white"
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                      isActive
                        ? "border-lime-200 bg-lime-200"
                        : "border-white/40 bg-transparent"
                    }`}
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
            className={`flex w-full flex-1 flex-col gap-0 rounded-xl bg-white/10 p-6 outline outline-2 -outline-offset-2 outline-white/10 transition-all duration-300 ${
              visible ? "opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            <p className="font-display text-xl font-bold text-lime-200">
              {profile.title}
            </p>
            <p className="mt-2 flex justify-between gap-4 text-base text-white/60">
              <span>
                <span className="text-white/60">{profile.years} </span>
                <span className="text-white">experience</span>
              </span>
              <span>
                <span className="text-white/60">UTC overlap: </span>
                <span className="text-white">{profile.overlap}</span>
              </span>
            </p>
            <div className="mt-4 flex flex-wrap gap-1 border-t-2 border-white/10 pt-4">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg px-2 py-1 text-base text-white outline outline-1 -outline-offset-1 outline-white/50"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-4 text-base text-white">{profile.availability}</p>
            <div className="mt-4 flex gap-2">
              <a
                href="/contact"
                className="flex flex-1 items-center justify-center rounded-lg bg-lime-200 px-4 py-3 text-center text-base font-bold text-neutral-900"
              >
                View profile
              </a>
              <a
                href="/contact"
                className="flex flex-1 items-center justify-center rounded-lg bg-white px-4 py-3 text-center text-base font-bold text-black"
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
