import ProductDescription from "@/components/products/ProductDescription";
import ProductGallery from "@/components/products/ProductGallery";
import ProductInfo from "@/components/products/ProductInfo";
import SectionBanner from "@/components/reusable/SectionBanner";
import NewsLetter from "@/components/home/NewsLetter";
import RelatedProducts from "@/components/products/RelatedProducts";
const ProductDetailsPage = () => {
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
      <RelatedProducts  className="py-[120px]" />
      <NewsLetter className="mt-[64px]" />
    </div>
  );
};

export default ProductDetailsPage;
