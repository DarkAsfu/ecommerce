import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  return (
    <div className="mt-10">
      <h1 className="text-heading font-inter font-semibold text-[30px]">
        Get In Touch with Enquires & Offers
      </h1>
      <p className="text-secondary font-inter font-normal text-[16px] mt-4">
        Do You Need Assistance Placing you Order Or Making A Purchase?
      </p>
      <p className="text-secondary font-inter font-normal text-[16px] mb-10">
        Have Questions before Making A Purchase?
      </p>
      <div className="flex flex-col gap-5 max-w-[520px] font-inter text-[16px] text-secondary">
        <Input
          type="text"
          className={"h-[45px] rounded-none"}
          placeholder="Full name"
        />
        <Input
          type="text"
          className={"h-[45px] rounded-none"}
          placeholder="Subject"
        />
        <Input
          type="email"
          className={"h-[45px] rounded-none"}
          placeholder="Email Address"
        />
        <Textarea
          className={"h-[128px] rounded-none"}
          placeholder="Enter your message"
        />
        <div className="flex justify-end">
          <Button
            className={
              "bg-heading text-white font-inter font-medium text-[16px]  rounded-none max-w-max"
            }
          >
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
