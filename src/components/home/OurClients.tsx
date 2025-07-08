"use client";
// components/Testimonials.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import ContainerBox from "../layout/ContainerBox";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/constants/clientsData";
import { clients_containerVariants } from "@/utils/motion";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

export default function OurClients() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev: number) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrent((prev: number) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-grey py-12">
      <ContainerBox className="flex space-x-5 lg:flex-row flex-col justify-center items-center">
        {/* Left Content */}
        <div className="w-full">
          <h1 className="max-w-2xl mx-auto text-center font-medium text-4xl md:text-5xl lg:text-5xl">
            <span className="font-title">What Our Clients</span> <br />
            <span className="font-uncut font-medium tracking-tighter">
              Say about us!
            </span>
          </h1>
          <p className="text-gray-600 mt-2 font-uncut">
            At Firefly Trading Contracting Hospitality, we pride ourselves on
            delivering dependable, high-quality contracting and support
            services. Our clients span hospitality, real estate, and commercial
            sectors—each trusting us for our technical excellence,
            responsiveness, and reliability. Here iss what they have to say:
          </p>
        </div>

        {/* Right Content */}

        <AnimatedTestimonials testimonials={testimonials} />
      </ContainerBox>
    </section>
  );
}
