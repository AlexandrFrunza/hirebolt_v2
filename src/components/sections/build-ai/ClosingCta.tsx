import Container from "@/components/Container";
import CtaPanel from "@/components/CtaPanel";

export default function ClosingCta() {
  return (
    <section className="py-28">
      <Container>
        <CtaPanel
          title={
            <span className="text-lime-200">Have an AI project in mind?</span>
          }
          description="Partner with Hirebolt to scale your development capacity, build resilient AI integrations, and ship secure AI products."
          buttonLabel="Start a project"
          buttonHref="https://www.index.dev/hire"
          secondaryLabel="Talk to an expert"
          secondaryHref="https://www.index.dev/hire"
          showDecoration
          decorationDesktopClassName="right-[-44px] bottom-[-152px]"
        />
      </Container>
    </section>
  );
}
