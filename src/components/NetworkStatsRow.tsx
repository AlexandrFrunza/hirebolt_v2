"use client";

import { useLayoutEffect, useRef, useState } from "react";
import NetworkStatPill from "./NetworkStatPill";

export default function NetworkStatsRow({
  stats,
}: {
  stats: { icon: string; label: string }[];
}) {
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [maxHeight, setMaxHeight] = useState<number>();

  useLayoutEffect(() => {
    const recompute = () => {
      setMaxHeight(undefined);
    };
    recompute();
    window.addEventListener("resize", recompute);
    return () => window.removeEventListener("resize", recompute);
  }, []);

  useLayoutEffect(() => {
    if (maxHeight !== undefined) return;
    const heights = pillRefs.current.map((el) => el?.offsetHeight ?? 0);
    setMaxHeight(Math.max(...heights));
  }, [maxHeight]);

  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
      {stats.map((stat, index) => (
        <NetworkStatPill
          key={stat.label}
          {...stat}
          ref={(el) => {
            pillRefs.current[index] = el;
          }}
          style={maxHeight ? { height: maxHeight } : undefined}
        />
      ))}
    </div>
  );
}
