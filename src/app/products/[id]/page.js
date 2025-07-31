"use client";
import ProductDescription from "@/components/products/ProductDescription";
import ProductGallery from "@/components/products/ProductGallery";
import ProductInfo from "@/components/products/ProductInfo";
import SectionBanner from "@/components/reusable/SectionBanner";
import NewsLetter from "@/components/home/NewsLetter";
import RelatedProducts from "@/components/products/RelatedProducts";
import { useParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/product-details`,
          { id }
        );
        setProduct(res.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) return <div className="container py-20">Loading...</div>;
  if (error) return <div className="container py-20 text-red-500">{error}</div>;
  console.log(product);
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
                <ProductGallery gallery={product.data.gallery_images} />
              </div>
              <div className="">
                <ProductInfo product={product} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 mb-[64px]">
          <ProductDescription description={product.data.description} short_description={product.data.short_description} additional_description={product.data.additional_description} />
        </div>
      </div>
      <RelatedProducts id={id} className="py-[120px]" />
      <NewsLetter className="mt-[64px]" />
    </div>
  );
};

export default ProductDetailsPage;
