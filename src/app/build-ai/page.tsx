import Hero from "@/components/sections/build-ai/Hero";
import StatsSection from "@/components/sections/build-ai/StatsSection";
import EverydayWorkSection from "@/components/sections/build-ai/EverydayWorkSection";
import ProductsSection from "@/components/sections/build-ai/ProductsSection";
import CoCreateSection from "@/components/sections/build-ai/CoCreateSection";
import WhyHireboltSection from "@/components/sections/build-ai/WhyHireboltSection";
import ClosingCta from "@/components/sections/build-ai/ClosingCta";

export default function BuildAI() {
  return (
    <>
      <Hero />
      <StatsSection />
      <EverydayWorkSection />
      <ProductsSection />
      <CoCreateSection />
      <WhyHireboltSection />
      <ClosingCta />
    </>
  );
}
