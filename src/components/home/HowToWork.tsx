"use client";
import { fadeIn, staggerChildren } from "@/utils/motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ContainerBox from "../layout/ContainerBox";
import Image from "next/image";
import { pointer1, pointer2, pointer3, pointer4 } from "@/assets"; // Replace with actual icons
import { useRouter } from "next/navigation";

export const HowToWork = () => {
  const router = useRouter();
  return (
    <div className="bg-white">
      <ContainerBox>
        <section className="text-black py-16">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 grid-cols-1 gap-10">
            {/* Left Content */}
            <motion.div
              className="text-left mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.h2
                className="max-w-2xl mx-auto font-medium text-4xl md:text-5xl lg:text-6xl mb-4 font-title"
                variants={fadeIn}
              >
                Our Service Workflow
              </motion.h2>

              <motion.p
                className="mb-8 text-left font-uncut font-medium tracking-tighter mr-6"
                variants={fadeIn}
              >
                At Firefly Trading Contracting Hospitality, we are dedicated to
                delivering top-tier manpower and technical services with
                precision and reliability. From specialized installations to
                complete maintenance solutions, we provide structured execution
                to meet your operational goals.
              </motion.p>

              <motion.button
                className="text-[#2522BA] font-semibold flex items-center justify-start"
                variants={fadeIn}
                onClick={() => router.push("/contact-us")}
              >
                <span>Get in touch with us</span>
                <ArrowRight size={20} className="ml-2" />
              </motion.button>
            </motion.div>

            {/* Right Grid */}
            <div>
              <motion.div
                className="grid md:grid-cols-2 grid-cols-2 gap-8"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerChildren}
              >
                {[
                  {
                    number: "01",
                    title: "Manpower Supply",
                    image: pointer1,
                    description: `📌 Skilled & Unskilled Labor:\nWe provide trusted manpower solutions to ensure your projects run smoothly and efficiently.`,
                  },
                  {
                    number: "02",
                    title: "Renovation & Installation",
                    image: pointer2,
                    description: `📌 Precision Execution:\nFrom interior renovations to system installations, we deliver seamless integration with professional workmanship.`,
                  },
                  {
                    number: "03",
                    title: "MEP, HVAC & BAS",
                    image: pointer3,
                    description: `📌 End-to-End Engineering:\nWe specialize in Mechanical, Electrical, Plumbing, HVAC systems, and Building Automation for optimized performance.`,
                  },
                  {
                    number: "04",
                    title: "Kitchen Equipment Maintenance",
                    image: pointer4,
                    description: `📌 Commercial Expertise:\nEnsure reliability and safety with our expert maintenance of all types of hospitality kitchen equipment.`,
                  },
                ].map((item) => (
                  <motion.div
                    key={item.number}
                    className="text-start"
                    variants={fadeIn}
                  >
                    <div className="bg-gray-200 w-12 h-12 rounded-xl flex items-start justify-start shadow-lg mb-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={100}
                        height={100}
                        className="w-10 h-10 items-center -mt-1 -ml-1"
                      />
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </ContainerBox>
    </div>
  );
};
