import { Hero } from "@/components/sections/Hero";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedProjects />
      <ProblemSection />
      <ServicesPreview />
      <MethodSection />
      <AboutPreview />
      <ResourcesSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
