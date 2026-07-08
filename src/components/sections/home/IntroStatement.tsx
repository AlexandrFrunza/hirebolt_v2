import Image from "next/image";
import Container from "@/components/Container";

export default function IntroStatement() {
  return (
    <section className="pt-8 pb-16 sm:py-24">
      <Container className="flex flex-col items-center gap-12 sm:block">
        <Image
          src="/home/home_v1_8.svg"
          alt=""
          width={192}
          height={28}
          className="h-7 w-48 sm:hidden"
        />
        <p className="text-center text-2xl leading-9 font-medium sm:text-3xl">
          <span className="text-white">
            From individual engineers and complete development teams to
            managed data workflows for frontier model research,{" "}
          </span>
          <span className="text-lime-200">
            Hirebolt provides the exact technical capacity your project
            requires.
          </span>
        </p>
        <Image
          src="/home/home_v1_8.svg"
          alt=""
          width={192}
          height={28}
          className="h-7 w-48 sm:hidden"
        />
      </Container>
    </section>
  );
}
