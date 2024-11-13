"use client";

// components/Footer.js
import { motion } from "framer-motion";
import { Copy, Facebook, Instagram, Linkedin } from "lucide-react";
import "./footer.css";
import ContainerBox from "../layout/ContainerBox";
import { logo } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { subscribeToNewsletter } from "@/lib/requests";
import { toast } from "sonner";
import { ClientError } from "graphql-request";
import { Button } from "../ui/button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState("");

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(type);

      // Show a toast notification
      toast.success(
        `${type === "email" ? "Email" : "Phone"} copied to clipboard!`
      );

      // Reset the animation after a brief delay
      setTimeout(() => setIsCopied(""), 2000);
    });
  };

  const { mutateAsync, isPending, error } = useMutation({
    mutationKey: ["newsletter"],
    mutationFn: subscribeToNewsletter,
    onError: onError,
    onSuccess: onSuccess,
  });

  function onSuccess() {
    toast.success(
      "Subscribed to newsletter! Check your email to confirm your subscription."
    );
    setEmail(""); // Clear email after successful subscription
  }

  function onError(err: ClientError) {
    if (!err.response.errors) return toast.error("Something went wrong");
    toast.error(err.response.errors[0]!.message);
  }

  function handleSubscribe() {
    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setEmailError(null); // Clear any previous errors
    mutateAsync(email);
  }

  function validateEmail(email: string) {
    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <footer>
      <div className="parentF">
        <div className="magicpatternF" />
        <ContainerBox>
          <div className="container grid lg:grid-cols-2 grid-cols-1 lg:gap-16 px-4 pt-10 items-center">
            {/* Left section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 flex flex-col justify-end"
            >
              <Image src={logo} alt="Logo" width={120} height={80} />
              <p className="text-gray-300 max-w-xs pb-8">
                We are always open to discuss your project and improve your
                online presence.
              </p>
              <motion.div
                className="p-4 lg:px-8 bg-tirtiary text-black lg:rounded-lg flex space-x-5 justify-between"
                whileHover={{ scale: 1.05 }}
              >
                {/* Email section */}
                <div className="flex flex-col space-y-2">
                  <div>Email me at</div>
                  <div className="font-bold flex space-x-3 ">
                    <h2>contact@website.com</h2>
                    <motion.button
                    onClick={() => handleCopy("contact@website.com", "email")}
                    whileTap={{ scale: 0.9 }} // Add button animation when clicked
                    animate={isCopied === "email" ? { scale: [1, 1.2, 1] } : {}} // Animate if copied
                    className="text-blue-500 underline text-sm"
                  >
                    {isCopied === "email" ? "Copied!" : <Copy className="w-5 h-5 text-tintblue"/>}
                  </motion.button>
                  </div>
                  
                </div>

                {/* Phone section */}
                <div className="flex flex-col space-y-2">
                  <div>Call me at</div>
                  <div className=" flex space-x-3 ">
                    <h2 className="font-bold text-[16px]">+123-456-7890</h2>
                    <motion.button
                    onClick={() => handleCopy("+123-456-7890", "phone")}
                    whileTap={{ scale: 0.9 }} // Add button animation when clicked
                    animate={isCopied === "phone" ? { scale: [1, 1.2, 1] } : {}} // Animate if copied
                    className="text-blue-500 underline text-sm"
                  >
                    {isCopied === "phone" ? "Copied!" : <Copy  className="w-5 h-5 text-tintblue"/>}
                  </motion.button>
                  </div>
                  
                </div>
              </motion.div>
            </motion.div>

            {/* Right section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 md:mt-0 space-y-4 mb-5 pb-5 pt-5"
            >
              <h3 className="text-2xl font-bold text-white">{"Let's Talk!"}</h3>
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

              <div className="pt-5">
                <p className="text-[17px] text-white font-medium">
                  Subscribe to Newsletter
                </p>
                <div className="flex flex-col mt-3">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e: any) => setEmail(e.target.value)}
                      className="px-5 py-2 rounded-l-lg"
                      required
                    />
                    <button
                      onClick={handleSubscribe}
                      disabled={isPending}
                      className="bg-tirtiary py-2 rounded-r-lg rounded-l-none px-3 text-black font-medium"
                    >
                      {isPending ? "Loading..." : "Subscribe"}
                    </button>
                  </div>
                  {emailError && (
                    <p className="text-red-500 mt-1 text-sm">{emailError}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </ContainerBox>
      </div>
      <ContainerBox>
        {/* Bottom section */}
        <div className="border-t border-gray-500 py-8 text-center lg:flex lg:space-y-0 space-y-5 lg:justify-between justify-center items-center">
          <p className="text-gray-400">Copyright 2022, Flowentech.com</p>
          <motion.div
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ul className="flex justify-center space-x-8">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="/feature" className="hover:text-white">
                  Features
                </a>
              </li>

              <li>
                <a href="/faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white">
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
