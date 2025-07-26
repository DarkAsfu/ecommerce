"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight } from "lucide-react";
import SectionBanner from "@/components/reusable/SectionBanner";

const CheckoutForm = () => {
  return (
    <div>
      <SectionBanner title="Checkout" />
      <div className="container mx-auto p-4 md:p-8 font-inter">
        <div className="flex flex-col md:flex-row gap-10 my-[120px] justify-between">
          {/* Shipping Address Section */}
          <div
            style={{
              background:
                "var(--Gradient, linear-gradient(92deg, #F1FAFE 0%, #F8DAB0 100%))",
            }}
            className="p-3 md:p-[30px] rounded-lg max-h-max md:w-[899px]"
          >
            <div className="bg-white p-6 rounded-lg space-y-[34px]">
              <h2 className="text-heading font-inter text-[22px] font-semibold mb-5">
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-heading mb-1"
                  >
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    placeholder="Subject"
                    className="w-full h-[50px] border border-[#E5E5E5] rounded-[8px]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-heading mb-1"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Subject"
                    className="w-full h-[50px] border border-[#E5E5E5] rounded-[8px]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="emailAddress"
                    className="block text-sm font-medium text-heading mb-1"
                  >
                    Email Address
                  </label>
                  <Input
                    id="emailAddress"
                    type="email"
                    placeholder="Subject"
                    className="w-full h-[50px] border border-[#E5E5E5] rounded-[8px]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-heading mb-1"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="Subject"
                    className="w-full h-[50px] border border-[#E5E5E5] rounded-[8px]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-heading mb-1"
                  >
                    Address
                  </label>
                  <Input
                    id="address"
                    placeholder="Subject"
                    className="w-full h-[50px] border border-[#E5E5E5] rounded-[8px]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="townCity"
                    className="block text-sm font-medium text-heading mb-1"
                  >
                    Town/City
                  </label>
                  <Input
                    id="townCity"
                    placeholder="Subject"
                    className="w-full h-[50px] border border-[#E5E5E5] rounded-[8px]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-heading mb-1"
                  >
                    State
                  </label>
                  <Input
                    id="state"
                    placeholder="Subject"
                    className="w-full h-[50px] border border-[#E5E5E5] rounded-[8px]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-medium text-heading mb-1"
                  >
                    Zip Code
                  </label>
                  <Input
                    id="zipCode"
                    placeholder="Subject"
                    className="w-full h-[50px] border border-[#E5E5E5] rounded-[8px]"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-4 mb-[34px]">
                <Checkbox id="saveDetails" />
                <label
                  htmlFor="saveDetails"
                  className="text-[18px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-secondary"
                >
                  Save your details for future order purpose
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary & Payment Section */}
          <div
            style={{
              background:
                "var(--Gradient, linear-gradient(92deg, #F1FAFE 0%, #F8DAB0 100%))",
            }}
            className="p-3 md:p-[30px] rounded-lg md:w-[681px]"
          >
            <div className="bg-white p-6 rounded-lg space-y-6">
              <h2 className="text-heading font-inter text-[22px] font-semibold mb-6 text-center">
                Order Summary
              </h2>

              <hr className="border-[#DBDBDB]" />
              <div className="space-y-4 mb-6 text-[18px] text-heading font-inter">
                <div className="flex justify-between items-center">
                  <span className="">Price</span>
                  <span className="">KD 120.34</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="">Delivery Change</span>
                  <span className="">KD 120.34</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="">Subtotal</span>
                  <span className="">KD 120.34</span>
                </div>
                <hr className="border-[#DBDBDB]" />
                <div className="flex justify-between items-center text-lg">
                  <span className="">Total</span>
                  <span className="font-bold">KD 120.34</span>
                </div>
              </div>

              <h2 className="text-xl font-medium text-black mb-4">Payment</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between border border-gray-300 rounded-md p-3">
                  <span className="text-heading">Credit Card</span>
                  <div className="flex items-center gap-2">
                    {/* Placeholder for Mastercard icon */}
                    {/* <img
                      src="/placeholder.svg?height=20&width=30"
                      alt="Mastercard"
                      className="h-5 w-auto"
                    /> */}
                    <ChevronRight className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="cardNumber" className="sr-only">
                    Card Number
                  </label>
                  <Input
                    id="cardNumber"
                    placeholder="Card Number"
                    className="w-full h-[50px] border border-[#E5E5E5] rounded-[8px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expirationDate" className="sr-only">
                      Expiration Date
                    </label>
                    <Input
                      id="expirationDate"
                      placeholder="Expiration Date"
                      className="w-full h-[50px] border border-[#E5E5E5] rounded-[8px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="securityCode" className="sr-only">
                      Security Code
                    </label>
                    <Input
                      id="securityCode"
                      placeholder="Security Code"
                      className="w-full h-[50px] border border-[#E5E5E5] rounded-[8px]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="cardholderName" className="sr-only">
                    Cardholder Name
                  </label>
                  <Input
                    id="cardholderName"
                    placeholder="Cardholder Name"
                    className="w-full h-[50px] border border-[#E5E5E5] rounded-[8px]"
                  />
                </div>
              </div>

              <Button className="w-full bg-black hover:bg-gray-800 text-white py-[25px] text-lg font-medium mt-6">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
