"use client";

import React from "react";
import Image from "next/image";
import {
  Building, Rocket, Phone, Building2, Code, Heart, Car,
  Camera, Briefcase, Globe, Scale, Users, Trophy, Gamepad2,
  Shirt, Zap, Wheat, Truck
} from "lucide-react";
import { cn } from "@/lib/utils";

const industryData = [
  { icon: <Building size={20} />, label: "Finance & Banking", color: "bg-pink-100", className:"rounded-tl-3xl rounded-br-3xl" },
  { icon: <Rocket size={20} />, label: "E-commerce", color: "bg-green-100",className:"rounded-tl-3xl rounded-br-3xl" },
  { icon: <Building2 size={20} />, label: "Real Estate", color: "bg-blue-100",className:"rounded-tl-3xl rounded-br-3xl" },
  { icon: <Code size={20} />, label: "Software", color: "bg-yellow-100",className:"rounded-tr-3xl rounded-bl-3xl" },
  { icon: <Heart size={20} />, label: "Health & Fitness", color: "bg-green-100",className:"rounded-tr-3xl rounded-bl-3xl" },
  { icon: <Car size={20} />, label: "Automotive", color: "bg-purple-100" ,className:"rounded-tr-3xl rounded-bl-3xl"},
  { icon: <Camera size={20} />, label: "Photo & Video", color: "bg-yellow-100",className:"rounded-tr-3xl rounded-bl-3xl" },
  { icon: <Briefcase size={20} />, label: "Business", color: "bg-indigo-100",className:"rounded-tl-3xl rounded-br-3xl" },
  { icon: <Rocket size={20} />, label: "Startup", color: "bg-blue-100",className:"rounded-tr-3xl rounded-bl-3xl" },
  { icon: <Users size={20} />, label: "Non-profit", color: "bg-yellow-100",className:"rounded-tr-3xl rounded-bl-3xl" },
  { icon: <Building size={20} />, label: "Govt. & Public Sector", color: "bg-blue-100",className:"rounded-tr-3xl rounded-bl-3xl" },
  { icon: <Trophy size={20} />, label: "Sports & Fitness", color: "bg-purple-100",className:"rounded-tr-3xl rounded-bl-3xl" },
  { icon: <Shirt size={20} />, label: "Fashion & Apparel", color: "bg-yellow-100",className:"rounded-tl-3xl rounded-br-3xl" },
  { icon: <Zap size={20} />, label: "Energy & Utilities", color: "bg-green-100" ,className:"rounded-tl-3xl rounded-br-3xl"},
  { icon: <Wheat size={20} />, label: "Agriculture", color: "bg-green-100",className:"rounded-tl-3xl rounded-br-3xl" },
  { icon: <Truck size={20} />, label: "Logistics", color: "bg-blue-100" ,className:"rounded-tl-3xl rounded-br-3xl"},
];

const OurIndustryExpertise = () => {
  return (
    <section className="relative bg-[#0B0823] py-24 px-4 md:px-8 overflow-hidden ">
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
            Our Industry Expertises
          </h1>
          <p className="text-xl text-gray-300 font-uncut">
            Our deep understanding of diverse industries empowers us to design customized
            software solutions. Let our expertise be the catalyst for your next triumph.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-6xl mx-auto w-[70%] pb-10">
          {industryData.map((item, index) => (
            <div
              key={index}
              className={cn("flex flex-col items-center justify-center text-gray-800  px-2 py-3 transition-transform hover:scale-105",item.color, item.className)}
            >
              <div className="mb-2">{item.icon}</div>
              <div className="text-sm font-medium text-center font-uncut">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurIndustryExpertise;
