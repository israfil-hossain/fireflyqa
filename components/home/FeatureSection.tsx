"use client";

import { featureData } from "@/constants/featureData";
import { containerVariants, itemVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import ContainerBox from "../layout/ContainerBox";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="bg-accent py-12">
      <ContainerBox>
        <div className="text-center mb-12 items-center flex flex-col justify-center">
          <h2 className="text-gray-600">Features</h2>
          <h3 className="text-3xl font-semibold text-tintblue max-w-lg">
            Design that solves problems, one product at a time
          </h3>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {featureData.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-white p-6 rounded-lg text-start"
              variants={itemVariants}
            >
              <div className="mb-4">
                <Image src={feature.icon} alt="icon" width={50} height={50} className="w-6 h-6" />
              </div>
              <h6 className="text-lg font-semibold mb-2 text-darkblue">{feature.title}</h6>
              <p className="text-darkblue text-[14px] font-normal">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </ContainerBox>
    </section>
  );
}
