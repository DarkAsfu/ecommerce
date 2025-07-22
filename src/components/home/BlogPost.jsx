import Title from "../reusable/Title";
import Image from "next/image";
import blog1 from "../../../public/blog1.png";
import blog2 from "../../../public/blog2.png";
const BlogPost = () =>{
    const blogPost = [
        {
            id: 1,
            title: "Radiant Skincare, Naturally Perfected!",
            description: "Elevate your beauty routine with products crafted to enhance your natural glow.",
            image: blog1,
        },
        {
            id: 2,
            title: "Pure Beauty, Perfectly Crafted!",
            description: "Discover the essence of self-care with our luxurious beauty products.",
            image: blog2,
        }
    ]
    return(
        <div className="container mx-auto">
            <Title title="Blog Post" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mb-[120px]">
                {
                    blogPost.map((post) => (
                        <div key={post.id} className="">
                            <Image className="w-full h-[648px] object-cover" src={post.image} alt={post.title} />
                            <h2 className="text-prata text-[32px] md:text-[40px] font-normal text-heading tracking-[-0.8px] leading-[52px]">{post.title  }</h2>
                            <p className="text-heading text-[18px] md:text-[21.33px] font-normal leading-[32px] font-lato">{post.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BlogPost;