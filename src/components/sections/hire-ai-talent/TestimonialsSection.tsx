import Container from "@/components/Container";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-28">
      <Container>
        <TestimonialsCarousel />
      </Container>
    </section>
  );
}
