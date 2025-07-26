import SectionBanner from "@/components/reusable/SectionBanner";
import p1 from "../../../public/p1.png";
import p2 from "../../../public/p2.png";
import p3 from "../../../public/p3.png";
import p4 from "../../../public/p4.png";
import ProductCard from "@/components/products/ProductCard";
import Title from "@/components/reusable/Title";
import NewsLetter from "@/components/home/NewsLetter";

const WishlistPage = () => {
  const wishlist = [
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
    <>
      <SectionBanner title="Wish List" />
      <div className="mt-[120px] mb-[120px]">
        <div className="container mx-auto p-4 md:p-8 font-inter">
          <Title title="Wish List" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[21.34px] gap-y-[32.01px] mt-[40px]">
            {wishlist.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlist={true}
              />
            ))}
          </div>
        </div>
      </div>
      <NewsLetter/>
    </>
  );
};

export default WishlistPage;
