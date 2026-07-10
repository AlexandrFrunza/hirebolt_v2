import Container from "@/components/Container";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";

export default function WorkDoneSection() {
  return (
    <section className="pt-28 pb-24">
      <Container className="flex flex-col items-center gap-12">
        <div className="max-w-3xl self-start">
          <h2 className="font-display text-5xl font-bold leading-[56px]">
            <span className="text-white">Work </span>
            <span className="text-lime-200">we&apos;ve done</span>
          </h2>
          <p className="mt-4 text-base font-medium text-zinc-400">
            See how AI labs use Hirebolt for technical evaluation,
            multilingual review, and scalable training.
          </p>
        </div>
      </Container>
      <div className="mt-16 w-full pl-[max(24px,calc((100vw-1344px)/2+24px))] lg:pl-[max(32px,calc((100vw-1344px)/2+32px))]">
        <CaseStudyCarousel />
      </div>
    </section>
  );
}
