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
import { Autoplay, EffectFade, Scrollbar, Pagination,Navigation } from "swiper/modules";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BannerSlider({ data, className, swiperProps }: ProductsSliderProps) {
  const swiper = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const handleSlideChange = (swiperInstance: any) => {
    setActiveIndex(swiperInstance.activeIndex);
  };

  const handleTransitionEnd = (swiperInstance: any) => {
    const currentIndex = swiperInstance.activeIndex;
    const totalSlides = data.length;
    setProgressPercentage(((currentIndex + 1) / totalSlides) * 100);
  };

  const openModal = (card: any) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className={clsx("relative", className || "")}>
      {/* Left Arrow Button */}
      <button
        onClick={() => swiper.current?.slidePrev()}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={() => swiper.current?.slideNext()}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      <Swiper
        breakpoints={{
          450: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          992: { slidesPerView: 3, spaceBetween: 25 },
          1200: { slidesPerView: 3, spaceBetween: 25 },
        }}
        centeredSlides={true}
        grabCursor={true}
        modules={[Scrollbar, Autoplay, EffectFade, Pagination, Navigation]}
        pagination={{ dynamicBullets: true }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={2500}
        onSlideChange={handleSlideChange}
        onTransitionEnd={handleTransitionEnd}
        onSwiper={(instance: any) => (swiper.current = instance)}
        slidesPerView={1}
        spaceBetween={40}
        {...(swiperProps || {})}
      >
        {data?.map((feature: any, index: number) => (
          <SwiperSlide key={index} className="pb-5 mb-5 mx-2">
            <div
              onClick={() => openModal(feature)}
              className="bg-white shadow-lg hover:shadow-xl rounded-lg p-6 cursor-pointer border border-gray-200 h-48 w-[350px] md:w-[450px] lg:w-[480px] "
            >
              <div className="mb-3  flex items-center space-x-2">
                <Image src={feature.icon} alt="icon" width={50} height={50} className="w-12 h-12 p-2 bg-indigo-200 justify-center items-center border rounded-full overflow-hidden"/>
                <h6 className="text-lg font-semibold text-gray-800">{feature.title}</h6>
              </div>
              <p className="text-sm text-gray-600 justify-self-center">{feature.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress bar */}
      <div className="w-full flex justify-end relative mb-3">
        <div className="flex justify-end items-center mt-2 space-x-2 absolute -bottom-8 left-0 right-5">
          <span className="text-primary">{`0${activeIndex + 1}`}</span>
          <div className="w-32 h-[4px] bg-gray-200 relative">
            <div
              className="absolute left-0 top-0 h-[4px] rounded-full bg-primary transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <span className="text-gray-700">{`0${data.length}`}</span>
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <Dialog open={!!selectedCard} onOpenChange={closeModal}>
          <DialogContent className="max-w-lg rounded-lg">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold">{selectedCard.title}</DialogTitle>
              <DialogDescription className="text-gray-600">{selectedCard.description}</DialogDescription>
            </DialogHeader>
            <div className="flex justify-center my-4">
              <Image src={selectedCard.icon} alt="icon" width={80} height={80} />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

interface ProductsSliderProps {
  data: any;
  className?: string;
  loading?: boolean;
  swiperProps?: SwiperProps;
}
