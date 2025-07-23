import BlogPost from "@/components/home/BlogPost";
import SectionBanner from "@/components/reusable/SectionBanner";
import blog1 from "../../../public/blog1.png";
import blog2 from "../../../public/blog2.png";
import NewsLetter from "@/components/home/NewsLetter";
const Blog = () => {
  const blogPost = [
    {
      id: 1,
      title: "Radiant Skincare, Naturally Perfected!",
      description:
        "Elevate your beauty routine with products crafted to enhance your natural glow.",
      image: blog1,
    },
    {
      id: 2,
      title: "Pure Beauty, Perfectly Crafted!",
      description:
        "Discover the essence of self-care with our luxurious beauty products.",
      image: blog2,
    },
    {
      id: 3,
      title: "Radiant Skincare, Naturally Perfected!",
      description:
        "Elevate your beauty routine with products crafted to enhance your natural glow.",
      image: blog1,
    },
    {
      id: 4,
      title: "Pure Beauty, Perfectly Crafted!",
      description:
        "Discover the essence of self-care with our luxurious beauty products.",
      image: blog2,
    },
  ];
  return (
    <div className="">
      <SectionBanner title="Blog" />
      <div className="mt-[120px]">
        <BlogPost blogPost={blogPost} />
        <div className="mt-[160px]">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Blog;
