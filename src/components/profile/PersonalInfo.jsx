import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const PersonalInfo = () => {
  return (
    <div className="bg-[#FAF6ED] px-[30px] py-7 font-inter">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-[47.54px]">
        <div>
          <label htmlFor="firstName" className="text-[22px] text-heading font-inter font-medium">
            First Name
          </label>
          <Input
            id="firstName"
            placeholder="Subject"
            className="w-full !text-[24.008px] mt-3 bg-white h-[75px] !placeholder:text-[24.008px]"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="text-[22px] text-heading font-inter font-medium">
            Last Name
          </label>
          <Input
            id="lastName"
            placeholder="Subject"
            className="w-full !text-[24.008px] mt-3 bg-white h-[75px] !placeholder:text-[24.008px]"
          />
        </div>
        <div>
          <label htmlFor="emailAddress" className="text-[22px] text-heading font-inter font-medium">
            Email Address
          </label>
          <Input
            id="emailAddress"
            type="email"
            placeholder="Subject"
            className="w-full !text-[24.008px] mt-3 bg-white h-[75px] !placeholder:text-[24.008px]"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="text-[22px] text-heading font-inter font-medium">
            Phone Number
          </label>
          <Input
            id="phoneNumber"
            type="tel"
            placeholder="Subject"
            className="w-full !text-[24.008px] mt-3 bg-white h-[75px] !placeholder:text-[24.008px]"
          />
        </div>
        <div>
          <label htmlFor="address" className="text-[22px] text-heading font-inter font-medium">
            Address
          </label>
          <Input
            id="address"
            placeholder="Subject"
            className="w-full !text-[24.008px] mt-3 bg-white h-[75px] !placeholder:text-[24.008px]"
          />
        </div>
        <div>
          <label htmlFor="townCity" className="text-[22px] text-heading font-inter font-medium">
            Phone Town/city
          </label>
          <Input
            id="townCity"
            placeholder="Subject"
            className="w-full !text-[24.008px] mt-3 bg-white h-[75px] !placeholder:text-[24.008px] "
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <Button className="flex-1 bg-black hover:bg-gray-800 text-white py-3 text-[22px] font-medium h-[75px]">
          Edit Account
        </Button>
        <Button
          variant="outline"
          className="flex-1 border-2 border-heading bg-white hover:bg-gray-50 text-heading py-3 text-[22px] font-medium h-[75px]"
        >
          Delete Account
        </Button>
      </div>
    </div>
  )
}
export default PersonalInfo
