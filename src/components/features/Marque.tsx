"use client";
import { Brand } from "@/constants/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Marquee } from "../ui/marquee";

const Marque = ({ className = "" }) => {
  return (
    <div
      className={cn(
        "relative flex h-fit w-full flex-col items-center justify-center mb-24 overflow-hidden rounded-lg bg-background",
        className
      )}
    >
      <h1 className="max-w-xl mx-auto text-center font-medium text-4xl py-5 pb-5">
        <span className="font-uncut font-medium tracking-tighter">
          Trusted by the
        </span>
        <span className="font-title underline px-3">Leading</span>{" "}
        <span className="font-uncut font-medium tracking-tighter">brands</span>
      </h1>
      <Marquee pauseOnHover className="[--duration:35s]">
        {Brand.concat(Brand).map((review, index) => (
          <Image
            key={index}
            src={review.url}
            alt={review.name}
            className="h-16 w-auto ml-5 rounded-full  "
            height={200}
            width={200}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default Marque;
