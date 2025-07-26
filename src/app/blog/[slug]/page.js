import SectionBanner from "@/components/reusable/SectionBanner";
import Image from "next/image";
import blog1 from "../../../../public/blog1.png";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";
import NewsLetter from "@/components/home/NewsLetter";

const BlogDetail = () => {
  return (
    <div>
      <SectionBanner title="Blog" />
      <div className="md:mt-[120px] max-w-[983px] mx-auto">
        <Image
          src={blog1}
          alt="blog"
          className="w-full h-[741px] object-cover object-center"
        />
      </div>
      <div className="my-[84px]">
        <div className="container">
          {/* Blog Post Header */}
          <div className="mb-8">
            <p className="text-[28px] font-lato text-[#484848] mb-2">
              November 27, 2022 | Skin Care
            </p>
            <h1 className="text-[44px]  font-prata text-heading mb-6">
              Radiant Skincare, Naturally Perfected!
            </h1>
            <p className="text-[24px] font-lato text-[#484848]">
              Elevate your beauty routine with products crafted to enhance your
              natural glow. Elevate your beauty routine with products crafted to
              enhance your natural glow. Elevate your beauty routine with
              products crafted to enhance your natural glow. Elevate your beauty
              routine with products crafted to enhance your natural glow.
              Elevate your beauty routine with products crafted to enhance your
              natural glow. Elevate your beauty routine with products
            </p>
            <br />
            <p className="text-[24px] font-lato text-[#484848]">
              Elevate your beauty routine with products crafted to enhance your
              natural glow. Elevate your beauty routine with products crafted to
              enhance your natural glow. Elevate your beauty routine with
              products crafted to enhance your natural
            </p>
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
              <h3 className="text-[28px]  font-semibold text-heading font-prata mb-2">
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
