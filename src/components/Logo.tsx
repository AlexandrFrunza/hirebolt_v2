import Link from "next/link";
import Image from "next/image";

export default function Logo({ className = "h-8 w-auto md:h-11" }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/hirebolt-logo.png"
        alt="Hirebolt"
        width={268}
        height={88}
        className={className}
        priority
      />
    </Link>
  );
}
