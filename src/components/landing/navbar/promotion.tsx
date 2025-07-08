import { NavbarButton } from "@/components/ui/resizable-navbar";
import Link from "next/link";
import React from "react";

function Promotion() {
  return (
    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-2 py-1.5  font-light font-manrope lg:text-[12px] text-[9px] text-white bg-primary/80">
      <p className="lg:text-[14px] text-[10px] font-uncut">
        🚀 {"Ready to get your Solutions ?"}
      </p>
      <span className="font-uncut text-[16px] pl-6 font-title italic ">
        Booking 30 Minutes Free Consulting Now.
      </span>
      {/* <NavbarButton
        variant="primary"
        href="https://calendly.com/flowentech/30min"
      >
        Book Now
      </NavbarButton> */}
    </div>
  );
}

export default Promotion;
