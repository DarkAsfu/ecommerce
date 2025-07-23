import { ReusableModal } from "../reusable/ReusableModal";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const Register = () => {
  return (
    <div>
      <DialogTitle>
        <h1 className="text-heading text-[40px] font-prata">Create New Account</h1>
        <p className="text-heading text-[18px] font-lato mt-[11px] font-normal">
        Please Enter Details
        </p>
      </DialogTitle>
      <div className="grid gap-4 mt-8">
      <div className="grid gap-3">
          <Label className="text-secondary leading-[25.2px] text-[18px] font-lato font-normal">
            Name
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Alexa Johnson"
            className={"h-[45px] rounded-none"}
          />
        </div>
        <div className="grid gap-3">
          <Label className="text-secondary leading-[25.2px] text-[18px] font-lato font-normal">
            Email Address
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="alexa.johnson@example.com"
            className={"h-[45px] rounded-none"}
          />
        </div>
        <div className="grid gap-3">
          <Label className="text-secondary leading-[25.2px] text-[18px] font-lato font-normal">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            className={"h-[45px] rounded-none"}
          />
        </div>
      </div>
      <div className="flex items-center justify-between mt-[10.67px]">
        <div className="flex items-center gap-3 ">
          <Checkbox className="w-5 h-5" id="terms" />
          <Label htmlFor="terms" className="text-heading font-lato font-normal text-[20px] leading-[32px]">I Agree The Terms & Conditions</Label>
        </div>
      </div>
      <Button className="w-full h-[55px] text-[white] font-lato font-normal text-[21.33px] uppercase rounded-none mt-8">
        Register
      </Button>
      <Button className="w-full h-[55px] text-primary bg-white border border-primary font-lato font-normal text-[21.33px] uppercase rounded-none mt-[21.33px] hover:text-white hover:bg-heading hover:border-heading">
        Sign In
      </Button>
    </div>
  );
};

export default Register;
