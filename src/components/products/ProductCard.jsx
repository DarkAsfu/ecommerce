import { Heart } from "lucide-react";

const ProductCard = ({ product, isWishlist }) => {
  return (
    <a
      key={product.id}
      href="#"
      className="group relative block overflow-hidden"
    >
      <div className="relative border px-[57px] md:h-[450px] py-[52px]">
        <img
          src={product.product_image}
          alt=""
          className="max-h-max object-contain mx-auto"
        />

        {/* Heart Icon */}
        {isWishlist ? <div className="absolute top-4 right-4 p-2 rounded-full bg-[#F5F5F5] shadow-md border border-primary opacity-100  transition-opacity duration-300 z-10">
            <Heart className="h-5 w-5 text-red-500 fill-red-500 " />
          </div> : (
          <div className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md border border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <Heart className="h-5 w-5 text-primary " />
          </div>
        )}
      </div>

      <div className="relative bg-white pt-3">
        <h3 className="text-[21.342px] font-lato leading-[32.01px] text-heading group-hover:underline group-hover:underline-offset-4">
          {product.product_name}
        </h3>

        <div className="flex items-center gap-x-[5.34px]">
          <p className="text-[21.342px] font-lato leading-[32.01px] text-heading">
            ${product.discount_price}
          </p>
          <p className="text-[21.342px] font-lato leading-[32.01px] text-secondary line-through">
            ${product.regular_price}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
