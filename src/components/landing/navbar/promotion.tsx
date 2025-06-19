import Link from "next/link";
import React from "react";

function Promotion() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-2 py-1.5  font-light font-manrope lg:text-[12px] text-[9px] text-white bg-primary/80">
      <p className="lg:text-[14px] text-[10px] font-uncut">🚀 Create your idea to mvp within 6 weeks </p>
      <span className="font-uncut text-[16px] pl-6 font-title italic ">Booking 30 Minutes Free Consulting Now :</span>
      <Link
        className="block py-1 px-3  rounded-full bg-primary/70 hover:bg-primary/90 font-title hover:font-uncut text-base text-white "
        href="https://calendly.com/flowentech"
        target="_blank"
      >
        Book Now
      </Link>
    </div>
    
  );
}

export default Promotion;
