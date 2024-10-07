import { Variants } from "framer-motion";

export const fadeIn: Variants  = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 }},
  
};

export const staggerChildren: Variants  = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants: Variants  = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0,transition: { duration: 0.3 }},
};

export const containerVariants: Variants  = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const clients_containerVariants: Variants  = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
};