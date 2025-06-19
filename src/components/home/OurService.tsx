"use client";
import React from "react";
import { services } from "@/constants/serviceData";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function OurService({className=""}) {
  return (
     <section
      className={cn(
        "max-w-6xl flex flex-col gap-10 md:gap-12 lg:gap-16 mx-auto py-4 md:py-6 lg:py-10 px-6 md:px-4",
        className
      )}
    >
      <h1 className="max-w-2xl mx-auto text-center font-medium text-4xl md:text-5xl lg:text-6xl">
        <span className="font-title">Explore our services</span> <br />
        <span className="font-uncut font-medium tracking-tighter">
          That suits for you
        </span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service) => (
          <article
            className="p-6 space-y-3 hover:bg-primary/5 border rounded-xl duration-300"
            key={service.id}
          >
            <h1 className="font-medium font-uncut tracking-tight text-2xl">
              {service.title}
            </h1>
            <Image
              className="w-14"
              src={service.icon}
              alt={service.title}
              width={500}
              height={500}
            />
            <p className="font-light text-lg">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
