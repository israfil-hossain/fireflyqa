'use client';

import { tropy } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Assemble the right team",
    description: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
  },
  {
    id: 2,
    title: "Sprint planning",
    description: "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
  },
  {
    id: 3,
    title: "Tech architecture",
    description: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
  },
  {
    id: 4,
    title: "Standups & weekly demos",
    description: "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
  },
  {
    id: 5,
    title: "Code reviews",
    description: "Code reviews before release help detect issues like memory leaks, file leaks, performance gaps, and general bad smells.",
  },
  {
    id: 6,
    title: "Iterative delivery",
    description: "We divide the implementation process into several checkpoints rather than a single deadline.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TimelineWorks() {
  return (
    <div className=" bg-accent">
      <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12 items-center flex flex-col justify-center">
          <h2 className="text-gray-600 italic font-uncut">/works</h2>
          <h1 className="text-4xl max-w-lg font-title">
            How development through<br/> <span className=" font-uncut font-medium"> <span className="text-primary italic">Alcaline</span> works</span>
          </h1>
        </div>
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Central Line */}
        <div className="absolute hidden lg:block top-1/2 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 transform -translate-y-1/2"></div>
        <div className="absolute hidden lg:block h-12 w-0.5 top-1/2 right-28 bg-gradient-to-r from-blue-400  to-indigo-500 "/>
        <div className="absolute hidden lg:block h-12 w-0.5 bottom-1/2 left-20 bg-blue-400 "/>
        <div className="absolute hidden lg:block h-12 w-0.5 bottom-1/2 right-80 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 "/>
        <div className="absolute hidden lg:block h-12 w-0.5 top-1/2 left-80 bg-blue-400 "/>

        <div className="absolute hidden lg:block h-12 w-0.5 bottom-1/2 left-[520px] bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 "/>
        <div className="absolute hidden lg:block h-12 w-0.5 top-1/2 right-[530px] bg-blue-400 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500"/>
        {/* Steps */}
        <div className="hidden lg:flex flex-row justify-between items-center relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={stepVariants}
              className={`flex flex-col items-center mb-0 ${
                index % 2 === 0 ? "-mt-60" : "mt-60"
              }`} // Alternating steps in large screens
            >
              {/* Step Details */}
              <div className=" bg-white p-4 shadow-md rounded-lg min-w-[200px] max-w-[260px] border">
                <div className="w-full flex justify-start items-center space-x-3 ">
                  <div className="w-[15%]">
                  <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-r from-blue-500 to-purple-400 text-white flex items-center justify-center text-[14px] font-bold">
                    #{step.id} 
                  </div>
                  </div>
                  <h3 className="w-full text-[14px] font-semibold text-gray-800 mb-2 ">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-sm text-gray-600 font-normal text-start pl-4 pt-2">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trophy at the End */}
        <div className="hidden lg:block absolute -right-5 top-1/2  transform lg:translate-x-1/2 lg:-translate-y-1/2 translate-x-0  justify-center">
         <Image src={tropy} alt="tropy" width={50} height={50} className="w-8 h-8 "/>
        </div>
      </motion.div>

      {/* Mobile Vertical Line */}
      <div className="lg:hidden flex flex-col justify-center md:grid md:grid-cols-2 md:gap-5 items-center  mt-12">
        {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-pink-300"></div> */}
        {steps.map((step) => (
          <motion.div
            key={step.id}
            variants={stepVariants}
            className="flex flex-col items-center w-full mb-10"
          >
            {/* Step Indicator */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-400 text-white flex items-center justify-center text-sm font-bold mb-4 z-10">
              #{step.id}
            </div>
            {/* Step Details */}
            <div className="text-center bg-white p-4 shadow-md rounded-lg w-full h-40 flex flex-col justify-center items-center">
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        ))}
       
      </div>
      <div className="lg:hidden w-[100%] h-20 items-center flex justify-center py-3 bg-tintblue">
        <Image src={tropy} alt="tropy" width={50} height={50} className="w-10 h-10 "/>
       </div>
      </div>
    </div>
  );
}
