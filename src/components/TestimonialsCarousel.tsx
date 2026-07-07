"use client";

import { useState } from "react";
import HireTestimonial from "./HireTestimonial";

type TestimonialData = {
  quoteIcon: string;
  quote: string;
  author: string;
  role: string;
};

const slides: TestimonialData[][] = [
  [
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
  ],
  [
    {
      quoteIcon: "/hire-ai-talent/quote-mark-2.png",
      quote:
        "Finding talent for something as specific as quantum systems is hard. The developers we found through the Hirebolt network brought exactly the right skills. Their work has been essential in moving our most complex systems forward.",
      author: "Robert Bedington",
      role: "CTO, SpeQtral",
    },
  ],
];

export default function TestimonialsCarousel() {
  const [slide, setSlide] = useState(0);

  return (
    <div className="flex flex-col items-center gap-12">
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
