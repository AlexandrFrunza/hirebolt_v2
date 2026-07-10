import Link from "next/link";
import { ReactNode } from "react";

export default function Button({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-lime-200 bg-lime-200 px-6 py-3 text-base leading-6 font-medium text-slate-800 ${className}`}
    >
      {children}
    </Link>
  );
}
