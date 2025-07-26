"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

const ChangePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showEmailPassword, setShowEmailPassword] = useState(false)
  const [showAddressPassword, setShowAddressPassword] = useState(false)

  return (
    <div className="p-6 md:p-8 bg-[#FAF6ED] rounded-lg shadow-sm">
      <div className="space-y-6">
        {/* Current Password */}
        <div>
          <label htmlFor="currentPassword" className="block !text-[22px] font-medium text-gray-800 mb-1">
            Current Password
          </label>
          <div className="relative">
            <Input
              id="currentPassword"
              type={showCurrentPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full  !text-[22px] pr-10 bg-white h-[75px] rounded-none"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-500 hover:bg-transparent"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            >
              {showCurrentPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Email Address (Password-masked) */}
        <div>
          <label htmlFor="emailAddress" className="block !text-[22px] font-medium text-gray-800 mb-1">
            Email Address
          </label>
          <div className="relative">
            <Input
              id="emailAddress"
              type={showEmailPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full  !text-[22px] pr-10 bg-white h-[75px] rounded-none"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-500 hover:bg-transparent"
              onClick={() => setShowEmailPassword(!showEmailPassword)}
            >
              {showEmailPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Address (Password-masked) */}
        <div>
          <label htmlFor="address" className="block !text-[22px] font-medium text-gray-800 mb-1">
            Address
          </label>
          <div className="relative">
            <Input
              id="address"
              type={showAddressPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full  !text-[22px] pr-10 bg-white h-[75px] rounded-none"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-500 hover:bg-transparent"
              onClick={() => setShowAddressPassword(!showAddressPassword)}
            >
              {showAddressPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <Button
          variant="outline"
          className="flex-1 border-[1.5px] border-heading bg-transparent text-heading py-3 text-[22px] font-medium h-[75px]"
        >
          Cancel
        </Button>
        <Button className="flex-1 bg-black hover:bg-gray-800 text-white py-3 text-[22px] font-medium h-[75px]">Save</Button>
      </div>
    </div>
  )
}

export default ChangePassword;
