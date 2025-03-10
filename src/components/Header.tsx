"use client";

import { logo, logo2 } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerHeader,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-tintblue h-[80px] items-center">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center text-white h-full">
        {/* Logo */}
        <Link href="/" className="">
          <Image
            src={logo}
            alt="logo"
            width={300}
            height={120}
            className="w-32 lg:w-40"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className={`hover:text-yellow-300 transition-colors ${
              pathname === "/" ? "text-yellow-300" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`hover:text-yellow-300 transition-colors ${
              pathname === "/about-us" ? "text-yellow-300" : ""
            }`}
          >
            About us
          </Link>
          <Link
            href="/feature"
            className={`hover:text-yellow-300 transition-colors ${
              pathname === "/feature" ? "text-yellow-300" : ""
            }`}
          >
            Features
          </Link>
          <Link
            href="/projects"
            className={`hover:text-yellow-300 transition-colors ${
              pathname === "/projects" ? "text-yellow-300" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            className={`hover:text-yellow-300 transition-colors ${
              pathname === "/blogs" ? "text-yellow-300" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact-us"
            className={`hover:text-yellow-300 transition-colors ${
              pathname === "/contact-us" ? "text-yellow-300" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex space-x-2">
          {/* Contact Button */}
          <Link
            href="https://calendly.com/flowentech"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium bg-gradient-to-r from-[#5454D4] border to-tintblue w-32 lg:w-40 px-4  py-2 rounded-full hover:from-[#5d98ea] hover:to-[#023070] transition-colors lg:text-[16px] text-[12px]"
          >
            Schedule a Call
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-3">
            <Drawer>
              <DrawerTrigger>
                <button className="p-2 text-white hover:bg-white/20 rounded-md">
                  <Menu size={24} />
                </button>
              </DrawerTrigger>
              <DrawerContent className="right-0 max-w-60 w-60 bg-tintblue">
                <DrawerHeader className="p-4 ">
                  <h2 className="text-lg font-bold text-yellow-300">Menu</h2>
                </DrawerHeader>
                <nav className="flex flex-col space-y-4 px-4 text-white">
                  <Link
                    href="/"
                    className={`hover:text-yellow-300  transition-colors ${
                      pathname === "/" ? "text-yellow-300" : ""
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about-us"
                    className={`hover:text-yellow-300 transition-colors ${
                      pathname === "/about-us" ? "text-yellow-300" : ""
                    }`}
                  >
                    About us
                  </Link>
                  <Link
                    href="/feature"
                    className={`hover:text-yellow-300 transition-colors ${
                      pathname === "/feature" ? "text-yellow-300" : ""
                    }`}
                  >
                    Features
                  </Link>
                  <Link
                    href="/projects"
                    className={`hover:text-yellow-300 transition-colors ${
                      pathname === "/projects" ? "text-yellow-300" : ""
                    }`}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/blogs"
                    className={`hover:text-yellow-300 transition-colors ${
                      pathname === "/blogs" ? "text-yellow-300" : ""
                    }`}
                  >
                    Blog
                  </Link>
                </nav>
                <DrawerFooter>
                  <DrawerClose>
                    <button className="mt-4 w-full bg-[#5454D4] px-6 py-2 rounded-full hover:bg-[#4646B3] transition-colors text-white">
                      Close
                    </button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};
