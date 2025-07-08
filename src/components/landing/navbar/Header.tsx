"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";

export const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isOpen } = useMediaQuery();

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
     {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Our Services",
      link: "/our-services",
    },
    {
      name: "Blog",
      link: "/blogs",
    },
  ];

  return (
    <header className={` top-0 fixed  left-0  right-0 z-50 w-full`}>
      <>
        <Navbar>
          {!isOpen ? (
            <NavBody>
              <NavbarLogo />
              <NavItems items={navItems} />
              <div className="flex items-center gap-4">
                {/* <div className="w-20"></div> */}

                <NavbarButton variant="secondary" href="/contact-us">
                  Contact Us
                </NavbarButton>
                <NavbarButton
                  variant="primary"
                  href="https://calendly.com/fireflyqa/30min"
                >
                  Book Now
                </NavbarButton>
                {/* <NavbarButton variant="secondary">Book a call</NavbarButton>  */}
                {/* <Link href="/login">
                  <RainbowButton>Get Started</RainbowButton>
                </Link> */}
              </div>
            </NavBody>
          ) : (
            <MobileNav>
              <MobileNavHeader>
                <NavbarLogo />
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </MobileNavHeader>
              <MobileNavMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
              >
                {navItems.map((item, idx) => (
                  <a
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative text-neutral-600 dark:text-neutral-300"
                  >
                    <span className="block">{item.name}</span>
                  </a>
                ))}
                <div className="flex w-full flex-col gap-4">
                  <NavbarButton variant="secondary" href="/contact-us">
                    Contact Us
                  </NavbarButton>
                  
                  <NavbarButton
                    variant="primary"
                    href="https://calendly.com/flowentech/30min"
                  >
                    Book Now
                  </NavbarButton>

                  {/* <Link href="/login">
                  <RainbowButton>Get Started</RainbowButton>
                </Link> */}
                  {/* <RainbowButton /> */}
                </div>
              </MobileNavMenu>
            </MobileNav>
          )}
        </Navbar>
      </>
    </header>
  );
};
