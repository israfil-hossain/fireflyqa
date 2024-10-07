'use client';
// components/Testimonials.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import ContainerBox from "../layout/ContainerBox";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/constants/clientsData";
import { clients_containerVariants } from "@/utils/motion";


export default function OurClients() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev:any) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev:any) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-grey py-12">
      <ContainerBox className="grid lg:grid-cols-2 lg:gap-0 gap-8 lg:h-40">
        {/* Left Content */}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-tintblue">What our clients say about us</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>

        {/* Right Content */}
        <div className="w-full flex items-center justify-center">
          <motion.div
            key={current}
            className="max-w-lg text-start"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={clients_containerVariants}
          >
            <blockquote className="text-xl text-gray-700 italic mb-4">
              &quot;{testimonials[current].testimonial}&quot;
            </blockquote>
            <div className="flex items-center justify-start gap-2">
              <Image
                width={50} 
                height={50}
                src={testimonials[current].image}
                alt={"icon"}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold">{testimonials[current].name}</p>
                <p className="text-gray-600 text-sm">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex gap-2 ml-4">
            <div
              className="bg-gray-300 cursor-pointer hover:bg-blue-600 rounded-full w-8 h-8 p-2 items-center flex jsutify-center"
              onClick={prevTestimonial}
            >
              <ChevronLeft size={16}/>
            </div>
            <div
              className="bg-gray-300 cursor-pointer hover:bg-blue-600 text-white rounded-full w-8 h-8 p-2 pr-2  items-center flex jsutify-center"
              onClick={nextTestimonial}
            >
              <ChevronRight size={16} />
            </div>
          </div>
        </div>
      </ContainerBox>
    </section>
  );
}
