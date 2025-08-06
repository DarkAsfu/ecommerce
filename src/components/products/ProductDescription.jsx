"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDescription = ({ description, short_description, additional_description }) => {
  console.log("description-----------", description, "short_description-----------", short_description, "additional_description-----------", additional_description);
  return (
    <div className="">
      <Tabs defaultValue="description" className="w-full">
        <div className="">
        <TabsList className="flex gap-[93px] w-full bg-transparent border-b border-gray-200 rounded-none h-auto p-0 justify-start">
          <TabsTrigger
            value="description"
            className="data-[state=active]:bg-transparent data-[state=active]:text-primary  data-[state=active]:border-b-primary data-[state=active]:shadow-none text-heading hover:text-gray-900 rounded-none border-b-2 border-transparent pb-3 pt-3 max-w-max text-[26px] font-inter data-[state=active]:font-semibold"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="short_description"
            className="data-[state=active]:bg-transparent data-[state=active]:text-primary  data-[state=active]:border-b-primary data-[state=active]:shadow-none text-heading hover:text-gray-900 rounded-none border-b-2 border-transparent pb-3 pt-3 max-w-max text-[26px] font-inter data-[state=active]:font-semibold"
          >
            Short Description
          </TabsTrigger>
          <TabsTrigger
            value="additional_description"
            className="data-[state=active]:bg-transparent data-[state=active]:text-primary  data-[state=active]:border-b-primary data-[state=active]:shadow-none text-heading hover:text-gray-900 rounded-none border-b-2 border-transparent pb-3 pt-3 max-w-max text-[26px] font-inter data-[state=active]:font-semibold"
          >
            Additional Description
          </TabsTrigger>
        </TabsList>
        </div>
        <TabsContent
          value="description"
        className="mt-6 text-[20px] font-inter text-heading leading-relaxed space-y-4"
        >
          <div dangerouslySetInnerHTML={{
            __html: description,
          }}></div>
        </TabsContent>

        <TabsContent
          value="short_description"
          className="mt-6 text-[20px] font-inter text-heading leading-relaxed space-y-4"
        >
          <div dangerouslySetInnerHTML={{
            __html: short_description,
          }}></div>
        </TabsContent>

        <TabsContent
          value="additional_description"
          className="mt-6 text-[20px] font-inter text-heading leading-relaxed space-y-4"
        >
          <div dangerouslySetInnerHTML={{
            __html: additional_description,
          }}></div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDescription;
