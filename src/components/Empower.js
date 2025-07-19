/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import Mackup1 from "../../public/mazkup1.png";
import Mackup2 from "../../public/mackup2.png";
import Mackup3 from "../../public/mackup3.png";
export default function Empower() {
  return (
    <div className="pt-[119px] pb-[120px]">
      <h3 className="self-stretch text-center justify-start text-neutral-900 text-xl font-normal font-Kaisei_HarunoUmi">
        Empower your skin care
      </h3>
      <h2 className=" text-neutral-900 text-5xl font-normal font-Prata flex justify-center items-center gap-[30px] mt-[24px] mb-[14px]">
        <span>The harmony between powerful </span>{" "}
        <img
          className="w-24 h-24 rounded-full border border-white"
          src={Mackup1.src}
        />{" "}
        <span>high-performance ingredier</span>
      </h2>
      <h2 className=" text-neutral-900 text-5xl font-normal font-Prata flex justify-center items-center gap-[30px]">
        {" "}
        <img
          className="w-24 h-24 rounded-full border border-white"
          src={Mackup2.src}
        />{" "}
        <span>and exceptionally simple</span>{" "}
        <img
          className="w-24 h-24 rounded-full border border-white"
          src={Mackup3.src}
        />{" "}
        <span>Skincare routines.</span>
      </h2>
    </div>
  );
}
