"use client";

import { itemVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import ContainerBox from "../layout/ContainerBox";
import Image from "next/image";
import { mission, vision } from "@/assets";

export default function MissonVission() {
  return (
    <section className="bg-grey py-20">
      <ContainerBox>
        <div className="flex lg:justify-between flex-col lg:flex-row md:flex-row lg:space-x-5 md:space-x-5 space-y-5 w-full mb-16">
          <div className="lg:text-start text-justify items-start flex flex-col lg:justify-start lg:w-1/2 md:w-1/2 w-full">
            <h2 className="text-gray-600 text-start">/Our Mission</h2>
            <h3 className="text-3xl font-semibold max-w-lg">
              Laser-<span className="font-bold text-tintblue">Focused Innovation</span>
            </h3>
            <p className="font-normal text-[12px] lg:text-[16px] text-wrap">
              Our mission is to provide exceptional, cutting-edge software solutions that are not only tailored to your business needs but also driven by the pursuit of excellence. We empower businesses through laser-focused innovation, crafting seamless user experiences, and scalable systems that bring long-term success.
            </p>
          </div>

          <motion.div
            className="rounded-lg text-start flex space-x-5 w-1/2 items-end"
            variants={itemVariants}
          >
            <Image
              src={mission}
              alt="Mission Icon"
              width={500}
              height={500}
              className=""
            />
          </motion.div>
        </div>

        <div className="flex lg:justify-between flex-col-reverse lg:flex-row md:flex-row lg:space-x-5 md:space-x-5 space-y-5 w-full">
          <motion.div
            className="rounded-lg text-start flex space-x-5 w-1/2 items-end"
            variants={itemVariants}
          >
            <Image
              src={vision}
              alt="Vision Icon"
              width={500}
              height={500}
              className=""
            />
          </motion.div>
          <div className="lg:text-start text-justify items-start flex flex-col justify-start lg:w-1/2 md:w-1/2 py-5">
            <h2 className="text-gray-600 text-start">/Our Vision</h2>
            <h3 className="text-3xl font-semibold max-w-lg">
              Inspire, <span className="font-bold text-tintblue">Innovate, Share</span>
            </h3>
            <p className="font-normal text-[12px] lg:text-[15px]">
              Our vision is to lead the software development industry by fostering a culture of creativity and collaboration. We aim to inspire innovation, break boundaries, and share knowledge that drives continuous growth. We envision a world where technology bridges gaps, empowers businesses, and creates lasting impact.
            </p>
          </div>
        </div>
     
      </ContainerBox>
    </section>
  );
}
