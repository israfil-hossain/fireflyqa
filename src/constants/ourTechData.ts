import { antd, bootstrap, bubble_icon, css, docker, express, html, java, js, mongodb, mui, mysql, net, nextjs, nodejs, postgresql, reactjs, redux, shopify, springtboot, tailwind, threejs, typescript, wordpress } from "./assets";

// Demo data for each tech stack category
export const techStackData = {
    backend: [
      { name: "JavaScript", logo: js },
      { name: "TypeScript", logo: typescript },
      { name: "Node.js", logo: nodejs },
      { name: "Express", logo: express },
      { name : "Dot Net", logo: net},
      { name: "Java", logo: java },
      { name: "Java", logo: springtboot },
      
    ],
    frontend: [
      { name: "React", logo: reactjs },
      { name: "Next Js", logo: nextjs },
      { name: "Html", logo: html },
      { name : "Three Js", logo: threejs}, 
      { name : "JavaScript", logo: js},
      { name: "TypeScript", logo: typescript },
      { name: "CSS", logo: css },
      { name: "Reux", logo: redux },
      { name: "Mui", logo: mui },
      { name: "Antd", logo: antd },
      { name: "Tailwind", logo: tailwind },
      { name: "Bootstrap", logo: bootstrap },
    ],
    databases: [
      { name: "MongoDB", logo: mongodb },
      { name: "PostgreSQL", logo: postgresql },
      { name: "MySQL", logo: mysql },
    ],
    nocode: [
      { name: "WordPress", logo: wordpress },
      { name: "Shopify", logo: shopify },
      { name: "Bubble.io", logo: bubble_icon },
    ],
   
    devops: [
      { name: "Docker", logo: docker },
      { name: "Kubernetes", logo: docker },
      { name: "Terraform", logo: docker },
    ],
  };