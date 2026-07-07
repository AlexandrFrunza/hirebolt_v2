import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1 text-base font-medium text-white transition-colors hover:text-lime-200 ${className}`}
    >
      {children}
      <ChevronRight className="h-4 w-4" />
    </Link>
  );
}
