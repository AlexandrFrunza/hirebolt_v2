import Image from "next/image";
import Container from "@/components/Container";

const partnerLogos = [
  { src: "/hire-ai-talent/y-combinator-logo.svg", alt: "Y Combinator" },
  {
    src: "/hire-ai-talent/entrepreneurs-first-logo.svg",
    alt: "Entrepreneurs First",
  },
  {
    src: "/hire-ai-talent/7percent-ventures-logo.svg",
    alt: "7percent Ventures",
  },
  { src: "/hire-ai-talent/notion-logo.svg", alt: "Notion" },
  { src: "/hire-ai-talent/helium3-logo.svg", alt: "Helium-3 Ventures" },
];

export default function LogoStrip() {
  return (
    <section className="py-12 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-8 sm:hidden">
          {partnerLogos.map((logo) => (
            <div key={logo.alt} className="relative h-16 w-[179px]">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="hidden w-full flex-wrap items-center justify-between gap-6 sm:flex">
          {partnerLogos.map((logo) => (
            <div key={logo.alt} className="relative h-16 w-[179px]">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
