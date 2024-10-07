"use client";
import React from "react";
import CustomAccordion from "../common/CustomAccordion";
import { faqItems } from "@/constants/frequentlyQuestion";
import ContainerBox from "../layout/ContainerBox";

export const FrequentlyQuestion = () => {
  return (
    <ContainerBox>
      <div className="grid lg:grid-cols-2 gap-6 py-16">
        <div>
          <h2 className="text-2xl font-bold text-tintblue lg:max-w-sm">
            Frequently asked questions
          </h2>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
          >
            Contact us for more info
          </a>
        </div>
        <div>
          <CustomAccordion items={faqItems} />
        </div>
      </div>
    </ContainerBox>
  );
};
