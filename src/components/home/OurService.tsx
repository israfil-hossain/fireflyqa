'use client';
import React from "react";
import { ServiceData } from "@/constants/serviceData";
import Image from "next/image";
import ContainerBox from "../layout/ContainerBox";


export default function OurService() {
  return (
    <div className="text-center  items-center py-8">
      <div className="text-center mb-8 items-center flex flex-col justify-center">
        <h2 className="text-gray-600">Service</h2>
        <h3 className="text-3xl font-semibold text-tintblue max-w-lg">
          Service We Offer
        </h3>
      </div>
      <ContainerBox >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ServiceData?.map((feature: any, index: number) => (
            <div className=" bg-gradient-to-br from-white to-neutral-100 hover:bg-gradient-to-br hover:from-blue-50 hover:to-green-50 shadow-lg hover:shadow-xl rounded-lg p-4 cursor-pointer border border-gray-200 h-52 min-w-[350px]"
              key={index}
            >
              <div className="mb-3  flex flex-col items-center space-x-2">
                <Image
                  src={feature.icon}
                  alt="icon"
                  width={50}
                  height={50}
                  className="w-12 h-12 p-2 bg-indigo-200 justify-center items-center border rounded-full overflow-hidden"
                />
                <h6 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h6>
              </div>
              <p className="text-sm text-gray-600 justify-self-center text-pretty">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </ContainerBox>
    </div>
  );
}
