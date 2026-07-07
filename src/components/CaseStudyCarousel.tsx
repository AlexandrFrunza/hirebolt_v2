"use client";

import { useRef, useState } from "react";
import CaseStudyCard from "./CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudyCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    const ratio = scrollLeft / (scrollWidth - clientWidth || 1);
    setActiveIndex(Math.round(ratio * (caseStudies.length - 1)));
  };

  return (
    <div className="flex w-full min-w-0 flex-col items-center gap-8">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex w-full min-w-0 snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
      >
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.title} {...study} />
        ))}
      </div>
      <div className="flex -rotate-0 gap-2">
        {caseStudies.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show case study ${index + 1}`}
            onClick={() => scrollToIndex(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              activeIndex === index ? "bg-lime-200" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
