"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import Logo from "./Logo";

const navLinks = [
  { href: "/hire-ai-talent", label: "Hire AI talent" },
  { href: "/train-ai", label: "Train AI" },
  { href: "/build-ai", label: "Build AI" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur-[5px]">
      <Container className="flex h-20 items-center justify-between">
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
          href="/careers"
          className="flex items-center gap-2 text-base font-medium text-white transition-colors hover:text-lime-200"
        >
          Looking for a job?
          <ArrowRight className="h-5 w-5 text-lime-200" />
        </Link>
      </Container>
    </header>
  );
}
