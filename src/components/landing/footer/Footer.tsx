
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { logo } from "../../../../public/images";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src={logo}
                alt="FireFly Logo"
                className="h-8 w-auto"
                width={32} 
                height={32}
              />
              <span className="font-heading font-bold text-xl">FireFly</span>
            </div>
            <p className="font-body text-gray-300 text-sm">
              Firefly Trading Contracting Hospitality offers skilled & unskilled manpower,
              MEP, HVAC, BAS, and comprehensive maintenance for the hospitality and commercial sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="font-body text-gray-300 hover:text-primary transition-colors block">Home</Link>
              <Link href="/about-us" className="font-body text-gray-300 hover:text-primary transition-colors block">About Us</Link>
              <Link href="/our-services" className="font-body text-gray-300 hover:text-primary transition-colors block">Our Services</Link>
              <Link href="/contact-us" className="font-body text-gray-300 hover:text-primary transition-colors block">Contact</Link>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <div className="space-y-2 font-body text-gray-300 text-sm">
              <p>Skilled & Unskilled Manpower</p>
              <p>MEP (Mechanical, Electrical & Plumbing)</p>
              <p>HVAC & BAS Solutions</p>
              <p>Commercial Kitchen Equipment</p>
              <p>Renovation & Installation</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#a6079b]" />
                <span className="font-body text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#a6079b]" />
                <span className="font-body text-gray-300 text-sm">info@firefly.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#a6079b]" />
                <span className="font-body text-gray-300 text-sm">Business District, City, Country</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="font-body text-gray-400 text-sm">
            © 2025 FireFlyqa Trading Contracting Hospitality. All rights reserved. <a href="https://flowentech.com" className="text-primary hover:underline">FlowenTech</a> designed this website.
          </p>
        </div>
      </div>
    </footer>
  );
};
