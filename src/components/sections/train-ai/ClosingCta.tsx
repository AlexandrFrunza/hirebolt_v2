import Container from "@/components/Container";
import CtaPanel from "@/components/CtaPanel";

export default function ClosingCta() {
  return (
    <section className="pt-12 pb-16 sm:pt-28 sm:pb-28">
      <Container>
        <CtaPanel
          title={
            <span className="text-lime-200">
              Train models, run evaluations, and build datasets.
            </span>
          }
          description="Hirebolt works with frontier labs and enterprises to turn research progress into practical intelligence, through training data, evals, and vetted talent."
          buttonLabel="Start a project"
          buttonHref="https://www.index.dev/hire"
          secondaryLabel="Talk to an expert"
          secondaryHref="https://www.index.dev/hire"
          mobileButtonLabel="Start a project"
          mobileSecondaryLabel="Talk to an expert"
          mobileSecondaryHref="https://www.index.dev/hire"
          showDecoration
        />
      </Container>
    </section>
  );
}
