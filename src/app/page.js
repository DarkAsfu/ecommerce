import Hero from "@/components/hero";
import Empower from "@/components/Empower";
import Image from "next/image";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import AvailableOffers from "@/components/home/AvailableOffers";

export default function Home() {
  return (
    <div className="">
      {/* <Hero/> */}
      <Empower/>
      {/* <FeaturedProduct/> */}
      <FeaturedProduct/>
      <AvailableOffers/>
    </div>
  );
}
