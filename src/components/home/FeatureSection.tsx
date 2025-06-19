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
          <h2 className="text-gray-600 font-uncut italic">/features</h2>

          <h1 className="text-4xl max-w-lg font-title">
            Our Approach that <br />
            <span className=" font-uncut font-medium">
              {" "}
              <span className="text-primary italic">Solved</span> Your Problem
            </span>
          </h1>
        </div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {featureData.map((feature) => (
            <article
              className="p-6 space-y-3 hover:bg-primary/5 border rounded-xl duration-300"
              key={feature.id}
            >
              <h1 className="font-medium font-uncut tracking-tight text-2xl">
                {feature.title}
              </h1>
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 ">
              <Image
                className="w-10"
                src={feature.icon}
                alt={feature.title}
                width={200}
                height={200}
              />
              </div>
              <p className="font-light text-lg">{feature.description}</p>
            </article>
          ))}
        </motion.div>
      </ContainerBox>
    </section>
  );
}
