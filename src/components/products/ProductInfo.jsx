"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { cartUtils } from "@/lib/utils";

const ProductInfo = ({ product }) => {
  console.log(product);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const addToCart = () => {
    setIsAddingToCart(true);
    
    try {
      // Check if product already exists in cart
      const existingCart = cartUtils.getCart();
      const existingProductIndex = existingCart.findIndex(
        item => item.product_id === product.data.id
      );
      
      // Use utility function to add/update cart with selected quantity
      const success = cartUtils.addToCart(product.data, quantity);
      
      if (success) {
        if (existingProductIndex !== -1) {
          toast.success(`Quantity updated to ${quantity} for ${product.data.product_name}`);
        } else {
          toast.success(`${product.data.product_name} (${quantity}) added to cart!`);
        }
      } else {
        toast.error('Failed to add product to cart. Please try again.');
      }
      
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Failed to add product to cart. Please try again.');
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div className="">
      <div>
        <h1 className="text-[24px] font-inter font-semibold text-heading">
          {product.data.product_name}
        </h1>
        <p
          dangerouslySetInnerHTML={{
            __html: product.data.description,
          }}
          className="text-secondary text-[20px] font-normal font-inter leading-[30px] mt-4"
        ></p>
      </div>

      <div className="space-y-[34px] mt-[34px]">
        <div className="text-sm">
          <span className="text-heading font-inter font-semibold text-[20px]">
            Brand :{" "}
          </span>
          <span className="text-heading font-inter font-medium text-[18px]">
            {product.data.brand}
          </span>
        </div>
        {
          product.data.weight && (
            <div className="text-sm">
          <span className="text-heading font-inter font-semibold text-[20px]">
            Weight :{" "}
          </span>
          <span className="text-heading font-inter font-medium text-[18px]">
            {product.data.weight} {product.data.weight_unit}
          </span>
        </div>
          )
        }
        <div className="text-sm">
          <span className="text-heading font-inter font-semibold text-[20px]">
            Product Code :{" "}
          </span>
          <span className="text-heading font-inter font-medium text-[18px]">
            {product.data.product_code}
          </span>
        </div>

        <div className="text-sm">
          <span className="text-heading font-inter font-semibold text-[20px]">
            Availability :{" "}
          </span>
          <span className="text-heading font-inter font-medium text-[18px]">
            {product.data.inventories[0].stock_status === "1" ? "In stock" : "Out of stock"}
          </span>
        </div>

        {/* <div className="flex items-center gap-2">
          <span className="text-heading font-inter font-semibold text-[20px]">
            Color :{" "}
          </span>
          <div className="flex gap-[11px] mt-1">
            <div className="w-[27px] h-[27px] rounded-full bg-gray-800 border border-gray-300"></div>
            <div className="w-[27px] h-[27px] rounded-full bg-green-700 border border-gray-300"></div>
            <div className="w-[27px] h-[27px] rounded-full bg-yellow-600 border border-gray-300"></div>
          </div>
        </div> */}

        <div className="flex items-center gap-[25px]">
          {product.data.discount_price && product.data.discount_price !== product.data.regular_price ? (
            <>
              <div className="text-heading font-inter font-semibold text-[20px]">
                KD {product.data.discount_price}
              </div>
              <div className="font-inter font-normal text-[16px] line-through text-secondary">
                KD {product.data.regular_price}
              </div>
            </>
          ) : (
            <div className="text-heading font-inter font-semibold text-[20px]">
              KD {product.data.regular_price}
            </div>
          )}
        </div>
      </div>

      <div className="md:flex items-center gap-2 pt-[34px]">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="bg-[#E5E5E5] h-[50px] w-[50px] rounded-[8px]"
            onClick={() => handleQuantityChange(1)}
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
            onClick={() => handleQuantityChange(-1)}
          >
            <Minus className="h-[13px] w-[13px]" />
          </Button>
        </div>

        <div className="mt-10 md:mt-0 flex items-center gap-4">
          <Button 
            onClick={addToCart}
            disabled={isAddingToCart}
            className={`bg-heading hover:bg-gray-800 text-white text-[18px] font-inter font-medium w-[164px] h-[50px] ${
              isAddingToCart ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isAddingToCart ? 'Adding...' : 'Add To Cart'}
          </Button>

          {/* <Button
            variant="outline"
            size="sm"
            className="h-[50px] w-[50px] p-0 bg-black hover:bg-gray-800 border-black"
          >
            <ShoppingCart className="h-[24px] w-[24px] text-white" />
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
