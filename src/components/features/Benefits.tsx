"use client";

import { benefitsData } from "@/constants/featureData";
import { containerVariants, itemVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import ContainerBox from "../layout/ContainerBox";
import Image from "next/image";

export default function Benefits() {
  return (
    <section className="bg-accent py-12">
      <ContainerBox>
        <div className="text-center mb-12 items-center flex flex-col justify-center">
          <h2 className="text-gray-600 font-uncut">/ benefits</h2>
          <h1 className="max-w-2xl mx-auto text-center font-medium text-4xl md:text-5xl lg:text-6xl">
            <span className="font-uncut font-medium tracking-tighter">
              The Benefits of Working
            </span>{" "}
            <br />
            <span className="font-title">With Our Team</span>
          </h1>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {benefitsData.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-white p-6 rounded-lg text-start"
              variants={itemVariants}
            >
              <div className="mb-4">
                <Image
                  src={feature.icon}
                  alt="icon"
                  width={50}
                  height={50}
                  className="w-6 h-6"
                />
              </div>
              <h6 className="text-lg font-semibold mb-2 text-darkblue">
                {feature.title}
              </h6>
              <p className="text-darkblue text-[14px] font-normal">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </ContainerBox>
    </section>
  );
}
