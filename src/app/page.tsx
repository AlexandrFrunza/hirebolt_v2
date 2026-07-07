import Hero from "@/components/sections/home/Hero";
import IntroStatement from "@/components/sections/home/IntroStatement";
import HireAISection from "@/components/sections/home/HireAISection";
import TrainAISection from "@/components/sections/home/TrainAISection";
import BuildAISection from "@/components/sections/home/BuildAISection";
import Testimonials from "@/components/sections/home/Testimonials";
import WhyHirebolt from "@/components/sections/home/WhyHirebolt";
import ClosingCta from "@/components/sections/home/ClosingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <HireAISection />
      <TrainAISection />
      <BuildAISection />
      <Testimonials />
      <WhyHirebolt />
      <ClosingCta />
    </>
  );
}
