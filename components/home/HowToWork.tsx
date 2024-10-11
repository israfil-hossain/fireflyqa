'use client';
import { fadeIn, staggerChildren } from "@/utils/motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ContainerBox from "../layout/ContainerBox";
import Image from "next/image";
import { pointer1, pointer2, pointer3, pointer4 } from "@/assets";

export const HowToWork = () => {
  return (
    <div className="bg-white">
        <ContainerBox>
      <section className=" text-black py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 grid-cols-1">
          <motion.div
            className="text-left mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              variants={fadeIn}
            >
              How we work
            </motion.h2>
            <motion.p className="text-gray-600 mb-8 text-left" variants={fadeIn}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </motion.p>
            <motion.button
              className="text-[#2522BA]  font-semibold flex items-center  justify-start "
              variants={fadeIn}
            >
              <span>Get in touch with us</span>
              <ArrowRight size={20} className="ml-2" />
            </motion.button>
          </motion.div>

         <div>
         <motion.div
            className="grid md:grid-cols-2 grid-cols-2  gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {[
              { number: "01", title: "Strategy", image: pointer1},
              { number: "02", title: "Wireframing", image: pointer2 },
              { number: "03", title: "Design" , image: pointer3  },
              { number: "04", title: "Development" , image: pointer4  },
            ].map((item) => (
              <motion.div
                key={item.number}
                className="text-start"
                variants={fadeIn}
              >
                <div className="bg-gray-200  w-12 h-12 rounded-xl flex items-start justify-start shadow-lg  mb-4 ">
                    <Image src={item.image} alt="image" width={100} height={100} className="w-10 h-10 items-center -mt-1 -ml-1"/>
                </div>
              
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                  aliquam sed mi.
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
