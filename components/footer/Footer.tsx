"use client";

// components/Footer.js
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import "./footer.css";
import ContainerBox from "../layout/ContainerBox";
import { logo } from "@/assets";
import Image from "next/image";

export default function Footer() {
  // const [setHoverEmail] = useState(false);

  return (
    <footer className=" ">
      <div className="parentF">
        <div className="magicpatternF" />
        <ContainerBox>
          <div className="container grid lg:grid-cols-2 grid-cols-1 lg:gap-16  px-4 pt-10  items-center">
            {/* Left section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 flex flex-col justify-end"
            >
              <Image src={logo} alt={logo} width={120} height={80} />
              <p className="text-gray-300 max-w-xs pb-8">
                We are always open to discuss your project and improve your
                online presence.
              </p>
              <motion.div
                className="mt-10 p-4 lg:px-8 bg-[#FEC75A] text-black  lg:rounded-t-lg flex space-x-5 justify-between"
                whileHover={{ scale: 1.05 }}
                // onHoverStart={() => setHoverEmail(true)}
                // onHoverEnd={() => setHoverEmail(false)}
              >
                <div className="flex flex-col space-y-2">
                  <div>Email me at</div>
                  <div className="font-bold">contact@website.com</div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div>Email me at</div>
                  <div className="font-bold">contact@website.com</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 md:mt-0 space-y-4 mb-8 pb-8"
            >
              <h3 className="text-2xl font-bold text-white">Lets Talk!</h3>
              <p className="text-gray-300 text-wrap max-w-lg">
                We are always open to discuss your project and improve your
                online presence and help with UX/UI design challenges.
              </p>

              <div className="flex space-x-4">
                {/* Social Icons */}
                <motion.a href="#" whileHover={{ scale: 1.1 }}>
                  <Facebook size={20} className="text-white" />
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.1 }}>
                  <Instagram className="text-white" />
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.1 }}>
                  <Linkedin size={20} className="text-white" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </ContainerBox>
      </div>
      <ContainerBox>
        {/* Bottom section */}
        <div className="border-t border-gray-500 py-8 text-center lg:flex lg:space-y-0 space-y-5 lg:justify-between justify-center items-center ">
          <p className="text-gray-400">Copyright 2022, Flowentech.com</p>
          <motion.div
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ul className="flex justify-center space-x-8">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </ContainerBox>
    </footer>
  );
}
