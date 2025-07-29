import Title from "../reusable/Title";
import p1 from "../../../public/p1.png";
import p2 from "../../../public/p2.png";
import p3 from "../../../public/p3.png";
import p4 from "../../../public/p4.png";
import { Button } from "../ui/button";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const products = [
    {
      id: 1,
      name: "Chance Chanel Eau Tendre Perfume",
      regularPrice: 100,
      salePrice: 80,
      image: p1,
    },
    {
      id: 2,
      name: "Aveeno Daily Moisturizing Lotionroduct",
      regularPrice: 100,
      salePrice: 80,
      image: p2,
    },
    {
      id: 3,
      name: "Mac Studio Fix Fluid Foundation",
      regularPrice: 100,
      salePrice: 180,
      image: p3,
    },
    {
      id: 4,
      name: "Calvin Klein Eternity Perfume",
      regularPrice: 100,
      salePrice: 80,
      image: p4,
    },
    {
      id: 5,
      name: "Chance Chanel Eau Tendre Perfume",
      regularPrice: 100,
      salePrice: 80,
      image: p1,
    },
    {
      id: 6,
      name: "Aveeno Daily Moisturizing Lotionroduct",
      regularPrice: 100,
      salePrice: 80,
      image: p2,
    },
    {
      id: 7,
      name: "Mac Studio Fix Fluid Foundation",
      regularPrice: 100,
      salePrice: 180,
      image: p3,
    },
    {
      id: 8,
      name: "Calvin Klein Eternity Perfume",
      regularPrice: 100,
      salePrice: 80,
      image: p4,
    },
    {
      id: 9,
      name: "Chance Chanel Eau Tendre Perfume",
      regularPrice: 100,
      salePrice: 80,
      image: p1,
    },
    {
      id: 10,
      name: "Aveeno Daily Moisturizing Lotionroduct",
      regularPrice: 100,
      salePrice: 80,
      image: p2,
    },
    {
      id: 11,
      name: "Mac Studio Fix Fluid Foundation",
      regularPrice: 100,
      salePrice: 180,
      image: p3,
    },
    {
      id: 12,
      name: "Calvin Klein Eternity Perfume",
      regularPrice: 100,
      salePrice: 80,
      image: p4,
    },
    {
      id: 13,
      name: "Chance Chanel Eau Tendre Perfume",
      regularPrice: 100,
      salePrice: 80,
      image: p1,
    },
    {
      id: 14,
      name: "Aveeno Daily Moisturizing Lotionroduct",
      regularPrice: 100,
      salePrice: 80,
      image: p2,
    },
    {
      id: 15,
      name: "Mac Studio Fix Fluid Foundation",
      regularPrice: 100,
      salePrice: 180,
      image: p3,
    },
    {
      id: 16,
      name: "Calvin Klein Eternity Perfume",
      regularPrice: 100,
      salePrice: 80,
      image: p4,
    },
    {
      id: 17,
      name: "Aveeno Daily Moisturizing Lotionroduct",
      regularPrice: 100,
      salePrice: 80,
      image: p2,
    },
    {
      id: 18,
      name: "Mac Studio Fix Fluid Foundation",
      regularPrice: 100,
      salePrice: 180,
      image: p3,
    },
    {
      id: 19,
      name: "Calvin Klein Eternity Perfume",
      regularPrice: 100,
      salePrice: 80,
      image: p4,
    },
  ];
  return (
    <div className="mt-[120px] ">
      <div className="container">
        <Title title="All Products" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[21.34px] gap-y-[32.01px] mt-[40px]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-x-[36px] mt-[120px]">
          <Button className="bg-white text-heading border px-[30px] py-[21px] rounded-none text-[16px] leading-[24px] font-lato">
            PREV
          </Button>
          <div className="flex items-center gap-x-[16px]">
            <span className="text-white border border-heading bg-heading  px-[13px] py-[9px] rounded-none text-[16px]  font-lato">
              01
            </span>
            <span className="bg-white border text-heading  px-[13px] py-[9px] rounded-none text-[16px] leading-[24px] font-lato">
              02
            </span>
            <span className="bg-white border text-heading  px-[13px] py-[9px] rounded-none text-[16px] leading-[24px] font-lato">
              03
            </span>
          </div>
          <Button className="text-white bg-heading border px-[30px] py-[21px] rounded-none text-[16px] leading-[24px] font-lato">
            NEXT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;


/**
 
'use client'
import Title from "../reusable/Title";
import p1 from "../../../public/p1.png";
import p2 from "../../../public/p2.png";
import p3 from "../../../public/p3.png";
import p4 from "../../../public/p4.png";
import { Button } from "../ui/button";
import ProductCard from "./ProductCard";
import useFetch from "@/hooks/use-fetch";

const AllProducts = () => {
  // const products = [
  //   {
  //     id: 1,
  //     name: "Chance Chanel Eau Tendre Perfume",
  //     regularPrice: 100,
  //     salePrice: 80,
  //     image: p1,
  //   },
  //   {
  //     id: 2,
  //     name: "Aveeno Daily Moisturizing Lotionroduct",
  //     regularPrice: 100,
  //     salePrice: 80,
  //     image: p2,
  //   },
  //   {
  //     id: 3,
  //     name: "Mac Studio Fix Fluid Foundation",
  //     regularPrice: 100,
  //     salePrice: 180,
  //     image: p3,
  //   },
  //   {
  //     id: 4,
  //     name: "Calvin Klein Eternity Perfume",
  //     regularPrice: 100,
  //     salePrice: 80,
  //     image: p4,
  //   },
  //   {
  //     id: 5,
  //     name: "Chance Chanel Eau Tendre Perfume",
  //     regularPrice: 100,
  //     salePrice: 80,
  //     image: p1,
  //   },
  //   {
  //     id: 6,
  //     name: "Aveeno Daily Moisturizing Lotionroduct",
  //     regularPrice: 100,
  //     salePrice: 80,
  //     image: p2,
  //   },
  //   {
  //     id: 7,
  //     name: "Mac Studio Fix Fluid Foundation",
  //     regularPrice: 100,
  //     salePrice: 180,
  //     image: p3,
  //   },
  //   {
  //     id: 8,
  //     name: "Calvin Klein Eternity Perfume",
  //     regularPrice: 100,
  //     salePrice: 80,
  //     image: p4,
  //   },
  //   {
  //     id: 9,
  //     name: "Chance Chanel Eau Tendre Perfume",
  //     regularPrice: 100,
  //     salePrice: 80,
  //     image: p1,
  //   },
  //   {
  //     id: 10,
  //     name: "Aveeno Daily Moisturizing Lotionroduct",
  //     regularPrice: 100,
  //     salePrice: 80,
  //     image: p2,
  //   },
  //   {
  //     id: 11,
  //     name: "Mac Studio Fix Fluid Foundation",
  //     regularPrice: 100,
  //     salePrice: 180,
  //     image: p3,
  //   },
  //   {
  //     id: 12,
  //     name: "Calvin Klein Eternity Perfume",
  //     regularPrice: 100,
  //     salePrice: 80,
  //     image: p4,
  //   },
  //   {
  //     id: 13,
  //     name: "Chance Chanel Eau Tendre Perfume",
  //     regularPrice: 100,
  //     salePrice: 80,
  //     image: p1,
  //   },
  //   {
  //     id: 14,
  //     name: "Aveeno Daily Moisturizing Lotionroduct",
  //     regularPrice: 100,
  //     salePrice: 80,
  //     image: p2,
  //   },
  //   {
  //     id: 15,
  //     name: "Mac Studio Fix Fluid Foundation",
  //     regularPrice: 100,
  //     salePrice: 180,
  //     image: p3,
  //   },
  //   {
  //     id: 16,
  //     name: "Calvin Klein Eternity Perfume",
  //     regularPrice: 100,
  //     salePrice: 80,
  //     image: p4,
  //   },
  //   {
  //     id: 17,
  //     name: "Aveeno Daily Moisturizing Lotionroduct",
  //     regularPrice: 100,
  //     salePrice: 80,
  //     image: p2,
  //   },
  //   {
  //     id: 18,
  //     name: "Mac Studio Fix Fluid Foundation",
  //     regularPrice: 100,
  //     salePrice: 180,
  //     image: p3,
  //   },
  //   {
  //     id: 19,
  //     name: "Calvin Klein Eternity Perfume",
  //     regularPrice: 100,
  //     salePrice: 80,
  //     image: p4,
  //   },
  // ];
  const { data: allProducts, loading, error } = useFetch("/get-all-products");
  console.log(allProducts);
  return (
    <div className="mt-[120px] ">
      <div className="container">
        <Title title="All Products" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[21.34px] gap-y-[32.01px] mt-[40px]">
          {allProducts?.data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-x-[36px] mt-[120px]">
          <Button className="bg-white text-heading border px-[30px] py-[21px] rounded-none text-[16px] leading-[24px] font-lato">
            PREV
          </Button>
          <div className="flex items-center gap-x-[16px]">
            <span className="text-white border border-heading bg-heading  px-[13px] py-[9px] rounded-none text-[16px]  font-lato">
              01
            </span>
            <span className="bg-white border text-heading  px-[13px] py-[9px] rounded-none text-[16px] leading-[24px] font-lato">
              02
            </span>
            <span className="bg-white border text-heading  px-[13px] py-[9px] rounded-none text-[16px] leading-[24px] font-lato">
              03
            </span>
          </div>
          <Button className="text-white bg-heading border px-[30px] py-[21px] rounded-none text-[16px] leading-[24px] font-lato">
            NEXT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;


 */