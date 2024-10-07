import FeaturesSection from "@/components/home/FeatureSection";
import { FrequentlyQuestion } from "@/components/home/FrequentlyQuestion";
import { HeroSection } from "@/components/home/HeroSection";
import { HowToWork } from "@/components/home/HowToWork";
import OurClients from "@/components/home/OurClients";
import ProjectsShowcase from "@/components/home/ProjectShowcase";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <ProjectsShowcase />
      <HowToWork />
      <FeaturesSection />
      <OurClients />
      <FrequentlyQuestion />
      

    </div>
  );
}
