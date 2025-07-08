"use client";

import dynamic from "next/dynamic";
import HeroSection  from "./HeroSection";
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
import CTA from "../common/Cta";
import OurtechStack from "../aboutus/OurtechStack";
import OurIndustryExpertise from "../common/Industries";
import MethodologySection from "../common/methodology-section";

const Marque = dynamic(() => import("@/components/features/Marque"), {
  ssr: false,
});

export default function HomeComponent() {
  return (
    <>
      <HeroSection />
      {/* <Marque /> */}
      <MethodologySection />
      <HowToWork />
      <OurService />
      {/* <ProjectsShowcase /> */}
      {/* <OurtechStack /> */}
      <LeadingSection />
      <OurClients />
      <OurIndustryExpertise />
      {/* <TimelineWorks /> */}
      <FeaturesSection />
      <CTA />
      <FrequentlyQuestion />
       <ContactSection />
     

    
      {/* <WorldMapDemo /> */}
    </>
  );
}
