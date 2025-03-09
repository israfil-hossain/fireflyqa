import { dev_code, dev_codereview, dev_experience, dev_quality, dev_security, dev_ux } from "@/assets/developmentIcon";

export const developmentData = [
  {
    id: 1,
    title: "UX-Centered Development",
    description:
      "We take a UX-first approach to development, ensuring that every project is driven by user experience design. Our designers collaborate closely with the development team to guarantee that the design vision is seamlessly translated into code.",
    icon: dev_ux, // Replace with actual icon if needed
    className: "h-12 w-12 rounded-lg flex justify-center items-center bg-gradient-to-r from-black via-gray-800 to-gray-900",
  },
  {
    id: 2,
    title: "Building Shared Understanding",
    description:
      "At Flowentech, we foster a shared understanding between design and development teams from the start. This collaborative approach ensures that all stakeholders are aligned on project goals, resulting in a more effective and efficient development process.",
    icon: dev_code,
    className: "h-12 w-12 rounded-lg flex justify-center items-center bg-gradient-to-r from-[#68DBF2] to-[#509CF5]",
  },
  {
    id: 3,
    title: "Proven Expertise and Experience",
    description:
      "Our team brings years of industry experience to each project, combining technical expertise with a deep understanding of client needs. We have successfully delivered projects of all sizes, from small startups to large enterprises.",
    icon: dev_experience,
    className: "h-12 w-12 rounded-lg flex justify-center items-center bg-gradient-to-r from-[#FF92AE] to-[#FF3D9A]",
  },
  {
    id: 4,
    title: "Robust Security & Intellectual Property Protection",
    description:
      "We prioritize the security of your project and the protection of intellectual property (IP). Our development processes include rigorous security practices to safeguard both your data and proprietary information.",
    icon: dev_security,
    className: "h-12 w-12 rounded-lg flex justify-center items-center bg-gradient-to-r from-[#67E9F1] to-[#24E795]",
  },
  {
    id: 5,
    title: "Comprehensive Code Reviews",
    description:
      "We implement thorough code reviews as part of our development process to ensure that the codebase is clean, maintainable, and follows industry best practices. This helps identify potential issues early and improve overall quality.",
    icon: dev_codereview,
    className: "h-12 w-12 rounded-lg flex justify-center items-center bg-gradient-to-r from-[#FFEF5E] to-[#F7936F]",
  },
  {
    id: 6,
    title: "Quality Assurance & Rigorous Testing",
    description:
      "We incorporate extensive quality assurance (QA) and testing into every project to ensure that all features function as intended. Our QA process includes both automated and manual testing to guarantee a flawless user experience.",
    icon: dev_quality,
    className: "h-12 w-12 rounded-lg flex justify-center items-center bg-gradient-to-r from-[#F76680] to-[#57007B]",
  },
];
