'use client';
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
    setCurrent((prev:number) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev:number) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-grey py-12">
      <ContainerBox className="flex space-x-5 lg:flex-row flex-col justify-center items-center">
        {/* Left Content */}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-tintblue">What our clients say about us</h2>
          <p className="text-gray-600 mt-2">
          At Flowentech, we take pride in delivering top-notch digital solutions that drive success. Our clients trust us for our expertise, innovation, and commitment to excellence. But don’t just take our word for it—here’s what they have to say:
          </p>
        </div>

        {/* Right Content */}
       
        <AnimatedTestimonials testimonials={testimonials} />
      </ContainerBox>
    </section>
  );
}
