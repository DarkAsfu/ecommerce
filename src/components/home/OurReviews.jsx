"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Title from "../reusable/Title";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    designation: "Beauty Blogger",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Absolutely loved this product! It made my skin feel fresh and glowing after just one use.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mark Thompson",
    designation: "Skincare Expert",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "One of the best formulas I've come across. High-quality and simple to use.",
    rating: 4,
  },
  {
    id: 3,
    name: "Emily Davis",
    designation: "Model & Influencer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "My go-to skincare essential now. The results are visible and long-lasting!",
    rating: 5,
  },
  {
    id: 4,
    name: "Mark Thompson",
    designation: "Skincare Expert",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "One of the best formulas I've come across. High-quality and simple to use.",
    rating: 4,
  },
  {
    id: 5,
    name: "Emily Davis",
    designation: "Model & Influencer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "My go-to skincare essential now. The results are visible and long-lasting!",
    rating: 5,
  },
];

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [visibleReviews, setVisibleReviews] = useState(reviews.slice(0, 3));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // For mobile, just show the current review
      setVisibleReviews([reviews[currentIndex]]);
    } else {
      // For desktop, show current-1, current, current+1
      const start = Math.max(0, currentIndex - 1);
      const end = Math.min(reviews.length, currentIndex + 2);
      setVisibleReviews(reviews.slice(start, end));
    }
  }, [currentIndex, isMobile]);

  const nextSlide = () => {
    if (isMobile) {
      setCurrentIndex((prev) => Math.min(prev + 1, reviews.length - 1));
    } else {
      setCurrentIndex((prev) => Math.min(prev + 1, reviews.length - 2));
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(isMobile ? 0 : 1, prev - 1));
  };

  return (
    <section className="bg-[#F8DAB0] py-16 lg:py-20">
      <div className="container px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <Title title="Our Reviews" />

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={prevSlide}
              disabled={isMobile ? currentIndex <= 0 : currentIndex <= 1}
              variant="outline"
              size="icon"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
            </Button>
            <Button
              onClick={nextSlide}
              disabled={
                isMobile
                  ? currentIndex >= reviews.length - 1
                  : currentIndex >= reviews.length - 2
              }
              variant="outline"
              size="icon"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
            </Button>
          </div>
        </div>

        {/* Reviews Container */}
        <div className="relative">
          {/* Desktop: 3-column layout */}
          <div
            className={`hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-300 ${
              isMobile ? "opacity-0" : "opacity-100"
            }`}
          >
            {visibleReviews.map((review, index) => {
              const isActive = index === 1 && !isMobile;
              const isLeft = index === 0 && !isMobile;
              const isRight = index === 2 && !isMobile;

              return (
                <div
                  key={`${review.id}-${currentIndex}-${index}`}
                  className={`
                    bg-white rounded-lg px-[46px] py-[38px] transition-all duration-300 transform h-full
                    ${
                      isActive
                        ? "scale-105 shadow-lg z-10 py-[52px]"
                        : "scale-95 opacity-90 shadow-md"
                    }
                    ${isLeft ? "translate-x-2" : ""}
                    ${isRight ? "-translate-x-2" : ""}
                    hover:scale-[1.02] hover:shadow-lg
                  `}
                >
                  {/* Profile Section */}
                  <div className="flex items-center gap-[14px] mb-[25px]">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-[60px] h-[60px] rounded-full object-cover border-2 border-gray-100"
                    />
                    <div>
                      <h3 className="font-semibold text-[20px] font-inter text-heading mb-[8px]">
                        {review.name}
                      </h3>
                      <p className="text-[14px] text-secondary font-inter">
                        {review.designation}
                      </p>
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="mb-[20px]">
                    <p className="text-[16px] text-secondary font-inter leading-[24px]">
                      {review.review}
                    </p>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: Single slide */}
          <div
            className={`md:hidden transition-all duration-300 ${
              isMobile ? "opacity-100" : "opacity-0"
            }`}
          >
            {visibleReviews.map((review) => (
              <div
                key={`${review.id}-mobile`}
                className="bg-white rounded-lg px-[46px] py-[38px] shadow-lg mx-auto max-w-md"
              >
                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-[60px] h-[60px] rounded-full object-cover border-2 border-gray-100"
                  />
                  <div>
                    <h3 className="font-semibold text-[20px] font-inter text-heading mb-[8px]">
                      {review.name}
                    </h3>
                    <p className="text-[14px] text-secondary font-inter">
                      {review.designation}
                    </p>
                  </div>
                </div>

                {/* Review Text */}
                <div className="my-5">
                  <p className="text-[16px] text-secondary font-inter leading-[24px]">
                    {review.review}
                  </p>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
