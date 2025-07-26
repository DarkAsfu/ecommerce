"use client";
import ProductDescription from "@/components/products/ProductDescription";
import ProductGallery from "@/components/products/ProductGallery";
import ProductInfo from "@/components/products/ProductInfo";
import SectionBanner from "@/components/reusable/SectionBanner";
import SwiperCarousel from "@/components/reusable/SwiperCarousel";
import p1 from "../../../../public/p1.png";
import p2 from "../../../../public/p2.png";
import p3 from "../../../../public/p3.png";
import p4 from "../../../../public/p4.png";
import ProductCard from "@/components/products/ProductCard";
import NewsLetter from "@/components/home/NewsLetter";
const ProductDetailsPage = () => {
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
    <div>
      <SectionBanner title="Product Details" />
      <div className="container">
        <div
          style={{
            background:
              "var(--Gradient, linear-gradient(92deg, #F1FAFE 0%, #F8DAB0 100%))",
          }}
          className="p-3 md:p-[30px] mt-[120px]"
        >
          <div className="bg-white">
            <div className="grid md:grid-cols-2 gap-[44px] p-3 md:p-[30px]">
              <div className="">
                <ProductGallery />
              </div>
              <div className="">
                <ProductInfo />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 mb-[64px]">
          <ProductDescription />
        </div>
      </div>
      <SwiperCarousel
          title="Related Products"
          items={products}
          slidesPerView={4}
          //   viewAllLink="/products"
          renderSlide={(product) => <ProductCard product={product} />}
        />
        <NewsLetter className="mt-[64px]" />
    </div>
  );
};

export default ProductDetailsPage;
