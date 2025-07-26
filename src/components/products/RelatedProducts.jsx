"use client"
import p1 from "../../../public/p1.png";
import p2 from "../../../public/p2.png";
import p3 from "../../../public/p3.png";
import p4 from "../../../public/p4.png";
import SwiperCarousel from "../reusable/SwiperCarousel";
import ProductCard from "./ProductCard";
const RelatedProducts = ({ className }) => {
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
    <SwiperCarousel
      title="Related Products"
      items={products}
      slidesPerView={4}
      className={className}
      //   viewAllLink="/products"
      renderSlide={(product) => <ProductCard product={product} />}
    />
  );
};

export default RelatedProducts;
