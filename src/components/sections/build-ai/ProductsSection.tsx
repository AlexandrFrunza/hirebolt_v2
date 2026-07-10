import Container from "@/components/Container";
import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    category: "AI agents & copilots",
    description:
      "Develop autonomous assistants that handle complex multi-step reasoning, accurate function-calling, and secure codebase interaction.",
  },
  {
    category: "Advanced RAG systems",
    description:
      "Build high-precision Retrieval-Augmented Generation architectures to safely query dense enterprise documentation without data leaks.",
  },
  {
    category: "Workflow automation",
    description:
      "Replace manual operational friction with intelligent background routines that parse files, synthesize logs, and update databases.",
  },
  {
    category: "Document intelligence",
    description:
      "Extract structured, reliable data matrices out of noisy, unstructured enterprise files, PDFs, images, and long-form text logs.",
  },
  {
    category: "Predictive models",
    description:
      "Deploy custom analytical frameworks to capture domain-specific patterns, evaluate risk scores, and assist complex operational decisions.",
  },
  {
    category: "Multimodal & voice systems",
    description:
      "Build interfaces that smoothly process speech, visual maps, and complex UI layouts for real-time customer and internal platforms.",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-28">
      <Container className="flex flex-col gap-16">
        <h2 className="max-w-3xl font-display text-5xl font-bold leading-[56px]">
          <span className="text-white">AI products </span>
          <span className="text-lime-200">we help build</span>
        </h2>
        <div className="flex flex-wrap gap-6">
          {products.map((product) => (
            <ProductCard key={product.category} {...product} />
          ))}
        </div>
        <div className="flex w-[628px] max-w-full flex-col items-start gap-6">
          <p className="text-base leading-6 font-medium text-white">
            Don&apos;t see your specific use case?
          </p>
          <Button href="/contact">Request a custom build</Button>
        </div>
      </Container>
    </section>
  );
}
