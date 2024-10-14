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
          <div className="lg:text-start text-justify  items-start flex flex-col lg:justify-start  lg:w-1/2 md:w-1/2 w-full">
            <h2 className="text-gray-600 text-start">/our mission</h2>
            <h3 className="text-3xl font-semibold  max-w-lg">
              Laser,
              <span className="font-bold text-tintblue">Focus</span>
            </h3>
            <p className="font-normal text-[12px] lg:text-[16px] text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <motion.div
            className="rounded-lg text-start flex space-x-5 w-1/2 items-end"
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
        <div className="flex lg:justify-between flex-col-reverse lg:flex-row md:flex-row lg:space-x-5 md:space-x-5 space-y-5  w-full">
          <motion.div
            className="rounded-lg text-start flex space-x-5 w-1/2 items-end"
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
          <div className="lg:text-start text-justify  items-start flex flex-col justify-start lg:w-1/2  md:w-1/2 py-5">
            <h2 className="text-gray-600 text-start">/our vision</h2>
            <h3 className="text-3xl font-semibold  max-w-lg">
              Inspire,
              <span className="font-bold text-tintblue">Innovate, Share</span>
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
  );
}
