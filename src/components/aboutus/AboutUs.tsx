import React from "react";
import Banner from "../common/Banner";
import aboutus from "@/assets/aboutus.png";

import {
  Users,
  Target,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { number: "500+", label: "Projects Completed", icon: CheckCircle },
  { number: "10+", label: "Years Experience", icon: Clock },
  { number: "100+", label: "Skilled Professionals", icon: Users },
  { number: "99%", label: "Client Satisfaction", icon: Award },
];

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To provide exceptional skilled manpower and technical solutions that exceed client expectations while maintaining the highest standards of quality and safety.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We are committed to delivering superior workmanship through continuous training, modern equipment, and rigorous quality control processes.",
  },
  {
    icon: Users,
    title: "Team",
    description:
      "Our diverse team of certified professionals brings extensive experience across technical and hospitality sectors to every project.",
  },
];

export const AboutUs = () => {
  return (
    <div>
      <Banner
        pageName="/ about-us"
        title={
          <>
            About <br />
            <span className="font-uncut text-primary">Firefly Services</span>
          </>
        }
        subtitle="A trusted partner in technical solutions and skilled manpower supply, dedicated to excellence in every project we undertake."
        banner={aboutus}
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-heading text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="font-body text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story & <span className="text-gradient">Expertise</span>
              </h2>
              <div className="space-y-4 font-body text-gray-600">
                <p>
                  FireFly Services was founded with a vision to bridge the gap
                  between technical expertise and reliable service delivery. We
                  specialize in providing skilled manpower for both technical
                  and hospitality sectors.
                </p>
                <p>
                  Our comprehensive services include electrical installations,
                  ELV systems, Building Management Systems (BMS), HVAC
                  solutions, plumbing, interior renovation, and commercial
                  kitchen equipment maintenance.
                </p>
                <p>
                  What sets us apart is our commitment to quality, safety, and
                  customer satisfaction. Every team member is thoroughly trained
                  and certified, ensuring that we deliver exceptional results on
                  every project.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Professional technicians at work"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
                width={800}
                height={600}  
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values & Approach
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Built on a foundation of integrity, expertise, and
              customer-centric service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <article
                className="p-6 space-y-3 hover:bg-primary/5 border rounded-xl duration-300"
                key={index}
              >
                <h1 className="font-medium font-uncut tracking-tight text-2xl">
                  {value.title}
                </h1>
                <value.icon className="h-8 w-8 text-primary" />
                <p className="font-light text-lg">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-primary ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Experience the FireFly Difference
          </h2>
          <p className="font-body text-xl mb-8 opacity-90">
            Partner with us for reliable, professional technical solutions and
            skilled manpower services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="hover-scale bg-white text-[#a6079b] hover:bg-gray-100"
            >
              <Link href="/our-services">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white text-primary hover:bg-white hover:text-[#a6079b]"
            >
              <Link href="/contact-us">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
     
    </div>
  );
};
