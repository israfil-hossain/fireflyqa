"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "../global/container";
import Particles from "../ui/particles";

const CTA = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full ">
      <Container className="py-20 max-w-6xl mx-auto">
        <div className="relative flex flex-col items-center justify-center py-12 lg:py-20 px-0 rounded-2xl lg:rounded-3xl bg-background/20 text-center border border-foreground/20 overflow-hidden">
          <Particles
            refresh
            ease={90}
            quantity={80}
            color="#2853fe"
            className="hidden lg:block absolute inset-0 z-0"
          />
          <Particles
            refresh
            ease={80}
            quantity={35}
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
          <div className="text-center px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium leading-snug">
              Ready to get your <br />
              <span className="font-title italic text-primary">Solutions</span>?
            </h2>

            <p className="mt-4 text-sm md:text-lg text-accent-foreground/80 max-w-2xl mx-auto font-uncut">
              Book a <strong>30-minute</strong> meeting — totally free!
            </p>
          </div>

          <Link
            className="block py-2.5 px-5 rounded-full bg-primary/90 font-manrope text-base text-white mt-8"
            href="https://calendly.com/fireflyqa/30min"
            target="_blank"
          >
            Schedule a Call
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CTA;
