"use client";
import useFetch from "@/hooks/use-fetch";
import Title from "../reusable/Title";
import Image from "next/image";
import Link from "next/link";

const BlogPost = () => {
  const { data: blogPosts, loading, error } = useFetch("/get-all-blogs");
  console.log(blogPosts);
  return (
    <>
      <div className="container mx-auto">
        <Title title="Blog Post" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {blogPosts?.data?.map((post, index) => (
            <Link href={`/blog/${post.id}`} key={index} className="">
              <Image
                className="w-full h-[648px] object-cover"
                src={post.image}
                alt={post.title}
                width={1000}
                height={1000}
                quality={100}
              />
              <h2 className="text-prata text-[32px] md:text-[40px] font-normal text-heading tracking-[-0.8px] leading-[52px]">
                {post.title}
              </h2>
              {/* <p className="text-heading text-[18px] md:text-[21.33px] font-normal leading-[32px] font-lato">
                {post.description}
              </p> */}
              <div
                className="my-4 text-[#020b5b] font-inter font-[300] text-[1rem]"
                dangerouslySetInnerHTML={{
                  __html: post.description,
                }}
              />
            </Link>
          ))}
        </div>
        {blogPosts?.data?.length > 2 && (
          <div className="flex justify-center items-center mt-5 mb-[26px]">
            <a
              href="/blog"
              className="text-[16px] md:text-[20px] font-medium text-heading font-kaiseiHarunoUmi cursor-pointer hover:underline"
            >
              View All
            </a>
          </div>
        )}
      </div>
      {blogPosts?.data?.length > 2 && (
        <hr className="border-[#BEBEBE] mb-[160px]" />
      )}
    </>
  );
};

export default BlogPost;
