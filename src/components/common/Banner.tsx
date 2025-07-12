"use client";
import { staggerChildren, fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import Particles from "../ui/particles";

const Banner = ({
  title,
  subtitle,
  banner,
  pageName,
  optionalBg,
  className,
  isSchedule = false,
}: {
  title: any;
  subtitle?: string;
  banner?: any;
  pageName: string;
  optionalBg?: React.ReactNode;
  className?: any;
  isSchedule?: boolean;
}) => {
  return (
    <section className="relative w-full h-fit overflow-hidden pt-5">
      <Image
        className="absolute top-0 left-0 w-full h-auto"
        src="/images/vectors/shape.svg"
        alt="shape"
        width={1200}
        height={800}
      />
      <div className="relative  w-full">
        <Container className="py-20 max-w-6xl mx-auto items-center ">
          <div className="relative flex flex-col items-center justify-center py-12 lg:py-20 px-0 rounded-2xl lg:rounded-3xl bg-background/20 text-center border border-foreground/20 overflow-hidden">
            <Particles
              refresh
              ease={90}
              quantity={200}
              color="#2853fe"
              className="hidden lg:block absolute inset-0 z-0"
            />
            <Particles
              refresh
              ease={80}
              quantity={250}
              color="#2853fe"
              className="block lg:hidden absolute inset-0 z-0"
            />

            <motion.div
              className="absolute -bottom-1/8 left-1/3 -translate-x-1/2 w-44 h-32 lg:h-52 lg:w-1/3 rounded-full blur-[5rem] lg:blur-[10rem] -z-10"
              style={{
                background:
                  "conic-gradient(from 0deg at 50% 50%, #a855f7 0deg, #3b82f6 180deg, #06b6d4 360deg)",
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="lg:w-1/2 mb-12 lg:mb-0 items-center"
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <motion.h4 className="text-lg font-uncut  mb-3 pl-2">
                {pageName}
              </motion.h4>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 font-title"
                variants={fadeIn}
              >
                {title}
              </motion.h1>
              <motion.p className="text-lg mb-8 font-uncut" variants={fadeIn}>
                {subtitle}
              </motion.p>
              {isSchedule && ( 
                <Link
                  className="block py-2.5 px-5 rounded-full bg-primary/90 font-manrope text-base text-white mt-8 "
                  href="https://calendly.com/fireflyqa/30min"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Schedule a Call
                </Link>
              )}
            </motion.div>

            {banner && (
              <motion.div
                className="lg:w-1/2 w-96"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative  w-full flex justify-end ">
                  <Image
                    src={banner}
                    alt="hero"
                    width={500}
                    height={500}
                    className={className}
                  />
                </div>
              </motion.div>
            )}
            {optionalBg && (
              <motion.div
                className="lg:w-1/2 w-96"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                {optionalBg}
              </motion.div>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
