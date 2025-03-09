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
              <h2 className="text-gray-600 text-start">/ Client-First Approach</h2>
              <h3 className="text-3xl font-semibold  max-w-lg text-tintblue pb-2">
                Trusted by Top Agencies & Freelancers Worldwide
              </h3>
              <p className="font-normal text-[12px] lg:text-[16px] text-wrap">
               Leading agencies and professionals across the globe rely on our Client-first approach to streamline workflows and enhance project efficiency. Experience a seamless, structured, and scalable system designed for success.
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
              <h2 className="text-gray-600 text-start">/ Free Revisions & Maintenance</h2>
              <h3 className="text-3xl font-semibold  max-w-lg text-tintblue pb-2">
                Enjoy Unlimited Refinements & One Week of Free Support
              </h3>
              <p className="font-normal text-[12px] lg:text-[15px]">
              We believe in delivering perfection. Get free revision rounds to ensure your project meets your vision, plus a full week of complimentary maintenance for a seamless experience.
              </p>
            </div>
          </div>
        </ContainerBox>
      </section>
      <section className="bg-white lg:py-12 py-8">
        <ContainerBox>
          <div className="flex lg:justify-between justify-center flex-col lg:flex-row md:flex-row lg:space-x-5 md:space-x-5 space-y-5 w-full mb-16">
            <div className="lg:text-start text-start  items-start flex flex-col lg:justify-start  lg:w-1/2 md:w-1/2 w-full">
              <h2 className="text-gray-600 text-start"> 24/7 Priority Support</h2>
              <h3 className="text-3xl font-semibold  max-w-lg text-tintblue pb-2">
                Reliable Assistance Anytime, Anywhere
              </h3>
              <p className="font-normal text-[12px] lg:text-[16px] text-wrap">
              Partnering with us means you get round-the-clock priority support. Our dedicated team is always available to assist you, ensuring a smooth and hassle-free experience.
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
              <h2 className="text-gray-600 text-start">/ Fast & Reliable Delivery</h2>
              <h3 className="text-3xl font-semibold  max-w-lg text-tintblue pb-2">
               Guaranteed Quick Turnaround
              </h3>
              <p className="font-normal text-[12px] lg:text-[15px]">
                We prioritize speed and quality, ensuring your website is delivered promptly and to the highest standards, with no compromise on excellence.
              </p>
            </div>
          </div>
        </ContainerBox>
      </section>
    </>
  );
}
