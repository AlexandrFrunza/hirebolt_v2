import Container from "@/components/Container";
import EverydayWorkTabs from "@/components/EverydayWorkTabs";

export default function EverydayWorkSection() {
  return (
    <section className="pt-16 pb-12 sm:py-28">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-3xl leading-9 font-bold sm:text-5xl sm:leading-[56px]">
            <span className="text-white">Bring AI </span>
            <span className="text-lime-200">into everyday work</span>
          </h2>
          <p className="max-w-3xl text-base font-medium text-zinc-400">
            Whether you&apos;re adding AI to existing products, scaling
            pilots to production, or building AI-first products from
            scratch, we bring the engineering capacity and specialist depth
            you need.
          </p>
        </div>
        <EverydayWorkTabs />
      </Container>
    </section>
  );
}
