"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PillNav from "./PillNav";

const DOCK_THRESHOLD = 24;

export default function HomeFloatingNav() {
  const pathname = usePathname();
  const [isDocked, setIsDocked] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setIsDocked(false);
      return;
    }

    const onScroll = () => setIsDocked(window.scrollY > DOCK_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  if (!isHome) return null;

  return (
    <div
      className={`fixed inset-x-0 z-[60] hidden justify-center transition-all duration-300 md:flex ${
        isDocked ? "top-0 h-20 items-center" : "top-32"
      }`}
    >
      <PillNav size={isDocked ? "sm" : "lg"} />
    </div>
  );
}
