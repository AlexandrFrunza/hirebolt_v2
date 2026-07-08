"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  {
    quote:
      "Optimized pipelines and caught a critical distributed training leak.",
    body: "The machine learning engineers we brought on optimized our training infrastructure. They identified an elusive memory leak in our distributed setup that had slowed down our engineering velocity for weeks.",
    role: "VP of Engineering",
    company: "Robotics & Embodied AI Lab",
  },
  {
    quote: "Accelerated product deployment with senior AI full-stack talent.",
    body: "Instead of spending months filtering resumes, we had vetted candidates within days. The developers joined our standups, pushed code instantly, and possessed the exact background in RAG and vector databases we needed to ship.",
    role: "Director of Engineering",
    company: "Enterprise Software Company",
  },
  {
    quote:
      "Identified critical gaps our internal benchmarks completely missed.",
    body: "Hirebolt brought in specialized domain evaluators who quickly surface edge cases in multi-turn reasoning. The quality and depth of their technical review allowed us to achieve higher model verification standards before release.",
    role: "Head of Model Evaluation",
    company: "AI Research Lab",
  },
];

const GAP = 24;
const DRAG_THRESHOLD = 80;

function MobileTestimonialCard({
  quote,
  body,
  role,
  company,
}: {
  quote: string;
  body: string;
  role: string;
  company: string;
}) {
  return (
    <div className="flex w-full shrink-0 snap-start flex-col items-start bg-[#151515] px-6 py-12">
      <Image
        src="/home/quotes.svg"
        alt=""
        width={48}
        height={48}
        className="h-12 w-12"
      />
      <p className="mt-6 text-2xl leading-8 font-medium text-white">
        {quote}
      </p>
      <p className="mt-3 text-sm leading-6 font-normal text-[#B9B9B9]">
        {body}
      </p>
      <p className="mt-12 text-xs leading-4 font-medium tracking-[1.92px] text-lime-200 uppercase">
        {role}
      </p>
      <p className="mt-1 text-sm leading-5 font-normal text-white">
        {company}
      </p>
    </div>
  );
}

function MobileTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.children[0]?.getBoundingClientRect().width ?? 1;
    const index = Math.round(el.scrollLeft / (cardWidth + GAP));
    setActiveIndex(Math.max(0, Math.min(testimonials.length - 1, index)));
  };

  return (
    <div className="flex w-full flex-col items-center sm:hidden">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="-mx-6 flex w-[calc(100%+3rem)] snap-x snap-mandatory gap-0 overflow-x-auto [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((testimonial) => (
          <MobileTestimonialCard key={testimonial.role} {...testimonial} />
        ))}
      </div>
      <div className="flex items-center gap-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === activeIndex ? "bg-lime-200" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function DesktopTestimonials() {
  const [page, setPage] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<{ startX: number; dragging: boolean }>({
    startX: 0,
    dragging: false,
  });

  const maxPage = testimonials.length - 2;

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => setCardWidth((el.clientWidth - GAP) / 2);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const step = cardWidth + GAP;

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragState.current = { startX: e.clientX, dragging: true };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.dragging) return;
    setDragOffset(e.clientX - dragState.current.startX);
  };

  const endDrag = () => {
    if (!dragState.current.dragging) return;
    dragState.current.dragging = false;
    setPage((current) => {
      if (dragOffset < -DRAG_THRESHOLD && current < maxPage) return current + 1;
      if (dragOffset > DRAG_THRESHOLD && current > 0) return current - 1;
      return current;
    });
    setDragOffset(0);
  };

  const translate = -page * step + dragOffset;

  return (
    <div className="hidden w-full flex-col items-center gap-12 sm:flex">
      <div
        ref={viewportRef}
        className="w-full cursor-grab touch-pan-y overflow-hidden select-none active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <div
          className="flex gap-6"
          style={{
            transform: `translateX(${translate}px)`,
            transition: dragState.current.dragging
              ? "none"
              : "transform 300ms ease-out",
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.role}
              className="shrink-0"
              style={{ width: cardWidth }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {Array.from({ length: maxPage + 1 }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setPage(i)}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === page ? "bg-lime-200" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-24">
      <Container className="flex flex-col items-center">
        <MobileTestimonials />
        <DesktopTestimonials />
      </Container>
    </section>
  );
}
