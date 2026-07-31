"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/hire-ai-talent", label: "Hire AI talent" },
  { href: "/train-ai", label: "Train AI" },
  { href: "/build-ai", label: "Build AI" },
];

export default function PillNav({ size = "lg" }: { size?: "lg" | "sm" }) {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isLg = size === "lg";
  const activeFlags = navLinks.map((link) => pathname === link.href);
  const highlightFlags = navLinks.map((_, index) =>
    hoveredIndex !== null ? hoveredIndex === index : activeFlags[index]
  );

  return (
    <div
      className={`flex items-center rounded-[50px] bg-neutral-900 p-1 outline outline-1 -outline-offset-1 outline-custom-neutral-900 transition-all duration-300 ${
        isLg
          ? "shadow-[0px_25px_30px_0px_rgba(181,181,181,0.05)]"
          : ""
      }`}
    >
      {navLinks.map((link, index) => {
        const isHighlighted = highlightFlags[index];
        const blendDivider =
          index > 0 && (highlightFlags[index - 1] || highlightFlags[index]);

        return (
          <div key={link.href} className="contents">
            {index > 0 && (
              <span
                className={`h-6 w-px transition-colors duration-200 ${
                  blendDivider ? "bg-neutral-900" : "bg-custom-neutral-900"
                }`}
                aria-hidden
              />
            )}
            <Link
              href={link.href}
              className={`relative flex ${isLg ? "px-7 py-3" : "px-5 py-1"}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span
                className={`absolute inset-0 rounded-[50px] bg-custom-neutral-900 transition-opacity duration-200 ${
                  isHighlighted ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden
              />
              <span className="relative flex items-center justify-center gap-2.5 p-1">
                <span
                  className={`text-base font-medium transition-colors ${
                    isHighlighted ? "text-lime-200" : "text-[#D9D9D9]"
                  }`}
                >
                  {link.label}
                </span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
