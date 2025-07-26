import { ReusableModal } from "../reusable/ReusableModal";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const ForgotPassword = () => {
  return (
    <div>
      <DialogTitle>
        <h1 className="text-heading text-[40px] font-prata">Forgot Password</h1>
        <p className="text-heading text-[18px] font-lato mt-[11px] font-normal">
        Enter your registered email address. we’ll send you a code to reset your password.
        </p>
      </DialogTitle>
      <div className="grid gap-4 mt-8">
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
      </div>
      <Button className="w-full h-[55px] text-[white] font-lato font-normal text-[21.33px] uppercase rounded-none mt-8">
        Send Link
      </Button>
      
    </div>
  );
};

export default ForgotPassword;
