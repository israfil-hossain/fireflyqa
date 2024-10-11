import FeaturesSection from "@/components/home/FeatureSection";
import { FrequentlyQuestion } from "@/components/home/FrequentlyQuestion";
import { HeroSection } from "@/components/home/HeroSection";
import { HowToWork } from "@/components/home/HowToWork";
import LeadingSection from "@/components/home/LeadingSection";
import OurClients from "@/components/home/OurClients";
import { OurService } from "@/components/home/OurService";
import ProjectsShowcase from "@/components/home/ProjectShowcase";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <OurService />
      <LeadingSection />
      <HowToWork />
      <OurClients />
      <ProjectsShowcase />
      <FeaturesSection />
      
      <FrequentlyQuestion />
      

    </div>
  );
}
