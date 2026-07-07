import Container from "@/components/Container";
import CtaPanel from "@/components/CtaPanel";

export default function ClosingCta() {
  return (
    <section className="py-28">
      <Container>
        <CtaPanel
          title={
            <span className="text-lime-200">
              Train models, run evaluations, and build datasets.
            </span>
          }
          description="Hirebolt works with frontier labs and enterprises to turn research progress into practical intelligence, through training data, evals, and vetted talent."
          buttonLabel="Start a project"
          buttonHref="/contact"
          secondaryLabel="Talk to an expert"
          secondaryHref="/contact"
        />
      </Container>
    </section>
  );
}
