"use client";
import { staggerChildren, fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import ContainerBox from "../layout/ContainerBox";
import Image from "next/image";

const Banner = ({
  title,
  subtitle,
  banner,
  pageName,
  optionalBg,
}: {
  title: string;
  subtitle: string;
  banner?: any;
  pageName: string;
  optionalBg?: React.ReactNode;
}) => {
  return (
    <div className=" pt-16 parent">
      <div className="magicpattern" />
      <ContainerBox className="lg:h-[45vh] w-full mb-8">
        <div className="flex flex-col w-full lg:flex-row lg:items-start items-center justify-between ">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.h4 className="text-lg text-white font-semibold mb-3 pl-2">
              {pageName}
            </motion.h4>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-white"
              variants={fadeIn}
            >
              {title}
            </motion.h1>
            <motion.p className="text-lg mb-8 text-gray-300" variants={fadeIn}>
              {subtitle}
            </motion.p>
            {/* <motion.div className="flex space-x-4" variants={fadeIn}>
            <button className="bg-[#FCD980]  text-black px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors">
              View our work
            </button>
          </motion.div> */}
          </motion.div>

          {banner && (
            <motion.div
              className="lg:w-1/2 w-96"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative  w-full flex justify-end ">
                <Image
                  src={banner}
                  alt="hero"
                  width={500}
                  height={500}
                  className=""
                />
              </div>
            </motion.div>
          )}
          {optionalBg && (
            <motion.div
              className="lg:w-1/2 w-96"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {optionalBg}
            </motion.div>
          )}
        </div>
      </ContainerBox>
    </div>
  );
};

export default Banner;
