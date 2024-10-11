"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import { useRef, useState } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import clsx from "clsx";
import Image from "next/image";
import { Autoplay, EffectFade, Navigation, Scrollbar,Pagination } from "swiper/modules";

export default function BannerSlider({
  data,
  className,
  swiperProps,
}: ProductsSliderProps) {
  const swiper = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0); // State for progress percentage

  const handleSlideChange = (swiperInstance: any) => {
    setActiveIndex(swiperInstance.activeIndex);
  };

  const handleTransitionEnd = (swiperInstance: any) => {
    const currentIndex = swiperInstance.activeIndex;
    const totalSlides = data.length;

    // Update the progress percentage based on the current index
    setProgressPercentage(((currentIndex + 1) / totalSlides) * 100);
  };

  return (
    <div className={clsx("", className || "")}>
      <Swiper
        breakpoints={{
          450: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        centeredSlides={true}
        grabCursor={true}
        modules={[Scrollbar, Autoplay, EffectFade,Pagination]}
        pagination={{
            dynamicBullets: true,
          }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={2500}
        onSlideChange={handleSlideChange}
        onTransitionEnd={handleTransitionEnd} // Listen to transition end event
        onSwiper={(instance: any) => (swiper.current = instance)}
        // scrollbar={{ draggable: false }}
        slidesPerView={1}
        spaceBetween={40}
        {...(swiperProps || {})}
      >
        {/* Slider content */}
        {data?.map((feature: any, index:number) => (
          <SwiperSlide key={index} className="pb-5 mb-5 ">
            <div
              key={feature.id}
              className={clsx(
                "bg-white shadow-blue-200 h-60 shadow-sm  p-6 cursor-pointer hover:shadow-xl rounded-lg text-start border-blue-200 border-[1px]",
                
              )}
            >
              <div className="mb-4  rounded-full  border w-12 h-12 overflow-hidden flex justify-center p-2 ">
                <Image
                  src={feature.icon}
                  alt="icon"
                  width={50}
                  height={50}
                  className=""
                />
              </div>
              <h6 className="text-lg font-semibold mb-2 text-darkblue">
                {feature.title}
              </h6>
              <p className="text-darkblue text-[14px] font-normal">
                {feature.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress bar and navigation controls */}
      <div className="w-full flex justify-end relative mb-3">
        <div className="flex justify-end items-center mt-2 space-x-2 absolute -bottom-8 left-0 right-5">
          {/* Display current slide */}
          <span className="text-primary">{`0${activeIndex + 1}`}</span>

          {/* Dynamic progress bar */}
          <div className="w-32 h-[4px] bg-purple-200 relative">
            <div
              className="absolute left-0 top-0 h-[4px] rounded-full bg-primary transition-all duration-500" // Smooth transition for progress bar
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          {/* Display total slides */}
          <span className="text-purple-700">{`0${data.length}`}</span>
        </div>
      </div>
    </div>
  );
}

interface ProductsSliderProps {
  data: any;
  className?: string;
  loading?: boolean;
  swiperProps?: SwiperProps;
}
