import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const Register = ({ onOpenLogin }) => {
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
          <Label className="text-secondary text-[18px] font-lato font-normal">
            Name
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Alexa Johnson"
            className="h-[45px] rounded-none"
          />
        </div>

        <div className="grid gap-3">
          <Label className="text-secondary text-[18px] font-lato font-normal">
            Email Address
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="alexa.johnson@example.com"
            className="h-[45px] rounded-none"
          />
        </div>

        <div className="grid gap-3">
          <Label className="text-secondary text-[18px] font-lato font-normal">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            className="h-[45px] rounded-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 mt-3">
        <Checkbox className="w-5 h-5" id="terms" />
        <Label htmlFor="terms" className="text-heading font-lato text-[20px]">
          I Agree The Terms & Conditions
        </Label>
      </div>

      <Button className="w-full cursor-pointer h-[55px] text-white font-lato text-[21.33px] uppercase rounded-none mt-8">
        Register
      </Button>

      <button
        type="button"
        onClick={onOpenLogin}
        className="w-full cursor-pointer h-[55px] text-primary bg-white border border-primary font-lato text-[21.33px] uppercase rounded-none mt-[21.33px] hover:text-white hover:bg-heading hover:border-heading"
      >
        Sign In
      </button>
    </div>
  );
};

export default Register;
