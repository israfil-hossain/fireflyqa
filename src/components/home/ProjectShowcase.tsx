"use client";

import { motion } from "framer-motion";
import ContainerBox from "../layout/ContainerBox";
import { projects } from "@/constants/projectData";
import Image from "next/image";
import { useProjectData } from "@/service/project-data";
import Loader from "../ui/loader";
import Truncate from "../ui/truncate";

export default function ProjectsShowcase() {
  const { data: productData, isLoading, error, refetch } = useProjectData();

  console.log("projects : ===>", productData);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="bg-white py-12">
      <ContainerBox className="container mx-auto px-4 py-10">
        {/* Heading */}
        <div className="flex flex-col spacy-y-5 pb-10 justify-center items-center">
          <h1 className="max-w-2xl mx-auto text-start font-medium text-4xl md:text-4xl lg:text-5xl">
            <span className="font-title">Our Custom Software</span> <br />
            <span className="font-uncut font-medium tracking-tighter">
              Development Products
            </span>
          </h1>
          <a
            href="/projects"
            className="text-blue-600 hover:text-blue-800 flex r font-uncut mt-5 mb-8"
          >
            View More <span className="ml-2">→</span>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6  lg:h-[450px] overflow-hidden">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-[440px] overflow-hidden">
              <div className="absolute inset-0 z-0 h-full ">
                <Image
                  width={500}
                  height={500}
                  src={productData[0]?.thumbnail?.asset?.url}
                  alt={"showcase"}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="relative rounded-l-lg z-10 w-1/2 pb-10 bg-gradient-to-t from-[#1C1E53] to-[#1c1e5388] h-full flex flex-col justify-end items-center">
                <h3 className="text-3xl text-center font-semibold text-white mb-4">
                  {productData[0]?.title}
                </h3>
                <Truncate
                  text={productData[0]?.description}
                  className="text-white px-2 text-center"
                  limit={80}
                />
                <a
                  href={`projects/${productData[0]?.slug?.current}`}
                  className="underline text-yellow-300 text-center"
                >
                  View project
                </a>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-rows-2 gap-5 lg:h-[440px]">
            {productData?.slice(1, 3).map((project: any) => (
              <motion.div
                key={project?.id}
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[220px] overflow-hidden rounded-lg shadow-lg">
                  <div className="absolute inset-0 z-0 opacity-60">
                    <Image
                      width={500}
                      height={200}
                      src={project?.thumbnail?.asset?.url}
                      alt={"showcase"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative h-[220px] w-1/2 pb-8 z-10 bg-gradient-to-b from-[#1C1E53] to-[#1c1e53ab] flex flex-col justify-end  ">
                    <h3 className="text-xl font-bold text-white text-center mb-4">
                      {project?.title}
                    </h3>
                    <Truncate
                      text={project?.description}
                      limit={45}
                      className="text-white px-2 text-center"
                    />
                    <a
                      href={`projects/${project?.slug?.current}`}
                      className="text-yellow-300 underline text-center"
                    >
                      View project
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ContainerBox>
    </section>
  );
}
