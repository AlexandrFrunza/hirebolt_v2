"use client";

import { useEffect, useRef, useState } from "react";
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
const MAX_PAGE = testimonials.length - 2;
const DRAG_THRESHOLD = 80;

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<{ startX: number; dragging: boolean }>({
    startX: 0,
    dragging: false,
  });

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const updateWidth = () => setCardWidth((el.clientWidth - GAP) / 2);
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
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
      if (dragOffset < -DRAG_THRESHOLD && current < MAX_PAGE) return current + 1;
      if (dragOffset > DRAG_THRESHOLD && current > 0) return current - 1;
      return current;
    });
    setDragOffset(0);
  };

  const translate = -page * step + dragOffset;

  return (
    <section className="py-24">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex w-full flex-col gap-12 sm:hidden">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.role} {...testimonial} />
          ))}
        </div>

        <div
          ref={viewportRef}
          className="hidden w-full cursor-grab touch-pan-y overflow-hidden select-none active:cursor-grabbing sm:block"
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
          {Array.from({ length: MAX_PAGE + 1 }).map((_, i) => (
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
      </Container>
    </section>
  );
}
