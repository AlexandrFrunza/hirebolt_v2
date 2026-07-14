import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Hero from "@/components/sections/train-ai/Hero";
import StatsSection from "@/components/sections/train-ai/StatsSection";
import TrainingDomainsSection from "@/components/sections/train-ai/TrainingDomainsSection";
import HowWeWorkSection from "@/components/sections/train-ai/HowWeWorkSection";
import TalentSection from "@/components/sections/train-ai/TalentSection";
import WhyChooseSection from "@/components/sections/train-ai/WhyChooseSection";
import ComplianceSection from "@/components/sections/train-ai/ComplianceSection";
import WorkDoneSection from "@/components/sections/train-ai/WorkDoneSection";
import ClosingCta from "@/components/sections/train-ai/ClosingCta";

export const metadata: Metadata = pageMetadata({
  title: "Train AI",
  description:
    "Build stronger models with expert-led evaluation, benchmarks, post-training datasets, and human feedback workflows from Hirebolt's specialist talent network.",
  path: "/train-ai",
});

export default function TrainAI() {
  return (
    <>
      <Hero />
      <StatsSection />
      <TrainingDomainsSection />
      <HowWeWorkSection />
      <TalentSection />
      <WhyChooseSection />
      <ComplianceSection />
      <WorkDoneSection />
      <ClosingCta />
    </>
  );
}
