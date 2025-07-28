"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { DialogTitle } from "../ui/dialog"
import { Label } from "../ui/label"
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp"
import { toast } from "sonner"

const OtpVerify = () => {
  const [otp, setOtp] = useState("")

  const handleVerify = () => {
    if (otp.length !== 4) {
      toast.error("Please enter a complete 4-digit OTP.")
      return
    }
  }

  return (
    <div>
      <DialogTitle>
        <p className="text-heading text-[40px] font-prata">Verify OTP</p>
        <p className="text-heading text-[18px] font-lato mt-[11px] font-normal">
          Enter the 4-digit code sent to your email address.
        </p>
      </DialogTitle>
      <div className="grid gap-4 mt-8">
        <div className="grid gap-3">
          <Label className="text-secondary leading-[25.2px] text-[18px] font-lato font-normal">OTP</Label>
          <InputOTP maxLength={4} value={otp} onChange={(value) => setOtp(value)}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>
      <Button
        onClick={handleVerify}
        className="w-full h-[55px] text-[white] font-lato font-normal text-[21.33px] uppercase rounded-none mt-8"
      >
        Verify OTP
      </Button>
    </div>
  )
}

export default OtpVerify
