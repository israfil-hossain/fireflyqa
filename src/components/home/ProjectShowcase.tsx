"use client";

// components/ProjectsShowcase.tsx
import { motion } from "framer-motion";
import ContainerBox from "../layout/ContainerBox";
import { projects } from "@/constants/projectData";
import Image from "next/image";

export default function ProjectsShowcase() {
  return (
    <section className="bg-white py-12">
      <ContainerBox className="container mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            View our projects
          </h2>
          <a
            href="/projects"
            className="text-blue-600 hover:text-blue-800 flex items-center"
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
                  src={projects[0].image}
                  alt={"showcase"}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="relative rounded-l-lg z-10 w-1/2 pb-10 bg-gradient-to-t from-[#1C1E53] to-[#1c1e5388] h-full flex flex-col justify-end items-center">
                <h3 className="text-2xl text-center font-semibold text-white mb-4">{projects[0].title}</h3>
                <p className="mb-4 text-center font-normal text-grey">{projects[0].description}</p>
                <a href={projects[0].link} className="underline text-yellow-300 text-center">
                  View project
                </a>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-rows-2 gap-5 lg:h-[440px]">
            {/* Smaller project cards */}
            {projects.slice(1).map((project) => (
              <motion.div
                key={project.id}
                className="relative "
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[220px] overflow-hidden rounded-lg shadow-lg">
                  <div className="absolute inset-0 z-0 opacity-60">
                    <Image
                      width={500}
                      height={200}
                      src={project.image}
                      alt={"showcase"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative h-[220px] w-1/2 pb-8 z-10 bg-gradient-to-b from-[#1C1E53] to-[#1c1e53ab] flex flex-col justify-end  ">
                    <h3 className="text-xl font-bold text-white text-center mb-4">{project.title}</h3>
                    <p className="mb-4 text-white text-center font-normal ">{project.description}</p>
                    <a href={project.link} className="text-yellow-300 underline text-center">
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
