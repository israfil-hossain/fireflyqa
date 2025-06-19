"use client";
import React from "react";
import Banner from "../common/Banner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { tabVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { templates } from "./template";
import ProjectCard from "./ProjectCard";
import { Products } from "./ProductComponent";
import ContainerBox from "../layout/ContainerBox";
import { Heading } from "../ui/header";

export const Projects = () => {
  return (
    <div>
      <Banner
        pageName="/ what we created"
        title="Our work Portfolio"
        subtitle="We help teams create great digital products by providing them with tools and technology to make 
        the design-to-code process universally accessible."
        optionalBg={
          <div className="relative ">
            <div className="absolute  inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform rotate-3 h-68"></div>
            <div className="relative bg-gray-800 p-6 rounded-lg shadow-xl ">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-4 h-40">
                <div className="h-8 pl-5 pt-1 bg-gray-700 rounded w-3/4 text-white font-uncut">
                  Our Work Portfolio
                </div>
                <div className="h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                <div className="h-6 text-[12px] pl-5 pt-1 bg-gray-700 rounded text-gray-300  ">
                  We help teams create great digital products ...
                </div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        }
      />
      <ContainerBox className="items-center w-full">

        <h1 className="max-w-2xl  mx-auto items-center text-center font-medium text-4xl md:text-5xl lg:text-6xl mb-16 ">
        <span className="font-title">Our Custom Software</span> <br />
        <span className="font-uncut font-medium tracking-tighter">
          Development Projects
        </span>
      </h1>
        <Products />
      </ContainerBox>
    </div>
  );
};
