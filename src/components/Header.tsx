import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className=" bg-tintblue h-[80px] items-center">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center text-white h-full">
        <Link href="/" className="text-2xl font-bold text-white items-center h-20 w-[250px]">
          <Image src={logo} alt="logo" width={120} height={80} className="w-[180px] h-[85px]"/>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-300 transition-colors">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-yellow-300 transition-colors">
            About us
          </Link>
          <Link href="/feature" className="hover:text-yellow-300 transition-colors">
            Features
          </Link>
         
          <Link href="/projects" className="hover:text-yellow-300 transition-colors">
            Projects
          </Link>
          <Link href="/blogs" className="hover:text-yellow-300 transition-colors">
            Blog
          </Link>
        </nav>
        <Link href="contact-us" className="bg-[#5454D4] px-6 py-2 rounded-full hover:bg-[#4646B3] transition-colors">
          Contact us
        </Link>
      </div>
    </header>
  );
};
