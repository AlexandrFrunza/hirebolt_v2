import Hero from "@/components/sections/train-ai/Hero";
import StatsSection from "@/components/sections/train-ai/StatsSection";
import TrainingDomainsSection from "@/components/sections/train-ai/TrainingDomainsSection";
import TalentSection from "@/components/sections/train-ai/TalentSection";
import WhyChooseSection from "@/components/sections/train-ai/WhyChooseSection";
import ComplianceSection from "@/components/sections/train-ai/ComplianceSection";
import WorkDoneSection from "@/components/sections/train-ai/WorkDoneSection";
import ClosingCta from "@/components/sections/train-ai/ClosingCta";

export default function TrainAI() {
  return (
    <>
      <Hero />
      <StatsSection />
      <TrainingDomainsSection />
      <TalentSection />
      <WhyChooseSection />
      <ComplianceSection />
      <WorkDoneSection />
      <ClosingCta />
    </>
  );
}
