"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import offer from "../../../public/offer.png";
import Title from "../reusable/Title";
import { useRef } from "react";

const AvailableOffers = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const offers = [
    { id: 1, image: offer },
    { id: 2, image: offer },
    { id: 3, image: offer },
    { id: 4, image: offer },
  ];

  return (
    <>
      <div className="container mx-auto px-4">
        {/* Header and Arrows */}
        <div className="flex justify-between items-center">
          <Title title="Available Offers" />
          <div className="flex gap-6">
            <button
              ref={prevRef}
              className="bg-white hover:bg-gray-100 border cursor-pointer p-3 rounded-full  transition"
            >
              <ArrowLeft className="text-heading" size={16} />
            </button>
            <button
              ref={nextRef}
              className="bg-white hover:bg-gray-100 border cursor-pointer p-3 rounded-full  transition"
            >
              <ArrowRight className="text-heading" size={16} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            // Reassign navigation elements once refs are defined
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="mt-8"
        >
          {offers.map((offer) => (
            <SwiperSlide key={offer.id}>
              <Image
                src={offer.image}
                alt={`Offer ${offer.id}`}
                className="w-full h-auto object-cover rounded"
                placeholder="blur"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All */}
        <div className="flex justify-center items-center mt-5 mb-[26px]">
          <h1 className="text-[16px] md:text-[20px] font-medium text-heading font-kaiseiHarunoUmi cursor-pointer hover:underline">
            View All
          </h1>
        </div>
      </div>

      <hr className="border-[#BEBEBE] mb-[160px]" />
    </>
  );
};

export default AvailableOffers;
