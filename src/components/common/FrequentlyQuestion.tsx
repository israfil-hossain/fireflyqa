"use client";
import CustomAccordion from "./CustomAccordion";
import { faqItems } from "@/constants/frequentlyQuestion";
import ContainerBox from "../layout/ContainerBox";

export const FrequentlyQuestion = () => {
  return (
    <ContainerBox className="pt-10 pb-10 mt-20">
      <div className="grid lg:grid-cols-2 gap-6 ">
        <div>
          <h1 className="max-w-2xl items-start text-start font-medium text-4xl md:text-5xl lg:text-6xl">
            <span className="font-title font-medium tracking-tighter">
               Frequently asked 
            </span>{" "}
            <br />
            <span className="font-uncut">questions</span>
          </h1>
          <a
            href="/contact-us"
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
