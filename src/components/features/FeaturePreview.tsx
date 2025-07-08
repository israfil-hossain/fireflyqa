"use client";

import { itemVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import ContainerBox from "../layout/ContainerBox";
import Image from "next/image";
import { mission, vision } from "@/assets";

export default function FeaturePreview() {
  return (
    <>
      {/* Section 1: Client-Centered Solutions */}
      <section className="bg-white lg:py-12 py-8">
        <ContainerBox>
          <div className="flex lg:justify-between flex-col lg:flex-row md:flex-row lg:space-x-5 md:space-x-5 space-y-5 w-full mb-16">
            <div className="lg:text-start text-start flex flex-col lg:justify-start lg:w-1/2 md:w-1/2 w-full">
              <h2 className="text-gray-600 text-start">/ Client-Centered Solutions</h2>
              <h3 className="text-3xl font-semibold max-w-lg text-tintblue pb-2">
                Trusted by Leading Contracting & Hospitality Clients
              </h3>
              <p className="font-normal text-[13px] lg:text-[16px]">
                At Firefly, we design every solution around your unique needs—whether it’s for technical manpower, full-scale renovations, or MEP integration. Our client-first mindset ensures tailored, reliable, and lasting results.
              </p>
            </div>

            <motion.div
              className="rounded-lg flex space-x-5 lg:w-1/2 items-end"
              variants={itemVariants}
            >
              <Image
                src={"https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt="Client Approach"
                width={500}
                height={500}
              />
            </motion.div>
          </div>
        </ContainerBox>
      </section>

      {/* Section 2: Revisions & Post-Project Support */}
      <section className="bg-grey lg:py-12 py-8">
        <ContainerBox>
          <div className="flex lg:justify-between flex-col-reverse lg:flex-row md:flex-row lg:space-x-5 md:space-x-5 space-y-5 w-full">
            <motion.div
              className="rounded-lg flex space-x-5 lg:w-1/2 items-end"
              variants={itemVariants}
            >
              <Image
                src={"https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt="Support"
                width={500}
                height={500}
              />
            </motion.div>
            <div className="lg:text-start text-start flex flex-col justify-start lg:w-1/2 md:w-1/2 py-5">
              <h2 className="text-gray-600 text-start">/ Quality Revisions & Ongoing Support</h2>
              <h3 className="text-3xl font-semibold max-w-lg text-tintblue pb-2">
                Your Satisfaction, Our Commitment
              </h3>
              <p className="font-normal text-[13px] lg:text-[15px]">
                We stand behind our work. That is why we offer free revision rounds and one week of dedicated post-completion support. Your peace of mind and satisfaction come first—always.
              </p>
            </div>
          </div>
        </ContainerBox>
      </section>

      {/* Section 3: 24/7 Priority Maintenance */}
      <section className="bg-white lg:py-12 py-8">
        <ContainerBox>
          <div className="flex lg:justify-between flex-col lg:flex-row md:flex-row lg:space-x-5 md:space-x-5 space-y-5 w-full mb-16">
            <div className="lg:text-start text-start flex flex-col lg:justify-start lg:w-1/2 md:w-1/2 w-full">
              <h2 className="text-gray-600 text-start">/ 24/7 Priority Maintenance</h2>
              <h3 className="text-3xl font-semibold max-w-lg text-tintblue pb-2">
                Around-the-Clock Reliability
              </h3>
              <p className="font-normal text-[13px] lg:text-[16px]">
                Whether it is critical building systems or high-volume kitchen operations, we provide 24/7 maintenance services to ensure everything runs smoothly—with minimal downtime and maximum efficiency.
              </p>
            </div>

            <motion.div
              className="flex justify-center space-x-5 lg:w-1/2 items-center"
              variants={itemVariants}
            >
              <Image
                src={"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt="Maintenance"
                width={500}
                height={500}
              />
            </motion.div>
          </div>
        </ContainerBox>
      </section>

      {/* Section 4: Timely & Professional Delivery */}
      <section className="bg-[#fcd98024] lg:py-12 py-8">
        <ContainerBox>
          <div className="flex lg:justify-between flex-col-reverse lg:flex-row md:flex-row lg:space-x-5 md:space-x-5 space-y-5 w-full">
            <motion.div
              className="rounded-lg flex justify-center space-x-5 lg:w-1/2 items-center"
              variants={itemVariants}
            >
              <Image
                src={vision}
                alt="Timely Delivery"
                width={500}
                height={500}
              />
            </motion.div>
            <div className="lg:text-start text-start flex flex-col justify-start lg:w-1/2 md:w-1/2 py-5">
              <h2 className="text-gray-600 text-start">/ Timely & Reliable Execution</h2>
              <h3 className="text-3xl font-semibold max-w-lg text-tintblue pb-2">
                On Time. Every Time.
              </h3>
              <p className="font-normal text-[13px] lg:text-[15px]">
                Our structured workflow, experienced team, and commitment to deadlines ensure your project is delivered on schedule—without compromising on safety, quality, or compliance.
              </p>
            </div>
          </div>
        </ContainerBox>
      </section>
    </>
  );
}
