import Hero from "@/components/hero";
import Empower from "@/components/Empower";
import Image from "next/image";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import AvailableOffers from "@/components/home/AvailableOffers";
import OurReviews from "@/components/home/OurReviews";
import Support from "@/components/home/Support";
import PopularVideo from "@/components/home/PopularVideo";
import BlogPost from "@/components/home/BlogPost";
import NewsLetter from "@/components/home/NewsLetter";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Empower/>
      {/* <FeaturedProduct/> */}
      <FeaturedProduct/>
      <AvailableOffers/>
      <OurReviews/>
      <Support/>
      <PopularVideo/>
      <BlogPost/> 
      <NewsLetter/>
    </div>
  );
}
