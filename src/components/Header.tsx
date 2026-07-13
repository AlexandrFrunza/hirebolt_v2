"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";
import Container from "./Container";
import Logo from "./Logo";

const navLinks = [
  { href: "/hire-ai-talent", label: "Hire AI talent" },
  { href: "/train-ai", label: "Train AI" },
  { href: "/build-ai", label: "Build AI" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral-900/95 shadow-[0px_2px_4px_-2px_rgba(16,24,40,0.06),0px_4px_8px_-2px_rgba(16,24,40,0.10)] backdrop-blur-[5px]">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 p-1 text-base transition-colors ${
                  isActive
                    ? "border-lime-200 font-bold text-white"
                    : "border-transparent font-medium text-zinc-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="https://www.index.dev/hire"
          className="hidden items-center gap-2 text-base font-medium text-white transition-colors hover:text-lime-200 md:flex"
        >
          Looking for a job?
          <ArrowRight className="h-5 w-5 text-lime-200" />
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="flex items-center justify-center p-2 text-neutral-400 md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </Container>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 top-16 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <div
            className="absolute inset-x-0 top-full z-50 flex flex-col items-center gap-16 bg-neutral-900 py-12 md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex w-full flex-col items-start gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <div
                    key={link.href}
                    className="flex w-full flex-col items-center justify-center gap-2"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`border-b-2 p-1 text-base transition-colors ${
                        isActive
                          ? "border-lime-200 font-bold text-white"
                          : "border-transparent font-medium text-zinc-300"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </div>
                );
              })}
            </div>
            <Link
              href="https://www.index.dev/hire"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 text-base font-medium text-white"
            >
              Looking for a job?
              <ArrowRight className="h-5 w-5 text-lime-200" />
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
