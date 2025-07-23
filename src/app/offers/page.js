import SectionBanner from "@/components/reusable/SectionBanner";
import Title from "@/components/reusable/Title";
import Image from "next/image";
import offer from "../../../public/offer.png";
import NewsLetter from "@/components/home/NewsLetter";

const OffersPage = () => {
  const offers = [
    { id: 1, image: offer },
    { id: 2, image: offer },
    { id: 3, image: offer },
    { id: 4, image: offer },
  ];
  return (
    <>
      <SectionBanner title="Offers" />
      <div className="md:mt-[120px] mt-[60px]">
        <div className="container">
          <Title title="Most Availed Offers" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[21.34px] gap-y-[32.01px] mt-[40px]">
            {offers.map((offer) => (
              <div key={offer.id}>
                <Image
                  src={offer.image}
                  alt={`Offer ${offer.id}`}
                  className="w-full h-auto object-cover rounded"
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-5 mb-[26px]">
        <h1 className="text-[16px] md:text-[20px] font-medium text-heading font-kaiseiHarunoUmi">
          View All
        </h1>
      </div>
        </div>
      </div>
      <hr className=" border-[#BEBEBE] mb-[120px]" />
      <NewsLetter/>
    </>
  );
};

export default OffersPage;
