"use client";

import dynamic from "next/dynamic";
import { HeroSection } from "./HeroSection";
import OurService from "./OurService";
import LeadingSection from "./LeadingSection";
import { HowToWork } from "./HowToWork";
import OurClients from "./OurClients";
import ProjectsShowcase from "./ProjectShowcase";
import FeaturesSection from "./FeatureSection";
import ContactSection from "../common/ContactSection";
import { FrequentlyQuestion } from "../common/FrequentlyQuestion";
import { Newsletter } from "../common/Newsletter";
import TimelineWorks from "../aboutus/TimelineWorks";

const Marque = dynamic(() => import("@/components/features/Marque"), {
  ssr: false,
});

export default function HomeComponent() {
  return (
    <>
      <HeroSection />
      <Marque />
      <OurService />
      <LeadingSection />
      <HowToWork />
      <OurClients />
      <TimelineWorks />
      <ProjectsShowcase />
      <FeaturesSection />
      <ContactSection />
      <FrequentlyQuestion />
      <div className="mb-10">
        <Newsletter />
      </div>
    
      {/* <WorldMapDemo /> */}
    </>
  );
}
