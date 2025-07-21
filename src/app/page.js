import Hero from "@/components/hero";
import Empower from "@/components/Empower";
import Image from "next/image";
import FeaturedProduct from "@/components/home/FeaturedProduct";

export default function Home() {
  return (
    <div className="">
      {/* <Hero/> */}
      <Empower/>
      {/* <FeaturedProduct/> */}
      <FeaturedProduct/>
    </div>
  );
}
