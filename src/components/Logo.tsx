import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/hirebolt-logo.png"
        alt="Hirebolt"
        width={344}
        height={88}
        className="h-11 w-auto"
        priority
      />
    </Link>
  );
}
