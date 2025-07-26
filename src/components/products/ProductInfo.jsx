"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="">
      <div>
        <h1 className="text-[24px] font-inter font-semibold text-heading">
          Product Name
        </h1>
        <p className="text-secondary text-[20px] font-normal font-inter leading-[30px] mt-4">
          Lorem Ipsum Dolor Sit Amet Consectetur. Odio Lorem Erat Non Purus
          Pellentesque Diam Quis. Placerat Volutpat Massa Quam Quis. Adipiscing
          A Dignissim Velit Nunc. Eu Vel Consectetur Lorem Lectus Imperdiet.
        </p>
      </div>

      <div className="space-y-[34px] mt-[34px]">
        <div className="text-sm">
          <span className="text-heading font-inter font-semibold text-[20px]">
            Brand :{" "}
          </span>
          <span className="text-heading font-inter font-medium text-[18px]">
            Fendi
          </span>
        </div>

        <div className="text-sm">
          <span className="text-heading font-inter font-semibold text-[20px]">
            Product Code :{" "}
          </span>
          <span className="text-heading font-inter font-medium text-[18px]">
            ER43235T
          </span>
        </div>

        <div className="text-sm">
          <span className="text-heading font-inter font-semibold text-[20px]">
            Availability :{" "}
          </span>
          <span className="text-heading font-inter font-medium text-[18px]">
            In stock
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-heading font-inter font-semibold text-[20px]">
            Color :{" "}
          </span>
          <div className="flex gap-[11px] mt-1">
            <div className="w-[27px] h-[27px] rounded-full bg-gray-800 border border-gray-300"></div>
            <div className="w-[27px] h-[27px] rounded-full bg-green-700 border border-gray-300"></div>
            <div className="w-[27px] h-[27px] rounded-full bg-yellow-600 border border-gray-300"></div>
          </div>
        </div>

        <div className="flex items-center gap-[25px]">
          <div className="text-heading font-inter font-semibold text-[20px]">
            KD12.00
          </div>
          <div className="font-inter font-normal text-[16px] line-through text-secondary">
            KD12.00
          </div>
        </div>
      </div>

      <div className="md:flex items-center gap-2 pt-[34px]">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="bg-[#E5E5E5] h-[50px] w-[50px] rounded-[8px]"
            onClick={() => handleQuantityChange(-1)}
          >
            <Plus className="h-[13px] w-[13px]" />
          </Button>
          <span className="flex items-center justify-center h-[50px] w-[50px] text-center text-[20px] font-inter font-medium bg-[#fff] rounded-[8px] border border-[#E5E5E5]">
            {quantity}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="bg-[#E5E5E5]  h-[50px] w-[50px] rounded-[8px]"
            onClick={() => handleQuantityChange(1)}
          >
            <Minus className="h-[13px] w-[13px]" />
          </Button>
        </div>

        <div className="mt-10 md:mt-0 flex items-center gap-4">
          <Button className="bg-heading hover:bg-gray-800 text-white text-[18px] font-inter font-medium w-[164px] h-[50px]">
            Add To Cart
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="h-[50px] w-[50px] p-0 bg-black hover:bg-gray-800 border-black"
          >
            <ShoppingCart className="h-[24px] w-[24px] text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
