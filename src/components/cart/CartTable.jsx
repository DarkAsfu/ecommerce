"use client"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useState } from "react"
import p1 from "../../../public/p1.png"

const CartTable = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product Name",
      code: "Code:rd85fr264",
      price: 120.0,
      weight: "120mg",
      quantity: 1,
      image: p1,
    },
    {
      id: 2,
      name: "Product Name",
      code: "Code:rd85fr264",
      price: 120.0,
      weight: "120mg",
      quantity: 1,
      image: p1,
    },
    {
      id: 3,
      name: "Product Name",
      code: "Code:rd85fr264",
      price: 120.0,
      weight: "120mg",
      quantity: 1,
      image: p1,
    },
    {
      id: 4,
      name: "Product Name",
      code: "Code:rd85fr264",
      price: 120.0,
      weight: "120mg",
      quantity: 1,
      image: p1,
    },
  ])

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item)),
    )
  }

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  return (
    <div>
      <div className="container">
        <div
          style={{
            background: "var(--Gradient, linear-gradient(92deg, #F1FAFE 0%, #F8DAB0 100%))",
          }}
          className="p-3 md:p-[30px] mt-[120px]"
        >
          <div className="bg-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 font-inter text-heading text-[20px]">
                    <th className="text-center py-4 pl-[21px]">Image</th>
                    <th className="text-left py-4">Product Name</th>
                    <th className="text-left py-4">Price</th>
                    <th className="text-center py-4">Wet</th>
                    <th className="text-center py-4">Quantity</th>
                    <th className="text-center py-4">Total</th>
                    <th className="text-center py-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100 font-inter text-heading text-[20px]">
                      <td className="py-4 pl-[21px]">
                        <img
                          src={item.image.src || "/placeholder.svg"}
                          alt={item.name}
                          className="w-[103px] h-[100px] object-cover rounded border bg-gray-400"
                        />
                      </td>
                      <td className="py-4 text-left">
                        <div>
                          <div className="font-medium text-heading text-[20px] leading-[30px]">{item.name}</div>
                          <div className="text-[16px] text-[#A0A6A8]">{item.code}</div>
                        </div>
                      </td>
                      <td className="py-4 text-left text-heading text-[20px] leading-[30px]">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="py-4 text-center text-heading text-[20px] leading-[30px]">{item.weight}</td>
                      <td className="py-4 text-center">
                        <div className="flex items-center gap-4 justify-center">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="bg-[#E5E5E5] h-[50px] w-[50px] rounded-[8px]"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="h-[13px] w-[13px]" />
                          </Button>
                          <span className="flex items-center justify-center h-[50px] w-[50px] text-center text-[20px] font-inter font-medium bg-[#fff] rounded-[8px] border border-[#E5E5E5]">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="bg-[#E5E5E5] h-[50px] w-[50px] rounded-[8px]"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-[13px] w-[13px]" />
                          </Button>
                        </div>
                      </td>
                      <td className="py-4 text-center text-heading font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="py-4 text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          className=" p-0 text-gray-500 hover:text-red-500 hover:bg-red-50"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 size={24} className="h-10 w-10" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="mt-6 max-w-[700px] ml-auto">
          {" "}
          {/* Added max-w-sm and ml-auto for positioning */}
          <div
            style={{
              background: "var(--Gradient, linear-gradient(92deg, #F1FAFE 0%, #F8DAB0 100%))",
            }}
            className="p-3 md:p-[30px]"
          >
            <div className="bg-white p-6 font-inter rounded">
              <h2 className="text-[26px]  font-medium text-heading mb-6 text-center">Order Summary</h2>

              <div className="space-y-4 mb-6 text-[18px]">
                <div className="flex justify-between items-center">
                  <span className="text-heading">Price</span>
                  <span className="font-medium">KD 120.34</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-head">Delivery Charge</span>
                  <span className="font-medium">KD 120.34</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-head">Subtotal</span>
                  <span className="font-medium">KD 120.34</span>
                </div>

                <hr className="border-gray-200" />

                <div className="flex justify-between items-center text-lg">
                  <span className="font-medium">Total</span>
                  <span className="font-bold">KD 120.34</span>
                </div>
              </div>

              <Button className="w-full bg-black hover:bg-gray-800 text-white py-[25px] text-lg font-medium">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartTable
