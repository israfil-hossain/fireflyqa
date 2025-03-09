'use client'; 
import { Brand } from "@/constants/assets";
import React from "react";

const Marque = () => {
  return (
    <div className="bg-white py-8 overflow-hidden">
      <div className="max-w-screen-lg mx-auto flex items-center">
        <p className="text-2xl font-bold mr-8 whitespace-nowrap">
          Trusted by some of the biggest brands
        </p>
        <div className="relative flex w-full overflow-hidden">
          <div className="flex space-x-12 animate-marquee">
            {Brand.concat(Brand).map((item, index) => (
              <img
                key={index}
                src={item.url}
                alt={item.name}
                className="h-12 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marque;
