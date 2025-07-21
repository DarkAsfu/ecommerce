/* eslint-disable @next/next/no-img-element */
"use client";
import { ArrowUpRight, Star } from "lucide-react";
import BackgrounImage from "../../public/heroSection.jpg";
import SideIMage from "../../public/heroSideimage.png";
import Review1 from "../../public/reciew1.png";
import Review2 from "../../public/reciew2.png";
import Review3 from "../../public/reciew3.png";
import Review4 from "../../public/reciew4.png";
import Sideanimation from "../../public/hero-side-animation.png";

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: `url(${BackgrounImage.src})` }}
      className="bg-cover bg-center flex items-flex-end justify-center text-white py-[80px] overflow-x-hidden"
    >
      <div className="w-full flex justify-between items-flex-end px-[100px] relative">
        <div className="">
          <h1 className="justify-start text-neutral-900 text-8xl font-normal font-Prata leading-[134.40px] max-w-[700px] mb-[21px]">
            Treat Your Skin With Natural Ingredients
          </h1>
          <p className="self-stretch justify-start text-neutral-900 text-2xl font-normal font-'Lato' leading-9 mb-[83px]">
            We use premium products for a natural result.
          </p>
          <button className="text-center relative text-neutral-900 text-xl font-normal font-'Lato' w-[83px] h-[83px] border-2 border-neutral-900 rounded-full flex items-center justify-center cursor-pointer group duration-300 mb-[100px]">
            <ArrowUpRight className="text-[#F88C44] group-hover:rotate-[45deg]  duration-300" />
            <span
              //   style={{ backgroundImage: `url(${BackgrounImage.src})` }}
              className="bg-gradient-to-r from-[#ffe0c9] via-[#f1cbb1ab] to-[#ffdbc000] z-[1] bg-cover bg-center w-max absolute top-[50%] left-[50%] translate-x-[25%] translate-y-[-50%] p-1 group-hover:translate-x-[-25%] group-hover:translate-y-[-50%] duration-300 rounded"
            >
              Shop Now
            </span>
          </button>
          <div className="flex items-center gap-[30px] ">
            <div className="flex items-center justify-start relative w-[176px] h-[64px]">
              <img
                src={Review1.src}
                alt="Review Image"
                className="w-[64px] h-[64px] rounded-full border-2 border-white absolute top-0 left-[0%]"
              />
              <img
                src={Review2.src}
                alt="Review Image"
                className="w-[64px] h-[64px] rounded-full border-2 border-white absolute top-0 left-[25%]"
              />
              <img
                src={Review3.src}
                alt="Review Image"
                className="w-[64px] h-[64px] rounded-full border-2 border-white absolute top-0 left-[50%]"
              />
              <img
                src={Review4.src}
                alt="Review Image"
                className="w-[64px] h-[64px] rounded-full border-2 border-white absolute top-0 left-[75%]"
              />
            </div>
            <div>
              <div className="flex items-center gap-[5px]">
                <div className="flex items-center gap-[5px]">
                  <Star className="fill-[#CFA54B] w-[28px] stroke-0" />
                  <Star className="fill-[#CFA54B] w-[28px] stroke-0" />
                  <Star className="fill-[#CFA54B] w-[28px] stroke-0" />
                  <Star className="fill-[#CFA54B] w-[28px] stroke-0" />
                  <Star className="fill-[#CFA54B] w-[28px] stroke-0" />
                </div>
                <p className="justify-start text-neutral-900 text-xl font-medium font-'Lato' leading-loose">
                  (2.5K Reviews)
                </p>
              </div>
              <h4 className="justify-start text-neutral-900 text-lg font-normal font-'Lato' leading-relaxed">Happy Customers</h4>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src={SideIMage.src}
            alt="Hero Image"
            className="absolute right-[-52px] bottom-[-80px] max-w-[60%]"
          />
          <img
            src={Sideanimation.src}
            alt="Hero Image"
            className="absolute right-[70px] bottom-[115px] animate-spin "
          />

        </div>
      </div>
    </section>
  );
}
