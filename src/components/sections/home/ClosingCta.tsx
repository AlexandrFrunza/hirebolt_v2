import Container from "@/components/Container";
import CtaPanel from "@/components/CtaPanel";

export default function ClosingCta() {
  return (
    <section className="py-28">
      <Container>
        <CtaPanel
          title={
            <>
              <span className="text-white">
                Hire AI talent or train AI models. <br />
              </span>
              <span className="text-lime-200">
                Hirebolt makes both simple.
              </span>
            </>
          }
          description="Partner with Hirebolt to accelerate frontier research, scale your post-training datasets, or bring in specialized AI-native engineering talent."
          buttonLabel="Get started"
          showDecoration
        />
      </Container>
    </section>
  );
}
