import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Hero from "@/components/sections/hire-ai-talent/Hero";
import SearchPanel from "@/components/sections/hire-ai-talent/SearchPanel";
import LogoStrip from "@/components/sections/hire-ai-talent/LogoStrip";
import SolutionSection from "@/components/sections/hire-ai-talent/SolutionSection";
import TalentDemoSection from "@/components/sections/hire-ai-talent/TalentDemoSection";
import HowItWorksSection from "@/components/sections/hire-ai-talent/HowItWorksSection";
import NetworkSection from "@/components/sections/hire-ai-talent/NetworkSection";
import ClosingCta from "@/components/sections/hire-ai-talent/ClosingCta";
import TestimonialsSection from "@/components/sections/hire-ai-talent/TestimonialsSection";

export const metadata: Metadata = pageMetadata({
  title: "Hire AI Talent",
  description:
    "Access a global network of verified AI engineers, AI-augmented teams, and expert evaluators. Search, shortlist, and start interviewing vetted AI talent in seconds.",
  path: "/hire-ai-talent",
});

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
