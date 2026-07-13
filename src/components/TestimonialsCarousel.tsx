"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import HireTestimonial from "./HireTestimonial";

type TestimonialData = {
  quoteIcon: string;
  quote: string;
  author: string;
  role: string;
};

const allTestimonials: TestimonialData[] = [
  {
    quoteIcon: "/hire-ai-talent/quote-mark-1.png",
    quote:
      "The engineers we brought in through Hirebolt and Index.dev don't feel like outside help. They joined standup, pushed code, and cared about the product. From day one they operated like part of the core team.",
    author: "Becca Dalton",
    role: "HR Advisor, Poq",
  },
  {
    quoteIcon: "/hire-ai-talent/quote-mark-2.png",
    quote:
      "Usually, hiring is about filtering out the wrong people. With Hirebolt and the Index.dev network, it was the opposite—we had great candidates within days and the hard part was simply choosing between the best of them.",
    author: "Erik",
    role: "CEO, Boundaryless",
  },
  {
    quoteIcon: "/hire-ai-talent/quote-mark-2.png",
    quote:
      "Finding talent for something as specific as quantum systems is hard. The developers we found through the Hirebolt network brought exactly the right skills. Their work has been essential in moving our most complex systems forward.",
    author: "Robert Bedington",
    role: "CTO, SpeQtral",
  },
];

const slides: TestimonialData[][] = [
  [allTestimonials[0], allTestimonials[1]],
  [allTestimonials[2]],
];

function MobileTestimonialCard({ quoteIcon, quote, author, role }: TestimonialData) {
  return (
    <div className="flex w-full shrink-0 snap-start flex-col items-start bg-[#151515] px-6 py-12">
      <Image src={quoteIcon} alt="" width={48} height={48} className="h-12 w-12 opacity-30" />
      <p className="mt-6 text-sm leading-6 font-normal text-zinc-400">{quote}</p>
      <p className="mt-12 text-xs leading-4 font-medium tracking-[1.92px] text-lime-200 uppercase">
        {author}
      </p>
      <p className="mt-1 text-sm leading-5 font-normal text-white">{role}</p>
    </div>
  );
}

function MobileTestimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    const ratio = scrollLeft / (scrollWidth - clientWidth || 1);
    setActiveIndex(Math.round(ratio * (allTestimonials.length - 1)));
  };

  return (
    <div className="flex w-full flex-col items-center gap-8 sm:hidden">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="-mx-6 flex w-[calc(100%+3rem)] snap-x snap-mandatory gap-0 overflow-x-auto [&::-webkit-scrollbar]:hidden"
      >
        {allTestimonials.map((t) => (
          <MobileTestimonialCard key={t.author} {...t} />
        ))}
      </div>
      <div className="flex gap-3">
        {allTestimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show testimonial ${index + 1}`}
            onClick={() => scrollToIndex(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              activeIndex === index ? "bg-lime-200" : "bg-white/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function DesktopTestimonials() {
  const [slide, setSlide] = useState(0);

  return (
    <div className="hidden flex-col items-center gap-12 sm:flex">
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${slide * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((testimonials, index) => (
            <div
              key={index}
              className="flex justify-center gap-12"
              style={{ width: `${100 / slides.length}%` }}
            >
              {testimonials.map((t) => (
                <HireTestimonial key={t.author} {...t} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show testimonial slide ${index + 1}`}
            onClick={() => setSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              slide === index ? "bg-lime-200" : "bg-white/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsCarousel() {
  return (
    <>
      <MobileTestimonials />
      <DesktopTestimonials />
    </>
  );
}
