import Hero from "@/components/sections/hire-ai-talent/Hero";
import SearchPanel from "@/components/sections/hire-ai-talent/SearchPanel";
import LogoStrip from "@/components/sections/hire-ai-talent/LogoStrip";
import SolutionSection from "@/components/sections/hire-ai-talent/SolutionSection";
import TalentDemoSection from "@/components/sections/hire-ai-talent/TalentDemoSection";
import HowItWorksSection from "@/components/sections/hire-ai-talent/HowItWorksSection";
import NetworkSection from "@/components/sections/hire-ai-talent/NetworkSection";
import ClosingCta from "@/components/sections/hire-ai-talent/ClosingCta";
import TestimonialsSection from "@/components/sections/hire-ai-talent/TestimonialsSection";

export default function HireAITalent() {
  return (
    <>
      <Hero />
      <SearchPanel />
      <LogoStrip />
      <SolutionSection />
      <TalentDemoSection />
      <HowItWorksSection />
      <NetworkSection />
      <ClosingCta />
      <TestimonialsSection />
    </>
  );
}
