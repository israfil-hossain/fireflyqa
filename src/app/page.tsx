import ContactSection from "@/components/common/ContactSection";
import FeaturesSection from "@/components/home/FeatureSection";
import { FrequentlyQuestion } from "@/components/common/FrequentlyQuestion";
import { HeroSection } from "@/components/home/HeroSection";
import { HowToWork } from "@/components/home/HowToWork";
import LeadingSection from "@/components/home/LeadingSection";
import OurClients from "@/components/home/OurClients";
import { OurService } from "@/components/home/OurService";
import ProjectsShowcase from "@/components/home/ProjectShowcase";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Top Software Development Agency | Custom Web & Mobile Solutions
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Leading software development agency offering custom web, mobile, and cloud solutions. We provide cutting-edge digital transformation services to boost your business."
        />
        <meta
          name="keywords"
          content="software development, custom web solutions, mobile app development, cloud solutions, software agency, digital transformation,web development, mobile development, app development, wordpress,Bubble.io, no-code platform "
        />
        <link rel="canonical" href="https://flowentech.com" />

        <meta
          property="og:title"
          content="Top Software Development Agency | Custom Web & Mobile Solutions"
        />
        <meta
          property="og:description"
          content="Get premium software development services, from web and mobile apps to cloud solutions. Our experts deliver tailored digital transformation for businesses."
        />
        <meta
          property="og:image"
          content="https://www.flowentech.com/images/og-image.jpg"
        />
        <meta property="og:url" content="https://www.flowentech.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:flowentech" content="Flowentech" />
      </Head>
      <div className="min-h-screen ">
        <HeroSection />
        <OurService />
        <LeadingSection />
        <HowToWork />
        <OurClients />
        <ProjectsShowcase />
        <FeaturesSection />
        <FrequentlyQuestion />
        <ContactSection />
      </div>
    </>
  );
}
