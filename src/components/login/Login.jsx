import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const Login = ({ onOpenRegister, onOpenForgot }) => {
  return (
    <div>
      <DialogTitle>
        <h1 className="text-heading text-[40px] font-prata">Welcome</h1>
        <p className="text-heading text-[18px] font-lato mt-[11px] font-normal">
          Please login here
        </p>
      </DialogTitle>

      <div className="grid gap-4 mt-8">
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

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-3">
          <Checkbox className="w-5 h-5" id="remember" />
          <Label htmlFor="remember" className="text-heading font-lato text-[20px]">
            Remember me
          </Label>
        </div>
        <button
          type="button"
          onClick={onOpenForgot}
          className="text-primary text-[18px] font-lato font-normal hover:underline"
        >
          Forgot Password
        </button>
      </div>

      <Button className="w-full h-[55px] text-white text-[21.33px] uppercase rounded-none mt-8">
        Login
      </Button>

      <button
        type="button"
        onClick={onOpenRegister}
        className="w-full h-[55px] text-primary bg-white border border-primary text-[21.33px] uppercase rounded-none mt-6 hover:text-white hover:bg-heading hover:border-heading"
      >
        Register
      </button>
    </div>
  );
};

export default Login;
