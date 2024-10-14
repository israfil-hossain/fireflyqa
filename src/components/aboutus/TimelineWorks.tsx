'use client'; 

import { motion } from "framer-motion";
import React from "react";

// Demo Data (JSON format)
const steps = [
  {
    id: 1,
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don’t have the time, expertise, or desire to do.",
  },
  {
    id: 2,
    title: "Sprint planning",
    description:
      "Sprint roadmaps is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
  },
  {
    id: 3,
    title: "Tech architecture",
    description:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
  },
  {
    id: 4,
    title: "Standups & weekly demos",
    description:
      "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
  },
  {
    id: 5,
    title: "Code reviews",
    description:
      "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.",
  },
  {
    id: 6,
    title: "Iterative delivery",
    description:
      "We divide the implementation process into several checkpoints rather than a single deadline.",
  },
];

// Variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between animations of each step
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TimelineWorks = () => {
  return (
    <div className="container mx-auto py-10 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">How development through Alcaline works</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {steps.map((step, index) => (
          <motion.div key={step.id} variants={stepVariants}>
            <div className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
                #{step.id}
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-800">{step.title}</h3>
              <p className="mt-4 text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TimelineWorks;
