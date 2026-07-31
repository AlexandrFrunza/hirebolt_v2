"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/hire-ai-talent", label: "Hire AI talent" },
  { href: "/train-ai", label: "Train AI" },
  { href: "/build-ai", label: "Build AI" },
];

export default function PillNav({ size = "lg" }: { size?: "lg" | "sm" }) {
  const pathname = usePathname();
  const isLg = size === "lg";
  const activeFlags = navLinks.map((link) => pathname === link.href);

  return (
    <div
      className={`flex items-center rounded-[50px] bg-neutral-900 p-1 outline outline-1 -outline-offset-1 outline-custom-neutral-900 transition-all duration-300 ${
        isLg
          ? "shadow-[0px_25px_30px_0px_rgba(181,181,181,0.05)]"
          : ""
      }`}
    >
      {navLinks.map((link, index) => {
        const isActive = activeFlags[index];
        const hideDivider =
          index > 0 && (activeFlags[index - 1] || activeFlags[index]);

        return (
          <div key={link.href} className="contents">
            {index > 0 && !hideDivider && (
              <span className="h-6 w-px bg-custom-neutral-900" aria-hidden />
            )}
            <Link
              href={link.href}
              className={`relative flex ${isLg ? "px-7 py-3" : "px-5 py-1"}`}
            >
              {isActive && (
                <span
                  className="absolute inset-0 rounded-[50px] bg-custom-neutral-900"
                  aria-hidden
                />
              )}
              <span className="relative flex items-center justify-center gap-2.5 p-1">
                <span
                  className={`text-base font-medium transition-colors ${
                    isActive
                      ? "text-lime-200"
                      : "text-[#D9D9D9] hover:text-white"
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
