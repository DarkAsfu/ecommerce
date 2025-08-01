"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import Title from "../reusable/Title";
import useFetch from "@/hooks/use-fetch";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import Link from "next/link";

export default function FeatureProduct() {
  const { data: products, loading, error } = useFetch("/get-featured-products");
  console.log(products);
  
  // Grid layout mapping
  const layout = [
    { product: products?.data[0], className: "lg:row-span-2" },
    { product: products?.data[1], className: "" },
    { product: products?.data[2], className: "lg:col-start-2 lg:row-start-2" },
    {
      product: products?.data[3],
      className: "lg:row-span-2 lg:col-start-3 lg:row-start-1",
    },
  ];
  return (
    <>
      <div className="container mx-auto px-4">
        <Title title="Featured Product" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 pt-10">
          {layout?.map(({ product, className }, index) => (
            <div key={index} className={`${className}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-5 mb-[26px]">
          <Link href="/products" className="text-[16px] md:text-[20px] font-medium text-heading font-kaiseiHarunoUmi">
            View All
          </Link>
        </div>
      </div>
      <hr className=" border-[#BEBEBE] mb-[160px]" />
    </>
  );
}

function ProductCard({ product }) {
  const [isLoading, setIsLoading] = useState(false);
  const handleWishlist = async () => {
    // Check if user is authenticated
    const token = localStorage.getItem("auth_user");
    if (!token) {
      toast.error("Please login to add items to wishlist");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/wishlist/create`,
        {
          product_id: product.id,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token).token}`,
          },
        }
      );

      console.log("Wishlist updated:", response.data);

      // Call the callback to update parent component state
      if (response.data.status === true) {
        // onWishlistChange(product.id, true);
        toast.success(response.data.message);
      }
      // Optional: Show success message
      // You could use a toast notification here instead
      console.log("Product added to wishlist successfully!");
    } catch (error) {
      console.log(error);
      console.error("Error adding to wishlist:", error);

      if (error.response?.code === 401) {
        alert("Please login again to continue");
      } else {
        alert("Failed to add product to wishlist. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <a
      href="#"
      className="group relative block w-full h-full overflow-hidden shadow-md"
    >
      {/* Product Image */}
      <div className="relative h-full min-h-[480px] w-full">
        <Image
          src={product?.product_image || "/placeholder.png"}
          alt="product-image"
          fill
          className="object-cover"
          //   sizes="(max-width: 768px) 100vw, 300px"
        />
        <div
          onClick={!isLoading ? handleWishlist : undefined}
          className={`absolute top-4 right-4 p-2 rounded-full bg-white shadow-md border border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${
            isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          }`}
        >
          <Heart
            className={`h-5 w-5 text-primary z-10 ${
              isLoading ? "animate-pulse" : ""
            }`}
          />
        </div>
      </div>

      {/* Overlay Info */}
      {/* <div className="absolute inset-0 flex flex-col items-start justify-end p-5 bg-gradient-to-t from-black/70 via-black/40 to-transparent"> */}
      <div className="absolute inset-0 flex flex-col items-start justify-end p-5 ">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-[16px] md:text-[24px] font-semibold text-heading font-inter">
            {product?.product_name}
          </h3>
          <span className="text-[16px] md:text-[24px] font-semibold text-heading font-inter">
            KD {product?.regular_price.toFixed(2)}
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
