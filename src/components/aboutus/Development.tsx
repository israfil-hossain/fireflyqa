"use client";

import { containerVariants, itemVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import ContainerBox from "../layout/ContainerBox";
import Image from "next/image";
import { developmentData } from "@/constants/developmentData";

export default function DevelopmentSection() {
  return (
    <section className="bg-accent py-12">
      <ContainerBox>
        <div className="text-center mb-12 items-center flex flex-col justify-center">
          <h2 className="text-gray-600">Development</h2>
          <h3 className="text-3xl font-semibold text-tintblue max-w-lg">
            Our design and <span className="text-bold">development approach</span>
          </h3>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {developmentData.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-white p-6 rounded-lg text-start flex space-x-5"
              variants={itemVariants}
            >
              <div className="mb-4 ">
                <div className={feature.className}>
                  <Image src={feature.icon} alt="icon" width={100} height={100} className="w-6 h-6 bg-black" />
                </div>
              </div>
              <div>
              <h6 className="text-lg font-semibold mb-2 text-darkblue">{feature.title}</h6>
              <p className="text-darkblue text-[14px] font-normal">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </ContainerBox>
    </section>
  );
}
