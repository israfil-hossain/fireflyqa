"use client";

import { itemVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import ContainerBox from "../layout/ContainerBox";
import Image from "next/image";
import { mission, vision } from "@/assets";

export default function FeaturePreview() {
  return (
    <>
      <section className="bg-white lg:py-12 py-8">
        <ContainerBox>
          <div className="flex lg:justify-between flex-col lg:flex-row md:flex-row lg:space-x-5 md:space-x-5 space-y-5 w-full mb-16">
            <div className="lg:text-start text-start  items-start flex flex-col lg:justify-start  lg:w-1/2 md:w-1/2 w-full">
              <h2 className="text-gray-600 text-start">/ Use client-first</h2>
              <h3 className="text-3xl font-semibold  max-w-lg text-tintblue pb-2">
                Top agencies and freelancers around the world use Client-first
              </h3>
              <p className="font-normal text-[12px] lg:text-[16px] text-wrap">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <motion.div
              className="rounded-lg text-start flex space-x-5 lg:w-1/2 items-end"
              variants={itemVariants}
            >
              <Image
                src={mission}
                alt="icon"
                width={500}
                height={500}
                className=""
              />
            </motion.div>
          </div>
        </ContainerBox>
      </section>
      <section className="bg-grey lg:py-12 py-8">
        <ContainerBox>
          <div className="flex lg:justify-between flex-col-reverse lg:flex-row md:flex-row lg:space-x-5 md:space-x-5 space-y-5  w-full">
            <motion.div
              className="rounded-lg text-start flex space-x-5 lg:w-1/2 items-end"
              variants={itemVariants}
            >
              <Image
                src={vision}
                alt="icon"
                width={500}
                height={500}
                className=""
              />
            </motion.div>
            <div className="lg:text-start text-start  items-start flex flex-col justify-start lg:w-1/2  md:w-1/2 py-5">
              <h2 className="text-gray-600 text-start">/ Free Revision Rounds</h2>
              <h3 className="text-3xl font-semibold  max-w-lg text-tintblue pb-2">
                Get free Revisions and one week of free maintenance
              </h3>
              <p className="font-normal text-[12px] lg:text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </ContainerBox>
      </section>
      <section className="bg-white lg:py-12 py-8">
        <ContainerBox>
          <div className="flex lg:justify-between justify-center flex-col lg:flex-row md:flex-row lg:space-x-5 md:space-x-5 space-y-5 w-full mb-16">
            <div className="lg:text-start text-start  items-start flex flex-col lg:justify-start  lg:w-1/2 md:w-1/2 w-full">
              <h2 className="text-gray-600 text-start"> 24/7 Support</h2>
              <h3 className="text-3xl font-semibold  max-w-lg text-tintblue pb-2">
                Working with us, you will be getting 24/7 priority support
              </h3>
              <p className="font-normal text-[12px] lg:text-[16px] text-wrap">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <motion.div
              className="flex justify-center space-x-5 lg:w-1/2  items-center"
              variants={itemVariants}
            >
              <Image
                src={mission}
                alt="icon"
                width={500}
                height={500}
                className=""
              />
            </motion.div>
          </div>
        </ContainerBox>
      </section>
      <section className="bg-[#fcd98024] lg:py-12 py-8">
        <ContainerBox>
          <div className="flex lg:justify-between justify-center items-center flex-col-reverse lg:flex-row md:flex-row lg:space-x-5 md:space-x-5 space-y-5  w-full">
            <motion.div
              className="rounded-lg flex justify-center space-x-5 lg:w-1/2 lg:items-end items-center"
              variants={itemVariants}
            >
              <Image
                src={vision}
                alt="icon"
                width={500}
                height={500}
                className=""
              />
            </motion.div>
            <div className="lg:text-start text-start  items-start flex flex-col justify-start lg:w-1/2  md:w-1/2 py-5">
              <h2 className="text-gray-600 text-start">/ Quick Delivery</h2>
              <h3 className="text-3xl font-semibold  max-w-lg text-tintblue pb-2">
                Guranteed 1 week delivery for standard five pager website
              </h3>
              <p className="font-normal text-[12px] lg:text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </ContainerBox>
      </section>
    </>
  );
}
