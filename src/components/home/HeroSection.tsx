"use client";

import { motion  } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ContainerBox from "../layout/ContainerBox";
import { fadeIn, staggerChildren } from "@/utils/motion";
import './bg.css'; 
import { hero } from "@/assets";
import Image from "next/image";
import ScheduleButton from "../common/ScheduleButton";

export const HeroSection = () => {
  
  return (
    <div className=" pt-16 parent">
      <div className="magicpattern"/>
      <ContainerBox className="h-[65vh]">
      <div className="flex flex-col lg:flex-row items-start justify-between ">
        <motion.div
          className="lg:w-1/2 mb-12 lg:mb-0"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            variants={fadeIn}
          >
            Building stellar websites for early startups
          </motion.h1>
          <motion.p className="text-lg mb-8 text-gray-300" variants={fadeIn}>
            FlowenTech is a leading software agency specializing in creating high-performance, user-friendly websites for early-stage startups. 
          </motion.p>
          <motion.div className="flex space-x-4" variants={fadeIn}>
            <button className="bg-[#FCD980]  text-black px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors">
              View our work
            </button>
            <button className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors">
              <ScheduleButton />
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </motion.div>
       
        <motion.div
          className="lg:w-1/2 w-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-96">
           <Image src={hero} alt="hero" width={500} height={500} className="absolute z-10 top-0"/>
           </div>
          <div className="relative ">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform rotate-3"></div>
            <div className="relative bg-gray-800 p-6 rounded-lg shadow-xl ">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </ContainerBox>
    </div>
  );
};
