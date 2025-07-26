const ProductCard = ({ product }) => {
  return (
    <a key={product.id} href="#" className="group block overflow-hidden">
      <div className="relative border px-[57px] md:h-[450px] py-[52px] ">
        <img
          src={product.image.src}
          alt=""
          className="max-h-max object-contain mx-auto"
        />
      </div>

      <div className="relative bg-white pt-3">
        <h3 className="text-[21.342px] font-lato leading-[32.01px] text-heading group-hover:underline group-hover:underline-offset-4">
          {product.name}
        </h3>

        <div className="flex items-center gap-x-[5.34px]">
          <p className="text-[21.342px] font-lato leading-[32.01px] text-heading">
            ${product.salePrice}
          </p>
          <p className="text-[21.342px] font-lato leading-[32.01px] text-secondary line-through">
            ${product.regularPrice}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
