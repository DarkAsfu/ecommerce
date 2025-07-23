import Title from "../reusable/Title";
import p1 from "../../../public/p1.png";
import p2 from "../../../public/p2.png";
import p3 from "../../../public/p3.png";
import p4 from "../../../public/p4.png";

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
      salePrice: 80,
      image: p3,
    },
    {
      id: 4,
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
            <a key={product.id} href="#" className="group block overflow-hidden">
              <div className="relative border p-[57px]">
                <img
                  src={product.image.src}
                  alt=""
                  className="w-[80%] h-full object-cover mx-auto"
                />
              </div>

              <div className="relative bg-white pt-3">
                <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Limited Edition Sports Trainer
                </h3>

                <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
