import Container from "@/components/Container";
import CtaPanel from "@/components/CtaPanel";

export default function ClosingCta() {
  return (
    <section className="py-28">
      <Container>
        <CtaPanel
          title={
            <>
              <span className="text-white">Start searching. </span>
              <span className="text-lime-200">
                Or let us help you scope the right model.
              </span>
            </>
          }
          description="Whether you need engineers, AI delivery capacity, or expert evaluation, Hirebolt helps you move faster from need to execution."
          buttonLabel="Book a Call"
          buttonHref="https://www.index.dev/hire"
          showDecoration
          decorationDesktopClassName="right-[-36px] bottom-[-152px]"
        />
      </Container>
    </section>
  );
}
