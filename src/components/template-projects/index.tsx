// "use client";
// import React from "react";
// import Banner from "../common/Banner";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
// import { tabVariants } from "@/utils/motion";
// import { motion } from "framer-motion";
// import { templates } from "./template";
// import ProjectCard from "./ProjectCard";
// import { Products } from "./ProductCard";

// export const Projects = () => {
  
//   return (
//     <div>
//       <Banner
//         pageName="what we created"
//         title="Our work Portfolio"
//         subtitle="We help teams create great digital products by providing them with tools and technology to make 
//         the design-to-code process universally accessible."
//         optionalBg={
//           <div className="relative ">
//             <div className="absolute  inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform rotate-3 h-68"></div>
//             <div className="relative bg-gray-800 p-6 rounded-lg shadow-xl ">
//               <div className="flex space-x-2 mb-4">
//                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
//               </div>
//               <div className="space-y-4 h-40">
//                 <div className="h-8 pl-5 pt-1 bg-gray-700 rounded w-3/4 text-white ">
//                   Our Work Portfolio
//                 </div>
//                 <div className="h-4 bg-gray-700 rounded"></div>
//                 <div className="h-4 bg-gray-700 rounded w-5/6"></div>
//                 <div className="h-6 text-[12px] pl-5 pt-1 bg-gray-700 rounded text-gray-300  ">
//                   We help teams create great digital products ...
//                 </div>
//                 <div className="h-4 bg-gray-700 rounded w-5/6"></div>
//               </div>
//             </div>
//           </div>
//         }
//       />
//       <div className="text-center items-center flex flex-col justify-center w-full py-10">
//         <Tabs
//           defaultValue="all"
//           className="w-full flex flex-col justify-center items-center"
//         >
//           <TabsList className="flex justify-center space-x-4 mb-6">
//             <TabsTrigger
//               value="all"
//               className="font-medium lg:text-[18px] text-[16px]"
//             >
//               All
//             </TabsTrigger>
//             <TabsTrigger
//               value="web"
//               className="font-medium lg:text-[18px] text-[16px]"
//             >
//               Web
//             </TabsTrigger>
//             <TabsTrigger
//               value="mobile"
//               className="font-medium lg:text-[18px] text-[16px]"
//             >
//               Mobile
//             </TabsTrigger>
//             <TabsTrigger
//               value="nocode"
//               className="font-medium lg:text-[18px] text-[16px]"
//             >
//               NoCode
//             </TabsTrigger>
//           </TabsList>
//           <div className="h-[1px] bg-gray-200 w-[60%] items-center mb-4" />

//           Backend tab content
//           <TabsContent value="all">
//             <motion.div
//               className="flex mt-2 gap-5 justify-center items-center  flex-wrap"
//               initial="hidden"
//               animate="visible"
//               variants={tabVariants}
//             >
//               <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {templates.map((template, index) => (
//                   <ProjectCard key={index} template={template} />
//                 ))}
//               </div>

//             </motion.div>
//           </TabsContent>

//           Frontend tab content
//           <TabsContent value="web">
//             <motion.div
//               className="flex mt-6 gap-5 justify-center items-center  flex-wrap"
//               initial="hidden"
//               animate="visible"
//               variants={tabVariants}
//             >
//               {techStackData.frontend.map((tech) => (
//                 <motion.div key={tech.name} variants={iconVariants} 
//                 className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]  p-2  border flex hover:border-darkblue/40 hover:cursor-pointer hover:shadow-2xl bg-grey 
//                 justify-center items-center overflow-hidden rounded-full ">
//                   <Image src={tech.logo} alt={tech.name} width={100} height={100} className="object-contain" />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </TabsContent>

//           Databases tab content
//           <TabsContent value="mobile">
//             <motion.div
//               className="flex justify-center mt-6 space-x-4"
//               initial="hidden"
//               animate="visible"
//               variants={tabVariants}
//             >
//               {techStackData.databases.map((tech) => (
//                 <motion.div key={tech.name} variants={iconVariants} 
//                 className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]  p-2  border flex hover:border-darkblue/40 hover:cursor-pointer hover:shadow-2xl bg-grey 
//                 justify-center items-center overflow-hidden rounded-full ">
//                   <Image src={tech.logo} alt={tech.name} width={100} height={100} />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </TabsContent>

//           CMS tab content
//           <TabsContent value="nocode">
//             <motion.div
//               className="flex justify-center mt-6 space-x-4"
//               initial="hidden"
//               animate="visible"
//               variants={tabVariants}
//             >
//               {techStackData.nocode.map((tech) => (
//                 <motion.div key={tech.name} variants={iconVariants} 
//                 className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]  p-2  border flex hover:border-darkblue/40 hover:cursor-pointer hover:shadow-2xl bg-grey 
//                 justify-center items-center overflow-hidden rounded-full ">
//                   <Image src={tech.logo} alt={tech.name} width={100} height={100} />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </TabsContent>
//         </Tabs> 
//       </div>
//     </div>
//   );
// };
