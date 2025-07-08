"use client";

import React from "react";
import Image from "next/image";
import {
  Wrench, Building2, Users, Settings2, Flame, Hammer, ChefHat,
  Cog, Hotel, AirVent, Lightbulb, Droplet, PlugZap,
  Code,
  AirVentIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { IconRobot } from "@tabler/icons-react";

const industryData = [
  {
    icon: <Users size={20} />,
    label: "Manpower (Skilled & Unskilled)",
    color: "bg-pink-100",
    className: "rounded-tl-3xl rounded-br-3xl",
  },
  {
    icon: <Wrench size={20} />,
    label: "Mechanical Services",
    color: "bg-blue-100",
    className: "rounded-tr-3xl rounded-bl-3xl",
  },
  {
    icon: <PlugZap size={20} />,
    label: "Electrical Services",
    color: "bg-yellow-100",
    className: "rounded-tl-3xl rounded-br-3xl",
  },
  {
    icon: <Droplet size={20} />,
    label: "Plumbing Services",
    color: "bg-green-100",
    className: "rounded-tr-3xl rounded-bl-3xl",
  },
  {
    icon: <AirVent size={20} />,
    label: "HVAC Solutions",
    color: "bg-purple-100",
    className: "rounded-tl-3xl rounded-br-3xl",
  },
  {
    icon: <Cog size={20} />,
    label: "BAS (Automation Systems)",
    color: "bg-indigo-100",
    className: "rounded-tr-3xl rounded-bl-3xl",
  },
  {
    icon: <ChefHat size={20} />,
    label: "Kitchen Equipment Maintenance",
    color: "bg-yellow-100",
    className: "rounded-tl-3xl rounded-br-3xl",
  },
  {
    icon: <Hammer size={20} />,
    label: "Renovation & Installation",
    color: "bg-green-100",
    className: "rounded-tr-3xl rounded-bl-3xl",
  },
  {
    icon: <Hotel size={20} />,
    label: "Hospitality Services",
    color: "bg-pink-100",
    className: "rounded-tl-3xl rounded-br-3xl",
  },
  {
    icon: <Settings2 size={20} />,
    label: "Facility Management",
    color: "bg-blue-100",
    className: "rounded-tr-3xl rounded-bl-3xl",
  },
   {
    icon: <Code size={20} />,
    label: "Web & Software Solutions",
    color: "bg-green-100",
    className: "rounded-tr-3xl rounded-bl-3xl",
  },
  {
    icon: <IconRobot size={20} />,
    label: "AI Agents",
    color: "bg-purple-100",
    className: "rounded-tl-3xl rounded-br-3xl",
  },
];

const OurIndustryExpertise = () => {
  return (
    <section className="relative bg-[#4b163A] py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Image */}
      <Image
        className="absolute top-0 left-0 w-full md:h-full object-cover md:object-left-top z-0"
        src="/images/vectors/cta-section.svg"
        alt="cta section"
        width={1200}
        height={800}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-title">
            Our Industry Expertise
          </h1>
          <p className="text-xl text-gray-300 font-uncut">
            Firefly delivers expert manpower and specialized technical contracting solutions across core sectors like MEP, hospitality, and maintenance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto w-[85%] pb-10">
          {industryData.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center justify-center text-gray-800 px-2 py-3 transition-transform hover:scale-105",
                item.color,
                item.className
              )}
            >
              <div className="mb-2">{item.icon}</div>
              <div className="text-sm font-medium text-center font-uncut">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurIndustryExpertise;
