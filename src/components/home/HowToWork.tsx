"use client";
import { fadeIn, staggerChildren } from "@/utils/motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ContainerBox from "../layout/ContainerBox";
import Image from "next/image";
import { pointer1, pointer2, pointer3, pointer4 } from "@/assets";
import { useRouter } from "next/navigation";

export const HowToWork = () => {
  const router = useRouter();
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
                className="max-w-2xl mx-auto font-medium text-4xl md:text-5xl lg:text-6xl mb-4 font-title"
                variants={fadeIn}
              >
                How we work
              </motion.h2>
              
              <motion.p
                className="mb-8 text-left font-uncut font-medium tracking-tighter mr-6"
                variants={fadeIn}
              >
                At Flowentech, we follow a structured and efficient workflow to
                transform your ideas into reality. Our process ensures seamless
                collaboration, innovation, and high-quality results.
              </motion.p>
              <motion.button
                className="text-[#2522BA]  font-semibold flex items-center  justify-start "
                variants={fadeIn}
                onClick={() => router.push("/contact-us")}
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
                  {
                    number: "01",
                    title: "Strategy",
                    image: pointer1,
                    description: `📌 Planning for success
                    We analyze your needs, conduct market research, and define a strategic roadmap to ensure a strong foundation for your project.`,
                  },
                  {
                    number: "02",
                    title: "Wireframing",
                    image: pointer2,
                    description: `📌 Blueprint for innovation
                    Before diving into development, we create detailed wireframes to visualize the structure and user flow of your product, ensuring a seamless experience.`,
                  },
                  {
                    number: "03",
                    title: "Design",
                    image: pointer3,
                    description: `📌 Crafting stunning interfaces
                    Our design team brings your vision to life with modern, user-friendly, and visually appealing UI/UX designs that enhance user engagement.`,
                  },
                  {
                    number: "04",
                    title: "Development",
                    image: pointer4,
                    description: `📌 Building with precision
                    Using cutting-edge technologies, our developers code and integrate features, ensuring a scalable, high-performance, and secure digital solution.`,
                  },
                ].map((item) => (
                  <motion.div
                    key={item.number}
                    className="text-start"
                    variants={fadeIn}
                  >
                    <div className="bg-gray-200  w-12 h-12 rounded-xl flex items-start justify-start shadow-lg  mb-4 ">
                      <Image
                        src={item.image}
                        alt="image"
                        width={100}
                        height={100}
                        className="w-10 h-10 items-center -mt-1 -ml-1"
                      />
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
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
