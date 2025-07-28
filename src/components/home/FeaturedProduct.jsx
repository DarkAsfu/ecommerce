"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import Title from "../reusable/Title";
import featured1 from "../../../public/Featured1.png";
import featured2 from "../../../public/Featured2.png";
import featured3 from "../../../public/Featured3.png";
import featured4 from "../../../public/Featured4.png";
import useFetch from "@/hooks/use-fetch";

// Dummy product data
const products = [
  {
    id: 1,
    name: "Skinny Jeans Blue",
    description: "Classic fit with stretch comfort.",
    image: featured1,
    price: 100.00,
  },

  {
    id: 2,
    name: "Cozy Knit Sweater",
    description: "Soft and warm, perfect for cold days.",
    image: featured2,
    price: 100.00,
  },
  {
    id: 3,
    name: "Casual Sneakers",
    description: "Comfort meets style in these all-day shoes.",
    image: featured3,
    price: 100.00,
  },
  {
    id: 4,
    name: "Elegant Wristwatch",
    description: "Timeless design for any occasion.",
    image: featured4,
    price: 100.00,
  },
];

// Grid layout mapping
const layout = [
  { product: products[0], className: "lg:row-span-2" },
  { product: products[1], className: "" },
  { product: products[2], className: "lg:col-start-2 lg:row-start-2" },
  {
    product: products[3],
    className: "lg:row-span-2 lg:col-start-3 lg:row-start-1",
  },
];

export default function FeatureProduct() {
  const { data:featuredProducts, loading, error } = useFetch("/get-featured-products");
  console.log(featuredProducts);
  return (
    <>
    <div className="container mx-auto px-4">
      <Title title="Featured Product" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 pt-10">
        {layout.map(({ product, className }) => (
          <div key={product.id} className={`${className}`}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-5 mb-[26px]">
        <h1 className="text-[16px] md:text-[20px] font-medium text-heading font-kaiseiHarunoUmi">
          View All
        </h1>
      </div>
    </div>
    <hr className=" border-[#BEBEBE] mb-[160px]" />
    </>
  );
}

// 🧱 Reusable Product Card component
function ProductCard({ product }) {
  return (
    <a
      href="#"
      className="group relative block w-full h-full overflow-hidden shadow-md"
    >
      {/* Product Image */}
      <div className="relative h-full min-h-[480px] w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          //   sizes="(max-width: 768px) 100vw, 300px"
        />
        <div className="absolute top-3 right-3 z-10">
          <Heart
            className="text-white/80 hover:bg-primary hover:border-primary transition border w-[43px] h-[43px] p-2.5 fill-white bg-[#F5F5F5]/35 rounded-full"
            size={24}
          />
        </div>
      </div>

      {/* Overlay Info */}
      {/* <div className="absolute inset-0 flex flex-col items-start justify-end p-5 bg-gradient-to-t from-black/70 via-black/40 to-transparent"> */}
      <div className="absolute inset-0 flex flex-col items-start justify-end p-5 ">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-[16px] md:text-[24px] font-semibold text-heading font-inter">
            {product.name}
          </h3>
          <span className="text-[16px] md:text-[24px] font-semibold text-heading font-inter">
            KD {product.price.toFixed(2)}
          </span>
        </div>
        {/* <p className="mt-1 text-sm text-white line-clamp-2">
          {product.description}
        </p>
        <span className="mt-3 inline-block bg-white text-black px-4 py-2 text-xs font-medium tracking-wide uppercase rounded hover:bg-neutral-200 transition">
          Shop Now
        </span> */}
      </div>
    </a>
  );
}
