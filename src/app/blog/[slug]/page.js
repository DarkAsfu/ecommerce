"use client"
import SectionBanner from "@/components/reusable/SectionBanner";
import Image from "next/image";
import blog1 from "../../../../public/blog1.png";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";
import NewsLetter from "@/components/home/NewsLetter";
import { useParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/get/blog-details`, {
          blog_id: slug,
        });
        
        // Handle the response structure - data is an array, get the first item
        if (res.data.status && res.data.data && res.data.data.length > 0) {
          setBlog(res.data.data[0]); // Get the first blog from the array
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError(err.response?.data?.message || "Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) {
    return (
      <div>
        <SectionBanner title="Blog" />
        <div className="container py-20">
          <div className="text-center">Loading blog...</div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div>
        <SectionBanner title="Blog" />
        <div className="container py-20">
          <div className="text-center text-red-500">
            {error || "Blog not found"}
          </div>
        </div>
      </div>
    );
  }

  // Format the date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div>
      <SectionBanner title="Blog" />
      <div className="md:mt-[120px] max-w-[983px] mx-auto">
        <Image
          src={blog?.image || blog1.src}
          alt={blog?.title || "Blog image"}
          width={983}
          height={741}
          className="w-full h-[741px] object-cover object-center"
        />
      </div>
      <div className="my-[84px]">
        <div className="container">
          {/* Blog Post Header */}
          <div className="mb-8">
            <p className="text-[28px] font-lato text-[#484848] mb-2">
              {formatDate(blog?.created_at)}
            </p>
            <h1 className="text-[44px] font-prata text-heading mb-6">
              {blog?.title}
            </h1>
            <div 
              className="text-[24px] font-lato text-[#484848]"
              dangerouslySetInnerHTML={{ __html: blog?.description }}
            />
          </div>

          {/* Comments Section */}
          <div className="mt-[90px] mx-[90px] grid grid-cols-1 md:grid-cols-2 gap-[78px]">
            {/* Existing Comment */}
            <div>
              <div className="flex items-start gap-6 mb-6">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Jonson Brown"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-normal font-lato text-[28px] text-heading">Jonson Brown</h4>
                  <p className="text-[18px] text-[#484848] font-lato">March 24, 2025</p>
                  <p className="text-[18px] text-[#484848] font-lato">
                    Skin texture ultricies nibh nem dolor maximum scelerisque
                    inte moliser faubs neque nec. Skin texture ultricies nibh
                    nem dolor maximum scelerisque inte moliser faubs neque nec
                  </p>
                  <Button
                    variant="link"
                    className="text-orange-500 p-0 h-auto mt-2"
                  >
                    Reply
                    <MessageSquare className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Leave a Reply Form */}
            <div className="bg-[#FAF6ED] p-6 shadow-sm">
              <h3 className="text-[28px] font-semibold text-heading font-prata mb-2">
                Leave a Reply
              </h3>
              <p className="text-[16px] text-[#484848] font-lato mb-4">
                Your email will not be published. Required fields are marked
              </p>
              <div className="space-y-6 font-inter">
                <div>
                  <label htmlFor="fullName" className="sr-only">
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    placeholder="Full Name"
                    className="w-full h-12 text-base bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full h-12 text-base bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="comment" className="sr-only">
                    Comment
                  </label>
                  <Textarea
                    id="comment"
                    placeholder="Comment"
                    className="w-full h-32 text-base resize-none bg-white"
                  />
                </div>
                <div className="flex justify-end">
                  <Button className="w-full bg-heading hover:bg-gray-800 text-white text-[16px] font-medium h-[40px] py-[10px] px-[30px] rounded-none max-w-max">
                    Send Comment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default BlogDetail;
