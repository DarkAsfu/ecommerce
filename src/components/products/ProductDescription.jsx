"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDescription = () => {
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
            value="review"
            className="data-[state=active]:bg-transparent data-[state=active]:text-primary  data-[state=active]:border-b-primary data-[state=active]:shadow-none text-heading hover:text-gray-900 rounded-none border-b-2 border-transparent pb-3 pt-3 max-w-max text-[26px] font-inter data-[state=active]:font-semibold"
          >
            Review
          </TabsTrigger>
          <TabsTrigger
            value="specifications"
            className="data-[state=active]:bg-transparent data-[state=active]:text-primary  data-[state=active]:border-b-primary data-[state=active]:shadow-none text-heading hover:text-gray-900 rounded-none border-b-2 border-transparent pb-3 pt-3 max-w-max text-[26px] font-inter data-[state=active]:font-semibold"
          >
            Specifications
          </TabsTrigger>
        </TabsList>
        </div>
        <TabsContent
          value="description"
        className="mt-6 text-[20px] font-inter text-heading leading-relaxed space-y-4"
        >
          <p>
            We've created a full-stack structure for our working workflow
            processes, were from the family the century initial at the made,
            have spare to negatives. But the structure workflow the family the
            century rather, initial at the made, have spare to negatives. We've
            created a full-stack structure for our working workflow processes,
            were from the family the century initial at the made, have spare to
            negatives.
          </p>
          <p>
            We've created a full-stack structure for our working workflow
            processes, were from the family the century initial at the made,
            have spare to negatives. But the structure workflow the family the
            century rather, initial at the made, have spare to negatives. We've
            created a full-stack structure for our working workflow processes,
            were from the family the century initial at the made, have spare to
            negatives. But the structure was from the family the century initial
            at the made, have spare to negatives.
          </p>
          <p>
            We've created a full-stack structure for our working workflow
            processes, were from the family the century initial at the made,
            have spare to negatives. But the structure workflow the family the
            century rather, initial at the made, have spare to negatives. We've
            created a full-stack structure for our working workflow processes,
            were from the family the century initial at the made, have spare to
            negatives.
          </p>
          <p>
            We've created a full-stack structure for our working workflow
            processes, were from the family the century initial at the made,
            have spare to negatives. But the structure workflow the family the
            century rather, initial at the made, have spare to negatives. We've
            created a full-stack structure for our working workflow processes,
            were from the family the century initial at the made, have spare to
            negatives. But the structure was from the family the
          </p>
        </TabsContent>

        <TabsContent
          value="review"
          className="mt-6 text-[20px] font-inter text-heading leading-relaxed space-y-4"
        >
          <p>
            We've created a full-stack structure for our working workflow
            processes, were from the family the century initial at the made,
            have spare to negatives. But the structure workflow the family the
            century rather, initial at the made, have spare to negatives. We've
            created a full-stack structure for our working workflow processes,
            were from the family the century initial at the made, have spare to
            negatives.
          </p>
          <p>
            We've created a full-stack structure for our working workflow
            processes, were from the family the century initial at the made,
            have spare to negatives. But the structure workflow the family the
            century rather, initial at the made, have spare to negatives. We've
            created a full-stack structure for our working workflow processes,
            were from the family the century initial at the made, have spare to
            negatives. But the structure was from the family the century initial
            at the made, have spare to negatives.
          </p>
          <p>
            We've created a full-stack structure for our working workflow
            processes, were from the family the century initial at the made,
            have spare to negatives. But the structure workflow the family the
            century rather, initial at the made, have spare to negatives. We've
            created a full-stack structure for our working workflow processes,
            were from the family the century initial at the made, have spare to
            negatives.
          </p>
          <p>
            We've created a full-stack structure for our working workflow
            processes, were from the family the century initial at the made,
            have spare to negatives. But the structure workflow the family the
            century rather, initial at the made, have spare to negatives. We've
            created a full-stack structure for our working workflow processes,
            were from the family the century initial at the made, have spare to
            negatives. But the structure was from the family the
          </p>
        </TabsContent>

        <TabsContent
          value="specifications"
          className="mt-6 text-[20px] font-inter text-heading leading-relaxed space-y-4"
        >
          <p>
            We've created a full-stack structure for our working workflow
            processes, were from the family the century initial at the made,
            have spare to negatives. But the structure workflow the family the
            century rather, initial at the made, have spare to negatives. We've
            created a full-stack structure for our working workflow processes,
            were from the family the century initial at the made, have spare to
            negatives.
          </p>
          <p>
            We've created a full-stack structure for our working workflow
            processes, were from the family the century initial at the made,
            have spare to negatives. But the structure workflow the family the
            century rather, initial at the made, have spare to negatives. We've
            created a full-stack structure for our working workflow processes,
            were from the family the century initial at the made, have spare to
            negatives. But the structure was from the family the century initial
            at the made, have spare to negatives.
          </p>
          <p>
            We've created a full-stack structure for our working workflow
            processes, were from the family the century initial at the made,
            have spare to negatives. But the structure workflow the family the
            century rather, initial at the made, have spare to negatives. We've
            created a full-stack structure for our working workflow processes,
            were from the family the century initial at the made, have spare to
            negatives.
          </p>
         
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDescription;
