'use client'; 

import React from "react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { motion } from "framer-motion"; // Import framer-motion for animations
import Image from "next/image";
import ContainerBox from "../layout/ContainerBox";
import { techStackData } from "@/constants/ourTechData";



const OurtechStack = () => {
  const tabVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <ContainerBox className="py-10 ">
      <div className="text-center mb-12 items-center flex flex-col justify-center">
          <h2 className="text-gray-600">/tech</h2>
          <h3 className="text-3xl font-semibold  max-w-lg x">
            Our <span className="font-bold text-tintblue">Tech Stack</span>
          </h3>
        </div>
      <div className="text-center items-center flex flex-col justify-center  w-full">
        <Tabs defaultValue="backend" className="w-full flex flex-col justify-center items-center">
          <TabsList className="flex justify-center space-x-4 mb-6">
            <TabsTrigger value="backend" className="font-medium lg:text-[18px] text-[16px]">Backend</TabsTrigger>
            <TabsTrigger value="frontend" className="font-medium lg:text-[18px] text-[16px]">Frontend</TabsTrigger>
            <TabsTrigger value="databases" className="font-medium lg:text-[18px] text-[16px]">Databases</TabsTrigger>
            <TabsTrigger value="cms" className="font-medium lg:text-[18px] text-[16px]">NoCode</TabsTrigger>
            <TabsTrigger value="devops" className="font-medium lg:text-[18px] text-[16px]">DevOps</TabsTrigger>
          </TabsList>
          <div className="h-[1px] bg-gray-200 w-[60%] items-center mb-4"/>

          {/* Backend tab content */}
          <TabsContent value="backend">
            <motion.div
              className="flex mt-6 gap-5 justify-center items-center  flex-wrap"
              initial="hidden"
              animate="visible"
              variants={tabVariants}
            >
              {techStackData.backend.map((tech) => (
                <motion.div key={tech.name} variants={iconVariants} 
                className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]  p-2  border flex hover:border-darkblue/40 hover:cursor-pointer hover:shadow-2xl bg-grey 
                justify-center items-center overflow-hidden rounded-full ">
                  <Image src={tech.logo} alt={tech.name} width={100} height={100} className="object-contain" />
                  {/* <p>{tech.name}</p> */}
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Frontend tab content */}
          <TabsContent value="frontend">
            <motion.div
              className="flex mt-6 gap-5 justify-center items-center  flex-wrap"
              initial="hidden"
              animate="visible"
              variants={tabVariants}
            >
              {techStackData.frontend.map((tech) => (
                <motion.div key={tech.name} variants={iconVariants} 
                className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]  p-2  border flex hover:border-darkblue/40 hover:cursor-pointer hover:shadow-2xl bg-grey 
                justify-center items-center overflow-hidden rounded-full ">
                  <Image src={tech.logo} alt={tech.name} width={100} height={100} className="object-contain" />
                  {/* <p>{tech.name}</p> */}
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Databases tab content */}
          <TabsContent value="databases">
            <motion.div
              className="flex justify-center mt-6 space-x-4"
              initial="hidden"
              animate="visible"
              variants={tabVariants}
            >
              {techStackData.databases.map((tech) => (
                <motion.div key={tech.name} variants={iconVariants} 
                className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]  p-2  border flex hover:border-darkblue/40 hover:cursor-pointer hover:shadow-2xl bg-grey 
                justify-center items-center overflow-hidden rounded-full ">
                  <Image src={tech.logo} alt={tech.name} width={100} height={100} />
                  {/* <p>{tech.name}</p> */}
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* CMS tab content */}
          <TabsContent value="cms">
            <motion.div
              className="flex justify-center mt-6 space-x-4"
              initial="hidden"
              animate="visible"
              variants={tabVariants}
            >
              {techStackData.nocode.map((tech) => (
                <motion.div key={tech.name} variants={iconVariants} 
                className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]  p-2  border flex hover:border-darkblue/40 hover:cursor-pointer hover:shadow-2xl bg-grey 
                justify-center items-center overflow-hidden rounded-full ">
                  <Image src={tech.logo} alt={tech.name} width={100} height={100} />
                  {/* <p>{tech.name}</p> */}
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

         
          {/* DevOps tab content */}
          <TabsContent value="devops">
            <motion.div
              className="flex justify-center mt-6 space-x-4"
              initial="hidden"
              animate="visible"
              variants={tabVariants}
            >
              {techStackData.devops.map((tech) => (
                <motion.div key={tech.name} variants={iconVariants}
                className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]  p-2  border flex hover:border-darkblue/40 hover:cursor-pointer hover:shadow-2xl bg-grey 
                justify-center items-center overflow-hidden rounded-full ">
                  <Image src={tech.logo} alt={tech.name} width={100} height={100} />
                  {/* <p>{tech.name}</p> */}
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </ContainerBox>
  );
};

export default OurtechStack;
