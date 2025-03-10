// components/DynamicCard.js
import Image from "next/image";
import React from "react";

const ProjectCard = ({ template }: { template: any }) => {
  return (
    <div className="p-5 rounded-md shadow-lg flex flex-col ">
      <div
        className="rounded-lg shadow-lg text-white flex flex-col items-center w-full h-40 mb-5"
        style={{
          background: `linear-gradient(to right, ${template.gradientColors[0]}, ${template.gradientColors[1]})`,
        }}
      >
        <div className="w-full">
          <Image
            width={500} 
            height={300}
            src={template.image}
            alt={template.title}
            className="rounded-lg object-cover w-full"
          />
        </div>
      </div>
      <div className="flex flex-col justify-start">
        <h3 className="text-2xl font-bold mb-4 text-start">{template.title}</h3>
        <p className="text-start mb-4">{template.description}</p>
        <button className="bg-white text-black text-start py-2 rounded-lg font-medium hover:bg-gray-100 w-40">
          View Portfolio →
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
