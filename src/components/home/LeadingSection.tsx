"use client";

import { containerVariants, itemVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import ContainerBox from "../layout/ContainerBox";
// import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { development } from "@/assets";

export default function LeadingSection() {
  return (
    <section className="bg-grey py-12">
      <ContainerBox className="flex lg:flex-row flex-col  lg:justify-between w-full lg:space-x-5 space-y-5">
        <div className="text-start mb-12 items-start flex flex-col justify-start lg:w-1/2 w-full">
          <div className="bg-tintblue h-2 w-20  rounded-md mb-4"></div>
          <h1 className="text-3xl lg:text-4xl  text-start text-tintblue font-title">
           Leading companies trust us <br/> <span className="text-primary font-medium text-4xl font-uncut">to develop software</span>
          </h1>

          <p className="font-uncut text-lg pt-5">We <span className="text-primary">add development capacity</span> {`to tech teams. Our value isn't limited to building teams but is equally distributed 
          accross the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.`}</p>
          
          <Link href="/about-us" className="text-primary text-[18px] font-normal text-center flex space-x-1 items-center pt-8"><p>See more Informations</p> <ArrowRight size={18} /></Link>
        </div>

        <motion.div
          className="lg:w-1/2 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <Image src={development} alt="development" width={800} height={100} className="object-cover w-full h-[400px] rounded-lg" />
        </motion.div>
      </ContainerBox>
    </section>
  );
}
