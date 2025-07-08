"use client";

import { containerVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import ContainerBox from "../layout/ContainerBox";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { development } from "@/assets"; // Replace with relevant Firefly banner

export default function LeadingSection() {
  return (
    <section className="bg-grey py-12">
      <ContainerBox className="flex lg:flex-row flex-col lg:justify-between w-full lg:space-x-5 space-y-5">
        <div className="text-start mb-12 items-start flex flex-col justify-start lg:w-1/2 w-full">
          <div className="bg-tintblue h-2 w-20 rounded-md mb-4"></div>
          <h1 className="text-3xl lg:text-4xl text-start text-tintblue font-title">
            Trusted by Leading Clients <br />
            <span className="text-primary font-medium text-4xl font-uncut">
              for Contracting & Hospitality Services
            </span>
          </h1>

          <p className="font-uncut text-lg pt-5">
            At <span className="text-primary font-semibold">Firefly Trading Contracting Hospitality</span>, we provide a
            complete range of services—from <span className="text-primary">manpower supply</span> to
            <span className="text-primary"> MEP, HVAC, BAS, and kitchen equipment maintenance</span>. Our
            commitment to quality, safety, and precision makes us the go-to partner for commercial and industrial projects.
          </p>

          <Link
            href="/about-us"
            className="text-primary text-[18px] font-normal text-center flex space-x-1 items-center pt-8"
          >
            <p>See more Information</p> <ArrowRight size={18} />
          </Link>
        </div>

        <motion.div
          className="lg:w-1/2 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <Image
            src={development} // Replace with Firefly visual (e.g. crew, MEP work, etc.)
            alt="Firefly Services"
            width={800}
            height={400}
            className="object-cover w-full h-[400px] rounded-lg"
          />
        </motion.div>
      </ContainerBox>
    </section>
  );
}
